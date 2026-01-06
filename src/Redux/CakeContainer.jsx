import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./CakeSlice";

function CakeContainer() {
  // Here we select a particular department
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  //This is dispacth function same as dispatcher in useReducer
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Number of Cakes: {numOfCakes}</h2>
        {/* Here it will tell which action we will Perform  */}
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      </div>
    </>
  );
}

export default CakeContainer;
