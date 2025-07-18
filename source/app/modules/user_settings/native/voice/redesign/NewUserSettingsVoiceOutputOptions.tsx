// app/modules/user_settings/native/voice/redesign/NewUserSettingsVoiceOutputOptions.tsx
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['marginTop'] = var10;
    var4['slider'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/voice/redesign/NewUserSettingsVoiceOutputOptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NewUserSettingsVoiceOutputOptions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot11;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 8;
            var1 = var18[var2];
            var7 = var19.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var1;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getOutputVolume;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var6.bind(var7)(var5, var3);
            var3 = var18[var2];
            var7 = var19.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(2);
            var5[0] = var3;
            var3 = _closure1_slot6;
            var5[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getLastActiveStream;
                    var2 = var1.bind(var2)();
                    var5 = null;
                    var4 = var5 != var2;
                    var1 = null;
                    if(!var4) { _fun0002_ip = 57; continue _fun0002 }
 28:
                    var4 = var2.ownerId;
                    var6 = _closure1_slot6;
                    var3 = var6.getId;
                    var3 = var3.bind(var6)();
                    var1 = null;
                    if(!(var4 !== var3)) { _fun0002_ip = 57; continue _fun0002 }
 54:
                    var1 = var2;
 57:
                    return var1;
                }
            };
            var8 = var6.bind(var7)(var5, var3);
            var _closure2_slot0 = var8;
            var2 = var18[var2];
            var5 = var19.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 != var2;
                    var1 = 0;
                    if(!var2) { _fun0003_ip = 57; continue _fun0003 }
 18:
                    var5 = _closure1_slot7;
                    var4 = var5.getLocalVolume;
                    var3 = _closure2_slot0;
                    var3 = var3.ownerId;
                    var2 = _closure1_slot8;
                    var2 = var2.STREAM;
                    var1 = var4.bind(var5)(var3, var2);
 57:
                    return var1;
                }
            };
            var15 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function(arg1) {
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 9;
                var3 = var6[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var3);
                var3 = _closure2_slot0;
                var4 = null;
                var7 = var4 != var3;
                var4 = 'Can not set stream volume without active stream';
                var4 = var8.bind(var1)(var7, var4);
                var4 = 10;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.setLocalVolume;
                var4 = var3.ownerId;
                var2 = _closure1_slot8;
                var3 = var2.STREAM;
                var2 = arg1;
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var1 = 11;
            var1 = var18[var1];
            var1 = var19.bind(var4)(var1);
            var2 = var1.NewUserSettingsTableRowGroup;
            var1 = {};
            var10 = 12;
            var5 = var18[var10];
            var5 = var19.bind(var4)(var5);
            var7 = var5.intl;
            var6 = var7.string;
            var5 = var18[var10];
            var5 = var19.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.UXxPGB;
            var5 = var6.bind(var7)(var5);
            var1['title'] = var5;
            var9 = _closure1_slot9;
            var7 = 13;
            var5 = var18[var7];
            var5 = var19.bind(var4)(var5);
            var6 = var5.TableRow;
            var5 = {};
            var11 = var18[var10];
            var11 = var19.bind(var4)(var11);
            var16 = var11.intl;
            var12 = var16.string;
            var11 = var18[var10];
            var11 = var19.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.xPHVBg;
            var11 = var12.bind(var16)(var11);
            var5['label'] = var11;
            var12 = _closure1_slot4;
            var11 = {};
            var16 = var17.slider;
            var11['style'] = var16;
            var19 = _closure1_slot1;
            var16 = 14;
            var18 = var18[var16];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var22 = var17.slider;
            var18['style'] = var22;
            var18['value'] = var21;
            var20 = function onValueChange(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setOutputVolume;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18['onValueChange'] = var20;
            var18 = var9.bind(var4)(var19, var18);
            var11['children'] = var18;
            var11 = var9.bind(var4)(var12, var11);
            var5['subLabel'] = var11;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            var6 = var6 != var8;
            if(!var6) { _fun0001_ip = 579; continue _fun0001 }
 435:
            var9 = _closure1_slot9;
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = var12[var7];
            var7 = var19.bind(var4)(var7);
            var8 = var7.TableRow;
            var7 = {};
            var11 = var12[var10];
            var11 = var19.bind(var4)(var11);
            var18 = var11.intl;
            var11 = var18.string;
            var10 = var12[var10];
            var10 = var19.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.pEAl4e;
            var10 = var11.bind(var18)(var10);
            var7['label'] = var10;
            var11 = _closure1_slot4;
            var10 = {};
            var17 = var17.slider;
            var10['style'] = var17;
            var13 = _closure1_slot1;
            var12 = var12[var16];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['value'] = var15;
            var12['onValueChange'] = var14;
            var12 = var9.bind(var4)(var13, var12);
            var10['children'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['subLabel'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 579:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();