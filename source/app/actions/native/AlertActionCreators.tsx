// app/actions/native/AlertActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot3 = var8;
    var8 = var7.Fragment;
    var _closure1_slot4 = var8;
    var7 = var7.jsxs;
    var _closure1_slot5 = var7;
    var7 = null;
    var _closure1_slot6 = var7;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function openLazy(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = var4.importer;
            var5 = var4.hideActionSheet;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = true;
case 2:
            var _closure2_slot0 = var5;
            var4 = var4.isDismissable;
            if(!(var4 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = false;
case 4:
            var _closure2_slot1 = var4;
            var3 = var3.bind(var2)();
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
case 6:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'ALERT_OPEN';
                    var2['type'] = var6;
                    var6 = arg1;
                    var2['alert'] = var6;
                    var5 = _closure2_slot1;
                    var2['isDismissable'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['openLazy'] = var7;
    var7 = function close() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot6;
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = _closure1_slot6;
            _closure1_slot6 = var2;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.dismissAlert;
            var2 = var2.bind(var3)(var4);
case 8:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'ALERT_CLOSE';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['close'] = var7;
    var7 = function show(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var4 = this;
            var6 = var9.hideActionSheet;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var6 = true;
case 10:
            var5 = var9.isDismissable;
            var19 = var9.confirmText;
            if(!(var19 === var1)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 5;
            var3 = var11[var2];
            var3 = var10.bind(var1)(var3);
            var8 = var3.intl;
            var3 = var8.string;
            var2 = var11[var2];
            var2 = var10.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.BddRzS;
            var19 = var3.bind(var8)(var2);
case 12:
            var _closure2_slot0 = var19;
            var8 = {'hideActionSheet': 0, 'isDismissable': 0, 'confirmText': 0};
            var3 = null;
            var29 = var8;
            var28 = null;
            var2 = silentSetPrototypeOf(var29, var28);
            var29 = {};
            var28 = var9;
            var27 = var8;
            var8 = copyDataProperties(var29, var28, var27);
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var1;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 6;
            var9 = var11[var9];
            var11 = var10.bind(var1)(var9);
            var10 = var11.isMobileVisualRefreshEnabled;
            var9 = 'AlertActionCreators';
            var9 = var10.bind(var11)(var9);
            if(!var9) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var10 = {};
            var29 = var10;
            var28 = var8;
            var9 = copyDataProperties(var29, var28);
            var9 = 'confirmText';
            var10[8] = var19;
            var9 = 'isDismissable';
            var10[8] = var5;
            var14 = var10.body;
            var13 = var10.confirmText;
            var11 = var3 != var14;
            if(!var11) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var12 = 'string';
            var9 = typeof var14;
            var11 = var12 !== var9;
case 16:
            if(!var11) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var9 = global;
            var12 = var9.Array;
            var9 = var12.isArray;
            var9 = var9.bind(var12)(var14);
            var11 = !var9;
case 18:
            var9 = var10.title;
            var9 = var3 == var9;
            if(var9) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var14 = var10.title;
            var12 = '';
            var9 = var12 === var14;
case 20:
            if(var9) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var12 = var3 != var13;
            if(!var12) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var14 = 'string';
            var13 = typeof var13;
            var12 = var14 !== var13;
case 24:
            var9 = var12;
case 22:
            if(var9) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var9 = var11;
case 26:
            if(var9) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var11 = var10.footer;
            var9 = var3 != var11;
case 28:
            if(var9) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var11 = var10.helpText;
            var9 = var3 != var11;
case 30:
            if(var9) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var11 = var10.renderConfirmButton;
            var9 = var3 != var11;
case 32:
            if(var9) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var11 = var10.renderConfirmIcon;
            var9 = var3 != var11;
case 34:
            if(var9) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var11 = var10.renderConfirmRightIcon;
            var9 = var3 != var11;
case 36:
            if(var9) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var12 = var10.noDefaultButtons;
            var11 = true;
            var9 = var11 === var12;
case 38:
            if(var9) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var11 = var10.secondaryConfirmText;
            var9 = var3 != var11;
case 40:
            if(var9) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var11 = var10.onConfirmSecondary;
            var9 = var3 != var11;
case 42:
            if(var9) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var12 = var10.isConfirmButtonDisabled;
            var11 = true;
            var9 = var11 === var12;
case 44:
            if(var9) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var11 = var10.confirming;
            var9 = var3 != var11;
case 46:
            if(var9) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var11 = var10.style;
            var9 = var3 != var11;
case 48:
            if(var9) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var12 = var10.fillCancelText;
            var11 = true;
            var9 = var11 === var12;
case 50:
            if(var9) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var12 = var10.autoCloseOnConfirm;
            var11 = false;
            var9 = var11 === var12;
case 52:
            if(var9) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var10 = var10.onClose;
            var9 = var3 != var10;
case 54:
            if(var9) { _fun0004_ip = 14; continue _fun0004 }
case 56:
            if(!var6) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 2;
            var9 = var11[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.hideActionSheet;
            var9 = var9.bind(var10)();
case 57:
            var9 = _closure1_slot6;
            if(!(var3 != var9)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 4;
            var9 = var11[var9];
            var11 = var10.bind(var1)(var9);
            var10 = var11.dismissAlert;
            var9 = _closure1_slot6;
            var9 = var10.bind(var11)(var9);
case 59:
            var10 = _closure1_slot1;
            var25 = _closure1_slot2;
            var9 = 3;
            var9 = var25[var9];
            var11 = var10.bind(var1)(var9);
            var10 = var11.dispatch;
            var9 = {};
            var12 = 'ALERT_CLOSE';
            var9['type'] = var12;
            var9 = var10.bind(var11)(var9);
            var9 = _closure1_slot7;
            var10 = parseFloat(var9);
            var9 = var10 + 1;
            _closure1_slot7 = var9;
            var9 = 'legacy-alert-';
            var13 = var9 + var10;
            _closure2_slot2 = var13;
            _closure1_slot6 = var13;
            var16 = var8.title;
            var15 = var8.body;
            var14 = var8.children;
            var24 = var8.confirmColor;
            var22 = var8.cancelText;
            var9 = var8.onConfirm;
            _closure2_slot3 = var9;
            var8 = var8.onCancel;
            _closure2_slot4 = var8;
            var8 = false;
            _closure2_slot5 = var8;
            var21 = _closure1_slot0;
            var8 = 4;
            var8 = var25[var8];
            var12 = var21.bind(var1)(var8);
            var11 = var12.openAlert;
            var10 = _closure1_slot3;
            var23 = 7;
            var8 = var25[var23];
            var8 = var21.bind(var1)(var8);
            var9 = var8.AlertModal;
            var8 = {};
            var8['title'] = var16;
            var8['content'] = var15;
            var8['extraContent'] = var14;
            var16 = _closure1_slot5;
            var15 = _closure1_slot4;
            var14 = {};
            var17 = var25[var23];
            var17 = var21.bind(var1)(var17);
            var18 = var17.AlertActionButton;
            var17 = {};
            var20 = 8;
            var20 = var25[var20];
            var21 = var21.bind(var1)(var20);
            var20 = var21.getAlertButtonVariant;
            var20 = var20.bind(var21)(var24);
            var17['variant'] = var20;
            var17['text'] = var19;
            var19 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = true;
                    _closure2_slot5 = var2;
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var17['onPress'] = var19;
            var18 = var10.bind(var1)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var19 = var3 != var22;
            var18 = null;
            if(!var19) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var21 = _closure1_slot3;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var23];
            var19 = var20.bind(var1)(var19);
            var20 = var19.AlertActionButton;
            var19 = {};
            var23 = 'secondary';
            var19['variant'] = var23;
            var19['text'] = var22;
            var22 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = true;
                    _closure2_slot5 = var2;
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var19['onPress'] = var22;
            var18 = var21.bind(var1)(var20, var19);
case 63:
            var17[1] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var1)(var15, var14);
            var8['actions'] = var14;
            var28 = var10.bind(var1)(var9, var8);
            var9 = {};
            var8 = true;
            var8 = var8 === var5;
            var9['dismissable'] = var8;
            var27 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0007_ip = 11; continue _fun0007 }
case 7:
                    var4 = _closure2_slot4;
                    var3 = null;
                    var2 = var3 == var4;
case 11:
                    if(var2) { _fun0007_ip = 65; continue _fun0007 }
case 3:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 65:
                    var3 = _closure1_slot6;
                    var1 = _closure2_slot2;
                    if(!(var3 === var1)) { _fun0007_ip = 8; continue _fun0007 }
case 66:
                    var1 = null;
                    _closure1_slot6 = var1;
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var12;
            var29 = var13;
            var26 = var9;
            var8 = var30[var11](var29, var28, var27, var26, var25);
            _fun0004_ip = 67; continue _fun0004;
case 14:
            var8 = _closure1_slot6;
            if(!(var3 != var8)) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 4;
            var8 = var10[var8];
            var10 = var9.bind(var1)(var8);
            var9 = var10.dismissAlert;
            var8 = _closure1_slot6;
            var8 = var9.bind(var10)(var8);
            _closure1_slot6 = var3;
case 68:
            var3 = var4.openLazy;
            var2 = {};
            var7 = function importer() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 10;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 9;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var4)(var2, var1);
                var2 = var3.then;
                var1 = function(arg1) {
                    var2 = arg1;
                    var2 = var2.default;
                    var _closure4_slot0 = var2;
                    var1 = function(arg1) {
                        var4 = _closure1_slot3;
                        var3 = _closure4_slot0;
                        var2 = {};
                        var6 = arg1;
                        var7 = var2;
                        var1 = copyDataProperties(var7, var6);
                        var6 = _closure2_slot1;
                        var7 = var2;
                        var5 = copyDataProperties(var7, var6);
                        var5 = _closure2_slot0;
                        var1 = 'confirmText';
                        var2[0] = var5;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['importer'] = var7;
            var2['hideActionSheet'] = var6;
            var2['isDismissable'] = var5;
            var2 = var3.bind(var4)(var2);
case 67:
            return var1;
        }
    };
    var2['show'] = var7;
    var4 = function confirm(arg1) {
        var2 = this;
        var _closure2_slot0 = var2;
        var2 = arg1;
        var _closure2_slot1 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure2_slot0;
            var3 = var4.show;
            var2 = {};
            var1 = function onConfirm() {
                var3 = _closure3_slot0;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onConfirm'] = var1;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 5;
            var8 = var11[var7];
            var1 = undefined;
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.ETE/oC;
            var7 = var8.bind(var9)(var7);
            var2['cancelText'] = var7;
            var6 = function onCancel() {
                var3 = _closure3_slot0;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onCancel'] = var6;
            var12 = _closure2_slot1;
            var13 = var2;
            var5 = copyDataProperties(var13, var12);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var2['confirm'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/native/AlertActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();