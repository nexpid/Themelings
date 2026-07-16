// app/actions/ChannelSettingsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var16;
    var12 = function init(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_SETTINGS_INIT';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['location'] = var5;
        var5 = arg3;
        var2['subsection'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot8 = var12;
    var11 = function open(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.getRootNavigationRef;
            var5 = var2.bind(var4)();
            var4 = null;
            if(!(var4 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.isReady;
            var2 = var2.bind(var5)();
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var8 = _closure1_slot8;
            var7 = arg2;
            var2 = arg3;
            var2 = var8.bind(var1)(var6, var7, var2);
            var7 = _closure1_slot4;
            var2 = var7.getSection;
            var2 = var2.bind(var7)();
            if(!(var4 == var2)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = _closure1_slot7;
            var2 = var3.OVERVIEW;
case 5:
            var4 = var5.navigate;
            var3 = {};
            var3['channelId'] = var6;
            var3['initialRouteName'] = var2;
            var2 = 'channel-settings-action-creators-open';
            var3['source'] = var2;
            var2 = 'sidebar';
            var2 = var4.bind(var5)(var2, var3);
case 2:
            return var1;
        }
    };
    var10 = function close() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_SETTINGS_CLOSE';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot9 = var10;
    var9 = function setSection(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_SETTINGS_SET_SECTION';
        var2['type'] = var5;
        var5 = arg1;
        var2['section'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var8 = function selectPermissionOverwrite(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANNEL_SETTINGS_OVERWRITE_SELECT';
        var2['type'] = var5;
        var5 = arg1;
        var2['overwriteId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7 = function updateChannel(arg1) {
        var1 = arg1;
        var27 = var1.name;
        var26 = var1.type;
        var25 = var1.topic;
        var24 = var1.bitrate;
        var23 = var1.userLimit;
        var22 = var1.nsfw;
        var21 = var1.flags;
        var20 = var1.rateLimitPerUser;
        var19 = var1.defaultThreadRateLimitPerUser;
        var18 = var1.defaultAutoArchiveDuration;
        var17 = var1.template;
        var16 = var1.defaultReactionEmoji;
        var15 = var1.rtcRegion;
        var14 = var1.videoQualityMode;
        var13 = var1.autoArchiveDuration;
        var12 = var1.locked;
        var11 = var1.invitable;
        var10 = var1.availableTags;
        var9 = var1.defaultSortOrder;
        var8 = var1.defaultForumLayout;
        var7 = var1.defaultTagSetting;
        var6 = var1.iconEmoji;
        var5 = var1.themeColor;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var28 = 'CHANNEL_SETTINGS_UPDATE';
        var2['type'] = var28;
        var2['name'] = var27;
        var2['channelType'] = var26;
        var2['topic'] = var25;
        var2['bitrate'] = var24;
        var2['userLimit'] = var23;
        var2['nsfw'] = var22;
        var2['flags'] = var21;
        var2['rateLimitPerUser'] = var20;
        var2['defaultThreadRateLimitPerUser'] = var19;
        var2['defaultAutoArchiveDuration'] = var18;
        var2['template'] = var17;
        var2['defaultReactionEmoji'] = var16;
        var2['rtcRegion'] = var15;
        var2['videoQualityMode'] = var14;
        var2['autoArchiveDuration'] = var13;
        var2['locked'] = var12;
        var2['invitable'] = var11;
        var2['availableTags'] = var10;
        var2['defaultSortOrder'] = var9;
        var2['defaultForumLayout'] = var8;
        var2['defaultTagSetting'] = var7;
        var2['iconEmoji'] = var6;
        var2['themeColor'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var6 = function saveChannel() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _saveChannel() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var38 = arg1;
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var _closure4_slot0 = var38;
                    var36 = var2.name;
                    var35 = var2.type;
                    var34 = var2.position;
                    var33 = var2.topic;
                    var32 = var2.bitrate;
                    var31 = var2.userLimit;
                    var30 = var2.nsfw;
                    var29 = var2.flags;
                    var28 = var2.permissionOverwrites;
                    var27 = var2.rateLimitPerUser;
                    var26 = var2.defaultThreadRateLimitPerUser;
                    var25 = var2.defaultAutoArchiveDuration;
                    var24 = var2.template;
                    var22 = var2.defaultReactionEmoji;
                    var23 = var2.rtcRegion;
                    var20 = var2.videoQualityMode;
                    var19 = var2.autoArchiveDuration;
                    var18 = var2.locked;
                    var14 = var2.invitable;
                    var21 = var2.availableTags;
                    var17 = var2.defaultSortOrder;
                    var16 = var2.defaultForumLayout;
                    var13 = var2.defaultTagSetting;
                    var15 = var2.iconEmoji;
                    var12 = var2.themeColor;
                    var10 = undefined;
                    var _closure4_slot1 = var10;
                    SaveGenerator(address=178);
case 9:
                    return var10;
case 10:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var5 = _closure1_slot5;
                    var3 = var5.getChannel;
                    var3 = var3.bind(var5)(var38);
                    _closure4_slot1 = var3;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var9 = var5.bind(var10)(var3);
                    var7 = var9.dispatch;
                    var3 = {};
                    var11 = 'CHANNEL_SETTINGS_SUBMIT';
                    var3['type'] = var11;
                    var3 = var7.bind(var9)(var3);
                    var3 = 6;
                    var3 = var6[var3];
                    var5 = var5.bind(var10)(var3);
                    var3 = var5.unarchiveThreadIfNecessary;
                    var3 = var3.bind(var5)(var38);
                    SaveGenerator(address=277);
case 13:
                    return var3;
case 14:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var11 = 7;
                    var5 = var5[var11];
                    var5 = var6.bind(var10)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.patch;
                    var5 = {};
                    var37 = _closure1_slot6;
                    var9 = var37.CHANNEL;
                    var9 = var9.bind(var37)(var38);
                    var5['url'] = var9;
                    var9 = {};
                    var9['name'] = var36;
                    var9['type'] = var35;
                    var9['position'] = var34;
                    var9['topic'] = var33;
                    var9['bitrate'] = var32;
                    var9['user_limit'] = var31;
                    var9['nsfw'] = var30;
                    var9['flags'] = var29;
                    var9['permission_overwrites'] = var28;
                    var9['rate_limit_per_user'] = var27;
                    var9['default_thread_rate_limit_per_user'] = var26;
                    var9['default_auto_archive_duration'] = var25;
                    var9['template'] = var24;
                    var9['rtc_region'] = var23;
                    var9['video_quality_mode'] = var20;
                    var9['auto_archive_duration'] = var19;
                    var9['locked'] = var18;
                    var9['invitable'] = var14;
                    var14 = null;
                    if(!(var14 == var22)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var18 = undefined;
                    if(!(var14 === var22)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var18 = null;
case 19:
                    _fun0002_ip = 21; continue _fun0002;
case 17:
                    var19 = {};
                    var23 = var14 == var22;
                    var20 = undefined;
                    if(var23) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var20 = var22.emojiId;
case 22:
                    var19['emoji_id'] = var20;
                    var23 = var14 == var22;
                    var20 = undefined;
                    if(var23) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var20 = var22.emojiName;
case 24:
                    var19['emoji_name'] = var20;
                    var18 = var19;
case 21:
                    var9['default_reaction_emoji'] = var18;
                    var19 = var14 == var21;
                    var18 = undefined;
                    if(var19) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var20 = var21.map;
                    var19 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.id;
                        var1['id'] = var3;
                        var3 = var2.name;
                        var1['name'] = var3;
                        var3 = var2.emojiId;
                        var1['emoji_id'] = var3;
                        var3 = var2.emojiName;
                        var1['emoji_name'] = var3;
                        var2 = var2.moderated;
                        var1['moderated'] = var2;
                        return var1;
                    };
                    var18 = var20.bind(var21)(var19);
case 26:
                    var9['available_tags'] = var18;
                    var9['default_sort_order'] = var17;
                    var9['default_forum_layout'] = var16;
                    var9['default_tag_setting'] = var13;
                    if(!(var14 == var15)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var13 = undefined;
                    if(!(var14 === var15)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var13 = null;
case 30:
                    _fun0002_ip = 32; continue _fun0002;
case 28:
                    var14 = {};
                    var16 = var15.id;
                    var14['id'] = var16;
                    var15 = var15.name;
                    var14['name'] = var15;
                    var13 = var14;
case 32:
                    var9['icon_emoji'] = var13;
                    var9['theme_color'] = var12;
                    var5['body'] = var9;
                    var9 = true;
                    var5['oldFormErrors'] = var9;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var11];
                    var9 = var9.bind(var10)(var8);
                    var8 = var9.rejectWithMigratedError;
                    var8 = var8.bind(var9)();
                    var5['rejectWithError'] = var8;
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.then;
                    var5 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 4;
                            var2 = var4[var2];
                            var4 = undefined;
                            var5 = var3.bind(var4)(var2);
                            var3 = var5.dispatch;
                            var2 = {};
                            var6 = 'CHANNEL_SETTINGS_SUBMIT_SUCCESS';
                            var2['type'] = var6;
                            var7 = _closure4_slot0;
                            var2['channelId'] = var7;
                            var2 = var3.bind(var5)(var2);
                            var2 = _closure4_slot1;
                            var7 = null;
                            var2 = var7 == var2;
                            var3 = undefined;
                            if(var2) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                            var5 = _closure4_slot1;
                            var2 = var5.getGuildId;
                            var3 = var2.bind(var5)();
case 33:
                            var2 = var7 == var3;
                            if(var2) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                            var5 = _closure4_slot1;
                            var5 = var7 != var5;
                            if(!var5) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                            var7 = _closure4_slot1;
                            var6 = var7.isThread;
                            var5 = var6.bind(var7)();
case 37:
                            var2 = var5;
case 35:
                            if(var2) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 8;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.checkGuildTemplateDirty;
                            var1 = var1.bind(var2)(var3);
case 39:
                            var1 = arg1;
                            return var1;
                        }
                    };
                    var4 = function(arg1) {
                        var1 = arg1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 4;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'CHANNEL_SETTINGS_SUBMIT_FAILURE';
                        var2['type'] = var5;
                        var5 = var1.body;
                        var2['errors'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var6.bind(var7)(var5, var4);
                    return var4;
case 15:
                    return var3;
case 11:
                    return var2;
case 7:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var5 = function deleteChannel() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _deleteChannel() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var9 = var2.bind(var3)(var10);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.del;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var8 = _closure1_slot6;
                    var7 = var8.CHANNEL;
                    var7 = var7.bind(var8)(var10);
                    var2['url'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=103);
case 43:
                    return var2;
case 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                    var6 = null;
                    var5 = var6 == var9;
                    var7 = undefined;
                    if(var5) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var5 = var9.getGuildId;
                    var7 = var5.bind(var9)();
case 47:
                    var5 = var6 == var7;
                    if(var5) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                    var6 = var6 != var9;
                    if(!var6) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    var8 = var9.isThread;
                    var6 = var8.bind(var9)();
case 51:
                    var5 = var6;
case 49:
                    if(var5) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 8;
                    var5 = var8[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.checkGuildTemplateDirty;
                    var5 = var5.bind(var6)(var7);
case 53:
                    var4 = _closure1_slot9;
                    var4 = var4.bind(var3)();
                    return var3;
case 45:
                    return var2;
case 41:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var4 = function updateVoiceChannelStatus(arg1, arg2) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 7;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.put;
        var1 = {};
        var10 = _closure1_slot6;
        var9 = var10.UPDATE_VOICE_CHANNEL_STATUS;
        var8 = arg1;
        var8 = var9.bind(var10)(var8);
        var1['url'] = var8;
        var8 = {};
        var9 = arg2;
        var8['status'] = var9;
        var1['body'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2 = function removeLinkedLobby(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var6 = _closure1_slot6;
        var5 = var6.CHANNEL_LINKED_LOBBY;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1 = global;
    var19 = var1.Object;
    var18 = var19.defineProperty;
    var13 = {};
    var1 = true;
    var13['value'] = var1;
    var1 = '__esModule';
    var1 = var18.bind(var19)(var3, var1, var13);
    var1 = 0;
    var13 = var16[var1];
    var1 = undefined;
    var13 = var17.bind(var1)(var13);
    var _closure1_slot3 = var13;
    var13 = 1;
    var13 = var16[var13];
    var13 = var17.bind(var1)(var13);
    var _closure1_slot4 = var13;
    var13 = 2;
    var13 = var16[var13];
    var13 = var17.bind(var1)(var13);
    var _closure1_slot5 = var13;
    var13 = 3;
    var13 = var16[var13];
    var13 = var15.bind(var1)(var13);
    var17 = var13.Endpoints;
    var _closure1_slot6 = var17;
    var17 = var13.Layers;
    var13 = var13.ChannelSettingsSections;
    var _closure1_slot7 = var13;
    var13 = {};
    var13['init'] = var12;
    var13['open'] = var11;
    var13['close'] = var10;
    var13['setSection'] = var9;
    var13['selectPermissionOverwrite'] = var8;
    var13['updateChannel'] = var7;
    var13['saveChannel'] = var6;
    var13['deleteChannel'] = var5;
    var13['updateVoiceChannelStatus'] = var4;
    var13['removeLinkedLobby'] = var2;
    var14 = 9;
    var14 = var16[var14];
    var16 = var15.bind(var1)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'actions/ChannelSettingsActionCreators.tsx';
    var14 = var15.bind(var16)(var14);
    var3['default'] = var13;
    var3['init'] = var12;
    var3['open'] = var11;
    var3['close'] = var10;
    var3['setSection'] = var9;
    var3['selectPermissionOverwrite'] = var8;
    var3['updateChannel'] = var7;
    var3['saveChannel'] = var6;
    var3['deleteChannel'] = var5;
    var3['updateVoiceChannelStatus'] = var4;
    var3['removeLinkedLobby'] = var2;
    return var1;
})();