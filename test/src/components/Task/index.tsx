import * as React from "react";
import { TaskWrapper } from "./style";

interface ITask {
  id: number;
  title: string;
  state: string;
}

interface IProps {
  task: ITask;
  onArchiveTask: (value: any) => void;
  onPinTask: (value: any) => void;
}

const Task = ({ task, onArchiveTask, onPinTask }: IProps) => {
  return (
    <></>
    // <TaskWrapper>
    /* <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={task.state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(task.id)}
          id={`archiveTask-${task.id}`}
          aria-label={`archiveTask-${task.id}`}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={task.title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {task.state !== "TASK_ARCHIVED" && (
          <a onClick={() => onPinTask(task.id)}>
            <span
              className={`icon-star`}
              id={`pinTask-${task.id}`}
              aria-label={`pinTask-${task.id}`}
            />
          </a>
        )}
      </div> */
    /* </TaskWrapper> */
  );
};

export default Task;
