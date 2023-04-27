import PostCard from "@/frontend/components/_common/PostCard";
import { Grid, Stack, Typography } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";

type BlogPageProps = {
  dataList: Array<{
    name: string;
    techstack: string;
    mbti: string;
    description: string;
  }>;
  totalCount: number;
};

const BlogPage: NextPage<BlogPageProps> = (props) => {
  const { dataList, totalCount } = props;

  return (
    <Stack sx={{ py: 10 }} gap={10}>
      <Typography
        textAlign="center"
        variant="h4"
        sx={{ fontWeight: "bold", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        4학년들의 소마 다짐 로그
      </Typography>
      {Boolean(totalCount) && (
        <>
          <Grid
            container
            spacing={{ xs: 2, md: 6 }}
            columns={{ xs: 1, sm: 1, md: 2 }}
          >
            {dataList.map((data, idx) => (
              <Grid item xs={1} sm={1} md={1} key={idx}>
                <PostCard key={idx} data={data} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      {!totalCount && (
        <Typography align="center">컨텐츠가 없습니다.</Typography>
      )}
    </Stack>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { page = 0 },
  } = context;

  return {
    props: {
      totalCount: 10,
      dataList: [
        {
          name: "김가은",
          techstack: "BE / Java SpringBoot ",
          mbti: "ESTP",
          description:
            `- 소마 맛집 탐방하기
- 소마 뽕뽑기
- 연수생분들과 친해지기
- 부족한 부분 공부해서 채우기
- 소마 14기 과정 성공적으로 마무리하기

12월까지 존버 !! 화이팅 ~!~!!`,
        },
        {
          name: "김동우",
          techstack: "FE / React",
          mbti: "ISTJ",
          description:
            `- 모바일이나 모르는 기술 하나 습득하기
- 팀원들이랑 여행가기
- 백준 스트릭 유지하기
- 매일 다른 곳에서 밥먹기
- 연수생 분들 절반이상 친해지기`,
        },
        {
          name: "유세헌",
          techstack: "FE  / React",
          mbti: "ISTP",
          description:
            `- 자식같은 프로젝트 완성하기
- 연수생 분들과 친해지기
- 16인치 맥북사기
- 소마 스티커 가져가기
- 미니 프로젝트 팀원들과 꼭 친해지기`,
        },
        {
          name: "이종범",
          techstack: "BE / Java Spring ",
          mbti: "ENFJ",
          description:
            `- 연수생 분들과 친해지기
- 스프링 정복하기
- 취업 뽀개기
- 자랑할만한 프로젝트 완성하기
- 미니 프로젝트 팀원들과 친해지기^^`,
        },
      ],
    },
  };
};

export default BlogPage;
