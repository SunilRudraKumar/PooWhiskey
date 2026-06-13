interface MarqueeProps {
  text: string;
  speedClass?: string; // Optional custom speed class
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

export const Marquee = ({
  text,
  speedClass = 'animate-[marquee_60s_linear_infinite]',
  bgColor = 'bg-accent-lime',
  textColor = 'text-black font-bold uppercase',
  borderColor = 'border-y-2 border-black'
}: MarqueeProps) => {
  // Repeat the text several times to cover wide screens
  const repeatedText = Array(5).fill(text).join('  ///  ');

  return (
    <div className={`w-full overflow-hidden whitespace-nowrap py-3 ${bgColor} ${borderColor} ${textColor}`}>
      <div className={`inline-block ${speedClass} select-none`}>
        <span className="text-lg md:text-xl font-mono tracking-widest px-4">
          {repeatedText}
        </span>
        <span className="text-lg md:text-xl font-mono tracking-widest px-4">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};
export default Marquee;
