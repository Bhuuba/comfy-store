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
import { Form, Link } from "react-router-dom";
function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>Register to your account</CardTitle>
          <CardDescription>
            Enter your email below to Register to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">
              <Link to="/login">Login</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Form method="POST">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <FormInput id="username" type="username" name="username" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <FormInput
                  id="email"
                  type="email"
                  name="identifier"
                  defaultValue="test@test.com"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <FormInput
                  id="password"
                  type="password"
                  name="password"
                  defaultValue="secret"
                />
              </div>
            </div>
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Register
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default Register;
