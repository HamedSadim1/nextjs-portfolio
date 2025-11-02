// Definieer de props voor de PageTitle component
type Props = {
  title: string;
};

/**
 * PageTitle component voor het weergeven van paginatitels.
 * Toont een grote, gestylde h1 kop met een gradient achtergrond.
 * Gebruikt voor consistente titels op verschillende pagina's.
 */
const PageTitle = ({ title }: Props) => {
  return (
    <div>
      {/* De h1 is het belangrijkste kop-element op de pagina, gestyled met een gradient */}
      <h1 className="bg-linear-to-r border-b from-blue-500 via-purple-500 to-pink-500 bg-clip-text pb-5 text-6xl font-bold text-transparent">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
