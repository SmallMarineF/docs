import{_ as n,f as s}from"./app.03f0a038.js";const a={},p=s(`<h1 id="cssnext" tabindex="-1"><a class="header-anchor" href="#cssnext" aria-hidden="true">#</a> cssnext</h1><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--text-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--text-color<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u6DF7\u5408" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408" aria-hidden="true">#</a> \u6DF7\u5408</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token selector">--centered</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.centered</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@apply</span> --centered<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272" aria-hidden="true">#</a> \u989C\u8272</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token comment">/* Adjustments */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">color</span><span class="token punctuation">(</span>red <span class="token function">alpha</span><span class="token punctuation">(</span>-10%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">color</span><span class="token punctuation">(</span>red <span class="token function">tint</span><span class="token punctuation">(</span>-10%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">/* lighten */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">color</span><span class="token punctuation">(</span>red <span class="token function">shade</span><span class="token punctuation">(</span>-10%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/* darken */</span>

    <span class="token comment">/* Absolute */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">color</span><span class="token punctuation">(</span>red <span class="token function">alpha</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">color</span><span class="token punctuation">(</span>red <span class="token function">hue</span><span class="token punctuation">(</span>225<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">color</span><span class="token punctuation">(</span>red <span class="token function">saturation</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">color</span><span class="token punctuation">(</span>red <span class="token function">lightness</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">gray</span><span class="token punctuation">(</span>33<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">/* rgb(33, 33, 33) */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">gray</span><span class="token punctuation">(</span>33%<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">/* rgb(84, 84, 84) */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">gray</span><span class="token punctuation">(</span>33%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* rgba(84, 84, 84, 0.5) */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #0000ff80<span class="token punctuation">;</span>      <span class="token comment">/* rgba(0, 0, 255, 0.5) */</span>

    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hwb</span><span class="token punctuation">(</span>90<span class="token punctuation">,</span> 0%<span class="token punctuation">,</span> 0%<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">/* like hsl() but easier for humans */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>90deg 90% 70%<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">/* hsl(180, 90%, 70%) -- supports deg */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>90deg 90% 70% / 30%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* hsla(180, 90%, 70%, 0.3) */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>30 60 90 / 30%<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">/* rgba(30, 60, 90, 0.3) */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote><p>https://colorme.io/</p></blockquote><h2 id="\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668" aria-hidden="true">#</a> \u9009\u62E9\u5668</h2><ol><li>\u5D4C\u5957</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.class-name</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp; .nesting</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token atrule"><span class="token rule">@nest</span> span &amp;</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 30em<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>\u81EA\u5B9A\u4E49\u9009\u62E9\u5668</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@custom-selector</span> <span class="token punctuation">:</span>--button input[type=<span class="token string">&#39;submit&#39;</span>]<span class="token punctuation">,</span> input[type=<span class="token string">&#39;button&#39;</span>]<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@custom-selector</span> <span class="token punctuation">:</span><span class="token property">--enter</span> <span class="token punctuation">:</span>hover<span class="token punctuation">,</span> <span class="token punctuation">:</span>focus<span class="token punctuation">;</span></span>

<span class="token selector">:--button</span> <span class="token punctuation">{</span> \xB7\xB7\xB7 <span class="token punctuation">}</span>
<span class="token selector">:--button:--enter</span> <span class="token punctuation">{</span> \xB7\xB7\xB7 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>\u672A\u6765\u9009\u62E9\u5668</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">:any-link</span> <span class="token punctuation">{</span> \xB7\xB7\xB7 <span class="token punctuation">}</span>         <span class="token comment">/* :link, :visited */</span>
<span class="token selector">p:matches(.a, .b)</span> <span class="token punctuation">{</span> \xB7\xB7\xB7 <span class="token punctuation">}</span> <span class="token comment">/* p.a, p.b */</span>
<span class="token selector">p:not(.a, .b)</span> <span class="token punctuation">{</span> \xB7\xB7\xB7 <span class="token punctuation">}</span>     <span class="token comment">/* p:not(.a), p:not(.b) */</span>
<span class="token selector">a::before</span> <span class="token punctuation">{</span> \xB7\xB7\xB7 <span class="token punctuation">}</span>         <span class="token comment">/* a:before -- for IE compatibility */</span>
<span class="token selector">[frame=hsides i]</span> <span class="token punctuation">{</span> \xB7\xB7\xB7 <span class="token punctuation">}</span>  <span class="token comment">/* [frame=hsides] -- but case insensitive */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5A92\u4F53\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u67E5\u8BE2" aria-hidden="true">#</a> \u5A92\u4F53\u67E5\u8BE2</h2><ol><li>\u81EA\u5B9A\u4E49\u5A92\u4F53\u67E5\u8BE2</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@custom-media</span> --viewport-medium <span class="token punctuation">(</span>width &lt;= 50rem<span class="token punctuation">)</span><span class="token punctuation">;</span></span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>--viewport-medium<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> \xB7\xB7\xB7 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>\u5A92\u4F53\u67E5\u8BE2\u8303\u56F4</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>width &gt;= 500px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span> \xB7\xB7\xB7 <span class="token punctuation">}</span>    <span class="token comment">/* (min-width: 500px) */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u7279\u6027</h2><ol><li>\u5C5E\u6027\u540E\u5907</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">* font-feature-settings fallback */
h2</span> <span class="token punctuation">{</span> <span class="token property">font-variant-caps</span><span class="token punctuation">:</span> small-caps<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">table</span> <span class="token punctuation">{</span> <span class="token property">font-variant-numeric</span><span class="token punctuation">:</span> lining-nums<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span> <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>          <span class="token comment">/* svg filter fallback */</span>
<span class="token selector">div</span> <span class="token punctuation">{</span> <span class="token property">overflow-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span> <span class="token punctuation">}</span>  <span class="token comment">/* word-wrap fallback */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>\u91CD\u7F6E</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">all</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u81EA\u52A8\u524D\u7F00</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
 * display: -webkit-box;
 * display: -ms-flexbox;
 * display: flex;
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,27);function t(e,c){return p}var l=n(a,[["render",t]]);export{l as default};
