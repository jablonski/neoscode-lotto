/**
 * @param {{ label: string, selected: boolean; onClick: () => void;  }} props
 */
export default function Field(props) {
  return (
    <div
      classList={{ field: true, selected: props.selected }}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
}
