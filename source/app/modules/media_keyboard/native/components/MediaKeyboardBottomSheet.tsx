// app/modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
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
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'zIndex': 10};
    var4['androidContainer'] = var10;
    var10 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    var4['iosContainer'] = var10;
    var10 = {};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var13;
    var4['background'] = var10;
    var10 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'flexDirection': 'column', 'justifyContent': 'flex-end'};
    var4['sendContainer'] = var10;
    var10 = {'flexGrow': 0, 'flexDirection': 'row', 'justifyContent': 'flex-end', 'paddingHorizontal': 12};
    var4['buttonRowContainer'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SECONDARY;
    var10['color'] = var11;
    var4['gradient'] = var10;
    var10 = {};
    var11 = 44;
    var10['borderRadius'] = var11;
    var4['sendButtonStyle'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function MediaKeyboardBottomSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var15 = var2.children;
            var13 = var2.channel;
            var12 = var2.draftType;
            var20 = var2.handleComponent;
            var16 = var2.onClose;
            var _closure2_slot0 = var16;
            var11 = var2.onSend;
            var9 = var2.transitionState;
            var _closure2_slot1 = var9;
            var24 = var2.animationConfigs;
            var7 = _closure1_slot3;
            var3 = var7.useContext;
            var21 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var4 = undefined;
            var2 = var21.bind(var4)(var2);
            var2 = var2.PortalKeyboardContext;
            var2 = var3.bind(var7)(var2);
            var23 = var2.animatedSheetIndex;
            var22 = var2.animatedSheetPosition;
            var2 = var2.bottomSheetRefs;
            var25 = var2.media;
            var _closure2_slot2 = var25;
            var2 = _closure1_slot11;
            var19 = var2.bind(var4)();
            var _closure2_slot3 = var19;
            var5 = _closure1_slot1;
            var2 = 9;
            var2 = var10[var2];
            var3 = var5.bind(var4)(var2);
            var2 = {};
            var8 = true;
            var2['ignoreKeyboard'] = var8;
            var2 = var3.bind(var4)(var2);
            var2 = var2.height;
            var _closure2_slot4 = var2;
            var3 = 10;
            var3 = var10[var3];
            var8 = var5.bind(var4)(var3);
            var3 = {};
            var14 = false;
            var3['forceMaxHeight'] = var14;
            var14 = var8.bind(var4)(var3);
            var17 = var7.useCallback;
            var8 = function(arg1) {
                var4 = _closure1_slot9;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.BottomSheetBackdrop;
                var1 = {};
                var8 = arg1;
                var9 = var1;
                var6 = copyDataProperties(var9, var8);
                var6 = _closure1_slot1;
                var5 = 12;
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
            var3 = new Array(0);
            var18 = var17.bind(var7)(var8, var3);
            var3 = 13;
            var3 = var10[var3];
            var26 = var21.bind(var4)(var3);
            var17 = var26.useStateFromStores;
            var3 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.isOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var17.bind(var26)(var8, var3);
            var26 = var7.useCallback;
            var17 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var1 = arg2;
                    var1 = var3 !== var1;
                    if(!var1) { _fun0002_ip = 19; continue _fun0002 }
 13:
                    var2 = 0;
                    var1 = var2 === var3;
 19:
                    if(!var1) { _fun0002_ip = 129; continue _fun0002 }
 22:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var1 = var4[var1];
                    var3 = undefined;
                    var7 = var2.bind(var3)(var1);
                    var6 = var7.triggerHapticFeedback;
                    var2 = _closure1_slot1;
                    var1 = 15;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var6.bind(var7)(var1);
                    var1 = 16;
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
 129:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var17 = var26.bind(var7)(var17, var3);
            var3 = 17;
            var3 = var10[var3];
            var21 = var21.bind(var4)(var3);
            var3 = var21.useIsScreenReaderEnabled;
            var21 = var3.bind(var21)();
            var3 = 18;
            var3 = var10[var3];
            var5 = var5.bind(var4)(var3);
            var3 = function() {
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 23; continue _fun0003 }
 13:
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var5 = var7.useMemo;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var19;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isAndroid;
                    var1 = var1.bind(var2)();
                    var2 = _closure2_slot3;
                    if(var1) { _fun0004_ip = 74; continue _fun0004 }
 44:
                    var1 = {};
                    var5 = var2.iosContainer;
                    var6 = var1;
                    var4 = copyDataProperties(var6, var5);
                    var4 = _closure2_slot4;
                    var3 = 'height';
                    var1[var3] = var4;
                    _fun0004_ip = 80; continue _fun0004;
 74:
                    var1 = var2.androidContainer;
 80:
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var2, var3);
            var3 = var7.useEffect;
            var2 = new Array(3);
            var2[0] = var25;
            var2[1] = var16;
            var2[2] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if(!(var4 === var3)) { _fun0005_ip = 100; continue _fun0005 }
 48:
                    var3 = _closure2_slot2;
                    var3 = var3.current;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0005_ip = 84; continue _fun0005 }
 63:
                    var3 = _closure2_slot2;
                    var5 = var3.current;
                    var3 = var5.forceClose;
                    var3 = var3.bind(var5)();
                    _fun0005_ip = 100; continue _fun0005;
 84:
                    var3 = _closure2_slot0;
                    if(!(var4 != var3)) { _fun0005_ip = 100; continue _fun0005 }
 92:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)();
 100:
                    return var1;
                }
            };
            var1 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = undefined;
            if(!var8) { _fun0001_ip = 427; continue _fun0001 }
 421:
            var7 = 'no-hide-descendants';
 427:
            var1['importantForAccessibility'] = var7;
            var1['style'] = var5;
            var5 = 'box-none';
            var1['pointerEvents'] = var5;
            var8 = _closure1_slot9;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 11;
            var5 = var9[var5];
            var7 = var10.bind(var4)(var5);
            var5 = {};
            var26 = 12;
            var26 = var9[var26];
            var26 = var10.bind(var4)(var26);
            var5['BodyComponent'] = var26;
            var5['ref'] = var25;
            var5['animationConfigs'] = var24;
            var5['animatedIndex'] = var23;
            var5['animatedPosition'] = var22;
            var22 = !var21;
            var5['enableContentPanningGesture'] = var22;
            var21 = !var21;
            var5['enableHandlePanningGesture'] = var21;
            var5['handleComponent'] = var20;
            var19 = var19.background;
            var5['backgroundStyle'] = var19;
            var5['backdropComponent'] = var18;
            var5['onAnimate'] = var17;
            var17 = _closure1_slot6;
            var5['handleHeight'] = var17;
            var5['onClose'] = var16;
            var28 = var5;
            var27 = var14;
            var14 = copyDataProperties(var28, var27);
            var14 = 'children';
            var5[var14] = var15;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = 21;
            var7 = var9[var7];
            var10 = var10.bind(var4)(var7);
            var7 = {};
            var13 = var13.id;
            var7['channelId'] = var13;
            var7['draftType'] = var12;
            var7['onSend'] = var11;
            var7 = var8.bind(var4)(var10, var7);
            var5[1] = var7;
            var7 = _closure1_slot0;
            var6 = 22;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NavScrim;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();