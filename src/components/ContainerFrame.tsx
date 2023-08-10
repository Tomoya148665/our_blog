import { FunctionComponent } from "react";

const ContainerFrame: FunctionComponent = () => {
  return (
    <div className="absolute top-[285px] left-[201px] w-[1079px] overflow-hidden flex flex-row items-center justify-start gap-[16px] text-left text-[55.58px] text-black font-inter">
      <div className="flex-1 bg-gainsboro h-[461px] overflow-hidden flex flex-col py-4 px-[138px] box-border items-start justify-start">
        <div className="relative w-[100px] h-[100px]" />
      </div>
      <div className="flex-1 relative h-[423px] overflow-hidden">
        <div className="absolute top-[78px] left-[0px] rounded-[50%] bg-gainsboro w-[218px] h-[43px]" />
        <div className="absolute top-[190px] left-[11px] inline-block w-[186px] h-[142px]">
          dsdsddsd
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[229px] h-[68px] overflow-hidden"
          alt=""
          src="/frame1.svg"
        />
        <img
          className="absolute top-[380px] left-[6px] w-[218px] h-[43px] overflow-hidden"
          alt=""
          src="/frame2.svg"
        />
      </div>
    </div>
  );
};

export default ContainerFrame;
