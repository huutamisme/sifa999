import NavLayout from "@/components/NavLayout";
import { AboutData } from "./AboutData";

const About: React.FC = () => {
    return (
        <NavLayout>
            <div className="flex flex-col space-y-4 px-4">
                {AboutData.map((about, index) => (
                    <div key={index}>
                        <p className="text-2xl font-semibold">{index + 1}. {about.title}</p>
                        <ul className="pl-5">
                            {about.content.map((cont, index) => (
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