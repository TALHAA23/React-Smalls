export const RATINGS = ["general audiences (G)","parental guidance (PG-13)","Restricted (R)","All ages (TV-Y)","X"];

interface RatingResult {
    matchedRating:(string|null),
    unMatchedRating:string[]
}

export default function ratingsResult(userSelectedRating:object, movieRated:string):RatingResult {
    const result:RatingResult={
        matchedRating:null,
        unMatchedRating:[]
    }
    userSelectedRating.map(rating=> rating.split(" ").pop().toLowerCase()==`(${movieRated.toLowerCase()})`?result.matchedRating=rating:result.unMatchedRating.push(rating)
    );
    return result
}