import styled from 'styled-components';

const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    object-fit: contain;
  }
`;

const BannerImage = (props) => {
  const { src, alt } = props;
  return (
    <BannerContainer>
      <Image src={src} alt={alt} />
    </BannerContainer>
  );
}



export default BannerImage;