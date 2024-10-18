import { cn } from "@/utils/utils";

export const getInputClassName = ({
  disabled,
  password,
  setSelectedOption,
  selectedOption,
  pwdVisible,
  value,
  editNode,
  setSelectedOptions,
  isSelected,
  areOptionsSelected,
  nodeStyle,
  className,
}) => {
  const classes = {
    base: className || "",
    disabled: disabled ? "pointer-events-none bg-border text-smooth-zinc" : "",
    password:
      password &&
      (!setSelectedOption || selectedOption === "") &&
      !pwdVisible &&
      value !== ""
        ? "text-clip password"
        : "",
    editNode: editNode ? "input-edit-node" : "",
    paddingRight: (() => {
      if (password && (setSelectedOption || setSelectedOptions))
        return "pr-[62.9px]";
      if (
        (!password && (setSelectedOption || setSelectedOptions)) ||
        (password && !(setSelectedOption || setSelectedOptions))
      )
        return "pr-8";
      return "";
    })(),
    selected:
      isSelected || areOptionsSelected
        ? "font-jetbrains text-sm font-medium text-foreground"
        : "",
    nodeStyle: selectedOption !== "" && nodeStyle ? "text-emerald-hard" : "",
  };

  return cn(
    classes.base,
    classes.disabled,
    classes.password,
    classes.editNode,
    classes.paddingRight,
    classes.selected,
    classes.nodeStyle,
  );
};
