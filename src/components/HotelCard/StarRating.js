const StartRating = ({ rating }) => (
    <div>
        {[...Array(rating)].map((e, i) => <span key={i}>⭐</span>)}
    </div>
)

export default StartRating;