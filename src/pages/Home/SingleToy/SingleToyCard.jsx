const SingleToyCard = ({ toys }) => {
  const {
    _id,
    picture,
    toy_name,
    seller_name,
    price,
    rating,
    quantity,
    description,
    sub_category,
    seller_email,
  } = toys;

  return (
    <div>
      <h3>{toy_name}</h3>
    </div>
  );
};

export default SingleToyCard;
