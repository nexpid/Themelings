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
case 0:
            var2 = global;
            var1 = var2.globalThis;
            var4 = 'undefined';
            var1 = typeof var1;
            if(!(var4 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.window;
            var1 = typeof var1;
            if(!(var4 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var1 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2.self;
            var1 = typeof var1;
            if(!(var4 === var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var2.Object;
            var4 = var5.create;
            var1 = null;
            var1 = var4.bind(var5)(var1);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var1 = var2.self;
case 10:
            _fun0001_ip = 11; continue _fun0001;
case 6:
            var1 = _closure1_slot0;
case 11:
            _fun0001_ip = 12; continue _fun0001;
case 4:
            var1 = var2.window;
case 12:
            _fun0001_ip = 13; continue _fun0001;
case 2:
            var1 = var2.globalThis;
case 13:
            return var1;
        }
    };
    var3['getGlobalObject'] = var2;
    return var1;
})();