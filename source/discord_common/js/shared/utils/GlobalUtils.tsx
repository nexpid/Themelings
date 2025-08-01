// discord_common/js/shared/utils/GlobalUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var _closure1_slot0 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/utils/GlobalUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGlobalObject() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = global;
            var1 = var2.globalThis;
            var4 = 'undefined';
            var1 = typeof var1;
            if(!(var4 === var1)) { _fun0001_ip = 99; continue _fun0001 }
 19:
            var1 = var2.window;
            var1 = typeof var1;
            if(!(var4 === var1)) { _fun0001_ip = 91; continue _fun0001 }
 31:
            var5 = _closure1_slot0;
            var1 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 85; continue _fun0001 }
 44:
            var1 = var2.self;
            var1 = typeof var1;
            if(!(var4 === var1)) { _fun0001_ip = 77; continue _fun0001 }
 57:
            var5 = var2.Object;
            var4 = var5.create;
            var1 = null;
            var1 = var4.bind(var5)(var1);
            _fun0001_ip = 83; continue _fun0001;
 77:
            var1 = var2.self;
 83:
            _fun0001_ip = 89; continue _fun0001;
 85:
            var1 = _closure1_slot0;
 89:
            _fun0001_ip = 97; continue _fun0001;
 91:
            var1 = var2.window;
 97:
            _fun0001_ip = 105; continue _fun0001;
 99:
            var1 = var2.globalThis;
 105:
            return var1;
        }
    };
    var3['getGlobalObject'] = var2;
    return var1;
})();