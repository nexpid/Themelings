// app/modules/quests/types/v2/Task.tsx
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
    var1 = function _firstPartyTasksFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var1 = {};
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var5 = var2.bind(var3)(var6);
            var2 = var5.length;
            var4 = 0;
            var2 = var4 < var2;
            var3 = null;
            if(!var2) { _fun0001_ip = 102; continue _fun0001 }
 39:
            var7 = var5[var4];
            var8 = var6[var7];
            if(!(var3 != var8)) { _fun0001_ip = 90; continue _fun0001 }
 51:
            var2 = {};
            var9 = var8.event_name;
            var2['eventName'] = var9;
            var9 = var8.target;
            var2['target'] = var9;
            var8 = var8.external_ids;
            var2['externalIds'] = var8;
            var1[var7] = var2;
 90:
            var4 = var4 + 1;
            var2 = var5.length;
            if(var4 < var2) { _fun0001_ip = 39; continue _fun0001 }
 102:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function _thirdPartyTasksFromServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var1 = {};
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var5 = var2.bind(var3)(var6);
            var2 = var5.length;
            var4 = 0;
            var2 = var4 < var2;
            var3 = null;
            if(!var2) { _fun0002_ip = 109; continue _fun0002 }
 39:
            var7 = var5[var4];
            var8 = var6[var7];
            if(!(var3 != var8)) { _fun0002_ip = 97; continue _fun0002 }
 51:
            var2 = {};
            var9 = var8.event_name;
            var2['eventName'] = var9;
            var9 = var8.title;
            var2['title'] = var9;
            var9 = var8.target;
            var2['target'] = var9;
            var8 = var8.description;
            var2['description'] = var8;
            var1[var7] = var2;
 97:
            var4 = var4 + 1;
            var2 = var5.length;
            if(var4 < var2) { _fun0002_ip = 39; continue _fun0002 }
 109:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function _questTaskFromServer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var4 = var2.type;
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var3 = 1;
            var1 = var1[var3];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.WATCH_VIDEO;
            if(!(var1 !== var4)) { _fun0003_ip = 916; continue _fun0003 }
 52:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var3];
            var1 = var7.bind(var5)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.WATCH_VIDEO_ON_MOBILE;
            if(!(var1 !== var4)) { _fun0003_ip = 803; continue _fun0003 }
 88:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var3];
            var1 = var7.bind(var5)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.PLAY_ON_DESKTOP;
            if(!(var1 !== var4)) { _fun0003_ip = 755; continue _fun0003 }
 124:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var3];
            var1 = var7.bind(var5)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.STREAM_ON_DESKTOP;
            if(!(var1 !== var4)) { _fun0003_ip = 707; continue _fun0003 }
 160:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var3];
            var1 = var7.bind(var5)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.PLAY_ACTIVITY;
            if(!(var1 !== var4)) { _fun0003_ip = 659; continue _fun0003 }
 196:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var3];
            var1 = var7.bind(var5)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.PLAY_ON_XBOX;
            if(!(var1 !== var4)) { _fun0003_ip = 600; continue _fun0003 }
 232:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var3];
            var1 = var7.bind(var5)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.PLAY_ON_PLAYSTATION;
            if(!(var1 !== var4)) { _fun0003_ip = 541; continue _fun0003 }
 268:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var3];
            var1 = var7.bind(var5)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.ACHIEVEMENT_IN_GAME;
            if(!(var1 !== var4)) { _fun0003_ip = 441; continue _fun0003 }
 304:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var3];
            var1 = var7.bind(var5)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.ACHIEVEMENT_IN_ACTIVITY;
            if(!(var1 !== var4)) { _fun0003_ip = 341; continue _fun0003 }
 337:
            var1 = null;
            return var1;
 341:
            var1 = {};
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var3];
            var4 = var7.bind(var5)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var4 = var4.ACHIEVEMENT_IN_ACTIVITY;
            var1['type'] = var4;
            var4 = var2.target;
            var1['target'] = var4;
            var4 = var2.event_name;
            var1['eventName'] = var4;
            var4 = {};
            var7 = var2.messages;
            var7 = var7.task_title;
            var4['taskTitle'] = var7;
            var7 = var2.messages;
            var7 = var7.task_description;
            var4['taskDescription'] = var7;
            var1['messages'] = var4;
            return var1;
 441:
            var1 = {};
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var3];
            var4 = var7.bind(var5)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var4 = var4.ACHIEVEMENT_IN_GAME;
            var1['type'] = var4;
            var4 = var2.target;
            var1['target'] = var4;
            var4 = var2.event_name;
            var1['eventName'] = var4;
            var4 = {};
            var7 = var2.messages;
            var7 = var7.task_title;
            var4['taskTitle'] = var7;
            var7 = var2.messages;
            var7 = var7.task_description;
            var4['taskDescription'] = var7;
            var1['messages'] = var4;
            return var1;
 541:
            var1 = {};
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var3];
            var4 = var7.bind(var5)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var4 = var4.PLAY_ON_PLAYSTATION;
            var1['type'] = var4;
            var4 = var2.target;
            var1['target'] = var4;
            var4 = var2.external_ids;
            var1['externalIds'] = var4;
            return var1;
 600:
            var1 = {};
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var3];
            var4 = var7.bind(var5)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var4 = var4.PLAY_ON_XBOX;
            var1['type'] = var4;
            var4 = var2.target;
            var1['target'] = var4;
            var4 = var2.external_ids;
            var1['externalIds'] = var4;
            return var1;
 659:
            var1 = {};
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var3];
            var4 = var7.bind(var5)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var4 = var4.PLAY_ACTIVITY;
            var1['type'] = var4;
            var4 = var2.target;
            var1['target'] = var4;
            return var1;
 707:
            var1 = {};
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var3];
            var4 = var7.bind(var5)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var4 = var4.STREAM_ON_DESKTOP;
            var1['type'] = var4;
            var4 = var2.target;
            var1['target'] = var4;
            return var1;
 755:
            var1 = {};
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var3];
            var4 = var7.bind(var5)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var4 = var4.PLAY_ON_DESKTOP;
            var1['type'] = var4;
            var4 = var2.target;
            var1['target'] = var4;
            return var1;
 803:
            var1 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var4 = var4.WATCH_VIDEO_ON_MOBILE;
            var1['type'] = var4;
            var4 = var2.target;
            var1['target'] = var4;
            var4 = 2;
            var9 = var8[var4];
            var11 = var7.bind(var5)(var9);
            var10 = var11.mobileVideoAssetsFromServer;
            var9 = var2.assets;
            var9 = var10.bind(var11)(var9);
            var1['assets'] = var9;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.mobileVideoMessagesFromServer;
            var4 = var2.messages;
            var4 = var7.bind(var8)(var4);
            var1['messages'] = var4;
            return var1;
 916:
            var1 = {};
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.FirstPartyQuestTaskTypes;
            var3 = var3.WATCH_VIDEO;
            var1['type'] = var3;
            var3 = var2.target;
            var1['target'] = var3;
            var3 = 2;
            var7 = var6[var3];
            var9 = var4.bind(var5)(var7);
            var8 = var9.desktopVideoAssetsFromServer;
            var7 = var2.assets;
            var7 = var8.bind(var9)(var7);
            var1['assets'] = var7;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.desktopVideoMessagesFromServer;
            var2 = var2.messages;
            var2 = var3.bind(var4)(var2);
            var1['messages'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/types/v2/Task.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var4 = var2.type;
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 0;
            var1 = var1[var7];
            var5 = undefined;
            var1 = var6.bind(var5)(var1);
            var1 = var1.QuestTaskConfigTypes;
            var1 = var1.FIRST_PARTY;
            if(!(var1 !== var4)) { _fun0004_ip = 184; continue _fun0004 }
 51:
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var6.bind(var5)(var1);
            var1 = var1.QuestTaskConfigTypes;
            var1 = var1.THIRD_PARTY;
            if(!(var1 !== var4)) { _fun0004_ip = 86; continue _fun0004 }
 84:
            return var5;
 86:
            var1 = {};
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var6.bind(var5)(var4);
            var4 = var4.QuestTaskConfigTypes;
            var4 = var4.THIRD_PARTY;
            var1['type'] = var4;
            var6 = _closure1_slot3;
            var4 = var2.tasks;
            var4 = var6.bind(var5)(var4);
            var1['tasks'] = var4;
            var4 = var2.enrollment_url;
            var1['enrollmentUrl'] = var4;
            var4 = var2.developer_application_id;
            var1['developerApplicationId'] = var4;
            var4 = var2.join_operator;
            var1['joinOperator'] = var4;
            return var1;
 184:
            var1 = {};
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var6.bind(var5)(var4);
            var4 = var4.QuestTaskConfigTypes;
            var4 = var4.FIRST_PARTY;
            var1['type'] = var4;
            var4 = _closure1_slot2;
            var3 = var2.tasks;
            var3 = var4.bind(var5)(var3);
            var1['tasks'] = var3;
            var2 = var2.join_operator;
            var1['joinOperator'] = var2;
            return var1;
        }
    };
    var3['questTaskConfigFromServer'] = var4;
    var2 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
 5: // try_start_0
            var3 = global;
            var6 = var3.Object;
            var5 = var6.entries;
            var4 = var2.tasks;
            var6 = var5.bind(var6)(var4);
            var5 = var6.map;
            var4 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var6 = arg1;
                    var1 = var6[Symbol.iterator];
                    var6 = var1().next;
                    var3 = var6().value;
                    var2 = var1;
                    var4 = undefined;
                    var5 = var2 === var4;
                    var2 = undefined;
                    if(var5) { _fun0006_ip = 27; continue _fun0006 }
 24:
                    var2 = var3;
 27:
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 57; continue _fun0006 }
 32:
                    var7 = var6().value;
                    var6 = var1;
                    var6 = var6 === var4;
                    var3 = undefined;
                    var5 = var6;
                    if(var6) { _fun0006_ip = 57; continue _fun0006 }
 51:
                    var3 = var7;
                    var5 = var6;
 57:
                    if(var5) { _fun0006_ip = 63; continue _fun0006 }
 60:
                    var1.return();
 63:
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = _closure1_slot4;
                    var2 = var2.bind(var4)(var3);
                    var1[1] = var2;
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.filter;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var2 = var1;
                    var6 = undefined;
                    var3 = var2 === var6;
                    var2 = undefined;
                    if(var3) { _fun0007_ip = 49; continue _fun0007 }
 24:
                    var5 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0007_ip = 49; continue _fun0007 }
 43:
                    var2 = var5;
                    var3 = var4;
 49:
                    if(var3) { _fun0007_ip = 55; continue _fun0007 }
 52:
                    var1.return();
 55:
                    var1 = null;
                    var1 = var1 !== var2;
                    return var1;
                }
            };
            var5 = var4.bind(var5)(var1);
            var1 = {};
            var4 = var3.Object;
            var3 = var4.fromEntries;
            var3 = var3.bind(var4)(var5);
            var1['tasks'] = var3;
            var2 = var2.join_operator;
            var1['joinOperator'] = var2;
 95: // try_end0
            return var1;
 97: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = {};
            var2 = {};
            var1['tasks'] = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.QuestTaskJoinOperator;
            var2 = var2.OR;
            var1['joinOperator'] = var2;
            return var1;
        }
    };
    var3['questTaskConfigV2FromServer'] = var2;
    return var1;
})();