## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| errorImg       | 图片地址（与type互斥）     |   string   |     |
| type       | 按钮类型，可选值为`limit`/`empty`或者不设     |   string   |   -  |
| resultView       | 结果说明 | string |   |
| title  | 标题 | string |  |
| href   | 按钮跳转链接      | string |     |
| button    | 按钮文案 | string |     |
| onButtonTap    | 按钮点击回调名称 |   string  | handleErrorButtonTap(可覆盖) |
