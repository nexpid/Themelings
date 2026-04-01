// app/modules/payments/native/hooks/useOrderContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/payments/native/hooks/useOrderContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOrderContext(arg1) {
        var4 = _closure1_slot1;
        var5 = var4.useState;
        var3 = arg1;
        var6 = var5.bind(var4)(var3);
        var5 = _closure1_slot0;
        var3 = undefined;
        var2 = 2;
        var3 = var5.bind(var3)(var6, var2);
        var2 = 0;
        var7 = var3[var2];
        var _closure2_slot0 = var7;
        var2 = 1;
        var6 = var3[var2];
        var _closure2_slot1 = var6;
        var5 = var4.useCallback;
        var3 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var3 = _closure2_slot1;
            var1 = undefined;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var3 = arg1;
                    var2 = null;
                    var1 = var3;
                    if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = {};
                    var6 = var2;
                    var5 = var3;
                    var3 = copyDataProperties(var6, var5);
                    var4 = _closure3_slot0;
                    var3 = 'revision';
                    var2[2] = var4;
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = new Array(0);
        var5 = var5.bind(var4)(var3, var2);
        var _closure2_slot2 = var5;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = {};
                var2 = _closure2_slot0;
                var1['order'] = var2;
                var4 = _closure2_slot1;
                var1['setOrder'] = var4;
                var4 = _closure2_slot2;
                var1['setRevision'] = var4;
                var5 = null;
                var6 = var5 == var2;
                var4 = undefined;
                if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                var6 = _closure2_slot0;
                var4 = var6.id;
case 4:
                var1['orderId'] = var4;
                var4 = _closure2_slot0;
                var6 = var5 == var4;
                var4 = undefined;
                if(var6) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var6 = _closure2_slot0;
                var7 = var6.order_line_items;
                var6 = var5 == var7;
                var4 = undefined;
                if(var6) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                var6 = 0;
                var6 = var7[var6];
                var7 = var5 == var6;
                var4 = undefined;
                if(var7) { _fun0002_ip = 5; continue _fun0002 }
case 8:
                var4 = var6.id;
case 5:
                var1['orderLineItemId'] = var4;
                var4 = _closure2_slot0;
                var4 = var5 == var4;
                var2 = undefined;
                if(var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var3 = _closure2_slot0;
                var2 = var3.revision;
case 9:
                var1['revision'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOrderContext'] = var2;
    return var1;
})();