import{_ as o,g as c,o as r,c as i,h as a,w as e,F as u,f as p,b as n,i as s}from"./app.03f0a038.js";const d={},k=p(`<h1 id="\u6587\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u63A7\u5236" aria-hidden="true">#</a> \u6587\u672C\u63A7\u5236</h1><h2 id="\u5B57\u4F53\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B57\u4F53\u8BBE\u7F6E" aria-hidden="true">#</a> \u5B57\u4F53\u8BBE\u7F6E</h2><p>\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A\u5B57\u4F53\uFF0C\u7CFB\u7EDF\u4F1A\u4F9D\u6B21\u67E5\u627E\uFF0C\u6BD4\u5982 &#39;Courier New&#39; \u5B57\u4F53\u4E0D\u5B58\u5728\u5C06\u4F7F\u7528 Courier \u4EE5\u6B64\u7C7B\u63A8\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;PingFang SC&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;STHeitiSC-Light&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Helvetica-Light&#39;</span><span class="token punctuation">,</span> arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">,</span> <span class="token string">&#39;Droid Sans Fallback&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u81EA\u5B9A\u4E49\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5B57\u4F53" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5B57\u4F53</h3><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u4E00\u822C\u4E0D\u4F7F\u7528\u81EA\u5B9A\u4E49\u5B57\u4F53\uFF0C\u9664\u975E\u9879\u76EE\u9700\u8981\u6216\u5219\u5F15\u5165\u5B57\u4F53\u56FE\u6807\u3002</p></div><p>\u53EF\u4EE5\u58F0\u660E\u81EA\u5B9A\u4E49\u5B57\u6BB5\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF\u4E0D\u5B58\u5728\u5C06\u4E0B\u8F7D\u8BE5\u5B57\u4F53\uFF0C\u4F7F\u7528\u65B9\u5F0F\u4E5F\u662F\u901A\u8FC7 font-family \u5F15\u5165\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>&lt;style&gt;
    <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
        <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;houdunren&quot;</span><span class="token punctuation">;</span>
        <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;SourceHanSansSC-Light.otf&quot;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;opentype&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;SourceHanSansSC-Heavy.otf&quot;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;opentype&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">span</span> <span class="token punctuation">{</span>
        <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;houdunren&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u5B57\u91CD\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B57\u91CD\u5B9A\u4E49" aria-hidden="true">#</a> \u5B57\u91CD\u5B9A\u4E49</h2><p>\u5B57\u91CD\u6307\u5B57\u7684\u7C97\u7EC6\u5B9A\u4E49\u3002\u53D6\u503C\u8303\u56F4[normal | bold | bolder | lighter | 100 ~900]\u3002</p><p>400\u5BF9\u5E94 normal\uFF0C700\u5BF9\u5E94 bold\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4F7F\u7528bold\u6216normal\u8F83\u591A\u3002</p><h2 id="\u5B57\u4F53\u5B57\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5B57\u4F53\u5B57\u53F7" aria-hidden="true">#</a> \u5B57\u4F53\u5B57\u53F7</h2><p>\u5B57\u53F7\u7528\u4E8E\u63A7\u5236\u5B57\u7B26\u7684\u663E\u793A\u5927\u5C0F\uFF0C\u5305\u62EC[xx-small | x-small | small | meidum | large | x-large | xx-large]\u3002</p><ol><li>\u767E\u5206\u6BD4</li></ol><p>\u767E\u5206\u6570\u662F\u5B50\u5143\u7D20\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20\u7684\u5927\u5C0F\uFF0C\u5982\u7236\u5143\u7D20\u662F20px\uFF0C\u5B50\u5143\u7D20\u8BBE\u7F6E\u4E3A 200%\u5373\u4E3A\u4F60\u5143\u7D20\u7684\u4E24\u500D\u5927\u5C0F\u3002</p><ol start="2"><li>em</li></ol><p>em\u5355\u4F4D\u7B49\u540C\u4E8E\u767E\u5206\u6570\u5355\u4F4D\u3002</p><ol start="3"><li>rem</li></ol><p>rem\u76F8\u5F53\u4E8E\u6839\u5B57\u4F53\u5927\u5C0F\u767E\u5206\u6BD4\u3002</p><h2 id="\u5B57\u4F53\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u5B57\u4F53\u989C\u8272" aria-hidden="true">#</a> \u5B57\u4F53\u989C\u8272</h2><ol><li><p>\u5B57\u7B26\u989C\u8272\uFF1Ared\u3001green\u7B49\u5B57\u7B26\u989C\u8272\u58F0\u660E</p></li><li><p>\u5341\u516D\u8FDB\u5236\u7F51\u9875\u989C\u8272</p></li><li><p>rgb/rgba</p></li></ol><h2 id="\u884C\u9AD8" tabindex="-1"><a class="header-anchor" href="#\u884C\u9AD8" aria-hidden="true">#</a> \u884C\u9AD8</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u503E\u659C\u98CE\u683C" tabindex="-1"><a class="header-anchor" href="#\u503E\u659C\u98CE\u683C" aria-hidden="true">#</a> \u503E\u659C\u98CE\u683C</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">em</span> <span class="token punctuation">{</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u7EC4\u5408\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5B9A\u4E49" aria-hidden="true">#</a> \u7EC4\u5408\u5B9A\u4E49</h2><p>\u53EF\u4EE5\u4F7F\u7528 font \u4E00\u6B21\u5C06\u5B57\u7B26\u6837\u5F0F\u5B9A\u4E49\uFF0C\u4F46\u8981\u6CE8\u610F\u5FC5\u987B\u5B58\u5728\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><ol><li>\u5FC5\u987B\u6709\u5B57\u4F53\u89C4\u5219</li><li>\u5FC5\u987B\u6709\u5B57\u7B26\u5927\u5C0F\u89C4\u5219</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
	<span class="token property">font</span><span class="token punctuation">:</span> bold italic 30px/1.5 <span class="token string">&#39;PingFang SC&#39;</span><span class="token punctuation">,</span> arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u4E0A\u4F8B\u4E2D\u768430px\u4E3A\u5B57\u4F53\u5927\u5C0F\uFF0C1.5\u4E3A1.5\u500D\u884C\u9AD8\u5B9A\u4E49</p></blockquote><h2 id="\u6587\u672C\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u6837\u5F0F" aria-hidden="true">#</a> \u6587\u672C\u6837\u5F0F</h2><h3 id="\u5927\u5C0F\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u5927\u5C0F\u8F6C\u6362" aria-hidden="true">#</a> \u5927\u5C0F\u8F6C\u6362</h3><ol><li>\u5C0F\u578B\u5927\u5199\u5B57\u6BCD\u5B57\u4F53</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
	<span class="token property">font-variant</span><span class="token punctuation">:</span> small-caps<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>\u5B57\u6BCD\u5927\u5C0F\u5199\u8F6C\u6362</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u9996\u5B57\u6BCD\u5927\u5C0F */</span>
    <span class="token property">text-transform</span><span class="token punctuation">:</span> capitalize<span class="token punctuation">;</span>

    <span class="token comment">/* \u5168\u90E8\u5927\u5C0F */</span>
    <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>

    <span class="token comment">/* \u5168\u90E8\u5C0F\u5199 */</span>
    <span class="token property">text-transform</span><span class="token punctuation">:</span> lowercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u6587\u672C\u7EBF\u6761" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u7EBF\u6761" aria-hidden="true">#</a> \u6587\u672C\u7EBF\u6761</h3>`,37),b=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"a"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"span.underline"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),s(" underline"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"span.through"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),s(" line-through"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"span.overline"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),s(" overline"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br")])],-1),m=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("mkimq.com"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("hr")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("underline"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u4E0B\u5212\u7EBF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("hr")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("through"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u5220\u9664\u7EBF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("hr")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("overline"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u4E0A\u5212\u7EBF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br")])],-1),h=p(`<h3 id="\u9634\u5F71\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u9634\u5F71\u63A7\u5236" aria-hidden="true">#</a> \u9634\u5F71\u63A7\u5236</h3><p>\u53C2\u6570\u987A\u5E8F\u4E3A\uFF1A\u989C\u8272\uFF0C\u6C34\u5E73\u504F\u79FB\uFF0C\u5782\u76F4\u504F\u79FB\uFF0C\u6A21\u7CCA\u5EA6\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">text-shadow</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>13<span class="token punctuation">,</span> 6<span class="token punctuation">,</span> 89<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span> 3px 3px 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u7A7A\u767D\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u767D\u5904\u7406" aria-hidden="true">#</a> \u7A7A\u767D\u5904\u7406</h3><p>\u4F7F\u7528 white-space \u63A7\u5236\u6587\u672C\u7A7A\u767D\u663E\u793A\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>pre</td><td>\u4FDD\u7559\u6587\u672C\u4E2D\u7684\u6240\u6709\u7A7A\u767D\uFF0C\u7C7B\u4F3C\u4F7F\u7528 pre \u6807\u7B7E</td></tr><tr><td>nowrap</td><td>\u7981\u6B62\u6587\u672C\u6362\u884C</td></tr><tr><td>pre-wrap</td><td>\u4FDD\u7559\u7A7A\u767D\uFF0C\u4FDD\u7559\u6362\u884C\u7B26</td></tr><tr><td>pre-line</td><td>\u7A7A\u767D\u5408\u5E76\uFF0C\u4FDD\u7559\u6362\u884C\u7B26</td></tr></tbody></table><h3 id="\u6587\u672C\u6EA2\u51FA" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u6EA2\u51FA" aria-hidden="true">#</a> \u6587\u672C\u6EA2\u51FA</h3><ol><li>\u5355\u884C\u6587\u672C</li></ol><p>\u6EA2\u51FA\u6587\u672C\u5BB9\u5668\u540E\u6362\u884C\u5904\u7406</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">overflow-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6EA2\u51FA\u5185\u5BB9\u672B\u5C3E\u6DFB\u52A0 ...</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 1px blueviolet<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li>\u591A\u884C\u6587\u672C</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>solid 1px blueviolet<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li>\u8868\u683C\u6587\u672C\u6EA2\u51FA</li></ol><p>\u8868\u683C\u6587\u672C\u6EA2\u51FA\u63A7\u5236\u9700\u8981\u4E3A table \u6807\u7B7E\u5B9A\u4E49 table-layout: fixed; css\u6837\u5F0F\uFF0C\u8868\u793A\u5217\u5BBD\u662F\u7531\u8868\u683C\u548C\u5355\u5143\u683C\u5BBD\u5EA6\u5B9A\u4E49\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">table-layout</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">table tbody tr td</span> <span class="token punctuation">{</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u6BB5\u843D\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6BB5\u843D\u63A7\u5236" aria-hidden="true">#</a> \u6BB5\u843D\u63A7\u5236</h2><h3 id="\u6587\u672C\u7F29\u8FDB" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u7F29\u8FDB" aria-hidden="true">#</a> \u6587\u672C\u7F29\u8FDB</h3><p>\u63A7\u5236\u5143\u7D20\u90E8\u7684\u6587\u672C\u3001\u56FE\u7247\u8FDB\u884C\u7F29\u8FDB\u64CD\u4F5C</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">text-indent</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u6C34\u5E73\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5BF9\u9F50" aria-hidden="true">#</a> \u6C34\u5E73\u5BF9\u9F50</h3><p>\u4F7F\u7528[left | right | center]\u5BF9\u6587\u672C\u8FDB\u884C\u5BF9\u9F50\u64CD\u4F5C</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5782\u76F4\u5BF9\u9F50" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u5BF9\u9F50" aria-hidden="true">#</a> \u5782\u76F4\u5BF9\u9F50</h3><p>\u4F7F\u7528vertical-align\u7528\u4E8E\u5B9A\u4E49\u5185\u5BB9\u7684\u5782\u76F4\u5BF9\u9F50\u98CE\u683C\uFF0C\u5305\u62EC[middle | baseline | sub | super]\u7B49\u3002</p><ol><li>\u56FE\u50CF\u5728\u6BB5\u843D\u4E2D\u5C45\u4E2D\u5BF9\u9F50</li></ol>`,27),g=n("div",{class:"language-css ext-css line-numbers-mode"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"img"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),s(" middle"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br")])],-1),v=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("houdunren.jpg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    \u6587\u672C\u4FE1\u606F\u3002
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br")])],-1),x=p(`<ol start="2"><li>\u9876\u90E8\u4E0E\u5E95\u90E8\u5BF9\u9F50</li></ol><p>[bottom | top]\u76F8\u5BF9\u4E8E\u884C\u6846\u5E95\u90E8\u6216\u9876\u90E8\u5BF9\u9F50\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>\u4F7F\u7528\u5355\u4F4D\u5BF9\u9F50</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5B57\u7B26\u95F4\u9694" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u95F4\u9694" aria-hidden="true">#</a> \u5B57\u7B26\u95F4\u9694</h3><ol><li>\u5355\u8BCD\u4E0E\u5B57\u7B26\u95F4\u8DDD</li></ol><p>\u4F7F\u7528word-spacing\u4E0Eletter-spacing\u63A7\u5236\u5355\u8BCD\u4E0E\u5B57\u7B26\u95F4\u8DDD\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
	<span class="token property">word-spacing</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
	<span class="token property">letter-spacing</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u6392\u7248\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6392\u7248\u6A21\u5F0F" aria-hidden="true">#</a> \u6392\u7248\u6A21\u5F0F</h3><table><thead><tr><th>\u6A21\u5F0F</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>horizontal-tb</td><td>\u6C34\u5E73\u65B9\u5411\u81EA\u4E0A\u800C\u4E0B\u7684\u4E66\u5199\u65B9\u5F0F</td></tr><tr><td>vertical-rl</td><td>\u5782\u76F4\u65B9\u5411\u81EA\u53F3\u800C\u5DE6\u7684\u4E66\u5199\u65B9\u5F0F</td></tr><tr><td>vertical-lr</td><td>\u5782\u76F4\u65B9\u5411\u5185\u5185\u5BB9\u4ECE\u4E0A\u5230\u4E0B\uFF0C\u6C34\u5E73\u65B9\u5411\u4ECE\u5DE6\u5230\u53F3</td></tr></tbody></table>`,11);function f(y,_){const t=c("CodeGroupItem"),l=c("CodeGroup");return r(),i(u,null,[k,a(l,null,{default:e(()=>[a(t,{title:"css"},{default:e(()=>[b]),_:1}),a(t,{title:"html"},{default:e(()=>[m]),_:1})]),_:1}),h,a(l,null,{default:e(()=>[a(t,{title:"css"},{default:e(()=>[g]),_:1}),a(t,{title:"html"},{default:e(()=>[v]),_:1})]),_:1}),x],64)}var q=o(d,[["render",f]]);export{q as default};
