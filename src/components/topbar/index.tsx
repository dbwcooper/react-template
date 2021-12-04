import './index.css';

interface InputProps extends React.InputHTMLAttributes<HTMLDivElement> {
  children?: React.ReactChild | React.ReactChild[];
}

export default function Topbar(props: InputProps) {
  const { children } = props;
  return (
    <div className='topbar z-10 flex flex-auto justify-between items-center fixed top-0 left-0 w-full'>
      {children}
    </div>
  );
}
