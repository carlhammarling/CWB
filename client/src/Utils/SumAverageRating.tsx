export const sumAverageRating = (reviews: Review[]) => {
    if(!reviews || reviews.length === 0) {
      return 0
    }
    const total:number = reviews.reduce((sum, review) => sum + review.rating, 0)
    const averageRating:number = total / reviews.length;
    //toFixed = one decimal
    return averageRating.toFixed(1);
  }