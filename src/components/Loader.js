import React from "react";

const Loader = props => {
  return (
    <>
      {props.bar && (
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      )}
      {props.circle && (
        <div className="container center-align">
          <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div>
              <div class="gap-patch">
                <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
