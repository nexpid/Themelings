// app/modules/activities/RemoteJoinGameInviteExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2025-08-remote-join-game-invite', 'kind': 'user'};
    var9 = {};
    var12 = false;
    var9['enableRemoteJoin'] = var12;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enableRemoteJoin'] = var12;
    var9[0] = var10;
    var10 = {};
    var10['enableRemoteJoin'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/RemoteJoinGameInviteExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getIsRemoteJoinGameInviteEnabled() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot2;
            var3 = var4.getConfig;
            var1 = {};
            var5 = 'useIsRemoteJoinGameInviteEnabled';
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enableRemoteJoin;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.RichPresenceActivityInviteRedesignExperiment;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            if(!var1) { _fun0001_ip = 92; continue _fun0001 }
 89:
            var1 = var2;
 92:
            return var1;
        }
    };
    var3['getIsRemoteJoinGameInviteEnabled'] = var2;
    return var1;
})();