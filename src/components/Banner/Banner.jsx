import user from '../../assets/images/user.png';

const Banner = () => {
  return (
    <div className=''>
      <section className="text-gray-800">
        <div className="container flex flex-col justify-center  mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 rounded-sm lg:max-w-md xl:max-w-lg text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            One Step <br /> Closer To Your <br />

              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-400">Dream Job</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
            Explore thousands of job opportunities with all the information you need. Its your future.
              <br className="hidden md:inline lg:hidden" />
              Come find it. Manage all your job application from start to finish.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded bg-gradient-to-r from-indigo-500 to-blue-400 text-gray-50"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-0 ">
            <img
              src={user}
              alt=""
              className="object-contain w-4/5/3 h-4/5 md:w-full md:h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
