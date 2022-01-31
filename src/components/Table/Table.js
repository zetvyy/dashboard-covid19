import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getDataFaskes } from "../../store/actions/DataFaskes";

const Tabel = () => {
  const data = useSelector((state) => state.faskes.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFaskes());
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "kode",
      key: "kode",
    },
    {
      title: "Nama Faskes",
      dataIndex: "jenis_faskes",
      key: "jenis_faskes",
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
      key: "alamat",
    },
    {
      title: "Kategori",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Total Vaksin 1",
      dataIndex: "detail.divaksin_1",
      key: "detail.divaksin_1",
    },
    {
      title: "Total Vaksin 2",
      dataIndex: "Total Vaksin 2",
      key: "Total Vaksin 2",
    },
    {
      title: "Total Vaksin 1 & 2",
      dataIndex: "Total Vaksin 1 & 2",
      key: "Total Vaksin 1 & 2",
    },
  ];
  return (
    <Table
      dataSource={data}
      columns={columns}
      style={{
        width: "1200px",
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default Tabel;
