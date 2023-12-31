"use client";

import {
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel?: string;
  disable?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disable,
  secondaryAction,
  secondaryLabel,
}: Props) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disable) return;
    setShowModal(false);
    setTimeout(() => {
      onClose!();
    }, 300);
  }, [disable, onClose]);

  const handleSubmit = useCallback(() => {
    if (disable) return;
    onSubmit!();
  }, [disable, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disable || !secondaryAction) return;
    secondaryAction();
  }, [disable, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="no-scrollbar justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <section className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={`translate duration-300 h-full 
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
         `}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <header className="flex items-center p-6 justify-center relative border-b-[1px]">
              <button
                className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                onClick={handleClose}
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">{title}</div>
            </header>
            <div className="relative p-6 flex-auto">{body}</div>
            <footer className="flex flex-col gap-2 p-6">
              <div className="flex flex-row items-center gap-2 w-full">
                {secondaryLabel && handleSecondaryAction && (
                  <Button
                    outline
                    disabled={disable}
                    label={secondaryLabel}
                    onClick={handleSecondaryAction}
                  />
                )}
                <Button
                  disabled={disable}
                  label={actionLabel!}
                  onClick={handleSubmit}
                />
              </div>
              {footer}
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
