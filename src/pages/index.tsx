import StatCard from "@/components/HomePage/StatCard";
import { PrimaryButton, OutLineButton } from "../components/common/Button";
import SuccessDescription from "@/components/HomePage/SuccessDescription";

export default function Home() {
  return (
    <div>
      <div className="mx-0 mt-20  md:mx-10">
        <div className="flex flex-col-reverse md:flex-row  mx-10 justify-between">
          <div className="text-center md:text-left">
            <div className="font-extrabold text-6xl mb-6 text-black">
              Africa to <span className="text-primary">Silicon Valley</span>
            </div>
            <div className="text-lg mb-4 ">
              A2SV up-skills high-potential <br />
              university students, connects them
              <br />
              with opportunities at top tech <br />
              companies
              <br />
            </div>
            <div>
              <OutLineButton content="Get Started" addClass="" />
              <PrimaryButton content="Support Us" addClass="ml-3" />
            </div>
          </div>
          <div className="order-last md:h-220 md:w-220">
            <img className="h-full " src="staff.png" alt="" />
          </div>
        </div>
        <div className="font-bold text-4xl mt-20 mb-5 text-black text-center">
          Let's Build A Better <br /> Tomorrow
        </div>
        <div className="mb-5 text-center px-30">
          A2SV upskills high-potential university students, connects them with
          opportunities at top tech companies around the world, and creates
          digital solutions to urgent problems in their home countries. The
          program is free for students, making the opportunity available for
          youth who have talent but lack the means to use it.
        </div>
        <div className="flex justify-center">
          <PrimaryButton content="Connect with our team" addClass="" />
        </div>
        <img src="people.png" alt="" />
        <div className="font-bold text-4xl mt-20 mb-5 text-black text-center">
          Google SWE Interviews Acceptance
          <br />
          Rate Comparison
        </div>
        <div className="bg-cardbg p-8 rounded-lg grid grid-cols-2 md:grid-cols-5 items-center">
          <div className="text-lg">
            A2SV students are <span className="font-bold text-black">35</span>{" "}
            times more likely to pass{" "}
            <span className="font-bold text-black ">Google SWE interviews</span>{" "}
            than average candidates.
          </div>
          <StatCard year="2019" percent="Founded" avg="5% average" />
          <StatCard year="2020" percent="27%" avg="5.3% average" />
          <StatCard year="2021" percent="59%" avg="3.9% average" />
          <StatCard year="2022" percent="70%" avg="2.6% average" />
        </div>
        <div className="mt-28">
          <SuccessDescription
            title="Internships"
            img="internship.png"
            description="Students who passed their interviews get 3-month internships to gain experience in building scalable products that are widely used around the world."
            reverse={false}
          />
          <SuccessDescription
            title="360 training"
            img="internship.png"
            description="A2SV upskills students with a 360° software engineering program that focuses on problem-solving, effective speaking, and personal development."
            reverse={true}
          />
          <SuccessDescription
            title="Social Projects"
            img="internship.png"
            description="Students work on social projects with industry experts to address the most pressing problems in their community."
            reverse={false}
          />
        </div>
      </div>
       <div className="mt-10 h-80 relative">
        <div className="h-72 bg-gradient-to-r from-primary from-0% to-[#019CFA] to-100%"></div>
        <img className="h-80  absolute top-0  left-1/2 z-1" src="africa.png" />
        <div className="absolute top-1/3 left-1/2 z-20 text-white">
          Help us sustain our mission
          <button className="block p-3 font-bold rounded bg-white text-primary">
            Support Us
          </button>
        </div>
      </div>
       <div>
       <div className="font-bold text-4xl mt-5  mb-5 text-black text-center">
          Impact Stories
        </div>
        <div className="mx-14 mt-20 md:grid grid-cols-2 justify-center md:justify-between ">
          <div className="order-last md:order-first ">
            <span className="text-black text-lg">Abel Tsegaye</span>
            <span className="block text-sm">Software Engineer at Google</span>
            <p className="mt-8 text-sm">
              “ When I joined A2SV in 2019, I found the concept of data
              structures and algorithms quite challenging. A2SV's smooth
              learning process and dedicated team molded me to see the peak of
              my abilities. Through A2SV's effective education and continual
              support, I passed Google's internship interviews and attended a
              summer internship at Google in Amsterdam. However, the A2SV
              program and training is beyond technical education and interview
              preparation. As an A2SVian, I also learned the values of putting
              humanity first, giving back to our community, and utilizing
              teamwork with my colleagues, which I can now consider my big
              family. After completing three remarkable months at Google, I was
              offered a full-time position at Google's London office for 2022. “
            </p>
          </div>
          <img className="h-[500px] justify-self-center" src="impact.png" alt="" />
        </div>
      </div> 
    </div>
  );
}
