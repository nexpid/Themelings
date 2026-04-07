// app/modules/age_assurance/native/GoogleWalletVerificationScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityIndicator;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/native/GoogleWalletVerificationScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GoogleWalletVerificationScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.onClose;
            var1 = var1.modalSessionId;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var5 = undefined;
            var2 = var3.bind(var5)(var1);
            var1 = var2.useNavigation;
            var7 = var1.bind(var2)();
            var _closure2_slot1 = var7;
            var6 = _closure1_slot5;
            var9 = var6.useState;
            var1 = {};
            var2 = 'loading';
            var1['type'] = var2;
            var10 = var9.bind(var6)(var1);
            var9 = _closure1_slot4;
            var1 = 2;
            var9 = var9.bind(var5)(var10, var1);
            var1 = 0;
            var12 = var9[var1];
            var1 = 1;
            var1 = var9[var1];
            var _closure2_slot2 = var1;
            var1 = 6;
            var1 = var8[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useWatchAgeVerificationStatusChange;
            var1 = var1.bind(var3)(var4);
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var2 = _closure2_slot1;
                var1 = var2.goBack;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var8 = var4.bind(var6)(var1, var3);
            var _closure2_slot3 = var8;
            var4 = var6.useCallback;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = undefined;
                        var2 = undefined;
                        var5 = undefined;
case 4: // try_start_0
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var9 = 7;
                        var4 = var4[var9];
                        var6 = var6.bind(var3)(var4);
                        var4 = var6.requestGoogleWalletVerification;
                        var4 = var4.bind(var6)();
                        SaveGenerator(address=53);
case 5:
                        return var4;
case 6:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var10 = var4.request_json;
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var9];
                        var8 = var8.bind(var3)(var6);
                        var6 = var8.getGoogleWalletCredential;
                        var6 = var6.bind(var8)(var10);
                        SaveGenerator(address=99);
case 9:
                        return var6;
case 10:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                        if(var8) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var8 = var8.bind(var3)(var7);
                        var7 = var8.verifyGoogleWalletCredential;
                        var7 = var7.bind(var8)(var6);
                        SaveGenerator(address=137);
case 13:
                        return var7;
case 14:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                        if(var8) { _fun0002_ip = 15; continue _fun0002 }
case 16: // try_end0
                        _fun0002_ip = 17; continue _fun0002;
case 15:
                        return var7;
case 11:
                        return var6;
case 7:
                        return var4;
case 18: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var5 = var4;
                        var6 = null;
                        var4 = var6 == var4;
                        var7 = undefined;
                        if(var4) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                        var4 = var5;
                        var7 = var4.code;
case 19:
                        var4 = 'CANCELLED';
                        if(!(var4 !== var7)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                        var4 = var5;
                        var7 = var6 == var4;
                        var4 = undefined;
                        if(var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                        var5 = var5.body;
                        var2 = var5;
                        var5 = var6 == var5;
                        var4 = undefined;
                        if(var5) { _fun0002_ip = 23; continue _fun0002 }
case 25:
                        var4 = var2.reason;
case 23:
                        var2 = 'unsupported_issuing_country';
                        if(!(var2 !== var4)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                        var4 = _closure2_slot2;
                        var2 = {};
                        var5 = 'error';
                        var2['type'] = var5;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 8;
                        var6 = var9[var6];
                        var6 = var7.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var8 = _closure1_slot1;
                        var5 = 9;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5["+pwfOA"];
                        var5 = var6.bind(var7)(var5);
                        var2['message'] = var5;
                        var2 = var4.bind(var3)(var2);
case 17:
                        return var3;
case 26:
                        var4 = _closure2_slot2;
                        var2 = {};
                        var5 = 'error';
                        var2['type'] = var5;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 8;
                        var6 = var9[var6];
                        var6 = var7.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var8 = _closure1_slot1;
                        var5 = 9;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.Pf5xUq;
                        var5 = var6.bind(var7)(var5);
                        var2['message'] = var5;
                        var2 = var4.bind(var3)(var2);
                        var2 = undefined;
                        return var2;
case 21:
                        var2 = _closure2_slot3;
                        var2 = var2.bind(var3)();
                        var2 = undefined;
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var5)(var1);
            var1 = new Array(1);
            var1[0] = var8;
            var1 = var4.bind(var6)(var3, var1);
            var _closure2_slot4 = var1;
            var4 = var6.useRef;
            var3 = false;
            var3 = var4.bind(var6)(var3);
            var _closure2_slot5 = var3;
            var4 = var6.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var1;
            var1 = function() {
                var5 = _closure2_slot1;
                var4 = var5.addListener;
                var3 = 'transitionEnd';
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot5;
                        var2 = var2.current;
                        if(var2) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                        var3 = arg1;
                        var3 = var3.data;
                        var4 = var3.closing;
                        var3 = true;
                        var2 = var3 === var4;
case 28:
                        if(var2) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                        var3 = _closure2_slot5;
                        var2 = true;
                        var3['current'] = var2;
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot5;
                        var2 = var2.current;
                        if(var2) { _fun0004_ip = 32; continue _fun0004 }
case 29:
                        var3 = _closure2_slot5;
                        var2 = true;
                        var3['current'] = var2;
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 1000;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot1 = var2;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var3 = global;
                    var3 = var3.clearTimeout;
                    var2 = _closure3_slot1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var1 = var4.bind(var6)(var1, var3);
            var1 = var12.type;
            if(!(var2 !== var1)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var3 = _closure1_slot7;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 10;
            var1 = var21[var1];
            var1 = var18.bind(var5)(var1);
            var2 = var1.ModalScreen;
            var1 = {};
            var4 = 11;
            var4 = var21[var4];
            var4 = var18.bind(var5)(var4);
            var6 = var4.ModalContent;
            var4 = {};
            var9 = _closure1_slot8;
            var7 = 12;
            var7 = var21[var7];
            var7 = var18.bind(var5)(var7);
            var8 = var7.Stack;
            var7 = {'align': 'center', 'justify': 'center', 'spacing': 16};
            var10 = 13;
            var10 = var21[var10];
            var10 = var18.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/medium', 'color': 'text-strong'};
            var12 = var12.message;
            var10['children'] = var12;
            var11 = var3.bind(var5)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = 14;
            var11 = var21[var11];
            var11 = var18.bind(var5)(var11);
            var12 = var11.ButtonGroup;
            var11 = {};
            var13 = 15;
            var13 = var21[var13];
            var13 = var18.bind(var5)(var13);
            var15 = var13.Button;
            var13 = {'variant': 'primary', 'size': 'lg'};
            var17 = 8;
            var17 = var21[var17];
            var17 = var18.bind(var5)(var17);
            var19 = var17.intl;
            var18 = var19.string;
            var20 = _closure1_slot1;
            var17 = 9;
            var17 = var21[var17];
            var17 = var20.bind(var5)(var17);
            var17 = var17.fEUKEv;
            var17 = var18.bind(var19)(var17);
            var13['text'] = var17;
            var16 = function onPress() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 16;
                var2 = var9[var3];
                var1 = undefined;
                var7 = var8.bind(var1)(var2);
                var6 = var7.trackAgeVerificationModalClicked;
                var5 = _closure2_slot0;
                var4 = var9[var3];
                var4 = var8.bind(var1)(var4);
                var4 = var4.AgeVerificationModalVersion;
                var4 = var4.EXPRESSIVE_PRIMARY;
                var3 = var9[var3];
                var3 = var8.bind(var1)(var3);
                var3 = var3.AgeVerificationModalCta;
                var3 = var3.METHOD_SELECT;
                var3 = var6.bind(var7)(var5, var4, var3);
                var2 = _closure2_slot3;
                var2 = var2.bind(var1)();
                return var1;
            };
            var13['onPress'] = var16;
            var13 = var3.bind(var5)(var15, var13);
            var11['children'] = var13;
            var11 = var3.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var4['children'] = var7;
            var4 = var3.bind(var5)(var6, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 35; continue _fun0001;
case 33:
            var4 = _closure1_slot7;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 10;
            var2 = var18[var2];
            var2 = var16.bind(var5)(var2);
            var3 = var2.ModalScreen;
            var2 = {};
            var6 = 11;
            var6 = var18[var6];
            var6 = var16.bind(var5)(var6);
            var7 = var6.ModalContent;
            var6 = {};
            var10 = _closure1_slot8;
            var8 = 12;
            var8 = var18[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.Stack;
            var8 = {'align': 'center', 'justify': 'center', 'spacing': 16};
            var12 = _closure1_slot6;
            var11 = {};
            var13 = 'large';
            var11['size'] = var13;
            var12 = var4.bind(var5)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var12 = 13;
            var12 = var18[var12];
            var12 = var16.bind(var5)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-md/medium', 'color': 'text-strong'};
            var15 = 8;
            var15 = var18[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var17 = _closure1_slot1;
            var14 = 9;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.MlFuBI;
            var14 = var15.bind(var16)(var14);
            var12['children'] = var14;
            var12 = var4.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 35:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();