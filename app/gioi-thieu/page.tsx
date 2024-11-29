import NavLayout from "@/components/NavLayout";
import { introductions } from "./AboutData";
import { metadataConfig } from "@/app/metadata";

export const metadata = metadataConfig["/gioi-thieu"];

const About: React.FC = () => {
    return (
        <NavLayout>
            <h2 className="text-4xl text-background font-bold text-center">Giới thiệu</h2>
            {introductions.map((introduction, index) => {
                const inputId = `collapse-${index}`;
                return (
                    <div className="collapse collapse-arrow my-6 shadow-lg border border-2" key={index}>
                        {/* Sử dụng id để kết nối input và label */}
                        <input
                            type="checkbox"
                            id={inputId}
                            name="statsgroup"
                            defaultChecked={index === 0}
                            className="peer hidden"
                        />
                        <label
                            htmlFor={inputId}
                            className="collapse-title text-2xl font-semibold text-background cursor-pointer peer-checked:collapse-open"
                        >
                            {index + 1}. {introduction.title}
                        </label>
                        <div className="collapse-content">
                            <div className="flex-col">
                                <ul className="pl-5">
                                    {introduction.content.map((cont, idx) => (
                                        <li key={idx}>
                                            {cont}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </NavLayout>
    );
};
export default About;
