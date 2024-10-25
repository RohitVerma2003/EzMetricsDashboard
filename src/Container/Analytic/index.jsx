import React, { useRef, useState } from 'react'
import bitcoinImg from '../../assets/images/crypto/bitcoin.png'
import ethereumImg from '../../assets/images/crypto/ethereum.png'
import rippleImg from '../../assets/images/crypto/ripple.png'
import bitCashImg from '../../assets/images/crypto/bcc.png'
import bitcoinBackImg from '../../assets/images/crypto/1.png'
import ehtereumBackImg from '../../assets/images/crypto/2.png'
import rippleBackImg from '../../assets/images/crypto/3.png'
import bitCashBackImg from '../../assets/images/crypto/4.png'
import ReactApexChart from 'react-apexcharts'

const Analytic = () => {
    return (
        <div className='w-100 p-3'>
            <div className='d-flex flex-wrap gap-2 mt-4'>
                <div className='d-flex align-items-center gap-2 bg-light rounded-2 p-3 position-relative width-sm-100' style={{ width: '24%' }}>
                    <div>
                        <img src={bitcoinImg} alt="..." width={50} />
                    </div>
                    <div>
                        <p className='text-dark fs-5 fw-medium m-0 fw-medium'>Total Leads</p>
                        <p className='text-secondary m-0 fs-6 fw-normal'>450</p>
                    </div>
                    <div className='position-absolute end-0 px-3'>
                        <img src={bitcoinBackImg} alt="..." width={50} className='opacity-50' />
                    </div>
                </div>
                <div className='d-flex align-items-center gap-2 bg-light rounded-2 p-3 position-relative width-sm-100' style={{ width: '24%' }}>
                    <div>
                        <img src={ethereumImg} alt="..." width={50} />
                    </div>
                    <div>
                        <p className='text-dark fs-5 fw-medium m-0 fw-medium'>Conversion Rate</p>
                        <p className='text-secondary m-0 fs-6 fw-normal'>28</p>
                    </div>
                    <div className='position-absolute end-0 px-3'>
                        <img src={ehtereumBackImg} alt="..." width={50} className='opacity-50' />
                    </div>
                </div>
                <div className='d-flex align-items-center gap-2 bg-light rounded-2 p-3 position-relative width-sm-100' style={{ width: '24%' }}>
                    <div>
                        <img src={rippleImg} alt="..." width={50} />
                    </div>
                    <div>
                        <p className='text-dark fs-5 fw-medium m-0 fw-medium'>New Leads</p>
                        <p className='text-secondary m-0 fs-6 fw-normal'>60</p>
                    </div>
                    <div className='position-absolute end-0 px-3'>
                        <img src={rippleBackImg} alt="..." width={50} className='opacity-50' />
                    </div>
                </div>
                <div className='d-flex align-items-center gap-2 bg-light rounded-2 p-3 position-relative width-sm-100' style={{ width: '25%' }}>
                    <div>
                        <img src={bitCashImg} alt="..." width={50} />
                    </div>
                    <div>
                        <p className='text-dark fs-5 fw-medium m-0 fw-medium'>Contacted Leads</p>
                        <p className='text-secondary m-0 fs-6 fw-normal'>120</p>
                    </div>
                    <div className='position-absolute end-0 px-3'>
                        <img src={bitCashBackImg} alt="..." width={50} className='opacity-50' />
                    </div>
                </div>

                <div className='bg-white rounded rounded-3 p-3 width-sm-100' style={{ width: "49%", height: "auto" }}>
                    <p className='fs-6 fw-medium'>Lead Growth Over Time</p>
                    <ReactApexChart
                        type='bar'
                        width={'100%'}
                        series={[
                            {
                                name: "Growth",
                                data: [15, 25, 30, 22, 40, 55, 35, 50, 65, 60],
                                color: "#0d6efd"
                            },
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
                                categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
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

                <div className='bg-white rounded rounded-3 p-3 width-sm-100' style={{ width: "49%", height: "auto" }}>
                    <p className='fs-6 fw-medium'>Lead Conversion Rates Over Time</p>
                    <ReactApexChart
                        series={[
                            {
                                name: "Growth",
                                data: [5, 10, 12, 9, 15, 20, 17, 25, 30, 28],
                                type: "line"

                            },
                        ]}
                        options={{
                            stroke: {
                                curve: 'straight'
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            xaxis: {
                                categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
                                tickPlacement: 'on'
                            },
                        }}
                    />
                </div>

                <div className='bg-white rounded rounded-3 p-3 width-sm-100' style={{ width: "49%", height: "auto" }}>
                    <p className='fs-6 fw-medium'>Lead Sources</p>
                    <div className='d-flex justify-content-center'>
                        <ReactApexChart
                            type='pie'
                            width={"80%"}
                            series={[120, 80, 90, 60, 150]}
                            options={{
                                labels: ['Social Media', 'Google Ads', 'Email Campaigns', 'Referrals', 'Website'],
                                dataLabels: {
                                    enabled: false,
                                },
                                legend: {
                                    show: true,
                                    position: "bottom"
                                },
                                plotOptions: {
                                    pie: {
                                        donut: {
                                            size: "85%"
                                        }
                                    }
                                },
                            }}
                        />
                    </div>
                </div>

                <div className='bg-white rounded rounded-3 p-3 width-sm-100' style={{ width: "49%", height: "auto" }}>
                    <p className='fs-6 fw-medium'>Lead Status Distribution</p>
                    <ReactApexChart
                        series={[
                            {
                                name: "status",
                                data: [150, 120, 100, 70, 30],
                                type: "line"

                            },
                        ]}
                        options={{
                            stroke: {
                                curve: 'smooth'
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            xaxis: {
                                categories: ['New', 'Contacted', 'Qualified', 'Converted', 'Lost'],
                                tickPlacement: 'on'
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Analytic
