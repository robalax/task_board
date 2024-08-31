function range(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}

const Chart = () => {
  const tasks = [
    { name: "Market Research", planned: [1, 2], actual: [2], slack: [3] },
    {
      name: "Define Specifications",
      planned: [2, 3],
      actual: [3, 4],
      slack: [3],
    },
    { name: "Overall Architecture", planned: [3, 4], actual: [4], slack: [] },
    { name: "Project Planning", planned: [4, 5], actual: [5, 6], slack: [] },
    { name: "Detail Design", planned: [5, 6], actual: [6, 7], slack: [] },
    {
      name: "Software Development",
      planned: [6, 7],
      actual: [7, 8],
      slack: [7],
    },
    { name: "Test Plan", planned: [7, 8], actual: [8], slack: [] },
    { name: "Testing & QA", planned: [8, 9], actual: [9], slack: [] },
    { name: "User Documentation", planned: [9, 10], actual: [], slack: [] },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="w-1/4 px-4 py-2 border">Task</th>
            {range(10).map((week) => (
              <th key={week} className="w-1/12 px-4 py-2 border">
                W {week + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{task.name}</td>
              {range(10).map((week) => (
                <td key={week} className="border relative px-4 py-2">
                  {task.planned.includes(week + 1) && (
                    <div className="absolute inset-0 bg-blue-600 h-2"></div>
                  )}
                  {task.actual.includes(week + 1) && (
                    <div className="absolute inset-0 bg-green-400 h-2"></div>
                  )}
                  {task.slack.includes(week + 1) && (
                    <div className="absolute inset-0 bg-red-400 h-2"></div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <div className="flex items-center mx-2">
          <div className="w-4 h-4 bg-blue-600 mr-2"></div>
          <span>Planned</span>
        </div>
        <div className="flex items-center mx-2">
          <div className="w-4 h-4 bg-green-400 mr-2"></div>
          <span>Actual</span>
        </div>
        <div className="flex items-center mx-2">
          <div className="w-4 h-4 bg-red-400 mr-2"></div>
          <span>Slack (Delay)</span>
        </div>
      </div>
    </div>
  );
};

export { Chart };
