import { isUrl } from "@/utils/validator";

interface IFormProps {
  label: string;
  value: string;
}

export default function Form({ label, value }: IFormProps) {
  return (
    <div className="w-full">
      <div>{label}</div>
      <div className="opacity-50">
        {isUrl(value) ? (
          <a
            className="underline"
            target="_blank"
            rel="noreferrer"
            href={value}
          >
            {value}
          </a>
        ) : (
          value
        )}
      </div>
    </div>
  );
}
