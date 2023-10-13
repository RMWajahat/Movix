const notfound = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="h-fit flex flex-col items-center">
        <div className="notfound"></div>
        <h2 className="dark:text-slate-100 text-slate-900 text-sm">
          Content Not Found
        </h2>
      </div>
    </div>
  );
};

export default notfound;
