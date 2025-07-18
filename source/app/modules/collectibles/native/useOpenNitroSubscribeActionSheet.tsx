// app/modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsPages;
    var _closure1_slot3 = var7;
    var4 = var4.AnalyticsSections;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useOpenNitroSubscribeActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arguments[0];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 24; continue _fun0001 }
 11:
            var2 = _closure1_slot4;
            var5 = var2.COLLECTIBLES_SHOP;
 24:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var6 = var3.analyticsLocations;
            _closure2_slot1 = var6;
            var4 = _closure1_slot2;
            var3 = var4.useCallback;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var6 = {};
                var5 = _closure1_slot3;
                var5 = var5.COLLECTIBLES_SHOP;
                var6['page'] = var5;
                var7 = _closure2_slot0;
                var6['section'] = var7;
                var2['analyticsLocation'] = var6;
                var5 = _closure2_slot1;
                var2['analyticsLocations'] = var5;
                var4 = _closure1_slot5;
                var4 = var4.TIER_2;
                var2['premiumType'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();