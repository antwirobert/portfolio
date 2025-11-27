import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, GithubIcon } from "lucide-react"
import { firstIconLists, secondIconLists, thirdIconLists } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef}>
      <h1 className="font-semibold md:text-5xl text-3xl text-center translate-y-25">My Work</h1>
      <div className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">
              <div ref={rydeRef} className="first-project-wrapper">
                <a 
                  href="https://agent-meet-ai.vercel.app"
                  target="_blank" 
                  className="combined-wrapper"
                >
                  <div className="dashboard-shot">
                    <img src="/images/project-meetings.png" alt="Meetings Dashboard" />
                  </div>

                  <div className="call-shot">
                    <img src="/images/project-call.png" alt="AI Meeting Call" />
                  </div>
                </a>


                <div className="text-content">
                  <h2>
                    AgentMeet AI - Real Time Video Meetings Powered by Autonomous AI Agents
                  </h2>
                  <p className="text-white-50 md:text-xl max-lg:line-clamp-4">
                    AgentMeet AI is a next-generation video calling platform where every meeting includes a real-time AI agent trained for a specific role. These aren’t summaries or offline scripts — each session is a live call with an AI that listens, responds, and participates just like a human.
                    Whether you need a language tutor, interview coach, sales assistant, or a completely custom persona, AgentMeet AI gives you a powerful assistant directly inside your meeting.
                  </p>
                  <ul className="max-xl:hidden text-white-50 md:text-xl flex flex-col gap-y-3">
                    🌟 Features
                    
                    <li>🎥 Real-Time AI Video Calls</li> 
                    Start meetings with AI agents that interact live using Stream Video SDK and OpenAI Realtime API.

                    <li>🧠 Custom AI Agents</li>
                    Create agents with custom names, personalities, tones, and behaviors.
                    Example instruction:

                    “Be direct, hyper-driven, and over the top like a founder who just raised a seed round.”

                    <li>📅 Meeting Scheduling</li>
                    Meetings can be created, scheduled, cancelled, or started later. Upcoming meetings stay in a pending state until you join.
                  </ul>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      {firstIconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-5 text-white-50">
                      <a href="https://github.com/antwirobert/agentmeet-ai" target="_blank" className="hover:text-white-50/80">
                        <GithubIcon className="size-6 md:size-8"/>
                      </a>
                      <a href="https://agent-meet-ai.vercel.app" className="flex items-center hover:text-white-50/80 transition-colors duration-200 lg:text-2xl" target="_blank">
                      Live Demo
                      <ArrowUpRight className="size-5 lg:size-7"/>
                      </a> 
                    </div>
                  </div>
                </div>
              </div>

            <div className="project-list-wrapper overflow-hidden">
              <div className="md:w-1/2 lg:w-full">
              <a 
                href="https://trip-control-ai.vercel.app" 
                target="_blank"
              >
                <div className="outer-container bg-[#ebfcf2]">
                  <div className="screenshot-container">
                    <img src="/images/project2.png" alt="Project Screenshot" />
                  </div>
                </div>
              </a>
                <h2>TripControl - AI Powered Travel Agency Platform</h2>
                <p className="text-white-50 my-5 max-lg:line-clamp-4">TripControl is a modern travel agency platform featuring an AI-powered trip itinerary generator, a public booking website, and a robust admin dashboard. TripControl leverages cutting-edge technologies to make trip planning and management seamless for both users and admins.</p>

                <div className="flex justify-between">
                  <div className="flex items-center">
                    {secondIconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 text-white-50">
                    <a href="https://github.com/antwirobert/tripcontrol" target="_blank" className="hover:text-white-50/80">
                      <GithubIcon className="size-6 md:size-7"/>
                    </a>
                    <a href="https://trip-control-ai.vercel.app" className="flex items-center hover:text-white-50/80 transition-colors duration-200 lg:text-xl" target="_blank">
                    Live Demo
                    <ArrowUpRight className="size-5 lg:size-6"/>
                    </a> 
                  </div>
                </div>
              </div>


              <div className="md:w-1/2 lg:w-full">
              <a href="https://lynq-social.vercel.app" target="_blank">
                <div className="outer-container bg-white/90">
                  <div className="screenshot-container">
                    <img src="/images/project3.png" alt="Project Screenshot" />
                  </div>
                </div>
              </a>
                <h2>Lynq — Full Stack Social Media Application</h2>
                <p className="text-white-50 my-5 max-lg:line-clamp-4">
                  Lynq is a modern, full-stack social media platform built with Next.js, designed to deliver a seamless, fast, and secure social experience. It supports real-time interactions, user-generated content, notifications, authentication, and profile management — all wrapped in a clean, responsive UI.
                </p>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {thirdIconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 text-white-50">
                    <a href="https://github.com/antwirobert/lynq" target="_blank" className="hover:text-white-50/80">
                      <GithubIcon className="size-6 md:size-7"/>
                    </a>
                    <a href="https://lynq-social.vercel.app" className="flex items-center hover:text-white-50/80 transition-colors duration-200 lg:text-xl" target="_blank">
                      Live Demo
                      <ArrowUpRight className="size-5 lg:size-6"/>
                    </a> 
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AppShowcase;
