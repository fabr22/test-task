import React from "react";
import { IEpisode } from "../httpClient/types";
import httpClient from "../core/httpClient";
import CardGrid from "../components/cardsGrid/CardGrid";
import Card from "../components/card/Card";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import styles from "../styles/HomePage.module.scss";

const Homepage = ({ episodes }: { episodes: IEpisode[] }) => {
  return (
    <PageWrapper>
      <div className={styles.description}>
        TV Show and web series database. <br /> Create personalised schedules.
        Episode guide, cast, crew and character information
      </div>
      <CardGrid>
        {episodes.map((episode) => {
          return (
            <Card
              key={episode.id}
              showId={episode._embedded.show.id}
              cardImage={episode.image}
              rating={episode.rating.average}
              title={episode.name}
            />
          );
        })}
      </CardGrid>
    </PageWrapper>
  );
};

export const getServerSideProps = async () => {
  const data = await httpClient.getSchedule();

  return {
    props: {
      episodes: data,
    },
  };
};

export default Homepage;
