type DataItem = { [x: string]: string | undefined };
type CSVData = { headers: string[]; data: DataItem[] };

declare namespace api {
  function parseCSV(rawData: string): Promise<CSVData>;
  function getFields(pdfpath: string): Promise<string>;
}
