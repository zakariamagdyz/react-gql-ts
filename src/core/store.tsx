import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { User } from "../generated/graphql";

type Store = {
  currentUser: User | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  isModalOpen: boolean;
  toggleModalState: () => void;
};

export const StoreContext = createContext<Store | undefined>(undefined);

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalState = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  return (
    <StoreContext.Provider
      value={{ currentUser, setCurrentUser, isModalOpen, toggleModalState }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
