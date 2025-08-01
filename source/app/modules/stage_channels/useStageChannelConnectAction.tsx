// app/modules/stage_channels/useStageChannelConnectAction.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var4 = {};
    var6 = 0;
    var4['NORMAL'] = var6;
    var1 = 'NORMAL';
    var4[var6] = var1;
    var6 = 1;
    var4['START_EVENT'] = var6;
    var1 = 'START_EVENT';
    var4[var6] = var1;
    var _closure1_slot2 = var4;
    var1 = 2;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/useStageChannelConnectAction.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useStageChannelConnectAction(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 0;
            var1 = var7[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var3 = var1.bind(var5)(var6);
            var1 = 1;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = true;
            var1 = var4.bind(var5)(var6, var1);
            var1 = var1.moderator;
            if(var3) { _fun0001_ip = 76; continue _fun0001 }
 61:
            if(!var1) { _fun0001_ip = 76; continue _fun0001 }
 64:
            var1 = _closure1_slot2;
            var1 = var1.START_EVENT;
            _fun0001_ip = 86; continue _fun0001;
 76:
            var2 = _closure1_slot2;
            var1 = var2.NORMAL;
 86:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['ChannelConnectAction'] = var4;
    var2 = function useStageChannelStartEvent(arg1) {
        var5 = arg1;
        var1 = {};
        var3 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 0;
        var2 = var6[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var2 = var2.bind(var4)(var5);
        var1['isLive'] = var2;
        var2 = 1;
        var2 = var6[var2];
        var3 = var3.bind(var4)(var2);
        var2 = true;
        var2 = var3.bind(var4)(var5, var2);
        var2 = var2.moderator;
        var1['isModerator'] = var2;
        return var1;
    };
    var3['useStageChannelStartEvent'] = var2;
    return var1;
})();