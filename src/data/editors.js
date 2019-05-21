import { generateColor } from "../helpers";

const editorsData = [
  {
    id: "123YuB",
    color: generateColor(),
    subEditors: [
      {
        id: "456UnC",
        color: generateColor(),
        subEditors: [],
      },
      {
        id: "789PoN",
        color: generateColor(),
        subEditors: [],
      },
      {
        id: "109PqN",
        color: generateColor(),
        subEditors: [
          {
            id: "ImX931",
            color: generateColor(),
            subEditors: [],
          },
          {
            id: "002UvA",
            color: generateColor(),
            subEditors: [],
          },
        ],
      },
    ],
  },
  {
    id: "987WvC",
    color: generateColor(),
    subEditors: [
      {
        id: "169PqN",
        color: generateColor(),
        subEditors: [
          {
            id: "ImXO31",
            color: generateColor(),
            subEditors: [],
          },
          {
            id: "002LvA",
            color: generateColor(),
            subEditors: [],
          },
        ],
      },
      {
        id: "ImXO32",
        color: generateColor(),
        subEditors: [],
      },
    ],
  },
  {
    id: "654LaX",
    color: generateColor(),
    subEditors: [
      {
        id: "321NiC",
        color: generateColor(),
        subEditors: [],
      },
    ],
  },
];

export default editorsData;
