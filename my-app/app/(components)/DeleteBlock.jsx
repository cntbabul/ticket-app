import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon
      icon={faX}
      color="#dc3545"
      className="hover:cursor-pointer hover:"
    />
  );
};

export default DeleteBlock;
