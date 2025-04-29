import {SectionHeader} from "@/components/SectionHeader";
import {Card} from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image"
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"
import {TechIcon} from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"

const toolboxItems = [
    {
        title: "Javascript",
        iconType: JavascriptIcon,
    },
    {
        title: "HTML5",
        iconType: HTMLIcon,
    },
    {
        title: "CSS5",
        iconType: CssIcon,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },
    {
        title: "Chrome",
        iconType: ChromeIcon,
    },
    {
        title: "Github",
        iconType: GithubIcon,
    },

]

const hobbies = [
    {
        title: "Painting",
        emoji: "🎨"
    },
    {
        title: "Photography",
        emoji: "📸"
    },
]

export const AboutSection = () => {
    return (
        <div className="pb-96">
            <SectionHeader
                eyebrow="About Me"
                title="A Glimpse Into My World"
                description="Learn more about who I am, what I do, and what inspires me"
            />
            <div>
                <Card>
                    <div>
                        <StarIcon/>
                        <h3>My Reads</h3>
                        <p>Explore the books shaping my perspectives.</p>
                    </div>
                    <Image src={bookImage} alt="book cover"/>
                </Card>
                <Card>
                    <div>
                        <StarIcon/>
                        <h3>My Toolbox</h3>
                        <p>Explore the technologies and tools I use to craft exceptional digital experiences. </p>
                    </div>
                    <div>
                        {toolboxItems.map((item, index) => (
                            <div key={item.title}>
                                <TechIcon component={item.iconType}/>
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </Card>
                <Card>
                    <div>
                        <StarIcon/>
                        <h3>Beyond the Code</h3>
                        <p>Explore my interests and hobbies beyond the digital realm.</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <Image src={mapImage} alt="map image"/>
                        <Image src={smileMemoji} alt="smile memoji"/>
                    </div>
                </Card>
            </div>
        </div>
    );
};
