export default function SelectField({
  options = [],
  value,
  onChange = () => {},
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(options[e.target.selectedIndex])}>
      {options.map((option) => (
        <option value={option} selected={option === value}>
          {option}
        </option>
      ))}
    </select>
  );
}
