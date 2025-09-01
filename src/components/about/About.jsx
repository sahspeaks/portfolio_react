import ME from "../../assets/Me2.png";
import ME2 from "../../assets/me3.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about" className="mt-32 px-4">
      <h5 className="text-center text-gray-400 mb-4">Get To Know</h5>
      <h2 className="text-center text-[#90be6d] text-4xl mb-12 font-medium">
        About Me
      </h2>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_50%] gap-8 lg:gap-[15%]">
          {/* About Me Image */}
          <div className="w-full max-w-sm mx-auto lg:max-w-none aspect-square rounded-3xl flex items-center justify-center">
            {/* Mobile Image */}
            <div className="lg:hidden rounded-3xl overflow-hidden w-full h-full">
              <img
                src={ME2}
                alt="Abhishek Kumar's profile picture"
                className="block w-full h-full object-contain"
              />
            </div>

            {/* Desktop Image */}
            <div className="hidden lg:block rounded-3xl overflow-hidden w-full h-full">
              <img
                src={ME}
                alt="Abhishek Kumar's profile picture"
                className="block w-full h-full object-contain"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="text-center lg:text-left">
            {/* About Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8">
              <article className="bg-gray-800 border border-transparent rounded-3xl p-6 lg:p-8 text-center hover:bg-transparent hover:border-green-300 transition-all duration-300 cursor-default">
                <FaAward className="text-[#90be6d] text-2xl mb-4 mx-auto" />
                <h5 className="text-base mb-1">Experience</h5>
                <small className="text-xs text-gray-400">1 Year</small>
              </article>

              <article className="bg-gray-800 border border-transparent rounded-3xl p-6 lg:p-8 text-center hover:bg-transparent hover:border-green-300 transition-all duration-300 cursor-default">
                <VscFolderLibrary className="text-[#90be6d] text-2xl mb-4 mx-auto" />
                <h5 className="text-base mb-1">Projects</h5>
                <small className="text-xs text-gray-400">15+ Completed</small>
              </article>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Dedicated Full-Stack Web Developer with a strong academic
              background in Computer Science. Skilled in building responsive web
              applications using cutting-edge technologies like React JS,
              Tailwind CSS, Javascript. I enjoy exploring new technologies. I am
              a quick learner with a fun, outgoing personality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
