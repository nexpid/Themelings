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
        var6 = var3[var2];
        var _closure2_slot0 = var6;
        var2 = 1;
        var5 = var3[var2];
        var _closure2_slot1 = var5;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = {};
                var2 = _closure2_slot0;
                var1['order'] = var2;
                var4 = _closure2_slot1;
                var1['setOrder'] = var4;
                var4 = null;
                var6 = var4 == var2;
                var2 = undefined;
                if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure2_slot0;
                var2 = var6.id;
case 2:
                var1['orderId'] = var2;
                var2 = _closure2_slot0;
                var6 = var4 == var2;
                var2 = undefined;
                if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var3 = _closure2_slot0;
                var6 = var3.order_line_items;
                var3 = var4 == var6;
                var2 = undefined;
                if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                var3 = 0;
                var3 = var6[var3];
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 7:
                var2 = var3.id;
case 4:
                var1['orderLineItemId'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOrderContext'] = var2;
    return var1;
})();