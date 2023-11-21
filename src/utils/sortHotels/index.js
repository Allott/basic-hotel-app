// Why separate file?
// In case we want to unit test

const sortHotels = (hotelData, sortValue) => 
{
  return hotelData.sort((a, b) => {
    const { sortName } = sortValue;
    const aValue = a[sortName];
    const bValue = b[sortName];
    if (aValue < bValue) {
        return sortValue.ascending ? -1 : 1;
    }
    if (aValue > bValue) {
        return sortValue.ascending ? 1 : -1;
    }
    return 0;
  })
}

export default sortHotels;