import React from "react";
import { HabitProps } from "./interface";

export const Habit = (props: HabitProps) => {
  return <div>{props.completed}</div>;
};
