export default function LoadingWrapper({ isLoading, children }) {
  if(isLoading) {
    return <h1>Loading...</h1>
  }
  return children;
}