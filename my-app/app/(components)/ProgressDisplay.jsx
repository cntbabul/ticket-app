const ProgressDisplay = ({progress}) => {
  return (
    <div className="w-full bg-progress-bar dark:bg-gray-bar-hover rounded-full h-2.5">
      <div
        className="bg-blue-accent h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
