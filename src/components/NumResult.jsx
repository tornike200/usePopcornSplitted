export default function NumResult({ watched }) {
  return (
    <p className="num-results">
      Found <strong>{watched.length}</strong> results
    </p>
  );
}
