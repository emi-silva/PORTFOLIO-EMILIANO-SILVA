import { useState, useEffect, useCallback } from "react";

const words = ["Full Stack", "React", "Node.js", "UI/UX"];

export default function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = words[index];

    if (!deleting && charIndex < current.length) {
      setCharIndex((c) => c + 1);
    } else if (!deleting && charIndex === current.length) {
      setDeleting(true);
    } else if (deleting && charIndex > 0) {
      setCharIndex((c) => c - 1);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
  }, [index, charIndex, deleting]);

  useEffect(() => {
    const speed = deleting ? 50 : charIndex === words[index].length ? 1500 : 100;
    const id = setTimeout(tick, speed);
    return () => clearTimeout(id);
  }, [tick, deleting, charIndex, index]);

  return (
    <span className="typewriter">
      {words[index].substring(0, charIndex)}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
