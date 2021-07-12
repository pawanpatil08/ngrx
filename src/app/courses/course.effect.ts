import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { CourseActions } from "./action-types";
import { allcoursesLoaded } from "./courses.action";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CourseEffects {

    constructor(private action$: Actions, private cs: CoursesHttpService) {

    }
    loadCourses$ = createEffect(
        () => this.action$.pipe(
            ofType(CourseActions.loadAllCourses),
            concatMap(action=>
                this.cs.findAllCourses()),
                map(courses=>allcoursesLoaded({courses}))
        )
    )
}