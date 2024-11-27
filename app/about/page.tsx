import NavLayout from "@/components/NavLayout";
import { introductions } from "./AboutData";

const About: React.FC = () => {
    return (
        <NavLayout>
            <div className="flex flex-col space-y-4 px-4">
                {introductions.map((introduction, index) => (
                    <div key={index}>
                        <span className="text-2xl font-semibold text-background">{index + 1}.</span>
                        <span className="text-2xl font-semibold text-background underline">{introduction.title}</span>
                        <ul className="pl-5">
                            {introduction.content.map((cont, index) => (
                                <li key={index}>
                                    {cont}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
        </NavLayout>
    );
}
export default About;