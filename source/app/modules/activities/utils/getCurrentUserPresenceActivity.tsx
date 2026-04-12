// app/modules/activities/utils/getCurrentUserPresenceActivity.tsx
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
    var2 = 'modules/activities/utils/getCurrentUserPresenceActivity.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function getCurrentUserPresenceActivity(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var8;
            var4 = null;
            var2 = var4 == var8;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6.getApplicationActivity;
            var2 = var2.bind(var6)(var8);
            if(!(var4 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var5.getApplicationActivity;
            var6 = true;
            var2 = var7.bind(var5)(var8, var6);
case 4:
            if(!(var4 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.getHiddenActivities;
            var5 = var4.bind(var5)();
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.application_id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var5)(var3);
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();