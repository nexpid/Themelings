// app/modules/suppress_notifications/parseContentForSuppressNotifications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var2 = true;
    var5['value'] = var2;
    var2 = '__esModule';
    var2 = var6.bind(var7)(var3, var2, var5);
    var5 = var1.RegExp;
    var1 = var1.HermesInternal;
    var7 = var1.concat;
    var6 = '^';
    var2 = '@silent';
    var1 = '(\\s|$)';
    var10 = var7.bind(var6)(var2, var1);
    var2 = var5.prototype;
    var2 = Object.create(var2, {constructor: {value: var5}});
    var11 = var2;
    var1 = new var11[var5](var10, var9);
    var2 = var1 instanceof Object ? var1 : var2;
    var _closure1_slot0 = var2;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/suppress_notifications/parseContentForSuppressNotifications.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function parseContentForSuppressNotifications(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.match;
            var1 = _closure1_slot0;
            var1 = var4.bind(var3)(var1);
            if(!(var2 != var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = new Array(2);
            var2 = true;
            var1[0] = var2;
            var4 = var3.substring;
            var2 = 7;
            var4 = var4.bind(var3)(var2);
            var2 = var4.trim;
            var2 = var2.bind(var4)();
            var1[1] = var2;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = new Array(2);
            var4 = false;
            var2[0] = var4;
            var2[1] = var3;
            var1 = var2;
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var2 = new Array(2);
            var3 = false;
            var2[0] = var3;
            var3 = '';
            var2[1] = var3;
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['SILENT_RE'] = var2;
    return var1;
})();