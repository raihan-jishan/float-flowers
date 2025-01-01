import { clientReviewsData } from "../constants";
import { ReviewCard } from "./ui/card";
import Heading from "./ui/heading";

const Review = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 relative">
      <Heading
        label={"What people are saying "}
        image={
          "https://media.istockphoto.com/id/157672871/photo/forest-love.jpg?s=612x612&w=0&k=20&c=s2bNziipTwluLOu3sbNFG_7te7qrrTGa_5gTuGes97M="
        }
      />
      <div className=" m-2 p-6  grid grid-cols-1 lg:grid-cols-3   w-full     flex-wrap ">
        {clientReviewsData.map((item, index) => {
          return (
            <ReviewCard
              key={index}
              name={item.name}
              handle={item.twitterHandle}
              review={item.review}
              Avatar={item.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Review;
