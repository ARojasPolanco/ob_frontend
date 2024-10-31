import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/buttons/Button";
import useAuthStore from "../../../store/useAuthStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginAsAdmin, loginAsUser } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si el email contiene el dominio especial
    if (email.endsWith("@ofertas-bahia.net")) {
      loginAsAdmin();
    } else {
      loginAsUser();
    }

    navigate("/");
  };

  return (
    <div className="flex md:items-center justify-center md:min-h-screen bg-custom-gradient p-4 font-poppins">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-titles">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary-100"
              placeholder="email@ejemplo.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-titles mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary-100"
              placeholder="********************"
            />
          </div>

          <Button variant="secondary" type="submit">
            Sign In
          </Button>
        </form>

        <div className="mt-4 text-start">
          <p className="text-titles">
            ¿Todavía no te registraste?,
            <Link
              to="/register"
              className="text-menu-color hover:underline ml-1"
            >
              Registro
            </Link>
          </p>
          <p className="mt-2">
            <Link to="/" className="text-titles hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
