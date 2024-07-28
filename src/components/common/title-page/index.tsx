import { Fade } from "react-awesome-reveal";

interface TitlePageProps {
  title: string;
}

const TitlePage = ({ title }: TitlePageProps) => {
  return (
    <Fade>
      <div className="flex justify-center mb-3">
        <p className="text-[21px]">{title}</p>
      </div>
    </Fade>
  );
};

export default TitlePage;
