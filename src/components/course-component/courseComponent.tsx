import type {CourseType} from "../../models/courseModels.ts";
import './courseComponent.css'

interface  CourseComponentProps{
    item: CourseType;
}

export const CourseComponent = ({item}:CourseComponentProps) => {
    return (
        <div className="course-component p-5 w-[45%] border border-black border-solid rounded-sm">
            <h2 className='font-bold'>{item.title}</h2>
            <p>month:{item.monthDuration}</p>
            <p>hour: {item.hourDuration}</p>
            <p>modules:</p>
            <ul className='pl-5'>
                {
                    item.modules.map((module, index)=> (<li className='list-disc' key={index}>{module}</li>))
                }
            </ul>
        </div>
    )
}