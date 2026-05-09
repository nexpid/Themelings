// app/modules/quests/utils/QuestTaskUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var20 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var21 = dependencyMap;
    var _closure1_slot0 = var20;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var21;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function getApplicationIdsByTaskTypes(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var12 = arg1;
            var11 = null;
            if(!(var11 == var12)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = undefined;
            return var1;
case 36:
            var2 = global;
            var1 = var2.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var19 = var3;
            var1 = new var19[var1](var18);
            var4 = var1 instanceof Object ? var1 : var3;
            var5 = _closure1_slot14;
            var1 = undefined;
            var3 = arg2;
            var9 = var5.bind(var1)(var3);
            var5 = var9.bind(var1)();
            var3 = var5.done;
            var8 = 'applications';
            var7 = var5;
            var6 = undefined;
            var5 = undefined;
            if(var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var13 = var7.value;
            var3 = var12.config;
            var3 = var3.taskConfigV2;
            var3 = var3.tasks;
            var3 = var3[var13];
            var14 = var6;
            var13 = var5;
            if(!(var11 != var3)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var15 = var8 in var3;
            var14 = var6;
            var13 = var5;
            if(!var15) { _fun0004_ip = 40; continue _fun0004 }
case 42:
            var17 = var2.Array;
            var16 = var17.isArray;
            var15 = var3.applications;
            var15 = var16.bind(var17)(var15);
            var14 = var6;
            var13 = var5;
            if(!var15) { _fun0004_ip = 40; continue _fun0004 }
case 43:
            var15 = _closure1_slot14;
            var3 = var3.applications;
            var16 = var15.bind(var1)(var3);
            var17 = var16.bind(var1)();
            var3 = var17.done;
            var15 = var17;
            var14 = var15;
            var13 = var16;
            if(var3) { _fun0004_ip = 40; continue _fun0004 }
case 44:
            var3 = var15.value;
            var17 = var4.add;
            var3 = var3.id;
            var3 = var17.bind(var4)(var3);
            var17 = var16.bind(var1)();
            var3 = var17.done;
            var15 = var17;
            var14 = var15;
            var13 = var16;
            if(!var3) { _fun0004_ip = 44; continue _fun0004 }
case 40:
            var15 = var9.bind(var1)();
            var3 = var15.done;
            var6 = var14;
            var5 = var13;
            var7 = var15;
            if(!var3) { _fun0004_ip = 39; continue _fun0004 }
case 38:
            var5 = var4.size;
            var3 = 0;
            var3 = var5 > var3;
            var1 = undefined;
            if(!var3) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var3 = var2.Array;
            var2 = var3.from;
            var1 = var2.bind(var3)(var4);
case 45:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var18 = function hasPlayOnDesktopTask(arg1) {
        var1 = arg1;
        var1 = var1.quest;
        var1 = var1.config;
        var1 = var1.taskConfigV2;
        var2 = var1.tasks;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.FirstPartyQuestTaskTypes;
        var1 = var1.PLAY_ON_DESKTOP;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot17 = var18;
    var17 = function hasPlayActivityTask(arg1) {
        var1 = arg1;
        var1 = var1.config;
        var1 = var1.taskConfigV2;
        var2 = var1.tasks;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.FirstPartyQuestTaskTypes;
        var1 = var1.PLAY_ACTIVITY;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot18 = var17;
    var16 = function shouldUsePlayOnDesktopTask(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0005_ip = 33; continue _fun0005 }
case 47:
            var4 = _closure1_slot17;
            var3 = {};
            var3['quest'] = var2;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 33:
            return var1;
        }
    };
    var _closure1_slot19 = var16;
    var14 = function isInGameQuest(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var4 = var2.Array;
        var3 = var4.from;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 1;
        var5 = var5[var2];
        var2 = undefined;
        var2 = var6.bind(var2)(var5);
        var2 = var2.FirstPartyQuestTaskTypesSets;
        var2 = var2.IN_GAME;
        var3 = var3.bind(var4)(var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = _closure2_slot0;
            var1 = var1.config;
            var1 = var1.taskConfigV2;
            var2 = var1.tasks;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot20 = var14;
    var9 = function isQuestProgressingOnConsole(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var2 = var4.userStatus;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var7 = _closure1_slot8;
            var5 = var4.userStatus;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 1;
            var2 = var2[var8];
            var6 = undefined;
            var2 = var9.bind(var6)(var2);
            var2 = var2.FirstPartyQuestTaskTypes;
            var2 = var2.PLAY_ON_XBOX;
            var2 = var7.bind(var6)(var5, var2);
            if(var2) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var5 = _closure1_slot8;
            var4 = var4.userStatus;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.FirstPartyQuestTaskTypes;
            var3 = var3.PLAY_ON_PLAYSTATION;
            var2 = var5.bind(var6)(var4, var3);
case 50:
            var1 = var2;
case 48:
            return var1;
        }
    };
    var _closure1_slot21 = var9;
    var1 = function _isPlayOnDesktopTaskType(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var2 = var1.type;
case 52:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.PLAY_ON_DESKTOP;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var8 = function getDefaultWatchVideoTask(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = var2.taskConfigV2;
            var7 = var1.tasks;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 1;
            var3 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var3 = var3.FirstPartyQuestTaskTypes;
            var3 = var3.WATCH_VIDEO;
            var3 = var7[var3];
            var2 = var2.taskConfigV2;
            var2 = var2.tasks;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.WATCH_VIDEO_ON_MOBILE;
            var4 = var2[var1];
            var2 = null;
            if(!(var2 != var3)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var1 = var4;
            if(!(var2 == var1)) { _fun0008_ip = 56; continue _fun0008 }
case 54:
            if(!(var2 != var4)) { _fun0008_ip = 57; continue _fun0008 }
case 13:
            var3 = var4;
case 57:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0008_ip = 58; continue _fun0008 }
case 48:
            var2 = var3;
case 58:
            var1 = var2;
case 56:
            return var1;
        }
    };
    var _closure1_slot23 = var8;
    var7 = function getDefaultInGameTask(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var1 = var1.taskConfigV2;
            var2 = var1.tasks;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 1;
            var3 = var6[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var3 = var3.FirstPartyQuestTaskTypes;
            var3 = var3.ACHIEVEMENT_IN_ACTIVITY;
            var3 = var2[var3];
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.ACHIEVEMENT_IN_GAME;
            var2 = var2[var1];
            var1 = null;
            if(!(var1 != var3)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
            var2 = var3;
case 59:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0009_ip = 61; continue _fun0009 }
case 55:
            var1 = var2;
case 61:
            return var1;
        }
    };
    var _closure1_slot24 = var7;
    var6 = function getRemainingTaskTime(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = var1.targetSeconds;
        var1 = var1.progressSeconds;
        var2 = var2 - var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot25 = var6;
    var5 = function parseMinutesAndSecondsFromSeconds(arg1) {
        var8 = arg1;
        var1 = {};
        var6 = global;
        var7 = var6.Math;
        var4 = var7.max;
        var9 = var6.Math;
        var5 = var9.floor;
        var2 = 60;
        var3 = var8 / var2;
        var3 = var5.bind(var9)(var3);
        var5 = 0;
        var3 = var4.bind(var7)(var5, var3);
        var1['minutes'] = var3;
        var4 = var6.Math;
        var3 = var4.max;
        var7 = var6.Math;
        var6 = var7.floor;
        var2 = var8 % var2;
        var2 = var6.bind(var7)(var2);
        var2 = var3.bind(var4)(var5, var2);
        var1['seconds'] = var2;
        return var1;
    };
    var _closure1_slot26 = var5;
    var2 = function formatWatchTaskTime(arg1, arg2) {
        var1 = global;
        var3 = var1.String;
        var7 = undefined;
        var2 = arg1;
        var3 = var3.bind(var7)(var2);
        var2 = var3.padStart;
        var6 = 2;
        var4 = '0';
        var5 = var2.bind(var3)(var6, var4);
        var3 = var1.String;
        var2 = arg2;
        var3 = var3.bind(var7)(var2);
        var2 = var3.padStart;
        var4 = var2.bind(var3)(var6, var4);
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = ':';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot27 = var2;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var10);
    var1 = 0;
    var10 = var21[var1];
    var1 = undefined;
    var10 = var11.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var15 = function hasSomeFirstPartyTasks(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure2_slot0;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = _closure3_slot0;
                var1 = var1.config;
                var1 = var1.taskConfigV2;
                var2 = var1.tasks;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        return var1;
    };
    var19 = 1;
    var10 = var21[var19];
    var10 = var20.bind(var1)(var10);
    var10 = var10.FirstPartyQuestTaskTypes;
    var11 = var10.PLAY_ON_XBOX;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = var21[var19];
    var11 = var20.bind(var1)(var11);
    var11 = var11.FirstPartyQuestTaskTypes;
    var11 = var11.PLAY_ON_PLAYSTATION;
    var10[1] = var11;
    var13 = var15.bind(var1)(var10);
    var _closure1_slot4 = var13;
    var10 = var21[var19];
    var10 = var20.bind(var1)(var10);
    var10 = var10.FirstPartyQuestTaskTypes;
    var11 = var10.WATCH_VIDEO;
    var10 = new Array(1);
    var10[0] = var11;
    var12 = var15.bind(var1)(var10);
    var _closure1_slot5 = var12;
    var10 = var21[var19];
    var10 = var20.bind(var1)(var10);
    var10 = var10.FirstPartyQuestTaskTypes;
    var11 = var10.WATCH_VIDEO_ON_MOBILE;
    var10 = new Array(1);
    var10[0] = var11;
    var11 = var15.bind(var1)(var10);
    var _closure1_slot6 = var11;
    var10 = var21[var19];
    var10 = var20.bind(var1)(var10);
    var10 = var10.FirstPartyQuestTaskTypes;
    var22 = var10.WATCH_VIDEO;
    var10 = new Array(2);
    var10[0] = var22;
    var19 = var21[var19];
    var19 = var20.bind(var1)(var19);
    var19 = var19.FirstPartyQuestTaskTypes;
    var19 = var19.WATCH_VIDEO_ON_MOBILE;
    var10[1] = var19;
    var10 = var15.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var19 = function hasUnsavedProgress(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            var4 = undefined;
            var5 = undefined;
            if(var3) { _fun0010_ip = 62; continue _fun0010 }
case 53:
            var3 = var2.progress;
            var2 = arg2;
            var2 = var3[var2];
            var3 = var1 == var2;
            var5 = undefined;
            if(var3) { _fun0010_ip = 62; continue _fun0010 }
case 63:
            var2 = var2.heartbeat;
            var3 = var1 == var2;
            var5 = undefined;
            if(var3) { _fun0010_ip = 62; continue _fun0010 }
case 64:
            var5 = var2.expiresAt;
case 62:
            if(!(var1 != var5)) { _fun0010_ip = 65; continue _fun0010 }
case 66:
            var2 = global;
            var1 = var2.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var7 = var3;
            var6 = var5;
            var1 = new var7[var1](var6, var5);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = var3.valueOf;
            var3 = var1.bind(var3)();
            var1 = var2.isNaN;
            var1 = var1.bind(var4)(var3);
            var1 = !var1;
            if(!var1) { _fun0010_ip = 67; continue _fun0010 }
case 68:
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1 = var3 > var2;
case 67:
            return var1;
case 65:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot8 = var19;
    var19 = function _computePercentComplete(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var1 = 0;
            var2 = var3 > var1;
            if(!var2) { _fun0011_ip = 69; continue _fun0011 }
case 47:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.floor;
            var2 = global;
            var7 = var2.Math;
            var6 = var7.min;
            var2 = arg2;
            var3 = var2 / var3;
            var2 = 1;
            var3 = var6.bind(var7)(var3, var2);
            var2 = 4;
            var1 = var4.bind(var5)(var3, var2);
case 69:
            return var1;
        }
    };
    var _closure1_slot9 = var19;
    var19 = function getTimeSinceLastBeatSeconds(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var2 = var3.userStatus;
            var1 = null;
            var4 = var1 == var2;
            var7 = undefined;
            var5 = undefined;
            if(var4) { _fun0012_ip = 70; continue _fun0012 }
case 71:
            var4 = var2.progress;
            var2 = var1 == var4;
            var5 = undefined;
            if(var2) { _fun0012_ip = 70; continue _fun0012 }
case 72:
            var2 = arg2;
            var2 = var2.type;
            var2 = var4[var2];
            var4 = var1 == var2;
            var5 = undefined;
            if(var4) { _fun0012_ip = 70; continue _fun0012 }
case 73:
            var2 = var2.heartbeat;
            var4 = var1 == var2;
            var5 = undefined;
            if(var4) { _fun0012_ip = 70; continue _fun0012 }
case 74:
            var5 = var2.lastBeatAt;
case 70:
            if(!(var1 != var5)) { _fun0012_ip = 75; continue _fun0012 }
case 9:
            var2 = _closure1_slot21;
            var2 = var2.bind(var7)(var3);
            if(var2) { _fun0012_ip = 76; continue _fun0012 }
case 77:
            var6 = _closure1_slot3;
            var4 = var6.isProgressingOnDesktop;
            var3 = var3.id;
            var2 = var4.bind(var6)(var3);
case 76:
            if(!var2) { _fun0012_ip = 75; continue _fun0012 }
case 78:
            var2 = global;
            var4 = var2.Date;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var11 = var4;
            var10 = var5;
            var2 = new var11[var2](var10, var9);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.valueOf;
            var2 = var2.bind(var4)();
            var5 = var3 - var2;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 2;
            var2 = var8[var4];
            var3 = var3.bind(var7)(var2);
            var2 = var3.floor;
            var6 = _closure1_slot1;
            var1 = 3;
            var1 = var8[var1];
            var1 = var6.bind(var7)(var1);
            var1 = var1.Millis;
            var1 = var1.SECOND;
            var1 = var5 / var1;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
case 75:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot10 = var19;
    var19 = function getProgressSeconds(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var7 = arg1;
            var3 = arg2;
            var1 = var3.target;
            var4 = var7.userStatus;
            var6 = null;
            var5 = var6 == var4;
            var9 = undefined;
            var2 = undefined;
            if(var5) { _fun0013_ip = 72; continue _fun0013 }
case 79:
            var2 = var4.completedAt;
case 72:
            if(!(var6 == var2)) { _fun0013_ip = 80; continue _fun0013 }
case 81:
            var2 = var7.userStatus;
            var5 = var6 == var2;
            var4 = undefined;
            if(var5) { _fun0013_ip = 82; continue _fun0013 }
case 62:
            var5 = var2.progress;
            var2 = var6 == var5;
            var4 = undefined;
            if(var2) { _fun0013_ip = 82; continue _fun0013 }
case 51:
            var2 = var3.type;
            var4 = var5[var2];
case 82:
            var5 = var6 == var4;
            var2 = undefined;
            if(var5) { _fun0013_ip = 83; continue _fun0013 }
case 84:
            var2 = var4.value;
case 83:
            if(!(var6 == var2)) { _fun0013_ip = 58; continue _fun0013 }
case 77:
            var5 = var7.userStatus;
            var8 = var6 == var5;
            var4 = undefined;
            if(var8) { _fun0013_ip = 48; continue _fun0013 }
case 85:
            var4 = var5.streamProgressSeconds;
case 48:
            var2 = var4;
case 58:
            var8 = var6 != var2;
            var5 = 0;
            var4 = 0;
            if(!var8) { _fun0013_ip = 67; continue _fun0013 }
case 86:
            var4 = var2;
case 67:
            var8 = _closure1_slot7;
            var8 = var8.bind(var9)(var7);
            if(var8) { _fun0013_ip = 87; continue _fun0013 }
case 88:
            var8 = _closure1_slot10;
            var8 = var8.bind(var9)(var7, var3);
            var8 = var4 + var8;
            _fun0013_ip = 89; continue _fun0013;
case 87:
            var11 = _closure1_slot3;
            var10 = var11.getOptimisticProgress;
            var7 = var7.id;
            var3 = var3.type;
            var3 = var10.bind(var11)(var7, var3);
            if(!(var6 != var3)) { _fun0013_ip = 44; continue _fun0013 }
case 90:
            if(!(var3 < var4)) { _fun0013_ip = 91; continue _fun0013 }
case 44:
            var3 = var4;
case 91:
            var8 = var3;
case 89:
            var3 = global;
            var7 = var3.Math;
            var6 = var7.min;
            var4 = 0.99;
            var4 = var4 * var1;
            var8 = var6.bind(var7)(var4, var8);
            var4 = var3.Math;
            var3 = var4.max;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 2;
            var2 = var2[var7];
            var6 = var6.bind(var9)(var2);
            var2 = var6.floor;
            var2 = var2.bind(var6)(var8, var7);
            var2 = var3.bind(var4)(var2, var5);
            return var2;
case 80:
            return var1;
        }
    };
    var _closure1_slot11 = var19;
    var19 = function _getTaskDetailsForType(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var2 = var3.quest;
            var7 = var3.taskType;
            var3 = var3.includeTaskTypes;
            var9 = undefined;
            if(!(var3 === var9)) { _fun0014_ip = 92; continue _fun0014 }
case 93:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 1;
            var4 = var6[var4];
            var4 = var5.bind(var9)(var4);
            var4 = var4.FirstPartyQuestTaskTypesSets;
            var3 = var4.ALL;
case 92:
            var _closure2_slot0 = var3;
            var3 = var2.config;
            var3 = var3.taskConfigV2;
            var11 = null;
            var4 = var7;
            if(!(var11 == var4)) { _fun0014_ip = 94; continue _fun0014 }
case 95:
            var5 = global;
            var8 = var5.Object;
            var6 = var8.values;
            var5 = var3.tasks;
            var8 = var6.bind(var8)(var5);
            var6 = var8.filter;
            var5 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var8)(var5);
            var5 = 0;
            var6 = var6[var5];
            var8 = var11 == var6;
            var5 = undefined;
            if(var8) { _fun0014_ip = 96; continue _fun0014 }
case 97:
            var5 = var6.type;
case 96:
            var4 = var5;
case 94:
            var5 = var3.tasks;
            var10 = var5[var4];
            if(!(var11 == var10)) { _fun0014_ip = 89; continue _fun0014 }
case 98:
            var6 = var3.tasks;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 1;
            var5 = var12[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var5.FirstPartyQuestTaskTypes;
            var5 = var5.STREAM_ON_DESKTOP;
            var10 = var6[var5];
case 89:
            if(!(var11 != var10)) { _fun0014_ip = 99; continue _fun0014 }
case 100:
            var8 = var10.target;
            var6 = _closure1_slot11;
            var6 = var6.bind(var9)(var2, var10);
            var10 = global;
            var13 = var10.Object;
            var12 = var13.values;
            var3 = var3.tasks;
            var13 = var12.bind(var13)(var3);
            var12 = var13.find;
            var3 = _closure1_slot22;
            var12 = var12.bind(var13)(var3);
            var13 = var11 == var12;
            var3 = undefined;
            if(var13) { _fun0014_ip = 101; continue _fun0014 }
case 10:
            var12 = var12.applications;
            var11 = var11 == var12;
            var3 = undefined;
            if(var11) { _fun0014_ip = 101; continue _fun0014 }
case 102:
            var11 = var12.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var3 = var11.bind(var12)(var1);
case 101:
            var1 = {};
            var1['progressSeconds'] = var6;
            var1['targetSeconds'] = var8;
            var12 = var10.Math;
            var11 = var12.ceil;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 3;
            var10 = var14[var10];
            var10 = var13.bind(var9)(var10);
            var10 = var10.Seconds;
            var10 = var10.MINUTE;
            var10 = var8 / var10;
            var10 = var11.bind(var12)(var10);
            var1['targetMinutes'] = var10;
            var5 = _closure1_slot9;
            var5 = var5.bind(var9)(var8, var6);
            var1['percentComplete'] = var5;
            var1['taskType'] = var4;
            var1['applications'] = var3;
            return var1;
case 99:
            var1 = global;
            var3 = var1.Error;
            var16 = var2.id;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var19 = 'No task with type ';
            var17 = ' found for quest ';
            var15 = '!';
            var18 = var7;
            var18 = var19[var5](var18, var17, var16, var15, var14);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var19 = var2;
            var1 = new var19[var3](var18, var17);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot12 = var19;
    var19 = function _parseFirstPartyTaskType(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.FirstPartyQuestTaskTypesSets;
            var3 = var1.ALL;
            var1 = var3.has;
            var3 = var1.bind(var3)(var2);
            var1 = null;
            if(!var3) { _fun0015_ip = 73; continue _fun0015 }
case 4:
            var1 = var2;
case 73:
            return var1;
        }
    };
    var _closure1_slot13 = var19;
    var19 = 5;
    var19 = var21[var19];
    var21 = var20.bind(var1)(var19);
    var20 = var21.fileFinishedImporting;
    var19 = 'modules/quests/utils/QuestTaskUtils.tsx';
    var19 = var20.bind(var21)(var19);
    var19 = function getAllApplicationIds(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0016_ip = 36; continue _fun0016 }
case 37:
            var1 = undefined;
            return var1;
case 36:
            var3 = _closure1_slot16;
            var1 = global;
            var5 = var1.Object;
            var2 = var5.keys;
            var1 = var4.config;
            var1 = var1.taskConfigV2;
            var1 = var1.tasks;
            var2 = var2.bind(var5)(var1);
            var1 = undefined;
            var1 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var3['getAllApplicationIds'] = var19;
    var19 = function getDesktopApplicationIds(arg1) {
        var4 = _closure1_slot16;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.FirstPartyQuestTaskTypes;
        var1 = var1.PLAY_ON_DESKTOP;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['getDesktopApplicationIds'] = var19;
    var19 = function getConsoleApplicationId(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = _closure1_slot16;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var3 = var6[var2];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var3.FirstPartyQuestTaskTypes;
            var7 = var3.PLAY_ON_XBOX;
            var3 = new Array(2);
            var3[0] = var7;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.FirstPartyQuestTaskTypes;
            var2 = var2.PLAY_ON_PLAYSTATION;
            var3[1] = var2;
            var2 = arg1;
            var3 = var4.bind(var1)(var2, var3);
            var2 = null;
            var2 = var2 == var3;
            if(var2) { _fun0017_ip = 103; continue _fun0017 }
case 84:
            var2 = 0;
            var1 = var3[var2];
case 103:
            return var1;
        }
    };
    var3['getConsoleApplicationId'] = var19;
    var19 = function getPlayActivityApplicationId(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var4 = _closure1_slot16;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.FirstPartyQuestTaskTypes;
            var2 = var2.PLAY_ACTIVITY;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = arg1;
            var3 = var4.bind(var1)(var2, var3);
            var2 = null;
            var2 = var2 == var3;
            if(var2) { _fun0018_ip = 74; continue _fun0018 }
case 30:
            var2 = 0;
            var1 = var3[var2];
case 74:
            return var1;
        }
    };
    var3['getPlayActivityApplicationId'] = var19;
    var19 = function getActivityApplicationId(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = _closure1_slot16;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 1;
            var3 = var6[var2];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var3.FirstPartyQuestTaskTypes;
            var7 = var3.PLAY_ACTIVITY;
            var3 = new Array(2);
            var3[0] = var7;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.FirstPartyQuestTaskTypes;
            var2 = var2.ACHIEVEMENT_IN_ACTIVITY;
            var3[1] = var2;
            var2 = arg1;
            var3 = var4.bind(var1)(var2, var3);
            var2 = null;
            var2 = var2 == var3;
            if(var2) { _fun0019_ip = 103; continue _fun0019 }
case 84:
            var2 = 0;
            var1 = var3[var2];
case 103:
            return var1;
        }
    };
    var3['getActivityApplicationId'] = var19;
    var19 = function getStreamingApplicationId(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var4 = _closure1_slot16;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var2 = var2.FirstPartyQuestTaskTypes;
            var2 = var2.STREAM_ON_DESKTOP;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = arg1;
            var3 = var4.bind(var1)(var2, var3);
            var2 = null;
            var2 = var2 == var3;
            if(var2) { _fun0020_ip = 74; continue _fun0020 }
case 30:
            var2 = 0;
            var1 = var3[var2];
case 74:
            return var1;
        }
    };
    var3['getStreamingApplicationId'] = var19;
    var3['hasPlayOnDesktopTask'] = var18;
    var18 = function hasStreamOnDesktopTask(arg1) {
        var1 = arg1;
        var1 = var1.quest;
        var1 = var1.config;
        var1 = var1.taskConfigV2;
        var2 = var1.tasks;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.FirstPartyQuestTaskTypes;
        var1 = var1.STREAM_ON_DESKTOP;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['hasStreamOnDesktopTask'] = var18;
    var18 = function hasAchievementActivityTask(arg1) {
        var1 = arg1;
        var1 = var1.config;
        var1 = var1.taskConfigV2;
        var2 = var1.tasks;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.FirstPartyQuestTaskTypes;
        var1 = var1.ACHIEVEMENT_IN_ACTIVITY;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['hasAchievementActivityTask'] = var18;
    var3['hasPlayActivityTask'] = var17;
    var3['shouldUsePlayOnDesktopTask'] = var16;
    var3['hasSomeFirstPartyTasks'] = var15;
    var3['isInGameQuest'] = var14;
    var3['hasSomeConsoleTasks'] = var13;
    var3['hasWatchVideoOnDesktopTasks'] = var12;
    var3['hasWatchVideoOnMobileTasks'] = var11;
    var3['hasWatchVideoTasks'] = var10;
    var10 = function(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot6;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0021_ip = 104; continue _fun0021 }
case 29:
            var2 = _closure1_slot5;
            var2 = var2.bind(var3)(var4);
            var1 = !var2;
case 104:
            return var1;
        }
    };
    var3['isVideoQuestForMobilePlatformOnly'] = var10;
    var10 = function isConsoleQuest(arg1) {
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['isConsoleQuest'] = var10;
    var3['isQuestProgressingOnConsole'] = var9;
    var9 = function getQuestTaskTypes(arg1) {
        var1 = global;
        var3 = var1.Set;
        var4 = var1.Object;
        var2 = var4.keys;
        var1 = arg1;
        var1 = var1.config;
        var1 = var1.taskConfigV2;
        var1 = var1.tasks;
        var5 = var2.bind(var4)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['getQuestTaskTypes'] = var9;
    var3['getDefaultWatchVideoTask'] = var8;
    var8 = function(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var1 = _closure1_slot20;
            var5 = undefined;
            var1 = var1.bind(var5)(var7);
            if(var1) { _fun0022_ip = 105; continue _fun0022 }
case 106:
            var1 = _closure1_slot4;
            var1 = var1.bind(var5)(var7);
            if(var1) { _fun0022_ip = 107; continue _fun0022 }
case 108:
            var1 = _closure1_slot7;
            var1 = var1.bind(var5)(var7);
            if(var1) { _fun0022_ip = 109; continue _fun0022 }
case 28:
            var1 = _closure1_slot19;
            var1 = var1.bind(var5)(var7);
            if(var1) { _fun0022_ip = 110; continue _fun0022 }
case 111:
            var1 = _closure1_slot18;
            var1 = var1.bind(var5)(var7);
            var6 = _closure1_slot12;
            var4 = {};
            var4['quest'] = var7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 1;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.FirstPartyQuestTaskTypes;
            if(var1) { _fun0022_ip = 112; continue _fun0022 }
case 113:
            var1 = var8.STREAM_ON_DESKTOP;
            var4['taskType'] = var1;
            var1 = var6.bind(var5)(var4);
            _fun0022_ip = 94; continue _fun0022;
case 112:
            var8 = var8.PLAY_ACTIVITY;
            var4['taskType'] = var8;
            var1 = var6.bind(var5)(var4);
case 94:
            _fun0022_ip = 114; continue _fun0022;
case 110:
            var6 = _closure1_slot12;
            var4 = {};
            var4['quest'] = var7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 1;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.FirstPartyQuestTaskTypes;
            var8 = var8.PLAY_ON_DESKTOP;
            var4['taskType'] = var8;
            var1 = var6.bind(var5)(var4);
case 114:
            _fun0022_ip = 115; continue _fun0022;
case 109:
            var6 = _closure1_slot12;
            var4 = {};
            var4['quest'] = var7;
            var9 = _closure1_slot23;
            var8 = var7.config;
            var9 = var9.bind(var5)(var8);
            var8 = null;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0022_ip = 116; continue _fun0022 }
case 40:
            var8 = var9.type;
case 116:
            var4['taskType'] = var8;
            var1 = var6.bind(var5)(var4);
case 115:
            _fun0022_ip = 117; continue _fun0022;
case 107:
            var4 = {};
            var4['quest'] = var7;
            var6 = null;
            if(!(var6 == var2)) { _fun0022_ip = 26; continue _fun0022 }
case 118:
            var6 = _closure1_slot21;
            var6 = var6.bind(var5)(var7);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 1;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.FirstPartyQuestTaskTypesSets;
            if(var6) { _fun0022_ip = 119; continue _fun0022 }
case 101:
            var6 = var7.ALL;
            _fun0022_ip = 120; continue _fun0022;
case 119:
            var6 = var7.CONSOLE;
case 120:
            var2 = var6;
case 26:
            var4['includeTaskTypes'] = var2;
            var2 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.quest;
                    var4 = var1.includeTaskTypes;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0023_ip = 28; continue _fun0023 }
case 52:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 1;
                    var1 = var6[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.FirstPartyQuestTaskTypesSets;
                    var4 = var1.ALL;
case 28:
                    var6 = _closure1_slot14;
                    var2 = global;
                    var8 = var2.Object;
                    var7 = var8.values;
                    var10 = var5.userStatus;
                    var9 = null;
                    var11 = var9 == var10;
                    var2 = undefined;
                    if(var11) { _fun0023_ip = 55; continue _fun0023 }
case 121:
                    var2 = var10.progress;
case 55:
                    if(!(var9 == var2)) { _fun0023_ip = 122; continue _fun0023 }
case 123:
                    var2 = {};
case 122:
                    var8 = var7.bind(var8)(var2);
                    var7 = var8.sort;
                    var2 = function(arg1, arg2) {
                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                            var3 = arg1;
                            var2 = arg2;
                            var4 = null;
                            var5 = var4 == var3;
                            var6 = undefined;
                            if(var5) { _fun0024_ip = 63; continue _fun0024 }
case 124:
                            var5 = var3.heartbeat;
                            var7 = var4 == var5;
                            var6 = undefined;
                            if(var7) { _fun0024_ip = 63; continue _fun0024 }
case 104:
                            var6 = var5.lastBeatAt;
case 63:
                            var7 = var4 == var2;
                            var5 = undefined;
                            if(var7) { _fun0024_ip = 111; continue _fun0024 }
case 125:
                            var7 = var2.heartbeat;
                            var8 = var4 == var7;
                            var5 = undefined;
                            if(var8) { _fun0024_ip = 111; continue _fun0024 }
case 126:
                            var5 = var7.lastBeatAt;
case 111:
                            if(!(var4 != var6)) { _fun0024_ip = 70; continue _fun0024 }
case 127:
                            if(!(var4 == var5)) { _fun0024_ip = 128; continue _fun0024 }
case 70:
                            if(!(var4 == var6)) { _fun0024_ip = 58; continue _fun0024 }
case 82:
                            if(!(var4 == var5)) { _fun0024_ip = 58; continue _fun0024 }
case 60:
                            var8 = var4 == var3;
                            var7 = undefined;
                            if(var8) { _fun0024_ip = 61; continue _fun0024 }
case 11:
                            var7 = var3.updatedAt;
case 61:
                            if(!(var4 != var7)) { _fun0024_ip = 58; continue _fun0024 }
case 54:
                            var7 = var4 == var2;
                            var1 = undefined;
                            if(var7) { _fun0024_ip = 76; continue _fun0024 }
case 129:
                            var1 = var2.updatedAt;
case 76:
                            if(!(var4 == var1)) { _fun0024_ip = 130; continue _fun0024 }
case 58:
                            var8 = var4 != var6;
                            var7 = 1;
                            var1 = var7;
                            if(!var8) { _fun0024_ip = 88; continue _fun0024 }
case 131:
                            var4 = var4 == var5;
                            var1 = var7;
                            if(!var4) { _fun0024_ip = 88; continue _fun0024 }
case 96:
                            var1 = -1;
case 88:
                            _fun0024_ip = 132; continue _fun0024;
case 130:
                            var4 = global;
                            var8 = var4.Date;
                            var9 = var3.updatedAt;
                            var7 = var8.prototype;
                            var7 = Object.create(var7, {constructor: {value: var8}});
                            var10 = var7;
                            var3 = new var10[var8](var9, var8);
                            var7 = var3 instanceof Object ? var3 : var7;
                            var3 = var7.valueOf;
                            var3 = var3.bind(var7)();
                            var7 = var4.Date;
                            var9 = var2.updatedAt;
                            var4 = var7.prototype;
                            var4 = Object.create(var4, {constructor: {value: var7}});
                            var10 = var4;
                            var2 = new var10[var7](var9, var8);
                            var4 = var2 instanceof Object ? var2 : var4;
                            var2 = var4.valueOf;
                            var2 = var2.bind(var4)();
                            var3 = var3 > var2;
                            var2 = 1;
                            if(!var3) { _fun0024_ip = 133; continue _fun0024 }
case 116:
                            var2 = -1;
case 133:
                            var1 = var2;
case 132:
                            _fun0024_ip = 134; continue _fun0024;
case 128:
                            var2 = global;
                            var3 = var2.Date;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {constructor: {value: var3}});
                            var10 = var4;
                            var9 = var6;
                            var3 = new var10[var3](var9, var8);
                            var4 = var3 instanceof Object ? var3 : var4;
                            var3 = var4.valueOf;
                            var3 = var3.bind(var4)();
                            var2 = var2.Date;
                            var4 = var2.prototype;
                            var4 = Object.create(var4, {constructor: {value: var2}});
                            var10 = var4;
                            var9 = var5;
                            var2 = new var10[var2](var9, var8);
                            var4 = var2 instanceof Object ? var2 : var4;
                            var2 = var4.valueOf;
                            var2 = var2.bind(var4)();
                            var3 = var3 > var2;
                            var2 = 1;
                            if(!var3) { _fun0024_ip = 135; continue _fun0024 }
case 105:
                            var2 = -1;
case 135:
                            var1 = var2;
case 134:
                            return var1;
                        }
                    };
                    var8 = var7.bind(var8)(var2);
                    var7 = var8.filter;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 4;
                    var2 = var11[var2];
                    var2 = var10.bind(var3)(var2);
                    var2 = var2.isNotNullish;
                    var2 = var7.bind(var8)(var2);
                    var8 = var6.bind(var3)(var2);
                    var6 = var8.bind(var3)();
                    var2 = var6.done;
                    if(var2) { _fun0023_ip = 136; continue _fun0023 }
case 137:
                    var2 = var6.value;
                    var7 = _closure1_slot13;
                    var2 = var2.eventName;
                    var7 = var7.bind(var3)(var2);
                    if(!(var9 != var7)) { _fun0023_ip = 138; continue _fun0023 }
case 22:
                    if(!(var9 != var4)) { _fun0023_ip = 138; continue _fun0023 }
case 139:
                    var2 = var4.has;
                    var2 = var2.bind(var4)(var7);
                    if(var2) { _fun0023_ip = 140; continue _fun0023 }
case 138:
                    var10 = var8.bind(var3)();
                    var2 = var10.done;
                    var6 = var10;
                    if(var2) { _fun0023_ip = 136; continue _fun0023 }
case 141:
                    _fun0023_ip = 137; continue _fun0023;
case 140:
                    var6 = _closure1_slot12;
                    var2 = {};
                    var2['quest'] = var5;
                    var2['taskType'] = var7;
                    var2['includeTaskTypes'] = var4;
                    var2 = var6.bind(var3)(var2);
                    return var2;
case 136:
                    var2 = _closure1_slot12;
                    var1 = {};
                    var1['quest'] = var5;
                    var1['includeTaskTypes'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var2.bind(var5)(var4);
case 117:
            _fun0022_ip = 142; continue _fun0022;
case 105:
            var2 = {'progressSeconds': 0, 'targetSeconds': 1, 'targetMinutes': 1, 'percentComplete': 0};
            var6 = 1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.FirstPartyQuestTaskTypes;
            var3 = var3.STREAM_ON_DESKTOP;
            var2['taskType'] = var3;
            var1 = var2;
case 142:
            return var1;
        }
    };
    var3['getQuestTaskDetails'] = var8;
    var3['getDefaultInGameTask'] = var7;
    var7 = function getThirdPartyTaskDetails(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot24;
            var1 = var3.config;
            var6 = undefined;
            var5 = var4.bind(var6)(var1);
            var1 = null;
            if(!(var1 != var5)) { _fun0025_ip = 87; continue _fun0025 }
case 104:
            var4 = var3.userStatus;
            var7 = var1 == var4;
            var3 = undefined;
            if(var7) { _fun0025_ip = 143; continue _fun0025 }
case 125:
            var7 = var4.progress;
            var4 = var1 == var7;
            var3 = undefined;
            if(var4) { _fun0025_ip = 143; continue _fun0025 }
case 126:
            var4 = var5.type;
            var4 = var7[var4];
            var7 = var1 == var4;
            var3 = undefined;
            if(var7) { _fun0025_ip = 143; continue _fun0025 }
case 144:
            var3 = var4.value;
case 143:
            var7 = var1 != var3;
            var4 = 0;
            if(!var7) { _fun0025_ip = 83; continue _fun0025 }
case 145:
            var4 = var3;
case 83:
            var3 = _closure1_slot9;
            var2 = var5.target;
            var3 = var3.bind(var6)(var2, var4);
            var2 = {};
            var6 = var5.messages;
            var6 = var6.taskTitle;
            var2['title'] = var6;
            var6 = var5.messages;
            var6 = var6.taskDescription;
            var2['description'] = var6;
            var5 = var5.target;
            var2['target'] = var5;
            var2['progress'] = var4;
            var2['percentComplete'] = var3;
            return var2;
case 87:
            return var1;
        }
    };
    var3['getThirdPartyTaskDetails'] = var7;
    var3['getRemainingTaskTime'] = var6;
    var3['parseMinutesAndSecondsFromSeconds'] = var5;
    var4 = function formatWatchTaskRemainingTime(arg1) {
        var3 = _closure1_slot25;
        var4 = undefined;
        var1 = arg1;
        var1 = var3.bind(var4)(var1);
        var3 = _closure1_slot27;
        var2 = var1.minutes;
        var1 = var1.seconds;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['formatWatchTaskRemainingTime'] = var4;
    var3['formatWatchTaskTime'] = var2;
    return var1;
})();