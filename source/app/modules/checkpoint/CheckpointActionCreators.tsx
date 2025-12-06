// app/modules/checkpoint/CheckpointActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _fetchCheckpointData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = undefined;
                    if(!(var7 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = false;
case 4:
                    var32 = undefined;
                    var33 = undefined;
                    var29 = undefined;
                    var30 = undefined;
                    var26 = undefined;
                    var27 = undefined;
                    var23 = undefined;
                    var24 = undefined;
                    var28 = undefined;
                    var21 = undefined;
                    var22 = undefined;
                    var20 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var18 = undefined;
                    var17 = undefined;
                    var14 = undefined;
                    SaveGenerator(address=61);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 14;
                    var8 = var8[var6];
                    var10 = var9.bind(var3)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'CHECKPOINT_FETCH_START';
                    var8['type'] = var11;
                    var8 = var9.bind(var10)(var8);
                    if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 15;
                    var7 = var9[var7];
                    var7 = var8.bind(var3)(var7);
                    var9 = var7.HTTP;
                    var8 = var9.get;
                    var7 = {'url': '/checkpoint', 'rejectWithError': true};
                    var7 = var8.bind(var9)(var7);
                    SaveGenerator(address=174);
case 12:
                    return var7;
case 13:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var8 = var7.body;
                    var25 = var8.card_id;
                    var19 = var8.power_level;
                    var13 = var8.power_level_percentile;
                    var12 = var8.messages;
                    var28 = var12;
                    var21 = var8.emojis;
                    var22 = var8.voice;
                    var20 = var8.guilds;
                    var15 = var8.users;
                    var16 = var8.sidekick;
                    var18 = var8.applications;
                    var17 = var8.quests;
                    var14 = var8.avatar_decoration;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var6];
                    var10 = var9.bind(var3)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'CHECKPOINT_FETCH_SUCCESS';
                    var8['type'] = var11;
                    var11 = {};
                    var11['cardId'] = var25;
                    var11['powerLevel'] = var19;
                    var11['powerLevelPercentile'] = var13;
                    var13 = null;
                    var19 = var13 != var12;
                    var12 = undefined;
                    if(!var19) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var19 = {};
                    var31 = var28;
                    var25 = var31.num_messages_sent;
                    var19['numMessagesSent'] = var25;
                    var25 = var31.num_messages_sent_percentile;
                    var19['numMessagesSentPercentile'] = var25;
                    var25 = {};
                    var31 = var31.top_month;
                    var33 = var31;
                    var34 = var13 == var31;
                    var31 = undefined;
                    if(var34) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var31 = var33.month;
case 18:
                    var32 = var31;
                    var33 = var13 != var31;
                    var31 = 1;
                    if(!var33) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var31 = var32;
case 20:
                    var25['month'] = var31;
                    var28 = var28.top_month;
                    var30 = var28;
                    var31 = var13 == var28;
                    var28 = undefined;
                    if(var31) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var28 = var30.num_messages_sent;
case 22:
                    var29 = var28;
                    var30 = var13 != var28;
                    var28 = 0;
                    if(!var30) { _fun0001_ip = 24; continue _fun0001 }
case 25:
                    var28 = var29;
case 24:
                    var25['numMessagesSent'] = var28;
                    var19['topMonth'] = var25;
                    var12 = var19;
case 16:
                    var11['messages'] = var12;
                    var12 = var21;
                    var19 = var13 != var12;
                    var12 = undefined;
                    if(!var19) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var19 = {};
                    var29 = var21.emojis;
                    var28 = var29.map;
                    var25 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var2 = arg1;
                            var1 = {};
                            var8 = var1;
                            var7 = var2;
                            var3 = copyDataProperties(var8, var7);
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 16;
                            var4 = var4[var3];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.isProbablyAValidSnowflake;
                            var4 = var2.id;
                            var4 = var5.bind(var6)(var4);
                            if(!var4) { _fun0002_ip = 28; continue _fun0002 }
case 6:
                            var3 = var2.id;
case 28:
                            var2 = 'id';
                            var1[var2] = var3;
                            return var1;
                        }
                    };
                    var25 = var28.bind(var29)(var25);
                    var19['emojis'] = var25;
                    var21 = var21.num_emojis_sent;
                    var19['numEmojisSent'] = var21;
                    var12 = var19;
case 26:
                    var11['emojis'] = var12;
                    var12 = var22;
                    var19 = var13 != var12;
                    var12 = undefined;
                    if(!var19) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                    var19 = {};
                    var25 = var22;
                    var21 = var25.total_voice_minutes;
                    var19['totalVoiceMinutes'] = var21;
                    var21 = var25.total_voice_minutes_percentile;
                    var19['totalVoiceMinutesPercentile'] = var21;
                    var21 = {};
                    var25 = var25.top_month;
                    var27 = var25;
                    var28 = var13 == var25;
                    var25 = undefined;
                    if(var28) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                    var25 = var27.month;
case 31:
                    var26 = var25;
                    var27 = var13 != var25;
                    var25 = 1;
                    if(!var27) { _fun0001_ip = 33; continue _fun0001 }
case 34:
                    var25 = var26;
case 33:
                    var21['month'] = var25;
                    var22 = var22.top_month;
                    var24 = var22;
                    var25 = var13 == var22;
                    var22 = undefined;
                    if(var25) { _fun0001_ip = 35; continue _fun0001 }
case 36:
                    var22 = var24.num_minutes_in_voice;
case 35:
                    var23 = var22;
                    var24 = var13 != var22;
                    var22 = 0;
                    if(!var24) { _fun0001_ip = 37; continue _fun0001 }
case 38:
                    var22 = var23;
case 37:
                    var21['numMinutesInVoice'] = var22;
                    var19['topMonth'] = var21;
                    var12 = var19;
case 29:
                    var11['voice'] = var12;
                    var12 = var20;
                    var19 = var13 != var12;
                    var12 = undefined;
                    if(!var19) { _fun0001_ip = 39; continue _fun0001 }
case 40:
                    var19 = {};
                    var23 = var20.guilds;
                    var22 = var23.map;
                    var21 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.num_messages_sent;
                        var1['numMessagesSent'] = var3;
                        var3 = var2.num_voice_minutes;
                        var1['numVoiceMinutes'] = var3;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 13;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.fromServer;
                        var3 = var2.guild;
                        var7 = _closure1_slot11;
                        var6 = var7.getGuild;
                        var2 = var2.guild;
                        var2 = var2.id;
                        var2 = var6.bind(var7)(var2);
                        var2 = var4.bind(var5)(var3, var2);
                        var1['guild'] = var2;
                        return var1;
                    };
                    var21 = var22.bind(var23)(var21);
                    var19['guilds'] = var21;
                    var20 = var20.num_guilds_joined;
                    var19['numGuildsJoined'] = var20;
                    var12 = var19;
case 39:
                    var11['guilds'] = var12;
                    var12 = var15;
                    var19 = var13 != var12;
                    var12 = undefined;
                    if(!var19) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                    var20 = var15;
                    var19 = var20.map;
                    var15 = function(arg1) {
                        var1 = arg1;
                        var4 = var1.user;
                        var1 = _closure1_slot7;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var5 = var2;
                        var1 = new var5[var1](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var12 = var19.bind(var20)(var15);
case 41:
                    var11['users'] = var12;
                    var12 = var18;
                    var15 = var13 != var12;
                    var12 = undefined;
                    if(!var15) { _fun0001_ip = 43; continue _fun0001 }
case 44:
                    var15 = {};
                    var21 = var18.applications;
                    var20 = var21.map;
                    var19 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = {};
                        var6 = _closure1_slot9;
                        var5 = var2.game;
                        var4 = undefined;
                        var7 = var6.bind(var4)(var5);
                        var8 = var3;
                        var4 = copyDataProperties(var8, var7);
                        var4 = var2.game;
                        var5 = var4.cover_image_hash;
                        var4 = 'coverImageHash';
                        var3[var4] = var5;
                        var1['game'] = var3;
                        var2 = var2.num_sessions;
                        var1['numDaysPlayed'] = var2;
                        return var1;
                    };
                    var19 = var20.bind(var21)(var19);
                    var15['applications'] = var19;
                    var18 = var18.total_games_played;
                    var15['totalGamesPlayed'] = var18;
                    var12 = var15;
case 43:
                    var11['applications'] = var12;
                    var12 = var17;
                    var15 = var13 != var12;
                    var12 = undefined;
                    if(!var15) { _fun0001_ip = 45; continue _fun0001 }
case 46:
                    var15 = {};
                    var18 = var17.num_completed;
                    var15['numCompleted'] = var18;
                    var17 = var17.num_orbs;
                    var15['numOrbs'] = var17;
                    var12 = var15;
case 45:
                    var11['quests'] = var12;
                    var12 = var16;
                    var15 = var13 != var12;
                    var12 = undefined;
                    if(!var15) { _fun0001_ip = 47; continue _fun0001 }
case 48:
                    var15 = {};
                    var17 = var16.num_messages_sent;
                    var15['numMessagesSent'] = var17;
                    var17 = var16.num_voice_minutes;
                    var15['numVoiceMinutes'] = var17;
                    var18 = _closure1_slot7;
                    var35 = var16.user;
                    var17 = var18.prototype;
                    var17 = Object.create(var17, {constructor: {value: var18}});
                    var36 = var17;
                    var16 = new var36[var18](var35, var34);
                    var16 = var16 instanceof Object ? var16 : var17;
                    var15['user'] = var16;
                    var12 = var15;
case 47:
                    var11['sidekick'] = var12;
                    var12 = var14;
                    var13 = var13 != var12;
                    var12 = undefined;
                    if(!var13) { _fun0001_ip = 49; continue _fun0001 }
case 50:
                    var13 = {};
                    var15 = var14.type;
                    var13['type'] = var15;
                    var15 = var14.asset;
                    var13['asset'] = var15;
                    var15 = var14.label;
                    var13['label'] = var15;
                    var14 = var14.sku_id;
                    var13['skuId'] = var14;
                    var12 = var13;
case 49:
                    var11['avatarDecoration'] = var12;
                    var8['data'] = var11;
                    var8 = var9.bind(var10)(var8);
case 51: // try_end0
                    _fun0001_ip = 52; continue _fun0001;
case 14:
                    return var7;
case 53: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var6];
                    var9 = var8.bind(var3)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var10 = 'CHECKPOINT_FETCH_FAILED';
                    var7['type'] = var10;
                    var7 = var8.bind(var9)(var7);
                    _fun0001_ip = 52; continue _fun0001;
case 10:
                    var5 = function _getFakeData() {
                        var4 = _closure1_slot6;
                        var3 = var4.getUserAffinities;
                        var4 = var3.bind(var4)();
                        var3 = var4.slice;
                        var7 = 0;
                        var9 = 4;
                        var5 = var3.bind(var4)(var7, var9);
                        var4 = var5.map;
                        var3 = function(arg1) {
                            var3 = _closure1_slot12;
                            var2 = var3.getUser;
                            var1 = arg1;
                            var1 = var1.otherUserId;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.filter;
                        var3 = function(arg1) {
                            var2 = null;
                            var1 = arg1;
                            var1 = var2 != var1;
                            return var1;
                        };
                        var6 = var4.bind(var5)(var3);
                        var3 = _closure1_slot10;
                        var5 = var3.affinities;
                        var4 = var5.slice;
                        var3 = 3;
                        var5 = var4.bind(var5)(var7, var3);
                        var4 = var5.map;
                        var3 = function(arg1) {
                            var4 = _closure1_slot11;
                            var3 = var4.getGuild;
                            var1 = arg1;
                            var1 = var1.guildId;
                            var5 = var3.bind(var4)(var1);
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 12;
                            var1 = var6[var1];
                            var4 = undefined;
                            var7 = var3.bind(var4)(var1);
                            var1 = null;
                            var3 = var1 != var5;
                            var1 = 'Guild must exist';
                            var1 = var7.bind(var4)(var3, var1);
                            var1 = {'guild': null, 'numMessagesSent': 10382504, 'numVoiceMinutes': 409516.21576666617};
                            var3 = _closure1_slot0;
                            var2 = 13;
                            var2 = var6[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.fromGuildBasic;
                            var2 = {};
                            var10 = var2;
                            var9 = var5;
                            var6 = copyDataProperties(var10, var9);
                            var9 = var5.features;
                            var6 = new Array(0);
                            var8 = 0;
                            var10 = var6;
                            var5 = arraySpread(var10, var9, var8);
                            var5 = 'features';
                            var2[var5] = var6;
                            var2 = var3.bind(var4)(var2);
                            var1['guild'] = var2;
                            return var1;
                        };
                        var5 = var4.bind(var5)(var3);
                        var3 = _closure1_slot5;
                        var3 = var3.emojiFrecencyWithoutFetchingLatest;
                        var4 = var3.frequently;
                        var3 = var4.slice;
                        var8 = 5;
                        var10 = var3.bind(var4)(var7, var8);
                        var4 = var10.map;
                        var3 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var2 = arg1;
                                var1 = {};
                                var3 = var2.id;
                                var1['id'] = var3;
                                var3 = 'surrogates';
                                var3 = var3 in var2;
                                if(var3) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                                var3 = var2.name;
                                _fun0003_ip = 56; continue _fun0003;
case 54:
                                var3 = var2.surrogates;
case 56:
                                var1['name'] = var3;
                                var2 = var2.animated;
                                var1['animated'] = var2;
                                return var1;
                            }
                        };
                        var4 = var4.bind(var10)(var3);
                        var3 = _closure1_slot4;
                        var2 = var3._getAllApplications;
                        var3 = var2.bind(var3)();
                        var2 = var3.slice;
                        var3 = var2.bind(var3)(var7, var8);
                        var2 = var3.map;
                        var1 = function(arg1) {
                            var3 = arg1;
                            var1 = {};
                            var2 = {};
                            var4 = var3.id;
                            var2['id'] = var4;
                            var4 = var3.name;
                            var2['name'] = var4;
                            var4 = var3.icon;
                            var2['icon'] = var4;
                            var3 = var3.coverImage;
                            var2['coverImageHash'] = var3;
                            var1['game'] = var2;
                            var2 = 289;
                            var1['numDaysPlayed'] = var2;
                            return var1;
                        };
                        var3 = var2.bind(var3)(var1);
                        var1 = {'cardId': 1, 'powerLevel': 10400246, 'powerLevelPercentile': 5};
                        var8 = 1;
                        var2 = {'numMessagesSent': 10400246, 'numMessagesSentPercentile': 99.99};
                        var10 = {'month': 8, 'numMessagesSent': 10400246};
                        var2['topMonth'] = var10;
                        var1['messages'] = var2;
                        var2 = {'totalVoiceMinutes': 2741198.975133333, 'totalVoiceMinutesPercentile': 99.99};
                        var10 = {'numMinutesInVoice': 2741198.975133333, 'month': 8};
                        var2['topMonth'] = var10;
                        var1['voice'] = var2;
                        var2 = {'numCompleted': 164, 'numOrbs': 122690};
                        var1['quests'] = var2;
                        var2 = var6.slice;
                        var2 = var2.bind(var6)(var8, var9);
                        var1['users'] = var2;
                        var2 = {'user': null, 'numMessagesSent': 10400246, 'numVoiceMinutes': 2741198.975133333};
                        var6 = var6[var7];
                        var2['user'] = var6;
                        var1['sidekick'] = var2;
                        var2 = {};
                        var2['guilds'] = var5;
                        var5 = 203;
                        var2['numGuildsJoined'] = var5;
                        var1['guilds'] = var2;
                        var2 = {};
                        var2['emojis'] = var4;
                        var4 = 557927580;
                        var2['numEmojisSent'] = var4;
                        var1['emojis'] = var2;
                        var2 = {};
                        var2['applications'] = var3;
                        var3 = 4278;
                        var2['totalGamesPlayed'] = var3;
                        var1['applications'] = var2;
                        return var1;
                    };
                    var5 = var5.bind(var3)();
                    var11 = var5.users;
                    var12 = var5.guilds;
                    var14 = var5.emojis;
                    var10 = var5.applications;
                    var18 = var5.cardId;
                    var17 = var5.powerLevel;
                    var16 = var5.powerLevelPercentile;
                    var15 = var5.messages;
                    var13 = var5.voice;
                    var8 = var5.sidekick;
                    var9 = var5.quests;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'CHECKPOINT_FETCH_SUCCESS';
                    var4['type'] = var7;
                    var7 = {};
                    var7['cardId'] = var18;
                    var7['powerLevel'] = var17;
                    var7['powerLevelPercentile'] = var16;
                    var7['messages'] = var15;
                    var7['emojis'] = var14;
                    var7['voice'] = var13;
                    var7['guilds'] = var12;
                    var7['users'] = var11;
                    var7['applications'] = var10;
                    var7['quests'] = var9;
                    var7['sidekick'] = var8;
                    var4['data'] = var7;
                    var4 = var5.bind(var6)(var4);
case 52:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _sendSidekickMessage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    var14 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                    var _closure4_slot0 = var11;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 21;
                    var2 = var6[var2];
                    var6 = undefined;
                    var7 = var3.bind(var6)(var2);
                    var3 = var7.openPrivateChannel;
                    var2 = {'recipientIds': null, 'location': 'checkpoint-sidekick', 'navigateToChannel': false};
                    var2['recipientIds'] = var14;
                    var9 = 'checkpoint-sidekick';
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=88);
case 59:
                    return var2;
case 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                    var7 = _closure1_slot8;
                    var3 = var7.getChannel;
                    var3 = var3.bind(var7)(var2);
                    var7 = null;
                    if(!(var7 != var3)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
                    var7 = _closure1_slot13;
                    var10 = var7.bind(var6)();
                    var7 = var10.findIndex;
                    var5 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.trim;
                        var2 = var1.bind(var2)();
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var15 = var7.bind(var10)(var5);
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 22;
                    var7 = var10[var7];
                    var13 = var5.bind(var6)(var7);
                    var12 = var13.track;
                    var4 = _closure1_slot14;
                    var7 = var4.CHECKPOINT_SIDEKICK_MESSAGE_SENT;
                    var4 = {};
                    var4['other_user_id'] = var14;
                    var14 = var15.toString;
                    var14 = var14.bind(var15)();
                    var4['message_variant'] = var14;
                    var4 = var12.bind(var13)(var7, var4);
                    var4 = 19;
                    var4 = var10[var4];
                    var7 = var5.bind(var6)(var4);
                    var4 = var7.parse;
                    var18 = var4.bind(var7)(var3, var11);
                    var4 = 20;
                    var4 = var10[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.sendMessage;
                    var19 = var3.id;
                    var3 = {};
                    var3['location'] = var9;
                    var20 = var6;
                    var17 = false;
                    var16 = var3;
                    var3 = var20[var5](var19, var18, var17, var16, var15);
                    return var3;
case 63:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var19 = 'Failed to open private channel';
                    var20 = var4;
                    var3 = new var20[var5](var19, var18);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 61:
                    return var2;
case 57:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _claimAvatarDecoration() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 65; continue _fun0005 }
case 66: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {'url': '/checkpoint/loot', 'rejectWithError': true};
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=66);
case 28:
                    return var2;
case 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 68; continue _fun0005 }
case 69: // try_end0
                    return var2;
case 68:
                    return var2;
case 70: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = undefined;
                    return var2;
case 65:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.gameFromServer;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.CHECKPOINT_LOVE_LETTER_STRINGS;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot14 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 71; continue _fun0006 }
case 3:
                    var2 = arg2;
                    var2 = var2.withMessage;
                    var _closure4_slot0 = var2;
                    var4 = undefined;
                    SaveGenerator(address=34);
case 54:
                    return var4;
case 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                    var3 = global;
                    var8 = var3.Promise;
                    var7 = var8.all;
                    var9 = var10.map;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 17;
                    var3 = var12[var3];
                    var3 = var11.bind(var4)(var3);
                    var3 = var3.getOrResolveChannelIdFromDestinationId;
                    var3 = var9.bind(var10)(var3);
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=105);
case 75:
                    return var3;
case 76:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0006_ip = 77; continue _fun0006 }
case 78:
                    var7 = var3.filter;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 18;
                    var6 = var9[var6];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.isNotNullish;
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.forEach;
                    var5 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var6 = arg1;
                            var3 = _closure1_slot8;
                            var2 = var3.getChannel;
                            var7 = var2.bind(var3)(var6);
                            var9 = null;
                            if(!(var9 != var7)) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 19;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.parse;
                            var2 = _closure4_slot0;
                            var9 = var9 != var2;
                            var2 = '';
                            if(!var9) { _fun0007_ip = 81; continue _fun0007 }
case 68:
                            var2 = _closure4_slot0;
case 81:
                            var5 = var4.bind(var5)(var7, var2);
                            var2 = new Array(0);
                            var5['components'] = var2;
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 20;
                            var1 = var4[var1];
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.sendMessage;
                            var11 = false;
                            var10 = {'location': 'checkpoint', 'withCheckpoint': true};
                            var14 = var4;
                            var13 = var6;
                            var12 = var5;
                            var1 = var14[var3](var13, var12, var11, var10, var9);
case 79:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 77:
                    return var3;
case 73:
                    return var2;
case 71:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/checkpoint/CheckpointActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function fetchCheckpointData() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchCheckpointData'] = var5;
    var3['sendCheckpointMessage'] = var4;
    var4 = function sendSidekickMessage() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['sendSidekickMessage'] = var4;
    var4 = function claimAvatarDecoration() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['claimAvatarDecoration'] = var4;
    var4 = function setVolume(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHECKPOINT_SET_VOLUME';
        var1['type'] = var4;
        var4 = arg1;
        var1['volume'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['setVolume'] = var4;
    var4 = function toggleMute() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHECKPOINT_TOGGLE_MUTE';
        var1['type'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['toggleMute'] = var4;
    var4 = function setHighestSlideSeen(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHECKPOINT_SET_HIGHEST_SLIDE_SEEN';
        var1['type'] = var4;
        var4 = arg1;
        var1['slide'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['setHighestSlideSeen'] = var4;
    var4 = function afterCheckpointClosed() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHECKPOINT_AFTER_CLOSED';
        var1['type'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['afterCheckpointClosed'] = var4;
    var2 = function markRewatchPopoverAsSeen() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER';
        var1['type'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['markRewatchPopoverAsSeen'] = var2;
    return var1;
})();