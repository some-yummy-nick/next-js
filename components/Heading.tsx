import React, {FC} from "react";

type headingProps = {
    tag?: string,
    text: string,
}

const Heading: FC<headingProps> = ({tag='h1', text}) => {
    return React.createElement(tag, {  }, text);
}
export default Heading;