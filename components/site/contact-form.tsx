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
      className="max-w-[470px] items-center gap-10"
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
          formatMessage="Podaj adres w formacie nazwa@firma.pl."
        />
        <TextField name="subject" label="Temat" />
        <TextField name="message" label="Twoja wiadomość" required multiline />
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button type="submit" variant="outline">
          Wyślij wiadomość
        </Button>

        {/* Formularz otwiera program pocztowy (mailto). Gdy go nie ma, podajemy adres wprost. */}
        <Text role="status" variant="small" tone="inverse" className="max-w-[380px] text-center">
          {sent ? (
            <>
              Otworzyliśmy Twój program pocztowy z gotową wiadomością. Jeśli nic się nie pojawiło, napisz bezpośrednio
              na{" "}
            </>
          ) : (
            <>Przycisk otworzy Twój program pocztowy. Możesz też napisać bezpośrednio na </>
          )}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold whitespace-nowrap text-snow underline underline-offset-3 hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </Text>
      </div>
    </Form>
  );
}
