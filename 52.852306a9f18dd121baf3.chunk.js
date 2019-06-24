(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{335:function(e,o,t){"use strict";t.r(o),o.default='<p>When contributing to the core repo, writing a loader/plugin, or even just working on a complex project, debugging tools can be central to your workflow. Whether the problem is slow performance on a large project or an unhelpful traceback, the following utilities can make figuring it out less painful.</p>\n<ul>\n<li>The <a href="/api/stats"><code>stats</code> data</a> made available through <a href="/api/node#stats-object">Node</a> and the <a href="/api/cli#common-options">CLI</a>.</li>\n<li>Chrome <strong>DevTools</strong> via <code>node-nightly</code> and the latest Node.js versions.</li>\n</ul>\n<h2 id="stats">Stats<a href="#stats" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Whether you want to sift through <a href="/api/stats">this data</a> manually or use a tool to process it, the <code>stats</code> data can be extremely useful when debugging build issues. We won\'t go in depth here as there\'s an <a href="/api/stats">entire page</a> dedicated to its contents, but know that you can use it to find the following information:</p>\n<ul>\n<li>The contents of every module.</li>\n<li>The modules contained within every chunk.</li>\n<li>Per module compilation and resolving stats.</li>\n<li>Build errors and warnings.</li>\n<li>The relationships between modules.</li>\n<li>And much more...</li>\n</ul>\n<p>On top of that, the official <a href="https://github.com/webpack/analyse">analyze tool</a> and <a href="/guides/code-splitting#bundle-analysis">various others</a> will accept this data and visualize it in various ways.</p>\n<h2 id="devtools">DevTools<a href="#devtools" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>While <a href="https://nodejs.org/api/console.html"><code>console</code></a> statements may work well in simpler scenarios, sometimes a more robust solution is needed. As most front-end developers already know, Chrome DevTools are a life saver when debugging web applications, <em>but they don’t have to stop there</em>. As of Node v6.3.0+, developers can use the built-in <code>--inspect</code> flag to debug a node program in DevTools.</p>\n<p>This gives you the power to easily create breakpoints, debug memory usage, expose and examine objects in the console, and much more. In this short demo, we\'ll utilize the <a href="https://github.com/hemanth/node-nightly"><code>node-nightly</code></a> package which provides access to the latest and greatest inspecting capabilities.</p>\n<blockquote class="warning">\n<p>The <code>--inspect</code> interface has been available since v6.3.0 so feel to try it out with your local version, but be warned that certain features and flags may differ from the ones in this demo.</p>\n</blockquote>\n<p>Let\'s start by installing it globally:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --global node-nightly</code></pre>\n<p>Now, we\'ll need to run it once to finish the installation:</p>\n<pre><code class="hljs language-bash">node-nightly</code></pre>\n<p>Now, we can simply use <code>node-nightly</code> along with the <code>--inspect</code> flag to start our build in any webpack-based project. Note that we cannot run NPM <code>scripts</code>, e.g. <code>npm run build</code>, so we\'ll have to specify the full <code>node_modules</code> path:</p>\n<pre><code class="hljs language-bash">node-nightly --inspect ./node_modules/webpack/bin/webpack.js</code></pre>\n<p>Which should output something like:</p>\n<pre><code class="hljs language-bash">Debugger listening on ws://127.0.0.1:9229/c624201a-250f-416e-a018-300bbec7be2c\nFor <span class="token function">help</span> see https://nodejs.org/en/docs/inspector</code></pre>\n<p>Now jump to <code>chrome://inspect</code> in the browser and you should see any active scripts you\'ve inspected under the <em>Remote Target</em> header. Click the "inspect" link under each script to open a dedicated debugger or the <em>Open dedicated DevTools for Node</em> link for a session that will connect automatically. You can also check out the <a href="https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj">NiM extension</a>, a handy Chrome plugin that will automatically open a DevTools tab every time you <code>--inspect</code> a script.</p>\n<p>We recommend using the <code>--inspect-brk</code> flag which will break on the first statement of the script allowing you to go through the source to set breakpoints and start/stop the build as you please. Also, don\'t forget that you can still pass arguments to the script. For example, if you have multiple configuration files you could pass <code>--config webpack.prod.js</code> to specify the configuration you\'d like to debug.</p>\n'}}]);