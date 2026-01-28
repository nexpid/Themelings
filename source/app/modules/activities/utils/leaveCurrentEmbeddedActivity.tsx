// app/modules/activities/utils/leaveCurrentEmbeddedActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/leaveCurrentEmbeddedActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function leaveCurrentEmbeddedActivity() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = var3.getCurrentEmbeddedActivity;
            var4 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var3 = var1.bind(var2)();
            var2 = var3.leaveActivity;
            var1 = {};
            var5 = var4.location;
            var1['location'] = var5;
            var4 = var4.applicationId;
            var1['applicationId'] = var4;
            var4 = false;
            var1['showFeedback'] = var4;
            var1 = var2.bind(var3)(var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['leaveCurrentEmbeddedActivity'] = var2;
    return var1;
})();