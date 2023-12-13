import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/UserSlice";
import { clearCart } from "../features/CartSlice";

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className=" text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-primary btn-outline capitalize"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center gap-x-6 items-center">
            <Link to="/login" className="link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link-hover text-xs sm:text-sm">
              Create An Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
