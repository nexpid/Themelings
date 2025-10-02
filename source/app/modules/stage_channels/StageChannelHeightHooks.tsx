// app/modules/stage_channels/StageChannelHeightHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageChannelHeightHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGetStageRTCPanelHeight(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = 0;
            var3 = var1[var2];
            var4 = undefined;
            var7 = var6.bind(var4)(var3);
            var3 = var7.useStageBlockedUsersCount;
            var3 = var3.bind(var7)(var5);
            var1 = var1[var2];
            var4 = var6.bind(var4)(var1);
            var1 = var4.useStageIgnoredUsersCount;
            var1 = var1.bind(var4)(var5);
            if(!(!(var3 > var2))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1 > var2;
            var1 = 68;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = 88;
case 4:
            return var1;
        }
    };
    var3['useGetStageRTCPanelHeight'] = var4;
    var2 = function useGetActionBarHeight(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = 0;
            var3 = var1[var2];
            var4 = undefined;
            var7 = var6.bind(var4)(var3);
            var3 = var7.useStageBlockedUsersCount;
            var3 = var3.bind(var7)(var5);
            var1 = var1[var2];
            var4 = var6.bind(var4)(var1);
            var1 = var4.useStageIgnoredUsersCount;
            var1 = var1.bind(var4)(var5);
            if(!(!(var3 > var2))) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var2 = var1 > var2;
            var1 = 112;
            if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 2:
            var1 = 132;
case 4:
            return var1;
        }
    };
    var3['useGetActionBarHeight'] = var2;
    return var1;
})();