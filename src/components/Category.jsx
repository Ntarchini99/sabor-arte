import { categories } from "../data/data.js";

const Category = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 border-t-4 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Elementos del menú mejor valorados</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
        {categories.map((item, index) => (
          <div key={index} className=" bg-gray-100 rounded-lg p-4 flex justify-between items-center">
            <h2 className="font-bold text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category;
