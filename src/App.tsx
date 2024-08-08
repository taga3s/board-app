import { QueryClientProvider } from '@tanstack/react-query';
import { BoardLayout } from './components/layouts';
import { Thread } from './features/threads/components/Thread';
import { queryClient } from './config/api';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BoardLayout>
        <Thread />
      </BoardLayout>
    </QueryClientProvider>
  );
}

export default App;
