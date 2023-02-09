import { useState, useEffect } from "react";
export default function Details({ props }) {
  let [avatarUrl, setAvatarUrl] = useState();
  let [info, setInfo] = useState({});
  let [update, setUpdate] = useState(true);
  let loadData = () => {
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setAvatarUrl(data.avatar);
        setInfo(data.details);
        setUpdate(false);
        
      })
      .catch((err) => console.error(err));
      return () => {
        setAvatarUrl(null)
      }
  };
  useEffect(loadData, []);
  useEffect(loadData, [props.id])
  return (
    <>
      <div className="card">
        <div>
          {update && <p>'Updating...'</p>}
          <img src={avatarUrl} className="avatar" />
        </div>
        <div className="card-description">
          <p>{props.name}</p>
          <p>{info.city}</p>
          <p>Company: </p> {info.company}
          <p>Position: </p>{info.position}
        </div>
      </div>
    </>
  );
}
