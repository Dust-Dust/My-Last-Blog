import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
// 组件共享模块，需要引入的组件都在这里引入

@NgModule({
    imports: [
        NzButtonModule,
        NzTypographyModule,
    ],
    exports: [
        NzButtonModule,
        NzTypographyModule,
    ]
})
export class ShareModule {
}
