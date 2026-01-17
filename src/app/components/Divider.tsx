export default function Divider() {
  return (
    <div className="relative h-12 md:h-16">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-black/20" />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 md:h-6 md:w-6 rounded-full border border-black/15 bg-white" />
    </div>
  );
}