// app/modules/payments/native/hooks/useOrderContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot3 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/payments/native/hooks/useOrderContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOrderContext(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arguments[1];
            var7 = undefined;
            if(!(var8 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = 'useOrderContext';
case 2:
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var6 = 2;
            var3 = var3[var6];
            var5 = var4.bind(var7)(var3);
            var4 = var5.useConfig;
            var3 = {};
            var3['location'] = var8;
            var3 = var4.bind(var5)(var3);
            var5 = var3.enabled;
            _closure2_slot0 = var5;
            var4 = _closure1_slot3;
            var8 = var4.useState;
            var3 = arg1;
            var3 = var8.bind(var4)(var3);
            var2 = _closure1_slot2;
            var3 = var2.bind(var7)(var3, var6);
            var2 = 0;
            var7 = var3[var2];
            _closure2_slot1 = var7;
            var2 = 1;
            var6 = var3[var2];
            _closure2_slot2 = var6;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot1;
                    var1['order'] = var3;
                    var3 = _closure2_slot2;
                    var1['setOrder'] = var3;
                    var3 = _closure2_slot1;
                    var5 = null;
                    var4 = var5 == var3;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot1;
                    var3 = var4.id;
case 4:
                    var1['orderId'] = var3;
                    var3 = _closure2_slot1;
                    var4 = var5 == var3;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot1;
                    var7 = var4.order_line_items;
                    var4 = var5 == var7;
                    var3 = undefined;
                    if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var4 = 0;
                    var4 = var7[var4];
                    var5 = var5 == var4;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 9:
                    var3 = var4.id;
case 6:
                    var1['orderLineItemId'] = var3;
                    var2 = _closure2_slot0;
                    var1['isMobileOrdersEnabled'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useOrderContext'] = var2;
    return var1;
})();