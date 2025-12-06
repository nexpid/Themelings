// app/modules/mfa/native/screens/BackupScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function isValidClipboardCode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = var3.length;
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 4;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.BACKUP_CODE_MIN_LENGTH;
            var1 = var4 >= var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var3.length;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.BACKUP_CODE_MAX_LENGTH;
            var1 = var3 <= var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function getFormattedExplainer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var11 = arg1;
            var4 = _closure1_slot6;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Text;
            var1 = 0;
            if(!(!(var11 > var1))) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var1 = {};
            var5 = 'text-md/normal';
            var1['variant'] = var5;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 6;
            var5 = var12[var7];
            var5 = var10.bind(var3)(var5);
            var9 = var5.intl;
            var8 = var9.string;
            var5 = var12[var7];
            var5 = var10.bind(var3)(var5);
            var5 = var5.t;
            var5 = var5.RRtlLg;
            var8 = var8.bind(var9)(var5);
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var12[var7];
            var8 = var10.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var12[var7];
            var7 = var10.bind(var3)(var7);
            var7 = var7.t;
            var7 = var7.v3a6Pd;
            var7 = var8.bind(var9)(var7);
            var5[1] = var7;
            var1['children'] = var5;
            _fun0002_ip = 5; continue _fun0002;
case 4:
            var5 = {};
            var7 = 'text-md/normal';
            var5['variant'] = var7;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 6;
            var6 = var12[var7];
            var6 = var8.bind(var3)(var6);
            var10 = var6.intl;
            var9 = var10.string;
            var6 = var12[var7];
            var6 = var8.bind(var3)(var6);
            var6 = var6.t;
            var6 = var6.RRtlLg;
            var9 = var9.bind(var10)(var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = var12[var7];
            var9 = var8.bind(var3)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var7 = var12[var7];
            var7 = var8.bind(var3)(var7);
            var7 = var7.t;
            var8 = var7.tsWkAE;
            var7 = {};
            var7['countdown'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            var6[1] = var7;
            var5['children'] = var6;
            var1 = var5;
case 5:
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsxs;
    var _closure1_slot6 = var7;
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.Fragment;
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/screens/BackupScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BackupScreen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var7 = var1.mfaChallenge;
            var6 = var1.finish;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot5;
            var1 = var5.useState;
            var9 = false;
            var1 = var1.bind(var5)(var9);
            var8 = _closure1_slot4;
            var4 = undefined;
            var3 = 2;
            var1 = var8.bind(var4)(var1, var3);
            var12 = 0;
            var10 = var1[var12];
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot1 = var1;
            var11 = var5.useState;
            var1 = '';
            var1 = var11.bind(var5)(var1);
            var1 = var8.bind(var4)(var1, var3);
            var14 = var1[var12];
            var _closure2_slot2 = var14;
            var1 = var1[var2];
            var _closure2_slot3 = var1;
            var1 = var5.useState;
            var1 = var1.bind(var5)(var4);
            var1 = var8.bind(var4)(var1, var3);
            var21 = var1[var12];
            var1 = var1[var2];
            var _closure2_slot4 = var1;
            var1 = var5.useState;
            var1 = var1.bind(var5)(var9);
            var1 = var8.bind(var4)(var1, var3);
            var15 = var1[var12];
            var1 = var1[var2];
            var _closure2_slot5 = var1;
            var9 = var5.useState;
            var1 = 10;
            var1 = var9.bind(var5)(var1);
            var1 = var8.bind(var4)(var1, var3);
            var11 = var1[var12];
            var _closure2_slot6 = var11;
            var1 = var1[var2];
            var _closure2_slot7 = var1;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = 0;
                    if(!(!(var3 <= var2))) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot7;
                        var1 = undefined;
                        var2 = function(arg1) {
                            var2 = arg1;
                            var1 = 1;
                            var1 = var2 - var1;
                            return var1;
                        };
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 1000;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = var5.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                            var10 = arg1;
                            var2 = undefined;
                            var6 = undefined;
                            var9 = undefined;
                            var5 = _closure2_slot4;
                            var5 = var5.bind(var2)(var2);
                            var5 = _closure2_slot1;
                            var8 = true;
                            var5 = var5.bind(var2)(var8);
case 10: // try_start_0
                            var7 = _closure2_slot0;
                            var5 = {};
                            var11 = 'backup';
                            var5['mfaType'] = var11;
                            var5['data'] = var10;
                            var5 = var7.bind(var2)(var5);
                            SaveGenerator(address=70);
case 11:
                            return var5;
case 12:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(var7) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                            var7 = _closure2_slot5;
                            var7 = var7.bind(var2)(var8);
case 15: // try_end0
                            _fun0005_ip = 16; continue _fun0005;
case 13:
                            return var5;
case 17: // catch_target0
                            CatchBlockStart(arg_register=6);
                            var4 = var7;
                            var5 = _closure2_slot4;
                            var8 = null;
                            var10 = var8 == var7;
                            var7 = undefined;
                            if(var10) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                            var10 = var4;
                            var10 = var10.body;
                            var9 = var10;
                            var10 = var8 == var10;
                            var7 = undefined;
                            if(var10) { _fun0005_ip = 18; continue _fun0005 }
case 20:
                            var7 = var9.message;
case 18:
                            var6 = var7;
                            if(!(var8 == var7)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                            var4 = var4.message;
                            _fun0005_ip = 23; continue _fun0005;
case 21:
                            var4 = var6;
case 23:
                            var4 = var5.bind(var2)(var4);
case 16:
                            var4 = _closure2_slot1;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
                            return var2;
case 8:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var2 = var1.bind(var4)();
            var1 = new Array(1);
            var1[0] = var6;
            var1 = var3.bind(var5)(var2, var1);
            var _closure2_slot8 = var1;
            var3 = _closure1_slot7;
            var19 = _closure1_slot1;
            var23 = _closure1_slot2;
            var1 = 7;
            var1 = var23[var1];
            var2 = var19.bind(var4)(var1);
            var1 = {};
            var24 = _closure1_slot0;
            var22 = 6;
            var5 = var23[var22];
            var5 = var24.bind(var4)(var5);
            var9 = var5.intl;
            var8 = var9.string;
            var5 = var23[var22];
            var5 = var24.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.B2T1HD;
            var5 = var8.bind(var9)(var5);
            var1['headerText'] = var5;
            var5 = var23[var22];
            var5 = var24.bind(var4)(var5);
            var9 = var5.intl;
            var8 = var9.string;
            var5 = var23[var22];
            var5 = var24.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.c5J7O0;
            var5 = var8.bind(var9)(var5);
            var1['subtitle'] = var5;
            var9 = _closure1_slot6;
            var8 = _closure1_slot8;
            var5 = {};
            var16 = _closure1_slot10;
            var16 = var16.bind(var4)(var11);
            var18 = new Array(2);
            var18[0] = var16;
            var16 = 8;
            var16 = var23[var16];
            var20 = var19.bind(var4)(var16);
            var19 = {};
            var16 = var23[var22];
            var16 = var24.bind(var4)(var16);
            var26 = var16.intl;
            var25 = var26.string;
            var16 = var23[var22];
            var16 = var24.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.C/ZAw/;
            var16 = var25.bind(var26)(var16);
            var19['label'] = var16;
            var16 = var23[var22];
            var16 = var24.bind(var4)(var16);
            var26 = var16.intl;
            var25 = var26.string;
            var16 = var23[var22];
            var16 = var24.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.fZSi1D;
            var16 = var25.bind(var26)(var16);
            var19['placeholder'] = var16;
            var16 = _closure1_slot9;
            var19['isValidClipboardCode'] = var16;
            var16 = 4;
            var23 = var23[var16];
            var23 = var24.bind(var4)(var23);
            var23 = var23.BACKUP_CODE_MAX_LENGTH;
            var19['maxLength'] = var23;
            var23 = function onChangeCode(arg1) {
                var4 = _closure2_slot3;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot4;
                var2 = var2.bind(var1)(var1);
                return var1;
            };
            var19['onChangeCode'] = var23;
            var19['error'] = var21;
            var21 = var10;
            if(var10) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var21 = var15;
case 24:
            var19['isDisabled'] = var21;
            var19 = var3.bind(var4)(var20, var19);
            var18[1] = var19;
            var5['children'] = var18;
            var5 = var9.bind(var4)(var8, var5);
            var1['input'] = var5;
            var9 = _closure1_slot7;
            var8 = _closure1_slot1;
            var18 = _closure1_slot2;
            var5 = 9;
            var5 = var18[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var19 = 'primary';
            var5['variant'] = var19;
            var21 = _closure1_slot0;
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.geKm7t;
            var18 = var19.bind(var20)(var18);
            var5['text'] = var18;
            var18 = var10;
            if(var10) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var18 = var15;
case 26:
            var5['loading'] = var18;
            var17 = function onPress() {
                var3 = _closure2_slot8;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onPress'] = var17;
            if(var10) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var10 = var15;
case 28:
            if(var10) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var14 = var14.length;
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var16];
            var13 = var15.bind(var4)(var13);
            var13 = var13.BACKUP_CODE_MIN_LENGTH;
            var10 = var14 < var13;
case 30:
            if(var10) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var10 = var11 > var12;
case 32:
            var5['disabled'] = var10;
            var5 = var9.bind(var4)(var8, var5);
            var1['submit'] = var5;
            var5 = {};
            var5['mfaChallenge'] = var7;
            var5['finish'] = var6;
            var1['screenProps'] = var5;
            var5 = 'backup';
            var1['mfaMethod'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();