// app/modules/quests/types/v2/Reward.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function _rewardRedemptionInstructionsFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var1 = {};
            var8 = global;
            var3 = var8.Object;
            var2 = var3.keys;
            var7 = var2.bind(var3)(var9);
            var2 = var7.length;
            var6 = 0;
            var2 = var6 < var2;
            var5 = undefined;
            var3 = 0;
            if(!var2) { _fun0001_ip = 115; continue _fun0001 }
 44:
            var2 = var7[var3];
            var10 = var8.parseInt;
            var10 = var10.bind(var5)(var2);
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var6];
            var11 = var12.bind(var5)(var11);
            var12 = var11.QUEST_REWARD_CODE_PLATFORMS_SET;
            var11 = var12.has;
            var11 = var11.bind(var12)(var10);
            if(!var11) { _fun0001_ip = 103; continue _fun0001 }
 95:
            var2 = var9[var2];
            var1[var10] = var2;
 103:
            var3 = var3 + 1;
            var2 = var7.length;
            if(var3 < var2) { _fun0001_ip = 44; continue _fun0001 }
 115:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = function _questRewardV2FromServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = var2.type;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 1;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var5.bind(var6)(var1);
            var1 = var1.QuestRewardTypes;
            var1 = var1.REWARD_CODE;
            if(!(var1 !== var3)) { _fun0002_ip = 772; continue _fun0002 }
 52:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.QuestRewardTypes;
            var1 = var1.COLLECTIBLE;
            if(!(var1 !== var3)) { _fun0002_ip = 600; continue _fun0002 }
 88:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.QuestRewardTypes;
            var1 = var1.VIRTUAL_CURRENCY;
            if(!(var1 !== var3)) { _fun0002_ip = 476; continue _fun0002 }
 124:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.QuestRewardTypes;
            var1 = var1.FRACTIONAL_PREMIUM;
            if(!(var1 !== var3)) { _fun0002_ip = 330; continue _fun0002 }
 160:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var1 = var1.QuestRewardTypes;
            var1 = var1.IN_GAME;
            if(!(var1 !== var3)) { _fun0002_ip = 195; continue _fun0002 }
 193:
            return var6;
 195:
            var1 = {};
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.QuestRewardTypes;
            var3 = var3.IN_GAME;
            var1['type'] = var3;
            var3 = var2.sku_id;
            var1['skuId'] = var3;
            var3 = var2.asset;
            var1['asset'] = var3;
            var3 = var2.asset_video;
            var1['assetVideo'] = var3;
            var3 = {};
            var8 = _closure1_slot3;
            var5 = var2.messages;
            var5 = var5.redemption_instructions_by_platform;
            var5 = var8.bind(var6)(var5);
            var3['redemptionInstructionsByPlatform'] = var5;
            var5 = var2.messages;
            var5 = var5.name;
            var3['name'] = var5;
            var5 = var2.messages;
            var5 = var5.name_with_article;
            var3['nameWithArticle'] = var5;
            var1['messages'] = var3;
            return var1;
 330:
            var1 = {};
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.QuestRewardTypes;
            var3 = var3.FRACTIONAL_PREMIUM;
            var1['type'] = var3;
            var3 = var2.sku_id;
            var1['skuId'] = var3;
            var3 = var2.asset;
            var1['asset'] = var3;
            var3 = var2.asset_video;
            var1['assetVideo'] = var3;
            var3 = var2.quantity;
            var1['quantity'] = var3;
            var3 = {};
            var8 = _closure1_slot3;
            var5 = var2.messages;
            var5 = var5.redemption_instructions_by_platform;
            var5 = var8.bind(var6)(var5);
            var3['redemptionInstructionsByPlatform'] = var5;
            var5 = var2.messages;
            var5 = var5.name;
            var3['name'] = var5;
            var5 = var2.messages;
            var5 = var5.name_with_article;
            var3['nameWithArticle'] = var5;
            var1['messages'] = var3;
            return var1;
 476:
            var1 = {};
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.QuestRewardTypes;
            var3 = var3.VIRTUAL_CURRENCY;
            var1['type'] = var3;
            var3 = var2.sku_id;
            var1['skuId'] = var3;
            var3 = {};
            var8 = _closure1_slot3;
            var5 = var2.messages;
            var5 = var5.redemption_instructions_by_platform;
            var5 = var8.bind(var6)(var5);
            var3['redemptionInstructionsByPlatform'] = var5;
            var5 = var2.messages;
            var5 = var5.name;
            var3['name'] = var5;
            var5 = var2.messages;
            var5 = var5.name_with_article;
            var3['nameWithArticle'] = var5;
            var1['messages'] = var3;
            var3 = var2.orb_quantity;
            var1['orbQuantity'] = var3;
            return var1;
 600:
            var1 = {};
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.QuestRewardTypes;
            var3 = var3.COLLECTIBLE;
            var1['type'] = var3;
            var3 = var2.sku_id;
            var1['skuId'] = var3;
            var3 = var2.asset;
            var1['asset'] = var3;
            var3 = var2.asset_video;
            var1['assetVideo'] = var3;
            var3 = {};
            var8 = _closure1_slot3;
            var5 = var2.messages;
            var5 = var5.redemption_instructions_by_platform;
            var5 = var8.bind(var6)(var5);
            var3['redemptionInstructionsByPlatform'] = var5;
            var5 = var2.messages;
            var5 = var5.name;
            var3['name'] = var5;
            var5 = var2.messages;
            var5 = var5.name_with_article;
            var3['nameWithArticle'] = var5;
            var1['messages'] = var3;
            var3 = var2.expires_at;
            var1['expiresAt'] = var3;
            var3 = var2.expiration_mode;
            var1['expirationMode'] = var3;
            var3 = var2.expires_at_premium;
            var1['expiresAtPremium'] = var3;
            return var1;
 772:
            var1 = {};
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.QuestRewardTypes;
            var3 = var3.REWARD_CODE;
            var1['type'] = var3;
            var3 = var2.sku_id;
            var1['skuId'] = var3;
            var3 = var2.asset;
            var1['asset'] = var3;
            var3 = var2.asset_video;
            var1['assetVideo'] = var3;
            var3 = {};
            var5 = _closure1_slot3;
            var4 = var2.messages;
            var4 = var4.redemption_instructions_by_platform;
            var4 = var5.bind(var6)(var4);
            var3['redemptionInstructionsByPlatform'] = var4;
            var4 = var2.messages;
            var4 = var4.name;
            var3['name'] = var4;
            var4 = var2.messages;
            var4 = var4.name_with_article;
            var3['nameWithArticle'] = var4;
            var1['messages'] = var3;
            var3 = var2.approximate_count;
            var1['approximateCount'] = var3;
            var2 = var2.redemption_link;
            var1['redemptionLink'] = var2;
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/types/v2/Reward.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.assignment_method;
        var1['assignmentMethod'] = var3;
        var5 = var2.rewards;
        var4 = var5.map;
        var3 = _closure1_slot2;
        var3 = var4.bind(var5)(var3);
        var1['rewards'] = var3;
        var3 = var2.rewards_expire_at;
        var1['rewardsExpireAt'] = var3;
        var2 = var2.platforms;
        var1['platforms'] = var2;
        return var1;
    };
    var3['questRewardsConfigV2FromServer'] = var2;
    return var1;
})();