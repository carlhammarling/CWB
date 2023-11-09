export const DateConverter = (dateString: Date) => {
    const date = new Date(dateString);

    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        timeZone: 'Asia/Bangkok'
      });
}