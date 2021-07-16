import { useEffect } from 'react';

let observer;

export default function useObserverHook(ele, callback, watch = []) {
    useEffect(()=>{
        observer = new IntersectionObserver(enteries => {
            callback && callback(enteries)
        });
        observer.observe(document.querySelector(ele));
        return () => {
            if (observer) {
                // 解绑元素
                observer.unobserve(document.querySelector('#loading'));
                // 停止监听
                observer.disconnect();
            }
        }
    }, watch)
}