// app/modules/polls/PollsInteractionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = {};
    var _closure1_slot3 = var1;
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createWithEqualityFn;
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var3 = {};
        var1['polls'] = var3;
        var2 = function updatePollState(arg1, arg2, arg3) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var1 = arg3;
            var _closure3_slot2 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        var5 = arg1;
                        var1 = {};
                        var2 = {};
                        var12 = var5.polls;
                        var13 = var2;
                        var3 = copyDataProperties(var13, var12);
                        var4 = _closure3_slot0;
                        var3 = {};
                        var6 = var5.polls;
                        var12 = var6[var4];
                        var13 = var3;
                        var6 = copyDataProperties(var13, var12);
                        var6 = _closure3_slot1;
                        var8 = _closure3_slot2;
                        var5 = var5.polls;
                        var10 = var5[var4];
                        var5 = null;
                        var11 = var5 == var10;
                        var7 = undefined;
                        var5 = undefined;
                        if(var11) { _fun0001_ip = 85; continue _fun0001 }
 77:
                        var9 = _closure3_slot1;
                        var5 = var10[var9];
 85:
                        var5 = var8.bind(var7)(var5);
                        var3[var6] = var5;
                        var2[var4] = var3;
                        var1['polls'] = var2;
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['updatePollState'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/PollsInteractionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useChannelPollInteractions(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 2;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var2 = var1.polls;
                var1 = _closure2_slot0;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0002_ip = 33; continue _fun0002 }
 26:
                var1 = _closure1_slot3;
 33:
                return var1;
            }
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useChannelPollInteractions'] = var4;
    var4 = function clearChannelPollState(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.polls;
                var2 = {};
                var4 = var2;
                var1 = copyDataProperties(var4, var3);
                var1 = _closure2_slot0;
                var1 = delete var2[var1];
                var1 = {};
                var1['polls'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearChannelPollState'] = var4;
    var4 = function clearPollState(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.polls;
                    var4 = {};
                    var1 = _closure2_slot0;
                    var1 = var5[var1];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0003_ip = 30; continue _fun0003 }
 28:
                    var1 = {};
 30:
                    var7 = var4;
                    var6 = var1;
                    var1 = copyDataProperties(var7, var6);
                    var1 = _closure2_slot1;
                    var1 = delete var4[var1];
                    var1 = {};
                    var2 = {};
                    var7 = var2;
                    var6 = var5;
                    var5 = copyDataProperties(var7, var6);
                    var3 = _closure2_slot0;
                    var2[var3] = var4;
                    var1['polls'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearPollState'] = var4;
    var4 = function updatePollState(arg1, arg2, arg3) {
        var2 = _closure1_slot4;
        var1 = var2.getState;
        var5 = var1.bind(var2)();
        var4 = var5.updatePollState;
        var3 = arg1;
        var2 = arg2;
        var1 = arg3;
        var1 = var4.bind(var5)(var3, var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['updatePollState'] = var4;
    var2 = function getPollState(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot4;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var2 = var1.polls;
            var1 = arg1;
            var3 = var2[var1];
            var1 = null;
            var2 = var1 == var3;
            var1 = undefined;
            if(var2) { _fun0004_ip = 48; continue _fun0004 }
 41:
            var2 = arg2;
            var1 = var3[var2];
 48:
            return var1;
        }
    };
    var3['getPollState'] = var2;
    return var1;
})();