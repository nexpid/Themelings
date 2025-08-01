// app/modules/go_live/utils/getTitleFromPickedStreamContent.tsx
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
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/utils/getTitleFromPickedStreamContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getTitleFromPickedStreamContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.windows;
            var1 = var1.length;
            var9 = 0;
            if(!(!(var1 > var9))) { _fun0001_ip = 162; continue _fun0001 }
 25:
            var1 = var3.applications;
            var1 = var1.length;
            if(!(!(var1 > var9))) { _fun0001_ip = 123; continue _fun0001 }
 40:
            var1 = var3.displays;
            var1 = var1.length;
            var4 = var1 > var9;
            var1 = null;
            if(!var4) { _fun0001_ip = 121; continue _fun0001 }
 62:
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var5 = var4[var9];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var4[var9];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.R4wpLC;
            var1 = var5.bind(var6)(var4);
 121:
            _fun0001_ip = 160; continue _fun0001;
 123:
            var6 = var3.applications;
            var5 = var6.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.name;
                return var1;
            };
            var6 = var5.bind(var6)(var4);
            var5 = var6.join;
            var4 = ', ';
            var1 = var5.bind(var6)(var4);
 160:
            _fun0001_ip = 199; continue _fun0001;
 162:
            var4 = var3.windows;
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.title;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.join;
            var2 = ', ';
            var1 = var3.bind(var4)(var2);
 199:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();