// app/modules/verification/native/components/VerifyPhone.tsx
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
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/verification/native/components/VerifyPhone.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VerifyPhone(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var15 = var2.phone;
            var _closure2_slot0 = var15;
            var10 = var2.loading;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = false;
case 2:
            var13 = var2.error;
            var17 = var2.onCodeEnteredIntercept;
            var _closure2_slot1 = var17;
            var16 = var2.onVerified;
            var _closure2_slot2 = var16;
            var11 = var2.backgroundStyle;
            var5 = var2.disableKeyboardAvoidingView;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var9 = _closure1_slot5;
            var2 = var9.useState;
            var14 = null;
            var2 = var2.bind(var9)(var14);
            var18 = _closure1_slot4;
            var8 = 2;
            var2 = var18.bind(var4)(var2, var8);
            var6 = 0;
            var12 = var2[var6];
            var3 = 1;
            var2 = var2[var3];
            _closure2_slot3 = var2;
            var19 = var9.useState;
            var2 = false;
            var2 = var19.bind(var9)(var2);
            var2 = var18.bind(var4)(var2, var8);
            var6 = var2[var6];
            var2 = var2[var3];
            _closure2_slot4 = var2;
            var8 = var9.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var4 = arg1;
                            var2 = undefined;
                            var5 = undefined;
case 6: // try_start_0
                            var7 = _closure2_slot1;
                            var3 = null;
                            if(!(var3 != var7)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                            var7 = _closure2_slot1;
                            var3 = var4;
                            var3 = var7.bind(var2)(var3);
                            SaveGenerator(address=46);
case 9:
                            return var3;
case 10:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                            if(var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                            if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 7:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 4;
                            var7 = var9[var7];
                            var10 = var8.bind(var2)(var7);
                            var9 = var10.verifyPhone;
                            var8 = _closure2_slot0;
                            var7 = var4;
                            var4 = false;
                            var4 = var9.bind(var10)(var8, var7, var4);
                            SaveGenerator(address=104);
case 14:
                            return var4;
case 15:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                            if(var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                            var7 = var4.token;
                            var6 = _closure2_slot2;
                            var6 = var6.bind(var2)(var7);
case 18: // try_end0
                            _fun0002_ip = 19; continue _fun0002;
case 16:
                            return var4;
case 13:
                            return var2;
case 11:
                            return var3;
case 20: // catch_target0
                            CatchBlockStart(arg_register=2);
                            var4 = _closure2_slot3;
                            var6 = var3.body;
                            var5 = var6;
                            var3 = null;
                            var6 = var3 == var6;
                            var3 = undefined;
                            if(var6) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                            var3 = var5.message;
case 21:
                            var3 = var4.bind(var2)(var3);
case 19:
                            return var2;
case 4:
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
            var3 = var2.bind(var4)();
            var2 = new Array(3);
            var2[0] = var17;
            var2[1] = var16;
            var2[2] = var15;
            var8 = var8.bind(var9)(var3, var2);
            _closure2_slot5 = var8;
            var3 = var9.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                            var5 = _closure2_slot4;
                            var3 = undefined;
                            var2 = true;
                            var2 = var5.bind(var3)(var2);
                            var5 = _closure2_slot5;
                            var2 = arg1;
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=39);
case 25:
                            return var2;
case 26:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                            var5 = _closure2_slot4;
                            var4 = false;
                            var4 = var5.bind(var3)(var4);
                            return var3;
case 27:
                            return var2;
case 23:
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
            var1[0] = var8;
            var3 = var3.bind(var9)(var2, var1);
            var2 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 5;
            var1 = var19[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)(var3);
            var3 = _closure1_slot6;
            var9 = 6;
            var1 = var19[var9];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var18 = _closure1_slot0;
            var15 = 7;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var20 = var16.intl;
            var17 = var20.string;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.Xclkxp;
            var16 = var17.bind(var20)(var16);
            var1['title'] = var16;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15["4qMI6A"];
            var15 = var16.bind(var17)(var15);
            var1['description'] = var15;
            if(!(var14 != var13)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var12 = var13;
case 29:
            var1['error'] = var12;
            var1['backgroundStyle'] = var11;
            var1['loading'] = var10;
            var1['onCodeEntered'] = var8;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var4)(var7);
            var7 = var7.CodeType;
            var7 = var7.NUMERIC;
            var1['codeType'] = var7;
            var1['disabled'] = var6;
            var1['disableKeyboardAvoidingView'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();