const PriorityTag = ({ priority }) => {
  const priorityMap = {
    high: {
      text: "Alta prioridad",
      class: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    },
    medium: {
      text: "Prioridad media",
      class:
        "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    },
    low: {
      text: "Baja prioridad",
      class:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    },
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${priorityMap[priority].class}`}
    >
      {priorityMap[priority].text}
    </span>
  );
};

export default PriorityTag;
