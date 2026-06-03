// app/modules/quests/lib/analytics/QuestHomeSearchSession.tsx
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
    var1 = null;
    var _closure1_slot2 = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/lib/analytics/QuestHomeSearchSession.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getOrCreateQuestHomeSearchSession() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var5 = var1.bind(var2)();
            var2 = _closure1_slot2;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot2;
            var1['lastUsedTimestamp'] = var5;
            var1 = {};
            var2 = _closure1_slot2;
            var1['searchSession'] = var2;
            var2 = false;
            var1['isNew'] = var2;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = {};
            var3 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 0;
            var9 = var8[var6];
            var6 = undefined;
            var10 = var7.bind(var6)(var9);
            var9 = var10.v4;
            var9 = var9.bind(var10)();
            var3['uuid'] = var9;
            var3['createdAtTimestamp'] = var5;
            var3['lastUsedTimestamp'] = var5;
            var5 = 1;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.CLIENT_SESSION_STORAGE_VERSION;
            var3['version'] = var5;
            _closure1_slot2 = var3;
            var2['searchSession'] = var3;
            var3 = true;
            var2['isNew'] = var3;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['getOrCreateQuestHomeSearchSession'] = var4;
    var4 = function clearQuestHomeSearchSession() {
        var1 = null;
        _closure1_slot2 = var1;
        var1 = undefined;
        return var1;
    };
    var3['clearQuestHomeSearchSession'] = var4;
    var2 = function getCurrentQuestHomeSearchSession() {
        var1 = _closure1_slot2;
        return var1;
    };
    var3['getCurrentQuestHomeSearchSession'] = var2;
    return var1;
})();