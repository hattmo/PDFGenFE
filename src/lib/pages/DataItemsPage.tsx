import React, { useState } from "react";
import { useGetData, useUpdateData } from "../DataContext";
import EditModal from "../modal/EditModal";
import HeaderModal from "../modal/HeaderModal";
import Table from "../table/Table";

const DataItemsPage = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [headerModalOpen, setHeaderModalOpen] = useState(false);
  const [rowEditing, setRowEditing] = useState(0);
  const updateData = useUpdateData();
  const data = useGetData();
  return (
    <div>
      <input
        type="button"
        onClick={() => {
          setEditModalOpen(true);
          setRowEditing(data.length);
        }}
        value="ADD"
      />
      {editModalOpen ? (
        <EditModal
          inputData={data[rowEditing]}
          onClose={() => {
            setEditModalOpen(false);
          }}
          onSubmit={(newData) => {
            updateData(newData, rowEditing);
            setEditModalOpen(false);
          }}
        />
      ) : null}
      {headerModalOpen ? (
        <HeaderModal
          onClose={() => {
            setHeaderModalOpen(false);
          }}
        />
      ) : null}
      <Table
        onEditClicked={(row) => {
          setEditModalOpen(true);
          setRowEditing(row);
        }}
        onHeaderClicked={()=>{
            setHeaderModalOpen(true);
        }}
      ></Table>
    </div>
  );
};

export default DataItemsPage;
