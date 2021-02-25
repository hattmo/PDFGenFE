import React, { useContext, useState } from "react";

interface Context {
  data: DataItem[];
  headers: string[];
  globalData: DataItem;
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
  setHeaders: React.Dispatch<React.SetStateAction<string[]>>;
  setGlobalData: React.Dispatch<React.SetStateAction<DataItem>>;
}

interface Props {
  initialHeaders: string[];
}

const ctx = React.createContext<Context>({
  data: [],
  headers: [],
  globalData: {},
  setData: () => {},
  setHeaders: () => {},
  setGlobalData: () => {},
});

const DataContext = ({
  children,
  initialHeaders,
}: React.PropsWithChildren<Props>) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [headers, setHeaders] = useState<string[]>(initialHeaders);
  const [globalData, setGlobalData] = useState<DataItem>({});
  return (
    <ctx.Provider
      value={{ data, globalData, headers, setData, setHeaders, setGlobalData }}
    >
      {children}
    </ctx.Provider>
  );
};

export const useGetHeaders = () => useContext(ctx).headers;

export const useSetHeaders = () => {
  const { setHeaders } = useContext(ctx);
  return (val: string[]) => {
    setHeaders(val);
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
  return (value: DataItem, index: number | undefined) => {
    setData((prev) => {
      const i = index ?? prev.length;
      return [...prev.slice(0, i), value, ...prev.slice(i + 1, prev.length)];
    });
  };
};

export const useAppendData = () => {
  const { setData } = useContext(ctx);
  return (value: DataItem[]) => {
    setData((prev) => {
      return [...prev, ...value];
    });
  };
};

export const useGetGlobalData = () => useContext(ctx).globalData;

export const useSetGlobalData = () => {
  const { setGlobalData, globalData } = useContext(ctx);
  return (key: string, value: string) => {
    setGlobalData({ ...globalData, [key]: value });
  };
};

export const useDeleteGlobalData = () => {
  const { setGlobalData, globalData } = useContext(ctx);
  return (key: string) => {
    setGlobalData({ ...globalData, [key]: undefined });
  };
};

export default DataContext;
