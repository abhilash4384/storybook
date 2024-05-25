import { EventLoop } from './EventLoop';

export default {
	title: 'JS/EventLoop',
	component: EventLoop,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `<div>You will not be able to use this story as it is an IFrame, I would rather suggest goto this link https://www.jsv9000.app/ and play with it. 
					This topic can not be theorotically represented so better to watch some videos but still some important steps to remember \n
					<ol>
					<li> Primarily Inside call stack GEC(global exicution context) is created </li>
					<li> The code (functions vars etc) is taken into stack line by line and exicuted </li>
					<li> in case of promise (or api) or mutation observers the code(CB function) is pushed onto microtask (or priority) queue </li>
					<li> in case of setTimout or dom events (or similar things) will be pushed on general queue(task queue) </li>
					<li> if no normal JS statements (i.e apart from events, timers or promises) the event loop (who is continously monitoring call stack) will push the priority queue function (or code) on stack after that normal queue function </li>
					<li> finally if nothing left to be done then the global exicution context is also removed from the call stack</li>
					<li> Note: Every function creates its own context's where 2 things happen first assignment of memory to the variables and then code exicution (must read: https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)</li>
					</ol>
					</div>`,
			},
		},
	},
};

export const Primary = {};
