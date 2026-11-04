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

// 16px tekstu – iOS nie przybliża strony przy fokusie; py daje cel dotyku ≥ 44px.
// Fokus pogrubia linię cieniem (bez przesunięcia układu).
const controlClasses = cn(
  "block w-full rounded-none border-0 border-b border-line-inverse bg-transparent py-3 text-base text-white outline-none",
  "transition-[border-color,box-shadow] duration-200",
  "focus:border-brand focus:shadow-[0_1px_0_0_var(--color-brand)]",
  "data-invalid:border-danger-inverse data-invalid:shadow-[0_1px_0_0_var(--color-danger-inverse)]",
);

/**
 * Pole tekstowe z linią na ciemnym tle. Etykieta jest zawsze widoczna,
 * więc nie znika po rozpoczęciu pisania (w przeciwieństwie do placeholdera).
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
  return (
    <Field.Root name={name} className={cn("flex flex-col", className)}>
      <Field.Label className="text-xs font-medium uppercase tracking-[0.06em] text-line-inverse">
        {label}
        {required ? (
          <span aria-hidden className="ml-0.5 text-danger-inverse">
            *
          </span>
        ) : (
          <span className="normal-case tracking-normal"> (opcjonalnie)</span>
        )}
      </Field.Label>
      {multiline ? (
        <Field.Control
          required={required}
          render={<textarea rows={4} />}
          className={cn(controlClasses, "min-h-24 resize-y leading-6")}
        />
      ) : (
        <Field.Control
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={controlClasses}
        />
      )}
      <Field.Error match="valueMissing" className="mt-1.5 text-sm text-danger-inverse">
        {requiredMessage}
      </Field.Error>
      <Field.Error match="typeMismatch" className="mt-1.5 text-sm text-danger-inverse">
        {formatMessage}
      </Field.Error>
    </Field.Root>
  );
}
