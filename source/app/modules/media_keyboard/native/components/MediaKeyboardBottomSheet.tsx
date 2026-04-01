// app/modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
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
    var8 = var4.HEADER_HANDLE_HEIGHT;
    var _closure1_slot5 = var8;
    var4 = var4.MediaPickerActionSheetEngagedActions;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var8 = var4.Fragment;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 6;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var11;
    var4['background'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardBottomSheetTsx1(){const{animatedIndex}=this.__closure;return Math.max(animatedIndex.get(),0)>0;}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function MediaKeyboardBottomSheetTsx2(result,previous){const{runOnJS,setAccessibilityViewIsModal}=this.__closure;if(result===previous)return;runOnJS(setAccessibilityViewIsModal)(result);}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function MediaKeyboardBottomSheet(arg1) {
        var2 = arg1;
        var8 = var2.accessoriesComponent;
        var24 = var2.animatedIndex;
        var _closure2_slot0 = var24;
        var23 = var2.animatedPosition;
        var26 = var2.bottomSheetRef;
        var _closure2_slot1 = var26;
        var13 = var2.children;
        var21 = var2.handleComponent;
        var11 = var2.onClose;
        var _closure2_slot2 = var11;
        var1 = var2.transitionState;
        var _closure2_slot3 = var1;
        var25 = var2.animationConfigs;
        var6 = var2.overlayComponent;
        var2 = _closure1_slot11;
        var4 = undefined;
        var20 = var2.bind(var4)();
        var28 = _closure1_slot1;
        var16 = _closure1_slot2;
        var2 = 7;
        var2 = var16[var2];
        var5 = var28.bind(var4)(var2);
        var2 = {};
        var3 = false;
        var2['forceMaxHeight'] = var3;
        var7 = var5.bind(var4)(var2);
        var5 = _closure1_slot4;
        var10 = var5.useCallback;
        var9 = function(arg1) {
            var4 = _closure1_slot8;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.BottomSheetBackdrop;
            var1 = {};
            var8 = arg1;
            var9 = var1;
            var6 = copyDataProperties(var9, var8);
            var6 = _closure1_slot1;
            var5 = 9;
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
                var1 = 10;
                var1 = var4[var1];
                var3 = undefined;
                var7 = var2.bind(var3)(var1);
                var6 = var7.triggerHapticFeedback;
                var2 = _closure1_slot1;
                var1 = 11;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.IMPACT_LIGHT;
                var1 = var6.bind(var7)(var1);
                var1 = 12;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.track;
                var1 = _closure1_slot7;
                var2 = var1.MEDIA_PICKER_ACTION_SHEET_ENGAGED;
                var1 = {};
                var5 = _closure1_slot6;
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
        var2 = 13;
        var2 = var16[var2];
        var9 = var12.bind(var4)(var2);
        var2 = var9.useIsScreenReaderEnabled;
        var22 = var2.bind(var9)();
        var2 = var5.useState;
        var9 = var2.bind(var5)(var3);
        var3 = _closure1_slot3;
        var2 = 2;
        var3 = var3.bind(var4)(var9, var2);
        var2 = 0;
        var14 = var3[var2];
        var2 = 1;
        var29 = var3[var2];
        var _closure2_slot4 = var29;
        var30 = 14;
        var2 = var16[var30];
        var10 = var12.bind(var4)(var2);
        var9 = var10.useAnimatedReaction;
        var3 = function H() {
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
        var2['animatedIndex'] = var24;
        var3['__closure'] = var2;
        var2 = 6409838147176.0;
        var3['__workletHash'] = var2;
        var2 = _closure1_slot12;
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
                var1 = 14;
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
        var27 = {};
        var30 = var16[var30];
        var30 = var12.bind(var4)(var30);
        var30 = var30.runOnJS;
        var27['runOnJS'] = var30;
        var27['setAccessibilityViewIsModal'] = var29;
        var2['__closure'] = var27;
        var27 = 4155361737130.0;
        var2['__workletHash'] = var27;
        var27 = _closure1_slot13;
        var2['__initData'] = var27;
        var2 = var9.bind(var10)(var3, var2);
        var2 = 15;
        var2 = var16[var2];
        var3 = var28.bind(var4)(var2);
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
        var2[0] = var26;
        var2[1] = var11;
        var2[2] = var1;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure2_slot3;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
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
        var1 = 17;
        var1 = var16[var1];
        var1 = var28.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var30 = var1.left;
        var29 = var1.right;
        var3 = _closure1_slot10;
        var2 = _closure1_slot9;
        var1 = {};
        var10 = _closure1_slot8;
        var5 = 8;
        var5 = var16[var5];
        var9 = var28.bind(var4)(var5);
        var5 = {};
        var27 = {};
        var27['marginLeft'] = var30;
        var27['marginRight'] = var29;
        var5['style'] = var27;
        var27 = 9;
        var27 = var16[var27];
        var27 = var28.bind(var4)(var27);
        var5['BodyComponent'] = var27;
        var5['ref'] = var26;
        var5['animationConfigs'] = var25;
        var5['animatedIndex'] = var24;
        var5['animatedPosition'] = var23;
        var23 = !var22;
        var5['enableContentPanningGesture'] = var23;
        var22 = !var22;
        var5['enableHandlePanningGesture'] = var22;
        var5['handleComponent'] = var21;
        var20 = var20.background;
        var5['backgroundStyle'] = var20;
        var5['backdropComponent'] = var19;
        var5['onAnimate'] = var18;
        var17 = _closure1_slot5;
        var5['handleHeight'] = var17;
        var5['onClose'] = var11;
        var32 = var5;
        var31 = var7;
        var11 = copyDataProperties(var32, var31);
        var11 = 18;
        var11 = var16[var11];
        var11 = var12.bind(var4)(var11);
        var12 = var11.AccessibilityViewAnimated;
        var11 = {};
        var16 = 'media-keyboard-sheet';
        var11['nativeID'] = var16;
        var15 = function onAccessibilityEscape() {
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
        var11['onAccessibilityEscape'] = var15;
        var11['accessibilityViewIsModal'] = var14;
        var11['children'] = var13;
        var12 = var10.bind(var4)(var12, var11);
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
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();