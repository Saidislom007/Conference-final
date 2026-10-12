import { Button } from "../../@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "../../@/components/ui/field"
import { Input } from "../../@/components/ui/input"

export function LoginForm() {

  return (
    <form className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Kirish
      </h1>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-email">Email yoki Foydalanuvchi nomi</FieldLabel>
          <Input id="form-email" type="email" placeholder="john@example.com" />
          <FieldDescription>
            {/* We&apos;ll never share your email with anyone. */}
            Biz sizning elektron pochtangizni hech kim bilan baham ko'rmaymiz.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="form-password">Parol</FieldLabel>
          <Input id="form-password" type="password" placeholder="••••••••" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Bekor qilish
          </Button>
          <Button type="submit">Kirish</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
