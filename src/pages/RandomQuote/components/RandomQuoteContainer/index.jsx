import styles from "./styles"

function displayTags(tags) {
  return tags.join(", ")
}

export default function QuoteContainer({ data }) {
  if(!data) {
    return <></>
  }
  return (
    <div style={styles.container}>
      <h1>{data.content}</h1>
      <h2> - {data.author}</h2>
      <h3>Regarding: {displayTags(data.tags)}</h3>
    </div>
  )
}