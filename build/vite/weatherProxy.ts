
import { ProxyOptions } from "vite";

type ProxyTargetList = Record<string, ProxyOptions>;

/**
 * 天气api代理
 * production环境请在nginx配置
 */
export function createWeatherProxy() {
    const ret: ProxyTargetList = {
        '/wapi': {
            target: 'http://www.nmc.cn',
            changeOrigin: true,
            rewrite: (path) => path.replace('/wapi', ''),
            headers: {
                host: 'www.nmc.cn',
                referer: 'http://www.nmc.cn',
            },
        }
    };
    return ret;
}