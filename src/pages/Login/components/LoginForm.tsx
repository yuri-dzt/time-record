"use client";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

const LoginForm = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-light px-[30px] py-[40px] rounded-[10px] w-[400px] flex flex-col items-center justify-center gap-8"
    >
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <Input label="Usuário" type="text" />
        <Input label="Senha" type="password" />
      </div>
      <Button type="submit" text="Entrar" />
    </form>
  );
};

export { LoginForm };
