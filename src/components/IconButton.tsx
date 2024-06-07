import { useRef, useState, ReactNode } from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text: string;
  color?: string;
  link: string;
}

export default function IconButton({
  children,
  link,
  text,
  color,
  ...props
}: IconButtonProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        window.open(link);
      }}
      className={`flex p-2 items-center rounded-lg text-white ${
        color || "bg-black"
      }`}
      {...props}
    >
      {children}

      <div
        style={{
          width:
            text !== "CV"
              ? hovered
                ? ref.current?.offsetWidth || 8
                : 0
              : 40,
        }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </button>
  );
}
