const Boxes = ({ img, h1, p }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="min-w-[300px] lg:w-[400px] min-h-[400px] p-4 shadow-sm">
        <img src={img} alt="" className="w-full h-[200px]" />
        <div className="w-full p-4">
          <h1 className="font-bold text-xl pt-4">{h1}</h1>
          <p className="pt-4">{p}</p>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
