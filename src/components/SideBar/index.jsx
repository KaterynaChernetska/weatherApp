import getDayOfWeek from "../../helpers/getDayOfWeek";

const SideBar = ({ dayData, selectedTrip }) => {
  const { days } = dayData;
  console.log(days);
  // const {daytime} = days;
  //   const day = getDayOfWeek(dayData.days[0].daytime)
  return (
    <div>
      {dayData ? (
        <div>
          <p>{getDayOfWeek(dayData?.days[0].datetime)}</p>
          <p>{dayData?.days[0].temp}<span>&deg;С</span></p>
          <h1>{selectedTrip.title}</h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SideBar;
