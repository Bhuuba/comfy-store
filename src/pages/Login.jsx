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
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { customFetch } from "../utils";
import { toast } from "sonner";
import { loginUser } from "../features/user/userSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("Вхід виконано успішно");
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Будь ласка, перевірте введені дані";

      toast.error(errorMessage);
      return null;
    }
  };
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>Увійти до облікового запису</CardTitle>
          <CardDescription>
            Введіть свою електронну пошту для входу
          </CardDescription>
          <CardAction>
            <Button variant="link">
              <Link to="/register">Реєстрація</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Form method="POST" id="loginForm">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Електронна пошта</Label>
                <FormInput
                  id="email"
                  type="email"
                  name="identifier"
                  placeholder="ваша@пошта.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                </div>
                <FormInput
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" form="loginForm" className="w-full">
            Увійти
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={async () => {
              try {
                const response = await customFetch.post("/auth/local", {
                  identifier: "test@test.com",
                  password: "secret",
                });
                dispatch(loginUser(response.data));
                toast.success("Вхід виконано");
                navigate("/");
              } catch (error) {
                console.log(error);
                toast.error("Помилка входу гостьового користувача");
              }
            }}
          >
            Гостьовий доступ
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default Login;
