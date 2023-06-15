import { CarDetailsProps } from "@/types";

const CarDetails = ({
  isOpen,
  closeModal,
  car: { city_mpg, year, make, model, transmission, drive },
}: CarDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
