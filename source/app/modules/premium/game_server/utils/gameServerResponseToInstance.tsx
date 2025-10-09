// app/modules/premium/game_server/utils/gameServerResponseToInstance.tsx
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
    var2 = 'modules/premium/game_server/utils/gameServerResponseToInstance.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function gameServerResponseToInstance(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.name;
            var1['name'] = var3;
            var3 = var2.region_id;
            var1['regionId'] = var3;
            var3 = var2.region_name;
            var1['regionName'] = var3;
            var3 = var2.sku_id;
            var1['planId'] = var3;
            var3 = var2.plan_name;
            var1['planName'] = var3;
            var4 = var2.players_count;
            var3 = null;
            var5 = var3 != var4;
            var3 = 0;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4;
case 2:
            var1['onlineConnectionsCount'] = var3;
            var3 = var2.max_players_count;
            var1['maxConnectionsCount'] = var3;
            var3 = var2.ip;
            var1['serverIP'] = var3;
            var3 = var2.port;
            var1['port'] = var3;
            var3 = var2.entitlement_id;
            var1['entitlementId'] = var3;
            var3 = var2.provider_type;
            var1['providerType'] = var3;
            var3 = var2.provider_url;
            var1['gameServerPanelUrl'] = var3;
            var3 = var2.status;
            var1['status'] = var3;
            var3 = var2.game_id;
            var1['gameId'] = var3;
            var2 = var2.game_config;
            var1['gameConfig'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();