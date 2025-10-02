// app/modules/activities/utils/getIsInParty.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/activities/utils/getIsInParty.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getIsInParty(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var5 = null;
            var2 = var5 == var3;
            var1 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.party;
            var6 = var5 == var2;
            var1 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = var2.id;
case 2:
            var1 = var5 != var1;
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = var5 == var4;
            var2 = undefined;
            if(var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var4.party;
            var7 = var5 == var6;
            var2 = undefined;
            if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var2 = var6.id;
case 7:
            var2 = var5 != var2;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var4.party;
            var4 = var4.id;
            var3 = var3.party;
            var3 = var3.id;
            var2 = var4 === var3;
case 10:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var3['getIsInParty'] = var2;
    return var1;
})();