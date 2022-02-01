const formatDate = (year, month, day, ...rest) => `${day}/${month}/${year} - ${rest.join(':')}`;

const dateInfo = ['1981', '7', '31', '22', '47', '12'];

const formattedDate = formatDate(...dateInfo)

console.log(formattedDate);