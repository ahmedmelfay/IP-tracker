import axios from "axios";
import React, { useState, useEffect } from "react";
import headerStyles from "../../styles/header/header.module.scss";
import { useDispatch } from "react-redux";
import { fetchedData } from "../../redux/actions/dataActions";
import { loading } from "../../redux/actions/loadingAction";

const Search = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  //Controlled Input
  const [search, setSearch] = useState("");

  //Handling initial data for first user that visits the site
  const fetchInitialData = () => {
    const IPurl = "https://api64.ipify.org?format=json";
    axios
      .get(IPurl)
      .then((data) => {
        const initialDataURL = `https://geo.ipify.org/api/v1?apiKey=at_S1MblZcRjP8ifJeDW3a31bxekhqY9&ipAddress=${data.data.ip}`;
        dispatch(fetchedData(initialDataURL));
      })
      .catch((err) => {
        setError(true);
      });
  };
  useEffect(() => {
    fetchInitialData();
  }, []);
  //Handling change and submit
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loading(true));
    const url = `https://geo.ipify.org/api/v1?apiKey=at_S1MblZcRjP8ifJeDW3a31bxekhqY9&ipAddress=${search}`;
    await dispatch(fetchedData(url));
    dispatch(loading(false));
  };
  return error ? (
    <div>
      <h1>Error, Check console for more details.</h1>
      <button onClick={() => setError(false)}>Back</button>
    </div>
  ) : (
    <div className={headerStyles.header}>
      <form className={headerStyles.form} onSubmit={handleSubmit}>
        <input placeholder="Search for any IP Address" type="text" name="searchIP" value={search} onChange={handleChange} />
        <button aria-label="Search for IP" type="submit" className={headerStyles.searchBtn}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
