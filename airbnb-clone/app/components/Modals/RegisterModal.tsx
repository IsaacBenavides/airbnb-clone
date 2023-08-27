"use client";

import { useRegisterModal } from "@/app/store/useRegisterModal";
import Modal from "./Modal";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

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
    /*
      TODO:
      - Agregar la carpeta data con los respectivos llamados a los endpoints
      */
  };

  return <Modal isOpen actionLabel="Submit"></Modal>;
}
