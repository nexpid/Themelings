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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.HEADER_HANDLE_HEIGHT;
    var _closure1_slot4 = var8;
    var4 = var4.MediaPickerActionSheetEngagedActions;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var8 = var4.Fragment;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 5;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var4['background'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function MediaKeyboardBottomSheet(arg1) {
        var2 = arg1;
        var8 = var2.accessoriesComponent;
        var20 = var2.animatedIndex;
        var19 = var2.animatedPosition;
        var22 = var2.bottomSheetRef;
        var _closure2_slot0 = var22;
        var12 = var2.children;
        var17 = var2.handleComponent;
        var11 = var2.onClose;
        var _closure2_slot1 = var11;
        var9 = var2.transitionState;
        var _closure2_slot2 = var9;
        var21 = var2.animationConfigs;
        var6 = var2.overlayComponent;
        var2 = _closure1_slot10;
        var4 = undefined;
        var16 = var2.bind(var4)();
        var24 = _closure1_slot1;
        var25 = _closure1_slot2;
        var2 = 6;
        var2 = var25[var2];
        var3 = var24.bind(var4)(var2);
        var2 = {};
        var5 = false;
        var2['forceMaxHeight'] = var5;
        var7 = var3.bind(var4)(var2);
        var5 = _closure1_slot3;
        var10 = var5.useCallback;
        var3 = function(arg1) {
            var4 = _closure1_slot7;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var1 = var7[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.BottomSheetBackdrop;
            var1 = {};
            var8 = arg1;
            var9 = var1;
            var6 = copyDataProperties(var9, var8);
            var6 = _closure1_slot1;
            var5 = 8;
            var5 = var7[var5];
            var6 = var6.bind(var3)(var5);
            var5 = 'ViewComponent';
            var1[var5] = var6;
            var6 = 'collapse';
            var5 = 'pressBehavior';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2 = new Array(0);
        var15 = var10.bind(var5)(var3, var2);
        var10 = var5.useCallback;
        var3 = function(arg1, arg2) {
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
                var1 = 9;
                var1 = var4[var1];
                var3 = undefined;
                var7 = var2.bind(var3)(var1);
                var6 = var7.triggerHapticFeedback;
                var2 = _closure1_slot1;
                var1 = 10;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.IMPACT_LIGHT;
                var1 = var6.bind(var7)(var1);
                var1 = 11;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.track;
                var1 = _closure1_slot6;
                var2 = var1.MEDIA_PICKER_ACTION_SHEET_ENGAGED;
                var1 = {};
                var5 = _closure1_slot5;
                var5 = var5.FULLY_EXPANDED;
                var1['action'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = new Array(0);
        var14 = var10.bind(var5)(var3, var2);
        var3 = _closure1_slot0;
        var2 = 12;
        var2 = var25[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useIsScreenReaderEnabled;
        var18 = var2.bind(var3)();
        var2 = 13;
        var2 = var25[var2];
        var3 = var24.bind(var4)(var2);
        var2 = function() {
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 3:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var3 = var5.useEffect;
        var2 = new Array(3);
        var2[0] = var22;
        var2[1] = var11;
        var2[2] = var9;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure2_slot2;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.TransitionStates;
                var3 = var3.YEETED;
                if(!(var4 === var3)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var3 = _closure2_slot0;
                var3 = var3.current;
                var4 = null;
                if(!(var4 != var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = _closure2_slot0;
                var5 = var3.current;
                var3 = var5.forceClose;
                var3 = var3.bind(var5)();
                _fun0003_ip = 7; continue _fun0003;
case 9:
                var3 = _closure2_slot1;
                if(!(var4 != var3)) { _fun0003_ip = 7; continue _fun0003 }
case 11:
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
case 7:
                return var1;
            }
        };
        var1 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot9;
        var2 = _closure1_slot8;
        var1 = {};
        var10 = _closure1_slot7;
        var5 = 7;
        var5 = var25[var5];
        var9 = var24.bind(var4)(var5);
        var5 = {};
        var23 = 8;
        var23 = var25[var23];
        var23 = var24.bind(var4)(var23);
        var5['BodyComponent'] = var23;
        var5['ref'] = var22;
        var5['animationConfigs'] = var21;
        var5['animatedIndex'] = var20;
        var5['animatedPosition'] = var19;
        var19 = !var18;
        var5['enableContentPanningGesture'] = var19;
        var18 = !var18;
        var5['enableHandlePanningGesture'] = var18;
        var5['handleComponent'] = var17;
        var16 = var16.background;
        var5['backgroundStyle'] = var16;
        var5['backdropComponent'] = var15;
        var5['onAnimate'] = var14;
        var13 = _closure1_slot4;
        var5['handleHeight'] = var13;
        var5['onClose'] = var11;
        var27 = var5;
        var26 = var7;
        var11 = copyDataProperties(var27, var26);
        var11 = 'children';
        var5[var11] = var12;
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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();