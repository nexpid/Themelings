// app/modules/message_request/hooks/useIsStricterMessageRequests.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var9 = var6[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var9);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var8 = var4.Set;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var13 = ['GB'];
    var14 = var7;
    var4 = new var14[var8](var13, var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/hooks/useIsStricterMessageRequests.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsStricterMessageRequests() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var1 = var7[var3];
            var5 = undefined;
            var10 = var6.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getUserCountryCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var9.bind(var10)(var8, var1);
            var _closure2_slot0 = var1;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.nsfwAllowed;
case 2:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var5, var3);
            var7 = _closure1_slot2;
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var1;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchUserCountryCode;
                    var1 = var1.bind(var2)();
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var5);
            var2 = null;
            var2 = var2 == var1;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot5;
            var4 = var5.has;
            var1 = var1.alpha2;
            var1 = var4.bind(var5)(var1);
            var2 = !var1;
case 6:
            var1 = !var2;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = false;
            var2 = var2 === var3;
            var2 = !var2;
            var1 = !var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();