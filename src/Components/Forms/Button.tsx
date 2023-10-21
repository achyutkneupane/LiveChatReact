import type {LayoutProps} from "@chatTypes/general.ts";

interface ButtonProps extends LayoutProps {
    className?: string;
    onClick?: () => void;
}

const Button = ((props : ButtonProps) => {
    return (
        <button type="submit" className="bg-primary bg-opacity-95 hover:bg-opacity-100 text-white rounded-lg p-2 w-full" onClick={props.onClick}>
            {props.children}
        </button>
    );
});

export default Button;