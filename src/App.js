import CommentDetail from "./CommentDetail";
import {faker} from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";
import './style/App.css';

function App() {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author={"Geoff"} timeAgo={"Today @ 4:45"} slogan={"Hey! Hey! Hey!"}
                               pic={faker.image.image()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={"Inity"} timeAgo={"Today @ 12:00"} slogan={"Can you Dig It!"}
                               pic={faker.image.image()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author={"Iniko"} timeAgo={"Today @ 7:30"} slogan={"It's on Baby!"}
                               pic={faker.image.image()}/>
            </ApprovalCard>

        </div>);
};

export default App;
