import React, { useEffect } from "react";
import headerStyles from "../../styles/header/header.module.scss";
import { useSelector } from "react-redux";
import InfoCol from "./InfoCol";
import { useDispatch } from "react-redux";
import { loading } from "../../redux/actions/loadingAction";

const Info = () => {
  //Redux state (store)
  const state = useSelector((state) => state);

  //dataChanged detects if user changed the IP in search (by default the initial ip is current user's ip)
  const dispatch = useDispatch();

  //Handling loader for initial IP
  useEffect(() => {
    if (!Object.entries(state.data).length) {
      dispatch(loading(true));
      return;
    }
    dispatch(loading(false));
  }, [state.data]);

  //Conditional rendering for loaders
  return state.loading ? (
    <div className={headerStyles.info}>
      <InfoCol title="IP ADDRESS" />
      <InfoCol title="LOCATION" />
      <InfoCol title="TIMEZONE" />
      <InfoCol title="ISP" />
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
