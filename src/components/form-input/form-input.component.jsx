import "./form-input.styles.scss";

const FormInput = ({ label, inputProps }) => (
  <div className="group">
    <input className="form-input" {...inputProps} />
    <label
      className={`${inputProps.value.length ? "shrink" : ""} form-input-label`}
    >
      {label}
    </label>
  </div>
);

export default FormInput;
