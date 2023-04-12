import React from 'react';
import logo from '../../assets/Icons/Group 9969.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='p-10 bg-neutral-900 text-white mt-20'>
            <footer className="footer container mx-auto pb-6">
                <div >
                    <span className="text-5xl font-bold text-white mb-4">JobHunter</span>
                    <p className="w-[400px] text-xl mb-4">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={logo} alt="" />
                </div>
                <div className=''>
                    <span className="text-white text-3xl mb-4">Company</span>
                    <a className="link link-hover text-base mb-2 text-slate-300">About us</a>
                    <a className="link link-hover text-base mb-2 text-slate-300">Contact</a>
                    <a className="link link-hover text-base mb-2 text-slate-300">Jobs</a>
                    <a className="link link-hover text-base mb-2 text-slate-300">Press kit</a>
                </div>
                <div className=''>
                    <span className="text-white text-3xl mb-4">Product</span>
                    <a className="link link-hover text-base mb-2 text-slate-300">Prototype</a>
                    <a className="link link-hover text-base mb-2 text-slate-300">Plans&Pricing</a>
                    <a className="link link-hover text-base mb-2 text-slate-300">Customers</a>
                    <a className="link link-hover text-base mb-2 text-slate-300">Integrations</a>
                </div>
                <div className=''>
                    <span className="text-white text-3xl mb-4">Contact</span>
                    <p className="link link-hover mb-2 text-slate-300 text-xl">524 Broadway , NYC <br />
                        +1 777 - 978 - 5570</p>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-neutral-900 text-white border-base-300">
                <div className="items-center grid-flow-col">
                    <p className='text-slate-400'>@2023 CareerHub. All Rights Reserved</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <p className='text-slate-400'>Powered By <span className='font-bold'>Job Hunter</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;