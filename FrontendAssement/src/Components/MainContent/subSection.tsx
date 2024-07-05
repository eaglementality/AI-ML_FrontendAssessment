import { Logo } from "../header/Logo";
import aiTutor from "../../assets/138714605_10312453.jpg";

export const SubSection = () => {
  return (
    <main className="w-full text-center p-8">
        <h1 className="text-purple-500 font-bold text-3xl py-10">AI Tutor</h1>
      <div className="flex  gap-x-10 ">
        <Logo src={aiTutor} alt="ai tutor" LogoStlye="w-[30rem] h-30rem] rounded-full" />
        <p className="p-5 pt-10">
          An AI tutor is an advanced software application designed to provide
          personalized educational assistance to students. Utilizing artificial
          intelligence, machine learning, and natural language processing
          technologies, an AI tutor can simulate human-like tutoring experiences
        </p>
      </div>
    </main>
  );
};
