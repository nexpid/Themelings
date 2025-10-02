// app/modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.BRAND_500;
    var9['backgroundColor'] = var10;
    var4['safetyToolsButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/native/SafetyToolsButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SafetyToolsButton(arg1) {
        var1 = arg1;
        var17 = var1.channelId;
        var _closure2_slot0 = var17;
        var18 = var1.recipientId;
        var _closure2_slot1 = var18;
        var16 = var1.warningId;
        var _closure2_slot2 = var16;
        var8 = var1.warningType;
        var _closure2_slot3 = var8;
        var3 = _closure1_slot7;
        var4 = undefined;
        var7 = var3.bind(var4)();
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var3 = 6;
        var3 = var12[var3];
        var5 = var11.bind(var4)(var3);
        var3 = var5.useSafetyToolsButtonTooltipForChannel;
        var3 = var3.bind(var5)(var17);
        var _closure2_slot4 = var3;
        var5 = 7;
        var5 = var12[var5];
        var6 = var11.bind(var4)(var5);
        var5 = var6.useShouldShowInitialSafetyToolsButtonTooltip;
        var5 = var5.bind(var6)(var17);
        var _closure2_slot5 = var5;
        var9 = _closure1_slot4;
        var10 = var9.useState;
        var6 = false;
        var6 = var10.bind(var9)(var6);
        var19 = _closure1_slot3;
        var15 = 2;
        var10 = var19.bind(var4)(var6, var15);
        var13 = 0;
        var6 = var10[var13];
        var _closure2_slot6 = var6;
        var14 = 1;
        var10 = var10[var14];
        var _closure2_slot7 = var10;
        var21 = var9.useCallback;
        var20 = new Array(2);
        var20[0] = var5;
        var20[1] = var3;
        var10 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot5;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot4;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.kCN9i4;
                var1 = var3.bind(var4)(var2);
case 4:
                _fun0001_ip = 6; continue _fun0001;
case 2:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.16QyDg;
                var1 = var3.bind(var4)(var2);
case 6:
                return var1;
            }
        };
        var20 = var21.bind(var9)(var10, var20);
        var _closure2_slot8 = var20;
        var21 = var9.useState;
        var10 = var20.bind(var4)();
        var10 = var21.bind(var9)(var10);
        var10 = var19.bind(var4)(var10, var15);
        var13 = var10[var13];
        var _closure2_slot9 = var13;
        var10 = var10[var14];
        var _closure2_slot10 = var10;
        var14 = var9.useMemo;
        var10 = new Array(3);
        var10[0] = var6;
        var10[1] = var3;
        var10[2] = var5;
        var6 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot6;
                if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 3:
                var4 = _closure2_slot4;
                var2 = null;
                var2 = var2 != var4;
                if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 5:
                var2 = _closure2_slot5;
case 8:
                var1 = var2;
case 7:
                return var1;
            }
        };
        var14 = var14.bind(var9)(var6, var10);
        var _closure2_slot11 = var14;
        var15 = var9.useCallback;
        var10 = new Array(5);
        var10[0] = var17;
        var10[1] = var16;
        var10[2] = var8;
        var10[3] = var18;
        var10[4] = var3;
        var6 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackNamedViewEvent;
            var2 = {};
            var6 = _closure2_slot0;
            var2['channelId'] = var6;
            var6 = _closure2_slot2;
            var2['warningId'] = var6;
            var6 = _closure2_slot3;
            var2['warningType'] = var6;
            var6 = _closure2_slot1;
            var2['senderId'] = var6;
            var6 = arg1;
            var2['viewName'] = var6;
            var6 = _closure2_slot4;
            var5 = null;
            var5 = var5 != var6;
            var2['isNudgeWarning'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = var15.bind(var9)(var6, var10);
        var _closure2_slot12 = var6;
        var19 = var9.useEffect;
        var15 = function() {
            var1 = global;
            var4 = var1.setTimeout;
            var1 = undefined;
            var3 = function() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = 5;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var10 = new Array(0);
        var10 = var19.bind(var9)(var15, var10);
        var10 = _closure1_slot1;
        var15 = 10;
        var15 = var12[var15];
        var19 = var10.bind(var4)(var15);
        var15 = function() {
            var3 = _closure2_slot12;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.ViewNameTypes;
            var2 = var2.SAFETY_TOOLS_BUTTON;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var15 = var19.bind(var4)(var15);
        var19 = var9.useEffect;
        var15 = new Array(4);
        var15[0] = var20;
        var15[1] = var14;
        var15[2] = var5;
        var15[3] = var6;
        var6 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot11;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 3:
                var3 = _closure2_slot5;
                var1 = !var3;
case 9:
                if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var4 = _closure2_slot12;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var1 = var1.ViewNameTypes;
                var1 = var1.SAFETY_TOOLS_NUDGE_TOOLTIP;
                var1 = var4.bind(var3)(var1);
case 10:
                var3 = _closure2_slot8;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = null;
                if(!(var4 != var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var2 = _closure2_slot10;
                var2 = var2.bind(var1)(var3);
case 12:
                return var1;
            }
        };
        var6 = var19.bind(var9)(var6, var15);
        var15 = var9.useCallback;
        var6 = new Array(3);
        var6[0] = var17;
        var6[1] = var3;
        var6[2] = var5;
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot5;
                if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 3:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.acknowledgeChannelSafetyWarningTooltip;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
case 14:
                var3 = _closure2_slot4;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dismissChannelSafetyWarnings;
                var2 = _closure2_slot0;
                var1 = _closure2_slot4;
                var5 = var1.id;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 15:
                var1 = undefined;
                return var1;
            }
        };
        var15 = var15.bind(var9)(var5, var6);
        var _closure2_slot13 = var15;
        var6 = var9.useCallback;
        var5 = new Array(6);
        var5[0] = var18;
        var5[1] = var15;
        var5[2] = var17;
        var5[3] = var16;
        var5[4] = var8;
        var5[5] = var3;
        var3 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure2_slot1;
                var5 = null;
                if(!(var5 != var1)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var1 = _closure2_slot13;
                var8 = undefined;
                var1 = var1.bind(var8)();
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 12;
                var1 = var9[var1];
                var2 = var7.bind(var8)(var1);
                var1 = var2.openSafetyToolsActionSheet;
                var13 = _closure2_slot0;
                var12 = _closure2_slot1;
                var11 = _closure2_slot2;
                var10 = _closure2_slot3;
                var18 = var2;
                var17 = var13;
                var16 = var12;
                var15 = var11;
                var14 = var10;
                var1 = var18[var1](var17, var16, var15, var14, var13);
                var6 = 9;
                var1 = var9[var6];
                var3 = var7.bind(var8)(var1);
                var2 = var3.trackCtaEvent;
                var1 = {};
                var1['channelId'] = var13;
                var1['senderId'] = var12;
                var1['warningId'] = var11;
                var1['warningType'] = var10;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.CtaEventTypes;
                var6 = var6.USER_SAFETY_TOOLS_BUTTON_CLICK;
                var1['cta'] = var6;
                var4 = _closure2_slot4;
                var4 = var5 != var4;
                var1['isNudgeWarning'] = var4;
                var1 = var2.bind(var3)(var1);
case 17:
                var1 = undefined;
                return var1;
            }
        };
        var8 = var6.bind(var9)(var3, var5);
        var5 = var9.useRef;
        var3 = null;
        var5 = var5.bind(var9)(var3);
        var6 = var9.useMemo;
        var3 = new Array(3);
        var3[0] = var15;
        var3[1] = var14;
        var3[2] = var13;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = {};
                var2 = 'bottom';
                var1['position'] = var2;
                var4 = _closure2_slot9;
                var3 = null;
                var4 = var3 != var4;
                var3 = '';
                if(!var4) { _fun0006_ip = 19; continue _fun0006 }
case 7:
                var3 = _closure2_slot9;
case 19:
                var1['label'] = var3;
                var2 = _closure2_slot11;
                var1['visible'] = var2;
                var2 = function onPress() {
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                var1['onPress'] = var2;
                return var1;
            }
        };
        var6 = var6.bind(var9)(var2, var3);
        var2 = 13;
        var2 = var12[var2];
        var3 = var11.bind(var4)(var2);
        var2 = var3.useTooltip;
        var2 = var2.bind(var3)(var5, var6);
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var1['ref'] = var5;
        var5 = 14;
        var5 = var12[var5];
        var6 = var10.bind(var4)(var5);
        var5 = {};
        var9 = true;
        var5['noMargin'] = var9;
        var9 = 5;
        var9 = var12[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.unsafe_rawColors;
        var9 = var9.WHITE_500;
        var5['color'] = var9;
        var9 = 15;
        var9 = var12[var9];
        var9 = var10.bind(var4)(var9);
        var5['source'] = var9;
        var5['onPress'] = var8;
        var8 = 8;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.rpc2qq;
        var8 = var9.bind(var10)(var8);
        var5['accessibilityLabel'] = var8;
        var7 = var7.safetyToolsButton;
        var5['style'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['SafetyToolsButton'] = var2;
    return var1;
})();