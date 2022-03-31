import{_ as n,f as a}from"./app.03f0a038.js";const s={},t=a(`<h1 id="\u54CD\u5E94\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5C3A\u5BF8" aria-hidden="true">#</a> \u54CD\u5E94\u5C3A\u5BF8</h1><h2 id="viewport" tabindex="-1"><a class="header-anchor" href="#viewport" aria-hidden="true">#</a> viewport</h2><p>\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u5C06\u7F51\u9875\u653E\u7F6E\u5728\u865A\u62DF\u7684viewport\u4E2D\uFF0C\u4E0D\u540C\u624B\u673A\u5206\u8FA8\u7387\u5BF9\u89C6\u53E3\u8FDB\u884C\u7F29\u653E\u5373\u53EF\u5168\u5C4F\u663E\u793A\u5185\u5BB9\u3002\u4E0D\u540C\u6D4F\u89C8\u5668\u5B9A\u4E49\u7684viewport\u5C3A\u5BF8\u4E0D\u540C\u3002</p><ol><li>\u89C6\u53E3\u6982\u5FF5</li></ol><p>\u6240\u4EE5viewport\u4E5F\u53EF\u4EE5\u7406\u89E3\u4E3A\u5C4F\u5E55\u6709\u591A\u5C11\u50CF\u7D20\u6765\u663E\u793A\u5185\u5BB9\uFF0C\u8FD9\u548C\u7535\u8111\u7AEF\u662F\u4E0D\u540C\u7684\u3002</p><ul><li>\u7535\u8111\u7AEF\u662F\u663E\u793A\u5668\u7684\u591A\u5927\u5206\u8FA8\u7387\u591A\u5C11\u5C31\u7528\u591A\u5C11\u50CF\u7D20\u6765\u663E\u793A</li><li>\u79FB\u52A8\u7AEF\u662Fviewport\u5206\u8FA8\u7387\u591A\u5C11\u5C31\u7528\u591A\u5C11\u50CF\u7D20\u6765\u663E\u793A</li><li>viewport\u662F\u53EF\u4EE5\u6539\u53D8\u7684\uFF0C\u5C31\u50CF\u663E\u793A\u5668\u7684\u5206\u8FA8\u7387\u53EF\u4EE5\u6539\u53D8\u4E00\u6837</li></ul><ol start="2"><li>\u67E5\u770B\u5C3A\u5BF8</li></ol><p>\u4E3B\u6D41\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4viewport\u5927\u5C0F\uFF08\u56E0\u4E3A\u6D4F\u89C8\u5668\u95F4\u4E0D\u7EDF\u4E00\uFF0C\u6240\u4EE5\u4E5F\u6CA1\u6709\u5FC5\u8981\u5173\u6CE8\u4E0B\u9762\u7684\u5C3A\u5BF8\uFF0C\u53EA\u505A\u4E3A\u4E86\u89E3\u5C31\u884C\uFF09</p><table><thead><tr><th>\u6D4F\u89C8\u5668</th><th>\u5C3A\u5BF8</th></tr></thead><tbody><tr><td>Safari iPhone</td><td>980px</td></tr><tr><td>Opera</td><td>850px</td></tr><tr><td>Android WebKit</td><td>800px</td></tr><tr><td>IE</td><td>974px</td></tr></tbody></table><blockquote><p>\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u67E5\u770B\u5230 viewport\u5927\u5C0F</p></blockquote><ol start="3"><li>\u6539\u53D8\u89C6\u53E3</li></ol><p>\u4F7F\u7528<code>&lt;meta name=&quot;viewport&quot; content=&quot;width=2000px&quot; /&gt;</code>\u53EF\u4EE5\u8C03\u6574\u89C6\u53E3\uFF0C\u8FD9\u6709\u70B9\u50CF\u8BBE\u7F6E\u76F8\u540C\u5C3A\u5BF8\u684C\u9762\u663E\u793A\u4E0D\u540C\u7684\u5206\u8FA8\u7387\u3002</p><ol start="4"><li>\u5A92\u4F53\u67E5\u8BE2</li></ol><p>@media\u662F\u6839\u636E\u5206\u8FA8\u7387\u6765\u54CD\u5E94\u5F0F\u5E03\u5C40\u7684\uFF0C\u6240\u4EE5viewport\u5C3A\u5BF8\u7684\u4E0D\u540C\u5C06\u5F71\u54CD\u5A92\u4F53\u67E5\u8BE2\u7684\u4F7F\u7528\u3002</p><ol start="5"><li>\u8BBE\u5907\u5C3A\u5BF8</li></ol><p>\u50CF\u4E0A\u9762\u901A\u8FC7\u4EBA\u4E3A\u8BBE\u7F6E\u50CF\u7D20\u503C\uFF0C\u663E\u793A\u662F\u4E0D\u53EF\u53D6\u7684\u3002\u5982\u679C\u54CD\u5E94\u5E03\u5C40\u5F53\u7136\u5E0C\u671Bviewport\u4E0E\u8BBE\u5907\u5C3A\u5BF8\u4E00\u81F3\uFF0C\u53EF\u559C\u7684\u662F\uFF0C\u7CFB\u7EDF\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86device-width\u53D8\u91CF\u503C\u7528\u4E8E\u8BC6\u522B\u8BBE\u5907\u5BBD\u5EA6\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="6"><li>\u5176\u4ED6\u5C5E\u6027</li></ol><p>\u4E0B\u9762\u4ECB\u7ECD\u5176\u4ED6\u53EF\u7528\u5728meta\u6807\u7B7E\u4E0A\u7684\u5C5E\u6027</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>initial-scale=1</td><td>\u521D\u59CB\u7F29\u653E\u6BD4\u4F8B</td></tr><tr><td>minimum-scale=.5</td><td>\u5141\u8BB8\u7528\u6237\u6700\u5C0F\u7F29\u653E\u6BD4\u4F8B</td></tr><tr><td>maximum-scale=2.5</td><td>\u5141\u8BB8\u7528\u6237\u6700\u5927\u7F29\u653E\u6BD4\u4F8B</td></tr><tr><td>user-scalable=yes</td><td>\u662F\u5426\u5141\u8BB8\u7528\u6237\u7EFD\u653E</td></tr></tbody></table><ol start="7"><li>JS\u5EF6\u8FDF</li></ol><p>\u8BBE\u7F6E user-scalable=no \u65F6\u53EF\u4EE5js\u89E3\u51B3300\u5EF6\u8FDF\u7684\u95EE\u9898\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7406\u89E3\u4E3A\u5F53\u8BBE\u7F6E user-scalable=yes \u65F6\uFF0C\u7CFB\u7EDF\u8981\u8BC6\u522B\u4E24\u53EA\u624B\u6307\uFF0C\u6240\u4EE5\u8981\u6709\u4E2A\u5BBD\u5BB9\u65F6\u95F4\u3002</p><h2 id="rem-em" tabindex="-1"><a class="header-anchor" href="#rem-em" aria-hidden="true">#</a> rem/em</h2><p>em\u7406\u89E3\u4E3A\u7EE7\u627F\uFF08\u76F8\u5BF9\uFF09\u5355\u4F4D\uFF0C\u5B83\u9700\u8981\u4E00\u4E2A\u53C2\u8003\u7684\u7EE7\u627F\u5C5E\u6027\u3002</p><h3 id="em" tabindex="-1"><a class="header-anchor" href="#em" aria-hidden="true">#</a> em</h3><p>\u6211\u4EEC\u77E5\u9053\u5B57\u4F53\u5927\u5C0F\u662F\u53EF\u4EE5\u7EE7\u627F\u7684\uFF0C\u6211\u4EEC\u5BF9\u4E0B\u9762\u4F8B\u5B50\u8FDB\u884C\u8BF4\u660E</p><ul><li>span\u6CA1\u6709\u8BBE\u7F6E\u5B57\u4F53\u5927\u5C0F\uFF0C\u5C06\u7EE7\u7EED\u7236\u7EA7article\u6807\u7B7E\u5B9A\u4E49\u7684\u5927\u5C0F15px</li><li>strong\u5B9A\u4E49\u4E862em\u5B57\u4F53\u5927\u5C0F\uFF0C\u56E0\u4E3A\u4F7F\u7528\u4E86em\u5355\u4F4D\u5373\u662F\u7236\u7EA715px X 2=30px</li></ul><h3 id="padding-margin" tabindex="-1"><a class="header-anchor" href="#padding-margin" aria-hidden="true">#</a> padding/margin</h3><p>font-size\u672C\u8EAB\u662F\u53EF\u4EE5\u7EE7\u627F\u7684\uFF0C\u6240\u4EE5em\u53C2\u8003\u7236\u7EA7\u5143\u7D20\u5B9A\u4E49\u7684font-size\u3002\u4F46padding/margin\u5728CSS\u4E2D\u4E0D\u4F1A\u7EE7\u627F\u7236\u7EA7\u5B9A\u4E49\u7684padding/margin\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679Cpadding/margin\u4F7F\u7528em\u5355\u4F4D\u5C06\u53C2\u8003\u672C\u5143\u7D20\u7684font-size\u3002</p></div><h3 id="rem" tabindex="-1"><a class="header-anchor" href="#rem" aria-hidden="true">#</a> rem</h3><p>rem\u4E5F\u6709em\u7684\u7279\u6027\u5373\u53C2\u8003\u7EE7\u627F\uFF0C\u53EA\u4E0D\u8FC7\u5B83\u53EA\u53C2\u8003\u6839\u5143\u7D20\uFF08root\uFF09\u5373html\u6807\u7B7E\u5B9A\u4E49\u7684font-size\u3002\u6211\u4EEC\u6765\u901A\u8FC7\u4E0B\u9762\u7684\u793A\u4F8B\u8BE6\u7EC6\u8BF4\u660E\u3002</p><ul><li>\u4E3Ahtml\u6807\u7B7E\u5B9A\u4E49\u4E86font-size:30px\uFF0C\u9875\u9762\u4E2D\u4F7F\u7528rem\u5355\u4F4D\u7684\u5143\u7D20\u5C0630px\u4E3A\u53C2\u8003\uFF0C\u53731rem=30px</li><li>span\u6807\u7B7E\u4F7F\u7528\u4E86font-size:2em\uFF0C\u4F1A\u53C2\u8003\u7236\u7EA7article\u5B9A\u4E49\u7684font-size\uFF0C\u6700\u540E\u8BA1\u7B97\u7ED3\u679C\u4E3Afont-size:30px</li><li>strong\u6807\u7B7E\u5B9A\u4E49\u4E86font-size:2rem\uFF0C\u4F1A\u53C2\u8003html\u6807\u7B7E\u7684font-size\uFF0C\u6700\u540E\u8BA1\u7B97\u7ED3\u679C\u4E3A60px</li><li>strong\u6807\u7B7E\u5B9A\u4E49\u4E86padding:2rem\uFF0C\u8BA1\u7B97\u7ED3\u679C\u4E5F\u662F60px</li><li>strong\u6807\u7B7E\u5B9A\u4E49\u4E86margin:2em\uFF0C\u5C06\u4F1A\u53C2\u8003\u672C\u8EAB\u5143\u7D20\u7684font-size\uFF0C\u4E0A\u9762\u5DF2\u7ECF\u8BF4\u660Estrong\u7684font-size\u4E3A60px\uFF0C\u6240\u4EE5\u6700\u7EC8margin\u7ED3\u679C\u4E3A120px</li></ul><div class="custom-container tip"><p class="custom-container-title">\u4F7F\u7528\u5EFA\u8BAE</p><p>em\u4E0Erem\u90FD\u662F\u4E0D\u9519\u7684\u54CD\u5E94\u5355\u4F4D\uFF0C\u6839\u636E\u9700\u8981\u8FDB\u884C\u9009\u62E9\u3002em\u5177\u6709\u7EE7\u627F\u7279\u6027\uFF0Crem\u7684\u53C2\u8003\u5143\u7D20\u662F\u552F\u4E00HTML\uFF0C\u6240\u4EE5rem\u64CD\u4F5C\u7B80\u5355\u3002em\u7EE7\u627F\u5173\u7CFB\u4F1A\u76F8\u5BF9\u590D\u6742\u3002</p><p>\u5E03\u5C40\u4E0A\u7684margin/padding\u4F7F\u7528rem\u662F\u4E0D\u9519\u7684\u9009\u62E9\uFF0C\u5B57\u4F53\u5927\u5C0F\u7B49\u4F7F\u7528em\u4E0Erem\u90FD\u53EF\u4EE5\u3002</p></div><h2 id="\u5C3A\u5BF8\u54CD\u5E94" tabindex="-1"><a class="header-anchor" href="#\u5C3A\u5BF8\u54CD\u5E94" aria-hidden="true">#</a> \u5C3A\u5BF8\u54CD\u5E94</h2><ol><li>\u81EA\u52A8\u54CD\u5E94</li></ol><p>\u5B9E\u9645\u64CD\u4F5C\u4E2D\u4E0D\u540C\u8BBE\u5907\u53EA\u80FD\u53D6\u5BBD\u6216\u9AD8\u4E00\u4E2A\u5C3A\u5BF8\u4E3A\u54CD\u5E94\u5904\u7406\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u6211\u4EEC\u53D6\u5BBD\u5EA6\u54CD\u5E94\uFF0C\u9AD8\u5EA6\u81EA\u52A8\u5904\u7406\u3002\u5C0F\u5C3A\u5BF8\u65F6\u9AD8\u5EA6\u4EA7\u751F\u5782\u76F4\u6EDA\u52A8\u6761\uFF0C\u8FD9\u5E76\u4E0D\u5F71\u54CD\u4EC0\u4E48\u3002</p><ol start="2"><li>\u8BA1\u7B97\u516C\u5F0F</li></ol><p>\u4F7F\u7528rem\u5355\u4F4D\u6765\u5904\u7406\u54CD\u5E94\uFF0C\u56E0\u4E3A\u6539\u53D8rem\u5355\u4F4D\u4F1A\u5F71\u54CD\u6240\u6709\u4F7F\u7528rem\u7684\u5143\u7D20\uFF0C\u8FD9\u786E\u5B9E\u975E\u5E38\u7684\u65B9\u4FBF\u3002</p><ul><li>rem\u662F\u5728\u6839\u5143\u7D20\u4E2D\u5B9A\u4E49\u7684font-size</li><li>rem\u7528\u6765\u5728\u591A\u4E2A\u8BBE\u5907\u54CD\u5E94\u5904\u7406\u65F6\u4F7F\u7528</li><li>html\u5143\u7D20\u4E5F\u53EF\u4EE5\u4F7F\u7528:root\u9009\u62E9\u5668\u9009\u62E9</li></ul><p>\u4E0B\u9762\u5C55\u793A\u7684\u8BBE\u8BA1\u7A3F\u4E3A375px\u5BBD\uFF0C\u4E0B\u9762\u516C\u5F0F\u8868\u793A1px\u6240\u5360\u7684\u5C4F\u5E55\u5C3A\u5BF8\u5BBD\u5EA6\uFF0C\u6709\u4EE5\u4E0B\u51E0\u70B9\u9700\u8981\u8BF4\u660E</p><ul><li>100vw\u8868\u793A100%\u89C6\u53E3\u5BBD\u5EA6</li><li>\u56E0\u4E3A\u4F7F\u7528\u4E86vw\u5BBD\u5EA6\u7CFB\u7EDF\u4F1A\u6839\u636E\u4E0D\u540C\u8BBE\u5907\u81EA\u52A8\u8BA1\u7B97rem</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>mkimq.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reset.min.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vw / 375<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200rem<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #76ba65<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 175px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #df0f71<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,43);function p(e,l){return t}var c=n(s,[["render",p]]);export{c as default};
