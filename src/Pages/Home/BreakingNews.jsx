import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3]">
            <button className="btn bg-[#D72050] text-white">Breaking News</button>
            <div className=" ml-2 mt-3">
                <Marquee pauseOnHover={true} speed={100}>
                    <Link className="mr-12" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link className="mr-12" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link className="mr-12" to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;