import './dogsList.css';

const DogsList = ({ dogsList, selectBreed }) => (
	<div className='dogsListContainer'>
		<h1 className='dogsListTitle'>Breeds List</h1>
		{dogsList.status === 'success' && (
			<ul>
				{Object.keys(dogsList.message).map((dog) => (
					<li className='dogsListItem' key={dog}>
						<span className='dogsListItemName'>{dog}</span>
						<button
							className='dogsListItemButton'
							onClick={() => selectBreed(dog)}
						>
							Select
						</button>
					</li>
				))}
			</ul>
		)}
	</div>
);

export default DogsList;
