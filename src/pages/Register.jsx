import {
  FormInput,
  Label,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components";
import { Form, redirect, Link } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "sonner";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);

    // Check response
    if (!response?.data) {
      throw new Error("Invalid response from server");
    }

    toast.success("Обліковий запис успішно створено");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      error.message ||
      "Будь ласка, перевірте введені дані";

    toast.error(errorMessage);
    return null;
  }
};

function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>Створити обліковий запис</CardTitle>
          <CardDescription>
            Введіть свою електронну пошту для створення облікового запису
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form method="POST">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Ім'я користувача</Label>
                <FormInput
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Введіть ваше ім'я"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Електронна пошта</Label>
                <FormInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="ваша@пошта.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Пароль</Label>
                  <small className="text-sm text-muted-foreground">
                    Мінімум 6 символів
                  </small>
                </div>
                <FormInput
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
              <Button type="submit" className="mt-4 w-full">
                Створити обліковий запис
              </Button>
            </div>
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <p className="text-center text-sm text-muted-foreground">
            Вже маєте обліковий запис?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Увійти
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}

export default Register;
