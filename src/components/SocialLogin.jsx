import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from 'react-icons/vsc';
const SocialLogin = () => {
    return (
        <div>
            <button className='border  text-xl flex justify-center w-full items-center gap-2 p-2'><FcGoogle />Google</button>
            <button className='border text-xl flex justify-center w-full items-center gap-2 p-2'><VscGithub></VscGithub>Github</button>
        </div>
    );
};

export default SocialLogin;