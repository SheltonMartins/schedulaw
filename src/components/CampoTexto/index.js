import './CampoTexto.css'

const CampoTexto = ({ label, id, value, onChange, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default CampoTexto;