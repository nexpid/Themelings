// app/modules/stage_channels/useStageBlockedUsersCount.tsx
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
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useStageBlockedUsersCount.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useStageBlockedUsersCount(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                var2 = var1 != var2;
                var1 = 0;
                if(!var2) { _fun0001_ip = 75; continue _fun0001 }
 18:
                var5 = _closure1_slot2;
                var4 = var5.getParticipantCount;
                var3 = _closure2_slot0;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.StageChannelParticipantNamedIndex;
                var2 = var2.BLOCKED;
                var1 = var4.bind(var5)(var3, var2);
 75:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useStageBlockedUsersCount'] = var4;
    var4 = function useStageIgnoredUsersCount(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                var2 = var1 != var2;
                var1 = 0;
                if(!var2) { _fun0002_ip = 75; continue _fun0002 }
 18:
                var5 = _closure1_slot2;
                var4 = var5.getParticipantCount;
                var3 = _closure2_slot0;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.StageChannelParticipantNamedIndex;
                var2 = var2.IGNORED;
                var1 = var4.bind(var5)(var3, var2);
 75:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useStageIgnoredUsersCount'] = var4;
    var4 = function getStageBlockedUsersCount(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot2;
            var3 = var4.getParticipantCount;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var2);
            var1 = var1.StageChannelParticipantNamedIndex;
            var2 = var1.BLOCKED;
            var1 = arg1;
            var2 = var3.bind(var4)(var1, var2);
            var1 = null;
            var3 = var1 != var2;
            var1 = 0;
            if(!var3) { _fun0003_ip = 70; continue _fun0003 }
 67:
            var1 = var2;
 70:
            return var1;
        }
    };
    var3['getStageBlockedUsersCount'] = var4;
    var4 = function getStageIgnoredUsersCount(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = _closure1_slot2;
            var3 = var4.getParticipantCount;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var2);
            var1 = var1.StageChannelParticipantNamedIndex;
            var2 = var1.IGNORED;
            var1 = arg1;
            var2 = var3.bind(var4)(var1, var2);
            var1 = null;
            var3 = var1 != var2;
            var1 = 0;
            if(!var3) { _fun0004_ip = 70; continue _fun0004 }
 67:
            var1 = var2;
 70:
            return var1;
        }
    };
    var3['getStageIgnoredUsersCount'] = var4;
    var4 = function useStageBlockedUsers(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure1_slot2;
            var3 = var4.getMutableParticipants;
            var2 = _closure2_slot0;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var5 = var5[var1];
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var1 = var1.StageChannelParticipantNamedIndex;
            var1 = var1.BLOCKED;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useStageBlockedUsers'] = var4;
    var2 = function useStageIgnoredUsers(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure1_slot2;
            var3 = var4.getMutableParticipants;
            var2 = _closure2_slot0;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var5 = var5[var1];
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var1 = var1.StageChannelParticipantNamedIndex;
            var1 = var1.IGNORED;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useStageIgnoredUsers'] = var2;
    return var1;
})();