import './index.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactChild;
}
interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  children?: React.ReactChild;
}

export default function Input(props: InputProps) {
  const { children, ...rest } = props;
  const className = 'input ' + props.className;

  return <input {...rest} className={className} />;
}

Input.TextArea = function TextArea(props: TextAreaProps) {
  const { children, ...rest } = props;
  const className = 'textarea ' + props.className;
  return <textarea {...rest} className={className} />;
};
