import React, { useEffect } from "react";
import Style from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProvinsi } from "../../store/actions/FilterAction";

const Filter = () => {
  const data = useSelector((state) => state.filter.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProvinsi());
  }, []);

  return (
    <div>
      <select name="Provinsi" className={Style.select}>
        {data.map((item) => (
          <option value={item.value} defaultValue={item.value}>
            {item.key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
