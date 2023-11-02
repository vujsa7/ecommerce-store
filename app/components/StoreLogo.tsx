import Logo from "@/public/Logo";

const StoreLogo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Logo />
      <span className="text-white text-lg">
        <strong>FullstackWiz</strong> Store
      </span>
    </div>
  );
};

export default StoreLogo;
