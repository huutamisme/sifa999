import NavLayout from "@/components/NavLayout";
import { introductions } from "./AboutData";

const About: React.FC = () => {
    return (
        <NavLayout>
            <h2 className="text-4xl text-background font-bold text-center">Giới thiệu</h2>
            {introductions.map((introduction, index) => (
                <div className="collapse collapse-arrow my-6 shadow-lg border border-2" key={index}>
                    {/* Sử dụng defaultChecked nếu index = 0 */}
                    <input type="checkbox" name="statsgroup" defaultChecked={index === 0} />
                    <div className="collapse-title text-2xl font-semibold text-background">
                        {index + 1}. {introduction.title}
                    </div>
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
            ))}
        </NavLayout>
    );
};
export default About;
