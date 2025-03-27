interface IFormProps {
  label: string;
  value: string | number;
}

export default function Form({ label, value }: IFormProps) {
  return (
    <div>
      <div>{label}</div>
      <div className="opacity-50">{value}</div>
    </div>
  );
}
