amis.define('docs/zh-CN/components/form/group.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Group 表单项组",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Group",
    "icon": null,
    "order": 24,
    "html": "<div class=\"markdown-body\"><p>表单项，默认都是一行显示一个，Group 组件用于在一行展示多个表单项，会自动根据表单项数量均分宽度。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"controls\": [\n    {\n      \"type\": \"group\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"text1\",\n          \"label\": \"文本1\"\n        },\n        {\n          \"type\": \"text\",\n          \"name\": \"text2\",\n          \"label\": \"文本2\"\n        }\n      ]\n    },\n    {\n      \"type\": \"divider\"\n    },\n    {\n      \"type\": \"group\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"text3\",\n          \"label\": \"文本3\"\n        },\n        {\n          \"type\": \"text\",\n          \"name\": \"text4\",\n          \"label\": \"文本4\"\n        },\n        {\n          \"type\": \"text\",\n          \"name\": \"text5\",\n          \"label\": \"文本5\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%95%E7%A4%BA\" href=\"#%E5%B1%95%E7%A4%BA\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>展示</h2><p>可以给<code>group</code>组件设置<code>mode</code>调整展示模式，用法同 <a href=\"./index#%E8%A1%A8%E5%8D%95%E5%B1%95%E7%A4%BA\">Form 展示</a></p>\n<p>下面<code>group</code>我们配置了<code>&quot;mode&quot;: &quot;horizontal&quot;</code>，观察显示情况</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"controls\": [\n    {\n      \"type\": \"text\",\n      \"name\": \"text\",\n      \"label\": \"文本\"\n    },\n    {\n      \"type\": \"divider\"\n    },\n    {\n      \"type\": \"group\",\n      \"mode\": \"horizontal\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"text1\",\n          \"label\": \"文本1\"\n        },\n\n        {\n          \"type\": \"text\",\n          \"name\": \"text2\",\n          \"label\": \"文本2\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>当表单在水平模式下时，如果<code>group</code>内表单项设置<code>&quot;label&quot;: false</code>，会导致布局错乱，如下</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"mode\": \"horizontal\",\n  \"controls\": [\n    {\n        \"type\": \"text\",\n        \"name\": \"text\",\n        \"label\": \"文本\"\n    },\n    {\n        \"type\": \"divider\"\n    },\n    {\n      \"type\": \"group\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"text1\",\n          \"label\": false\n        },\n        {\n          \"type\": \"text\",\n          \"name\": \"text2\",\n          \"label\": false\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>这时可以给<code>group</code>配置<code>label</code>属性，保持和其他表单项布局统一</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"mode\": \"horizontal\",\n  \"controls\": [\n    {\n        \"type\": \"text\",\n        \"name\": \"text\",\n        \"label\": \"文本\"\n    },\n    {\n        \"type\": \"divider\"\n    },\n    {\n      \"type\": \"group\",\n      \"label\": \"文本组\",\n      \"controls\": [\n        {\n          \"type\": \"text\",\n          \"name\": \"text1\",\n          \"label\": false\n        },\n        {\n          \"type\": \"text\",\n          \"name\": \"text2\",\n          \"label\": false\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>CSS 类名</td>\n</tr>\n<tr>\n<td>label</td>\n<td><code>string</code></td>\n<td></td>\n<td>group 的标签</td>\n</tr>\n<tr>\n<td>controls</td>\n<td>Array&lt;<a href=\"./formitem\">表单项</a>&gt;</td>\n<td></td>\n<td>表单项集合</td>\n</tr>\n<tr>\n<td>mode</td>\n<td><code>string</code></td>\n<td></td>\n<td>展示默认，同 <a href=\"./index#%E8%A1%A8%E5%8D%95%E5%B1%95%E7%A4%BA\">Form</a> 中的模式</td>\n</tr>\n<tr>\n<td>gap</td>\n<td><code>string</code></td>\n<td></td>\n<td>表单项之间的间距，可选：<code>xs</code>、<code>sm</code>、<code>normal</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td><code>string</code></td>\n<td><code>&quot;horizontal&quot;</code></td>\n<td>可以配置水平展示还是垂直展示。对应的配置项分别是：<code>vertical</code>、<code>horizontal</code></td>\n</tr>\n</tbody></table>\n</div>",
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
          "label": "展示",
          "fragment": "%E5%B1%95%E7%A4%BA",
          "fullPath": "#%E5%B1%95%E7%A4%BA",
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
