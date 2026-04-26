// app/modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function MediaKeyboardBackground(arg1) {
        var1 = arg1;
        var6 = var1.pointerEvents;
        var5 = var1.style;
        var4 = _closure1_slot9;
        var3 = _closure1_slot5;
        var2 = {'pointerEvents': null, 'accessible': true, 'accessibilityRole': 'adjustable'};
        var2['pointerEvents'] = var6;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var6 = 8;
        var7 = var10[var6];
        var1 = undefined;
        var7 = var9.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.XONG6A;
        var6 = var7.bind(var8)(var6);
        var2['accessibilityLabel'] = var6;
        var2['style'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.HEADER_HANDLE_HEIGHT;
    var _closure1_slot6 = var8;
    var4 = var4.MediaPickerActionSheetEngagedActions;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.Fragment;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 7;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_KEYBOARD_PANEL_BACKGROUND;
    var10['backgroundColor'] = var11;
    var11 = 15;
    var10['borderRadius'] = var11;
    var4['background'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardBottomSheetTsx2(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function MediaKeyboardBottomSheet(arg1) {
        var2 = arg1;
        var8 = var2.accessoriesComponent;
        var25 = var2.animatedIndex;
        var _closure2_slot0 = var25;
        var24 = var2.animatedPosition;
        var27 = var2.bottomSheetRef;
        var _closure2_slot1 = var27;
        var14 = var2.children;
        var22 = var2.handleComponent;
        var13 = var2.onClose;
        var _closure2_slot2 = var13;
        var1 = var2.transitionState;
        var _closure2_slot3 = var1;
        var26 = var2.animationConfigs;
        var6 = var2.overlayComponent;
        var2 = _closure1_slot12;
        var4 = undefined;
        var20 = var2.bind(var4)();
        var29 = _closure1_slot1;
        var17 = _closure1_slot2;
        var2 = 9;
        var2 = var17[var2];
        var5 = var29.bind(var4)(var2);
        var2 = {};
        var3 = false;
        var2['forceMaxHeight'] = var3;
        var7 = var5.bind(var4)(var2);
        var5 = _closure1_slot4;
        var10 = var5.useCallback;
        var9 = function(arg1) {
            var4 = _closure1_slot9;
            var3 = _closure1_slot15;
            var2 = {};
            var5 = arg1;
            var6 = var2;
            var1 = copyDataProperties(var6, var5);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2 = new Array(0);
        var21 = var10.bind(var5)(var9, var2);
        var10 = var5.useCallback;
        var9 = function(arg1) {
            var4 = _closure1_slot9;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.BottomSheetBackdrop;
            var1 = {};
            var8 = arg1;
            var9 = var1;
            var6 = copyDataProperties(var9, var8);
            var6 = _closure1_slot1;
            var5 = 11;
            var5 = var7[var5];
            var6 = var6.bind(var3)(var5);
            var5 = 'ViewComponent';
            var1[4] = var6;
            var6 = 'collapse';
            var5 = 'pressBehavior';
            var1[4] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2 = new Array(0);
        var19 = var10.bind(var5)(var9, var2);
        var10 = var5.useCallback;
        var9 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var1 = arg2;
                var1 = var3 !== var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = 0;
                var1 = var2 === var3;
case 2:
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var3 = undefined;
                var7 = var2.bind(var3)(var1);
                var6 = var7.triggerHapticFeedback;
                var2 = _closure1_slot1;
                var1 = 13;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.IMPACT_LIGHT;
                var1 = var6.bind(var7)(var1);
                var1 = 14;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.track;
                var1 = _closure1_slot8;
                var2 = var1.MEDIA_PICKER_ACTION_SHEET_ENGAGED;
                var1 = {};
                var5 = _closure1_slot7;
                var5 = var5.FULLY_EXPANDED;
                var1['action'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = new Array(0);
        var18 = var10.bind(var5)(var9, var2);
        var12 = _closure1_slot0;
        var2 = 15;
        var2 = var17[var2];
        var9 = var12.bind(var4)(var2);
        var2 = var9.useIsScreenReaderEnabled;
        var23 = var2.bind(var9)();
        var2 = var5.useState;
        var9 = var2.bind(var5)(var3);
        var3 = _closure1_slot3;
        var2 = 2;
        var3 = var3.bind(var4)(var9, var2);
        var2 = 0;
        var15 = var3[var2];
        var2 = 1;
        var30 = var3[var2];
        var _closure2_slot4 = var30;
        var31 = 16;
        var2 = var17[var31];
        var10 = var12.bind(var4)(var2);
        var9 = var10.useAnimatedReaction;
        var3 = function B() {
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var2 = _closure2_slot0;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var2 = 0;
            var1 = var3.bind(var4)(var1, var2);
            var1 = var1 > var2;
            return var1;
        };
        var2 = {};
        var2['animatedIndex'] = var25;
        var3['__closure'] = var2;
        var2 = 6409838147176.0;
        var3['__workletHash'] = var2;
        var2 = _closure1_slot13;
        var3['__initData'] = var2;
        var2 = function x(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var1 = arg2;
                if(!(var3 !== var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var1 = var2[var1];
                var2 = undefined;
                var5 = var4.bind(var2)(var1);
                var4 = var5.runOnJS;
                var1 = _closure2_slot4;
                var1 = var4.bind(var5)(var1);
                var1 = var1.bind(var2)(var3);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var28 = {};
        var31 = var17[var31];
        var31 = var12.bind(var4)(var31);
        var31 = var31.runOnJS;
        var28['runOnJS'] = var31;
        var28['setAccessibilityViewIsModal'] = var30;
        var2['__closure'] = var28;
        var28 = 4155361737130.0;
        var2['__workletHash'] = var28;
        var28 = _closure1_slot14;
        var2['__initData'] = var28;
        var2 = var9.bind(var10)(var3, var2);
        var2 = 17;
        var2 = var17[var2];
        var3 = var29.bind(var4)(var2);
        var2 = function() {
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 3:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var3 = var5.useEffect;
        var2 = new Array(3);
        var2[0] = var27;
        var2[1] = var13;
        var2[2] = var1;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure2_slot3;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.TransitionStates;
                var3 = var3.YEETED;
                if(!(var4 === var3)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var3 = _closure2_slot1;
                var3 = var3.current;
                var4 = null;
                if(!(var4 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = _closure2_slot1;
                var5 = var3.current;
                var3 = var5.forceClose;
                var3 = var3.bind(var5)();
                _fun0004_ip = 9; continue _fun0004;
case 11:
                var3 = _closure2_slot2;
                if(!(var4 != var3)) { _fun0004_ip = 9; continue _fun0004 }
case 13:
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
case 9:
                return var1;
            }
        };
        var1 = var3.bind(var5)(var1, var2);
        var1 = 19;
        var1 = var17[var1];
        var1 = var29.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var31 = var1.left;
        var30 = var1.right;
        var3 = _closure1_slot11;
        var2 = _closure1_slot10;
        var1 = {};
        var10 = _closure1_slot9;
        var5 = 10;
        var5 = var17[var5];
        var9 = var29.bind(var4)(var5);
        var5 = {};
        var28 = {};
        var28['marginLeft'] = var31;
        var28['marginRight'] = var30;
        var5['style'] = var28;
        var28 = 11;
        var28 = var17[var28];
        var28 = var29.bind(var4)(var28);
        var5['BodyComponent'] = var28;
        var5['ref'] = var27;
        var5['animationConfigs'] = var26;
        var5['animatedIndex'] = var25;
        var5['animatedPosition'] = var24;
        var24 = !var23;
        var5['enableContentPanningGesture'] = var24;
        var23 = !var23;
        var5['enableHandlePanningGesture'] = var23;
        var5['handleComponent'] = var22;
        var5['backgroundComponent'] = var21;
        var20 = var20.background;
        var5['backgroundStyle'] = var20;
        var5['backdropComponent'] = var19;
        var5['onAnimate'] = var18;
        var18 = _closure1_slot6;
        var5['handleHeight'] = var18;
        var5['onClose'] = var13;
        var33 = var5;
        var32 = var7;
        var13 = copyDataProperties(var33, var32);
        var13 = _closure1_slot9;
        var11 = 20;
        var11 = var17[var11];
        var11 = var12.bind(var4)(var11);
        var12 = var11.AccessibilityViewAnimated;
        var11 = {};
        var17 = 'media-keyboard-sheet';
        var11['nativeID'] = var17;
        var16 = function onAccessibilityEscape() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot1;
                var2 = var1.current;
                var1 = null;
                if(!(var1 != var2)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var1 = var2.collapse;
                var1 = var1.bind(var2)();
case 14:
                var1 = undefined;
                return var1;
            }
        };
        var11['onAccessibilityEscape'] = var16;
        var11['accessibilityViewIsModal'] = var15;
        var11['children'] = var14;
        var12 = var13.bind(var4)(var12, var11);
        var11 = 'children';
        var5[10] = var12;
        var9 = var10.bind(var4)(var9, var5);
        var5 = new Array(3);
        var5[0] = var9;
        var7 = var8.bind(var4)(var7);
        var5[1] = var7;
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();