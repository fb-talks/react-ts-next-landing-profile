import React  from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Portfolio } from '../../model/portfolio';

const slickConfig = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

interface PortfolioProps {
  data: Portfolio[];
}

export const PortfolioSection: React.FC<PortfolioProps> = (props) => {

  return (
    <div className="bg-gray-50 overflow-hidden" id="portfolio">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Slider {...slickConfig}>
          {
            props.data.map(item => {
              return (
                <div key={item.id}>

                  <div className="flex flex-col md:flex-row">
                    <div className="flex-initial md:w-2/3">
                      {/*<img src="/images/portfolio/01.jpg" alt="" width="100%"/>*/}
                      {item.image && <Image src={item.image} width={500} height={375} layout="responsive" alt={item.title}/>}
                    </div>
                    <div className="flex-initial md:w-1/3">
                      <div className="p-6">

                        <h2 className="text-3xl mb-2">titolo</h2>

                        <div className="text-lg">
                          {item.description}
                        </div>

                        <div className="flex gap-2">
                          <div className="bg-slate-800 px-2 py-1 rounded-xl text-xs text-white">
                            {item.techs.name}
                          </div>
                        </div>

                        {
                          item.url &&
                            (<div className="mt-6">
                              <a className="text-pink-500 hover:text-pink-800"
                                 href={item.url} target="_blank" rel="noreferrer">
                                Visit WebSite
                              </a>
                            </div>)
                        }
                      </div>
                    </div>
                  </div>

                </div>
              )
            })
          }

        </Slider>
      </div>
    </div>

  )
};
