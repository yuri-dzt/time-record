interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button";
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className="w-full p-3 bg-blue text-white border-none rounded-md cursor-pointer text-base font-medium outline-none focus:border-none resize-none"
    >
      {props.text}
    </button>
  );
};

export { Button };
