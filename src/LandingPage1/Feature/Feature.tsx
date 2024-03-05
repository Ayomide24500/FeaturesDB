import { FaSchool } from "react-icons/fa";
import pix2 from "../assets/childwriting.jpg";
import pix3 from "../assets/Classkids.jpg";
import pix5 from "../assets/teammeeting.jpeg";
import pix1 from "../assets/Dash.png";
import SchoolComponent, { SchoolComponent2 } from "./SchoolComponents";
import Boxes from "./Boxes";
import AnimationComponent from "./AnimatedText";

const Features = () => {
  let data = [{ id: 1, title: "start" }];
  let data1 = [{ id: 1, title: "start" }];
  return (
    <div className="pt-10 w-full">
      <div className="w-full h-[650px] flex justify-center items-center">
        <div
          className="h-[87%] lg:w-[70%] w-[100%] flex justify-center items-center relative"
          style={{ borderRadius: "20px" }}
        >
          <img
            src={pix1}
            alt=""
            className="w-[100%] h-full absolute"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          />
          <div
            className="absolute top-0 left-0 h-full w-full flex justify-center items-center"
            style={{
              background:
                " linear-gradient(90deg, rgba(123,151,184,0.7364672364672364) 0%, rgba(58,82,122,0.8240546218487395) 0%)",
              borderRadius: "20px",
            }}
          >
            <AnimationComponent />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-rows-3 gap-8">
        <SchoolComponent
          iconColor="white"
          title="For School"
          boxes={data1}
          icon={<FaSchool />}
        />
        <SchoolComponent2 />

        <div className="w-full p-4 bg-blue-50">
          <h1 className="font-bold text-blue-950 text-2xl text-center pt-3">
            For Teacher
          </h1>
          <p className="text-center text-[18px] pt-4">
            What Our Platform can Offers the Teacher
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="w-[70%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-11">
              <Boxes img={pix2} h1="Exams" p="Teacher can set exams and " />
              <Boxes
                img={pix3}
                h1="Assignment"
                p="Teacher can also set Assignment and also track student doing his/her assignment"
              />
              <Boxes img={pix5} h1="Team Meeting" p="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
