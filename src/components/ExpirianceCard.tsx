const ExpirianceCard = ({ src }: { src: string }) => {
  return (
    <div className="w-100 flex p-2">
      <div className="w-100">
        <img src={src} alt="Exp image" className="w-100 h-100 cover" />
      </div>
    </div>
  );
};

export { ExpirianceCard };
