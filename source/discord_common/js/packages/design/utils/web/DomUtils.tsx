// discord_common/js/packages/design/utils/web/DomUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
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
    var4 = '../discord_common/js/packages/design/utils/web/DomUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isElement(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 95; continue _fun0001 }
 12:
            var6 = var1 == var3;
            var4 = undefined;
            if(var6) { _fun0001_ip = 42; continue _fun0001 }
 21:
            var6 = var3.ownerDocument;
            var7 = var1 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 42; continue _fun0001 }
 36:
            var4 = var6.defaultView;
 42:
            if(!(var1 != var4)) { _fun0001_ip = 91; continue _fun0001 }
 46:
            var6 = var1 == var2;
            var5 = undefined;
            if(var6) { _fun0001_ip = 60; continue _fun0001 }
 55:
            var5 = var2.name;
 60:
            var6 = var1 != var5;
            var2 = 'Element';
            if(!var6) { _fun0001_ip = 74; continue _fun0001 }
 71:
            var2 = var5;
 74:
            var2 = var4[var2];
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 89; continue _fun0001 }
 85:
            var1 = var3 instanceof var2;
 89:
            return var1;
 91:
            var1 = false;
            return var1;
 95:
            var1 = false;
            return var1;
        }
    };
    var3['isElement'] = var4;
    var2 = function cssValueToNumber(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = global;
            var5 = var1.parseInt;
            var3 = undefined;
            var4 = arg1;
            var2 = 10;
            var2 = var5.bind(var3)(var4, var2);
            var1 = var1.isNaN;
            var3 = var1.bind(var3)(var2);
            var1 = 0;
            if(var3) { _fun0002_ip = 41; continue _fun0002 }
 38:
            var1 = var2;
 41:
            return var1;
        }
    };
    var3['cssValueToNumber'] = var2;
    return var1;
})();