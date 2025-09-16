"use client";
import { AppWindowIcon, CodeIcon, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface signup {
  name: string;
  email: string;
  password: string;
}
interface login {
  email: string;
  password: string;
}

export default function Page() {
  const router = useRouter();
  const [signupDetails, setSignupdetails] = useState<signup>({
    name: "",
    email: "",
    password: "",
  });
  const [logindetails, setlogindetails] = useState<login>({
    email: "",
    password: "",
  });

  const [isloading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(`${process.env.BACKEND_URL}user/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signupDetails),
      });
      const res = await data.json();
      if (res.message) {
        setIsLoading(false);
        alert(res.message);
        setSignupdetails({ name: "", email: "", password: "" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(`${process.env.BACKEND_URL}user/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(logindetails),
      });
      const res = await data.json();
      if (res.message) {
        setIsLoading(false);
        alert(res.message);
        router.push("/");
      }
      setlogindetails({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
      <div className="w-full max-w-md">
        <Tabs
          defaultValue="account"
          className="bg-white/95 rounded-2xl shadow-xl p-4"
        >
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-xl mb-4">
            <TabsTrigger
              value="account"
              className="data-[state=active]:bg-white data-[state=active]:shadow text-sm font-medium rounded-xl"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-white data-[state=active]:shadow text-sm font-medium rounded-xl"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Login */}
          <TabsContent value="account">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Log In
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Enter your credentials below
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    placeholder="Enter your email"
                    value={logindetails.email}
                    onChange={(e) =>
                      setlogindetails((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    placeholder="Enter your password"
                    type="password"
                    value={logindetails.password}
                    onChange={(e) =>
                      setlogindetails((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={handleLogin}
                >
                  {isloading ? "Loading..." : "Login"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Sign Up */}
          <TabsContent value="signup">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Sign Up
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Create your account
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="signup-name">Name</Label>
                  <Input
                    id="signup-name"
                    placeholder="Enter your name"
                    value={signupDetails.name}
                    onChange={(e) =>
                      setSignupdetails((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    placeholder="Enter your email"
                    type="email"
                    value={signupDetails.email}
                    onChange={(e) =>
                      setSignupdetails((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    placeholder="Enter your password"
                    type="password"
                    value={signupDetails.password}
                    onChange={(e) =>
                      setSignupdetails((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={handleSignUp}
                >
                  {isloading ? "Loading..." : "Sign Up"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
