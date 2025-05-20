import GreetingWithClass from '../class/ClassExample';

type GreetingWithClassProps = {
  name?: string;
};

const GreetingWithFunction = (props: GreetingWithClassProps) => {
  return <GreetingWithClass name={props.name} />;
};

export default GreetingWithFunction;
