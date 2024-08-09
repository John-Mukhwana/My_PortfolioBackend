type Rating = {
    rating: number;
    comment: string;
  };
  
  const ratings: Rating[] = [];
  
  export const addRating = (rating: Rating) => {
    ratings.push(rating);
  };
  
  export const getRatings = () => {
    return ratings;
  };
  