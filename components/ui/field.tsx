import { Field } from "@base-ui/react/field";
import { Form as BaseForm } from "@base-ui/react/form";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type FormProps = Omit<ComponentProps<typeof BaseForm>, "className"> & { className?: string };

export function Form({ className, ...props }: FormProps) {
  return <BaseForm className={cn("flex w-full flex-col", className)} {...props} />;
}

type TextFieldProps = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  multiline?: boolean;
  autoComplete?: string;
  /** Komunikat dla pustego pola wymaganego. */
  requiredMessage?: string;
  /** Komunikat dla niepoprawnego formatu (np. e-mail). */
  formatMessage?: string;
  className?: string;
};

const controlClasses = cn(
  "block w-full rounded-none border-0 border-b-[0.5px] border-line-inverse bg-transparent pb-2 text-xs text-white outline-none",
  "transition-colors placeholder:text-2xs placeholder:capitalize placeholder:text-line-inverse",
  "focus:border-brand data-invalid:border-brand",
);

/**
 * Pole tekstowe z linią na ciemnym tle. Etykieta jest dostępna dla czytników
 * ekranu, a wizualnie pełni ją placeholder (zgodnie z designem).
 */
export function TextField({
  name,
  label,
  type = "text",
  required,
  multiline,
  autoComplete,
  requiredMessage = "To pole jest wymagane.",
  formatMessage = "Sprawdź poprawność wpisanej wartości.",
  className,
}: TextFieldProps) {
  const placeholder = required ? `${label}*` : label;

  return (
    <Field.Root name={name} className={cn("flex flex-col", className)}>
      <Field.Label className="sr-only">{label}</Field.Label>
      {multiline ? (
        <Field.Control
          required={required}
          placeholder={placeholder}
          render={<textarea rows={2} />}
          className={cn(controlClasses, "h-10 min-h-10 resize-y")}
        />
      ) : (
        <Field.Control
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={cn(controlClasses, "h-[22px]")}
        />
      )}
      <Field.Error match="valueMissing" className="mt-1.5 text-2xs text-brand">
        {requiredMessage}
      </Field.Error>
      <Field.Error match="typeMismatch" className="mt-1.5 text-2xs text-brand">
        {formatMessage}
      </Field.Error>
    </Field.Root>
  );
}
