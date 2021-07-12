import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState, selectAll } from "./reducers/course.reducer";
import * as formCourses from "./reducers/course.reducer";

export const selectCourseState=createFeatureSelector<CourseState>("courses");

export const selectAllCourses=createSelector(
    selectCourseState,
    formCourses.selectAll
)

export const selectBigginerCourses=createSelector(
    selectAllCourses,
    course=>course.filter(cs=>cs.category==="BIGGINER")
)

export const selectAdvanceCourses=createSelector(
    selectAllCourses,
    course=>course.filter(cs=>cs.category==="ADVANCE")
)
export const selectPromoTotal=createSelector(
    selectAllCourses,
    course=>course.filter(cs=>cs.promo).length
)