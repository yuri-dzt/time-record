import "./styles/input.css";

interface InputProps {
  label: string;
  type: string;
}

const Input = (props: InputProps) => {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-1">
      <label className="font-medium text-xs text-darkGray pl-2">
        {props.label}
      </label>
      <input
        className="px-3 w-full border border-gray rounded-md bg-white text-darkGray h-10 text-xs placeholder:text-xs placeholder:text-gray focus:border-blue focus:border focus:outline-none"
        type={props.type}
      />
    </div>
  );
};

export { Input };
