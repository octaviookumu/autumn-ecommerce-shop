import { useState, createContext } from "react";
import { ContextProps } from "../types/types";

export const SidebarContext = createContext<any>(null);

const SidebarProvider: ContextProps = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
