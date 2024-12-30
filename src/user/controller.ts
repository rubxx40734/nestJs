import { Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from './service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getUserHello();
  }
  // 子路由
  @Get('/child')
  getChild(): object {
    return {
      id: 'P128i4032',
      name: 'apple',
      type: 'dinner',
    };
  }
  // 動態參數路由
  @Get(':slug')
  get(@Param() params: { slug: string }) {
    const { slug } = params;
    console.log('看三小', slug);
    if (slug === 'apple') {
      return {
        article: '文章',
        title: '文章標題',
        uuid: '48dsjl34d;',
      };
    } else {
      return {
        meaage: '查無文章',
      };
    }
  }
  // 動態參數路由(第二種寫法)
  @Get('/article/:id')
  getDany(@Param('id') id: string) {
    console.log('id', id);
    return {
      name: '動態參數路由(第二種寫法)',
      id: `uuid = ${id}`,
    };
  }

  @Post()
  getPostFn(): string {
    return this.userService.postUserHello();
  }
}
