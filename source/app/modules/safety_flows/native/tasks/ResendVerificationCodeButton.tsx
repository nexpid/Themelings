// app/modules/safety_flows/native/tasks/ResendVerificationCodeButton.tsx
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
    var4 = var4.Pressable;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/native/tasks/ResendVerificationCodeButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.flowId;
            var _closure2_slot0 = var6;
            var8 = var2.setLoading;
            var _closure2_slot1 = var8;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var7 = 0;
            var10 = var2.bind(var5)(var7);
            var3 = _closure1_slot4;
            var4 = undefined;
            var2 = 2;
            var3 = var3.bind(var4)(var10, var2);
            var12 = var3[var7];
            var _closure2_slot2 = var12;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot3 = var2;
            var10 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = 0;
                    if(!(!(var3 > var2))) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = undefined;
                    return var2;
case 2:
                    var2 = global;
                    var5 = var2.setInterval;
                    var4 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot3;
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
                        var3 = var1.clearInterval;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var10.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var4 = _closure2_slot2;
                        var2 = 0;
                        if(!(!(var4 > var2))) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var4 = _closure2_slot1;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 8: // try_start_0 // try_start_1
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 5;
                        var2 = var7[var2];
                        var7 = var6.bind(var5)(var2);
                        var6 = var7.resendVerificationCode;
                        var2 = _closure2_slot0;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address=81);
case 9:
                        return var2;
case 10:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 6;
                        var4 = var7[var4];
                        var6 = var6.bind(var5)(var4);
                        var4 = var6.showVerificationSent;
                        var4 = var4.bind(var6)();
                        var6 = _closure2_slot3;
                        var4 = 30;
                        var4 = var6.bind(var5)(var4);
case 13: // try_end0
                        _fun0003_ip = 14; continue _fun0003;
case 11: // try_end1
                        var6 = _closure2_slot1;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 15: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 7;
                        var2 = var9[var2];
                        var6 = var10.bind(var5)(var2);
                        var4 = var6.open;
                        var2 = {};
                        var8 = 'SAFETY_FLOWS_VERIFY_EMAIL_ERROR';
                        var2['key'] = var8;
                        var8 = _closure1_slot0;
                        var7 = 8;
                        var7 = var9[var7];
                        var7 = var8.bind(var5)(var7);
                        var12 = var7.intl;
                        var11 = var12.string;
                        var7 = 9;
                        var7 = var9[var7];
                        var7 = var10.bind(var5)(var7);
                        var7 = var7.3AXMYm;
                        var7 = var11.bind(var12)(var7);
                        var2['content'] = var7;
                        var7 = 10;
                        var7 = var9[var7];
                        var7 = var10.bind(var5)(var7);
                        var2['icon'] = var7;
                        var7 = 11;
                        var7 = var9[var7];
                        var7 = var8.bind(var5)(var7);
                        var7 = var7.XLargeIcon;
                        var2['IconComponent'] = var7;
                        var7 = 'status-danger';
                        var2['iconColor'] = var7;
                        var2 = var4.bind(var6)(var2);
case 14: // try_end2
                        var4 = _closure2_slot1;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        _fun0003_ip = 6; continue _fun0003;
case 16: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot1;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 6:
                        var2 = undefined;
                        return var2;
case 4:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = new Array(3);
            var1[0] = var8;
            var1[1] = var12;
            var1[2] = var6;
            var5 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot6;
            var1 = {};
            var1['onPress'] = var5;
            var5 = var12 > var7;
            var1['disabled'] = var5;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var14 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = 8;
            var5 = var8[var10];
            var5 = var14.bind(var4)(var5);
            var11 = var5.intl;
            var6 = var11.string;
            var15 = _closure1_slot1;
            var13 = 9;
            var5 = var8[var13];
            var5 = var15.bind(var4)(var5);
            var5 = var5.ah0EUl;
            var5 = var6.bind(var11)(var5);
            var1['accessibilityLabel'] = var5;
            var5 = 12;
            var5 = var8[var5];
            var5 = var14.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-sm/medium', 'color': 'text-link', 'accessibilityLabel': null, 'importantForAccessibility': 'no'};
            var11 = var8[var10];
            var11 = var14.bind(var4)(var11);
            var14 = var11.intl;
            var11 = var14.string;
            var8 = var8[var13];
            var8 = var15.bind(var4)(var8);
            var8 = var8.ah0EUl;
            var8 = var11.bind(var14)(var8);
            var5['accessibilityLabel'] = var8;
            if(!(!(var12 > var7))) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var10];
            var8 = var11.bind(var4)(var8);
            var11 = var8.intl;
            var8 = var11.string;
            var14 = _closure1_slot1;
            var7 = var7[var13];
            var7 = var14.bind(var4)(var7);
            var7 = var7.ah0EUl;
            var7 = var8.bind(var11)(var7);
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = var8[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var9 = _closure1_slot1;
            var8 = var8[var13];
            var8 = var9.bind(var4)(var8);
            var9 = var8.2+Lyn5;
            var8 = {};
            var8['countdown'] = var12;
            var7 = var10.bind(var11)(var9, var8);
case 19:
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();