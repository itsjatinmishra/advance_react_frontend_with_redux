import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQty,
  decrementQty,
  removeItem,
  clearCart,
} from "../Practice_Redux/ProductSlice";

export default function ProductDisplay() {
  const dispatch = useDispatch();

  // Products & Cart from Redux store
  const products = useSelector((state) => state.product.products);
  const cartData = useSelector((state) => state.product.cart);

  // Cart calculations
  const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {/* ================= PRODUCTS ================= */}
        <div className="col-lg-7">
          <div className="row">
            {products.map((product) => (
              <div className="col-sm-6 col-md-4 mb-4 d-flex" key={product.id}>
                <div className="card w-100 h-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text fw-bold">₹{product.price}</p>

                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CART ================= */}
        <div className="col-lg-5">
          <div className="border rounded p-3">
            <h3 className="mb-3">Cart</h3>

            {cartData.length === 0 ? (
              <p className="text-muted">Your cart is empty</p>
            ) : (
              <>
                <p>
                  <strong>Total Items:</strong> {totalItems}
                </p>
                <p>
                  <strong>Total Price:</strong> ₹{totalPrice}
                </p>

                <hr />

                {cartData.map((item) => (
                  <div key={item.id} className="mb-3">
                    <h6>{item.name}</h6>
                    <p className="mb-1">₹{item.price}</p>

                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => dispatch(decrementQty(item.id))}
                      >
                        −
                      </button>

                      <span className="fw-bold">{item.quantity}</span>

                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => dispatch(incrementQty(item.id))}
                      >
                        +
                      </button>

                      <button
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Remove
                      </button>
                    </div>

                    <p className="mt-2 mb-0">
                      <strong>Total:</strong> ₹{item.price * item.quantity}
                    </p>

                    <hr />
                  </div>
                ))}

                <button
                  className="btn btn-warning w-100"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
