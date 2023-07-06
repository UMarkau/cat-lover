import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { getCats, ICat } from "../../api";
import { Card, Spinner } from "../shared";
import { CatDetailsModal } from "./components";

import Styled from "./MainPage.styled";

export const MainPage = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { catId } = useParams<{ catId: string }>();
  const navigate = useNavigate();

  const fetchCats = useCallback(async () => {
    const catsDisplayed = cats.length;
    const page = catsDisplayed > 0 ? catsDisplayed / 10 : 0;
    setIsLoading(true);
    try {
      const response = await getCats(page);
      setCats((cats) => [...cats, ...response.data]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [cats]);

  useEffect(() => {
    fetchCats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading && cats.length === 0) {
    return <Spinner isFullScreen />;
  }

  if (isError) {
    return <p>Something went wrong.</p>;
  }

  return (
    <Styled.Wrapper>
      {cats.map((cat) => (
        <Link to={`/cat/${cat.id}`} key={cat.id}>
          <Card>
            <Styled.CatImage src={cat.url} />
          </Card>
        </Link>
      ))}
      <Styled.ShowMoreButton
        onClick={() => {
          fetchCats();
        }}
        isLoading={isLoading && cats.length > 0}
      >
        Show More
      </Styled.ShowMoreButton>
      <CatDetailsModal
        isVisible={Boolean(catId)}
        onClose={() => {
          navigate("/");
        }}
      />
    </Styled.Wrapper>
  );
};
