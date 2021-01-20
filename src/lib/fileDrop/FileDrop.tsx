import React, { PropsWithChildren, useState } from "react";
import Modal from "../modal/Modal";
import csv from "csv-parser";
import { DataItem } from "../table/types";
import FileDropForm from "./FileDropForm";

const FileDrop = ({ children }: PropsWithChildren<{}>) => {
  const [formOpen, setFormOpen] = useState(false);
  const [initialHeaders, setInitialHeaders] = useState<string[]>([]);
  const [initialData, setInitialData] = useState<DataItem[]>([]);
  return (
    <div
      onDrop={(e) => {
        e.preventDefault();
        setFormOpen(false);
        e.dataTransfer.files[0].text().then((val: string) => {
          const newData: any[] = [];
          const parser = csv();
          parser.write(val);
          parser.on("data", (data) => {
            newData.push(data);
          });
          parser.on("headers", (headers: string[]) => {
            setInitialHeaders(headers);
          });
          parser.on("end", () => {
            setInitialData(newData);
            setFormOpen(true);
          });
          parser.on("error", () => {});
          csv().write(val);
        });
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <Modal
        isOpen={formOpen}
        onClose={() => {
          setFormOpen(false);
        }}
      >
        <FileDropForm
          initialData={initialData}
          initialHeaders={initialHeaders}
          onSubmit={() => {
            setFormOpen(false);
          }}
        />
      </Modal>
      {children}
    </div>
  );
};

export default FileDrop;
