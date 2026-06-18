// app/modules/user_profile/native/useUserProfileOverscrollStyles.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function useUserProfileOverscrollStylesTsx1(){const{position}=this.__closure;return position.get()<=0;}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function useUserProfileOverscrollStylesTsx2(){const{isNegativeScrollPosition,position}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()}]:[];return{transform:transform};}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function useUserProfileOverscrollStylesTsx3(){const{interpolate,position,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(position.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(position.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function useUserProfileOverscrollStylesTsx4(){const{isNegativeScrollPosition,position,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()*(1/coefficient)}]:[];return{transform:transform};}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function useUserProfileOverscrollStylesTsx5(){const{clamp,interpolate,position,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(position.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function useUserProfileOverscrollStylesTsx6(){const{position}=this.__closure;return position.get()<0;}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function useUserProfileOverscrollStylesTsx7(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/useUserProfileOverscrollStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileOverscrollStyles(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.scrollPosition;
            var4 = var2.bannerHeight;
            var15 = undefined;
            var _closure2_slot2 = var15;
            var _closure2_slot3 = var15;
            var _closure2_slot4 = var15;
            var _closure2_slot5 = var15;
            var _closure2_slot6 = var15;
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var5 = 3;
            var5 = var2[var5];
            var5 = var6.bind(var15)(var5);
            var5 = var5.bind(var15)();
            var12 = var5.height;
            var _closure2_slot0 = var12;
            var5 = _closure1_slot0;
            var6 = 4;
            var6 = var2[var6];
            var11 = var5.bind(var15)(var6);
            var9 = var11.useStateFromStores;
            var6 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var6;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot5;
                    var2 = var1.useReducedMotion;
                    var1 = 1.5;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = 1;
case 2:
                    return var1;
                }
            };
            var6 = new Array(0);
            var11 = var9.bind(var11)(var8, var7, var6);
            var _closure2_slot1 = var11;
            var16 = 5;
            var2 = var2[var16];
            var6 = var5.bind(var15)(var2);
            var5 = var6.useSharedValue;
            var2 = 0;
            var17 = var5.bind(var6)(var2);
            var5 = null;
            if(!(var5 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var17 = var3;
case 4:
            _closure2_slot2 = var17;
            var18 = -var4;
            _closure2_slot3 = var18;
            var3 = 0.125;
            var8 = var3 * var4;
            _closure2_slot4 = var8;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = var13[var16];
            var5 = var14.bind(var15)(var3);
            var4 = var5.useDerivedValue;
            var3 = function v() {
                var2 = _closure2_slot2;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 <= var1;
                return var1;
            };
            var6 = {};
            var6['position'] = var17;
            var3['__closure'] = var6;
            var6 = 11756661427383.0;
            var3['__workletHash'] = var6;
            var6 = _closure1_slot6;
            var3['__initData'] = var6;
            var9 = var4.bind(var5)(var3);
            _closure2_slot5 = var9;
            var3 = var13[var16];
            var5 = var14.bind(var15)(var3);
            var4 = var5.useAnimatedStyle;
            var3 = function P() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot5;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = new Array(0);
                    _fun0003_ip = 8; continue _fun0003;
case 6:
                    var4 = {};
                    var5 = _closure2_slot2;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 8:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var6 = {};
            var6['isNegativeScrollPosition'] = var9;
            var6['position'] = var17;
            var3['__closure'] = var6;
            var6 = 2642279626533.0;
            var3['__workletHash'] = var6;
            var6 = _closure1_slot7;
            var3['__initData'] = var6;
            var6 = var4.bind(var5)(var3);
            var3 = var13[var16];
            var5 = var14.bind(var15)(var3);
            var4 = var5.useAnimatedStyle;
            var3 = function O() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 5;
                    var2 = var6[var1];
                    var4 = undefined;
                    var11 = var5.bind(var4)(var2);
                    var10 = var11.interpolate;
                    var7 = _closure2_slot2;
                    var3 = var7.get;
                    var9 = var3.bind(var7)();
                    var3 = _closure2_slot3;
                    var7 = new Array(2);
                    var7[0] = var3;
                    var8 = 0;
                    var7[1] = var8;
                    var3 = [1.5, 1];
                    var3 = var10.bind(var11)(var9, var7, var3);
                    var1 = var6[var1];
                    var7 = var5.bind(var4)(var1);
                    var6 = var7.interpolate;
                    var4 = _closure2_slot2;
                    var1 = var4.get;
                    var5 = var1.bind(var4)();
                    var1 = _closure2_slot3;
                    var4 = new Array(2);
                    var4[0] = var1;
                    var4[1] = var8;
                    var9 = _closure2_slot4;
                    var1 = new Array(2);
                    var1[0] = var9;
                    var1[1] = var8;
                    var5 = var6.bind(var7)(var5, var4, var1);
                    var1 = {};
                    var4 = _closure2_slot5;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var2 = new Array(0);
                    _fun0004_ip = 11; continue _fun0004;
case 9:
                    var4 = {};
                    var4['scale'] = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var4['translateY'] = var5;
                    var3[1] = var4;
                    var2 = var3;
case 11:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var19 = var13[var16];
            var19 = var14.bind(var15)(var19);
            var19 = var19.interpolate;
            var7['interpolate'] = var19;
            var7['position'] = var17;
            var7['minScrollPosition'] = var18;
            var18 = 1.5;
            var7['SCALE_FACTOR'] = var18;
            var7['translateOnScale'] = var8;
            var7['isNegativeScrollPosition'] = var9;
            var3['__closure'] = var7;
            var7 = 5375176079092.0;
            var3['__workletHash'] = var7;
            var7 = _closure1_slot8;
            var3['__initData'] = var7;
            var5 = var4.bind(var5)(var3);
            var3 = var13[var16];
            var7 = var14.bind(var15)(var3);
            var4 = var7.useAnimatedStyle;
            var3 = function w() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot5;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0005_ip = 6; continue _fun0005 }
case 7:
                    var2 = new Array(0);
                    _fun0005_ip = 12; continue _fun0005;
case 6:
                    var4 = {};
                    var6 = _closure2_slot2;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var6 = _closure2_slot1;
                    var3 = 1;
                    var3 = var3 / var6;
                    var3 = var5 * var3;
                    var4['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 12:
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var8 = {};
            var8['isNegativeScrollPosition'] = var9;
            var8['position'] = var17;
            var8['coefficient'] = var11;
            var3['__closure'] = var8;
            var8 = 16539417859130.0;
            var3['__workletHash'] = var8;
            var8 = _closure1_slot9;
            var3['__initData'] = var8;
            var4 = var4.bind(var7)(var3);
            var3 = var13[var16];
            var8 = var14.bind(var15)(var3);
            var7 = var8.useAnimatedProps;
            var3 = function A() {
                var1 = {};
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 5;
                var5 = var7[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var5);
                var5 = var6.clamp;
                var2 = var7[var2];
                var8 = var4.bind(var3)(var2);
                var7 = var8.interpolate;
                var4 = _closure2_slot2;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var3 = _closure2_slot0;
                var3 = -var3;
                var2 = _closure2_slot1;
                var2 = var3 * var2;
                var3 = [0];
                var3[1] = var2;
                var2 = [0, 1];
                var4 = var7.bind(var8)(var4, var3, var2);
                var3 = 0;
                var2 = 1;
                var2 = var5.bind(var6)(var4, var3, var2);
                var1['blurAmount'] = var2;
                return var1;
            };
            var9 = {};
            var18 = var13[var16];
            var18 = var14.bind(var15)(var18);
            var18 = var18.clamp;
            var9['clamp'] = var18;
            var18 = var13[var16];
            var18 = var14.bind(var15)(var18);
            var18 = var18.interpolate;
            var9['interpolate'] = var18;
            var9['position'] = var17;
            var9['windowHeight'] = var12;
            var9['coefficient'] = var11;
            var3['__closure'] = var9;
            var9 = 849678936428.0;
            var3['__workletHash'] = var9;
            var9 = _closure1_slot10;
            var3['__initData'] = var9;
            var3 = var7.bind(var8)(var3);
            var9 = _closure1_slot4;
            var8 = var9.useState;
            var7 = var17.get;
            var7 = var7.bind(var17)();
            var7 = var7 < var2;
            var9 = var8.bind(var9)(var7);
            var8 = _closure1_slot3;
            var7 = 2;
            var8 = var8.bind(var15)(var9, var7);
            var2 = var8[var2];
            var7 = 1;
            var12 = var8[var7];
            _closure2_slot6 = var12;
            var7 = var13[var16];
            var9 = var14.bind(var15)(var7);
            var8 = var9.useAnimatedReaction;
            var7 = function H() {
                var2 = _closure2_slot2;
                var1 = var2.get;
                var2 = var1.bind(var2)();
                var1 = 0;
                var1 = var2 < var1;
                return var1;
            };
            var11 = {};
            var11['position'] = var17;
            var7['__closure'] = var11;
            var11 = 3867620644429.0;
            var7['__workletHash'] = var11;
            var11 = _closure1_slot11;
            var7['__initData'] = var11;
            var1 = function y(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot6;
                    var2 = var5.bind(var6)(var2);
                    var1 = var2.bind(var3)(var4);
case 13:
                    return var1;
                }
            };
            var11 = {};
            var13 = var13[var16];
            var13 = var14.bind(var15)(var13);
            var13 = var13.runOnJS;
            var11['runOnJS'] = var13;
            var11['setShowBlur'] = var12;
            var1['__closure'] = var11;
            var11 = 6548835412849.0;
            var1['__workletHash'] = var11;
            var10 = _closure1_slot12;
            var1['__initData'] = var10;
            var1 = var8.bind(var9)(var7, var1);
            var1 = {};
            var1['bannerAnimatedStyle'] = var6;
            var1['bannerImageAnimatedStyle'] = var5;
            var1['contentAnimatedStyle'] = var4;
            var1['blurAnimatedProps'] = var3;
            var1['showBlur'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();