// app/modules/quests/utils/QuestServerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function questConfigFromServer(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.match;
        var1 = arg1;
        var4 = var2.bind(var3)(var1);
        var3 = var4.with;
        var2 = {};
        var1 = 2;
        var2['config_version'] = var1;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.questFromServerV2;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.exhaustive;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot3 = var6;
    var1 = function progressFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = arg1;
            var10 = var3.bind(var4)(var2);
            var2 = var10.length;
            var9 = 0;
            var2 = var9 < var2;
            var7 = undefined;
            var6 = 2;
            var5 = 1;
            var4 = null;
            var3 = 0;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = var10[var3];
            var2 = _closure1_slot2;
            var2 = var2.bind(var7)(var11, var6);
            var11 = var2[var9];
            var12 = var2[var5];
            var2 = {};
            var13 = var12.event_name;
            var2['eventName'] = var13;
            var13 = var12.value;
            var2['value'] = var13;
            var13 = var12.updated_at;
            var2['updatedAt'] = var13;
            var13 = var12.completed_at;
            var2['completedAt'] = var13;
            var14 = var12.heartbeat;
            var13 = var4 == var14;
            var12 = null;
            if(var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = {};
            var15 = var14.last_beat_at;
            var13['lastBeatAt'] = var15;
            var14 = var14.expires_at;
            var13['expiresAt'] = var14;
            var12 = var13;
case 4:
            var2['heartbeat'] = var12;
            var1[var11] = var2;
            var3 = var3 + 1;
            var2 = var10.length;
            if(var3 < var2) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var5 = function questUserStatusFromServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.user_id;
            var1['userId'] = var3;
            var3 = var2.quest_id;
            var1['questId'] = var3;
            var3 = var2.enrolled_at;
            var1['enrolledAt'] = var3;
            var3 = var2.completed_at;
            var1['completedAt'] = var3;
            var3 = var2.claimed_at;
            var1['claimedAt'] = var3;
            var4 = var2.claimed_tier;
            var3 = null;
            var5 = var3 != var4;
            if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var4;
case 6:
            var1['claimedTier'] = var3;
            var3 = var2.last_stream_heartbeat_at;
            var1['lastStreamHeartbeatAt'] = var3;
            var3 = var2.stream_progress_seconds;
            var1['streamProgressSeconds'] = var3;
            var3 = var2.dismissed_quest_content;
            var1['dismissedQuestContent'] = var3;
            var4 = _closure1_slot4;
            var3 = var2.progress;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var1['progress'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var1 = function getSimpleRewardFromServer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = var3.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.QuestRewardTypes;
            var1 = var1.VIRTUAL_CURRENCY;
            if(!(var2 !== var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var1 = {};
            var2 = var3.sku_id;
            var1['skuId'] = var2;
            var2 = var3.type;
            var1['type'] = var2;
            var2 = var3.name;
            var1['name'] = var2;
            var2 = var3.name_with_article;
            var1['nameWithArticle'] = var2;
            var2 = var3.asset;
            var1['asset'] = var2;
            var2 = var3.asset_video;
            var1['assetVideo'] = var2;
            var2 = var3.collectible_product;
            var1['collectibleProduct'] = var2;
            _fun0003_ip = 10; continue _fun0003;
case 8:
            var2 = {};
            var4 = var3.sku_id;
            var2['skuId'] = var4;
            var4 = var3.type;
            var2['type'] = var4;
            var4 = var3.name;
            var2['name'] = var4;
            var4 = var3.name_with_article;
            var2['nameWithArticle'] = var4;
            var4 = var3.collectible_product;
            var2['collectibleProduct'] = var4;
            var3 = var3.orb_quantity;
            var2['orbQuantity'] = var3;
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function getClaimedQuestFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.starts_at;
        var1['startsAt'] = var3;
        var3 = var2.expires_at;
        var1['expiresAt'] = var3;
        var3 = var2.features;
        var1['features'] = var3;
        var3 = {};
        var4 = var2.messages;
        var4 = var4.quest_name;
        var3['questName'] = var4;
        var4 = var2.messages;
        var4 = var4.game_publisher;
        var3['gamePublisher'] = var4;
        var4 = var2.messages;
        var4 = var4.game_title;
        var3['gameTitle'] = var4;
        var1['messages'] = var3;
        var3 = {};
        var4 = var2.assets;
        var4 = var4.hero;
        var3['hero'] = var4;
        var4 = var2.assets;
        var4 = var4.hero_video;
        var3['heroVideo'] = var4;
        var4 = var2.assets;
        var4 = var4.quest_bar_hero;
        var3['questBarHero'] = var4;
        var4 = var2.assets;
        var4 = var4.quest_bar_hero_video;
        var3['questBarHeroVideo'] = var4;
        var4 = var2.assets;
        var4 = var4.game_tile;
        var3['gameTile'] = var4;
        var4 = var2.assets;
        var4 = var4.logotype;
        var3['logotype'] = var4;
        var4 = var2.assets;
        var4 = var4.logotype_light;
        var3['logotypeLight'] = var4;
        var4 = var2.assets;
        var4 = var4.logotype_dark;
        var3['logotypeDark'] = var4;
        var4 = var2.assets;
        var4 = var4.game_tile_light;
        var3['gameTileLight'] = var4;
        var4 = var2.assets;
        var4 = var4.game_tile_dark;
        var3['gameTileDark'] = var4;
        var1['assets'] = var3;
        var3 = {};
        var4 = var2.colors;
        var4 = var4.primary;
        var3['primary'] = var4;
        var4 = var2.colors;
        var4 = var4.secondary;
        var3['secondary'] = var4;
        var1['colors'] = var3;
        var6 = var2.rewards;
        var5 = var6.map;
        var4 = _closure1_slot6;
        var4 = var5.bind(var6)(var4);
        var1['rewards'] = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.questCosponsorMetadataFromServer;
        var2 = var2.cosponsor_metadata;
        var2 = var3.bind(var4)(var2);
        var1['cosponsorMetadata'] = var2;
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = function questsRewardCodeFromServer(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.user_id;
            var1['userId'] = var3;
            var3 = var2.quest_id;
            var1['questId'] = var3;
            var3 = var2.code;
            var1['code'] = var3;
            var3 = var2.platform;
            var1['platform'] = var3;
            var3 = var2.claimed_at;
            var1['claimedAt'] = var3;
            var3 = var2.tier;
            var2 = null;
            var4 = var2 != var3;
            if(!var4) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var2 = var3;
case 11:
            var1['tier'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = function _questsTenantMetadataFromServer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var4 = var1 == var2;
            var8 = undefined;
            var3 = undefined;
            if(var4) { _fun0005_ip = 13; continue _fun0005 }
case 14:
            var3 = var2.quest_rewards;
case 13:
            if(!(var1 != var3)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var5 = var2.quest_rewards;
            var2 = var5.reward;
            var3 = var2.tag;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 3;
            var2 = var2[var7];
            var2 = var4.bind(var8)(var2);
            var2 = var2.QuestRewardTypes;
            var2 = var2.IN_GAME;
            if(!(var2 !== var3)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var4.bind(var8)(var2);
            var2 = var2.QuestRewardTypes;
            var2 = var2.REWARD_CODE;
            if(!(var2 !== var3)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            return var8;
case 19:
            var2 = {};
            var3 = {};
            var4 = {};
            var7 = var5.reward;
            var7 = var7.tag;
            var4['tag'] = var7;
            var7 = _closure1_slot8;
            var6 = var5.reward;
            var6 = var6.reward_code;
            var6 = var7.bind(var8)(var6);
            var4['rewardCode'] = var6;
            var3['reward'] = var4;
            var2['questRewards'] = var3;
            return var2;
case 17:
            var2 = {};
            var3 = {};
            var4 = {};
            var5 = var5.reward;
            var5 = var5.tag;
            var4['tag'] = var5;
            var3['reward'] = var4;
            var2['questRewards'] = var3;
            return var2;
case 15:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _questsEntitlementFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.sku_id;
        var1['skuId'] = var3;
        var5 = _closure1_slot9;
        var4 = var2.tenant_metadata;
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var1['tenantMetadata'] = var3;
        var2 = var2.consumed;
        var1['consumed'] = var2;
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function questHomeTakeoverAssetFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.alt_text;
        var1['altText'] = var3;
        var3 = var2.asset_type;
        var1['assetType'] = var3;
        var2 = var2.url;
        var1['url'] = var2;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function questHomeTakeoverCtaQuestFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.cta_type;
        var1['ctaType'] = var3;
        var3 = var2.title;
        var1['title'] = var3;
        var2 = var2.quest_id;
        var1['questId'] = var2;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var10 = var9[var1];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot2 = var7;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/quests/utils/QuestServerUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function isQuestWithKnownConfigVersion(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
case 21: // try_start_0
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.match;
            var1 = var1.config;
            var4 = var2.bind(var3)(var1);
            var3 = var4.with;
            var2 = {};
            var1 = 2;
            var2['config_version'] = var1;
            var1 = function() {
                var1 = true;
                return var1;
            };
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.exhaustive;
            var1 = var1.bind(var2)();
case 22: // try_end0
            return var1;
case 18: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = false;
            return var1;
        }
    };
    var3['isQuestWithKnownConfigVersion'] = var7;
    var3['questConfigFromServer'] = var6;
    var3['questUserStatusFromServer'] = var5;
    var5 = function questWithUserStatusFromServer(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.preview;
            var1['preview'] = var3;
            var5 = _closure1_slot3;
            var3 = var2.config;
            var6 = undefined;
            var3 = var5.bind(var6)(var3);
            var1['config'] = var3;
            var5 = var2.user_status;
            var3 = null;
            var5 = var3 == var5;
            if(var5) { _fun0007_ip = 23; continue _fun0007 }
case 24:
            var5 = _closure1_slot5;
            var4 = var2.user_status;
            var3 = var5.bind(var6)(var4);
case 23:
            var1['userStatus'] = var3;
            var3 = var2.targeted_content;
            var1['targetedContent'] = var3;
            var3 = var2.traffic_metadata_raw;
            var1['trafficMetadataRaw'] = var3;
            var2 = var2.traffic_metadata_sealed;
            var1['trafficMetadataSealed'] = var2;
            return var1;
        }
    };
    var3['questWithUserStatusFromServer'] = var5;
    var5 = function excludedQuestFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var2 = var2.replacement_id;
        var1['replacementId'] = var2;
        return var1;
    };
    var3['excludedQuestFromServer'] = var5;
    var5 = function getClaimedQuestWithUserStatusFromServer(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.id;
            var1['id'] = var2;
            var6 = _closure1_slot7;
            var2 = var3.config;
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var1['config'] = var2;
            var6 = var3.user_status;
            var2 = null;
            var6 = var2 == var6;
            if(var6) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            var4 = _closure1_slot5;
            var3 = var3.user_status;
            var2 = var4.bind(var5)(var3);
case 25:
            var1['userStatus'] = var2;
            return var1;
        }
    };
    var3['getClaimedQuestWithUserStatusFromServer'] = var5;
    var3['questsRewardCodeFromServer'] = var4;
    var4 = function questsEntitlementsFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.claimed_at;
        var1['claimedAt'] = var3;
        var5 = var2.entitlements;
        var4 = var5.map;
        var3 = _closure1_slot10;
        var3 = var4.bind(var5)(var3);
        var1['items'] = var3;
        var2 = var2.errors;
        var1['errors'] = var2;
        return var1;
    };
    var3['questsEntitlementsFromServer'] = var4;
    var2 = function questHomeTakeoverConfigFromServer(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var3 = var1.version;
            var2 = 1;
            if(!(var2 === var3)) { _fun0009_ip = 27; continue _fun0009 }
case 28:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 4;
            var2 = var2[var8];
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var2 = var2.QuestPlacementType;
            var3 = var2.QUEST_HOME_BANNER;
            var2 = var1.placements;
            var2 = var3 in var2;
            if(var2) { _fun0009_ip = 29; continue _fun0009 }
case 30:
            var2 = null;
            return var2;
case 29:
            var2 = var1.placements;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var3.bind(var6)(var1);
            var1 = var1.QuestPlacementType;
            var1 = var1.QUEST_HOME_BANNER;
            var3 = var2[var1];
            var1 = null;
            if(!(var1 != var3)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
            var2 = {};
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var7.bind(var6)(var5);
            var5 = var5.QuestPlacementType;
            var5 = var5.QUEST_HOME_BANNER;
            var2['placementType'] = var5;
            var5 = var3.campaign_id;
            var2['campaignId'] = var5;
            var5 = var3.label_title;
            var2['labelTitle'] = var5;
            var5 = var3.label_subtitle;
            var2['labelSubtitle'] = var5;
            var7 = _closure1_slot11;
            var5 = var3.asset_hero_image;
            var5 = var7.bind(var6)(var5);
            var2['assetHeroImage'] = var5;
            var5 = var3.asset_sponsor_image;
            var5 = var7.bind(var6)(var5);
            var2['assetSponsorImage'] = var5;
            var7 = var3.cta_sponsor_url;
            var5 = {};
            var8 = var7.cta_type;
            var5['ctaType'] = var8;
            var8 = var7.title;
            var5['title'] = var8;
            var7 = var7.url;
            var5['url'] = var7;
            var2['ctaSponsorUrl'] = var5;
            var8 = var3.cta_quests;
            var7 = var8.map;
            var5 = _closure1_slot12;
            var5 = var7.bind(var8)(var5);
            var2['ctaQuests'] = var5;
            var5 = var3.starts_at;
            var2['startsAt'] = var5;
            var5 = var3.expires_at;
            var2['expiresAt'] = var5;
            var5 = var3.asset_hero_video;
            if(!(var1 != var5)) { _fun0009_ip = 33; continue _fun0009 }
case 34:
            var5 = _closure1_slot11;
            var4 = var3.asset_hero_video;
            var4 = var5.bind(var6)(var4);
            var2['assetHeroVideo'] = var4;
case 33:
            var4 = var3.quest_home_entrypoint;
            if(!(var1 != var4)) { _fun0009_ip = 35; continue _fun0009 }
case 36:
            var4 = var3.quest_home_entrypoint;
            var3 = {};
            var5 = var4.linear_gradient_start;
            var3['linearGradientStart'] = var5;
            var5 = var4.linear_gradient_end;
            var3['linearGradientEnd'] = var5;
            var5 = var4.radial_gradient_start;
            var3['radialGradientStart'] = var5;
            var5 = var4.radial_gradient_end;
            var3['radialGradientEnd'] = var5;
            var5 = var4.entrypoint_asset_image_url;
            var3['entrypointAssetImageUrl'] = var5;
            var5 = var4.tooltip_asset_image_url;
            var3['tooltipAssetImageUrl'] = var5;
            var5 = var4.tooltip_title;
            var3['tooltipTitle'] = var5;
            var4 = var4.tooltip_subtitle;
            var3['tooltipSubtitle'] = var4;
            var2['questHomeEntrypoint'] = var3;
case 35:
            return var2;
case 31:
            return var1;
case 27:
            var1 = null;
            return var1;
        }
    };
    var3['questHomeTakeoverConfigFromServer'] = var2;
    return var1;
})();