import { Button } from "@/components/ui/button";

interface KeyButtonProps {
  charUnicode: number[];
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function KeyButton({
  charUnicode,
  handleButtonClick,
}: KeyButtonProps) {
  const char = String.fromCodePoint(...charUnicode);
  return (
    <Button value={char} onClick={(event) => handleButtonClick(event)}>
      <text className="manchu-text">{char}</text>
    </Button>
  );
}
