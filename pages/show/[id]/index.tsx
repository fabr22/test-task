import { IShow } from "../../../httpClient/types";
import httpClient from "../../../core/httpClient";
import ShowDescriptionBlock from "../../../components/showDescriptionBlock/ShowDescriptionBlock";
import ShowPageWrapper from "../../../components/showPageWrapper/ShowPageWrapper";
import ShowInfo from "../../../components/showInfo/ShowInfo";
import styles from "../../../styles/Show.module.scss";

const ShowPage = ({ show }: { show: IShow }) => {
  return (
    <ShowPageWrapper>
      {show && (
        <div className={styles.column}>
          <ShowDescriptionBlock
            rating={show?.rating}
            cardImage={show?.image}
            title={show?.name}
            description={show?.summary}
          />
          <div className={styles.infoGrid}>
            <ShowInfo
              streamedOn={show.webChannel?.name ?? null}
              schedule={show.schedule.days}
              status={show.status}
              genres={show.genres}
            />
          </div>
        </div>
      )}
    </ShowPageWrapper>
  );
};

export const getServerSideProps = async (context: any) => {
  const id = context.query.id;
  const data = await httpClient.getShow(id);

  return {
    props: {
      show: data,
    },
  };
};

export default ShowPage;
