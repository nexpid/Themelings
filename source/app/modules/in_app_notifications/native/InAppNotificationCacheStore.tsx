// app/modules/in_app_notifications/native/InAppNotificationCacheStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = {'key': null, 'expanded': false, 'percentRemainingDuration': 100, 'forceRenderInMainNavigator': false};
    var _closure1_slot0 = var1;
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.create;
    var4 = function() {
        var1 = {};
        var3 = _closure1_slot0;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/InAppNotificationCacheStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot1;
            var1 = undefined;
            var1 = var3.bind(var1)();
            var3 = null;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.key;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = _closure1_slot0;
case 4:
            return var1;
        }
    };
    var3['useInAppNotificationCacheStore'] = var4;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = _closure1_slot1;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var1 = var1.key;
            if(!(var1 === var5)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = _closure1_slot1;
            var1 = var2.setState;
            var1 = var1.bind(var2)(var4);
            _fun0002_ip = 7; continue _fun0002;
case 5:
            var3 = _closure1_slot1;
            var2 = var3.setState;
            var1 = {};
            var7 = _closure1_slot0;
            var8 = var1;
            var6 = copyDataProperties(var8, var7);
            var8 = var1;
            var7 = var4;
            var4 = copyDataProperties(var8, var7);
            var4 = 'key';
            var1[3] = var5;
            var1 = var2.bind(var3)(var1);
case 7:
            var1 = undefined;
            return var1;
        }
    };
    var3['updateInAppNotificationCacheStore'] = var2;
    return var1;
})();