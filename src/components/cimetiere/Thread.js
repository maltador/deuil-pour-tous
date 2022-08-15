import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDefunts } from "../../redux/actions/defunts.action";
import DefuntCard from "../defunt/DefuntCard";
import DefuntCardSkeleton from "../skeletons/DefuntCardSkeleton";
import NoPost from "../defunt/details/NoPost";
import defaultCover from "../../images/default-cover2.jpg"; /*from "../images/default-cover2.jpg";*/
import { Link } from "react-router-dom";

function Thread({ page }) {
  const [loadDefunt, setLoadDefunt] = useState(true);
  const dispatch = useDispatch();
  const defuntsData = useSelector((state) => state.defuntsReducer);

  useEffect(() => {
    if (loadDefunt) {
      dispatch(getDefunts());
      console.log(defuntsData);
      setLoadDefunt(false);
    }
  }, [loadDefunt]);

  return (
    <>
      {loadDefunt && (
        <div className="contenuHome">
          {[...Array(10)].map((elementInArray, index) => (
            <DefuntCardSkeleton key={index} />
          ))}
        </div>
      )}
      {!loadDefunt && (
        <>
          {defuntsData.length === 0 && <NoPost type="defunt" />}
          {defuntsData.length !== 0 && (
            <>
              {!Array.isArray(defuntsData) && <NoPost type="defunt" />}
              {Array.isArray(defuntsData) && (
                <div className="contenuHome">
                  {defuntsData.map((defunt) => {
                    return (
                      <Link to={`/defunt/${defunt.id}`}>
                        <DefuntCard
                          imgUser={
                            defunt.user_image ? defunt.user_image : ""
                          }
                          imgDefunt={
                            defunt.profil_photo
                              ? defunt.profil_photo
                              : defaultCover
                          }
                          title={`${defunt.name} ${
                            defunt.post_name ? defunt.post_name : ""
                          } ${defunt.last_name}`}
                          userName={
                            defunt.user_pseudo ? defunt.user_pseudo : ""
                          }
                        />
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default Thread;
