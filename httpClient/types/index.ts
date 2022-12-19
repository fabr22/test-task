export interface IShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: ISchedule;
  rating: IRating;
  weight: number;
  network: INetwork;
  webChannel: INetwork | null;
  dvdCountry: string | null;
  externals: IExternals;
  image: IImage;
  summary: string;
  updated: number;
  _links: ILinks;
}

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: IRating;
  image: IImage | null;
  summary: string | null;
  _links: ILinks;
  _embedded: IEmbedded;
}

export interface IEmbedded {
  show: IShow;
}

export interface ILinks {
  self: ILink;
  previousepisode: ILink;
}

export interface ILink {
  href: string;
}

export interface ISchedule {
  time: string;
  days: string[];
}

export interface IRating {
  average: number;
}

export interface INetwork {
  id: number;
  name: string;
  country: ICountry;
  officialSite: string | null;
}

export interface ICountry {
  name: string;
  code: string;
  timezone: string;
}

export interface IExternals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface IImage {
  medium: string;
  original: string;
}
