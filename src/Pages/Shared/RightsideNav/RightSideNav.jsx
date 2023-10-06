
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiOutlineFacebook } from "react-icons/ai"
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-4">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle className="text-2xl"></FcGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <AiFillGithub className="text-2xl"></AiFillGithub>
                    Login With GitHub
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl">Find Us On</h2>
                <a className="flex p-4 text-lg items-center border rounded-t-lg " href="">
                    <AiOutlineFacebook className="mr-2"></AiOutlineFacebook>
                    FaceBook
                </a>
                <a className="flex p-4 text-lg items-center border-x  " href="">
                    <AiFillTwitterCircle className="mr-2"></AiFillTwitterCircle>
                    Twitter
                </a>
                <a className="flex p-4 text-lg items-center border rounded-b-lg " href="">
                    <AiFillInstagram className="mr-2"></AiFillInstagram>
                    Instagram
                </a>
            </div>
            <div className="p-4 space-y-5">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;