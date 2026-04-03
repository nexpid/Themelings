// app/modules/quests/utils/QuestRewardUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function getCollectiblesQuestReward(arg1) {
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
    var _closure1_slot4 = var6;
    var5 = function hasFractionalPremiumQuestReward(arg1) {
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
    var _closure1_slot5 = var5;
    var4 = function isCollectibleQuestRewardPremiumExtendable(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot4;
            var4 = undefined;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var5 = var1 == var3;
            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var3.expirationMode;
case 6:
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot3;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 8:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = function _getDefaultRewardName(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot5;
            var4 = undefined;
            var1 = var1.bind(var4)(var3);
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = 7;
            var1 = var5[var1];
            var6 = var2.bind(var4)(var1);
            var1 = var6.getDefaultReward;
            var1 = var1.bind(var6)(var3);
            var6 = var1.messages;
            var1 = arg2;
            if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = var6.name;
            _fun0003_ip = 14; continue _fun0003;
case 12:
            var1 = var6.nameWithArticle;
case 14:
            return var1;
case 10:
            var1 = 6;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getFractionalPremiumQuestRewardName;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var7 = global;
    var12 = var7.Object;
    var11 = var12.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var10);
    var1 = 0;
    var11 = var9[var1];
    var10 = metroImportDefault;
    var1 = undefined;
    var10 = var10.bind(var1)(var11);
    var _closure1_slot2 = var10;
    var11 = var7.Set;
    var10 = 1;
    var7 = var9[var10];
    var7 = var8.bind(var1)(var7);
    var7 = var7.QuestRewardExpirationMode;
    var12 = var7.PREMIUM_EXTENSION;
    var7 = new Array(2);
    var7[0] = var12;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var10 = var10.QuestRewardExpirationMode;
    var10 = var10.PREMIUM_PERMANENT;
    var7[1] = var10;
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var16 = var10;
    var15 = var7;
    var7 = new var16[var11](var15, var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot3 = var7;
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/quests/utils/QuestRewardUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getCollectiblesQuestReward'] = var6;
    var6 = function getCollectibleQuestRewardExtendableExpirationDate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot4;
            var5 = undefined;
            var1 = arg1;
            var2 = var2.bind(var5)(var1);
            var6 = null;
            var4 = var6 != var2;
            var1 = null;
            if(!var4) { _fun0004_ip = 5; continue _fun0004 }
case 11:
            var4 = 'expiresAtPremium';
            var4 = var4 in var2;
            var1 = null;
            if(!var4) { _fun0004_ip = 5; continue _fun0004 }
case 15:
            var4 = var2.expiresAtPremium;
            var4 = var6 != var4;
            var1 = null;
            if(!var4) { _fun0004_ip = 5; continue _fun0004 }
case 16:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 3;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getQuestFormattedDate;
            var2 = var2.expiresAtPremium;
            var1 = var3.bind(var4)(var2);
case 5:
            return var1;
        }
    };
    var3['getCollectibleQuestRewardExtendableExpirationDate'] = var6;
    var6 = function getCollectibleQuestRewardDuration(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot4;
            var7 = undefined;
            var3 = var1.bind(var7)(var5);
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 17; continue _fun0005 }
case 7:
            var4 = 'expiresAt';
            var4 = var4 in var3;
            if(!var4) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var4 = var3.expiresAt;
            if(!(var1 != var4)) { _fun0005_ip = 17; continue _fun0005 }
case 8:
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
            if(!(var12 >= var8)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var3 = 1;
case 19:
            var6 = var6 + var3;
            var3 = 12;
            if(!(!(var6 >= var3))) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            if(!(!(var6 > var5))) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var11];
            var8 = var8.bind(var7)(var5);
            var5 = var8.differenceInDays;
            var10 = var5.bind(var8)(var9, var10);
            var5 = 7;
            if(!(!(var10 >= var5))) { _fun0005_ip = 25; continue _fun0005 }
case 26:
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
case 25:
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
case 23:
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
case 21:
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
case 17:
            return var1;
        }
    };
    var3['getCollectibleQuestRewardDuration'] = var6;
    var3['hasFractionalPremiumQuestReward'] = var5;
    var5 = function hasVirtualCurrencyReward(arg1) {
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
    var3['hasVirtualCurrencyReward'] = var5;
    var5 = function hasPremiumOrbQuantity(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
            if(var4) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var3 = var2.premiumOrbQuantity;
case 27:
            var1 = var1 != var3;
            if(!var1) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var2 = 0;
            var1 = var3 > var2;
case 29:
            return var1;
        }
    };
    var3['hasPremiumOrbQuantity'] = var5;
    var5 = function hasCollectiblesQuestReward(arg1) {
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['hasCollectiblesQuestReward'] = var5;
    var5 = function hasInGameQuestReward(arg1) {
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
    var3['hasInGameQuestReward'] = var5;
    var5 = function hasQuestRewardCode(arg1) {
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
    var3['hasQuestRewardCode'] = var5;
    var5 = function getInGameQuestReward(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            if(!var3) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var1 = var2;
case 31:
            return var1;
        }
    };
    var3['getInGameQuestReward'] = var5;
    var5 = function getCollectiblesQuestRewardItem(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot4;
            var5 = undefined;
            var1 = arg1;
            var3 = var3.bind(var5)(var1);
            var1 = null;
            var6 = var1 == var3;
            var4 = undefined;
            if(var6) { _fun0008_ip = 33; continue _fun0008 }
case 11:
            var4 = var3.skuId;
case 33:
            var3 = _closure1_slot2;
            var2 = var3.getProduct;
            var3 = var2.bind(var3)(var4);
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0008_ip = 34; continue _fun0008 }
case 30:
            var4 = var3.items;
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var3 = 0;
            var2 = var4[var3];
case 34:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0008_ip = 36; continue _fun0008 }
case 37:
            var1 = var2;
case 36:
            return var1;
        }
    };
    var3['getCollectiblesQuestRewardItem'] = var5;
    var5 = function getVirtualCurrencyRewardOrbQuantity(arg1) {
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
                var1 = var1.VIRTUAL_CURRENCY;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0009_ip = 27; continue _fun0009 }
case 28:
            var1 = var2.orbQuantity;
case 27:
            return var1;
        }
    };
    var3['getVirtualCurrencyRewardOrbQuantity'] = var5;
    var5 = function getVirtualCurrencyRewardPremiumOrbQuantity(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
            if(var3) { _fun0010_ip = 2; continue _fun0010 }
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
            if(!(var4 !== var3)) { _fun0010_ip = 5; continue _fun0010 }
case 36:
            return var2;
case 5:
            var1 = var1.premiumOrbQuantity;
            return var1;
        }
    };
    var3['getVirtualCurrencyRewardPremiumOrbQuantity'] = var5;
    var3['isCollectibleQuestRewardPremiumExtendable'] = var4;
    var4 = function isCollectibleQuestRewardPermanentWithPremiumSubscription(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot6;
            var5 = undefined;
            var1 = var1.bind(var5)(var4);
            if(!var1) { _fun0011_ip = 38; continue _fun0011 }
case 39:
            var3 = _closure1_slot4;
            var4 = var3.bind(var5)(var4);
            var3 = null;
            var6 = var3 == var4;
            var3 = undefined;
            if(var6) { _fun0011_ip = 31; continue _fun0011 }
case 18:
            var3 = var4.expirationMode;
case 31:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardExpirationMode;
            var2 = var2.PREMIUM_PERMANENT;
            var1 = var3 === var2;
case 38:
            return var1;
        }
    };
    var3['isCollectibleQuestRewardPermanentWithPremiumSubscription'] = var4;
    var4 = function getQuestPrimaryReward(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var4 = var2.userStatus;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0012_ip = 7; continue _fun0012 }
case 39:
            var1 = var4.claimedTier;
case 7:
            var4 = var3 != var1;
            var3 = 0;
            if(!var4) { _fun0012_ip = 40; continue _fun0012 }
case 41:
            var3 = var1;
case 40:
            var4 = var2.config;
            var1 = 'rewardsConfig';
            var1 = var1 in var4;
            var2 = var2.config;
            if(var1) { _fun0012_ip = 35; continue _fun0012 }
case 42:
            var1 = var2.rewards;
            var1 = var1[var3];
            _fun0012_ip = 43; continue _fun0012;
case 35:
            var2 = var2.rewardsConfig;
            var2 = var2.rewards;
            var1 = var2[var3];
case 43:
            return var1;
        }
    };
    var3['getQuestPrimaryReward'] = var4;
    var4 = function getDefaultRewardName(arg1) {
        var4 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var1 = false;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['getDefaultRewardName'] = var4;
    var4 = function getDefaultRewardNameWithArticle(arg1) {
        var4 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var1 = true;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['getDefaultRewardNameWithArticle'] = var4;
    var4 = function getRewardCodeQuestReward(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = var1.quest;
            var3 = var1.idx;
            var1 = null;
            if(!(var1 != var3)) { _fun0013_ip = 4; continue _fun0013 }
case 44:
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
            if(!(var5 === var4)) { _fun0013_ip = 45; continue _fun0013 }
case 36:
            var2 = var3;
case 45:
            return var2;
case 4:
            return var1;
        }
    };
    var3['getRewardCodeQuestReward'] = var4;
    var4 = function isTieredRewardCodeQuest(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var1 = var1.quest;
            var1 = var1.config;
            var2 = var1.rewardsConfig;
            var3 = var2.assignmentMethod;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 8;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.QuestRewardAssignmentMethods;
            var1 = var1.TIERED;
            var1 = var3 === var1;
            if(!var1) { _fun0014_ip = 37; continue _fun0014 }
case 46:
            var3 = var2.rewards;
            var4 = var3.length;
            var3 = 0;
            var1 = var4 > var3;
case 37:
            if(!var1) { _fun0014_ip = 47; continue _fun0014 }
case 36:
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
case 47:
            return var1;
        }
    };
    var3['isTieredRewardCodeQuest'] = var4;
    var4 = function getDefaultPlatform(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var3 = var1.platforms;
            var1 = var3.length;
            var2 = 0;
            if(!(!(var1 > var2))) { _fun0015_ip = 48; continue _fun0015 }
case 7:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.QuestRewardCodePlatforms;
            var1 = var1.CROSS_PLATFORM;
            _fun0015_ip = 49; continue _fun0015;
case 48:
            var1 = var3[var2];
case 49:
            return var1;
        }
    };
    var3['getDefaultPlatform'] = var4;
    var2 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 9;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.XBOX;
            if(!(var2 !== var3)) { _fun0016_ip = 50; continue _fun0016 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.PLAYSTATION;
            if(!(var2 !== var3)) { _fun0016_ip = 51; continue _fun0016 }
case 52:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.SWITCH;
            if(!(var2 !== var3)) { _fun0016_ip = 53; continue _fun0016 }
case 54:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.PC;
            if(!(var2 !== var3)) { _fun0016_ip = 55; continue _fun0016 }
case 56:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.CROSS_PLATFORM;
            if(!(var2 !== var3)) { _fun0016_ip = 57; continue _fun0016 }
case 58:
            return var5;
case 57:
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
case 55:
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
case 53:
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
case 51:
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
case 50:
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