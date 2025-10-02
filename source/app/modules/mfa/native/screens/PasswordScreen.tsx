// app/modules/mfa/native/screens/PasswordScreen.tsx
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
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/screens/PasswordScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PasswordScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.mfaChallenge;
            var7 = var2.finish;
            var _closure2_slot0 = var7;
            var2 = _closure1_slot1;
            var22 = _closure1_slot2;
            var3 = 5;
            var3 = var22[var3];
            var4 = undefined;
            var5 = var2.bind(var4)(var3);
            var3 = var5.useScreenStyles;
            var5 = var3.bind(var5)();
            var13 = _closure1_slot5;
            var6 = var13.useState;
            var3 = null;
            var3 = var6.bind(var13)(var3);
            var10 = _closure1_slot4;
            var9 = 2;
            var3 = var10.bind(var4)(var3, var9);
            var16 = 0;
            var21 = var3[var16];
            var6 = 1;
            var3 = var3[var6];
            var _closure2_slot1 = var3;
            var11 = var13.useState;
            var3 = '';
            var3 = var11.bind(var13)(var3);
            var3 = var10.bind(var4)(var3, var9);
            var15 = var3[var16];
            var _closure2_slot2 = var15;
            var19 = var3[var6];
            var3 = var13.useState;
            var11 = false;
            var3 = var3.bind(var13)(var11);
            var3 = var10.bind(var4)(var3, var9);
            var12 = var3[var16];
            var3 = var3[var6];
            var _closure2_slot3 = var3;
            var3 = var13.useState;
            var3 = var3.bind(var13)(var11);
            var3 = var10.bind(var4)(var3, var9);
            var13 = var3[var16];
            var3 = var3[var6];
            var _closure2_slot4 = var3;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                            var2 = undefined;
                            var6 = undefined;
                            var9 = undefined;
                            var5 = _closure2_slot1;
                            var8 = null;
                            var5 = var5.bind(var2)(var8);
                            var5 = _closure2_slot3;
                            var10 = true;
                            var5 = var5.bind(var2)(var10);
case 4: // try_start_0
                            var7 = _closure2_slot0;
                            var5 = {};
                            var11 = 'password';
                            var5['mfaType'] = var11;
                            var11 = _closure2_slot2;
                            var5['data'] = var11;
                            var5 = var7.bind(var2)(var5);
                            SaveGenerator(address=73);
case 5:
                            return var5;
case 6:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                            var7 = _closure2_slot4;
                            var7 = var7.bind(var2)(var10);
case 9: // try_end0
                            _fun0002_ip = 10; continue _fun0002;
case 7:
                            return var5;
case 11: // catch_target0
                            CatchBlockStart(arg_register=6);
                            var4 = var7;
                            var5 = _closure2_slot1;
                            var7 = var7.body;
                            var9 = var7;
                            var10 = var8 == var7;
                            var7 = undefined;
                            if(var10) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                            var7 = var9.message;
case 12:
                            var6 = var7;
                            if(!(var8 == var7)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                            var4 = var4.message;
                            _fun0002_ip = 16; continue _fun0002;
case 14:
                            var4 = var6;
case 16:
                            var4 = var5.bind(var2)(var4);
case 10:
                            var4 = _closure2_slot3;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
                            return var2;
case 2:
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
            var11 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var1 = 6;
            var1 = var22[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var25 = _closure1_slot0;
            var20 = 7;
            var6 = var22[var20];
            var6 = var25.bind(var4)(var6);
            var10 = var6.intl;
            var9 = var10.string;
            var6 = var22[var20];
            var6 = var25.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.Rw1XuL;
            var6 = var9.bind(var10)(var6);
            var1['headerText'] = var6;
            var9 = _closure1_slot6;
            var6 = {};
            var5 = var5.inputContainer;
            var6['style'] = var5;
            var5 = 8;
            var5 = var22[var5];
            var5 = var25.bind(var4)(var5);
            var14 = var5.TextInput;
            var10 = {'autoFocus': true, 'textContentType': 'password', 'label': null, 'placeholder': null, 'autoComplete': 'current-password', 'errorMessage': null, 'returnKeyType': 'done'};
            var18 = true;
            var5 = 'password';
            var23 = var22[var20];
            var23 = var25.bind(var4)(var23);
            var26 = var23.intl;
            var24 = var26.string;
            var23 = var22[var20];
            var23 = var25.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.CIGa+/;
            var23 = var24.bind(var26)(var23);
            var10['label'] = var23;
            var23 = var22[var20];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var20];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.CIGa+/;
            var22 = var23.bind(var24)(var22);
            var10['placeholder'] = var22;
            var10['errorMessage'] = var21;
            var10['onChange'] = var19;
            var10['onSubmitEditing'] = var11;
            var19 = var12;
            if(var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var19 = var13;
case 17:
            var10['isDisabled'] = var19;
            var10['isClearable'] = var18;
            var10['secureTextEntry'] = var18;
            var10 = var3.bind(var4)(var14, var10);
            var6['children'] = var10;
            var6 = var3.bind(var4)(var9, var6);
            var1['input'] = var6;
            var10 = _closure1_slot7;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = 9;
            var6 = var14[var6];
            var9 = var9.bind(var4)(var6);
            var6 = {};
            var19 = _closure1_slot0;
            var17 = var14[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var14 = var14[var20];
            var14 = var19.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.geKm7u;
            var14 = var17.bind(var18)(var14);
            var6['text'] = var14;
            var14 = var12;
            if(var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var14 = var13;
case 19:
            if(var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var15 = var15.length;
            var14 = var16 === var15;
case 21:
            var6['disabled'] = var14;
            if(var12) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var12 = var13;
case 23:
            var6['loading'] = var12;
            var6['onPress'] = var11;
            var6 = var10.bind(var4)(var9, var6);
            var1['submit'] = var6;
            var6 = {};
            var6['mfaChallenge'] = var8;
            var6['finish'] = var7;
            var1['screenProps'] = var6;
            var1['mfaMethod'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();