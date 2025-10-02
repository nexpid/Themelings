// app/modules/activities/utils/getPartySize.tsx
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
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getPartySize.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getPartySize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.party;
            if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var1.party;
            var2 = var2.size;
            if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var2 = var1.party;
            var2 = var2.size;
            var2 = var2.length;
            var4 = 2;
            if(!(!(var2 < var4))) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var3 = _closure1_slot0;
            var1 = var1.party;
            var2 = var1.size;
            var1 = undefined;
            var3 = var3.bind(var1)(var2, var4);
            var1 = {};
            var2 = 0;
            var2 = var3[var2];
            var1['partySize'] = var2;
            var2 = 1;
            var2 = var3[var2];
            var1['maxPartySize'] = var2;
            return var1;
case 2:
            var1 = {'partySize': 4294967295, 'maxPartySize': 4294967295};
            return var1;
        }
    };
    var3['getPartySize'] = var2;
    return var1;
})();