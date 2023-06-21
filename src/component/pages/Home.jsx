import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ScrollToTop from "react-scroll-to-top";
export default function Home() {
    const [sata, setdata] = useState([])
    const getNews = async () => {
        const url = " https://newsapi.org/v2/everything?q=bitcoin&apiKey=460dfd2c88d944568d9c3fde2d55051d"
        const { data: { articles } } = await axios.get(url)


        setdata(articles)
    }

    useEffect(() => {
        getNews()

    }, [])
    return (
        <div>
            <ScrollToTop smooth top={1000} color="blue" />
            <div className="container">
                <div className='row'>
                    <div className="col-sm-6 col-md-8 col-lg-12">


                        {
                            sata.map((item) => {
                                return <>
                                    <div className="my-4 ">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                                <img src={item.urlToImage} className="img-fluid" alt="" />
                                                <div className='my-2'><a href={item.url}>Read More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
