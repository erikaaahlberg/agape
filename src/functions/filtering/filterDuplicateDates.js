export default function filterDuplicateDates (bookings) {
    /* Filter duplicate dates to sort bookings by date */
    const duplicateDates = [];
    const lastIndex = bookings.length - 1;
    for (let i = 0; i < bookings.length; i++) {
      if (i !== lastIndex) {
        for (let p = i + 1; p < bookings.length; p++) {
          if (bookings[i].date === bookings[p].date) {
            duplicateDates.push(bookings[i].date);
          }
        }
      }
    }
    return duplicateDates;
};