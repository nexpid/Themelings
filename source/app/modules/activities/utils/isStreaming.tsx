// app/modules/activities/utils/isStreaming.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isStreaming(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.type;
            var1 = _closure1_slot1;
            var1 = var1.STREAMING;
            var1 = var2 === var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.url;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var4 = var5.test;
            var3 = var3.url;
            var2 = var4.bind(var5)(var3);
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
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
    var4 = var4.validStreamURL;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isStreaming.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isStreaming(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = global;
            var3 = var2.Array;
            var2 = var3.isArray;
            var2 = var2.bind(var3)(var5);
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot2;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            _fun0002_ip = 2; continue _fun0002;
case 8:
            var4 = var5.some;
            var3 = _closure1_slot2;
            var2 = var4.bind(var5)(var3);
case 2:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();