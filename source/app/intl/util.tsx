// app/intl/util.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getLanguages() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'intl/util.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getAvailableLocales() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var4 = var4.default;
        var _closure2_slot0 = var4;
        var2 = _closure1_slot3;
        var4 = var2.bind(var3)();
        var3 = var4.filter;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.enabled;
            return var1;
        };
        var4 = var3.bind(var4)(var2);
        var3 = var4.map;
        var2 = function(arg1) {
            var1 = arg1;
            var5 = var1.code;
            var2 = var1.name;
            var1 = {};
            var1['value'] = var5;
            var1['name'] = var2;
            var3 = _closure2_slot0;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.runtimeHashMessageKey;
            var2 = var2.bind(var4)(var5);
            var2 = var3[var2];
            var1['localizedName'] = var2;
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var3 = var1.name;
                var1 = arg2;
                var2 = var1.name;
                var1 = var3.toLowerCase;
                var3 = var1.bind(var3)();
                var1 = var2.toLowerCase;
                var2 = var1.bind(var2)();
                var4 = var3 < var2;
                var1 = -1;
                if(var4) { _fun0001_ip = 64; continue _fun0001 }
 49:
                var3 = var3 > var2;
                var2 = 0;
                if(!var3) { _fun0001_ip = 61; continue _fun0001 }
 58:
                var2 = 1;
 61:
                var1 = var2;
 64:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getAvailableLocales'] = var5;
    var3['getLanguages'] = var4;
    var4 = function getNormalizedLocale(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = arg2;
            var3 = _closure1_slot3;
            var2 = undefined;
            var6 = var3.bind(var2)();
            var3 = var6.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.enabled;
                return var1;
            };
            var6 = var3.bind(var6)(var2);
            var3 = var6.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.code;
                return var1;
            };
            var7 = var3.bind(var6)(var2);
            var2 = var7.includes;
            var2 = var2.bind(var7)(var1);
            if(var2) { _fun0002_ip = 205; continue _fun0002 }
 67:
            var3 = var1.split;
            var2 = '-';
            var6 = var3.bind(var1)(var2);
            var _closure2_slot0 = var6;
            var8 = var7.includes;
            var3 = 0;
            var2 = var6[var3];
            var2 = var8.bind(var7)(var2);
            var3 = var6[var3];
            if(var2) { _fun0002_ip = 200; continue _fun0002 }
 108:
            var2 = 'zh';
            if(!(var2 === var3)) { _fun0002_ip = 142; continue _fun0002 }
 116:
            var8 = var6.length;
            var2 = 1;
            if(!(var8 > var2)) { _fun0002_ip = 142; continue _fun0002 }
 128:
            var6 = var6[var2];
            var2 = 'Hant';
            if(!(var2 !== var6)) { _fun0002_ip = 171; continue _fun0002 }
 142:
            var6 = var7.find;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.split;
                var1 = '-';
                var1 = var2.bind(var3)(var1);
                var3 = 0;
                var2 = var1[var3];
                var1 = _closure2_slot0;
                var1 = var1[var3];
                var1 = var2 === var1;
                return var1;
            };
            var6 = var6.bind(var7)(var2);
            var8 = null;
            var2 = var4;
            if(!(var8 != var6)) { _fun0002_ip = 169; continue _fun0002 }
 166:
            var2 = var6;
 169:
            _fun0002_ip = 198; continue _fun0002;
 171:
            var6 = var7.find;
            var5 = function(arg1) {
                var2 = 'zh-TW';
                var1 = arg1;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var6 = null;
            if(!(var6 != var5)) { _fun0002_ip = 195; continue _fun0002 }
 192:
            var4 = var5;
 195:
            var2 = var4;
 198:
            _fun0002_ip = 203; continue _fun0002;
 200:
            var2 = var3;
 203:
            return var2;
 205:
            return var1;
        }
    };
    var3['getNormalizedLocale'] = var4;
    var2 = function useSyncMessages(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot2;
        var3 = var4.useSyncExternalStore;
        var2 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.onChange;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.isLocaleLoaded;
            var1 = _closure2_slot1;
            var1 = var1.currentLocale;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['useSyncMessages'] = var2;
    return var1;
})();