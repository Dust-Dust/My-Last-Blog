import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  // 测试数据
  testData = [
    {
      title: '通过 Angular CLI 使用 Web Worker实现后台运行的计时器',
      detail: '今天有一个新需求，让客户端在每隔2分钟的时候执行一次某个行为，也就是计时器。我心想，这还不简单？用setInterval一下就搞定了。于是哼哧哼哧写完之后打开浏览器测试，让控制台每2分钟打印一次当前时间，写完打开掘金逛了一下博客去抽了一根烟。',
      date: '2023年03月03日 17:12'
    },
    {
      title: '可以实时在页面上复制、新增、删除、渲染、上传图片并预览的Angular_Material表格是如何实现的',
      detail: '16列表格，均可以进行编辑和值输入,其中第一列为自动匹配框，获取鼠标焦点后展示下拉框，点击后渲染对应行的其他部分数据,第9列为一个图片上传，可以预览和删除,最后一列为操作按钮，可以复制和删除,表格下方有一个新建按钮，可以添加一行空数据',
      date: '2023年02月27日 16:43'
    },
    {
      title: 'Angular-Material在有form表单的弹窗中实现MatAutoComplete组件',
      detail: '最近产品经理提了一个需求，想要一个有自动匹配输入框的弹窗，否则只有下拉框，添加用户的时候需要翻一百多个选项太痛苦了。由于我使用的是一个动态弹窗，可以根据不同的场景进行DIY弹窗的内容和样式（例如input，select，checkebox等）所以我想把autoComplete也加进去，相当于新增一种可选择的组件。',
      date: '2022年12月02日 15:07'
    },
    {
      title: '通过 Angular CLI 使用 Web Worker实现后台运行的计时器',
      detail: '今天有一个新需求，让客户端在每隔2分钟的时候执行一次某个行为，也就是计时器。我心想，这还不简单？用setInterval一下就搞定了。于是哼哧哼哧写完之后打开浏览器测试，让控制台每2分钟打印一次当前时间，写完打开掘金逛了一下博客去抽了一根烟。',
      date: '2023年03月03日 17:12'
    },
    {
      title: '可以实时在页面上复制、新增、删除、渲染、上传图片并预览的Angular_Material表格是如何实现的',
      detail: '16列表格，均可以进行编辑和值输入,其中第一列为自动匹配框，获取鼠标焦点后展示下拉框，点击后渲染对应行的其他部分数据,第9列为一个图片上传，可以预览和删除,最后一列为操作按钮，可以复制和删除,表格下方有一个新建按钮，可以添加一行空数据',
      date: '2023年02月27日 16:43'
    },
    {
      title: 'Angular-Material在有form表单的弹窗中实现MatAutoComplete组件',
      detail: '最近产品经理提了一个需求，想要一个有自动匹配输入框的弹窗，否则只有下拉框，添加用户的时候需要翻一百多个选项太痛苦了。由于我使用的是一个动态弹窗，可以根据不同的场景进行DIY弹窗的内容和样式（例如input，select，checkebox等）所以我想把autoComplete也加进去，相当于新增一种可选择的组件。',
      date: '2022年12月02日 15:07'
    },
  ]

  constructor(
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
  }

  // 打开博客详情
  openBlogDetail(): void {
    this.message.info('打开博客详情');
  }
}
