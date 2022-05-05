import { MenuType } from "../interfaces/commons";

export const ROUTES = {
  HOME: "/home",
  BLANK: "/",
};

export enum MENU_PATH {
  TOP_GAMES = "top",
  NEWS_GAME = "new",
  SLOTS = "slots",
  JACKPOTS = "jackpots",
  LIVE = "live",
  BLACK_JACK = "blackjack",
  ROULETTE = "roulette",
  TABLE = "table",
  POKER = "poker",
  OTHER_BALL = "ball",
  OTHER_VIRTUAL = "virtual",
  OTHER_FUN = "fun",
}

export const MENU_ITEMS: MenuType[] = [
  { label: "Top games", path: MENU_PATH.TOP_GAMES },
  { label: "News Game", path: MENU_PATH.NEWS_GAME },
  { label: "Slots", path: MENU_PATH.SLOTS },
  { label: "Jackpots", path: MENU_PATH.JACKPOTS },
  { label: "Live", path: MENU_PATH.LIVE },
  { label: "Blackjack", path: MENU_PATH.BLACK_JACK },
  { label: "Roulette", path: MENU_PATH.ROULETTE },
  { label: "Table", path: MENU_PATH.TABLE },
  { label: "Poker", path: MENU_PATH.POKER },
  {
    label: "Other",
    path: MENU_PATH.OTHER_BALL,
    children: [
      { label: "Ball", path: MENU_PATH.OTHER_BALL },
      { label: "Virtual", path: MENU_PATH.OTHER_VIRTUAL },
      { label: "Fun", path: MENU_PATH.OTHER_FUN },
    ],
  },
];
