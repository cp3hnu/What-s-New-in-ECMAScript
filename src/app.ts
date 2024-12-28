// 运行时配置

// export { requestConfig as request } from './requestConfig';
import logo from '@/assets/logo.png';
import { RuntimeConfig } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout: RuntimeConfig['layout'] = () => {
  return {
    logo: logo,
    menu: {
      locale: false,
    },
    rightContentRender: false,
    token: {
      sider: {
        colorMenuBackground: '#f2f5f7',
      },
    },
  };
};
