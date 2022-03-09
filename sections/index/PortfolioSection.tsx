import React  from 'react';
import Image from 'next/image';
import { Portfolio } from '../../model/portfolio';

interface PortfolioProps {
  data: Portfolio[];
}

export const PortfolioSection: React.FC<PortfolioProps> = (props) => {

  return (
    <div className="relative max-w-7xl mx-auto px-4 xl:px-0 py-16">
        <div className="grid sm:grid-cols-3 gap-x-4 gap-y-16 grid">
          {
            props.data?.map(item => {
              return (
                <div key={item.id}>
                  {item.image && <Image src={item.image} width={1920/4} height={1080/4} layout="responsive" alt={item.title}/>}

                  <h2 className="text-3xl mb-2">{item.title}</h2>

                  <div className="text-lg">
                    {item.description}
                  </div>

                  <div className="flex gap-2">
                    <div className="bg-slate-800 px-2 py-1 rounded-xl text-xs text-white">
                      {item.techs?.name}
                    </div>
                  </div>

                  {
                    item.url &&
                    (<div className="mt-6">
                      <a className="text-pink-800 hover:text-pink-800"
                         href={item.url} target="_blank" rel="noreferrer">
                        Visit WebSite {'>>'}
                      </a>
                    </div>)
                  }
                </div>
              )
            })
          }
        </div>
    </div>

  )
};
