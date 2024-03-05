import { FC } from "react";
import pix from "../../assets/Dash.png";
import pix1 from "../../assets/store.jpg";
import pix2 from "../../assets/childwriting.jpg";
import pix3 from "../../assets/Classkids.jpg";
import pix4 from "../../assets/class.jpg";
import pix5 from "../../assets/teammeeting.jpeg";
import Boxes from "./Boxes";
import { MdAssessment } from "react-icons/md";
interface iBox {
  boxes?: [] | any;
  iconColor: string;
  title: string;
  icon: any;
}

const SchoolComponent: FC<iBox> = ({ iconColor, title, boxes, icon }) => {
  console.log("boxes", boxes);

  return (
    <div className="w-full">
      <div className="flex justify-center items-center mt-5 flex-col gap-3">
        <div
          className="w-14 h-14 bg-blue-950 flex justify-center items-center"
          style={{ borderRadius: "100%" }}
        >
          <div className="font-bold text-white text-2xl">{icon}</div>
        </div>
        <h1 className="font-bold pl-3 text-2xl text-blue-950">{title}</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[70%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-11">
          <Boxes
            img={pix}
            h1="Admin Dashboard"
            p="this is why all the activities is been done"
          />
          <Boxes
            img={pix4}
            h1="Classess"
            p="Admin of school cn view All classess"
          />
          <Boxes
            img={pix1}
            h1="Store Dashboard"
            p="School can insert all the school instrument which student and parent can order and also pay through our platform"
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolComponent;

export const SchoolComponent2 = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center mt-5 flex-col gap-3">
        <div
          className="w-14 h-14 bg-blue-950 flex justify-center items-center"
          style={{ borderRadius: "100%" }}
        >
          <div className="font-bold text-white text-2xl">
            <MdAssessment />
          </div>
        </div>
        <h1 className="font-bold pl-3 text-2xl text-blue-950">Assessment</h1>
      </div>
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
  );
};
