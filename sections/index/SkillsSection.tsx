import React from 'react';
import { Skill } from '../../model/skill';
import Image from 'next/image';

interface SkillsSectionProps {
  skills: Skill[]
}
export const SkillsSection: React.VFC<SkillsSectionProps> = (props) => {
  return (
    <div className="bg-gray-50 overflow-hidden" id="skills">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width={404} height={784} fill="none" viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              My Skills
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {
              props.skills.map(skill => {
                return (
                  <div key={skill.id}>
                    <dt>
                      <Image width={50} height={50} src={skill.image} alt={skill.title} />
                      <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{skill.title}</p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {skill.description}
                    </dd>
                  </div>
                )
              })
              }
          </dl>
        </div>
      </div>
    </div >

  )
}
