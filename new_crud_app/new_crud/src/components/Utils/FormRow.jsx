import React from "react";
import styles from "./Form.module.css";

import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

function FormRow({ id, name, email, status }) {
  return (
    <tr className={styles.form__tableBody}>
      <td>{id}</td>
      <td>{name.charAt(0).toUpperCase() + name.slice(1)}</td>
      <td>{email}</td>
      <td>{status}</td>
      <td>
        <FaPencilAlt />
      </td>
      <td>
        <RiDeleteBin6Fill />
      </td>
    </tr>
  );
}

export default FormRow;
