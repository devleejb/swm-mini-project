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
          techstack: "Back - end  / Java Spring",
          mbti: "ESTP",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem...",
        },
        {
          name: "김가은",
          techstack: "Back - end  / Java Spring",
          mbti: "ESTP",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem...",
        },
        {
          name: "김가은",
          techstack: "Back - end  / Java Spring",
          mbti: "ESTP",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem...",
        },
        {
          name: "김가은",
          techstack: "Back - end  / Java Spring",
          mbti: "ESTP",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem...",
        },
      ],
    },
  };
};

export default BlogPage;
