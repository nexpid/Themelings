// app/modules/quests/QuestsHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var26 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var27 = dependencyMap;
    var _closure1_slot0 = var26;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var27;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot36;
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
            var7 = _closure1_slot36;
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
    var _closure1_slot35 = var1;
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
    var _closure1_slot36 = var1;
    var23 = function useQuests() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var10 = arguments[0];
            var9 = undefined;
            if(!(var10 === var9)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var10 = {'fetchPolicy': 'cache-only', 'callerSource': 'unknown'};
case 36:
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var9;
            var _closure2_slot2 = var9;
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var9;
            var _closure2_slot5 = var9;
            var _closure2_slot6 = var9;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var2 = false;
            var4 = var3.bind(var4)(var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var4 = var3.bind(var9)(var4, var2);
            var2 = 0;
            var2 = var4[var2];
            _closure2_slot1 = var2;
            var3 = 1;
            var3 = var4[var3];
            _closure2_slot2 = var3;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 12;
            var4 = var13[var3];
            var11 = var8.bind(var9)(var4);
            var7 = var11.useStateFromStoresArray;
            var4 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot11;
                var2 = var1.quests;
                var1 = var2.values;
                var5 = var1.bind(var2)();
                var1 = new Array(0);
                var4 = 0;
                var6 = var1;
                var2 = arraySpread(var6, var5, var4);
                return var1;
            };
            var5 = var7.bind(var11)(var5, var4);
            var4 = var13[var3];
            var12 = var8.bind(var9)(var4);
            var11 = var12.useStateFromStoresArray;
            var4 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var1 = _closure1_slot11;
                var2 = var1.excludedQuests;
                var1 = var2.values;
                var5 = var1.bind(var2)();
                var1 = new Array(0);
                var4 = 0;
                var6 = var1;
                var2 = arraySpread(var6, var5, var4);
                return var1;
            };
            var4 = var11.bind(var12)(var7, var4);
            var3 = var13[var3];
            var12 = var8.bind(var9)(var3);
            var11 = var12.useStateFromStoresObject;
            var3 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure1_slot11;
                var3 = var3.isFetchingCurrentQuests;
                var1['isFetchingCurrentQuests'] = var3;
                var2 = _closure1_slot11;
                var2 = var2.lastFetchedCurrentQuests;
                var1['lastFetchedCurrentQuests'] = var2;
                return var1;
            };
            var7 = var11.bind(var12)(var7, var3);
            var3 = var7.isFetchingCurrentQuests;
            _closure2_slot3 = var3;
            var11 = var7.lastFetchedCurrentQuests;
            _closure2_slot4 = var11;
            var7 = 13;
            var7 = var13[var7];
            var14 = var8.bind(var9)(var7);
            var12 = var14.getIsEligibleForQuests;
            var7 = {};
            var15 = _closure1_slot13;
            var15 = var15.USE_QUESTS;
            var7['location'] = var15;
            var12 = var12.bind(var14)(var7);
            _closure2_slot5 = var12;
            var7 = 14;
            var7 = var13[var7];
            var7 = var8.bind(var9)(var7);
            var9 = var7.QuestAdFetchActiveCheckExperiment;
            var8 = var9.useConfig;
            var7 = {};
            var13 = _closure1_slot13;
            var13 = var13.USE_QUESTS;
            var7['location'] = var13;
            var9 = var8.bind(var9)(var7);
            _closure2_slot6 = var9;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var13 = var10.fetchPolicy;
            var6 = new Array(7);
            var6[0] = var13;
            var6[1] = var12;
            var6[2] = var2;
            var6[3] = var3;
            var6[4] = var11;
            var10 = var10.callerSource;
            var6[5] = var10;
            var9 = var9.enabled;
            var6[6] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.fetchPolicy;
                    var2 = 'cache-only';
                    if(!(var2 !== var3)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var2 = _closure2_slot0;
                    var3 = var2.fetchPolicy;
                    var2 = 'cache-and-network';
                    if(!(var2 !== var3)) { _fun0005_ip = 40; continue _fun0005 }
case 2:
                    var2 = _closure2_slot0;
                    var3 = var2.fetchPolicy;
                    var2 = 'cache-or-network';
                    if(!(var2 === var3)) { _fun0005_ip = 38; continue _fun0005 }
case 41:
                    var3 = _closure2_slot4;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0005_ip = 38; continue _fun0005 }
case 40:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0005_ip = 38; continue _fun0005 }
case 42:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 43:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 44:
                    var3 = _closure2_slot2;
                    var6 = undefined;
                    var2 = true;
                    var2 = var3.bind(var6)(var2);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var4 = var4[var2];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.fetchCurrentQuests;
                    var4 = var4.bind(var5)();
                    var4 = _closure2_slot6;
                    var4 = var4.enabled;
                    if(!var4) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 16;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.getState;
                    var5 = var4.bind(var5)();
                    var4 = 'active';
                    if(!(var4 !== var5)) { _fun0005_ip = 45; continue _fun0005 }
case 47:
                    return var6;
case 45:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = var7[var2];
                    var4 = var5.bind(var6)(var2);
                    var3 = var4.fetchQuestToDeliver;
                    var2 = 17;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.QuestPlacement;
                    var2 = var2.MOBILE_HOME_DOCK_AREA;
                    var1 = _closure2_slot0;
                    var6 = var1.callerSource;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = 'use_quests_';
                    var1 = var5.bind(var1)(var6);
                    var1 = var3.bind(var4)(var2, var1);
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1, var6);
            var1 = {};
            var1['quests'] = var5;
            var1['excludedQuests'] = var4;
            var1['isFetchingCurrentQuests'] = var3;
            var1['hasFetched'] = var2;
            return var1;
        }
    };
    var _closure1_slot37 = var23;
    var1 = function defaultSortFn(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var9 = undefined;
            var5 = var5.bind(var9)(var1);
            var1 = var5.isQuestExpired;
            var1 = var1.bind(var5)(var3);
            var1 = !var1;
            var6 = var3.userStatus;
            var10 = null;
            var7 = var10 == var6;
            var5 = undefined;
            if(var7) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var5 = var6.claimedAt;
case 48:
            var5 = var10 != var5;
            var7 = var2.userStatus;
            var8 = var10 == var7;
            var6 = undefined;
            if(var8) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var6 = var7.claimedAt;
case 50:
            var8 = var10 != var6;
            var7 = var3.userStatus;
            var11 = var10 == var7;
            var6 = undefined;
            if(var11) { _fun0006_ip = 52; continue _fun0006 }
case 44:
            var6 = var7.enrolledAt;
case 52:
            var6 = var10 != var6;
            var11 = var2.userStatus;
            var12 = var10 == var11;
            var7 = undefined;
            if(var12) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var7 = var11.enrolledAt;
case 53:
            var7 = var10 != var7;
            if(var1) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            if(!(var5 === var8)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            if(!(var6 === var7)) { _fun0006_ip = 59; continue _fun0006 }
case 15:
            var12 = _closure1_slot47;
            var1 = var3.config;
            var11 = var1.expiresAt;
            var1 = var2.config;
            var10 = var1.expiresAt;
            var1 = _closure1_slot28;
            var1 = var1.DESC;
            var1 = var12.bind(var9)(var11, var10, var1);
            _fun0006_ip = 60; continue _fun0006;
case 59:
            var10 = 1;
            if(!var6) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var10 = _closure1_slot25;
case 61:
            var1 = var10;
case 60:
            _fun0006_ip = 63; continue _fun0006;
case 57:
            var10 = 1;
            if(!var5) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var10 = _closure1_slot25;
case 64:
            var1 = var10;
case 63:
            _fun0006_ip = 66; continue _fun0006;
case 55:
            if(!(var5 === var8)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            if(!(var6 === var7)) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            var8 = _closure1_slot47;
            var3 = var3.config;
            var7 = var3.expiresAt;
            var2 = var2.config;
            var3 = var2.expiresAt;
            var2 = _closure1_slot28;
            var2 = var2.ASC;
            var2 = var8.bind(var9)(var7, var3, var2);
            _fun0006_ip = 71; continue _fun0006;
case 69:
            var3 = 1;
            if(!var6) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var3 = _closure1_slot25;
case 72:
            var2 = var3;
case 71:
            _fun0006_ip = 74; continue _fun0006;
case 67:
            var3 = 1;
            if(var5) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var3 = _closure1_slot25;
case 75:
            var2 = var3;
case 74:
            var1 = var2;
case 66:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function recentSortFn(arg1, arg2) {
        var5 = _closure1_slot47;
        var2 = arg1;
        var2 = var2.config;
        var4 = var2.startsAt;
        var2 = arg2;
        var2 = var2.config;
        var3 = var2.startsAt;
        var1 = _closure1_slot28;
        var2 = var1.DESC;
        var1 = undefined;
        var1 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var _closure1_slot39 = var1;
    var1 = function recentlyEnrolledSortFn(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = var4.userStatus;
            var1 = null;
            var5 = var1 == var2;
            var6 = undefined;
            var8 = undefined;
            if(var5) { _fun0007_ip = 77; continue _fun0007 }
case 36:
            var8 = var2.enrolledAt;
case 77:
            var2 = var3.userStatus;
            var5 = var1 == var2;
            var7 = undefined;
            if(var5) { _fun0007_ip = 78; continue _fun0007 }
case 2:
            var7 = var2.enrolledAt;
case 78:
            if(!(var1 == var8)) { _fun0007_ip = 79; continue _fun0007 }
case 28:
            if(!(var1 != var7)) { _fun0007_ip = 80; continue _fun0007 }
case 79:
            if(!(var1 != var8)) { _fun0007_ip = 48; continue _fun0007 }
case 81:
            if(!(var1 != var7)) { _fun0007_ip = 82; continue _fun0007 }
case 48:
            if(!(var1 == var8)) { _fun0007_ip = 40; continue _fun0007 }
case 83:
            var2 = var1 != var7;
            var1 = 1;
            if(var2) { _fun0007_ip = 84; continue _fun0007 }
case 40:
            var5 = _closure1_slot47;
            var2 = _closure1_slot28;
            var2 = var2.DESC;
            var1 = var5.bind(var6)(var8, var7, var2);
case 84:
            _fun0007_ip = 85; continue _fun0007;
case 82:
            var1 = _closure1_slot25;
case 85:
            _fun0007_ip = 14; continue _fun0007;
case 80:
            var5 = _closure1_slot47;
            var4 = var4.config;
            var4 = var4.expiresAt;
            var3 = var3.config;
            var3 = var3.expiresAt;
            var2 = _closure1_slot28;
            var2 = var2.DESC;
            var1 = var5.bind(var6)(var4, var3, var2);
case 14:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function expiringSoonSortFn(arg1, arg2) {
        var5 = _closure1_slot47;
        var2 = arg1;
        var2 = var2.config;
        var4 = var2.expiresAt;
        var2 = arg2;
        var2 = var2.config;
        var3 = var2.expiresAt;
        var1 = _closure1_slot28;
        var2 = var1.ASC;
        var1 = undefined;
        var1 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = function doesQuestPassTaskFilter(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var2 = _closure1_slot16;
            var2 = var2.TASK_VIDEO;
            if(!(var2 !== var4)) { _fun0008_ip = 86; continue _fun0008 }
case 39:
            var2 = _closure1_slot16;
            var2 = var2.TASK_PLAY;
            if(!(var2 !== var4)) { _fun0008_ip = 87; continue _fun0008 }
case 88:
            var2 = false;
            return var2;
case 87:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 18;
            var2 = var2[var7];
            var6 = undefined;
            var5 = var4.bind(var6)(var2);
            var4 = var5.hasPlayOnDesktopTask;
            var2 = {};
            var2['quest'] = var3;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0008_ip = 89; continue _fun0008 }
case 51:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var8 = var5.bind(var6)(var4);
            var5 = var8.hasStreamOnDesktopTask;
            var4 = {};
            var4['quest'] = var3;
            var2 = var5.bind(var8)(var4);
case 89:
            if(var2) { _fun0008_ip = 90; continue _fun0008 }
case 91:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var5 = var5.bind(var6)(var4);
            var4 = var5.hasPlayActivityTask;
            var2 = var4.bind(var5)(var3);
case 90:
            return var2;
case 86:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.hasWatchVideoTasks;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function doesQuestPassRewardFilter(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var3 = _closure1_slot16;
            var3 = var3.REWARD_VIRTUAL_CURRENCY;
            if(!(var3 !== var4)) { _fun0009_ip = 92; continue _fun0009 }
case 39:
            var3 = _closure1_slot16;
            var3 = var3.REWARD_COLLECTIBLE;
            if(!(var3 !== var4)) { _fun0009_ip = 93; continue _fun0009 }
case 88:
            var3 = _closure1_slot16;
            var3 = var3.REWARD_IN_GAME;
            if(!(var3 !== var4)) { _fun0009_ip = 94; continue _fun0009 }
case 95:
            var3 = false;
            return var3;
case 94:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 18;
            var3 = var3[var7];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var4 = var5.hasInGameQuestReward;
            var3 = var1.config;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0009_ip = 96; continue _fun0009 }
case 97:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var6 = var5.bind(var6)(var4);
            var5 = var6.hasQuestRewardCode;
            var4 = var1.config;
            var3 = var5.bind(var6)(var4);
case 96:
            return var3;
case 93:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 18;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.hasCollectiblesQuestReward;
            var3 = var1.config;
            var3 = var4.bind(var5)(var3);
            return var3;
case 92:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 18;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.hasVirtualCurrencyReward;
            var1 = var1.config;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function doesQuestPassFilter(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg2;
            var4 = arg3;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = 'task';
            if(!(var1 !== var5)) { _fun0010_ip = 98; continue _fun0010 }
case 31:
            var3 = 'reward';
            var1 = undefined;
            if(!(var3 === var5)) { _fun0010_ip = 5; continue _fun0010 }
case 33:
            var1 = _closure1_slot43;
            _fun0010_ip = 5; continue _fun0010;
case 98:
            var1 = _closure1_slot42;
case 5:
            var _closure2_slot1 = var1;
            var3 = var4.length;
            var1 = 0;
            var1 = var1 === var3;
            if(var1) { _fun0010_ip = 99; continue _fun0010 }
case 30:
            var3 = var4.some;
            var2 = function(arg1) {
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var1 = arg1;
                var2 = var1.filter;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 99:
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var22 = function sortQuests(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var2 = arguments[1];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0011_ip = 100; continue _fun0011 }
case 32:
            var2 = _closure1_slot27;
case 100:
            var6 = var2.sortMethod;
            var5 = var2.filters;
            var2 = null;
            var3 = var7;
            if(!(var2 != var5)) { _fun0011_ip = 30; continue _fun0011 }
case 98:
            var8 = var5.length;
            var2 = 0;
            var3 = var7;
            if(!(var2 !== var8)) { _fun0011_ip = 30; continue _fun0011 }
case 28:
            var2 = function filterQuests(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg2;
                    var4 = var6.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0012_ip = 101; continue _fun0012 }
case 102:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 19;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.groupBy;
                    var3 = 'group';
                    var3 = var4.bind(var5)(var6, var3);
                    var _closure3_slot0 = var3;
                    var3 = var1.filter;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var2 = global;
                        var4 = var2.Object;
                        var3 = var4.entries;
                        var2 = _closure3_slot0;
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.every;
                        var1 = function(arg1) {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                var6 = arg1;
                                var1 = var6[Symbol.iterator];
                                var6 = var1().next;
                                var3 = var6().value;
                                var2 = var1;
                                var5 = undefined;
                                var2 = var2 === var5;
                                var4 = undefined;
                                if(var2) { _fun0013_ip = 103; continue _fun0013 }
case 104:
                                var4 = var3;
case 103:
                                var3 = undefined;
                                if(var2) { _fun0013_ip = 105; continue _fun0013 }
case 106:
                                var7 = var6().value;
                                var6 = var1;
                                var6 = var6 === var5;
                                var3 = undefined;
                                var2 = var6;
                                if(var6) { _fun0013_ip = 105; continue _fun0013 }
case 107:
                                var3 = var7;
                                var2 = var6;
case 105:
                                if(var2) { _fun0013_ip = 108; continue _fun0013 }
case 79:
                                var1.return();
case 108:
                                var2 = _closure1_slot44;
                                var1 = _closure4_slot0;
                                var1 = var2.bind(var5)(var1, var4, var3);
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var2;
case 101:
                    return var1;
                }
            };
            var3 = var2.bind(var4)(var7, var5);
case 30:
            var2 = _closure1_slot15;
            var2 = var2.MOST_RECENT;
            if(!(var2 !== var6)) { _fun0011_ip = 109; continue _fun0011 }
case 110:
            var2 = _closure1_slot15;
            var2 = var2.RECENTLY_ENROLLED;
            if(!(var2 !== var6)) { _fun0011_ip = 93; continue _fun0011 }
case 111:
            var2 = _closure1_slot15;
            var2 = var2.EXPIRING_SOON;
            if(!(var2 !== var6)) { _fun0011_ip = 112; continue _fun0011 }
case 44:
            var2 = _closure1_slot15;
            var2 = var2.SUGGESTED;
            var2 = _closure1_slot38;
            _fun0011_ip = 113; continue _fun0011;
case 112:
            var2 = _closure1_slot41;
            _fun0011_ip = 113; continue _fun0011;
case 93:
            var2 = _closure1_slot40;
            _fun0011_ip = 113; continue _fun0011;
case 109:
            var2 = _closure1_slot39;
case 113:
            var1 = function prioritizeLiveQuests(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var1 = function(arg1, arg2) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var6 = arg1;
                        var5 = arg2;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 18;
                        var4 = var8[var1];
                        var2 = undefined;
                        var9 = var7.bind(var2)(var4);
                        var4 = var9.isQuestExpired;
                        var4 = var4.bind(var9)(var6);
                        var4 = !var4;
                        var1 = var8[var1];
                        var7 = var7.bind(var2)(var1);
                        var1 = var7.isQuestExpired;
                        var1 = var1.bind(var7)(var5);
                        var1 = !var1;
                        if(!(var4 === var1)) { _fun0014_ip = 51; continue _fun0014 }
case 83:
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var2)(var6, var5);
                        _fun0014_ip = 114; continue _fun0014;
case 51:
                        var2 = 1;
                        if(!var4) { _fun0014_ip = 115; continue _fun0014 }
case 50:
                        var2 = _closure1_slot25;
case 115:
                        var1 = var2;
case 114:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var1.bind(var4)(var2);
            var1 = var3.sort;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var _closure1_slot45 = var22;
    var1 = function mobileOrbsSortMethod(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var4 = var8.id;
            var3 = _closure1_slot26;
            var3 = var4 === var3;
            var5 = var1.id;
            var4 = _closure1_slot26;
            var4 = var5 === var4;
            if(!var3) { _fun0015_ip = 116; continue _fun0015 }
case 117:
            var7 = var8.userStatus;
            var6 = null;
            var9 = var6 == var7;
            var5 = undefined;
            if(var9) { _fun0015_ip = 7; continue _fun0015 }
case 4:
            var5 = var7.completedAt;
case 7:
            var3 = var6 == var5;
case 116:
            if(!var4) { _fun0015_ip = 118; continue _fun0015 }
case 48:
            var7 = var1.userStatus;
            var6 = null;
            var9 = var6 == var7;
            var5 = undefined;
            if(var9) { _fun0015_ip = 119; continue _fun0015 }
case 120:
            var5 = var7.completedAt;
case 119:
            var4 = var6 == var5;
case 118:
            if(!(var3 === var4)) { _fun0015_ip = 121; continue _fun0015 }
case 43:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = 18;
            var4 = var5[var10];
            var12 = undefined;
            var7 = var6.bind(var12)(var4);
            var4 = var7.isQuestExpired;
            var4 = var4.bind(var7)(var8);
            var4 = !var4;
            var5 = var5[var10];
            var6 = var6.bind(var12)(var5);
            var5 = var6.isQuestExpired;
            var5 = var5.bind(var6)(var1);
            var5 = !var5;
            if(!(var4 === var5)) { _fun0015_ip = 122; continue _fun0015 }
case 123:
            if(!var4) { _fun0015_ip = 92; continue _fun0015 }
case 124:
            if(var5) { _fun0015_ip = 125; continue _fun0015 }
case 92:
            var5 = _closure1_slot38;
            var5 = var5.bind(var12)(var8, var1);
            return var5;
case 125:
            var6 = var8.userStatus;
            var13 = null;
            var7 = var13 == var6;
            var5 = undefined;
            if(var7) { _fun0015_ip = 62; continue _fun0015 }
case 59:
            var5 = var6.claimedAt;
case 62:
            var5 = var13 != var5;
            var7 = var1.userStatus;
            var9 = var13 == var7;
            var6 = undefined;
            if(var9) { _fun0015_ip = 21; continue _fun0015 }
case 64:
            var6 = var7.claimedAt;
case 21:
            var6 = var13 != var6;
            if(!(var5 === var6)) { _fun0015_ip = 126; continue _fun0015 }
case 127:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = var7[var10];
            var14 = var9.bind(var12)(var6);
            var11 = var14.hasVirtualCurrencyReward;
            var6 = var8.config;
            var6 = var11.bind(var14)(var6);
            var7 = var7[var10];
            var10 = var9.bind(var12)(var7);
            var9 = var10.hasVirtualCurrencyReward;
            var7 = var1.config;
            var11 = var9.bind(var10)(var7);
            if(!(var6 === var11)) { _fun0015_ip = 128; continue _fun0015 }
case 129:
            var9 = var8.userStatus;
            var10 = var13 == var9;
            var7 = undefined;
            if(var10) { _fun0015_ip = 130; continue _fun0015 }
case 131:
            var7 = var9.enrolledAt;
case 130:
            var7 = var13 != var7;
            var10 = var1.userStatus;
            var14 = var13 == var10;
            var9 = undefined;
            if(var14) { _fun0015_ip = 132; continue _fun0015 }
case 133:
            var9 = var10.enrolledAt;
case 132:
            var9 = var13 != var9;
            if(!(var7 === var9)) { _fun0015_ip = 134; continue _fun0015 }
case 135:
            var9 = var8.config;
            var10 = var9.taskConfigV2;
            var14 = var13 == var10;
            var9 = undefined;
            if(var14) { _fun0015_ip = 136; continue _fun0015 }
case 137:
            var14 = var10.tasks;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 20;
            var10 = var16[var10];
            var10 = var15.bind(var12)(var10);
            var10 = var10.FirstPartyQuestTaskTypes;
            var10 = var10.WATCH_VIDEO_ON_MOBILE;
            var9 = var14[var10];
case 136:
            var9 = var13 != var9;
            var10 = var1.config;
            var14 = var10.taskConfigV2;
            var15 = var13 == var14;
            var10 = undefined;
            if(var15) { _fun0015_ip = 138; continue _fun0015 }
case 139:
            var15 = var14.tasks;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 20;
            var14 = var17[var14];
            var14 = var16.bind(var12)(var14);
            var14 = var14.FirstPartyQuestTaskTypes;
            var14 = var14.WATCH_VIDEO_ON_MOBILE;
            var10 = var15[var14];
case 138:
            var10 = var13 != var10;
            if(!var6) { _fun0015_ip = 140; continue _fun0015 }
case 141:
            if(!var11) { _fun0015_ip = 140; continue _fun0015 }
case 142:
            if(!(var9 === var10)) { _fun0015_ip = 143; continue _fun0015 }
case 140:
            var11 = _closure1_slot47;
            var8 = var8.config;
            var10 = var8.expiresAt;
            var1 = var1.config;
            var8 = var1.expiresAt;
            var1 = _closure1_slot28;
            var1 = var1.ASC;
            var1 = var11.bind(var12)(var10, var8, var1);
            _fun0015_ip = 144; continue _fun0015;
case 143:
            var8 = 1;
            if(!var9) { _fun0015_ip = 145; continue _fun0015 }
case 146:
            var8 = _closure1_slot25;
case 145:
            var1 = var8;
case 144:
            return var1;
case 134:
            var1 = 1;
            if(!var7) { _fun0015_ip = 147; continue _fun0015 }
case 148:
            var1 = _closure1_slot25;
case 147:
            return var1;
case 128:
            var1 = 1;
            if(!var6) { _fun0015_ip = 149; continue _fun0015 }
case 150:
            var1 = _closure1_slot25;
case 149:
            return var1;
case 126:
            var1 = 1;
            if(var5) { _fun0015_ip = 151; continue _fun0015 }
case 152:
            var1 = _closure1_slot25;
case 151:
            return var1;
case 122:
            var1 = 1;
            if(!var4) { _fun0015_ip = 153; continue _fun0015 }
case 154:
            var1 = _closure1_slot25;
case 153:
            return var1;
case 121:
            var1 = 1;
            if(!var3) { _fun0015_ip = 155; continue _fun0015 }
case 156:
            var1 = _closure1_slot25;
case 155:
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function sortByDate(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot28;
            var5 = var2.DESC;
            var2 = 1;
            var3 = arg3;
            if(!(var3 === var5)) { _fun0016_ip = 3; continue _fun0016 }
case 39:
            var2 = _closure1_slot25;
case 3:
            var3 = var4.localeCompare;
            var1 = arg2;
            var1 = var3.bind(var4)(var1);
            var1 = var1 * var2;
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var19 = function useExpiredQuestsMap() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 12;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot11;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot11;
            var1 = var2.getExpiredQuestsMap;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot48 = var19;
    var18 = function useIsQuestExpired(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot11;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0017_ip = 157; continue _fun0017 }
case 158:
                var4 = _closure1_slot11;
                var3 = var4.isQuestExpired;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 157:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot49 = var18;
    var17 = function useQuestFormattedDate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var7 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var7;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0018_ip = 106; continue _fun0018 }
case 159:
            var2 = {};
            var3 = 'short';
            var2['dateStyle'] = var3;
            var6 = var2;
case 106:
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var3 = var8[var3];
            var8 = var4.bind(var5)(var3);
            var5 = var8.useStateFromStores;
            var3 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot7;
                var1 = var1.locale;
                return var1;
            };
            var5 = var5.bind(var8)(var4, var3);
            _closure2_slot2 = var5;
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = '';
                    if(var3) { _fun0019_ip = 83; continue _fun0019 }
case 29:
                    var3 = global;
                    var5 = var3.Date;
                    var7 = _closure2_slot0;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var8 = var4;
                    var3 = new var8[var5](var7, var6);
                    var5 = var3 instanceof Object ? var3 : var4;
                    var4 = var5.toLocaleDateString;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 83:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot50 = var17;
    var16 = function useIsQuestProgressingOnDesktop(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot11;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot11;
            var2 = var3.isProgressingOnDesktop;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot51 = var16;
    var15 = function useIsQuestProgressingOnConsole(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isQuestProgressingOnConsole;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot52 = var15;
    var14 = function useIsQuestProgressingVideoQuest(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var5.bind(var3)(var4);
        var5 = var7.useStateFromStores;
        var3 = _closure1_slot11;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var4 = _closure1_slot11;
            var3 = var4.getOptimisticProgress;
            var2 = _closure2_slot0;
            var2 = var2.id;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var5 = var5[var1];
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.WATCH_VIDEO;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5 = var5.bind(var7)(var4, var3);
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isVideoQuestProgressing;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot53 = var14;
    var13 = function useIsQuestProgressing(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot51;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            var3 = _closure1_slot52;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot53;
            var2 = var2.bind(var4)(var5);
            if(var1) { _fun0020_ip = 160; continue _fun0020 }
case 117:
            var1 = var3;
case 160:
            if(var1) { _fun0020_ip = 161; continue _fun0020 }
case 87:
            var1 = var2;
case 161:
            return var1;
        }
    };
    var _closure1_slot54 = var13;
    var11 = function useThirdPartyTaskDetails(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getThirdPartyTaskDetails;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot55 = var11;
    var9 = function useConnectedAccounts() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStoresObject;
        var3 = _closure1_slot9;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = {};
            var4 = _closure1_slot9;
            var3 = var4.isFetching;
            var3 = var3.bind(var4)();
            var1['fetching'] = var3;
            var3 = _closure1_slot9;
            var2 = var3.getAccounts;
            var2 = var2.bind(var3)();
            var1['accounts'] = var2;
            return var1;
        };
        var4 = var5.bind(var6)(var4, var3);
        var3 = var4.fetching;
        var6 = var4.accounts;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot5;
        var4 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure2_slot0;
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.revoked;
                var1 = false;
                var1 = var1 === var2;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var4 = var3.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot21;
                var1 = var1.XBOX;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var3)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot21;
                var1 = var1.PLAYSTATION;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var1 = var4.concat;
            var2 = var1.bind(var4)(var3);
            var1 = {};
            var1['xboxAccounts'] = var4;
            var1['playstationAccounts'] = var3;
            var1['xboxAndPlaystationAccounts'] = var2;
            return var1;
        };
        var2 = var4.bind(var5)(var1, var2);
        var1 = {};
        var1['fetching'] = var3;
        var3 = var2.xboxAccounts;
        var1['xboxAccounts'] = var3;
        var3 = var2.playstationAccounts;
        var1['playstationAccounts'] = var3;
        var2 = var2.xboxAndPlaystationAccounts;
        var1['xboxAndPlaystationAccounts'] = var2;
        return var1;
    };
    var _closure1_slot56 = var9;
    var6 = function useSelectedTaskPlatform(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 12;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var5 = var7.useStateFromStores;
        var1 = _closure1_slot11;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var3 = _closure1_slot11;
            var2 = var3.selectedTaskPlatform;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var5.bind(var7)(var4, var1);
        var1 = new Array(2);
        var1[0] = var4;
        var5 = _closure1_slot5;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.selectTaskPlatform;
            var2 = _closure2_slot0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1[1] = var2;
        return var1;
    };
    var _closure1_slot57 = var6;
    var5 = function useTaskPlatformScreen(arg1, arg2) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var12 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var8;
            var3 = _closure1_slot57;
            var2 = var12.id;
            var9 = undefined;
            var5 = var3.bind(var9)(var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var3 = var3.bind(var9)(var5, var2);
            var2 = 0;
            var7 = var3[var2];
            var _closure2_slot2 = var7;
            var2 = 1;
            var2 = var3[var2];
            var10 = _closure1_slot5;
            var6 = var10.useMemo;
            var5 = new Array(1);
            var5[0] = var12;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.supportedTaskPlatforms;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var6.bind(var10)(var3, var5);
            var6 = var3.includes;
            var5 = _closure1_slot12;
            var5 = var5.DESKTOP;
            var10 = var6.bind(var3)(var5);
            var _closure2_slot3 = var10;
            var6 = var3.includes;
            var5 = _closure1_slot12;
            var5 = var5.CONSOLE;
            var11 = var6.bind(var3)(var5);
            var _closure2_slot4 = var11;
            var5 = _closure1_slot51;
            var6 = var5.bind(var9)(var12);
            var5 = _closure1_slot52;
            var5 = var5.bind(var9)(var12);
            var13 = _closure1_slot5;
            var12 = var13.useMemo;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 31;
                var2 = var8[var2];
                var6 = undefined;
                var4 = var7.bind(var6)(var2);
                var3 = var4.match;
                var2 = _closure2_slot1;
                var5 = var3.bind(var4)(var2);
                var4 = var5.with;
                var3 = {};
                var2 = 0;
                var3['percentComplete'] = var2;
                var2 = function() {
                    var1 = null;
                    return var1;
                };
                var9 = var4.bind(var5)(var3, var2);
                var4 = var9.with;
                var3 = {};
                var5 = 20;
                var2 = var8[var5];
                var2 = var7.bind(var6)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.PLAY_ON_DESKTOP;
                var3['taskType'] = var2;
                var2 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var9 = var4.bind(var9)(var3, var2);
                var4 = var9.with;
                var3 = {};
                var2 = var8[var5];
                var2 = var7.bind(var6)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.PLAY_ON_DESKTOP_V2;
                var3['taskType'] = var2;
                var2 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var9 = var4.bind(var9)(var3, var2);
                var4 = var9.with;
                var3 = {};
                var2 = var8[var5];
                var2 = var7.bind(var6)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.PLAY_ACTIVITY;
                var3['taskType'] = var2;
                var2 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var9 = var4.bind(var9)(var3, var2);
                var4 = var9.with;
                var3 = {};
                var2 = var8[var5];
                var2 = var7.bind(var6)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.WATCH_VIDEO;
                var3['taskType'] = var2;
                var2 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var9 = var4.bind(var9)(var3, var2);
                var4 = var9.with;
                var3 = {};
                var2 = var8[var5];
                var2 = var7.bind(var6)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.WATCH_VIDEO_ON_MOBILE;
                var3['taskType'] = var2;
                var2 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var9 = var4.bind(var9)(var3, var2);
                var4 = var9.with;
                var3 = {};
                var2 = var8[var5];
                var2 = var7.bind(var6)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.STREAM_ON_DESKTOP;
                var3['taskType'] = var2;
                var2 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var9 = var4.bind(var9)(var3, var2);
                var4 = var9.with;
                var3 = {};
                var2 = var8[var5];
                var2 = var7.bind(var6)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.PLAY_ON_XBOX;
                var3['taskType'] = var2;
                var2 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.CONSOLE;
                    return var1;
                };
                var9 = var4.bind(var9)(var3, var2);
                var4 = var9.with;
                var3 = {};
                var2 = var8[var5];
                var2 = var7.bind(var6)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.PLAY_ON_PLAYSTATION;
                var3['taskType'] = var2;
                var2 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.CONSOLE;
                    return var1;
                };
                var9 = var4.bind(var9)(var3, var2);
                var4 = var9.with;
                var3 = {};
                var2 = var8[var5];
                var2 = var7.bind(var6)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.ACHIEVEMENT_IN_GAME;
                var3['taskType'] = var2;
                var2 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var4 = var4.bind(var9)(var3, var2);
                var3 = var4.with;
                var2 = {};
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.FirstPartyQuestTaskTypes;
                var5 = var5.ACHIEVEMENT_IN_ACTIVITY;
                var2['taskType'] = var5;
                var1 = function() {
                    var1 = _closure1_slot12;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var2 = var3.bind(var4)(var2, var1);
                var1 = var2.exhaustive;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var12.bind(var13)(var8, var9);
            var _closure2_slot5 = var9;
            if(var6) { _fun0021_ip = 162; continue _fun0021 }
case 163:
            var8 = null;
            if(!var5) { _fun0021_ip = 62; continue _fun0021 }
case 164:
            var5 = _closure1_slot12;
            var8 = var5.CONSOLE;
case 62:
            _fun0021_ip = 165; continue _fun0021;
case 162:
            var5 = _closure1_slot12;
            var8 = var5.DESKTOP;
case 165:
            var _closure2_slot6 = var8;
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var4 = new Array(5);
            var4[0] = var11;
            var4[1] = var10;
            var4[2] = var9;
            var4[3] = var8;
            var4[4] = var7;
            var1 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 31;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.match;
                var3 = {};
                var7 = _closure2_slot5;
                var3['lastPlatformProgress'] = var7;
                var7 = _closure2_slot6;
                var3['currentProgressingPlatform'] = var7;
                var6 = _closure2_slot2;
                var3['selectedPlatform'] = var6;
                var6 = var4.bind(var5)(var3);
                var5 = var6.with;
                var4 = {};
                var3 = _closure1_slot12;
                var3 = var3.CONSOLE;
                var4['currentProgressingPlatform'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.TaskPlatformScreen;
                    var1 = var1.CONSOLE;
                    return var1;
                };
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.with;
                var4 = {};
                var3 = _closure1_slot12;
                var3 = var3.DESKTOP;
                var4['currentProgressingPlatform'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.TaskPlatformScreen;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var7 = var5.bind(var6)(var4, var3);
                var6 = var7.with;
                var5 = {};
                var3 = null;
                var5['currentProgressingPlatform'] = var3;
                var4 = _closure1_slot12;
                var4 = var4.CONSOLE;
                var5['lastPlatformProgress'] = var4;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.TaskPlatformScreen;
                    var1 = var1.CONSOLE;
                    return var1;
                };
                var6 = var6.bind(var7)(var5, var4);
                var5 = var6.with;
                var4 = {};
                var4['currentProgressingPlatform'] = var3;
                var3 = _closure1_slot12;
                var3 = var3.DESKTOP;
                var4['lastPlatformProgress'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.TaskPlatformScreen;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.with;
                var4 = {'currentProgressingPlatform': null, 'lastPlatformProgress': null};
                var3 = _closure1_slot12;
                var3 = var3.CONSOLE;
                var4['selectedPlatform'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.TaskPlatformScreen;
                    var1 = var1.CONSOLE;
                    return var1;
                };
                var5 = var5.bind(var6)(var4, var3);
                var4 = var5.with;
                var3 = {'currentProgressingPlatform': null, 'lastPlatformProgress': null};
                var2 = _closure1_slot12;
                var2 = var2.DESKTOP;
                var3['selectedPlatform'] = var2;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.TaskPlatformScreen;
                    var1 = var1.DESKTOP;
                    return var1;
                };
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.with;
                var2 = {'currentProgressingPlatform': null, 'lastPlatformProgress': null, 'selectedPlatform': null};
                var1 = function() {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var2 = _closure2_slot4;
                        if(!var2) { _fun0022_ip = 166; continue _fun0022 }
case 167:
                        var2 = _closure2_slot3;
                        if(var2) { _fun0022_ip = 168; continue _fun0022 }
case 166:
                        var1 = _closure2_slot4;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.TaskPlatformScreen;
                        if(var1) { _fun0022_ip = 108; continue _fun0022 }
case 4:
                        var1 = var2.DESKTOP;
                        _fun0022_ip = 41; continue _fun0022;
case 108:
                        var1 = var2.CONSOLE;
case 41:
                        _fun0022_ip = 82; continue _fun0022;
case 168:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 17;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.TaskPlatformScreen;
                        var1 = var2.SELECT;
case 82:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2, var1);
                var1 = var2.exhaustive;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var5.bind(var6)(var1, var4);
            var1 = new Array(3);
            var1[0] = var4;
            var1[1] = var3;
            var1[2] = var2;
            return var1;
        }
    };
    var _closure1_slot58 = var5;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var4);
    var31 = 0;
    var4 = var27[var31];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var30 = 1;
    var4 = var27[var30];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var29 = 2;
    var8 = var27[var29];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var28 = 3;
    var4 = var27[var28];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var25 = 4;
    var4 = var27[var25];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var27[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var27[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var27[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var27[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var27[var4];
    var4 = var26.bind(var1)(var4);
    var7 = var4.QuestTaskPlatform;
    var _closure1_slot12 = var7;
    var7 = var4.QuestsExperimentLocations;
    var _closure1_slot13 = var7;
    var7 = var4.MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES;
    var _closure1_slot14 = var7;
    var7 = var4.QuestHomeSortMethods;
    var _closure1_slot15 = var7;
    var7 = var4.QuestHomeFilterTypes;
    var _closure1_slot16 = var7;
    var7 = var4.QuestVariants;
    var _closure1_slot17 = var7;
    var4 = var4.SORTED_QUEST_HOME_FILTER_GROUPS;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var27[var4];
    var4 = var26.bind(var1)(var4);
    var7 = var4.Routes;
    var _closure1_slot19 = var7;
    var7 = var4.HelpdeskArticles;
    var _closure1_slot20 = var7;
    var7 = var4.PlatformTypes;
    var _closure1_slot21 = var7;
    var7 = var4.ThemeTypes;
    var _closure1_slot22 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot23 = var4;
    var4 = 11;
    var4 = var27[var4];
    var4 = var26.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot24 = var4;
    var4 = -1;
    var _closure1_slot25 = var4;
    var24 = '1410358070831480904';
    var _closure1_slot26 = var24;
    var4 = {};
    var _closure1_slot27 = var4;
    var4 = {};
    var4['DESC'] = var31;
    var7 = 'DESC';
    var4[var31] = var7;
    var4['ASC'] = var30;
    var7 = 'ASC';
    var4[var30] = var7;
    var _closure1_slot28 = var4;
    var21 = {};
    var4 = 'all';
    var21['ALL'] = var4;
    var4 = 'claimed';
    var21['CLAIMED'] = var4;
    var4 = 'preview_tool';
    var21['PREVIEW_TOOL'] = var4;
    var _closure1_slot29 = var21;
    var20 = {};
    var4 = 'tab';
    var20['TAB'] = var4;
    var4 = 'quest_id';
    var20['QUEST_ID'] = var4;
    var12 = function useQuestTaskDetails(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var4 = new Array(1);
        var4[0] = var8;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getQuestTaskDetails;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var5.bind(var6)(var1, var4);
        var _closure2_slot1 = var4;
        var7 = _closure1_slot5;
        var6 = var7.useState;
        var5 = undefined;
        var1 = var4.bind(var5)();
        var7 = var6.bind(var7)(var1);
        var6 = _closure1_slot4;
        var1 = 2;
        var7 = var6.bind(var5)(var7, var1);
        var1 = 0;
        var1 = var7[var1];
        var6 = 1;
        var6 = var7[var6];
        var _closure2_slot2 = var6;
        var9 = _closure1_slot5;
        var7 = var9.useCallback;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() {
            var3 = _closure2_slot2;
            var1 = _closure2_slot1;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var6 = var7.bind(var9)(var4, var6);
        var _closure2_slot3 = var6;
        var4 = _closure1_slot54;
        var7 = var4.bind(var5)(var8);
        var _closure2_slot4 = var7;
        var5 = _closure1_slot5;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var4 = null;
                var7 = var4 == var5;
                var6 = undefined;
                var3 = undefined;
                if(var7) { _fun0023_ip = 169; continue _fun0023 }
case 34:
                var3 = var5.enrolledAt;
case 169:
                if(!(var4 != var3)) { _fun0023_ip = 170; continue _fun0023 }
case 117:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var7 = var4 == var5;
                var3 = undefined;
                if(var7) { _fun0023_ip = 108; continue _fun0023 }
case 105:
                var3 = var5.completedAt;
case 108:
                if(!(var4 == var3)) { _fun0023_ip = 170; continue _fun0023 }
case 30:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var7 = var4 == var5;
                var3 = undefined;
                if(var7) { _fun0023_ip = 42; continue _fun0023 }
case 9:
                var3 = var5.claimedAt;
case 42:
                if(!(var4 == var3)) { _fun0023_ip = 170; continue _fun0023 }
case 11:
                var3 = _closure2_slot4;
                if(var3) { _fun0023_ip = 171; continue _fun0023 }
case 170:
                var2 = _closure2_slot3;
                var2 = var2.bind(var6)();
                return var6;
case 171:
                var2 = global;
                var5 = var2.window;
                var4 = var5.setInterval;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 23;
                var2 = var7[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.Millis;
                var3 = var2.SECOND;
                var2 = 1;
                var3 = var2 * var3;
                var2 = function() {
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var4.bind(var5)(var2, var3);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearInterval;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot30 = var12;
    var10 = function useConnectedConsoleLinkOnClick(arg1) {
        var2 = arg1;
        var4 = var2.quest;
        var _closure2_slot0 = var4;
        var3 = var2.questContent;
        var _closure2_slot1 = var3;
        var2 = var2.sourceQuestContent;
        var _closure2_slot2 = var2;
        var5 = _closure1_slot32;
        var3 = {};
        var3['quest'] = var4;
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var _closure2_slot3 = var3;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 24;
        var2 = var5[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useQuestImpression;
        var2 = var2.bind(var3)();
        var _closure2_slot4 = var2;
        var1 = function() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var2 = _closure2_slot3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 18;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var3);
                if(var2) { _fun0024_ip = 172; continue _fun0024 }
case 173:
                var4 = var5.openConsoleConnectionSettings;
                var3 = {};
                var2 = _closure2_slot0;
                var3['quest'] = var2;
                var2 = {};
                var7 = _closure2_slot1;
                var2['content'] = var7;
                var7 = 25;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.VIEW_CONSOLE_CONNECTIONS_LINK;
                var2['ctaContent'] = var7;
                var10 = _closure2_slot4;
                var7 = null;
                var10 = var7 == var10;
                var7 = undefined;
                if(var10) { _fun0024_ip = 174; continue _fun0024 }
case 84:
                var11 = _closure2_slot4;
                var10 = var11.getId;
                var7 = var10.bind(var11)();
case 174:
                var2['impressionId'] = var7;
                var7 = _closure2_slot2;
                var2['sourceQuestContent'] = var7;
                var2 = var4.bind(var5)(var3, var2);
                _fun0024_ip = 23; continue _fun0024;
case 172:
                var4 = var5.openAddConsoleConnectionModal;
                var3 = {};
                var2 = _closure2_slot0;
                var3['quest'] = var2;
                var2 = {};
                var7 = _closure2_slot1;
                var2['content'] = var7;
                var7 = 25;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.CONNECT_CONSOLE_LINK;
                var2['ctaContent'] = var7;
                var8 = _closure2_slot4;
                var7 = null;
                var8 = var7 == var8;
                var7 = undefined;
                if(var8) { _fun0024_ip = 175; continue _fun0024 }
case 61:
                var9 = _closure2_slot4;
                var8 = var9.getId;
                var7 = var8.bind(var9)();
case 175:
                var2['impressionId'] = var7;
                var6 = _closure2_slot2;
                var2['sourceQuestContent'] = var6;
                var2 = var4.bind(var5)(var3, var2);
case 23:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot31 = var10;
    var8 = function useWaitingForConsoleConnection(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var5 = var1.quest;
            var2 = _closure1_slot56;
            var6 = undefined;
            var2 = var2.bind(var6)();
            var3 = var2.xboxAndPlaystationAccounts;
            var2 = _closure1_slot54;
            var2 = var2.bind(var6)(var5);
            var4 = var3.length;
            var3 = 0;
            var3 = var3 === var4;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 18;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.isConsoleQuest;
            var1 = var1.bind(var4)(var5);
            if(!var1) { _fun0025_ip = 120; continue _fun0025 }
case 40:
            var1 = var3;
case 120:
            if(!var1) { _fun0025_ip = 119; continue _fun0025 }
case 176:
            var1 = !var2;
case 119:
            return var1;
        }
    };
    var _closure1_slot32 = var8;
    var7 = {};
    var7['UNACCEPTED'] = var31;
    var4 = 'UNACCEPTED';
    var7[var31] = var4;
    var7['ACCEPTED'] = var30;
    var4 = 'ACCEPTED';
    var7[var30] = var4;
    var7['IN_PROGRESS'] = var29;
    var4 = 'IN_PROGRESS';
    var7[var29] = var4;
    var7['COMPLETED'] = var28;
    var4 = 'COMPLETED';
    var7[var28] = var4;
    var7['CLAIMED'] = var25;
    var4 = 'CLAIMED';
    var7[var25] = var4;
    var _closure1_slot33 = var7;
    var4 = function useIsPreviewerOnAnyQuest() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot11;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot11;
            var2 = var1.quests;
            var1 = var2.values;
            var5 = var1.bind(var2)();
            var1 = new Array(0);
            var4 = 0;
            var6 = var1;
            var2 = arraySpread(var6, var5, var4);
            return var1;
        };
        var3 = var4.bind(var5)(var3, var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.preview;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot34 = var4;
    var25 = 42;
    var25 = var27[var25];
    var27 = var26.bind(var1)(var25);
    var26 = var27.fileFinishedImporting;
    var25 = 'modules/quests/QuestsHooks.tsx';
    var25 = var26.bind(var27)(var25);
    var3['MOBILE_ORBS_INTRO_QUEST_ID'] = var24;
    var3['useQuests'] = var23;
    var3['sortQuests'] = var22;
    var3['QuestTabs'] = var21;
    var3['QuestQueryParams'] = var20;
    var20 = function useFilteredQuests(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var10 = arguments[1];
            var6 = arguments[2];
            var9 = undefined;
            if(!(var10 === var9)) { _fun0026_ip = 100; continue _fun0026 }
case 32:
            var10 = _closure1_slot27;
case 100:
            if(!(var6 === var9)) { _fun0026_ip = 103; continue _fun0026 }
case 36:
            var6 = false;
case 103:
            var3 = _closure1_slot37;
            var2 = {'fetchPolicy': 'cache-and-network', 'callerSource': 'use_filtered_quests'};
            var2 = var3.bind(var9)(var2);
            var4 = var2.quests;
            var3 = var2.isFetchingCurrentQuests;
            var2 = var2.hasFetched;
            var5 = global;
            var11 = var5.Map;
            var8 = var4.map;
            var5 = function(arg1) {
                var2 = arg1;
                var3 = var2.id;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var14 = var8.bind(var4)(var5);
            var8 = var11.prototype;
            var8 = Object.create(var8, {constructor: {value: var11}});
            var15 = var8;
            var5 = new var15[var11](var14, var13);
            var8 = var5 instanceof Object ? var5 : var8;
            var5 = function useAllQuests(arg1, arg2, arg3) {
                var7 = arg1;
                var6 = arg2;
                var5 = arg3;
                var _closure3_slot0 = var7;
                var _closure3_slot1 = var6;
                var _closure3_slot2 = var5;
                var8 = _closure1_slot5;
                var4 = var8.useRef;
                var3 = new Array(0);
                var3 = var4.bind(var8)(var3);
                var _closure3_slot3 = var3;
                var8 = _closure1_slot5;
                var4 = var8.useRef;
                var3 = var6.sortMethod;
                var3 = var4.bind(var8)(var3);
                var _closure3_slot4 = var3;
                var8 = _closure1_slot5;
                var4 = var8.useRef;
                var3 = var6.filters;
                var3 = var4.bind(var8)(var3);
                var _closure3_slot5 = var3;
                var4 = _closure1_slot5;
                var3 = var4.useRef;
                var3 = var3.bind(var4)(var5);
                var _closure3_slot6 = var3;
                var8 = _closure1_slot5;
                var4 = var8.useRef;
                var3 = 0;
                var3 = var4.bind(var8)(var3);
                var _closure3_slot7 = var3;
                var4 = _closure1_slot5;
                var3 = var4.useMemo;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.length;
                        var3 = 0;
                        if(!(var3 !== var2)) { _fun0027_ip = 177; continue _fun0027 }
case 100:
                        var2 = _closure3_slot3;
                        var2 = var2.current;
                        var2 = var2.length;
                        if(!(var2 > var3)) { _fun0027_ip = 178; continue _fun0027 }
case 179:
                        var2 = _closure3_slot7;
                        var3 = var2.current;
                        var2 = _closure3_slot0;
                        var2 = var2.length;
                        if(!(var3 === var2)) { _fun0027_ip = 178; continue _fun0027 }
case 7:
                        var2 = _closure3_slot4;
                        var3 = var2.current;
                        var2 = _closure3_slot1;
                        var2 = var2.sortMethod;
                        if(!(var3 === var2)) { _fun0027_ip = 178; continue _fun0027 }
case 110:
                        var2 = _closure3_slot5;
                        var3 = var2.current;
                        var2 = _closure3_slot1;
                        var2 = var2.filters;
                        if(!(var3 === var2)) { _fun0027_ip = 178; continue _fun0027 }
case 180:
                        var2 = _closure3_slot6;
                        var3 = var2.current;
                        var2 = _closure3_slot2;
                        if(!(var3 !== var2)) { _fun0027_ip = 181; continue _fun0027 }
case 178:
                        var6 = _closure1_slot45;
                        var5 = _closure3_slot0;
                        var4 = _closure3_slot1;
                        var3 = undefined;
                        var4 = var6.bind(var3)(var5, var4);
                        var3 = _closure3_slot2;
                        var3 = !var3;
                        if(var3) { _fun0027_ip = 182; continue _fun0027 }
case 183:
                        var5 = _closure3_slot1;
                        var6 = var5.sortMethod;
                        var5 = null;
                        var5 = var5 != var6;
                        if(!var5) { _fun0027_ip = 59; continue _fun0027 }
case 16:
                        var6 = _closure3_slot1;
                        var7 = var6.sortMethod;
                        var6 = _closure1_slot15;
                        var6 = var6.SUGGESTED;
                        var5 = var7 !== var6;
case 59:
                        var3 = var5;
case 182:
                        if(var3) { _fun0027_ip = 65; continue _fun0027 }
case 62:
                        var3 = var4.sort;
                        var2 = _closure1_slot46;
                        var2 = var3.bind(var4)(var2);
case 65:
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot3;
                        var3['current'] = var2;
                        var5 = _closure3_slot4;
                        var3 = _closure3_slot1;
                        var4 = var3.sortMethod;
                        var5['current'] = var4;
                        var4 = _closure3_slot5;
                        var3 = var3.filters;
                        var4['current'] = var3;
                        var4 = _closure3_slot6;
                        var3 = _closure3_slot2;
                        var4['current'] = var3;
                        var4 = _closure3_slot7;
                        var3 = _closure3_slot0;
                        var3 = var3.length;
                        var4['current'] = var3;
                        return var2;
case 181:
                        var1 = _closure3_slot3;
                        var1 = var1.current;
                        return var1;
case 177:
                        var1 = new Array(0);
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var6 = var5.bind(var9)(var4, var10, var6);
            var1 = function useCompletedAndClaimedQuests(arg1) {
                var3 = arg1;
                var _closure3_slot0 = var3;
                var6 = _closure1_slot5;
                var5 = var6.useMemo;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                            var4 = arg1;
                            var5 = var4.userStatus;
                            var3 = null;
                            var6 = var3 == var5;
                            var1 = undefined;
                            if(var6) { _fun0028_ip = 39; continue _fun0028 }
case 29:
                            var1 = var5.completedAt;
case 39:
                            var1 = var3 != var1;
                            var4 = var4.userStatus;
                            var5 = var3 == var4;
                            var2 = undefined;
                            if(var5) { _fun0028_ip = 107; continue _fun0028 }
case 184:
                            var2 = var4.claimedAt;
case 107:
                            var2 = var3 != var2;
                            if(!var1) { _fun0028_ip = 7; continue _fun0028 }
case 94:
                            var1 = var2;
case 7:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var5.bind(var6)(var3, var4);
                var _closure3_slot1 = var5;
                var6 = _closure1_slot5;
                var4 = var6.useRef;
                var3 = new Array(0);
                var3 = var4.bind(var6)(var3);
                var _closure3_slot2 = var3;
                var4 = _closure1_slot5;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                        var3 = _closure3_slot1;
                        var3 = var3.length;
                        var4 = 0;
                        if(!(var4 !== var3)) { _fun0029_ip = 185; continue _fun0029 }
case 29:
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var3 = var3.length;
                        if(!(var3 > var4)) { _fun0029_ip = 116; continue _fun0029 }
case 117:
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var4 = var3.length;
                        var3 = _closure3_slot1;
                        var3 = var3.length;
                        if(!(var4 !== var3)) { _fun0029_ip = 44; continue _fun0029 }
case 116:
                        var5 = _closure3_slot1;
                        var4 = var5.sort;
                        var3 = function(arg1, arg2) {
                            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                                var4 = arg1;
                                var2 = arg2;
                                var3 = var4.userStatus;
                                var5 = null;
                                var7 = var5 == var3;
                                var6 = undefined;
                                var1 = undefined;
                                if(var7) { _fun0030_ip = 77; continue _fun0030 }
case 36:
                                var1 = var3.claimedAt;
case 77:
                                var3 = var5 == var1;
                                var7 = var2.userStatus;
                                var8 = var5 == var7;
                                var1 = undefined;
                                if(var8) { _fun0030_ip = 28; continue _fun0030 }
case 186:
                                var1 = var7.claimedAt;
case 28:
                                var1 = var5 == var1;
                                if(!(var3 === var1)) { _fun0030_ip = 187; continue _fun0030 }
case 81:
                                var5 = _closure1_slot47;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 21;
                                var10 = var9[var7];
                                var10 = var8.bind(var6)(var10);
                                var11 = var10.SharedQuestFields;
                                var10 = var11.build;
                                var4 = var4.config;
                                var4 = var10.bind(var11)(var4);
                                var4 = var4.rewardsExpireAt;
                                var7 = var9[var7];
                                var7 = var8.bind(var6)(var7);
                                var8 = var7.SharedQuestFields;
                                var7 = var8.build;
                                var2 = var2.config;
                                var2 = var7.bind(var8)(var2);
                                var2 = var2.rewardsExpireAt;
                                var1 = _closure1_slot28;
                                var1 = var1.DESC;
                                var1 = var5.bind(var6)(var4, var2, var1);
                                _fun0030_ip = 188; continue _fun0030;
case 187:
                                var2 = 1;
                                if(!var3) { _fun0030_ip = 189; continue _fun0030 }
case 190:
                                var2 = _closure1_slot25;
case 189:
                                var1 = var2;
case 188:
                                return var1;
                            }
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot2;
                        var3['current'] = var2;
                        return var2;
case 44:
                        var1 = _closure3_slot2;
                        var1 = var1.current;
                        return var1;
case 185:
                        var1 = new Array(0);
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = var1.bind(var9)(var4);
            var4 = new Array(0);
            var5 = _closure1_slot35;
            var7 = _closure1_slot29;
            var10 = var7.ALL;
            var7 = arg1;
            if(!(var7 === var10)) { _fun0026_ip = 191; continue _fun0026 }
case 192:
            var1 = var6;
case 191:
            var7 = var5.bind(var9)(var1);
            var5 = var7.bind(var9)();
            var1 = var5.done;
            var6 = null;
            if(var1) { _fun0026_ip = 175; continue _fun0026 }
case 193:
            var10 = var5.value;
            var1 = var8.get;
            var10 = var1.bind(var8)(var10);
            if(!(var6 != var10)) { _fun0026_ip = 194; continue _fun0026 }
case 195:
            var1 = var4.push;
            var1 = var1.bind(var4)(var10);
case 194:
            var10 = var7.bind(var9)();
            var1 = var10.done;
            var5 = var10;
            if(!var1) { _fun0026_ip = 193; continue _fun0026 }
case 175:
            var1 = {};
            var1['quests'] = var4;
            var1['isFetchingCurrentQuests'] = var3;
            var1['hasFetched'] = var2;
            return var1;
        }
    };
    var3['useFilteredQuests'] = var20;
    var20 = function useClaimedQuests() {
        var5 = _closure1_slot5;
        var3 = var5.useRef;
        var2 = false;
        var2 = var3.bind(var5)(var2);
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 12;
        var3 = var7[var2];
        var5 = undefined;
        var10 = var6.bind(var5)(var3);
        var9 = var10.useStateFromStoresArray;
        var3 = _closure1_slot11;
        var8 = new Array(1);
        var8[0] = var3;
        var3 = function() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = _closure1_slot11;
            var4 = var1.claimedQuests;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var9.bind(var10)(var8, var3);
        var2 = var7[var2];
        var7 = var6.bind(var5)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot11;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() {
            var1 = _closure1_slot11;
            var1 = var1.isFetchingClaimedQuests;
            return var1;
        };
        var2 = var6.bind(var7)(var5, var2);
        var _closure2_slot1 = var2;
        var6 = _closure1_slot5;
        var5 = var6.useEffect;
        var4 = new Array(1);
        var4[0] = var2;
        var1 = function() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0031_ip = 102; continue _fun0031 }
case 167:
                var3 = _closure2_slot0;
                var2 = var3.current;
case 102:
                if(var2) { _fun0031_ip = 41; continue _fun0031 }
case 196:
                var2 = _closure2_slot0;
                var1 = true;
                var2['current'] = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.fetchClaimedQuests;
                var1 = var1.bind(var2)();
case 41:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = {};
        var1['claimedQuests'] = var3;
        var1['isFetchingClaimedQuests'] = var2;
        return var1;
    };
    var3['useClaimedQuests'] = var20;
    var3['useExpiredQuestsMap'] = var19;
    var3['useIsQuestExpired'] = var18;
    var18 = function useIsQuestEligibleForMembersListPopout(arg1, arg2, arg3) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 12;
            var4 = var11[var7];
            var6 = undefined;
            var12 = var10.bind(var6)(var4);
            var9 = var12.useStateFromStores;
            var4 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var4 = _closure1_slot8;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot1;
                    var1 = null;
                    var6 = var1 == var2;
                    var2 = undefined;
                    if(var6) { _fun0033_ip = 179; continue _fun0033 }
case 3:
                    var5 = _closure2_slot1;
                    var2 = var5.channelId;
case 179:
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0033_ip = 28; continue _fun0033 }
case 197:
                    var1 = var2;
case 28:
                    return var1;
                }
            };
            var4 = var9.bind(var12)(var8, var4);
            var8 = var11[var7];
            var14 = var10.bind(var6)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot11;
            var12 = new Array(1);
            var12[0] = var8;
            var9 = function() {
                var1 = _closure1_slot11;
                var2 = var1.questEnrollmentBlockedUntil;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var8 = new Array(0);
            var9 = var13.bind(var14)(var12, var9, var8);
            var8 = var11[var7];
            var14 = var10.bind(var6)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var2 = _closure1_slot10;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0034_ip = 106; continue _fun0034 }
case 103:
                    var1 = var2.id;
case 106:
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var12, var8);
            var7 = var11[var7];
            var12 = var10.bind(var6)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = new Array(1);
            var7[0] = var1;
            var3 = function() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0035_ip = 157; continue _fun0035 }
case 158:
                    var4 = _closure1_slot11;
                    var3 = var4.isQuestExpired;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 157:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var10, var3, var7);
            var3 = null;
            if(!(var3 != var1)) { _fun0032_ip = 198; continue _fun0032 }
case 199:
            if(var9) { _fun0032_ip = 198; continue _fun0032 }
case 59:
            if(var7) { _fun0032_ip = 198; continue _fun0032 }
case 182:
            var7 = arg3;
            if(!(var8 !== var7)) { _fun0032_ip = 198; continue _fun0032 }
case 61:
            var7 = var1.userStatus;
            var8 = var3 == var7;
            var1 = undefined;
            if(var8) { _fun0032_ip = 21; continue _fun0032 }
case 64:
            var1 = var7.claimedAt;
case 21:
            var1 = var3 != var1;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 18;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.isStreamingAndCanWatch;
            var2 = var2.bind(var3)(var5, var4);
            if(!var1) { _fun0032_ip = 200; continue _fun0032 }
case 201:
            var1 = !var2;
case 200:
            var1 = !var1;
            return var1;
case 198:
            var1 = false;
            return var1;
        }
    };
    var3['useIsQuestEligibleForMembersListPopout'] = var18;
    var18 = function useQuestExternalCta(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var1 = _closure2_slot0;
                var1 = var1.config;
                var4 = var1.ctaConfig;
                var3 = null;
                var5 = var3 == var4;
                var7 = undefined;
                var1 = undefined;
                if(var5) { _fun0036_ip = 202; continue _fun0036 }
case 77:
                var1 = var4.buttonLabel;
case 202:
                if(!(var3 == var1)) { _fun0036_ip = 203; continue _fun0036 }
case 87:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = 18;
                var4 = var4[var6];
                var8 = var5.bind(var7)(var4);
                var5 = var8.hasWatchVideoTasks;
                var4 = _closure2_slot0;
                var4 = var5.bind(var8)(var4);
                if(var4) { _fun0036_ip = 204; continue _fun0036 }
case 176:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var8 = var5.bind(var7)(var4);
                var5 = var8.isSponsoredPlayQuest;
                var4 = _closure2_slot0;
                var4 = var5.bind(var8)(var4);
                if(var4) { _fun0036_ip = 204; continue _fun0036 }
case 205:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var8 = var5.bind(var7)(var4);
                var5 = var8.hasPlayActivityTask;
                var4 = _closure2_slot0;
                var4 = var5.bind(var8)(var4);
                if(var4) { _fun0036_ip = 204; continue _fun0036 }
case 191:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var6 = var5.bind(var7)(var4);
                var5 = var6.isInGameQuest;
                var4 = _closure2_slot0;
                var4 = var5.bind(var6)(var4);
                if(var4) { _fun0036_ip = 204; continue _fun0036 }
case 164:
                var2 = _closure2_slot0;
                var2 = var2.config;
                var5 = var2.features;
                var4 = var5.includes;
                var2 = _closure1_slot17;
                var2 = var2.NON_GAMING_PLAY_QUEST;
                var2 = var4.bind(var5)(var2);
                if(var2) { _fun0036_ip = 204; continue _fun0036 }
case 68:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 22;
                var4 = var8[var2];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.lwQdjI;
                var2 = var4.bind(var5)(var2);
                _fun0036_ip = 206; continue _fun0036;
case 204:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 22;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.hvVgAQ;
                var2 = var4.bind(var5)(var3);
case 206:
                var1 = var2;
case 203:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestExternalCta'] = var18;
    var3['useQuestFormattedDate'] = var17;
    var3['useIsQuestProgressingOnDesktop'] = var16;
    var3['useIsQuestProgressingOnConsole'] = var15;
    var3['useIsQuestProgressingVideoQuest'] = var14;
    var3['useIsQuestProgressing'] = var13;
    var3['useQuestTaskDetails'] = var12;
    var3['useThirdPartyTaskDetails'] = var11;
    var3['useConnectedConsoleLinkOnClick'] = var10;
    var10 = function useQuestInstructionTitle(arg1, arg2, arg3, arg4) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var8 = arg1;
            var1 = _closure1_slot30;
            var11 = undefined;
            var1 = var1.bind(var11)(var8);
            var6 = var1.targetMinutes;
            var1 = _closure1_slot55;
            var2 = var1.bind(var11)(var8);
            var4 = _closure1_slot31;
            var1 = {};
            var1['quest'] = var8;
            var5 = arg3;
            var1['questContent'] = var5;
            var5 = arg4;
            var1['sourceQuestContent'] = var5;
            var7 = var4.bind(var11)(var1);
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = 18;
            var1 = var4[var9];
            var10 = var5.bind(var11)(var1);
            var1 = var10.isSponsoredPlayQuest;
            var1 = var1.bind(var10)(var8);
            var4 = var4[var9];
            var5 = var5.bind(var11)(var4);
            var4 = var5.isConsoleQuest;
            var4 = var4.bind(var5)(var8);
            if(!var4) { _fun0037_ip = 207; continue _fun0037 }
case 208:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var10 = var5.bind(var11)(var4);
            var5 = var10.hasPlayOnDesktopTask;
            var4 = {};
            var4['quest'] = var8;
            var4 = var5.bind(var10)(var4);
            if(var4) { _fun0037_ip = 207; continue _fun0037 }
case 209:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 22;
            var5 = var15[var4];
            var5 = var14.bind(var11)(var5);
            var12 = var5.intl;
            var10 = var12.format;
            var4 = var15[var4];
            var4 = var14.bind(var11)(var4);
            var4 = var4.t;
            var5 = var4.l4S+cX;
            var4 = {};
            var4['minutes'] = var6;
            var4['onClick'] = var7;
            var13 = 21;
            var13 = var15[var13];
            var13 = var14.bind(var11)(var13);
            var15 = var13.SharedQuestFields;
            var14 = var15.build;
            var13 = var8.config;
            var13 = var14.bind(var15)(var13);
            var13 = var13.application;
            var13 = var13.name;
            var4['gameTitle'] = var13;
            var4 = var10.bind(var12)(var5, var4);
            return var4;
case 207:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var5 = var5.bind(var11)(var4);
            var4 = var5.isConsoleQuest;
            var4 = var4.bind(var5)(var8);
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var4) { _fun0037_ip = 210; continue _fun0037 }
case 181:
            if(var1) { _fun0037_ip = 211; continue _fun0037 }
case 212:
            var4 = var12[var9];
            var5 = var10.bind(var11)(var4);
            var4 = var5.hasWatchVideoTasks;
            var4 = var4.bind(var5)(var8);
            if(var4) { _fun0037_ip = 213; continue _fun0037 }
case 214:
            var4 = null;
            if(!(var4 == var2)) { _fun0037_ip = 215; continue _fun0037 }
case 216:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var5 = var5.bind(var11)(var4);
            var4 = var5.hasPlayActivityTask;
            var13 = var4.bind(var5)(var8);
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            if(var13) { _fun0037_ip = 217; continue _fun0037 }
case 218:
            var15 = 22;
            var13 = var4[var15];
            var13 = var5.bind(var11)(var13);
            var13 = var13.t;
            var16 = var13.6zWtV1;
            var13 = var4[var9];
            var17 = var5.bind(var11)(var13);
            var14 = var17.hasPlayOnDesktopTask;
            var13 = {};
            var13['quest'] = var8;
            var13 = var14.bind(var17)(var13);
            if(!var13) { _fun0037_ip = 219; continue _fun0037 }
case 220:
            var13 = var8.config;
            var17 = var13.features;
            var14 = var17.includes;
            var13 = _closure1_slot17;
            var13 = var13.NON_GAMING_PLAY_QUEST;
            var13 = var14.bind(var17)(var13);
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var15];
            var14 = var17.bind(var11)(var14);
            var14 = var14.t;
            if(var13) { _fun0037_ip = 221; continue _fun0037 }
case 222:
            var13 = var14.wmOh/v;
            _fun0037_ip = 223; continue _fun0037;
case 221:
            var13 = var14.fe7XeX;
case 223:
            var16 = var13;
case 219:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var13 = var14.bind(var11)(var13);
            var15 = var13.intl;
            var14 = var15.format;
            var13 = {};
            var13['minutes'] = var6;
            var17 = var8.config;
            var17 = var17.messages;
            var17 = var17.gameTitle;
            var13['gameTitle'] = var17;
            var13 = var14.bind(var15)(var16, var13);
            return var13;
case 217:
            var4 = var4[var9];
            var5 = var5.bind(var11)(var4);
            var4 = var5.isPlayAnyActivityQuest;
            var4 = var4.bind(var5)(var8);
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 22;
            var13 = var15[var5];
            var13 = var9.bind(var11)(var13);
            var14 = var13.intl;
            var13 = var14.format;
            var5 = var15[var5];
            var5 = var9.bind(var11)(var5);
            var5 = var5.t;
            if(var4) { _fun0037_ip = 224; continue _fun0037 }
case 225:
            var9 = var5.xHXCyc;
            var4 = {};
            var4['minutes'] = var6;
            var15 = var8.config;
            var15 = var15.application;
            var15 = var15.name;
            var4['activityName'] = var15;
            var4 = var13.bind(var14)(var9, var4);
            _fun0037_ip = 226; continue _fun0037;
case 224:
            var9 = var5.1NaRSk;
            var5 = {};
            var5['minutes'] = var6;
            var4 = var13.bind(var14)(var9, var5);
case 226:
            return var4;
case 215:
            var2 = var2.title;
            return var2;
case 213:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 21;
            var2 = var5[var2];
            var2 = var4.bind(var11)(var2);
            var5 = var2.SharedQuestFields;
            var4 = var5.build;
            var2 = var8.config;
            var2 = var4.bind(var5)(var2);
            var4 = var2.defaultWatchVideoTask;
            var2 = null;
            var5 = var2 == var4;
            var13 = undefined;
            if(var5) { _fun0037_ip = 227; continue _fun0037 }
case 228:
            var4 = var4.messages;
            var13 = var4.videoTitle;
case 227:
            if(!(var2 != var13)) { _fun0037_ip = 229; continue _fun0037 }
case 230:
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 22;
            var5 = var14[var2];
            var5 = var4.bind(var11)(var5);
            var9 = var5.intl;
            var5 = var9.formatToPlainString;
            var2 = var14[var2];
            var2 = var4.bind(var11)(var2);
            var2 = var2.t;
            var4 = var2.9m9MnZ;
            var2 = {};
            var2['videoTitle'] = var13;
            var2 = var5.bind(var9)(var4, var2);
            _fun0037_ip = 231; continue _fun0037;
case 229:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 22;
            var4 = var13[var3];
            var4 = var9.bind(var11)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var13[var3];
            var3 = var9.bind(var11)(var3);
            var3 = var3.t;
            var3 = var3.o+e9ys;
            var2 = var4.bind(var5)(var3);
case 231:
            return var2;
case 211:
            var2 = 22;
            var3 = var12[var2];
            var3 = var10.bind(var11)(var3);
            var5 = var3.intl;
            var4 = var5.format;
            var2 = var12[var2];
            var2 = var10.bind(var11)(var2);
            var2 = var2.t;
            var3 = var2.Hu8SKS;
            var2 = {};
            var2['targetMinutes'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 210:
            var2 = 22;
            var3 = var12[var2];
            var3 = var10.bind(var11)(var3);
            var5 = var3.intl;
            var4 = var5.format;
            var2 = var12[var2];
            var2 = var10.bind(var11)(var2);
            var2 = var2.t;
            if(var1) { _fun0037_ip = 232; continue _fun0037 }
case 233:
            var3 = var2.Ajlcd3;
            var1 = {};
            var1['minutes'] = var6;
            var1['onClick'] = var7;
            var9 = 21;
            var9 = var12[var9];
            var9 = var10.bind(var11)(var9);
            var10 = var9.SharedQuestFields;
            var9 = var10.build;
            var8 = var8.config;
            var8 = var9.bind(var10)(var8);
            var8 = var8.application;
            var8 = var8.name;
            var1['gameTitle'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0037_ip = 234; continue _fun0037;
case 232:
            var3 = var2.gbtCpa;
            var2 = {};
            var2['onClick'] = var7;
            var2['minutes'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 234:
            return var1;
        }
    };
    var3['useQuestInstructionTitle'] = var10;
    var10 = function useQuestsForSettingsBadge() {
        var5 = _closure1_slot37;
        var4 = undefined;
        var3 = {'fetchPolicy': 'cache-or-network', 'callerSource': 'settings_badge'};
        var3 = var5.bind(var4)(var3);
        var7 = var3.quests;
        var _closure2_slot0 = var7;
        var5 = var3.isFetchingCurrentQuests;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot48;
        var6 = var3.bind(var4)();
        var _closure2_slot2 = var6;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var1 = new Array(0);
                var2 = _closure2_slot1;
                if(var2) { _fun0038_ip = 235; continue _fun0038 }
case 166:
                var2 = _closure2_slot0;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0038_ip = 235; continue _fun0038 }
case 173:
                var3 = _closure1_slot35;
                var2 = _closure2_slot0;
                var10 = undefined;
                var9 = var3.bind(var10)(var2);
                var3 = var9.bind(var10)();
                var2 = var3.done;
                var8 = null;
                var7 = 18;
                var6 = 17;
                var5 = var3;
                var4 = undefined;
                var3 = undefined;
                if(var2) { _fun0038_ip = 6; continue _fun0038 }
case 99:
                var16 = var5.value;
                var15 = _closure1_slot0;
                var2 = _closure1_slot2;
                var13 = var2[var7];
                var14 = var15.bind(var10)(var13);
                var13 = var14.includesTarget;
                var2 = var2[var6];
                var2 = var15.bind(var10)(var2);
                var2 = var2.QuestContent;
                var2 = var2.GIFT_INVENTORY_SETTINGS_BADGE;
                var2 = var13.bind(var14)(var16, var2);
                var13 = var3;
                if(!var2) { _fun0038_ip = 181; continue _fun0038 }
case 236:
                var15 = _closure2_slot2;
                var14 = var15.get;
                var2 = var16.id;
                var14 = var14.bind(var15)(var2);
                if(!(var8 != var14)) { _fun0038_ip = 237; continue _fun0038 }
case 46:
                var4 = var14;
                var13 = var3;
                if(var14) { _fun0038_ip = 181; continue _fun0038 }
case 237:
                var15 = var8 == var16;
                var2 = undefined;
                if(var15) { _fun0038_ip = 238; continue _fun0038 }
case 188:
                var2 = var16.userStatus;
case 238:
                if(!(var8 == var2)) { _fun0038_ip = 239; continue _fun0038 }
case 240:
                var2 = var1.push;
                var2 = var2.bind(var1)(var16);
                var4 = var14;
                var13 = var3;
                _fun0038_ip = 181; continue _fun0038;
case 239:
                var2 = var16.userStatus;
                var2 = var2.claimedAt;
                var15 = var8 != var2;
                var20 = _closure1_slot0;
                var2 = _closure1_slot2;
                var17 = var2[var7];
                var19 = var20.bind(var10)(var17);
                var18 = var19.isDismissed;
                var17 = var16.userStatus;
                var2 = var2[var6];
                var2 = var20.bind(var10)(var2);
                var2 = var2.QuestContent;
                var2 = var2.GIFT_INVENTORY_SETTINGS_BADGE;
                var2 = var18.bind(var19)(var17, var2);
                if(var15) { _fun0038_ip = 38; continue _fun0038 }
case 204:
                var15 = var2;
case 38:
                var4 = var14;
                var13 = var2;
                if(var15) { _fun0038_ip = 181; continue _fun0038 }
case 241:
                var15 = var1.push;
                var15 = var15.bind(var1)(var16);
                var4 = var14;
                var13 = var2;
case 181:
                var14 = var9.bind(var10)();
                var2 = var14.done;
                var3 = var13;
                var5 = var14;
                if(!var2) { _fun0038_ip = 99; continue _fun0038 }
case 6:
                return var1;
case 235:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestsForSettingsBadge'] = var10;
    var10 = function useQuestForMemberListSocialEntryPoint(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 12;
            var4 = var4[var3];
            var3 = undefined;
            var7 = var5.bind(var3)(var4);
            var6 = var7.useStateFromStores;
            var4 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot11;
                var1 = var1.quests;
                return var1;
            };
            var7 = var6.bind(var7)(var5, var4);
            var _closure2_slot1 = var7;
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var7;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 18;
                var1 = var6[var2];
                var3 = undefined;
                var9 = var5.bind(var3)(var1);
                var8 = var9.filterQuestsForSocialEntrypoints;
                var7 = _closure2_slot1;
                var4 = _closure1_slot14;
                var4 = var8.bind(var9)(var7, var4);
                var2 = var6[var2];
                var3 = var5.bind(var3)(var2);
                var2 = var3.getQuestsFromActivities;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            };
            var2 = var5.bind(var6)(var2, var4);
            var1 = _closure1_slot49;
            var3 = var1.bind(var3)(var2);
            var1 = null;
            if(var3) { _fun0039_ip = 85; continue _fun0039 }
case 44:
            var1 = var2;
case 85:
            return var1;
        }
    };
    var3['useQuestForMemberListSocialEntryPoint'] = var10;
    var10 = function useQuestCollectibles(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var7 = arg1;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 18;
            var1 = var8[var1];
            var6 = undefined;
            var2 = var5.bind(var6)(var1);
            var1 = var2.hasCollectiblesQuestReward;
            var3 = var1.bind(var2)(var7);
            var1 = 26;
            var1 = var8[var1];
            var4 = var5.bind(var6)(var1);
            var2 = var4.useFetchCollectiblesProduct;
            var1 = 21;
            var1 = var8[var1];
            var1 = var5.bind(var6)(var1);
            var5 = var1.SharedQuestFields;
            var1 = var5.build;
            var1 = var1.bind(var5)(var7);
            var1 = var1.defaultReward;
            var1 = var1.skuId;
            var1 = var2.bind(var4)(var1);
            var5 = var1.product;
            var2 = var1.isFetching;
            var1 = {};
            var1['hasQuestCollectibles'] = var3;
            var4 = null;
            var7 = var4 == var5;
            var3 = undefined;
            if(var7) { _fun0040_ip = 242; continue _fun0040 }
case 243:
            var5 = var5.items;
            var4 = var4 == var5;
            var3 = undefined;
            if(var4) { _fun0040_ip = 242; continue _fun0040 }
case 56:
            var4 = 0;
            var3 = var5[var4];
case 242:
            var1['avatarDecoration'] = var3;
            var1['isFetching'] = var2;
            return var1;
        }
    };
    var3['useQuestCollectibles'] = var10;
    var10 = function useQuestPreviewActions(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var3 = function handleComplete() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.completeQuestPreview;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['handleComplete'] = var3;
            var3 = function handleProgress(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.completeQuestPreview;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1['handleProgress'] = var3;
            var3 = function handleResetStatusClick() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.resetQuestPreviewStatus;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['handleResetStatusClick'] = var3;
            var3 = function handleResetDismissibilityClick() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.resetQuestDismissibilityStatus;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['handleResetDismissibilityClick'] = var3;
            var2 = function handleOverrideDeliveryClick() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.overrideQuestDelivery;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['handleOverrideDeliveryClick'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestPreviewActions'] = var10;
    var3['useConnectedAccounts'] = var9;
    var9 = function(arg1) {
        var1 = arg1;
        var8 = var1.questId;
        var _closure2_slot0 = var8;
        var9 = var1.preview;
        var _closure2_slot1 = var9;
        var11 = var1.beforeRequest;
        var _closure2_slot2 = var11;
        var10 = var1.afterRequest;
        var _closure2_slot3 = var10;
        var3 = _closure1_slot5;
        var2 = var3.useState;
        var1 = new Array(0);
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot4;
        var12 = undefined;
        var13 = 2;
        var1 = var1.bind(var12)(var2, var13);
        var3 = 0;
        var2 = var1[var3];
        var6 = 1;
        var1 = var1[var6];
        var _closure2_slot4 = var1;
        var14 = _closure1_slot5;
        var7 = var14.useState;
        var1 = false;
        var7 = var7.bind(var14)(var1);
        var1 = _closure1_slot4;
        var1 = var1.bind(var12)(var7, var13);
        var3 = var1[var3];
        var _closure2_slot5 = var3;
        var1 = var1[var6];
        var _closure2_slot6 = var1;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 12;
        var1 = var7[var1];
        var13 = var6.bind(var12)(var1);
        var7 = var13.useStateFromStores;
        var1 = _closure1_slot9;
        var6 = new Array(1);
        var6[0] = var1;
        var1 = function() {
            var2 = _closure1_slot9;
            var1 = var2.getAccounts;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var7.bind(var13)(var6, var1);
        var13 = _closure1_slot5;
        var7 = var13.useEffect;
        var6 = new Array(1);
        var6[0] = var1;
        var1 = function() {
            var3 = _closure2_slot4;
            var1 = undefined;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 27;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.QuestConsoleStartError;
                    var1 = var1.EXPIRED_CREDENTIAL;
                    var1 = var2 !== var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var7.bind(var13)(var1, var6);
        var1 = {};
        var7 = _closure1_slot5;
        var6 = var7.useCallback;
        var5 = _closure1_slot3;
        var4 = function* () {
            var1 = function* anon_0_() {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0041_ip = 206; continue _fun0041 }
case 167:
                    var2 = undefined;
                    var4 = undefined;
                    var6 = undefined;
                    var8 = undefined;
                    var3 = _closure2_slot5;
                    if(var3) { _fun0041_ip = 244; continue _fun0041 }
case 77:
                    var3 = _closure2_slot2;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0041_ip = 5; continue _fun0041 }
case 160:
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var2)();
case 5:
                    var9 = _closure2_slot6;
                    var3 = true;
                    var3 = var9.bind(var2)(var3);
                    var4 = null;
case 49: // try_start_0
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 15;
                    var3 = var10[var3];
                    var11 = var9.bind(var2)(var3);
                    var10 = var11.manuallyStartConsoleQuest;
                    var9 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var10.bind(var11)(var9, var3);
                    SaveGenerator(address=109);
case 180:
                    return var3;
case 245:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0041_ip = 62; continue _fun0041 }
case 85:
                    var4 = var3;
                    var10 = _closure2_slot4;
                    var9 = var3.errorHints;
                    var9 = var10.bind(var2)(var9);
case 246: // try_end0
                    var10 = _closure2_slot6;
                    var9 = false;
                    var9 = var10.bind(var2)(var9);
                    var9 = _closure2_slot3;
                    if(!(var7 != var9)) { _fun0041_ip = 244; continue _fun0041 }
case 86:
                    var10 = _closure2_slot3;
                    var9 = var4;
                    var8 = var9;
                    var11 = var7 == var9;
                    var9 = undefined;
                    if(var11) { _fun0041_ip = 193; continue _fun0041 }
case 92:
                    var11 = var8;
                    var9 = var11.errorHints;
case 193:
                    var6 = var9;
                    if(!(var7 == var9)) { _fun0041_ip = 247; continue _fun0041 }
case 248:
                    var9 = new Array(0);
                    _fun0041_ip = 164; continue _fun0041;
case 247:
                    var9 = var6;
case 164:
                    var9 = var10.bind(var2)(var9);
                    _fun0041_ip = 244; continue _fun0041;
case 62:
                    var10 = _closure2_slot6;
                    var9 = false;
                    var9 = var10.bind(var2)(var9);
                    var9 = _closure2_slot3;
                    if(!(var7 != var9)) { _fun0041_ip = 249; continue _fun0041 }
case 64:
                    var10 = _closure2_slot3;
                    var9 = var4;
                    var8 = var9;
                    var11 = var7 == var9;
                    var9 = undefined;
                    if(var11) { _fun0041_ip = 250; continue _fun0041 }
case 23:
                    var11 = var8;
                    var9 = var11.errorHints;
case 250:
                    var6 = var9;
                    if(!(var7 == var9)) { _fun0041_ip = 251; continue _fun0041 }
case 252:
                    var9 = new Array(0);
                    _fun0041_ip = 253; continue _fun0041;
case 251:
                    var9 = var6;
case 253:
                    var9 = var10.bind(var2)(var9);
case 249:
                    return var3;
case 207: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var10 = _closure2_slot6;
                    var9 = false;
                    var9 = var10.bind(var2)(var9);
                    var9 = _closure2_slot3;
                    if(!(var7 != var9)) { _fun0041_ip = 254; continue _fun0041 }
case 67:
                    var5 = _closure2_slot3;
                    var8 = var4;
                    var9 = var7 == var4;
                    var4 = undefined;
                    if(var9) { _fun0041_ip = 8; continue _fun0041 }
case 66:
                    var4 = var8.errorHints;
case 8:
                    var6 = var4;
                    if(!(var7 == var4)) { _fun0041_ip = 255; continue _fun0041 }
case 26:
                    var4 = new Array(0);
                    _fun0041_ip = 256; continue _fun0041;
case 255:
                    var4 = var6;
case 256:
                    var4 = var5.bind(var2)(var4);
case 254:
                    throw var3;
case 244:
                    return var2;
case 206:
                    return var1;
                }
            };
            return var1;
        };
        var5 = var5.bind(var12)(var4);
        var4 = new Array(5);
        var4[0] = var3;
        var4[1] = var11;
        var4[2] = var10;
        var4[3] = var9;
        var4[4] = var8;
        var4 = var6.bind(var7)(var5, var4);
        var1['startConsoleQuest'] = var4;
        var1['startingConsoleQuest'] = var3;
        var1['errorHints'] = var2;
        return var1;
    };
    var3['useManuallyStartConsoleQuest'] = var9;
    var3['useWaitingForConsoleConnection'] = var8;
    var8 = function() {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var2 = _closure1_slot56;
            var10 = undefined;
            var2 = var2.bind(var10)();
            var3 = var2.xboxAccounts;
            var2 = var2.playstationAccounts;
            var4 = var3.length;
            var3 = 0;
            var8 = var4 > var3;
            var2 = var2.length;
            var6 = var2 > var3;
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 28;
            var2 = var11[var4];
            var9 = var5.bind(var10)(var2);
            var7 = var9.getArticleURL;
            var3 = _closure1_slot20;
            var2 = var3.QUEST_HOW_TO_PLAYSTATION;
            var2 = var7.bind(var9)(var2);
            var4 = var11[var4];
            var5 = var5.bind(var10)(var4);
            var4 = var5.getArticleURL;
            var3 = var3.QUEST_HOW_TO_XBOX;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var1 = 22;
            var5 = var11[var1];
            var5 = var4.bind(var10)(var5);
            var12 = var5.intl;
            var9 = var12.format;
            var5 = var11[var1];
            var5 = var4.bind(var10)(var5);
            var5 = var5.t;
            var7 = var5.beN4DA;
            var5 = {};
            var5['psHelpdeskArticle'] = var2;
            var5['xboxHelpdeskArticle'] = var3;
            var7 = var9.bind(var12)(var7, var5);
            var5 = var11[var1];
            var5 = var4.bind(var10)(var5);
            var9 = var5.intl;
            var5 = var9.format;
            var1 = var11[var1];
            var1 = var4.bind(var10)(var1);
            var1 = var1.t;
            var4 = var1.HVS7np;
            var1 = {};
            var10 = var3;
            if(!var6) { _fun0042_ip = 21; continue _fun0042 }
case 63:
            var10 = var2;
case 21:
            var1['helpdeskArticle'] = var10;
            var5 = var5.bind(var9)(var4, var1);
            var1 = {};
            if(!var8) { _fun0042_ip = 257; continue _fun0042 }
case 258:
            if(!var6) { _fun0042_ip = 24; continue _fun0042 }
case 257:
            var4 = var7;
            if(var8) { _fun0042_ip = 259; continue _fun0042 }
case 260:
            var4 = var7;
            if(!var6) { _fun0042_ip = 259; continue _fun0042 }
case 24:
            var4 = var5;
case 259:
            var1['message'] = var4;
            var1['xboxURL'] = var3;
            var1['playstationURL'] = var2;
            return var1;
        }
    };
    var3['useQuestHowToHelpArticle'] = var8;
    var3['QuestProgressState'] = var7;
    var7 = function useProgressState(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var7 = arg1;
            var2 = var7.userStatus;
            var3 = null;
            var4 = var3 == var2;
            var6 = undefined;
            var1 = undefined;
            if(var4) { _fun0043_ip = 34; continue _fun0043 }
case 196:
            var1 = var2.enrolledAt;
case 34:
            var1 = var3 != var1;
            var4 = var7.userStatus;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0043_ip = 197; continue _fun0043 }
case 161:
            var2 = var4.completedAt;
case 197:
            var4 = var3 != var2;
            var5 = var7.userStatus;
            var8 = var3 == var5;
            var2 = undefined;
            if(var8) { _fun0043_ip = 261; continue _fun0043 }
case 83:
            var2 = var5.claimedAt;
case 261:
            var5 = var3 != var2;
            var3 = _closure1_slot30;
            var3 = var3.bind(var6)(var7);
            var6 = var3.percentComplete;
            var3 = 0;
            var3 = var6 > var3;
            if(var5) { _fun0043_ip = 262; continue _fun0043 }
case 245:
            if(var4) { _fun0043_ip = 90; continue _fun0043 }
case 44:
            if(!var3) { _fun0043_ip = 52; continue _fun0043 }
case 85:
            if(var1) { _fun0043_ip = 263; continue _fun0043 }
case 52:
            var3 = _closure1_slot33;
            if(var1) { _fun0043_ip = 246; continue _fun0043 }
case 91:
            var1 = var3.UNACCEPTED;
            _fun0043_ip = 264; continue _fun0043;
case 246:
            var1 = var3.ACCEPTED;
case 264:
            _fun0043_ip = 265; continue _fun0043;
case 263:
            var3 = _closure1_slot33;
            var1 = var3.IN_PROGRESS;
case 265:
            _fun0043_ip = 14; continue _fun0043;
case 90:
            var3 = _closure1_slot33;
            var1 = var3.COMPLETED;
case 14:
            _fun0043_ip = 187; continue _fun0043;
case 262:
            var2 = _closure1_slot33;
            var1 = var2.CLAIMED;
case 187:
            return var1;
        }
    };
    var3['useProgressState'] = var7;
    var7 = function useQuestCompletionDetails(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var1 = var5[var1];
            var5 = undefined;
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.locale;
                return var1;
            };
            var9 = var6.bind(var7)(var4, var1);
            var1 = _closure1_slot30;
            var1 = var1.bind(var5)(var3);
            var8 = var1.percentComplete;
            var1 = _closure1_slot55;
            var3 = var1.bind(var5)(var3);
            var4 = null;
            if(!(var4 != var3)) { _fun0044_ip = 266; continue _fun0044 }
case 176:
            var8 = var3.percentComplete;
case 266:
            var1 = {};
            var1['completedRatio'] = var8;
            var6 = 100;
            var6 = var6 * var8;
            var1['percentComplete'] = var6;
            if(!(var4 == var3)) { _fun0044_ip = 262; continue _fun0044 }
case 267:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 29;
            var2 = var7[var2];
            var7 = var6.bind(var5)(var2);
            var6 = var7.formatPercent;
            var2 = {};
            var10 = 'floor';
            var2['roundingMode'] = var10;
            var2 = var6.bind(var7)(var9, var8, var2);
            _fun0044_ip = 268; continue _fun0044;
case 262:
            var6 = var4 == var3;
            var7 = undefined;
            if(var6) { _fun0044_ip = 269; continue _fun0044 }
case 92:
            var7 = var3.progress;
case 269:
            var4 = var4 == var3;
            var6 = undefined;
            if(var4) { _fun0044_ip = 20; continue _fun0044 }
case 270:
            var6 = var3.target;
case 20:
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = '';
            var3 = '/';
            var2 = var5.bind(var4)(var7, var3, var6);
case 268:
            var1['completedRatioDisplay'] = var2;
            return var1;
        }
    };
    var3['useQuestCompletionDetails'] = var7;
    var7 = function useQuestTileDescription(arg1, arg2, arg3) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot30;
            var7 = undefined;
            var8 = var1.bind(var7)(var6);
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 18;
            var1 = var10[var1];
            var3 = var9.bind(var7)(var1);
            var1 = var3.getThirdPartyTaskDetails;
            var3 = var1.bind(var3)(var6);
            var1 = 30;
            var1 = var10[var1];
            var5 = var9.bind(var7)(var1);
            var4 = var5.useQuestsInstructionsToWinReward;
            var1 = {};
            var1['quest'] = var6;
            var1['taskDetails'] = var8;
            var8 = _closure1_slot13;
            var8 = var8.QUEST_HOME_DESKTOP;
            var1['location'] = var8;
            var8 = 17;
            var8 = var10[var8];
            var8 = var9.bind(var7)(var8);
            var8 = var8.QuestContent;
            var8 = var8.QUEST_HOME_DESKTOP;
            var1['questContent'] = var8;
            var8 = arg2;
            var1['sourceQuestContent'] = var8;
            var8 = arg3;
            var1['popoutTargetElementRef'] = var8;
            var4 = var4.bind(var5)(var1);
            var8 = var6.userStatus;
            var1 = null;
            var9 = var1 == var8;
            var5 = undefined;
            if(var9) { _fun0045_ip = 262; continue _fun0045 }
case 209:
            var5 = var8.claimedAt;
case 262:
            var5 = var1 != var5;
            var8 = _closure1_slot50;
            var9 = var6.userStatus;
            var10 = var1 == var9;
            var6 = undefined;
            if(var10) { _fun0045_ip = 163; continue _fun0045 }
case 189:
            var6 = var9.claimedAt;
case 163:
            var6 = var8.bind(var7)(var6);
            if(var5) { _fun0045_ip = 175; continue _fun0045 }
case 195:
            if(!(var1 == var3)) { _fun0045_ip = 271; continue _fun0045 }
case 182:
            var5 = var1 != var4;
            var1 = null;
            if(!var5) { _fun0045_ip = 57; continue _fun0045 }
case 272:
            var1 = var4;
case 57:
            _fun0045_ip = 273; continue _fun0045;
case 271:
            var1 = var3.description;
case 273:
            _fun0045_ip = 204; continue _fun0045;
case 175:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 22;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.lOVr0N;
            var2 = {};
            var2['claimDate'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 204:
            return var1;
        }
    };
    var3['useQuestTileDescription'] = var7;
    var3['useSelectedTaskPlatform'] = var6;
    var3['useTaskPlatformScreen'] = var5;
    var5 = function useQuestWarningTips(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var8 = arg1;
            var1 = _closure1_slot55;
            var7 = undefined;
            var11 = var1.bind(var7)(var8);
            var1 = _closure1_slot30;
            var6 = var1.bind(var7)(var8);
            var1 = _closure1_slot58;
            var4 = var1.bind(var7)(var8, var6);
            var3 = _closure1_slot4;
            var1 = 1;
            var1 = var3.bind(var7)(var4, var1);
            var14 = 0;
            var9 = var1[var14];
            var1 = _closure1_slot49;
            var12 = var1.bind(var7)(var8);
            var3 = var8.userStatus;
            var4 = null;
            var5 = var4 == var3;
            var1 = undefined;
            if(var5) { _fun0046_ip = 51; continue _fun0046 }
case 101:
            var1 = var3.enrolledAt;
case 51:
            var5 = var4 != var1;
            var3 = var8.userStatus;
            var10 = var4 == var3;
            var1 = undefined;
            if(var10) { _fun0046_ip = 44; continue _fun0046 }
case 84:
            var1 = var3.completedAt;
case 44:
            var13 = var4 != var1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 20;
            var1 = var1[var10];
            var1 = var3.bind(var7)(var1);
            var1 = var1.FirstPartyQuestTaskTypesSets;
            var15 = var1.DESKTOP;
            var3 = var15.has;
            var1 = var6.taskType;
            var1 = var3.bind(var15)(var1);
            if(!var1) { _fun0046_ip = 274; continue _fun0046 }
case 275:
            var3 = var6.percentComplete;
            var1 = var3 > var14;
case 274:
            var3 = var6.percentComplete;
            var3 = var14 === var3;
            if(!var5) { _fun0046_ip = 276; continue _fun0046 }
case 248:
            var5 = !var13;
case 276:
            if(!var5) { _fun0046_ip = 164; continue _fun0046 }
case 247:
            var5 = !var12;
case 164:
            if(!var5) { _fun0046_ip = 182; continue _fun0046 }
case 195:
            var5 = var4 == var11;
case 182:
            if(!var5) { _fun0046_ip = 277; continue _fun0046 }
case 62:
            if(var1) { _fun0046_ip = 278; continue _fun0046 }
case 194:
            if(!var3) { _fun0046_ip = 279; continue _fun0046 }
case 272:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 17;
            var4 = var12[var4];
            var4 = var11.bind(var7)(var4);
            var4 = var4.TaskPlatformScreen;
            var4 = var4.DESKTOP;
            var3 = var9 === var4;
case 279:
            var1 = var3;
case 278:
            var5 = var1;
case 277:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 32;
            var1 = var1[var9];
            var3 = var3.bind(var7)(var1);
            var1 = var3.isWeb;
            var3 = var1.bind(var3)();
            if(!var3) { _fun0046_ip = 280; continue _fun0046 }
case 281:
            var3 = var5;
case 280:
            if(!var3) { _fun0046_ip = 26; continue _fun0046 }
case 72:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 18;
            var1 = var11[var1];
            var4 = var4.bind(var7)(var1);
            var1 = var4.isQuestSupportedOnWeb;
            var1 = var1.bind(var4)(var8);
            var3 = !var1;
case 26:
            var1 = new Array(0);
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var8 = var8.bind(var7)(var4);
            var4 = var8.isMac;
            var4 = var4.bind(var8)();
            if(!var4) { _fun0046_ip = 282; continue _fun0046 }
case 283:
            var8 = var6.taskType;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var9.bind(var7)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.STREAM_ON_DESKTOP;
            var4 = var8 === var6;
case 282:
            if(!var4) { _fun0046_ip = 284; continue _fun0046 }
case 285:
            var4 = var5;
case 284:
            if(!var4) { _fun0046_ip = 286; continue _fun0046 }
case 287:
            var5 = var1.push;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 22;
            var6 = var10[var4];
            var6 = var9.bind(var7)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.MFGxFB;
            var4 = var6.bind(var8)(var4);
            var4 = var5.bind(var1)(var4);
case 286:
            if(!var3) { _fun0046_ip = 288; continue _fun0046 }
case 289:
            var3 = var1.push;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 22;
            var4 = var8[var2];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.BV6xDg;
            var2 = var4.bind(var5)(var2);
            var2 = var3.bind(var1)(var2);
case 288:
            return var1;
        }
    };
    var3['useQuestWarningTips'] = var5;
    var5 = function useQuest(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot11;
                var1 = var1.quests;
                return var1;
            };
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0047_ip = 290; continue _fun0047 }
case 291:
            var1 = var2;
case 290:
            return var1;
        }
    };
    var3['useQuest'] = var5;
    var5 = function useNonNullableQuest(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var3 = var4[var3];
        var5 = undefined;
        var9 = var6.bind(var5)(var3);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot11;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = new Array(1);
        var3[0] = var7;
        var1 = function() {
            var3 = _closure1_slot11;
            var2 = var3.getQuest;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var8.bind(var9)(var6, var1, var3);
        var3 = _closure1_slot1;
        var2 = 33;
        var2 = var4[var2];
        var4 = var3.bind(var5)(var2);
        var2 = null;
        var3 = var2 != var1;
        var2 = global;
        var2 = var2.HermesInternal;
        var6 = var2.concat;
        var2 = 'Unknown quest ID ';
        var2 = var6.bind(var2)(var7);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useNonNullableQuest'] = var5;
    var5 = function useQuestBarOrDockModeChangeTracking(arg1) {
        var2 = arg1;
        var3 = var2.mode;
        var _closure2_slot0 = var3;
        var6 = var2.questContent;
        var _closure2_slot1 = var6;
        var5 = var2.sourceQuestContent;
        var _closure2_slot2 = var5;
        var7 = var2.questId;
        var _closure2_slot3 = var7;
        var9 = _closure1_slot5;
        var8 = var9.useRef;
        var4 = null;
        var4 = var8.bind(var9)(var4);
        var _closure2_slot4 = var4;
        var9 = _closure1_slot5;
        var8 = var9.useEffect;
        var4 = new Array(4);
        var4[0] = var7;
        var4[1] = var6;
        var4[2] = var3;
        var4[3] = var5;
        var3 = function() {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0048_ip = 33; continue _fun0048 }
case 158:
                var2 = _closure2_slot4;
                var3 = var2.current;
                var2 = _closure2_slot0;
                var1 = var3 !== var2;
case 33:
                if(!var1) { _fun0048_ip = 292; continue _fun0048 }
case 293:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.trackQuestBarOrDockModeChange;
                var3 = {};
                var2 = _closure2_slot0;
                var3['mode'] = var2;
                var1 = _closure2_slot4;
                var7 = var1.current;
                var3['prevMode'] = var7;
                var7 = _closure2_slot1;
                var3['questContent'] = var7;
                var7 = _closure2_slot3;
                var3['questId'] = var7;
                var6 = _closure2_slot2;
                var3['sourceQuestContent'] = var6;
                var3 = var4.bind(var5)(var3);
                var1['current'] = var2;
case 292:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var8.bind(var9)(var3, var4);
        var4 = _closure1_slot5;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = null;
                if(!(var1 == var2)) { _fun0049_ip = 166; continue _fun0049 }
case 294:
                var1 = undefined;
                return var1;
case 166:
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackQuestBarOrDockModeChange;
                    var2 = {};
                    var5 = null;
                    var2['mode'] = var5;
                    var6 = _closure2_slot4;
                    var6 = var6.current;
                    var2['prevMode'] = var6;
                    var6 = _closure2_slot1;
                    var2['questContent'] = var6;
                    var6 = _closure2_slot3;
                    var2['questId'] = var6;
                    var5 = _closure2_slot2;
                    var2['sourceQuestContent'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useQuestBarOrDockModeChangeTracking'] = var5;
    var5 = function useQuestBarTitle(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var5 = undefined;
            var7 = var3.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot7;
                var1 = var1.locale;
                return var1;
            };
            var9 = var6.bind(var7)(var3, var2);
            var2 = _closure1_slot30;
            var7 = var2.bind(var5)(var4);
            var2 = _closure1_slot58;
            var6 = var2.bind(var5)(var4, var7);
            var3 = _closure1_slot4;
            var2 = 1;
            var3 = var3.bind(var5)(var6, var2);
            var2 = 0;
            var3 = var3[var2];
            var6 = _closure1_slot55;
            var10 = var6.bind(var5)(var4);
            var11 = var4.userStatus;
            var8 = null;
            var12 = var8 == var11;
            var6 = undefined;
            if(var12) { _fun0050_ip = 112; continue _fun0050 }
case 89:
            var6 = var11.completedAt;
case 112:
            var6 = var8 != var6;
            if(!(var8 == var10)) { _fun0050_ip = 113; continue _fun0050 }
case 295:
            var7 = var7.percentComplete;
            _fun0050_ip = 56; continue _fun0050;
case 113:
            var7 = var10.percentComplete;
case 56:
            if(var6) { _fun0050_ip = 296; continue _fun0050 }
case 242:
            var10 = var4.userStatus;
            var11 = var8 == var10;
            var6 = undefined;
            if(var11) { _fun0050_ip = 274; continue _fun0050 }
case 124:
            var6 = var10.enrolledAt;
case 274:
            if(!(var8 != var6)) { _fun0050_ip = 189; continue _fun0050 }
case 190:
            if(!(!(var7 > var2))) { _fun0050_ip = 137; continue _fun0050 }
case 189:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 17;
            var2 = var8[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.TaskPlatformScreen;
            var2 = var2.SELECT;
            if(!(var3 !== var2)) { _fun0050_ip = 212; continue _fun0050 }
case 65:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 18;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isConsoleQuest;
            var2 = var2.bind(var3)(var4);
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 22;
            var4 = var10[var3];
            var4 = var8.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var10[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.t;
            if(var2) { _fun0050_ip = 297; continue _fun0050 }
case 298:
            var2 = var3.7e5k7O;
            var2 = var4.bind(var6)(var2);
            _fun0050_ip = 27; continue _fun0050;
case 297:
            var3 = var3.mOrpXF;
            var2 = var4.bind(var6)(var3);
case 27:
            _fun0050_ip = 299; continue _fun0050;
case 212:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 22;
            var4 = var10[var3];
            var4 = var8.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var10[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.EMrUHR;
            var2 = var4.bind(var6)(var3);
case 299:
            return var2;
case 137:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 29;
            var2 = var8[var2];
            var6 = var3.bind(var5)(var2);
            var4 = var6.formatPercent;
            var2 = {};
            var10 = 'floor';
            var2['roundingMode'] = var10;
            var7 = var4.bind(var6)(var9, var7, var2);
            var2 = 22;
            var4 = var8[var2];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.lVZaXF;
            var2 = {};
            var2['percent'] = var7;
            var2 = var4.bind(var6)(var3, var2);
            return var2;
case 296:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 22;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.ij5E//;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['useQuestBarTitle'] = var5;
    var5 = function useQuestBarSubtitle(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var1 = arg1;
            var4 = var1.quest;
            var _closure2_slot0 = var4;
            var16 = var1.isExpanded;
            var22 = var1.sourceQuestContent;
            var12 = var1.activeScreen;
            var21 = var1.popoutTargetElementRef;
            var20 = var1.onGameSheetOpened;
            var13 = var1.onGameSheetClosed;
            var3 = _closure1_slot50;
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var8 = var4.config;
            var5 = new Array(1);
            var5[0] = var8;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.SharedQuestFields;
                var2 = var3.build;
                var1 = _closure2_slot0;
                var1 = var1.config;
                var1 = var2.bind(var3)(var1);
                var1 = var1.rewardsExpireAt;
                return var1;
            };
            var2 = var6.bind(var7)(var2, var5);
            var6 = undefined;
            var5 = var3.bind(var6)(var2);
            var2 = _closure1_slot30;
            var11 = var2.bind(var6)(var4);
            var2 = _closure1_slot55;
            var19 = var2.bind(var6)(var4);
            var3 = var4.userStatus;
            var18 = null;
            var7 = var18 == var3;
            var2 = undefined;
            if(var7) { _fun0051_ip = 264; continue _fun0051 }
case 246:
            var2 = var3.completedAt;
case 264:
            var17 = var18 != var2;
            var3 = var4.userStatus;
            var7 = var18 == var3;
            var2 = undefined;
            if(var7) { _fun0051_ip = 191; continue _fun0051 }
case 15:
            var2 = var3.enrolledAt;
case 191:
            var9 = var18 != var2;
            var2 = var11.percentComplete;
            var15 = 0;
            var8 = var2 > var15;
            var2 = _closure1_slot54;
            var14 = var2.bind(var6)(var4);
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 30;
            var2 = var23[var2];
            var7 = var24.bind(var6)(var2);
            var3 = var7.useQuestsInstructionsToWinReward;
            var2 = {};
            var2['quest'] = var4;
            var10 = _closure1_slot13;
            var10 = var10.QUESTS_BAR;
            var2['location'] = var10;
            var10 = 17;
            var23 = var23[var10];
            var23 = var24.bind(var6)(var23);
            var23 = var23.QuestContent;
            var23 = var23.QUEST_BAR_V2;
            var2['questContent'] = var23;
            var2['taskDetails'] = var11;
            var2['sourceQuestContent'] = var22;
            var2['popoutTargetElementRef'] = var21;
            var2['onGameSheetOpened'] = var20;
            var2['onGameSheetClosed'] = var13;
            var3 = var3.bind(var7)(var2);
            if(!(var18 == var19)) { _fun0051_ip = 76; continue _fun0051 }
case 71:
            var13 = var11.percentComplete;
            _fun0051_ip = 300; continue _fun0051;
case 76:
            var13 = var19.percentComplete;
case 300:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var17) { _fun0051_ip = 301; continue _fun0051 }
case 302:
            if(var16) { _fun0051_ip = 303; continue _fun0051 }
case 177:
            var17 = 18;
            var16 = var7[var17];
            var20 = var2.bind(var6)(var16);
            var16 = var20.hasWatchVideoTasks;
            var16 = var16.bind(var20)(var4);
            if(var16) { _fun0051_ip = 304; continue _fun0051 }
case 305:
            if(!(!(var13 > var15))) { _fun0051_ip = 306; continue _fun0051 }
case 307:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 22;
            var15 = var21[var13];
            var15 = var20.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var13 = var21[var13];
            var13 = var20.bind(var6)(var13);
            var13 = var13.t;
            var13 = var13.S6UUc3;
            var13 = var15.bind(var16)(var13);
            _fun0051_ip = 219; continue _fun0051;
case 306:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            if(var14) { _fun0051_ip = 308; continue _fun0051 }
case 309:
            var14 = 22;
            var20 = var15[var14];
            var20 = var16.bind(var6)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var14 = var15[var14];
            var14 = var16.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.mOrpXF;
            var14 = var20.bind(var21)(var14);
            _fun0051_ip = 223; continue _fun0051;
case 308:
            var15 = var15[var17];
            var17 = var16.bind(var6)(var15);
            var16 = var17.getContextualEntrypointHeading;
            var15 = {};
            var15['quest'] = var4;
            var15['taskDetails'] = var11;
            var20 = var18 != var19;
            var18 = undefined;
            if(!var20) { _fun0051_ip = 310; continue _fun0051 }
case 311:
            var18 = var19;
case 310:
            var15['thirdPartyTaskDetails'] = var18;
            var14 = var16.bind(var17)(var15);
case 223:
            var13 = var14;
case 219:
            _fun0051_ip = 312; continue _fun0051;
case 304:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 22;
            var15 = var18[var14];
            var15 = var17.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.o+e9ys;
            var13 = var15.bind(var16)(var14);
case 312:
            return var13;
case 303:
            var10 = var7[var10];
            var10 = var2.bind(var6)(var10);
            var10 = var10.TaskPlatformScreen;
            var10 = var10.SELECT;
            if(!(var12 !== var10)) { _fun0051_ip = 313; continue _fun0051 }
case 314:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 18;
            var10 = var13[var10];
            var12 = var12.bind(var6)(var10);
            var10 = var12.isSponsoredPlayQuest;
            var10 = var10.bind(var12)(var4);
            if(!var10) { _fun0051_ip = 315; continue _fun0051 }
case 316:
            if(!var9) { _fun0051_ip = 315; continue _fun0051 }
case 317:
            if(var8) { _fun0051_ip = 315; continue _fun0051 }
case 318:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 21;
            var9 = var13[var9];
            var9 = var8.bind(var6)(var9);
            var10 = var9.SharedQuestFields;
            var9 = var10.build;
            var4 = var4.config;
            var4 = var9.bind(var10)(var4);
            var12 = var4.defaultRewardNameWithArticle;
            var4 = 22;
            var9 = var13[var4];
            var9 = var8.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var4 = var13[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4.1votFx;
            var4 = {};
            var4['rewardNameWithArticle'] = var12;
            var11 = var11.targetMinutes;
            var4['targetMinutes'] = var11;
            var4 = var9.bind(var10)(var8, var4);
            return var4;
case 315:
            return var3;
case 313:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 22;
            var3 = var9[var1];
            var3 = var8.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var9[var1];
            var1 = var8.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.sWUpNz;
            var1 = var3.bind(var4)(var1);
            return var1;
case 301:
            var1 = 22;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.APddvL;
            var1 = {};
            var1['expirationDate'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useQuestBarSubtitle'] = var5;
    var5 = function useCosponsoredLogotypeAsset(arg1, arg2) {
        var3 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var6;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 12;
        var5 = var8[var4];
        var4 = undefined;
        var10 = var7.bind(var4)(var5);
        var9 = var10.useStateFromStores;
        var5 = _closure1_slot11;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure1_slot11;
            var2 = var3.getQuest;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var9.bind(var10)(var7, var3, var5);
        var _closure2_slot2 = var5;
        var7 = _closure1_slot1;
        var3 = 34;
        var3 = var8[var3];
        var3 = var7.bind(var4)(var3);
        var7 = var3.bind(var4)();
        var _closure2_slot3 = var7;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var2 = _closure2_slot2;
                var1 = null;
                if(!(var1 != var2)) { _fun0052_ip = 242; continue _fun0052 }
case 158:
                var2 = _closure2_slot1;
                if(!(var1 == var2)) { _fun0052_ip = 51; continue _fun0052 }
case 104:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 35;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isThemeDark;
                var4 = _closure2_slot3;
                var4 = var5.bind(var6)(var4);
                var2 = _closure1_slot22;
                if(var4) { _fun0052_ip = 319; continue _fun0052 }
case 168:
                var6 = var2.LIGHT;
                _fun0052_ip = 120; continue _fun0052;
case 319:
                var6 = var2.DARK;
case 120:
                _fun0052_ip = 119; continue _fun0052;
case 51:
                var6 = _closure2_slot1;
case 119:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 36;
                var4 = var9[var2];
                var7 = undefined;
                var5 = var8.bind(var7)(var4);
                var4 = var5.getQuestAsset;
                var3 = _closure2_slot2;
                var2 = var9[var2];
                var2 = var8.bind(var7)(var2);
                var2 = var2.QuestAssetType;
                var2 = var2.COSPONSOR_LOGO_TYPE;
                var2 = var4.bind(var5)(var3, var2, var6);
                return var2;
case 242:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCosponsoredLogotypeAsset'] = var5;
    var5 = function useClaimedCollectibleRewardMessage(arg1) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var2 = var7[var2];
            var6 = undefined;
            var2 = var4.bind(var6)(var2);
            var3 = var2.SharedQuestFields;
            var2 = var3.build;
            var2 = var2.bind(var3)(var8);
            var5 = var2.defaultRewardName;
            var2 = 18;
            var3 = var7[var2];
            var9 = var4.bind(var6)(var3);
            var3 = var9.getCollectibleQuestRewardDuration;
            var14 = var3.bind(var9)(var8);
            var3 = var7[var2];
            var9 = var4.bind(var6)(var3);
            var3 = var9.getCollectibleQuestRewardExtendableExpirationDate;
            var16 = var3.bind(var9)(var8);
            var3 = var7[var2];
            var9 = var4.bind(var6)(var3);
            var3 = var9.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var10 = var3.bind(var9)(var8);
            var2 = var7[var2];
            var3 = var4.bind(var6)(var2);
            var2 = var3.isCollectibleQuestRewardPremiumExtendable;
            var2 = var2.bind(var3)(var8);
            var3 = 12;
            var3 = var7[var3];
            var11 = var4.bind(var6)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var9.bind(var11)(var8, var3);
            var3 = 37;
            var3 = var7[var3];
            var7 = var4.bind(var6)(var3);
            var4 = var7.isPremium;
            var3 = _closure1_slot24;
            var3 = var3.TIER_2;
            var8 = var4.bind(var7)(var8, var3);
            var3 = null;
            if(!(var3 != var14)) { _fun0053_ip = 320; continue _fun0053 }
case 239:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 22;
            var4 = var3[var15];
            var4 = var11.bind(var6)(var4);
            var12 = var4.intl;
            var9 = var12.formatToPlainString;
            var4 = var3[var15];
            var4 = var11.bind(var6)(var4);
            var4 = var4.t;
            var7 = var4.o97tNj;
            var4 = {};
            var4['rewardName'] = var5;
            var7 = var9.bind(var12)(var7, var4);
            var4 = var3[var15];
            var4 = var11.bind(var6)(var4);
            var13 = var4.intl;
            var12 = var13.formatToPlainString;
            var4 = var3[var15];
            var4 = var11.bind(var6)(var4);
            var4 = var4.t;
            var9 = var4.PkyRZm;
            var4 = {};
            var4['rewardName'] = var5;
            var4['expirationDate'] = var16;
            var9 = var12.bind(var13)(var9, var4);
            var4 = var3[var15];
            var4 = var11.bind(var6)(var4);
            var16 = var4.intl;
            var13 = var16.formatToPlainString;
            var4 = var3[var15];
            var4 = var11.bind(var6)(var4);
            var4 = var4.t;
            var12 = var4.ie4YKy;
            var4 = {};
            var4['rewardName'] = var5;
            var4['duration'] = var14;
            var4 = var13.bind(var16)(var12, var4);
            var12 = var3[var15];
            var12 = var11.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var3 = var3[var15];
            var3 = var11.bind(var6)(var3);
            var3 = var3.t;
            var11 = var3.yCpc0d;
            var3 = {};
            var3['duration'] = var14;
            var3['rewardName'] = var5;
            var3 = var12.bind(var13)(var11, var3);
            if(var2) { _fun0053_ip = 321; continue _fun0053 }
case 322:
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = var2[var15];
            var12 = var11.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var2 = var2[var15];
            var2 = var11.bind(var6)(var2);
            var2 = var2.t;
            var11 = var2.tTlItr;
            var2 = {};
            var2['duration'] = var14;
            var2['decorationName'] = var5;
            var2 = var12.bind(var13)(var11, var2);
            _fun0053_ip = 323; continue _fun0053;
case 321:
            if(var10) { _fun0053_ip = 324; continue _fun0053 }
case 325:
            if(!var8) { _fun0053_ip = 304; continue _fun0053 }
case 326:
            var3 = var9;
case 304:
            _fun0053_ip = 327; continue _fun0053;
case 324:
            if(!var8) { _fun0053_ip = 328; continue _fun0053 }
case 329:
            var4 = var7;
case 328:
            var3 = var4;
case 327:
            var2 = var3;
case 323:
            return var2;
case 320:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 22;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.l9uXLy;
            var1 = {};
            var1['decorationName'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useClaimedCollectibleRewardMessage'] = var5;
    var5 = function useLaunchInGameActivityQuest(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 12;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var5 = var7.useStateFromStores;
        var1 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getCurrentEmbeddedActivity;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var5.bind(var7)(var4, var1);
        var _closure2_slot1 = var7;
        var1 = {};
        var5 = _closure1_slot5;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var6 = var6.config;
        var6 = var6.application;
        var6 = var6.id;
        var3[1] = var6;
        var2 = function() {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var2 = _closure2_slot1;
                var4 = null;
                if(!(var4 != var2)) { _fun0054_ip = 184; continue _fun0054 }
case 294:
                var2 = _closure2_slot1;
                var3 = var2.applicationId;
                var2 = _closure2_slot0;
                var2 = var2.config;
                var2 = var2.application;
                var2 = var2.id;
                if(!(var3 !== var2)) { _fun0054_ip = 80; continue _fun0054 }
case 184:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 39;
                var5 = var5[var3];
                var3 = undefined;
                var5 = var6.bind(var3)(var5);
                var3 = var5.transitionTo;
                var7 = _closure1_slot19;
                var6 = var7.ACTIVITY_DETAILS;
                var2 = _closure2_slot0;
                var2 = var2.config;
                var2 = var2.application;
                var2 = var2.id;
                var2 = var6.bind(var7)(var2);
                var2 = var3.bind(var5)(var2);
                _fun0054_ip = 276; continue _fun0054;
case 80:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 38;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var5 = _closure2_slot1;
                var6 = var5.location;
                var5 = 'guild_id';
                var5 = var5 in var6;
                var4 = null;
                if(!var5) { _fun0054_ip = 330; continue _fun0054 }
case 191:
                var5 = _closure2_slot1;
                var5 = var5.location;
                var4 = var5.guild_id;
case 330:
                var1 = _closure2_slot1;
                var1 = var1.location;
                var1 = var2.bind(var3)(var4, var1);
case 276:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['launchInGameActivity'] = var2;
        return var1;
    };
    var3['useLaunchInGameActivityQuest'] = var5;
    var3['useIsPreviewerOnAnyQuest'] = var4;
    var4 = function() {
        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 40;
            var1 = var3[var1];
            var3 = undefined;
            var5 = var4.bind(var3)(var1);
            var4 = var5.isQuestPreviewTool2Enabled;
            var1 = {};
            var6 = _closure1_slot13;
            var6 = var6.QUEST_PREVIEW_TOOL_2;
            var1['location'] = var6;
            var1 = var4.bind(var5)(var1);
            var2 = _closure1_slot34;
            var2 = var2.bind(var3)();
            if(!var1) { _fun0055_ip = 331; continue _fun0055 }
case 108:
            var1 = var2;
case 331:
            return var1;
        }
    };
    var3['useShouldShowPreviewToolTab'] = var4;
    var4 = function(arg1) {
        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            var2 = var5 == var6;
            var7 = undefined;
            var1 = undefined;
            if(var2) { _fun0056_ip = 196; continue _fun0056 }
case 158:
            var1 = var6.userStatus;
case 196:
            var1 = var5 != var1;
            if(!var1) { _fun0056_ip = 266; continue _fun0056 }
case 332:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 18;
            var2 = var10[var2];
            var8 = var9.bind(var7)(var2);
            var4 = var8.isDismissed;
            var3 = var6.userStatus;
            var2 = 17;
            var2 = var10[var2];
            var2 = var9.bind(var7)(var2);
            var2 = var2.QuestContent;
            var2 = var2.ACTIVITY_PANEL;
            var1 = var4.bind(var8)(var3, var2);
case 266:
            var4 = _closure1_slot49;
            var8 = var5 != var6;
            var3 = null;
            if(!var8) { _fun0056_ip = 171; continue _fun0056 }
case 13:
            var3 = var6;
case 171:
            var4 = var4.bind(var7)(var3);
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0056_ip = 333; continue _fun0056 }
case 178:
            var6 = var6.userStatus;
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0056_ip = 333; continue _fun0056 }
case 172:
            var3 = var6.claimedAt;
case 333:
            var3 = var5 != var3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 12;
            var5 = var8[var5];
            var8 = var6.bind(var7)(var5);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot11;
            var6 = new Array(1);
            var6[0] = var2;
            var5 = function() {
                var1 = _closure1_slot11;
                var2 = var1.questEnrollmentBlockedUntil;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var8)(var6, var5, var2);
            if(var1) { _fun0056_ip = 61; continue _fun0056 }
case 45:
            var1 = var4;
case 61:
            if(var1) { _fun0056_ip = 239; continue _fun0056 }
case 60:
            var1 = var3;
case 239:
            if(var1) { _fun0056_ip = 273; continue _fun0056 }
case 334:
            var1 = var2;
case 273:
            var1 = !var1;
            return var1;
        }
    };
    var3['useShouldShowQuestsActivityPanelItem'] = var4;
    var4 = function() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStoresArray;
        var3 = _closure1_slot11;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot11;
            var2 = var1.quests;
            var1 = var2.values;
            var5 = var1.bind(var2)();
            var1 = new Array(0);
            var4 = 0;
            var6 = var1;
            var2 = arraySpread(var6, var5, var4);
            return var1;
        };
        var5 = var5.bind(var6)(var4, var3);
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.preview;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestsWithPreviewAccess'] = var4;
    var4 = function useQuestHomeFilterOptions() {
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = function() {
            var3 = _closure1_slot18;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var3 = var1;
                    var6 = undefined;
                    var3 = var3 === var6;
                    var5 = undefined;
                    if(var3) { _fun0057_ip = 103; continue _fun0057 }
case 104:
                    var5 = var2;
case 103:
                    var2 = undefined;
                    if(var3) { _fun0057_ip = 105; continue _fun0057 }
case 106:
                    var7 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0057_ip = 105; continue _fun0057 }
case 107:
                    var2 = var7;
                    var3 = var4;
case 105:
                    if(var3) { _fun0057_ip = 108; continue _fun0057 }
case 79:
                    var1.return();
case 108:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 18;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.getFilterGroupHeadingText;
                    var3 = var3.bind(var4)(var5);
                    var1['heading'] = var3;
                    var1['options'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useQuestHomeFilterOptions'] = var4;
    var4 = function useQuestHomeSortOptions() {
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = function() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot15;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = arg1;
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 18;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.getSortMethodText;
                var4 = _closure1_slot15;
                var4 = var4[var3];
                var4 = var5.bind(var6)(var4);
                var1['label'] = var4;
                var2 = _closure1_slot15;
                var2 = var2[var3];
                var1['value'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useQuestHomeSortOptions'] = var4;
    var2 = function useQuestHomeSortingFilteringAnalytics(arg1) {
        var2 = arg1;
        var3 = var2.selectedSortMethod;
        var _closure2_slot0 = var3;
        var6 = var2.selectedFilters;
        var _closure2_slot1 = var6;
        var5 = var2.numQuestsVisible;
        var _closure2_slot2 = var5;
        var7 = _closure1_slot5;
        var4 = var7.useRef;
        var8 = null;
        var4 = var4.bind(var7)(var8);
        var _closure2_slot3 = var4;
        var7 = _closure1_slot5;
        var4 = var7.useRef;
        var4 = var4.bind(var7)(var8);
        var _closure2_slot4 = var4;
        var8 = _closure1_slot5;
        var7 = var8.useEffect;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 41;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var6 = var7.track;
            var2 = _closure1_slot23;
            var5 = var2.QUEST_HOME_SORT_METHOD_CHANGED;
            var4 = {};
            var3 = _closure2_slot0;
            var4['sort_method'] = var3;
            var2 = _closure2_slot3;
            var8 = var2.current;
            var4['previous_sort_method'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            var2['current'] = var3;
            return var1;
        };
        var3 = var7.bind(var8)(var3, var4);
        var4 = _closure1_slot5;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                var4 = _closure2_slot1;
                var3 = var4.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.filter;
                    return var1;
                };
                var3 = var3.bind(var4)(var1);
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 41;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.track;
                var4 = _closure1_slot23;
                var5 = var4.QUEST_HOME_FILTERS_CHANGED;
                var4 = {};
                var4['filters'] = var3;
                var8 = _closure2_slot4;
                var8 = var8.current;
                var9 = null;
                if(!(var9 == var8)) { _fun0058_ip = 335; continue _fun0058 }
case 9:
                var8 = new Array(0);
case 335:
                var4['previous_filters'] = var8;
                var8 = _closure2_slot2;
                var4['num_quests_visible'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var2 = _closure2_slot4;
                var2['current'] = var3;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useQuestHomeSortingFilteringAnalytics'] = var2;
    return var1;
})();