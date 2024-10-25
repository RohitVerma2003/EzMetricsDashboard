import React, { useRef } from 'react'
import ReactApexChart from 'react-apexcharts'
import folderIcon from '../../assets/icons/feather/icons/folder.svg'
import clipBoardIcon from '../../assets/icons/feather/icons/clipboard.svg'
import menImg from '../../assets/images/users/men.svg'
import womenImg from '../../assets/images/users/women.svg'
import clipIcon from '../../assets/icons/feather/icons/paperclip.svg'
import rightArrowIcon from '../../assets/icons/feather/icons/chevron-right.svg'
import leftArrowIcon from '../../assets/icons/feather/icons/chevron-left.svg'
import Slider from 'react-slick'

const CRM = () => {
    const sliderRef1 = useRef();

    const nextSlide = (ref) => {
        ref.current.slickNext();
    }

    const prevSlide = (ref) => {
        ref.current.slickPrev();
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className='w-100 p-3'>
            <div className='w-100 d-flex gap-3 flex-wrap'>
                <div className=' width-sm-100' style={{ width: '49%' }}>
                    <div className='bg-white p-3 rounded-2' style={{ width: '100%', height: 'fit-content' }}>
                        <p className='fs-6 fw-medium'>Revenue Statistics</p>
                        <div className='d-flex gap-3 flex-wrap justify-content-evenly align-items-center'>
                            <div className=' width-sm-100' style={{ width: '28%' }}>
                                <div>
                                    <div className='fs-5 fw-bold'>+4598</div>
                                    <div className='fs-6 text-secondary'>Inward Amount</div>
                                </div>
                                <div>
                                    <div className='fs-5 fw-bold'>- 296</div>
                                    <div className='fs-6 text-secondary'>Outward Amount</div>
                                </div>
                            </div>
                            <div className=' width-sm-100' style={{ width: '68%' }}>
                                <ReactApexChart
                                    width={"100%"}
                                    height={"140%"}
                                    series={[
                                        {
                                            name: "Series A",
                                            data: [11, 32, 45, 32, 34, 52, 41],
                                            type: "area"

                                        },
                                        {
                                            name: "Series B",
                                            data: [31, 40, 28, 51, 42, 109, 100],
                                            type: "area"

                                        },
                                    ]}
                                    options={{
                                        stroke: {
                                            curve: 'smooth',
                                        },
                                        dataLabels: {
                                            enabled: false,
                                        },
                                        fill: {
                                            type: "solid",
                                            opacity: [0.20, 0.20]
                                        },
                                        legend: {
                                            show: false
                                        },
                                        grid: {
                                            show: false
                                        },
                                        chart: {
                                            toolbar: {
                                                show: false
                                            },
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap gap-3 py-3' style={{ width: '100%' }}>
                        <div className='d-flex gap-2 bg-white rounded-2 p-3 width-sm-100' style={{ width: '48%' }}>
                            <div className='p-3 rounded-2 d-flex justify-content-center align-items-center bg-info bg-opacity-25'>
                                <img src={folderIcon} alt="..." className='iconGreyFilter' width={20} />
                            </div>
                            <div>
                                <p className='text-secondary m-0 fw-normal'>Projects</p>
                                <p className='text-dark fs-5 fw-medium m-0 fw-medium'>85</p>
                            </div>
                        </div>
                        <div className='d-flex gap-2 bg-white rounded-2 p-3 width-sm-100' style={{ width: '48%' }}>
                            <div className='p-3 rounded-2 d-flex justify-content-center align-items-center bg-info bg-opacity-25'>
                                <img src={clipBoardIcon} alt="..." className='iconGreyFilter' width={20} />
                            </div>
                            <div>
                                <p className='text-secondary m-0 fw-normal'>Tasks</p>
                                <p className='text-dark fs-5 fw-medium m-0 fw-medium'>259</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-2 width-sm-100' style={{ width: '49%', height: 'fit-content' }}>
                    <p className='fs-6 fw-medium'>Index</p>
                    <ReactApexChart
                        type='bar'
                        width={'100%'}
                        series={[
                            {
                                name: "company1",
                                data: [120, 140, 160, 180, 200],
                                color: "#0d6efd"
                            },
                            {
                                name: "company2",
                                data: [100, 120, 140, 160, 180],
                                color: "#6c757d"
                            }
                        ]}

                        options={{
                            theme: {
                                mode: 'light'
                            },
                            tooltip: {
                                followCursor: true
                            },
                            dataLabels: {
                                enabled: false
                            },
                            xaxis: {
                                categories: ["Feb", "Mar", "Apr", "May", "Jun"],
                                tickPlacement: 'on'
                            },
                            legend: {
                                show: false
                            },
                            grid: {
                                show: false
                            },
                            plotOptions: {
                                bar: {
                                    borderRadius: 2,
                                    columnWidth: 12,
                                }
                            },
                            stroke: {
                                colors: "transparent",
                                width: 5
                            },

                        }}
                    />
                </div>
            </div>
            <div className='d-flex gap-3 flex-wrap'>
                <div className='d-flex flex-wrap gap-3 mt-4 width-sm-100' style={{ width: '74%' }}>
                    <div className='bg-white rounded-2 p-3 width-sm-100' style={{ width: '31%' }}>
                        <p className='fs-6 fw-medium'>Issues</p>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center'>
                                <ReactApexChart
                                    type='radialBar'
                                    width={"90%"}
                                    series={[60]}
                                    options={{
                                        plotOptions: {
                                            radialBar: {
                                                dataLabels: {
                                                    value: {
                                                        show: false
                                                    },
                                                    name: {
                                                        show: false
                                                    }
                                                },
                                                hollow: {
                                                    margin: 1,
                                                    size: '65%'
                                                }
                                            }
                                        },
                                        tooltip: {
                                            enabled: true,
                                        },
                                    }}
                                />
                            </div>
                            <div className='d-flex justify-content-center gap-4 align-items-center mt-3'>
                                <div className='d-flex justify-content-center gap-2 align-items-center'>
                                    <div className='text-secondary fs-6'>Open</div>
                                    <div className='rounded-circle bg-primary h-25 ' style={{ padding: '7px 7px' }}></div>
                                </div>
                                <div className='d-flex justify-content-center gap-2 align-items-center'>
                                    <div className='rounded-circle bg-secondary h-25 ' style={{ padding: '7px 7px' }}></div>
                                    <div className='text-secondary fs-6'>Close</div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center gap-4 align-items-center'>
                                <div className='fs-6 fw-medium'>105</div>
                                <div className='fs-6 fw-medium'>45</div>
                            </div>
                            <div className='d-flex justify-content-evenly gap-4 align-items-center mt-3'>
                                <div className='fs-6 text-primary fw-medium'>75%</div>
                                <div className='fs-6 text-secondary fw-medium'>See All</div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-2 p-3 width-sm-100' style={{ width: '31%', height: 'fit-content' }}>
                        <p className='fs-6 fw-medium'>Progress</p>
                        <div className='py-1'>
                            <div className='fs-5 py-2'>Project Think Tank</div>
                            <div className='my-3'>
                                <div className='d-flex justify-content-between mb-2'>
                                    <small className='text-secondary'>Prototyping</small>
                                    <small className='text-secondary'>75%</small>
                                </div>
                                <div>
                                    <div className="progress" style={{ height: "5px" }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{ width: "75%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-3'>
                                <div className='d-flex justify-content-between mb-2'>
                                    <small className='text-secondary'>Designing</small>
                                    <small className='text-secondary'>30%</small>
                                </div>
                                <div>
                                    <div className="progress" style={{ height: "5px" }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-success" style={{ width: "30%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-3'>
                                <div className='d-flex justify-content-between mb-2'>
                                    <small className='text-secondary'>Development</small>
                                    <small className='text-secondary'>50%</small>
                                </div>
                                <div>
                                    <div className="progress" style={{ height: "5px" }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-secondary" style={{ width: "50%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='my-3 d-flex justify-content-between align-items-center w-100'>
                                <div className='d-flex gap-2 position-relative' style={{ width: '28%' }}>
                                    <div className='text-secondary'>Teams: </div>
                                    <div className='position-relative w-100'>
                                        <img src={menImg} alt="..." width={30} className='position-absolute border-3 border-light border rounded-circle' />
                                        <img src={womenImg} alt="..." width={30} className='position-absolute start-50 border-3 border-light border rounded-circle' style={{ zIndex: 10 }} />
                                    </div>
                                </div>
                                <div className='text-secondary'>
                                    <img src={clipIcon} alt="..." width={15} className=' iconGreyFilter' /> 5
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-2 p-3 pb-1 position-relative width-sm-100' style={{ width: '32%', height: 'fit-content' }}>
                        <Slider {...settings} ref={sliderRef1}>
                            <div className='p-2 d-flex justify-content-center align-items-center flex-column'>
                                <img src={menImg} alt="..." width={100} />
                                <div className='my-2 fs-6 fw-medium'>James Smith</div>
                                <div className='fs-6 text-secondary'>Sales Senior Executive</div>
                                <div className='fs-6 text-secondary text-center'>55 Avenue, North Street Road, Carolina State, New York, USA</div>
                                <div className='mt-4 d-flex'>
                                    <div className='text-secondary px-5 py-3 mt-2'>Follow</div>
                                    <div className='text-secondary px-5 py-3 mt-2'>Message</div>
                                </div>
                            </div>
                            <div className='p-2 d-flex justify-content-center align-items-center flex-column'>
                                <img src={menImg} alt="..." width={100} />
                                <div className='my-2 fs-6 fw-medium'>James Smith</div>
                                <div className='fs-6 text-secondary'>Sales Senior Executive</div>
                                <div className='fs-6 text-secondary text-center'>55 Avenue, North Street Road, Carolina State, New York, USA</div>
                                <div className='mt-4 d-flex'>
                                    <div className='text-secondary px-5 py-3 mt-2'>Follow</div>
                                    <div className='text-secondary px-5 py-3 mt-2'>Message</div>
                                </div>
                            </div>
                            <div className='p-2 d-flex justify-content-center align-items-center flex-column'>
                                <img src={menImg} alt="..." width={100} />
                                <div className='my-2 fs-6 fw-medium'>James Smith</div>
                                <div className='fs-6 text-secondary'>Sales Senior Executive</div>
                                <div className='fs-6 text-secondary text-center'>55 Avenue, North Street Road, Carolina State, New York, USA</div>
                                <div className='mt-4 d-flex'>
                                    <div className='text-secondary px-5 py-3 mt-2'>Follow</div>
                                    <div className='text-secondary px-5 py-3 mt-2'>Message</div>
                                </div>
                            </div>
                        </Slider>
                        <div className='d-flex gap-1 position-absolute top-0 end-0 p-3'>
                            <img src={leftArrowIcon} className='iconGreyFilter' alt="..." width={22} onClick={() => prevSlide(sliderRef1)} />
                            <img src={rightArrowIcon} className='iconGreyFilter' alt="..." width={22} onClick={() => nextSlide(sliderRef1)} />
                        </div>
                    </div>
                    <div className='bg-white rounded-2 p-3 width-sm-100' style={{ width: '48%', height: 'fit-content' }}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='fs-6 fw-medium'>Recent Activity</div>
                            <button className='btn btn-light-secondary'>View All</button>
                        </div>
                        <div className='my-4'>
                            <div className='my-2'>
                                <p className='fs-6 fw-medium m-0'>Finished prototyping Project X.</p>
                                <small className='text-secondary'>Just Now</small>
                            </div>
                            <div className='my-2'>
                                <p className='fs-6 fw-medium m-0'>Finished prototyping Project X.</p>
                                <small className='text-secondary'>Just Now</small>
                            </div>
                            <div className='my-2'>
                                <p className='fs-6 fw-medium m-0'>Finished prototyping Project X.</p>
                                <small className='text-secondary'>Just Now</small>
                            </div>
                            <div className='my-2'>
                                <p className='fs-6 fw-medium m-0'>Finished prototyping Project X.</p>
                                <small className='text-secondary'>Just Now</small>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-2 p-3 width-sm-100' style={{ width: '48%', height: 'auto' }}>
                        <p className='fs-6 fw-medium'>Best Performer</p>
                        <div style={{ width: '98%', overflowX: 'scroll' }}>
                            <table className="table table-borderless table-responsive">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">%</th>
                                        <th scope="col">Task</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><img src={menImg} alt="..." width={35} /></th>
                                        <td>John Doe</td>
                                        <td>demo@example.com</td>
                                        <td>95%</td>
                                        <td>1500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img src={womenImg} alt="..." width={35} /></th>
                                        <td>Daniel Chris</td>
                                        <td>demo@example.com</td>
                                        <td>95%</td>
                                        <td>1300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img src={menImg} alt="..." width={35} /></th>
                                        <td>John Joshua</td>
                                        <td>demo@example.com</td>
                                        <td>95%</td>
                                        <td>1200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded rounded-3 p-3 mt-4 width-sm-100' style={{ width: "24%", height: "fit-content" }}>
                    <p className='fs-6 fw-medium'>User Sources</p>
                    <div className='d-flex justify-content-center' >
                        <ReactApexChart
                            type='radialBar'
                            width={"120%"}
                            series={[83, 67, 55, 44]}
                            options={{
                                labels: ["Others", "Ads", "Media", "News"],
                                plotOptions: {
                                    radialBar: {
                                        dataLabels: {
                                            total: {
                                                show: true,
                                                label: "Total"
                                            }
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className='mt-4 mb-2 fs-5 fw-medium text-center'>Project X</div>
                    <div className='fs-6 text-center text-secondary mb-1'>List of top sources for above project</div>
                    <div className='d-flex gap-3 py-5 justify-content-center'>
                        <div className='text-center w-50'>
                            <div className='fs-6 text-center text-secondary'>News</div>
                            <div className='fs-5 fw-medium text-center'>259</div>
                            <div className='fs-6 fw-light text-danger'>7.5</div>
                        </div>
                        <div className='text-center w-50'>
                            <div className='fs-6 text-center text-secondary'>Media</div>
                            <div className='fs-5 fw-medium text-center'>25</div>
                            <div className='fs-6 fw-light text-success'>3.5</div>
                        </div>
                    </div>
                    <div className='d-flex gap-3 pb-3 justify-content-center'>
                        <div className='text-center w-50'>
                            <div className='fs-6 text-center text-secondary'>Ads</div>
                            <div className='fs-5 fw-medium text-center'>95</div>
                            <div className='fs-6 fw-light text-danger'>5.1</div>
                        </div>
                        <div className='text-center w-50'>
                            <div className='fs-6 text-center text-secondary'>Others</div>
                            <div className='fs-5 fw-medium text-center'>63</div>
                            <div className='fs-6 fw-light text-success'>8.3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CRM
