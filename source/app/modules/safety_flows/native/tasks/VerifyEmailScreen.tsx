// app/modules/safety_flows/native/tasks/VerifyEmailScreen.tsx
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
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/native/tasks/VerifyEmailScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var21 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 4;
            var2 = var16[var2];
            var4 = undefined;
            var3 = var21.bind(var4)(var2);
            var2 = var3.useSafetyFlowTask;
            var2 = var2.bind(var3)();
            var14 = var2.task;
            var2 = 5;
            var2 = var16[var2];
            var3 = var21.bind(var4)(var2);
            var2 = var3.useOnTaskComplete;
            var10 = var2.bind(var3)();
            var _closure2_slot0 = var10;
            var8 = _closure1_slot5;
            var2 = var8.useRef;
            var3 = '';
            var2 = var2.bind(var8)(var3);
            var _closure2_slot1 = var2;
            var2 = var8.useState;
            var2 = var2.bind(var8)(var3);
            var11 = _closure1_slot4;
            var9 = 2;
            var2 = var11.bind(var4)(var2, var9);
            var7 = 0;
            var18 = var2[var7];
            var _closure2_slot2 = var18;
            var3 = 1;
            var17 = var2[var3];
            var2 = var8.useState;
            var12 = false;
            var2 = var2.bind(var8)(var12);
            var2 = var11.bind(var4)(var2, var9);
            var6 = var2[var7];
            var15 = var2[var3];
            var _closure2_slot3 = var15;
            var2 = var8.useState;
            var2 = var2.bind(var8)(var12);
            var2 = var11.bind(var4)(var2, var9);
            var9 = var2[var7];
            var _closure2_slot4 = var9;
            var2 = var2[var3];
            var _closure2_slot5 = var2;
            var7 = var8.useCallback;
            var3 = _closure1_slot3;
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
                        var4 = _closure2_slot1;
                        var5 = var4.current;
                        var6 = var5;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var5 = var6;
                        var4 = '';
                        if(!(var4 !== var5)) { _fun0002_ip = 4; continue _fun0002 }
case 6: // try_start_0
                        var4 = _closure2_slot3;
                        var5 = true;
                        var4 = var4.bind(var2)(var5);
                        var4 = _closure2_slot5;
                        var4 = var4.bind(var2)(var5);
                        var5 = _closure2_slot0;
                        var4 = {};
                        var4['verification_code'] = var6;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 6;
                        var6 = var8[var6];
                        var6 = var7.bind(var2)(var6);
                        var6 = var6.TaskInputType;
                        var6 = var6.VerificationCode;
                        var4['type'] = var6;
                        var4 = var5.bind(var2)(var4);
                        SaveGenerator(address=133);
case 7:
                        return var4;
case 8:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var6 = _closure2_slot3;
                        var5 = false;
                        var5 = var6.bind(var2)(var5);
case 11: // try_end0
                        _fun0002_ip = 4; continue _fun0002;
case 9:
                        return var4;
case 12: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var5 = _closure2_slot3;
                        var4 = false;
                        var5 = var5.bind(var2)(var4);
                        var3 = _closure2_slot5;
                        var3 = var3.bind(var2)(var4);
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 7;
                        var3 = var10[var3];
                        var5 = var9.bind(var2)(var3);
                        var4 = var5.open;
                        var3 = {};
                        var7 = 'SAFETY_FLOWS_VERIFY_EMAIL_ERROR';
                        var3['key'] = var7;
                        var7 = _closure1_slot0;
                        var6 = 8;
                        var6 = var10[var6];
                        var6 = var7.bind(var2)(var6);
                        var8 = var6.intl;
                        var7 = var8.string;
                        var6 = 9;
                        var6 = var10[var6];
                        var6 = var9.bind(var2)(var6);
                        var6 = var6.PfbG6O;
                        var6 = var7.bind(var8)(var6);
                        var3['content'] = var6;
                        var3 = var4.bind(var5)(var3);
case 4:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(1);
            var2[0] = var10;
            var7 = var7.bind(var8)(var3, var2);
            var _closure2_slot6 = var7;
            var10 = var8.useEffect;
            var3 = new Array(1);
            var3[0] = var18;
            var2 = function() {
                var2 = _closure2_slot1;
                var1 = _closure2_slot2;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var10.bind(var8)(var2, var3);
            var3 = var8.useEffect;
            var2 = new Array(3);
            var2[0] = var18;
            var2[1] = var9;
            var2[2] = var7;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var3 = var2.length;
                    var2 = 6;
                    var2 = var2 !== var3;
                    if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var2 = _closure2_slot4;
case 13:
                    if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 15:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot6;
            var13 = _closure1_slot1;
            var1 = 10;
            var1 = var16[var1];
            var2 = var13.bind(var4)(var1);
            var1 = {};
            var20 = 8;
            var8 = var16[var20];
            var8 = var21.bind(var4)(var8);
            var10 = var8.intl;
            var9 = var10.string;
            var19 = 9;
            var8 = var16[var19];
            var8 = var13.bind(var4)(var8);
            var8 = var8.Qm6K/v;
            var8 = var9.bind(var10)(var8);
            var1['title'] = var8;
            var8 = var16[var20];
            var8 = var21.bind(var4)(var8);
            var10 = var8.intl;
            var9 = var10.string;
            var8 = var16[var19];
            var8 = var13.bind(var4)(var8);
            var8 = var8.wq2RDg;
            var8 = var9.bind(var10)(var8);
            var1['action'] = var8;
            var1['onAction'] = var7;
            var1['submitting'] = var6;
            var7 = _closure1_slot7;
            var9 = 11;
            var5 = var16[var9];
            var5 = var21.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var11 = 12;
            var8 = var16[var11];
            var8 = var13.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_16;
            var5['spacing'] = var8;
            var8 = 13;
            var8 = var16[var8];
            var8 = var21.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'variant': 'text-sm/medium', 'color': 'text-secondary'};
            var12 = var16[var20];
            var12 = var21.bind(var4)(var12);
            var23 = var12.intl;
            var22 = var23.string;
            var12 = var16[var19];
            var12 = var13.bind(var4)(var12);
            var12 = var12.aveKoK;
            var12 = var22.bind(var23)(var12);
            var8['children'] = var12;
            var10 = var3.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var9 = var16[var9];
            var9 = var21.bind(var4)(var9);
            var10 = var9.Stack;
            var9 = {};
            var11 = var16[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_8;
            var9['spacing'] = var11;
            var11 = 14;
            var11 = var16[var11];
            var11 = var21.bind(var4)(var11);
            var12 = var11.TextInput;
            var11 = {'placeholder': null, 'maxLength': 6, 'returnKeyType': 'done'};
            var20 = var16[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var16[var19];
            var19 = var13.bind(var4)(var19);
            var19 = var19.d9Ykjo;
            var19 = var20.bind(var21)(var19);
            var11['placeholder'] = var19;
            var11['value'] = var18;
            var11['onChange'] = var17;
            var12 = var3.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var12 = 15;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['setLoading'] = var15;
            var15 = var14.flow_context;
            var14 = null;
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var14 = var15.flow_id;
case 17:
            var12['flowId'] = var14;
            var12 = var3.bind(var4)(var13, var12);
            var11[1] = var12;
            var9['children'] = var11;
            var9 = var7.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();