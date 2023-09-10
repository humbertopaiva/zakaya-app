import { DeliveryData, SpreadsheetData } from "@/types/DeliveryData";

export const handleDeliveryData = (
  spreadsheetData: SpreadsheetData,
  dayOfTheWeek: string,
  callback: React.Dispatch<
    React.SetStateAction<{ [key: string]: DeliveryData } | {}>
  >
) => {
  if (spreadsheetData.length > 0) {
    const day: string = spreadsheetData[0][0];
    const timeRangeArray = spreadsheetData.slice(1).map((data) => {
      if (data[1] === "TRUE") return data[0];
    });
    callback((prevState) => ({
      ...prevState,
      [dayOfTheWeek]: {
        deliveryDay: day,
        timeRange: timeRangeArray,
      },
    }));
  }
};
