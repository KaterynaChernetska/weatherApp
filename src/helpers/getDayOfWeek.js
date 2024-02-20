const getDayOfWeek = (dateString) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return days[dayOfWeek];
  };

  export default getDayOfWeek;