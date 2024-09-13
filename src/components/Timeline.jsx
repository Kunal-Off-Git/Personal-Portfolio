import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import { LiaUniversitySolid } from "react-icons/lia";
import { RiBookMarkedLine } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work E1"
          contentStyle={{
            background: "#dc3d24",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2021 - present"
          iconStyle={{ background: "#dc3d24", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachlor's of Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">ADGIPS</h4>
          <p>CGPA:9.05</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#dc3d24",
            color: "#fff",
          }}
          date="Passed 2020"
          iconStyle={{ background: "#dc3d24", color: "#fff" }}
          icon={<LiaUniversitySolid />}
        >
          <h3 className="vertical-timeline-element-title">CLASS XII</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kendriya Vidyalaya
          </h4>
          <p>Percentage:89.3%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#dc3d24",
            color: "#fff",
          }}
          date="Passed 2018"
          iconStyle={{ background: "#dc3d24", color: "#fff" }}
          icon={<RiBookMarkedLine />}
        >
          <h3 className="vertical-timeline-element-title">Class X</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kendriya Vidyalaya
          </h4>
          <p>Percentage:89.4%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<IoStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
