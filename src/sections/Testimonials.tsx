import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

type Testimonial = {
  name: string;
  position: string;
  text: string;
  avatar: { src: string } | string;
};

const testimonials: Testimonial[] = [
  {
    name: "Fabian Petersen",
    position: "Software Developer @ Internpulse",
    text: "I had the opportunity to work with Paul on the POS Padi project and it was a genuinely great experience. He's one of the most dedicated and trustworthy developers I've had the chance to work with. No matter how big or small the task, he always showed up with a positive attitude and gave it his all. We could count on him to deliver what was discussed in the meetings and do it the right way or fix issues ASAP. I will definitely recommend Paul for your team, I will also gladly work with him again.",
    avatar: memojiAvatar1,
  },
  {
    name: "Benjamin",
    position: "Software Engineer @ Internpulse",
    text: "Paul has been an incredible colleague during my internship at InternPulse. He takes ownership of his tasks and consistently delivers high-quality work on time. His experience and problem-solving skills stand out. He approaches challenges with a unique perspective, and his methods are worth learning from. ",
    avatar: memojiAvatar3,
  },
  // {
  //   name: "Daniel White",
  //   position: "CEO @ InnovateCo",
  //   text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
  //   avatar: memojiAvatar3,
  // },
  // {
  //   name: "Emily Carter",
  //   position: "Product Manager @ GlobalTech",
  //   text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
  //   avatar: memojiAvatar4,
  // },
  // {
  //   name: "Michael Brown",
  //   position: "Director of IT @ MegaCorp",
  //   text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
  //   avatar: memojiAvatar5,
  // },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duuration:90s] hover:[animation-play-state:paused]">
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <img
                          src={
                            typeof testimonial.avatar === "object" &&
                            "src" in testimonial.avatar
                              ? testimonial.avatar.src.toString()
                              : testimonial.avatar.toString()
                          }
                          alt={testimonial.name}
                          className="max-h-full"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
