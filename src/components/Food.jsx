import { useState } from "react";
import { data } from '../data/data.js';

const Food = () => {
  const [foods, setFoods] = useState(data)

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Elementos del menú mejor valorados</h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="text-lg font-bold text-gray-700">Filtro de comidas:</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="border border-black rounded-xl px-5 py-1 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Todas</button>
            <button
              onClick={() => filterType("burger")}
              className="border border-black rounded-xl px-5 py-1 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Hamburguesas</button>
            <button
              onClick={() => filterType("pizza")}
              className="border border-black rounded-xl px-5 py-1 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Pizza</button>
            <button
              onClick={() => filterType("salad")}
              className="border border-black rounded-xl px-5 py-1 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Ensaladas</button>
            <button
              onClick={() => filterType("chicken")}
              className="border border-black rounded-xl px-5 py-1 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Pollo</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
            <img src={item.image}
              alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg " />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold text-lg">{item.name}</p>
              <p>
                <span className="bg-orange-600 text-white p-1 rounded-full text-lg">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food;
