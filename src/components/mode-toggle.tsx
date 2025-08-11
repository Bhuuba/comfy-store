import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui";

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={undefined}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Перемкнути тему</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={undefined}>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={undefined}
          inset={undefined}
        >
          Світла
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={undefined}
          inset={undefined}
        >
          Темна
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={undefined}
          inset={undefined}
        >
          Системна
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
