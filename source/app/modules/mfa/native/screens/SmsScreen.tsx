// app/modules/mfa/native/screens/SmsScreen.tsx
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
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/screens/SmsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SmsScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.mfaChallenge;
            var _closure2_slot0 = var7;
            var6 = var1.finish;
            var _closure2_slot1 = var6;
            var8 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 6;
            var1 = var19[var1];
            var4 = undefined;
            var2 = var8.bind(var4)(var1);
            var1 = var2.useScreenStyles;
            var13 = var1.bind(var2)();
            var16 = _closure1_slot5;
            var2 = var16.useState;
            var1 = null;
            var1 = var2.bind(var16)(var1);
            var17 = _closure1_slot4;
            var12 = 2;
            var1 = var17.bind(var4)(var1, var12);
            var3 = 0;
            var22 = var1[var3];
            var2 = 1;
            var1 = var1[var2];
            var _closure2_slot2 = var1;
            var1 = var16.useState;
            var20 = false;
            var1 = var1.bind(var16)(var20);
            var1 = var17.bind(var4)(var1, var12);
            var9 = var1[var3];
            var1 = var1[var2];
            var _closure2_slot3 = var1;
            var5 = var16.useState;
            var1 = '';
            var1 = var5.bind(var16)(var1);
            var1 = var17.bind(var4)(var1, var12);
            var11 = var1[var3];
            var _closure2_slot4 = var11;
            var1 = var1[var2];
            var _closure2_slot5 = var1;
            var5 = var16.useState;
            var18 = _closure1_slot0;
            var15 = 7;
            var1 = var19[var15];
            var1 = var18.bind(var4)(var1);
            var23 = var1.intl;
            var21 = var23.string;
            var1 = var19[var15];
            var1 = var18.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.LQdCQE;
            var1 = var21.bind(var23)(var1);
            var1 = var5.bind(var16)(var1);
            var1 = var17.bind(var4)(var1, var12);
            var5 = var1[var3];
            var1 = var1[var2];
            var _closure2_slot6 = var1;
            var1 = var16.useState;
            var1 = var1.bind(var16)(var20);
            var1 = var17.bind(var4)(var1, var12);
            var12 = var1[var3];
            var1 = var1[var2];
            var _closure2_slot7 = var1;
            var3 = var16.useEffect;
            var1 = var7.ticket;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure2_slot2;
                var1 = undefined;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 8;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var5 = var3.HTTP;
                var4 = var5.post;
                var3 = {};
                var6 = _closure1_slot7;
                var6 = var6.LOGIN_SMS_SEND;
                var3['url'] = var6;
                var6 = {};
                var7 = _closure2_slot0;
                var7 = var7.ticket;
                var6['ticket'] = var7;
                var3['body'] = var6;
                var6 = true;
                var3['oldFormErrors'] = var6;
                var6 = false;
                var3['rejectWithError'] = var6;
                var5 = var4.bind(var5)(var3);
                var4 = var5.then;
                var3 = function(arg1) {
                    var3 = _closure2_slot6;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 7;
                    var5 = var7[var2];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var2 = var7[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.t;
                    var4 = var2.8r6h7+;
                    var2 = {};
                    var7 = arg1;
                    var7 = var7.body;
                    var7 = var7.phone;
                    var2['phoneNumber'] = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.catch;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var5 = arg1;
                        var4 = _closure2_slot2;
                        var7 = var5.body;
                        var6 = null;
                        var8 = var6 == var7;
                        var1 = undefined;
                        var3 = undefined;
                        if(var8) { _fun0002_ip = 33; continue _fun0002 }
 28:
                        var3 = var7.message;
 33:
                        if(!(var6 == var3)) { _fun0002_ip = 42; continue _fun0002 }
 37:
                        var3 = var5.message;
 42:
                        var3 = var4.bind(var1)(var3);
                        var2 = _closure2_slot6;
                        var2 = var2.bind(var1)(var1);
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var16)(var1, var2);
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 212; continue _fun0003 }
 13:
                            var11 = var5;
                            var2 = undefined;
                            var6 = undefined;
                            var9 = undefined;
                            var7 = _closure2_slot5;
                            var7 = var7.bind(var2)(var5);
                            var7 = var5.length;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 9;
                            var5 = var10[var5];
                            var5 = var8.bind(var2)(var5);
                            var5 = var5.SMS_CODE_LENGTH;
                            if(!(var7 === var5)) { _fun0003_ip = 209; continue _fun0003 }
 75:
                            var5 = _closure2_slot2;
                            var8 = null;
                            var5 = var5.bind(var2)(var8);
                            var5 = _closure2_slot3;
                            var10 = true;
                            var5 = var5.bind(var2)(var10);
 97: // try_start_0
                            var7 = _closure2_slot1;
                            var5 = {};
                            var12 = 'sms';
                            var5['mfaType'] = var12;
                            var5['data'] = var11;
                            var5 = var7.bind(var2)(var5);
                            SaveGenerator(address=125);
 123:
                            return var5;
 125:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(var7) { _fun0003_ip = 142; continue _fun0003 }
 131:
                            var7 = _closure2_slot7;
                            var7 = var7.bind(var2)(var10);
 140: // try_end0
                            _fun0003_ip = 198; continue _fun0003;
 142:
                            return var5;
 145: // catch_target0
                            CatchBlockStart(arg_register=6);
                            var4 = var7;
                            var5 = _closure2_slot2;
                            var7 = var7.body;
                            var9 = var7;
                            var10 = var8 == var7;
                            var7 = undefined;
                            if(var10) { _fun0003_ip = 176; continue _fun0003 }
 171:
                            var7 = var9.message;
 176:
                            var6 = var7;
                            if(!(var8 == var7)) { _fun0003_ip = 190; continue _fun0003 }
 183:
                            var4 = var4.message;
                            _fun0003_ip = 193; continue _fun0003;
 190:
                            var4 = var6;
 193:
                            var4 = var5.bind(var2)(var4);
 198:
                            var4 = _closure2_slot3;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
 209:
                            return var2;
 212:
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
            var24 = var1.bind(var4)();
            var _closure2_slot8 = var24;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0004_ip = 387; continue _fun0004 }
 10:
                            var5 = undefined;
                            var6 = undefined;
                            var7 = undefined;
                            var4 = _closure2_slot2;
                            var8 = null;
                            var4 = var4.bind(var5)(var8);
                            var4 = _closure2_slot3;
                            var10 = true;
                            var4 = var4.bind(var5)(var10);
                            var11 = _closure2_slot6;
                            var14 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var15 = 7;
                            var12 = var4[var15];
                            var12 = var14.bind(var5)(var12);
                            var13 = var12.intl;
                            var12 = var13.string;
                            var4 = var4[var15];
                            var4 = var14.bind(var5)(var4);
                            var4 = var4.t;
                            var4 = var4.LQdCQE;
                            var4 = var12.bind(var13)(var4);
                            var4 = var11.bind(var5)(var4);
 108: // try_start_0 // try_start_1
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var4 = 8;
                            var4 = var12[var4];
                            var4 = var11.bind(var5)(var4);
                            var12 = var4.HTTP;
                            var11 = var12.post;
                            var4 = {};
                            var13 = _closure1_slot7;
                            var13 = var13.LOGIN_SMS_SEND;
                            var4['url'] = var13;
                            var13 = {};
                            var14 = _closure2_slot0;
                            var14 = var14.ticket;
                            var13['ticket'] = var14;
                            var4['body'] = var13;
                            var4['oldFormErrors'] = var10;
                            var10 = false;
                            var4['rejectWithError'] = var10;
                            var4 = var11.bind(var12)(var4);
                            SaveGenerator(address=196);
 194:
                            return var4;
 196:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                            if(var11) { _fun0004_ip = 284; continue _fun0004 }
 202:
                            var11 = _closure2_slot6;
                            var12 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var13 = var9[var15];
                            var13 = var12.bind(var5)(var13);
                            var14 = var13.intl;
                            var13 = var14.formatToPlainString;
                            var9 = var9[var15];
                            var9 = var12.bind(var5)(var9);
                            var9 = var9.t;
                            var12 = var9.8r6h7+;
                            var9 = {};
                            var15 = var4.body;
                            var15 = var15.phone;
                            var9['phoneNumber'] = var15;
                            var9 = var13.bind(var14)(var12, var9);
                            var9 = var11.bind(var5)(var9);
 282: // try_end0
                            _fun0004_ip = 358; continue _fun0004;
 284: // try_end1
                            var9 = _closure2_slot3;
                            var9 = var9.bind(var5)(var10);
                            return var4;
 296: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=8);
                            var2 = var9;
                            var4 = _closure2_slot2;
                            var9 = var9.message;
                            var6 = var9;
                            if(!(var8 == var9)) { _fun0004_ip = 341; continue _fun0004 }
 317:
                            var2 = var2.body;
                            var7 = var2;
                            var8 = var8 == var2;
                            var2 = undefined;
                            if(var8) { _fun0004_ip = 339; continue _fun0004 }
 334:
                            var2 = var7.message;
 339:
                            _fun0004_ip = 344; continue _fun0004;
 341:
                            var2 = var6;
 344:
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure2_slot6;
                            var2 = var2.bind(var5)(var5);
 358: // try_end2
                            var4 = _closure2_slot3;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            return var5;
 372: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot3;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
 387:
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
            var23 = var1.bind(var4)();
            var3 = _closure1_slot8;
            var1 = 10;
            var1 = var19[var1];
            var2 = var8.bind(var4)(var1);
            var1 = {};
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var20 = var16.intl;
            var17 = var20.string;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.o4JNrK;
            var16 = var17.bind(var20)(var16);
            var1['headerText'] = var16;
            var1['subtitle'] = var5;
            var17 = _closure1_slot9;
            var16 = _closure1_slot6;
            var5 = {};
            var13 = var13.inputContainer;
            var5['style'] = var13;
            var13 = 11;
            var13 = var19[var13];
            var13 = var18.bind(var4)(var13);
            var21 = var13.TextInput;
            var20 = {'autoFocus': true, 'autoCapitalize': 'characters', 'maxLength': null, 'autoComplete': 'sms-otp', 'textContentType': 'oneTimeCode', 'keyboardType': 'number-pad'};
            var13 = 9;
            var25 = var19[var13];
            var25 = var18.bind(var4)(var25);
            var25 = var25.SMS_CODE_LENGTH;
            var20['maxLength'] = var25;
            var20['onChange'] = var24;
            var24 = var19[var15];
            var24 = var18.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var19[var15];
            var24 = var18.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24./sHnXV;
            var24 = var25.bind(var26)(var24);
            var20['label'] = var24;
            var24 = var19[var15];
            var24 = var18.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var19[var15];
            var24 = var18.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.HZPBOT;
            var24 = var25.bind(var26)(var24);
            var20['accessibilityLabel'] = var24;
            var24 = var19[var15];
            var24 = var18.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var19[var15];
            var24 = var18.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.tARzgo;
            var24 = var25.bind(var26)(var24);
            var20['placeholder'] = var24;
            var20['errorMessage'] = var22;
            var21 = var3.bind(var4)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var24 = 12;
            var21 = var19[var24];
            var22 = var8.bind(var4)(var21);
            var21 = {};
            var25 = var19[var15];
            var25 = var18.bind(var4)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var19[var15];
            var25 = var18.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.WbaP3t;
            var25 = var26.bind(var27)(var25);
            var21['text'] = var25;
            var25 = var19[var24];
            var25 = var8.bind(var4)(var25);
            var25 = var25.Looks;
            var25 = var25.LINK;
            var21['look'] = var25;
            var25 = var19[var24];
            var25 = var8.bind(var4)(var25);
            var25 = var25.Colors;
            var25 = var25.LINK;
            var21['color'] = var25;
            var24 = var19[var24];
            var24 = var8.bind(var4)(var24);
            var24 = var24.Sizes;
            var24 = var24.SMALL;
            var21['size'] = var24;
            var21['onPress'] = var23;
            var21 = var3.bind(var4)(var22, var21);
            var20[1] = var21;
            var5['children'] = var20;
            var5 = var17.bind(var4)(var16, var5);
            var1['input'] = var5;
            var5 = 13;
            var5 = var19[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var16 = 'primary';
            var5['variant'] = var16;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.geKm7u;
            var15 = var16.bind(var17)(var15);
            var5['text'] = var15;
            var15 = var9;
            if(var9) { _fun0001_ip = 906; continue _fun0001 }
 903:
            var15 = var12;
 906:
            var5['loading'] = var15;
            var14 = function onPress() {
                var3 = _closure2_slot8;
                var2 = _closure2_slot4;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onPress'] = var14;
            if(var9) { _fun0001_ip = 928; continue _fun0001 }
 925:
            var9 = var12;
 928:
            if(var9) { _fun0001_ip = 963; continue _fun0001 }
 931:
            var11 = var11.length;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var13];
            var10 = var12.bind(var4)(var10);
            var10 = var10.SMS_CODE_LENGTH;
            var9 = var11 !== var10;
 963:
            var5['disabled'] = var9;
            var5 = var3.bind(var4)(var8, var5);
            var1['submit'] = var5;
            var5 = {};
            var5['mfaChallenge'] = var7;
            var5['finish'] = var6;
            var1['screenProps'] = var5;
            var5 = 'sms';
            var1['mfaMethod'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();