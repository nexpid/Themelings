// app/modules/mfa/native/screens/TotpScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function isValidClipboardCode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = var4.length;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var3);
            var1 = var1.TOTP_CODE_LENGTH;
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 70; continue _fun0001 }
 46:
            var3 = /^\d+$/;
            var2 = var3.test;
            var1 = var2.bind(var3)(var4);
 70:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/screens/TotpScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TotpScreen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var7 = var1.mfaChallenge;
            var6 = var1.finish;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot5;
            var1 = var5.useState;
            var14 = false;
            var1 = var1.bind(var5)(var14);
            var13 = _closure1_slot4;
            var4 = undefined;
            var8 = 2;
            var1 = var13.bind(var4)(var1, var8);
            var3 = 0;
            var10 = var1[var3];
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot1 = var1;
            var9 = var5.useState;
            var1 = '';
            var1 = var9.bind(var5)(var1);
            var1 = var13.bind(var4)(var1, var8);
            var12 = var1[var3];
            var _closure2_slot2 = var12;
            var1 = var1[var2];
            var _closure2_slot3 = var1;
            var1 = var5.useState;
            var1 = var1.bind(var5)(var4);
            var1 = var13.bind(var4)(var1, var8);
            var9 = var1[var3];
            var1 = var1[var2];
            var _closure2_slot4 = var1;
            var1 = var5.useState;
            var1 = var1.bind(var5)(var14);
            var1 = var13.bind(var4)(var1, var8);
            var13 = var1[var3];
            var1 = var1[var2];
            var _closure2_slot5 = var1;
            var3 = var5.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            var7 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 201; continue _fun0003 }
 13:
                            var10 = var7;
                            var2 = undefined;
                            var6 = undefined;
                            var9 = undefined;
                            var5 = _closure2_slot3;
                            var5 = var5.bind(var2)(var7);
                            var5 = _closure1_slot7;
                            var5 = var5.bind(var2)(var7);
                            if(!var5) { _fun0003_ip = 198; continue _fun0003 }
 52:
                            var5 = _closure2_slot4;
                            var5 = var5.bind(var2)(var2);
                            var5 = _closure2_slot1;
                            var8 = true;
                            var5 = var5.bind(var2)(var8);
 72: // try_start_0
                            var7 = _closure2_slot0;
                            var5 = {};
                            var11 = 'totp';
                            var5['mfaType'] = var11;
                            var5['data'] = var10;
                            var5 = var7.bind(var2)(var5);
                            SaveGenerator(address=100);
 98:
                            return var5;
 100:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(var7) { _fun0003_ip = 117; continue _fun0003 }
 106:
                            var7 = _closure2_slot5;
                            var7 = var7.bind(var2)(var8);
 115: // try_end0
                            _fun0003_ip = 187; continue _fun0003;
 117:
                            return var5;
 120: // catch_target0
                            CatchBlockStart(arg_register=6);
                            var4 = var7;
                            var5 = _closure2_slot4;
                            var8 = null;
                            var10 = var8 == var7;
                            var7 = undefined;
                            if(var10) { _fun0003_ip = 165; continue _fun0003 }
 140:
                            var10 = var4;
                            var10 = var10.body;
                            var9 = var10;
                            var10 = var8 == var10;
                            var7 = undefined;
                            if(var10) { _fun0003_ip = 165; continue _fun0003 }
 160:
                            var7 = var9.message;
 165:
                            var6 = var7;
                            if(!(var8 == var7)) { _fun0003_ip = 179; continue _fun0003 }
 172:
                            var4 = var4.message;
                            _fun0003_ip = 182; continue _fun0003;
 179:
                            var4 = var6;
 182:
                            var4 = var5.bind(var2)(var4);
 187:
                            var4 = _closure2_slot1;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
 198:
                            return var2;
 201:
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
            var16 = var3.bind(var5)(var2, var1);
            var _closure2_slot6 = var16;
            var3 = _closure1_slot6;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 5;
            var1 = var17[var1];
            var2 = var8.bind(var4)(var1);
            var1 = {};
            var18 = _closure1_slot0;
            var20 = 6;
            var5 = var17[var20];
            var5 = var18.bind(var4)(var5);
            var19 = var5.intl;
            var14 = var19.string;
            var5 = var17[var20];
            var5 = var18.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.uc00u7;
            var5 = var14.bind(var19)(var5);
            var1['headerText'] = var5;
            var5 = 7;
            var5 = var17[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var14 = var17[var20];
            var14 = var18.bind(var4)(var14);
            var21 = var14.intl;
            var19 = var21.string;
            var14 = var17[var20];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.HZPBOT;
            var14 = var19.bind(var21)(var14);
            var5['label'] = var14;
            var14 = var17[var20];
            var14 = var18.bind(var4)(var14);
            var21 = var14.intl;
            var19 = var21.string;
            var14 = var17[var20];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.tARzgo;
            var14 = var19.bind(var21)(var14);
            var5['placeholder'] = var14;
            var14 = _closure1_slot7;
            var5['isValidClipboardCode'] = var14;
            var14 = 4;
            var17 = var17[var14];
            var17 = var18.bind(var4)(var17);
            var17 = var17.TOTP_CODE_LENGTH;
            var5['maxLength'] = var17;
            var5['onChangeCode'] = var16;
            var5['error'] = var9;
            var9 = var10;
            if(var10) { _fun0002_ip = 443; continue _fun0002 }
 440:
            var9 = var13;
 443:
            var5['isDisabled'] = var9;
            var9 = 'oneTimeCode';
            var5['textContentType'] = var9;
            var9 = 'one-time-code';
            var5['autoComplete'] = var9;
            var9 = 'number-pad';
            var5['keyboardType'] = var9;
            var5 = var3.bind(var4)(var8, var5);
            var1['input'] = var5;
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 8;
            var5 = var16[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var17 = 'primary';
            var5['variant'] = var17;
            var19 = _closure1_slot0;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.geKm7u;
            var16 = var17.bind(var18)(var16);
            var5['text'] = var16;
            var16 = var10;
            if(var10) { _fun0002_ip = 585; continue _fun0002 }
 582:
            var16 = var13;
 585:
            var5['loading'] = var16;
            var15 = function onPress() {
                var3 = _closure2_slot6;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onPress'] = var15;
            if(var10) { _fun0002_ip = 607; continue _fun0002 }
 604:
            var10 = var13;
 607:
            if(var10) { _fun0002_ip = 642; continue _fun0002 }
 610:
            var12 = var12.length;
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var14];
            var11 = var13.bind(var4)(var11);
            var11 = var11.TOTP_CODE_LENGTH;
            var10 = var12 !== var11;
 642:
            var5['disabled'] = var10;
            var5 = var9.bind(var4)(var8, var5);
            var1['submit'] = var5;
            var5 = {};
            var5['mfaChallenge'] = var7;
            var5['finish'] = var6;
            var1['screenProps'] = var5;
            var5 = 'totp';
            var1['mfaMethod'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();