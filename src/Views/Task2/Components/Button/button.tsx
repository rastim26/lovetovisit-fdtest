import './button.css'

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ text, className, onClick, disabled }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;