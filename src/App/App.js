import { useCallback, useEffect, useState } from 'react';

import Spinner from 'Components/Spinner';
import ErrorRecovery from 'Components/ErrorRecovery';

import { getDogImages, getDogsList } from './app.api';
import Dog from './Dog';
import DogsList from './DogsList';

import './App.css';

const initialState = {
  dogsList: [],
  hasError: false,
  dogImages: [],
  selectedBreed: null,
};

function App() {
  const [dogsList, setDogsList] = useState(initialState.dogsList);
  const [hasError, setHasError] = useState(initialState.hasError);
  const [dogImages, setDogImages] = useState(initialState.dogImages);
  const [selectedBreed, setSelectedBreed] = useState(
    initialState.selectedBreed
  );

  useEffect(() => {
    getDogsList(setDogsList, setHasError);
  }, []);

  const selectBreed = (breed) => {
    resetDogImages();
    setSelectedBreed(breed);
    getDogImages(setDogImages, setHasError, {
      breed,
      imageAmount: 2,
    });
  };

  const resetDogImages = useCallback(() => setDogImages([]), [setDogImages]);

  const resetSelectedBreed = useCallback(
    () => setSelectedBreed(null),
    [setSelectedBreed]
  );

  const recoverFromError = () => {
    setDogsList(initialState.dogsList);
    setHasError(initialState.hasError);
    setDogImages(initialState.dogImages);
    setSelectedBreed(initialState.selectedBreed);
    getDogsList(setDogsList, setHasError);
  };

  if (hasError) return <ErrorRecovery recover={recoverFromError} />;

  if (dogsList.status === 'success' && !selectedBreed)
    return <DogsList dogsList={dogsList} selectBreed={selectBreed} />;

  if (selectedBreed && dogImages.status === 'success')
    return (
      <Dog
        dogImages={dogImages}
        breed={selectedBreed}
        goBack={resetSelectedBreed}
      />
    );

  return <Spinner />;
}

export default App;
