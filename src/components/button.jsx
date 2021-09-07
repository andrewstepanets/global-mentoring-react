export function Button({ symbol, onClickFunction }) {
  return <button onClick={onClickFunction}>{symbol}</button>;
}
