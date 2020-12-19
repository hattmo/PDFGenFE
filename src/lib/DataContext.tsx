import React, { useContext, useState } from "react";
import { DataItem } from "./table/types";

interface Context {
  data: DataItem[];
  headers: string[];
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
  setHeaders: React.Dispatch<React.SetStateAction<string[]>>;
}

interface Props {
  initialHeaders: string[];
}

const ctx = React.createContext<Context>({
  data: [],
  headers: [],
  setData: () => {},
  setHeaders: () => {},
});

const DataContext = ({
  children,
  initialHeaders,
}: React.PropsWithChildren<Props>) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [headers, setHeaders] = useState<string[]>(initialHeaders);
  return (
    <ctx.Provider value={{ data, setData, headers, setHeaders }}>
      {children}
    </ctx.Provider>
  );
};

export const useGetHeaders = () => useContext(ctx).headers;

export const useSetHeaders = () => {
  const { setHeaders } = useContext(ctx);
  return (vals: string[]) => {
    setHeaders(vals);
  };
};

export const useGetData = () => useContext(ctx).data;

export const useDeleteData = () => {
  const { setData } = useContext(ctx);
  return (index: number) => {
    setData((prev) => {
      return prev.filter((_, i) => i !== index);
    });
  };
};

export const useUpdateData = () => {
  const { setData } = useContext(ctx);
  return (value: DataItem, index: number) => {
    setData((prev) => {
      return [
        ...prev.slice(0, index),
        value,
        ...prev.slice(index + 1, prev.length),
      ];
    });
  };
};

export default DataContext;
