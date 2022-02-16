import "./skeletons.css"

export default function PostSkeleton(){
    return(
        <div className="postSkeleton">
            <div className="postSkeletonWrapper">
            <div className="postSkeletonTop">
                <div className="postSkeletonImg wave"></div>
                <div className="postSkeletonDesc">
                    <div className="postSkeletonUsername wave"></div>
                    <div className="postSkeletonDate wave"></div>
                </div>
            </div>
            <div className="postSkeletonBottom">
                <div className="postSkeletonText1 wave"></div>
                <div className="postSkeletonText2 wave"></div>
                <div className="postSkeletonText3 wave"></div>
            </div>
            </div>
        </div>
       )
}