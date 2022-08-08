import TextField from "@/ui/text-field";
import SelectField from "@/ui/select-field";
import fetchApi from "@/modules/fetch";

export default function TodoForm({
  value,
  onChange = () => {},
  onSave = () => {},
}) {
  const { _id, text, status } = value;

  async function save() {
    onSave(
      await fetchApi(`todos/${_id}`, {
        method: "put",
        body: value,
      })
    );
  }

  return (
    <div>
      <TextField
        {...{
          value: text,
          onChange: (text) =>
            onChange({
              ...value,
              text,
            }),
        }}
      />
      <SelectField
        {...{
          options: ["none", "started", "complete"],
          value: status,
          onChange: (status) => {
            onChange({
              ...value,
              status,
            });
          },
        }}
      />

      <button onClick={save}>Save</button>
    </div>
  );
}
