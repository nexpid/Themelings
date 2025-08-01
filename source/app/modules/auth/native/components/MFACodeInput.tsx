// app/modules/auth/native/components/MFACodeInput.tsx
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
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot5 = var8;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppStates;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.Fragment;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var11 = 20;
    var12 = 'center';
    var10 = {'marginTop': 20, 'flexDirection': 'row', 'justifyContent': 'center', 'alignSelf': 'stretch'};
    var4['inputContainer'] = var10;
    var10 = {'flex': 1, 'maxWidth': 336, 'flexDirection': 'row', 'alignSelf': 'stretch'};
    var4['input'] = var10;
    var10 = {};
    var10['justifyContent'] = var12;
    var4['title'] = var10;
    var10 = {'flex': 1, 'maxHeight': 20, 'alignItems': 'center', 'marginTop': 8};
    var4['status'] = var10;
    var10 = {};
    var12 = 7;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.RED_400;
    var10['color'] = var12;
    var4['error'] = var10;
    var10 = {};
    var10['minHeight'] = var11;
    var4['minHeightGuard'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var21 = var3.appState;
            var _closure2_slot0 = var21;
            var2 = var3.handleSubmit;
            var _closure2_slot1 = var2;
            var20 = var3.style;
            var16 = var3.error;
            var11 = var3.showActivityIndicator;
            var3 = var3.resetLoginOnClose;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 57; continue _fun0001 }
 55:
            var3 = true;
 57:
            var _closure2_slot2 = var3;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot12;
            var17 = var3.bind(var4)();
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 8;
            var3 = var19[var14];
            var5 = var18.bind(var4)(var3);
            var3 = var5.useThemeContext;
            var3 = var3.bind(var5)();
            var13 = var3.theme;
            var8 = _closure1_slot4;
            var5 = var8.useState;
            var3 = '';
            var3 = var5.bind(var8)(var3);
            var22 = _closure1_slot3;
            var15 = 2;
            var5 = var22.bind(var4)(var3, var15);
            var3 = 0;
            var12 = var5[var3];
            _closure2_slot3 = var12;
            var6 = 1;
            var7 = var5[var6];
            _closure2_slot4 = var7;
            var5 = var8.useState;
            var9 = null;
            var5 = var5.bind(var8)(var9);
            var5 = var22.bind(var4)(var5, var15);
            var3 = var5[var3];
            _closure2_slot5 = var3;
            var5 = var5[var6];
            _closure2_slot6 = var5;
            var6 = var8.useCallback;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getString;
                var4 = var2.bind(var3)();
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.trim;
                        var3 = var1.bind(var2)();
                        var2 = _closure2_slot5;
                        var2 = var3 !== var2;
                        if(!var2) { _fun0002_ip = 114; continue _fun0002 }
 27:
                        var5 = var3.length;
                        var4 = 6;
                        var4 = var4 === var5;
                        if(!var4) { _fun0002_ip = 66; continue _fun0002 }
 42:
                        var6 = /^\d+$/;
                        var5 = var6.test;
                        var4 = var5.bind(var6)(var3);
 66:
                        if(var4) { _fun0002_ip = 111; continue _fun0002 }
 69:
                        var6 = var3.length;
                        var5 = 8;
                        var5 = var5 === var6;
                        if(!var5) { _fun0002_ip = 108; continue _fun0002 }
 84:
                        var7 = /^[a-z0-9]+$/i;
                        var6 = var7.test;
                        var5 = var6.bind(var7)(var3);
 108:
                        var4 = var5;
 111:
                        var2 = var4;
 114:
                        if(!var2) { _fun0002_ip = 137; continue _fun0002 }
 117:
                        var4 = _closure2_slot4;
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var1 = _closure2_slot6;
                        var1 = var1.bind(var2)(var3);
 137:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var6.bind(var8)(var3, var5);
            _closure2_slot7 = var3;
            var6 = _closure1_slot1;
            var5 = 10;
            var5 = var19[var5];
            var15 = var6.bind(var4)(var5);
            var5 = function() {
                var2 = _closure2_slot7;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure1_slot7;
                        var2 = var3.isAuthenticated;
                        var2 = var2.bind(var3)();
                        if(var2) { _fun0003_ip = 76; continue _fun0003 }
 20:
                        var2 = _closure2_slot2;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 11;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        if(var2) { _fun0003_ip = 64; continue _fun0003 }
 52:
                        var2 = var3.loginStatusReset;
                        var2 = var2.bind(var3)();
                        _fun0003_ip = 127; continue _fun0003;
 64:
                        var2 = var3.loginReset;
                        var2 = var2.bind(var3)();
                        _fun0003_ip = 127; continue _fun0003;
 76:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.getString;
                        var3 = var1.bind(var2)();
                        var2 = var3.then;
                        var1 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var1 = _closure2_slot3;
                                var3 = '';
                                var1 = var3 !== var1;
                                if(!var1) { _fun0004_ip = 29; continue _fun0004 }
 18:
                                var4 = _closure2_slot3;
                                var2 = arg1;
                                var1 = var4 === var2;
 29:
                                if(!var1) { _fun0004_ip = 68; continue _fun0004 }
 32:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.copy;
                                var1 = var1.bind(var2)(var3);
 68:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
 127:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var15.bind(var4)(var5);
            var15 = var8.useEffect;
            var5 = new Array(2);
            var5[0] = var21;
            var5[1] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot8;
                    var2 = var2.ACTIVE;
                    if(!(var3 === var2)) { _fun0005_ip = 34; continue _fun0005 }
 24:
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var15.bind(var8)(var3, var5);
            var5 = var8.useEffect;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = var2.length;
                    var2 = 6;
                    var2 = var2 === var3;
                    if(!var2) { _fun0006_ip = 50; continue _fun0006 }
 22:
                    var5 = /^\d+$/;
                    var4 = var5.test;
                    var3 = _closure2_slot3;
                    var2 = var4.bind(var5)(var3);
 50:
                    if(var2) { _fun0006_ip = 69; continue _fun0006 }
 53:
                    var3 = _closure2_slot3;
                    var4 = var3.length;
                    var3 = 8;
                    var2 = var3 === var4;
 69:
                    if(!var2) { _fun0006_ip = 87; continue _fun0006 }
 72:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 87:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var8)(var2, var3);
            var5 = var8.useImperativeHandle;
            var3 = arg2;
            var2 = function() {
                var1 = {};
                var2 = function clear() {
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = '';
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['clear'] = var2;
                return var1;
            };
            var1 = new Array(0);
            var1 = var5.bind(var8)(var3, var2, var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot10;
            var1 = {};
            var8 = _closure1_slot9;
            var5 = 12;
            var5 = var19[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {'autoFocus': true, 'style': null, 'textStyle': null, 'value': null, 'autoCapitalize': 'none', 'maxLength': 8, 'textContentType': 'oneTimeCode'};
            var21 = var17.inputContainer;
            var15 = new Array(2);
            var15[0] = var21;
            var15[1] = var20;
            var5['style'] = var15;
            var15 = var17.input;
            var5['textStyle'] = var15;
            var5['value'] = var12;
            var5['onChangeText'] = var7;
            var7 = 13;
            var12 = var19[var7];
            var12 = var18.bind(var4)(var12);
            var15 = var12.intl;
            var12 = var15.string;
            var7 = var19[var7];
            var7 = var18.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.yO4lAA;
            var7 = var12.bind(var15)(var7);
            var5['accessibilityLabel'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot6;
            var6 = {};
            var15 = var17.status;
            var12 = new Array(2);
            var12[0] = var15;
            var15 = global;
            var15 = var15.Boolean;
            var15 = var15.bind(var4)(var16);
            if(!var15) { _fun0001_ip = 551; continue _fun0001 }
 545:
            var15 = var17.minHeightGuard;
 551:
            var12[1] = var15;
            var6['style'] = var12;
            if(var11) { _fun0001_ip = 631; continue _fun0001 }
 562:
            var11 = var9 != var16;
            var9 = null;
            if(!var11) { _fun0001_ip = 629; continue _fun0001 }
 571:
            var15 = _closure1_slot9;
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 14;
            var11 = var18[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var17 = var17.error;
            var11['style'] = var17;
            var17 = 'text-md/medium';
            var11['variant'] = var17;
            var11['children'] = var16;
            var9 = var15.bind(var4)(var12, var11);
 629:
            _fun0001_ip = 721; continue _fun0001;
 631:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var14];
            var12 = var12.bind(var4)(var11);
            var11 = var12.isThemeDark;
            var12 = var11.bind(var12)(var13);
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 7;
            var11 = var14[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.unsafe_rawColors;
            if(var12) { _fun0001_ip = 695; continue _fun0001 }
 687:
            var13 = var11.PRIMARY_500;
            _fun0001_ip = 701; continue _fun0001;
 695:
            var13 = var11.WHITE_500;
 701:
            var12 = _closure1_slot9;
            var11 = _closure1_slot5;
            var10 = {};
            var10['color'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 721:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/MFACodeInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();