import React from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsTwitterX } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { FaLinkedin } from "react-icons/fa6";
const Findus = () => {
    return (
        <div className='border'>
            <div className="join flex items-start  join-vertical">
  <button className="btn bg-base-100 join-item w-full text-xl"><BiLogoFacebook></BiLogoFacebook>Facebook</button>
  <button className="btn  bg-base-100 w-full join-item"><BsTwitterX></BsTwitterX>Twitter</button>
  <button className="btn  bg-base-100 w-full join-item"><FaLinkedin/>Linkedin</button>
</div>
        </div>
    );
};

export default Findus;