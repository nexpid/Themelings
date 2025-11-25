// app/modules/instant_invite/InvitesRefreshExperiment.tsx
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
    var4 = {'kind': 'user', 'id': '2025-09_invite_refresh_entrypoints', 'label': 'Invites Refresh Entrypoints Only'};
    var10 = {'isVoiceChannelEntrypointEnabled': false, 'isInCallEntrypointEnabled': false, 'isGuildEntrypointEnabled': false, 'isTextChannelEntrypointEnabled': false};
    var4['defaultConfig'] = var10;
    var5 = var5.CONNECTION_OPEN;
    var4['commonTriggerPoint'] = var5;
    var5 = {'id': 1, 'label': 'Refresh - VC Entrypoints'};
    var10 = {'isVoiceChannelEntrypointEnabled': true, 'isInCallEntrypointEnabled': false, 'isGuildEntrypointEnabled': false, 'isTextChannelEntrypointEnabled': false};
    var5['config'] = var10;
    var10 = new Array(4);
    var10[0] = var5;
    var11 = {'id': 2, 'label': 'Refresh - In Call Entrypoints'};
    var5 = 2;
    var12 = {'isVoiceChannelEntrypointEnabled': false, 'isInCallEntrypointEnabled': true, 'isGuildEntrypointEnabled': false, 'isTextChannelEntrypointEnabled': false};
    var11['config'] = var12;
    var10[1] = var11;
    var11 = {'id': 3, 'label': 'Refresh - Guild Entrypoints'};
    var12 = {'isVoiceChannelEntrypointEnabled': false, 'isInCallEntrypointEnabled': false, 'isGuildEntrypointEnabled': true, 'isTextChannelEntrypointEnabled': false};
    var11['config'] = var12;
    var10[2] = var11;
    var11 = {'id': 4, 'label': 'Refresh - Text Channel Entrypoints'};
    var12 = {'isVoiceChannelEntrypointEnabled': false, 'isInCallEntrypointEnabled': false, 'isGuildEntrypointEnabled': false, 'isTextChannelEntrypointEnabled': true};
    var11['config'] = var12;
    var10[3] = var11;
    var4['treatments'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot0 = var4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/instant_invite/InvitesRefreshExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['InvitesRefreshEntrypointsExperiment'] = var4;
    var4 = function getInvitesRefresh(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.location;
            var3 = _closure1_slot0;
            var2 = var3.getCurrentConfig;
            var1 = {};
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var2 = var1.isVoiceChannelEntrypointEnabled;
            var4 = var1.isInCallEntrypointEnabled;
            var3 = var1.isGuildEntrypointEnabled;
            var1 = var1.isTextChannelEntrypointEnabled;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4;
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var1;
case 6:
            var1 = {};
            var1['isVoiceChannelEntrypointEnabled'] = var2;
            var1['isInCallEntrypointEnabled'] = var2;
            var1['isGuildEntrypointEnabled'] = var2;
            var1['isTextChannelEntrypointEnabled'] = var2;
            return var1;
        }
    };
    var3['getInvitesRefresh'] = var4;
    var2 = function useInvitesRefresh(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var1['location'] = var4;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var3 = var2.isVoiceChannelEntrypointEnabled;
        var1['isVoiceChannelEntrypointEnabled'] = var3;
        var3 = var2.isInCallEntrypointEnabled;
        var1['isInCallEntrypointEnabled'] = var3;
        var3 = var2.isGuildEntrypointEnabled;
        var1['isGuildEntrypointEnabled'] = var3;
        var2 = var2.isTextChannelEntrypointEnabled;
        var1['isTextChannelEntrypointEnabled'] = var2;
        return var1;
    };
    var3['useInvitesRefresh'] = var2;
    return var1;
})();