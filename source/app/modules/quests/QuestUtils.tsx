// app/modules/quests/QuestUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var41 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var42 = dependencyMap;
    var _closure1_slot0 = var41;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var42;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot44;
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
            var7 = _closure1_slot44;
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
    var _closure1_slot43 = var1;
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
    var _closure1_slot44 = var1;
    var39 = function questMatchesActivity(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var8 = arg2;
            var9 = null;
            if(!(var9 != var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var5.name;
            var1 = var2.toLowerCase;
            var3 = var1.bind(var2)();
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var1 = var4[var1];
            var7 = undefined;
            var1 = var2.bind(var7)(var1);
            var4 = var1.SharedQuestFields;
            var2 = var4.build;
            var1 = var8.config;
            var1 = var2.bind(var4)(var1);
            var1 = var1.application;
            var2 = var1.name;
            var1 = var2.toLowerCase;
            var2 = var1.bind(var2)();
            var4 = var5.application_id;
            var1 = _closure1_slot30;
            var1 = var4 === var1;
            if(var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var10 = var5.platform;
            var4 = _closure1_slot27;
            var4 = var4.XBOX;
            var1 = var10 === var4;
case 38:
            if(var1) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var4 = var5.platform;
            var1 = _closure1_slot27;
            var1 = var1.PS4;
            var1 = var4 === var1;
            if(var1) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var10 = var5.platform;
            var4 = _closure1_slot27;
            var4 = var4.PS5;
            var1 = var10 === var4;
case 42:
            if(var1) { _fun0004_ip = 40; continue _fun0004 }
case 44:
            var1 = var9 != var8;
            if(!var1) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var10 = var8.id;
            var4 = _closure1_slot22;
            var1 = var10 === var4;
case 45:
            if(!var1) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var10 = var5.application_id;
            var4 = _closure1_slot23;
            var1 = var10 === var4;
case 47:
            if(var1) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var4 = var5.application_id;
            var4 = var9 != var4;
            if(!var4) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var6 = _closure1_slot47;
            var5 = var5.application_id;
            var4 = var6.bind(var7)(var5, var8);
case 51:
            var1 = var4;
case 49:
            _fun0004_ip = 53; continue _fun0004;
case 40:
            var1 = var3 === var2;
case 53:
            return var1;
case 36:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot45 = var39;
    var38 = function getQuestByActivity(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg2;
            var3 = _closure1_slot43;
            var1 = undefined;
            var2 = arg1;
            var7 = var3.bind(var1)(var2);
            var3 = var7.bind(var1)();
            var2 = var3.done;
            var6 = 2;
            var5 = 0;
            var4 = 1;
            if(var2) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var10 = var3.value;
            var2 = _closure1_slot3;
            var2 = var2.bind(var1)(var10, var6);
            var10 = var2[var5];
            var2 = var2[var4];
            var10 = _closure1_slot45;
            var10 = var10.bind(var1)(var9, var2);
            if(!var10) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var10 = _closure1_slot48;
            var10 = var10.bind(var1)(var2);
            if(var10) { _fun0005_ip = 56; continue _fun0005 }
case 58:
            return var2;
case 56:
            var10 = var7.bind(var1)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0005_ip = 55; continue _fun0005 }
case 54:
            return var1;
        }
    };
    var _closure1_slot46 = var38;
    var1 = function questMatchesApplicationId(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var4 = var1.SharedQuestFields;
            var3 = var4.build;
            var1 = arg2;
            var1 = var1.config;
            var1 = var3.bind(var4)(var1);
            var4 = var1.applications;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0006_ip = 56; continue _fun0006 }
case 59:
            var3 = var4.some;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 56:
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var37 = function isQuestExpired(arg1) {
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
    var _closure1_slot48 = var37;
    var36 = function questConfigFromServer(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
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
            var2 = _closure1_slot2;
            var1 = 16;
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
    var _closure1_slot49 = var36;
    var1 = function progressFromServer(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
            if(!var2) { _fun0007_ip = 19; continue _fun0007 }
case 28:
            var11 = var10[var3];
            var2 = _closure1_slot3;
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
            if(var13) { _fun0007_ip = 60; continue _fun0007 }
case 41:
            var13 = {};
            var15 = var14.last_beat_at;
            var13['lastBeatAt'] = var15;
            var14 = var14.expires_at;
            var13['expiresAt'] = var14;
            var12 = var13;
case 60:
            var2['heartbeat'] = var12;
            var1[var11] = var2;
            var3 = var3 + 1;
            var2 = var10.length;
            if(var3 < var2) { _fun0007_ip = 28; continue _fun0007 }
case 19:
            return var1;
        }
    };
    var _closure1_slot50 = var1;
    var35 = function questUserStatusFromServer(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            if(!var5) { _fun0008_ip = 61; continue _fun0008 }
case 57:
            var3 = var4;
case 61:
            var1['claimedTier'] = var3;
            var3 = var2.last_stream_heartbeat_at;
            var1['lastStreamHeartbeatAt'] = var3;
            var3 = var2.stream_progress_seconds;
            var1['streamProgressSeconds'] = var3;
            var3 = var2.dismissed_quest_content;
            var1['dismissedQuestContent'] = var3;
            var4 = _closure1_slot50;
            var3 = var2.progress;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var1['progress'] = var2;
            return var1;
        }
    };
    var _closure1_slot51 = var35;
    var1 = function getSimpleRewardFromServer(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var2 = var3.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 17;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.QuestRewardTypes;
            var1 = var1.VIRTUAL_CURRENCY;
            if(!(var2 !== var1)) { _fun0009_ip = 62; continue _fun0009 }
case 5:
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
            _fun0009_ip = 63; continue _fun0009;
case 62:
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
case 63:
            return var1;
        }
    };
    var _closure1_slot52 = var1;
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
        var4 = _closure1_slot52;
        var4 = var5.bind(var6)(var4);
        var1['rewards'] = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 16;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.questCosponsorMetadataFromServer;
        var2 = var2.cosponsor_metadata;
        var2 = var3.bind(var4)(var2);
        var1['cosponsorMetadata'] = var2;
        return var1;
    };
    var _closure1_slot53 = var1;
    var34 = function questsRewardCodeFromServer(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
            if(!var4) { _fun0010_ip = 64; continue _fun0010 }
case 65:
            var2 = var3;
case 64:
            var1['tier'] = var2;
            return var1;
        }
    };
    var _closure1_slot54 = var34;
    var1 = function _questsTenantMetadataFromServer(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var4 = var1 == var2;
            var8 = undefined;
            var3 = undefined;
            if(var4) { _fun0011_ip = 66; continue _fun0011 }
case 67:
            var3 = var2.quest_rewards;
case 66:
            if(!(var1 != var3)) { _fun0011_ip = 68; continue _fun0011 }
case 69:
            var5 = var2.quest_rewards;
            var2 = var5.reward;
            var3 = var2.tag;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 17;
            var2 = var2[var7];
            var2 = var4.bind(var8)(var2);
            var2 = var2.QuestRewardTypes;
            var2 = var2.IN_GAME;
            if(!(var2 !== var3)) { _fun0011_ip = 70; continue _fun0011 }
case 71:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var4.bind(var8)(var2);
            var2 = var2.QuestRewardTypes;
            var2 = var2.REWARD_CODE;
            if(!(var2 !== var3)) { _fun0011_ip = 72; continue _fun0011 }
case 73:
            return var8;
case 72:
            var2 = {};
            var3 = {};
            var4 = {};
            var7 = var5.reward;
            var7 = var7.tag;
            var4['tag'] = var7;
            var7 = _closure1_slot54;
            var6 = var5.reward;
            var6 = var6.reward_code;
            var6 = var7.bind(var8)(var6);
            var4['rewardCode'] = var6;
            var3['reward'] = var4;
            var2['questRewards'] = var3;
            return var2;
case 70:
            var2 = {};
            var3 = {};
            var4 = {};
            var5 = var5.reward;
            var5 = var5.tag;
            var4['tag'] = var5;
            var3['reward'] = var4;
            var2['questRewards'] = var3;
            return var2;
case 68:
            return var1;
        }
    };
    var _closure1_slot55 = var1;
    var1 = function _questsEntitlementFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.sku_id;
        var1['skuId'] = var3;
        var5 = _closure1_slot55;
        var4 = var2.tenant_metadata;
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var1['tenantMetadata'] = var3;
        var2 = var2.consumed;
        var1['consumed'] = var2;
        return var1;
    };
    var _closure1_slot56 = var1;
    var32 = function isDismissible(arg1) {
        var1 = global;
        var4 = var1.Object;
        var3 = var4.keys;
        var2 = _closure1_slot15;
        var3 = var3.bind(var4)(var2);
        var2 = var3.includes;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 18;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var4 = var1.QuestContent;
        var1 = arg1;
        var1 = var4[var1];
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot57 = var32;
    var31 = function getCollectiblesQuestReward(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var3 = var1.rewards;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
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
            if(var3) { _fun0012_ip = 74; continue _fun0012 }
case 2:
            var4 = var2.type;
case 74:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 17;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.QuestRewardTypes;
            var3 = var3.COLLECTIBLE;
            var1 = null;
            if(!(var4 === var3)) { _fun0012_ip = 75; continue _fun0012 }
case 76:
            var1 = var2;
case 75:
            return var1;
        }
    };
    var _closure1_slot58 = var31;
    var30 = function isTieredRewardCodeQuest(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var1 = var1.quest;
            var1 = var1.config;
            var2 = var1.rewardsConfig;
            var3 = var2.assignmentMethod;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 23;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.QuestRewardAssignmentMethods;
            var1 = var1.TIERED;
            var1 = var3 === var1;
            if(!var1) { _fun0013_ip = 77; continue _fun0013 }
case 35:
            var3 = var2.rewards;
            var4 = var3.length;
            var3 = 0;
            var1 = var4 > var3;
case 77:
            if(!var1) { _fun0013_ip = 39; continue _fun0013 }
case 56:
            var4 = var2.rewards;
            var3 = var4.every;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.QuestRewardTypes;
                var1 = var1.REWARD_CODE;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 39:
            return var1;
        }
    };
    var _closure1_slot59 = var30;
    var29 = function hasPlayOnDesktopTask(arg1) {
        var1 = arg1;
        var1 = var1.quest;
        var1 = var1.config;
        var1 = var1.taskConfigV2;
        var2 = var1.tasks;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 24;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.FirstPartyQuestTaskTypes;
        var1 = var1.PLAY_ON_DESKTOP;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot60 = var29;
    var28 = function hasStreamOnDesktopTask(arg1) {
        var1 = arg1;
        var1 = var1.quest;
        var1 = var1.config;
        var1 = var1.taskConfigV2;
        var2 = var1.tasks;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 24;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.FirstPartyQuestTaskTypes;
        var1 = var1.STREAM_ON_DESKTOP;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot61 = var28;
    var27 = function hasPlayActivityTask(arg1) {
        var1 = arg1;
        var1 = var1.config;
        var1 = var1.taskConfigV2;
        var2 = var1.tasks;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 24;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.FirstPartyQuestTaskTypes;
        var1 = var1.PLAY_ACTIVITY;
        var2 = var2[var1];
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot62 = var27;
    var26 = function shouldUsePlayOnDesktopTask(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0014_ip = 33; continue _fun0014 }
case 78:
            var4 = _closure1_slot60;
            var3 = {};
            var3['quest'] = var2;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 33:
            return var1;
        }
    };
    var _closure1_slot63 = var26;
    var25 = function isSponsoredPlayQuest(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 25;
            var1 = var5[var1];
            var5 = undefined;
            var6 = var4.bind(var5)(var1);
            var4 = var6.isSponsoredQuestExperimentEnabled;
            var1 = 'QuestUtils';
            var1 = var4.bind(var6)(var1);
            if(!var1) { _fun0015_ip = 79; continue _fun0015 }
case 80:
            var1 = null;
            if(!(var1 != var2)) { _fun0015_ip = 79; continue _fun0015 }
case 81:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 15;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.SharedQuestFields;
            var3 = var4.build;
            var2 = var2.config;
            var2 = var3.bind(var4)(var2);
            var2 = var2.applications;
            var1 = var1 != var2;
            if(!var1) { _fun0015_ip = 82; continue _fun0015 }
case 83:
            var3 = var2.length;
            var2 = 1;
            var1 = var3 > var2;
case 82:
            return var1;
case 79:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot64 = var25;
    var24 = function hasVariant(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.SharedQuestFields;
        var2 = var3.build;
        var1 = arg1;
        var1 = var1.config;
        var1 = var2.bind(var3)(var1);
        var3 = var1.features;
        var2 = var3.has;
        var1 = arg2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot65 = var24;
    var23 = function getRewardCodeQuestReward(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var2 = var1.quest;
            var3 = var1.idx;
            var1 = null;
            if(!(var1 != var3)) { _fun0016_ip = 75; continue _fun0016 }
case 84:
            var2 = var2.config;
            var2 = var2.rewardsConfig;
            var2 = var2.rewards;
            var3 = var2[var3];
            var5 = var3.type;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var4);
            var2 = var2.QuestRewardTypes;
            var4 = var2.REWARD_CODE;
            var2 = null;
            if(!(var5 === var4)) { _fun0016_ip = 85; continue _fun0016 }
case 56:
            var2 = var3;
case 85:
            return var2;
case 75:
            return var1;
        }
    };
    var _closure1_slot66 = var23;
    var1 = function _isPlayOnDesktopTaskType(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            var3 = var2 == var1;
            var4 = undefined;
            var2 = undefined;
            if(var3) { _fun0017_ip = 84; continue _fun0017 }
case 67:
            var2 = var1.type;
case 84:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 24;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.FirstPartyQuestTaskTypes;
            var1 = var1.PLAY_ON_DESKTOP;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot67 = var1;
    var22 = function isInGameQuest(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var4 = var2.Array;
        var3 = var4.from;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 24;
        var5 = var5[var2];
        var2 = undefined;
        var2 = var6.bind(var2)(var5);
        var2 = var2.FirstPartyQuestTaskTypesSets;
        var2 = var2.IN_GAME;
        var3 = var3.bind(var4)(var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = _closure2_slot0;
            var1 = var1.config;
            var1 = var1.taskConfigV2;
            var2 = var1.tasks;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot68 = var22;
    var21 = function getRemainingTaskTime(arg1) {
        var1 = arg1;
        var3 = _closure1_slot70;
        var2 = var1.targetSeconds;
        var1 = var1.progressSeconds;
        var2 = var2 - var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot69 = var21;
    var20 = function parseMinutesAndSecondsFromSeconds(arg1) {
        var8 = arg1;
        var1 = {};
        var6 = global;
        var7 = var6.Math;
        var4 = var7.max;
        var9 = var6.Math;
        var5 = var9.floor;
        var2 = 60;
        var3 = var8 / var2;
        var3 = var5.bind(var9)(var3);
        var5 = 0;
        var3 = var4.bind(var7)(var5, var3);
        var1['minutes'] = var3;
        var4 = var6.Math;
        var3 = var4.max;
        var7 = var6.Math;
        var6 = var7.floor;
        var2 = var8 % var2;
        var2 = var6.bind(var7)(var2);
        var2 = var3.bind(var4)(var5, var2);
        var1['seconds'] = var2;
        return var1;
    };
    var _closure1_slot70 = var20;
    var19 = function formatWatchTaskRemainingTime(arg1) {
        var3 = _closure1_slot69;
        var4 = undefined;
        var1 = arg1;
        var1 = var3.bind(var4)(var1);
        var3 = _closure1_slot72;
        var2 = var1.minutes;
        var1 = var1.seconds;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot71 = var19;
    var18 = function formatWatchTaskTime(arg1, arg2) {
        var1 = global;
        var3 = var1.String;
        var7 = undefined;
        var2 = arg1;
        var3 = var3.bind(var7)(var2);
        var2 = var3.padStart;
        var6 = 2;
        var4 = '0';
        var5 = var2.bind(var3)(var6, var4);
        var3 = var1.String;
        var2 = arg2;
        var3 = var3.bind(var7)(var2);
        var2 = var3.padStart;
        var4 = var2.bind(var3)(var6, var4);
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = ':';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot72 = var18;
    var13 = function isQuestProgressingOnConsole(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var4 = arg1;
            var2 = var4.userStatus;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0018_ip = 86; continue _fun0018 }
case 87:
            var7 = _closure1_slot42;
            var5 = var4.userStatus;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 24;
            var2 = var2[var8];
            var6 = undefined;
            var2 = var9.bind(var6)(var2);
            var2 = var2.FirstPartyQuestTaskTypes;
            var2 = var2.PLAY_ON_XBOX;
            var2 = var7.bind(var6)(var5, var2);
            if(var2) { _fun0018_ip = 88; continue _fun0018 }
case 59:
            var5 = _closure1_slot42;
            var4 = var4.userStatus;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.FirstPartyQuestTaskTypes;
            var3 = var3.PLAY_ON_PLAYSTATION;
            var2 = var5.bind(var6)(var4, var3);
case 88:
            var1 = var2;
case 86:
            return var1;
        }
    };
    var _closure1_slot73 = var13;
    var12 = function getQuestFormattedDate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = arg1;
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0019_ip = 89; continue _fun0019 }
case 78:
            var1 = {};
            var2 = 'short';
            var1['dateStyle'] = var2;
            var5 = var1;
case 89:
            var1 = null;
            var2 = var1 == var4;
            var1 = '';
            if(var2) { _fun0019_ip = 75; continue _fun0019 }
case 90:
            var2 = global;
            var2 = var2.Date;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var8 = var3;
            var7 = var4;
            var2 = new var8[var2](var7, var6);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = var4.toLocaleDateString;
            var2 = _closure1_slot6;
            var2 = var2.locale;
            var1 = var3.bind(var4)(var2, var5);
case 75:
            return var1;
        }
    };
    var _closure1_slot74 = var12;
    var11 = function getPlatformTypeForHintMessage(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var2 = var1.connected_account_type;
            var1 = 'xbox';
            if(!(var1 !== var2)) { _fun0020_ip = 91; continue _fun0020 }
case 92:
            var1 = _closure1_slot25;
            var1 = var1.PLAYSTATION;
            _fun0020_ip = 93; continue _fun0020;
case 91:
            var2 = _closure1_slot25;
            var1 = var2.XBOX;
case 93:
            return var1;
        }
    };
    var _closure1_slot75 = var11;
    var10 = function isCollectibleQuestRewardPremiumExtendable(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = _closure1_slot58;
            var4 = undefined;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var5 = var1 == var3;
            if(var5) { _fun0021_ip = 91; continue _fun0021 }
case 89:
            var4 = var3.expirationMode;
case 91:
            var1 = var1 != var4;
            if(!var1) { _fun0021_ip = 94; continue _fun0021 }
case 90:
            var3 = _closure1_slot31;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 94:
            return var1;
        }
    };
    var _closure1_slot76 = var10;
    var9 = function supportedConsoles(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Object;
            var3 = var4.keys;
            var2 = arg1;
            var2 = var2.config;
            var2 = var2.taskConfigV2;
            var2 = var2.tasks;
            var7 = var3.bind(var4)(var2);
            var2 = var7.length;
            var6 = 0;
            var2 = var6 < var2;
            var4 = 24;
            var3 = undefined;
            if(!var2) { _fun0022_ip = 95; continue _fun0022 }
case 30:
            var8 = var7[var6];
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var9.bind(var3)(var2);
            var2 = var2.FirstPartyQuestTaskTypes;
            var2 = var2.PLAY_ON_XBOX;
            if(!(var2 !== var8)) { _fun0022_ip = 96; continue _fun0022 }
case 97:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var9.bind(var3)(var2);
            var2 = var2.FirstPartyQuestTaskTypes;
            var2 = var2.PLAY_ON_PLAYSTATION;
            if(!(var2 === var8)) { _fun0022_ip = 16; continue _fun0022 }
case 41:
            var8 = var1.push;
            var2 = _closure1_slot25;
            var2 = var2.PLAYSTATION;
            var2 = var8.bind(var1)(var2);
            _fun0022_ip = 16; continue _fun0022;
case 96:
            var8 = var1.push;
            var2 = _closure1_slot25;
            var2 = var2.XBOX;
            var2 = var8.bind(var1)(var2);
case 16:
            var6 = var6 + 1;
            var2 = var7.length;
            if(var6 < var2) { _fun0022_ip = 30; continue _fun0022 }
case 95:
            return var1;
        }
    };
    var _closure1_slot77 = var9;
    var8 = function getVideoQuestModalKey(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'VIDEO-QUEST-';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot78 = var8;
    var7 = function sendVideoProgress(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot48;
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            if(var4) { _fun0023_ip = 98; continue _fun0023 }
case 29:
            var7 = var2.userStatus;
            var6 = null;
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0023_ip = 99; continue _fun0023 }
case 100:
            var5 = var7.enrolledAt;
case 99:
            var4 = var6 == var5;
case 98:
            if(var4) { _fun0023_ip = 101; continue _fun0023 }
case 102:
            var7 = var2.userStatus;
            var6 = null;
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0023_ip = 103; continue _fun0023 }
case 30:
            var5 = var7.completedAt;
case 103:
            var4 = var6 != var5;
case 101:
            if(var4) { _fun0023_ip = 72; continue _fun0023 }
case 104:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 38;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.updateVideoProgress;
            var3 = var2.id;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
case 72:
            return var1;
        }
    };
    var _closure1_slot79 = var7;
    var6 = function getQuestPlacementFromQuestContent(arg1) {
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 18;
        var3 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestContent;
        var7 = var3.QUEST_BAR;
        var3 = var6[var1];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestPlacement;
        var3 = var3.DESKTOP_ACCOUNT_PANEL_AREA;
        var2[var7] = var3;
        var3 = var6[var1];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestContent;
        var7 = var3.QUEST_BAR_V2;
        var3 = var6[var1];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestPlacement;
        var3 = var3.DESKTOP_ACCOUNT_PANEL_AREA;
        var2[var7] = var3;
        var3 = var6[var1];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestContent;
        var3 = var3.QUEST_BAR_MOBILE;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.QuestPlacement;
        var1 = var1.MOBILE_HOME_DOCK_AREA;
        var2[var3] = var1;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot80 = var6;
    var5 = function formatVideoProgressRatio(arg1, arg2) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var7 = arg1;
            var3 = arg2;
            var4 = 0;
            var2 = var7 <= var4;
            var1 = 0;
            if(var2) { _fun0024_ip = 76; continue _fun0024 }
case 92:
            var2 = var3 <= var4;
            var1 = 0;
            if(var2) { _fun0024_ip = 76; continue _fun0024 }
case 89:
            var4 = var7 >= var3;
            var6 = 1;
            var2 = var6;
            if(var4) { _fun0024_ip = 105; continue _fun0024 }
case 90:
            var8 = global;
            var5 = var8.Math;
            var4 = var5.min;
            var9 = var8.Math;
            var8 = var9.round;
            var3 = var7 / var3;
            var7 = 100;
            var3 = var3 * var7;
            var3 = var8.bind(var9)(var3);
            var3 = var3 / var7;
            var2 = var4.bind(var5)(var6, var3);
case 105:
            var1 = var2;
case 76:
            return var1;
        }
    };
    var _closure1_slot81 = var5;
    var4 = function getQuestTaskTypes(arg1) {
        var1 = global;
        var3 = var1.Set;
        var4 = var1.Object;
        var2 = var4.keys;
        var1 = arg1;
        var1 = var1.config;
        var1 = var1.taskConfigV2;
        var1 = var1.tasks;
        var5 = var2.bind(var4)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot82 = var4;
    var14 = global;
    var33 = var14.Object;
    var17 = var33.defineProperty;
    var15 = {};
    var1 = true;
    var15['value'] = var1;
    var1 = '__esModule';
    var1 = var17.bind(var33)(var3, var1, var15);
    var1 = 0;
    var15 = var42[var1];
    var1 = undefined;
    var15 = var16.bind(var1)(var15);
    var _closure1_slot3 = var15;
    var15 = 1;
    var15 = var42[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot4 = var15;
    var15 = 2;
    var15 = var42[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot5 = var15;
    var15 = 3;
    var15 = var42[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot6 = var15;
    var15 = 4;
    var15 = var42[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot7 = var15;
    var15 = 5;
    var15 = var42[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot8 = var15;
    var15 = 6;
    var15 = var42[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot9 = var15;
    var15 = 7;
    var15 = var42[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot10 = var15;
    var15 = 8;
    var15 = var42[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot11 = var15;
    var15 = 9;
    var15 = var42[var15];
    var15 = var16.bind(var1)(var15);
    var _closure1_slot12 = var15;
    var15 = 10;
    var15 = var42[var15];
    var15 = var41.bind(var1)(var15);
    var16 = var15.BILLABLE_PLACEMENTS;
    var _closure1_slot13 = var16;
    var16 = var15.DISCORD_APPLICATION_ID;
    var _closure1_slot14 = var16;
    var16 = var15.DismissibleQuestContentFlags;
    var _closure1_slot15 = var16;
    var16 = var15.EMPTY_AD_DECISION_DATA;
    var _closure1_slot16 = var16;
    var16 = var15.QuestHomeSortMethods;
    var _closure1_slot17 = var16;
    var16 = var15.QuestTaskPlatform;
    var _closure1_slot18 = var16;
    var16 = var15.QuestVariants;
    var _closure1_slot19 = var16;
    var16 = var15.RewardFilterTypes;
    var _closure1_slot20 = var16;
    var16 = var15.TaskFilterTypes;
    var _closure1_slot21 = var16;
    var16 = var15.PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID;
    var _closure1_slot22 = var16;
    var15 = var15.PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID;
    var _closure1_slot23 = var15;
    var15 = 11;
    var15 = var42[var15];
    var15 = var41.bind(var1)(var15);
    var16 = var15.UserSettingsSections;
    var _closure1_slot24 = var16;
    var16 = var15.PlatformTypes;
    var _closure1_slot25 = var16;
    var16 = var15.Routes;
    var _closure1_slot26 = var16;
    var16 = var15.ActivityGamePlatforms;
    var _closure1_slot27 = var16;
    var16 = var15.AnalyticEvents;
    var _closure1_slot28 = var16;
    var15 = var15.ComponentActions;
    var _closure1_slot29 = var15;
    var15 = 12;
    var15 = var42[var15];
    var15 = var41.bind(var1)(var15);
    var15 = var15.XBOX_ACTIVITY_APPLICATION_ID;
    var _closure1_slot30 = var15;
    var16 = var14.Set;
    var15 = 13;
    var14 = var42[var15];
    var14 = var41.bind(var1)(var14);
    var14 = var14.QuestRewardExpirationMode;
    var17 = var14.PREMIUM_EXTENSION;
    var14 = new Array(2);
    var14[0] = var17;
    var15 = var42[var15];
    var15 = var41.bind(var1)(var15);
    var15 = var15.QuestRewardExpirationMode;
    var15 = var15.PREMIUM_PERMANENT;
    var14[1] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {constructor: {value: var16}});
    var47 = var15;
    var46 = var14;
    var14 = new var47[var16](var46, var45);
    var14 = var14 instanceof Object ? var14 : var15;
    var _closure1_slot31 = var14;
    var33 = function getQuestUrl(arg1) {
        var1 = global;
        var2 = var1.location;
        var12 = var2.protocol;
        var2 = var1.location;
        var10 = var2.host;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var13 = '';
        var11 = '//';
        var9 = '/quests/';
        var8 = arg1;
        var1 = var13[var5](var12, var11, var10, var9, var8, var7);
        return var1;
    };
    var _closure1_slot32 = var33;
    var14 = function _computePercentComplete(arg1, arg2) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = arg1;
            var1 = 0;
            var2 = var3 > var1;
            if(!var2) { _fun0025_ip = 106; continue _fun0025 }
case 78:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 31;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.floor;
            var2 = global;
            var7 = var2.Math;
            var6 = var7.min;
            var2 = arg2;
            var3 = var2 / var3;
            var2 = 1;
            var3 = var6.bind(var7)(var3, var2);
            var2 = 4;
            var1 = var4.bind(var5)(var3, var2);
case 106:
            return var1;
        }
    };
    var _closure1_slot33 = var14;
    var14 = function getTimeSinceLastBeatSeconds(arg1, arg2) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg1;
            var2 = var3.userStatus;
            var1 = null;
            var4 = var1 == var2;
            var6 = undefined;
            var5 = undefined;
            if(var4) { _fun0026_ip = 61; continue _fun0026 }
case 66:
            var4 = var2.progress;
            var2 = var1 == var4;
            var5 = undefined;
            if(var2) { _fun0026_ip = 61; continue _fun0026 }
case 100:
            var2 = arg2;
            var2 = var2.type;
            var2 = var4[var2];
            var4 = var1 == var2;
            var5 = undefined;
            if(var4) { _fun0026_ip = 61; continue _fun0026 }
case 107:
            var2 = var2.heartbeat;
            var4 = var1 == var2;
            var5 = undefined;
            if(var4) { _fun0026_ip = 61; continue _fun0026 }
case 103:
            var5 = var2.lastBeatAt;
case 61:
            if(!(var1 != var5)) { _fun0026_ip = 49; continue _fun0026 }
case 9:
            var2 = _closure1_slot73;
            var2 = var2.bind(var6)(var3);
            if(var2) { _fun0026_ip = 82; continue _fun0026 }
case 108:
            var7 = _closure1_slot11;
            var4 = var7.isProgressingOnDesktop;
            var3 = var3.id;
            var2 = var4.bind(var7)(var3);
case 82:
            if(!var2) { _fun0026_ip = 49; continue _fun0026 }
case 109:
            var2 = global;
            var4 = var2.Date;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var10 = var4;
            var9 = var5;
            var2 = new var10[var2](var9, var8);
            var4 = var2 instanceof Object ? var2 : var4;
            var2 = var4.valueOf;
            var2 = var2.bind(var4)();
            var2 = var3 - var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 31;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.floor;
            var5 = _closure1_slot1;
            var1 = 32;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.Millis;
            var1 = var1.SECOND;
            var2 = var2 / var1;
            var1 = 2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 49:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot34 = var14;
    var14 = function getProgressSeconds(arg1, arg2) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var8 = arg1;
            var3 = arg2;
            var1 = var3.target;
            var4 = var8.userStatus;
            var6 = null;
            var5 = var6 == var4;
            var7 = undefined;
            var2 = undefined;
            if(var5) { _fun0027_ip = 100; continue _fun0027 }
case 110:
            var2 = var4.completedAt;
case 100:
            if(!(var6 == var2)) { _fun0027_ip = 111; continue _fun0027 }
case 112:
            var2 = var8.userStatus;
            var5 = var6 == var2;
            var4 = undefined;
            if(var5) { _fun0027_ip = 113; continue _fun0027 }
case 114:
            var5 = var2.progress;
            var2 = var6 == var5;
            var4 = undefined;
            if(var2) { _fun0027_ip = 113; continue _fun0027 }
case 59:
            var2 = var3.type;
            var4 = var5[var2];
case 113:
            var5 = var6 == var4;
            var2 = undefined;
            if(var5) { _fun0027_ip = 115; continue _fun0027 }
case 76:
            var2 = var4.value;
case 115:
            if(!(var6 == var2)) { _fun0027_ip = 116; continue _fun0027 }
case 108:
            var5 = var8.userStatus;
            var9 = var6 == var5;
            var4 = undefined;
            if(var9) { _fun0027_ip = 86; continue _fun0027 }
case 117:
            var4 = var5.streamProgressSeconds;
case 86:
            var2 = var4;
case 116:
            var9 = var6 != var2;
            var5 = 0;
            var4 = 0;
            if(!var9) { _fun0027_ip = 118; continue _fun0027 }
case 119:
            var4 = var2;
case 118:
            var9 = _closure1_slot39;
            var9 = var9.bind(var7)(var8);
            if(var9) { _fun0027_ip = 120; continue _fun0027 }
case 121:
            var9 = _closure1_slot34;
            var9 = var9.bind(var7)(var8, var3);
            var9 = var4 + var9;
            _fun0027_ip = 122; continue _fun0027;
case 120:
            var11 = _closure1_slot11;
            var10 = var11.getOptimisticProgress;
            var8 = var8.id;
            var3 = var3.type;
            var3 = var10.bind(var11)(var8, var3);
            if(!(var6 != var3)) { _fun0027_ip = 123; continue _fun0027 }
case 124:
            if(!(var3 < var4)) { _fun0027_ip = 125; continue _fun0027 }
case 123:
            var3 = var4;
case 125:
            var9 = var3;
case 122:
            var3 = global;
            var8 = var3.Math;
            var6 = var8.min;
            var4 = 0.99;
            var4 = var4 * var1;
            var8 = var6.bind(var8)(var4, var9);
            var4 = var3.Math;
            var3 = var4.max;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 31;
            var2 = var9[var2];
            var7 = var6.bind(var7)(var2);
            var6 = var7.floor;
            var2 = 2;
            var2 = var6.bind(var7)(var8, var2);
            var2 = var3.bind(var4)(var2, var5);
            return var2;
case 111:
            return var1;
        }
    };
    var _closure1_slot35 = var14;
    var14 = function _getTaskDetailsForType(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var3 = arg1;
            var2 = var3.quest;
            var7 = var3.taskType;
            var3 = var3.includeTaskTypes;
            var9 = undefined;
            if(!(var3 === var9)) { _fun0028_ip = 126; continue _fun0028 }
case 69:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 24;
            var4 = var6[var4];
            var4 = var5.bind(var9)(var4);
            var4 = var4.FirstPartyQuestTaskTypesSets;
            var3 = var4.ALL;
case 126:
            var _closure2_slot0 = var3;
            var3 = var2.config;
            var3 = var3.taskConfigV2;
            var11 = null;
            var4 = var7;
            if(!(var11 == var4)) { _fun0028_ip = 127; continue _fun0028 }
case 58:
            var5 = global;
            var8 = var5.Object;
            var6 = var8.values;
            var5 = var3.tasks;
            var8 = var6.bind(var8)(var5);
            var6 = var8.filter;
            var5 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var8)(var5);
            var5 = 0;
            var6 = var6[var5];
            var8 = var11 == var6;
            var5 = undefined;
            if(var8) { _fun0028_ip = 128; continue _fun0028 }
case 129:
            var5 = var6.type;
case 128:
            var4 = var5;
case 127:
            var5 = var3.tasks;
            var10 = var5[var4];
            if(!(var11 == var10)) { _fun0028_ip = 130; continue _fun0028 }
case 131:
            var6 = var3.tasks;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 24;
            var5 = var12[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var5.FirstPartyQuestTaskTypes;
            var5 = var5.STREAM_ON_DESKTOP;
            var10 = var6[var5];
case 130:
            if(!(var11 != var10)) { _fun0028_ip = 132; continue _fun0028 }
case 133:
            var8 = var10.target;
            var6 = _closure1_slot35;
            var6 = var6.bind(var9)(var2, var10);
            var10 = global;
            var13 = var10.Object;
            var12 = var13.values;
            var3 = var3.tasks;
            var13 = var12.bind(var13)(var3);
            var12 = var13.find;
            var3 = _closure1_slot67;
            var12 = var12.bind(var13)(var3);
            var13 = var11 == var12;
            var3 = undefined;
            if(var13) { _fun0028_ip = 134; continue _fun0028 }
case 10:
            var12 = var12.applications;
            var11 = var11 == var12;
            var3 = undefined;
            if(var11) { _fun0028_ip = 134; continue _fun0028 }
case 135:
            var11 = var12.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var3 = var11.bind(var12)(var1);
case 134:
            var1 = {};
            var1['progressSeconds'] = var6;
            var1['targetSeconds'] = var8;
            var12 = var10.Math;
            var11 = var12.ceil;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 32;
            var10 = var14[var10];
            var10 = var13.bind(var9)(var10);
            var10 = var10.Seconds;
            var10 = var10.MINUTE;
            var10 = var8 / var10;
            var10 = var11.bind(var12)(var10);
            var1['targetMinutes'] = var10;
            var5 = _closure1_slot33;
            var5 = var5.bind(var9)(var8, var6);
            var1['percentComplete'] = var5;
            var1['taskType'] = var4;
            var1['applications'] = var3;
            return var1;
case 132:
            var1 = global;
            var3 = var1.Error;
            var16 = var2.id;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var19 = 'No task with type ';
            var17 = ' found for quest ';
            var15 = '!';
            var18 = var7;
            var18 = var19[var5](var18, var17, var16, var15, var14);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var19 = var2;
            var1 = new var19[var3](var18, var17);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot36 = var14;
    var14 = function _parseFirstPartyTaskType(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 24;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.FirstPartyQuestTaskTypesSets;
            var3 = var1.ALL;
            var1 = var3.has;
            var3 = var1.bind(var3)(var2);
            var1 = null;
            if(!var3) { _fun0029_ip = 107; continue _fun0029 }
case 4:
            var1 = var2;
case 107:
            return var1;
        }
    };
    var _closure1_slot37 = var14;
    var40 = function hasSomeFirstPartyTasks(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure2_slot0;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = _closure3_slot0;
                var1 = var1.config;
                var1 = var1.taskConfigV2;
                var2 = var1.tasks;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        return var1;
    };
    var14 = 24;
    var15 = var42[var14];
    var15 = var41.bind(var1)(var15);
    var15 = var15.FirstPartyQuestTaskTypes;
    var16 = var15.PLAY_ON_XBOX;
    var15 = new Array(2);
    var15[0] = var16;
    var16 = var42[var14];
    var16 = var41.bind(var1)(var16);
    var16 = var16.FirstPartyQuestTaskTypes;
    var16 = var16.PLAY_ON_PLAYSTATION;
    var15[1] = var16;
    var17 = var40.bind(var1)(var15);
    var _closure1_slot38 = var17;
    var15 = var42[var14];
    var15 = var41.bind(var1)(var15);
    var15 = var15.FirstPartyQuestTaskTypes;
    var16 = var15.WATCH_VIDEO;
    var15 = new Array(2);
    var15[0] = var16;
    var16 = var42[var14];
    var16 = var41.bind(var1)(var16);
    var16 = var16.FirstPartyQuestTaskTypes;
    var16 = var16.WATCH_VIDEO_ON_MOBILE;
    var15[1] = var16;
    var16 = var40.bind(var1)(var15);
    var _closure1_slot39 = var16;
    var15 = var42[var14];
    var15 = var41.bind(var1)(var15);
    var15 = var15.FirstPartyQuestTaskTypes;
    var43 = var15.WATCH_VIDEO;
    var15 = new Array(1);
    var15[0] = var43;
    var15 = var40.bind(var1)(var15);
    var _closure1_slot40 = var15;
    var14 = var42[var14];
    var14 = var41.bind(var1)(var14);
    var14 = var14.FirstPartyQuestTaskTypes;
    var43 = var14.WATCH_VIDEO_ON_MOBILE;
    var14 = new Array(1);
    var14[0] = var43;
    var14 = var40.bind(var1)(var14);
    var _closure1_slot41 = var14;
    var40 = function hasUnsavedProgress(arg1, arg2) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            var4 = undefined;
            var5 = undefined;
            if(var3) { _fun0030_ip = 114; continue _fun0030 }
case 67:
            var3 = var2.progress;
            var2 = arg2;
            var2 = var3[var2];
            var3 = var1 == var2;
            var5 = undefined;
            if(var3) { _fun0030_ip = 114; continue _fun0030 }
case 136:
            var2 = var2.heartbeat;
            var3 = var1 == var2;
            var5 = undefined;
            if(var3) { _fun0030_ip = 114; continue _fun0030 }
case 94:
            var5 = var2.expiresAt;
case 114:
            if(!(var1 != var5)) { _fun0030_ip = 137; continue _fun0030 }
case 138:
            var2 = global;
            var1 = var2.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var7 = var3;
            var6 = var5;
            var1 = new var7[var1](var6, var5);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = var3.valueOf;
            var3 = var1.bind(var3)();
            var1 = var2.isNaN;
            var1 = var1.bind(var4)(var3);
            var1 = !var1;
            if(!var1) { _fun0030_ip = 118; continue _fun0030 }
case 72:
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1 = var3 > var2;
case 118:
            return var1;
case 137:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot42 = var40;
    var40 = 41;
    var40 = var42[var40];
    var42 = var41.bind(var1)(var40);
    var41 = var42.fileFinishedImporting;
    var40 = 'modules/quests/QuestUtils.tsx';
    var40 = var41.bind(var42)(var40);
    var40 = 2592000000.0;
    var3['THIRTY_DAYS_MS'] = var40;
    var40 = function isQuestWithKnownConfigVersion(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
case 139: // try_start_0
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 14;
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
case 113: // try_end0
            return var1;
case 71: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = false;
            return var1;
        }
    };
    var3['isQuestWithKnownConfigVersion'] = var40;
    var3['questMatchesActivity'] = var39;
    var3['getQuestByActivity'] = var38;
    var38 = function getQuestByApplicationId(arg1, arg2) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var10 = arg2;
            var2 = _closure1_slot43;
            var8 = undefined;
            var1 = arg1;
            var7 = var2.bind(var8)(var1);
            var1 = var7.bind(var8)();
            var2 = var1.done;
            var6 = 2;
            var5 = 0;
            var4 = 1;
            var3 = var1;
            var1 = undefined;
            if(var2) { _fun0032_ip = 140; continue _fun0032 }
case 93:
            var11 = var3.value;
            var2 = _closure1_slot3;
            var2 = var2.bind(var8)(var11, var6);
            var11 = var2[var5];
            var11 = var2[var4];
            var2 = _closure1_slot47;
            var2 = var2.bind(var8)(var10, var11);
            if(!var2) { _fun0032_ip = 11; continue _fun0032 }
case 106:
            var2 = _closure1_slot48;
            var2 = var2.bind(var8)(var11);
            var1 = var11;
            if(!var2) { _fun0032_ip = 140; continue _fun0032 }
case 11:
            var11 = var7.bind(var8)();
            var2 = var11.done;
            var3 = var11;
            var1 = undefined;
            if(!var2) { _fun0032_ip = 93; continue _fun0032 }
case 140:
            return var1;
        }
    };
    var3['getQuestByApplicationId'] = var38;
    var38 = function allPlayOnDesktopQuestsByApplicationId(arg1, arg2) {
        var5 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = global;
        var4 = var2.Array;
        var3 = var4.from;
        var2 = var5.values;
        var2 = var2.bind(var5)();
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var5 = arg1;
                var3 = _closure1_slot47;
                var1 = _closure2_slot0;
                var4 = undefined;
                var1 = var3.bind(var4)(var1, var5);
                if(!var1) { _fun0033_ip = 55; continue _fun0033 }
case 34:
                var3 = _closure1_slot48;
                var3 = var3.bind(var4)(var5);
                var1 = !var3;
case 55:
                if(!var1) { _fun0033_ip = 114; continue _fun0033 }
case 99:
                var3 = _closure1_slot60;
                var2 = {};
                var2['quest'] = var5;
                var1 = var3.bind(var4)(var2);
case 114:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['allPlayOnDesktopQuestsByApplicationId'] = var38;
    var3['isQuestExpired'] = var37;
    var37 = function getIsQuestExpiredButWithinThirtyDayLookback(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot48;
            var2 = undefined;
            var2 = var3.bind(var2)(var1);
            if(var2) { _fun0034_ip = 141; continue _fun0034 }
case 29:
            var2 = false;
            return var2;
case 141:
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
            if(!var1) { _fun0034_ip = 142; continue _fun0034 }
case 82:
            var2 = var2 <= var3;
            var1 = !var2;
case 142:
            return var1;
        }
    };
    var3['getIsQuestExpiredButWithinThirtyDayLookback'] = var37;
    var3['questConfigFromServer'] = var36;
    var3['questUserStatusFromServer'] = var35;
    var35 = function questWithUserStatusFromServer(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.preview;
            var1['preview'] = var3;
            var5 = _closure1_slot49;
            var3 = var2.config;
            var6 = undefined;
            var3 = var5.bind(var6)(var3);
            var1['config'] = var3;
            var5 = var2.user_status;
            var3 = null;
            var5 = var3 == var5;
            if(var5) { _fun0035_ip = 143; continue _fun0035 }
case 138:
            var5 = _closure1_slot51;
            var4 = var2.user_status;
            var3 = var5.bind(var6)(var4);
case 143:
            var1['userStatus'] = var3;
            var2 = var2.targeted_content;
            var1['targetedContent'] = var2;
            return var1;
        }
    };
    var3['questWithUserStatusFromServer'] = var35;
    var35 = function getClaimedQuestWithUserStatusFromServer(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.id;
            var1['id'] = var2;
            var6 = _closure1_slot53;
            var2 = var3.config;
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var1['config'] = var2;
            var6 = var3.user_status;
            var2 = null;
            var6 = var2 == var6;
            if(var6) { _fun0036_ip = 30; continue _fun0036 }
case 144:
            var4 = _closure1_slot51;
            var3 = var3.user_status;
            var2 = var4.bind(var5)(var3);
case 30:
            var1['userStatus'] = var2;
            return var1;
        }
    };
    var3['getClaimedQuestWithUserStatusFromServer'] = var35;
    var3['questsRewardCodeFromServer'] = var34;
    var34 = function questsEntitlementsFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.claimed_at;
        var1['claimedAt'] = var3;
        var5 = var2.entitlements;
        var4 = var5.map;
        var3 = _closure1_slot56;
        var3 = var4.bind(var5)(var3);
        var1['items'] = var3;
        var2 = var2.errors;
        var1['errors'] = var2;
        return var1;
    };
    var3['questsEntitlementsFromServer'] = var34;
    var3['getQuestUrl'] = var33;
    var33 = function getQuestForPlacement(arg1, arg2, arg3) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = var3.get;
            var1 = arg3;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 == var2)) { _fun0037_ip = 69; continue _fun0037 }
case 145:
            var3 = undefined;
            return var3;
case 69:
            var3 = var4.get;
            var2 = var2.quest;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var3 = var1 == var2;
            var4 = undefined;
            var1 = undefined;
            if(var3) { _fun0037_ip = 106; continue _fun0037 }
case 7:
            var3 = _closure1_slot48;
            var3 = var3.bind(var4)(var2);
            var1 = undefined;
            if(var3) { _fun0037_ip = 106; continue _fun0037 }
case 143:
            var1 = var2;
case 106:
            return var1;
        }
    };
    var3['getQuestForPlacement'] = var33;
    var33 = function(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 18;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.XBOX;
            if(!(var2 !== var3)) { _fun0038_ip = 146; continue _fun0038 }
case 98:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.PLAYSTATION;
            if(!(var2 !== var3)) { _fun0038_ip = 147; continue _fun0038 }
case 113:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.SWITCH;
            if(!(var2 !== var3)) { _fun0038_ip = 148; continue _fun0038 }
case 88:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.PC;
            if(!(var2 !== var3)) { _fun0038_ip = 149; continue _fun0038 }
case 150:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardCodePlatforms;
            var2 = var2.CROSS_PLATFORM;
            if(!(var2 !== var3)) { _fun0038_ip = 19; continue _fun0038 }
case 151:
            return var5;
case 19:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
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
case 149:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
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
case 148:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.1pp0su;
            var2 = var3.bind(var4)(var2);
            return var2;
case 147:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.6IeKx2;
            var2 = var3.bind(var4)(var2);
            return var2;
case 146:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 19;
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
    var3['getPlatformString'] = var33;
    var33 = function getContextualEntrypointHeading(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var9 = var1.quest;
            var2 = var1.taskDetails;
            var1 = var1.thirdPartyTaskDetails;
            var6 = var9.userStatus;
            var3 = null;
            var7 = var3 == var6;
            var5 = undefined;
            var4 = undefined;
            if(var7) { _fun0039_ip = 2; continue _fun0039 }
case 55:
            var4 = var6.completedAt;
case 2:
            if(!(var3 == var4)) { _fun0039_ip = 152; continue _fun0039 }
case 94:
            var6 = var9.userStatus;
            var7 = var3 == var6;
            var4 = undefined;
            if(var7) { _fun0039_ip = 59; continue _fun0039 }
case 153:
            var4 = var6.enrolledAt;
case 59:
            if(!(var3 == var4)) { _fun0039_ip = 14; continue _fun0039 }
case 143:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 19;
            var7 = var10[var4];
            var7 = var6.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var4 = var10[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            var6 = var4.EQa7os;
            var4 = {};
            var9 = var9.config;
            var9 = var9.messages;
            var9 = var9.questName;
            var4['questName'] = var9;
            var4 = var7.bind(var8)(var6, var4);
            return var4;
case 14:
            var2 = var2.percentComplete;
            if(!(var3 != var1)) { _fun0039_ip = 16; continue _fun0039 }
case 154:
            var2 = var1.percentComplete;
case 16:
            var1 = 0.75;
            if(!(!(var2 >= var1))) { _fun0039_ip = 155; continue _fun0039 }
case 156:
            var1 = 0.45;
            if(!(var2 >= var1)) { _fun0039_ip = 157; continue _fun0039 }
case 122:
            var1 = 0.55;
            if(!(!(var2 <= var1))) { _fun0039_ip = 158; continue _fun0039 }
case 157:
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0039_ip = 159; continue _fun0039 }
case 160:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 19;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.7e5k7L;
            var1 = var2.bind(var3)(var1);
            _fun0039_ip = 161; continue _fun0039;
case 159:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.JMbfnc;
            var1 = var3.bind(var4)(var2);
case 161:
            _fun0039_ip = 162; continue _fun0039;
case 158:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.JNx8sG;
            var1 = var3.bind(var4)(var2);
case 162:
            _fun0039_ip = 163; continue _fun0039;
case 155:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gvCR4H;
            var1 = var3.bind(var4)(var2);
case 163:
            return var1;
case 152:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 19;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.BzFeTF;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getContextualEntrypointHeading'] = var33;
    var3['isDismissible'] = var32;
    var32 = function isDismissed(arg1, arg2) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var5 = arg2;
            var2 = _closure1_slot57;
            var4 = undefined;
            var2 = var2.bind(var4)(var5);
            if(var2) { _fun0040_ip = 141; continue _fun0040 }
case 29:
            var2 = false;
            return var2;
case 141:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 18;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.QuestContent;
            var5 = var2[var5];
            var2 = 20;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.hasFlag;
            var2 = arg1;
            var2 = var2.dismissedQuestContent;
            var1 = _closure1_slot15;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['isDismissed'] = var32;
    var3['getCollectiblesQuestReward'] = var31;
    var31 = function getCollectibleQuestRewardExtendableExpirationDate(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var2 = _closure1_slot58;
            var4 = undefined;
            var1 = arg1;
            var2 = var2.bind(var4)(var1);
            var6 = null;
            var5 = var6 != var2;
            var1 = null;
            if(!var5) { _fun0041_ip = 164; continue _fun0041 }
case 34:
            var5 = 'expiresAtPremium';
            var5 = var5 in var2;
            var1 = null;
            if(!var5) { _fun0041_ip = 164; continue _fun0041 }
case 165:
            var5 = var2.expiresAtPremium;
            var5 = var6 != var5;
            var1 = null;
            if(!var5) { _fun0041_ip = 164; continue _fun0041 }
case 28:
            var3 = _closure1_slot74;
            var2 = var2.expiresAtPremium;
            var1 = var3.bind(var4)(var2);
case 164:
            return var1;
        }
    };
    var3['getCollectibleQuestRewardExtendableExpirationDate'] = var31;
    var31 = function getCollectibleQuestRewardDuration(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot58;
            var7 = undefined;
            var3 = var1.bind(var7)(var5);
            var1 = null;
            if(!(var1 != var3)) { _fun0042_ip = 166; continue _fun0042 }
case 89:
            var4 = 'expiresAt';
            var4 = var4 in var3;
            if(!var4) { _fun0042_ip = 166; continue _fun0042 }
case 55:
            var4 = var3.expiresAt;
            if(!(var1 != var4)) { _fun0042_ip = 166; continue _fun0042 }
case 94:
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
            var3 = _closure1_slot2;
            var11 = 21;
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
            if(!(var12 >= var8)) { _fun0042_ip = 63; continue _fun0042 }
case 46:
            var3 = 1;
case 63:
            var6 = var6 + var3;
            var3 = 12;
            if(!(!(var6 >= var3))) { _fun0042_ip = 167; continue _fun0042 }
case 125:
            if(!(!(var6 > var5))) { _fun0042_ip = 168; continue _fun0042 }
case 68:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var8 = var8.bind(var7)(var5);
            var5 = var8.differenceInDays;
            var10 = var5.bind(var8)(var9, var10);
            var5 = 7;
            if(!(!(var10 >= var5))) { _fun0042_ip = 169; continue _fun0042 }
case 170:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 19;
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
case 169:
            var9 = var4.Math;
            var8 = var9.ceil;
            var5 = var10 / var5;
            var11 = var8.bind(var9)(var5);
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 19;
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
case 168:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 19;
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
case 167:
            var5 = var4.Math;
            var4 = var5.floor;
            var3 = var6 / var3;
            var6 = var4.bind(var5)(var3);
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 19;
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
case 166:
            return var1;
        }
    };
    var3['getCollectibleQuestRewardDuration'] = var31;
    var31 = function hasFractionalPremiumQuestReward(arg1) {
        var1 = arg1;
        var1 = var1.rewardsConfig;
        var3 = var1.rewards;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
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
    var3['hasFractionalPremiumQuestReward'] = var31;
    var31 = function hasVirtualCurrencyReward(arg1) {
        var1 = arg1;
        var1 = var1.rewardsConfig;
        var3 = var1.rewards;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
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
    var3['hasVirtualCurrencyReward'] = var31;
    var31 = function hasCollectiblesQuestReward(arg1) {
        var3 = _closure1_slot58;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['hasCollectiblesQuestReward'] = var31;
    var31 = function hasInGameQuestReward(arg1) {
        var1 = arg1;
        var1 = var1.rewardsConfig;
        var3 = var1.rewards;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
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
    var3['hasInGameQuestReward'] = var31;
    var31 = function hasQuestRewardCode(arg1) {
        var1 = arg1;
        var1 = var1.rewardsConfig;
        var3 = var1.rewards;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
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
    var3['hasQuestRewardCode'] = var31;
    var31 = function getInGameQuestReward(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var3 = var1.rewards;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
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
            if(!var3) { _fun0043_ip = 93; continue _fun0043 }
case 171:
            var1 = var2;
case 93:
            return var1;
        }
    };
    var3['getInGameQuestReward'] = var31;
    var31 = function getCollectiblesQuestRewardItem(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var3 = _closure1_slot58;
            var5 = undefined;
            var1 = arg1;
            var3 = var3.bind(var5)(var1);
            var1 = null;
            var6 = var1 == var3;
            var4 = undefined;
            if(var6) { _fun0044_ip = 172; continue _fun0044 }
case 34:
            var4 = var3.skuId;
case 172:
            var3 = _closure1_slot4;
            var2 = var3.getProduct;
            var3 = var2.bind(var3)(var4);
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0044_ip = 61; continue _fun0044 }
case 107:
            var4 = var3.items;
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0044_ip = 61; continue _fun0044 }
case 103:
            var3 = 0;
            var2 = var4[var3];
case 61:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0044_ip = 173; continue _fun0044 }
case 58:
            var1 = var2;
case 173:
            return var1;
        }
    };
    var3['getCollectiblesQuestRewardItem'] = var31;
    var31 = function getVirtualCurrencyRewardOrbQuantity(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var1 = arg1;
            var1 = var1.rewardsConfig;
            var3 = var1.rewards;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
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
            if(var3) { _fun0045_ip = 102; continue _fun0045 }
case 112:
            var1 = var2.orbQuantity;
case 102:
            return var1;
        }
    };
    var3['getVirtualCurrencyRewardOrbQuantity'] = var31;
    var31 = function includesTarget(arg1, arg2) {
        var1 = arg1;
        var3 = var1.targetedContent;
        var2 = var3.includes;
        var1 = arg2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['includesTarget'] = var31;
    var31 = function captureQuestsException(arg1, arg2) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var7 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 22;
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
            if(var8) { _fun0046_ip = 174; continue _fun0046 }
case 114:
            var2 = var7.tags;
case 174:
            var10 = var6;
            var9 = var2;
            var2 = copyDataProperties(var10, var9);
            var7 = 'quests';
            var2 = 'app_context';
            var6[var2] = var7;
            var2 = 'tags';
            var3[var2] = var6;
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['captureQuestsException'] = var31;
    var31 = function getQuestsFromActivities(arg1, arg2) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var8 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var3)) { _fun0047_ip = 71; continue _fun0047 }
case 78:
            if(!(var1 != var8)) { _fun0047_ip = 71; continue _fun0047 }
case 67:
            var2 = _closure1_slot43;
            var6 = undefined;
            var5 = var2.bind(var6)(var3);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            if(var2) { _fun0047_ip = 113; continue _fun0047 }
case 93:
            var3 = _closure1_slot46;
            var2 = var4.value;
            var2 = var3.bind(var6)(var8, var2);
            if(!(var1 == var2)) { _fun0047_ip = 106; continue _fun0047 }
case 126:
            var9 = var5.bind(var6)();
            var3 = var9.done;
            var4 = var9;
            if(var3) { _fun0047_ip = 113; continue _fun0047 }
case 61:
            _fun0047_ip = 93; continue _fun0047;
case 106:
            return var2;
case 113:
            return var1;
case 71:
            return var1;
        }
    };
    var3['getQuestsFromActivities'] = var31;
    var3['isTieredRewardCodeQuest'] = var30;
    var3['hasPlayOnDesktopTask'] = var29;
    var3['hasStreamOnDesktopTask'] = var28;
    var3['hasPlayActivityTask'] = var27;
    var3['shouldUsePlayOnDesktopTask'] = var26;
    var3['isSponsoredPlayQuest'] = var25;
    var25 = function isPlayAnyActivityQuest(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var6 = var1.SharedQuestFields;
            var3 = var6.build;
            var1 = var5.config;
            var1 = var3.bind(var6)(var1);
            var1 = var1.application;
            var3 = var1.id;
            var1 = _closure1_slot62;
            var1 = var1.bind(var4)(var5);
            if(!var1) { _fun0048_ip = 104; continue _fun0048 }
case 65:
            var2 = _closure1_slot14;
            var1 = var3 === var2;
case 104:
            return var1;
        }
    };
    var3['isPlayAnyActivityQuest'] = var25;
    var3['hasVariant'] = var24;
    var3['getRewardCodeQuestReward'] = var23;
    var23 = function openGameLinkDirectly(arg1, arg2) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var10 = arg1;
            var9 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.SharedQuestFields;
            var4 = var5.build;
            var3 = var10.config;
            var3 = var4.bind(var5)(var3);
            var3 = var3.ctaLink;
            var4 = var10.config;
            var8 = var4.ctaConfig;
            var5 = null;
            var6 = var5 == var8;
            var4 = null;
            if(var6) { _fun0049_ip = 175; continue _fun0049 }
case 176:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var12 = 26;
            var6 = var6[var12];
            var7 = var7.bind(var1)(var6);
            var6 = var7.isIOS;
            var6 = var6.bind(var7)();
            if(var6) { _fun0049_ip = 150; continue _fun0049 }
case 177:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getOS;
            var7 = var6.bind(var7)();
            var6 = 'ios';
            if(!(var6 === var7)) { _fun0049_ip = 178; continue _fun0049 }
case 150:
            var7 = var8.ios;
            var11 = var5 == var7;
            var6 = undefined;
            if(var11) { _fun0049_ip = 154; continue _fun0049 }
case 179:
            var6 = var7.iosAppId;
case 154:
            if(!(var5 != var6)) { _fun0049_ip = 178; continue _fun0049 }
case 180:
            var6 = var8.ios;
            var11 = var6.iosAppId;
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'https://apps.apple.com/app/id';
            var6 = var7.bind(var6)(var11);
            _fun0049_ip = 161; continue _fun0049;
case 178:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var11 = var11.bind(var1)(var7);
            var7 = var11.isAndroid;
            var7 = var7.bind(var11)();
            if(var7) { _fun0049_ip = 181; continue _fun0049 }
case 23:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var11 = var11.bind(var1)(var7);
            var7 = var11.getOS;
            var12 = var7.bind(var11)();
            var11 = 'android';
            var7 = null;
            if(!(var11 === var12)) { _fun0049_ip = 182; continue _fun0049 }
case 181:
            var12 = var8.android;
            var13 = var5 == var12;
            var11 = undefined;
            if(var13) { _fun0049_ip = 148; continue _fun0049 }
case 183:
            var11 = var12.androidAppId;
case 148:
            var11 = var5 == var11;
            var7 = null;
            if(var11) { _fun0049_ip = 182; continue _fun0049 }
case 184:
            var8 = var8.android;
            var12 = var8.androidAppId;
            var8 = global;
            var8 = var8.HermesInternal;
            var11 = var8.concat;
            var8 = 'https://play.google.com/store/apps/details?id=';
            var7 = var11.bind(var8)(var12);
case 182:
            var6 = var7;
case 161:
            var4 = var6;
case 175:
            if(!(var5 != var4)) { _fun0049_ip = 185; continue _fun0049 }
case 186:
            var3 = var4;
case 185:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 27;
            var4 = var5[var4];
            var8 = var6.bind(var1)(var4);
            var7 = var8.trackQuestContentClicked;
            var4 = {};
            var10 = var10.id;
            var4['questId'] = var10;
            var10 = var9.content;
            var4['questContent'] = var10;
            var10 = var9.ctaContent;
            var4['questContentCTA'] = var10;
            var10 = var9.position;
            var4['questContentPosition'] = var10;
            var10 = var9.impressionId;
            var4['impressionId'] = var10;
            var9 = var9.sourceQuestContent;
            var4['sourceQuestContent'] = var9;
            var4 = var7.bind(var8)(var4);
            var4 = 28;
            var4 = var5[var4];
            var4 = var6.bind(var1)(var4);
            var7 = var4.ComponentDispatch;
            var6 = var7.dispatch;
            var4 = _closure1_slot29;
            var4 = var4.QUEST_GAME_LINK_OPENED;
            var4 = var6.bind(var7)(var4);
            var4 = _closure1_slot1;
            var2 = 29;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var3['openGameLinkDirectly'] = var23;
    var23 = function(arg1, arg2) {
        var5 = arg1;
        var9 = arg2;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var1 = undefined;
        var8 = var4.bind(var1)(var3);
        var7 = var8.trackQuestContentClicked;
        var3 = {};
        var3['questId'] = var5;
        var10 = var9.content;
        var3['questContent'] = var10;
        var10 = var9.ctaContent;
        var3['questContentCTA'] = var10;
        var10 = var9.position;
        var3['questContentPosition'] = var10;
        var10 = var9.impressionId;
        var3['impressionId'] = var10;
        var9 = var9.sourceQuestContent;
        var3['sourceQuestContent'] = var9;
        var3 = var7.bind(var8)(var3);
        var3 = 30;
        var3 = var6[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.copy;
        var2 = _closure1_slot32;
        var2 = var2.bind(var1)(var5);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['copyShareLink'] = var23;
    var23 = function(arg1, arg2) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var1 = _closure1_slot68;
            var5 = undefined;
            var1 = var1.bind(var5)(var7);
            if(var1) { _fun0050_ip = 187; continue _fun0050 }
case 89:
            var1 = _closure1_slot38;
            var1 = var1.bind(var5)(var7);
            if(var1) { _fun0050_ip = 188; continue _fun0050 }
case 165:
            var1 = _closure1_slot39;
            var1 = var1.bind(var5)(var7);
            if(var1) { _fun0050_ip = 189; continue _fun0050 }
case 28:
            var1 = _closure1_slot63;
            var1 = var1.bind(var5)(var7);
            if(var1) { _fun0050_ip = 190; continue _fun0050 }
case 153:
            var1 = _closure1_slot62;
            var1 = var1.bind(var5)(var7);
            var6 = _closure1_slot36;
            var4 = {};
            var4['quest'] = var7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 24;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.FirstPartyQuestTaskTypes;
            if(var1) { _fun0050_ip = 191; continue _fun0050 }
case 177:
            var1 = var8.STREAM_ON_DESKTOP;
            var4['taskType'] = var1;
            var1 = var6.bind(var5)(var4);
            _fun0050_ip = 192; continue _fun0050;
case 191:
            var8 = var8.PLAY_ACTIVITY;
            var4['taskType'] = var8;
            var1 = var6.bind(var5)(var4);
case 192:
            _fun0050_ip = 48; continue _fun0050;
case 190:
            var6 = _closure1_slot36;
            var4 = {};
            var4['quest'] = var7;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 24;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.FirstPartyQuestTaskTypes;
            var8 = var8.PLAY_ON_DESKTOP;
            var4['taskType'] = var8;
            var1 = var6.bind(var5)(var4);
case 48:
            _fun0050_ip = 193; continue _fun0050;
case 189:
            var4 = _closure1_slot41;
            var4 = var4.bind(var5)(var7);
            var8 = _closure1_slot36;
            var6 = {};
            var6['quest'] = var7;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 24;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.FirstPartyQuestTaskTypes;
            if(var4) { _fun0050_ip = 194; continue _fun0050 }
case 40:
            var4 = var9.WATCH_VIDEO;
            var6['taskType'] = var4;
            var4 = var8.bind(var5)(var6);
            _fun0050_ip = 195; continue _fun0050;
case 194:
            var9 = var9.WATCH_VIDEO_ON_MOBILE;
            var6['taskType'] = var9;
            var4 = var8.bind(var5)(var6);
case 195:
            var1 = var4;
case 193:
            _fun0050_ip = 196; continue _fun0050;
case 188:
            var4 = {};
            var4['quest'] = var7;
            var6 = null;
            if(!(var6 == var2)) { _fun0050_ip = 147; continue _fun0050 }
case 197:
            var6 = _closure1_slot73;
            var6 = var6.bind(var5)(var7);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 24;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.FirstPartyQuestTaskTypesSets;
            if(var6) { _fun0050_ip = 158; continue _fun0050 }
case 198:
            var6 = var7.ALL;
            _fun0050_ip = 199; continue _fun0050;
case 158:
            var6 = var7.CONSOLE;
case 199:
            var2 = var6;
case 147:
            var4['includeTaskTypes'] = var2;
            var2 = function(arg1) {
                _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.quest;
                    var4 = var1.includeTaskTypes;
                    var3 = undefined;
                    if(!(var4 === var3)) { _fun0051_ip = 28; continue _fun0051 }
case 84:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 24;
                    var1 = var6[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.FirstPartyQuestTaskTypesSets;
                    var4 = var1.ALL;
case 28:
                    var6 = _closure1_slot43;
                    var2 = global;
                    var8 = var2.Object;
                    var7 = var8.values;
                    var10 = var5.userStatus;
                    var9 = null;
                    var11 = var9 == var10;
                    var2 = undefined;
                    if(var11) { _fun0051_ip = 200; continue _fun0051 }
case 85:
                    var2 = var10.progress;
case 200:
                    if(!(var9 == var2)) { _fun0051_ip = 54; continue _fun0051 }
case 201:
                    var2 = {};
case 54:
                    var8 = var7.bind(var8)(var2);
                    var7 = var8.sort;
                    var2 = function(arg1, arg2) {
                        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                            var3 = arg1;
                            var2 = arg2;
                            var4 = null;
                            var5 = var4 == var3;
                            var6 = undefined;
                            if(var5) { _fun0052_ip = 136; continue _fun0052 }
case 92:
                            var5 = var3.heartbeat;
                            var7 = var4 == var5;
                            var6 = undefined;
                            if(var7) { _fun0052_ip = 136; continue _fun0052 }
case 91:
                            var6 = var5.lastBeatAt;
case 136:
                            var7 = var4 == var2;
                            var5 = undefined;
                            if(var7) { _fun0052_ip = 153; continue _fun0052 }
case 98:
                            var7 = var2.heartbeat;
                            var8 = var4 == var7;
                            var5 = undefined;
                            if(var8) { _fun0052_ip = 153; continue _fun0052 }
case 202:
                            var5 = var7.lastBeatAt;
case 153:
                            if(!(var4 != var6)) { _fun0052_ip = 61; continue _fun0052 }
case 65:
                            if(!(var4 == var5)) { _fun0052_ip = 53; continue _fun0052 }
case 61:
                            if(!(var4 == var6)) { _fun0052_ip = 116; continue _fun0052 }
case 113:
                            if(!(var4 == var5)) { _fun0052_ip = 116; continue _fun0052 }
case 77:
                            var8 = var4 == var3;
                            var7 = undefined;
                            if(var8) { _fun0052_ip = 203; continue _fun0052 }
case 11:
                            var7 = var3.updatedAt;
case 203:
                            if(!(var4 != var7)) { _fun0052_ip = 116; continue _fun0052 }
case 204:
                            var7 = var4 == var2;
                            var1 = undefined;
                            if(var7) { _fun0052_ip = 82; continue _fun0052 }
case 205:
                            var1 = var2.updatedAt;
case 82:
                            if(!(var4 == var1)) { _fun0052_ip = 206; continue _fun0052 }
case 116:
                            var8 = var4 != var6;
                            var7 = 1;
                            var1 = var7;
                            if(!var8) { _fun0052_ip = 121; continue _fun0052 }
case 207:
                            var4 = var4 == var5;
                            var1 = var7;
                            if(!var4) { _fun0052_ip = 121; continue _fun0052 }
case 208:
                            var1 = -1;
case 121:
                            _fun0052_ip = 209; continue _fun0052;
case 206:
                            var4 = global;
                            var8 = var4.Date;
                            var9 = var3.updatedAt;
                            var7 = var8.prototype;
                            var7 = Object.create(var7, {constructor: {value: var8}});
                            var10 = var7;
                            var3 = new var10[var8](var9, var8);
                            var7 = var3 instanceof Object ? var3 : var7;
                            var3 = var7.valueOf;
                            var3 = var3.bind(var7)();
                            var7 = var4.Date;
                            var9 = var2.updatedAt;
                            var4 = var7.prototype;
                            var4 = Object.create(var4, {constructor: {value: var7}});
                            var10 = var4;
                            var2 = new var10[var7](var9, var8);
                            var4 = var2 instanceof Object ? var2 : var4;
                            var2 = var4.valueOf;
                            var2 = var2.bind(var4)();
                            var3 = var3 > var2;
                            var2 = 1;
                            if(!var3) { _fun0052_ip = 210; continue _fun0052 }
case 170:
                            var2 = -1;
case 210:
                            var1 = var2;
case 209:
                            _fun0052_ip = 211; continue _fun0052;
case 53:
                            var2 = global;
                            var3 = var2.Date;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {constructor: {value: var3}});
                            var10 = var4;
                            var9 = var6;
                            var3 = new var10[var3](var9, var8);
                            var4 = var3 instanceof Object ? var3 : var4;
                            var3 = var4.valueOf;
                            var3 = var3.bind(var4)();
                            var2 = var2.Date;
                            var4 = var2.prototype;
                            var4 = Object.create(var4, {constructor: {value: var2}});
                            var10 = var4;
                            var9 = var5;
                            var2 = new var10[var2](var9, var8);
                            var4 = var2 instanceof Object ? var2 : var4;
                            var2 = var4.valueOf;
                            var2 = var2.bind(var4)();
                            var3 = var3 > var2;
                            var2 = 1;
                            if(!var3) { _fun0052_ip = 158; continue _fun0052 }
case 212:
                            var2 = -1;
case 158:
                            var1 = var2;
case 211:
                            return var1;
                        }
                    };
                    var8 = var7.bind(var8)(var2);
                    var7 = var8.filter;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 33;
                    var2 = var11[var2];
                    var2 = var10.bind(var3)(var2);
                    var2 = var2.isNotNullish;
                    var2 = var7.bind(var8)(var2);
                    var8 = var6.bind(var3)(var2);
                    var6 = var8.bind(var3)();
                    var2 = var6.done;
                    if(var2) { _fun0051_ip = 213; continue _fun0051 }
case 70:
                    var2 = var6.value;
                    var7 = _closure1_slot37;
                    var2 = var2.eventName;
                    var7 = var7.bind(var3)(var2);
                    if(!(var9 != var7)) { _fun0051_ip = 214; continue _fun0051 }
case 22:
                    if(!(var9 != var4)) { _fun0051_ip = 214; continue _fun0051 }
case 130:
                    var2 = var4.has;
                    var2 = var2.bind(var4)(var7);
                    if(var2) { _fun0051_ip = 215; continue _fun0051 }
case 214:
                    var10 = var8.bind(var3)();
                    var2 = var10.done;
                    var6 = var10;
                    if(var2) { _fun0051_ip = 213; continue _fun0051 }
case 216:
                    _fun0051_ip = 70; continue _fun0051;
case 215:
                    var6 = _closure1_slot36;
                    var2 = {};
                    var2['quest'] = var5;
                    var2['taskType'] = var7;
                    var2['includeTaskTypes'] = var4;
                    var2 = var6.bind(var3)(var2);
                    return var2;
case 213:
                    var2 = _closure1_slot36;
                    var1 = {};
                    var1['quest'] = var5;
                    var1['includeTaskTypes'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var2.bind(var5)(var4);
case 196:
            _fun0050_ip = 217; continue _fun0050;
case 187:
            var2 = {'progressSeconds': 0, 'targetSeconds': 1, 'targetMinutes': 1, 'percentComplete': 0};
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 24;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.FirstPartyQuestTaskTypes;
            var3 = var3.STREAM_ON_DESKTOP;
            var2['taskType'] = var3;
            var1 = var2;
case 217:
            return var1;
        }
    };
    var3['getQuestTaskDetails'] = var23;
    var23 = function getThirdPartyTaskDetails(arg1) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var1 = var5[var1];
            var6 = undefined;
            var1 = var4.bind(var6)(var1);
            var5 = var1.SharedQuestFields;
            var4 = var5.build;
            var1 = var3.config;
            var1 = var4.bind(var5)(var1);
            var5 = var1.defaultInGameTask;
            var1 = null;
            if(!(var1 != var5)) { _fun0053_ip = 45; continue _fun0053 }
case 174:
            var4 = var3.userStatus;
            var7 = var1 == var4;
            var3 = undefined;
            if(var7) { _fun0053_ip = 73; continue _fun0053 }
case 104:
            var7 = var4.progress;
            var4 = var1 == var7;
            var3 = undefined;
            if(var4) { _fun0053_ip = 73; continue _fun0053 }
case 75:
            var4 = var5.type;
            var4 = var7[var4];
            var7 = var1 == var4;
            var3 = undefined;
            if(var7) { _fun0053_ip = 73; continue _fun0053 }
case 140:
            var3 = var4.value;
case 73:
            var7 = var1 != var3;
            var4 = 0;
            if(!var7) { _fun0053_ip = 218; continue _fun0053 }
case 109:
            var4 = var3;
case 218:
            var3 = _closure1_slot33;
            var2 = var5.target;
            var3 = var3.bind(var6)(var2, var4);
            var2 = {};
            var6 = var5.messages;
            var6 = var6.taskTitle;
            var2['title'] = var6;
            var6 = var5.messages;
            var6 = var6.taskDescription;
            var2['description'] = var6;
            var5 = var5.target;
            var2['target'] = var5;
            var2['progress'] = var4;
            var2['percentComplete'] = var3;
            return var2;
case 45:
            return var1;
        }
    };
    var3['getThirdPartyTaskDetails'] = var23;
    var3['isInGameQuest'] = var22;
    var22 = function canLaunchActivity(arg1) {
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot68;
            var5 = undefined;
            var1 = var1.bind(var5)(var3);
            if(var1) { _fun0054_ip = 69; continue _fun0054 }
case 29:
            var4 = _closure1_slot62;
            var1 = var4.bind(var5)(var3);
case 69:
            if(!var1) { _fun0054_ip = 138; continue _fun0054 }
case 91:
            var3 = var3.config;
            var4 = var3.features;
            var3 = var4.includes;
            var2 = _closure1_slot19;
            var2 = var2.START_QUEST_CTA;
            var1 = var3.bind(var4)(var2);
case 138:
            return var1;
        }
    };
    var3['canLaunchActivity'] = var22;
    var3['getRemainingTaskTime'] = var21;
    var3['parseMinutesAndSecondsFromSeconds'] = var20;
    var3['formatWatchTaskRemainingTime'] = var19;
    var3['formatWatchTaskTime'] = var18;
    var3['hasSomeConsoleTasks'] = var17;
    var3['hasWatchVideoTasks'] = var16;
    var3['hasWatchVideoOnDesktopTasks'] = var15;
    var3['hasWatchVideoOnMobileTasks'] = var14;
    var14 = function(arg1) {
        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot41;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0055_ip = 91; continue _fun0055 }
case 29:
            var2 = _closure1_slot40;
            var2 = var2.bind(var3)(var4);
            var1 = !var2;
case 91:
            return var1;
        }
    };
    var3['isMobileOnlyQuest'] = var14;
    var14 = function isConsoleQuest(arg1) {
        var3 = _closure1_slot38;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['isConsoleQuest'] = var14;
    var3['isQuestProgressingOnConsole'] = var13;
    var13 = function isVideoQuestProgressing(arg1) {
        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot39;
            var4 = undefined;
            var1 = var1.bind(var4)(var2);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0056_ip = 164; continue _fun0056 }
case 89:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 34;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.isModalOpen;
            var5 = _closure1_slot78;
            var2 = var2.id;
            var2 = var5.bind(var4)(var2);
            var1 = var3.bind(var4)(var2);
case 164:
            return var1;
        }
    };
    var3['isVideoQuestProgressing'] = var13;
    var13 = function openAuthorizationConnectionModal(arg1, arg2) {
        var1 = arg1;
        var4 = arg2;
        var5 = var1.platformType;
        var9 = var1.quest;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var1 = undefined;
        var8 = var7.bind(var1)(var3);
        var7 = var8.trackQuestContentClicked;
        var3 = {};
        var9 = var9.id;
        var3['questId'] = var9;
        var9 = var4.content;
        var3['questContent'] = var9;
        var9 = var4.sourceQuestContent;
        var3['sourceQuestContent'] = var9;
        var9 = var4.ctaContent;
        var3['questContentCTA'] = var9;
        var9 = var4.impressionId;
        var3['impressionId'] = var9;
        var3 = var7.bind(var8)(var3);
        var3 = _closure1_slot1;
        var2 = 36;
        var2 = var6[var2];
        var3 = var3.bind(var1)(var2);
        var2 = {};
        var2['platformType'] = var5;
        var4 = var4.ctaContent;
        var2['location'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['openAuthorizationConnectionModal'] = var13;
    var13 = function openAddConsoleConnectionModal(arg1, arg2) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var7 = arg2;
            var1 = arg1;
            var4 = var1.quest;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 27;
            var2 = var3[var2];
            var3 = undefined;
            var6 = var5.bind(var3)(var2);
            var5 = var6.trackQuestContentClicked;
            var2 = {};
            var8 = var4.id;
            var2['questId'] = var8;
            var8 = var7.content;
            var2['questContent'] = var8;
            var8 = var7.position;
            var2['questContentPosition'] = var8;
            var8 = var7.rowIndex;
            var2['questContentRowIndex'] = var8;
            var8 = var7.ctaContent;
            var2['questContentCTA'] = var8;
            var8 = var7.impressionId;
            var2['impressionId'] = var8;
            var7 = var7.sourceQuestContent;
            var2['sourceQuestContent'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = _closure1_slot77;
            var6 = var2.bind(var3)(var4);
            var4 = var6.length;
            var2 = 1;
            if(!(var2 !== var4)) { _fun0057_ip = 215; continue _fun0057 }
case 219:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 37;
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var4 = var5.dispatch;
            var2 = {};
            var7 = 'CONNECTIONS_GRID_MODAL_SHOW';
            var2['type'] = var7;
            var7 = function onComplete(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 36;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var4 = arg1;
                var1['platformType'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onComplete'] = var7;
            var7 = global;
            var7 = var7.Set;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var10 = var8;
            var9 = var6;
            var7 = new var10[var7](var9, var8);
            var7 = var7 instanceof Object ? var7 : var8;
            var2['includedPlatformTypes'] = var7;
            var2 = var4.bind(var5)(var2);
            return var3;
case 215:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 36;
            var1 = var4[var1];
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = var6.at;
            var4 = 0;
            var4 = var5.bind(var6)(var4);
            var1['platformType'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['openAddConsoleConnectionModal'] = var13;
    var13 = function openConsoleConnectionSettings(arg1, arg2) {
        var8 = arg2;
        var1 = arg1;
        var9 = var1.quest;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 27;
        var2 = var5[var1];
        var1 = undefined;
        var7 = var3.bind(var1)(var2);
        var6 = var7.trackQuestContentClicked;
        var2 = {};
        var9 = var9.id;
        var2['questId'] = var9;
        var9 = var8.content;
        var2['questContent'] = var9;
        var9 = var8.position;
        var2['questContentPosition'] = var9;
        var9 = var8.ctaContent;
        var2['questContentCTA'] = var9;
        var9 = var8.impressionId;
        var2['impressionId'] = var9;
        var8 = var8.sourceQuestContent;
        var2['sourceQuestContent'] = var8;
        var2 = var6.bind(var7)(var2);
        var2 = 35;
        var2 = var5[var2];
        var2 = var3.bind(var1)(var2);
        var3 = var2.openUserSettings;
        var2 = {};
        var4 = _closure1_slot24;
        var4 = var4.CONNECTIONS;
        var2['screen'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['openConsoleConnectionSettings'] = var13;
    var13 = function isOnDiscoverQuestHomeRoute() {
        var1 = global;
        var1 = var1.window;
        var1 = var1.location;
        var3 = var1.pathname;
        var2 = var3.startsWith;
        var1 = _closure1_slot26;
        var1 = var1.QUEST_HOME;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isOnDiscoverQuestHomeRoute'] = var13;
    var3['getQuestFormattedDate'] = var12;
    var3['getPlatformTypeForHintMessage'] = var11;
    var11 = function getExpiredCredentialsHintMessage(arg1) {
        _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
            var3 = _closure1_slot75;
            var4 = undefined;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = _closure1_slot25;
            var1 = var1.XBOX;
            if(!(var3 !== var1)) { _fun0058_ip = 220; continue _fun0058 }
case 110:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 19;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.iDiwby;
            _fun0058_ip = 200; continue _fun0058;
case 220:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 19;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var1 = var2.mytEv+;
case 200:
            return var1;
        }
    };
    var3['getExpiredCredentialsHintMessage'] = var11;
    var11 = function getRewardCodeRedemptionInstructions(arg1) {
        _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
            var1 = arg1;
            var9 = var1.quest;
            var10 = var1.rewardCode;
            var3 = var1.selectedPlatformType;
            var5 = var1.sharedQuestFields;
            var6 = _closure1_slot59;
            var4 = {};
            var4['quest'] = var9;
            var1 = undefined;
            var7 = var6.bind(var1)(var4);
            var4 = null;
            if(!(var4 == var3)) { _fun0059_ip = 65; continue _fun0059 }
case 81:
            var8 = var4 == var10;
            var6 = undefined;
            if(var8) { _fun0059_ip = 221; continue _fun0059 }
case 138:
            var6 = var10.platform;
case 221:
            var3 = var6;
case 65:
            var6 = null;
            if(!var7) { _fun0059_ip = 137; continue _fun0059 }
case 101:
            var7 = _closure1_slot66;
            var2 = {};
            var2['quest'] = var9;
            var11 = var4 == var10;
            var8 = undefined;
            if(var11) { _fun0059_ip = 201; continue _fun0059 }
case 115:
            var8 = var10.tier;
case 201:
            if(!(var4 == var8)) { _fun0059_ip = 222; continue _fun0059 }
case 223:
            var10 = var9.userStatus;
            var11 = var4 == var10;
            var9 = undefined;
            if(var11) { _fun0059_ip = 142; continue _fun0059 }
case 86:
            var9 = var10.claimedTier;
case 142:
            var8 = var9;
case 222:
            var2['idx'] = var8;
            var6 = var7.bind(var1)(var2);
case 137:
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0059_ip = 224; continue _fun0059 }
case 127:
            var6 = var6.messages;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0059_ip = 224; continue _fun0059 }
case 225:
            var2 = var6.redemptionInstructionsByPlatform;
case 224:
            if(!(var4 == var2)) { _fun0059_ip = 70; continue _fun0059 }
case 226:
            var2 = var5.defaultRewardRedemptionInstructionsByPlatform;
case 70:
            var4 = var4 != var3;
            var1 = undefined;
            if(!var4) { _fun0059_ip = 227; continue _fun0059 }
case 46:
            var1 = var2[var3];
case 227:
            return var1;
        }
    };
    var3['getRewardCodeRedemptionInstructions'] = var11;
    var11 = function getDisclosureText(arg1) {
        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isTargetedDisclosure;
            var7 = var2.gamePublisher;
            var5 = var2.gameTitle;
            var6 = var2.cosponsorName;
            if(var1) { _fun0060_ip = 13; continue _fun0060 }
case 3:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 19;
            var3 = var9[var1];
            var2 = undefined;
            var3 = var8.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var9[var1];
            var1 = var8.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.5bQWNG;
            var1 = {};
            var1['gamePublisher'] = var7;
            var1['gameTitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0060_ip = 228; continue _fun0060;
case 13:
            var2 = null;
            if(!(var2 != var6)) { _fun0060_ip = 63; continue _fun0060 }
case 117:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 19;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.DV47Gy;
            var2 = {};
            var2['gamePublisher'] = var7;
            var2['cosponsorName'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            _fun0060_ip = 36; continue _fun0060;
case 63:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 19;
            var5 = var9[var3];
            var4 = undefined;
            var5 = var8.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.Piihy1;
            var3 = {};
            var3['gamePublisher'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 36:
            var1 = var2;
case 228:
            return var1;
        }
    };
    var3['getDisclosureText'] = var11;
    var11 = function supportedTaskPlatforms(arg1) {
        _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot60;
            var1 = {};
            var1['quest'] = var5;
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            if(var4) { _fun0061_ip = 99; continue _fun0061 }
case 229:
            var6 = _closure1_slot61;
            var1 = {};
            var1['quest'] = var5;
            var4 = var6.bind(var3)(var1);
case 99:
            var1 = _closure1_slot38;
            var3 = var1.bind(var3)(var5);
            var1 = new Array(0);
            if(!var4) { _fun0061_ip = 61; continue _fun0061 }
case 114:
            var5 = var1.push;
            var4 = _closure1_slot18;
            var4 = var4.DESKTOP;
            var4 = var5.bind(var1)(var4);
case 61:
            if(!var3) { _fun0061_ip = 203; continue _fun0061 }
case 230:
            var3 = var1.push;
            var2 = _closure1_slot18;
            var2 = var2.CONSOLE;
            var2 = var3.bind(var1)(var2);
case 203:
            return var1;
        }
    };
    var3['supportedTaskPlatforms'] = var11;
    var3['isCollectibleQuestRewardPremiumExtendable'] = var10;
    var10 = function isCollectibleQuestRewardPermanentWithPremiumSubscription(arg1) {
        _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot76;
            var5 = undefined;
            var1 = var1.bind(var5)(var4);
            if(!var1) { _fun0062_ip = 230; continue _fun0062 }
case 29:
            var3 = _closure1_slot58;
            var4 = var3.bind(var5)(var4);
            var3 = null;
            var6 = var3 == var4;
            var3 = undefined;
            if(var6) { _fun0062_ip = 2; continue _fun0062 }
case 55:
            var3 = var4.expirationMode;
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.QuestRewardExpirationMode;
            var2 = var2.PREMIUM_PERMANENT;
            var1 = var3 === var2;
case 230:
            return var1;
        }
    };
    var3['isCollectibleQuestRewardPermanentWithPremiumSubscription'] = var10;
    var3['supportedConsoles'] = var9;
    var3['getVideoQuestModalKey'] = var8;
    var8 = function isQuestSupportedOnWeb(arg1) {
        _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot39;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            var2 = _closure1_slot62;
            var2 = var2.bind(var3)(var4);
            if(var1) { _fun0063_ip = 91; continue _fun0063 }
case 69:
            var1 = var2;
case 91:
            return var1;
        }
    };
    var3['isQuestSupportedOnWeb'] = var8;
    var3['sendVideoProgress'] = var7;
    var3['getQuestPlacementFromQuestContent'] = var6;
    var6 = function isBillableQuestContent(arg1) {
        _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
            var4 = _closure1_slot80;
            var3 = undefined;
            var1 = arg1;
            var4 = var4.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0064_ip = 55; continue _fun0064 }
case 89:
            var3 = _closure1_slot13;
            var2 = var3.has;
            var1 = var2.bind(var3)(var4);
case 55:
            return var1;
        }
    };
    var3['isBillableQuestContent'] = var6;
    var6 = function getVideoOrientation(arg1) {
        _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
            var1 = arg1;
            var1 = var1.assets;
            var3 = var1.video;
            var5 = null;
            var4 = var5 == var3;
            var2 = 'portrait';
            var1 = var2;
            if(var4) { _fun0065_ip = 77; continue _fun0065 }
case 33:
            var4 = var3.width;
            var4 = var5 == var4;
            var1 = var2;
            if(var4) { _fun0065_ip = 77; continue _fun0065 }
case 80:
            var4 = var3.height;
            var4 = var5 == var4;
            var1 = var2;
            if(var4) { _fun0065_ip = 77; continue _fun0065 }
case 138:
            var4 = var3.width;
            var3 = var3.height;
            var3 = var4 > var3;
            if(!var3) { _fun0065_ip = 176; continue _fun0065 }
case 104:
            var2 = 'landscape';
case 176:
            var1 = var2;
case 77:
            return var1;
        }
    };
    var3['getVideoOrientation'] = var6;
    var6 = function(arg1) {
        _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
            var8 = arg1;
            var2 = var8.percentComplete;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0066_ip = 231; continue _fun0066 }
case 37:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 19;
            var3 = var7[var1];
            var6 = undefined;
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.GNsKiW;
            var1 = {};
            var5 = _closure1_slot71;
            var5 = var5.bind(var6)(var8);
            var1['remainTime'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0066_ip = 154; continue _fun0066;
case 231:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 19;
            var4 = var9[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.c59/Tp;
            var2 = {};
            var6 = _closure1_slot71;
            var6 = var6.bind(var7)(var8);
            var2['remainTime'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 154:
            return var1;
        }
    };
    var3['getVideoQuestWatchCtaText'] = var6;
    var3['formatVideoProgressRatio'] = var5;
    var5 = function getVideoQuestEndCardCtaText(arg1) {
        _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var3 = var5[var3];
            var6 = undefined;
            var3 = var4.bind(var6)(var3);
            var4 = var3.SharedQuestFields;
            var3 = var4.build;
            var3 = var3.bind(var4)(var1);
            var5 = var3.defaultWatchVideoTask;
            var4 = var1.ctaConfig;
            var3 = null;
            var7 = var3 == var4;
            var1 = undefined;
            if(var7) { _fun0067_ip = 59; continue _fun0067 }
case 153:
            var1 = var4.buttonLabel;
case 59:
            if(!(var3 == var1)) { _fun0067_ip = 203; continue _fun0067 }
case 143:
            var7 = var3 == var5;
            var4 = undefined;
            if(var7) { _fun0067_ip = 200; continue _fun0067 }
case 77:
            var7 = var5.messages;
            var4 = var7.videoEndCtaButtonLabel;
case 200:
            var1 = var4;
case 203:
            if(!(var3 == var1)) { _fun0067_ip = 218; continue _fun0067 }
case 204:
            var7 = var3 == var5;
            var4 = undefined;
            if(var7) { _fun0067_ip = 109; continue _fun0067 }
case 205:
            var5 = var5.messages;
            var4 = var5.videoEndCtaTitle;
case 109:
            var1 = var4;
case 218:
            if(!(var3 == var1)) { _fun0067_ip = 95; continue _fun0067 }
case 38:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.iiTtpJ;
            var1 = var3.bind(var4)(var2);
case 95:
            return var1;
        }
    };
    var3['getVideoQuestEndCardCtaText'] = var5;
    var5 = function getAdDecisionData(arg1, arg2) {
        _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
            var1 = _closure1_slot11;
            var5 = var1.questToDeliverForPlacement;
            var3 = var5.get;
            var6 = _closure1_slot80;
            var4 = undefined;
            var1 = arg2;
            var1 = var6.bind(var4)(var1);
            var1 = var3.bind(var5)(var1);
            var5 = null;
            if(!(var5 == var1)) { _fun0068_ip = 93; continue _fun0068 }
case 99:
            var1 = {};
case 93:
            var3 = var1.quest;
            var1 = var1.adDecisionData;
            if(!(var5 != var1)) { _fun0068_ip = 230; continue _fun0068 }
case 7:
            var5 = var5 == var3;
            var4 = undefined;
            if(var5) { _fun0068_ip = 64; continue _fun0068 }
case 35:
            var4 = var3.id;
case 64:
            var3 = arg1;
            if(!(var4 !== var3)) { _fun0068_ip = 9; continue _fun0068 }
case 230:
            var1 = _closure1_slot16;
case 9:
            return var1;
        }
    };
    var3['getAdDecisionData'] = var5;
    var5 = function getAdMetadataRaw(arg1) {
        _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
            var2 = _closure1_slot11;
            var3 = var2.questToDeliverForPlacement;
            var2 = var3.get;
            var5 = _closure1_slot80;
            var4 = undefined;
            var1 = arg1;
            var1 = var5.bind(var4)(var1);
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0069_ip = 93; continue _fun0069 }
case 99:
            var1 = {};
case 93:
            var1 = var1.metadataRaw;
            return var1;
        }
    };
    var3['getAdMetadataRaw'] = var5;
    var5 = function getAdContext(arg1) {
        _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
            var2 = _closure1_slot11;
            var3 = var2.questToDeliverForPlacement;
            var2 = var3.get;
            var5 = _closure1_slot80;
            var4 = undefined;
            var1 = arg1;
            var1 = var5.bind(var4)(var1);
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0070_ip = 93; continue _fun0070 }
case 99:
            var1 = {};
case 93:
            var1 = var1.adContext;
            return var1;
        }
    };
    var3['getAdContext'] = var5;
    var5 = function getQuestPrimaryReward(arg1) {
        _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
            var2 = arg1;
            var4 = var2.userStatus;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0071_ip = 89; continue _fun0071 }
case 29:
            var1 = var4.claimedTier;
case 89:
            var4 = var3 != var1;
            var3 = 0;
            if(!var4) { _fun0071_ip = 136; continue _fun0071 }
case 232:
            var3 = var1;
case 136:
            var4 = var2.config;
            var1 = 'rewardsConfig';
            var1 = var1 in var4;
            var2 = var2.config;
            if(var1) { _fun0071_ip = 164; continue _fun0071 }
case 114:
            var1 = var2.rewards;
            var1 = var1[var3];
            _fun0071_ip = 77; continue _fun0071;
case 164:
            var2 = var2.rewardsConfig;
            var2 = var2.rewards;
            var1 = var2[var3];
case 77:
            return var1;
        }
    };
    var3['getQuestPrimaryReward'] = var5;
    var3['getQuestTaskTypes'] = var4;
    var4 = function filterQuestsForSocialEntrypoints(arg1, arg2) {
        _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
            var12 = arg2;
            var1 = global;
            var1 = var1.Map;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var23 = var2;
            var1 = new var23[var1](var22);
            var1 = var1 instanceof Object ? var1 : var2;
            var3 = _closure1_slot43;
            var10 = undefined;
            var2 = arg1;
            var9 = var3.bind(var10)(var2);
            var3 = var9.bind(var10)();
            var2 = var3.done;
            var8 = 2;
            var7 = 0;
            var6 = 1;
            var5 = var3;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0072_ip = 194; continue _fun0072 }
case 143:
            var13 = var5.value;
            var2 = _closure1_slot3;
            var2 = var2.bind(var10)(var13, var8);
            var18 = var2[var7];
            var17 = var2[var6];
            var2 = _closure1_slot64;
            var2 = var2.bind(var10)(var17);
            var14 = var4;
            var13 = var3;
            if(var2) { _fun0072_ip = 233; continue _fun0072 }
case 86:
            var15 = _closure1_slot65;
            var2 = _closure1_slot19;
            var2 = var2.NON_GAMING_PLAY_QUEST;
            var2 = var15.bind(var10)(var17, var2);
            var14 = var4;
            var13 = var3;
            if(var2) { _fun0072_ip = 233; continue _fun0072 }
case 192:
            var15 = _closure1_slot43;
            var2 = _closure1_slot82;
            var2 = var2.bind(var10)(var17);
            var2 = var15.bind(var10)(var2);
            var16 = var2.bind(var10)();
            var15 = var16.done;
            var19 = var16;
            var14 = var19;
            var13 = var2;
            if(var15) { _fun0072_ip = 233; continue _fun0072 }
case 46:
            var16 = var19.value;
            var15 = var12.has;
            var16 = var15.bind(var12)(var16);
            var15 = var19;
            if(var16) { _fun0072_ip = 21; continue _fun0072 }
case 234:
            var20 = var2.bind(var10)();
            var16 = var20.done;
            var19 = var20;
            var14 = var19;
            var13 = var2;
            if(var16) { _fun0072_ip = 233; continue _fun0072 }
case 235:
            _fun0072_ip = 46; continue _fun0072;
case 21:
            var16 = var1.set;
            var16 = var16.bind(var1)(var18, var17);
            var14 = var15;
            var13 = var2;
case 233:
            var15 = var9.bind(var10)();
            var2 = var15.done;
            var4 = var14;
            var3 = var13;
            var5 = var15;
            if(!var2) { _fun0072_ip = 143; continue _fun0072 }
case 194:
            return var1;
        }
    };
    var3['filterQuestsForSocialEntrypoints'] = var4;
    var4 = function handleVideoQuestModalClose(arg1) {
        _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
            var1 = arg1;
            var9 = var1.questId;
            var4 = var1.sourceQuestContent;
            var7 = var1.videoSessionId;
            var2 = _closure1_slot12;
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = var2.getVideoProgress;
            var15 = var1.bind(var2)(var9);
            var3 = null;
            if(!(var3 != var15)) { _fun0073_ip = 236; continue _fun0073 }
case 107:
            var2 = _closure1_slot11;
            var1 = var2.getQuest;
            var5 = var1.bind(var2)(var9);
            var1 = var3 != var5;
            if(!var1) { _fun0073_ip = 54; continue _fun0073 }
case 104:
            var8 = var5.userStatus;
            var10 = var3 == var8;
            var2 = undefined;
            if(var10) { _fun0073_ip = 108; continue _fun0073 }
case 75:
            var2 = var8.enrolledAt;
case 108:
            var1 = var3 != var2;
case 54:
            if(!var1) { _fun0073_ip = 237; continue _fun0073 }
case 238:
            var8 = var5.userStatus;
            var10 = var3 == var8;
            var2 = undefined;
            if(var10) { _fun0073_ip = 239; continue _fun0073 }
case 79:
            var2 = var8.completedAt;
case 239:
            var1 = var3 == var2;
case 237:
            if(!var1) { _fun0073_ip = 121; continue _fun0073 }
case 119:
            var3 = _closure1_slot79;
            var2 = var15.maxTimestampSec;
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var2);
case 121:
            var5 = _closure1_slot81;
            var2 = var15.maxTimestampSec;
            var1 = var15.duration;
            var3 = undefined;
            var8 = var5.bind(var3)(var2, var1);
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 27;
            var5 = var10[var1];
            var13 = var2.bind(var3)(var5);
            var12 = var13.trackQuestEvent;
            var11 = {};
            var11['questId'] = var9;
            var5 = _closure1_slot28;
            var14 = var5.QUEST_VIDEO_PROGRESSED;
            var11['event'] = var14;
            var14 = {};
            var14['progress'] = var8;
            var15 = var15.maxTimestampSec;
            var14['video_timestamp_seconds'] = var15;
            var14['video_session_id'] = var7;
            var11['properties'] = var14;
            var11['sourceQuestContent'] = var4;
            var11 = var12.bind(var13)(var11);
            var1 = var10[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.trackQuestEvent;
            var1 = {};
            var1['questId'] = var9;
            var5 = var5.QUEST_VIDEO_MODAL_CLOSED;
            var1['event'] = var5;
            var5 = {};
            var5['video_progress'] = var8;
            var5['video_session_id'] = var7;
            var7 = _closure1_slot8;
            var6 = var7.getEffectiveConnectionSpeed;
            var6 = var6.bind(var7)();
            var5['network_connection_speed'] = var6;
            var1['properties'] = var5;
            var1['sourceQuestContent'] = var4;
            var1 = var2.bind(var3)(var1);
case 236:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleVideoQuestModalClose'] = var4;
    var4 = function isShareableQuest(arg1) {
        var1 = arg1;
        var2 = var1.sharePolicy;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 39;
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
        _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
            var8 = arg2;
            var2 = null;
            var1 = arg1;
            var1 = var2 != var1;
            if(!var1) { _fun0074_ip = 240; continue _fun0074 }
case 37:
            var1 = var2 != var8;
case 240:
            if(!var1) { _fun0074_ip = 71; continue _fun0074 }
case 66:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 40;
            var4 = var4[var3];
            var3 = undefined;
            var7 = var5.bind(var3)(var4);
            var6 = var7.canWatchStream;
            var12 = _closure1_slot10;
            var11 = _closure1_slot7;
            var10 = _closure1_slot9;
            var9 = _closure1_slot5;
            var14 = var7;
            var13 = var8;
            var3 = var14[var6](var13, var12, var11, var10, var9, var8);
            var2 = 0;
            var1 = var3[var2];
case 71:
            return var1;
        }
    };
    var3['isStreamingAndCanWatch'] = var4;
    var4 = function getSortMethodText(arg1) {
        _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot17;
            var2 = var2.SUGGESTED;
            if(!(var2 !== var3)) { _fun0075_ip = 49; continue _fun0075 }
case 31:
            var2 = _closure1_slot17;
            var2 = var2.MOST_RECENT;
            if(!(var2 !== var3)) { _fun0075_ip = 227; continue _fun0075 }
case 55:
            var2 = _closure1_slot17;
            var2 = var2.EXPIRING_SOON;
            if(!(var2 !== var3)) { _fun0075_ip = 237; continue _fun0075 }
case 81:
            var2 = _closure1_slot17;
            var2 = var2.RECENTLY_ENROLLED;
            if(!(var2 !== var3)) { _fun0075_ip = 65; continue _fun0075 }
case 153:
            var2 = undefined;
            return var2;
case 65:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.BB+2tX;
            var2 = var3.bind(var4)(var2);
            return var2;
case 237:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.IB22n3;
            var2 = var3.bind(var4)(var2);
            return var2;
case 227:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.K6oEu2;
            var2 = var3.bind(var4)(var2);
            return var2;
case 49:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 19;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.gBfXPZ;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getSortMethodText'] = var4;
    var4 = function getFilterTypeText(arg1) {
        _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot20;
            var2 = var2.VIRTUAL_CURRENCY;
            if(!(var2 !== var3)) { _fun0076_ip = 241; continue _fun0076 }
case 31:
            var2 = _closure1_slot20;
            var2 = var2.COLLECTIBLE;
            if(!(var2 !== var3)) { _fun0076_ip = 242; continue _fun0076 }
case 55:
            var2 = _closure1_slot20;
            var2 = var2.IN_GAME;
            if(!(var2 !== var3)) { _fun0076_ip = 234; continue _fun0076 }
case 243:
            var2 = _closure1_slot21;
            var2 = var2.VIDEO;
            if(!(var2 !== var3)) { _fun0076_ip = 127; continue _fun0076 }
case 164:
            var2 = _closure1_slot21;
            var2 = var2.PLAY;
            if(!(var2 !== var3)) { _fun0076_ip = 105; continue _fun0076 }
case 71:
            var2 = undefined;
            return var2;
case 105:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.1nJR4p;
            var2 = var3.bind(var4)(var2);
            return var2;
case 127:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.e0iISA;
            var2 = var3.bind(var4)(var2);
            return var2;
case 234:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.O/J2kr;
            var2 = var3.bind(var4)(var2);
            return var2;
case 242:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Jg17Ut;
            var2 = var3.bind(var4)(var2);
            return var2;
case 241:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 19;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ElYQFS;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getFilterTypeText'] = var4;
    var2 = function getFilterGroupHeadingText(arg1) {
        _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
            var2 = arg1;
            var1 = 'reward';
            if(!(var1 !== var2)) { _fun0077_ip = 77; continue _fun0077 }
case 244:
            var1 = 'task';
            if(!(var1 !== var2)) { _fun0077_ip = 31; continue _fun0077 }
case 240:
            var1 = undefined;
            return var1;
case 31:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 19;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.Hufmss;
            var1 = var2.bind(var3)(var1);
            return var1;
case 77:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 19;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.vjLqAU;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getFilterGroupHeadingText'] = var2;
    return var1;
})();