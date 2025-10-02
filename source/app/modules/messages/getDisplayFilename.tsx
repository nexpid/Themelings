// app/modules/messages/getDisplayFilename.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/messages/getDisplayFilename.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getDisplayFilename(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.title;
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.filename;
            if(!(var3 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var2 = var1.filename;
            return var2;
case 4:
            var4 = var1.filename;
            var3 = var4.lastIndexOf;
            var2 = '.';
            var5 = var3.bind(var4)(var2);
            var2 = 0;
            var3 = var5 > var2;
            var2 = '';
            if(!var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = var1.filename;
            var3 = var4.substr;
            var2 = var3.bind(var4)(var5);
case 5:
            var1 = var1.title;
            var1 = var1 + var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();