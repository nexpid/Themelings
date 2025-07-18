// app/modules/voice_panel/native/hooks/useSpeakerTooltips.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                var2 = _closure2_slot0;
                var2 = var2.visible;
                if(!var2) { _fun0001_ip = 30; continue _fun0001 }
 16:
                var2 = _closure2_slot0;
                var1 = var2.onDismiss;
                var1 = var1.bind(var2)();
 30:
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
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 20; continue _fun0002 }
 10:
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)();
 20:
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
    var4 = native4;
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
 0:
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
 0:
                    var4 = arg1;
                    var1 = arg2;
                    if(!(var4 !== var1)) { _fun0004_ip = 71; continue _fun0004 }
 10:
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
 71:
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
            if(!var4) { _fun0003_ip = 344; continue _fun0003 }
 341:
            var4 = var11;
 344:
            if(!var4) { _fun0003_ip = 350; continue _fun0003 }
 347:
            var4 = var10;
 350:
            _closure2_slot0 = var4;
            var14 = _closure1_slot4;
            var11 = var14.useMemo;
            var10 = new Array(2);
            var10[0] = var4;
            var10[1] = var8;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0005_ip = 16; continue _fun0005 }
 10:
                    var1 = new Array(0);
                    _fun0005_ip = 20; continue _fun0005;
 16:
                    var1 = _closure2_slot3;
 20:
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
 0:
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
                    if(!var3) { _fun0006_ip = 176; continue _fun0006 }
 136:
                    var5 = _closure2_slot6;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 14;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.DismissibleContent;
                    var4 = var4.DONUT_MOBILE_NUX;
                    var3 = var5 === var4;
 176:
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
 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    var3 = null;
                    if(!var2) { _fun0007_ip = 58; continue _fun0007 }
 18:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 15;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.getConsoleInfo;
                    var2 = _closure2_slot1;
                    var3 = var5.bind(var6)(var2);
 58:
                    var5 = _closure2_slot0;
                    if(!var5) { _fun0007_ip = 72; continue _fun0007 }
 65:
                    var2 = _closure2_slot2;
                    var5 = !var2;
 72:
                    if(!var5) { _fun0007_ip = 79; continue _fun0007 }
 75:
                    var5 = var4 != var3;
 79:
                    if(!var5) { _fun0007_ip = 95; continue _fun0007 }
 82:
                    var1 = _closure2_slot9;
                    var1 = var1.visible;
                    var5 = !var1;
 95:
                    var1 = {};
                    var2 = 'bottom';
                    var1['position'] = var2;
                    var6 = var4 == var3;
                    var8 = undefined;
                    if(var6) { _fun0007_ip = 120; continue _fun0007 }
 114:
                    var8 = var3.connectLabel;
 120:
                    var9 = var4 != var8;
                    var6 = '';
                    var7 = var6;
                    if(!var9) { _fun0007_ip = 137; continue _fun0007 }
 134:
                    var7 = var8;
 137:
                    var1['title'] = var7;
                    var8 = var4 == var3;
                    var7 = undefined;
                    if(var8) { _fun0007_ip = 156; continue _fun0007 }
 150:
                    var7 = var3.connectSublabel;
 156:
                    var8 = var4 != var7;
                    if(!var8) { _fun0007_ip = 166; continue _fun0007 }
 163:
                    var6 = var7;
 166:
                    var1['description'] = var6;
                    var1['visible'] = var5;
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 189; continue _fun0007 }
 184:
                    var2 = var3.icon;
 189:
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
            if(var12) { _fun0003_ip = 574; continue _fun0003 }
 568:
            var12 = var3.visible;
 574:
            var _closure2_slot10 = var12;
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var11;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot10;
                    var3 = _closure2_slot8;
                    if(var1) { _fun0008_ip = 26; continue _fun0008 }
 14:
                    var1 = var3.unlock;
                    var1 = var1.bind(var3)();
                    _fun0008_ip = 50; continue _fun0008;
 26:
                    var2 = var3.lock;
                    var1 = _closure1_slot7;
                    var1 = var1.FLOATING_DEFAULT;
                    var1 = var2.bind(var3)(var1);
 50:
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