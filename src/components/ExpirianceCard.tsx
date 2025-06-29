const ExpirianceCard = ({ src }: { src: string }) => {
  return (
    <div className="w-100 flex pb-2">
      <div className="w-100">
        <img
          loading="eager"
          src={src}
          alt="Exp image"
          className="w-100 h-100 cover"
        />
      </div>
    </div>
  );
};

export { ExpirianceCard };
