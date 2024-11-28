import { useQueryState, parseAsBoolean } from "nuqs";

export const useNavigation = () => {
  const [isOpen, setIsOpen] = useQueryState(
    "open-navigation",
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
  );

  return {
    isOpen,
    setIsOpen,
  };
};
