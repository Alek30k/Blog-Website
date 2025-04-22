import { Link } from "react-router-dom";
import Image from "./Image";

const FeacturedPost = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          w="895"
        />
        {/* detail */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link to="" className="text-xl lg:text-3xl font-semibold lg:font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo
          dolor iusto, neque illum delectus. Vero id reprehenderit, dolorum
          quaerat iusto, accusantium asperiores nemo inventore ipsa, fugit
          natus! Quasi, alias.
        </Link>
      </div>
      {/* Other */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4"></div>
    </div>
  );
};

export default FeacturedPost;
