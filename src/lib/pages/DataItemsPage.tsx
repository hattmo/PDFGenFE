import React, { useState } from "react";
import EditForm from "../form/EditForm";
import HeaderForm from "../form/HeaderForm";
import Modal from "../modal/Modal";
import Table from "../table/Table";

const DataItemsPage = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [headerModalOpen, setHeaderModalOpen] = useState(false);
  const [rowEditing, setRowEditing] = useState<number | undefined>();
  return (
    <div>
      <input
        type="button"
        onClick={() => {
          setEditModalOpen(true);
          setRowEditing(undefined);
        }}
        value="ADD"
      />
      <Modal
        isOpen={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
        }}
      >
        <EditForm
          row={rowEditing}
          onSubmit={() => {
            setEditModalOpen(false);
          }}
        />
      </Modal>
      <Modal
        isOpen={headerModalOpen}
        onClose={() => {
          setHeaderModalOpen(false);
        }}
      >
        <HeaderForm
          onSubmit={() => {
            setHeaderModalOpen(false);
          }}
        />
      </Modal>
      <Table
        onEditClicked={(row) => {
          setEditModalOpen(true);
          setRowEditing(row);
        }}
        onHeaderClicked={() => {
          setHeaderModalOpen(true);
        }}
      ></Table>
    </div>
  );
};

export default DataItemsPage;
