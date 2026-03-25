// app/utils/PathUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function pathBasename(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var3 = var5.split;
            var1 = /[/\\]/;
            var3 = var3.bind(var5)(var1);
            var1 = var3.length;
            var4 = 1;
            var1 = var1 - var4;
            var6 = var3[var1];
            var1 = '';
            if(!(var1 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.length;
            var1 = var1 - var4;
            var5 = var3[var1];
case 2:
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var5.endsWith;
            var3 = var1.bind(var5)(var2);
case 4:
            var1 = var5;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.slice;
            var2 = var2.length;
            var3 = -var2;
            var2 = 0;
            var1 = var4.bind(var5)(var2, var3);
case 6:
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 1;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/PathUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function pathJoin(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = 0;
            var5 = 0;
            var4 = copyRestArgs(var5);
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = var1[var2];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isWindows;
            var1 = var1.bind(var2)();
            var3 = '/';
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = '\\';
case 8:
            var2 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = var2.join;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['pathJoin'] = var5;
    var3['pathBasename'] = var4;
    var2 = function pathFilenameWithoutExt(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = arg1;
            var5 = var3.bind(var2)(var1);
            var2 = var5.lastIndexOf;
            var1 = '.';
            var4 = var2.bind(var5)(var1);
            var3 = 0;
            var1 = var5;
            if(!(!(var4 <= var3))) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = var5.slice;
            var1 = var2.bind(var5)(var3, var4);
case 10:
            return var1;
        }
    };
    var3['pathFilenameWithoutExt'] = var2;
    return var1;
})();