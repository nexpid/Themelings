// app/modules/mfa/native/MFAModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function MFAModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var2 = var7.mfaChallenge;
            var _closure2_slot0 = var2;
            var13 = var7.finish;
            var _closure2_slot1 = var13;
            var12 = var7.cancel;
            var _closure2_slot2 = var12;
            var3 = var7.handleOnClose;
            var _closure2_slot3 = var3;
            var9 = var7.ignoreKeyboard;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var _closure2_slot4 = var9;
            var6 = {'mfaChallenge': 0, 'finish': 0, 'cancel': 0, 'handleOnClose': 0, 'ignoreKeyboard': 0};
            var15 = null;
            var16 = var6;
            var5 = silentSetPrototypeOf(var16, var15);
            var16 = {};
            var15 = var7;
            var14 = var6;
            var5 = copyDataProperties(var16, var15, var14);
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var10 = _closure1_slot4;
            var8 = var10.useMemo;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isMetaQuest;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var3;
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var2 = {};
                    var7 = var2;
                    var6 = var3;
                    var4 = copyDataProperties(var7, var6);
                    var5 = var3.methods;
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = 'webauthn';
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = 'methods';
                    var2[2] = var4;
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var2, var7);
            _closure2_slot5 = var10;
            var11 = _closure1_slot4;
            var8 = var11.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                            var8 = var2.mfaType;
                            var7 = var2.data;
                            var4 = undefined;
                            SaveGenerator(address=27);
case 9:
                            return var4;
case 10:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var5 = _closure2_slot1;
                            var3 = {};
                            var3['mfaType'] = var8;
                            var3['data'] = var7;
                            var6 = _closure2_slot5;
                            var6 = var6.ticket;
                            var3['ticket'] = var6;
                            var3 = var5.bind(var4)(var3);
                            SaveGenerator(address=75);
case 13:
                            return var3;
case 14:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 5;
                            var6 = var8[var6];
                            var7 = var7.bind(var4)(var6);
                            var6 = var7.popWithKey;
                            var5 = _closure1_slot7;
                            var5 = var6.bind(var7)(var5);
                            return var4;
case 15:
                            return var3;
case 11:
                            return var2;
case 7:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
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
            var7 = var2.bind(var4)();
            var2 = new Array(2);
            var2[0] = var13;
            var13 = var10.ticket;
            var2[1] = var13;
            var2 = var8.bind(var11)(var7, var2);
            _closure2_slot6 = var2;
            var11 = _closure1_slot4;
            var8 = var11.useCallback;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                    _fun0004_ip = 19; continue _fun0004;
case 17:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var4);
                    var6 = var7.popWithKey;
                    var4 = _closure1_slot7;
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure2_slot2;
                    if(!(var5 != var4)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var2 = _closure2_slot2;
                    var4 = global;
                    var5 = var4.Error;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 6;
                    var4 = var8[var1];
                    var4 = var7.bind(var3)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var1 = var8[var1];
                    var1 = var7.bind(var3)(var1);
                    var1 = var1.t;
                    var1 = var1.N2yb9a;
                    var9 = var4.bind(var6)(var1);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var10 = var4;
                    var1 = new var10[var5](var9, var8);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var1 = var2.bind(var3)(var1);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var8.bind(var11)(var3, var7);
            _closure2_slot7 = var11;
            var8 = _closure1_slot4;
            var7 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = {};
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.MfaScreens;
                    var1 = var1.SELECT;
                    var3['name'] = var1;
                    var1 = {};
                    var5 = _closure2_slot5;
                    var1['mfaChallenge'] = var5;
                    var5 = _closure2_slot6;
                    var1['finish'] = var5;
                    var3['params'] = var1;
                    var1 = _closure2_slot5;
                    var5 = var1.methods;
                    var1 = 0;
                    var5 = var5[var1];
                    var1 = null;
                    var6 = var1 == var5;
                    var1 = undefined;
                    if(var6) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                    var1 = var5.type;
case 21:
                    if(!(var2 !== var1)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var2 = {};
                    var2['name'] = var1;
                    var1 = {};
                    var5 = _closure2_slot5;
                    var1['mfaChallenge'] = var5;
                    var4 = _closure2_slot6;
                    var1['finish'] = var4;
                    var2['params'] = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0005_ip = 25; continue _fun0005;
case 23:
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 25:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var2, var3);
            var8 = _closure1_slot4;
            var3 = var8.useMemo;
            var2 = new Array(3);
            var2[0] = var11;
            var10 = var10.methods;
            var2[1] = var10;
            var2[2] = var9;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var8 = function headerRight() {
                        var4 = _closure1_slot6;
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 8;
                        var1 = var7[var1];
                        var3 = undefined;
                        var1 = var10.bind(var3)(var1);
                        var2 = var1.HeaderActionButton;
                        var1 = {};
                        var6 = 6;
                        var8 = var7[var6];
                        var8 = var10.bind(var3)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var6 = var7[var6];
                        var6 = var10.bind(var3)(var6);
                        var6 = var6.t;
                        var6 = var6.cpT0Cq;
                        var6 = var8.bind(var9)(var6);
                        var1['accessibilityLabel'] = var6;
                        var6 = _closure2_slot7;
                        var1['onPress'] = var6;
                        var6 = _closure1_slot1;
                        var5 = 9;
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var1['source'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var10 = {'fullscreen': true, 'ignoreKeyboard': null, 'headerTitle': ''};
                    var1 = _closure2_slot4;
                    var10['ignoreKeyboard'] = var1;
                    var1 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var13 = 7;
                    var5 = var2[var13];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var5);
                    var5 = var5.MfaScreens;
                    var12 = var5.SELECT;
                    var9 = {};
                    var23 = var9;
                    var22 = var10;
                    var5 = copyDataProperties(var23, var22);
                    var17 = 10;
                    var5 = var2[var17];
                    var7 = var3.bind(var6)(var5);
                    var5 = var7.getHeaderBackButton;
                    var5 = var5.bind(var7)();
                    var14 = 'headerLeft';
                    var9[13] = var5;
                    var7 = 'headerRight';
                    var9[6] = var8;
                    var16 = function render(arg1) {
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = arg1;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var5 = 'render';
                    var9[4] = var16;
                    var1[11] = var9;
                    var2 = var2[var13];
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.MfaScreens;
                    var3 = var2.WEBAUTHN;
                    var2 = {};
                    var23 = var2;
                    var22 = var10;
                    var9 = copyDataProperties(var23, var22);
                    var9 = _closure2_slot5;
                    var9 = var9.methods;
                    var12 = 0;
                    var18 = var9[var12];
                    var9 = null;
                    var19 = var9 == var18;
                    var16 = undefined;
                    if(var19) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var16 = var18.type;
case 26:
                    var19 = 'webauthn';
                    if(!(var19 !== var16)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var18 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var16 = var16[var17];
                    var18 = var18.bind(var6)(var16);
                    var16 = var18.getHeaderBackButton;
                    var16 = var16.bind(var18)();
                    _fun0006_ip = 30; continue _fun0006;
case 28:
                    var20 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var18 = var18[var17];
                    var21 = var20.bind(var6)(var18);
                    var20 = var21.getHeaderCloseButton;
                    var18 = _closure2_slot7;
                    var16 = var20.bind(var21)(var18);
case 30:
                    var2[13] = var16;
                    var16 = _closure2_slot5;
                    var16 = var16.methods;
                    var16 = var16[var12];
                    var20 = var9 == var16;
                    var18 = undefined;
                    if(var20) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var18 = var16.type;
case 31:
                    var16 = undefined;
                    if(!(var19 !== var18)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var16 = var8;
case 33:
                    var2[6] = var16;
                    var16 = function render(arg1) {
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 12;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = arg1;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2[4] = var16;
                    var1[2] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var13];
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.MfaScreens;
                    var3 = var2.TOTP;
                    var2 = {};
                    var23 = var2;
                    var22 = var10;
                    var16 = copyDataProperties(var23, var22);
                    var16 = _closure2_slot5;
                    var16 = var16.methods;
                    var18 = var16[var12];
                    var19 = var9 == var18;
                    var16 = undefined;
                    if(var19) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var16 = var18.type;
case 35:
                    var19 = 'totp';
                    if(!(var19 !== var16)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var18 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var16 = var16[var17];
                    var18 = var18.bind(var6)(var16);
                    var16 = var18.getHeaderBackButton;
                    var16 = var16.bind(var18)();
                    _fun0006_ip = 39; continue _fun0006;
case 37:
                    var20 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var18 = var18[var17];
                    var21 = var20.bind(var6)(var18);
                    var20 = var21.getHeaderCloseButton;
                    var18 = _closure2_slot7;
                    var16 = var20.bind(var21)(var18);
case 39:
                    var2[13] = var16;
                    var16 = _closure2_slot5;
                    var16 = var16.methods;
                    var16 = var16[var12];
                    var20 = var9 == var16;
                    var18 = undefined;
                    if(var20) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var18 = var16.type;
case 40:
                    var16 = undefined;
                    if(!(var19 !== var18)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var16 = var8;
case 42:
                    var2[6] = var16;
                    var16 = function render(arg1) {
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = arg1;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2[4] = var16;
                    var1[2] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var13];
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.MfaScreens;
                    var3 = var2.BACKUP;
                    var2 = {};
                    var23 = var2;
                    var22 = var10;
                    var16 = copyDataProperties(var23, var22);
                    var16 = _closure2_slot5;
                    var16 = var16.methods;
                    var18 = var16[var12];
                    var19 = var9 == var18;
                    var16 = undefined;
                    if(var19) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var16 = var18.type;
case 44:
                    var19 = 'backup';
                    if(!(var19 !== var16)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var18 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var16 = var16[var17];
                    var18 = var18.bind(var6)(var16);
                    var16 = var18.getHeaderBackButton;
                    var16 = var16.bind(var18)();
                    _fun0006_ip = 48; continue _fun0006;
case 46:
                    var20 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var18 = var18[var17];
                    var21 = var20.bind(var6)(var18);
                    var20 = var21.getHeaderCloseButton;
                    var18 = _closure2_slot7;
                    var16 = var20.bind(var21)(var18);
case 48:
                    var2[13] = var16;
                    var16 = _closure2_slot5;
                    var16 = var16.methods;
                    var16 = var16[var12];
                    var20 = var9 == var16;
                    var18 = undefined;
                    if(var20) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var18 = var16.type;
case 49:
                    var16 = undefined;
                    if(!(var19 !== var18)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var16 = var8;
case 51:
                    var2[6] = var16;
                    var16 = function render(arg1) {
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 14;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = arg1;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2[4] = var16;
                    var1[2] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var13];
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.MfaScreens;
                    var3 = var2.SMS;
                    var2 = {};
                    var23 = var2;
                    var22 = var10;
                    var16 = copyDataProperties(var23, var22);
                    var16 = _closure2_slot5;
                    var16 = var16.methods;
                    var18 = var16[var12];
                    var19 = var9 == var18;
                    var16 = undefined;
                    if(var19) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var16 = var18.type;
case 53:
                    var19 = 'sms';
                    if(!(var19 !== var16)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                    var18 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var16 = var16[var17];
                    var18 = var18.bind(var6)(var16);
                    var16 = var18.getHeaderBackButton;
                    var16 = var16.bind(var18)();
                    _fun0006_ip = 57; continue _fun0006;
case 55:
                    var20 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var18 = var18[var17];
                    var21 = var20.bind(var6)(var18);
                    var20 = var21.getHeaderCloseButton;
                    var18 = _closure2_slot7;
                    var16 = var20.bind(var21)(var18);
case 57:
                    var2[13] = var16;
                    var16 = _closure2_slot5;
                    var16 = var16.methods;
                    var16 = var16[var12];
                    var20 = var9 == var16;
                    var18 = undefined;
                    if(var20) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var18 = var16.type;
case 58:
                    var16 = undefined;
                    if(!(var19 !== var18)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var16 = var8;
case 60:
                    var2[6] = var16;
                    var16 = function render(arg1) {
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = arg1;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2[4] = var16;
                    var1[2] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var13];
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.MfaScreens;
                    var3 = var2.PASSWORD;
                    var2 = {};
                    var23 = var2;
                    var22 = var10;
                    var10 = copyDataProperties(var23, var22);
                    var10 = _closure2_slot5;
                    var10 = var10.methods;
                    var10 = var10[var12];
                    var16 = var9 == var10;
                    var13 = undefined;
                    if(var16) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                    var13 = var10.type;
case 62:
                    var10 = 'password';
                    if(!(var10 !== var13)) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                    var16 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var17];
                    var16 = var16.bind(var6)(var13);
                    var13 = var16.getHeaderBackButton;
                    var13 = var13.bind(var16)();
                    _fun0006_ip = 66; continue _fun0006;
case 64:
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var15 = var15[var17];
                    var17 = var16.bind(var6)(var15);
                    var16 = var17.getHeaderCloseButton;
                    var15 = _closure2_slot7;
                    var13 = var16.bind(var17)(var15);
case 66:
                    var2[13] = var13;
                    var11 = _closure2_slot5;
                    var11 = var11.methods;
                    var11 = var11[var12];
                    var12 = var9 == var11;
                    var9 = undefined;
                    if(var12) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                    var9 = var11.type;
case 67:
                    var6 = undefined;
                    if(!(var10 !== var9)) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                    var6 = var8;
case 69:
                    var2[6] = var6;
                    var4 = function render(arg1) {
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = arg1;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var2[4] = var4;
                    var1[2] = var2;
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 17;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Navigator;
            var1 = {};
            var1['screens'] = var8;
            var1['initialRouteStack'] = var7;
            var6 = _closure1_slot5;
            var6 = var6.dismiss;
            var1['onWillFocus'] = var6;
            var16 = var1;
            var15 = var5;
            var5 = copyDataProperties(var16, var15);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Keyboard;
    var _closure1_slot5 = var8;
    var9 = var5.LogBox;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot6 = var5;
    var8 = var9.ignoreLogs;
    var5 = ['Non-serializable values were found in the navigation state'];
    var5 = var8.bind(var9)(var5);
    var5 = 'MFA_MODAL_KEY';
    var _closure1_slot7 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/mfa/native/MFAModal.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MFAModal'] = var4;
    var2 = function openMFAModal(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 5;
        var5 = var4[var1];
        var1 = undefined;
        var8 = var3.bind(var1)(var5);
        var7 = var8.push;
        var6 = _closure1_slot8;
        var5 = {};
        var9 = arg1;
        var5['mfaChallenge'] = var9;
        var9 = arg2;
        var5['finish'] = var9;
        var9 = arg3;
        var5['cancel'] = var9;
        var2 = _closure1_slot7;
        var2 = var7.bind(var8)(var6, var5, var2);
        var2 = 18;
        var2 = var4[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.close;
        var2 = var2.bind(var3)();
        return var1;
    };
    var3['openMFAModal'] = var2;
    return var1;
})();