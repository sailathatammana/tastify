export default function Table({ item }) {
  const { label, amount, unit = "g", value } = item;

  return (
    <tr>
      <td>
        <span>{label}</span> {amount}
        {unit}
      </td>
      <td className="main-text">{value}%</td>
    </tr>
  );
}
