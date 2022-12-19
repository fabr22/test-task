import React from "react";
import styles from "./ShowInfo.module.scss";
import { ISchedule } from "../../httpClient/types";

interface IShowInfoProps {
  streamedOn: string | null;
  schedule?: string[];
  status?: string;
  genres?: string[];
}

const ShowInfo: React.FC<IShowInfoProps> = ({
  streamedOn,
  schedule,
  status,
  genres,
}) => {
  const fields: Record<string, string | null>[] = [
    {
      title: "Streamed on",
      value: streamedOn,
    },
    {
      title: "Schedule",
      value: schedule ? schedule.join(", ") : null,
    },
    {
      title: "Status",
      value: status ?? null,
    },
    {
      title: "Genres",
      value: genres ? genres.join(", ") : null,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h3>Show Info</h3>
      <div className={styles.fields}>
        {fields.map((field) => {
          if (field.value) {
            return (
              <div key={field.title} className={styles.field}>
                <span className={styles.filedTitle}>{field.title}</span>
                <span className={styles.filedValue}>{field.value}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ShowInfo;
