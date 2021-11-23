import {FC} from "react";
import Heading from "./Heading";
import {PostType} from "../types";

type postInfoProps = {
    post: PostType
}

const PostInfo: FC<postInfoProps> = ({post}) => {
    const {title, body} = post || {};

    if (!post) {
        return <Heading tag="h3" text="Empty post"/>
    }

    return (
        <>
            <Heading tag="h3" text={title}/>
            <p>{body}</p>
        </>
    )
}

export default PostInfo;