// app/modules/premium/hooks/useGeoForUser.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/useGeoForUser.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGeoForUser() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 4;
            var3 = var8[var6];
            var2 = undefined;
            var10 = var7.bind(var2)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getProduct;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ProductIds;
                    var2 = var2.PREMIUM_TIER_2_MONTHLY;
                    var2 = var3.bind(var4)(var2);
                    var3 = null;
                    var3 = var3 == var2;
                    if(var3) { _fun0002_ip = 67; continue _fun0002 }
 61:
                    var1 = var2.countryCode;
 67:
                    return var1;
                }
            };
            var4 = var9.bind(var10)(var4, var3);
            var3 = var8[var6];
            var11 = var7.bind(var2)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var1 = _closure1_slot5;
                var1 = var1.ipLocation;
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3);
            var6 = var8[var6];
            var9 = var7.bind(var2)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isAuthenticated;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var9)(var7, var6);
            var _closure2_slot0 = var8;
            var7 = _closure1_slot3;
            var6 = var7.useEffect;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var8;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0003_ip = 28; continue _fun0003 }
 10:
                    var2 = _closure1_slot5;
                    var2 = var2.ipLocationLoaded;
                    var1 = !var2;
 28:
                    if(!var1) { _fun0003_ip = 66; continue _fun0003 }
 31:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchIpLocation;
                    var1 = var1.bind(var2)();
 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['defaultBillingCountryCode'] = var4;
            var4 = null;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 189; continue _fun0001 }
 183:
            var5 = var3.countryCode;
 189:
            var1['ipCountryCode'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 209; continue _fun0001 }
 203:
            var2 = var3.subdivisionCode;
 209:
            var1['ipSubdivisionCode'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();