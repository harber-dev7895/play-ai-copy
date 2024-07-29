interface TitlePageProps {
  title: string;
}

const TitlePage = ({ title }: TitlePageProps) => {
  return (
    <div className="flex justify-center mb-3 animated animatedFadeInUp fadeInUp">
      <p className="text-[21px]">{title}</p>
    </div>
  );
};

export default TitlePage;
