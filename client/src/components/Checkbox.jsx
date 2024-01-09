import { TfiCheckBox } from "react-icons/tfi";

const Checkbox = ({ label }) => {
    return (
        <div className="flex gap-3 items-center text-[14px] min-w-fit font-medium w-full">
            <TfiCheckBox className="mb-2 text-[18px]" />
            <p className="border-b-2 pb-2 w-full">{label}</p>
        </div>
    );
};

export default Checkbox;