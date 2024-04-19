export const createKeyframes = () => {
  const x = 25 + Math.floor(Math.random() * 50);

  const offset1 = -15 + Math.floor(Math.random() * 45);
  const offset2 = -30 + Math.floor(Math.random() * 45);
  const offset3 = -15 + Math.floor(Math.random() * 45);

  const maxSize = 5 + Math.floor(Math.random() * 15);

  return [
    { top: "100%", left: `${x}%`, width: "2.5px", height: "2.5px" },
    { top: "75%", left: `${x + offset1}%`, width: "10px", height: "10px" },
    { top: "50%", left: `${x + offset2}%`, width: `${maxSize}px`, height: `${maxSize}px` },
    { top: "25%", left: `${x + offset3}%`, width: "10px", height: "10px" },
    { top: "0%", left: `${x}%`, width: "2.5px", height: "2.5px" }
  ];
};
