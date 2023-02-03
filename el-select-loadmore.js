import Vue from 'vue';
Vue.directive('el-select-loadmore',
    (el, binding) => {
        // 获取element-ui定义好的scroll盒子
        const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap');
        if (SELECTWRAP_DOM) {
            SELECTWRAP_DOM.addEventListener('scroll', function () {
                /**
                 * scrollHeight 获取元素内容高度(只读)
                 * scrollTop 获取或者设置元素的偏移值,
                 *  常用于:计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
                 * clientHeight 读取元素的可见高度(只读)
                 * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
                 * this.scrollHeight - this.scrollTop === this.clientHeight;
                 *  - 1 兼容大部分浏览器 存在滚动到底部时this.scrollHeight - this.scrollTop 比 this.clientHeight 大（0,1）的情况
                 */
                const condition = this.scrollHeight - this.scrollTop - 1 <= this.clientHeight;
                if (condition) binding.value();
            });
        }
    }
)