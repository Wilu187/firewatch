"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, TextField } from "@/components/ui/field";
import { Text } from "@/components/ui/typography";
import { CONTACT_EMAIL } from "@/lib/content";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <Form
      className="max-w-[470px] items-center gap-12.5"
      onFormSubmit={(values: Record<string, string>) => {
        const subject = values.subject || "Zapytanie ze strony FireWatch";
        const body = `${values.message}\n\n—\n${values.name}\n${values.email}`;
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <div className="flex w-full flex-col gap-7">
        <TextField name="name" label="Imię" required autoComplete="name" />
        <TextField
          name="email"
          label="E-mail"
          type="email"
          required
          autoComplete="email"
          formatMessage="Podaj poprawny adres e-mail."
        />
        <TextField name="subject" label="Temat" />
        <TextField name="message" label="Twoja wiadomość" required multiline />
      </div>

      <Button type="submit" variant="outline">
        Wyślij wiadomość
      </Button>

      {sent && (
        <Text role="status" variant="caption" tone="inverse" className="-mt-7.5 text-center text-xs">
          Dziękujemy! Otworzyliśmy Twój program pocztowy z gotową wiadomością.
        </Text>
      )}
    </Form>
  );
}
