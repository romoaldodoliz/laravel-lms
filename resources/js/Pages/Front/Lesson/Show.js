import React from 'react';
import Layout from '@/Layouts/Layout';
import { Link } from '@inertiajs/inertia-react';

export default function({course, module, lesson}){
    return (
        <Layout>
            <p><Link href={route('course.show', course)}>{course.title}</Link> {'>'} <Link href={route('course.module.show', {course, module})}>{module.title}</Link> {'>'} {lesson.title}</p>
            <h1>{lesson.title}</h1>
            <div dangerouslySetInnerHTML={{__html: lesson.content}}></div>
        </Layout>
    )
}
