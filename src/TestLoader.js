import React from "react";

import Loader from "react-js-loader";

const TestLoader = () => {
  return (
    <div>
      <div className="App">
        <div className={"row"}>
          <div className={"item"}>
            <Loader
              type="box-rotate-x"
              bgColor={"#FFFFFF"}
              title={"box-rotate-x"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="box-rotate-y"
              bgColor={"#FFFFFF"}
              title={"box-rotate-y"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="box-rotate-z"
              bgColor={"#FFFFFF"}
              title={"box-rotate-z"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="box-up"
              bgColor={"#FFFFFF"}
              title={"box-up"}
              size={100}
            />
          </div>
        </div>
        <div className={"row"}>
          <div className={"item"}>
            <Loader
              type="bubble-scale"
              bgColor={"#FFFFFF"}
              title={"bubble-scale"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="heart"
              bgColor={"#FFFFFF"}
              title={"heart"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="bubble-top"
              bgColor={"#FFFFFF"}
              title={"bubble-top"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="spinner-cub"
              bgColor={"#FFFFFF"}
              title={"spinner-cub"}
              size={100}
            />
          </div>
        </div>
        <div className={"row"}>
          <div className={"item"}>
            <Loader
              type="spinner-circle"
              bgColor={"#FFFFFF"}
              title={"spinner-circle"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="spinner-default"
              bgColor={"#FFFFFF"}
              title={"spinner-default"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="bubble-ping"
              bgColor={"#FFFFFF"}
              title={"bubble-ping"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="ekvalayzer"
              bgColor={"#FFFFFF"}
              title={"ekvalayzer"}
              size={100}
            />
          </div>
        </div>
        <div className={"row"}>
          <div className={"item"}>
            <Loader
              type="box-rectangular"
              bgColor={"#FFFFFF"}
              title={"box-rectangular"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="hourglass"
              bgColor={"#FFFFFF"}
              title={"hourglass"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="bubble-spin"
              bgColor={"#FFFFFF"}
              title={"bubble-spin"}
              size={100}
            />
          </div>
          <div className={"item"}>
            <Loader
              type="rectangular-ping"
              bgColor={"#FFFFFF"}
              title={"rectangular-ping"}
              size={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLoader;
