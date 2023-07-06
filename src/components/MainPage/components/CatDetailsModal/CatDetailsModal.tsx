import { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { Modal, IModalProps, Spinner } from "../../../shared";
import { getCat, ICat } from "../../../../api";

import Styled from "./CatDetailsModal.styled";

export const CatDetailsModal = ({ isVisible, onClose }: IModalProps) => {
  const [cat, setCat] = useState<ICat | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { catId } = useParams<{ catId: string }>();

  const fetchCat = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getCat(catId as string);
      setCat(response.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [catId]);

  const handleClose = useCallback(() => {
    setCat(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!catId) {
      return;
    }
    fetchCat();
  }, [catId, fetchCat]);

  const handleCopyUrlClick = async () => {
    const { href } = window.location;

    try {
      await navigator.clipboard.writeText(href);
      setIsCopied(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  };

  if (isLoading) {
    return <Spinner isFullScreen />;
  }

  if (isError) {
    return <p>Something went wrong.</p>;
  }

  return (
    <Modal isVisible={isVisible} onClose={handleClose}>
      <Styled.Wrapper>
        <Styled.Image src={cat?.url} />
        <Styled.ButtonsWrapper>
          <Styled.CopyLinkButton onClick={handleCopyUrlClick}>
            {isCopied ? "Copied!" : "Copy Link"}
          </Styled.CopyLinkButton>
        </Styled.ButtonsWrapper>
      </Styled.Wrapper>
    </Modal>
  );
};
