// app/modules/user_profile/native/EditCollectiblesCTAButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MEDIA_PICKER_SEND_BUTTON_SPRING;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexGrow': 0, 'flexDirection': 'row', 'justifyContent': 'flex-end', 'paddingHorizontal': 12, 'height': 48};
    var4['buttonRowContainer'] = var10;
    var10 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'marginLeft': 24, 'marginRight': 24, 'flexDirection': 'column', 'justifyContent': 'flex-end'};
    var4['buttonContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = 'function EditCollectiblesCTAButtonTsx1(){const{shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}';
    var4['code'] = var8;
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = "function EditCollectiblesCTAButtonTsx2(){const{shouldShowButton}=this.__closure;return{pointerEvents:shouldShowButton.get()?'box-none':'none'};}";
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function EditCollectiblesCTAButtonTsx3(){const{shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = var4.user;
            var _closure2_slot0 = var2;
            var6 = var4.currentSkuId;
            var _closure2_slot1 = var6;
            var10 = var4.selectedSkuId;
            var _closure2_slot2 = var10;
            var3 = var4.isTryItOut;
            var18 = var4.onApply;
            var _closure2_slot3 = var18;
            var16 = var4.analyticsLocations;
            var _closure2_slot4 = var16;
            var11 = var4.analyticsSource;
            var _closure2_slot5 = var11;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var5 = _closure1_slot8;
            var8 = var5.bind(var4)();
            var20 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 6;
            var5 = var9[var5];
            var5 = var20.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var14 = var5.bottom;
            var12 = _closure1_slot0;
            var5 = 7;
            var5 = var9[var5];
            var17 = var12.bind(var4)(var5);
            var15 = var17.useStateFromStores;
            var5 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var5;
            var5 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var26 = var15.bind(var17)(var13, var5);
            var _closure2_slot6 = var26;
            var5 = 8;
            var5 = var9[var5];
            var5 = var20.bind(var4)(var5);
            var5 = var5.bind(var4)(var10);
            var19 = var5.product;
            var21 = var5.purchase;
            var5 = 9;
            var13 = var9[var5];
            var17 = var12.bind(var4)(var13);
            var15 = var17.useSharedValue;
            var13 = false;
            var27 = var15.bind(var17)(var13);
            var _closure2_slot7 = var27;
            var17 = _closure1_slot3;
            var15 = var17.useEffect;
            var13 = new Array(3);
            var13[0] = var10;
            var13[1] = var6;
            var13[2] = var27;
            var6 = function() {
                var3 = _closure2_slot7;
                var2 = var3.set;
                var4 = _closure2_slot2;
                var1 = _closure2_slot1;
                var1 = var4 !== var1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var6 = var15.bind(var17)(var6, var13);
            var6 = var9[var5];
            var15 = var12.bind(var4)(var6);
            var13 = var15.useAnimatedStyle;
            var6 = function O() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var9 = 60;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var9 = 0;
case 2:
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var8 = 0.9;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var8 = 1;
case 4:
                    var1 = {};
                    var3 = {};
                    var5 = _closure2_slot6;
                    var2 = var9;
                    if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 10;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var10.bind(var6)(var7);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot6;
                    var2 = var6.bind(var7)(var9, var5);
case 6:
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var5 = _closure2_slot6;
                    var4 = var8;
                    if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 10;
                    var7 = var7[var6];
                    var6 = undefined;
                    var7 = var9.bind(var6)(var7);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot6;
                    var4 = var6.bind(var7)(var8, var5);
case 8:
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var17 = {'shouldShowButton': null, 'APPLY_BUTTON_BOUNCE_DISTANCE': 60, 'APPLY_BUTTON_SCALE_TRANSITION': 0.9};
            var17['shouldShowButton'] = var27;
            var17['reducedMotion'] = var26;
            var25 = 10;
            var22 = var9[var25];
            var22 = var12.bind(var4)(var22);
            var22 = var22.withSpring;
            var17['withSpring'] = var22;
            var24 = _closure1_slot6;
            var17['MEDIA_PICKER_SEND_BUTTON_SPRING'] = var24;
            var6['__closure'] = var17;
            var17 = 15594859424201.0;
            var6['__workletHash'] = var17;
            var17 = _closure1_slot9;
            var6['__initData'] = var17;
            var13 = var13.bind(var15)(var6);
            var6 = var9[var5];
            var17 = var12.bind(var4)(var6);
            var15 = var17.useAnimatedProps;
            var6 = function M() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot7;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 'none';
                    if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = 'box-none';
case 10:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var22 = {};
            var22['shouldShowButton'] = var27;
            var6['__closure'] = var22;
            var22 = 16151141699021.0;
            var6['__workletHash'] = var22;
            var22 = _closure1_slot10;
            var6['__initData'] = var22;
            var15 = var15.bind(var17)(var6);
            var6 = var9[var5];
            var22 = var12.bind(var4)(var6);
            var17 = var22.useAnimatedStyle;
            var6 = function R() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var6 = 0;
                    if(!var1) { _fun0004_ip = 2; continue _fun0004 }
case 12:
                    var6 = 1;
case 2:
                    var1 = {};
                    var3 = _closure2_slot6;
                    var2 = var6;
                    if(var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var3 = {};
                    var9 = _closure1_slot6;
                    var10 = var3;
                    var7 = copyDataProperties(var10, var9);
                    var8 = true;
                    var7 = 'overshootClamping';
                    var3[6] = var8;
                    var2 = var4.bind(var5)(var6, var3);
case 13:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var23 = {};
            var23['shouldShowButton'] = var27;
            var23['reducedMotion'] = var26;
            var25 = var9[var25];
            var25 = var12.bind(var4)(var25);
            var25 = var25.withSpring;
            var23['withSpring'] = var25;
            var23['MEDIA_PICKER_SEND_BUTTON_SPRING'] = var24;
            var6['__closure'] = var23;
            var23 = 13351061137085.0;
            var6['__workletHash'] = var23;
            var23 = _closure1_slot11;
            var6['__initData'] = var23;
            var17 = var17.bind(var22)(var6);
            var6 = 11;
            var6 = var9[var6];
            var20 = var20.bind(var4)(var6);
            var6 = var20.canUseCollectibles;
            var6 = var6.bind(var20)(var2);
            var22 = 12;
            var9 = var9[var22];
            var12 = var12.bind(var4)(var9);
            var9 = var12.isPremiumCollectiblesProduct;
            var12 = var9.bind(var12)(var19);
            if(var12) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var19 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var22];
            var19 = var19.bind(var4)(var9);
            var9 = var19.isPremiumCollectiblesPurchase;
            var12 = var9.bind(var19)(var21);
case 15:
            var20 = !var6;
            if(!var20) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var19 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var22];
            var19 = var19.bind(var4)(var9);
            var9 = var19.isPremiumCollectiblesPurchase;
            var20 = var9.bind(var19)(var21);
case 17:
            var9 = null;
            var19 = var9 == var10;
            if(var19) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var9 = var9 != var21;
            if(!var9) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = !var20;
case 21:
            var19 = var9;
case 19:
            if(var19) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var9 = var12;
            if(!var12) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var9 = var3;
case 25:
            var19 = var9;
case 23:
            _closure2_slot8 = var19;
            if(!var12) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var12 = !var6;
case 27:
            if(!var12) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var12 = !var3;
case 29:
            _closure2_slot9 = var12;
            var6 = _closure1_slot3;
            var9 = var6.useMemo;
            var3 = new Array(3);
            var3[0] = var19;
            var3[1] = var12;
            var3[2] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var1 = _closure2_slot9;
                    if(var1) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 13;
                    var4 = var8[var1];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.fYfGgK;
                    var1 = var4.bind(var5)(var1);
                    _fun0005_ip = 35; continue _fun0005;
case 33:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var4 = var6[var4];
                    var8 = undefined;
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.isPremium;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 13;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    if(var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var3 = var4.mr4K7D;
                    var3 = var5.bind(var6)(var3);
                    _fun0005_ip = 38; continue _fun0005;
case 36:
                    var4 = var4.KXLX7l;
                    var3 = var5.bind(var6)(var4);
case 38:
                    var1 = var3;
case 35:
                    _fun0005_ip = 39; continue _fun0005;
case 31:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 13;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.Jh8fJz;
                    var1 = var3.bind(var4)(var2);
case 39:
                    return var1;
                }
            };
            var9 = var9.bind(var6)(var2, var3);
            var3 = var6.useCallback;
            var2 = new Array(6);
            var2[0] = var19;
            var2[1] = var18;
            var2[2] = var12;
            var2[3] = var16;
            var2[4] = var11;
            var2[5] = var10;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot8;
                    if(var3) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var3 = _closure2_slot9;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var3 = 16;
                    var6 = var4[var3];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var6);
                    var6 = var7.openCollectiblesShopMobile;
                    var3 = {};
                    var8 = _closure2_slot4;
                    var3['analyticsLocations'] = var8;
                    var8 = _closure2_slot5;
                    var3['analyticsSource'] = var8;
                    var8 = _closure2_slot2;
                    var3['initialProductSkuId'] = var8;
                    var8 = _closure1_slot5;
                    var8 = var8.SHOP_ALL;
                    var3['screen'] = var8;
                    var3 = var6.bind(var7)(var3);
                    _fun0006_ip = 44; continue _fun0006;
case 42:
                    var3 = 15;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.navigateToNitroManagement;
                    var3 = var3.bind(var4)();
                    _fun0006_ip = 44; continue _fun0006;
case 40:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 14;
                    var5 = var8[var4];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var4 = var8[var4];
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.HapticFeedbackTypes;
                    var4 = var4.IMPACT_MEDIUM;
                    var4 = var5.bind(var6)(var4);
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var3)();
case 44:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var10 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot7;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = var11[var5];
            var1 = var6.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var18 = var8.buttonContainer;
            var16 = new Array(2);
            var16[0] = var18;
            var16[1] = var17;
            var1['style'] = var16;
            var1['animatedProps'] = var15;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var15 = var8.buttonRowContainer;
            var8 = new Array(3);
            var8[0] = var15;
            var8[1] = var13;
            var13 = {};
            var13['marginBottom'] = var14;
            var8[2] = var13;
            var5['style'] = var8;
            var8 = 'box-none';
            var5['pointerEvents'] = var8;
            var8 = _closure1_slot0;
            var7 = 18;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Button;
            var7 = {};
            var11 = 'primary';
            if(!var12) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var11 = 'active';
case 45:
            var7['variant'] = var11;
            var7['onPress'] = var10;
            var10 = 'md';
            var7['size'] = var10;
            var7['text'] = var9;
            var9 = true;
            var7['grow'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/EditCollectiblesCTAButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();