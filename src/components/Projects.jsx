import SlideIn from "./SlideIn";
import { projectData } from "../constants/projectData";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { SectionWrapper } from "../hoc";

const Projects = () => {
  return (
    <>
    
    <SlideIn direction="left">
      <div className="font-sans">
        <div className="text-center mb-7 mx-4">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured <span className="text-purple-600">Projects</span>
          </p>
          <p className="mt-3 font-light text-gray-500">
            Check out my selected projects to see my work in action.
          </p>
        </div>

        <div className="hover:cursor-pointer grid grid-cols-1 gap-8 px-4 py-8 mx-auto max-w-6xl  rounded-3xl  ">
          
          {projectData.map((project, index) => (
            <div
  key={index}
  className="border border-purple-500/20 rounded-3xl bg-gray-900/50 backdrop-blur-lg sticky  shadow-lg hover:shadow-xl hover:border-purple-500 transition-all duration-300 "
  style={{
    top: `calc(96px + ${index * 40}px)`,
    height: "auto",
  }}
>
  {/* Card Header */}
            <div className="flex items-center justify-between p-6 border-b border-purple-900/50">
              <span className="text-purple-300/80 text-sm font-medium">
                {String(index + 1).padStart(2, '0')} | Project Type
              </span>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-purple-900/50 hover:bg-black transition-colors"
              >
                <GitHubLogoIcon className="h-8 w-8 text-purple-900 hover:text-white transition-colors" />
              </a>
            </div>

            {/* Card Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-xl border-2 border-purple-900/30 lg:order-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1227]/60 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-between lg:order-2">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="p-3 rounded-full bg-purple-900/30 border border-purple-900/50">
                      {project.icon}
                    </span>
                    {project.title}
                  </h2>
                  <p className="text-purple-200/80 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {project.technologies.map((tech) => (
                      <img
                        key={tech}
                        src={`/img/tech-icons/${tech}.svg`}
                        alt={tech}
                        className="h-8 w-8 object-contain hover:scale-110 transition-transform"
                        title={tech}
                      />
                    ))}
                  </div>
                </div>

                {/* Live Preview */}
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors w-fit no-underline"
                >
                  <span className="text-xl">🌍</span>
                  <span className="border-b border-transparent hover:border-purple-300">
                    Live Preview →
                  </span>
                </a>
              </div>
            </div>
</div>
          ))}
        </div>
      </div>
    </SlideIn>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');


