type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div>
      <h1 className="text-6xl font-bold pb-5 border-b">{title}</h1>
    </div>
  );
};

export default PageTitle;
