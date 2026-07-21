// app/modules/voice_panel/native/controls/VoicePanelChatView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function updateChatOpen(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.updateChatOpen;
        var3 = arg1;
        var2 = arg2;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var11 = 0;
    var5 = var7[var11];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Platform;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var12 = var2.CONTROLS_DRAWER_HEADER_SIZE;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.ComponentActions;
    var _closure1_slot4 = var5;
    var2 = var2.ME;
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot6 = var5;
    var2 = var2.jsxs;
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {'flex': 1, 'overflow': 'hidden'};
    var10['paddingTop'] = var12;
    var2['container'] = var10;
    var10 = {'position': 'absolute', 'top': null, 'left': 0};
    var10['top'] = var12;
    var2['gradientWrapper'] = var10;
    var10 = {};
    var10['opacity'] = var11;
    var2['titleBlur'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot8 = var2;
    var5 = var8.memo;
    var2 = function VoicePanelDismissChatButton() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = 'VoicePanelDismissChatButton';
            var1 = var2.bind(var5)(var1);
            var6 = _closure1_slot3;
            var4 = var6.useCallback;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.dispatch;
                var2 = _closure1_slot4;
                var2 = var2.VOICE_PANEL_TIV_CLOSE;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var6 = var4.bind(var6)(var3, var2);
            var4 = _closure1_slot6;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var1 = var11.bind(var5)(var1);
            var2 = var1.IconButton;
            var1 = {};
            var3 = 10;
            var8 = var9[var3];
            var8 = var11.bind(var5)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var3 = var9[var3];
            var3 = var11.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3["5MstTl"];
            var3 = var8.bind(var10)(var3);
            var1['accessibilityLabel'] = var3;
            var8 = _closure1_slot1;
            var3 = 11;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var1['icon'] = var3;
            var1['onPress'] = var6;
            var3 = 'primary-overlay';
            var1['variant'] = var3;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var3 = var8.bind(var5)(var2);
            var2 = {};
            var12 = _closure1_slot0;
            var7 = 10;
            var10 = var9[var7];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var9[var7];
            var7 = var12.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7["5MstTl"];
            var7 = var10.bind(var11)(var7);
            var2['accessibilityLabel'] = var7;
            var7 = 11;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var2['icon'] = var7;
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = {};
    var9 = 'function VoicePanelChatViewTsx1(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}';
    var5['code'] = var9;
    var _closure1_slot9 = var5;
    var9 = var8.memo;
    var5 = function() {
        var8 = _closure1_slot3;
        var5 = var8.useContext;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var3 = 13;
        var3 = var7[var3];
        var4 = undefined;
        var3 = var6.bind(var4)(var3);
        var3 = var5.bind(var8)(var3);
        var10 = var3.windowDimensions;
        var _closure2_slot0 = var10;
        var3 = _closure1_slot8;
        var5 = var3.bind(var4)();
        var8 = _closure1_slot0;
        var3 = 14;
        var3 = var7[var3];
        var8 = var8.bind(var4)(var3);
        var3 = var8.useAnimatedStyle;
        var2 = function n() {
            var1 = {};
            var3 = _closure2_slot0;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var2 = var2.width;
            var1['width'] = var2;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var2 = var2.height;
            var1['height'] = var2;
            return var1;
        };
        var9 = {};
        var9['windowDimensions'] = var10;
        var2['__closure'] = var9;
        var9 = 16775846409623.0;
        var2['__workletHash'] = var9;
        var9 = _closure1_slot9;
        var2['__initData'] = var9;
        var8 = var3.bind(var8)(var2);
        var3 = _closure1_slot6;
        var1 = 15;
        var1 = var7[var1];
        var2 = var6.bind(var4)(var1);
        var1 = {};
        var9 = var5.gradientWrapper;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var8;
        var1['style'] = var5;
        var5 = 16;
        var5 = var7[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var7 = true;
        var5['absolute'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot10 = var5;
    var5 = var8.memo;
    var4 = function VoicePanelChatView(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var19 = var2.shown;
            var _closure2_slot0 = var19;
            var2 = _closure1_slot8;
            var4 = undefined;
            var20 = var2.bind(var4)();
            var6 = _closure1_slot3;
            var2 = var6.useRef;
            var17 = null;
            var13 = var2.bind(var6)(var17);
            var _closure2_slot1 = var13;
            var3 = var6.useContext;
            var12 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 13;
            var2 = var18[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var3.bind(var6)(var2);
            var15 = var2.guildId;
            var _closure2_slot2 = var15;
            var14 = var2.channelId;
            var _closure2_slot3 = var14;
            var24 = _closure1_slot0;
            var2 = 17;
            var2 = var18[var2];
            var3 = var24.bind(var4)(var2);
            var2 = var3.useGradientTop;
            var11 = var2.bind(var3)();
            var2 = 18;
            var2 = var18[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var8 = var2.width;
            var2 = 19;
            var2 = var18[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = 20;
            var3 = var18[var3];
            var7 = var24.bind(var4)(var3);
            var5 = var7.getControlsDrawerOpenWidth;
            var3 = var2.left;
            var2 = var2.right;
            var5 = var5.bind(var7)(var8, var3, var2);
            var7 = var6.useEffect;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var14;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.preload;
                    var6 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var2 = _closure1_slot5;
                    _fun0003_ip = 7; continue _fun0003;
case 5:
                    var2 = _closure2_slot2;
case 7:
                    var1 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = function() {
                        var4 = _closure1_slot11;
                        var3 = _closure2_slot3;
                        var1 = undefined;
                        var2 = false;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var7.bind(var6)(var2, var3);
            var7 = var6.useEffect;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var19;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot11;
                    var2 = _closure2_slot3;
                    var5 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2, var5);
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = null;
                    if(var5) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    if(!(var2 != var3)) { _fun0004_ip = 7; continue _fun0004 }
case 6:
                    var5 = var3.chatInputTrackerUnregister;
                    var5 = var5.bind(var3)();
case 7:
                    var4 = _closure2_slot1;
                    var5 = var4.current;
                    if(!(var2 != var5)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var4 = var5.blur;
                    var4 = var4.bind(var5)();
                    _fun0004_ip = 10; continue _fun0004;
case 8:
                    if(!(var2 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 12:
                    var2 = var3.chatInputTrackerRegister;
                    var2 = var2.bind(var3)();
case 10:
                    return var1;
                }
            };
            var2 = var7.bind(var6)(var2, var3);
            var3 = var6.useCallback;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.dispatch;
                var2 = _closure1_slot4;
                var2 = var2.VOICE_PANEL_TIV_CLOSE;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var10 = var3.bind(var6)(var2, var1);
            var1 = 22;
            var1 = var18[var1];
            var1 = var12.bind(var4)(var1);
            var7 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var1 = 23;
            var1 = var18[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var5;
            var5 = 24;
            var5 = var18[var5];
            var5 = var24.bind(var4)(var5);
            var6 = var5.ThemeContextProvider;
            var5 = {};
            var5['gradient'] = var7;
            var9 = _closure1_slot7;
            var7 = 25;
            var7 = var18[var7];
            var7 = var24.bind(var4)(var7);
            var8 = var7.AccessibilityView;
            var7 = {};
            var21 = 'voice-panel-chat-view';
            var7['nativeID'] = var21;
            var7['accessibilityViewIsModal'] = var19;
            var7['onAccessibilityEscape'] = var10;
            var19 = var20.container;
            var10 = new Array(2);
            var10[0] = var19;
            var10[1] = var11;
            var7['style'] = var10;
            var11 = _closure1_slot10;
            var10 = {};
            var11 = var3.bind(var4)(var11, var10);
            var10 = new Array(3);
            var10[0] = var11;
            var11 = 26;
            var11 = var18[var11];
            var19 = var12.bind(var4)(var11);
            var11 = {};
            var21 = 10;
            var22 = var18[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var18[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21["/VQax8"];
            var21 = var22.bind(var23)(var21);
            var11['title'] = var21;
            var21 = true;
            var11['disablePill'] = var21;
            var20 = var20.titleBlur;
            var11['blurStyle'] = var20;
            var11 = var3.bind(var4)(var19, var11);
            var10[1] = var11;
            var11 = 27;
            var11 = var18[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {'disableGradient': true, 'alwaysRespectKeyboard': false, 'setNoExtractUI': false};
            if(!(var17 == var15)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var15 = _closure1_slot5;
case 13:
            var11['guildId'] = var15;
            var11['channelId'] = var14;
            var11['chatInputRef'] = var13;
            var13 = 'voice-panel';
            var11['screenIndex'] = var13;
            var11 = var3.bind(var4)(var12, var11);
            var10[2] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/controls/VoicePanelChatView.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MemoedVoicePanelDismissChatButton'] = var2;
    return var1;
})();