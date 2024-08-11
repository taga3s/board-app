import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/threads/$threadId/')({
  component: () => <Example />,
});

const Example = () => {
  const { threadId } = Route.useParams();
  return <div>Thread ID: {threadId}</div>;
};
