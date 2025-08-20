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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var3);
            if(var4) { _fun0001_ip = 52; continue _fun0001 }
 34:
            var6 = var7.disableAutomaticAck;
            var3 = '';
            var3 = var6.bind(var7)(var5, var3);
            _fun0001_ip = 68; continue _fun0001;
 52:
            var6 = var7.enableAutomaticAck;
            var3 = '';
            var3 = var6.bind(var7)(var5, var3);
 68:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.updateChatOpen;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
        }
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
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
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
        var5 = var3.bind(var4)(var2, var1);
        var4 = _closure1_slot6;
        var11 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 9;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var11.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {};
        var7 = 10;
        var9 = var8[var7];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var7 = var8[var7];
        var7 = var11.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.5MstTk;
        var7 = var9.bind(var10)(var7);
        var1['accessibilityLabel'] = var7;
        var7 = _closure1_slot1;
        var6 = 11;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var1['icon'] = var6;
        var1['onPress'] = var5;
        var5 = 'secondary';
        var1['variant'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
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
        var3 = 12;
        var3 = var7[var3];
        var4 = undefined;
        var3 = var6.bind(var4)(var3);
        var3 = var5.bind(var8)(var3);
        var10 = var3.windowDimensions;
        var _closure2_slot0 = var10;
        var3 = _closure1_slot8;
        var5 = var3.bind(var4)();
        var8 = _closure1_slot0;
        var3 = 13;
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
        var1 = 14;
        var1 = var7[var1];
        var2 = var6.bind(var4)(var1);
        var1 = {};
        var9 = var5.gradientWrapper;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var8;
        var1['style'] = var5;
        var5 = 15;
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
 0:
            var2 = arg1;
            var7 = var2.shown;
            var _closure2_slot0 = var7;
            var2 = _closure1_slot8;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var6 = _closure1_slot3;
            var2 = var6.useRef;
            var17 = null;
            var14 = var2.bind(var6)(var17);
            var _closure2_slot1 = var14;
            var3 = var6.useContext;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 12;
            var2 = var12[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var3.bind(var6)(var2);
            var16 = var2.guildId;
            var _closure2_slot2 = var16;
            var15 = var2.channelId;
            var _closure2_slot3 = var15;
            var2 = _closure1_slot0;
            var3 = 16;
            var3 = var12[var3];
            var5 = var2.bind(var4)(var3);
            var3 = var5.useGradientTop;
            var8 = var3.bind(var5)();
            var13 = var6.useEffect;
            var5 = new Array(2);
            var5[0] = var16;
            var5[1] = var15;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.preload;
                    var6 = _closure2_slot2;
                    var5 = null;
                    if(!(var5 == var6)) { _fun0003_ip = 50; continue _fun0003 }
 44:
                    var2 = _closure1_slot5;
                    _fun0003_ip = 54; continue _fun0003;
 50:
                    var2 = _closure2_slot2;
 54:
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
            var3 = var13.bind(var6)(var3, var5);
            var5 = var6.useEffect;
            var3 = new Array(2);
            var3[0] = var15;
            var3[1] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot11;
                    var2 = _closure2_slot3;
                    var5 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2, var5);
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = null;
                    if(var5) { _fun0004_ip = 79; continue _fun0004 }
 40:
                    if(!(var2 != var3)) { _fun0004_ip = 54; continue _fun0004 }
 44:
                    var5 = var3.chatInputTrackerUnregister;
                    var5 = var5.bind(var3)();
 54:
                    var4 = _closure2_slot1;
                    var5 = var4.current;
                    if(!(var2 != var5)) { _fun0004_ip = 93; continue _fun0004 }
 67:
                    var4 = var5.blur;
                    var4 = var4.bind(var5)();
                    _fun0004_ip = 93; continue _fun0004;
 79:
                    if(!(var2 != var3)) { _fun0004_ip = 93; continue _fun0004 }
 83:
                    var2 = var3.chatInputTrackerRegister;
                    var2 = var2.bind(var3)();
 93:
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var3);
            var1 = 18;
            var1 = var12[var1];
            var1 = var10.bind(var4)(var1);
            var5 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var1 = 19;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ThemeContextProvider;
            var1 = {};
            var1['gradient'] = var5;
            var5 = 20;
            var5 = var12[var5];
            var6 = var10.bind(var4)(var5);
            var5 = {};
            var13 = var9.container;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var8;
            var5['style'] = var7;
            var13 = _closure1_slot6;
            var8 = _closure1_slot10;
            var7 = {};
            var8 = var13.bind(var4)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var8 = 21;
            var8 = var12[var8];
            var12 = var10.bind(var4)(var8);
            var8 = {'disableGradient': true, 'alwaysRespectKeyboard': false, 'setNoExtractUI': false};
            var10 = true;
            if(!(var17 == var16)) { _fun0002_ip = 323; continue _fun0002 }
 319:
            var16 = _closure1_slot5;
 323:
            var8['guildId'] = var16;
            var8['channelId'] = var15;
            var8['chatInputRef'] = var14;
            var14 = 'voice-panel';
            var8['screenIndex'] = var14;
            var8 = var13.bind(var4)(var12, var8);
            var7[1] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 22;
            var6 = var15[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var14 = _closure1_slot0;
            var11 = 10;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11./VQax8;
            var11 = var12.bind(var13)(var11);
            var6['title'] = var11;
            var6['disablePill'] = var10;
            var9 = var9.titleBlur;
            var6['blurStyle'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/controls/VoicePanelChatView.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MemoedVoicePanelDismissChatButton'] = var2;
    return var1;
})();