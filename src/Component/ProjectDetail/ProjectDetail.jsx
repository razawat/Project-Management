/* eslint-disable react/prop-types */

function changeDateFormat(val) {
  return new Date(val).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ProjectDetail({ projectDetail, index, onDelete }) {
  console.log(projectDetail);

  function handleDelete() {
    onDelete(index);
  }

  return (
    <div className="w-2/4 pl-5">
      <div className="flex flex-row justify-between mb-1">
        <h1 className="font-mono font-extrabold text-2xl">
          {projectDetail?.title}
        </h1>
        <button className="hover:text-slate-400" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <p className=" text-gray-400 mb-3">
        {changeDateFormat(projectDetail?.date)}
      </p>
      <p className="text-slate-700">{projectDetail?.desc}</p>
      <hr className="mt-5 border-2 border-gray-500" />
    </div>
  );
}
