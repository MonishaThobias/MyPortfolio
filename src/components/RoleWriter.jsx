import { useState, useEffect } from "react";

// Define roles and their corresponding Tailwind colors
const roles = [
  { name: "Frontend Developer", color: "text-blue-500" },
  { name: "Backend Developer", color: "text-green-500" },
  { name: "Fullstack Developer", color: "text-pink-500" },
];

export default function RoleWriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex].name;
    const speed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <p className={`uppercase tracking-widest font-bold ${roles[roleIndex].color}`}>
      {text}
      <span className="inline-block w-1 animate-blink">|</span>
    </p>
  );
}
