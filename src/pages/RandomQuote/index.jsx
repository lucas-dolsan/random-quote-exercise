import styles from './styles'

import LoadingWrapper from './components/LoadingWrapper';
import QuoteContainer from './components/RandomQuoteContainer';
import RefetchButton from './components/RefetchButton';
import useFetchRandomQuote from './hooks/useFetchRandomQuote'

export default function RandomQuotePage() {
  const { loading, randomQuoteData, refetch } = useFetchRandomQuote();

  return (
    <div style={styles.center}>
      <LoadingWrapper isLoading={loading}>
        <QuoteContainer data={randomQuoteData} />
        <RefetchButton onClick={refetch} />
      </LoadingWrapper>
    </div>
  );
}

