import styles from './styles'

export default function RefetchButton({ onClick }) {
  return (
    <button style={styles.refetchButton} onClick={onClick}>Refetch</button>
  )
}