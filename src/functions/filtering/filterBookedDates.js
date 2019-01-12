export default function filterBookedDates (bookings) {
    const bookedDates = bookings.map(booking => booking.date);
        return bookedDates;
};