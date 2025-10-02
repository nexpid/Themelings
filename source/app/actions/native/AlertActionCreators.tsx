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
    var1 = 0;
    var7 = var6[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot3 = var2;
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
    };
    var2['close'] = var7;
    var7 = function show(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var4 = this;
            var6 = var8.hideActionSheet;
            var5 = var8.isDismissable;
            var2 = var8.confirmText;
            var1 = undefined;
            if(!(var2 === var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 4;
            var9 = var12[var3];
            var9 = var11.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var3 = var12[var3];
            var3 = var11.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.BddRzc;
            var2 = var9.bind(var10)(var3);
case 8:
            var _closure2_slot0 = var2;
            var3 = {'hideActionSheet': 0, 'isDismissable': 0, 'confirmText': 0};
            var14 = null;
            var15 = var3;
            var2 = silentSetPrototypeOf(var15, var14);
            var15 = {};
            var14 = var8;
            var13 = var3;
            var2 = copyDataProperties(var15, var14, var13);
            var _closure2_slot1 = var2;
            var3 = var4.openLazy;
            var2 = {};
            var7 = function importer() {
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 6;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 5;
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
                        var2[var1] = var5;
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
            var7 = 4;
            var8 = var11[var7];
            var1 = undefined;
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.ETE/oK;
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/native/AlertActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();