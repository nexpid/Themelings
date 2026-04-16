// app/modules/quests/utils/QuestServerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var7 = function questConfigFromServer(arg1) {
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
    var _closure1_slot3 = var7;
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
    var6 = function questUserStatusFromServer(arg1) {
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
            var5 = var2.claimed_tier;
            var3 = null;
            var6 = var3 != var5;
            var4 = null;
            if(!var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5;
case 6:
            var1['claimedTier'] = var4;
            var4 = var2.orb_quantity_claimed;
            var5 = var3 != var4;
            var3 = null;
            if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var4;
case 8:
            var1['orbQuantityClaimed'] = var3;
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
    var _closure1_slot5 = var6;
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
            if(!(var2 !== var1)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
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
            _fun0003_ip = 12; continue _fun0003;
case 10:
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
case 12:
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
    var5 = function questsRewardCodeFromServer(arg1) {
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
            if(!var4) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var2 = var3;
case 13:
            var1['tier'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var1 = function _questsTenantMetadataFromServer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var4 = var1 == var2;
            var8 = undefined;
            var3 = undefined;
            if(var4) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var3 = var2.quest_rewards;
case 15:
            if(!(var1 != var3)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
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
            if(!(var2 !== var3)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var2 = var4.bind(var8)(var2);
            var2 = var2.QuestRewardTypes;
            var2 = var2.REWARD_CODE;
            if(!(var2 !== var3)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            return var8;
case 21:
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
case 19:
            var2 = {};
            var3 = {};
            var4 = {};
            var5 = var5.reward;
            var5 = var5.tag;
            var4['tag'] = var5;
            var3['reward'] = var4;
            var2['questRewards'] = var3;
            return var2;
case 17:
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
    var4 = function questHomeHeroFromServerConfig(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.campaign_id;
            var1['id'] = var2;
            var2 = var3.label_title;
            var1['labelTitle'] = var2;
            var2 = var3.label_subtitle;
            var1['labelSubtitle'] = var2;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var7 = 4;
            var2 = var2[var7];
            var6 = undefined;
            var8 = var5.bind(var6)(var2);
            var5 = var8.resolveAdCreativeCdnUrl;
            var2 = var3.asset_hero_image;
            var2 = var2.url;
            var2 = var5.bind(var8)(var2);
            var1['heroImage'] = var2;
            var2 = var3.asset_hero_video;
            var5 = null;
            var8 = var5 != var2;
            var2 = undefined;
            if(!var8) { _fun0006_ip = 23; continue _fun0006 }
case 24:
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var7];
            var10 = var9.bind(var6)(var8);
            var9 = var10.resolveAdCreativeCdnUrl;
            var8 = var3.asset_hero_video;
            var8 = var8.url;
            var2 = var9.bind(var10)(var8);
case 23:
            var1['heroVideo'] = var2;
            var8 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var7];
            var9 = var8.bind(var6)(var2);
            var8 = var9.resolveAdCreativeCdnUrl;
            var2 = var3.asset_sponsor_image;
            var2 = var2.url;
            var2 = var8.bind(var9)(var2);
            var1['sponsorImage'] = var2;
            var2 = {};
            var8 = var3.cta_sponsor_url;
            var8 = var8.url;
            var2['url'] = var8;
            var8 = var3.cta_sponsor_url;
            var8 = var8.title;
            var2['buttonLabel'] = var8;
            var1['cta'] = var2;
            var8 = var3.shelf;
            var9 = var5 == var8;
            var2 = undefined;
            if(var9) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var2 = var8.quest_ids;
case 25:
            if(!(var5 == var2)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var10 = var3.cta_quests;
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.quest_id;
                return var1;
            };
            var2 = var9.bind(var10)(var8);
case 27:
            var1['questIds'] = var2;
            var2 = var3.quest_home_entrypoint;
            var8 = var5 != var2;
            var2 = undefined;
            if(!var8) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var9 = var3.quest_home_entrypoint;
            var8 = {};
            var10 = var9.linear_gradient_start;
            var11 = var5 != var10;
            var10 = undefined;
            if(!var11) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var11 = var9.linear_gradient_end;
            var11 = var5 != var11;
            var10 = undefined;
            if(!var11) { _fun0006_ip = 31; continue _fun0006 }
case 33:
            var11 = {};
            var12 = var9.linear_gradient_start;
            var11['start'] = var12;
            var12 = var9.linear_gradient_end;
            var11['end'] = var12;
            var10 = var11;
case 31:
            var8['linearGradient'] = var10;
            var10 = var9.radial_gradient_start;
            var11 = var5 != var10;
            var10 = undefined;
            if(!var11) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var11 = var9.radial_gradient_end;
            var11 = var5 != var11;
            var10 = undefined;
            if(!var11) { _fun0006_ip = 34; continue _fun0006 }
case 36:
            var11 = {};
            var12 = var9.radial_gradient_start;
            var11['start'] = var12;
            var12 = var9.radial_gradient_end;
            var11['end'] = var12;
            var10 = var11;
case 34:
            var8['radialGradient'] = var10;
            var10 = var9.entrypoint_asset_image_url;
            var11 = var5 != var10;
            var10 = undefined;
            if(!var11) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var7];
            var13 = var12.bind(var6)(var11);
            var12 = var13.resolveAdCreativeCdnUrl;
            var11 = var9.entrypoint_asset_image_url;
            var10 = var12.bind(var13)(var11);
case 37:
            var8['image'] = var10;
            var10 = var9.tooltip_asset_image_url;
            var11 = var5 != var10;
            var10 = undefined;
            if(!var11) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var7];
            var13 = var12.bind(var6)(var11);
            var12 = var13.resolveAdCreativeCdnUrl;
            var11 = var9.tooltip_asset_image_url;
            var10 = var12.bind(var13)(var11);
case 39:
            var8['tooltipImage'] = var10;
            var10 = var9.tooltip_title;
            var8['tooltipTitle'] = var10;
            var9 = var9.tooltip_subtitle;
            var8['tooltipSubtitle'] = var9;
            var2 = var8;
case 29:
            var1['questHomeEntrypoint'] = var2;
            var8 = var3.shelf;
            var9 = var5 == var8;
            var2 = undefined;
            if(var9) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var2 = var8.intro_asset_image;
case 41:
            var8 = var5 != var2;
            var2 = undefined;
            if(!var8) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var7];
            var10 = var9.bind(var6)(var8);
            var9 = var10.resolveAdCreativeCdnUrl;
            var8 = var3.shelf;
            var8 = var8.intro_asset_image;
            var8 = var8.url;
            var2 = var9.bind(var10)(var8);
case 43:
            var1['shelfImage'] = var2;
            var8 = var3.shelf;
            var9 = var5 == var8;
            var2 = undefined;
            if(var9) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var2 = var8.intro_asset_video;
case 45:
            var5 = var5 != var2;
            var2 = undefined;
            if(!var5) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var5 = var5.bind(var6)(var4);
            var4 = var5.resolveAdCreativeCdnUrl;
            var3 = var3.shelf;
            var3 = var3.intro_asset_video;
            var3 = var3.url;
            var2 = var4.bind(var5)(var3);
case 47:
            var1['shelfVideo'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var11 = var10[var1];
    var8 = metroImportDefault;
    var1 = undefined;
    var8 = var8.bind(var1)(var11);
    var _closure1_slot2 = var8;
    var8 = 6;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/quests/utils/QuestServerUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function isQuestWithKnownConfigVersion(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
case 49: // try_start_0
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
case 50: // try_end0
            return var1;
case 51: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = false;
            return var1;
        }
    };
    var3['isQuestWithKnownConfigVersion'] = var8;
    var3['questConfigFromServer'] = var7;
    var3['questUserStatusFromServer'] = var6;
    var6 = function questWithUserStatusFromServer(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            if(var5) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var5 = _closure1_slot5;
            var4 = var2.user_status;
            var3 = var5.bind(var6)(var4);
case 52:
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
    var3['questWithUserStatusFromServer'] = var6;
    var6 = function excludedQuestFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var2 = var2.replacement_id;
        var1['replacementId'] = var2;
        return var1;
    };
    var3['excludedQuestFromServer'] = var6;
    var6 = function getClaimedQuestWithUserStatusFromServer(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
            if(var6) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            var4 = _closure1_slot5;
            var3 = var3.user_status;
            var2 = var4.bind(var5)(var3);
case 54:
            var1['userStatus'] = var2;
            return var1;
        }
    };
    var3['getClaimedQuestWithUserStatusFromServer'] = var6;
    var3['questsRewardCodeFromServer'] = var5;
    var5 = function questsEntitlementsFromServer(arg1) {
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
    var3['questsEntitlementsFromServer'] = var5;
    var3['questHomeHeroFromServerConfig'] = var4;
    var2 = function questHomeHeroFromServerConfigWrapper(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.version;
            var2 = 1;
            if(!(var2 === var3)) { _fun0010_ip = 56; continue _fun0010 }
case 16:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var6 = 5;
            var3 = var3[var6];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var3 = var3.QuestPlacementType;
            var5 = var3.QUEST_HOME_BANNER;
            var3 = var1.placements;
            var3 = var5 in var3;
            if(var3) { _fun0010_ip = 57; continue _fun0010 }
case 58:
            var3 = null;
            return var3;
case 57:
            var3 = var1.placements;
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var5.bind(var4)(var1);
            var1 = var1.QuestPlacementType;
            var1 = var1.QUEST_HOME_BANNER;
            var3 = var3[var1];
            var1 = null;
            var5 = var1 == var3;
            if(var5) { _fun0010_ip = 59; continue _fun0010 }
case 22:
            var2 = _closure1_slot11;
            var1 = var2.bind(var4)(var3);
case 59:
            return var1;
case 56:
            var1 = null;
            return var1;
        }
    };
    var3['questHomeHeroFromServerConfigWrapper'] = var2;
    return var1;
})();