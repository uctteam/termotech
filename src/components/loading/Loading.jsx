import "./loading.scss";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <div className="loading">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
