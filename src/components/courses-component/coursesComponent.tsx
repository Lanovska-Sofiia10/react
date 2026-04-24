import {coursesArray} from "../../data/data.ts";
import {CourseComponent} from "../course-component/courseComponent.tsx";

export const CoursesComponent = () => {
    return (
        <div className="courses-component flex-wrap flex flex-row gap-5">
            {
                coursesArray.map((course, index)=> (<CourseComponent item={course} key={index}></CourseComponent>))
            }
        </div>
    )
}