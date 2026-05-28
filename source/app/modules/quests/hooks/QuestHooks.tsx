// app/modules/quests/hooks/QuestHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var24 = require;
    var26 = metroImportDefault;
    var3 = exports;
    var25 = dependencyMap;
    var _closure1_slot0 = var24;
    var _closure1_slot1 = var26;
    var _closure1_slot2 = var25;
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
    var22 = function useQuests() {
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
    var _closure1_slot40 = var22;
    var1 = function defaultSortFn(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var3 = var6.id;
            var1 = _closure1_slot20;
            var3 = var3 === var1;
            var5 = var4.id;
            var1 = _closure1_slot20;
            var1 = var5 === var1;
            if(!var3) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var8 = var6.userStatus;
            var7 = null;
            var9 = var7 == var8;
            var5 = undefined;
            if(var9) { _fun0006_ip = 7; continue _fun0006 }
case 4:
            var5 = var8.completedAt;
case 7:
            var3 = var7 == var5;
case 50:
            if(!var1) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var8 = var4.userStatus;
            var7 = null;
            var9 = var7 == var8;
            var5 = undefined;
            if(var9) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var5 = var8.completedAt;
case 54:
            var1 = var7 == var5;
case 52:
            if(!(var3 === var1)) { _fun0006_ip = 56; continue _fun0006 }
case 43:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 20;
            var1 = var7[var1];
            var12 = undefined;
            var5 = var5.bind(var12)(var1);
            var1 = var5.isQuestExpired;
            var1 = var1.bind(var5)(var6);
            var1 = !var1;
            var8 = var6.userStatus;
            var7 = null;
            var9 = var7 == var8;
            var5 = undefined;
            if(var9) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var5 = var8.claimedAt;
case 57:
            var8 = var7 != var5;
            var9 = var4.userStatus;
            var10 = var7 == var9;
            var5 = undefined;
            if(var10) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var5 = var9.claimedAt;
case 59:
            var11 = var7 != var5;
            var9 = var6.userStatus;
            var10 = var7 == var9;
            var5 = undefined;
            if(var10) { _fun0006_ip = 61; continue _fun0006 }
case 22:
            var5 = var9.enrolledAt;
case 61:
            var9 = var7 != var5;
            var10 = var4.userStatus;
            var13 = var7 == var10;
            var5 = undefined;
            if(var13) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var5 = var10.enrolledAt;
case 62:
            var10 = var7 != var5;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 21;
            var5 = var13[var5];
            var5 = var7.bind(var12)(var5);
            var5 = var5.Millis;
            var7 = var5.MINUTE;
            var5 = 30;
            var13 = var5 * var7;
            var5 = _closure1_slot35;
            var7 = var5.bind(var12)(var6, var13);
            var5 = _closure1_slot35;
            var13 = var5.bind(var12)(var4, var13);
            if(var1) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            if(!(var8 === var11)) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            if(!(var9 === var10)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var15 = _closure1_slot49;
            var1 = var6.config;
            var14 = var1.expiresAt;
            var1 = var4.config;
            var5 = var1.expiresAt;
            var1 = _closure1_slot29;
            var1 = var1.DESC;
            var1 = var15.bind(var12)(var14, var5, var1);
            _fun0006_ip = 70; continue _fun0006;
case 68:
            var5 = 1;
            if(!var9) { _fun0006_ip = 47; continue _fun0006 }
case 71:
            var5 = _closure1_slot27;
case 47:
            var1 = var5;
case 70:
            _fun0006_ip = 72; continue _fun0006;
case 66:
            var5 = 1;
            if(!var8) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var5 = _closure1_slot27;
case 73:
            var1 = var5;
case 72:
            return var1;
case 64:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 22;
            var5 = var17[var1];
            var15 = var16.bind(var12)(var5);
            var14 = var15.getQuestType;
            var5 = var6.config;
            var15 = var14.bind(var15)(var5);
            var1 = var17[var1];
            var14 = var16.bind(var12)(var1);
            var5 = var14.getQuestType;
            var1 = var4.config;
            var14 = var5.bind(var14)(var1);
            var1 = 23;
            var5 = var17[var1];
            var18 = var16.bind(var12)(var5);
            var5 = var18.hasWatchVideoOnMobileTasks;
            var5 = var5.bind(var18)(var6);
            var1 = var17[var1];
            var16 = var16.bind(var12)(var1);
            var1 = var16.hasWatchVideoOnMobileTasks;
            var1 = var1.bind(var16)(var4);
            if(!(var5 !== var1)) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            if(var5) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            if(var1) { _fun0006_ip = 77; continue _fun0006 }
case 75:
            if(!(var15 !== var14)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var16 = 24;
            var1 = var1[var16];
            var1 = var17.bind(var12)(var1);
            var1 = var1.QuestType;
            var1 = var1.VIDEO;
            if(!(var15 !== var1)) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var16];
            var1 = var17.bind(var12)(var1);
            var1 = var1.QuestType;
            var1 = var1.VIDEO;
            if(!(var14 === var1)) { _fun0006_ip = 79; continue _fun0006 }
case 81:
            var14 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var16];
            var1 = var14.bind(var12)(var1);
            var1 = var1.QuestType;
            var14 = var1.VIDEO;
            var1 = 1;
            if(!(var15 === var14)) { _fun0006_ip = 83; continue _fun0006 }
case 84:
            var1 = _closure1_slot27;
case 83:
            _fun0006_ip = 85; continue _fun0006;
case 79:
            if(!(var7 !== var13)) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            if(var7) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            if(var13) { _fun0006_ip = 88; continue _fun0006 }
case 86:
            if(!(var8 === var11)) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            if(!(var9 === var10)) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            var11 = _closure1_slot49;
            var6 = var6.config;
            var10 = var6.expiresAt;
            var4 = var4.config;
            var6 = var4.expiresAt;
            var4 = _closure1_slot29;
            var4 = var4.ASC;
            var4 = var11.bind(var12)(var10, var6, var4);
            _fun0006_ip = 94; continue _fun0006;
case 92:
            var6 = 1;
            if(!var9) { _fun0006_ip = 95; continue _fun0006 }
case 96:
            var6 = _closure1_slot27;
case 95:
            var4 = var6;
case 94:
            _fun0006_ip = 97; continue _fun0006;
case 90:
            var6 = 1;
            if(var8) { _fun0006_ip = 98; continue _fun0006 }
case 99:
            var6 = _closure1_slot27;
case 98:
            var4 = var6;
case 97:
            _fun0006_ip = 100; continue _fun0006;
case 88:
            var6 = 1;
            if(var7) { _fun0006_ip = 101; continue _fun0006 }
case 102:
            var6 = _closure1_slot27;
case 101:
            var4 = var6;
case 100:
            var1 = var4;
case 85:
            _fun0006_ip = 103; continue _fun0006;
case 77:
            var4 = 1;
            if(!var5) { _fun0006_ip = 104; continue _fun0006 }
case 105:
            var4 = _closure1_slot27;
case 104:
            var1 = var4;
case 103:
            return var1;
case 56:
            var1 = 1;
            if(!var3) { _fun0006_ip = 106; continue _fun0006 }
case 107:
            var1 = _closure1_slot27;
case 106:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function recentSortFn(arg1, arg2) {
        var5 = _closure1_slot49;
        var2 = arg1;
        var2 = var2.config;
        var4 = var2.startsAt;
        var2 = arg2;
        var2 = var2.config;
        var3 = var2.startsAt;
        var1 = _closure1_slot29;
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
            if(var5) { _fun0007_ip = 108; continue _fun0007 }
case 36:
            var8 = var2.enrolledAt;
case 108:
            var2 = var3.userStatus;
            var5 = var1 == var2;
            var7 = undefined;
            if(var5) { _fun0007_ip = 109; continue _fun0007 }
case 2:
            var7 = var2.enrolledAt;
case 109:
            if(!(var1 == var8)) { _fun0007_ip = 110; continue _fun0007 }
case 28:
            if(!(var1 != var7)) { _fun0007_ip = 111; continue _fun0007 }
case 110:
            if(!(var1 != var8)) { _fun0007_ip = 53; continue _fun0007 }
case 112:
            if(!(var1 != var7)) { _fun0007_ip = 113; continue _fun0007 }
case 53:
            if(!(var1 == var8)) { _fun0007_ip = 40; continue _fun0007 }
case 114:
            var2 = var1 != var7;
            var1 = 1;
            if(var2) { _fun0007_ip = 115; continue _fun0007 }
case 40:
            var5 = _closure1_slot49;
            var2 = _closure1_slot29;
            var2 = var2.DESC;
            var1 = var5.bind(var6)(var8, var7, var2);
case 115:
            _fun0007_ip = 116; continue _fun0007;
case 113:
            var1 = _closure1_slot27;
case 116:
            _fun0007_ip = 117; continue _fun0007;
case 111:
            var5 = _closure1_slot49;
            var4 = var4.config;
            var4 = var4.expiresAt;
            var3 = var3.config;
            var3 = var3.expiresAt;
            var2 = _closure1_slot29;
            var2 = var2.DESC;
            var1 = var5.bind(var6)(var4, var3, var2);
case 117:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function expiringSoonSortFn(arg1, arg2) {
        var5 = _closure1_slot49;
        var2 = arg1;
        var2 = var2.config;
        var4 = var2.expiresAt;
        var2 = arg2;
        var2 = var2.config;
        var3 = var2.expiresAt;
        var1 = _closure1_slot29;
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
            if(!(var2 !== var4)) { _fun0008_ip = 118; continue _fun0008 }
case 39:
            var2 = _closure1_slot18;
            var2 = var2.PLAY;
            if(!(var2 !== var4)) { _fun0008_ip = 119; continue _fun0008 }
case 120:
            var2 = false;
            return var2;
case 119:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 23;
            var2 = var2[var7];
            var6 = undefined;
            var5 = var4.bind(var6)(var2);
            var4 = var5.hasPlayOnDesktopTask;
            var2 = {};
            var2['quest'] = var3;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0008_ip = 121; continue _fun0008 }
case 122:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var8 = var5.bind(var6)(var4);
            var5 = var8.hasStreamOnDesktopTask;
            var4 = {};
            var4['quest'] = var3;
            var2 = var5.bind(var8)(var4);
case 121:
            if(var2) { _fun0008_ip = 123; continue _fun0008 }
case 124:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var5 = var5.bind(var6)(var4);
            var4 = var5.hasPlayActivityTask;
            var2 = var4.bind(var5)(var3);
case 123:
            if(var2) { _fun0008_ip = 125; continue _fun0008 }
case 126:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isConsoleQuest;
            var2 = var4.bind(var5)(var3);
case 125:
            if(var2) { _fun0008_ip = 127; continue _fun0008 }
case 19:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isInGameQuest;
            var2 = var4.bind(var5)(var3);
case 127:
            return var2;
case 118:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 23;
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
            if(!(var3 !== var4)) { _fun0009_ip = 128; continue _fun0009 }
case 39:
            var3 = _closure1_slot19;
            var3 = var3.COLLECTIBLE;
            if(!(var3 !== var4)) { _fun0009_ip = 129; continue _fun0009 }
case 120:
            var3 = _closure1_slot19;
            var3 = var3.IN_GAME;
            if(!(var3 !== var4)) { _fun0009_ip = 130; continue _fun0009 }
case 131:
            var3 = false;
            return var3;
case 130:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 25;
            var3 = var3[var7];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var4 = var5.hasInGameQuestReward;
            var3 = var1.config;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0009_ip = 132; continue _fun0009 }
case 133:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var6 = var5.bind(var6)(var4);
            var5 = var6.hasQuestRewardCode;
            var4 = var1.config;
            var3 = var5.bind(var6)(var4);
case 132:
            return var3;
case 129:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 25;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.hasCollectiblesQuestReward;
            var3 = var1.config;
            var3 = var4.bind(var5)(var3);
            return var3;
case 128:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 25;
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
            if(!(var1 !== var5)) { _fun0010_ip = 134; continue _fun0010 }
case 31:
            var3 = 'reward';
            var1 = undefined;
            if(!(var3 === var5)) { _fun0010_ip = 5; continue _fun0010 }
case 33:
            var1 = _closure1_slot46;
            _fun0010_ip = 5; continue _fun0010;
case 134:
            var1 = _closure1_slot45;
case 5:
            var _closure2_slot1 = var1;
            var3 = var4.length;
            var1 = 0;
            var1 = var1 === var3;
            if(var1) { _fun0010_ip = 55; continue _fun0010 }
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
case 55:
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var21 = function sortQuests(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var2 = arguments[1];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0011_ip = 135; continue _fun0011 }
case 32:
            var2 = _closure1_slot28;
case 135:
            var6 = var2.sortMethod;
            var5 = var2.filters;
            var2 = null;
            var3 = var7;
            if(!(var2 != var5)) { _fun0011_ip = 41; continue _fun0011 }
case 134:
            var8 = var5.length;
            var2 = 0;
            var3 = var7;
            if(!(var2 !== var8)) { _fun0011_ip = 41; continue _fun0011 }
case 28:
            var2 = function filterQuests(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg2;
                    var4 = var6.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0012_ip = 136; continue _fun0012 }
case 137:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
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
                                if(var2) { _fun0013_ip = 138; continue _fun0013 }
case 139:
                                var4 = var3;
case 138:
                                var3 = undefined;
                                if(var2) { _fun0013_ip = 140; continue _fun0013 }
case 141:
                                var7 = var6().value;
                                var6 = var1;
                                var6 = var6 === var5;
                                var3 = undefined;
                                var2 = var6;
                                if(var6) { _fun0013_ip = 140; continue _fun0013 }
case 142:
                                var3 = var7;
                                var2 = var6;
case 140:
                                if(var2) { _fun0013_ip = 143; continue _fun0013 }
case 110:
                                var1.return();
case 143:
                                var2 = _closure1_slot47;
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
case 136:
                    return var1;
                }
            };
            var3 = var2.bind(var4)(var7, var5);
case 41:
            var2 = _closure1_slot16;
            var2 = var2.MOST_RECENT;
            if(!(var2 !== var6)) { _fun0011_ip = 144; continue _fun0011 }
case 9:
            var2 = _closure1_slot16;
            var2 = var2.RECENTLY_ENROLLED;
            if(!(var2 !== var6)) { _fun0011_ip = 129; continue _fun0011 }
case 133:
            var2 = _closure1_slot16;
            var2 = var2.EXPIRING_SOON;
            if(!(var2 !== var6)) { _fun0011_ip = 145; continue _fun0011 }
case 146:
            var2 = _closure1_slot16;
            var2 = var2.SUGGESTED;
            var2 = _closure1_slot41;
            _fun0011_ip = 147; continue _fun0011;
case 145:
            var2 = _closure1_slot44;
            _fun0011_ip = 147; continue _fun0011;
case 129:
            var2 = _closure1_slot43;
            _fun0011_ip = 147; continue _fun0011;
case 144:
            var2 = _closure1_slot42;
case 147:
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
                        var1 = 20;
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
                        if(!(var4 === var1)) { _fun0014_ip = 122; continue _fun0014 }
case 114:
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var2)(var6, var5);
                        _fun0014_ip = 133; continue _fun0014;
case 122:
                        var2 = 1;
                        if(!var4) { _fun0014_ip = 148; continue _fun0014 }
case 149:
                        var2 = _closure1_slot27;
case 148:
                        var1 = var2;
case 133:
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
    var _closure1_slot48 = var21;
    var1 = function sortByDate(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot29;
            var5 = var2.DESC;
            var2 = 1;
            var3 = arg3;
            if(!(var3 === var5)) { _fun0015_ip = 3; continue _fun0015 }
case 39:
            var2 = _closure1_slot27;
case 3:
            var3 = var4.localeCompare;
            var1 = arg2;
            var1 = var3.bind(var4)(var1);
            var1 = var1 * var2;
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = function isQuestHiddenFromQuestHome(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 20;
            var1 = var1[var6];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.isQuestExpired;
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0016_ip = 150; continue _fun0016 }
case 134:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.hasUnclaimedReward;
            var2 = var2.userStatus;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 150:
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var18 = function useIsQuestExpired(arg1) {
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
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0017_ip = 151; continue _fun0017 }
case 152:
                var4 = _closure1_slot12;
                var3 = var4.isQuestExpired;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 151:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot51 = var18;
    var17 = function useIsQuestProgressingOnDesktop(arg1) {
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
    var _closure1_slot52 = var17;
    var16 = function useIsQuestProgressingOnConsole(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 23;
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
    var _closure1_slot53 = var16;
    var15 = function useIsQuestProgressingVideoQuest(arg1) {
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
            var1 = 31;
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
            var1 = 32;
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
    var _closure1_slot54 = var15;
    var14 = function useIsQuestProgressing(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot52;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            var3 = _closure1_slot53;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot54;
            var2 = var2.bind(var4)(var5);
            if(var1) { _fun0018_ip = 153; continue _fun0018 }
case 51:
            var1 = var3;
case 153:
            if(var1) { _fun0018_ip = 154; continue _fun0018 }
case 119:
            var1 = var2;
case 154:
            return var1;
        }
    };
    var _closure1_slot55 = var14;
    var12 = function useThirdPartyTaskDetails(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 23;
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
    var _closure1_slot56 = var12;
    var11 = function useGetOrFetchApplicationForConsoleQuests(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot5;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
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
                var6 = 23;
                var5 = null;
                if(var2) { _fun0019_ip = 155; continue _fun0019 }
case 156:
                var11 = var4.value;
                var10 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var10 = var10.bind(var8)(var2);
                var2 = var10.getConsoleApplicationId;
                var10 = var2.bind(var10)(var11);
                if(!(var5 != var10)) { _fun0019_ip = 157; continue _fun0019 }
case 158:
                var2 = var3.add;
                var2 = var2.bind(var3)(var10);
case 157:
                var10 = var7.bind(var8)();
                var2 = var10.done;
                var4 = var10;
                if(!var2) { _fun0019_ip = 156; continue _fun0019 }
case 155:
                var2 = var1.Array;
                var1 = var2.from;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var3 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 34;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var _closure1_slot57 = var11;
    var10 = function useConnectedAccounts() {
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
                var1 = _closure1_slot23;
                var1 = var1.XBOX;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var3)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot23;
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
    var _closure1_slot58 = var10;
    var7 = function useSelectedTaskPlatform(arg1) {
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
    var _closure1_slot59 = var7;
    var6 = function useTaskPlatformScreen(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var12 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var8;
            var3 = _closure1_slot59;
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
                var1 = 30;
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
            var5 = _closure1_slot52;
            var6 = var5.bind(var9)(var12);
            var5 = _closure1_slot53;
            var5 = var5.bind(var9)(var12);
            var13 = _closure1_slot5;
            var12 = var13.useMemo;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 42;
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
                var5 = 31;
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
            if(var6) { _fun0020_ip = 127; continue _fun0020 }
case 159:
            var8 = null;
            if(!var5) { _fun0020_ip = 160; continue _fun0020 }
case 161:
            var5 = _closure1_slot13;
            var8 = var5.CONSOLE;
case 160:
            _fun0020_ip = 162; continue _fun0020;
case 127:
            var5 = _closure1_slot13;
            var8 = var5.DESKTOP;
case 162:
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
                var3 = 42;
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
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var2 = _closure2_slot4;
                        if(!var2) { _fun0021_ip = 163; continue _fun0021 }
case 164:
                        var2 = _closure2_slot3;
                        if(var2) { _fun0021_ip = 165; continue _fun0021 }
case 163:
                        var1 = _closure2_slot4;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.TaskPlatformScreen;
                        if(var1) { _fun0021_ip = 143; continue _fun0021 }
case 4:
                        var1 = var2.DESKTOP;
                        _fun0021_ip = 41; continue _fun0021;
case 143:
                        var1 = var2.CONSOLE;
case 41:
                        _fun0021_ip = 113; continue _fun0021;
case 165:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.TaskPlatformScreen;
                        var1 = var2.SELECT;
case 113:
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
    var _closure1_slot60 = var6;
    var4 = function useLiveQuestHomeHero() {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var7 = undefined;
            var5 = var3.bind(var7)(var2);
            var4 = var5.useStateFromStores;
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getQuestHomeHero;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            var5 = _closure1_slot5;
            var4 = var5.useState;
            var3 = function() {
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot4;
            var3 = 2;
            var4 = var4.bind(var7)(var5, var3);
            var3 = 0;
            var5 = var4[var3];
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot0 = var3;
            var4 = null;
            var7 = var4 != var2;
            var3 = null;
            if(!var7) { _fun0022_ip = 166; continue _fun0022 }
case 167:
            var7 = global;
            var9 = var7.Date;
            var8 = var9.parse;
            var7 = var2.endsAt;
            var3 = var8.bind(var9)(var7);
case 166:
            var9 = var4 != var2;
            var _closure2_slot1 = var9;
            var8 = _closure1_slot5;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var9;
            var1 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var5 = undefined;
                    if(var2) { _fun0023_ip = 152; continue _fun0023 }
case 32:
                    return var5;
case 152:
                    var2 = global;
                    var4 = var2.setInterval;
                    var3 = function() {
                        var3 = _closure2_slot0;
                        var1 = global;
                        var2 = var1.Date;
                        var1 = var2.now;
                        var2 = var1.bind(var2)();
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 30000;
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearInterval;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1, var6);
            var6 = var4 == var2;
            var1 = null;
            if(var6) { _fun0022_ip = 62; continue _fun0022 }
case 168:
            var6 = var4 == var3;
            var1 = null;
            if(var6) { _fun0022_ip = 62; continue _fun0022 }
case 169:
            var6 = global;
            var7 = var6.Number;
            var6 = var7.isNaN;
            var6 = var6.bind(var7)(var3);
            var1 = null;
            if(var6) { _fun0022_ip = 62; continue _fun0022 }
case 45:
            var3 = var5 >= var3;
            var1 = null;
            if(var3) { _fun0022_ip = 62; continue _fun0022 }
case 170:
            var1 = var2;
case 62:
            return var1;
        }
    };
    var _closure1_slot61 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var31 = 0;
    var5 = var25[var31];
    var1 = undefined;
    var5 = var26.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var30 = 1;
    var5 = var25[var30];
    var5 = var26.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var29 = 2;
    var8 = var25[var29];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot5 = var5;
    var27 = 3;
    var5 = var25[var27];
    var5 = var26.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var23 = 4;
    var5 = var25[var23];
    var5 = var26.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var25[var5];
    var5 = var26.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var28 = 6;
    var5 = var25[var28];
    var5 = var26.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var25[var5];
    var5 = var26.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var25[var5];
    var5 = var24.bind(var1)(var5);
    var5 = var5.useConsoleQuestUIStore;
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var25[var5];
    var5 = var26.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var25[var5];
    var5 = var24.bind(var1)(var5);
    var8 = var5.QuestTaskPlatform;
    var _closure1_slot13 = var8;
    var8 = var5.QuestsExperimentLocations;
    var _closure1_slot14 = var8;
    var8 = var5.MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES;
    var _closure1_slot15 = var8;
    var8 = var5.QuestHomeSortMethods;
    var _closure1_slot16 = var8;
    var8 = var5.SORTED_QUEST_HOME_FILTER_GROUPS;
    var _closure1_slot17 = var8;
    var8 = var5.TaskFilterTypes;
    var _closure1_slot18 = var8;
    var8 = var5.RewardFilterTypes;
    var _closure1_slot19 = var8;
    var8 = var5.MOBILE_ORBS_INTRO_QUEST_ID;
    var _closure1_slot20 = var8;
    var5 = var5.ORBS_INTRO_QUEST_ID;
    var _closure1_slot21 = var5;
    var5 = 11;
    var5 = var25[var5];
    var5 = var24.bind(var1)(var5);
    var8 = var5.HelpdeskArticles;
    var _closure1_slot22 = var8;
    var8 = var5.PlatformTypes;
    var _closure1_slot23 = var8;
    var8 = var5.ThemeTypes;
    var _closure1_slot24 = var8;
    var5 = var5.AnalyticEvents;
    var _closure1_slot25 = var5;
    var5 = 12;
    var5 = var25[var5];
    var5 = var24.bind(var1)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot26 = var5;
    var5 = -1;
    var _closure1_slot27 = var5;
    var5 = {};
    var _closure1_slot28 = var5;
    var5 = {};
    var5['DESC'] = var31;
    var8 = 'DESC';
    var5[var31] = var8;
    var5['ASC'] = var30;
    var8 = 'ASC';
    var5[var30] = var8;
    var _closure1_slot29 = var5;
    var20 = {};
    var5 = 'all';
    var20['ALL'] = var5;
    var5 = 'claimed';
    var20['CLAIMED'] = var5;
    var5 = 'preview_tool';
    var20['PREVIEW_TOOL'] = var5;
    var _closure1_slot30 = var20;
    var19 = {};
    var5 = 'tab';
    var19['TAB'] = var5;
    var5 = 'quest_id';
    var19['QUEST_ID'] = var5;
    var5 = 'sort';
    var19['SORT'] = var5;
    var5 = 'filter';
    var19['FILTER'] = var5;
    var5 = 'ad_creative_ids';
    var19['AD_CREATIVE_IDS'] = var5;
    var13 = function useQuestTaskDetails(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var4 = new Array(1);
        var4[0] = var8;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 23;
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
        var4 = _closure1_slot55;
        var7 = var4.bind(var5)(var8);
        var _closure2_slot4 = var7;
        var5 = _closure1_slot5;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var4 = null;
                var7 = var4 == var5;
                var6 = undefined;
                var3 = undefined;
                if(var7) { _fun0024_ip = 171; continue _fun0024 }
case 34:
                var3 = var5.enrolledAt;
case 171:
                if(!(var4 != var3)) { _fun0024_ip = 158; continue _fun0024 }
case 51:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var7 = var4 == var5;
                var3 = undefined;
                if(var7) { _fun0024_ip = 143; continue _fun0024 }
case 140:
                var3 = var5.completedAt;
case 143:
                if(!(var4 == var3)) { _fun0024_ip = 158; continue _fun0024 }
case 30:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var7 = var4 == var5;
                var3 = undefined;
                if(var7) { _fun0024_ip = 42; continue _fun0024 }
case 9:
                var3 = var5.claimedAt;
case 42:
                if(!(var4 == var3)) { _fun0024_ip = 158; continue _fun0024 }
case 11:
                var3 = _closure2_slot4;
                if(var3) { _fun0024_ip = 157; continue _fun0024 }
case 158:
                var2 = _closure2_slot3;
                var2 = var2.bind(var6)();
                return var6;
case 157:
                var2 = global;
                var5 = var2.window;
                var4 = var5.setInterval;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 21;
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
    var _closure1_slot31 = var13;
    var9 = function useWaitingForConsoleConnection(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var5 = var1.quest;
            var2 = _closure1_slot58;
            var6 = undefined;
            var2 = var2.bind(var6)();
            var3 = var2.xboxAndPlaystationAccounts;
            var2 = _closure1_slot55;
            var2 = var2.bind(var6)(var5);
            var4 = var3.length;
            var3 = 0;
            var3 = var3 === var4;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 23;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.isConsoleQuest;
            var1 = var1.bind(var4)(var5);
            if(!var1) { _fun0025_ip = 55; continue _fun0025 }
case 40:
            var1 = var3;
case 55:
            if(!var1) { _fun0025_ip = 54; continue _fun0025 }
case 172:
            var1 = !var2;
case 54:
            return var1;
        }
    };
    var _closure1_slot32 = var9;
    var8 = {};
    var8['UNACCEPTED'] = var31;
    var5 = 'UNACCEPTED';
    var8[var31] = var5;
    var8['ACCEPTED'] = var30;
    var5 = 'ACCEPTED';
    var8[var30] = var5;
    var8['IN_PROGRESS'] = var29;
    var5 = 'IN_PROGRESS';
    var8[var29] = var5;
    var8['COMPLETED'] = var27;
    var5 = 'COMPLETED';
    var8[var27] = var5;
    var8['CLAIMED'] = var23;
    var5 = 'CLAIMED';
    var8[var23] = var5;
    var _closure1_slot33 = var8;
    var5 = function useIsPreviewerOnAnyQuest() {
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
    var _closure1_slot34 = var5;
    var23 = function hasEnrolledTimeLapsed(arg1, arg2) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var4 = arg1;
            var2 = var4.userStatus;
            var6 = null;
            var3 = var6 == var2;
            var1 = undefined;
            if(var3) { _fun0026_ip = 39; continue _fun0026 }
case 29:
            var1 = var2.completedAt;
case 39:
            var2 = var6 != var1;
            var3 = var4.userStatus;
            var7 = var6 == var3;
            var1 = undefined;
            if(var7) { _fun0026_ip = 142; continue _fun0026 }
case 173:
            var1 = var3.enrolledAt;
case 142:
            var1 = var6 != var1;
            if(!var1) { _fun0026_ip = 7; continue _fun0026 }
case 130:
            var1 = !var2;
case 7:
            if(!var1) { _fun0026_ip = 174; continue _fun0026 }
case 112:
            var2 = global;
            var7 = var2.Date;
            var3 = var7.now;
            var3 = var3.bind(var7)();
            var2 = var2.Date;
            var4 = var4.userStatus;
            var6 = var6 == var4;
            var5 = undefined;
            if(var6) { _fun0026_ip = 113; continue _fun0026 }
case 43:
            var5 = var4.enrolledAt;
case 113:
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
case 174:
            return var1;
        }
    };
    var _closure1_slot35 = var23;
    var23 = 21;
    var27 = var25[var23];
    var27 = var26.bind(var1)(var27);
    var27 = var27.Millis;
    var27 = var27.HOUR;
    var27 = var28 * var27;
    var _closure1_slot36 = var27;
    var23 = var25[var23];
    var23 = var26.bind(var1)(var23);
    var23 = var23.Millis;
    var23 = var23.MINUTE;
    var _closure1_slot37 = var23;
    var23 = 57;
    var23 = var25[var23];
    var25 = var24.bind(var1)(var23);
    var24 = var25.fileFinishedImporting;
    var23 = 'modules/quests/hooks/QuestHooks.tsx';
    var23 = var24.bind(var25)(var23);
    var3['useQuests'] = var22;
    var3['sortQuests'] = var21;
    var3['QuestTabs'] = var20;
    var3['QuestQueryParams'] = var19;
    var19 = function useFilteredQuests(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var13 = arg1;
            var9 = arguments[1];
            var12 = undefined;
            if(!(var9 === var12)) { _fun0027_ip = 135; continue _fun0027 }
case 32:
            var9 = _closure1_slot28;
case 135:
            var3 = _closure1_slot40;
            var2 = {'fetchPolicy': 'cache-and-network', 'callerSource': 'use_filtered_quests'};
            var2 = var3.bind(var12)(var2);
            var5 = var2.quests;
            var4 = var2.excludedQuests;
            var3 = var2.isFetchingCurrentQuests;
            var2 = var2.hasFetched;
            var6 = global;
            var8 = var6.Map;
            var7 = var5.map;
            var6 = function(arg1) {
                var2 = arg1;
                var3 = var2.id;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var18 = var7.bind(var5)(var6);
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var19 = var7;
            var6 = new var19[var8](var18, var17);
            var10 = var6 instanceof Object ? var6 : var7;
            var6 = function useAllQuests(arg1, arg2) {
                var6 = arg1;
                var5 = arg2;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var5;
                var7 = _closure1_slot5;
                var4 = var7.useRef;
                var3 = new Array(0);
                var3 = var4.bind(var7)(var3);
                var _closure3_slot2 = var3;
                var7 = _closure1_slot5;
                var4 = var7.useRef;
                var3 = var5.sortMethod;
                var3 = var4.bind(var7)(var3);
                var _closure3_slot3 = var3;
                var7 = _closure1_slot5;
                var4 = var7.useRef;
                var3 = var5.filters;
                var3 = var4.bind(var7)(var3);
                var _closure3_slot4 = var3;
                var7 = _closure1_slot5;
                var4 = var7.useRef;
                var3 = 0;
                var3 = var4.bind(var7)(var3);
                var _closure3_slot5 = var3;
                var4 = _closure1_slot5;
                var3 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.length;
                        var3 = 0;
                        if(!(var3 !== var2)) { _fun0028_ip = 175; continue _fun0028 }
case 135:
                        var2 = _closure3_slot2;
                        var2 = var2.current;
                        var2 = var2.length;
                        if(!(var2 > var3)) { _fun0028_ip = 176; continue _fun0028 }
case 177:
                        var2 = _closure3_slot5;
                        var3 = var2.current;
                        var2 = _closure3_slot0;
                        var2 = var2.length;
                        if(!(var3 === var2)) { _fun0028_ip = 176; continue _fun0028 }
case 7:
                        var2 = _closure3_slot3;
                        var3 = var2.current;
                        var2 = _closure3_slot1;
                        var2 = var2.sortMethod;
                        if(!(var3 === var2)) { _fun0028_ip = 176; continue _fun0028 }
case 178:
                        var2 = _closure3_slot4;
                        var3 = var2.current;
                        var2 = _closure3_slot1;
                        var2 = var2.filters;
                        if(!(var3 !== var2)) { _fun0028_ip = 179; continue _fun0028 }
case 176:
                        var5 = _closure1_slot48;
                        var3 = _closure3_slot0;
                        var4 = _closure3_slot1;
                        var2 = undefined;
                        var6 = var5.bind(var2)(var3, var4);
                        var5 = var6.map;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var2 = var5.bind(var6)(var2);
                        var5 = _closure3_slot2;
                        var5['current'] = var2;
                        var6 = _closure3_slot3;
                        var5 = var4.sortMethod;
                        var6['current'] = var5;
                        var5 = _closure3_slot4;
                        var4 = var4.filters;
                        var5['current'] = var4;
                        var4 = _closure3_slot5;
                        var3 = var3.length;
                        var4['current'] = var3;
                        return var2;
case 179:
                        var1 = _closure3_slot2;
                        var1 = var1.current;
                        return var1;
case 175:
                        var1 = new Array(0);
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var7 = var6.bind(var12)(var5, var9);
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
                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                            var4 = arg1;
                            var5 = var4.userStatus;
                            var3 = null;
                            var6 = var3 == var5;
                            var1 = undefined;
                            if(var6) { _fun0029_ip = 39; continue _fun0029 }
case 29:
                            var1 = var5.completedAt;
case 39:
                            var1 = var3 != var1;
                            var4 = var4.userStatus;
                            var5 = var3 == var4;
                            var2 = undefined;
                            if(var5) { _fun0029_ip = 142; continue _fun0029 }
case 173:
                            var2 = var4.claimedAt;
case 142:
                            var2 = var3 != var2;
                            if(!var1) { _fun0029_ip = 7; continue _fun0029 }
case 130:
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
                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                        var3 = _closure3_slot1;
                        var3 = var3.length;
                        var4 = 0;
                        if(!(var4 !== var3)) { _fun0030_ip = 180; continue _fun0030 }
case 29:
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var3 = var3.length;
                        if(!(var3 > var4)) { _fun0030_ip = 50; continue _fun0030 }
case 51:
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var4 = var3.length;
                        var3 = _closure3_slot1;
                        var3 = var3.length;
                        if(!(var4 !== var3)) { _fun0030_ip = 181; continue _fun0030 }
case 50:
                        var5 = _closure3_slot1;
                        var4 = var5.sort;
                        var3 = function(arg1, arg2) {
                            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                                var4 = arg1;
                                var2 = arg2;
                                var3 = var4.userStatus;
                                var5 = null;
                                var7 = var5 == var3;
                                var6 = undefined;
                                var1 = undefined;
                                if(var7) { _fun0031_ip = 108; continue _fun0031 }
case 36:
                                var1 = var3.claimedAt;
case 108:
                                var3 = var5 == var1;
                                var7 = var2.userStatus;
                                var8 = var5 == var7;
                                var1 = undefined;
                                if(var8) { _fun0031_ip = 28; continue _fun0031 }
case 182:
                                var1 = var7.claimedAt;
case 28:
                                var1 = var5 == var1;
                                if(!(var3 === var1)) { _fun0031_ip = 183; continue _fun0031 }
case 112:
                                var5 = _closure1_slot49;
                                var4 = var4.config;
                                var4 = var4.rewardsConfig;
                                var4 = var4.rewardsExpireAt;
                                var2 = var2.config;
                                var2 = var2.rewardsConfig;
                                var2 = var2.rewardsExpireAt;
                                var1 = _closure1_slot29;
                                var1 = var1.DESC;
                                var1 = var5.bind(var6)(var4, var2, var1);
                                _fun0031_ip = 144; continue _fun0031;
case 183:
                                var2 = 1;
                                if(!var3) { _fun0031_ip = 184; continue _fun0031 }
case 185:
                                var2 = _closure1_slot27;
case 184:
                                var1 = var2;
case 144:
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
case 181:
                        var1 = _closure3_slot2;
                        var1 = var1.current;
                        return var1;
case 180:
                        var1 = new Array(0);
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = var1.bind(var12)(var5);
            var5 = new Array(0);
            var6 = _closure1_slot38;
            var8 = _closure1_slot30;
            var8 = var8.ALL;
            if(!(var13 === var8)) { _fun0027_ip = 186; continue _fun0027 }
case 14:
            var1 = var7;
case 186:
            var8 = var6.bind(var12)(var1);
            var6 = var8.bind(var12)();
            var1 = var6.done;
            var7 = null;
            if(var1) { _fun0027_ip = 187; continue _fun0027 }
case 188:
            var14 = var6.value;
            var1 = var10.get;
            var14 = var1.bind(var10)(var14);
            var15 = var7 != var14;
            if(!var15) { _fun0027_ip = 189; continue _fun0027 }
case 190:
            var1 = _closure1_slot30;
            var1 = var1.ALL;
            var15 = var13 === var1;
case 189:
            if(!var15) { _fun0027_ip = 191; continue _fun0027 }
case 45:
            var15 = var9.removeExpiredQuests;
case 191:
            if(!var15) { _fun0027_ip = 192; continue _fun0027 }
case 193:
            var1 = _closure1_slot50;
            var15 = var1.bind(var12)(var14);
case 192:
            var1 = var7 == var14;
            if(var1) { _fun0027_ip = 194; continue _fun0027 }
case 195:
            var1 = var15;
case 194:
            if(var1) { _fun0027_ip = 196; continue _fun0027 }
case 197:
            var1 = var5.push;
            var1 = var1.bind(var5)(var14);
case 196:
            var14 = var8.bind(var12)();
            var1 = var14.done;
            var6 = var14;
            if(!var1) { _fun0027_ip = 188; continue _fun0027 }
case 187:
            var1 = {};
            var1['quests'] = var5;
            var1['excludedQuests'] = var4;
            var1['isFetchingCurrentQuests'] = var3;
            var1['hasFetched'] = var2;
            return var1;
        }
    };
    var3['useFilteredQuests'] = var19;
    var19 = function useClaimedQuests() {
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
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0032_ip = 137; continue _fun0032 }
case 164:
                var3 = _closure2_slot0;
                var2 = var3.current;
case 137:
                if(var2) { _fun0032_ip = 41; continue _fun0032 }
case 198:
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
    var3['useClaimedQuests'] = var19;
    var19 = function useExpiredQuestsMap() {
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
    var3['useExpiredQuestsMap'] = var19;
    var19 = function useShouldShowBonusOrbsUX(arg1, arg2) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot51;
            var6 = undefined;
            var1 = var1.bind(var6)(var2);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 25;
            var4 = var7[var3];
            var9 = var5.bind(var6)(var4);
            var8 = var9.hasVirtualCurrencyReward;
            var4 = var2.config;
            var4 = var8.bind(var9)(var4);
            var3 = var7[var3];
            var8 = var5.bind(var6)(var3);
            var3 = var8.hasPremiumOrbQuantity;
            var2 = var2.config;
            var3 = var3.bind(var8)(var2);
            var2 = 27;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.QuestOrbMultiplierEligibilityType;
            var5 = var2.INELIGIBLE;
            var2 = arg2;
            var2 = var2 !== var5;
            var1 = !var1;
            if(!var1) { _fun0033_ip = 199; continue _fun0033 }
case 111:
            var1 = var4;
case 199:
            if(!var1) { _fun0033_ip = 183; continue _fun0033 }
case 200:
            var1 = var3;
case 183:
            if(!var1) { _fun0033_ip = 185; continue _fun0033 }
case 201:
            var1 = var2;
case 185:
            return var1;
        }
    };
    var3['useShouldShowBonusOrbsUX'] = var19;
    var19 = function useQuestOrbRewardMultiplier(arg1) {
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
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var4 = _closure1_slot12;
                var2 = var4.getQuest;
                var1 = _closure2_slot0;
                var2 = var2.bind(var4)(var1);
                var1 = null;
                var4 = var1 == var2;
                if(var4) { _fun0034_ip = 202; continue _fun0034 }
case 171:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 25;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getQuestOrbMultiplier;
                var2 = var2.config;
                var1 = var3.bind(var4)(var2);
case 202:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useQuestOrbRewardMultiplier'] = var19;
    var3['useIsQuestExpired'] = var18;
    var18 = function useIsQuestEligibleForMembersListPopout(arg1, arg2, arg3) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
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
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot1;
                    var1 = null;
                    var6 = var1 == var2;
                    var2 = undefined;
                    if(var6) { _fun0036_ip = 177; continue _fun0036 }
case 3:
                    var5 = _closure2_slot1;
                    var2 = var5.channelId;
case 177:
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0036_ip = 28; continue _fun0036 }
case 203:
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
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0037_ip = 141; continue _fun0037 }
case 138:
                    var1 = var2.id;
case 141:
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
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0038_ip = 151; continue _fun0038 }
case 152:
                    var4 = _closure1_slot12;
                    var3 = var4.isQuestExpired;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 151:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var10, var3, var7);
            var3 = null;
            if(!(var3 != var1)) { _fun0035_ip = 25; continue _fun0035 }
case 179:
            if(var9) { _fun0035_ip = 25; continue _fun0035 }
case 61:
            if(var7) { _fun0035_ip = 25; continue _fun0035 }
case 204:
            var7 = arg3;
            if(!(var8 !== var7)) { _fun0035_ip = 25; continue _fun0035 }
case 189:
            var7 = var1.userStatus;
            var8 = var3 == var7;
            var1 = undefined;
            if(var8) { _fun0035_ip = 205; continue _fun0035 }
case 62:
            var1 = var7.claimedAt;
case 205:
            var1 = var3 != var1;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 22;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.isStreamingAndCanWatch;
            var2 = var2.bind(var3)(var5, var4);
            if(!var1) { _fun0035_ip = 206; continue _fun0035 }
case 207:
            var1 = !var2;
case 206:
            var1 = !var1;
            return var1;
case 25:
            var1 = false;
            return var1;
        }
    };
    var3['useIsQuestEligibleForMembersListPopout'] = var18;
    var18 = function useQuestFormattedDate(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var7 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var7;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0039_ip = 141; continue _fun0039 }
case 208:
            var2 = {};
            var3 = 'short';
            var2['dateStyle'] = var3;
            var6 = var2;
case 141:
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
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = '';
                    if(var3) { _fun0040_ip = 114; continue _fun0040 }
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
case 114:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useQuestFormattedDate'] = var18;
    var18 = function useOnOpenGameClick(arg1) {
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
        var3 = 28;
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
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var1 = _closure2_slot0;
                var3 = var1.id;
                var2 = _closure1_slot21;
                if(!(var3 === var2)) { _fun0041_ip = 122; continue _fun0041 }
case 31:
                var2 = global;
                var4 = var2.window;
                var3 = var4.open;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 29;
                var6 = var6[var2];
                var2 = undefined;
                var7 = var7.bind(var2)(var6);
                var6 = var7.getArticleURL;
                var2 = _closure1_slot22;
                var2 = var2.VIRTUAL_CURRENCY_LEARN_MORE;
                var2 = var6.bind(var7)(var2);
                var2 = var3.bind(var4)(var2);
                _fun0041_ip = 209; continue _fun0041;
case 122:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 30;
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
case 209:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnOpenGameClick'] = var18;
    var3['useIsQuestProgressingOnDesktop'] = var17;
    var3['useIsQuestProgressingOnConsole'] = var16;
    var3['useIsQuestProgressingVideoQuest'] = var15;
    var3['useIsQuestProgressing'] = var14;
    var3['useQuestTaskDetails'] = var13;
    var3['useThirdPartyTaskDetails'] = var12;
    var12 = function(arg1) {
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
        var2 = 28;
        var2 = var5[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useQuestImpression;
        var2 = var2.bind(var3)();
        var _closure2_slot4 = var2;
        var1 = function() {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var2 = _closure2_slot3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 30;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var3);
                if(var2) { _fun0042_ip = 144; continue _fun0042 }
case 210:
                var4 = var5.openConsoleConnectionSettings;
                var3 = {};
                var2 = _closure2_slot0;
                var3['quest'] = var2;
                var2 = {};
                var7 = _closure2_slot1;
                var2['content'] = var7;
                var7 = 33;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.VIEW_CONSOLE_CONNECTIONS_LINK;
                var2['ctaContent'] = var7;
                var10 = _closure2_slot4;
                var7 = null;
                var10 = var7 == var10;
                var7 = undefined;
                if(var10) { _fun0042_ip = 199; continue _fun0042 }
case 115:
                var11 = _closure2_slot4;
                var10 = var11.getId;
                var7 = var10.bind(var11)();
case 199:
                var2['impressionId'] = var7;
                var7 = _closure2_slot2;
                var2['sourceQuestContent'] = var7;
                var2 = var4.bind(var5)(var3, var2);
                _fun0042_ip = 23; continue _fun0042;
case 144:
                var4 = var5.openAddConsoleConnectionModal;
                var3 = {};
                var2 = _closure2_slot0;
                var3['quest'] = var2;
                var2 = {};
                var7 = _closure2_slot1;
                var2['content'] = var7;
                var7 = 33;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.CONNECT_CONSOLE_LINK;
                var2['ctaContent'] = var7;
                var8 = _closure2_slot4;
                var7 = null;
                var8 = var7 == var8;
                var7 = undefined;
                if(var8) { _fun0042_ip = 211; continue _fun0042 }
case 160:
                var9 = _closure2_slot4;
                var8 = var9.getId;
                var7 = var8.bind(var9)();
case 211:
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
    var3['useConnectedConsoleLinkOnClick'] = var12;
    var3['useGetOrFetchApplicationForConsoleQuests'] = var11;
    var11 = function useQuestForMemberListSocialEntryPoint(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
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
            var5 = _closure1_slot57;
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
                var1 = 22;
                var1 = var6[var1];
                var3 = undefined;
                var8 = var5.bind(var3)(var1);
                var7 = var8.filterQuestsForSocialEntrypoints;
                var4 = _closure2_slot1;
                var2 = _closure1_slot15;
                var4 = var7.bind(var8)(var4, var2);
                var2 = 35;
                var2 = var6[var2];
                var3 = var5.bind(var3)(var2);
                var2 = var3.getQuestsFromActivities;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            };
            var2 = var5.bind(var6)(var2, var4);
            var1 = _closure1_slot51;
            var3 = var1.bind(var3)(var2);
            var1 = null;
            if(var3) { _fun0043_ip = 212; continue _fun0043 }
case 126:
            var1 = var2;
case 212:
            return var1;
        }
    };
    var3['useQuestForMemberListSocialEntryPoint'] = var11;
    var11 = function useQuestCollectibles(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var7 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 25;
            var1 = var5[var1];
            var6 = undefined;
            var2 = var4.bind(var6)(var1);
            var1 = var2.hasCollectiblesQuestReward;
            var3 = var1.bind(var2)(var7);
            var1 = 36;
            var1 = var5[var1];
            var2 = var4.bind(var6)(var1);
            var1 = var2.getDefaultReward;
            var1 = var1.bind(var2)(var7);
            var2 = 37;
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
            if(var7) { _fun0044_ip = 144; continue _fun0044 }
case 121:
            var5 = var5.items;
            var4 = var4 == var5;
            var3 = undefined;
            if(var4) { _fun0044_ip = 144; continue _fun0044 }
case 129:
            var4 = 0;
            var3 = var5[var4];
case 144:
            var1['avatarDecoration'] = var3;
            var1['isFetching'] = var2;
            return var1;
        }
    };
    var3['useQuestCollectibles'] = var11;
    var11 = function useQuestPreviewActions(arg1) {
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
            var3 = function handleOverridePreviewClick(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.overrideQuestForPlacement;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1['handleOverridePreviewClick'] = var3;
            var2 = function handleResetHasBeenSeenClick() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var2 = undefined;
                var4 = var5.bind(var2)(var1);
                var3 = var4.markAdContentUnseen;
                var1 = 38;
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
    var3['useQuestPreviewActions'] = var11;
    var3['useConnectedAccounts'] = var10;
    var10 = function(arg1) {
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
                    var1 = 39;
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
            var2 = 39;
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
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0045_ip = 213; continue _fun0045 }
case 164:
                    var2 = undefined;
                    var4 = undefined;
                    var6 = undefined;
                    var8 = undefined;
                    var3 = _closure2_slot5;
                    if(var3) { _fun0045_ip = 214; continue _fun0045 }
case 108:
                    var3 = _closure2_slot2;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0045_ip = 5; continue _fun0045 }
case 153:
                    var3 = _closure2_slot2;
                    var3 = var3.bind(var2)();
case 5:
                    var9 = _closure2_slot6;
                    var3 = true;
                    var3 = var9.bind(var2)(var3);
                    var4 = null;
case 215: // try_start_0
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
case 216:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0045_ip = 217; continue _fun0045 }
case 116:
                    var4 = var3;
                    var10 = _closure2_slot4;
                    var9 = var3.errorHints;
                    var9 = var10.bind(var2)(var9);
case 218: // try_end0
                    var10 = _closure2_slot6;
                    var9 = false;
                    var9 = var10.bind(var2)(var9);
                    var9 = _closure2_slot3;
                    if(!(var7 != var9)) { _fun0045_ip = 214; continue _fun0045 }
case 58:
                    var10 = _closure2_slot3;
                    var9 = var4;
                    var8 = var9;
                    var11 = var7 == var9;
                    var9 = undefined;
                    if(var11) { _fun0045_ip = 46; continue _fun0045 }
case 219:
                    var11 = var8;
                    var9 = var11.errorHints;
case 46:
                    var6 = var9;
                    if(!(var7 == var9)) { _fun0045_ip = 220; continue _fun0045 }
case 221:
                    var9 = new Array(0);
                    _fun0045_ip = 222; continue _fun0045;
case 220:
                    var9 = var6;
case 222:
                    var9 = var10.bind(var2)(var9);
                    _fun0045_ip = 214; continue _fun0045;
case 217:
                    var10 = _closure2_slot6;
                    var9 = false;
                    var9 = var10.bind(var2)(var9);
                    var9 = _closure2_slot3;
                    if(!(var7 != var9)) { _fun0045_ip = 223; continue _fun0045 }
case 224:
                    var10 = _closure2_slot3;
                    var9 = var4;
                    var8 = var9;
                    var11 = var7 == var9;
                    var9 = undefined;
                    if(var11) { _fun0045_ip = 225; continue _fun0045 }
case 23:
                    var11 = var8;
                    var9 = var11.errorHints;
case 225:
                    var6 = var9;
                    if(!(var7 == var9)) { _fun0045_ip = 226; continue _fun0045 }
case 227:
                    var9 = new Array(0);
                    _fun0045_ip = 228; continue _fun0045;
case 226:
                    var9 = var6;
case 228:
                    var9 = var10.bind(var2)(var9);
case 223:
                    return var3;
case 229: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var10 = _closure2_slot6;
                    var9 = false;
                    var9 = var10.bind(var2)(var9);
                    var9 = _closure2_slot3;
                    if(!(var7 != var9)) { _fun0045_ip = 230; continue _fun0045 }
case 231:
                    var5 = _closure2_slot3;
                    var8 = var4;
                    var9 = var7 == var4;
                    var4 = undefined;
                    if(var9) { _fun0045_ip = 8; continue _fun0045 }
case 232:
                    var4 = var8.errorHints;
case 8:
                    var6 = var4;
                    if(!(var7 == var4)) { _fun0045_ip = 233; continue _fun0045 }
case 26:
                    var4 = new Array(0);
                    _fun0045_ip = 234; continue _fun0045;
case 233:
                    var4 = var6;
case 234:
                    var4 = var5.bind(var2)(var4);
case 230:
                    throw var3;
case 214:
                    return var2;
case 213:
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
    var3['useManuallyStartConsoleQuest'] = var10;
    var3['useWaitingForConsoleConnection'] = var9;
    var9 = function() {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var2 = _closure1_slot58;
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
            var4 = 29;
            var2 = var11[var4];
            var9 = var5.bind(var10)(var2);
            var7 = var9.getArticleURL;
            var3 = _closure1_slot22;
            var2 = var3.QUEST_HOW_TO_PLAYSTATION;
            var2 = var7.bind(var9)(var2);
            var4 = var11[var4];
            var5 = var5.bind(var10)(var4);
            var4 = var5.getArticleURL;
            var3 = var3.QUEST_HOW_TO_XBOX;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot0;
            var1 = 40;
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
            if(!var6) { _fun0046_ip = 21; continue _fun0046 }
case 235:
            var10 = var2;
case 21:
            var1['helpdeskArticle'] = var10;
            var5 = var5.bind(var9)(var4, var1);
            var1 = {};
            if(!var8) { _fun0046_ip = 236; continue _fun0046 }
case 237:
            if(!var6) { _fun0046_ip = 24; continue _fun0046 }
case 236:
            var4 = var7;
            if(var8) { _fun0046_ip = 238; continue _fun0046 }
case 239:
            var4 = var7;
            if(!var6) { _fun0046_ip = 238; continue _fun0046 }
case 24:
            var4 = var5;
case 238:
            var1['message'] = var4;
            var1['xboxURL'] = var3;
            var1['playstationURL'] = var2;
            return var1;
        }
    };
    var3['useQuestHowToHelpArticle'] = var9;
    var3['QuestProgressState'] = var8;
    var8 = function useProgressState(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var7 = arg1;
            var2 = var7.userStatus;
            var3 = null;
            var4 = var3 == var2;
            var6 = undefined;
            var1 = undefined;
            if(var4) { _fun0047_ip = 34; continue _fun0047 }
case 198:
            var1 = var2.enrolledAt;
case 34:
            var1 = var3 != var1;
            var4 = var7.userStatus;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0047_ip = 203; continue _fun0047 }
case 154:
            var2 = var4.completedAt;
case 203:
            var4 = var3 != var2;
            var5 = var7.userStatus;
            var8 = var3 == var5;
            var2 = undefined;
            if(var8) { _fun0047_ip = 240; continue _fun0047 }
case 114:
            var2 = var5.claimedAt;
case 240:
            var5 = var3 != var2;
            var3 = _closure1_slot31;
            var3 = var3.bind(var6)(var7);
            var6 = var3.percentComplete;
            var3 = 0;
            var3 = var6 > var3;
            if(var5) { _fun0047_ip = 117; continue _fun0047 }
case 216:
            if(var4) { _fun0047_ip = 123; continue _fun0047 }
case 44:
            if(!var3) { _fun0047_ip = 241; continue _fun0047 }
case 116:
            if(var1) { _fun0047_ip = 242; continue _fun0047 }
case 241:
            var3 = _closure1_slot33;
            if(var1) { _fun0047_ip = 218; continue _fun0047 }
case 124:
            var1 = var3.UNACCEPTED;
            _fun0047_ip = 184; continue _fun0047;
case 218:
            var1 = var3.ACCEPTED;
case 184:
            _fun0047_ip = 243; continue _fun0047;
case 242:
            var3 = _closure1_slot33;
            var1 = var3.IN_PROGRESS;
case 243:
            _fun0047_ip = 14; continue _fun0047;
case 123:
            var3 = _closure1_slot33;
            var1 = var3.COMPLETED;
case 14:
            _fun0047_ip = 244; continue _fun0047;
case 117:
            var2 = _closure1_slot33;
            var1 = var2.CLAIMED;
case 244:
            return var1;
        }
    };
    var3['useProgressState'] = var8;
    var8 = function useQuestCompletionDetails(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var2 = arg1;
            var8 = arguments[1];
            var5 = undefined;
            if(!(var8 === var5)) { _fun0048_ip = 32; continue _fun0048 }
case 245:
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
            var1 = _closure1_slot31;
            var1 = var1.bind(var5)(var2);
            var6 = var1.percentComplete;
            var1 = _closure1_slot56;
            var2 = var1.bind(var5)(var2);
            var4 = null;
            if(!(var4 != var2)) { _fun0048_ip = 246; continue _fun0048 }
case 247:
            var6 = var2.percentComplete;
case 246:
            var1 = {};
            var1['completedRatio'] = var6;
            var9 = 100;
            var9 = var9 * var6;
            var1['percentComplete'] = var9;
            if(!(var4 != var2)) { _fun0048_ip = 168; continue _fun0048 }
case 155:
            if(var8) { _fun0048_ip = 168; continue _fun0048 }
case 248:
            var8 = var4 == var2;
            var10 = undefined;
            if(var8) { _fun0048_ip = 147; continue _fun0048 }
case 249:
            var10 = var2.progress;
case 147:
            var4 = var4 == var2;
            var9 = undefined;
            if(var4) { _fun0048_ip = 57; continue _fun0048 }
case 58:
            var9 = var2.target;
case 57:
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var4 = '';
            var2 = '/';
            var2 = var8.bind(var4)(var10, var2, var9);
            _fun0048_ip = 193; continue _fun0048;
case 168:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 41;
            var3 = var8[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.formatPercent;
            var3 = {};
            var8 = 'floor';
            var3['roundingMode'] = var8;
            var2 = var4.bind(var5)(var7, var6, var3);
case 193:
            var1['completedRatioDisplay'] = var2;
            return var1;
        }
    };
    var3['useQuestCompletionDetails'] = var8;
    var3['useSelectedTaskPlatform'] = var7;
    var3['useTaskPlatformScreen'] = var6;
    var6 = function useQuestWarningTips(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var8 = arg1;
            var1 = _closure1_slot56;
            var7 = undefined;
            var11 = var1.bind(var7)(var8);
            var1 = _closure1_slot31;
            var6 = var1.bind(var7)(var8);
            var1 = _closure1_slot60;
            var4 = var1.bind(var7)(var8, var6);
            var3 = _closure1_slot4;
            var1 = 1;
            var1 = var3.bind(var7)(var4, var1);
            var14 = 0;
            var9 = var1[var14];
            var1 = _closure1_slot51;
            var12 = var1.bind(var7)(var8);
            var3 = var8.userStatus;
            var4 = null;
            var5 = var4 == var3;
            var1 = undefined;
            if(var5) { _fun0049_ip = 122; continue _fun0049 }
case 250:
            var1 = var3.enrolledAt;
case 122:
            var5 = var4 != var1;
            var3 = var8.userStatus;
            var10 = var4 == var3;
            var1 = undefined;
            if(var10) { _fun0049_ip = 44; continue _fun0049 }
case 115:
            var1 = var3.completedAt;
case 44:
            var13 = var4 != var1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 31;
            var1 = var1[var10];
            var1 = var3.bind(var7)(var1);
            var1 = var1.FirstPartyQuestTaskTypesSets;
            var15 = var1.DESKTOP;
            var3 = var15.has;
            var1 = var6.taskType;
            var1 = var3.bind(var15)(var1);
            if(!var1) { _fun0049_ip = 128; continue _fun0049 }
case 251:
            var3 = var6.percentComplete;
            var1 = var3 > var14;
case 128:
            var3 = var6.percentComplete;
            var3 = var14 === var3;
            if(!var5) { _fun0049_ip = 252; continue _fun0049 }
case 221:
            var5 = !var13;
case 252:
            if(!var5) { _fun0049_ip = 222; continue _fun0049 }
case 220:
            var5 = !var12;
case 222:
            if(!var5) { _fun0049_ip = 253; continue _fun0049 }
case 254:
            var5 = var4 == var11;
case 253:
            if(!var5) { _fun0049_ip = 197; continue _fun0049 }
case 217:
            if(var1) { _fun0049_ip = 194; continue _fun0049 }
case 255:
            if(!var3) { _fun0049_ip = 195; continue _fun0049 }
case 127:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 19;
            var4 = var12[var4];
            var4 = var11.bind(var7)(var4);
            var4 = var4.TaskPlatformScreen;
            var4 = var4.DESKTOP;
            var3 = var9 === var4;
case 195:
            var1 = var3;
case 194:
            var5 = var1;
case 197:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 16;
            var1 = var1[var9];
            var3 = var3.bind(var7)(var1);
            var1 = var3.isWeb;
            var3 = var1.bind(var3)();
            if(!var3) { _fun0049_ip = 256; continue _fun0049 }
case 257:
            var3 = var5;
case 256:
            if(!var3) { _fun0049_ip = 26; continue _fun0049 }
case 258:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 30;
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
            if(!var4) { _fun0049_ip = 259; continue _fun0049 }
case 260:
            var8 = var6.taskType;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var9.bind(var7)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.STREAM_ON_DESKTOP;
            var4 = var8 === var6;
case 259:
            if(!var4) { _fun0049_ip = 261; continue _fun0049 }
case 262:
            var4 = var5;
case 261:
            if(!var4) { _fun0049_ip = 263; continue _fun0049 }
case 264:
            var5 = var1.push;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 40;
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
case 263:
            if(!var3) { _fun0049_ip = 82; continue _fun0049 }
case 265:
            var3 = var1.push;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 40;
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
case 82:
            return var1;
        }
    };
    var3['useQuestWarningTips'] = var6;
    var6 = function useQuest(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
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
            if(!var3) { _fun0050_ip = 40; continue _fun0050 }
case 150:
            var1 = var2;
case 40:
            return var1;
        }
    };
    var3['useQuest'] = var6;
    var6 = function useNonNullableQuest(arg1, arg2) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var6;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 13;
            var4 = var4[var1];
            var1 = undefined;
            var9 = var5.bind(var1)(var4);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot12;
            var5 = new Array(1);
            var5[0] = var1;
            var4 = new Array(1);
            var4[0] = var7;
            var1 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getQuest;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var8.bind(var9)(var5, var1, var4);
            var1 = null;
            var5 = var1 != var4;
            if(!var5) { _fun0051_ip = 42; continue _fun0051 }
case 266:
            var1 = var4;
case 42:
            var _closure2_slot2 = var1;
            var5 = _closure1_slot5;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var1;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0052_ip = 235; continue _fun0052 }
case 152:
                    var2 = _closure1_slot12;
                    var3 = var2.quests;
                    var2 = var3.keys;
                    var14 = var2.bind(var3)();
                    var10 = new Array(0);
                    var13 = 0;
                    var15 = var10;
                    var2 = arraySpread(var15, var14, var13);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var7 = var5.bind(var2)(var3);
                    var6 = var7.captureQuestsException;
                    var3 = global;
                    var8 = var3.Error;
                    var11 = _closure2_slot0;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var3 = 'Quest unexpectedly missing from store: ';
                    var15 = var5.bind(var3)(var11);
                    var5 = var8.prototype;
                    var5 = Object.create(var5, {constructor: {value: var8}});
                    var16 = var5;
                    var3 = new var16[var8](var15, var14);
                    var5 = var3 instanceof Object ? var3 : var5;
                    var3 = {};
                    var8 = {};
                    var12 = 'useNonNullableQuest';
                    var8['source'] = var12;
                    var3['tags'] = var8;
                    var8 = {};
                    var8['questId'] = var11;
                    var8['storeQuestIds'] = var10;
                    var10 = var10.length;
                    var8['storeSize'] = var10;
                    var10 = _closure1_slot12;
                    var10 = var10.isFetchingCurrentQuests;
                    var8['isFetchingCurrentQuests'] = var10;
                    var9 = _closure1_slot12;
                    var9 = var9.lastFetchedCurrentQuests;
                    var8['lastFetchedCurrentQuests'] = var9;
                    var3['extra'] = var8;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = _closure2_slot1;
                    if(!(var4 != var3)) { _fun0052_ip = 235; continue _fun0052 }
case 267:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)();
case 235:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useNonNullableQuest'] = var6;
    var6 = function useQuestBarOrDockModeChangeTracking(arg1) {
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
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0053_ip = 33; continue _fun0053 }
case 152:
                var2 = _closure2_slot4;
                var3 = var2.current;
                var2 = _closure2_slot0;
                var1 = var3 !== var2;
case 33:
                if(!var1) { _fun0053_ip = 201; continue _fun0053 }
case 268:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 43;
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
case 201:
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
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var2 = _closure2_slot3;
                var1 = null;
                if(!(var1 == var2)) { _fun0054_ip = 163; continue _fun0054 }
case 269:
                var1 = undefined;
                return var1;
case 163:
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 43;
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
    var3['useQuestBarOrDockModeChangeTracking'] = var6;
    var6 = function useCosponsoredLogotypeAsset(arg1, arg2) {
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
        var3 = 44;
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
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                var2 = _closure2_slot2;
                var1 = null;
                if(!(var1 != var2)) { _fun0055_ip = 270; continue _fun0055 }
case 152:
                var2 = _closure2_slot1;
                if(!(var1 == var2)) { _fun0055_ip = 55; continue _fun0055 }
case 139:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 45;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isThemeDark;
                var4 = _closure2_slot3;
                var4 = var5.bind(var6)(var4);
                var2 = _closure1_slot24;
                if(var4) { _fun0055_ip = 240; continue _fun0055 }
case 165:
                var6 = var2.LIGHT;
                _fun0055_ip = 136; continue _fun0055;
case 240:
                var6 = var2.DARK;
case 136:
                _fun0055_ip = 266; continue _fun0055;
case 55:
                var6 = _closure2_slot1;
case 266:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 46;
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
case 270:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCosponsoredLogotypeAsset'] = var6;
    var6 = function useClaimedCollectibleRewardMessage(arg1) {
        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
            var9 = arg1;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 13;
            var2 = var7[var2];
            var6 = undefined;
            var8 = var4.bind(var6)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var5.bind(var8)(var3, var2);
            var2 = 25;
            var3 = var7[var2];
            var5 = var4.bind(var6)(var3);
            var3 = var5.getDefaultRewardName;
            var5 = var3.bind(var5)(var9, var8);
            var3 = var7[var2];
            var10 = var4.bind(var6)(var3);
            var3 = var10.getCollectibleQuestRewardDuration;
            var14 = var3.bind(var10)(var9);
            var3 = var7[var2];
            var10 = var4.bind(var6)(var3);
            var3 = var10.getCollectibleQuestRewardExtendableExpirationDate;
            var16 = var3.bind(var10)(var9);
            var3 = var7[var2];
            var10 = var4.bind(var6)(var3);
            var3 = var10.isCollectibleQuestRewardPermanentWithPremiumSubscription;
            var10 = var3.bind(var10)(var9);
            var2 = var7[var2];
            var3 = var4.bind(var6)(var2);
            var2 = var3.isCollectibleQuestRewardPremiumExtendable;
            var2 = var2.bind(var3)(var9);
            var3 = 47;
            var3 = var7[var3];
            var7 = var4.bind(var6)(var3);
            var4 = var7.isPremium;
            var3 = _closure1_slot26;
            var3 = var3.TIER_2;
            var8 = var4.bind(var7)(var8, var3);
            var3 = null;
            if(!(var3 != var14)) { _fun0056_ip = 271; continue _fun0056 }
case 190:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 40;
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
            if(var2) { _fun0056_ip = 272; continue _fun0056 }
case 273:
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
            _fun0056_ip = 274; continue _fun0056;
case 272:
            if(var10) { _fun0056_ip = 275; continue _fun0056 }
case 276:
            if(!var8) { _fun0056_ip = 277; continue _fun0056 }
case 278:
            var3 = var9;
case 277:
            _fun0056_ip = 279; continue _fun0056;
case 275:
            if(!var8) { _fun0056_ip = 280; continue _fun0056 }
case 281:
            var4 = var7;
case 280:
            var3 = var4;
case 279:
            var2 = var3;
case 274:
            return var2;
case 271:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 40;
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
    var3['useClaimedCollectibleRewardMessage'] = var6;
    var6 = function useLaunchInGameActivityQuest(arg1) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 23;
        var1 = var6[var1];
        var4 = undefined;
        var5 = var3.bind(var4)(var1);
        var3 = var5.getActivityApplicationId;
        var1 = arg1;
        var5 = var3.bind(var5)(var1);
        var1 = {};
        var3 = _closure1_slot1;
        var2 = 48;
        var2 = var6[var2];
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var2['applicationId'] = var5;
        var2 = var3.bind(var4)(var2);
        var1['launchInGameActivity'] = var2;
        return var1;
    };
    var3['useLaunchInGameActivityQuest'] = var6;
    var3['useIsPreviewerOnAnyQuest'] = var5;
    var5 = function() {
        var2 = _closure1_slot34;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var3['useShouldShowPreviewToolTab'] = var5;
    var5 = function(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            var2 = var5 == var6;
            var7 = undefined;
            var1 = undefined;
            if(var2) { _fun0057_ip = 198; continue _fun0057 }
case 152:
            var1 = var6.userStatus;
case 198:
            var1 = var5 != var1;
            if(!var1) { _fun0057_ip = 282; continue _fun0057 }
case 283:
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
case 282:
            var4 = _closure1_slot51;
            var8 = var5 != var6;
            var3 = null;
            if(!var8) { _fun0057_ip = 157; continue _fun0057 }
case 13:
            var3 = var6;
case 157:
            var4 = var4.bind(var7)(var3);
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0057_ip = 284; continue _fun0057 }
case 180:
            var6 = var6.userStatus;
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0057_ip = 284; continue _fun0057 }
case 144:
            var3 = var6.claimedAt;
case 284:
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
            if(var1) { _fun0057_ip = 127; continue _fun0057 }
case 255:
            var1 = var4;
case 127:
            if(var1) { _fun0057_ip = 189; continue _fun0057 }
case 285:
            var1 = var3;
case 189:
            if(var1) { _fun0057_ip = 211; continue _fun0057 }
case 45:
            var1 = var2;
case 211:
            var1 = !var1;
            return var1;
        }
    };
    var3['useShouldShowQuestsActivityPanelItem'] = var5;
    var5 = function() {
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
    var3['useQuestsWithPreviewAccess'] = var5;
    var5 = function useQuestHomeFilterOptions() {
        var5 = _closure1_slot17;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4[Symbol.iterator];
                    var4 = var1().next;
                    var2 = var4().value;
                    var3 = var1;
                    var6 = undefined;
                    var3 = var3 === var6;
                    var5 = undefined;
                    if(var3) { _fun0058_ip = 138; continue _fun0058 }
case 139:
                    var5 = var2;
case 138:
                    var2 = undefined;
                    if(var3) { _fun0058_ip = 140; continue _fun0058 }
case 141:
                    var7 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0058_ip = 140; continue _fun0058 }
case 142:
                    var2 = var7;
                    var3 = var4;
case 140:
                    if(var3) { _fun0058_ip = 143; continue _fun0058 }
case 110:
                    var1.return();
case 143:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 36;
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
    };
    var3['useQuestHomeFilterOptions'] = var5;
    var5 = function useQuestHomeSortOptions() {
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
                var4 = 36;
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
    var3['useQuestHomeSortOptions'] = var5;
    var5 = function useQuestHomeSortingFilteringAnalytics(arg1) {
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
            var1 = 49;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var6 = var7.track;
            var2 = _closure1_slot25;
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
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
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
                var1 = 49;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.track;
                var4 = _closure1_slot25;
                var5 = var4.QUEST_HOME_FILTERS_CHANGED;
                var4 = {};
                var4['filters'] = var3;
                var8 = _closure2_slot4;
                var8 = var8.current;
                var9 = null;
                if(!(var9 == var8)) { _fun0059_ip = 42; continue _fun0059 }
case 172:
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
    var3['useQuestHomeSortingFilteringAnalytics'] = var5;
    var5 = function(arg1) {
        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = function() {
                _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var1 = var1 == var3;
                    var2 = undefined;
                    if(var1) { _fun0061_ip = 286; continue _fun0061 }
case 138:
                    var1 = var3.isStaff;
                    var2 = var1.bind(var3)();
case 286:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            if(var1) { _fun0060_ip = 151; continue _fun0060 }
case 171:
            var2 = arg1;
            var1 = var2.preview;
case 151:
            return var1;
        }
    };
    var3['useShouldShowQuestPreviewOverrides'] = var5;
    var5 = function useQuestHomeHeroShelf(arg1) {
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
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                var2 = _closure2_slot0;
                var4 = var2.questIds;
                var2 = null;
                if(!(var2 == var4)) { _fun0062_ip = 36; continue _fun0062 }
case 135:
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
                var2 = 50;
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
                if(!(!(var3 <= var1))) { _fun0062_ip = 155; continue _fun0062 }
case 44:
                var1 = {};
                var1['shelfQuests'] = var2;
                var2 = true;
                var1['isShelfEnabled'] = var2;
                _fun0062_ip = 287; continue _fun0062;
case 155:
                var2 = {};
                var3 = new Array(0);
                var2['shelfQuests'] = var3;
                var3 = false;
                var2['isShelfEnabled'] = var3;
                var1 = var2;
case 287:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useQuestHomeHeroShelf'] = var5;
    var3['useLiveQuestHomeHero'] = var4;
    var4 = function useFetchQuestHomeHero(arg1) {
        _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var9 = true;
            var3 = var2.bind(var3)(var9);
            var2 = _closure1_slot4;
            var10 = undefined;
            var12 = 2;
            var3 = var2.bind(var10)(var3, var12);
            var7 = 0;
            var2 = var3[var7];
            var6 = 1;
            var3 = var3[var6];
            var _closure2_slot1 = var3;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var4 = var3.bind(var4)(var9);
            var3 = _closure1_slot4;
            var4 = var3.bind(var10)(var4, var12);
            var3 = var4[var7];
            var4 = var4[var6];
            var _closure2_slot2 = var4;
            var9 = _closure1_slot5;
            var4 = var9.useState;
            var13 = false;
            var9 = var4.bind(var9)(var13);
            var4 = _closure1_slot4;
            var4 = var4.bind(var10)(var9, var12);
            var9 = var4[var7];
            var4 = var4[var6];
            var _closure2_slot3 = var4;
            var11 = _closure1_slot5;
            var4 = var11.useState;
            var11 = var4.bind(var11)(var13);
            var4 = _closure1_slot4;
            var4 = var4.bind(var10)(var11, var12);
            var7 = var4[var7];
            var4 = var4[var6];
            var _closure2_slot4 = var4;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 13;
            var4 = var11[var4];
            var12 = var6.bind(var10)(var4);
            var11 = var12.useStateFromStores;
            var4 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot12;
                var1 = var2.isFetchingQuestHomeHero;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var11.bind(var12)(var6, var4);
            var6 = _closure1_slot61;
            var6 = var6.bind(var10)();
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
                            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0064_ip = 288; continue _fun0064 }
case 164: // try_start_0 // try_start_2
                                var4 = _closure2_slot0;
                                var2 = null;
                                if(!(var2 == var4)) { _fun0064_ip = 40; continue _fun0064 }
case 31:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 15;
                                var2 = var5[var2];
                                var6 = undefined;
                                var4 = var4.bind(var6)(var2);
                                var2 = var4.fetchQuestHomeHero;
                                var2 = var2.bind(var4)();
                                SaveGenerator(address=62);
case 110:
                                return var2;
case 215:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(!var4) { _fun0064_ip = 185; continue _fun0064 }
case 53: // try_end0 // try_end2
                                var5 = _closure2_slot1;
                                var4 = false;
                                var4 = var5.bind(var6)(var4);
                                return var2;
case 40: // try_start_1 // try_start_3
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 15;
                                var2 = var5[var2];
                                var5 = undefined;
                                var6 = var4.bind(var5)(var2);
                                var4 = var6.fetchQuestHomeHeroPreview;
                                var2 = _closure2_slot0;
                                var2 = var4.bind(var6)(var2);
                                SaveGenerator(address=126);
case 289:
                                return var2;
case 183:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0064_ip = 132; continue _fun0064 }
case 185: // try_end1
                                _fun0064_ip = 128; continue _fun0064;
case 132: // try_end3
                                var4 = _closure2_slot1;
                                var3 = false;
                                var3 = var4.bind(var5)(var3);
                                return var2;
case 284: // try_start_4 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=1);
                                var5 = _closure2_slot2;
                                var4 = undefined;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                var3 = _closure2_slot3;
                                var2 = true;
                                var2 = var3.bind(var4)(var2);
case 128: // try_end4
                                var4 = _closure2_slot1;
                                var2 = undefined;
                                var3 = false;
                                var3 = var4.bind(var2)(var3);
                                return var2;
case 220: // catch_target2 // catch_target3 // catch_target4
                                CatchBlockStart(arg_register=1);
                                var5 = _closure2_slot1;
                                var4 = undefined;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                throw var2;
case 288:
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
                            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0065_ip = 191; continue _fun0065 }
case 164: // try_start_0 // try_start_1
                                var4 = _closure2_slot5;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0065_ip = 212; continue _fun0065 }
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
                                var3 = 51;
                                var3 = var6[var3];
                                var6 = undefined;
                                var3 = var9.bind(var6)(var3);
                                var3 = var3.preloadImage;
                                var3 = var7.bind(var8)(var3);
                                var3 = var4.bind(var5)(var3);
                                SaveGenerator(address=137);
case 290:
                                return var3;
case 291:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                if(var4) { _fun0065_ip = 292; continue _fun0065 }
case 293: // try_end0
                                _fun0065_ip = 252; continue _fun0065;
case 292: // try_end1
                                var5 = _closure2_slot2;
                                var4 = false;
                                var4 = var5.bind(var6)(var4);
                                return var3;
case 212:
                                var4 = _closure2_slot2;
                                var2 = undefined;
                                var3 = false;
                                var3 = var4.bind(var2)(var3);
                                return var2;
case 244: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register=1);
                                var4 = _closure2_slot4;
                                var3 = undefined;
                                var2 = true;
                                var2 = var4.bind(var3)(var2);
case 252: // try_end2
                                var4 = _closure2_slot2;
                                var2 = undefined;
                                var3 = false;
                                var3 = var4.bind(var2)(var3);
                                return var2;
case 255: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register=1);
                                var5 = _closure2_slot2;
                                var4 = undefined;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                throw var2;
case 191:
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
            if(var9) { _fun0063_ip = 294; continue _fun0063 }
case 295:
            var5 = null;
            if(var7) { _fun0063_ip = 294; continue _fun0063 }
case 296:
            var5 = var6;
case 294:
            var1['questHomeHero'] = var5;
            if(var2) { _fun0063_ip = 297; continue _fun0063 }
case 298:
            var2 = var4;
case 297:
            if(var2) { _fun0063_ip = 299; continue _fun0063 }
case 300:
            var2 = var3;
case 299:
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['useFetchQuestHomeHero'] = var4;
    var4 = function useFetchQuestHomeBounties() {
        _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
            var1 = arguments[0];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0066_ip = 269; continue _fun0066 }
case 37:
            var1 = {};
case 269:
            var9 = var1.previewAdCreativeIds;
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 52;
            var1 = var8[var1];
            var1 = var5.bind(var7)(var1);
            var4 = var1.QuestHomeBountiesExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var10 = _closure1_slot14;
            var10 = var10.QUEST_HOME_MOBILE;
            var1['location'] = var10;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            _closure2_slot1 = var1;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var10 = var3.bind(var4)(var1);
            var4 = _closure1_slot4;
            var3 = 2;
            var10 = var4.bind(var7)(var10, var3);
            var3 = 0;
            var3 = var10[var3];
            var4 = 1;
            var4 = var10[var4];
            _closure2_slot2 = var4;
            var4 = 13;
            var4 = var8[var4];
            var8 = var5.bind(var7)(var4);
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
            var6 = new Array(2);
            var6[0] = var1;
            var6[1] = var9;
            var2 = function() {
                _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                    var3 = function loadBounties() {
                        var1 = undefined;
                        var4 = _closure3_slot4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot3 = var3;
                    var2 = function _loadBounties() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0068_ip = 195; continue _fun0068 }
case 164:
                                    var2 = global;
                                    var3 = var2.Date;
                                    var2 = var3.now;
                                    var2 = var2.bind(var3)();
                                    _closure3_slot1 = var2;
case 171: // try_start_0
                                    var5 = _closure2_slot0;
                                    var2 = null;
                                    if(!(var2 != var5)) { _fun0068_ip = 215; continue _fun0068 }
case 154:
                                    var2 = _closure2_slot0;
                                    var5 = var2.length;
                                    var2 = 0;
                                    if(!(!(var5 > var2))) { _fun0068_ip = 155; continue _fun0068 }
case 215:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 53;
                                    var2 = var6[var2];
                                    var7 = undefined;
                                    var5 = var5.bind(var7)(var2);
                                    var2 = var5.fetchQuestHomeBounties;
                                    var2 = var2.bind(var5)();
                                    SaveGenerator(address=101);
case 247:
                                    return var2;
case 301:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(!var5) { _fun0068_ip = 302; continue _fun0068 }
case 176: // try_end0
                                    var5 = _closure3_slot0;
                                    if(var5) { _fun0068_ip = 124; continue _fun0068 }
case 146:
                                    var6 = _closure2_slot2;
                                    var5 = false;
                                    var5 = var6.bind(var7)(var5);
case 124:
                                    return var2;
case 155: // try_start_1
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 53;
                                    var2 = var6[var2];
                                    var6 = undefined;
                                    var7 = var5.bind(var6)(var2);
                                    var5 = var7.fetchBountyPreview;
                                    var2 = _closure2_slot0;
                                    var2 = var5.bind(var7)(var2);
                                    SaveGenerator(address=172);
case 303:
                                    return var2;
case 304:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0068_ip = 161; continue _fun0068 }
case 302: // try_end1
                                    var5 = _closure3_slot0;
                                    if(var5) { _fun0068_ip = 159; continue _fun0068 }
case 188:
                                    var8 = _closure2_slot2;
                                    var7 = undefined;
                                    var5 = false;
                                    var5 = var8.bind(var7)(var5);
case 159:
                                    var5 = undefined;
                                    return var5;
case 161:
                                    var5 = _closure3_slot0;
                                    if(var5) { _fun0068_ip = 189; continue _fun0068 }
case 305:
                                    var5 = _closure2_slot2;
                                    var4 = false;
                                    var4 = var5.bind(var6)(var4);
case 189:
                                    return var2;
case 45: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register=1);
                                    var3 = _closure3_slot0;
                                    if(var3) { _fun0068_ip = 18; continue _fun0068 }
case 170:
                                    var5 = _closure2_slot2;
                                    var4 = undefined;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
case 18:
                                    throw var2;
case 195:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure3_slot4 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot4 = var2;
                    var4 = _closure2_slot1;
                    var2 = undefined;
                    if(var4) { _fun0067_ip = 51; continue _fun0067 }
case 268:
                    return var2;
case 51:
                    var4 = false;
                    var _closure3_slot0 = var4;
                    var4 = 0;
                    var _closure3_slot1 = var4;
                    var2 = var3.bind(var2)();
                    var2 = global;
                    var5 = var2.window;
                    var4 = var5.setInterval;
                    var3 = _closure1_slot37;
                    var2 = function() {
                        _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var3 = var1.bind(var2)();
                            var2 = _closure3_slot1;
                            var3 = var3 - var2;
                            var2 = _closure1_slot36;
                            if(!(var3 > var2)) { _fun0069_ip = 5; continue _fun0069 }
case 177:
                            var2 = _closure3_slot3;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
case 5:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    var _closure3_slot2 = var2;
                    var1 = function() {
                        var2 = true;
                        _closure3_slot0 = var2;
                        var2 = global;
                        var3 = var2.window;
                        var2 = var3.clearInterval;
                        var1 = _closure3_slot2;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var6);
            var2 = {};
            if(var1) { _fun0066_ip = 306; continue _fun0066 }
case 21:
            var1 = new Array(0);
            var2['questHomeBounties'] = var1;
            var1 = false;
            var2['isLoading'] = var1;
            var1 = var2;
            _fun0066_ip = 307; continue _fun0066;
case 306:
            var2['questHomeBounties'] = var5;
            if(var3) { _fun0066_ip = 308; continue _fun0066 }
case 227:
            var3 = var4;
case 308:
            var2['isLoading'] = var3;
            var1 = var2;
case 307:
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
        _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 54;
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
            if(var8) { _fun0070_ip = 309; continue _fun0070 }
case 41:
            var3 = var6.enrolledAt;
case 309:
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
                _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0071_ip = 13; continue _fun0071 }
case 164:
                    var4 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 55;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.SurveyActionTypes;
                    if(var4) { _fun0071_ip = 28; continue _fun0071 }
case 310:
                    var4 = var2.AD_IMPRESSION_QUEST_BAR_OPT_IN;
                    _fun0071_ip = 215; continue _fun0071;
case 28:
                    var4 = var2.AD_IMPRESSION_QUEST_BAR_OPT_OUT;
case 215:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 56;
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