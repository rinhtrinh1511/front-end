import React, { useState } from 'react';
import axios from 'axios';
function Test() {
  const [img, setImg] = useState(null);
  const handerChange = (e) => {
    setImg(e.target.files[0]);
  };
  console.log(img);
  const handerSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img);
    try {
      await axios.post('/api/add', formData, {});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handerSubmit} encType="multipart/form-data">
          <div className="form-group">
            <input type="file" onChange={handerChange} name="img" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Tải lên
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Test;
