// app/modules/quests/utils/QuestDataUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var6 = function isDismissible(arg1) {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.keys;
        var2 = _closure1_slot5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.includes;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 4;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var4 = var1.QuestContent;
        var1 = arg1;
        var1 = var4[var1];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var6;
    var5 = function isQuestExpired(arg1) {
        var1 = global;
        var4 = var1.Date;
        var2 = arg1;
        var2 = var2.config;
        var5 = var2.expiresAt;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var6 = var3;
        var2 = new var6[var4](var5, var4);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = var3.valueOf;
        var2 = var2.bind(var3)();
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var1 = var2 <= var1;
        return var1;
    };
    var _closure1_slot12 = var5;
    var4 = function getQuestPlacementFromQuestContent(arg1) {
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 4;
        var3 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestContent;
        var7 = var3.QUEST_BAR;
        var3 = var6[var1];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestPlacement;
        var3 = var3.DESKTOP_ACCOUNT_PANEL_AREA;
        var2[6] = var3;
        var3 = var6[var1];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestContent;
        var7 = var3.QUEST_BAR_V2;
        var3 = var6[var1];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestPlacement;
        var3 = var3.DESKTOP_ACCOUNT_PANEL_AREA;
        var2[6] = var3;
        var3 = var6[var1];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestContent;
        var7 = var3.QUEST_BAR_MOBILE;
        var3 = var6[var1];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestPlacement;
        var3 = var3.MOBILE_HOME_DOCK_AREA;
        var2[6] = var3;
        var3 = var6[var1];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestContent;
        var3 = var3.QUEST_HOME_HERO;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.QuestPlacement;
        var1 = var1.QUEST_HOME_BANNER_DESKTOP;
        var2[2] = var1;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot13 = var4;
    var1 = function getQuestDeliveryDataForPlacement(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 6;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.getConfig;
            var2 = {};
            var6 = 'getQuestDeliveryDataForPlacement';
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var2.enableNewRequestBehavior;
            var1 = _closure1_slot4;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = var1.questToDeliverForPlacement;
            var2 = var4.get;
            var5 = var2.bind(var4)(var3);
            var2 = null;
            var4 = var2 == var5;
            if(var4) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var4 = {};
            var6 = var5.quest;
            var6 = var6.id;
            var4['questId'] = var6;
            var6 = var5.adDecisionData;
            var4['adDecisionData'] = var6;
            var6 = var5.adContext;
            var4['adContext'] = var6;
            var6 = var5.metadataSealed;
            var4['metadataSealed'] = var6;
            var6 = var5.trafficMetadataRaw;
            var4['trafficMetadataRaw'] = var6;
            var5 = var5.trafficMetadataSealed;
            var4['trafficMetadataSealed'] = var5;
            var2 = var4;
case 38:
            return var2;
case 36:
            var2 = var1.questAdDecisionByPlacement;
            var1 = var2.get;
            var3 = var1.bind(var2)(var3);
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var2 = {};
            var4 = var3.questId;
            var2['questId'] = var4;
            var4 = var3.adDecisionData;
            var2['adDecisionData'] = var4;
            var4 = var3.adContext;
            var2['adContext'] = var4;
            var4 = var3.metadataSealed;
            var2['metadataSealed'] = var4;
            var4 = var3.trafficMetadataRaw;
            var2['trafficMetadataRaw'] = var4;
            var3 = var3.trafficMetadataSealed;
            var2['trafficMetadataSealed'] = var3;
            var1 = var2;
case 40:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.DismissibleQuestContentFlags;
    var _closure1_slot5 = var10;
    var10 = var7.BILLABLE_PLACEMENTS;
    var _closure1_slot6 = var10;
    var7 = var7.EMPTY_AD_DECISION_DATA;
    var _closure1_slot7 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.Routes;
    var _closure1_slot8 = var7;
    var7 = 8;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/quests/utils/QuestDataUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = 2592000000.0;
    var3['THIRTY_DAYS_MS'] = var7;
    var7 = function earnedDecisionIsValid(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0005_ip = 5; continue _fun0005 }
case 42:
            var3 = var2.fetchedAt;
            var2 = var2.ttlMillis;
            var3 = var3 + var2;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1 = var3 >= var2;
case 5:
            return var1;
        }
    };
    var3['earnedDecisionIsValid'] = var7;
    var7 = function findQuestOrReplacement(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var9 = arg2;
            var7 = arg3;
            var2 = global;
            var4 = var2.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var9);
            var5 = var9;
            if(!var3) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var8 = var2.Map;
            var4 = var9.map;
            var3 = function(arg1) {
                var2 = arg1;
                var3 = var2.id;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var10 = var4.bind(var9)(var3);
            var4 = var8.prototype;
            var4 = Object.create(var4, {constructor: {value: var8}});
            var11 = var4;
            var3 = new var11[var8](var10, var9);
            var5 = var3 instanceof Object ? var3 : var4;
case 43:
            var4 = var2.Array;
            var3 = var4.isArray;
            var3 = var3.bind(var4)(var7);
            var4 = var7;
            if(!var3) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var3 = var2.Map;
            var2 = var7.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.id;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var10 = var2.bind(var7)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var11 = var2;
            var1 = new var11[var3](var10, var9);
            var4 = var1 instanceof Object ? var1 : var2;
case 45:
            var1 = var5.get;
            var1 = var1.bind(var5)(var6);
            var3 = null;
            if(!(var3 == var1)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var2 = var4.get;
            var6 = var2.bind(var4)(var6);
            var7 = var3 == var6;
            var4 = undefined;
            if(var7) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var4 = var6.replacementId;
case 49:
            var3 = var3 != var4;
            var2 = undefined;
            if(!var3) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var3 = var5.get;
            var2 = var3.bind(var5)(var4);
case 51:
            return var2;
case 47:
            return var1;
        }
    };
    var3['findQuestOrReplacement'] = var7;
    var3['isDismissible'] = var6;
    var6 = function isDismissed(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg2;
            var2 = _closure1_slot11;
            var4 = undefined;
            var2 = var2.bind(var4)(var5);
            if(var2) { _fun0007_ip = 53; continue _fun0007 }
case 29:
            var2 = false;
            return var2;
case 53:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.QuestContent;
            var5 = var2[var5];
            var2 = 5;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.hasFlag;
            var2 = arg1;
            var2 = var2.dismissedQuestContent;
            var1 = _closure1_slot5;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['isDismissed'] = var6;
    var3['isQuestExpired'] = var5;
    var5 = function getIsQuestExpiredButWithinThirtyDayLookback(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot12;
            var2 = undefined;
            var2 = var3.bind(var2)(var1);
            if(var2) { _fun0008_ip = 53; continue _fun0008 }
case 29:
            var2 = false;
            return var2;
case 53:
            var2 = global;
            var4 = var2.Date;
            var3 = var4.now;
            var4 = var3.bind(var4)();
            var3 = 2592000000.0;
            var3 = var4 - var3;
            var5 = var2.Date;
            var2 = var1.config;
            var6 = var2.expiresAt;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var2 = new var7[var5](var6, var5);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.valueOf;
            var2 = var2.bind(var4)();
            var1 = var1.config;
            var4 = var1.expiresAt;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var2 = var2 <= var3;
            var1 = !var2;
case 54:
            return var1;
        }
    };
    var3['getIsQuestExpiredButWithinThirtyDayLookback'] = var5;
    var5 = function findNextUpcomingExpirationEpochMs(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var9 = global;
            var2 = var9.Date;
            var1 = var2.now;
            var8 = var1.bind(var2)();
            var2 = _closure1_slot9;
            var7 = undefined;
            var1 = arg1;
            var6 = var2.bind(var7)(var1);
            var1 = var6.bind(var7)();
            var2 = var1.done;
            var5 = null;
            var4 = var1;
            var3 = null;
            var1 = null;
            if(var2) { _fun0009_ip = 48; continue _fun0009 }
case 4:
            var2 = var4.value;
            var11 = var9.Date;
            var2 = var2.config;
            var13 = var2.expiresAt;
            var10 = var11.prototype;
            var10 = Object.create(var10, {constructor: {value: var11}});
            var14 = var10;
            var2 = new var14[var11](var13, var12);
            var10 = var2 instanceof Object ? var2 : var10;
            var2 = var10.valueOf;
            var2 = var2.bind(var10)();
            var10 = var3;
            if(!(!(var2 <= var8))) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            var11 = var5 == var3;
            if(var11) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var11 = var2 < var3;
case 58:
            if(!var11) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var3 = var2;
case 60:
            var10 = var3;
case 56:
            var11 = var6.bind(var7)();
            var2 = var11.done;
            var3 = var10;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0009_ip = 4; continue _fun0009 }
case 48:
            return var1;
        }
    };
    var3['findNextUpcomingExpirationEpochMs'] = var5;
    var5 = function getQuestFormattedDate(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0010_ip = 62; continue _fun0010 }
case 42:
            var1 = {};
            var2 = 'short';
            var1['dateStyle'] = var2;
            var5 = var1;
case 62:
            var1 = null;
            var2 = var1 == var4;
            var1 = '';
            if(var2) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var2 = global;
            var2 = var2.Date;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var8 = var3;
            var7 = var4;
            var2 = new var8[var2](var7, var6);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = var4.toLocaleDateString;
            var2 = _closure1_slot3;
            var2 = var2.locale;
            var1 = var3.bind(var4)(var2, var5);
case 63:
            return var1;
        }
    };
    var3['getQuestFormattedDate'] = var5;
    var5 = function getQuestForPlacement(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = var3.get;
            var1 = arg3;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 == var2)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var3 = undefined;
            return var3;
case 65:
            var3 = var4.get;
            var2 = var2.quest;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var3 = var1 == var2;
            var4 = undefined;
            var1 = undefined;
            if(var3) { _fun0011_ip = 67; continue _fun0011 }
case 7:
            var3 = _closure1_slot12;
            var3 = var3.bind(var4)(var2);
            var1 = undefined;
            if(var3) { _fun0011_ip = 67; continue _fun0011 }
case 68:
            var1 = var2;
case 67:
            return var1;
        }
    };
    var3['getQuestForPlacement'] = var5;
    var3['getQuestPlacementFromQuestContent'] = var4;
    var4 = function isBillableQuestContent(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = _closure1_slot13;
            var3 = undefined;
            var1 = arg1;
            var4 = var4.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0012_ip = 69; continue _fun0012 }
case 62:
            var3 = _closure1_slot6;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 69:
            return var1;
        }
    };
    var3['isBillableQuestContent'] = var4;
    var4 = function getAdDecisionData(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = _closure1_slot13;
            var5 = undefined;
            var2 = arg2;
            var4 = var3.bind(var5)(var2);
            var3 = null;
            if(!(var3 != var4)) { _fun0013_ip = 30; continue _fun0013 }
case 31:
            var2 = _closure1_slot14;
            var4 = var2.bind(var5)(var4);
            if(!(var3 == var4)) { _fun0013_ip = 70; continue _fun0013 }
case 71:
            var4 = {};
case 70:
            var2 = var4.adDecisionData;
            var4 = var4.questId;
            if(!(var3 != var2)) { _fun0013_ip = 7; continue _fun0013 }
case 72:
            var3 = arg1;
            if(!(var4 !== var3)) { _fun0013_ip = 73; continue _fun0013 }
case 7:
            var2 = _closure1_slot7;
case 73:
            return var2;
case 30:
            var1 = _closure1_slot7;
            return var1;
        }
    };
    var3['getAdDecisionData'] = var4;
    var4 = function getAdMetadataSealed(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = _closure1_slot13;
            var1 = undefined;
            var3 = arg1;
            var4 = var4.bind(var1)(var3);
            var3 = null;
            if(!(var3 == var4)) { _fun0014_ip = 66; continue _fun0014 }
case 31:
            return var1;
case 66:
            var2 = _closure1_slot14;
            var2 = var2.bind(var1)(var4);
            var3 = var3 == var2;
            var1 = undefined;
            if(var3) { _fun0014_ip = 5; continue _fun0014 }
case 74:
            var1 = var2.metadataSealed;
case 5:
            return var1;
        }
    };
    var3['getAdMetadataSealed'] = var4;
    var4 = function getAdTrafficMetadataRaw(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = arg2;
            var4 = _closure1_slot13;
            var2 = undefined;
            var1 = arg1;
            var5 = var4.bind(var2)(var1);
            var4 = null;
            if(!(var4 != var5)) { _fun0015_ip = 7; continue _fun0015 }
case 62:
            var1 = _closure1_slot14;
            var5 = var1.bind(var2)(var5);
            if(!(var4 == var5)) { _fun0015_ip = 75; continue _fun0015 }
case 64:
            var5 = {};
case 75:
            var1 = var5.trafficMetadataRaw;
            var5 = var5.questId;
            if(!(var4 != var1)) { _fun0015_ip = 7; continue _fun0015 }
case 76:
            if(!(var5 !== var6)) { _fun0015_ip = 77; continue _fun0015 }
case 7:
            if(!(var4 == var6)) { _fun0015_ip = 30; continue _fun0015 }
case 73:
            return var2;
case 30:
            var5 = _closure1_slot4;
            var3 = var5.getQuest;
            var3 = var3.bind(var5)(var6);
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0015_ip = 78; continue _fun0015 }
case 79:
            var2 = var3.trafficMetadataRaw;
case 78:
            return var2;
case 77:
            return var1;
        }
    };
    var3['getAdTrafficMetadataRaw'] = var4;
    var4 = function getAdTrafficMetadataSealed(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var6 = arg2;
            var4 = _closure1_slot13;
            var2 = undefined;
            var1 = arg1;
            var5 = var4.bind(var2)(var1);
            var4 = null;
            if(!(var4 != var5)) { _fun0016_ip = 7; continue _fun0016 }
case 62:
            var1 = _closure1_slot14;
            var5 = var1.bind(var2)(var5);
            if(!(var4 == var5)) { _fun0016_ip = 75; continue _fun0016 }
case 64:
            var5 = {};
case 75:
            var1 = var5.trafficMetadataSealed;
            var5 = var5.questId;
            if(!(var4 != var1)) { _fun0016_ip = 7; continue _fun0016 }
case 76:
            if(!(var5 !== var6)) { _fun0016_ip = 77; continue _fun0016 }
case 7:
            if(!(var4 == var6)) { _fun0016_ip = 30; continue _fun0016 }
case 73:
            return var2;
case 30:
            var5 = _closure1_slot4;
            var3 = var5.getQuest;
            var3 = var3.bind(var5)(var6);
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0016_ip = 78; continue _fun0016 }
case 79:
            var2 = var3.trafficMetadataSealed;
case 78:
            return var2;
case 77:
            return var1;
        }
    };
    var3['getAdTrafficMetadataSealed'] = var4;
    var4 = function getAdContext(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = _closure1_slot13;
            var1 = undefined;
            var3 = arg1;
            var4 = var4.bind(var1)(var3);
            var3 = null;
            if(!(var3 == var4)) { _fun0017_ip = 66; continue _fun0017 }
case 31:
            return var1;
case 66:
            var2 = _closure1_slot14;
            var2 = var2.bind(var1)(var4);
            var3 = var3 == var2;
            var1 = undefined;
            if(var3) { _fun0017_ip = 5; continue _fun0017 }
case 74:
            var1 = var2.adContext;
case 5:
            return var1;
        }
    };
    var3['getAdContext'] = var4;
    var4 = function captureQuestsException(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var7 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.captureException;
            var3 = {};
            var10 = var3;
            var9 = var7;
            var2 = copyDataProperties(var10, var9);
            var6 = {};
            var2 = null;
            var8 = var2 == var7;
            var2 = undefined;
            if(var8) { _fun0018_ip = 73; continue _fun0018 }
case 80:
            var2 = var7.tags;
case 73:
            var10 = var6;
            var9 = var2;
            var2 = copyDataProperties(var10, var9);
            var7 = 'quests';
            var2 = 'app_context';
            var6[1] = var7;
            var2 = 'tags';
            var3[1] = var6;
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['captureQuestsException'] = var4;
    var2 = function isOnDiscoverQuestHomeRoute() {
        var1 = global;
        var1 = var1.window;
        var1 = var1.location;
        var3 = var1.pathname;
        var2 = var3.startsWith;
        var1 = _closure1_slot8;
        var1 = var1.QUEST_HOME_DEPRECATED;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isOnDiscoverQuestHomeRoute'] = var2;
    return var1;
})();