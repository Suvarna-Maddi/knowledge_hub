import { useState } from "react";
import { Award, Briefcase, CalendarClock, Code2, GraduationCap } from "lucide-react";

const steps = [
  {
    id: "step-1",
    title: "Expert Trainers",
    icon: GraduationCap,
    description: "Train under experienced mentors who simplify complex topics, guide you step-by-step, and help you build skills that are ready for real-world challenges.",
  },
  {
    id: "step-2",
    title: "Practical Learning",
    icon: Code2,
    description: "Go beyond theory with hands-on practice, real-time projects, and problem-solving sessions that prepare you for real industry challenges.",
  },
  {
    id: "step-3",
    title: "Placement Support",
    icon: Briefcase,
    description: "Get complete career guidance including resume building, mock interviews, communication training, and job assistance to help you confidently step into the industry.",
  },
  {
    id: "step-4",
    title: "Flexible Batches",
    icon: CalendarClock,
    description: "Choose timings that fit your schedule — whether you're a student or working professional, our flexible batches make learning easy and convenient.",
  },
  {
    id: "step-5",
    title: "Certified Courses",
    icon: Award,
    description: "Complete your training with certifications that prove your knowledge and give you confidence to step into real-world roles.",
  },
  {
    id: "step-6",
    title: "Multi-Skill Training",
    icon: Code2,
    description: "Master multiple in-demand skills including Programming, Cloud Computing, Data Analysis, Networking, and Spoken English — all under one roof.",
  }
];

export function LearningPath() {
  const [activeStep, setActiveStep] = useState<string>("step-1");

  return (
    <>
      <style>{`
        .panel {
            position: relative;
            background: linear-gradient(135deg, #0a1128, #102a5c, #16428c);
            overflow: hidden;
            cursor: pointer;
            flex: 1;
            transition: flex 0.5s cubic-bezier(0.25, 1, 0.5, 1), background 0.5s ease;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        .panel:last-child {
            border-right: none;
        }
        .panel:hover {
            background: linear-gradient(135deg, #0a1128, #13326a, #1a4f9e);
        }
        .panel.active {
            flex: 6;
            cursor: default;
        }
        .panel-vertical-title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-90deg);
            transform-origin: center;
            color: #ffffff;
            font-size: 1.25rem;
            font-weight: 600;
            white-space: nowrap;
            opacity: 1;
            transition: opacity 0.25s ease;
            letter-spacing: 1px;
            pointer-events: none;
        }
        .panel.active .panel-vertical-title {
            opacity: 0;
        }
        .panel-content {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.4s ease, transform 0.4s ease;
            pointer-events: none;
            z-index: 2;
            text-align: center;
        }
        .panel.active .panel-content {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
            transition-delay: 0.2s;
        }
        .panel-icon {
            position: absolute;
            top: 2rem;
            left: 2rem;
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4fc3f7;
            backdrop-filter: blur(5px);
            opacity: 0;
            transform: scale(0.8);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .panel.active .panel-icon {
            opacity: 1;
            transform: scale(1);
            transition-delay: 0.1s;
        }
        @media (max-width: 900px) {
            .accordion-container {
                flex-direction: column;
                height: auto;
                min-height: 600px;
            }
            .panel {
                flex: 1;
                min-height: 80px;
            }
            .panel.active {
                flex: 4;
                min-height: 250px;
            }
            .panel-vertical-title {
                transform: translate(-50%, -50%);
                bottom: auto;
                top: 50%;
                left: 50%;
                transform-origin: center;
                rotate: 0deg;
                font-size: 1rem;
                text-align: center;
                width: 100%;
            }
            .panel-content {
                margin-top: 4rem;
                border-top: none;
            }
        }
      `}</style>
      
      <div className="w-full max-w-6xl mx-auto">
        <div className="accordion-container flex h-[500px] w-full rounded-[24px] overflow-hidden filter drop-shadow-2xl">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            const Icon = step.icon;
            
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`panel ${isActive ? "active" : ""}`}
              >
                <div className="relative w-full h-full p-6 md:p-8 flex flex-col justify-center items-center">
                  <div className="panel-icon">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="panel-content flex flex-col items-center">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 font-display drop-shadow-md">
                      {step.title}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed w-full max-w-[90%]">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="panel-vertical-title font-display">
                    {step.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
