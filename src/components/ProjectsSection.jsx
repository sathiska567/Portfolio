import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    title: "Vehicle Mart",
    description: "Vehicle Mart is a marketplace offering a wide range of vehicles with convenient buying and selling options.",
    image: "/projects/vehicle_mart.png",
    tags: ["React", "Nodejs", "MongoDB", "Contabo", "Jenkins", "Docker", "Graffana"],
    demoUrl: "#",
    githubUrl: "https://github.com/Vehicle-Mart-Project?view_as=public",
  },
  {
    id: 2,
    title: "SkillOra",
    description: "Skillora is a Sri Lankan freelance platform that connects people with skills to clients who need services.",
    image: "/projects/Skillora-logo.png",
    tags: ["Nextjs", "Nodejs","Fastify", "PostgresQL", "Contabo", "Github Actions", "Docker", "Graffana"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Sport Management System",
    description:
      "The sports management system streamlines tasks like game scheduling, player management, and registrations.It provides a centralized online platform for admins, coaches, players, and organizers.Overall, it improves efficiency, organization, and real-time coordination in sports activities.",
    image: "/projects/sport_management.png",
    tags: ["React", "Node.Js", "Express.Js", "MongoDB", "AWS"],
    demoUrl: "#",
    githubUrl: "https://github.com/sathiska567/Sport-Management-System-Project",
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description:
      "Collaborated with a colleague to create a student record system for G.U. Language Academy, enhancing Cambridge English exam preparation.",
    image: "/projects/e-learning.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "AWS EC2"],
    demoUrl: "#",
    githubUrl: "https://github.com/sathiska567/English-Student-Management-System",
  },
  {
    id: 4,
    title: "Smart AI Metadata Generator for Images",
    description:
      "A Smart AI Metadata Generator for Images automatically creates titles, tags, and descriptions based on image content using artificial intelligence. It helps improve search visibility, organization, and SEO by generating accurate and relevant metadata quickly.",
    image: "/projects/project-5.png",
    tags: ["React", "Nodejs", "Expressjs", "MongoDB", "AWS EC2"],
    demoUrl: "#",
    githubUrl: "#",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="projects-swiper pb-12"
        >
          {projects.map((project, key) => (
            <SwiperSlide key={key} className="h-auto">
              <div className="group gradient-border rounded-xl overflow-hidden card-hover h-full flex flex-col">
                {/* Image Container - Fixed Height */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Container - Flexible Height */}
                <div className="p-6 flex flex-col flex-grow bg-card/50 backdrop-blur-sm">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Title - Fixed Height */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description - Fixed Height with Line Clamp */}
                  <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action Buttons - Fixed at Bottom */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium flex-1 justify-center group/btn"
                    >
                      <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 text-sm font-medium flex-1 justify-center group/btn"
                    >
                      <Github size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sathiska567"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
