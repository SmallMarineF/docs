import{_ as c,g as e,o as l,c as r,b as n,h as a,F as i,i as s,f as p}from"./app.03f0a038.js";const u={},k=n("h1",{id:"\u8FC7\u6E21\u52A8\u753B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8FC7\u6E21\u52A8\u753B","aria-hidden":"true"},"#"),s(" \u8FC7\u6E21\u52A8\u753B")],-1),b=s("\u4E0D\u662F\u6240\u6709css\u5C5E\u6027\u90FD\u6709\u8FC7\u6E21\u6548\u679C\uFF0C"),d={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties",target:"_blank",rel:"noopener noreferrer"},m=s("\u67E5\u770B\u652F\u6301\u52A8\u753B\u7684CSS\u5C5E\u6027"),h=s("\uFF0C\u4E00\u822C\u6765\u8BB2\u6709\u4E2D\u95F4\u503C\u7684\u5C5E\u6027\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u52A8\u753B\u5982\u5BBD\u5EA6\u3001\u900F\u660E\u5EA6\u7B49\u3002"),y=p(`<h2 id="\u5143\u7D20\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u72B6\u6001" aria-hidden="true">#</a> \u5143\u7D20\u72B6\u6001</h2><ol><li>\u521D\u59CB\u5F62\u6001</li></ol><p>\u6307\u5F53\u9875\u9762\u52A0\u8F7D\u540E\u7684\u6837\u5F0F\u72B6\u6001\uFF0C\u4E0B\u9762\u662F\u8868\u5355\u8BBE\u7F6E\u7684\u521D\u59CB\u6837\u5F0F\u3002</p><ol start="2"><li>\u53D8\u5316\u5F62\u6001</li></ol><p>\u6307\u5143\u7D20\u7531\u521D\u59CB\u72B6\u6001\u53D8\u5316\u540E\u7684\u72B6\u6001\uFF0C\u6BD4\u5982\u9F20\u6807\u653E\u4E0A\u3001\u8868\u5355\u83B7\u5F97\u7126\u70B9\u540E\u7684\u5F62\u6001\u3002</p><h2 id="transition-property" tabindex="-1"><a class="header-anchor" href="#transition-property" aria-hidden="true">#</a> transition-property</h2><ul><li>\u7528\u4E8E\u8BBE\u7F6E\u54EA\u4E9B\u5C5E\u6027\u5E94\u7528\u8FC7\u6E21\u6548\u679C\u3002 <ul><li>\u9ED8\u8BA4\u503C\u4E3Aall\u5373\u6240\u6709\u5C5E\u6027\u90FD\u53D1\u751F\u8FC7\u6E21\u6548\u679C</li><li>\u591A\u4E2A\u5C5E\u6027\u4F7F\u7528\u9017\u53F7\u5206\u9694</li><li>none\u7981\u7528\u5C5E\u6027</li></ul></li></ul><h2 id="transitionend" tabindex="-1"><a class="header-anchor" href="#transitionend" aria-hidden="true">#</a> transitionend</h2><p>\u7528\u4E8E\u63A7\u5236\u8FC7\u6E21\u7ED3\u675F\u540E\u6267\u884C\u7684JS\u4E8B\u4EF6\uFF0C\u7B80\u5199\u5C5E\u6027\u4F1A\u89E6\u53D1\u591A\u6B21\u5982 border-radius \u4F1A\u89E6\u53D1\u56DB\u6B21\u4E8B\u4EF6\uFF0C\u4E0D\u96BE\u7406\u89E3\u56E0\u4E3A\u53EF\u4EE5\u4E3Aborder-bottom-left-radius \u7B49\u56DB\u4E2A\u5C5E\u6027\u72EC\u7ACB\u8BBE\u7F6E\u8FC7\u6E21\uFF0C\u6240\u4EE5\u5C31\u4F1A\u6709\u56DB\u6B21\u4E8B\u4EF6\u3002</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>propertyName</td><td>\u7ED3\u675F\u8FC7\u6E21\u6837\u5F0F</td></tr><tr><td>elapsedTime</td><td>\u8FC7\u6E21\u9700\u8981\u7684\u65F6\u95F4</td></tr><tr><td>pseudoElement</td><td>\u8FC7\u6E21\u7684\u4F2A\u5143\u7D20</td></tr><tr><td>isTrusted</td><td>true:\u7528\u6237\u89E6\u53D1\uFF0Cfalse:\u811A\u672C\u89E6\u53D1</td></tr></tbody></table><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div::before</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;mkimq&#39;</span><span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #95a5a6<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span>
        <span class="token property">transition-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
        <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div:hover::before</span> <span class="token punctuation">{</span>
         <span class="token property">transition-duration</span><span class="token punctuation">:</span> 1.5s<span class="token punctuation">;</span>
				 <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
				 <span class="token property">background</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
         <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div::after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;houdunren.com&#39;</span><span class="token punctuation">;</span>
        <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> -60px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #95a5a6<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-999px<span class="token punctuation">)</span> <span class="token function">skew</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">div.move::after</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span> <span class="token function">skew</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;transitionend&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">&#39;move&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><h2 id="transition-duration" tabindex="-1"><a class="header-anchor" href="#transition-duration" aria-hidden="true">#</a> transition-duration</h2><ul><li>\u7528\u4E8E\u8BBE\u7F6E\u8FC7\u6E21\u65F6\u95F4\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9 <ul><li>\u53EF\u4F7F\u7528\u5355\u4F4D\u4E3A ms\u6BEB\u79D2\u3001s\u79D2</li><li>\u9ED8\u8BA4\u503C\u4E3A0s\u4E0D\u4EA7\u751F\u8FC7\u6E21\u6548\u679C</li><li>\u4E00\u4E2A\u503C\u65F6\uFF0C\u6240\u6709\u5C5E\u6027\u4F7F\u7528\u540C\u6837\u7684\u65F6\u95F4</li><li>\u4E8C\u4E2A\u503C\u65F6\uFF0C\u5947\u6570\u5C5E\u6027\u4F7F\u7528\u7B2C\u4E00\u4E2A\uFF0C\u5076\u6570\u5C5E\u6027\u4F7F\u7528\u7B2C\u4E8C\u4E2A</li><li>\u53D8\u5316\u5C5E\u6027\u6570\u91CF\u5927\u4E8E\u65F6\u95F4\u6570\u91CF\u65F6\uFF0C\u540E\u9762\u7684\u5C5E\u6027\u518D\u4ECE\u7B2C\u4E00\u4E2A\u65F6\u95F4\u5F00\u59CB\u91CD\u590D\u4F7F\u7528</li></ul></li></ul><h2 id="transition-timing-function" tabindex="-1"><a class="header-anchor" href="#transition-timing-function" aria-hidden="true">#</a> transition-timing-function</h2>`,14),g=s("\u7528\u4E8E\u8BBE\u7F6E\u8FC7\u6E21\u6548\u679C\u7684\u901F\u5EA6\uFF0C\u53EF\u5728"),_={href:"https://cubic-bezier.com",target:"_blank",rel:"noopener noreferrer"},f=s("https://cubic-bezier.com"),x=s("\u7F51\u7AD9\u5728\u7EBF\u4F53\u9A8C\u6548\u679C\u5DEE\u5F02\u3002"),v=p('<ol><li>\u53C2\u6570</li></ol><table><thead><tr><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>linear</td><td>\u89C4\u5B9A\u4EE5\u76F8\u540C\u901F\u5EA6\u5F00\u59CB\u81F3\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C\uFF08\u7B49\u4E8E cubic-bezier(0,0,1,1)\uFF09\u3002</td></tr><tr><td>ease</td><td>\u5F00\u59CB\u6162\uFF0C\u7136\u540E\u5FEB\uFF0C\u6162\u4E0B\u6765\uFF0C\u7ED3\u675F\u65F6\u975E\u5E38\u6162\uFF08cubic-bezier(0.25,0.1,0.25,1)\uFF09</td></tr><tr><td>ease-in</td><td>\u5F00\u59CB\u6162\uFF0C\u7ED3\u675F\u5FEB\uFF08\u7B49\u4E8E cubic-bezier(0.42,0,1,1)\uFF09</td></tr><tr><td>ease-out</td><td>\u5F00\u59CB\u5FEB\uFF0C\u7ED3\u675F\u6162\uFF08\u7B49\u4E8E cubic-bezier(0,0,0.58,1)\uFF09</td></tr><tr><td>ease-in-out</td><td>\u4E2D\u95F4\u5FEB\uFF0C\u4E24\u8FB9\u6162\uFF08\u7B49\u4E8E cubic-bezier(0.42,0,0.58,1)\uFF09</td></tr><tr><td>cubic-bezier(n,n,n,n)</td><td>\u5728 cubic-bezier \u51FD\u6570\u4E2D\u5B9A\u4E49\u81EA\u5DF1\u7684\u503C</td></tr></tbody></table><ol start="2"><li>\u8D1D\u585E\u5C14\u66F2\u7EBF</li></ol>',3),z=s("\u9700\u8981\u8BBE\u7F6E\u56DB\u4E2A\u503C"),w=n("code",null,"cubic-bezier(<x1>, <y1>, <x2>, <y2>)",-1),S=s("\uFF0C\u6765\u63A7\u5236\u66F2\u7EBF\u901F\u5EA6\uFF0C\u53EF\u5728"),E={href:"https://cubic-bezier.com",target:"_blank",rel:"noopener noreferrer"},N=s("https://cubic-bezier.com"),V=s("\u7F51\u7AD9\u5728\u7EBF\u4F53\u9A8C\u6548\u679C\u3002"),j=p('<ol start="3"><li>\u6B65\u8FDB\u901F\u5EA6</li></ol><p>\u8FC7\u6E21\u4F7F\u7528\u9636\u68AF\u5316\u5448\u73B0\uFF0C\u6709\u70B9\u50CF\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u673A\u68B0\u821E\uFF0C\u4E0B\u9762\u662F\u628A\u8FC7\u6E21\u5206\u4E94\u6B65\u5B8C\u6210\u3002</p><table><thead><tr><th>\u9009\u9879</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>steps(n,start)</td><td>\u8BBE\u7F6En\u4E2A\u65F6\u95F4\u70B9\uFF0C\u7B2C\u4E00\u65F6\u95F4\u70B9\u53D8\u5316\u72B6\u6001</td></tr><tr><td>steps(n,end)</td><td>\u8BBE\u7F6En\u4E2A\u65F6\u95F4\u70B9\uFF0C\u7B2C\u4E00\u65F6\u95F4\u70B9\u521D\u59CB\u72B6\u6001</td></tr><tr><td>step-start</td><td>\u7B49\u4E8Esteps(1,start)\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4ECE\u4E0B\u4E00\u6B65\u5F00\u59CB</td></tr><tr><td>step-end</td><td>\u7B49\u4E8Esteps(1,end)\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4ECE\u5F53\u524D\u6B65\u5F00\u59CB</td></tr></tbody></table><ol start="4"><li>\u65F6\u949F\u6548\u679C</li></ol>',4),q=n("h2",{id:"transition-delay",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#transition-delay","aria-hidden":"true"},"#"),s(" transition-delay")],-1),C=n("ul",null,[n("li",null,[s("\u7528\u4E8E\u8BBE\u7F6E\u5EF6\u8FDF\u8FC7\u6E21\u7684\u65F6\u95F4\u3002 "),n("ul",null,[n("li",null,"\u9ED8\u8BA4\u4E3A0s\u5373\u7ACB\u523B\u5F00\u59CB\u8FC7\u6E21"),n("li",null,"\u503C\u53EF\u4EE5\u4E3A\u8D1F\u6570"),n("li",null,"\u53D8\u5316\u5C5E\u6027\u6570\u91CF\u5927\u4E8E\u65F6\u95F4\u6570\u91CF\u65F6\uFF0C\u540E\u9762\u7684\u5C5E\u6027\u518D\u4ECE\u7B2C\u4E00\u4E2A\u65F6\u95F4\u5F00\u59CB\u91CD\u590D\u4F7F\u7528")])])],-1),X=n("blockquote",null,[n("p",null,"\u53EF\u4EE5\u4F7F\u7528transition \u6307\u4EE4\u5C06\u8FC7\u6E21\u89C4\u5219\u7EDF\u4E00\u8BBE\u7F6E\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\u3002 \u5FC5\u987B\u8BBE\u7F6E\u8FC7\u6E21\u65F6\u95F4 \u5EF6\u8FDF\u65F6\u95F4\u653E\u5728\u9017\u53F7\u6216\u7ED3\u675F\u524D")],-1);function B(L,T){const t=e("ExternalLinkIcon"),o=e("code-open");return l(),r(i,null,[k,n("p",null,[b,n("a",d,[m,a(t)]),h]),y,n("p",null,[g,n("a",_,[f,a(t)]),x]),v,n("p",null,[z,w,S,n("a",E,[N,a(t)]),V]),j,a(o,{id:"XWVrXwE"}),q,C,X],64)}var I=c(u,[["render",B]]);export{I as default};
