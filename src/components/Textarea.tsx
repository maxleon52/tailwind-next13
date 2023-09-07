import { ComponentProps } from "react";

type TextareaProps = ComponentProps<"textarea">;

export default function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      id="bio"
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, architecto at? Odio corrupti, sed vero non, doloremque totam pariatur soluta sunt minus, ratione nesciunt eos culpa mollitia? Impedit, itaque vitae."
    />
  );
}
