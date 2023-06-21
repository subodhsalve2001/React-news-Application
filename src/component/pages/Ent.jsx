import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
export default function Ent() {
    const [sata, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const getNews = async () => {
        const url = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=460dfd2c88d944568d9c3fde2d55051d"
        const { data: { articles } } = await axios.get(url)
        setdata(articles)
    }

    useEffect(() => {
        
        getNews()
        setloading(true)
    }, [])
    return (
        <div>

            <div className="container">
                <div className='row'>
                    <div className="col-sm-6 col-md-8 col-lg-12">


                        {
                            loading ? sata.map((item) => {
                                return <>
                                    <div className="my-4 ">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                                <img src={item.urlToImage} className="img-fluid" alt="" />
                                                <div className='my-2'>
                                                    <a href={item.url}>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }) : <div class="spinner-border text-primary"></div>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
