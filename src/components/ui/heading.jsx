const Heading = ({ label, image, fontMedium, fontExtraBold }) => {
  return (
    <div className="flex items-center justify-center  max-lg:flex-col-reverse ">
      <h1
        className={`relative text-center text-4xl   font-Montserrat
        ${
          fontMedium
            ? "font-semibold"
            : fontExtraBold
            ? "font-extrabold"
            : "font-normal"
        }
        `}
      >
        {label}
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-2/3 mt-2 border-b-4 border-b-green-500"></span>
      </h1>

      {/* image */}

      <img
        src={image}
        alt="404 image was not found!"
        className="w-[10%] rotate-[16deg] mix-blend-multiply max-lg:w-[50%]  "
      />
    </div>
  );
};

export default Heading;
