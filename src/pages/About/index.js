import { useEffect } from 'react';
import videoBackground from './../../assets/videos/videoBackground.mp4';

function About() {
    useEffect(() => {
        document.title = "iCollection - About"
    }, [])
    return (
        <div className='grid grid-cols-2 h-screen overflow-hidden select-none w-full px-[3%]'>
            <div className='relative grid justify-between self-center justify-self-center w-11/12 px-[2%] h-5/6 backdrop-blur-xl bg-white/50 dark:bg-black/50 rounded-2xl translate-y-10 z-10 main-overflow'>
                <div className='w-full grid'>
                    <p className='absolute text-center text-huge top-8'>
                        iCollection Introduction
                    </p>
                </div>
                <div className='absolute top-24  grid place-content-start'>
                    <div className='text-xl w-[90%] justify-self-center'>
                        <p className='para-1 mt-0'>
                            This web application is a platform for trading a special type of token.
                        </p>
                        <p className='para-2'>
                            Unlike NFT - ICR3, which can be minted into multiple copies, this token represents something particularly unique in the world (such as  artworks, limited items, or even houses, etc.). And the price can never be changed except for deletion or auction.
                        </p>
                        <p className='para-1'>
                            Due to have high competitiveness, this token is also purchased in a special way.
                        </p>
                        <p className='para-2'>
                            It is impossible to purchase any NFT right away but through Send Request method. Once the first Request is sent, there will be a 24-hour countdown to wait for the second Request.
                        </p>
                        <p className='para-2'>
                            Unless there is the second Request, after 24 hours, that NFT will automatically belongs to that single Request.
                        </p>
                        <p className='para-2'>
                            Otherwise, an auction will be opened automatically after 24 hours with the same amount of time for its duration since the first Request. But the owner can still custom its duration, limit bid and start in pending period. Once started, the first Request becomes the first bidder immediately. The final bidder will be the owner.
                        </p>
                        <p className='para-1'>
                            Have highly competitive and valuable as it relies on copyright and scarcity.
                        </p>
                        <p className='para-2'>
                            The new owner will have fully access to that NFT, in contrary, the old owner will lose all control and can only own it through an acquisition.
                        </p>
                        <p className='para-1'>
                            Everything is all automatic.
                        </p>
                        <p className='para-2 pb-5'>
                            The smart contracts were written in a special way to keep everything launching in automaticity.
                        </p>
                    </div>
                </div>
            </div>

            <div className='relative grid justify-between self-center justify-self-center w-11/12 px-[2%] h-5/6 backdrop-blur-xl bg-white/50 dark:bg-black/50 border-1 rounded-2xl translate-y-10 z-10 main-overflow'>
                <div className='w-full grid '>
                    <p className='absolute text-center text-huge top-[3%]'>
                        Common issues
                    </p>
                </div>
                <div className='absolute top-[10%]  grid place-content-start'>
                    <div className='text-xl w-[90%] justify-self-center'>
                        <p className='para-1 mt-0'>
                            It's easy to get free ICX for experiencing the service.
                        </p>
                        <p className='para-2'>
                            This web application was launched on Sejong testnet, where you can pay everything for free. In order to do it, remember to using ICX faucets before using.
                        </p>
                        <p className='para-1'>
                            Be careful to use copyrighted picures for testing without permissions.
                        </p>
                        <p className='para-2'>
                            This web application will not have any relevance to the cases of users infringing copyright.
                        </p>
                        <p className='para-1'>
                            The contents might be oversized.
                        </p>
                        <p className='para-2'>
                            When coding this web application, I used an operating system that everything is shrunk. I was startle when opening it on other devices. I sincerely apologize for this unfortunate accident.
                        </p>
                        <p className='para-1'>
                            The code is a bit messy and the performance is stil not good.
                        </p>
                        <p className='para-2'>
                            I did this project in a rush, that's why everything is still not good and the source code looks a bit messy.
                        </p>
                        <p className='para-2'>
                            Besides, there are still some essential features missing and a lot of things unfinished, it will be perfected someday in the future.
                        </p>
                    </div>
                </div>
            </div>


            <div className='fixed bg-center overflow-hidden w-auto h-fit bg-contain video-container -z-0 '>
                <video autoPlay loop muted className="video" src={videoBackground} />
            </div>


        </div>
    )
}

export default About
