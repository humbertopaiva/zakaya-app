import { SpreadsheetData } from "@/types/DeliveryData";
import Papa from "papaparse";

export const fetchSpreadsheetData = (url: string): Promise<SpreadsheetData> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: false,
          complete: (result: any) => {
            resolve(result.data); // Resolve a Promise com os dados
          },
          error: (error: any) => {
            console.error("Erro ao analisar o CSV:", error.message);
            reject(error); // Rejeita a Promise em caso de erro
          },
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da planilha:", error);
        reject(error); // Rejeita a Promise em caso de erro
      });
  });
};
