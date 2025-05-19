"use client";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

export default function Counter({
  targetNumber,
  title,
}: {
  targetNumber: number;
  title: string;
}) {
  const [styles, api] = useSpring(() => ({
    number: 0,
    config: { mass: 0.5, tension: 28, friction: 8 },
  }));

  useEffect(() => {
    api.start({ number: targetNumber, delay: 200 });
  }, [targetNumber]); // se vuelve a animar si cambia

  return (
    <article>
      <p className="text-4xl font-bold tabular-nums">
        <animated.span>
          {styles.number.to((n) => Math.floor(n).toLocaleString())}
        </animated.span>
        +
      </p>
      <p className="text-xs text-black/60">{title}</p>
    </article>
  );
}
