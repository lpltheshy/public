var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';
import api from '../../api/api.js';
function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) {
        s = '0' + s;
    }
    return s;
};

export default {
    /**
     * 下载二进制文件
     * @param {*} blob 二进制数据
     * @param {*} mimeType MIME类型
     * @param {*} fileName 文件名
     */
    resolveBlob(blob, mimeType, fileName = Math.random()) {
        const aLink = document.createElement('a')
        var blob = new Blob([blob], {
            type: mimeType
        })
        aLink.href = URL.createObjectURL(blob)
        aLink.setAttribute('download', fileName) // 设置下载文件名称
        aLink.click()
        document.body.appendChild(aLink)
        aLink.remove();
    },
    /**
     * 根据链接下载
     * @param {*} href 链接下载
     * @param {*} fileName 文件名称
     */
    downloadByLink(href, fileName) {
        const aLink = document.createElement('a')
        aLink.href = href;
        aLink.target = "_blank";
        aLink.download = fileName;
        document.body.appendChild(aLink);
        aLink.click();
        aLink.remove();
    },
    getQueryStringByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    //格式化日期为yyyy-MM-dd
    formatToDate: function (date) {
        let formatDate = '';
        if (date != '' && date != null) {
            formatDate = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2)
        } else {
            formatDate = null;
        }
        return formatDate;
    },
    //获取前几个月日期，格式化日期为yyyy-MM-dd
    formatToDateOrign: function (date, num = 0) {
        let formatDate = '';
        if (date != '' && date != null) {
            formatDate = date.getFullYear() + '-' + ("0" + (date.getMonth() - num)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2)
        } else {
            formatDate = null;
        }
        return formatDate;
    },
    //格式化日期为yyyy-MM-dd HH:mm:ss
    formatToDateTime: function (date) {
        let formatDate = '';
        if (date != '' && date != null) {
            formatDate = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2) + ' ' + ("0" + date.getHours()).slice(-2) + ':' + ("0" + date.getMinutes()).slice(-2) + ':' + ("0" + date.getSeconds()).slice(-2);
        } else {
            formatDate = null;
        }
        return formatDate;
    },
    formatToNumDateTime: function (date) {
        let formatDate = '';
        if (date != '' && date != null) {
            formatDate = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
        } else {
            formatDate = null;
        }
        return formatDate;
    },
    //格式化日期为yyyy年MM月dd日 HH时mm分ss秒
    formatToDateTimeFlag: function (date) {
        let formatDate = '';
        if (date != '' && date != null) {
            formatDate = date.getFullYear() + '年' + ("0" + (date.getMonth() + 1)).slice(-2) + '月' + ("0" + date.getDate()).slice(-2) + '日 ' + ("0" + date.getHours()).slice(-2) + '时' + ("0" + date.getMinutes()).slice(-2) + '分' + ("0" + date.getSeconds()).slice(-2) + "秒";
        } else {
            formatDate = null;
        }
        return formatDate;
    },

    //格式化日期为yyyy年MM月dd日
    formatToDateTimeFlagTwo: function (date) {
        let formatDate = '';
        if (date != '' && date != null) {
            formatDate = date.getFullYear() + '年' + ("0" + (date.getMonth() + 1)).slice(-2) + '月' + ("0" + date.getDate()).slice(-2) + '日 ';
        } else {
            formatDate = null;
        }
        return formatDate;
    },
    getGpsToken:function(){
        let data = {
            codeId: "f3c4534631804a6ea8243bef2f8f5d00",
            h5login: true,
            loginLang: "zh_CN",
            loginType: "user",
            loginWay: "interface",
            password: "8d73f8364bbb943ee81b1d4b6391caf3",
            plateColor: "1",
            smsCode: null,
            userId: "yjxt",
        }
        return api.sendGet('/gps-web/api/login.jsp',data,'hostGps')
    }
};
