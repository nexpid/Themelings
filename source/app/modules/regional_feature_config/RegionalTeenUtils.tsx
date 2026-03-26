// app/modules/regional_feature_config/RegionalTeenUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function useUserCountryCode() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 3;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getUserCountryCode;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var5.bind(var6)(var4, var1);
        var _closure2_slot0 = var1;
        var5 = _closure1_slot2;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetchUserCountryCode;
                var1 = var1.bind(var2)();
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot5 = var5;
    var4 = function useIsTeenInCountrySet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot5;
            var5 = undefined;
            var2 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useUserIsTeen;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = null;
            var1 = var3 != var2;
case 4:
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var4.has;
            var2 = var2.alpha2;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var6 = global;
    var11 = var6.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var1 = 0;
    var10 = var8[var1];
    var9 = metroImportAll;
    var1 = undefined;
    var9 = var9.bind(var1)(var10);
    var _closure1_slot2 = var9;
    var9 = 1;
    var10 = var8[var9];
    var9 = metroImportDefault;
    var9 = var9.bind(var1)(var10);
    var _closure1_slot3 = var9;
    var10 = var6.Set;
    var11 = 2;
    var6 = var8[var11];
    var6 = var7.bind(var1)(var6);
    var6 = var6.CountryCodesSets;
    var13 = var6.EU_COUNTRIES;
    var6 = ['GB', 'AU'];
    var14 = var6;
    var12 = var11;
    var9 = arraySpread(var14, var13, var12);
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var15 = var9;
    var14 = var6;
    var6 = new var15[var10](var14, var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot4 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/regional_feature_config/RegionalTeenUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['useUserCountryCode'] = var5;
    var3['useIsTeenInCountrySet'] = var4;
    var2 = function useIsTeenInStrictCountry() {
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['useIsTeenInStrictCountry'] = var2;
    return var1;
})();