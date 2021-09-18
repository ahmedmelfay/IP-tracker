import React, { useEffect, useState } from "react";
import headerStyles from "../../styles/header/header.module.scss";
import { useSelector } from "react-redux";
import InfoCol from "./InfoCol";
import { useDispatch } from "react-redux";
import { loading as loadingChange } from "../../redux/actions/loadingAction";

const Info = () => {
  //Redux state (store)
  const state = useSelector((state) => state);

  const [loading, setLoading] = useState(true);

  //dataChanged detects if user changed the IP in search (by default the initial ip is current user's ip)
  const dataChanged = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  //Handling loader when  fetching for first time and when user enters new IP in Search component
  useEffect(() => {
    if (Object.entries(state.data).length) setLoading(false);
    dispatch(loadingChange(false));
  }, [state.data]);

  //Conditional rendering for loaders
  return dataChanged || loading ? (
    <div className={headerStyles.info}>
      <InfoCol title="IP ADDRESS" value="loading.." />
      <InfoCol title="LOCATION" value="loading.." />
      <InfoCol title="TIMEZONE" value="loading.." />
      <InfoCol title="ISP" value="loading.." />
    </div>
  ) : (
    <div className={headerStyles.info}>
      <InfoCol title="IP ADDRESS" value={state.data.ip} />
      <InfoCol title="LOCATION" value={`${state.data.location.city}, ${state.data.location.country}`} />
      <InfoCol title="TIMEZONE" value={`UTC ${state.data.location.timezone}`} />
      <InfoCol title="ISP" value={state.data.isp} />
    </div>
  );
};

export default Info;
