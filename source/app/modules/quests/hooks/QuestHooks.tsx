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
            var9 = _closure1_slot37;
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
            var7 = _closure1_slot37;
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
    var _closure1_slot36 = var1;
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
    var _closure1_slot37 = var1;
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
                    var4 = var1.fetchPolicy;
                    var1 = 'cache-only';
                    if(!(var1 !== var4)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var1 = 'cache-or-network';
                    if(!(var1 !== var4)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var3 = 'cache-and-network';
                    var1 = true;
                    if(!(var3 !== var4)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var3 = _closure2_slot0;
                    var3 = var3.fetchPolicy;
                    var3 = undefined;
                    return var3;
case 40:
                    var4 = _closure2_slot4;
                    var3 = 0;
                    var1 = var3 === var4;
case 42:
                    if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 46:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0005_ip = 44; continue _fun0005 }
case 47:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0005_ip = 44; continue _fun0005 }
case 48:
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
                    if(!var5) { _fun0005_ip = 49; continue _fun0005 }
case 16:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 17;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.getState;
                    var6 = var5.bind(var6)();
                    var5 = 'focused';
                    if(!(var5 === var6)) { _fun0005_ip = 50; continue _fun0005 }
case 49:
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
                    if(var5) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = var7[var3];
                    var5 = var6.bind(var1)(var3);
                    var4 = var5.fetchQuestToDeliver;
                    var3 = 19;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.AdPlacement;
                    var3 = var3.MOBILE_HOME_DOCK_AREA;
                    var2 = _closure2_slot0;
                    var7 = var2.callerSource;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'use_quests_';
                    var2 = var6.bind(var2)(var7);
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0005_ip = 44; continue _fun0005;
case 51:
                    return var1;
case 50:
                    return var1;
case 44:
                    var1 = undefined;
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
    var _closure1_slot38 = var22;
    var1 = function defaultSortFn(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var1 = arg3;
            var5 = var6.id;
            var3 = _closure1_slot20;
            var3 = var5 === var3;
            var7 = var4.id;
            var5 = _closure1_slot20;
            var5 = var7 === var5;
            if(!var3) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var9 = var6.userStatus;
            var8 = null;
            var10 = var8 == var9;
            var7 = undefined;
            if(var10) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var7 = var9.completedAt;
case 55:
            var3 = var8 == var7;
case 53:
            if(!var5) { _fun0006_ip = 47; continue _fun0006 }
case 57:
            var9 = var4.userStatus;
            var8 = null;
            var10 = var8 == var9;
            var7 = undefined;
            if(var10) { _fun0006_ip = 58; continue _fun0006 }
case 46:
            var7 = var9.completedAt;
case 58:
            var5 = var8 == var7;
case 47:
            if(!(var3 === var5)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 20;
            var5 = var8[var5];
            var12 = undefined;
            var7 = var7.bind(var12)(var5);
            var5 = var7.isQuestExpired;
            var5 = var5.bind(var7)(var6);
            var14 = !var5;
            var8 = var6.userStatus;
            var5 = null;
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0006_ip = 61; continue _fun0006 }
case 15:
            var7 = var8.claimedAt;
case 61:
            var8 = var5 != var7;
            var9 = var4.userStatus;
            var10 = var5 == var9;
            var7 = undefined;
            if(var10) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var7 = var9.claimedAt;
case 62:
            var11 = var5 != var7;
            var9 = var6.userStatus;
            var10 = var5 == var9;
            var7 = undefined;
            if(var10) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var7 = var9.enrolledAt;
case 64:
            var9 = var5 != var7;
            var10 = var4.userStatus;
            var13 = var5 == var10;
            var7 = undefined;
            if(var13) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var7 = var10.enrolledAt;
case 66:
            var10 = var5 != var7;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 21;
            var7 = var15[var7];
            var7 = var13.bind(var12)(var7);
            var7 = var7.Millis;
            var13 = var7.MINUTE;
            var7 = 30;
            var15 = var7 * var13;
            var13 = _closure1_slot62;
            var7 = var13.bind(var12)(var6, var15);
            var13 = var13.bind(var12)(var4, var15);
            if(var14) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            if(!(var8 === var11)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            if(!(var9 === var10)) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var17 = _closure1_slot47;
            var14 = var6.config;
            var16 = var14.expiresAt;
            var14 = var4.config;
            var15 = var14.expiresAt;
            var14 = _closure1_slot30;
            var14 = var14.DESC;
            var14 = var17.bind(var12)(var16, var15, var14);
            _fun0006_ip = 38; continue _fun0006;
case 72:
            var15 = 1;
            if(!var9) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var15 = _closure1_slot27;
case 74:
            var14 = var15;
case 38:
            _fun0006_ip = 76; continue _fun0006;
case 70:
            var15 = 1;
            if(!var8) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var15 = _closure1_slot27;
case 77:
            var14 = var15;
case 76:
            return var14;
case 68:
            var16 = var1.questHomeHero;
            var1 = var1.isQuestHomeHeroShelfEnabled;
            if(!(var5 != var16)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            if(var1) { _fun0006_ip = 79; continue _fun0006 }
case 81:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 22;
            var5 = var15[var1];
            var18 = var14.bind(var12)(var5);
            var17 = var18.isQuestFeaturedByHero;
            var5 = var6.id;
            var5 = var17.bind(var18)(var16, var5);
            var1 = var15[var1];
            var15 = var14.bind(var12)(var1);
            var14 = var15.isQuestFeaturedByHero;
            var1 = var4.id;
            var1 = var14.bind(var15)(var16, var1);
            if(var5) { _fun0006_ip = 82; continue _fun0006 }
case 83:
            if(!var1) { _fun0006_ip = 79; continue _fun0006 }
case 82:
            var1 = 1;
            if(!var5) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            var1 = _closure1_slot27;
case 84:
            return var1;
case 79:
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
            if(!(var5 !== var1)) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            if(var5) { _fun0006_ip = 88; continue _fun0006 }
case 89:
            if(var1) { _fun0006_ip = 88; continue _fun0006 }
case 86:
            if(!(var15 !== var14)) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var16 = 24;
            var1 = var1[var16];
            var1 = var17.bind(var12)(var1);
            var1 = var1.QuestType;
            var1 = var1.VIDEO;
            if(!(var15 !== var1)) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            var17 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var16];
            var1 = var17.bind(var12)(var1);
            var1 = var1.QuestType;
            var1 = var1.VIDEO;
            if(!(var14 === var1)) { _fun0006_ip = 90; continue _fun0006 }
case 92:
            var14 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var16];
            var1 = var14.bind(var12)(var1);
            var1 = var1.QuestType;
            var14 = var1.VIDEO;
            var1 = 1;
            if(!(var15 === var14)) { _fun0006_ip = 94; continue _fun0006 }
case 95:
            var1 = _closure1_slot27;
case 94:
            _fun0006_ip = 96; continue _fun0006;
case 90:
            if(!(var7 !== var13)) { _fun0006_ip = 97; continue _fun0006 }
case 98:
            if(var7) { _fun0006_ip = 99; continue _fun0006 }
case 100:
            if(var13) { _fun0006_ip = 99; continue _fun0006 }
case 97:
            if(!(var8 === var11)) { _fun0006_ip = 101; continue _fun0006 }
case 102:
            if(!(var9 === var10)) { _fun0006_ip = 103; continue _fun0006 }
case 104:
            var11 = _closure1_slot47;
            var6 = var6.config;
            var10 = var6.expiresAt;
            var4 = var4.config;
            var6 = var4.expiresAt;
            var4 = _closure1_slot30;
            var4 = var4.ASC;
            var4 = var11.bind(var12)(var10, var6, var4);
            _fun0006_ip = 105; continue _fun0006;
case 103:
            var6 = 1;
            if(!var9) { _fun0006_ip = 106; continue _fun0006 }
case 107:
            var6 = _closure1_slot27;
case 106:
            var4 = var6;
case 105:
            _fun0006_ip = 108; continue _fun0006;
case 101:
            var6 = 1;
            if(var8) { _fun0006_ip = 109; continue _fun0006 }
case 110:
            var6 = _closure1_slot27;
case 109:
            var4 = var6;
case 108:
            _fun0006_ip = 111; continue _fun0006;
case 99:
            var6 = 1;
            if(var7) { _fun0006_ip = 112; continue _fun0006 }
case 113:
            var6 = _closure1_slot27;
case 112:
            var4 = var6;
case 111:
            var1 = var4;
case 96:
            _fun0006_ip = 114; continue _fun0006;
case 88:
            var4 = 1;
            if(!var5) { _fun0006_ip = 115; continue _fun0006 }
case 116:
            var4 = _closure1_slot27;
case 115:
            var1 = var4;
case 114:
            return var1;
case 59:
            var1 = 1;
            if(!var3) { _fun0006_ip = 117; continue _fun0006 }
case 118:
            var1 = _closure1_slot27;
case 117:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function recentSortFn(arg1, arg2) {
        var5 = _closure1_slot47;
        var2 = arg1;
        var2 = var2.config;
        var4 = var2.startsAt;
        var2 = arg2;
        var2 = var2.config;
        var3 = var2.startsAt;
        var1 = _closure1_slot30;
        var2 = var1.DESC;
        var1 = undefined;
        var1 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var _closure1_slot40 = var1;
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
            if(var5) { _fun0007_ip = 119; continue _fun0007 }
case 36:
            var8 = var2.enrolledAt;
case 119:
            var2 = var3.userStatus;
            var5 = var1 == var2;
            var7 = undefined;
            if(var5) { _fun0007_ip = 120; continue _fun0007 }
case 2:
            var7 = var2.enrolledAt;
case 120:
            if(!(var1 == var8)) { _fun0007_ip = 121; continue _fun0007 }
case 28:
            if(!(var1 != var7)) { _fun0007_ip = 122; continue _fun0007 }
case 121:
            if(!(var1 != var8)) { _fun0007_ip = 53; continue _fun0007 }
case 55:
            if(!(var1 != var7)) { _fun0007_ip = 48; continue _fun0007 }
case 53:
            if(!(var1 == var8)) { _fun0007_ip = 123; continue _fun0007 }
case 42:
            var2 = var1 != var7;
            var1 = 1;
            if(var2) { _fun0007_ip = 124; continue _fun0007 }
case 123:
            var5 = _closure1_slot47;
            var2 = _closure1_slot30;
            var2 = var2.DESC;
            var1 = var5.bind(var6)(var8, var7, var2);
case 124:
            _fun0007_ip = 125; continue _fun0007;
case 48:
            var1 = _closure1_slot27;
case 125:
            _fun0007_ip = 126; continue _fun0007;
case 122:
            var5 = _closure1_slot47;
            var4 = var4.config;
            var4 = var4.expiresAt;
            var3 = var3.config;
            var3 = var3.expiresAt;
            var2 = _closure1_slot30;
            var2 = var2.DESC;
            var1 = var5.bind(var6)(var4, var3, var2);
case 126:
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function expiringSoonSortFn(arg1, arg2) {
        var5 = _closure1_slot47;
        var2 = arg1;
        var2 = var2.config;
        var4 = var2.expiresAt;
        var2 = arg2;
        var2 = var2.config;
        var3 = var2.expiresAt;
        var1 = _closure1_slot30;
        var2 = var1.ASC;
        var1 = undefined;
        var1 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function doesQuestPassTaskFilter(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var2 = _closure1_slot18;
            var2 = var2.VIDEO;
            if(!(var2 !== var4)) { _fun0008_ip = 127; continue _fun0008 }
case 39:
            var2 = _closure1_slot18;
            var2 = var2.PLAY;
            if(!(var2 !== var4)) { _fun0008_ip = 128; continue _fun0008 }
case 129:
            var2 = false;
            return var2;
case 128:
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
            if(var2) { _fun0008_ip = 130; continue _fun0008 }
case 131:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var8 = var5.bind(var6)(var4);
            var5 = var8.hasStreamOnDesktopTask;
            var4 = {};
            var4['quest'] = var3;
            var2 = var5.bind(var8)(var4);
case 130:
            if(var2) { _fun0008_ip = 132; continue _fun0008 }
case 133:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var5 = var5.bind(var6)(var4);
            var4 = var5.hasPlayActivityTask;
            var2 = var4.bind(var5)(var3);
case 132:
            if(var2) { _fun0008_ip = 134; continue _fun0008 }
case 135:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isConsoleQuest;
            var2 = var4.bind(var5)(var3);
case 134:
            if(var2) { _fun0008_ip = 136; continue _fun0008 }
case 19:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isInGameQuest;
            var2 = var4.bind(var5)(var3);
case 136:
            return var2;
case 127:
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
    var _closure1_slot43 = var1;
    var1 = function doesQuestPassRewardFilter(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var3 = _closure1_slot19;
            var3 = var3.VIRTUAL_CURRENCY;
            if(!(var3 !== var4)) { _fun0009_ip = 137; continue _fun0009 }
case 39:
            var3 = _closure1_slot19;
            var3 = var3.COLLECTIBLE;
            if(!(var3 !== var4)) { _fun0009_ip = 138; continue _fun0009 }
case 129:
            var3 = _closure1_slot19;
            var3 = var3.IN_GAME;
            if(!(var3 !== var4)) { _fun0009_ip = 56; continue _fun0009 }
case 139:
            var3 = false;
            return var3;
case 56:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 25;
            var3 = var3[var7];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var4 = var5.hasInGameQuestReward;
            var3 = var1.config;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0009_ip = 140; continue _fun0009 }
case 141:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var6 = var5.bind(var6)(var4);
            var5 = var6.hasQuestRewardCode;
            var4 = var1.config;
            var3 = var5.bind(var6)(var4);
case 140:
            return var3;
case 138:
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
case 137:
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
    var _closure1_slot44 = var1;
    var1 = function doesQuestPassFilter(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg2;
            var4 = arg3;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = 'task';
            if(!(var1 !== var5)) { _fun0010_ip = 142; continue _fun0010 }
case 31:
            var3 = 'reward';
            var1 = undefined;
            if(!(var3 === var5)) { _fun0010_ip = 5; continue _fun0010 }
case 33:
            var1 = _closure1_slot44;
            _fun0010_ip = 5; continue _fun0010;
case 142:
            var1 = _closure1_slot43;
case 5:
            var _closure2_slot1 = var1;
            var3 = var4.length;
            var1 = 0;
            var1 = var1 === var3;
            if(var1) { _fun0010_ip = 143; continue _fun0010 }
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
case 143:
            return var1;
        }
    };
    var _closure1_slot45 = var1;
    var21 = function sortQuests(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var8 = arg1;
            var2 = arguments[1];
            var5 = arguments[2];
            var4 = undefined;
            if(!(var2 === var4)) { _fun0011_ip = 144; continue _fun0011 }
case 145:
            var2 = _closure1_slot28;
case 144:
            if(!(var5 === var4)) { _fun0011_ip = 146; continue _fun0011 }
case 34:
            var5 = _closure1_slot29;
case 146:
            var7 = var2.sortMethod;
            var6 = var2.filters;
            var2 = null;
            var3 = var8;
            if(!(var2 != var6)) { _fun0011_ip = 147; continue _fun0011 }
case 28:
            var9 = var6.length;
            var2 = 0;
            var3 = var8;
            if(!(var2 !== var9)) { _fun0011_ip = 147; continue _fun0011 }
case 35:
            var2 = function filterQuests(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg2;
                    var4 = var6.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0012_ip = 147; continue _fun0012 }
case 148:
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
                                if(var2) { _fun0013_ip = 149; continue _fun0013 }
case 144:
                                var4 = var3;
case 149:
                                var3 = undefined;
                                if(var2) { _fun0013_ip = 150; continue _fun0013 }
case 151:
                                var7 = var6().value;
                                var6 = var1;
                                var6 = var6 === var5;
                                var3 = undefined;
                                var2 = var6;
                                if(var6) { _fun0013_ip = 150; continue _fun0013 }
case 152:
                                var3 = var7;
                                var2 = var6;
case 150:
                                if(var2) { _fun0013_ip = 153; continue _fun0013 }
case 121:
                                var1.return();
case 153:
                                var2 = _closure1_slot45;
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
case 147:
                    return var1;
                }
            };
            var3 = var2.bind(var4)(var8, var6);
case 147:
            var2 = _closure1_slot16;
            var2 = var2.MOST_RECENT;
            if(!(var2 !== var7)) { _fun0011_ip = 135; continue _fun0011 }
case 141:
            var2 = _closure1_slot16;
            var2 = var2.RECENTLY_ENROLLED;
            if(!(var2 !== var7)) { _fun0011_ip = 154; continue _fun0011 }
case 155:
            var2 = _closure1_slot16;
            var2 = var2.EXPIRING_SOON;
            if(!(var2 !== var7)) { _fun0011_ip = 156; continue _fun0011 }
case 157:
            var2 = _closure1_slot16;
            var2 = var2.SUGGESTED;
            var2 = _closure1_slot39;
            _fun0011_ip = 158; continue _fun0011;
case 156:
            var2 = _closure1_slot42;
            _fun0011_ip = 158; continue _fun0011;
case 154:
            var2 = _closure1_slot41;
            _fun0011_ip = 158; continue _fun0011;
case 135:
            var2 = _closure1_slot40;
case 158:
            var1 = function prioritizeLiveQuests(arg1, arg2) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var1 = function(arg1, arg2) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var7 = arg1;
                        var6 = arg2;
                        var2 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 20;
                        var4 = var8[var1];
                        var5 = undefined;
                        var9 = var2.bind(var5)(var4);
                        var4 = var9.isQuestExpired;
                        var4 = var4.bind(var9)(var7);
                        var4 = !var4;
                        var1 = var8[var1];
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.isQuestExpired;
                        var1 = var1.bind(var2)(var6);
                        var1 = !var1;
                        if(!(var4 === var1)) { _fun0014_ip = 159; continue _fun0014 }
case 42:
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var5)(var7, var6, var1);
                        _fun0014_ip = 60; continue _fun0014;
case 159:
                        var2 = 1;
                        if(!var4) { _fun0014_ip = 160; continue _fun0014 }
case 47:
                        var2 = _closure1_slot27;
case 160:
                        var1 = var2;
case 60:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var1.bind(var4)(var2, var5);
            var1 = var3.sort;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var _closure1_slot46 = var21;
    var1 = function sortByDate(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot30;
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
    var _closure1_slot47 = var1;
    var1 = function useAllQuests(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var3 = function useSortMetadata() {
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 27;
            var3 = var7[var3];
            var4 = undefined;
            var5 = var6.bind(var4)(var3);
            var3 = var5.useShouldRemoveQuestHomeHero;
            var3 = var3.bind(var5)();
            var5 = 13;
            var5 = var7[var5];
            var8 = var6.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = null;
                return var1;
            };
            var6 = var7.bind(var8)(var6, var3, var5);
            var _closure3_slot0 = var6;
            var3 = _closure1_slot63;
            var3 = var3.bind(var4)(var6);
            var5 = var3.isShelfEnabled;
            var _closure3_slot1 = var5;
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                var1 = {};
                var3 = _closure3_slot0;
                var1['questHomeHero'] = var3;
                var2 = _closure3_slot1;
                var1['isQuestHomeHeroShelfEnabled'] = var2;
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = _closure2_slot0;
                var2 = var2.length;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0016_ip = 161; continue _fun0016 }
case 162:
                var2 = _closure2_slot3;
                var2 = var2.current;
                var2 = var2.length;
                if(!(var2 > var3)) { _fun0016_ip = 163; continue _fun0016 }
case 164:
                var2 = _closure2_slot6;
                var3 = var2.current;
                var2 = _closure2_slot0;
                var2 = var2.length;
                if(!(var3 === var2)) { _fun0016_ip = 163; continue _fun0016 }
case 7:
                var2 = _closure2_slot4;
                var3 = var2.current;
                var2 = _closure2_slot1;
                var2 = var2.sortMethod;
                if(!(var3 === var2)) { _fun0016_ip = 163; continue _fun0016 }
case 165:
                var2 = _closure2_slot5;
                var3 = var2.current;
                var2 = _closure2_slot1;
                var2 = var2.filters;
                if(!(var3 === var2)) { _fun0016_ip = 163; continue _fun0016 }
case 166:
                var2 = _closure2_slot7;
                var3 = var2.current;
                var2 = _closure2_slot2;
                if(!(var3 !== var2)) { _fun0016_ip = 167; continue _fun0016 }
case 163:
                var6 = _closure1_slot46;
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
case 167:
                var1 = _closure2_slot3;
                var1 = var1.current;
                return var1;
case 161:
                var1 = new Array(0);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot48 = var1;
    var1 = function isQuestHiddenFromQuestHome(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
            if(!var1) { _fun0017_ip = 168; continue _fun0017 }
case 142:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.hasUnclaimedReward;
            var2 = var2.userStatus;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 168:
            return var1;
        }
    };
    var _closure1_slot49 = var1;
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
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0018_ip = 169; continue _fun0018 }
case 170:
                var4 = _closure1_slot12;
                var3 = var4.isQuestExpired;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
case 169:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot50 = var18;
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
    var _closure1_slot51 = var17;
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
    var _closure1_slot52 = var16;
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
            var1 = 32;
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
            var1 = 33;
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
    var _closure1_slot53 = var15;
    var14 = function useIsQuestProgressing(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot51;
            var4 = undefined;
            var1 = var1.bind(var4)(var5);
            var3 = _closure1_slot52;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot53;
            var2 = var2.bind(var4)(var5);
            if(var1) { _fun0019_ip = 54; continue _fun0019 }
case 171:
            var1 = var3;
case 54:
            if(var1) { _fun0019_ip = 172; continue _fun0019 }
case 128:
            var1 = var2;
case 172:
            return var1;
        }
    };
    var _closure1_slot54 = var14;
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
    var _closure1_slot55 = var12;
    var11 = function useGetOrFetchApplicationForConsoleQuests(arg1) {
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
                var4 = _closure1_slot36;
                var2 = _closure2_slot0;
                var8 = undefined;
                var7 = var4.bind(var8)(var2);
                var4 = var7.bind(var8)();
                var2 = var4.done;
                var6 = 23;
                var5 = null;
                if(var2) { _fun0020_ip = 157; continue _fun0020 }
case 173:
                var11 = var4.value;
                var10 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var10 = var10.bind(var8)(var2);
                var2 = var10.getConsoleApplicationId;
                var10 = var2.bind(var10)(var11);
                if(!(var5 != var10)) { _fun0020_ip = 174; continue _fun0020 }
case 175:
                var2 = var3.add;
                var2 = var2.bind(var3)(var10);
case 174:
                var10 = var7.bind(var8)();
                var2 = var10.done;
                var4 = var10;
                if(!var2) { _fun0020_ip = 173; continue _fun0020 }
case 157:
                var2 = var1.Array;
                var1 = var2.from;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var3 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 35;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var _closure1_slot56 = var11;
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
    var _closure1_slot57 = var10;
    var9 = function useWaitingForConsoleConnection(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var5 = var1.quest;
            var2 = _closure1_slot57;
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
            var1 = 23;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.isConsoleQuest;
            var1 = var1.bind(var4)(var5);
            if(!var1) { _fun0021_ip = 143; continue _fun0021 }
case 123:
            var1 = var3;
case 143:
            if(!var1) { _fun0021_ip = 176; continue _fun0021 }
case 46:
            var1 = !var2;
case 176:
            return var1;
        }
    };
    var _closure1_slot58 = var9;
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
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
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
                var1 = 31;
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
                var2 = 43;
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
                var5 = 32;
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
            if(var6) { _fun0022_ip = 136; continue _fun0022 }
case 177:
            var8 = null;
            if(!var5) { _fun0022_ip = 178; continue _fun0022 }
case 179:
            var5 = _closure1_slot13;
            var8 = var5.CONSOLE;
case 178:
            _fun0022_ip = 180; continue _fun0022;
case 136:
            var5 = _closure1_slot13;
            var8 = var5.DESKTOP;
case 180:
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
                var3 = 43;
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
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var2 = _closure2_slot4;
                        if(!var2) { _fun0023_ip = 145; continue _fun0023 }
case 181:
                        var2 = _closure2_slot3;
                        if(var2) { _fun0023_ip = 57; continue _fun0023 }
case 145:
                        var1 = _closure2_slot4;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.TaskPlatformScreen;
                        if(var1) { _fun0023_ip = 153; continue _fun0023 }
case 4:
                        var1 = var2.DESKTOP;
                        _fun0023_ip = 182; continue _fun0023;
case 153:
                        var1 = var2.CONSOLE;
case 182:
                        _fun0023_ip = 48; continue _fun0023;
case 57:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var2 = var2.TaskPlatformScreen;
                        var1 = var2.SELECT;
case 48:
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
    var _closure1_slot61 = var5;
    var1 = function hasEnrolledTimeLapsed(arg1, arg2) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var4 = arg1;
            var2 = var4.userStatus;
            var6 = null;
            var3 = var6 == var2;
            var1 = undefined;
            if(var3) { _fun0024_ip = 39; continue _fun0024 }
case 29:
            var1 = var2.completedAt;
case 39:
            var2 = var6 != var1;
            var3 = var4.userStatus;
            var7 = var6 == var3;
            var1 = undefined;
            if(var7) { _fun0024_ip = 152; continue _fun0024 }
case 183:
            var1 = var3.enrolledAt;
case 152:
            var1 = var6 != var1;
            if(!var1) { _fun0024_ip = 7; continue _fun0024 }
case 56:
            var1 = !var2;
case 7:
            if(!var1) { _fun0024_ip = 184; continue _fun0024 }
case 55:
            var2 = global;
            var7 = var2.Date;
            var3 = var7.now;
            var3 = var3.bind(var7)();
            var2 = var2.Date;
            var4 = var4.userStatus;
            var6 = var6 == var4;
            var5 = undefined;
            if(var6) { _fun0024_ip = 48; continue _fun0024 }
case 160:
            var5 = var4.enrolledAt;
case 48:
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
case 184:
            return var1;
        }
    };
    var _closure1_slot62 = var1;
    var4 = function useQuestHomeHeroShelf(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = arg1;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 13;
            var4 = var5[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var1 = _closure1_slot12;
                var1 = var1.quests;
                return var1;
            };
            var6 = var7.bind(var8)(var6, var4);
            var _closure2_slot0 = var6;
            var4 = null;
            var4 = var4 == var3;
            if(var4) { _fun0025_ip = 168; continue _fun0025 }
case 185:
            var5 = var3.questIds;
case 168:
            var _closure2_slot1 = var5;
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0026_ip = 186; continue _fun0026 }
case 187:
                    var4 = _closure2_slot1;
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var3 = _closure2_slot0;
                        var2 = var3.get;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 51;
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
                    if(!(!(var3 <= var1))) { _fun0026_ip = 133; continue _fun0026 }
case 188:
                    var1 = {};
                    var1['shelfQuests'] = var2;
                    var2 = true;
                    var1['isShelfEnabled'] = var2;
                    _fun0026_ip = 189; continue _fun0026;
case 133:
                    var2 = {};
                    var3 = new Array(0);
                    var2['shelfQuests'] = var3;
                    var3 = false;
                    var2['isShelfEnabled'] = var3;
                    var1 = var2;
case 189:
                    return var1;
case 186:
                    var1 = {};
                    var2 = new Array(0);
                    var1['shelfQuests'] = var2;
                    var2 = false;
                    var1['isShelfEnabled'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot63 = var4;
    var1 = global;
    var19 = var1.Object;
    var13 = var19.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var19)(var3, var1, var8);
    var32 = 0;
    var8 = var25[var32];
    var1 = undefined;
    var8 = var26.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var31 = 1;
    var8 = var25[var31];
    var8 = var26.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var30 = 2;
    var13 = var25[var30];
    var8 = metroImportAll;
    var8 = var8.bind(var1)(var13);
    var _closure1_slot5 = var8;
    var29 = 3;
    var8 = var25[var29];
    var8 = var26.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var27 = 4;
    var8 = var25[var27];
    var8 = var26.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var25[var8];
    var8 = var26.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var28 = 6;
    var8 = var25[var28];
    var8 = var26.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var25[var8];
    var8 = var26.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var25[var8];
    var8 = var24.bind(var1)(var8);
    var8 = var8.useConsoleQuestUIStore;
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var25[var8];
    var8 = var26.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var25[var8];
    var8 = var24.bind(var1)(var8);
    var13 = var8.QuestTaskPlatform;
    var _closure1_slot13 = var13;
    var13 = var8.QuestsExperimentLocations;
    var _closure1_slot14 = var13;
    var13 = var8.MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES;
    var _closure1_slot15 = var13;
    var13 = var8.QuestHomeSortMethods;
    var _closure1_slot16 = var13;
    var13 = var8.SORTED_QUEST_HOME_FILTER_GROUPS;
    var _closure1_slot17 = var13;
    var13 = var8.TaskFilterTypes;
    var _closure1_slot18 = var13;
    var13 = var8.RewardFilterTypes;
    var _closure1_slot19 = var13;
    var13 = var8.MOBILE_ORBS_INTRO_QUEST_ID;
    var _closure1_slot20 = var13;
    var8 = var8.ORBS_INTRO_QUEST_ID;
    var _closure1_slot21 = var8;
    var8 = 11;
    var8 = var25[var8];
    var8 = var24.bind(var1)(var8);
    var13 = var8.HelpdeskArticles;
    var _closure1_slot22 = var13;
    var13 = var8.PlatformTypes;
    var _closure1_slot23 = var13;
    var13 = var8.ThemeTypes;
    var _closure1_slot24 = var13;
    var8 = var8.AnalyticEvents;
    var _closure1_slot25 = var8;
    var8 = 12;
    var8 = var25[var8];
    var8 = var24.bind(var1)(var8);
    var8 = var8.PremiumTypes;
    var _closure1_slot26 = var8;
    var8 = -1;
    var _closure1_slot27 = var8;
    var8 = {};
    var _closure1_slot28 = var8;
    var8 = {'questHomeHero': null, 'isQuestHomeHeroShelfEnabled': false};
    var _closure1_slot29 = var8;
    var8 = {};
    var8['DESC'] = var32;
    var13 = 'DESC';
    var8[var32] = var13;
    var8['ASC'] = var31;
    var13 = 'ASC';
    var8[var31] = var13;
    var _closure1_slot30 = var8;
    var20 = {};
    var8 = 'all';
    var20['ALL'] = var8;
    var8 = 'claimed';
    var20['CLAIMED'] = var8;
    var8 = 'preview_tool';
    var20['PREVIEW_TOOL'] = var8;
    var _closure1_slot31 = var20;
    var19 = {};
    var8 = 'tab';
    var19['TAB'] = var8;
    var8 = 'quest_id';
    var19['QUEST_ID'] = var8;
    var8 = 'sort';
    var19['SORT'] = var8;
    var8 = 'filter';
    var19['FILTER'] = var8;
    var8 = 'ad_creative_ids';
    var19['AD_CREATIVE_IDS'] = var8;
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
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var4 = null;
                var7 = var4 == var5;
                var6 = undefined;
                var3 = undefined;
                if(var7) { _fun0027_ip = 190; continue _fun0027 }
case 34:
                var3 = var5.enrolledAt;
case 190:
                if(!(var4 != var3)) { _fun0027_ip = 175; continue _fun0027 }
case 171:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var7 = var4 == var5;
                var3 = undefined;
                if(var7) { _fun0027_ip = 153; continue _fun0027 }
case 150:
                var3 = var5.completedAt;
case 153:
                if(!(var4 == var3)) { _fun0027_ip = 175; continue _fun0027 }
case 30:
                var3 = _closure2_slot0;
                var5 = var3.userStatus;
                var7 = var4 == var5;
                var3 = undefined;
                if(var7) { _fun0027_ip = 159; continue _fun0027 }
case 9:
                var3 = var5.claimedAt;
case 159:
                if(!(var4 == var3)) { _fun0027_ip = 175; continue _fun0027 }
case 11:
                var3 = _closure2_slot4;
                if(var3) { _fun0027_ip = 174; continue _fun0027 }
case 175:
                var2 = _closure2_slot3;
                var2 = var2.bind(var6)();
                return var6;
case 174:
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
    var _closure1_slot32 = var13;
    var8 = {};
    var8['UNACCEPTED'] = var32;
    var23 = 'UNACCEPTED';
    var8[var32] = var23;
    var8['ACCEPTED'] = var31;
    var23 = 'ACCEPTED';
    var8[var31] = var23;
    var8['IN_PROGRESS'] = var30;
    var23 = 'IN_PROGRESS';
    var8[var30] = var23;
    var8['COMPLETED'] = var29;
    var23 = 'COMPLETED';
    var8[var29] = var23;
    var8['CLAIMED'] = var27;
    var23 = 'CLAIMED';
    var8[var27] = var23;
    var _closure1_slot33 = var8;
    var23 = 21;
    var27 = var25[var23];
    var27 = var26.bind(var1)(var27);
    var27 = var27.Millis;
    var27 = var27.HOUR;
    var27 = var28 * var27;
    var _closure1_slot34 = var27;
    var23 = var25[var23];
    var23 = var26.bind(var1)(var23);
    var23 = var23.Millis;
    var23 = var23.MINUTE;
    var _closure1_slot35 = var23;
    var23 = 58;
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
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var13 = arg1;
            var9 = arguments[1];
            var12 = undefined;
            if(!(var9 === var12)) { _fun0028_ip = 162; continue _fun0028 }
case 32:
            var9 = _closure1_slot28;
case 162:
            var3 = _closure1_slot38;
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
            var6 = _closure1_slot48;
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
                            if(var5) { _fun0029_ip = 152; continue _fun0029 }
case 183:
                            var2 = var4.claimedAt;
case 152:
                            var2 = var3 != var2;
                            if(!var1) { _fun0029_ip = 7; continue _fun0029 }
case 56:
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
                        if(!(var4 !== var3)) { _fun0030_ip = 191; continue _fun0030 }
case 29:
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var3 = var3.length;
                        if(!(var3 > var4)) { _fun0030_ip = 192; continue _fun0030 }
case 171:
                        var3 = _closure3_slot2;
                        var3 = var3.current;
                        var4 = var3.length;
                        var3 = _closure3_slot1;
                        var3 = var3.length;
                        if(!(var4 !== var3)) { _fun0030_ip = 193; continue _fun0030 }
case 192:
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
                                if(var7) { _fun0031_ip = 119; continue _fun0031 }
case 36:
                                var1 = var3.claimedAt;
case 119:
                                var3 = var5 == var1;
                                var7 = var2.userStatus;
                                var8 = var5 == var7;
                                var1 = undefined;
                                if(var8) { _fun0031_ip = 28; continue _fun0031 }
case 194:
                                var1 = var7.claimedAt;
case 28:
                                var1 = var5 == var1;
                                if(!(var3 === var1)) { _fun0031_ip = 195; continue _fun0031 }
case 55:
                                var5 = _closure1_slot47;
                                var4 = var4.config;
                                var4 = var4.rewardsConfig;
                                var4 = var4.rewardsExpireAt;
                                var2 = var2.config;
                                var2 = var2.rewardsConfig;
                                var2 = var2.rewardsExpireAt;
                                var1 = _closure1_slot30;
                                var1 = var1.DESC;
                                var1 = var5.bind(var6)(var4, var2, var1);
                                _fun0031_ip = 196; continue _fun0031;
case 195:
                                var2 = 1;
                                if(!var3) { _fun0031_ip = 197; continue _fun0031 }
case 198:
                                var2 = _closure1_slot27;
case 197:
                                var1 = var2;
case 196:
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
case 193:
                        var1 = _closure3_slot2;
                        var1 = var1.current;
                        return var1;
case 191:
                        var1 = new Array(0);
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = var1.bind(var12)(var5);
            var5 = new Array(0);
            var6 = _closure1_slot36;
            var8 = _closure1_slot31;
            var8 = var8.ALL;
            if(!(var13 === var8)) { _fun0028_ip = 14; continue _fun0028 }
case 158:
            var1 = var7;
case 14:
            var8 = var6.bind(var12)(var1);
            var6 = var8.bind(var12)();
            var1 = var6.done;
            var7 = null;
            if(var1) { _fun0028_ip = 199; continue _fun0028 }
case 200:
            var14 = var6.value;
            var1 = var10.get;
            var14 = var1.bind(var10)(var14);
            var15 = var7 != var14;
            if(!var15) { _fun0028_ip = 201; continue _fun0028 }
case 202:
            var1 = _closure1_slot31;
            var1 = var1.ALL;
            var15 = var13 === var1;
case 201:
            if(!var15) { _fun0028_ip = 203; continue _fun0028 }
case 204:
            var15 = var9.removeExpiredQuests;
case 203:
            if(!var15) { _fun0028_ip = 205; continue _fun0028 }
case 206:
            var1 = _closure1_slot49;
            var15 = var1.bind(var12)(var14);
case 205:
            var1 = var7 == var14;
            if(var1) { _fun0028_ip = 161; continue _fun0028 }
case 207:
            var1 = var15;
case 161:
            if(var1) { _fun0028_ip = 208; continue _fun0028 }
case 209:
            var1 = var5.push;
            var1 = var1.bind(var5)(var14);
case 208:
            var14 = var8.bind(var12)();
            var1 = var14.done;
            var6 = var14;
            if(!var1) { _fun0028_ip = 200; continue _fun0028 }
case 199:
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
                if(var2) { _fun0032_ip = 148; continue _fun0032 }
case 181:
                var3 = _closure2_slot0;
                var2 = var3.current;
case 148:
                if(var2) { _fun0032_ip = 182; continue _fun0032 }
case 210:
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
case 182:
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
            var1 = _closure1_slot50;
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
            var2 = 28;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.QuestOrbMultiplierEligibilityType;
            var5 = var2.INELIGIBLE;
            var2 = arg2;
            var2 = var2 !== var5;
            var1 = !var1;
            if(!var1) { _fun0033_ip = 211; continue _fun0033 }
case 122:
            var1 = var4;
case 211:
            if(!var1) { _fun0033_ip = 195; continue _fun0033 }
case 212:
            var1 = var3;
case 195:
            if(!var1) { _fun0033_ip = 198; continue _fun0033 }
case 213:
            var1 = var2;
case 198:
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
                if(var4) { _fun0034_ip = 185; continue _fun0034 }
case 190:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 25;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getQuestOrbMultiplier;
                var2 = var2.config;
                var1 = var3.bind(var4)(var2);
case 185:
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
                    if(var6) { _fun0036_ip = 164; continue _fun0036 }
case 3:
                    var5 = _closure2_slot1;
                    var2 = var5.channelId;
case 164:
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0036_ip = 28; continue _fun0036 }
case 214:
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
                    if(var3) { _fun0037_ip = 151; continue _fun0037 }
case 149:
                    var1 = var2.id;
case 151:
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
                    if(!var1) { _fun0038_ip = 169; continue _fun0038 }
case 170:
                    var4 = _closure1_slot12;
                    var3 = var4.isQuestExpired;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 169:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var10, var3, var7);
            var3 = null;
            if(!(var3 != var1)) { _fun0035_ip = 25; continue _fun0035 }
case 65:
            if(var9) { _fun0035_ip = 25; continue _fun0035 }
case 215:
            if(var7) { _fun0035_ip = 25; continue _fun0035 }
case 64:
            var7 = arg3;
            if(!(var8 !== var7)) { _fun0035_ip = 25; continue _fun0035 }
case 204:
            var7 = var1.userStatus;
            var8 = var3 == var7;
            var1 = undefined;
            if(var8) { _fun0035_ip = 216; continue _fun0035 }
case 217:
            var1 = var7.claimedAt;
case 216:
            var1 = var3 != var1;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 22;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.isStreamingAndCanWatch;
            var2 = var2.bind(var3)(var5, var4);
            if(!var1) { _fun0035_ip = 218; continue _fun0035 }
case 219:
            var1 = !var2;
case 218:
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
            if(!(var6 === var5)) { _fun0039_ip = 151; continue _fun0039 }
case 187:
            var2 = {};
            var3 = 'short';
            var2['dateStyle'] = var3;
            var6 = var2;
case 151:
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
                    if(var3) { _fun0040_ip = 42; continue _fun0040 }
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
case 42:
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
        var3 = 29;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var6.bind(var3)(var4);
        var3 = var4.useGetQuestImpressionId;
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
                if(!(var3 === var2)) { _fun0041_ip = 131; continue _fun0041 }
case 31:
                var2 = global;
                var4 = var2.window;
                var3 = var4.open;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 30;
                var6 = var6[var2];
                var2 = undefined;
                var7 = var7.bind(var2)(var6);
                var6 = var7.getArticleURL;
                var2 = _closure1_slot22;
                var2 = var2.VIRTUAL_CURRENCY_LEARN_MORE;
                var2 = var6.bind(var7)(var2);
                var2 = var3.bind(var4)(var2);
                _fun0041_ip = 220; continue _fun0041;
case 131:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 31;
                var1 = var3[var1];
                var7 = undefined;
                var4 = var2.bind(var7)(var1);
                var3 = var4.openGameLinkDirectly;
                var2 = _closure2_slot0;
                var1 = {};
                var6 = _closure2_slot1;
                var1['content'] = var6;
                var6 = _closure2_slot2;
                var1['ctaContent'] = var6;
                var6 = _closure2_slot4;
                var6 = var6.bind(var7)();
                var1['impressionId'] = var6;
                var5 = _closure2_slot3;
                var1['sourceQuestContent'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 220:
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
    var12 = function useConnectedConsoleLinkOnClick(arg1) {
        var2 = arg1;
        var4 = var2.quest;
        var _closure2_slot0 = var4;
        var3 = var2.questContent;
        var _closure2_slot1 = var3;
        var2 = var2.sourceQuestContent;
        var _closure2_slot2 = var2;
        var5 = _closure1_slot58;
        var3 = {};
        var3['quest'] = var4;
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var _closure2_slot3 = var3;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 29;
        var2 = var5[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useGetQuestImpressionId;
        var2 = var2.bind(var3)();
        var _closure2_slot4 = var2;
        var1 = function() {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var2 = _closure2_slot3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 31;
                var3 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var3);
                if(var2) { _fun0042_ip = 221; continue _fun0042 }
case 146:
                var4 = var5.openConsoleConnectionSettings;
                var3 = {};
                var2 = _closure2_slot0;
                var3['quest'] = var2;
                var2 = {};
                var7 = _closure2_slot1;
                var2['content'] = var7;
                var7 = 34;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.VIEW_CONSOLE_CONNECTIONS_LINK;
                var2['ctaContent'] = var7;
                var7 = _closure2_slot4;
                var7 = var7.bind(var1)();
                var2['impressionId'] = var7;
                var7 = _closure2_slot2;
                var2['sourceQuestContent'] = var7;
                var2 = var4.bind(var5)(var3, var2);
                _fun0042_ip = 22; continue _fun0042;
case 221:
                var4 = var5.openAddConsoleConnectionModal;
                var3 = {};
                var2 = _closure2_slot0;
                var3['quest'] = var2;
                var2 = {};
                var7 = _closure2_slot1;
                var2['content'] = var7;
                var7 = 34;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.CONNECT_CONSOLE_LINK;
                var2['ctaContent'] = var7;
                var7 = _closure2_slot4;
                var7 = var7.bind(var1)();
                var2['impressionId'] = var7;
                var6 = _closure2_slot2;
                var2['sourceQuestContent'] = var6;
                var2 = var4.bind(var5)(var3, var2);
case 22:
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
            var5 = _closure1_slot56;
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
                var2 = 36;
                var2 = var6[var2];
                var3 = var5.bind(var3)(var2);
                var2 = var3.getQuestsFromActivities;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            };
            var2 = var5.bind(var6)(var2, var4);
            var1 = _closure1_slot50;
            var3 = var1.bind(var3)(var2);
            var1 = null;
            if(var3) { _fun0043_ip = 222; continue _fun0043 }
case 135:
            var1 = var2;
case 222:
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
            var1 = 37;
            var1 = var5[var1];
            var2 = var4.bind(var6)(var1);
            var1 = var2.getDefaultReward;
            var1 = var1.bind(var2)(var7);
            var2 = 38;
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
            if(var7) { _fun0044_ip = 196; continue _fun0044 }
case 130:
            var5 = var5.items;
            var4 = var4 == var5;
            var3 = undefined;
            if(var4) { _fun0044_ip = 196; continue _fun0044 }
case 138:
            var4 = 0;
            var3 = var5[var4];
case 196:
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
                var1 = 39;
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
    var10 = function useManuallyStartConsoleQuest(arg1) {
        var1 = arg1;
        var8 = var1.questId;
        var _closure2_slot0 = var8;
        var9 = var1.preview;
        var _closure2_slot1 = var9;
        var11 = var1.beforeRequest;
        var _closure2_slot2 = var11;
        var10 = var1.afterRequest;
        var _closure2_slot3 = var10;
        var5 = _closure1_slot5;
        var2 = var5.useState;
        var1 = false;
        var5 = var2.bind(var5)(var1);
        var2 = _closure1_slot4;
        var12 = undefined;
        var1 = 2;
        var5 = var2.bind(var12)(var5, var1);
        var1 = 0;
        var2 = var5[var1];
        var _closure2_slot4 = var2;
        var1 = 1;
        var1 = var5[var1];
        var _closure2_slot5 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 13;
        var1 = var6[var1];
        var7 = var5.bind(var12)(var1);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot8;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() {
            var2 = _closure1_slot8;
            var1 = var2.getAccounts;
            var1 = var1.bind(var2)();
            return var1;
        };
        var14 = var6.bind(var7)(var5, var1);
        var5 = _closure1_slot11;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.clearErrorHintsByType;
            return var1;
        };
        var1 = var5.bind(var12)(var1);
        var _closure2_slot6 = var1;
        var13 = _closure1_slot5;
        var7 = var13.useCallback;
        var6 = new Array(1);
        var6[0] = var8;
        var5 = function(arg1) {
            var2 = _closure1_slot11;
            var1 = var2.getState;
            var4 = var1.bind(var2)();
            var3 = var4.setErrorHints;
            var2 = _closure2_slot0;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var7 = var7.bind(var13)(var5, var6);
        var _closure2_slot7 = var7;
        var13 = _closure1_slot5;
        var6 = var13.useEffect;
        var5 = new Array(3);
        var5[0] = var14;
        var5[1] = var1;
        var5[2] = var8;
        var1 = function() {
            var4 = _closure2_slot6;
            var3 = _closure2_slot0;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 40;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var2 = var2.QuestConsoleStartError;
            var2 = var2.EXPIRED_CREDENTIAL;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var6.bind(var13)(var1, var5);
        var1 = {};
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0045_ip = 223; continue _fun0045 }
case 181:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0045_ip = 64; continue _fun0045 }
case 31:
                    var2 = _closure2_slot2;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0045_ip = 169; continue _fun0045 }
case 33:
                    var4 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
case 169:
                    var5 = _closure2_slot5;
                    var4 = undefined;
                    var2 = true;
                    var2 = var5.bind(var4)(var2);
case 28: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 15;
                    var2 = var7[var2];
                    var8 = var5.bind(var4)(var2);
                    var7 = var8.manuallyStartConsoleQuest;
                    var5 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var7.bind(var8)(var5, var2);
                    SaveGenerator(address=103);
case 224:
                    return var2;
case 175:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0045_ip = 132; continue _fun0045 }
case 188:
                    var7 = _closure2_slot7;
                    var5 = var2.errorHints;
                    var5 = var7.bind(var4)(var5);
case 163: // try_end0
                    var7 = _closure2_slot5;
                    var5 = false;
                    var5 = var7.bind(var4)(var5);
                    var5 = _closure2_slot3;
                    if(!(var6 != var5)) { _fun0045_ip = 64; continue _fun0045 }
case 225:
                    var5 = _closure2_slot3;
                    var5 = var5.bind(var4)();
                    _fun0045_ip = 64; continue _fun0045;
case 132:
                    var7 = _closure2_slot5;
                    var5 = false;
                    var5 = var7.bind(var4)(var5);
                    var5 = _closure2_slot3;
                    if(!(var6 != var5)) { _fun0045_ip = 226; continue _fun0045 }
case 227:
                    var5 = _closure2_slot3;
                    var5 = var5.bind(var4)();
case 226:
                    return var2;
case 63: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var7 = _closure2_slot5;
                    var5 = false;
                    var5 = var7.bind(var4)(var5);
                    var5 = _closure2_slot3;
                    if(!(var6 != var5)) { _fun0045_ip = 228; continue _fun0045 }
case 202:
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var4)();
case 228:
                    throw var2;
case 64:
                    var2 = undefined;
                    return var2;
case 223:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var12)(var3);
        var3 = new Array(6);
        var3[0] = var2;
        var3[1] = var11;
        var3[2] = var10;
        var3[3] = var9;
        var3[4] = var8;
        var3[5] = var7;
        var3 = var5.bind(var6)(var4, var3);
        var1['startConsoleQuest'] = var3;
        var1['startingConsoleQuest'] = var2;
        return var1;
    };
    var3['useManuallyStartConsoleQuest'] = var10;
    var3['useWaitingForConsoleConnection'] = var9;
    var9 = function useQuestHowToHelpArticle() {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var2 = _closure1_slot57;
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
            var4 = 30;
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
            var1 = 41;
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
case 229:
            var10 = var2;
case 21:
            var1['helpdeskArticle'] = var10;
            var5 = var5.bind(var9)(var4, var1);
            var1 = {};
            if(!var8) { _fun0046_ip = 230; continue _fun0046 }
case 231:
            if(!var6) { _fun0046_ip = 24; continue _fun0046 }
case 230:
            var4 = var7;
            if(var8) { _fun0046_ip = 232; continue _fun0046 }
case 233:
            var4 = var7;
            if(!var6) { _fun0046_ip = 232; continue _fun0046 }
case 24:
            var4 = var5;
case 232:
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
case 210:
            var1 = var2.enrolledAt;
case 34:
            var1 = var3 != var1;
            var4 = var7.userStatus;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0047_ip = 214; continue _fun0047 }
case 172:
            var2 = var4.completedAt;
case 214:
            var4 = var3 != var2;
            var5 = var7.userStatus;
            var8 = var3 == var5;
            var2 = undefined;
            if(var8) { _fun0047_ip = 45; continue _fun0047 }
case 42:
            var2 = var5.claimedAt;
case 45:
            var5 = var3 != var2;
            var3 = _closure1_slot32;
            var3 = var3.bind(var6)(var7);
            var6 = var3.percentComplete;
            var3 = 0;
            var3 = var6 > var3;
            if(var5) { _fun0047_ip = 126; continue _fun0047 }
case 188:
            if(var4) { _fun0047_ip = 132; continue _fun0047 }
case 234:
            if(!var3) { _fun0047_ip = 235; continue _fun0047 }
case 125:
            if(var1) { _fun0047_ip = 236; continue _fun0047 }
case 235:
            var3 = _closure1_slot33;
            if(var1) { _fun0047_ip = 237; continue _fun0047 }
case 133:
            var1 = var3.UNACCEPTED;
            _fun0047_ip = 197; continue _fun0047;
case 237:
            var1 = var3.ACCEPTED;
case 197:
            _fun0047_ip = 238; continue _fun0047;
case 236:
            var3 = _closure1_slot33;
            var1 = var3.IN_PROGRESS;
case 238:
            _fun0047_ip = 14; continue _fun0047;
case 132:
            var3 = _closure1_slot33;
            var1 = var3.COMPLETED;
case 14:
            _fun0047_ip = 239; continue _fun0047;
case 126:
            var2 = _closure1_slot33;
            var1 = var2.CLAIMED;
case 239:
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
case 240:
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
            var1 = _closure1_slot32;
            var1 = var1.bind(var5)(var2);
            var6 = var1.percentComplete;
            var1 = _closure1_slot55;
            var2 = var1.bind(var5)(var2);
            var4 = null;
            if(!(var4 != var2)) { _fun0048_ip = 60; continue _fun0048 }
case 241:
            var6 = var2.percentComplete;
case 60:
            var1 = {};
            var1['completedRatio'] = var6;
            var9 = 100;
            var9 = var9 * var6;
            var1['percentComplete'] = var9;
            if(!(var4 != var2)) { _fun0048_ip = 242; continue _fun0048 }
case 157:
            if(var8) { _fun0048_ip = 242; continue _fun0048 }
case 243:
            var8 = var4 == var2;
            var10 = undefined;
            if(var8) { _fun0048_ip = 189; continue _fun0048 }
case 244:
            var10 = var2.progress;
case 189:
            var4 = var4 == var2;
            var9 = undefined;
            if(var4) { _fun0048_ip = 245; continue _fun0048 }
case 246:
            var9 = var2.target;
case 245:
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var4 = '';
            var2 = '/';
            var2 = var8.bind(var4)(var10, var2, var9);
            _fun0048_ip = 247; continue _fun0048;
case 242:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 42;
            var3 = var8[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.formatPercent;
            var3 = {};
            var8 = 'floor';
            var3['roundingMode'] = var8;
            var2 = var4.bind(var5)(var7, var6, var3);
case 247:
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
            var1 = _closure1_slot55;
            var7 = undefined;
            var11 = var1.bind(var7)(var8);
            var1 = _closure1_slot32;
            var6 = var1.bind(var7)(var8);
            var1 = _closure1_slot60;
            var4 = var1.bind(var7)(var8, var6);
            var3 = _closure1_slot4;
            var1 = 1;
            var1 = var3.bind(var7)(var4, var1);
            var14 = 0;
            var9 = var1[var14];
            var1 = _closure1_slot50;
            var12 = var1.bind(var7)(var8);
            var3 = var8.userStatus;
            var4 = null;
            var5 = var4 == var3;
            var1 = undefined;
            if(var5) { _fun0049_ip = 131; continue _fun0049 }
case 248:
            var1 = var3.enrolledAt;
case 131:
            var5 = var4 != var1;
            var3 = var8.userStatus;
            var10 = var4 == var3;
            var1 = undefined;
            if(var10) { _fun0049_ip = 234; continue _fun0049 }
case 124:
            var1 = var3.completedAt;
case 234:
            var13 = var4 != var1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 32;
            var1 = var1[var10];
            var1 = var3.bind(var7)(var1);
            var1 = var1.FirstPartyQuestTaskTypesSets;
            var15 = var1.DESKTOP;
            var3 = var15.has;
            var1 = var6.taskType;
            var1 = var3.bind(var15)(var1);
            if(!var1) { _fun0049_ip = 137; continue _fun0049 }
case 249:
            var3 = var6.percentComplete;
            var1 = var3 > var14;
case 137:
            var3 = var6.percentComplete;
            var3 = var14 === var3;
            if(!var5) { _fun0049_ip = 250; continue _fun0049 }
case 251:
            var5 = !var13;
case 250:
            if(!var5) { _fun0049_ip = 252; continue _fun0049 }
case 253:
            var5 = !var12;
case 252:
            if(!var5) { _fun0049_ip = 254; continue _fun0049 }
case 255:
            var5 = var4 == var11;
case 254:
            if(!var5) { _fun0049_ip = 256; continue _fun0049 }
case 257:
            if(var1) { _fun0049_ip = 209; continue _fun0049 }
case 228:
            if(!var3) { _fun0049_ip = 161; continue _fun0049 }
case 136:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 19;
            var4 = var12[var4];
            var4 = var11.bind(var7)(var4);
            var4 = var4.TaskPlatformScreen;
            var4 = var4.DESKTOP;
            var3 = var9 === var4;
case 161:
            var1 = var3;
case 209:
            var5 = var1;
case 256:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 16;
            var1 = var1[var9];
            var3 = var3.bind(var7)(var1);
            var1 = var3.isWeb;
            var3 = var1.bind(var3)();
            if(!var3) { _fun0049_ip = 258; continue _fun0049 }
case 259:
            var3 = var5;
case 258:
            if(!var3) { _fun0049_ip = 26; continue _fun0049 }
case 260:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 31;
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
            if(!var4) { _fun0049_ip = 261; continue _fun0049 }
case 262:
            var8 = var6.taskType;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var9.bind(var7)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.STREAM_ON_DESKTOP;
            var4 = var8 === var6;
case 261:
            if(!var4) { _fun0049_ip = 263; continue _fun0049 }
case 264:
            var4 = var5;
case 263:
            if(!var4) { _fun0049_ip = 265; continue _fun0049 }
case 266:
            var5 = var1.push;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 41;
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
case 265:
            if(!var3) { _fun0049_ip = 267; continue _fun0049 }
case 268:
            var3 = var1.push;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 41;
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
case 267:
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
            if(!var3) { _fun0050_ip = 123; continue _fun0050 }
case 168:
            var1 = var2;
case 123:
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
            if(!var5) { _fun0051_ip = 159; continue _fun0051 }
case 269:
            var1 = var4;
case 159:
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
                    if(!(var4 == var2)) { _fun0052_ip = 229; continue _fun0052 }
case 170:
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
                    if(!(var4 != var3)) { _fun0052_ip = 229; continue _fun0052 }
case 270:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)();
case 229:
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
case 170:
                var2 = _closure2_slot4;
                var3 = var2.current;
                var2 = _closure2_slot0;
                var1 = var3 !== var2;
case 33:
                if(!var1) { _fun0053_ip = 213; continue _fun0053 }
case 41:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 44;
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
case 213:
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
                if(!(var1 == var2)) { _fun0054_ip = 145; continue _fun0054 }
case 271:
                var1 = undefined;
                return var1;
case 145:
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 44;
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
        var3 = 45;
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
                if(!(var1 != var2)) { _fun0055_ip = 272; continue _fun0055 }
case 170:
                var2 = _closure2_slot1;
                if(!(var1 == var2)) { _fun0055_ip = 143; continue _fun0055 }
case 144:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 46;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isThemeDark;
                var4 = _closure2_slot3;
                var4 = var5.bind(var6)(var4);
                var2 = _closure1_slot24;
                if(var4) { _fun0055_ip = 45; continue _fun0055 }
case 57:
                var6 = var2.LIGHT;
                _fun0055_ip = 147; continue _fun0055;
case 45:
                var6 = var2.DARK;
case 147:
                _fun0055_ip = 269; continue _fun0055;
case 143:
                var6 = _closure2_slot1;
case 269:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 47;
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
case 272:
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
            var3 = 48;
            var3 = var7[var3];
            var7 = var4.bind(var6)(var3);
            var4 = var7.isPremium;
            var3 = _closure1_slot26;
            var3 = var3.TIER_2;
            var8 = var4.bind(var7)(var8, var3);
            var3 = null;
            if(!(var3 != var14)) { _fun0056_ip = 273; continue _fun0056 }
case 274:
            var11 = _closure1_slot0;
            var3 = _closure1_slot2;
            var15 = 41;
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
            if(var2) { _fun0056_ip = 275; continue _fun0056 }
case 276:
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
            _fun0056_ip = 277; continue _fun0056;
case 275:
            if(var10) { _fun0056_ip = 278; continue _fun0056 }
case 279:
            if(!var8) { _fun0056_ip = 280; continue _fun0056 }
case 281:
            var3 = var9;
case 280:
            _fun0056_ip = 282; continue _fun0056;
case 278:
            if(!var8) { _fun0056_ip = 283; continue _fun0056 }
case 284:
            var4 = var7;
case 283:
            var3 = var4;
case 282:
            var2 = var3;
case 277:
            return var2;
case 273:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 41;
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
        var2 = 49;
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
    var5 = function useShouldShowPreviewToolTab() {
        var2 = _closure1_slot61;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var3['useShouldShowPreviewToolTab'] = var5;
    var5 = function useShouldShowQuestsActivityPanelItem(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            var2 = var5 == var6;
            var7 = undefined;
            var1 = undefined;
            if(var2) { _fun0057_ip = 210; continue _fun0057 }
case 170:
            var1 = var6.userStatus;
case 210:
            var1 = var5 != var1;
            if(!var1) { _fun0057_ip = 58; continue _fun0057 }
case 285:
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
case 58:
            var4 = _closure1_slot50;
            var8 = var5 != var6;
            var3 = null;
            if(!var8) { _fun0057_ip = 174; continue _fun0057 }
case 13:
            var3 = var6;
case 174:
            var4 = var4.bind(var7)(var3);
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0057_ip = 186; continue _fun0057 }
case 191:
            var6 = var6.userStatus;
            var8 = var5 == var6;
            var3 = undefined;
            if(var8) { _fun0057_ip = 186; continue _fun0057 }
case 196:
            var3 = var6.claimedAt;
case 186:
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
            if(var1) { _fun0057_ip = 136; continue _fun0057 }
case 228:
            var1 = var4;
case 136:
            if(var1) { _fun0057_ip = 204; continue _fun0057 }
case 201:
            var1 = var3;
case 204:
            if(var1) { _fun0057_ip = 286; continue _fun0057 }
case 287:
            var1 = var2;
case 286:
            var1 = !var1;
            return var1;
        }
    };
    var3['useShouldShowQuestsActivityPanelItem'] = var5;
    var5 = function useQuestsWithPreviewAccess() {
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
                    if(var3) { _fun0058_ip = 149; continue _fun0058 }
case 144:
                    var5 = var2;
case 149:
                    var2 = undefined;
                    if(var3) { _fun0058_ip = 150; continue _fun0058 }
case 151:
                    var7 = var4().value;
                    var4 = var1;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if(var4) { _fun0058_ip = 150; continue _fun0058 }
case 152:
                    var2 = var7;
                    var3 = var4;
case 150:
                    if(var3) { _fun0058_ip = 153; continue _fun0058 }
case 121:
                    var1.return();
case 153:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 37;
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
                var4 = 37;
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
            var1 = 50;
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
                var1 = 50;
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
                if(!(var9 == var8)) { _fun0059_ip = 159; continue _fun0059 }
case 46:
                var8 = new Array(0);
case 159:
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
    var5 = function useShouldShowQuestPreviewOverrides(arg1) {
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
                    if(var1) { _fun0061_ip = 288; continue _fun0061 }
case 149:
                    var1 = var3.isStaff;
                    var2 = var1.bind(var3)();
case 288:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            if(var1) { _fun0060_ip = 169; continue _fun0060 }
case 190:
            var2 = arg1;
            var1 = var2.preview;
case 169:
            return var1;
        }
    };
    var3['useShouldShowQuestPreviewOverrides'] = var5;
    var3['useQuestHomeHeroShelf'] = var4;
    var4 = function useFetchQuestHomeBounties() {
        _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
            var1 = arguments[0];
            var7 = undefined;
            if(!(var1 === var7)) { _fun0062_ip = 271; continue _fun0062 }
case 37:
            var1 = {};
case 271:
            var10 = var1.previewAdCreativeIds;
            var _closure2_slot0 = var10;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 52;
            var1 = var5[var1];
            var8 = var4.bind(var7)(var1);
            var3 = var8.useBountiesExperience;
            var11 = _closure1_slot14;
            var1 = var11.QUEST_HOME_MOBILE;
            var1 = var3.bind(var8)(var1);
            var1 = var1.showBounties;
            _closure2_slot1 = var1;
            var3 = 27;
            var3 = var5[var3];
            var3 = var4.bind(var7)(var3);
            var9 = var3.BountyStaleRefreshQuestHomeExperiment;
            var8 = var9.useConfig;
            var3 = {};
            var11 = var11.QUEST_HOME_MOBILE;
            var3['location'] = var11;
            var3 = var8.bind(var9)(var3);
            var11 = var3.enabled;
            _closure2_slot2 = var11;
            var3 = 53;
            var3 = var5[var3];
            var5 = var4.bind(var7)(var3);
            var4 = var5.useVideoModalPlacementEnabled;
            var3 = 'useFetchQuestHomeBounties';
            var4 = var4.bind(var5)(var3);
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 19;
            var3 = var8[var3];
            var3 = var5.bind(var7)(var3);
            var3 = var3.AdPlacement;
            if(var4) { _fun0062_ip = 274; continue _fun0062 }
case 252:
            var9 = var3.QUEST_HOME_MOBILE_CAROUSEL;
            _fun0062_ip = 178; continue _fun0062;
case 274:
            var9 = var3.VIDEO_MODAL_MOBILE;
case 178:
            _closure2_slot3 = var9;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var5 = var3.bind(var4)(var1);
            var4 = _closure1_slot4;
            var3 = 2;
            var5 = var4.bind(var7)(var5, var3);
            var3 = 0;
            var3 = var5[var3];
            var4 = 1;
            var4 = var5[var4];
            _closure2_slot4 = var4;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
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
            var6 = new Array(4);
            var6[0] = var1;
            var6[1] = var11;
            var6[2] = var10;
            var6[3] = var9;
            var2 = function() {
                _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                    var4 = function loadBounties() {
                        var1 = undefined;
                        var4 = _closure3_slot4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot3 = var4;
                    var2 = function _loadBounties() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0064_ip = 289; continue _fun0064 }
case 181:
                                    var2 = global;
                                    var3 = var2.Date;
                                    var2 = var3.now;
                                    var2 = var2.bind(var3)();
                                    _closure3_slot1 = var2;
case 190: // try_start_0
                                    var5 = _closure2_slot0;
                                    var2 = null;
                                    if(!(var2 != var5)) { _fun0064_ip = 40; continue _fun0064 }
case 172:
                                    var2 = _closure2_slot0;
                                    var5 = var2.length;
                                    var2 = 0;
                                    if(!(!(var5 > var2))) { _fun0064_ip = 237; continue _fun0064 }
case 40:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 54;
                                    var2 = var6[var2];
                                    var7 = undefined;
                                    var6 = var5.bind(var7)(var2);
                                    var5 = var6.fetchQuestHomeBounties;
                                    var2 = _closure2_slot3;
                                    var2 = var5.bind(var6)(var2);
                                    SaveGenerator(address=106);
case 290:
                                    return var2;
case 124:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(!var5) { _fun0064_ip = 291; continue _fun0064 }
case 234: // try_end0
                                    var5 = _closure3_slot0;
                                    if(var5) { _fun0064_ip = 292; continue _fun0064 }
case 293:
                                    var6 = _closure2_slot4;
                                    var5 = false;
                                    var5 = var6.bind(var7)(var5);
case 292:
                                    return var2;
case 237: // try_start_1
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 54;
                                    var2 = var6[var2];
                                    var6 = undefined;
                                    var8 = var5.bind(var6)(var2);
                                    var7 = var8.fetchBountyPreview;
                                    var5 = _closure2_slot0;
                                    var2 = _closure2_slot3;
                                    var2 = var7.bind(var8)(var5, var2);
                                    SaveGenerator(address=182);
case 226:
                                    return var2;
case 200:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0064_ip = 178; continue _fun0064 }
case 291: // try_end1
                                    var5 = _closure3_slot0;
                                    if(var5) { _fun0064_ip = 65; continue _fun0064 }
case 20:
                                    var8 = _closure2_slot4;
                                    var7 = undefined;
                                    var5 = false;
                                    var5 = var8.bind(var7)(var5);
case 65:
                                    var5 = undefined;
                                    return var5;
case 178:
                                    var5 = _closure3_slot0;
                                    if(var5) { _fun0064_ip = 229; continue _fun0064 }
case 49:
                                    var5 = _closure2_slot4;
                                    var4 = false;
                                    var4 = var5.bind(var6)(var4);
case 229:
                                    return var2;
case 21: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register=1);
                                    var3 = _closure3_slot0;
                                    if(var3) { _fun0064_ip = 233; continue _fun0064 }
case 294:
                                    var5 = _closure2_slot4;
                                    var4 = undefined;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
case 233:
                                    throw var2;
case 289:
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
                    var5 = _closure2_slot1;
                    var3 = undefined;
                    if(var5) { _fun0063_ip = 171; continue _fun0063 }
case 41:
                    return var3;
case 171:
                    var5 = false;
                    var _closure3_slot0 = var5;
                    var5 = 0;
                    var _closure3_slot1 = var5;
                    var3 = var4.bind(var3)();
                    var2 = _closure2_slot2;
                    if(var2) { _fun0063_ip = 35; continue _fun0063 }
case 7:
                    var2 = function() {
                        var1 = true;
                        _closure3_slot0 = var1;
                        var1 = undefined;
                        return var1;
                    };
                    return var2;
case 35:
                    var2 = global;
                    var5 = var2.window;
                    var4 = var5.setInterval;
                    var3 = _closure1_slot35;
                    var2 = function() {
                        _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var3 = var1.bind(var2)();
                            var2 = _closure3_slot1;
                            var3 = var3 - var2;
                            var2 = _closure1_slot34;
                            if(!(var3 > var2)) { _fun0065_ip = 5; continue _fun0065 }
case 164:
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
            if(var1) { _fun0062_ip = 295; continue _fun0062 }
case 70:
            var1 = new Array(0);
            var2['questHomeBounties'] = var1;
            var1 = false;
            var2['isLoading'] = var1;
            var1 = var2;
            _fun0062_ip = 296; continue _fun0062;
case 295:
            var2['questHomeBounties'] = var5;
            if(var3) { _fun0062_ip = 261; continue _fun0062 }
case 297:
            var3 = var4;
case 261:
            var2['isLoading'] = var3;
            var1 = var2;
case 296:
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
            var3 = 55;
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
            if(var8) { _fun0066_ip = 298; continue _fun0066 }
case 182:
            var3 = var6.enrolledAt;
case 298:
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
case 181:
                    var4 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 56;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.SurveyActionTypes;
                    if(var4) { _fun0067_ip = 28; continue _fun0067 }
case 43:
                    var4 = var2.AD_IMPRESSION_QUEST_BAR_OPT_IN;
                    _fun0067_ip = 40; continue _fun0067;
case 28:
                    var4 = var2.AD_IMPRESSION_QUEST_BAR_OPT_OUT;
case 40:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 57;
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