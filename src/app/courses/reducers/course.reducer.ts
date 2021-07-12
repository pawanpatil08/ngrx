import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { Course } from "../model/course";


export interface CourseState extends EntityState<Course>{
    course:Course[]
}

export const adapter=createEntityAdapter<Course>();

export const initiaCourseState=adapter.getInitialState();

export const courseReducer=createReducer(
    initiaCourseState,
    on(CourseActions.allcoursesLoaded,(state,action)=>adapter.addAll(action.courses,state))
    
)

export const {selectAll}=adapter.getSelectors();
