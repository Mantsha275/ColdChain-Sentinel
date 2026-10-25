function StorageCard(props) {
  return (
    <div className="storage-card">
      <h3>{props.name}</h3>
      <p>Temperature: {props.temperature}°C</p>
      <p className="status normal">{props.status}</p>
    </div>
  );
}

export default StorageCard;
