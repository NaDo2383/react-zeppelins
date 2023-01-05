import { RxTwitterLogo } from "react-icons/rx";
import { GrLinkedinOption } from "react-icons/gr";
import { SiMedium } from "react-icons/si";

export default function BlogPost() {
    return (
        <div id="blogPost">
            <div id="blogPostText">
                <h1 id="blogPostHeader">
                    Blog Posts
                </h1>
                <h2 id="blogPostHeader1">
                    I think so, this is it.
                </h2>
                <div id="blogPostText">
                    Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.
                </div>
                <div id="socialButtons">
                    <span className="socialButton" id="twitter">
                        <RxTwitterLogo color='white' />
                        TWITTER
                    </span>
                    <span className="socialButton" id="linkedin">
                        <GrLinkedinOption color='white' />
                        LINKEDIN
                    </span>
                    <span className="socialButton" id="medium">
                        <SiMedium color='white' />
                        MEDIUM
                    </span>
                </div>
            </div>
            <img src={require('./pic/Group 296.png')} alt="" />
        </div>
    )
}