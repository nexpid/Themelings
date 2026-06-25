// app/modules/checkout/native/showCheckoutOrderErrorModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function SyncedLoadingAlertModal(arg1) {
        var1 = arg1;
        var6 = var1.title;
        var5 = var1.content;
        var16 = var1.confirmText;
        var2 = var1.onConfirm;
        var _closure2_slot0 = var2;
        var13 = var1.onCancel;
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var1 = false;
        var3 = var2.bind(var3)(var1);
        var2 = _closure1_slot3;
        var4 = undefined;
        var1 = 2;
        var2 = var2.bind(var4)(var3, var1);
        var1 = 0;
        var12 = var2[var1];
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot1 = var1;
        var3 = _closure1_slot5;
        var17 = _closure1_slot0;
        var18 = _closure1_slot1;
        var9 = 4;
        var1 = var18[var9];
        var1 = var17.bind(var4)(var1);
        var2 = var1.AlertModal;
        var1 = {};
        var1['title'] = var6;
        var1['content'] = var5;
        var7 = _closure1_slot7;
        var6 = _closure1_slot6;
        var5 = {};
        var14 = _closure1_slot5;
        var8 = var18[var9];
        var8 = var17.bind(var4)(var8);
        var11 = var8.AlertActionButton;
        var8 = {};
        var19 = 'primary';
        var8['variant'] = var19;
        var8['text'] = var16;
        var16 = _closure1_slot2;
        var15 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure2_slot1;
                    var5 = undefined;
                    var2 = true;
                    var2 = var4.bind(var5)(var2);
case 4: // try_start_0
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=35);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8: // try_end0
                    var6 = _closure2_slot1;
                    var4 = false;
                    var4 = var6.bind(var5)(var4);
                    return var5;
case 7:
                    var6 = _closure2_slot1;
                    var4 = false;
                    var4 = var6.bind(var5)(var4);
                    return var2;
case 9: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure2_slot1;
                    var3 = false;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var15 = var16.bind(var4)(var15);
        var8['onPress'] = var15;
        var8['loading'] = var12;
        var11 = var14.bind(var4)(var11, var8);
        var8 = new Array(2);
        var8[0] = var11;
        var11 = _closure1_slot5;
        var9 = var18[var9];
        var9 = var17.bind(var4)(var9);
        var10 = var9.AlertActionButton;
        var9 = {};
        var14 = 'secondary';
        var9['variant'] = var14;
        var14 = 5;
        var15 = var18[var14];
        var15 = var17.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var18[var14];
        var14 = var17.bind(var4)(var14);
        var14 = var14.t;
        var14 = var14.ETE/oC;
        var14 = var15.bind(var16)(var14);
        var9['text'] = var14;
        var9['onPress'] = var13;
        var9['loading'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['actions'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot8 = var1;
    var4 = function showRetryConfirmModal(arg1) {
        var3 = arg1;
        var7 = var3.key;
        var6 = var3.onCloseCallback;
        var8 = var3.dismissable;
        var2 = {'key': 0, 'onCloseCallback': 0, 'dismissable': 0};
        var13 = null;
        var14 = var2;
        var1 = silentSetPrototypeOf(var14, var13);
        var14 = {};
        var13 = var3;
        var12 = var2;
        var13 = copyDataProperties(var14, var13, var12);
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.openAlert;
        var9 = _closure1_slot5;
        var3 = _closure1_slot8;
        var2 = {};
        var14 = var2;
        var10 = copyDataProperties(var14, var13);
        var13 = var9.bind(var1)(var3, var2);
        var2 = {};
        var2['dismissable'] = var8;
        var15 = var5;
        var14 = var7;
        var12 = var6;
        var11 = var2;
        var2 = var15[var4](var14, var13, var12, var11, var10);
        return var1;
    };
    var _closure1_slot9 = var4;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot5 = var8;
    var8 = var5.Fragment;
    var _closure1_slot6 = var8;
    var5 = var5.jsxs;
    var _closure1_slot7 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/checkout/native/showCheckoutOrderErrorModal.tsx';
    var5 = var6.bind(var7)(var5);
    var3['showRetryConfirmModal'] = var4;
    var2 = function showCheckoutOrderErrorModal(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot9;
            var2 = {};
            var1 = 'checkout-order-error';
            var2['key'] = var1;
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 5;
            var7 = var10[var6];
            var1 = undefined;
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.zrhHH3;
            var7 = var8.bind(var11)(var7);
            var2['title'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.PjfUXe;
            var7 = var8.bind(var11)(var7);
            var2['content'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6["7NqTJn"];
            var6 = var7.bind(var8)(var6);
            var2['confirmText'] = var6;
            var6 = _closure1_slot2;
            var5 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 3:
                        var2 = _closure2_slot0;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=24);
case 11:
                        return var2;
case 12:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        var4 = _closure3_slot0;
                        var4 = var4.bind(var3)(var2);
                        return var3;
case 13:
                        return var2;
case 10:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var6.bind(var1)(var5);
            var _closure3_slot1 = var5;
            var5 = function() {
                var1 = undefined;
                var4 = _closure3_slot1;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2['onConfirm'] = var5;
            var4 = function onCancel() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 15:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 4:
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var1);
                    return var1;
                }
            };
            var2['onCancel'] = var4;
            var4 = false;
            var2['dismissable'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['showCheckoutOrderErrorModal'] = var2;
    return var1;
})();