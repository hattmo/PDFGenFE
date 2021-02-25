import React, { PropsWithChildren, useState } from "react";
import Modal from "../modal/Modal";
import FileDropForm from "../form/FileDropForm";
import FullDiv from "../utility/FullDiv";

const FileDrop = ({ children }: PropsWithChildren<{}>) => {
  const [formOpen, setFormOpen] = useState(false);
  const [initialHeaders, setInitialHeaders] = useState<string[]>([]);
  const [initialData, setInitialData] = useState<DataItem[]>([]);
  return (
    <FullDiv
      onDrop={async (e) => {
        e.preventDefault();
        const rawData = await e.dataTransfer.files[0].text();
        const { headers, data } = await api.parseCSV(rawData);
        setInitialHeaders(headers);
        setInitialData(data);
        setFormOpen(true);
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
    </FullDiv>
  );
};

export default FileDrop;
