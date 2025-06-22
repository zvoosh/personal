import { CountUp } from "../../components";

const Expiriance = () => {
  return (
    <section className="flex w-100 justify-center ">
      <div className=" h-100 mb-5  flex wrap justify-between font-20 text-center text-red change-flex-cont">
        <div className="m-1 p-1">
          <CountUp target={3} duration={1000} />
          <p className="font-12 bolder">Professional Projects</p>
        </div>
        <div className="m-1 p-1">
          <CountUp target={10} duration={1000} suffix="+" />
          <p className="font-12 bolder">Courses</p>
        </div>
        <div className="m-1 p-1">
          <CountUp target={1} duration={1000} suffix="+" />
          <p className="font-12 bolder">Years of expiriance</p>
        </div>
        <div className="m-1 p-1">
          <CountUp target={2} duration={1000} />
          <p className="font-12 bolder">Collaborations</p>
        </div>
      </div>
    </section>
  );
};

export { Expiriance };
