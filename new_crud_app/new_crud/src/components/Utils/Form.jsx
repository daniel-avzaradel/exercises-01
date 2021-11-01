import React from "react";
import FormRow from "./FormRow";

import styles from "./Form.module.css";
import { FaUserPlus } from "react-icons/fa";

function Form() {
  return (
    <div className={styles.form__page}>
      <div className={styles.form__container}>
        <button className={styles.form__addUserBtn}>
          <FaUserPlus size="20" color="cyan" />
          Add User
        </button>
        <table>
          <tr className={styles.form__tableHeader}>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>status</td>
            <td>edit</td>
            <td>delete</td>
          </tr>
          <FormRow
            id="1"
            name="daniel"
            email="daniel@gmail.com"
            status="active"
          />
          <FormRow
            id="2"
            name="david"
            email="david@gmail.com"
            status="active"
          />
          <FormRow
            id="3"
            name="aaban"
            email="aaban@gmail.com"
            status="active"
          />
        </table>
      </div>
    </div>
  );
}

export default Form;
