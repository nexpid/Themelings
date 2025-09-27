// app/modules/user_settings/native/premium_marketing/utils/PremiumNitroHomeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/utils/PremiumNitroHomeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.nativeEvent;
            var6 = var2.trackedType;
            var2 = var2.hasTrackedScrolledToBottom;
            var7 = var1.layoutMeasurement;
            var4 = var1.contentOffset;
            var3 = var1.contentSize;
            var1 = var2.current;
            if(var1) { _fun0001_ip = 123; continue _fun0001 }
 47:
            var5 = global;
            var9 = var5.Math;
            var8 = var9.ceil;
            var7 = var7.height;
            var7 = var8.bind(var9)(var7);
            var9 = var5.Math;
            var8 = var9.ceil;
            var4 = var4.y;
            var4 = var8.bind(var9)(var4);
            var4 = var7 + var4;
            var7 = var5.Math;
            var5 = var7.floor;
            var3 = var3.height;
            var3 = var5.bind(var7)(var3);
            var1 = var4 < var3;
 123:
            if(var1) { _fun0001_ip = 186; continue _fun0001 }
 126:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.track;
            var1 = _closure1_slot2;
            var3 = var1.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM;
            var1 = {};
            var1['type'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var1 = true;
            var2['current'] = var1;
 186:
            var1 = undefined;
            return var1;
        }
    };
    var3['trackIfScrolledToBottom'] = var2;
    return var1;
})();