export interface DeliveryData {
  deliveryDay: string;
  timeRange: TimeRange;
}

export type TimeRange = Array<[string, string]>;
export type SpreadsheetData = Array<[string, string]>;
