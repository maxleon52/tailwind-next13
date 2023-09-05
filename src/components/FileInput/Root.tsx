"use client";

import React, {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

type RootProps = ComponentProps<"div">;

type FileInputContextProps = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
};

const FileInputContext = createContext({} as FileInputContextProps);

export function Root(props: RootProps) {
  const id = useId();

  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prev) => [...prev, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
