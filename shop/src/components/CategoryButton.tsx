// ProductFilter.tsx
type ProductFilterProps = {
  setCurrentCategory: (category: string) => void;
};

export const ProductFilter: React.FC<ProductFilterProps> = ({
  setCurrentCategory,
}) => {
  return (
    <div className="flex flex-row justify-center items-center my-4 space-x-2">
      <button
        className="flex rounded-md border-2 w-32 border-black focus:bg-custom-red  bg-custom-red lg:bg-custom-yellow focus:text-custom-yellow hover:text-custom-yellow lg:hover:bg-custom-red transition duration-500 ease-in-out  justify-center mt-12  lg:w-52  cursor-pointer"
        onClick={() => setCurrentCategory("All")}
      >
        All
      </button>
      <button
        className="flex rounded-md border-2 w-32 border-black focus:bg-custom-red  bg-custom-red lg:bg-custom-yellow focus:text-custom-yellow hover:text-custom-yellow lg:hover:bg-custom-red transition duration-500 ease-in-out  justify-center mt-12  lg:w-52  cursor-pointer"
        onClick={() => setCurrentCategory("Vegetable")}
      >
        Vegetable
      </button>
      <button
        className="flex rounded-md border-2 w-32 border-black focus:bg-custom-red  bg-custom-red lg:bg-custom-yellow focus:text-custom-yellow  hover:text-custom-yellow lg:hover:bg-custom-red transition duration-500 ease-in-out  justify-center mt-12  lg:w-52  cursor-pointer"
        onClick={() => setCurrentCategory("Fruit")}
      >
        Fruit
      </button>
      <button
        className="flex rounded-md border-2 w-32 border-black focus:bg-custom-red  bg-custom-red lg:bg-custom-yellow focus:text-custom-yellow hover:text-custom-yellow  lg:hover:bg-custom-red transition duration-500 ease-in-out  justify-center mt-12  lg:w-52  cursor-pointer"
        onClick={() => setCurrentCategory("Dried Fruit")}
      >
        Dried
      </button>
    </div>
  );
};

export default ProductFilter;
