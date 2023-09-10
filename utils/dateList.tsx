interface HourRate {
  start:
    | "19h"
    | "19h15"
    | "19h30"
    | "19h45"
    | "20h"
    | "20h15"
    | "20h30"
    | "20h45"
    | "21h"
    | "21h15"
    | "21h30"
    | "21h45"
    | "22h"
    | "22h15"
    | "22h30";
  end:
    | "19h"
    | "19h15"
    | "19h30"
    | "19h45"
    | "20h"
    | "20h15"
    | "20h30"
    | "20h45"
    | "21h"
    | "21h15"
    | "21h30"
    | "21h45"
    | "22h"
    | "22h15"
    | "22h30";
  avaliable: boolean;
}

type Day = ["satudary", "sunday", "friday"];

interface DeliveryDate {
  day: Day;
  hour: Array<HourRate>;
}

const saturday1: HourRate = {
  start: "19h",
  end: "19h15",
  avaliable: true,
};

const saturday2: HourRate = {
  start: "19h15",
  end: "19h30",
  avaliable: true,
};

const saturday3: HourRate = {
  start: "19h15",
  end: "19h30",
  avaliable: true,
};
