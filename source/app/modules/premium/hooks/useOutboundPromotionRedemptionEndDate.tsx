// app/modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var8 = var9.duration;
    var7 = 30;
    var4 = 'days';
    var4 = var8.bind(var9)(var7, var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOutboundPromotionRedemptionEndDate(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var7 = undefined;
                var4 = var2.bind(var7)(var1);
                var3 = var4.dateFormat;
                var1 = _closure2_slot1;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 1;
                var1 = var8[var1];
                var2 = var2.bind(var7)(var1);
                var1 = _closure2_slot0;
                var1 = var1.endDate;
                var2 = var2.bind(var7)(var1);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var1 = _closure2_slot0;
                var8 = var1.outboundRedemptionEndDate;
                var1 = null;
                if(!(var1 == var8)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 1;
                var1 = var9[var1];
                var8 = var8.bind(var7)(var1);
                var1 = _closure2_slot0;
                var1 = var1.endDate;
                var9 = var8.bind(var7)(var1);
                var8 = var9.add;
                var1 = _closure1_slot4;
                var1 = var8.bind(var9)(var1);
                _fun0001_ip = 7; continue _fun0001;
case 5:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 1;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var5 = _closure2_slot0;
                var5 = var5.outboundRedemptionEndDate;
                var1 = var6.bind(var7)(var5);
case 7:
                var2 = var1;
case 4:
                var1 = 'LL';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();