import './User.css';

export default function User(props) {
  return (
    <div className="user-card">
      <img src={props.image} alt={props.firstName} />
      <div>
        <h2>{props.firstName} {props.lastName}</h2>
        <p>{props.age} anos • {props.gender}</p>
        <p><b>Email:</b> {props.email}</p>
        <p><b>Telefone:</b> {props.phone}</p>
        <p><b>Empresa:</b> {props.company?.name}</p>
        <p><b>Cargo:</b> {props.company?.title}</p>
        <p><b>Cidade:</b> {props.address?.city} - {props.address?.stateCode}</p>
      </div>
    </div>
  );
}