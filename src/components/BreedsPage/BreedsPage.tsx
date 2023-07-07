import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { getBreeds, IBreed } from "../../api";
import { Spinner } from "../shared";
import { BreedDetailsModal } from "./components";

import Styled from "./BreedsPage.styled";

export const BreedsPage = () => {
  const [breeds, setBreeds] = useState<IBreed[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBreeds = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getBreeds();
      setBreeds(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  if (isLoading) {
    return <Spinner isFullScreen />;
  }

  return (
    <Styled.Wrapper>
      {Boolean(breeds.length) &&
        breeds.map((breedInfo) => (
          <Styled.BreedItem key={breedInfo.id}>
            <Link to={breedInfo.id}>{breedInfo.name}</Link>
          </Styled.BreedItem>
        ))}
      <BreedDetailsModal />
    </Styled.Wrapper>
  );
};
