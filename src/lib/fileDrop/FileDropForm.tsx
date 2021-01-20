import React, { useState } from "react";
import { useAppendData, useGetHeaders } from "../DataContext";
import { DataItem } from "../table/types";

interface Props {
  onSubmit: () => void;
  initialHeaders: string[];
  initialData: DataItem[];
}

const FileDropForm = ({ onSubmit, initialHeaders, initialData }: Props) => {
  const [mapping, setMapping] = useState({});
  const appendData = useAppendData();
  const currHeaders = useGetHeaders();
  const [availHead, unMatchedHead] = findMismatch(currHeaders, initialHeaders);
  if (availHead.length === 0) {
    onSubmit();
  }
  return (
    <div>
      {unMatchedHead.map((item, i) => {
        return (
          <React.Fragment>
            <div key={i}>{item}</div>
            <select
              value={mapping[item]}
              onChange={(e) => {
                setMapping({ ...mapping, [item]: e.target.value });
              }}
            >
              {availHead.map((item, i) => {
                <option key={i} value={item}>
                  {item}
                </option>;
              })}
              <option value={undefined}>None</option>
            </select>
          </React.Fragment>
        );
      })}
      <input
        onClick={() => {
          appendData(
            initialData.map((dataItem) => {
              const mapped = {};
              initialHeaders.forEach((key) => {
                if (!unMatchedHead.includes(key)) {
                  if (mapping[key]) {
                    mapped[mapping[key]] = dataItem[key];
                  }
                } else {
                  mapped[key] = dataItem[key];
                }
              });
              return mapped;
            })
          );
          onSubmit();
        }}
        type="button"
        value="ok"
      />
    </div>
  );
};

const findMismatch = (curr: string[], initial: string[]) => [
  curr.filter((item) => !initial.includes(item)),
  initial.filter((item) => !curr.includes(item)),
];

export default FileDropForm;
