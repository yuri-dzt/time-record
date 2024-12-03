interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className="w-full p-3 bg-blue text-white border-none rounded-md cursor-pointer text-base font-medium outline-none focus:border-none transition-all hover:scale-105"
    >
      {props.text}
    </button>
  );
};

export { Button };
