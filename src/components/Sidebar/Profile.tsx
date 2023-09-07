/* eslint-disable @next/next/no-img-element */
import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/maxleon52.png"
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Maxwell Alves
        </span>
        <span className="max-w-max truncate text-sm text-zinc-500">
          maxleon522@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
}
