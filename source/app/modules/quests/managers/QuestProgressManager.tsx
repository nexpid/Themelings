// app/modules/quests/managers/QuestProgressManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3["@@iterator"];
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot22;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot22;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function isQuestProgressable(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.isQuestExpired;
            var1 = var1.bind(var3)(var2);
            var1 = !var1;
            if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var4 = var2.userStatus;
            var3 = null;
            var1 = var3 != var4;
case 40:
            if(!var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var3 = var2.userStatus;
            var4 = var3.enrolledAt;
            var3 = null;
            var1 = var3 != var4;
case 42:
            if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var2 = var2.userStatus;
            var3 = var2.completedAt;
            var2 = null;
            var1 = var2 == var3;
case 44:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function handleEmbeddedActivityLaunchSuccess(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot14;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var8 = var1.autoEnroll;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 17;
            var2 = var6[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var7 = var2.DesktopActivityQuestHeaderExperiment;
            var4 = var7.getConfig;
            var2 = {};
            var9 = _closure1_slot16;
            var9 = var9.QUEST_ACTIVITY_HEADER;
            var2['location'] = var9;
            var2 = var4.bind(var7)(var2);
            var2 = var2.enabled;
            var2 = _closure1_slot13;
            var7 = var2.quests;
            var4 = _closure1_slot21;
            var2 = 18;
            var2 = var6[var2];
            var6 = var5.bind(var1)(var2);
            var5 = var6.getEligibleQuestsForApplicationId;
            var2 = arg1;
            var2 = var5.bind(var6)(var7, var2);
            var7 = var4.bind(var1)(var2);
            var4 = var7.bind(var1)();
            var2 = var4.done;
            var6 = 19;
            var5 = var4;
            if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var2 = var5.value;
            if(!var8) { _fun0006_ip = 48; continue _fun0006 }
case 19:
            var4 = var2.config;
            var10 = var4.features;
            var9 = var10.includes;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var11.bind(var1)(var4);
            var4 = var4.QuestVariants;
            var4 = var4.MOBILE_ACTIVITY_QUEST;
            var4 = var9.bind(var10)(var4);
            if(var4) { _fun0006_ip = 49; continue _fun0006 }
case 48:
            var9 = var7.bind(var1)();
            var4 = var9.done;
            var5 = var9;
            if(var4) { _fun0006_ip = 46; continue _fun0006 }
case 50:
            _fun0006_ip = 47; continue _fun0006;
case 49:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 20;
            var3 = var8[var3];
            var5 = var7.bind(var1)(var3);
            var4 = var5.enrollInQuest;
            var3 = var2.id;
            var2 = {};
            var6 = 21;
            var9 = var8[var6];
            var9 = var7.bind(var1)(var9);
            var9 = var9.QuestContent;
            var9 = var9.RUNNING_ACTIVITY;
            var2['questContent'] = var9;
            var9 = 22;
            var9 = var8[var9];
            var9 = var7.bind(var1)(var9);
            var9 = var9.QuestContentCTA;
            var9 = var9.START_QUEST;
            var2['questContentCTA'] = var9;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.QuestContent;
            var6 = var6.RUNNING_ACTIVITY;
            var2['sourceQuestContent'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var2 = undefined;
            return var2;
case 46:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function isQuestRobloxRelated(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var3 = var4.some;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.ROBLOX_APPLICATION_ID;
                var1 = arg1;
                var1 = var1 === var2;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0007_ip = 5; continue _fun0007 }
case 53:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 24;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.isRobloxSubgame;
            var2 = var3.bind(var4)(var5);
case 5:
            var1 = var2;
case 51:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function manualHeartbeatInitializationQuest(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var2 = var2.config;
            var4 = var2.features;
            var3 = var4.includes;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 19;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.QuestVariants;
            var2 = var2.MANUAL_HEARTBEAT_INITIALIZATION;
            var1 = var3.bind(var4)(var2);
case 54:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var8 = 1;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.DISCORD_APPLICATION_ID;
    var _closure1_slot15 = var9;
    var10 = var4.QuestsExperimentLocations;
    var _closure1_slot16 = var10;
    var4 = 14;
    var9 = var6[var4];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.MINUTE;
    var9 = var8 * var9;
    var _closure1_slot17 = var9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.SECOND;
    var4 = var8 * var4;
    var _closure1_slot18 = var4;
    var4 = 15;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.getQuestLogger;
    var4 = {};
    var10 = var10.QUESTS_MANAGER;
    var4['location'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var4 = 31;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function QuestProgressManager(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot3;
                var2 = _closure2_slot0;
                var7 = undefined;
                var8 = var8.bind(var7)(var5, var2);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var7)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot20;
                var1 = var1.bind(var7)();
                if(var1) { _fun0009_ip = 13; continue _fun0009 }
case 56:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var11);
                _fun0009_ip = 57; continue _fun0009;
case 13:
                var6 = global;
                var9 = var6.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var7)(var5);
                var6 = var6.constructor;
                var1 = var8.bind(var9)(var10, var11, var6);
case 57:
                var1 = var2.bind(var7)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 25;
                var4 = var8[var5];
                var4 = var6.bind(var7)(var4);
                var4 = var4.FirstPartyQuestTaskTypes;
                var10 = var4.PLAY_ON_DESKTOP;
                var4 = global;
                var9 = var4.Map;
                var11 = var9.prototype;
                var11 = Object.create(var11, {constructor: {value: var9}});
                var15 = var11;
                var9 = new var15[var9](var14);
                var9 = var9 instanceof Object ? var9 : var11;
                var2[9] = var9;
                var9 = var8[var5];
                var9 = var6.bind(var7)(var9);
                var9 = var9.FirstPartyQuestTaskTypes;
                var10 = var9.STREAM_ON_DESKTOP;
                var9 = var4.Map;
                var11 = var9.prototype;
                var11 = Object.create(var11, {constructor: {value: var9}});
                var15 = var11;
                var9 = new var15[var9](var14);
                var9 = var9 instanceof Object ? var9 : var11;
                var2[9] = var9;
                var5 = var8[var5];
                var5 = var6.bind(var7)(var5);
                var5 = var5.FirstPartyQuestTaskTypes;
                var5 = var5.PLAY_ACTIVITY;
                var4 = var4.Map;
                var6 = var4.prototype;
                var6 = Object.create(var6, {constructor: {value: var4}});
                var15 = var6;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var6;
                var2[4] = var4;
                var1['heartbeats'] = var2;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = _closure1_slot13;
                        var4 = var2.quests;
                        var3 = var4.get;
                        var2 = arg1;
                        var5 = var3.bind(var4)(var2);
                        var3 = null;
                        if(!(var3 != var5)) { _fun0010_ip = 48; continue _fun0010 }
case 58:
                        var2 = var5.config;
                        if(!(var3 != var2)) { _fun0010_ip = 48; continue _fun0010 }
case 59:
                        var2 = var5.userStatus;
                        if(!(var3 != var2)) { _fun0010_ip = 48; continue _fun0010 }
case 11:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 26;
                        var2 = var8[var2];
                        var7 = undefined;
                        var4 = var6.bind(var7)(var2);
                        var3 = var4.getQuestTaskDetails;
                        var2 = 25;
                        var2 = var8[var2];
                        var2 = var6.bind(var7)(var2);
                        var2 = var2.FirstPartyQuestTaskTypesSets;
                        var2 = var2.DESKTOP;
                        var2 = var3.bind(var4)(var5, var2);
                        var3 = var2.progressSeconds;
                        var2 = var2.targetSeconds;
                        var4 = global;
                        var5 = var4.Math;
                        var4 = var5.max;
                        var3 = var2 - var3;
                        var6 = _closure1_slot1;
                        var2 = 14;
                        var2 = var8[var2];
                        var2 = var6.bind(var7)(var2);
                        var2 = var2.Millis;
                        var2 = var2.SECOND;
                        var3 = var3 * var2;
                        var2 = 0;
                        var4 = var4.bind(var5)(var2, var3);
                        var2 = _closure1_slot17;
                        if(!(!(var4 <= var2))) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                        var2 = _closure1_slot17;
                        _fun0010_ip = 62; continue _fun0010;
case 60:
                        var3 = _closure1_slot18;
                        var2 = var4 + var3;
case 62:
                        return var2;
case 48:
                        var1 = _closure1_slot17;
                        return var1;
                    }
                };
                var1['calculateHeartbeatDurationMs'] = var2;
                var2 = function(arg1, arg2, arg3) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var5 = arg1;
                        var3 = arg2;
                        var _closure4_slot0 = var5;
                        var _closure4_slot1 = var3;
                        var1 = arg3;
                        var _closure4_slot2 = var1;
                        var1 = _closure3_slot0;
                        var1 = var1.heartbeats;
                        var3 = var1[var3];
                        var _closure4_slot3 = var3;
                        var1 = var3.has;
                        var3 = var1.bind(var3)(var5);
                        if(var3) { _fun0011_ip = 63; continue _fun0011 }
case 43:
                        var3 = function maybeSendHeartbeat() {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                var5 = _closure3_slot0;
                                var4 = var5.getActivelyProgressingQuests;
                                var3 = _closure4_slot1;
                                var5 = var4.bind(var5)(var3);
                                var4 = var5.has;
                                var3 = _closure4_slot0;
                                var3 = var4.bind(var5)(var3);
                                if(var3) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                                var6 = _closure1_slot19;
                                var4 = var6.log;
                                var7 = _closure4_slot0;
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var9 = var3.concat;
                                var8 = '~ initiateHeartbeat -> Quest ';
                                var3 = ' is no longer actively progressing, terminating heartbeat';
                                var3 = var9.bind(var8)(var7, var3);
                                var3 = var4.bind(var6)(var3);
                                var6 = _closure3_slot0;
                                var4 = var6.terminateHeartbeat;
                                var3 = _closure4_slot1;
                                var3 = var4.bind(var6)(var7, var3);
                                _fun0012_ip = 66; continue _fun0012;
case 64:
                                var4 = var5.get;
                                var3 = _closure4_slot0;
                                var5 = var4.bind(var5)(var3);
                                var4 = null;
                                var3 = var4 == var5;
                                var6 = undefined;
                                var9 = undefined;
                                if(var3) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                                var9 = var5.applicationId;
case 67:
                                if(!(var4 == var9)) { _fun0012_ip = 69; continue _fun0012 }
case 19:
                                var3 = _closure4_slot2;
                                var7 = var4 == var3;
                                var3 = undefined;
                                if(var7) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                                var7 = _closure4_slot2;
                                var3 = var7.applicationId;
case 70:
                                var9 = var3;
case 69:
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var7 = 17;
                                var7 = var10[var7];
                                var7 = var8.bind(var6)(var7);
                                var10 = var7.QuestHeartbeatExecutableFingerprintExperiment;
                                var8 = var10.getConfig;
                                var7 = {};
                                var11 = _closure1_slot16;
                                var11 = var11.QUESTS_MANAGER;
                                var7['location'] = var11;
                                var7 = var8.bind(var10)(var7);
                                var8 = var7.enabled;
                                var7 = undefined;
                                if(!var8) { _fun0012_ip = 72; continue _fun0012 }
case 22:
                                var10 = var4 == var5;
                                var8 = undefined;
                                if(var10) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                                var8 = var5.executableFingerprint;
case 73:
                                var7 = var8;
case 72:
                                var10 = var4 == var5;
                                var8 = undefined;
                                if(var10) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                                var8 = var5.executablePath;
case 75:
                                if(!(var4 == var8)) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                                var5 = _closure4_slot2;
                                var10 = var4 == var5;
                                var5 = undefined;
                                if(var10) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                                var10 = _closure4_slot2;
                                var5 = var10.executablePath;
case 79:
                                var8 = var5;
case 77:
                                var10 = _closure4_slot1;
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var5 = 25;
                                var5 = var12[var5];
                                var5 = var11.bind(var6)(var5);
                                var5 = var5.FirstPartyQuestTaskTypes;
                                var5 = var5.STREAM_ON_DESKTOP;
                                if(!(var10 !== var5)) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                                var11 = _closure1_slot19;
                                var10 = var11.log;
                                var12 = _closure4_slot0;
                                var5 = global;
                                var5 = var5.HermesInternal;
                                var13 = var5.concat;
                                var5 = '~ initiateHeartbeat -> Sending heartbeat for questId: ';
                                var5 = var13.bind(var5)(var12);
                                var5 = var10.bind(var11)(var5);
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var5 = 20;
                                var5 = var11[var5];
                                var11 = var10.bind(var6)(var5);
                                var10 = var11.sendHeartbeat;
                                var5 = {};
                                var5['questId'] = var12;
                                var5['applicationId'] = var9;
                                var5['executablePath'] = var8;
                                var5['executableFingerprint'] = var7;
                                var5 = var10.bind(var11)(var5);
                                _fun0012_ip = 83; continue _fun0012;
case 81:
                                var10 = _closure1_slot10;
                                var5 = var10.getCurrentUserActiveStream;
                                var11 = var5.bind(var10)();
                                if(!(var4 != var11)) { _fun0012_ip = 84; continue _fun0012 }
case 85:
                                var5 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var4 = 27;
                                var4 = var12[var4];
                                var10 = var5.bind(var6)(var4);
                                var4 = var10.encodeStreamKey;
                                var10 = var4.bind(var10)(var11);
                                var14 = _closure1_slot19;
                                var13 = var14.log;
                                var11 = _closure4_slot0;
                                var4 = global;
                                var4 = var4.HermesInternal;
                                var15 = var4.concat;
                                var4 = '~ initiateHeartbeat -> Sending heartbeat for questId: ';
                                var4 = var15.bind(var4)(var11);
                                var4 = var13.bind(var14)(var4);
                                var4 = 20;
                                var4 = var12[var4];
                                var6 = var5.bind(var6)(var4);
                                var5 = var6.sendHeartbeat;
                                var4 = {};
                                var4['questId'] = var11;
                                var4['streamKey'] = var10;
                                var4['applicationId'] = var9;
                                var4['executablePath'] = var8;
                                var4['executableFingerprint'] = var7;
                                var4 = var5.bind(var6)(var4);
case 83:
                                var5 = _closure3_slot0;
                                var4 = var5.calculateHeartbeatDurationMs;
                                var7 = _closure4_slot0;
                                var8 = var4.bind(var5)(var7);
                                var4 = global;
                                var6 = var4.window;
                                var5 = var6.setTimeout;
                                var4 = _closure4_slot4;
                                var6 = var5.bind(var6)(var4, var8);
                                var5 = _closure4_slot3;
                                var4 = var5.set;
                                var4 = var4.bind(var5)(var7, var6);
case 66:
                                var4 = undefined;
                                return var4;
case 84:
                                var6 = _closure1_slot19;
                                var5 = var6.log;
                                var4 = _closure4_slot0;
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var7 = var3.concat;
                                var3 = '~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ';
                                var3 = var7.bind(var3)(var4);
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure3_slot0;
                                var2 = var3.terminateHeartbeat;
                                var1 = _closure4_slot1;
                                var1 = var2.bind(var3)(var4, var1);
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var _closure4_slot4 = var3;
                        var6 = _closure1_slot19;
                        var4 = var6.log;
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var2 = '~ initiateHeartbeat -> Initiating heartbeat for Quest ';
                        var2 = var7.bind(var2)(var5);
                        var2 = var4.bind(var6)(var2);
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        _fun0011_ip = 86; continue _fun0011;
case 63:
                        var3 = _closure1_slot19;
                        var2 = var3.log;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var1 = '~ initiateHeartbeat -> Heartbeat already initiated for questId: ';
                        var1 = var4.bind(var1)(var5);
                        var1 = var2.bind(var3)(var1);
case 86:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['initiateHeartbeat'] = var2;
                var2 = function(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var4 = arg1;
                        var1 = _closure3_slot0;
                        var2 = var1.heartbeats;
                        var1 = arg2;
                        var7 = var2[var1];
                        var2 = _closure1_slot13;
                        var6 = var2.quests;
                        var2 = var7.get;
                        var9 = var2.bind(var7)(var4);
                        var3 = null;
                        if(!(var3 != var9)) { _fun0013_ip = 87; continue _fun0013 }
case 8:
                        var10 = _closure1_slot19;
                        var8 = var10.log;
                        var2 = global;
                        var5 = var2.HermesInternal;
                        var11 = var5.concat;
                        var5 = '~ terminateHeartbeat -> Terminating heartbeat for questId: ';
                        var5 = var11.bind(var5)(var4);
                        var5 = var8.bind(var10)(var5);
                        var8 = var2.window;
                        var5 = var8.clearTimeout;
                        var5 = var5.bind(var8)(var9);
                        var5 = var7.delete;
                        var5 = var5.bind(var7)(var4);
                        var5 = var6.get;
                        var7 = var5.bind(var6)(var4);
                        var3 = var3 != var7;
                        if(!var3) { _fun0013_ip = 68; continue _fun0013 }
case 88:
                        var6 = _closure1_slot23;
                        var5 = undefined;
                        var3 = var6.bind(var5)(var7);
case 68:
                        if(!var3) { _fun0013_ip = 87; continue _fun0013 }
case 89:
                        var5 = _closure1_slot19;
                        var3 = var5.log;
                        var2 = var2.HermesInternal;
                        var6 = var2.concat;
                        var2 = '~ terminateHeartbeat -> Sending terminal heartbeat for questId: ';
                        var2 = var6.bind(var2)(var4);
                        var2 = var3.bind(var5)(var2);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.sendHeartbeat;
                        var1 = {};
                        var1['questId'] = var4;
                        var4 = true;
                        var1['terminal'] = var4;
                        var1 = var2.bind(var3)(var1);
case 87:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['terminateHeartbeat'] = var2;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.questId;
                        var3 = var1.userStatus;
                        var7 = _closure1_slot19;
                        var6 = var7.log;
                        var1 = global;
                        var4 = var1.HermesInternal;
                        var9 = var4.concat;
                        var8 = '~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ';
                        var4 = ')';
                        var4 = var9.bind(var8)(var5, var4);
                        var4 = var6.bind(var7)(var4);
                        var4 = var3.completedAt;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0014_ip = 24; continue _fun0014 }
case 4:
                        var4 = _closure1_slot19;
                        var3 = var4.log;
                        var2 = var1.HermesInternal;
                        var7 = var2.concat;
                        var6 = '~ handleSendHeartbeatSuccess -> Quest ';
                        var2 = ' completed, terminating any heartbeats for it';
                        var2 = var7.bind(var6)(var5, var2);
                        var2 = var3.bind(var4)(var2);
                        var3 = var1.Object;
                        var2 = var3.keys;
                        var1 = _closure3_slot0;
                        var1 = var1.heartbeats;
                        var3 = var2.bind(var3)(var1);
                        var1 = var3.length;
                        var2 = 0;
                        var1 = var2 < var1;
                        if(!var1) { _fun0014_ip = 24; continue _fun0014 }
case 18:
                        var7 = var3[var2];
                        var6 = _closure3_slot0;
                        var1 = var6.terminateHeartbeat;
                        var1 = var1.bind(var6)(var5, var7);
                        var2 = var2 + 1;
                        var1 = var3.length;
                        if(var2 < var1) { _fun0014_ip = 18; continue _fun0014 }
case 24:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSendHeartbeatSuccess'] = var2;
                var2 = function(arg1) {
                    var1 = arg1;
                    var5 = var1.questId;
                    var3 = _closure1_slot19;
                    var2 = var3.log;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = '~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ';
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleSendHeartbeatFailure'] = var2;
                var2 = {};
                var4 = function QUESTS_FETCH_CURRENT_QUESTS_SUCCESS() {
                    var4 = _closure3_slot0;
                    var3 = var4.syncHeartbeats;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 25;
                    var2 = var7[var1];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.FirstPartyQuestTaskTypes;
                    var8 = var2.PLAY_ON_DESKTOP;
                    var2 = new Array(2);
                    var2[0] = var8;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.STREAM_ON_DESKTOP;
                    var2[1] = var1;
                    var1 = 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['QUESTS_FETCH_CURRENT_QUESTS_SUCCESS'] = var4;
                var4 = function QUESTS_ENROLL_SUCCESS() {
                    var5 = _closure3_slot0;
                    var4 = var5.syncHeartbeats;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 25;
                    var3 = var7[var1];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var3 = var3.FirstPartyQuestTaskTypes;
                    var8 = var3.PLAY_ON_DESKTOP;
                    var3 = new Array(3);
                    var3[0] = var8;
                    var8 = var7[var1];
                    var8 = var6.bind(var2)(var8);
                    var8 = var8.FirstPartyQuestTaskTypes;
                    var8 = var8.STREAM_ON_DESKTOP;
                    var3[1] = var8;
                    var1 = var7[var1];
                    var1 = var6.bind(var2)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.PLAY_ACTIVITY;
                    var3[2] = var1;
                    var2 = 'QUESTS_ENROLL_SUCCESS';
                    var1 = function(arg1) {
                        var3 = _closure1_slot26;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var2['QUESTS_ENROLL_SUCCESS'] = var4;
                var4 = var1.handleSendHeartbeatSuccess;
                var2['QUESTS_SEND_HEARTBEAT_SUCCESS'] = var4;
                var4 = var1.handleSendHeartbeatFailure;
                var2['QUESTS_SEND_HEARTBEAT_FAILURE'] = var4;
                var4 = function QUESTS_PREVIEW_UPDATE_SUCCESS() {
                    var4 = _closure3_slot0;
                    var3 = var4.syncHeartbeats;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 25;
                    var2 = var7[var1];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.FirstPartyQuestTaskTypes;
                    var8 = var2.PLAY_ON_DESKTOP;
                    var2 = new Array(3);
                    var2[0] = var8;
                    var8 = var7[var1];
                    var8 = var6.bind(var5)(var8);
                    var8 = var8.FirstPartyQuestTaskTypes;
                    var8 = var8.STREAM_ON_DESKTOP;
                    var2[1] = var8;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.PLAY_ACTIVITY;
                    var2[2] = var1;
                    var1 = 'QUESTS_PREVIEW_UPDATE_SUCCESS';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['QUESTS_PREVIEW_UPDATE_SUCCESS'] = var4;
                var4 = function RUNNING_GAMES_CHANGE() {
                    var4 = _closure3_slot0;
                    var3 = var4.syncHeartbeats;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.PLAY_ON_DESKTOP;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = 'RUNNING_GAMES_CHANGE';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['RUNNING_GAMES_CHANGE'] = var4;
                var4 = function RUNNING_NON_GAMES_CHANGE() {
                    var4 = _closure3_slot0;
                    var3 = var4.syncHeartbeats;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.PLAY_ON_DESKTOP;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = 'RUNNING_NON_GAMES_CHANGE';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['RUNNING_NON_GAMES_CHANGE'] = var4;
                var4 = function STREAM_START() {
                    var4 = _closure3_slot0;
                    var3 = var4.syncHeartbeats;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.STREAM_ON_DESKTOP;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = 'STREAM_START';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['STREAM_START'] = var4;
                var4 = function STREAM_CREATE() {
                    var4 = _closure3_slot0;
                    var3 = var4.syncHeartbeats;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.STREAM_ON_DESKTOP;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = 'STREAM_CREATE';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['STREAM_CREATE'] = var4;
                var4 = function STREAM_CLOSE() {
                    var4 = _closure3_slot0;
                    var3 = var4.syncHeartbeats;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.STREAM_ON_DESKTOP;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = 'STREAM_CLOSE';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['STREAM_CLOSE'] = var4;
                var4 = function PASSIVE_UPDATE_V2() {
                    var4 = _closure3_slot0;
                    var3 = var4.syncHeartbeats;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.STREAM_ON_DESKTOP;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = 'PASSIVE_UPDATE_V2';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['PASSIVE_UPDATE_V2'] = var4;
                var4 = function VOICE_STATE_UPDATES() {
                    var4 = _closure3_slot0;
                    var3 = var4.syncHeartbeats;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.STREAM_ON_DESKTOP;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = 'VOICE_STATE_UPDATES';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['VOICE_STATE_UPDATES'] = var4;
                var4 = function EMBEDDED_ACTIVITY_LAUNCH_SUCCESS(arg1) {
                    var1 = arg1;
                    var3 = var1.applicationId;
                    var2 = _closure1_slot24;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var2['EMBEDDED_ACTIVITY_LAUNCH_SUCCESS'] = var4;
                var4 = function FRAME_LAUNCH(arg1) {
                    var1 = arg1;
                    var3 = var1.applicationId;
                    var2 = _closure1_slot24;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var2['FRAME_LAUNCH'] = var4;
                var4 = function EMBEDDED_ACTIVITY_UPDATE_V2() {
                    var5 = _closure3_slot0;
                    var4 = var5.syncHeartbeats;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.FirstPartyQuestTaskTypes;
                    var1 = var1.PLAY_ACTIVITY;
                    var3 = new Array(1);
                    var3[0] = var1;
                    var2 = 'EMBEDDED_ACTIVITY_UPDATE_V2';
                    var1 = function(arg1) {
                        var3 = _closure1_slot26;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var2['EMBEDDED_ACTIVITY_UPDATE_V2'] = var4;
                var3 = function QUEST_APPLICATION_START_TIMER(arg1) {
                    var1 = arg1;
                    var1 = var1.questId;
                    var _closure4_slot0 = var1;
                    var6 = _closure3_slot0;
                    var5 = var6.syncHeartbeats;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.FirstPartyQuestTaskTypes;
                    var3 = var3.PLAY_ACTIVITY;
                    var4 = new Array(1);
                    var4[0] = var3;
                    var3 = 'QUEST_APPLICATION_START_TIMER';
                    var2 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var4 = arg1;
                            var1 = null;
                            var1 = var1 != var4;
                            if(!var1) { _fun0015_ip = 38; continue _fun0015 }
case 55:
                            var3 = var4.id;
                            var2 = _closure4_slot0;
                            var1 = var3 === var2;
case 38:
                            if(!var1) { _fun0015_ip = 41; continue _fun0015 }
case 90:
                            var3 = _closure1_slot26;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var4);
case 41:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var2['QUEST_APPLICATION_START_TIMER'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'syncHeartbeats';
        var5['key'] = var1;
        var1 = function value(arg1, arg2, arg3) {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getActivelyProgressingQuests';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = arg1;
                var2 = this;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 25;
                var4 = var1[var7];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var4 = var4.FirstPartyQuestTaskTypes;
                var4 = var4.PLAY_ON_DESKTOP;
                if(!(var4 !== var5)) { _fun0016_ip = 91; continue _fun0016 }
case 92:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var1)(var4);
                var4 = var4.FirstPartyQuestTaskTypes;
                var4 = var4.STREAM_ON_DESKTOP;
                if(!(var4 !== var5)) { _fun0016_ip = 18; continue _fun0016 }
case 93:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var1)(var4);
                var4 = var4.FirstPartyQuestTaskTypes;
                var4 = var4.PLAY_ACTIVITY;
                if(!(var4 !== var5)) { _fun0016_ip = 68; continue _fun0016 }
case 94:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 28;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.assertNever;
                var3 = var3.bind(var4)(var5);
                return var1;
case 68:
                var1 = var2.getActivelyProgressingActivityQuests;
                var1 = var1.bind(var2)();
                return var1;
case 18:
                var1 = var2.getActivelyProgressingStreamOnDesktopQuests;
                var1 = var1.bind(var2)();
                return var1;
case 91:
                var1 = var2.getActivelyProgressingPlayOnDesktopQuests;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getActivelyProgressingPlayOnDesktopQuests';
        var5['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var2 = global;
                var1 = var2.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var24 = var3;
                var1 = new var24[var1](var23);
                var1 = var1 instanceof Object ? var1 : var3;
                var _closure3_slot0 = var1;
                var6 = _closure1_slot9;
                var5 = var6.getRunningGames;
                var9 = var5.bind(var6)();
                var5 = var6.getRunningNonGames;
                var7 = var5.bind(var6)();
                var5 = _closure1_slot13;
                var5 = var5.quests;
                var _closure3_slot1 = var5;
                var10 = _closure1_slot19;
                var8 = var10.log;
                var23 = '~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ';
                var21 = 'Running non-games: ';
                var24 = var10;
                var22 = var9;
                var20 = var7;
                var5 = var24[var8](var23, var22, var21, var20, var19);
                var6 = {};
                var _closure3_slot2 = var6;
                var5 = _closure1_slot21;
                var8 = undefined;
                var13 = var5.bind(var8)(var9);
                var9 = var13.bind(var8)();
                var5 = var9.done;
                var10 = null;
                var12 = var9;
                var11 = undefined;
                var9 = undefined;
                if(var5) { _fun0017_ip = 95; continue _fun0017 }
case 96:
                var18 = var12.value;
                var5 = var18.isLauncher;
                var15 = var11;
                var14 = var9;
                if(var5) { _fun0017_ip = 97; continue _fun0017 }
case 98:
                var5 = var18.id;
                if(!(var10 != var5)) { _fun0017_ip = 99; continue _fun0017 }
case 100:
                var5 = var18.id;
                var6[var5] = var18;
                var15 = var11;
                var14 = var9;
                _fun0017_ip = 97; continue _fun0017;
case 99:
                var16 = _closure1_slot9;
                var5 = var16.getOverrideForGame;
                var16 = var5.bind(var16)(var18);
                var5 = var18.distributor;
                if(!(var10 == var5)) { _fun0017_ip = 87; continue _fun0017 }
case 101:
                var14 = var9;
                var15 = var16;
                if(!(var10 == var15)) { _fun0017_ip = 97; continue _fun0017 }
case 87:
                var17 = _closure1_slot11;
                var5 = var17.findGame;
                var5 = var5.bind(var17)(var18);
                var19 = var10 == var5;
                var17 = undefined;
                if(var19) { _fun0017_ip = 28; continue _fun0017 }
case 102:
                var17 = var5.id;
case 28:
                var15 = var16;
                var14 = var5;
                if(!(var10 != var17)) { _fun0017_ip = 97; continue _fun0017 }
case 103:
                var17 = var5.id;
                var6[var17] = var18;
                var15 = var16;
                var14 = var5;
case 97:
                var16 = var13.bind(var8)();
                var5 = var16.done;
                var11 = var15;
                var9 = var14;
                var12 = var16;
                if(!var5) { _fun0017_ip = 96; continue _fun0017 }
case 95:
                var5 = _closure1_slot21;
                var9 = var5.bind(var8)(var7);
                var7 = var9.bind(var8)();
                var5 = var7.done;
                if(var5) { _fun0017_ip = 104; continue _fun0017 }
case 105:
                var11 = var7.value;
                var5 = var11.id;
                if(!(var10 != var5)) { _fun0017_ip = 106; continue _fun0017 }
case 107:
                var5 = var11.id;
                var6[var5] = var11;
case 106:
                var11 = var9.bind(var8)();
                var5 = var11.done;
                var7 = var11;
                if(!var5) { _fun0017_ip = 105; continue _fun0017 }
case 104:
                var7 = function _loop(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var1 = _closure3_slot2;
                        var11 = var1[var2];
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.removeExecutablePathPrefix;
                        var2 = var11.exePath;
                        var9 = var3.bind(var4)(var2);
                        var3 = _closure1_slot21;
                        var4 = _closure3_slot1;
                        var2 = var4.values;
                        var2 = var2.bind(var4)();
                        var8 = var3.bind(var1)(var2);
                        var3 = var8.bind(var1)();
                        var2 = var3.done;
                        var7 = 23;
                        var6 = null;
                        var5 = 26;
                        var4 = var3;
                        var3 = undefined;
                        if(var2) { _fun0018_ip = 108; continue _fun0018 }
case 109:
                        var15 = var4.value;
                        var14 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var14 = var14.bind(var1)(var2);
                        var2 = var14.getDesktopApplicationIds;
                        var17 = var2.bind(var14)(var15);
                        var2 = _closure1_slot23;
                        var2 = var2.bind(var1)(var15);
                        var14 = var3;
                        if(!var2) { _fun0018_ip = 110; continue _fun0018 }
case 18:
                        var14 = var3;
                        if(!(var6 != var17)) { _fun0018_ip = 110; continue _fun0018 }
case 98:
                        var16 = var17.find;
                        var2 = function(arg1) {
                            var2 = _closure4_slot0;
                            var1 = arg1;
                            var1 = var1 === var2;
                            return var1;
                        };
                        var2 = var16.bind(var17)(var2);
                        if(!(var6 == var2)) { _fun0018_ip = 111; continue _fun0018 }
case 112:
                        var16 = _closure1_slot25;
                        var16 = var16.bind(var1)(var17, var11);
                        var14 = var2;
                        if(!var16) { _fun0018_ip = 110; continue _fun0018 }
case 62:
                        var19 = _closure3_slot0;
                        var18 = var19.set;
                        var17 = var15.id;
                        var16 = {};
                        var21 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var20 = var20[var7];
                        var20 = var21.bind(var1)(var20);
                        var20 = var20.ROBLOX_APPLICATION_ID;
                        var16['applicationId'] = var20;
                        var16['executablePath'] = var9;
                        var20 = var11.executableFingerprint;
                        var16['executableFingerprint'] = var20;
                        var16 = var18.bind(var19)(var17, var16);
                        var14 = var2;
                        _fun0018_ip = 110; continue _fun0018;
case 111:
                        var18 = _closure3_slot0;
                        var17 = var18.set;
                        var16 = var15.id;
                        var15 = {};
                        var15['applicationId'] = var2;
                        var15['executablePath'] = var9;
                        var19 = var11.executableFingerprint;
                        var15['executableFingerprint'] = var19;
                        var15 = var17.bind(var18)(var16, var15);
                        var14 = var2;
case 110:
                        var15 = var8.bind(var1)();
                        var2 = var15.done;
                        var3 = var14;
                        var4 = var15;
                        if(!var2) { _fun0018_ip = 109; continue _fun0018 }
case 108:
                        return var1;
                    }
                };
                var5 = var2.Object;
                var4 = var5.keys;
                var6 = var4.bind(var5)(var6);
                var4 = var6.length;
                var5 = 0;
                var4 = var5 < var4;
                if(!var4) { _fun0017_ip = 113; continue _fun0017 }
case 114:
                var4 = var6[var5];
                var4 = var7.bind(var8)(var4);
                var5 = var5 + 1;
                var4 = var6.length;
                if(var5 < var4) { _fun0017_ip = 114; continue _fun0017 }
case 113:
                var5 = _closure1_slot19;
                var4 = var5.log;
                var6 = var2.Array;
                var3 = var6.from;
                var2 = var1.keys;
                var2 = var2.bind(var1)();
                var3 = var3.bind(var6)(var2);
                var2 = '~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getActivelyProgressingStreamOnDesktopQuests';
        var5['key'] = var7;
        var7 = function getActivelyProgressingStreamOnDesktopQuests() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = global;
                var1 = var2.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var16 = var3;
                var1 = new var16[var1](var15);
                var1 = var1 instanceof Object ? var1 : var3;
                var5 = _closure1_slot10;
                var4 = var5.getCurrentUserActiveStream;
                var4 = var4.bind(var5)();
                var10 = null;
                if(!(var10 != var4)) { _fun0019_ip = 115; continue _fun0019 }
case 116:
                var6 = _closure1_slot12;
                var5 = var6.countVoiceStatesForChannel;
                var4 = var4.channelId;
                var5 = var5.bind(var6)(var4);
                var4 = 2;
                if(!(!(var5 < var4))) { _fun0019_ip = 30; continue _fun0019 }
case 117:
                var5 = _closure1_slot10;
                var4 = var5.getStreamerActiveStreamMetadata;
                var4 = var4.bind(var5)();
                if(!(var10 != var4)) { _fun0019_ip = 118; continue _fun0019 }
case 119:
                var7 = _closure1_slot19;
                var6 = var7.log;
                var5 = '~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ';
                var5 = var6.bind(var7)(var5, var4);
                var9 = var4.id;
                if(!(var10 != var9)) { _fun0019_ip = 31; continue _fun0019 }
case 120:
                var5 = _closure1_slot21;
                var4 = _closure1_slot13;
                var6 = var4.quests;
                var4 = var6.values;
                var4 = var4.bind(var6)();
                var8 = undefined;
                var7 = var5.bind(var8)(var4);
                var5 = var7.bind(var8)();
                var4 = var5.done;
                var6 = 26;
                if(var4) { _fun0019_ip = 121; continue _fun0019 }
case 122:
                var4 = var5.value;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var6];
                var12 = var12.bind(var8)(var11);
                var11 = var12.getStreamingApplicationId;
                var11 = var11.bind(var12)(var4);
                var12 = _closure1_slot23;
                var12 = var12.bind(var8)(var4);
                if(!var12) { _fun0019_ip = 123; continue _fun0019 }
case 124:
                var12 = var10 != var11;
case 123:
                if(!var12) { _fun0019_ip = 125; continue _fun0019 }
case 87:
                if(!(var11 === var9)) { _fun0019_ip = 125; continue _fun0019 }
case 126:
                var12 = var1.set;
                var11 = var4.id;
                var4 = {};
                var4['applicationId'] = var9;
                var4 = var12.bind(var1)(var11, var4);
case 125:
                var11 = var7.bind(var8)();
                var4 = var11.done;
                var5 = var11;
                if(!var4) { _fun0019_ip = 122; continue _fun0019 }
case 121:
                var5 = _closure1_slot19;
                var4 = var5.log;
                var6 = var2.Array;
                var3 = var6.from;
                var2 = var1.keys;
                var2 = var2.bind(var1)();
                var3 = var3.bind(var6)(var2);
                var2 = '~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
case 31:
                return var1;
case 118:
                return var1;
case 30:
                return var1;
case 115:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getActivelyProgressingActivityQuests';
        var5['key'] = var7;
        var6 = function getActivelyProgressingActivityQuests() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = global;
                var1 = var2.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var23 = var3;
                var1 = new var23[var1](var22);
                var1 = var1 instanceof Object ? var1 : var3;
                var5 = _closure1_slot8;
                var4 = var5.getSelfEmbeddedActivities;
                var7 = var4.bind(var5)();
                var5 = var7.size;
                var4 = 0;
                var4 = var5 > var4;
                var8 = _closure1_slot19;
                var6 = var8.log;
                var5 = '~ getActivelyProgressingActivityQuestIds -> Embedded activities: ';
                var5 = var6.bind(var8)(var5, var7);
                if(var4) { _fun0020_ip = 93; continue _fun0020 }
case 45:
                return var1;
case 93:
                var4 = _closure1_slot13;
                var6 = var4.quests;
                var5 = _closure1_slot21;
                var4 = var7.keys;
                var4 = var4.bind(var7)();
                var8 = undefined;
                var12 = var5.bind(var8)(var4);
                var5 = var12.bind(var8)();
                var4 = var5.done;
                var11 = null;
                var10 = 26;
                var9 = var5;
                var7 = undefined;
                var5 = undefined;
                if(var4) { _fun0020_ip = 127; continue _fun0020 }
case 128:
                var15 = var9.value;
                var13 = _closure1_slot21;
                var4 = var6.values;
                var4 = var4.bind(var6)();
                var14 = var13.bind(var8)(var4);
                var13 = var14.bind(var8)();
                var4 = var13.done;
                if(var4) { _fun0020_ip = 129; continue _fun0020 }
case 130:
                var17 = var13.value;
                var16 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var10];
                var16 = var16.bind(var8)(var4);
                var4 = var16.getPlayActivityApplicationId;
                var16 = var4.bind(var16)(var17);
                var4 = _closure1_slot23;
                var4 = var4.bind(var8)(var17);
                if(!var4) { _fun0020_ip = 131; continue _fun0020 }
case 132:
                var4 = var11 != var16;
case 131:
                if(!var4) { _fun0020_ip = 133; continue _fun0020 }
case 134:
                if(!(var16 === var15)) { _fun0020_ip = 133; continue _fun0020 }
case 135:
                var19 = var1.set;
                var18 = var17.id;
                var4 = {};
                var4['applicationId'] = var15;
                var4 = var19.bind(var1)(var18, var4);
case 133:
                var18 = var14.bind(var8)();
                var4 = var18.done;
                var13 = var18;
                var7 = var17;
                var5 = var16;
                if(!var4) { _fun0020_ip = 130; continue _fun0020 }
case 129:
                var13 = var12.bind(var8)();
                var4 = var13.done;
                var9 = var13;
                if(!var4) { _fun0020_ip = 128; continue _fun0020 }
case 127:
                var5 = _closure1_slot21;
                var4 = var6.values;
                var4 = var4.bind(var6)();
                var7 = var5.bind(var8)(var4);
                var5 = var7.bind(var8)();
                var4 = var5.done;
                var6 = 30;
                if(var4) { _fun0020_ip = 136; continue _fun0020 }
case 110:
                var4 = var5.value;
                var9 = _closure1_slot23;
                var9 = var9.bind(var8)(var4);
                if(!var9) { _fun0020_ip = 137; continue _fun0020 }
case 138:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var6];
                var11 = var11.bind(var8)(var10);
                var10 = var11.isPlayAnyActivityQuest;
                var9 = var10.bind(var11)(var4);
case 137:
                if(!var9) { _fun0020_ip = 139; continue _fun0020 }
case 104:
                var10 = var1.set;
                var9 = var4.id;
                var4 = {};
                var11 = _closure1_slot15;
                var4['applicationId'] = var11;
                var4 = var10.bind(var1)(var9, var4);
case 139:
                var9 = var7.bind(var8)();
                var4 = var9.done;
                var5 = var9;
                if(!var4) { _fun0020_ip = 110; continue _fun0020 }
case 136:
                var5 = _closure1_slot19;
                var4 = var5.log;
                var6 = var2.Array;
                var3 = var6.from;
                var2 = var1.keys;
                var2 = var2.bind(var1)();
                var3 = var3.bind(var6)(var2);
                var2 = '~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/managers/QuestProgressManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();