import React, { useRef, useState } from "react";
import { NavBar } from "../navbar";
import { Footer } from "../footer";
import { dotPulse } from "ldrs";
dotPulse.register();

export const CarOwner = () => {
  const [image, setImage] = useState([]);
  const [carName, setCarName] = useState("");
  const [price, setPrice] = useState(0);
  const [rent, setRent] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  //   const handleImageChange = (e) => {
  //     const file = e.target.files[0];
  //     setImage(file);
  //   };
  const handleImageChange = (e) => {
    const selectedImages = e.target.files;
    setImage([...image, ...Array.from(selectedImages)]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true)

    //   // Get the JWT token from where you stored it (localStorage or cookies)
    // const token = localStorage.getItem("token");

    // if (!token) {
    //   // Handle the case where the user is not authenticated
    //   console.log("User not authenticated.");
    //   setIsLoading(false);
    //   return;
    // }

      const formData = new FormData();
      formData.append("carName", carName);
      formData.append("price", price);
      formData.append("rent", rent);
      for (let i = 0; i < image.length; i++) {
        formData.append("images", image[i]);
      }

      const res = await fetch("http://localhost:5000/api/owner-data", {
        method: "POST",
        body: formData,
        // headers: {
        //   "Authorization": `Bearer ${token}`, // Include the JWT token in the headers
        // },
      });

      if (res.status === 200) {
        const data = await res.json();
        setIsLoading(false)
        alert(data.message);
        refreshForm();
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Server error");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  const isFormValid = () => {
    return image === ([]) || carName === ""
    || price === 0 || rent === 0;
  };

  //Refresh form
  const refreshForm = () => {
    fileInputRef.current.value = null;
    setImage([]);
    setCarName("");
    setPrice(0);
    setRent(0);
  };
  
  return (
    <>
      <NavBar />
      <div className="bg-white w-full py-10 px-16">
        <h1 className="font-bold text-4xl pb-10">
          <span className="underline decoration-B-yellow">Rent</span> your Car
        </h1>
        <div className="flex gap-2 flex-col sm:flex-row">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl shadow p-4 mt-2 w-full sm:w-4/6 md:w-2/6 bg-L-black text-white flex flex-col gap-2"
          >
            <div className="file-upload">
              <label
                htmlFor="fileInput"
                className="custom-file-upload flex gap-2 items-center"
              >
                <i className="text-2xl bi bi-file-earmark-text-fill"></i>
                Upload Image
                <span
                  className="bg-G-white text-dark ml-2 py-2 px-4 rounded-lg cursor-pointer font-bold
                hover:bg-B-yellow transition ease-in-out hover:scale-110 duration-150"
                >
                  {selectedFile ? selectedFile.name : "Choose File"}
                </span>
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                id="fileInput"
                className="hidden"
                multiple
                onChange={handleImageChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Car Name:</label>
              <input
                type="text"
                value={carName}
                className="text-L-black rounded-2xl p-2"
                onChange={(e) => setCarName(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label>Total Price:</label>
              <input
                type="number"
                value={price}
                className="text-L-black rounded-2xl p-2"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Rent Price:</label>
              <input
                type="number"
                value={rent}
                className="text-L-black rounded-2xl p-2"
                onChange={(e) => setRent(e.target.value)}
              />
            </div>
            <div className="flex justify-center gap-2">
            <button
            type="submit"
            className="py-2 px-2 w-full sm:w-1/4 mt-2 bg-B-yellow text-L-black hover:bg-B-yellow hover:text-L-black
            rounded-full font-bold transition ease-in-out hover:scale-110 duration-150 btn"
            disabled={isFormValid()}
            onClick={handleSubmit}
          >{isLoading ? <l-dot-pulse size="43" speed="1.3" color="#111119" ></l-dot-pulse> : "Submit"}
          </button>
              <button
                type="button"
                className="py-2 px-2 w-full sm:w-1/4 mt-2 bg-B-yellow text-L-black
               rounded-full font-bold transition ease-in-out hover:scale-110 duration-150"
                onClick={refreshForm}
              >
                Refresh
              </button>
            </div>
          </form>

          {image.length > 0 && (
            <div className="w-4/6 h-[200px]">
              <div className="flex flex-wrap h-[180%] overflow-auto">
                {image.map((image, index) => (
                  <div key={index} className="w-full sm:w-3/6 md:w-2/6 p-2">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Selected ${index}`}
                      className="rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
