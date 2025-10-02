// app/modules/friends/experiments/FriendsPopoutExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
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
    var4 = var6.bind(var1)(var4);
    var5 = var4.CommonTriggerPoints;
    var4 = 1;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var8 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-03_friends_popout', 'label': 'Friends Popout'};
    var5 = var5.CONNECTION_OPEN;
    var4['commonTriggerPoint'] = var5;
    var5 = {'enableTopNavButton': false, 'enableOverlayWidget': false};
    var4['defaultConfig'] = var5;
    var5 = {'id': 1, 'label': 'All Enabled'};
    var10 = {'enableTopNavButton': true, 'enableOverlayWidget': true};
    var5['config'] = var10;
    var10 = new Array(2);
    var10[0] = var5;
    var11 = {'id': 2, 'label': 'Top Nav Only'};
    var5 = 2;
    var12 = {'enableTopNavButton': true, 'enableOverlayWidget': false};
    var11['config'] = var12;
    var10[1] = var11;
    var4['treatments'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot0 = var4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/friends/experiments/FriendsPopoutExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['FriendsPopoutExperiment'] = var4;
    var4 = function useFriendsPopoutExperiment(arg1) {
        var1 = arg1;
        var1 = var1.location;
        var4 = _closure1_slot0;
        var3 = var4.useExperiment;
        var2 = {};
        var2['location'] = var1;
        var1 = {};
        var5 = true;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useFriendsPopoutExperiment'] = var4;
    var2 = function getFriendsPopoutEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var4 = _closure1_slot0;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getFriendsPopoutEnabled'] = var2;
    return var1;
})();