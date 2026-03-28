// app/modules/quests/utils/QuestUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
    var5 = function isSponsoredPlayQuest(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.getDesktopApplicationIds;
            var2 = var2.bind(var3)(var4);
            var1 = var1 != var2;
            if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var3 = var2.length;
            var2 = 1;
            var1 = var3 > var2;
case 38:
            return var1;
case 36:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function hasVariant(arg1, arg2) {
        var1 = global;
        var3 = var1.Set;
        var1 = arg1;
        var1 = var1.config;
        var4 = var1.features;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var3 = var1 instanceof Object ? var1 : var2;
        var2 = var3.has;
        var1 = arg2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.DISCORD_APPLICATION_ID;
    var _closure1_slot8 = var9;
    var6 = var6.QuestVariants;
    var _closure1_slot9 = var6;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/utils/QuestUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isSponsoredPlayQuest'] = var5;
    var5 = function isPlayAnyActivityQuest(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.getPlayActivityApplicationId;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot8;
        var1 = var2 === var1;
        return var1;
    };
    var3['isPlayAnyActivityQuest'] = var5;
    var3['hasVariant'] = var4;
    var4 = function canLaunchActivity(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 7;
            var1 = var1[var6];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasPlayActivityTask;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0005_ip = 35; continue _fun0005 }
case 40:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var3 = var3.bind(var5)(var2);
            var2 = var3.hasAchievementActivityTask;
            var1 = var2.bind(var3)(var4);
case 35:
            return var1;
        }
    };
    var3['canLaunchActivity'] = var4;
    var4 = function filterQuestsForSocialEntrypoints(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var13 = arg2;
            var1 = global;
            var1 = var1.Map;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var24 = var2;
            var1 = new var24[var1](var23);
            var1 = var1 instanceof Object ? var1 : var2;
            var3 = _closure1_slot10;
            var11 = undefined;
            var2 = arg1;
            var10 = var3.bind(var11)(var2);
            var3 = var10.bind(var11)();
            var2 = var3.done;
            var9 = 7;
            var8 = 2;
            var7 = 0;
            var6 = 1;
            var5 = var3;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var14 = var5.value;
            var2 = _closure1_slot2;
            var2 = var2.bind(var11)(var14, var8);
            var19 = var2[var7];
            var18 = var2[var6];
            var2 = _closure1_slot12;
            var2 = var2.bind(var11)(var18);
            var15 = var4;
            var14 = var3;
            if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var16 = _closure1_slot13;
            var2 = _closure1_slot9;
            var2 = var2.NON_GAMING_PLAY_QUEST;
            var2 = var16.bind(var11)(var18, var2);
            var15 = var4;
            var14 = var3;
            if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 45:
            var16 = _closure1_slot10;
            var17 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var9];
            var17 = var17.bind(var11)(var2);
            var2 = var17.getQuestTaskTypes;
            var2 = var2.bind(var17)(var18);
            var2 = var16.bind(var11)(var2);
            var17 = var2.bind(var11)();
            var16 = var17.done;
            var20 = var17;
            var15 = var20;
            var14 = var2;
            if(var16) { _fun0006_ip = 43; continue _fun0006 }
case 46:
            var17 = var20.value;
            var16 = var13.has;
            var17 = var16.bind(var13)(var17);
            var16 = var20;
            if(var17) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var21 = var2.bind(var11)();
            var17 = var21.done;
            var20 = var21;
            var15 = var20;
            var14 = var2;
            if(var17) { _fun0006_ip = 43; continue _fun0006 }
case 49:
            _fun0006_ip = 46; continue _fun0006;
case 47:
            var17 = var1.set;
            var17 = var17.bind(var1)(var19, var18);
            var15 = var16;
            var14 = var2;
case 43:
            var16 = var10.bind(var11)();
            var2 = var16.done;
            var4 = var15;
            var3 = var14;
            var5 = var16;
            if(!var2) { _fun0006_ip = 42; continue _fun0006 }
case 41:
            return var1;
        }
    };
    var3['filterQuestsForSocialEntrypoints'] = var4;
    var4 = function isShareableQuest(arg1) {
        var1 = arg1;
        var2 = var1.sharePolicy;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.QuestSharePolicy;
        var1 = var1.NOT_SHAREABLE;
        var1 = var2 !== var1;
        return var1;
    };
    var3['isShareableQuest'] = var4;
    var4 = function isStreamingAndCanWatch(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var8 = arg2;
            var2 = null;
            var1 = arg1;
            var1 = var2 != var1;
            if(!var1) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var1 = var2 != var8;
case 50:
            if(!var1) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 9;
            var4 = var4[var3];
            var3 = undefined;
            var7 = var5.bind(var3)(var4);
            var6 = var7.canWatchStream;
            var12 = _closure1_slot6;
            var11 = _closure1_slot4;
            var10 = _closure1_slot5;
            var9 = _closure1_slot3;
            var14 = var7;
            var13 = var8;
            var3 = var14[var6](var13, var12, var11, var10, var9, var8);
            var2 = 0;
            var1 = var3[var2];
case 52:
            return var1;
        }
    };
    var3['isStreamingAndCanWatch'] = var4;
    var4 = function getQuestType(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var3.bind(var4)(var1);
            var3 = var5.hasWatchVideoTasks;
            var1 = {};
            var6 = arg1;
            var1['config'] = var6;
            var1 = var3.bind(var5)(var1);
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 10;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.QuestType;
            if(var1) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            var1 = var2.GAMEPLAY;
            _fun0008_ip = 56; continue _fun0008;
case 54:
            var1 = var2.VIDEO;
case 56:
            return var1;
        }
    };
    var3['getQuestType'] = var4;
    var4 = function isQuestFeaturedByHero(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = arg1;
        var3 = var2.ctaQuests;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.questId;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isQuestFeaturedByHero'] = var4;
    var2 = function setQuestHomeUtmContext(arg1) {
        var1 = arg1;
        var5 = var1.questId;
        var7 = var1.fromContent;
        var8 = var1.utmSource;
        var6 = var1.utmMedium;
        var3 = _closure1_slot7;
        var2 = var3.getState;
        var4 = var2.bind(var3)();
        var3 = var4.setUtmCurrentContext;
        var2 = {};
        var2['utmSourceCurrent'] = var8;
        var2['utmMediumCurrent'] = var6;
        var2['utmCampaignCurrent'] = var5;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 11;
        var5 = var5[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var5 = var6.getQuestContentName;
        var5 = var5.bind(var6)(var7);
        var2['utmContentCurrent'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setQuestHomeUtmContext'] = var2;
    return var1;
})();