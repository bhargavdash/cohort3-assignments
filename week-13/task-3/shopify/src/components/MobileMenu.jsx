import { MobileMenuItem } from "./MobileMenuItem";

export const MobileMenu = () => {
    return <div>
        <div className="border-b-2 border-gray-800 ">
            <MobileMenuItem title={"Solutions"} hasDropdown={true} />
            <MobileMenuItem title={"Pricing"} hasDropdown={false} />
            <MobileMenuItem title={"Resources"} hasDropdown={true} />
            <MobileMenuItem title={"Enterprise"} hasDropdown={false} />
            <MobileMenuItem title={"What's new"} hasDropdown={true} />
        </div>
    </div>
}
