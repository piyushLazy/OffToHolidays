import React from 'react';
import Image from 'next/image';
import first from '@/app/about-us/componets/whatMattersAssets/1.png';
import second from '@/app/about-us/componets/whatMattersAssets/2.png';
import third from '@/app/about-us/componets/whatMattersAssets/3.png';
import fourth from '@/app/about-us/componets/whatMattersAssets/4.png';

const WhatMattersTo = () => {
    return (
        <div className="mt-16 flex md:flex max-sm:flex-col justify-evenly">
            <div className='md:w-96'>
                <h3 className="text-2xl font-bold mb-4">What Matters to Travelers?</h3>
                <p className="text-gray-700 max-w-lg mb-8">
                    When choosing a travel partner, we know a few traits make all the difference. At Lazy Yatra, we pride ourselves on delivering:
                </p>
            </div>
            <div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-6 shadow-sm md:w-80">
                        <div className="flex items-start space-x-6">
                            <div className="w-24 h-20 mt-2">
                                <Image src={first} alt="Transparency" height={100} width={100} />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Transparency</p>
                                <p className="text-gray-600 text-sm">
                                    We believe in transparency. From hotels to destinations, we provide clear, honest suggestions. Any additional charges are always disclosed upfront.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border rounded-lg p-6 shadow-sm md:w-80">
                        <div className="flex items-start space-x-3">
                            <div className="w-36 h-32">
                                <Image src={second} alt="Information" height={100} width={100} />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Information</p>
                                <p className="text-gray-600 text-sm">
                                    {"We only offer destinations we\'ve personally explored. This helps us understand challenges, find solutions, and give insights beyond the local view."}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border rounded-lg p-6 shadow-sm md:w-80">
                        <div className="flex items-start space-x-4">
                            <div className="w-24 h-20">
                                <Image src={third} alt="Commitments" height={100} width={100} />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Commitments</p>
                                <p className="text-gray-600 text-sm">
                                    {"We commit what we can provide. Whatever we commit, we provide the same. In case of natural calamities, we try to provide the best alternatives and solutions."}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border rounded-lg p-6 shadow-sm md:w-80">
                        <div className="flex items-start space-x-4">
                            <div className="w-24 h-20 mt-2">
                                <Image src={fourth} alt="Dedication" height={100} width={100} />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Dedication</p>
                                <p className="text-gray-600 text-sm">
                                    We serve with complete dedication. During travel, a traveler can reach us any time during the day or night. We are available 24×7.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatMattersTo;
