import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const Faq = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="flex flex-col mb-16 sm:text-center">
                    <a href="/" class="mb-6 sm:mx-auto">
                        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg
                                class="w-10 h-10 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span class="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span class="relative">The</span>
                            </span>{' '}
                            YDJobs is Here to find your Dream Job
                        </h2>
                        <p class="text-base text-gray-700 md:text-lg">
                            You can find easily Your dream job with YDJobs. We will Help you to find Best Match Job with you. Here Are some question that people Frequently Asked.
                        </p>
                    </div>
                </div>
                <div class="space-y-4">
                    <Item title="Can a employee Post a job on YDJobs?">
                        Yes, It will free for everybody. who will login our Site he/she can easily post a job on this site.
                    </Item>
                    <Item title="Which type of job we can find in YDJobs?">
                        You can find anytype of jobs that employee post on Our site. If any employee post a job which you want or which one is match with you then you can find easily the job on Our site. and We will provide best job in our site.
                    </Item>
                    <Item title="Is the Space Pope reptilian!?">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </Item>
                    <Item title="How much money you got on you?">
                        We don't get money for that. It will be free for everybody. People can Post their Job and other who want a job They can easily find their Dream job Using This site. and This is our goal.
                    </Item>
                </div>
            </div>
        </div>
    );
};