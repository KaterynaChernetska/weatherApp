import dd from '../../assets/cities/Amsterdam.jpg'

const TripListItem = ({ trip }) => {
  const { startDate, title, endDate, image, id } = trip;
  console.log(trip);
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        {startDate} - {endDate}
      </p>
    </li>
  );
};

export default TripListItem;
