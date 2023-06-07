import { SectionProps } from "../../../@types/SectionProps";
import friendImages from "../../../assets/images/bundle";
import ImageCard from "./ImageCard";

const Friends = ({ ToAnimate, animationType }: SectionProps) => {
  return (
    <>
      <ToAnimate animation={animationType} tag="h2" children="Friendly Faces" />
      <ToAnimate animation={animationType} tag="h3" children="Scroll Lovers" />
      <div className="imagesContainer">
        {friendImages.map((obj, i) => {
          console.log(i);

          return (
            <ImageCard
              ToAnimate={ToAnimate}
              animationType={animationType}
              index={i}
              src={obj.img}
              name={obj.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default Friends;
