// app/modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.getVisualEffectViewOverrides;
    var _closure1_slot5 = var8;
    var4 = var4.setVisualEffectViewOverides;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 'flex-start';
    var10['alignSelf'] = var11;
    var4['enabledSwitchStyle'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function VEVOOPropBlurAmount() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot8;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var8 = _closure1_slot4;
            var2 = var8.useState;
            var1 = false;
            var1 = var2.bind(var8)(var1);
            var10 = _closure1_slot3;
            var9 = 2;
            var1 = var10.bind(var4)(var1, var9);
            var3 = 0;
            var5 = var1[var3];
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot0 = var1;
            var11 = var8.useState;
            var1 = _closure1_slot5;
            var1 = var1.bind(var4)();
            var1 = var1.blurAmountOverride;
            var1 = var11.bind(var8)(var1);
            var1 = var10.bind(var4)(var1, var9);
            var15 = var1[var3];
            var _closure2_slot1 = var15;
            var1 = var1[var2];
            var _closure2_slot2 = var1;
            var1 = var8.useRef;
            var10 = var1.bind(var8)(var15);
            var3 = var8.useCallback;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0002_ip = 23; continue _fun0002 }
 9:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var5);
 23:
                    var3 = _closure1_slot6;
                    var2 = {};
                    var4 = _closure1_slot5;
                    var1 = undefined;
                    var6 = var4.bind(var1)();
                    var7 = var2;
                    var4 = copyDataProperties(var7, var6);
                    var4 = 'blurAmountOverride';
                    var2[var4] = var5;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = new Array(0);
            var9 = var3.bind(var8)(var2, var1);
            var _closure2_slot3 = var9;
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var11 = null;
            var12 = var11 == var15;
            var8 = undefined;
            if(var12) { _fun0001_ip = 200; continue _fun0001 }
 186:
            var14 = var15.toFixed;
            var12 = 3;
            var8 = var14.bind(var15)(var12);
 200:
            var11 = var11 != var8;
            var12 = '';
            if(!var11) { _fun0001_ip = 214; continue _fun0001 }
 211:
            var12 = var8;
 214:
            var8 = global;
            var8 = var8.HermesInternal;
            var11 = var8.concat;
            var8 = 'Blur Amount ';
            var8 = var11.bind(var8)(var12);
            var1['label'] = var8;
            var7 = var7.enabledSwitchStyle;
            var1['leadingStyle'] = var7;
            var8 = _closure1_slot7;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 6;
            var7 = var11[var7];
            var7 = var12.bind(var4)(var7);
            var12 = var7.FormSwitch;
            var7 = {};
            var7['value'] = var5;
            var13 = function onValueChange(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = arg1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var5);
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    if(!var5) { _fun0003_ip = 30; continue _fun0003 }
 26:
                    var2 = _closure2_slot1;
 30:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var7['onValueChange'] = var13;
            var7 = var8.bind(var4)(var12, var7);
            var1['leading'] = var7;
            var7 = _closure1_slot1;
            var6 = 7;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var11 = !var5;
            var6['disabled'] = var11;
            var11 = !var5;
            var6['disabledOpacity'] = var11;
            var6['initialValue'] = var10;
            var6['onValueChange'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['subLabel'] = var6;
            var5 = !var5;
            var1['disabled'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();