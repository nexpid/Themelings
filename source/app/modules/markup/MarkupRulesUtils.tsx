// app/modules/markup/MarkupRulesUtils.tsx
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
    var4 = 'modules/markup/MarkupRulesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function smartOutput(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.content;
            var3 = 'string';
            var1 = typeof var1;
            if(!(var3 !== var1)) { _fun0001_ip = 49; continue _fun0001 }
 19:
            var1 = var2.content;
            var5 = undefined;
            if(!(var5 !== var1)) { _fun0001_ip = 49; continue _fun0001 }
 30:
            var4 = var2.content;
            var3 = arg2;
            var1 = arg3;
            var1 = var3.bind(var5)(var4, var1);
            _fun0001_ip = 54; continue _fun0001;
 49:
            var1 = var2.content;
 54:
            return var1;
        }
    };
    var3['smartOutput'] = var4;
    var2 = function isStaticRouteIconType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var1 = 'home';
            var1 = var1 === var3;
            if(var1) { _fun0002_ip = 24; continue _fun0002 }
 14:
            var2 = 'browse';
            var1 = var2 === var3;
 24:
            if(var1) { _fun0002_ip = 37; continue _fun0002 }
 27:
            var2 = 'customize';
            var1 = var2 === var3;
 37:
            if(var1) { _fun0002_ip = 50; continue _fun0002 }
 40:
            var2 = 'guide';
            var1 = var2 === var3;
 50:
            if(var1) { _fun0002_ip = 63; continue _fun0002 }
 53:
            var2 = 'linked-roles';
            var1 = var2 === var3;
 63:
            return var1;
        }
    };
    var3['isStaticRouteIconType'] = var2;
    return var1;
})();