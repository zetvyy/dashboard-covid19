import React, { useEffect } from "react";
import Style from "./FilterCity.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../store/actions/FilterCityAction";

const FilterCity = () => {
  const dataCity = useSelector((state) => state.filterr.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity());
  }, []);

  return (
    <div>
      <select name="Provinsi" className={Style.select}>
        {dataCity.map((item) => (
          <option value={item.value} selected="selected">
            {item.key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCity;
