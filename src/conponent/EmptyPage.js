import { Link } from "react-router-dom";

export default function EmptyPage(){
    return(
        <>
            <h1>
                잘못된 페이지 입니다.
            </h1>
            <Link to="/">돌아가기</Link>
        </>
    );
}