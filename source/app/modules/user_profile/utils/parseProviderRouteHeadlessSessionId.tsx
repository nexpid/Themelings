// app/modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx
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
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function parseProviderRouteHeadlessSessionId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.startsWith;
            var2 = 'h:';
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var4.slice;
            var2 = 2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.split;
            var2 = ',';
            var4 = var3.bind(var4)(var2);
            var3 = _closure1_slot2;
            var5 = undefined;
            var6 = 1;
            var3 = var3.bind(var5)(var4, var6);
            var7 = 0;
            var4 = var3[var7];
            if(!(var1 != var4)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var4.length;
            if(!(var7 !== var3)) { _fun0001_ip = 5; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.get;
            var3 = var2.bind(var3)(var4);
            var4 = var1 != var3;
            var2 = null;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var3.enabled;
            var2 = null;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var2 = var3;
case 8:
            return var2;
case 5:
            return var1;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 'h:';
    var3['HEADLESS_SESSION_ID_PREFIX'] = var2;
    return var1;
})();