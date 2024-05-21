import styled from "styled-components";

import PopularItem from "./PopularItem";

function PopularSection() {
  const popularWorkshop = [
    {
      title: "캐릭터 브랜딩 실무 워크숍 (입문반)",
      content: "캐릭터 디자인의 기초 + 가이드북 완성까지! ",
      date: "2022/01/30 (5시)",
      online: true,
      src: "/src/assets/img/img_popular1.png",
    },
    {
      title: "제목2",
      content: "내용이 들어갑니다~",
      date: "2022/01/30 (5시)",
      online: false,
      src: "/src/assets/img/img_popular2.png",
    },
    {
      title: "제목3",
      content: "내용이 들어갑니다~",
      date: "2022/01/30 (5시)",
      online: true,
      src: "/src/assets/img/img_popular3.png",
    },
  ];

  return (
    <PopularSectionWrapper>
      <Title>전 기수 조기 완판! 인기 워크숍</Title>
      <PopularContainer>
        {popularWorkshop.map((item) => (
          <PopularItem key={item.title} {...item} />
        ))}
      </PopularContainer>
      <BottomImg src={"/src/assets/img/img_popular_bottom.png"} />
    </PopularSectionWrapper>
  );
}

export default PopularSection;

const PopularSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  padding-top: 2.4rem;
`;

const PopularContainer = styled.section`
  display: flex;

  gap: 2.4rem;
`;

const Title = styled.div`
  display: flex;

  margin-bottom: 2.4rem;

  ${({ theme }) => theme.fonts.Bold24_32}
`;

const BottomImg = styled.img`
  display: flex;

  margin-top: 12rem;
  padding: 0 2.4rem;
`;
