import { Button } from "@/components/ui/button";

interface KeyButtonProps {
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function KeyButton({ handleButtonClick }: KeyButtonProps) {
  return (
    <Button value={"\u1820"} onClick={(event) => handleButtonClick(event)}>
      a
    </Button>
  );
}
