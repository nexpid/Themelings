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
        var1['pollsByChannelId'] = var3;
        var3 = {};
        var1['pollsByMessageId'] = var3;
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
case 0:
                        var5 = arg1;
                        var4 = _closure3_slot2;
                        var2 = var5.pollsByChannelId;
                        var1 = _closure3_slot0;
                        var7 = var2[var1];
                        var1 = null;
                        var6 = var1 == var7;
                        var2 = undefined;
                        var1 = undefined;
                        if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var6 = _closure3_slot1;
                        var1 = var7[var6];
case 2:
                        var4 = var4.bind(var2)(var1);
                        var1 = {};
                        var2 = {};
                        var9 = var5.pollsByChannelId;
                        var10 = var2;
                        var6 = copyDataProperties(var10, var9);
                        var7 = _closure3_slot0;
                        var6 = {};
                        var8 = var5.pollsByChannelId;
                        var9 = var8[var7];
                        var10 = var6;
                        var8 = copyDataProperties(var10, var9);
                        var3 = _closure3_slot1;
                        var6[var3] = var4;
                        var2[var7] = var6;
                        var1['pollsByChannelId'] = var2;
                        var2 = {};
                        var9 = var5.pollsByMessageId;
                        var10 = var2;
                        var5 = copyDataProperties(var10, var9);
                        var2[var3] = var4;
                        var1['pollsByMessageId'] = var2;
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/PollsInteractionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useMessagePollInteractions(arg1) {
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
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = {};
            var _closure3_slot1 = var1;
            var4 = _closure2_slot0;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure3_slot0;
                    var2 = var2.pollsByMessageId;
                    var2 = var2[var3];
                    var4 = null;
                    if(!(var4 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure3_slot1;
                    var1[var3] = var2;
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useMessagePollInteractions'] = var4;
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var2 = var1.pollsByChannelId;
                var1 = _closure2_slot0;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0003_ip = 6; continue _fun0003 }
case 5:
                var1 = _closure1_slot3;
case 6:
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.pollsByChannelId;
                    var5 = var1.pollsByMessageId;
                    var8 = undefined;
                    var _closure4_slot0 = var8;
                    var2 = _closure2_slot0;
                    var7 = var4[var2];
                    var2 = null;
                    if(!(var2 == var7)) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var7 = _closure1_slot3;
case 7:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 3;
                    var2 = var9[var2];
                    var6 = var6.bind(var8)(var2);
                    var2 = var6.keys;
                    var6 = var2.bind(var6)(var7);
                    var2 = {};
                    var11 = var2;
                    var10 = var5;
                    var5 = copyDataProperties(var11, var10);
                    _closure4_slot0 = var2;
                    var5 = var6.forEach;
                    var3 = function(arg1) {
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = delete var2[var1];
                        var1 = undefined;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var3);
                    var3 = {};
                    var11 = var3;
                    var10 = var4;
                    var4 = copyDataProperties(var11, var10);
                    var1 = _closure2_slot0;
                    var1 = delete var3[var1];
                    var1 = {};
                    var1['pollsByChannelId'] = var3;
                    var1['pollsByMessageId'] = var2;
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.pollsByChannelId;
                    var3 = var1.pollsByMessageId;
                    var5 = {};
                    var1 = _closure2_slot0;
                    var1 = var6[var1];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0005_ip = 9; continue _fun0005 }
case 4:
                    var1 = {};
case 9:
                    var8 = var5;
                    var7 = var1;
                    var1 = copyDataProperties(var8, var7);
                    var1 = _closure2_slot1;
                    var2 = delete var5[var1];
                    var2 = {};
                    var8 = var2;
                    var7 = var3;
                    var3 = copyDataProperties(var8, var7);
                    var1 = delete var2[var1];
                    var1 = {};
                    var3 = {};
                    var8 = var3;
                    var7 = var6;
                    var6 = copyDataProperties(var8, var7);
                    var4 = _closure2_slot0;
                    var3[var4] = var5;
                    var1['pollsByChannelId'] = var3;
                    var1['pollsByMessageId'] = var2;
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot4;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var2 = var1.pollsByChannelId;
            var1 = arg1;
            var3 = var2[var1];
            var1 = null;
            var2 = var1 == var3;
            var1 = undefined;
            if(var2) { _fun0006_ip = 10; continue _fun0006 }
case 11:
            var2 = arg2;
            var1 = var3[var2];
case 10:
            return var1;
        }
    };
    var3['getPollState'] = var2;
    return var1;
})();