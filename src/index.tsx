import "./index.css";
interface TestProps {
  thing?: string;
}

export const Test = (props: TestProps) => {
  const { thing } = props;
  return <div className="test-thing">{thing}</div>;
};
