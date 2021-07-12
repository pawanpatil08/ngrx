import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";


export const loadAllCourses=createAction(
    "[Courses Resolver] Load all Courses" 
)


export const allcoursesLoaded=createAction(
    "[Load courses Effect] All Courses Loaded",
    props<{courses:Course[]}>()
)
