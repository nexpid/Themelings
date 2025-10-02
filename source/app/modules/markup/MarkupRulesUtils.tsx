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
case 0:
            var2 = arg1;
            var1 = var2.content;
            var3 = 'string';
            var1 = typeof var1;
            if(!(var3 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.content;
            var5 = undefined;
            if(!(var5 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = var2.content;
            var3 = arg2;
            var1 = arg3;
            var1 = var3.bind(var5)(var4, var1);
            _fun0001_ip = 5; continue _fun0001;
case 2:
            var1 = var2.content;
case 5:
            return var1;
        }
    };
    var3['smartOutput'] = var4;
    var2 = function isStaticRouteIconType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = 'home';
            var1 = var1 === var3;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = 'browse';
            var1 = var2 === var3;
case 6:
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = 'customize';
            var1 = var2 === var3;
case 8:
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = 'guide';
            var1 = var2 === var3;
case 10:
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = 'linked-roles';
            var1 = var2 === var3;
case 12:
            return var1;
        }
    };
    var3['isStaticRouteIconType'] = var2;
    return var1;
})();