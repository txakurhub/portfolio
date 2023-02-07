const GalleryCard = ({ img, title, description }) => {
  return (
    <a href={""} className="flex flex-row-reverse">
      <img src={img} className="lg:h-60 sm:mb-2" title={title} alt="" />
      <div>
        <h2 className="font-medium xl:text-4xl">{title}</h2>
        <p className="text-xs opacity-50 font-thin">{description}</p>
      </div>
    </a>
  );
};

export default GalleryCard;
