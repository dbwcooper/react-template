import './index.css';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactChild;
}

export default function Button(props: IProps) {
  const { children, ...rest } = props;

  const className = 'btn ' + props.className;
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
}
