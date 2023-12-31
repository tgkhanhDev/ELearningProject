import { useSelector } from "react-redux";
import { RootState } from "store";

export const useAuth = () => {
  const {
    accessToken,
    user,
    AllAccount,
    isDelete,
    CourseNotEnroll,
    CourseNotAuthor,
    CourseAuthor,
    UserNotEnroll,
    UserNotAuthor,
    UserAuthor,
  } = useSelector((state: RootState) => state.manageUser);
  return {
    accessToken,
    user,
    AllAccount,
    isDelete,
    CourseNotEnroll,
    CourseNotAuthor,
    CourseAuthor,
    UserNotEnroll,
    UserNotAuthor,
    UserAuthor,
  };
};
