/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0;
  }
  add(a){
    this.result += a;
  }
  subtract(a){
    this.result -= a;
  }
  multiply(a){
    this.result *= a;
  }
  divide(a){
    if(a == 0){
      throw new Error("Divide by 0");
    }
    this.result /= a;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  isValidParenthesis(str){
    let stack = [];
    for(let char of str){
      if(char === '('){
        stack.push(char);
      }
      else if(char === ')'){
        if(stack.length > 0 && stack[stack.length-1] == '('){
          stack.pop();
        } else{
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  calculate(str){
    const cleanedStr = str.replace(/\s+/g, ' ').trim();

    if(/[^0-9+\-*/() .]/.test(cleanedStr)){
      throw new Error("Input contains invalid characters")
    }

    // check for valid parenthesis 
    if(!this.isValidParenthesis(cleanedStr)){
      throw new Error("Input has invalid parenthesis");
    }
    const postfix = this.infixToPostfix(cleanedStr);

    let stack = []

    for(let token of postfix){
      // token is either an operator or a number (maybe multi-digit)
      if(this.isOperator(token) && stack.length >= 2){
        // pop two tokens from stack , perform the operation and push the result
        let a = stack[stack.length-1];
        stack.pop();
        let b = stack[stack.length-1];
        stack.pop();

        // a & b are float
        if(token == '+') stack.push(b+a);
        if(token == '-') stack.push(b-a);
        if(token == '*') stack.push(b*a);
        if(token == '/'){
          if(a == 0) throw new Error("Division by 0");
          stack.push(b/a);
        }
      }
      else{
        // token is a number in string format. Convert it into float
        // push it into stack
        stack.push(parseFloat(token));
      }
    }
    // the top of the stack is the result 
    this.result = stack[0];
    return this.result;
  }
  isOperator(char){
    if(char === '+' || char === '-' || char === '*' || char === '/'){
      return true;
    }
    return false;
  }
  precedence(char){
    if(char === '^') return 3;
    if(char === '/' || char === '*') return 2;
    return 1;
  }
  infixToPostfix(str){
    let output = []
    let stack = []

    let i = 0;
    while(i < str.length){

      // skip whitespace
      if(str[i] == ' '){
        i++;
        continue;
      }

      // Handle numbers including decimals
      if(!isNaN(parseInt(str[i])) || str[i] === '.'){
        let num = '';
        // Handle decimal point
        if(str[i] === '.'){
          num = '0.';
          i++;
        }
        // Parse rest of the number
        while(i < str.length && (!isNaN(parseInt(str[i])) 
        || str[i] === '.' && !num.includes('.'))){
          // while we don't find a whitespace concatenated the numbers
          num += str[i] // results in a string concatenation 
          i++;
        }
        // finally push the number to output
        output.push(num)
        continue;
      }

      // Handle operators
      if(this.isOperator(str[i])){
        while(
          stack.length > 0 && 
          this.isOperator(stack[stack.length-1]) && 
          this.precedence(stack[stack.length-1]) >= this.precedence(str[i])
        ){
          output.push(stack.pop());
        }
        stack.push(str[i]);
      }
      // Handle open parenthesis
      else if(str[i] === '('){
        stack.push(str[i]);
      }
      // Handle close parenthesis
      else if(str[i] === ')'){
        while(stack.length > 0 && stack[stack.length-1] !== '('){
          output.push(stack.pop());
        }
        // Pop the open parenthesis
        if(stack.length > 0) {
          stack.pop();
        }
      }
      i++;
    }
    // all characters are parsed, now pop the remaining operators from stack and push to output
    while(stack.length){
      output.push(stack.pop());
    }

    // return the output containing postfix expression 
    return output;
  }

}

module.exports = Calculator;
