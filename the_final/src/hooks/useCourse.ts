import { useSelector } from "react-redux";
import { RootState } from "store";

export const useCourse = () => {
  const { CourseList, CourseInfo,CourseListPagi } = useSelector(
    (state: RootState) => state.manageCourse
  );
  return { CourseList, CourseInfo,CourseListPagi };
};