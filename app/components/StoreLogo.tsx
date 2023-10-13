import Logo from "@/public/Logo";

const StoreLogo = ({ className }: { className: string }) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      <Logo />
      <span>
        <strong>FullstackWiz</strong> Store
      </span>
    </div>
  );
};

export default StoreLogo;
