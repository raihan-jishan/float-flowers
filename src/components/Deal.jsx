import { GiFlowerTwirl } from "react-icons/gi";
import { Wrapper } from "../global/Wrapper";
import { BtnSecondary } from "./ui/Button";
import { FlowerCard } from "./ui/card";
import Heading from "./ui/heading";

const Deal = () => {
  return (
    <Wrapper>
      <Heading label={"Deal of the Day "} image={'https://img.freepik.com/premium-vector/leaf-tree-plant-ecology-bio-natural-products-concept-3d-vector-icon-cartoon-minimal-style_365941-818.jpg?ga=GA1.1.20277494.1734803302&semt=ais_hybrid'} fontMedium />
      <div className="container mx-auto p-10 md:py-10 px-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10  ">
          <FlowerCard
            imgUrl={
              "https://plus.unsplash.com/premium_photo-1676752176152-49612d2944e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlbGklMjBmbG93ZXIlMjBzdGFuZHxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
          <FlowerCard
            imgUrl={
              "https://plus.unsplash.com/premium_photo-1670601070138-1271415a7893?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvc2UlMjBmbG93ZXIlMjBzdGFuZHxlbnwwfHwwfHx8MA%3D%3D"
            }
          />
          <FlowerCard
            imgUrl={
              "https://images.unsplash.com/photo-1687760654850-6fdce0709d20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwZmxvd2VyfGVufDB8fDB8fHww"
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
      <BtnSecondary 
      label={'view more '}
      iconRight={<GiFlowerTwirl size={30}  /> }
      />
      </div>
    </Wrapper>
  );
};

export default Deal;
