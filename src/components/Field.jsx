/**
 * @param {{ label: string, selected: boolean; onClick: () => void;  }} props
 */
export default function Field(props) {
  return (
    <div
      classList={{ bubble: true, selected: props.selected }}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
}
