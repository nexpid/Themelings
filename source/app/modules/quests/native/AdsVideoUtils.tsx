// app/modules/quests/native/AdsVideoUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = new Array(4);
    var6 = -1000;
    var1[0] = var6;
    var6 = -1003;
    var1[1] = var6;
    var6 = -1004;
    var1[2] = var6;
    var6 = -1008;
    var1[3] = var6;
    var _closure1_slot2 = var1;
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/AdsVideoUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isSourceError(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var6 = undefined;
            var7 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.error;
            var7 = var3.code;
case 2:
            var3 = var2 == var1;
            var5 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var1.error;
            var5 = var1.errorException;
case 4:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 0;
            var1 = var1[var8];
            var3 = var3.bind(var6)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var3 = var3.bind(var6)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var2 != var7;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = _closure1_slot2;
            var4 = var6.includes;
            var3 = var4.bind(var6)(var7);
case 10:
            var1 = var3;
case 8:
            _fun0001_ip = 12; continue _fun0001;
case 6:
            var2 = var2 == var5;
            if(var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = var5.includes;
            var3 = 'Source error';
            var3 = var4.bind(var5)(var3);
            var2 = !var3;
case 13:
            var1 = !var2;
case 12:
            return var1;
        }
    };
    var3['isSourceError'] = var2;
    return var1;
})();