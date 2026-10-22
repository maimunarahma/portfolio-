export function LiveDot({ color = "#3ddc97" }: { color?: string }) {
  return (
    <span className="relative inline-block size-[7px] flex-none">
      <span className="absolute inset-0 rounded-full" style={{ background: color }} />
      <span className="absolute -inset-1 animate-pulse-soft rounded-full border" style={{ borderColor: color }} />
    </span>
  );
}
