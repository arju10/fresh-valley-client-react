import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import lodinggif from "../../../images/Ring-Loading-1.gif";
import "./Update.css";

const Update = ({ id, setUpdatestatus, setCurrentData }) => {
  const { register, handleSubmit, errors, form } = useForm();
  const [imgUploaded, setImageUploaded] = useState(null);

  const [singleProductData, setSingleProductData] = useState({});
  const { name, price, weight, imgUrl, _id } = singleProductData;

  const [productImgUrl, setproductImageUrl] = useState(null);
  useEffect(() => {
    axios
      .get(`https://protected-hamlet-09778.herokuapp.com/singleProduct/${id}`)
      .then((res) => {
        console.log(res.data);
        setSingleProductData(res.data);
        setproductImageUrl(res.data.imgUrl);
      });
  }, [id]);

  const onSubmit = (data) => {
    const newData = { ...data, imgUrl: productImgUrl };
    const url = `https://protected-hamlet-09778.herokuapp.com/updateProduct/${id}`;
    axios.patch(url, newData).then((res) => {
      setUpdatestatus(false);
      setImageUploaded(null);
      setCurrentData({ _id, ...newData });
    });
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files);
    const imageData = new FormData();
    imageData.set("key", "043d7e3e5b00a44be0a030d5ab031883");
    imageData.append("image", event.target.files[0]);
    setImageUploaded("loading");

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setproductImageUrl(response.data.data.display_url);
        setImageUploaded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="rounded text-left">
      <form className="row gy-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-6 py-2">
          <label htmlFor="name">Product name</label>
          <br />
          <input
            defaultValue={name}
            className="form-control"
            id="name"
            type="text"
            name="name"
            ref={register({ required: true })}
          />
          {errors.name && <p>This field is required</p>}
        </div>
        <div className="col-6 py-2">
          <label htmlFor="price">Price</label>
          <br />
          <input
            defaultValue={price}
            className="form-control"
            id="price"
            type="text"
            name="price"
            ref={register({ required: true })}
          />
          {errors.price && <p>This field is required</p>}
        </div>

        <div className="col-6 py-2">
          <label htmlFor="weight">Weight</label>
          <br />
          <input
            defaultValue={weight}
            className="form-control"
            id="weight"
            type="text"
            name="weight"
            ref={register({ required: true })}
          />
          {errors.weight && <p>This field is required</p>}
        </div>

        <div className="col-6 py-2 d-flex justify-content-between align-items-end">
          <div>
            <label htmlFor="photo">Add a photo</label>
            <br />
            <input
              defaultValue={imgUrl}
              onChange={handleImageUpload}
              type="file"
              id="photo"
              name="photo"
            />
            {imgUploaded === true && <span>??????</span>}
            {imgUploaded === "loading" && (
              <img className="gif-upload" src={lodinggif} alt="/" />
            )}
          </div>
        </div>
        <div className="col-6 py-2 d-flex justify-content-end ml-auto">
          <button
            type="submit"
            onClick={() => setUpdatestatus(false)}
            className="rounded mx-3 btn-outline-dark cancle"
          >
            Cancle
          </button>
          <input
            className="rounded btn-outline-secondary"
            type="submit"
            value="SAVE"
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
