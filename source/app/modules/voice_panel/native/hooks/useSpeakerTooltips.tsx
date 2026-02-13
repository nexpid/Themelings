// app/modules/voice_panel/native/hooks/useSpeakerTooltips.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useCoachmarkHelper(arg1, arg2, arg3) {
        var5 = arg2;
        var8 = arg3;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var8;
        var7 = _closure1_slot4;
        var6 = var7.useCallback;
        var4 = new Array(1);
        var4[0] = var5;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var2 = var2.visible;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
                var1 = var2.onDismiss;
                var1 = var1.bind(var2)();
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var7 = var6.bind(var7)(var3, var4);
        var _closure2_slot2 = var7;
        var6 = _closure1_slot4;
        var4 = var6.useEffect;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var7;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var6)(var2, var3);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.useCoachmark;
        var2 = arg1;
        var2 = var3.bind(var4)(var2, var5);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.setVoiceUpsellDismissed;
    var _closure1_slot5 = var7;
    var4 = var4.useConsoleVoiceUpsellStore;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function useSpeakerTooltipsTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function useSpeakerTooltipsTsx2(currentControlsMode,previous){const{runOnJS,setIsShowingControls,VoicePanelControlsModes}=this.__closure;if(currentControlsMode===previous)return;runOnJS(setIsShowingControls)(currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useSpeakerTooltips.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSpeakerTooltips(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var13 = _closure1_slot1;
            var22 = _closure1_slot2;
            var1 = 6;
            var3 = var22[var1];
            var1 = undefined;
            var3 = var13.bind(var1)(var3);
            var12 = var3.bind(var1)();
            var _closure2_slot1 = var12;
            var3 = _closure1_slot6;
            var3 = var3.bind(var1)();
            var3 = var3.voiceUpsellDismissed;
            var _closure2_slot2 = var3;
            var6 = 7;
            var6 = var22[var6];
            var6 = var13.bind(var1)(var6);
            var8 = var6.bind(var1)(var1);
            var _closure2_slot3 = var8;
            var21 = _closure1_slot0;
            var6 = 8;
            var6 = var22[var6];
            var9 = var21.bind(var1)(var6);
            var6 = var9.useIsVoicePanelFullscreen;
            var11 = var6.bind(var9)();
            var10 = _closure1_slot4;
            var9 = var10.useContext;
            var6 = 9;
            var6 = var22[var6];
            var6 = var13.bind(var1)(var6);
            var6 = var9.bind(var10)(var6);
            var18 = var6.controlsSpecs;
            var _closure2_slot4 = var18;
            var10 = _closure1_slot4;
            var9 = var10.useState;
            var6 = true;
            var9 = var9.bind(var10)(var6);
            var6 = _closure1_slot3;
            var13 = 2;
            var14 = var6.bind(var1)(var9, var13);
            var6 = 0;
            var10 = var14[var6];
            var9 = 1;
            var19 = var14[var9];
            var _closure2_slot5 = var19;
            var20 = 10;
            var14 = var22[var20];
            var17 = var21.bind(var1)(var14);
            var16 = var17.useAnimatedReaction;
            var15 = function b() {
                var2 = _closure2_slot4;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var1 = var1.mode;
                return var1;
            };
            var14 = {};
            var14['controlsSpecs'] = var18;
            var15['__closure'] = var14;
            var14 = 13952338295275.0;
            var15['__workletHash'] = var14;
            var14 = _closure1_slot10;
            var15['__initData'] = var14;
            var14 = function S(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    if(!(var4 !== var1)) { _fun0004_ip = 6; continue _fun0004 }
case 5:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.runOnJS;
                    var2 = _closure2_slot5;
                    var2 = var5.bind(var6)(var2);
                    var1 = _closure1_slot7;
                    var1 = var1.FLOATING_DEFAULT;
                    var1 = var4 === var1;
                    var1 = var2.bind(var3)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = {};
            var20 = var22[var20];
            var20 = var21.bind(var1)(var20);
            var20 = var20.runOnJS;
            var18['runOnJS'] = var20;
            var18['setIsShowingControls'] = var19;
            var19 = _closure1_slot7;
            var18['VoicePanelControlsModes'] = var19;
            var14['__closure'] = var18;
            var18 = 5084069556209.0;
            var14['__workletHash'] = var18;
            var18 = _closure1_slot11;
            var14['__initData'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            if(!var4) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var4 = var11;
case 7:
            if(!var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var4 = var10;
case 9:
            _closure2_slot0 = var4;
            var14 = _closure1_slot4;
            var11 = var14.useMemo;
            var10 = new Array(2);
            var10[0] = var4;
            var10[1] = var8;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0005_ip = 3; continue _fun0005 }
case 5:
                    var1 = new Array(0);
                    _fun0005_ip = 4; continue _fun0005;
case 3:
                    var1 = _closure2_slot3;
case 4:
                    return var1;
                }
            };
            var14 = var11.bind(var14)(var8, var10);
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 11;
            var8 = var10[var8];
            var11 = var11.bind(var1)(var8);
            var8 = var11.useSelectedDismissibleContent;
            var11 = var8.bind(var11)(var14);
            var8 = _closure1_slot3;
            var8 = var8.bind(var1)(var11, var13);
            var6 = var8[var6];
            var _closure2_slot6 = var6;
            var13 = var8[var9];
            var _closure2_slot7 = var13;
            var9 = _closure1_slot1;
            var8 = 12;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var11 = var8.bind(var1)();
            var _closure2_slot8 = var11;
            var10 = _closure1_slot4;
            var9 = var10.useMemo;
            var8 = new Array(3);
            var8[0] = var4;
            var8[1] = var13;
            var8[2] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var3 = 'bottom';
                    var1['position'] = var3;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 13;
                    var5 = var9[var3];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var10 = var5.intl;
                    var6 = var10.string;
                    var5 = var9[var3];
                    var5 = var8.bind(var7)(var5);
                    var5 = var5.t;
                    var5 = var5.O2WA4u;
                    var5 = var6.bind(var10)(var5);
                    var1['title'] = var5;
                    var5 = var9[var3];
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.fr5bJy;
                    var3 = var5.bind(var6)(var3);
                    var1['description'] = var3;
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0006_ip = 11; continue _fun0006 }
case 12:
                    var5 = _closure2_slot6;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 14;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.DismissibleContent;
                    var4 = var4.DONUT_MOBILE_NUX;
                    var3 = var5 === var4;
case 11:
                    var1['visible'] = var3;
                    var3 = function renderImgComponent() {
                        var4 = _closure1_slot9;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var1['renderImgComponent'] = var3;
                    var3 = true;
                    var1['withBlurBackground'] = var3;
                    var2 = function onDismiss() {
                        var3 = _closure2_slot7;
                        var1 = _closure1_slot8;
                        var2 = var1.UNKNOWN;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onDismiss'] = var2;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var8);
            var _closure2_slot9 = var6;
            var10 = _closure1_slot4;
            var9 = var10.useMemo;
            var8 = new Array(4);
            var8[0] = var12;
            var8[1] = var4;
            var8[2] = var3;
            var3 = var6.visible;
            var8[3] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    var3 = null;
                    if(!var2) { _fun0007_ip = 13; continue _fun0007 }
case 14:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 15;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.getConsoleInfo;
                    var2 = _closure2_slot1;
                    var3 = var5.bind(var6)(var2);
case 13:
                    var5 = _closure2_slot0;
                    if(!var5) { _fun0007_ip = 15; continue _fun0007 }
case 16:
                    var2 = _closure2_slot2;
                    var5 = !var2;
case 15:
                    if(!var5) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                    var5 = var4 != var3;
case 17:
                    if(!var5) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                    var1 = _closure2_slot9;
                    var1 = var1.visible;
                    var5 = !var1;
case 19:
                    var1 = {};
                    var2 = 'bottom';
                    var1['position'] = var2;
                    var6 = var4 == var3;
                    var8 = undefined;
                    if(var6) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var8 = var3.connectLabel;
case 21:
                    var9 = var4 != var8;
                    var6 = '';
                    var7 = var6;
                    if(!var9) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var7 = var8;
case 23:
                    var1['title'] = var7;
                    var8 = var4 == var3;
                    var7 = undefined;
                    if(var8) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    var7 = var3.connectSublabel;
case 25:
                    var8 = var4 != var7;
                    if(!var8) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var6 = var7;
case 27:
                    var1['description'] = var6;
                    var1['visible'] = var5;
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var2 = var3.icon;
case 29:
                    var1['imgSource'] = var2;
                    var2 = true;
                    var1['withBlurBackground'] = var2;
                    var2 = function onDismiss() {
                        var3 = _closure1_slot5;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onDismiss'] = var2;
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var8);
            var12 = var6.visible;
            if(var12) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var12 = var3.visible;
case 31:
            var _closure2_slot10 = var12;
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var11;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var3 = _closure2_slot8;
                    if(var1) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                    var1 = var3.unlock;
                    var1 = var1.bind(var3)();
                    _fun0008_ip = 35; continue _fun0008;
case 33:
                    var2 = var3.lock;
                    var1 = _closure1_slot7;
                    var1 = var1.FLOATING_DEFAULT;
                    var1 = var2.bind(var3)(var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var7, var8);
            var2 = _closure1_slot12;
            var6 = var2.bind(var1)(var5, var6, var4);
            var2 = var2.bind(var1)(var5, var3, var4);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();