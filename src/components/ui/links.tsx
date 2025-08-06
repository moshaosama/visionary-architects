const LinksData: { link: string }[] = [
  {
    link: "Home",
  },
  {
    link: "Studio",
  },
  {
    link: "Services",
  },
  {
    link: "Content",
  },
  {
    link: "FAQ's",
  },
];

const Links_Render = () => {
  return (
    <>
      <div className="text-[gray] flex items-center gap-7">
        {LinksData?.map((link, index: number) => (
          <div key={index}>
            <h1 className="cursor-pointer">{link.link}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Links_Render;
