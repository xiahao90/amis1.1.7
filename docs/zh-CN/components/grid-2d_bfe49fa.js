amis.define('docs/zh-CN/components/grid-2d.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Grid 2D 布局",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Grid 2D 组件",
    "icon": null,
    "order": 47,
    "html": "<div class=\"markdown-body\"><p>Grid 2D 是一种二维布局方式，它可以更直观设置组件位置。</p>\n<blockquote>\n<p>Grid 2D 布局不支持 IE11</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"grid-2d\",\n  \"grids\": [\n    {\n      \"x\": 1,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 6,\n      \"gridClassName\": \"bg-green-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-1] x:1 y:1 h:1 w:6\"\n    },\n    {\n      \"x\": 7,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 6,\n      \"gridClassName\": \"bg-blue-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-2] x:7 y:1 h:1 w:6\"\n    },\n    {\n      \"x\": 1,\n      \"y\": 2,\n      \"h\": 2,\n      \"w\": 4,\n      \"gridClassName\": \"bg-red-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-3] x:1 y:2 h:2 w:4\"\n    },\n    {\n      \"x\": 5,\n      \"y\": 2,\n      \"h\": 1,\n      \"w\": 8,\n      \"gridClassName\": \"bg-purple-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-4] x:5 y:2 h:1 w:8\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B8%83%E5%B1%80%E5%9F%BA%E7%A1%80\" href=\"#%E5%B8%83%E5%B1%80%E5%9F%BA%E7%A1%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>布局基础</h2><p><code>grids</code> 中可以是任意组件，这里为了简化使用 tpl 组件，通过 x/y/h/w 这四个属性来控制格子的位置和大小。</p>\n<p>首先看下图示例，它就是前面基本用法的示例加上标注：</p>\n<p><img src=\"/amis-1.1.7/static/grid-2d_624e64a.png\" alt=\"grid\"></p>\n<p>默认水平方向会平分为 12 列，可以通过 <code>cols</code> 来调整，比如只分为 3 栏。</p>\n<p>先看 <code>[grid-1]</code>，它的 <code>x/y/h/w</code> 值分别是 <code>1,1,1,6</code>：</p>\n<ul>\n<li><code>x,y</code> 决定这个格子的位置，<code>1,1</code> 就是最左上角的位置，如图所示</li>\n<li><code>w</code> 代表宽度占几格，因为水平方向一共 12 列，所以 6 就意味着占水平空间一半</li>\n<li><code>h</code> 代表高度占几格，默认每行高度可以使用 <code>rowHeight</code> 来控制，也可以设置 <code>height</code> 来单独控制这一行的高度</li>\n</ul>\n<p>其它格子也可以参照这张图推理出来，比如 <code>[grid-2]</code> 起始 x 位置是 <code>7</code>，宽度是 6，因此它和 <code>[grid-]</code> 平分了第一行。</p>\n<h2><a class=\"anchor\" name=\"%E7%8B%AC%E7%AB%8B%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%AE%BD\" href=\"#%E7%8B%AC%E7%AB%8B%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%AE%BD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>独立设置高宽</h2><p>在上面的例子中格子的宽度是根据页面宽度平分，高度是固定的，但我们也可以单独改变某一行或某一列的高宽，方法是格子上的 <code>width</code> 和 <code>height</code> 值。</p>\n<p>看下面这个例子</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"grid-2d\",\n  \"cols\": 3,\n  \"grids\": [\n    {\n      \"x\": 1,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 1,\n      \"width\": 100,\n      \"gridClassName\": \"bg-green-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-1] x:1 y:1 h:1 w:1\"\n    },\n    {\n      \"x\": 2,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 1,\n      \"height\": 100,\n      \"gridClassName\": \"bg-blue-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-2] x:2 y:1 h:1 w:1\"\n    },\n    {\n      \"x\": 3,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 1,\n      \"width\": 100,\n      \"gridClassName\": \"bg-red-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-3] x:3 y:1 h:1 w:1\"\n    },\n    {\n      \"x\": 2,\n      \"y\": 2,\n      \"h\": 1,\n      \"w\": 1,\n      \"gridClassName\": \"bg-purple-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-4] x:2 y:2 h:1 w:1\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>在这个例子中，首先通过 <code>cols</code> 设置了列数为 <code>3</code>，然后将 <code>[grid-1]</code> 和 <code>[grid-3]</code> 的 width 设置为 <code>100</code>，使得这两列的宽度都是 100，而页面剩下的宽度就全都留给了 <code>[grid-2]</code>。</p>\n<p>而在 <code>[grid-2]</code> 中通过 <code>height</code> 设置了高度，使得这一行高度是 <code>100px</code>，而不是默认的 <code>50px</code>。</p>\n<p>请注意：<code>width</code> 将影响一整列，<code>height</code> 将影响一整行。</p>\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E9%80%82%E5%BA%94%E5%86%85%E5%AE%B9%E9%AB%98%E5%BA%A6\" href=\"#%E8%87%AA%E9%80%82%E5%BA%94%E5%86%85%E5%AE%B9%E9%AB%98%E5%BA%A6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自适应内容高度</h2><p>如果格子内容高度不确定，想更具内容自动撑开，可以设置 <code>width</code> 为 <code>auto</code>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"grid-2d\",\n  \"cols\": 3,\n  \"grids\": [\n    {\n      \"x\": 2,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 1,\n      \"height\": \"auto\",\n      \"gridClassName\": \"bg-blue-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"1</br>2</br>3</br>4</br>5</br>6</br>\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%A0%BC%E5%AD%90%E9%97%B4%E8%B7%9D-gap-rowgap\" href=\"#%E6%A0%BC%E5%AD%90%E9%97%B4%E8%B7%9D-gap-rowgap\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>格子间距 gap / rowGap</h2><p>通过 grip 上的 gap 属性来控制间距，默认包含水平和垂直间距</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"grid-2d\",\n  \"gap\": 10,\n  \"gapRow\": 5,\n  \"grids\": [\n    {\n      \"x\": 1,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 6,\n      \"gridClassName\": \"bg-green-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-1] x:1 y:1 h:1 w:6\"\n    },\n    {\n      \"x\": 7,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 6,\n      \"gridClassName\": \"bg-blue-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-2] x:7 y:1 h:1 w:6\"\n    },\n    {\n      \"x\": 1,\n      \"y\": 2,\n      \"h\": 2,\n      \"w\": 4,\n      \"gridClassName\": \"bg-red-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-3] x:1 y:2 h:2 w:4\"\n    },\n    {\n      \"x\": 5,\n      \"y\": 2,\n      \"h\": 1,\n      \"w\": 8,\n      \"gridClassName\": \"bg-purple-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-4] x:5 y:2 h:1 w:8\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%86%85%E5%AE%B9%E5%8C%BA%E5%9F%9F%E5%B0%8F%E4%BA%8E%E6%A0%BC%E5%AD%90%E7%9A%84%E6%91%86%E6%94%BE\" href=\"#%E5%86%85%E5%AE%B9%E5%8C%BA%E5%9F%9F%E5%B0%8F%E4%BA%8E%E6%A0%BC%E5%AD%90%E7%9A%84%E6%91%86%E6%94%BE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>内容区域小于格子的摆放</h2><p>默认情况下，格子的高宽会撑满对应区域的高宽，但有时候内容高宽比这个格子小，比如一张图片，如何将它在各种中居中显示？</p>\n<p>看下面的例子</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"grid-2d\",\n  \"cols\": 3,\n  \"grids\": [\n    {\n      \"x\": 1,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 1,\n      \"gridClassName\": \"bg-green-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-1] x:1 y:1 h:1 w:1\"\n    },\n    {\n      \"x\": 2,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 1,\n      \"align\": \"center\",\n      \"valign\": \"middle\",\n      \"gridClassName\": \"bg-blue-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"hello\"\n    },\n    {\n      \"x\": 3,\n      \"y\": 1,\n      \"h\": 1,\n      \"w\": 1,\n      \"gridClassName\": \"bg-red-300\",\n      \"type\": \"tpl\",\n      \"tpl\": \"[grid-3] x:3 y:1 h:1 w:1\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>在中间的格子中，我们设置了 <code>&quot;align&quot;: &quot;center&quot;</code> 和 <code>&quot;valign&quot;: &quot;middle&quot;</code>，就使得文字水平和垂直居中显示了。</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>grid-2d</code></td>\n<td>指定为 Grid 2D 渲染器</td>\n</tr>\n<tr>\n<td>gridClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>gap</td>\n<td><code>int</code>/<code>string</code></td>\n<td>0</td>\n<td>格子间距，包括水平和垂直</td>\n</tr>\n<tr>\n<td>cols</td>\n<td><code>int</code></td>\n<td>12</td>\n<td>格子水平划分为几个区域</td>\n</tr>\n<tr>\n<td>rowHeight</td>\n<td><code>int</code></td>\n<td>50</td>\n<td>每个格子默认垂直高度</td>\n</tr>\n<tr>\n<td>rowGap</td>\n<td><code>int</code>/<code>string</code></td>\n<td></td>\n<td>格子垂直间距</td>\n</tr>\n<tr>\n<td>grids</td>\n<td><code>Array</code></td>\n<td></td>\n<td>格子集合</td>\n</tr>\n<tr>\n<td>grids[x]</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>格子可以是其他渲染器</td>\n</tr>\n<tr>\n<td>grids[x].x</td>\n<td><code>int</code></td>\n<td></td>\n<td>格子起始位置的横坐标</td>\n</tr>\n<tr>\n<td>grids[x].y</td>\n<td><code>int</code></td>\n<td></td>\n<td>格子起始位置的纵坐标</td>\n</tr>\n<tr>\n<td>grids[x].w</td>\n<td><code>int</code></td>\n<td></td>\n<td>格子横跨几个宽度</td>\n</tr>\n<tr>\n<td>grids[x].h</td>\n<td><code>int</code></td>\n<td></td>\n<td>格子横跨几个高度</td>\n</tr>\n<tr>\n<td>grids[x].width</td>\n<td><code>int</code>/<code>string</code>/<code>auto</code></td>\n<td></td>\n<td>格子所在列的宽度</td>\n</tr>\n<tr>\n<td>grids[x].height</td>\n<td><code>int</code>/<code>string</code>/<code>auto</code></td>\n<td></td>\n<td>格子所在行的高度，可以设置 auto</td>\n</tr>\n<tr>\n<td>grids[x].align</td>\n<td><code>left</code>/<code>center</code>/<code>right</code>/<code>auto</code></td>\n<td><code>auto</code></td>\n<td>格子内容水平布局</td>\n</tr>\n<tr>\n<td>grids[x].valign</td>\n<td><code>top</code>/<code>bottom</code>/<code>middle</code>/<code>auto</code></td>\n<td><code>auto</code></td>\n<td>格子内容垂直布局</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "布局基础",
          "fragment": "%E5%B8%83%E5%B1%80%E5%9F%BA%E7%A1%80",
          "fullPath": "#%E5%B8%83%E5%B1%80%E5%9F%BA%E7%A1%80",
          "level": 2
        },
        {
          "label": "独立设置高宽",
          "fragment": "%E7%8B%AC%E7%AB%8B%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%AE%BD",
          "fullPath": "#%E7%8B%AC%E7%AB%8B%E8%AE%BE%E7%BD%AE%E9%AB%98%E5%AE%BD",
          "level": 2
        },
        {
          "label": "自适应内容高度",
          "fragment": "%E8%87%AA%E9%80%82%E5%BA%94%E5%86%85%E5%AE%B9%E9%AB%98%E5%BA%A6",
          "fullPath": "#%E8%87%AA%E9%80%82%E5%BA%94%E5%86%85%E5%AE%B9%E9%AB%98%E5%BA%A6",
          "level": 2
        },
        {
          "label": "格子间距 gap / rowGap",
          "fragment": "%E6%A0%BC%E5%AD%90%E9%97%B4%E8%B7%9D-gap-rowgap",
          "fullPath": "#%E6%A0%BC%E5%AD%90%E9%97%B4%E8%B7%9D-gap-rowgap",
          "level": 2
        },
        {
          "label": "内容区域小于格子的摆放",
          "fragment": "%E5%86%85%E5%AE%B9%E5%8C%BA%E5%9F%9F%E5%B0%8F%E4%BA%8E%E6%A0%BC%E5%AD%90%E7%9A%84%E6%91%86%E6%94%BE",
          "fullPath": "#%E5%86%85%E5%AE%B9%E5%8C%BA%E5%9F%9F%E5%B0%8F%E4%BA%8E%E6%A0%BC%E5%AD%90%E7%9A%84%E6%91%86%E6%94%BE",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
