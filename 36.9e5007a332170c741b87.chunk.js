(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{313:function(n,s,a){"use strict";a.r(s),s.default='<p>Besides exporting a single config object, there are a few more ways that cover other needs as well.</p>\n<h2 id="exporting-a-function">Exporting a Function<a href="#exporting-a-function" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Eventually you will find the need to disambiguate in your <code>webpack.config.js</code> between <a href="/guides/development">development</a> and <a href="/guides/production">production builds</a>. You have (at least) two options:</p>\n<p>One option is to export a function from your webpack config instead of exporting an object. The function will be invoked with two arguments:</p>\n<ul>\n<li>An environment as the first parameter. See the <a href="/api/cli#environment-options">environment options CLI documentation</a> for syntax examples.</li>\n<li>An options map (<code>argv</code>) as the second parameter. This describes the options passed to webpack, with keys such as <a href="/api/cli/#output-options"><code>output-filename</code></a> and <a href="/api/cli/#optimize-options"><code>optimize-minimize</code></a>.</li>\n</ul>\n<pre><code class="hljs language-diff"><span class="token deleted">-module.exports = {</span>\n<span class="token inserted">+module.exports = function(env, argv) {</span>\n<span class="token inserted">+  return {</span>\n<span class="token inserted">+    mode: env.production ? \'production\' : \'development\',</span>\n<span class="token inserted">+    devtool: env.production ? \'source-maps\' : \'eval\',</span>\n     plugins: [\n       new TerserPlugin({\n         terserOptions: {\n<span class="token inserted">+          compress: argv[\'optimize-minimize\'] // only if -p or --optimize-minimize were passed</span>\n         }\n       })\n     ]\n<span class="token inserted">+  };</span>\n};</code></pre>\n<h2 id="exporting-a-promise">Exporting a Promise<a href="#exporting-a-promise" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>webpack will run the function exported by the configuration file and wait for a Promise to be returned. Handy when you need to asynchronously load configuration variables.</p>\n<blockquote class="tip">\n<p>It is possible to export multiple promises by wrapping them into <code>Promise.all([/* Your promises */]).</code></p>\n</blockquote>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        entry<span class="token punctuation">:</span> <span class="token string">\'./app.js\'</span><span class="token punctuation">,</span>\n        <span class="token comment">/* ... */</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="exporting-multiple-configurations">Exporting multiple configurations<a href="#exporting-multiple-configurations" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Instead of exporting a single configuration object/function, you may export multiple configurations (multiple functions are supported since webpack 3.1.0). When running webpack, all configurations are built. For instance, this is useful for <a href="/guides/author-libraries">bundling a library</a> for multiple <a href="/configuration/output#outputlibrarytarget">targets</a> such as AMD and CommonJS:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'./dist-amd.js\'</span><span class="token punctuation">,</span>\n    libraryTarget<span class="token punctuation">:</span> <span class="token string">\'amd\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'amd\'</span><span class="token punctuation">,</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./app.js\'</span><span class="token punctuation">,</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'production\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'./dist-commonjs.js\'</span><span class="token punctuation">,</span>\n    libraryTarget<span class="token punctuation">:</span> <span class="token string">\'commonjs\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'commonjs\'</span><span class="token punctuation">,</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./app.js\'</span><span class="token punctuation">,</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'production\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>If you pass a name to <a href="/api/cli/#config-options"><code>--config-name</code></a> flag, webpack will only build that specific configuration.</p>\n</blockquote>\n'}}]);