const Dog = ({ dogImages, goBack }) => (
	<div className='dogsContainer'>
		{dogImages.status === 'success' &&
			Object.values(dogImages.message).map((image) => (
				<img key={image} src={image} alt={image} style={{ width: '10rem' }} />
			))}
		<div>
			<button onClick={goBack}>Volver al listado</button>
		</div>
	</div>
);

export default Dog;
