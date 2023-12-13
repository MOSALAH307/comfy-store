const FormCheckbox = ({ label, name, size, defaultalue }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        id={name}
        name={name}
        className={`checkbox checkbox-primary ${size}`}
        defaultChecked={defaultalue}
      />
    </div>
  );
};

export default FormCheckbox;
