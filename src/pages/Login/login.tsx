import { LoginForm } from "./components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h2 className="text-2xl font-bold text-darkGray">Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
