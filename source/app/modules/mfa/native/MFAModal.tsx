// app/modules/mfa/native/MFAModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function MFAModal(arg1) {
        var2 = arg1;
        var8 = var2.mfaChallenge;
        var _closure2_slot0 = var8;
        var11 = var2.finish;
        var _closure2_slot1 = var11;
        var10 = var2.cancel;
        var _closure2_slot2 = var10;
        var3 = var2.handleOnClose;
        var _closure2_slot3 = var3;
        var9 = _closure1_slot4;
        var7 = var9.useCallback;
        var2 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 128; continue _fun0001 }
 10:
                        var8 = var2.mfaType;
                        var7 = var2.data;
                        var4 = undefined;
                        SaveGenerator(address=27);
 25:
                        return var4;
 27:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0001_ip = 125; continue _fun0001 }
 33:
                        var5 = _closure2_slot1;
                        var3 = {};
                        var3['mfaType'] = var8;
                        var3['data'] = var7;
                        var6 = _closure2_slot0;
                        var6 = var6.ticket;
                        var3['ticket'] = var6;
                        var3 = var5.bind(var4)(var3);
                        SaveGenerator(address=75);
 73:
                        return var3;
 75:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0001_ip = 122; continue _fun0001 }
 81:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 4;
                        var6 = var8[var6];
                        var7 = var7.bind(var4)(var6);
                        var6 = var7.popWithKey;
                        var5 = _closure1_slot7;
                        var5 = var6.bind(var7)(var5);
                        return var4;
 122:
                        return var3;
 125:
                        return var2;
 128:
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
        var4 = undefined;
        var6 = var2.bind(var4)();
        var2 = new Array(2);
        var2[0] = var11;
        var11 = var8.ticket;
        var2[1] = var11;
        var2 = var7.bind(var9)(var6, var2);
        var _closure2_slot4 = var2;
        var9 = _closure1_slot4;
        var7 = var9.useCallback;
        var6 = new Array(2);
        var6[0] = var10;
        var6[1] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot3;
                var5 = null;
                if(!(var5 != var1)) { _fun0002_ip = 28; continue _fun0002 }
 13:
                var3 = _closure2_slot3;
                var1 = undefined;
                var1 = var3.bind(var1)();
                _fun0002_ip = 168; continue _fun0002;
 28:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var6.bind(var3)(var4);
                var6 = var7.popWithKey;
                var4 = _closure1_slot7;
                var4 = var6.bind(var7)(var4);
                var4 = _closure2_slot2;
                if(!(var5 != var4)) { _fun0002_ip = 168; continue _fun0002 }
 76:
                var2 = _closure2_slot2;
                var4 = global;
                var5 = var4.Error;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 5;
                var4 = var8[var1];
                var4 = var7.bind(var3)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.N2yb9f;
                var9 = var4.bind(var6)(var1);
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var10 = var4;
                var1 = new var10[var5](var9, var8);
                var1 = var1 instanceof Object ? var1 : var4;
                var1 = var2.bind(var3)(var1);
 168:
                var1 = undefined;
                return var1;
            }
        };
        var9 = var7.bind(var9)(var3, var6);
        var _closure2_slot5 = var9;
        var7 = _closure1_slot4;
        var6 = var7.useMemo;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var2;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.MfaScreens;
                var2 = var2.SELECT;
                var3['name'] = var2;
                var4 = {};
                var2 = _closure2_slot0;
                var4['mfaChallenge'] = var2;
                var6 = _closure2_slot4;
                var4['finish'] = var6;
                var3['params'] = var4;
                var4 = var2.methods;
                var2 = 0;
                var2 = var4[var2];
                var4 = null;
                var6 = var4 == var2;
                var4 = undefined;
                if(var6) { _fun0003_ip = 99; continue _fun0003 }
 94:
                var4 = var2.type;
 99:
                if(!(var1 !== var4)) { _fun0003_ip = 148; continue _fun0003 }
 103:
                var1 = new Array(2);
                var1[0] = var3;
                var2 = {};
                var2['name'] = var4;
                var4 = {};
                var6 = _closure2_slot0;
                var4['mfaChallenge'] = var6;
                var5 = _closure2_slot4;
                var4['finish'] = var5;
                var2['params'] = var4;
                var1[1] = var2;
                _fun0003_ip = 159; continue _fun0003;
 148:
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 159:
                return var1;
            }
        };
        var6 = var6.bind(var7)(var2, var3);
        var7 = _closure1_slot4;
        var3 = var7.useMemo;
        var2 = new Array(2);
        var2[0] = var9;
        var8 = var8.methods;
        var2[1] = var8;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = function headerRight() {
                    var4 = _closure1_slot6;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 7;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var10.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var6 = 5;
                    var8 = var7[var6];
                    var8 = var10.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var6 = var7[var6];
                    var6 = var10.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.cpT0Cg;
                    var6 = var8.bind(var9)(var6);
                    var1['accessibilityLabel'] = var6;
                    var6 = _closure2_slot5;
                    var1['onPress'] = var6;
                    var6 = _closure1_slot1;
                    var5 = 8;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var1['source'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1 = {};
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 6;
                var7 = var2[var8];
                var5 = undefined;
                var7 = var3.bind(var5)(var7);
                var7 = var7.MfaScreens;
                var9 = var7.SELECT;
                var7 = {'fullscreen': true, 'headerTitle': ''};
                var14 = 9;
                var10 = var2[var14];
                var11 = var3.bind(var5)(var10);
                var10 = var11.getHeaderBackButton;
                var10 = var10.bind(var11)();
                var7['headerLeft'] = var10;
                var7['headerRight'] = var6;
                var10 = function render(arg1) {
                    var4 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
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
                var7['render'] = var10;
                var1[var9] = var7;
                var2 = var2[var8];
                var2 = var3.bind(var5)(var2);
                var2 = var2.MfaScreens;
                var3 = var2.WEBAUTHN;
                var2 = {'fullscreen': true, 'headerTitle': ''};
                var7 = _closure2_slot0;
                var7 = var7.methods;
                var10 = 0;
                var13 = var7[var10];
                var7 = null;
                var15 = var7 == var13;
                var11 = undefined;
                if(var15) { _fun0004_ip = 181; continue _fun0004 }
 176:
                var11 = var13.type;
 181:
                var15 = 'webauthn';
                if(!(var15 !== var11)) { _fun0004_ip = 218; continue _fun0004 }
 189:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var14];
                var13 = var13.bind(var5)(var11);
                var11 = var13.getHeaderBackButton;
                var11 = var11.bind(var13)();
                _fun0004_ip = 250; continue _fun0004;
 218:
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var14];
                var17 = var16.bind(var5)(var13);
                var16 = var17.getHeaderCloseButton;
                var13 = _closure2_slot5;
                var11 = var16.bind(var17)(var13);
 250:
                var2['headerLeft'] = var11;
                var11 = _closure2_slot0;
                var11 = var11.methods;
                var11 = var11[var10];
                var16 = var7 == var11;
                var13 = undefined;
                if(var16) { _fun0004_ip = 283; continue _fun0004 }
 278:
                var13 = var11.type;
 283:
                var11 = undefined;
                if(!(var15 !== var13)) { _fun0004_ip = 292; continue _fun0004 }
 289:
                var11 = var6;
 292:
                var2['headerRight'] = var11;
                var11 = function render(arg1) {
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
                var2['render'] = var11;
                var1[var3] = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var3.bind(var5)(var2);
                var2 = var2.MfaScreens;
                var3 = var2.TOTP;
                var2 = {'fullscreen': true, 'headerTitle': ''};
                var11 = _closure2_slot0;
                var11 = var11.methods;
                var13 = var11[var10];
                var15 = var7 == var13;
                var11 = undefined;
                if(var15) { _fun0004_ip = 385; continue _fun0004 }
 380:
                var11 = var13.type;
 385:
                var15 = 'totp';
                if(!(var15 !== var11)) { _fun0004_ip = 422; continue _fun0004 }
 393:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var14];
                var13 = var13.bind(var5)(var11);
                var11 = var13.getHeaderBackButton;
                var11 = var11.bind(var13)();
                _fun0004_ip = 454; continue _fun0004;
 422:
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var14];
                var17 = var16.bind(var5)(var13);
                var16 = var17.getHeaderCloseButton;
                var13 = _closure2_slot5;
                var11 = var16.bind(var17)(var13);
 454:
                var2['headerLeft'] = var11;
                var11 = _closure2_slot0;
                var11 = var11.methods;
                var11 = var11[var10];
                var16 = var7 == var11;
                var13 = undefined;
                if(var16) { _fun0004_ip = 487; continue _fun0004 }
 482:
                var13 = var11.type;
 487:
                var11 = undefined;
                if(!(var15 !== var13)) { _fun0004_ip = 496; continue _fun0004 }
 493:
                var11 = var6;
 496:
                var2['headerRight'] = var11;
                var11 = function render(arg1) {
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
                var2['render'] = var11;
                var1[var3] = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var3.bind(var5)(var2);
                var2 = var2.MfaScreens;
                var3 = var2.BACKUP;
                var2 = {'fullscreen': true, 'headerTitle': ''};
                var11 = _closure2_slot0;
                var11 = var11.methods;
                var13 = var11[var10];
                var15 = var7 == var13;
                var11 = undefined;
                if(var15) { _fun0004_ip = 589; continue _fun0004 }
 584:
                var11 = var13.type;
 589:
                var15 = 'backup';
                if(!(var15 !== var11)) { _fun0004_ip = 626; continue _fun0004 }
 597:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var14];
                var13 = var13.bind(var5)(var11);
                var11 = var13.getHeaderBackButton;
                var11 = var11.bind(var13)();
                _fun0004_ip = 658; continue _fun0004;
 626:
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var14];
                var17 = var16.bind(var5)(var13);
                var16 = var17.getHeaderCloseButton;
                var13 = _closure2_slot5;
                var11 = var16.bind(var17)(var13);
 658:
                var2['headerLeft'] = var11;
                var11 = _closure2_slot0;
                var11 = var11.methods;
                var11 = var11[var10];
                var16 = var7 == var11;
                var13 = undefined;
                if(var16) { _fun0004_ip = 691; continue _fun0004 }
 686:
                var13 = var11.type;
 691:
                var11 = undefined;
                if(!(var15 !== var13)) { _fun0004_ip = 700; continue _fun0004 }
 697:
                var11 = var6;
 700:
                var2['headerRight'] = var11;
                var11 = function render(arg1) {
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
                var2['render'] = var11;
                var1[var3] = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var3.bind(var5)(var2);
                var2 = var2.MfaScreens;
                var3 = var2.SMS;
                var2 = {'fullscreen': true, 'headerTitle': ''};
                var11 = _closure2_slot0;
                var11 = var11.methods;
                var13 = var11[var10];
                var15 = var7 == var13;
                var11 = undefined;
                if(var15) { _fun0004_ip = 793; continue _fun0004 }
 788:
                var11 = var13.type;
 793:
                var15 = 'sms';
                if(!(var15 !== var11)) { _fun0004_ip = 830; continue _fun0004 }
 801:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var14];
                var13 = var13.bind(var5)(var11);
                var11 = var13.getHeaderBackButton;
                var11 = var11.bind(var13)();
                _fun0004_ip = 862; continue _fun0004;
 830:
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var14];
                var17 = var16.bind(var5)(var13);
                var16 = var17.getHeaderCloseButton;
                var13 = _closure2_slot5;
                var11 = var16.bind(var17)(var13);
 862:
                var2['headerLeft'] = var11;
                var11 = _closure2_slot0;
                var11 = var11.methods;
                var11 = var11[var10];
                var16 = var7 == var11;
                var13 = undefined;
                if(var16) { _fun0004_ip = 895; continue _fun0004 }
 890:
                var13 = var11.type;
 895:
                var11 = undefined;
                if(!(var15 !== var13)) { _fun0004_ip = 904; continue _fun0004 }
 901:
                var11 = var6;
 904:
                var2['headerRight'] = var11;
                var11 = function render(arg1) {
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
                var2['render'] = var11;
                var1[var3] = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var3.bind(var5)(var2);
                var2 = var2.MfaScreens;
                var3 = var2.PASSWORD;
                var2 = {'fullscreen': true, 'headerTitle': ''};
                var8 = _closure2_slot0;
                var8 = var8.methods;
                var8 = var8[var10];
                var13 = var7 == var8;
                var11 = undefined;
                if(var13) { _fun0004_ip = 997; continue _fun0004 }
 992:
                var11 = var8.type;
 997:
                var8 = 'password';
                if(!(var8 !== var11)) { _fun0004_ip = 1034; continue _fun0004 }
 1005:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var14];
                var13 = var13.bind(var5)(var11);
                var11 = var13.getHeaderBackButton;
                var11 = var11.bind(var13)();
                _fun0004_ip = 1066; continue _fun0004;
 1034:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var14];
                var14 = var13.bind(var5)(var12);
                var13 = var14.getHeaderCloseButton;
                var12 = _closure2_slot5;
                var11 = var13.bind(var14)(var12);
 1066:
                var2['headerLeft'] = var11;
                var9 = _closure2_slot0;
                var9 = var9.methods;
                var9 = var9[var10];
                var10 = var7 == var9;
                var7 = undefined;
                if(var10) { _fun0004_ip = 1099; continue _fun0004 }
 1094:
                var7 = var9.type;
 1099:
                var5 = undefined;
                if(!(var8 !== var7)) { _fun0004_ip = 1108; continue _fun0004 }
 1105:
                var5 = var6;
 1108:
                var2['headerRight'] = var5;
                var4 = function render(arg1) {
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
                var2['render'] = var4;
                var1[var3] = var2;
                return var1;
            }
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot6;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 16;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var7;
        var1['initialRouteStack'] = var6;
        var5 = _closure1_slot5;
        var5 = var5.dismiss;
        var1['onWillFocus'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
    var5 = native4;
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
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/mfa/native/MFAModal.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MFAModal'] = var4;
    var2 = function openMFAModal(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 4;
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
        var2 = 17;
        var2 = var4[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.close;
        var2 = var2.bind(var3)();
        return var1;
    };
    var3['openMFAModal'] = var2;
    return var1;
})();