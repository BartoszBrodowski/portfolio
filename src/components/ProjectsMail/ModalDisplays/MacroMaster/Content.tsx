import ModalContent from '../ModalContent';

const Content = () => {
	return (
		<ModalContent>
			<p className='text-lg'>
				Bachelor thesis project. It's a web application that allows users to create and manage their
				own macros.
			</p>
			<p>
				The concept was to create a project that uses newest NextJS version (14) with not so popular
				technologies that are still considered new like Prisma and tRPC. Database is deployed on
				Azure, however I didn't partake in managing the database. I'm responsible for the frontend
				and backend of the application. App also uses AI for recommendations for meals and
				ingredients.
			</p>
		</ModalContent>
	);
};

export default Content;
