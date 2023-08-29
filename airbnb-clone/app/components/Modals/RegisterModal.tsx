"use client";

import { useRegisterModal } from "@/app/store/useRegisterModal";
import Modal from "./Modal";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";

export default function RegisterModal() {
  const [isOpen, onClose, onOpen, isLoading, handleIsLoading] =
    useRegisterModal((state) => [
      state.isOpen,
      state.onClose,
      state.onOpen,
      state.isLoading,
      state.toogleIsLoading,
    ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      emai: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleIsLoading();
    toast.error("Something went wrong");
    handleIsLoading();
    /*
      TODO:
      - Agregar la carpeta data con los respectivos llamados a los endpoints
      */
  };

  const bodyContent = (
    <section className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create a Account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </section>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        onClick={() => {}}
        icon={FcGoogle}
      />
      <Button
        outline
        label="Continue with Github"
        onClick={() => {}}
        icon={AiFillGithub}
      />
      <section className="text-neutral-500 text-center mt-4 font-ligth">
        <div className="justify-center flex flex-row items-center gap-2">
          <span>Already have a account?</span>
          <span
            onClick={onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log In
          </span>
        </div>
      </section>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      actionLabel="Continue"
      disable={isLoading}
      title="Register"
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    ></Modal>
  );
}
