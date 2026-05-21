// app/modules/in_app_notifications/native/InAppNotificationReactExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.createApexExperiment;
    var4 = {'name': '2026-04-in-app-notification-react', 'kind': 'user'};
    var9 = {'quickReact': false, 'expandedSize': false};
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {'quickReact': false, 'expandedSize': true};
    var9[1] = var10;
    var10 = {'quickReact': true, 'expandedSize': true};
    var9[2] = var10;
    var4['variations'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/in_app_notifications/native/InAppNotificationReactExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['InAppNotificationReactExperiment'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.useCanExpandInAppNotification;
            var2 = var2.bind(var3)(var8);
            var3 = var2.canExpand;
            var4 = _closure1_slot2;
            var2 = var4.useConfig;
            var1 = {};
            var5 = var8;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'Ineligible - ';
            var5 = var7.bind(var6)(var8);
case 2:
            var1['location'] = var5;
            var2 = var2.bind(var4)(var1);
            var4 = var2.quickReact;
            var1 = {};
            var3 = !var3;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4;
case 4:
            var1['quickReact'] = var3;
            var2 = var2.expandedSize;
            var1['expandedSize'] = var2;
            return var1;
        }
    };
    var3['useInAppNotificationReact'] = var2;
    return var1;
})();