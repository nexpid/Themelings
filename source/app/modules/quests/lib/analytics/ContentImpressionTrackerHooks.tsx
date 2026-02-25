// app/modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useQuestImpression() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot3;
            var3 = var4.useContext;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var2 = var2.QuestImpressionContext;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.current;
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useAdContentImpressionTrackerProps(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var2 = 'questOrQuests';
            var3 = var2 in var6;
            var4 = undefined;
            var7 = undefined;
            if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var7 = var6.questOrQuests;
case 4:
            var3 = 'adContentId';
            var3 = var3 in var6;
            var5 = undefined;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var6.adContentId;
case 6:
            var3 = function useAdContentIds(arg1, arg2) {
                var6 = arg1;
                var5 = arg2;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure3_slot1;
                        var3 = null;
                        if(!(var3 == var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var1 = _closure3_slot0;
                        if(!(var3 == var1)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var1 = new Array(0);
                        _fun0003_ip = 12; continue _fun0003;
case 10:
                        var3 = global;
                        var5 = var3.Array;
                        var4 = var5.isArray;
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var5)(var3);
                        var6 = _closure3_slot0;
                        if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var4 = var6.id;
                        var3 = new Array(1);
                        var3[0] = var4;
                        _fun0003_ip = 15; continue _fun0003;
case 13:
                        var5 = var6.map;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var3 = var5.bind(var6)(var4);
case 15:
                        var1 = var3;
case 12:
                        _fun0003_ip = 16; continue _fun0003;
case 8:
                        var3 = _closure3_slot1;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1 = var2;
case 16:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var7 = var3.bind(var4)(var7, var5);
            var _closure2_slot1 = var7;
            var2 = var2 in var6;
            if(var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var5 = var6.adCreativeType;
            _fun0002_ip = 19; continue _fun0002;
case 17:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.AdCreativeType;
            var5 = var2.QUEST;
case 19:
            var _closure2_slot2 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var6 = var6.questContent;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot1;
                var1['adContentIds'] = var2;
                var2 = _closure2_slot0;
                var2 = var2.questContent;
                var1['questContent'] = var2;
                var8 = var1.adContentIds;
                var6 = var1.questContent;
                var2 = new Array(0);
                var7 = 0;
                var9 = var2;
                var1 = arraySpread(var9, var8, var7);
                var1 = var2.sort;
                var2 = var1.bind(var2)();
                var1 = var2.join;
                var5 = '_';
                var4 = var1.bind(var2)(var5);
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '';
                var2 = var2.bind(var1)(var4, var5, var6);
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 2;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.AdCreativeType;
                var1 = var1.QUEST;
                var1 = {};
                var4 = _closure2_slot1;
                var1['adContentIds'] = var4;
                var3 = _closure2_slot2;
                var1['adCreativeType'] = var3;
                var1['key'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useAdContentImpressionTrackerProps'] = var5;
    var5 = function useQuestStatusChanged(arg1) {
        var1 = arg1;
        var10 = var1.adContentIds;
        var _closure2_slot0 = var10;
        var4 = var1.adCreativeType;
        var _closure2_slot1 = var4;
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 3;
        var6 = var5[var3];
        var3 = undefined;
        var9 = var7.bind(var3)(var6);
        var8 = var9.useStateFromStores;
        var6 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = new Array(2);
        var6[0] = var10;
        var6[1] = var4;
        var4 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = _closure2_slot1;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 2;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var4);
                var1 = var1.AdCreativeType;
                var4 = var1.QUEST;
                var1 = null;
                if(!(var5 === var4)) { _fun0004_ip = 12; continue _fun0004 }
case 20:
                var4 = _closure2_slot0;
                var5 = var4.length;
                var4 = 1;
                var1 = null;
                if(!(var4 === var5)) { _fun0004_ip = 12; continue _fun0004 }
case 21:
                var4 = _closure1_slot4;
                var3 = var4.getQuest;
                var5 = _closure2_slot0;
                var2 = 0;
                var2 = var5[var2];
                var1 = var3.bind(var4)(var2);
case 12:
                return var1;
            }
        };
        var8 = var8.bind(var9)(var7, var4, var6);
        var _closure2_slot2 = var8;
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var4 = new Array(1);
        var4[0] = var8;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure2_slot2;
                var1 = null;
                var3 = var1 == var3;
                if(var3) { _fun0005_ip = 14; continue _fun0005 }
case 22:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getQuestStatus;
                var2 = _closure2_slot2;
                var1 = var3.bind(var4)(var2);
case 14:
                return var1;
            }
        };
        var2 = var6.bind(var7)(var2, var4);
        var4 = _closure1_slot1;
        var1 = 5;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.bind(var3)(var2);
        var1 = var2 !== var1;
        return var1;
    };
    var3['useQuestStatusChanged'] = var5;
    var3['useQuestImpression'] = var4;
    var2 = function useQuestImpressionId() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot5;
            var1 = undefined;
            var3 = var2.bind(var1)();
            var2 = null;
            var2 = var2 == var3;
            if(var2) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var2 = var3.getId;
            var1 = var2.bind(var3)();
case 23:
            return var1;
        }
    };
    var3['useQuestImpressionId'] = var2;
    return var1;
})();