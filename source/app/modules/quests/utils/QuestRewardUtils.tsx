// app/modules/quests/utils/QuestRewardUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var13;
    var10 = function getCollectiblesQuestReward(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var3 = var1.rewards;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.QuestRewardTypes;
                var1 = var1.COLLECTIBLE;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var6 = undefined;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.type;
case 2:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.QuestRewardTypes;
            var3 = var3.COLLECTIBLE;
            var1 = null;
            if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var10;
    var9 = function hasFractionalPremiumQuestReward(arg1) {
        var1 = arg1;
        var1 = var1.rewardsConfig;
        var3 = var1.rewards;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.QuestRewardTypes;
            var1 = var1.FRACTIONAL_PREMIUM;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot5 = var9;
    var8 = function hasVirtualCurrencyReward(arg1) {
        var1 = arg1;
        var1 = var1.rewardsConfig;
        var3 = var1.rewards;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.QuestRewardTypes;
            var1 = var1.VIRTUAL_CURRENCY;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot6 = var8;
    var7 = function hasPremiumOrbQuantity(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var3 = var1.rewards;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.QuestRewardTypes;
                var1 = var1.VIRTUAL_CURRENCY;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var4 = var1 == var2;
            var3 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var2.premiumOrbQuantity;
case 6:
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = 0;
            var1 = var3 > var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var7;
    var6 = function getVirtualCurrencyRewardOrbQuantity(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var3 = var1.rewards;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.QuestRewardTypes;
                var1 = var1.VIRTUAL_CURRENCY;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = var2.orbQuantity;
case 6:
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function isCollectibleQuestRewardPremiumExtendable(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot4;
            var4 = undefined;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var5 = var1 == var3;
            if(var5) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var4 = var3.expirationMode;
case 10:
            var1 = var1 != var4;
            if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var3 = _closure1_slot3;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 12:
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function getQuestOrbRewardQuantityForUser(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg1;
            var8 = arg2;
            var1 = var7.rewardsConfig;
            var3 = var1.rewards;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.QuestRewardTypes;
                var1 = var1.VIRTUAL_CURRENCY;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            if(!(var1 != var8)) { _fun0005_ip = 16; continue _fun0005 }
case 3:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 6;
            var4 = var6[var4];
            var6 = undefined;
            var5 = var5.bind(var6)(var4);
            var4 = var5.getQuestOrbMultiplierEligibilityForUser;
            var5 = var4.bind(var5)(var8);
            var4 = _closure1_slot7;
            var4 = var4.bind(var6)(var7);
            if(!var4) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 7;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.shouldReceiveQuestOrbMultiplier;
            var3 = var3.bind(var4)(var5);
            if(!var3) { _fun0005_ip = 17; continue _fun0005 }
case 19:
            var3 = var2.premiumOrbQuantity;
            if(!(var1 == var3)) { _fun0005_ip = 20; continue _fun0005 }
case 17:
            var3 = var2.orbQuantity;
case 20:
            return var3;
case 16:
            var2 = var2.orbQuantity;
            return var2;
case 14:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = function _getDefaultRewardName(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot5;
            var4 = undefined;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0006_ip = 21; continue _fun0006 }
case 22:
            var2 = _closure1_slot6;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0006_ip = 18; continue _fun0006 }
case 23:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 9;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.getDefaultReward;
            var2 = var2.bind(var5)(var3);
            var5 = var2.messages;
            var2 = arg3;
            if(var2) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var2 = var5.name;
            _fun0006_ip = 5; continue _fun0006;
case 24:
            var2 = var5.nameWithArticle;
case 5:
            return var2;
case 18:
            var5 = _closure1_slot10;
            var2 = arg2;
            var2 = var5.bind(var4)(var3, var2);
            var5 = null;
            if(!(var5 == var2)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var6 = _closure1_slot8;
            var2 = var6.bind(var4)(var3);
case 26:
            var5 = var5 != var2;
            var8 = 0;
            if(!var5) { _fun0006_ip = 28; continue _fun0006 }
case 29:
            var8 = var2;
case 28:
            var5 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 5;
            var6 = var9[var2];
            var6 = var5.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var2 = var9[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.t;
            var5 = var2.nLXlh+;
            var2 = {};
            var2['orbAmount'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            return var2;
case 21:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 8;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getFractionalPremiumQuestRewardName;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var11 = global;
    var16 = var11.Object;
    var15 = var16.defineProperty;
    var14 = {};
    var1 = true;
    var14['value'] = var1;
    var1 = '__esModule';
    var1 = var15.bind(var16)(var3, var1, var14);
    var1 = 0;
    var15 = var13[var1];
    var14 = metroImportDefault;
    var1 = undefined;
    var14 = var14.bind(var1)(var15);
    var _closure1_slot2 = var14;
    var15 = var11.Set;
    var14 = 1;
    var11 = var13[var14];
    var11 = var12.bind(var1)(var11);
    var11 = var11.QuestRewardExpirationMode;
    var16 = var11.PREMIUM_EXTENSION;
    var11 = new Array(2);
    var11[0] = var16;
    var14 = var13[var14];
    var14 = var12.bind(var1)(var14);
    var14 = var14.QuestRewardExpirationMode;
    var14 = var14.PREMIUM_PERMANENT;
    var11[1] = var14;
    var14 = var15.prototype;
    var14 = Object.create(var14, {constructor: {value: var15}});
    var20 = var14;
    var19 = var11;
    var11 = new var20[var15](var19, var18);
    var11 = var11 instanceof Object ? var11 : var14;
    var _closure1_slot3 = var11;
    var11 = 12;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/quests/utils/QuestRewardUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var3['getCollectiblesQuestReward'] = var10;
    var10 = function getCollectibleQuestRewardExtendableExpirationDate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot4;
            var5 = undefined;
            var1 = arg1;
            var2 = var2.bind(var5)(var1);
            var6 = null;
            var4 = var6 != var2;
            var1 = null;
            if(!var4) { _fun0007_ip = 18; continue _fun0007 }
case 30:
            var4 = 'expiresAtPremium';
            var4 = var4 in var2;
            var1 = null;
            if(!var4) { _fun0007_ip = 18; continue _fun0007 }
case 15:
            var4 = var2.expiresAtPremium;
            var4 = var6 != var4;
            var1 = null;
            if(!var4) { _fun0007_ip = 18; continue _fun0007 }
case 9:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 3;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getQuestFormattedDate;
            var2 = var2.expiresAtPremium;
            var1 = var3.bind(var4)(var2);
case 18:
            return var1;
        }
    };
    var3['getCollectibleQuestRewardExtendableExpirationDate'] = var10;
    var10 = function getCollectibleQuestRewardDuration(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot4;
            var7 = undefined;
            var3 = var1.bind(var7)(var5);
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 31; continue _fun0008 }
case 11:
            var4 = 'expiresAt';
            var4 = var4 in var3;
            if(!var4) { _fun0008_ip = 31; continue _fun0008 }
case 32:
            var4 = var3.expiresAt;
            if(!(var1 != var4)) { _fun0008_ip = 31; continue _fun0008 }
case 12:
            var4 = global;
            var8 = var4.Date;
            var15 = var5.expiresAt;
            var6 = var8.prototype;
            var6 = Object.create(var6, {constructor: {value: var8}});
            var16 = var6;
            var5 = new var16[var8](var15, var14);
            var10 = var5 instanceof Object ? var5 : var6;
            var6 = var4.Date;
            var15 = var3.expiresAt;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var16 = var5;
            var3 = new var16[var6](var15, var14);
            var9 = var3 instanceof Object ? var3 : var5;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var11 = 4;
            var3 = var3[var11];
            var5 = var5.bind(var7)(var3);
            var3 = var5.differenceInDays;
            var5 = var3.bind(var5)(var9, var10);
            var12 = var4.Math;
            var8 = var12.floor;
            var3 = 30;
            var6 = var5 / var3;
            var6 = var8.bind(var12)(var6);
            var12 = var5 % var3;
            var5 = 0;
            var8 = 25;
            var3 = 0;
            if(!(var12 >= var8)) { _fun0008_ip = 33; continue _fun0008 }
case 34:
            var3 = 1;
case 33:
            var6 = var6 + var3;
            var3 = 12;
            if(!(!(var6 >= var3))) { _fun0008_ip = 35; continue _fun0008 }
case 36:
            if(!(!(var6 > var5))) { _fun0008_ip = 37; continue _fun0008 }
case 38:
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var11];
            var8 = var8.bind(var7)(var5);
            var5 = var8.differenceInDays;
            var10 = var5.bind(var8)(var9, var10);
            var5 = 7;
            if(!(!(var10 >= var5))) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var9 = _closure1_slot0;
            var13 = _closure1_slot1;
            var8 = 5;
            var11 = var13[var8];
            var11 = var9.bind(var7)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var13[var8];
            var8 = var9.bind(var7)(var8);
            var8 = var8.t;
            var9 = var8.k2UNz+;
            var8 = {};
            var8['days'] = var10;
            var8 = var11.bind(var12)(var9, var8);
            return var8;
case 39:
            var9 = var4.Math;
            var8 = var9.ceil;
            var5 = var10 / var5;
            var11 = var8.bind(var9)(var5);
            var8 = _closure1_slot0;
            var12 = _closure1_slot1;
            var5 = 5;
            var9 = var12[var5];
            var9 = var8.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var5 = var12[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5.EmoBD2;
            var5 = {};
            var5['weeks'] = var11;
            var5 = var9.bind(var10)(var8, var5);
            return var5;
case 37:
            var8 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 5;
            var9 = var11[var5];
            var9 = var8.bind(var7)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var5 = var11[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5.kridzK;
            var5 = {};
            var5['months'] = var6;
            var5 = var9.bind(var10)(var8, var5);
            return var5;
case 35:
            var5 = var4.Math;
            var4 = var5.floor;
            var3 = var6 / var3;
            var6 = var4.bind(var5)(var3);
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 5;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.PClsrw;
            var2 = {};
            var2['years'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 31:
            return var1;
        }
    };
    var3['getCollectibleQuestRewardDuration'] = var10;
    var3['hasFractionalPremiumQuestReward'] = var9;
    var3['hasVirtualCurrencyReward'] = var8;
    var3['hasPremiumOrbQuantity'] = var7;
    var7 = function hasCollectiblesQuestReward(arg1) {
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['hasCollectiblesQuestReward'] = var7;
    var7 = function hasInGameQuestReward(arg1) {
        var1 = arg1;
        var1 = var1.rewardsConfig;
        var3 = var1.rewards;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.QuestRewardTypes;
            var1 = var1.IN_GAME;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['hasInGameQuestReward'] = var7;
    var7 = function hasQuestRewardCode(arg1) {
        var1 = arg1;
        var1 = var1.rewardsConfig;
        var3 = var1.rewards;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.QuestRewardTypes;
            var1 = var1.REWARD_CODE;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['hasQuestRewardCode'] = var7;
    var7 = function getInGameQuestReward(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var3 = var1.rewards;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.QuestRewardTypes;
                var1 = var1.IN_GAME;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0009_ip = 41; continue _fun0009 }
case 15:
            var1 = var2;
case 41:
            return var1;
        }
    };
    var3['getInGameQuestReward'] = var7;
    var7 = function getCollectiblesQuestRewardItem(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot4;
            var5 = undefined;
            var1 = arg1;
            var3 = var3.bind(var5)(var1);
            var1 = null;
            var6 = var1 == var3;
            var4 = undefined;
            if(var6) { _fun0010_ip = 42; continue _fun0010 }
case 30:
            var4 = var3.skuId;
case 42:
            var3 = _closure1_slot2;
            var2 = var3.getProduct;
            var3 = var2.bind(var3)(var4);
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0010_ip = 25; continue _fun0010 }
case 43:
            var4 = var3.items;
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0010_ip = 25; continue _fun0010 }
case 44:
            var3 = 0;
            var2 = var4[var3];
case 25:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0010_ip = 45; continue _fun0010 }
case 46:
            var1 = var2;
case 45:
            return var1;
        }
    };
    var3['getCollectiblesQuestRewardItem'] = var7;
    var3['getVirtualCurrencyRewardOrbQuantity'] = var6;
    var6 = function getVirtualCurrencyRewardPremiumOrbQuantity(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var3 = var1.rewards;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.QuestRewardTypes;
                var1 = var1.VIRTUAL_CURRENCY;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var2 = null;
            var3 = var2 == var1;
            var2 = undefined;
            var4 = undefined;
            if(var3) { _fun0011_ip = 2; continue _fun0011 }
case 3:
            var4 = var1.type;
case 2:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 2;
            var3 = var6[var3];
            var3 = var5.bind(var2)(var3);
            var3 = var3.QuestRewardTypes;
            var3 = var3.VIRTUAL_CURRENCY;
            if(!(var4 !== var3)) { _fun0011_ip = 5; continue _fun0011 }
case 47:
            return var2;
case 5:
            var1 = var1.premiumOrbQuantity;
            return var1;
        }
    };
    var3['getVirtualCurrencyRewardPremiumOrbQuantity'] = var6;
    var3['isCollectibleQuestRewardPremiumExtendable'] = var5;
    var5 = function isCollectibleQuestRewardPermanentWithPremiumSubscription(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot9;
            var5 = undefined;
            var1 = var1.bind(var5)(var4);
            if(!var1) { _fun0012_ip = 48; continue _fun0012 }
case 49:
            var3 = _closure1_slot4;
            var4 = var3.bind(var5)(var4);
            var3 = null;
            var6 = var3 == var4;
            var3 = undefined;
            if(var6) { _fun0012_ip = 50; continue _fun0012 }
case 32:
            var3 = var4.expirationMode;
case 50:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardExpirationMode;
            var2 = var2.PREMIUM_PERMANENT;
            var1 = var3 === var2;
case 48:
            return var1;
        }
    };
    var3['isCollectibleQuestRewardPermanentWithPremiumSubscription'] = var5;
    var5 = function getQuestPrimaryReward(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var4 = var2.userStatus;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0013_ip = 11; continue _fun0013 }
case 49:
            var1 = var4.claimedTier;
case 11:
            var4 = var3 != var1;
            var3 = 0;
            if(!var4) { _fun0013_ip = 51; continue _fun0013 }
case 23:
            var3 = var1;
case 51:
            var4 = var2.config;
            var1 = 'rewardsConfig';
            var1 = var1 in var4;
            var2 = var2.config;
            if(var1) { _fun0013_ip = 52; continue _fun0013 }
case 53:
            var1 = var2.rewards;
            var1 = var1[var3];
            _fun0013_ip = 47; continue _fun0013;
case 52:
            var2 = var2.rewardsConfig;
            var2 = var2.rewards;
            var1 = var2[var3];
case 47:
            return var1;
        }
    };
    var3['getQuestPrimaryReward'] = var5;
    var3['getQuestOrbRewardQuantityForUser'] = var4;
    var4 = function getDefaultRewardName(arg1, arg2) {
        var5 = _closure1_slot11;
        var4 = undefined;
        var3 = arg1;
        var2 = arg2;
        var1 = false;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['getDefaultRewardName'] = var4;
    var4 = function getDefaultRewardNameWithArticle(arg1, arg2) {
        var5 = _closure1_slot11;
        var4 = undefined;
        var3 = arg1;
        var2 = arg2;
        var1 = true;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['getDefaultRewardNameWithArticle'] = var4;
    var4 = function getRewardCodeQuestReward(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.quest;
            var3 = var1.idx;
            var1 = null;
            if(!(var1 != var3)) { _fun0014_ip = 54; continue _fun0014 }
case 55:
            var2 = var2.config;
            var2 = var2.rewardsConfig;
            var2 = var2.rewards;
            var3 = var2[var3];
            var5 = var3.type;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var4);
            var2 = var2.QuestRewardTypes;
            var4 = var2.REWARD_CODE;
            var2 = null;
            if(!(var5 === var4)) { _fun0014_ip = 4; continue _fun0014 }
case 5:
            var2 = var3;
case 4:
            return var2;
case 54:
            return var1;
        }
    };
    var3['getRewardCodeQuestReward'] = var4;
    var4 = function isTieredRewardCodeQuest(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var1 = var1.quest;
            var1 = var1.config;
            var2 = var1.rewardsConfig;
            var3 = var2.assignmentMethod;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.QuestRewardAssignmentMethods;
            var1 = var1.TIERED;
            var1 = var3 === var1;
            if(!var1) { _fun0015_ip = 56; continue _fun0015 }
case 57:
            var3 = var2.rewards;
            var4 = var3.length;
            var3 = 0;
            var1 = var4 > var3;
case 56:
            if(!var1) { _fun0015_ip = 58; continue _fun0015 }
case 5:
            var4 = var2.rewards;
            var3 = var4.every;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.QuestRewardTypes;
                var1 = var1.REWARD_CODE;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 58:
            return var1;
        }
    };
    var3['isTieredRewardCodeQuest'] = var4;
    var4 = function getDefaultPlatform(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var3 = var1.platforms;
            var1 = var3.length;
            var2 = 0;
            if(!(!(var1 > var2))) { _fun0016_ip = 59; continue _fun0016 }
case 11:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 11;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.QuestRewardCodePlatforms;
            var1 = var1.CROSS_PLATFORM;
            _fun0016_ip = 60; continue _fun0016;
case 59:
            var1 = var3[var2];
case 60:
            return var1;
        }
    };
    var3['getDefaultPlatform'] = var4;
    var2 = function(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 11;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.XBOX;
            if(!(var2 !== var3)) { _fun0017_ip = 61; continue _fun0017 }
case 62:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.PLAYSTATION;
            if(!(var2 !== var3)) { _fun0017_ip = 63; continue _fun0017 }
case 64:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.SWITCH;
            if(!(var2 !== var3)) { _fun0017_ip = 65; continue _fun0017 }
case 66:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.PC;
            if(!(var2 !== var3)) { _fun0017_ip = 67; continue _fun0017 }
case 68:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.CROSS_PLATFORM;
            if(!(var2 !== var3)) { _fun0017_ip = 69; continue _fun0017 }
case 70:
            return var5;
case 69:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.UWVbzV;
            var2 = var3.bind(var4)(var2);
            return var2;
case 67:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.YK+wUg;
            var2 = var3.bind(var4)(var2);
            return var2;
case 65:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["1pp0su"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 63:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 5;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["6IeKx2"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 61:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 5;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.G84UWZ;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getPlatformString'] = var2;
    return var1;
})();