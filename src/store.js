
const storeObj = {
    state: {
        progress : false,
        loginInfo : null,
        isShowLeftMenu : false,
        modals: [],
        isShowSmallModal : false,
        smallModalView : null,
        modalTransitionName : 'right', //'right' 오른쪽에서 왼쪽으로, '' 바로나타남, 'bottom'
        leftMenuModals : [],
        leftMenuTransitionName : 'leftmenuright', // leftmenuright 오른쪽에서 왼쪽으로
        refreshMemberInfo : {},
        alertMessage : '',
        isShowAlert : false,
        centerInfo : null,
        noRouterReload : true,
        isLeftMenuAnimationOn : false,
        modalInstance : null,
        isShowToast : false,
        isShowToastVer2 : false,
        toastStr : '',
        toastStrVer2 : '',
        toastVer2Type : '',
        isShowConfirm : false,
        confirmMsg : '',
        confirmOkCallback : {},
        confirmOkName : '',
        confirmCancelName : '',
        confirmType : 0,
        changeTopic: null,
    },
    mutations: {
        showProgress (state){
            state.progress = true;
            // setTimeout(function(){
            //     state.progress = false;
            // }, 5000);
        },
        hideProgress(state){
            state.progress = false;
        },
        setLoginInfo(state, loginInfo){
            // if(loginInfo == null){
            //     if(localStorage['loginInfo'] != null){
            //         loginInfo = JSON.parse(localStorage['loginInfo']);
            //     }
            // } else {
            //     localStorage['loginInfo'] = JSON.stringify(loginInfo);
            // }
            state.loginInfo = loginInfo;
        },
        setCenterInfo(state, centerInfo){
            if(centerInfo == null){
                if(localStorage['centerInfo'] != null){
                    centerInfo = JSON.parse(localStorage['centerInfo']);
                }
            } else {
                localStorage['centerInfo'] = JSON.stringify(centerInfo);
            }
            state.centerInfo = centerInfo;
        },
        logout(state){
            // localStorage.removeItem('loginInfo');
            state.loginInfo = null;
        },
        toggleLeftMenu(state){
            const flag = !state.isShowLeftMenu;
            state.isLeftMenuAnimationOn = flag;
            // Vue.nextTick(() => {
            //     state.isShowLeftMenu = flag
            // });
        },
        addModal (state, data) {
            if(Object.prototype.hasOwnProperty.call(data, 'transitionName')){
                state.modalTransitionName = data.transitionName;
            }else {
                state.modalTransitionName = 'right';
            }

            state.modals.push(data);

            // var modalLength = state.modals.length;
            // if(modalLength > 0){
            //     setTimeout(() => {
            //         var el = state.modalInstance.$refs['modalRef' + (modalLength - 1)][0];
            //         el.style.position = 'absolute';
            //         var backEl = state.modalInstance.$refs['modalRefBack' + (modalLength - 1)][0];
            //         backEl.style.display = 'block';
            //     }, 100) //애니메이션있으면 400 없으면 100
            // }
            //
            // if(modalLength > 1){
            //     setTimeout(() => {
            //         var prevEl = state.modalInstance.$refs['modalRef' + (modalLength - 2)][0];
            //         state.modals[modalLength - 2].scrollTop = document.querySelector('body').scrollTop;
            //         prevEl.style.position = 'fixed';
            //     }, 0); //애니메이션 있으면 300 없으면 0
            // }
        },
        closeLastModal (state, isForceClose = false){
            if(state.modals.length === 0) return;
            // var modalLength = state.modals.length;

            // if(modalLength > 0){
            //     var closeEl = state.modalInstance.$refs['modalRef' + (modalLength - 1)][0];
            //     var scrollTop =  document.querySelector('body').scrollTop;
            //     closeEl.style.position = 'fixed';
            //     closeEl.style.overflow = 'auto';
            //     closeEl.scrollTop = scrollTop;
            //
            //     var backEl = state.modalInstance.$refs['modalRefBack' + (modalLength - 1)][0];
            //     backEl.style.display = 'none';
            // }
            //
            // if(modalLength > 1){
            //     var el = state.modalInstance.$refs['modalRef' + (modalLength - 2)][0];
            //     el.style.position = 'absolute';
            //     document.querySelector('body').scrollTop = state.modals[modalLength - 2].scrollTop
            // }

            // if(state.modals.length === 1){
            //     state.modalTransitionName = 'right';
            // }else if(state.modals.length > 1){
                const lastModal = state.modals[state.modals.length - 1];

                if(!isForceClose){
                    const viewName = lastModal.view;
                    if((viewName === 'ProfileRegist'
                            || viewName === 'ForceSoccerHowWriting'
                            || viewName === 'MemberRegistComplete'
                        ) && !Object.prototype.hasOwnProperty.call(lastModal, 'mode')) {
                        return;
                    }
                }

                if(Object.prototype.hasOwnProperty.call(lastModal, 'transitionName')){
                    state.modalTransitionName = lastModal.transitionName;
                }else {
                    state.modalTransitionName = 'right';
                }
            // }

            state.modals.pop();
        },
        changeLastModal(state, data){
            state.modals.pop();
            state.modals.push(data);
        },
        closeModalAll(state){
            state.modals = [];
        },
        addPopFlag(state, closeFunction){
            const modalLength = state.modals.length;
            const lastModal = state.modals[modalLength - 1];

            if(!Object.prototype.hasOwnProperty.call(lastModal, 'popFlags')){
                lastModal.popFlags = []
            }
            lastModal.popFlags.push(closeFunction);
        },
        closeLastPop(state){
            const modalLength = state.modals.length;
            let lastModal = state.modals[modalLength - 1];
            let lastModalPopLength = lastModal.popFlags.length;
            (lastModal.popFlags[lastModalPopLength - 1])();
            lastModal.popFlags.pop();
        },
        changeModalTransition(state, to){
            state.modalTransitionName = to;
        },
        changeLeftMenuTransition(state, to){
            state.leftMenuTransitionName = to;
        },
        addLeftMenuModal (state, data){
            state.leftMenuModals.push(data);
        },
        clearLeftModalUntil(state, index){
            var lastIndex = state.leftMenuModals.length - 1;
            var cnt = lastIndex - index;
            state.leftMenuModals.splice(-1, cnt);
        },
        closeLastLeftMneuModal(state){
            state.leftMenuModals.pop();
        },
        setRefreshMemberInfo(state, memberInfo){
            state.refreshMemberInfo = memberInfo;
        },
        showAlert(state, msg){
            state.alertMessage = msg;
            state.isShowAlert = true;
            alert(msg); /* TODO 나중에 알럿화면 추가되면 지울것*/
        },
        hideAlert(state){
            state.alertMessage = '';
            state.isShowAlert = false;
        },
        showConfirm(state, data){
            state.isShowConfirm = true;
            state.confirmMsg = data.msg;
            state.confirmOkName = data.okName;
            state.confirmCancelName = data.cancelName;
            state.confirmOkCallback = data.okCallback;
            state.confirmType = data.type;
        },
        hideConfirm(state){
            state.isShowConfirm = false;
            state.confirmMsg = '';
            state.confirmType = 0;
            state.confirmOkCallback = null;
        },
        toggleRouterReload(state){
            state.noRouterReload = !state.noRouterReload;
        },
        setModalInstance(state, instance){
            state.modalInstance = instance;
        },
        setLastModalFixedInIOS(state, top, height){
            window.webkit.messageHandlers.ios.postMessage({cmd : 'setScrollEnabled', flag: 'false'});
            const lastModalEl = state.modalInstance.$refs['modalRef' + (state.modals.length - 1)][0];
            lastModalEl.style.height = height + 'px';
            lastModalEl.style.top = top + 'px';
        },
        unsetLastModalFixedInIOS(state){
            window.webkit.messageHandlers.ios.postMessage({cmd : 'setScrollEnabled', flag: 'true'});
            const lastModalEl = state.modalInstance.$refs['modalRef' + (state.modals.length - 1)][0];
            lastModalEl.style.height = 'unset';
            lastModalEl.style.top ='0';
        },
        showToast(state, str){
            state.toastStr = str;
            state.isShowToast = true;
            setTimeout(function(){
                state.isShowToast = false;
                setTimeout(() => {
                    state.toastStr = '';
                }, 1000);
            }, 2500)
        },
        showToastVer2(state, data) {
            state.toastVer2Type = data.type
            state.toastStrVer2 = data.str;
            state.isShowToastVer2 = true;
            setTimeout(() => {
                state.isShowToastVer2 = false;
                state.toastVer2Type = ''
                state.toastStrVer2 = ''   
            }, 2500);
        },
        setChangeTopic(state, value) {
            state.changeTopic = value
        }
    },
    actions : {
    },
    getters: {
        lastModalData: state => {
            return state.modals[state.modals.length - 1];
        },
        modalLength: state => {
            return state.modals.length;
        },
        isLogin : state => {
            return state.loginInfo == null ? false : true;
        },
        isAdmin : state => {
            if(!state.loginInfo) return false;
            if(state.loginInfo.isAdmin) return true;
            return false;
        }
    }
};
export default storeObj;