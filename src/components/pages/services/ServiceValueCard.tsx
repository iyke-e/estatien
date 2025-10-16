interface ServiceValueCardProp {
  title: string;
  description: string;
  image: string;
}

const ServiceValueCard = ({
  title,
  description,
  image,
}: ServiceValueCardProp) => {
  return (
    <div className="border rounded-lg border-gray-15 p-10">
      <div className="flex items-center gap-4 mb-4">
        <div
          className="grid bg-no-repeat bg-cover bg-center h-15 aspect-square"
          style={{ backgroundImage: `url(${image})` }}
        />
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="text-gray-60 ">{description}</p>
    </div>
  );
};

export default ServiceValueCard;
