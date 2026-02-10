// app/modules/quests/QuestBarUnfurlStore.tsx
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
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var7 = var5.bind(var1)(var4);
    var4 = var7.createWithEqualityFn;
    var4 = var4.bind(var7)();
    var11 = 1;
    var7 = var6[var11];
    var9 = var5.bind(var1)(var7);
    var8 = var9.persist;
    var7 = {};
    var12 = 'questBarUnfurlState';
    var7['name'] = var12;
    var11 = var6[var11];
    var13 = var5.bind(var1)(var11);
    var12 = var13.createJSONStorage;
    var11 = function() {
        var1 = {};
        var3 = function getItem(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.Storage;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1['getItem'] = var3;
        var3 = function setItem(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var4 = var1.Storage;
            var3 = var4.set;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['setItem'] = var3;
        var2 = function removeItem(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.Storage;
            var2 = var3.remove;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['removeItem'] = var2;
        return var1;
    };
    var11 = var12.bind(var13)(var11);
    var7['storage'] = var11;
    var11 = function partialize(arg1) {
        var1 = {};
        var2 = arg1;
        var2 = var2.seenUnfurlQuestIds;
        var1['seenUnfurlQuestIds'] = var2;
        return var1;
    };
    var7['partialize'] = var11;
    var7['version'] = var10;
    var2 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var3 = {};
        var1['seenUnfurlQuestIds'] = var3;
        var3 = function markUnfurlSeen(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var7 = var3.seenUnfurlQuestIds;
                    var3 = _closure3_slot0;
                    var3 = var7[var3];
                    var6 = true;
                    if(!(var6 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot0;
                    var2 = {};
                    var4 = {};
                    var9 = var4;
                    var8 = var7;
                    var7 = copyDataProperties(var9, var8);
                    var5 = _closure3_slot0;
                    var4[var5] = var6;
                    var2['seenUnfurlQuestIds'] = var4;
                    var2 = var3.bind(var1)(var2);
case 4:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['markUnfurlSeen'] = var3;
        var2 = function clearUserState() {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = {};
            var2['seenUnfurlQuestIds'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['clearUserState'] = var2;
        return var1;
    };
    var2 = var8.bind(var9)(var2, var7);
    var2 = var4.bind(var1)(var2);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/QuestBarUnfurlStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['useQuestBarUnfurlStore'] = var2;
    return var1;
})();