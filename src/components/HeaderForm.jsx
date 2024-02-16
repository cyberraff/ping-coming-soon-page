import { useState } from 'react';
import LogoImg from '/src/assets/logo.svg';
function HeaderForm() {
	const [email, setEmail] = useState('');
	const [emailData, setEmailData] = useState(false);
	const [empty, setEmpty] = useState(null);
	const [wrong, setWrong] = useState(null);

	const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email && email.match(isValidEmail)) {
			setEmailData(false);
		} else if (!email) {
			setEmailData(true);
			setEmpty('Whoops! It looks like you forgot to add your email');
			setWrong(null);
		} else {
			setEmailData(true);
			setWrong('Please enter a valid email address');
			setEmpty(null);
		}
	};
	return (
		<div className=' pt-[4rem] px-[2rem]'>
			<img className=' mx-auto pb-16' src={LogoImg} alt='logo' />
			<h1 className='text-2xl sm:text-4xl lg:text-5xl  text-center text-Gray pb-6'>
				We are launching{' '}
				<span className=' text-Very-Dark-Blue font-bold'>soon!</span>
			</h1>
			<p className='text-lg sm:text-xl lg:text-2xl text-Very-Dark-Blue '>
				Subscribe and get notified
			</p>
			<div className=''>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col lg:flex-row lg:items-start items-center w-full pt-10'>
					<div className=' w-full lg:pr-5'>
						<input
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Your email address...'
							className={` w-full border-2 rounded-full py-4 px-8 bg-white text-lg mb-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent ${
								emailData ? 'border-red-500' : 'border-gray-300'
							}`}
						/>
						{emailData && (
							<p className=' text-red-500 text-sm lg:pl-8 lg:text-start italic pb-4 '>
								{empty}
								{wrong}
							</p>
						)}
					</div>
					<button className='bg-Blue border-Blue border-2 active:bg-Pale-Blue  text-white px-4 py-4 text-lg font-semibold rounded-full w-full mt-4 lg:mt-0 lg:w-[45%]'>
						Notify Me
					</button>
				</form>
			</div>
		</div>
	);
}

export default HeaderForm;
