import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Contexts/Authprovider/Authprovider";

import Addreview from "./Addreview";

const Myreviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [serviceReviews, setServiceReviews] = useState([]);

  useEffect(() => {
    fetch(`https://property-homie-rocco-server-roccorizz.vercel.app/reviews/email?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('propertyhomierocco')}`
      }

    })

      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then(data => setServiceReviews(data))
  }, [user?.email, logOut])

  const handleDelete = (id) => {
    const ifDelete = window.confirm("Are you sure to delete?");
    if (ifDelete) {
      fetch(`https://property-homie-rocco-server-roccorizz.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            toast.error("deleted order successfully");
            const remaining = serviceReviews.filter(
              (order) => order?._id !== id
            );
            setServiceReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <Helmet>
        <title>My Reviews</title>
      </Helmet>
      {serviceReviews.length === 0 ? (
        <p className="text-center font-bold text-4xl">No Reviews were added</p>
      ) : (
        serviceReviews.map((singleServiceReview) => (
          <Addreview
            key={singleServiceReview._id}
            singleServiceReview={singleServiceReview}
            handleDelete={handleDelete}
          ></Addreview>
        ))
      )}
    </div>
  );
};

export default Myreviews;
