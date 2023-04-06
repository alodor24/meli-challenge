import { Link } from "react-router-dom";
import ErrorIcon from "/assets/images/error-icon.svg";

const Error = () => {
  return (
    <div className="error">
      <img
        className="img-responsive error-image"
        src={ErrorIcon}
        alt="Error Icon"
      />
      <p className="error-text">
        La información solicitada no pudo ser recuperada, por favor verifica o
        simplemente puedes regresar a nuestra página principal.
      </p>
      <Link className="error-link" to="/">
        Volver
      </Link>
    </div>
  );
};

export default Error;
