import Vue from 'vue';
import store from '../../vuex/store'
import router from '../../router'
// 检测是否有权限
// 使用Vue.directive声明自定义指令btn-key
export const buttonPermissions = Vue.directive('btn-power',{
    /**
     * inserted：被绑定元素插入父节点时调用
     * el：指令所绑定的元素，可以用来直接操作 DOM
     * binding.value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
     */
    inserted(el,binding){
		// console.log(sessionStorage.getItem('SuperAdmin'));
		if (sessionStorage.getItem('SuperAdmin')!=="超级管理员") {
			let buttonKey = binding.value;
			// console.log('hahahahah',buttonKey,binding)
			// 代表某个元素需要通过权限验证
			if(buttonKey){
			    let key = checkKey(buttonKey)
			    if(!key){//没有权限
			        el.remove()  //删除按钮
			    }
			}else{
			    throw new Error('缺少唯一指令')
			}
		} 
    },
})

// 检测传入的元素key是否可以显示
function checkKey(key) {
    let pageButtonPower = JSON.parse(localStorage.getItem("pageButtonPower"))
    let path = router.currentRoute.path;
    let menuList = []
    if( pageButtonPower.childMenu && pageButtonPower.childMenu.length !== 0 ){
        pageButtonPower.childMenu.forEach(ele=>{
            menuList.push( ele.menuName )
        })
    }
    // console.log('menuList',menuList,pageButtonPower.route,path)
    if(path == pageButtonPower.route && menuList.length !== 0){
        if( menuList.indexOf(key) !== -1 ){
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }
}
