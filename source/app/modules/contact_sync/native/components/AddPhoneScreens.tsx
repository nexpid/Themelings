// app/modules/contact_sync/native/components/AddPhoneScreens.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useContactSyncModalStore;
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
    var10 = 8;
    var11 = var6[var10];
    var11 = var5.bind(var1)(var11);
    var14 = var11.NAV_BAR_HEIGHT;
    var11 = 32;
    var14 = var14 + var11;
    var9['paddingTop'] = var14;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var12 = 9;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var10 = var10 + var11;
    var9['paddingTop'] = var10;
    var4['redesignContainer'] = var9;
    var9 = {};
    var10 = 'center';
    var9['alignItems'] = var10;
    var4['header'] = var9;
    var9 = {'height': 144, 'width': 300, 'marginVertical': 16};
    var4['art'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['title'] = var9;
    var9 = {'marginTop': 8, 'lineHeight': 18, 'textAlign': 'center'};
    var4['subtitle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/contact_sync/native/components/AddPhoneScreens.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function AddPhoneScreen() {
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 10;
        var2 = var9[var2];
        var4 = undefined;
        var3 = var8.bind(var4)(var2);
        var2 = var3.useNavigation;
        var2 = var2.bind(var3)();
        var _closure2_slot0 = var2;
        var2 = _closure1_slot11;
        var7 = var2.bind(var4)();
        var10 = _closure1_slot10;
        var6 = _closure1_slot6;
        var2 = {};
        var3 = var7.header;
        var2['style'] = var3;
        var3 = _closure1_slot9;
        var12 = 11;
        var11 = var9[var12];
        var11 = var8.bind(var4)(var11);
        var13 = var11.Text;
        var11 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
        var14 = var7.title;
        var11['style'] = var14;
        var14 = 12;
        var15 = var9[var14];
        var15 = var8.bind(var4)(var15);
        var17 = var15.intl;
        var16 = var17.string;
        var15 = var9[var14];
        var15 = var8.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.Xgb49/;
        var15 = var16.bind(var17)(var15);
        var11['children'] = var15;
        var13 = var3.bind(var4)(var13, var11);
        var11 = new Array(2);
        var11[0] = var13;
        var12 = var9[var12];
        var12 = var8.bind(var4)(var12);
        var13 = var12.Text;
        var12 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
        var15 = var7.subtitle;
        var12['style'] = var15;
        var15 = var9[var14];
        var15 = var8.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var9[var14];
        var14 = var8.bind(var4)(var14);
        var14 = var14.t;
        var14 = var14.qFmzys;
        var14 = var15.bind(var16)(var14);
        var12['children'] = var14;
        var12 = var3.bind(var4)(var13, var12);
        var11[1] = var12;
        var2['children'] = var11;
        var6 = var10.bind(var4)(var6, var2);
        var2 = _closure1_slot1;
        var1 = 13;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var7 = var7.container;
        var1['style'] = var7;
        var7 = 14;
        var7 = var9[var7];
        var7 = var8.bind(var4)(var7);
        var7 = var7.ChangePhoneReason;
        var7 = var7.CONTACT_SYNC;
        var1['reason'] = var7;
        var1['header'] = var6;
        var5 = function onComplete(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.submitPhone;
            var2 = _closure2_slot0;
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['onComplete'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['AddPhoneScreen'] = var4;
    var4 = function VerifyPhoneScreen() {
        var2 = _closure1_slot11;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var11 = _closure1_slot5;
        var3 = var11.useState;
        var2 = false;
        var7 = var3.bind(var11)(var2);
        var3 = _closure1_slot4;
        var2 = 2;
        var3 = var3.bind(var4)(var7, var2);
        var2 = 0;
        var7 = var3[var2];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot0 = var2;
        var2 = _closure1_slot8;
        var2 = var2.bind(var4)();
        var8 = var2.phone;
        var3 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 10;
        var2 = var9[var2];
        var10 = var3.bind(var4)(var2);
        var2 = var10.useNavigation;
        var12 = var2.bind(var10)();
        var _closure2_slot1 = var12;
        var2 = 16;
        var2 = var9[var2];
        var13 = var3.bind(var4)(var2);
        var10 = var13.useStateFromStores;
        var2 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0001_ip = 33; continue _fun0001 }
 27:
                var1 = var2.phone;
 33:
                return var1;
            }
        };
        var2 = var10.bind(var13)(var3, var2);
        var _closure2_slot2 = var2;
        var10 = var11.useEffect;
        var3 = new Array(3);
        var3[0] = var12;
        var3[1] = var8;
        var3[2] = var2;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = null;
                var _closure3_slot0 = var4;
                var3 = _closure2_slot2;
                if(!(var4 != var3)) { _fun0002_ip = 81; continue _fun0002 }
 19:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 15;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.handlePhoneVerificationComplete;
                var3 = _closure2_slot2;
                var2 = _closure2_slot1;
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.then;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runAfterInteractions;
                    var2 = function() {
                        var3 = _closure2_slot0;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    _closure3_slot0 = var3;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
 81:
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure3_slot0;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0003_ip = 23; continue _fun0003 }
 13:
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var2 = var10.bind(var11)(var2, var3);
        var2 = _closure1_slot1;
        var3 = 18;
        var3 = var9[var3];
        var11 = var2.bind(var4)(var3);
        var3 = null;
        var10 = var3 != var8;
        var3 = "Phone shouldn't be null when trying to verify the code";
        var3 = var11.bind(var4)(var10, var3);
        var3 = _closure1_slot9;
        var1 = 19;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['phone'] = var8;
        var1['loading'] = var7;
        var6 = var6.redesignContainer;
        var1['backgroundStyle'] = var6;
        var6 = true;
        var1['disableKeyboardAvoidingView'] = var6;
        var6 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 108; continue _fun0004 }
 7:
                        var3 = _closure2_slot0;
                        var6 = undefined;
                        var2 = true;
                        var2 = var3.bind(var6)(var2);
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 15;
                        var2 = var5[var2];
                        var5 = var3.bind(var6)(var2);
                        var3 = var5.verifyPhone;
                        var2 = arg1;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address=64);
 62:
                        return var2;
 64:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 105; continue _fun0004 }
 70:
                        var3 = var2.codeIntercepted;
                        var5 = var2.addedPhone;
                        if(!var5) { _fun0004_ip = 88; continue _fun0004 }
 85:
                        var5 = var3;
 88:
                        if(var5) { _fun0004_ip = 102; continue _fun0004 }
 91:
                        var5 = _closure2_slot0;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
 102:
                        return var3;
 105:
                        return var2;
 108:
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
        var6 = var6.bind(var4)();
        var1['onCodeEnteredIntercept'] = var6;
        var5 = function onVerified(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.verifyPhoneWithPassword;
            var3 = _closure2_slot1;
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var1['onVerified'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['VerifyPhoneScreen'] = var4;
    var2 = function VerifyPasswordScreen() {
        var11 = _closure1_slot5;
        var3 = var11.useState;
        var2 = false;
        var6 = var3.bind(var11)(var2);
        var3 = _closure1_slot4;
        var4 = undefined;
        var2 = 2;
        var3 = var3.bind(var4)(var6, var2);
        var2 = 0;
        var7 = var3[var2];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 10;
        var2 = var8[var2];
        var6 = var3.bind(var4)(var2);
        var2 = var6.useNavigation;
        var12 = var2.bind(var6)();
        var _closure2_slot1 = var12;
        var2 = _closure1_slot11;
        var6 = var2.bind(var4)();
        var2 = _closure1_slot8;
        var2 = var2.bind(var4)();
        var9 = var2.phoneToken;
        var _closure2_slot2 = var9;
        var2 = 16;
        var2 = var8[var2];
        var13 = var3.bind(var4)(var2);
        var10 = var13.useStateFromStores;
        var2 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 33; continue _fun0005 }
 27:
                var1 = var2.phone;
 33:
                return var1;
            }
        };
        var2 = var10.bind(var13)(var3, var2);
        var _closure2_slot3 = var2;
        var10 = var11.useEffect;
        var3 = new Array(2);
        var3[0] = var12;
        var3[1] = var2;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = null;
                var _closure3_slot0 = var4;
                var3 = _closure2_slot3;
                if(!(var4 != var3)) { _fun0006_ip = 81; continue _fun0006 }
 19:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 15;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.handlePhoneVerificationComplete;
                var3 = _closure2_slot3;
                var2 = _closure2_slot1;
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.then;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runAfterInteractions;
                    var2 = function() {
                        var3 = _closure2_slot0;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    _closure3_slot0 = var3;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
 81:
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = _closure3_slot0;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0007_ip = 23; continue _fun0007 }
 13:
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var2 = var10.bind(var11)(var2, var3);
        var2 = _closure1_slot1;
        var3 = 18;
        var3 = var8[var3];
        var10 = var2.bind(var4)(var3);
        var3 = null;
        var9 = var3 != var9;
        var3 = "Phone token shouldn't be null when trying to verify the password";
        var3 = var10.bind(var4)(var9, var3);
        var3 = _closure1_slot9;
        var1 = 20;
        var1 = var8[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var8 = true;
        var1['hideUnverifiedBanner'] = var8;
        var1['parentLoading'] = var7;
        var6 = var6.redesignContainer;
        var1['style'] = var6;
        var6 = function onSubmit(arg1) {
            var2 = _closure2_slot0;
            var6 = undefined;
            var1 = true;
            var1 = var2.bind(var6)(var1);
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 14;
            var4 = var7[var1];
            var5 = var5.bind(var6)(var4);
            var4 = var5.addPhone;
            var3 = _closure2_slot2;
            var2 = _closure1_slot0;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.ChangePhoneReason;
            var2 = var1.CONTACT_SYNC;
            var1 = arg1;
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        };
        var1['onSubmit'] = var6;
        var6 = function onError() {
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = false;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1['onError'] = var6;
        var5 = function onSuccess() {
            var1 = undefined;
            return var1;
        };
        var1['onSuccess'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['VerifyPasswordScreen'] = var2;
    return var1;
})();