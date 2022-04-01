import{_ as l,g as r,o,c as i,b as s,h as e,F as t,i as n,f as p}from"./app.5316fa52.js";var c="/docs/assets/nvm_down.png",d="/docs/assets/nvm_h.png";const m={},u={id:"nvm",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#nvm","aria-hidden":"true"},"#",-1),h=n(),v={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},g=n("nvm"),k=s("p",null,"nvm\u662Fnode\u7248\u672C\u7BA1\u7406\u5DE5\u5177\uFF0C\u53EF\u4EE5\u8FD0\u884C\u5728\u591A\u79CD\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u3002\u8FD9\u91CC\u4E3B\u8981\u8BB0\u5F55\u4E00\u4E0B\u5728windows\u7CFB\u7EDF\u7684\u5B89\u88C5\u548C\u4F7F\u7528\u3002",-1),_=s("h2",{id:"\u4E0B\u8F7D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E0B\u8F7D","aria-hidden":"true"},"#"),n(" \u4E0B\u8F7D")],-1),x=n("nvm-windows\u4E0B\u8F7D\u5730\u5740\uFF1A"),f={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},w=n("https://github.com/coreybutler/nvm-windows/releases"),y=p('<p><img src="'+c+'" alt="nvm"></p><blockquote><p>\u53EA\u9700\u8981\u4E0B\u8F7Dnvm-setup.zip\u5373\u53EF</p></blockquote><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5B89\u88C5\u53EA\u9700\u8981\u6309\u7167\u6B65\u9AA4\u8FDB\u884C\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4F46\u662F\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u4F60\u7684\u7535\u8111\u4E0A\u5DF2\u7ECF\u5B89\u88C5\u8FC7node\u4E86\uFF0C\u5B89\u88C5nvm\u7684\u65F6\u5019\u4F1A\u8BE2\u95EE\u4F60\u662F\u5426\u8981\u7528nvm\u63A7\u5236\u4F60\u672C\u5730\u7684node\u7248\u672C\uFF0C\u786E\u8BA4\u5C31\u597D\u3002\u4F46\u662F\u5982\u679C\u5B89\u88C5\u5B8C\u6210\u540E\u4E0D\u80FD\u6B63\u5E38\u4F7F\u7528\uFF0C\u53EF\u5C1D\u8BD5\u5378\u8F7Dnvm\uFF0C\u5E76\u5C06\u672C\u5730\u7684nodejs\u4E5F\u5378\u8F7D\uFF0C\u5E76\u5220\u9664\u73B0\u6709\u7684nodejs\u5B89\u88C5\u76EE\u5F55\uFF0C\u7136\u540E\u91CD\u65B0\u5B89\u88C5\u5373\u53EF\u3002\u9700\u8981\u6CE8\u610F\uFF0Cnvm\u7684\u5B89\u88C5\u8DEF\u5F84\u540D\u79F0\u4E2D\u6700\u597D\u4E0D\u8981\u6709\u7A7A\u683C\u3002\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u5728\u547D\u4EE4\u884C\u8F93\u5165nvm\uFF0C\u53EF\u770B\u5230\u5982\u4E0B\u5185\u5BB9\uFF1A</p><p><img src="'+d+`" alt="nvm"></p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><ol><li>\u5B89\u88C5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u6700\u65B0\u7A33\u5B9A\u7248\u672C node</span>
nvm <span class="token function">install</span> stable

<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C</span>
nvm <span class="token function">install</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>\u5378\u8F7D</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u67E5\u770B\u7248\u672C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u67E5\u770B\u8BBE\u7F6E\u8DEF\u5F84</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B</span>
nvm root

<span class="token comment"># \u8BBE\u7F6E</span>
nvm root <span class="token punctuation">[</span>path<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="5"><li>\u67E5\u770B\u8BBE\u7F6E\u4EE3\u7406</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B</span>
nvm proxy

<span class="token comment"># \u8BBE\u7F6E</span>
nvm proxy <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="6"><li>\u4F7F\u7528</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362\u7248\u672C</span>
nvm use <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>

<span class="token comment"># \u5207\u6362\u7248\u672C\u548C\u4F4D\u6570</span>
nvm use <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>arch<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="7"><li>\u5217\u51FA\u6240\u4EE5\u5B89\u88C5\u7248\u672C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="8"><li>\u5217\u51FA\u8FDC\u7A0B\u670D\u52A1\u5668\u7248\u672C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm ls-remote
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="9"><li>\u663E\u793A\u5F53\u524D\u7248\u672C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm current
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="10"><li>\u7ED9\u4E0D\u540C\u7248\u672C\u6DFB\u52A0\u522B\u540D</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token builtin class-name">alias</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="11"><li>\u5220\u9664\u5DF2\u5B9A\u4E49\u522B\u540D</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token builtin class-name">unalias</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="12"><li>\u5728\u5F53\u524D\u7248\u672Cnode\u73AF\u5883\u4E0B\uFF0C\u91CD\u65B0\u5168\u5C40\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u53F7\u7684npm\u5305</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm reinstall-packages <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="13"><li>\u8BBE\u7F6E\u9ED8\u8BA4\u7248\u672C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token builtin class-name">alias</span> default <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><ol><li>\u5C06\u4E0B\u8F7D\u5730\u5740\u6267\u884C\u6DD8\u5B9D\u955C\u50CF</li></ol><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>\u5B89\u88C5\u65B0\u7684nodejs\u548Cnpm\u540E\uFF0C\u5728npm install\u5B89\u88C5vue\u9879\u76EE\u7684\u4F9D\u8D56\u5305\u65F6\u53EF\u80FD\u4F1A\u62A5\u9519</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9519\u8BEF\u4FE1\u606F</span>
<span class="token function">npm</span>  Unexpected  end  of  JSON  input  <span class="token keyword">while</span>  parsing  near

<span class="token comment"># \u89E3\u51B3\u529E\u6CD5</span>
<span class="token function">npm</span> cache clean --force
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,37);function N(V,j){const a=r("ExternalLinkIcon");return o(),i(t,null,[s("h1",u,[b,h,s("a",v,[g,e(a)])]),k,_,s("p",null,[x,s("a",f,[w,e(a)])]),y],64)}var E=l(m,[["render",N]]);export{E as default};