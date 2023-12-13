const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 justify-center items-center">
        <h1 className="capitalize font-bold text-4xl sm:text-6xl leading-none tracking-tight">
          we love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title capitalize text-primary-content text-4xl tracking-widest font-bold">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 mx-auto leading-8 max-w-2xl text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum illo
        at laborum voluptatum perferendis, pariatur dicta libero dignissimos
        repellat voluptas exercitationem labore laudantium, eaque excepturi
        sapiente eligendi sed ipsam illum temporibus vel cum in iste. Eligendi
        tempore ut quaerat non.
      </p>
    </>
  );
};

export default About;
