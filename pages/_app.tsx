import { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import necessary react-query components
import '@/styles/globals.css';

// Create a new QueryClient instance
const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    // Wrap your entire app in the QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default MyApp;
