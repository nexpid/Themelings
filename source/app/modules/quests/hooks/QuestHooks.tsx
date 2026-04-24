// app/modules/quests/hooks/QuestHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var23 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var24 = dependencyMap;
    var _closure1_slot0 = var23;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var24;
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
            var9 = _closure1_slot39;
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
            var7 = _closure1_slot39;
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
    var _closure1_slot38 = var1;
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
    var _closure1_slot39 = var1;
    var21 = function useQuests() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arguments[0];
            var11 = undefined;
            if(!(var9 === var11)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var9 = {'fetchPolicy': 'cache-only', 'callerSource': 'unknown'};
case 36:
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var11;
            var _closure2_slot2 = var11;
            var _closure2_slot3 = var11;
            var _closure2_slot4 = var11;
            var _closure2_slot5 = var11;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var2 = false;
            var4 = var3.bind(var4)(var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var4 = var3.bind(var11)(var4, var2);
            var2 = 0;
            var2 = var4[var2];
            _closure2_slot1 = var2;
            var3 = 1;
            var3 = var4[var3];
            _closure2_slot2 = var3;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 13;
            var4 = var12[var3];
            var10 = var8.bind(var11)(var4);
            var7 = var10.useStateFromStoresArray;
            var4 = _closure1_slot12;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot12;
                var2 = var1.quests;
                var1 = var2.values;
                var5 = var1.bind(var2)();
                var1 = new Array(0);
                var4 = 0;
                var6 = var1;
                var2 = arraySpread(var6, var5, var4);
                return var1;
            };
            var5 = var7.bind(var10)(var5, var4);
            var4 = var12[var3];
            var13 = var8.bind(var11)(var4);
            var10 = var13.useStateFromStoresArray;
            var4 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                var1 = _closure1_slot12;
                var2 = var1.excludedQuests;
                var1 = var2.values;
                var5 = var1.bind(var2)();
                var1 = new Array(0);
                var4 = 0;
                var6 = var1;
                var2 = arraySpread(var6, var5, var4);
                return var1;
            };
            var4 = var10.bind(var13)(var7, var4);
            var3 = var12[var3];
            var13 = var8.bind(var11)(var3);
            var10 = var13.useStateFromStoresObject;
            var3 = _closure1_slot12;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure1_slot12;
                var3 = var3.isFetchingCurrentQuests;
                var1['isFetchingCurrentQuests'] = var3;
                var2 = _closure1_slot12;
                var2 = var2.lastFetchedCurrentQuests;
                var1['lastFetchedCurrentQuests'] = var2;
                return var1;
            };
            var7 = var10.bind(var13)(var7, var3);
            var3 = var7.isFetchingCurrentQuests;
            _closure2_slot3 = var3;
            var10 = var7.lastFetchedCurrentQuests;
            _closure2_slot4 = var10;
            var7 = 14;
            var7 = var12[var7];
            var8 = var8.bind(var11)(var7);
            var7 = var8.getIsEligibleForQuests;
            var11 = var7.bind(var8)();
            _closure2_slot5 = var11;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var12 = var9.fetchPolicy;
            var6 = new Array(6);
            var6[0] = var12;
            var6[1] = var11;
            var6[2] = var2;
            var6[3] = var3;
            var6[4] = var10;
            var9 = var9.callerSource;
            var6[5] = var9;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.fetchPolicy;
                    var1 = 'cache-only';
                    if(!(var1 !== var3)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var1 = _closure2_slot0;
                    var3 = var1.fetchPolicy;
                    var1 = 'cache-and-network';
                    if(!(var1 !== var3)) { _fun0005_ip = 40; continue _fun0005 }
case 2:
                    var1 = _closure2_slot0;
                    var3 = var1.fetchPolicy;
                    var1 = 'cache-or-network';
                    if(!(var1 === var3)) { _fun0005_ip = 38; continue _fun0005 }
case 41:
                    var3 = _closure2_slot4;
                    var1 = 0;
                    if(!(var1 === var3)) { _fun0005_ip = 38; continue _fun0005 }
case 40:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0005_ip = 38; continue _fun0005 }
case 42:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 43:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 44:
                    var4 = _closure2_slot2;
                    var1 = undefined;
                    var3 = true;
                    var3 = var4.bind(var1)(var3);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 15;
                    var5 = var7[var3];
                    var8 = var6.bind(var1)(var5);
                    var5 = var8.fetchCurrentQuests;
                    var5 = var5.bind(var8)();
                    var5 = 16;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.isMac;
                    var5 = var5.bind(var6)();
                    if(!var5) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 17;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.getState;
                    var6 = var5.bind(var6)();
                    var5 = 'focused';
                    if(!(var5 === var6)) { _fun0005_ip = 47; continue _fun0005 }
case 45:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 18;
                    var5 = var7[var5];
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.getConfig;
                    var5 = {};
                    var8 = 'QuestHookUseQuests';
                    var5['location'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.enableNewRequestBehavior;
                    if(var5) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = var7[var3];
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.fetchQuestToDeliver;
                    var3 = 19;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.QuestPlacement;
                    var3 = var3.MOBILE_HOME_DOCK_AREA;
                    var2 = _closure2_slot0;
                    var7 = var2.callerSource;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'use_quests_';
                    var2 = var6.bind(var2)(var7);
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0005_ip = 38; continue _fun0005;
case 48:
                    return var1;
case 47:
                    return var1;
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
    var _closure1_slot40 = var21;
    var1 = function defaultSortFn(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            var13 = arg4;
            var5 = var4.id;
            var3 = _closure1_slot20;
            var3 = var5 === var3;
            var6 = var1.id;
            var5 = _closure1_slot20;
            var5 = var6 === var5;
            if(!var3) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var8 = var4.userStatus;
            var7 = null;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var6 = var8.completedAt;
case 52:
            var3 = var7 == var6;
case 50:
            if(!var5) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var8 = var1.userStatus;
            var7 = null;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var6 = var8.completedAt;
case 56:
            var5 = var7 == var6;
case 54:
            if(!(var3 === var5)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = 20;
            var5 = var5[var9];
            var6 = undefined;
            var7 = var7.bind(var6)(var5);
            var5 = var7.isQuestExpired;
            var5 = var5.bind(var7)(var4);
            var7 = !var5;
            var10 = var4.userStatus;
            var5 = null;
            var11 = var5 == var10;
            var8 = undefined;
            if(var11) { _fun0006_ip = 60; continue _fun0006 }
case 15:
            var8 = var10.claimedAt;
case 60:
            var16 = var5 != var8;
            var10 = var1.userStatus;
            var11 = var5 == var10;
            var8 = undefined;
            if(var11) { _fun0006_ip = 61; continue _fun0006 }
case 46:
            var8 = var10.claimedAt;
case 61:
            var12 = var5 != var8;
            var10 = var4.userStatus;
            var11 = var5 == var10;
            var8 = undefined;
            if(var11) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var8 = var10.enrolledAt;
case 62:
            var17 = var5 != var8;
            var10 = var1.userStatus;
            var11 = var5 == var10;
            var8 = undefined;
            if(var11) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var8 = var10.enrolledAt;
case 64:
            var10 = var5 != var8;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var19 = 21;
            var8 = var8[var19];
            var8 = var11.bind(var6)(var8);
            var8 = var8.QuestMobileHomeSuggestedSortRotationExperimentVariant;
            var8 = var8.RANK_DOWN_ALL_QUESTS_AFTER_30_MINUTES;
            if(!(var13 !== var8)) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 22;
            var8 = var14[var8];
            var8 = var11.bind(var6)(var8);
            var8 = var8.Millis;
            var8 = var8.MINUTE;
            var9 = var9 * var8;
            _fun0006_ip = 68; continue _fun0006;
case 66:
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 22;
            var8 = var14[var8];
            var8 = var11.bind(var6)(var8);
            var8 = var8.Millis;
            var11 = var8.MINUTE;
            var8 = 30;
            var9 = var8 * var11;
case 68:
            var8 = _closure1_slot37;
            var15 = var8.bind(var6)(var4, var9);
            var8 = _closure1_slot37;
            var18 = var8.bind(var6)(var1, var9);
            if(var7) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            if(!(var16 === var12)) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            if(!(var17 === var10)) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var11 = _closure1_slot50;
            var7 = var4.config;
            var9 = var7.expiresAt;
            var7 = var1.config;
            var8 = var7.expiresAt;
            var7 = _closure1_slot31;
            var7 = var7.DESC;
            var7 = var11.bind(var6)(var9, var8, var7);
            _fun0006_ip = 75; continue _fun0006;
case 73:
            var8 = 1;
            if(!var17) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var8 = _closure1_slot28;
case 76:
            var7 = var8;
case 75:
            _fun0006_ip = 78; continue _fun0006;
case 71:
            var8 = 1;
            if(!var16) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var8 = _closure1_slot28;
case 79:
            var7 = var8;
case 78:
            return var7;
case 69:
            var7 = arg3;
            var8 = var7.questHomeHero;
            var7 = var5 != var8;
            if(!var7) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 23;
            var9 = var14[var9];
            var14 = var11.bind(var6)(var9);
            var11 = var14.isQuestFeaturedByHero;
            var9 = var4.id;
            var7 = var11.bind(var14)(var8, var9);
case 81:
            var9 = var5 != var8;
            if(!var9) { _fun0006_ip = 83; continue _fun0006 }
case 84:
            var14 = _closure1_slot0;
            var20 = _closure1_slot2;
            var11 = 23;
            var11 = var20[var11];
            var20 = var14.bind(var6)(var11);
            var14 = var20.isQuestFeaturedByHero;
            var11 = var1.id;
            var9 = var14.bind(var20)(var8, var11);
case 83:
            if(var7) { _fun0006_ip = 85; continue _fun0006 }
case 86:
            if(var9) { _fun0006_ip = 85; continue _fun0006 }
case 87:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var19];
            var11 = var14.bind(var6)(var11);
            var11 = var11.QuestMobileHomeSuggestedSortRotationExperimentVariant;
            var11 = var11.RANK_BASED_ON_QUEST_TYPE;
            if(!(var13 === var11)) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var11 = 23;
            var13 = var21[var11];
            var20 = var19.bind(var6)(var13);
            var14 = var20.getQuestType;
            var13 = var4.config;
            var13 = var14.bind(var20)(var13);
            var11 = var21[var11];
            var20 = var19.bind(var6)(var11);
            var14 = var20.getQuestType;
            var11 = var1.config;
            var20 = var14.bind(var20)(var11);
            var14 = 24;
            var11 = var21[var14];
            var22 = var19.bind(var6)(var11);
            var11 = var22.hasWatchVideoOnMobileTasks;
            var11 = var11.bind(var22)(var4);
            var14 = var21[var14];
            var19 = var19.bind(var6)(var14);
            var14 = var19.hasWatchVideoOnMobileTasks;
            var14 = var14.bind(var19)(var1);
            if(!(var11 !== var14)) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            if(var11) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            if(var14) { _fun0006_ip = 92; continue _fun0006 }
case 90:
            if(!(var13 !== var20)) { _fun0006_ip = 88; continue _fun0006 }
case 94:
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var14 = 25;
            var19 = var19[var14];
            var19 = var21.bind(var6)(var19);
            var19 = var19.QuestType;
            var19 = var19.VIDEO;
            if(!(var13 !== var19)) { _fun0006_ip = 95; continue _fun0006 }
case 96:
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var14];
            var19 = var21.bind(var6)(var19);
            var19 = var19.QuestType;
            var19 = var19.VIDEO;
            if(!(var20 !== var19)) { _fun0006_ip = 95; continue _fun0006 }
case 88:
            if(!(var15 !== var18)) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            if(var15) { _fun0006_ip = 99; continue _fun0006 }
case 100:
            if(var18) { _fun0006_ip = 99; continue _fun0006 }
case 97:
            if(!(var16 === var12)) { _fun0006_ip = 101; continue _fun0006 }
case 102:
            if(!(var17 === var10)) { _fun0006_ip = 103; continue _fun0006 }
case 104:
            var19 = _closure1_slot50;
            var10 = var4.config;
            var18 = var10.expiresAt;
            var10 = var1.config;
            var12 = var10.expiresAt;
            var10 = _closure1_slot31;
            var10 = var10.ASC;
            var10 = var19.bind(var6)(var18, var12, var10);
            _fun0006_ip = 105; continue _fun0006;
case 103:
            var12 = 1;
            if(!var17) { _fun0006_ip = 106; continue _fun0006 }
case 107:
            var12 = _closure1_slot28;
case 106:
            var10 = var12;
case 105:
            _fun0006_ip = 108; continue _fun0006;
case 101:
            var12 = 1;
            if(var16) { _fun0006_ip = 109; continue _fun0006 }
case 110:
            var12 = _closure1_slot28;
case 109:
            var10 = var12;
case 108:
            _fun0006_ip = 111; continue _fun0006;
case 99:
            var12 = 1;
            if(var15) { _fun0006_ip = 112; continue _fun0006 }
case 113:
            var12 = _closure1_slot28;
case 112:
            var10 = var12;
case 111:
            return var10;
case 95:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var14];
            var10 = var12.bind(var6)(var10);
            var10 = var10.QuestType;
            var12 = var10.VIDEO;
            var10 = 1;
            if(!(var13 === var12)) { _fun0006_ip = 114; continue _fun0006 }
case 115:
            var10 = _closure1_slot28;
case 114:
            return var10;
case 92:
            var10 = 1;
            if(!var11) { _fun0006_ip = 116; continue _fun0006 }
case 117:
            var10 = _closure1_slot28;
case 116:
            return var10;
case 85:
            if(!var7) { _fun0006_ip = 118; continue _fun0006 }
case 119:
            if(!var9) { _fun0006_ip = 118; continue _fun0006 }
case 120:
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0006_ip = 121; continue _fun0006 }
case 122:
            var6 = var8.questIds;
case 121:
            if(!(var5 == var6)) { _fun0006_ip = 123; continue _fun0006 }
case 118:
            var5 = 1;
            if(!var7) { _fun0006_ip = 124; continue _fun0006 }
case 125:
            var5 = _closure1_slot28;
case 124:
            return var5;
case 123:
            var5 = var6.indexOf;
            var4 = var4.id;
            var4 = var5.bind(var6)(var4);
            var5 = var6.indexOf;
            var1 = var1.id;
            var1 = var5.bind(var6)(var1);
            var1 = var4 - var1;
            return var1;
case 58:
            var1 = 1;
            if(!var3) { _fun0006_ip = 126; continue _fun0006 }
case 127:
            var1 = _closure1_slot28;
case 126:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function recentSortFn(arg1, arg2) {
        var5 = _closure1_slot50;
        var2 = arg1;
        var2 = var2.config;
        var4 = var2.startsAt;
        var2 = arg2;
        var2 = var2.config;
        var3 = var2.startsAt;
        var1 = _closure1_slot31;
        var2 = var1.DESC;
        var1 = undefined;
        var1 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var _closure1_slot42 = var1;
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
            if(var5) { _fun0007_ip = 128; continue _fun0007 }
case 36:
            var8 = var2.enrolledAt;
case 128:
            var2 = var3.userStatus;
            var5 = var1 == var2;
            var7 = undefined;
            if(var5) { _fun0007_ip = 129; continue _fun0007 }
case 2:
            var7 = var2.enrolledAt;
case 129:
            if(!(var1 == var8)) { _fun0007_ip = 130; continue _fun0007 }
case 28:
            if(!(var1 != var7)) { _fun0007_ip = 131; continue _fun0007 }
case 130:
            if(!(var1 != var8)) { _fun0007_ip = 50; continue _fun0007 }
case 52:
            if(!(var1 != var7)) { _fun0007_ip = 132; continue _fun0007 }
case 50:
            if(!(var1 == var8)) { _fun0007_ip = 40; continue _fun0007 }
case 133:
            var2 = var1 != var7;
            var1 = 1;
            if(var2) { _fun0007_ip = 134; continue _fun0007 }
case 40:
            var5 = _closure1_slot50;
            var2 = _closure1_slot31;
            var2 = var2.DESC;
            var1 = var5.bind(var6)(var8, var7, var2);
case 134:
            _fun0007_ip = 135; continue _fun0007;
case 132:
            var1 = _closure1_slot28;
case 135:
            _fun0007_ip = 136; continue _fun0007;
case 131:
            var5 = _closure1_slot50;
            var4 = var4.config;
            var4 = var4.expiresAt;
            var3 = var3.config;
            var3 = var3.expiresAt;
            var2 = _closure1_slot31;
            var2 = var2.DESC;
            var1 = var5.bind(var6)(var4, var3, var2);
case 136:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function expiringSoonSortFn(arg1, arg2) {
        var5 = _closure1_slot50;
        var2 = arg1;
        var2 = var2.config;
        var4 = var2.expiresAt;
        var2 = arg2;
        var2 = var2.config;
        var3 = var2.expiresAt;
        var1 = _closure1_slot31;
        var2 = var1.ASC;
        var1 = undefined;
        var1 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var _closure1_slot44 = var1;
    var1 = function doesQuestPassTaskFilter(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var2 = _closure1_slot18;
            var2 = var2.VIDEO;
            if(!(var2 !== var4)) { _fun0008_ip = 137; continue _fun0008 }
case 39:
            var2 = _closure1_slot18;
            var2 = var2.PLAY;
            if(!(var2 !== var4)) { _fun0008_ip = 138; continue _fun0008 }
case 139:
            var2 = false;
            return var2;
case 138:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 24;
            var2 = var2[var7];
            var6 = undefined;
            var5 = var4.bind(var6)(var2);
            var4 = var5.hasPlayOnDesktopTask;
            var2 = {};
            var2['quest'] = var3;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0008_ip = 140; continue _fun0008 }
case 141:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var8 = var5.bind(var6)(var4);
            var5 = var8.hasStreamOnDesktopTask;
            var4 = {};
            var4['quest'] = var3;
            var2 = var5.bind(var8)(var4);
case 140:
            if(var2) { _fun0008_ip = 142; continue _fun0008 }
case 143:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var5 = var5.bind(var6)(var4);
            var4 = var5.hasPlayActivityTask;
            var2 = var4.bind(var5)(var3);
case 142:
            return var2;
case 137:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 24;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.hasWatchVideoTasks;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var1 = function doesQuestPassRewardFilter(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var3 = _closure1_slot19;
            var3 = var3.VIRTUAL_CURRENCY;
            if(!(var3 !== var4)) { _fun0009_ip = 144; continue _fun0009 }
case 39:
            var3 = _closure1_slot19;
            var3 = var3.COLLECTIBLE;
            if(!(var3 !== var4)) { _fun0009_ip = 145; continue _fun0009 }
case 139:
            var3 = _closure1_slot19;
            var3 = var3.IN_GAME;
            if(!(var3 !== var4)) { _fun0009_ip = 53; continue _fun0009 }
case 146:
            var3 = false;
            return var3;
case 53:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 26;
            var3 = var3[var7];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var4 = var5.hasInGameQuestReward;
            var3 = var1.config;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0009_ip = 147; continue _fun0009 }
case 148:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var6 = var5.bind(var6)(var4);
            var5 = var6.hasQuestRewardCode;
            var4 = var1.config;
            var3 = var5.bind(var6)(var4);
case 147:
            return var3;
case 145:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 26;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.hasCollectiblesQuestReward;
            var3 = var1.config;
            var3 = var4.bind(var5)(var3);
            return var3;
case 144:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 26;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.hasVirtualCurrencyReward;
            var1 = var1.config;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function doesQuestPassFilter(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg2;
            var4 = arg3;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = 'task';
            if(!(var1 !== var5)) { _fun0010_ip = 149; continue _fun0010 }
case 31:
            var3 = 'reward';
            var1 = undefined;
            if(!(var3 === var5)) { _fun0010_ip = 5; continue _fun0010 }
case 33:
            var1 = _closure1_slot46;
            _fun0010_ip = 5; continue _fun0010;
case 149:
            var1 = _closure1_slot45;
case 5:
            var _closure2_slot1 = var1;
            var3 = var4.length;
            var1 = 0;
            var1 = var1 === var3;
            if(var1) { _fun0010_ip = 150; continue _fun0010 }
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
case 150:
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function filterQuests(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var6 = arg2;
            var4 = var6.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0011_ip = 151; continue _fun0011 }
case 152:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 27;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.groupBy;
            var3 = 'group';
            var3 = var4.bind(var5)(var6, var3);
            var _closure2_slot0 = var3;
            var3 = var1.filter;
            var2 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.entries;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = var3.every;
                var1 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var6 = arg1;
                        var1 = var6[Symbol.iterator];
                        var6 = var1().next;
                        var3 = var6().value;
                        var2 = var1;
                        var5 = undefined;
                        var2 = var2 === var5;
                        var4 = undefined;
                        if(var2) { _fun0012_ip = 153; continue _fun0012 }
case 154:
                        var4 = var3;
case 153:
                        var3 = undefined;
                        if(var2) { _fun0012_ip = 155; continue _fun0012 }
case 156:
                        var7 = var6().value;
                        var6 = var1;
                        var6 = var6 === var5;
                        var3 = undefined;
                        var2 = var6;
                        if(var6) { _fun0012_ip = 155; continue _fun0012 }
case 157:
                        var3 = var7;
                        var2 = var6;
case 155:
                        if(var2) { _fun0012_ip = 158; continue _fun0012 }
case 130:
                        var1.return();
case 158:
                        var2 = _closure1_slot47;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var5)(var1, var4, var3);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            return var2;
case 151:
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var20 = function sortQuests(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arguments[1];
            var6 = arguments[2];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0013_ip = 159; continue _fun0013 }
case 32:
            var2 = _closure1_slot29;
case 159:
            if(!(var6 === var5)) { _fun0013_ip = 156; continue _fun0013 }
case 36:
            var6 = _closure1_slot30;
case 156:
            var8 = var2.sortMethod;
            var9 = var2.filters;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getQuestMobileHomeSuggestedSortRotationExperimentVariant;
            var2 = var2.bind(var3)();
            var3 = null;
            var3 = var3 != var2;
            var4 = undefined;
            if(!var3) { _fun0013_ip = 160; continue _fun0013 }
case 57:
            var4 = var2;
case 160:
            var3 = function filterQuestsForMobile(arg1, arg2, arg3) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var5 = arg1;
                    var10 = arg2;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var1 = var1.QuestMobileHomeSuggestedSortRotationExperimentVariant;
                    var2 = var1.REMOVE_NON_VIDEO_QUESTS;
                    var1 = arg3;
                    if(!(var1 !== var2)) { _fun0014_ip = 150; continue _fun0014 }
case 161:
                    var2 = null;
                    var1 = var5;
                    if(!(var2 != var10)) { _fun0014_ip = 151; continue _fun0014 }
case 162:
                    var3 = var10.length;
                    var2 = 0;
                    var1 = var5;
                    if(!(var2 !== var3)) { _fun0014_ip = 151; continue _fun0014 }
case 163:
                    var2 = _closure1_slot48;
                    var1 = var2.bind(var4)(var5, var10);
case 151:
                    _fun0014_ip = 164; continue _fun0014;
case 150:
                    var3 = _closure1_slot48;
                    var2 = null;
                    var6 = var2 == var10;
                    var7 = undefined;
                    if(var6) { _fun0014_ip = 165; continue _fun0014 }
case 148:
                    var9 = var10.filter;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.group;
                        var1 = 'task';
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var7 = var9.bind(var10)(var6);
case 165:
                    if(!(var2 == var7)) { _fun0014_ip = 166; continue _fun0014 }
case 167:
                    var7 = new Array(0);
case 166:
                    var2 = new Array(1);
                    var11 = 0;
                    var13 = var2;
                    var12 = var7;
                    var7 = arraySpread(var13, var12, var11);
                    var6 = {};
                    var9 = 'task';
                    var6['group'] = var9;
                    var8 = _closure1_slot18;
                    var8 = var8.VIDEO;
                    var6['filter'] = var8;
                    var2[6] = var6;
                    var6 = 1;
                    var6 = var7 + var6;
                    var1 = var3.bind(var4)(var5, var2);
case 164:
                    return var1;
                }
            };
            var2 = arg1;
            var3 = var3.bind(var5)(var2, var9, var4);
            var2 = _closure1_slot16;
            var2 = var2.MOST_RECENT;
            if(!(var2 !== var8)) { _fun0013_ip = 168; continue _fun0013 }
case 140:
            var2 = _closure1_slot16;
            var2 = var2.RECENTLY_ENROLLED;
            if(!(var2 !== var8)) { _fun0013_ip = 169; continue _fun0013 }
case 145:
            var2 = _closure1_slot16;
            var2 = var2.EXPIRING_SOON;
            if(!(var2 !== var8)) { _fun0013_ip = 170; continue _fun0013 }
case 171:
            var2 = _closure1_slot16;
            var2 = var2.SUGGESTED;
            var2 = _closure1_slot41;
            _fun0013_ip = 172; continue _fun0013;
case 170:
            var2 = _closure1_slot44;
            _fun0013_ip = 172; continue _fun0013;
case 169:
            var2 = _closure1_slot43;
            _fun0013_ip = 172; continue _fun0013;
case 168:
            var2 = _closure1_slot42;
case 172:
            var1 = function prioritizeLiveQuests(arg1, arg2, arg3) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var2 = arg3;
                var _closure3_slot2 = var2;
                var1 = function(arg1, arg2) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var8 = arg1;
                        var7 = arg2;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 20;
                        var4 = var5[var1];
                        var6 = undefined;
                        var9 = var2.bind(var6)(var4);
                        var4 = var9.isQuestExpired;
                        var4 = var4.bind(var9)(var8);
                        var4 = !var4;
                        var1 = var5[var1];
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.isQuestExpired;
                        var1 = var1.bind(var2)(var7);
                        var1 = !var1;
                        if(!(var4 === var1)) { _fun0015_ip = 173; continue _fun0015 }
case 133:
                        var5 = _closure3_slot0;
                        var11 = _closure3_slot1;
                        var10 = _closure3_slot2;
                        var14 = undefined;
                        var13 = var8;
                        var12 = var7;
                        var1 = var14[var5](var13, var12, var11, var10, var9);
                        _fun0015_ip = 174; continue _fun0015;
case 173:
                        var2 = 1;
                        if(!var4) { _fun0015_ip = 175; continue _fun0015 }
case 176:
                        var2 = _closure1_slot28;
case 175:
                        var1 = var2;
case 174:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var1.bind(var5)(var2, var6, var4);
            var1 = var3.sort;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var _closure1_slot49 = var20;
    var1 = function sortByDate(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot31;
            var5 = var2.DESC;
            var2 = 1;
            var3 = arg3;
            if(!(var3 === var5)) { _fun0016_ip = 3; continue _fun0016 }
case 39:
            var2 = _closure1_slot28;
case 3:
            var3 = var4.localeCompare;
            var1 = arg2;
            var1 = var3.bind(var4)(var1);
            var1 = var1 * var2;
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var1 = function useAllQuests(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var3 = function useSortMetadata() {
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 13;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot12;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getQuestHomeHero;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var6)(var4, var3);
            var _closure3_slot0 = var5;
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var1 = {};
                var2 = _closure3_slot0;
                var1['questHomeHero'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var2 = undefined;
        var5 = var3.bind(var2)();
        var _closure2_slot2 = var5;
        var8 = _closure1_slot5;
        var4 = var8.useRef;
        var3 = new Array(0);
        var3 = var4.bind(var8)(var3);
        var _closure2_slot3 = var3;
        var8 = _closure1_slot5;
        var4 = var8.useRef;
        var3 = var6.sortMethod;
        var3 = var4.bind(var8)(var3);
        var _closure2_slot4 = var3;
        var8 = _closure1_slot5;
        var4 = var8.useRef;
        var3 = var6.filters;
        var3 = var4.bind(var8)(var3);
        var _closure2_slot5 = var3;
        var8 = _closure1_slot5;
        var4 = var8.useRef;
        var3 = 0;
        var3 = var4.bind(var8)(var3);
        var _closure2_slot6 = var3;
        var4 = _closure1_slot5;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var5);
        var _closure2_slot7 = var3;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var2 = _closure2_slot0;
                var2 = var2.length;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0017_ip = 177; continue _fun0017 }
case 159:
                var2 = _closure2_slot3;
                var2 = var2.current;
                var2 = var2.length;
                if(!(var2 > var3)) { _fun0017_ip = 178; continue _fun0017 }
case 179:
                var2 = _closure2_slot6;
                var3 = var2.current;
                var2 = _closure2_slot0;
                var2 = var2.length;
                if(!(var3 === var2)) { _fun0017_ip = 178; continue _fun0017 }
case 7:
                var2 = _closure2_slot4;
                var3 = var2.current;
                var2 = _closure2_slot1;
                var2 = var2.sortMethod;
                if(!(var3 === var2)) { _fun0017_ip = 178; continue _fun0017 }
case 180:
                var2 = _closure2_slot5;
                var3 = var2.current;
                var2 = _closure2_slot1;
                var2 = var2.filters;
                if(!(var3 === var2)) { _fun0017_ip = 178; continue _fun0017 }
case 176:
                var2 = _closure2_slot7;
                var3 = var2.current;
                var2 = _closure2_slot2;
                if(!(var3 !== var2)) { _fun0017_ip = 181; continue _fun0017 }
case 178:
                var6 = _closure1_slot49;
                var3 = _closure2_slot0;
                var5 = _closure2_slot1;
                var4 = _closure2_slot2;
                var2 = undefined;
                var7 = var6.bind(var2)(var3, var5, var4);
                var6 = var7.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var2 = var6.bind(var7)(var2);
                var6 = _closure2_slot3;
                var6['current'] = var2;
                var7 = _closure2_slot4;
                var6 = var5.sortMethod;
                var7['current'] = var6;
                var6 = _closure2_slot5;
                var5 = var5.filters;
                var6['current'] = var5;
                var5 = _closure2_slot6;
                var3 = var3.length;
                var5['current'] = var3;
                var3 = _closure2_slot7;
                var3['current'] = var4;
                return var2;
case 181:
                var1 = _closure2_slot3;
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
    var _closure1_slot51 = var1;
    var17 = function useIsQuestExpired(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot12;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0018_ip = 182; continue _fun0018 }
case 183:
                var4 = _closure1_slot12;
                var3 = var4.isQuestExpired;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 182:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot52 = var17;
    var16 = function useIsQuestProgressingOnDesktop(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot12;
            var2 = var3.isProgressingOnDesktop;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot53 = var16;
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
            var1 = 24;
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
    var _closure1_slot54 = var15;
    var14 = function useIsQuestProgressingVideoQuest(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var5.bind(var3)(var4);
        var5 = var7.useStateFromStores;
        var3 = _closure1_slot12;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var4 = _closure1_slot12;
            var3 = var4.getOptimisticProgress;
            var2 = _closure2_slot0;
            var2 = var2.id;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 34;
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
            var1 = 35;
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
    var _closure1_slot55 = var14;
    var13 = function useIsQuestProgressing(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot53;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            var3 = _closure1_slot54;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot55;
            var2 = var2.bind(var4)(var5);
            if(var1) { _fun0019_ip = 51; continue _fun0019 }
case 184:
            var1 = var3;
case 51:
            if(var1) { _fun0019_ip = 185; continue _fun0019 }
case 138:
            var1 = var2;
case 185:
            return var1;
        }
    };
    var _closure1_slot56 = var13;
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
            var1 = 24;
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
    var _closure1_slot57 = var11;
    var10 = function useGetOrFetchApplicationForConsoleQuests(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot5;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = global;
                var2 = var1.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var13 = var3;
                var2 = new var13[var2](var12);
                var3 = var2 instanceof Object ? var2 : var3;
                var4 = _closure1_slot38;
                var2 = _closure2_slot0;
                var8 = undefined;
                var7 = var4.bind(var8)(var2);
                var4 = var7.bind(var8)();
                var2 = var4.done;
                var6 = 24;
                var5 = null;
                if(var2) { _fun0020_ip = 186; continue _fun0020 }
case 187:
                var11 = var4.value;
                var10 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var10 = var10.bind(var8)(var2);
                var2 = var10.getConsoleApplicationId;
                var10 = var2.bind(var10)(var11);
                if(!(var5 != var10)) { _fun0020_ip = 188; continue _fun0020 }
case 189:
                var2 = var3.add;
                var2 = var2.bind(var3)(var10);
case 188:
                var10 = var7.bind(var8)();
                var2 = var10.done;
                var4 = var10;
                if(!var2) { _fun0020_ip = 187; continue _fun0020 }
case 186:
                var2 = var1.Array;
                var1 = var2.from;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var3 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 37;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var _closure1_slot58 = var10;
    var9 = function useConnectedAccounts() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStoresObject;
        var3 = _closure1_slot8;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = {};
            var4 = _closure1_slot8;
            var3 = var4.isFetching;
            var3 = var3.bind(var4)();
            var1['fetching'] = var3;
            var3 = _closure1_slot8;
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
                var1 = _closure1_slot24;
                var1 = var1.XBOX;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var3)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot24;
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
    var _closure1_slot59 = var9;
    var6 = function useSelectedTaskPlatform(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 13;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var5 = var7.useStateFromStores;
        var1 = _closure1_slot12;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var3 = _closure1_slot12;
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
    var _closure1_slot60 = var6;
    var5 = function useTaskPlatformScreen(arg1, arg2) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var12 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var8;
            var3 = _closure1_slot60;
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
                var1 = 33;
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
            var5 = _closure1_slot13;
            var5 = var5.DESKTOP;
            var10 = var6.bind(var3)(var5);
            var _closure2_slot3 = var10;
            var6 = var3.includes;
            var5 = _closure1_slot13;
            var5 = var5.CONSOLE;
            var11 = var6.bind(var3)(var5);
            var _closure2_slot4 = var11;
            var5 = _closure1_slot53;
            var6 = var5.bind(var9)(var12);
            var5 = _closure1_slot54;
            var5 = var5.bind(var9)(var12);
            var13 = _closure1_slot5;
            var12 = var13.useMemo;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 45;
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
                var5 = 34;
                var2 = var8[var5];
                var2 = var7.bind(var6)(var2);
                var2 = var2.FirstPartyQuestTaskTypes;
                var2 = var2.PLAY_ON_DESKTOP;
                var3['taskType'] = var2;
                var2 = function() {
                    var1 = _closure1_slot13;
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
                    var1 = _closure1_slot13;
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
                    var1 = _closure1_slot13;
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
                    var1 = _closure1_slot13;
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
                    var1 = _closure1_slot13;
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
                    var1 = _closure1_slot13;
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
                    var1 = _closure1_slot13;
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
                    var1 = _closure1_slot13;
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
                    var1 = _closure1_slot13;
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
            if(var6) { _fun0021_ip = 190; continue _fun0021 }
case 191:
            var8 = null;
            if(!var5) { _fun0021_ip = 192; continue _fun0021 }
case 193:
            var5 = _closure1_slot13;
            var8 = var5.CONSOLE;
case 192:
            _fun0021_ip = 194; continue _fun0021;
case 190:
            var5 = _closure1_slot13;
            var8 = var5.DESKTOP;
case 194:
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
                var3 = 45;
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
                var3 = _closure1_slot13;
                var3 = var3.CONSOLE;
                var4['currentProgressingPlatform'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
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
                var3 = _closure1_slot13;
                var3 = var3.DESKTOP;
                var4['currentProgressingPlatform'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
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
                var4 = _closure1_slot13;
                var4 = var4.CONSOLE;
                var5['lastPlatformProgress'] = var4;
                var4 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
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
                var3 = _closure1_slot13;
                var3 = var3.DESKTOP;
                var4['lastPlatformProgress'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
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
                var3 = _closure1_slot13;
                var3 = var3.CONSOLE;
                var4['selectedPlatform'] = var3;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
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
                var2 = _closure1_slot13;
                var2 = var2.DESKTOP;
                var3['selectedPlatform'] = var2;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
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
                        if(!var2) { _fun0022_ip = 195; continue _fun0022 }
case 196:
                        var2 = _closure2_slot3;
                        if(var2) { _fun0022_ip = 55; continue _fun0022 }
case 195:
                        var1 = _closure2_slot4;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.TaskPlatformScreen;
                        if(var1) { _fun0022_ip = 158; continue _fun0022 }
case 4:
                        var1 = var2.DESKTOP;
                        _fun0022_ip = 41; continue _fun0022;
case 158:
                        var1 = var2.CONSOLE;
case 41:
                        _fun0022_ip = 132; continue _fun0022;
case 55:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.TaskPlatformScreen;
                        var1 = var2.SELECT;
case 132:
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
    var _closure1_slot61 = var5;
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var4);
    var28 = 0;
    var4 = var24[var28];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var27 = 1;
    var4 = var24[var27];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var26 = 2;
    var8 = var24[var26];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var25 = 3;
    var4 = var24[var25];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var22 = 4;
    var4 = var24[var22];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var24[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var24[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var24[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var24[var4];
    var4 = var23.bind(var1)(var4);
    var4 = var4.useConsoleQuestUIStore;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var24[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var24[var4];
    var4 = var23.bind(var1)(var4);
    var7 = var4.QuestTaskPlatform;
    var _closure1_slot13 = var7;
    var7 = var4.QuestsExperimentLocations;
    var _closure1_slot14 = var7;
    var7 = var4.MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES;
    var _closure1_slot15 = var7;
    var7 = var4.QuestHomeSortMethods;
    var _closure1_slot16 = var7;
    var7 = var4.SORTED_QUEST_HOME_FILTER_GROUPS;
    var _closure1_slot17 = var7;
    var7 = var4.TaskFilterTypes;
    var _closure1_slot18 = var7;
    var7 = var4.RewardFilterTypes;
    var _closure1_slot19 = var7;
    var7 = var4.MOBILE_ORBS_INTRO_QUEST_ID;
    var _closure1_slot20 = var7;
    var7 = var4.ORBS_INTRO_QUEST_ID;
    var _closure1_slot21 = var7;
    var4 = var4.QUEST_HOME_FILTER_GROUPS_WITHOUT_TASK;
    var _closure1_slot22 = var4;
    var4 = 11;
    var4 = var24[var4];
    var4 = var23.bind(var1)(var4);
    var7 = var4.HelpdeskArticles;
    var _closure1_slot23 = var7;
    var7 = var4.PlatformTypes;
    var _closure1_slot24 = var7;
    var7 = var4.ThemeTypes;
    var _closure1_slot25 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot26 = var4;
    var4 = 12;
    var4 = var24[var4];
    var4 = var23.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot27 = var4;
    var4 = -1;
    var _closure1_slot28 = var4;
    var4 = {};
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = null;
    var4['questHomeHero'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var4['DESC'] = var28;
    var7 = 'DESC';
    var4[var28] = var7;
    var4['ASC'] = var27;
    var7 = 'ASC';
    var4[var27] = var7;
    var _closure1_slot31 = var4;
    var19 = {};
    var4 = 'all';
    var19['ALL'] = var4;
    var4 = 'claimed';
    var19['CLAIMED'] = var4;
    var4 = 'preview_tool';
    var19['PREVIEW_TOOL'] = var4;
    var _closure1_slot32 = var19;
    var18 = {};
    var4 = 'tab';
    var18['TAB'] = var4;
    var4 = 'quest_id';
    var18['QUEST_ID'] = var4;
    var4 = 'sort';
    var18['SORT'] = var4;
    var4 = 'filter';
    var18['FILTER'] = var4;
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
            var1 = 24;
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
        var4 = _closure1_slot56;
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
                if(var7) { _fun0023_ip = 197; continue _fun0023 }
case 34:
                var3 = var5.enrolledAt;
case 197:
                if(!(var4 != var3)) { _fun0023_ip = 189; continue _fun0023 }
case 184:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var7 = var4 == var5;
                var3 = undefined;
                if(var7) { _fun0023_ip = 158; continue _fun0023 }
case 155:
                var3 = var5.completedAt;
case 158:
                if(!(var4 == var3)) { _fun0023_ip = 189; continue _fun0023 }
case 30:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var7 = var4 == var5;
                var3 = undefined;
                if(var7) { _fun0023_ip = 42; continue _fun0023 }
case 9:
                var3 = var5.claimedAt;
case 42:
                if(!(var4 == var3)) { _fun0023_ip = 189; continue _fun0023 }
case 11:
                var3 = _closure2_slot4;
                if(var3) { _fun0023_ip = 188; continue _fun0023 }
case 189:
                var2 = _closure2_slot3;
                var2 = var2.bind(var6)();
                return var6;
case 188:
                var2 = global;
                var5 = var2.window;
                var4 = var5.setInterval;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 22;
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
    var _closure1_slot33 = var12;
    var8 = function useWaitingForConsoleConnection(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var5 = var1.quest;
            var2 = _closure1_slot59;
            var6 = undefined;
            var2 = var2.bind(var6)();
            var3 = var2.xboxAndPlaystationAccounts;
            var2 = _closure1_slot56;
            var2 = var2.bind(var6)(var5);
            var4 = var3.length;
            var3 = 0;
            var3 = var3 === var4;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 24;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.isConsoleQuest;
            var1 = var1.bind(var4)(var5);
            if(!var1) { _fun0024_ip = 150; continue _fun0024 }
case 40:
            var1 = var3;
case 150:
            if(!var1) { _fun0024_ip = 160; continue _fun0024 }
case 57:
            var1 = !var2;
case 160:
            return var1;
        }
    };
    var _closure1_slot34 = var8;
    var7 = {};
    var7['UNACCEPTED'] = var28;
    var4 = 'UNACCEPTED';
    var7[var28] = var4;
    var7['ACCEPTED'] = var27;
    var4 = 'ACCEPTED';
    var7[var27] = var4;
    var7['IN_PROGRESS'] = var26;
    var4 = 'IN_PROGRESS';
    var7[var26] = var4;
    var7['COMPLETED'] = var25;
    var4 = 'COMPLETED';
    var7[var25] = var4;
    var7['CLAIMED'] = var22;
    var4 = 'CLAIMED';
    var7[var22] = var4;
    var _closure1_slot35 = var7;
    var4 = function useIsPreviewerOnAnyQuest() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot12;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot12;
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
    var _closure1_slot36 = var4;
    var22 = function hasEnrolledTimeLapsed(arg1, arg2) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var4 = arg1;
            var2 = var4.userStatus;
            var6 = null;
            var3 = var6 == var2;
            var1 = undefined;
            if(var3) { _fun0025_ip = 39; continue _fun0025 }
case 29:
            var1 = var2.completedAt;
case 39:
            var2 = var6 != var1;
            var3 = var4.userStatus;
            var7 = var6 == var3;
            var1 = undefined;
            if(var7) { _fun0025_ip = 157; continue _fun0025 }
case 198:
            var1 = var3.enrolledAt;
case 157:
            var1 = var6 != var1;
            if(!var1) { _fun0025_ip = 7; continue _fun0025 }
case 53:
            var1 = !var2;
case 7:
            if(!var1) { _fun0025_ip = 199; continue _fun0025 }
case 52:
            var2 = global;
            var7 = var2.Date;
            var3 = var7.now;
            var3 = var3.bind(var7)();
            var2 = var2.Date;
            var4 = var4.userStatus;
            var6 = var6 == var4;
            var5 = undefined;
            if(var6) { _fun0025_ip = 132; continue _fun0025 }
case 43:
            var5 = var4.enrolledAt;
case 132:
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var9 = var4;
            var8 = var5;
            var2 = new var9[var2](var8, var7);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.getTime;
            var2 = var2.bind(var4)();
            var3 = var3 - var2;
            var2 = arg2;
            var1 = var3 > var2;
case 199:
            return var1;
        }
    };
    var _closure1_slot37 = var22;
    var22 = 60;
    var22 = var24[var22];
    var24 = var23.bind(var1)(var22);
    var23 = var24.fileFinishedImporting;
    var22 = 'modules/quests/hooks/QuestHooks.tsx';
    var22 = var23.bind(var24)(var22);
    var3['useQuests'] = var21;
    var3['sortQuests'] = var20;
    var3['QuestTabs'] = var19;
    var3['QuestQueryParams'] = var18;
    var18 = function useFilteredQuests(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var7 = arguments[1];
            var10 = undefined;
            if(!(var7 === var10)) { _fun0026_ip = 200; continue _fun0026 }
case 37:
            var7 = _closure1_slot29;
case 200:
            var3 = _closure1_slot40;
            var2 = {'fetchPolicy': 'cache-and-network', 'callerSource': 'use_filtered_quests'};
            var2 = var3.bind(var10)(var2);
            var5 = var2.quests;
            var4 = var2.excludedQuests;
            var3 = var2.isFetchingCurrentQuests;
            var2 = var2.hasFetched;
            var6 = global;
            var11 = var6.Map;
            var9 = var5.map;
            var6 = function(arg1) {
                var2 = arg1;
                var3 = var2.id;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var13 = var9.bind(var5)(var6);
            var9 = var11.prototype;
            var9 = Object.create(var9, {constructor: {value: var11}});
            var14 = var9;
            var6 = new var14[var11](var13, var12);
            var9 = var6 instanceof Object ? var6 : var9;
            var6 = _closure1_slot51;
            var7 = var6.bind(var10)(var5, var7);
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
                        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                            var4 = arg1;
                            var5 = var4.userStatus;
                            var3 = null;
                            var6 = var3 == var5;
                            var1 = undefined;
                            if(var6) { _fun0027_ip = 39; continue _fun0027 }
case 29:
                            var1 = var5.completedAt;
case 39:
                            var1 = var3 != var1;
                            var4 = var4.userStatus;
                            var5 = var3 == var4;
                            var2 = undefined;
                            if(var5) { _fun0027_ip = 157; continue _fun0027 }
case 198:
                            var2 = var4.claimedAt;
case 157:
                            var2 = var3 != var2;
                            if(!var1) { _fun0027_ip = 7; continue _fun0027 }
case 53:
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
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                        var3 = _closure3_slot1;
                        var3 = var3.length;
                        var4 = 0;
                        if(!(var4 !== var3)) { _fun0028_ip = 166; continue _fun0028 }
case 29:
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var3 = var3.length;
                        if(!(var3 > var4)) { _fun0028_ip = 201; continue _fun0028 }
case 184:
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var4 = var3.length;
                        var3 = _closure3_slot1;
                        var3 = var3.length;
                        if(!(var4 !== var3)) { _fun0028_ip = 202; continue _fun0028 }
case 201:
                        var5 = _closure3_slot1;
                        var4 = var5.sort;
                        var3 = function(arg1, arg2) {
                            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                                var4 = arg1;
                                var2 = arg2;
                                var3 = var4.userStatus;
                                var5 = null;
                                var7 = var5 == var3;
                                var6 = undefined;
                                var1 = undefined;
                                if(var7) { _fun0029_ip = 128; continue _fun0029 }
case 36:
                                var1 = var3.claimedAt;
case 128:
                                var3 = var5 == var1;
                                var7 = var2.userStatus;
                                var8 = var5 == var7;
                                var1 = undefined;
                                if(var8) { _fun0029_ip = 28; continue _fun0029 }
case 161:
                                var1 = var7.claimedAt;
case 28:
                                var1 = var5 == var1;
                                if(!(var3 === var1)) { _fun0029_ip = 203; continue _fun0029 }
case 52:
                                var5 = _closure1_slot50;
                                var4 = var4.config;
                                var4 = var4.rewardsConfig;
                                var4 = var4.rewardsExpireAt;
                                var2 = var2.config;
                                var2 = var2.rewardsConfig;
                                var2 = var2.rewardsExpireAt;
                                var1 = _closure1_slot31;
                                var1 = var1.DESC;
                                var1 = var5.bind(var6)(var4, var2, var1);
                                _fun0029_ip = 204; continue _fun0029;
case 203:
                                var2 = 1;
                                if(!var3) { _fun0029_ip = 205; continue _fun0029 }
case 206:
                                var2 = _closure1_slot28;
case 205:
                                var1 = var2;
case 204:
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
case 202:
                        var1 = _closure3_slot2;
                        var1 = var1.current;
                        return var1;
case 166:
                        var1 = new Array(0);
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = var1.bind(var10)(var5);
            var5 = new Array(0);
            var6 = _closure1_slot38;
            var8 = _closure1_slot32;
            var11 = var8.ALL;
            var8 = arg1;
            if(!(var8 === var11)) { _fun0026_ip = 14; continue _fun0026 }
case 207:
            var1 = var7;
case 14:
            var8 = var6.bind(var10)(var1);
            var6 = var8.bind(var10)();
            var1 = var6.done;
            var7 = null;
            if(var1) { _fun0026_ip = 208; continue _fun0026 }
case 172:
            var11 = var6.value;
            var1 = var9.get;
            var11 = var1.bind(var9)(var11);
            if(!(var7 != var11)) { _fun0026_ip = 209; continue _fun0026 }
case 210:
            var1 = var5.push;
            var1 = var1.bind(var5)(var11);
case 209:
            var11 = var8.bind(var10)();
            var1 = var11.done;
            var6 = var11;
            if(!var1) { _fun0026_ip = 172; continue _fun0026 }
case 208:
            var1 = {};
            var1['quests'] = var5;
            var1['excludedQuests'] = var4;
            var1['isFetchingCurrentQuests'] = var3;
            var1['hasFetched'] = var2;
            return var1;
        }
    };
    var3['useFilteredQuests'] = var18;
    var18 = function useClaimedQuests() {
        var5 = _closure1_slot5;
        var3 = var5.useRef;
        var2 = false;
        var2 = var3.bind(var5)(var2);
        var _closure2_slot0 = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 13;
        var3 = var7[var2];
        var5 = undefined;
        var10 = var6.bind(var5)(var3);
        var9 = var10.useStateFromStoresArray;
        var3 = _closure1_slot12;
        var8 = new Array(1);
        var8[0] = var3;
        var3 = function() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = _closure1_slot12;
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
        var2 = _closure1_slot12;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() {
            var1 = _closure1_slot12;
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
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0030_ip = 152; continue _fun0030 }
case 196:
                var3 = _closure2_slot0;
                var2 = var3.current;
case 152:
                if(var2) { _fun0030_ip = 41; continue _fun0030 }
case 211:
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
    var3['useClaimedQuests'] = var18;
    var18 = function useExpiredQuestsMap() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot12;
            var1 = var2.getExpiredQuestsMap;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useExpiredQuestsMap'] = var18;
    var18 = function useEligibleForQuestOrbMultiplier() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot9;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 28;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.canUseQuestOrbMultiplier;
            var4 = _closure1_slot9;
            var1 = var4.getCurrentUser;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useEligibleForQuestOrbMultiplier'] = var18;
    var18 = function useShouldShowBonusOrbsUX(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot52;
        var5 = undefined;
        var7 = var3.bind(var5)(var6);
        var _closure2_slot1 = var7;
        var4 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 13;
        var3 = var8[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot9;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var6 = var6.config;
        var2[1] = var6;
        var1 = function() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 26;
                var1 = var7[var5];
                var8 = undefined;
                var10 = var6.bind(var8)(var1);
                var9 = var10.hasVirtualCurrencyReward;
                var2 = _closure2_slot0;
                var4 = var2.config;
                var4 = var9.bind(var10)(var4);
                var5 = var7[var5];
                var6 = var6.bind(var8)(var5);
                var5 = var6.hasPremiumOrbQuantity;
                var2 = var2.config;
                var2 = var5.bind(var6)(var2);
                var6 = _closure1_slot9;
                var5 = var6.getCurrentUser;
                var6 = var5.bind(var6)();
                var1 = _closure2_slot1;
                var1 = !var1;
                if(!var1) { _fun0031_ip = 173; continue _fun0031 }
case 54:
                var1 = var4;
case 173:
                if(!var1) { _fun0031_ip = 176; continue _fun0031 }
case 212:
                var1 = var2;
case 176:
                if(!var1) { _fun0031_ip = 63; continue _fun0031 }
case 13:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 28;
                var2 = var5[var2];
                var5 = var4.bind(var8)(var2);
                var4 = var5.isPremiumExactly;
                var2 = _closure1_slot27;
                var2 = var2.TIER_2;
                var2 = var4.bind(var5)(var6, var2);
                var2 = !var2;
                if(var2) { _fun0031_ip = 22; continue _fun0031 }
case 15:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 29;
                var4 = var9[var3];
                var5 = var7.bind(var8)(var4);
                var4 = var5.canUserUse;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                var3 = var3.QUEST_ORB_MULTIPLIER;
                var2 = var4.bind(var5)(var3, var6);
case 22:
                var1 = var2;
case 63:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useShouldShowBonusOrbsUX'] = var18;
    var18 = function useQuestOrbRewardMultiplier(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot12;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var4 = _closure1_slot12;
                var2 = var4.getQuest;
                var1 = _closure2_slot0;
                var2 = var2.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var2)) { _fun0032_ip = 213; continue _fun0032 }
case 197:
                var2 = var2.config;
                var2 = var2.rewardsConfig;
                var5 = var2.rewards;
                var4 = var5.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 30;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.QuestRewardTypes;
                    var1 = var1.VIRTUAL_CURRENCY;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var5 = var1 == var2;
                var6 = undefined;
                var4 = undefined;
                if(var5) { _fun0032_ip = 57; continue _fun0032 }
case 151:
                var4 = var2.type;
case 57:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 30;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.QuestRewardTypes;
                var3 = var3.VIRTUAL_CURRENCY;
                if(!(var4 === var3)) { _fun0032_ip = 214; continue _fun0032 }
case 178:
                var4 = var2.premiumOrbQuantity;
                var3 = var2.orbQuantity;
                var5 = var1 == var4;
                var2 = null;
                if(var5) { _fun0032_ip = 164; continue _fun0032 }
case 215:
                var5 = 0;
                var2 = null;
                if(!(var5 !== var3)) { _fun0032_ip = 164; continue _fun0032 }
case 142:
                var5 = global;
                var6 = var5.Math;
                var5 = var6.round;
                var3 = var4 / var3;
                var4 = 100;
                var3 = var3 * var4;
                var3 = var5.bind(var6)(var3);
                var2 = var3 / var4;
case 164:
                return var2;
case 214:
                return var1;
case 213:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useQuestOrbRewardMultiplier'] = var18;
    var3['useIsQuestExpired'] = var17;
    var17 = function useIsQuestEligibleForMembersListPopout(arg1, arg2, arg3) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 13;
            var4 = var11[var7];
            var6 = undefined;
            var12 = var10.bind(var6)(var4);
            var9 = var12.useStateFromStores;
            var4 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot1;
                    var1 = null;
                    var6 = var1 == var2;
                    var2 = undefined;
                    if(var6) { _fun0034_ip = 179; continue _fun0034 }
case 3:
                    var5 = _closure2_slot1;
                    var2 = var5.channelId;
case 179:
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0034_ip = 28; continue _fun0034 }
case 216:
                    var1 = var2;
case 28:
                    return var1;
                }
            };
            var4 = var9.bind(var12)(var8, var4);
            var8 = var11[var7];
            var14 = var10.bind(var6)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot12;
            var12 = new Array(1);
            var12[0] = var8;
            var9 = function() {
                var1 = _closure1_slot12;
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
            var8 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0035_ip = 156; continue _fun0035 }
case 153:
                    var1 = var2.id;
case 156:
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var12, var8);
            var7 = var11[var7];
            var12 = var10.bind(var6)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot12;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = new Array(1);
            var7[0] = var1;
            var3 = function() {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0036_ip = 182; continue _fun0036 }
case 183:
                    var4 = _closure1_slot12;
                    var3 = var4.isQuestExpired;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 182:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var10, var3, var7);
            var3 = null;
            if(!(var3 != var1)) { _fun0033_ip = 25; continue _fun0033 }
case 63:
            if(var9) { _fun0033_ip = 25; continue _fun0033 }
case 209:
            if(var7) { _fun0033_ip = 25; continue _fun0033 }
case 62:
            var7 = arg3;
            if(!(var8 !== var7)) { _fun0033_ip = 25; continue _fun0033 }
case 217:
            var7 = var1.userStatus;
            var8 = var3 == var7;
            var1 = undefined;
            if(var8) { _fun0033_ip = 218; continue _fun0033 }
case 219:
            var1 = var7.claimedAt;
case 218:
            var1 = var3 != var1;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 23;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.isStreamingAndCanWatch;
            var2 = var2.bind(var3)(var5, var4);
            if(!var1) { _fun0033_ip = 220; continue _fun0033 }
case 221:
            var1 = !var2;
case 220:
            var1 = !var1;
            return var1;
case 25:
            var1 = false;
            return var1;
        }
    };
    var3['useIsQuestEligibleForMembersListPopout'] = var17;
    var17 = function useQuestFormattedDate(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var7 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var7;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0037_ip = 156; continue _fun0037 }
case 200:
            var2 = {};
            var3 = 'short';
            var2['dateStyle'] = var3;
            var6 = var2;
case 156:
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var8 = var4.bind(var5)(var3);
            var5 = var8.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
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
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = '';
                    if(var3) { _fun0038_ip = 133; continue _fun0038 }
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
case 133:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useQuestFormattedDate'] = var17;
    var17 = function useOnOpenGameClick(arg1) {
        var2 = arg1;
        var9 = var2.quest;
        var _closure2_slot0 = var9;
        var8 = var2.content;
        var _closure2_slot1 = var8;
        var7 = var2.ctaContent;
        var _closure2_slot2 = var7;
        var5 = var2.sourceQuestContent;
        var _closure2_slot3 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 31;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var6.bind(var3)(var4);
        var3 = var4.useQuestImpressionId;
        var6 = var3.bind(var4)();
        var _closure2_slot4 = var6;
        var4 = _closure1_slot5;
        var3 = var4.useCallback;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = _closure1_slot21;
                if(!(var3 === var2)) { _fun0039_ip = 141; continue _fun0039 }
case 31:
                var2 = global;
                var4 = var2.window;
                var3 = var4.open;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 32;
                var6 = var6[var2];
                var2 = undefined;
                var7 = var7.bind(var2)(var6);
                var6 = var7.getArticleURL;
                var2 = _closure1_slot23;
                var2 = var2.VIRTUAL_CURRENCY_LEARN_MORE;
                var2 = var6.bind(var7)(var2);
                var2 = var3.bind(var4)(var2);
                _fun0039_ip = 222; continue _fun0039;
case 141:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openGameLinkDirectly;
                var2 = _closure2_slot0;
                var1 = {};
                var6 = _closure2_slot1;
                var1['content'] = var6;
                var6 = _closure2_slot2;
                var1['ctaContent'] = var6;
                var6 = _closure2_slot4;
                var1['impressionId'] = var6;
                var5 = _closure2_slot3;
                var1['sourceQuestContent'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 222:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnOpenGameClick'] = var17;
    var3['useIsQuestProgressingOnDesktop'] = var16;
    var3['useIsQuestProgressingOnConsole'] = var15;
    var3['useIsQuestProgressingVideoQuest'] = var14;
    var3['useIsQuestProgressing'] = var13;
    var3['useQuestTaskDetails'] = var12;
    var3['useThirdPartyTaskDetails'] = var11;
    var11 = function(arg1) {
        var2 = arg1;
        var4 = var2.quest;
        var _closure2_slot0 = var4;
        var3 = var2.questContent;
        var _closure2_slot1 = var3;
        var2 = var2.sourceQuestContent;
        var _closure2_slot2 = var2;
        var5 = _closure1_slot34;
        var3 = {};
        var3['quest'] = var4;
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var _closure2_slot3 = var3;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 31;
        var2 = var5[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useQuestImpression;
        var2 = var2.bind(var3)();
        var _closure2_slot4 = var2;
        var1 = function() {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var2 = _closure2_slot3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 33;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var3);
                if(var2) { _fun0040_ip = 204; continue _fun0040 }
case 223:
                var4 = var5.openConsoleConnectionSettings;
                var3 = {};
                var2 = _closure2_slot0;
                var3['quest'] = var2;
                var2 = {};
                var7 = _closure2_slot1;
                var2['content'] = var7;
                var7 = 36;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.VIEW_CONSOLE_CONNECTIONS_LINK;
                var2['ctaContent'] = var7;
                var10 = _closure2_slot4;
                var7 = null;
                var10 = var7 == var10;
                var7 = undefined;
                if(var10) { _fun0040_ip = 224; continue _fun0040 }
case 134:
                var11 = _closure2_slot4;
                var10 = var11.getId;
                var7 = var10.bind(var11)();
case 224:
                var2['impressionId'] = var7;
                var7 = _closure2_slot2;
                var2['sourceQuestContent'] = var7;
                var2 = var4.bind(var5)(var3, var2);
                _fun0040_ip = 23; continue _fun0040;
case 204:
                var4 = var5.openAddConsoleConnectionModal;
                var3 = {};
                var2 = _closure2_slot0;
                var3['quest'] = var2;
                var2 = {};
                var7 = _closure2_slot1;
                var2['content'] = var7;
                var7 = 36;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.CONNECT_CONSOLE_LINK;
                var2['ctaContent'] = var7;
                var8 = _closure2_slot4;
                var7 = null;
                var8 = var7 == var8;
                var7 = undefined;
                if(var8) { _fun0040_ip = 225; continue _fun0040 }
case 192:
                var9 = _closure2_slot4;
                var8 = var9.getId;
                var7 = var8.bind(var9)();
case 225:
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
    var3['useConnectedConsoleLinkOnClick'] = var11;
    var3['useGetOrFetchApplicationForConsoleQuests'] = var10;
    var10 = function useQuestForMemberListSocialEntryPoint(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 13;
            var4 = var4[var3];
            var3 = undefined;
            var7 = var5.bind(var3)(var4);
            var6 = var7.useStateFromStores;
            var4 = _closure1_slot12;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = _closure1_slot12;
                var1 = var1.quests;
                return var1;
            };
            var8 = var6.bind(var7)(var5, var4);
            var _closure2_slot1 = var8;
            var5 = _closure1_slot58;
            var4 = global;
            var7 = var4.Array;
            var6 = var7.from;
            var4 = var8.values;
            var4 = var4.bind(var8)();
            var4 = var6.bind(var7)(var4);
            var7 = var5.bind(var3)(var4);
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var4 = new Array(3);
            var4[0] = var9;
            var4[1] = var8;
            var4[2] = var7;
            var2 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 23;
                var1 = var6[var1];
                var3 = undefined;
                var8 = var5.bind(var3)(var1);
                var7 = var8.filterQuestsForSocialEntrypoints;
                var4 = _closure2_slot1;
                var2 = _closure1_slot15;
                var4 = var7.bind(var8)(var4, var2);
                var2 = 38;
                var2 = var6[var2];
                var3 = var5.bind(var3)(var2);
                var2 = var3.getQuestsFromActivities;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            };
            var2 = var5.bind(var6)(var2, var4);
            var1 = _closure1_slot52;
            var3 = var1.bind(var3)(var2);
            var1 = null;
            if(var3) { _fun0041_ip = 226; continue _fun0041 }
case 227:
            var1 = var2;
case 226:
            return var1;
        }
    };
    var3['useQuestForMemberListSocialEntryPoint'] = var10;
    var10 = function useQuestCollectibles(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var7 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 26;
            var1 = var5[var1];
            var6 = undefined;
            var2 = var4.bind(var6)(var1);
            var1 = var2.hasCollectiblesQuestReward;
            var3 = var1.bind(var2)(var7);
            var1 = 39;
            var1 = var5[var1];
            var2 = var4.bind(var6)(var1);
            var1 = var2.getDefaultReward;
            var1 = var1.bind(var2)(var7);
            var2 = 40;
            var2 = var5[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.useFetchCollectiblesProduct;
            var1 = var1.skuId;
            var1 = var2.bind(var4)(var1);
            var5 = var1.product;
            var2 = var1.isFetching;
            var1 = {};
            var1['hasQuestCollectibles'] = var3;
            var4 = null;
            var7 = var4 == var5;
            var3 = undefined;
            if(var7) { _fun0042_ip = 228; continue _fun0042 }
case 140:
            var5 = var5.items;
            var4 = var4 == var5;
            var3 = undefined;
            if(var4) { _fun0042_ip = 228; continue _fun0042 }
case 229:
            var4 = 0;
            var3 = var5[var4];
case 228:
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
            var3 = function handleOverrideDeliveryClick() {
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
            var1['handleOverrideDeliveryClick'] = var3;
            var2 = function handleResetHasBeenSeenClick() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var2 = undefined;
                var4 = var5.bind(var2)(var1);
                var3 = var4.markAdContentUnseen;
                var1 = 41;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.AdCreativeType;
                var2 = var1.QUEST;
                var5 = _closure2_slot0;
                var1 = new Array(1);
                var1[0] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1['handleResetHasBeenSeenClick'] = var2;
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
        var1 = 13;
        var1 = var7[var1];
        var13 = var6.bind(var12)(var1);
        var7 = var13.useStateFromStores;
        var1 = _closure1_slot8;
        var6 = new Array(1);
        var6[0] = var1;
        var1 = function() {
            var2 = _closure1_slot8;
            var1 = var2.getAccounts;
            var1 = var1.bind(var2)();
            return var1;
        };
        var14 = var7.bind(var13)(var6, var1);
        var6 = _closure1_slot11;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.clearErrorHintsByType;
            return var1;
        };
        var1 = var6.bind(var12)(var1);
        var _closure2_slot7 = var1;
        var13 = _closure1_slot5;
        var7 = var13.useEffect;
        var6 = new Array(3);
        var6[0] = var14;
        var6[1] = var1;
        var6[2] = var8;
        var1 = function() {
            var4 = _closure2_slot4;
            var1 = undefined;
            var3 = function(arg1) {
                var3 = arg1;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 42;
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
            var3 = var4.bind(var1)(var3);
            var4 = _closure2_slot7;
            var3 = _closure2_slot0;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 42;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.QuestConsoleStartError;
            var2 = var2.EXPIRED_CREDENTIAL;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var7.bind(var13)(var1, var6);
        var1 = {};
        var7 = _closure1_slot5;
        var6 = var7.useCallback;
        var5 = _closure1_slot3;
        var4 = function* () {
            var1 = function* anon_0_() {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0043_ip = 230; continue _fun0043 }
case 196:
                    var2 = undefined;
                    var4 = undefined;
                    var6 = undefined;
                    var8 = undefined;
                    var3 = _closure2_slot5;
                    if(var3) { _fun0043_ip = 231; continue _fun0043 }
case 128:
                    var3 = _closure2_slot2;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0043_ip = 5; continue _fun0043 }
case 51:
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var2)();
case 5:
                    var9 = _closure2_slot6;
                    var3 = true;
                    var3 = var9.bind(var2)(var3);
                    var4 = null;
case 232: // try_start_0
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
case 176:
                    return var3;
case 233:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0043_ip = 234; continue _fun0043 }
case 135:
                    var4 = var3;
                    var10 = _closure2_slot4;
                    var9 = var3.errorHints;
                    var9 = var10.bind(var2)(var9);
case 235: // try_end0
                    var10 = _closure2_slot6;
                    var9 = false;
                    var9 = var10.bind(var2)(var9);
                    var9 = _closure2_slot3;
                    if(!(var7 != var9)) { _fun0043_ip = 231; continue _fun0043 }
case 137:
                    var10 = _closure2_slot3;
                    var9 = var4;
                    var8 = var9;
                    var11 = var7 == var9;
                    var9 = undefined;
                    if(var11) { _fun0043_ip = 46; continue _fun0043 }
case 236:
                    var11 = var8;
                    var9 = var11.errorHints;
case 46:
                    var6 = var9;
                    if(!(var7 == var9)) { _fun0043_ip = 237; continue _fun0043 }
case 213:
                    var9 = new Array(0);
                    _fun0043_ip = 238; continue _fun0043;
case 237:
                    var9 = var6;
case 238:
                    var9 = var10.bind(var2)(var9);
                    _fun0043_ip = 231; continue _fun0043;
case 234:
                    var10 = _closure2_slot6;
                    var9 = false;
                    var9 = var10.bind(var2)(var9);
                    var9 = _closure2_slot3;
                    if(!(var7 != var9)) { _fun0043_ip = 239; continue _fun0043 }
case 240:
                    var10 = _closure2_slot3;
                    var9 = var4;
                    var8 = var9;
                    var11 = var7 == var9;
                    var9 = undefined;
                    if(var11) { _fun0043_ip = 241; continue _fun0043 }
case 23:
                    var11 = var8;
                    var9 = var11.errorHints;
case 241:
                    var6 = var9;
                    if(!(var7 == var9)) { _fun0043_ip = 242; continue _fun0043 }
case 243:
                    var9 = new Array(0);
                    _fun0043_ip = 244; continue _fun0043;
case 242:
                    var9 = var6;
case 244:
                    var9 = var10.bind(var2)(var9);
case 239:
                    return var3;
case 245: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var10 = _closure2_slot6;
                    var9 = false;
                    var9 = var10.bind(var2)(var9);
                    var9 = _closure2_slot3;
                    if(!(var7 != var9)) { _fun0043_ip = 246; continue _fun0043 }
case 247:
                    var5 = _closure2_slot3;
                    var8 = var4;
                    var9 = var7 == var4;
                    var4 = undefined;
                    if(var9) { _fun0043_ip = 8; continue _fun0043 }
case 66:
                    var4 = var8.errorHints;
case 8:
                    var6 = var4;
                    if(!(var7 == var4)) { _fun0043_ip = 248; continue _fun0043 }
case 26:
                    var4 = new Array(0);
                    _fun0043_ip = 249; continue _fun0043;
case 248:
                    var4 = var6;
case 249:
                    var4 = var5.bind(var2)(var4);
case 246:
                    throw var3;
case 231:
                    return var2;
case 230:
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
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var2 = _closure1_slot59;
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
            var4 = 32;
            var2 = var11[var4];
            var9 = var5.bind(var10)(var2);
            var7 = var9.getArticleURL;
            var3 = _closure1_slot23;
            var2 = var3.QUEST_HOW_TO_PLAYSTATION;
            var2 = var7.bind(var9)(var2);
            var4 = var11[var4];
            var5 = var5.bind(var10)(var4);
            var4 = var5.getArticleURL;
            var3 = var3.QUEST_HOW_TO_XBOX;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var1 = 43;
            var5 = var11[var1];
            var5 = var4.bind(var10)(var5);
            var12 = var5.intl;
            var9 = var12.format;
            var5 = var11[var1];
            var5 = var4.bind(var10)(var5);
            var5 = var5.t;
            var7 = var5.beN4DG;
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
            var4 = var1.HVS7nh;
            var1 = {};
            var10 = var3;
            if(!var6) { _fun0044_ip = 21; continue _fun0044 }
case 250:
            var10 = var2;
case 21:
            var1['helpdeskArticle'] = var10;
            var5 = var5.bind(var9)(var4, var1);
            var1 = {};
            if(!var8) { _fun0044_ip = 251; continue _fun0044 }
case 252:
            if(!var6) { _fun0044_ip = 24; continue _fun0044 }
case 251:
            var4 = var7;
            if(var8) { _fun0044_ip = 253; continue _fun0044 }
case 254:
            var4 = var7;
            if(!var6) { _fun0044_ip = 253; continue _fun0044 }
case 24:
            var4 = var5;
case 253:
            var1['message'] = var4;
            var1['xboxURL'] = var3;
            var1['playstationURL'] = var2;
            return var1;
        }
    };
    var3['useQuestHowToHelpArticle'] = var8;
    var3['QuestProgressState'] = var7;
    var7 = function useProgressState(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var7 = arg1;
            var2 = var7.userStatus;
            var3 = null;
            var4 = var3 == var2;
            var6 = undefined;
            var1 = undefined;
            if(var4) { _fun0045_ip = 34; continue _fun0045 }
case 211:
            var1 = var2.enrolledAt;
case 34:
            var1 = var3 != var1;
            var4 = var7.userStatus;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0045_ip = 216; continue _fun0045 }
case 185:
            var2 = var4.completedAt;
case 216:
            var4 = var3 != var2;
            var5 = var7.userStatus;
            var8 = var3 == var5;
            var2 = undefined;
            if(var8) { _fun0045_ip = 255; continue _fun0045 }
case 133:
            var2 = var5.claimedAt;
case 255:
            var5 = var3 != var2;
            var3 = _closure1_slot33;
            var3 = var3.bind(var6)(var7);
            var6 = var3.percentComplete;
            var3 = 0;
            var3 = var6 > var3;
            if(var5) { _fun0045_ip = 136; continue _fun0045 }
case 233:
            if(var4) { _fun0045_ip = 142; continue _fun0045 }
case 44:
            if(!var3) { _fun0045_ip = 256; continue _fun0045 }
case 135:
            if(var1) { _fun0045_ip = 257; continue _fun0045 }
case 256:
            var3 = _closure1_slot35;
            if(var1) { _fun0045_ip = 235; continue _fun0045 }
case 143:
            var1 = var3.UNACCEPTED;
            _fun0045_ip = 205; continue _fun0045;
case 235:
            var1 = var3.ACCEPTED;
case 205:
            _fun0045_ip = 258; continue _fun0045;
case 257:
            var3 = _closure1_slot35;
            var1 = var3.IN_PROGRESS;
case 258:
            _fun0045_ip = 14; continue _fun0045;
case 142:
            var3 = _closure1_slot35;
            var1 = var3.COMPLETED;
case 14:
            _fun0045_ip = 259; continue _fun0045;
case 136:
            var2 = _closure1_slot35;
            var1 = var2.CLAIMED;
case 259:
            return var1;
        }
    };
    var3['useProgressState'] = var7;
    var7 = function useQuestCompletionDetails(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var2 = arg1;
            var8 = arguments[1];
            var5 = undefined;
            if(!(var8 === var5)) { _fun0046_ip = 32; continue _fun0046 }
case 260:
            var8 = false;
case 32:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var7 = var6.bind(var7)(var4, var1);
            var1 = _closure1_slot33;
            var1 = var1.bind(var5)(var2);
            var6 = var1.percentComplete;
            var1 = _closure1_slot57;
            var2 = var1.bind(var5)(var2);
            var4 = null;
            if(!(var4 != var2)) { _fun0046_ip = 59; continue _fun0046 }
case 261:
            var6 = var2.percentComplete;
case 59:
            var1 = {};
            var1['completedRatio'] = var6;
            var9 = 100;
            var9 = var9 * var6;
            var1['percentComplete'] = var9;
            if(!(var4 != var2)) { _fun0046_ip = 262; continue _fun0046 }
case 186:
            if(var8) { _fun0046_ip = 262; continue _fun0046 }
case 263:
            var8 = var4 == var2;
            var10 = undefined;
            if(var8) { _fun0046_ip = 264; continue _fun0046 }
case 265:
            var10 = var2.progress;
case 264:
            var4 = var4 == var2;
            var9 = undefined;
            if(var4) { _fun0046_ip = 266; continue _fun0046 }
case 137:
            var9 = var2.target;
case 266:
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var4 = '';
            var2 = '/';
            var2 = var8.bind(var4)(var10, var2, var9);
            _fun0046_ip = 267; continue _fun0046;
case 262:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 44;
            var3 = var8[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.formatPercent;
            var3 = {};
            var8 = 'floor';
            var3['roundingMode'] = var8;
            var2 = var4.bind(var5)(var7, var6, var3);
case 267:
            var1['completedRatioDisplay'] = var2;
            return var1;
        }
    };
    var3['useQuestCompletionDetails'] = var7;
    var3['useSelectedTaskPlatform'] = var6;
    var3['useTaskPlatformScreen'] = var5;
    var5 = function useQuestWarningTips(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var8 = arg1;
            var1 = _closure1_slot57;
            var7 = undefined;
            var11 = var1.bind(var7)(var8);
            var1 = _closure1_slot33;
            var6 = var1.bind(var7)(var8);
            var1 = _closure1_slot61;
            var4 = var1.bind(var7)(var8, var6);
            var3 = _closure1_slot4;
            var1 = 1;
            var1 = var3.bind(var7)(var4, var1);
            var14 = 0;
            var9 = var1[var14];
            var1 = _closure1_slot52;
            var12 = var1.bind(var7)(var8);
            var3 = var8.userStatus;
            var4 = null;
            var5 = var4 == var3;
            var1 = undefined;
            if(var5) { _fun0047_ip = 141; continue _fun0047 }
case 268:
            var1 = var3.enrolledAt;
case 141:
            var5 = var4 != var1;
            var3 = var8.userStatus;
            var10 = var4 == var3;
            var1 = undefined;
            if(var10) { _fun0047_ip = 44; continue _fun0047 }
case 134:
            var1 = var3.completedAt;
case 44:
            var13 = var4 != var1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 34;
            var1 = var1[var10];
            var1 = var3.bind(var7)(var1);
            var1 = var1.FirstPartyQuestTaskTypesSets;
            var15 = var1.DESKTOP;
            var3 = var15.has;
            var1 = var6.taskType;
            var1 = var3.bind(var15)(var1);
            if(!var1) { _fun0047_ip = 144; continue _fun0047 }
case 269:
            var3 = var6.percentComplete;
            var1 = var3 > var14;
case 144:
            var3 = var6.percentComplete;
            var3 = var14 === var3;
            if(!var5) { _fun0047_ip = 270; continue _fun0047 }
case 213:
            var5 = !var13;
case 270:
            if(!var5) { _fun0047_ip = 238; continue _fun0047 }
case 237:
            var5 = !var12;
case 238:
            if(!var5) { _fun0047_ip = 271; continue _fun0047 }
case 272:
            var5 = var4 == var11;
case 271:
            if(!var5) { _fun0047_ip = 273; continue _fun0047 }
case 234:
            if(var1) { _fun0047_ip = 274; continue _fun0047 }
case 275:
            if(!var3) { _fun0047_ip = 177; continue _fun0047 }
case 190:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 19;
            var4 = var12[var4];
            var4 = var11.bind(var7)(var4);
            var4 = var4.TaskPlatformScreen;
            var4 = var4.DESKTOP;
            var3 = var9 === var4;
case 177:
            var1 = var3;
case 274:
            var5 = var1;
case 273:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 16;
            var1 = var1[var9];
            var3 = var3.bind(var7)(var1);
            var1 = var3.isWeb;
            var3 = var1.bind(var3)();
            if(!var3) { _fun0047_ip = 276; continue _fun0047 }
case 277:
            var3 = var5;
case 276:
            if(!var3) { _fun0047_ip = 26; continue _fun0047 }
case 278:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 33;
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
            if(!var4) { _fun0047_ip = 279; continue _fun0047 }
case 280:
            var8 = var6.taskType;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var9.bind(var7)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.STREAM_ON_DESKTOP;
            var4 = var8 === var6;
case 279:
            if(!var4) { _fun0047_ip = 281; continue _fun0047 }
case 282:
            var4 = var5;
case 281:
            if(!var4) { _fun0047_ip = 283; continue _fun0047 }
case 284:
            var5 = var1.push;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 43;
            var6 = var10[var4];
            var6 = var9.bind(var7)(var6);
            var8 = var6.intl;
            var6 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.MFGxFM;
            var4 = var6.bind(var8)(var4);
            var4 = var5.bind(var1)(var4);
case 283:
            if(!var3) { _fun0047_ip = 285; continue _fun0047 }
case 286:
            var3 = var1.push;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 43;
            var4 = var8[var2];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.BV6xDm;
            var2 = var4.bind(var5)(var2);
            var2 = var3.bind(var1)(var2);
case 285:
            return var1;
        }
    };
    var3['useQuestWarningTips'] = var5;
    var5 = function useQuest(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot12;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot12;
                var1 = var1.quests;
                return var1;
            };
            var3 = var3.bind(var4)(var2, var1);
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0048_ip = 40; continue _fun0048 }
case 287:
            var1 = var2;
case 40:
            return var1;
        }
    };
    var3['useQuest'] = var5;
    var5 = function useNonNullableQuest(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var3 = var4[var3];
        var5 = undefined;
        var9 = var6.bind(var5)(var3);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot12;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = new Array(1);
        var3[0] = var7;
        var1 = function() {
            var3 = _closure1_slot12;
            var2 = var3.getQuest;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var8.bind(var9)(var6, var1, var3);
        var3 = _closure1_slot1;
        var2 = 46;
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
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0049_ip = 33; continue _fun0049 }
case 183:
                var2 = _closure2_slot4;
                var3 = var2.current;
                var2 = _closure2_slot0;
                var1 = var3 !== var2;
case 33:
                if(!var1) { _fun0049_ip = 288; continue _fun0049 }
case 289:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 47;
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
case 288:
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
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = null;
                if(!(var1 == var2)) { _fun0050_ip = 195; continue _fun0050 }
case 290:
                var1 = undefined;
                return var1;
case 195:
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 47;
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
    var5 = function useCosponsoredLogotypeAsset(arg1, arg2) {
        var3 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var6;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 13;
        var5 = var8[var4];
        var4 = undefined;
        var10 = var7.bind(var4)(var5);
        var9 = var10.useStateFromStores;
        var5 = _closure1_slot12;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure1_slot12;
            var2 = var3.getQuest;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var9.bind(var10)(var7, var3, var5);
        var _closure2_slot2 = var5;
        var7 = _closure1_slot1;
        var3 = 48;
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
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var2 = _closure2_slot2;
                var1 = null;
                if(!(var1 != var2)) { _fun0051_ip = 291; continue _fun0051 }
case 183:
                var2 = _closure2_slot1;
                if(!(var1 == var2)) { _fun0051_ip = 150; continue _fun0051 }
case 154:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 49;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isThemeDark;
                var4 = _closure2_slot3;
                var4 = var5.bind(var6)(var4);
                var2 = _closure1_slot25;
                if(var4) { _fun0051_ip = 255; continue _fun0051 }
case 55:
                var6 = var2.LIGHT;
                _fun0051_ip = 151; continue _fun0051;
case 255:
                var6 = var2.DARK;
case 151:
                _fun0051_ip = 292; continue _fun0051;
case 150:
                var6 = _closure2_slot1;
case 292:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 50;
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
case 291:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCosponsoredLogotypeAsset'] = var5;
    var5 = function useClaimedCollectibleRewardMessage(arg1) {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 26;
            var3 = var7[var2];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var3 = var5.getDefaultRewardName;
            var5 = var3.bind(var5)(var8);
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
            var3 = 13;
            var3 = var7[var3];
            var11 = var4.bind(var6)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var9.bind(var11)(var8, var3);
            var3 = 28;
            var3 = var7[var3];
            var7 = var4.bind(var6)(var3);
            var4 = var7.isPremium;
            var3 = _closure1_slot27;
            var3 = var3.TIER_2;
            var8 = var4.bind(var7)(var8, var3);
            var3 = null;
            if(!(var3 != var14)) { _fun0052_ip = 293; continue _fun0052 }
case 271:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 43;
            var4 = var3[var15];
            var4 = var11.bind(var6)(var4);
            var12 = var4.intl;
            var9 = var12.formatToPlainString;
            var4 = var3[var15];
            var4 = var11.bind(var6)(var4);
            var4 = var4.t;
            var7 = var4.o97tNn;
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
            var9 = var4.PkyRZo;
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
            var12 = var4.ie4YK0;
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
            var11 = var3.yCpc0U;
            var3 = {};
            var3['duration'] = var14;
            var3['rewardName'] = var5;
            var3 = var12.bind(var13)(var11, var3);
            if(var2) { _fun0052_ip = 81; continue _fun0052 }
case 71:
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var12 = var2[var15];
            var12 = var11.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var2 = var2[var15];
            var2 = var11.bind(var6)(var2);
            var2 = var2.t;
            var11 = var2.tTlItm;
            var2 = {};
            var2['duration'] = var14;
            var2['decorationName'] = var5;
            var2 = var12.bind(var13)(var11, var2);
            _fun0052_ip = 294; continue _fun0052;
case 81:
            if(var10) { _fun0052_ip = 295; continue _fun0052 }
case 296:
            if(!var8) { _fun0052_ip = 297; continue _fun0052 }
case 298:
            var3 = var9;
case 297:
            _fun0052_ip = 299; continue _fun0052;
case 295:
            if(!var8) { _fun0052_ip = 300; continue _fun0052 }
case 301:
            var4 = var7;
case 300:
            var3 = var4;
case 299:
            var2 = var3;
case 294:
            return var2;
case 293:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 43;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.l9uXL8;
            var1 = {};
            var1['decorationName'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useClaimedCollectibleRewardMessage'] = var5;
    var5 = function useLaunchInGameActivityQuest(arg1) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 24;
        var1 = var6[var1];
        var4 = undefined;
        var5 = var3.bind(var4)(var1);
        var3 = var5.getActivityApplicationId;
        var1 = arg1;
        var5 = var3.bind(var5)(var1);
        var1 = {};
        var3 = _closure1_slot1;
        var2 = 51;
        var2 = var6[var2];
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var2['applicationId'] = var5;
        var2 = var3.bind(var4)(var2);
        var1['launchInGameActivity'] = var2;
        return var1;
    };
    var3['useLaunchInGameActivityQuest'] = var5;
    var3['useIsPreviewerOnAnyQuest'] = var4;
    var4 = function() {
        var2 = _closure1_slot36;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var3['useShouldShowPreviewToolTab'] = var4;
    var4 = function(arg1) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            var2 = var5 == var6;
            var7 = undefined;
            var1 = undefined;
            if(var2) { _fun0053_ip = 211; continue _fun0053 }
case 183:
            var1 = var6.userStatus;
case 211:
            var1 = var5 != var1;
            if(!var1) { _fun0053_ip = 56; continue _fun0053 }
case 302:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 20;
            var2 = var10[var2];
            var8 = var9.bind(var7)(var2);
            var4 = var8.isDismissed;
            var3 = var6.userStatus;
            var2 = 19;
            var2 = var10[var2];
            var2 = var9.bind(var7)(var2);
            var2 = var2.QuestContent;
            var2 = var2.ACTIVITY_PANEL;
            var1 = var4.bind(var8)(var3, var2);
case 56:
            var4 = _closure1_slot52;
            var8 = var5 != var6;
            var3 = null;
            if(!var8) { _fun0053_ip = 188; continue _fun0053 }
case 13:
            var3 = var6;
case 188:
            var4 = var4.bind(var7)(var3);
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0053_ip = 303; continue _fun0053 }
case 166:
            var6 = var6.userStatus;
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0053_ip = 303; continue _fun0053 }
case 204:
            var3 = var6.claimedAt;
case 303:
            var3 = var5 != var3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 13;
            var5 = var8[var5];
            var8 = var6.bind(var7)(var5);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var2;
            var5 = function() {
                var1 = _closure1_slot12;
                var2 = var1.questEnrollmentBlockedUntil;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var8)(var6, var5, var2);
            if(var1) { _fun0053_ip = 190; continue _fun0053 }
case 275:
            var1 = var4;
case 190:
            if(var1) { _fun0053_ip = 217; continue _fun0053 }
case 304:
            var1 = var3;
case 217:
            if(var1) { _fun0053_ip = 225; continue _fun0053 }
case 45:
            var1 = var2;
case 225:
            var1 = !var1;
            return var1;
        }
    };
    var3['useShouldShowQuestsActivityPanelItem'] = var4;
    var4 = function() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStoresArray;
        var3 = _closure1_slot12;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot12;
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
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
            var5 = _closure1_slot17;
            var _closure2_slot0 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 21;
            var4 = var8[var3];
            var6 = undefined;
            var9 = var7.bind(var6)(var4);
            var4 = var9.getQuestMobileHomeSuggestedSortRotationExperimentVariant;
            var4 = var4.bind(var9)();
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.QuestMobileHomeSuggestedSortRotationExperimentVariant;
            var3 = var3.REMOVE_NON_VIDEO_QUESTS;
            if(!(var4 === var3)) { _fun0054_ip = 268; continue _fun0054 }
case 35:
            var3 = _closure1_slot22;
            _closure2_slot0 = var3;
            var5 = var3;
case 268:
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                        var4 = arg1;
                        var1 = var4[Symbol.iterator];
                        var4 = var1().next;
                        var2 = var4().value;
                        var3 = var1;
                        var6 = undefined;
                        var3 = var3 === var6;
                        var5 = undefined;
                        if(var3) { _fun0055_ip = 153; continue _fun0055 }
case 154:
                        var5 = var2;
case 153:
                        var2 = undefined;
                        if(var3) { _fun0055_ip = 155; continue _fun0055 }
case 156:
                        var7 = var4().value;
                        var4 = var1;
                        var4 = var4 === var6;
                        var2 = undefined;
                        var3 = var4;
                        if(var4) { _fun0055_ip = 155; continue _fun0055 }
case 157:
                        var2 = var7;
                        var3 = var4;
case 155:
                        if(var3) { _fun0055_ip = 158; continue _fun0055 }
case 130:
                        var1.return();
case 158:
                        var1 = {};
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 39;
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
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useQuestHomeFilterOptions'] = var4;
    var4 = function useQuestHomeSortOptions() {
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = function() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot16;
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = arg1;
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 39;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.getSortMethodText;
                var4 = _closure1_slot16;
                var4 = var4[var3];
                var4 = var5.bind(var6)(var4);
                var1['label'] = var4;
                var2 = _closure1_slot16;
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
    var4 = function useQuestHomeSortingFilteringAnalytics(arg1) {
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
            var1 = 52;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var6 = var7.track;
            var2 = _closure1_slot26;
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
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
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
                var1 = 52;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.track;
                var4 = _closure1_slot26;
                var5 = var4.QUEST_HOME_FILTERS_CHANGED;
                var4 = {};
                var4['filters'] = var3;
                var8 = _closure2_slot4;
                var8 = var8.current;
                var9 = null;
                if(!(var9 == var8)) { _fun0056_ip = 42; continue _fun0056 }
case 57:
                var8 = new Array(0);
case 42:
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
    var3['useQuestHomeSortingFilteringAnalytics'] = var4;
    var4 = function(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = function() {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var1 = var1 == var3;
                    var2 = undefined;
                    if(var1) { _fun0058_ip = 305; continue _fun0058 }
case 153:
                    var1 = var3.isStaff;
                    var2 = var1.bind(var3)();
case 305:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            if(var1) { _fun0057_ip = 182; continue _fun0057 }
case 197:
            var2 = arg1;
            var1 = var2.preview;
case 182:
            return var1;
        }
    };
    var3['useShouldShowQuestBarOverride'] = var4;
    var4 = function useQuestHomeHeroShelf(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var6.bind(var3)(var4);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot12;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = _closure1_slot12;
            var1 = var1.quests;
            return var1;
        };
        var6 = var6.bind(var7)(var4, var3);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = var5.questIds;
        var2[1] = var5;
        var1 = function() {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var2 = _closure2_slot0;
                var4 = var2.questIds;
                var2 = null;
                if(!(var2 == var4)) { _fun0059_ip = 36; continue _fun0059 }
case 159:
                var4 = new Array(0);
case 36:
                var3 = var4.map;
                var2 = function(arg1) {
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 53;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var2 = var2.isNotNullish;
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isQuestExpired;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var3 = var2.length;
                var1 = 1;
                if(!(!(var3 <= var1))) { _fun0059_ip = 186; continue _fun0059 }
case 44:
                var1 = {};
                var1['shelfQuests'] = var2;
                var2 = true;
                var1['isShelfEnabled'] = var2;
                _fun0059_ip = 306; continue _fun0059;
case 186:
                var2 = {};
                var3 = new Array(0);
                var2['shelfQuests'] = var3;
                var3 = false;
                var2['isShelfEnabled'] = var3;
                var1 = var2;
case 306:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestHomeHeroShelf'] = var4;
    var4 = function useFetchQuestHomeHero() {
        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 21;
            var2 = var11[var2];
            var6 = undefined;
            var2 = var10.bind(var6)(var2);
            var4 = var2.AdGetDecisionHeroAdsExperiment;
            var3 = var4.useConfig;
            var2 = {};
            var7 = 'useFetchQuestHomeHero';
            var2['location'] = var7;
            var2 = var3.bind(var4)(var2);
            var8 = var2.enabled;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var9 = true;
            var3 = var2.bind(var3)(var9);
            var2 = _closure1_slot4;
            var14 = 2;
            var3 = var2.bind(var6)(var3, var14);
            var7 = 0;
            var2 = var3[var7];
            var12 = 1;
            var3 = var3[var12];
            var _closure2_slot1 = var3;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var4 = var3.bind(var4)(var9);
            var3 = _closure1_slot4;
            var4 = var3.bind(var6)(var4, var14);
            var3 = var4[var7];
            var4 = var4[var12];
            var _closure2_slot2 = var4;
            var9 = _closure1_slot5;
            var4 = var9.useState;
            var15 = false;
            var9 = var4.bind(var9)(var15);
            var4 = _closure1_slot4;
            var4 = var4.bind(var6)(var9, var14);
            var9 = var4[var7];
            var4 = var4[var12];
            var _closure2_slot3 = var4;
            var13 = _closure1_slot5;
            var4 = var13.useState;
            var13 = var4.bind(var13)(var15);
            var4 = _closure1_slot4;
            var4 = var4.bind(var6)(var13, var14);
            var7 = var4[var7];
            var4 = var4[var12];
            var _closure2_slot4 = var4;
            var4 = 13;
            var4 = var11[var4];
            var11 = var10.bind(var6)(var4);
            var10 = var11.useStateFromStoresObject;
            var4 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var1 = {};
                var4 = _closure1_slot12;
                var3 = var4.isFetchingQuestHomeHero;
                var3 = var3.bind(var4)();
                var1['isFetching'] = var3;
                var3 = _closure1_slot12;
                var2 = var3.getQuestHomeHero;
                var2 = var2.bind(var3)();
                var1['questHomeHero'] = var2;
                return var1;
            };
            var6 = var10.bind(var11)(var6, var4);
            var4 = var6.isFetching;
            var6 = var6.questHomeHero;
            var _closure2_slot5 = var6;
            var12 = _closure1_slot5;
            var11 = var12.useEffect;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var2 = function _fetchQuestHomeHeroData() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0061_ip = 46; continue _fun0061 }
case 196: // try_start_0 // try_start_2
                                var2 = _closure2_slot0;
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var4 = 15;
                                var4 = var5[var4];
                                var5 = undefined;
                                var4 = var6.bind(var5)(var4);
                                if(var2) { _fun0061_ip = 287; continue _fun0061 }
case 198:
                                var2 = var4.fetchQuestHomeHero;
                                var2 = var2.bind(var4)();
                                SaveGenerator(address=59);
case 155:
                                return var2;
case 162:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(!var6) { _fun0061_ip = 261; continue _fun0061 }
case 201: // try_end0 // try_end2
                                var7 = _closure2_slot1;
                                var6 = false;
                                var6 = var7.bind(var5)(var6);
                                return var2;
case 287: // try_start_1 // try_start_3
                                var2 = var4.fetchQuestHomeHeroDecision;
                                var2 = var2.bind(var4)();
                                SaveGenerator(address=93);
case 160:
                                return var2;
case 307:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0061_ip = 173; continue _fun0061 }
case 261: // try_end1
                                _fun0061_ip = 308; continue _fun0061;
case 173: // try_end3
                                var4 = _closure2_slot1;
                                var3 = false;
                                var3 = var4.bind(var5)(var3);
                                return var2;
case 135: // try_start_4 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=1);
                                var5 = _closure2_slot2;
                                var4 = undefined;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                var3 = _closure2_slot3;
                                var2 = true;
                                var2 = var3.bind(var4)(var2);
case 308: // try_end4
                                var4 = _closure2_slot1;
                                var2 = undefined;
                                var3 = false;
                                var3 = var4.bind(var2)(var3);
                                return var2;
case 14: // catch_target2 // catch_target3 // catch_target4
                                CatchBlockStart(arg_register=1);
                                var5 = _closure2_slot1;
                                var4 = undefined;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                throw var2;
case 46:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot0 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var2 = function fetchQuestHomeHeroData() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = !var2;
                return var1;
            };
            var8 = var11.bind(var12)(var8, var10);
            var10 = _closure1_slot5;
            var8 = var10.useEffect;
            var5 = new Array(1);
            var5[0] = var6;
            var1 = function() {
                var2 = function _loadImages() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0062_ip = 309; continue _fun0062 }
case 196: // try_start_0 // try_start_1
                                var4 = _closure2_slot5;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0062_ip = 226; continue _fun0062 }
case 39:
                                var3 = _closure2_slot5;
                                var4 = var3.heroImage;
                                var5 = new Array(2);
                                var5[0] = var4;
                                var3 = var3.sponsorImage;
                                var5[1] = var3;
                                var4 = var5.filter;
                                var3 = function(arg1) {
                                    var2 = null;
                                    var1 = arg1;
                                    var1 = var2 != var1;
                                    return var1;
                                };
                                var8 = var4.bind(var5)(var3);
                                var3 = global;
                                var5 = var3.Promise;
                                var4 = var5.all;
                                var7 = var8.map;
                                var9 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 54;
                                var3 = var6[var3];
                                var6 = undefined;
                                var3 = var9.bind(var6)(var3);
                                var3 = var3.preloadImage;
                                var3 = var7.bind(var8)(var3);
                                var3 = var4.bind(var5)(var3);
                                SaveGenerator(address=137);
case 310:
                                return var3;
case 229:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                if(var4) { _fun0062_ip = 215; continue _fun0062 }
case 228: // try_end0
                                _fun0062_ip = 270; continue _fun0062;
case 215: // try_end1
                                var5 = _closure2_slot2;
                                var4 = false;
                                var4 = var5.bind(var6)(var4);
                                return var3;
case 226:
                                var4 = _closure2_slot2;
                                var2 = undefined;
                                var3 = false;
                                var3 = var4.bind(var2)(var3);
                                return var2;
case 259: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register=1);
                                var4 = _closure2_slot4;
                                var3 = undefined;
                                var2 = true;
                                var2 = var4.bind(var3)(var2);
case 270: // try_end2
                                var4 = _closure2_slot2;
                                var2 = undefined;
                                var3 = false;
                                var3 = var4.bind(var2)(var3);
                                return var2;
case 275: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register=1);
                                var5 = _closure2_slot2;
                                var4 = undefined;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                throw var2;
case 309:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot0 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var2 = function loadImages() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var2 = var2.bind(var1)();
                var2 = !var2;
                return var1;
            };
            var1 = var8.bind(var10)(var1, var5);
            var1 = {};
            var5 = null;
            if(var9) { _fun0060_ip = 311; continue _fun0060 }
case 312:
            var5 = null;
            if(var7) { _fun0060_ip = 311; continue _fun0060 }
case 313:
            var5 = var6;
case 311:
            var1['questHomeHero'] = var5;
            if(var2) { _fun0060_ip = 314; continue _fun0060 }
case 315:
            var2 = var4;
case 314:
            if(var2) { _fun0060_ip = 316; continue _fun0060 }
case 38:
            var2 = var3;
case 316:
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['useFetchQuestHomeHero'] = var4;
    var4 = function useFetchQuestHomeBounties() {
        _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 55;
            var1 = var8[var1];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var4 = var1.QuestHomeBountiesExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var9 = _closure1_slot14;
            var9 = var9.QUEST_HOME_MOBILE;
            var1['location'] = var9;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var9 = var3.bind(var4)(var1);
            var4 = _closure1_slot4;
            var3 = 2;
            var9 = var4.bind(var5)(var9, var3);
            var3 = 0;
            var3 = var9[var3];
            var4 = 1;
            var4 = var9[var4];
            var _closure2_slot1 = var4;
            var4 = 13;
            var4 = var8[var4];
            var8 = var7.bind(var5)(var4);
            var7 = var8.useStateFromStoresObject;
            var4 = _closure1_slot10;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = {};
                var2 = _closure1_slot10;
                var3 = var2.isFetchingQuestHomeBounties;
                var1['isFetching'] = var3;
                var2 = var2.questHomeBounties;
                var1['questHomeBounties'] = var2;
                return var1;
            };
            var5 = var7.bind(var8)(var5, var4);
            var4 = var5.isFetching;
            var5 = var5.questHomeBounties;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var1;
            var2 = function() {
                _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                    var2 = function _loadBounties() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0065_ip = 205; continue _fun0065 }
case 196: // try_start_0
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 56;
                                    var2 = var4[var2];
                                    var5 = undefined;
                                    var3 = var3.bind(var5)(var2);
                                    var2 = var3.fetchQuestHomeBounties;
                                    var2 = var2.bind(var3)();
                                    SaveGenerator(address=49);
case 185:
                                    return var2;
case 5:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0065_ip = 40; continue _fun0065 }
case 4: // try_end0
                                    var3 = _closure3_slot0;
                                    if(var3) { _fun0065_ip = 287; continue _fun0065 }
case 201:
                                    var4 = _closure2_slot1;
                                    var3 = false;
                                    var3 = var4.bind(var5)(var3);
case 287:
                                    return var5;
case 40:
                                    var3 = _closure3_slot0;
                                    if(var3) { _fun0065_ip = 134; continue _fun0065 }
case 42:
                                    var4 = _closure2_slot1;
                                    var3 = false;
                                    var3 = var4.bind(var5)(var3);
case 134:
                                    return var2;
case 233: // catch_target0
                                    CatchBlockStart(arg_register=1);
                                    var3 = _closure3_slot0;
                                    if(var3) { _fun0065_ip = 229; continue _fun0065 }
case 317:
                                    var5 = _closure2_slot1;
                                    var4 = undefined;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
case 229:
                                    throw var2;
case 205:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure3_slot1 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot1 = var2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    if(var2) { _fun0064_ip = 153; continue _fun0064 }
case 36:
                    return var3;
case 153:
                    var2 = false;
                    var _closure3_slot0 = var2;
                    var2 = function loadBounties() {
                        var1 = undefined;
                        var4 = _closure3_slot1;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = var2.bind(var3)();
                    var1 = function() {
                        var1 = true;
                        _closure3_slot0 = var1;
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var6);
            var2 = {};
            if(var1) { _fun0063_ip = 45; continue _fun0063 }
case 193:
            var1 = new Array(0);
            var2['questHomeBounties'] = var1;
            var1 = false;
            var2['isLoading'] = var1;
            var1 = var2;
            _fun0063_ip = 318; continue _fun0063;
case 45:
            var2['questHomeBounties'] = var5;
            if(var3) { _fun0063_ip = 267; continue _fun0063 }
case 309:
            var3 = var4;
case 267:
            var2['isLoading'] = var3;
            var1 = var2;
case 318:
            return var1;
        }
    };
    var3['useFetchQuestHomeBounties'] = var4;
    var4 = function useQuestHomeBounties() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var1 = _closure1_slot10;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = {};
            var2 = _closure1_slot10;
            var3 = var2.questHomeBounties;
            var1['questHomeBounties'] = var3;
            var2 = var2.isFetchingQuestHomeBounties;
            var1['isFetching'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useQuestHomeBounties'] = var4;
    var2 = function useQuestBarImpressionSurvey(arg1) {
        _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 57;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var6 = var4.DropsOptedOut;
            var4 = var6.useSetting;
            var7 = var4.bind(var6)();
            var _closure2_slot1 = var7;
            var6 = var5.userStatus;
            var4 = null;
            var8 = var4 == var6;
            if(var8) { _fun0066_ip = 319; continue _fun0066 }
case 41:
            var3 = var6.enrolledAt;
case 319:
            var6 = var4 != var3;
            var _closure2_slot2 = var6;
            var4 = _closure1_slot5;
            var3 = var4.useCallback;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var5 = var5.id;
            var2[2] = var5;
            var1 = function() {
                _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0067_ip = 13; continue _fun0067 }
case 196:
                    var4 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 58;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.SurveyActionTypes;
                    if(var4) { _fun0067_ip = 28; continue _fun0067 }
case 320:
                    var4 = var2.AD_IMPRESSION_QUEST_BAR_OPT_IN;
                    _fun0067_ip = 232; continue _fun0067;
case 28:
                    var4 = var2.AD_IMPRESSION_QUEST_BAR_OPT_OUT;
case 232:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 59;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.fireSurveyAction;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var1['quest_id'] = var5;
                    var1 = var2.bind(var3)(var4, var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useQuestBarImpressionSurvey'] = var2;
    return var1;
})();