import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    type: string,
    name: string,
    label?: string
}

const PHInput = ({ name, label }: TInputProps) => {
    return <div style={{ marginBottom: "20px" }}>
        {label ? label : null}
        <Controller
            name={name}
            render={({ field }) => (
                <Input {...field} type="text" id={name} />
            )}
        />

    </div>
};

export default PHInput;