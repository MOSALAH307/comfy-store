const FormInput = ({ label, type, name, size, defaultValue }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        className={`input input-bordered ${size}`}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;
