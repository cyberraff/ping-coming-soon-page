import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

function Footer() {
	return (
		<div className='pt-[10rem]'>
			<div className=' text-Blue flex gap-5 text-4xl justify-center'>
				<FaFacebookF className=' rounded-full border-2  p-2 w-12 h-12 hover:text-white hover:bg-Blue ' />
				<FaTwitter className=' rounded-full border-2  p-2 w-12 h-12 hover:text-white hover:bg-Blue ' />
				<FaInstagram className=' rounded-full border-2  p-2 w-12 h-12 hover:text-white hover:bg-Blue ' />
			</div>
			<p className=' text-Gray pt-12'>
				{' '}
				&copy; Copyright Ping. All rights reserved.
			</p>
		</div>
	);
}

export default Footer;
