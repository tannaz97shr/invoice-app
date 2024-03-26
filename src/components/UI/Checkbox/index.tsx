"use client";

interface CheckboxProps {
  label: string;
  onChange: () => void;
  checked: boolean;
}

export default function Checkbox({
  label,
  onChange,
  checked,
  ...props
}: CheckboxProps) {
  return (
    <div className="">
      <label className=" mb-2 capitalize">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={checked ? "checked" : ""}
          {...props}
        />
        <span className=" font-bold">{label}</span>
      </label>
    </div>
  );
}
