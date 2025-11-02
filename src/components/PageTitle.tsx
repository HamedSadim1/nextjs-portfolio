type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div>
      <h1 className="text-6xl font-bold pb-5 border-b bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{title}</h1>
    </div>
  );
};

export default PageTitle;
