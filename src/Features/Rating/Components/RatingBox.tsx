const RatingBox = () => {
  return (
    <>
      <div className="flex justify-center my-20">
        <div className="bg-gradient-to-r  border-1 border-white from-[#34373b] to-[#5a5d60] w-[50pc] rounded-3xl p-9 flex justify-between">
          <div className="flex flex-col items-center text-[#fffdff80] gap-3">
            <h1 className="text-5xl font-extrabold ">900k+</h1>
            <p>Happy Sellers</p>
          </div>

          <div className="flex flex-col items-center text-[#fffdff80] gap-3">
            <h1 className="text-5xl font-extrabold ">2.8k+</h1>
            <p>Shipments Daily</p>
          </div>

          <div className="flex flex-col items-center text-[#fffdff80] gap-3">
            <h1 className="text-5xl font-extrabold ">4.8</h1>
            <p>App Rating</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingBox;
