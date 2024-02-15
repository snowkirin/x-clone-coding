import React from "react";

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}
export default function BeforeLoginLayout({ children, modal }: Props) {
  return (
      <div className="flex flex-row h-[100dvh] w-[100dvw] items-stretch">
        { children }
        { modal }
      </div>
  )
}
