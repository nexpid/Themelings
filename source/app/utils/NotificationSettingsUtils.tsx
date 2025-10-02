// app/utils/NotificationSettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var12;
    var1 = function differ(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = 'RETURN_PREVIOUS_WHEN_CHANGED';
        var _closure2_slot2 = var2;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var4 = _closure2_slot2;
                var1 = 'RETURN_PREVIOUS_WHEN_CHANGED';
                if(!(var1 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = undefined;
                return var1;
case 2:
                var1 = _closure2_slot0;
                var5 = var1[var3];
                var1 = _closure2_slot1;
                var4 = var1[var3];
                var1 = undefined;
                if(!(var5 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot0;
                var1 = var2[var3];
case 4:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot15 = var1;
    var6 = function muteConfigToTimestamp(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var3 = var4 != var2;
            var1 = null;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var2.end_time;
            var3 = var4 != var3;
            var1 = null;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var3 = global;
            var4 = var3.Date;
            var5 = var2.end_time;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var3.getTime;
            var1 = var2.bind(var3)();
case 6:
            return var1;
        }
    };
    var _closure1_slot16 = var6;
    var5 = function getCurrentGuildSettings(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot6;
            var1 = var3.isMuted;
            var3 = var1.bind(var3)(var4);
            var5 = _closure1_slot6;
            var1 = var5.getMuteConfig;
            var5 = var1.bind(var5)(var4);
            var1 = {};
            var7 = _closure1_slot6;
            var6 = var7.isSuppressEveryoneEnabled;
            var6 = var6.bind(var7)(var4);
            var1['guild_suppress_everyone'] = var6;
            var7 = _closure1_slot6;
            var6 = var7.isSuppressRolesEnabled;
            var6 = var6.bind(var7)(var4);
            var1['guild_suppress_roles'] = var6;
            var7 = _closure1_slot6;
            var6 = var7.isMuteScheduledEventsEnabled;
            var6 = var6.bind(var7)(var4);
            var1['guild_scheduled_events_muted'] = var6;
            var1['guild_is_muted'] = var3;
            var7 = null;
            var6 = var7 != var5;
            var3 = null;
            if(!var6) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var6 = var5.end_time;
            var6 = var7 != var6;
            var3 = null;
            if(!var6) { _fun0003_ip = 9; continue _fun0003 }
case 11:
            var6 = global;
            var7 = var6.Date;
            var8 = var5.end_time;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var9 = var6;
            var5 = new var9[var7](var8, var7);
            var6 = var5 instanceof Object ? var5 : var6;
            var5 = var6.getTime;
            var3 = var5.bind(var6)();
case 9:
            var1['guild_muted_until'] = var3;
            var5 = _closure1_slot6;
            var3 = var5.isMobilePushEnabled;
            var3 = var3.bind(var5)(var4);
            var1['guild_receive_mobile_push'] = var3;
            var5 = _closure1_slot14;
            var6 = _closure1_slot6;
            var3 = var6.getMessageNotifications;
            var3 = var3.bind(var6)(var4);
            var3 = var5[var3];
            var1['guild_message_notification_settings'] = var3;
            var5 = _closure1_slot6;
            var3 = var5.getNotifyHighlights;
            var3 = var3.bind(var5)(var4);
            var1['guild_notify_highlights'] = var3;
            var3 = _closure1_slot6;
            var2 = var3.getGuildFlags;
            var2 = var2.bind(var3)(var4);
            var1['guild_flags'] = var2;
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var4 = function getCurrentChannelSettings(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var3 = _closure1_slot6;
            var1 = var3.isChannelMuted;
            var3 = var1.bind(var3)(var5, var4);
            var6 = _closure1_slot6;
            var1 = var6.getChannelMuteConfig;
            var6 = var1.bind(var6)(var5, var4);
            var1 = {};
            var1['channel_is_muted'] = var3;
            var8 = null;
            var7 = var8 != var6;
            var3 = null;
            if(!var7) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var7 = var6.end_time;
            var7 = var8 != var7;
            var3 = null;
            if(!var7) { _fun0004_ip = 12; continue _fun0004 }
case 14:
            var7 = global;
            var8 = var7.Date;
            var10 = var6.end_time;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var11 = var7;
            var6 = new var11[var8](var10, var9);
            var7 = var6 instanceof Object ? var6 : var7;
            var6 = var7.getTime;
            var3 = var6.bind(var7)();
case 12:
            var1['channel_muted_until'] = var3;
            var6 = _closure1_slot14;
            var7 = _closure1_slot6;
            var3 = var7.getChannelMessageNotifications;
            var3 = var3.bind(var7)(var5, var4);
            var3 = var6[var3];
            var1['channel_message_notification_settings'] = var3;
            var3 = _closure1_slot6;
            var2 = var3.getChannelIdFlags;
            var2 = var2.bind(var3)(var5, var4);
            var1['channel_flags'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var7 = global;
    var13 = var7.Object;
    var10 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var12[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var12[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var12[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var12[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var12[var8];
    var8 = var11.bind(var1)(var8);
    var9 = var8.AnalyticEvents;
    var _closure1_slot7 = var9;
    var14 = var8.UserNotificationSettings;
    var _closure1_slot8 = var14;
    var8 = 5;
    var8 = var12[var8];
    var8 = var11.bind(var1)(var8);
    var8 = var8.NotificationSettingsUpdateType;
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var12[var8];
    var8 = var11.bind(var1)(var8);
    var8 = var8.UnreadSetting;
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var12[var8];
    var8 = var11.bind(var1)(var8);
    var9 = var8.ChannelNotificationSettingsFlags;
    var _closure1_slot11 = var9;
    var8 = var8.GuildNotificationSettingsFlags;
    var _closure1_slot12 = var8;
    var9 = {};
    var8 = 'enabled forum thread created notifs';
    var9['ForumThreadsCreatedOn'] = var8;
    var8 = 'disabled forum thread created notifs';
    var9['ForumThreadsCreatedOff'] = var8;
    var8 = 'enabled suppress everyone';
    var9['SuppressEveryoneOn'] = var8;
    var8 = 'disabled suppress everyone';
    var9['SuppressEveryoneOff'] = var8;
    var8 = 'enabled suppress roles';
    var9['SuppressRolesOn'] = var8;
    var8 = 'disabled suppress roles';
    var9['SuppressRolesOff'] = var8;
    var8 = 'enabled highlights';
    var9['HighlightsOn'] = var8;
    var8 = 'disabled highlights';
    var9['HighlightsOff'] = var8;
    var8 = 'enabled mobile push notifications';
    var9['MobilePushOn'] = var8;
    var8 = 'disabled mobile push notifications';
    var9['MobilePushOff'] = var8;
    var8 = 'unreads set to all messages';
    var9['UnreadsAll'] = var8;
    var8 = 'unreads set to mentions';
    var9['UnreadsMentions'] = var8;
    var8 = 'unreads set to the default';
    var9['UnreadsDefault'] = var8;
    var8 = 'notifications set to all messages';
    var9['NotificationsAll'] = var8;
    var8 = 'notifications set to mentions';
    var9['NotificationsMentions'] = var8;
    var8 = 'notifications set to nothing';
    var9['NotificationsNothing'] = var8;
    var8 = 'notifications set to the default';
    var9['NotificationsDefault'] = var8;
    var8 = 'notification preset set to all messages';
    var9['PresetAll'] = var8;
    var8 = 'notification preset set to mentions';
    var9['PresetMentions'] = var8;
    var8 = 'notification preset set to nothing';
    var9['PresetNothing'] = var8;
    var8 = 'notification preset set to the default';
    var9['PresetDefault'] = var8;
    var8 = 'opted in to entity';
    var9['OptedIn'] = var8;
    var8 = 'opted out from entity';
    var9['OptedOut'] = var8;
    var8 = 'favorited';
    var9['Favorited'] = var8;
    var8 = 'unfavorited';
    var9['UnFavorited'] = var8;
    var8 = 'muted';
    var9['Muted'] = var8;
    var8 = 'unmuted';
    var9['Unmuted'] = var8;
    var8 = 'muted scheduled events';
    var9['MutedScheduledEvents'] = var8;
    var8 = 'unmuted scheduled events';
    var9['UnmutedScheduledEvents'] = var8;
    var8 = 'channel override created';
    var9['OverrideCreated'] = var8;
    var8 = 'channel override deleted';
    var9['OverrideDeleted'] = var8;
    var8 = 'announcement channels auto set to all messages';
    var9['AnnouncementAutoEnable'] = var8;
    var _closure1_slot13 = var9;
    var8 = {};
    var10 = function forumThreadsCreated(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            if(var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var1 = var2.ForumThreadsCreatedOff;
            _fun0005_ip = 17; continue _fun0005;
case 15:
            var1 = var2.ForumThreadsCreatedOn;
case 17:
            return var1;
        }
    };
    var8['forumThreadsCreated'] = var10;
    var10 = function suppressEveryone(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            if(var1) { _fun0006_ip = 15; continue _fun0006 }
case 16:
            var1 = var2.SuppressEveryoneOff;
            _fun0006_ip = 17; continue _fun0006;
case 15:
            var1 = var2.SuppressEveryoneOn;
case 17:
            return var1;
        }
    };
    var8['suppressEveryone'] = var10;
    var10 = function suppressRoles(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            if(var1) { _fun0007_ip = 15; continue _fun0007 }
case 16:
            var1 = var2.SuppressRolesOff;
            _fun0007_ip = 17; continue _fun0007;
case 15:
            var1 = var2.SuppressRolesOn;
case 17:
            return var1;
        }
    };
    var8['suppressRoles'] = var10;
    var10 = function highlights(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            if(var1) { _fun0008_ip = 15; continue _fun0008 }
case 16:
            var1 = var2.HighlightsOff;
            _fun0008_ip = 17; continue _fun0008;
case 15:
            var1 = var2.HighlightsOn;
case 17:
            return var1;
        }
    };
    var8['highlights'] = var10;
    var10 = function mobilePush(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            if(var1) { _fun0009_ip = 15; continue _fun0009 }
case 16:
            var1 = var2.MobilePushOff;
            _fun0009_ip = 17; continue _fun0009;
case 15:
            var1 = var2.MobilePushOn;
case 17:
            return var1;
        }
    };
    var8['mobilePush'] = var10;
    var10 = function optedIn(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            if(var1) { _fun0010_ip = 15; continue _fun0010 }
case 16:
            var1 = var2.OptedOut;
            _fun0010_ip = 17; continue _fun0010;
case 15:
            var1 = var2.OptedIn;
case 17:
            return var1;
        }
    };
    var8['optedIn'] = var10;
    var10 = function favorited(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            if(var1) { _fun0011_ip = 15; continue _fun0011 }
case 16:
            var1 = var2.UnFavorited;
            _fun0011_ip = 17; continue _fun0011;
case 15:
            var1 = var2.Favorited;
case 17:
            return var1;
        }
    };
    var8['favorited'] = var10;
    var10 = function muted(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            if(var1) { _fun0012_ip = 15; continue _fun0012 }
case 16:
            var1 = var2.Unmuted;
            _fun0012_ip = 17; continue _fun0012;
case 15:
            var1 = var2.Muted;
case 17:
            return var1;
        }
    };
    var8['muted'] = var10;
    var10 = function mutedEvents(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            if(var1) { _fun0013_ip = 15; continue _fun0013 }
case 16:
            var1 = var2.UnmutedScheduledEvents;
            _fun0013_ip = 17; continue _fun0013;
case 15:
            var1 = var2.MutedScheduledEvents;
case 17:
            return var1;
        }
    };
    var8['mutedEvents'] = var10;
    var10 = function unreads(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot10;
            var1 = var1.ALL_MESSAGES;
            if(!(var3 !== var1)) { _fun0014_ip = 18; continue _fun0014 }
case 3:
            var1 = _closure1_slot10;
            var1 = var1.ONLY_MENTIONS;
            if(!(var3 !== var1)) { _fun0014_ip = 5; continue _fun0014 }
case 19:
            var1 = _closure1_slot13;
            var1 = var1.UnreadsDefault;
            _fun0014_ip = 20; continue _fun0014;
case 5:
            var3 = _closure1_slot13;
            var1 = var3.UnreadsMentions;
case 20:
            _fun0014_ip = 21; continue _fun0014;
case 18:
            var2 = _closure1_slot13;
            var1 = var2.UnreadsAll;
case 21:
            return var1;
        }
    };
    var8['unreads'] = var10;
    var10 = function notifications(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot8;
            var1 = var1.ALL_MESSAGES;
            if(!(var3 !== var1)) { _fun0015_ip = 22; continue _fun0015 }
case 3:
            var1 = _closure1_slot8;
            var1 = var1.ONLY_MENTIONS;
            if(!(var3 !== var1)) { _fun0015_ip = 23; continue _fun0015 }
case 19:
            var1 = _closure1_slot8;
            var1 = var1.NO_MESSAGES;
            if(!(var3 !== var1)) { _fun0015_ip = 24; continue _fun0015 }
case 25:
            var1 = _closure1_slot13;
            var1 = var1.NotificationsDefault;
            _fun0015_ip = 26; continue _fun0015;
case 24:
            var3 = _closure1_slot13;
            var1 = var3.NotificationsNothing;
case 26:
            _fun0015_ip = 27; continue _fun0015;
case 23:
            var3 = _closure1_slot13;
            var1 = var3.NotificationsMentions;
case 27:
            _fun0015_ip = 28; continue _fun0015;
case 22:
            var2 = _closure1_slot13;
            var1 = var2.NotificationsAll;
case 28:
            return var1;
        }
    };
    var8['notifications'] = var10;
    var13 = var7.Object;
    var10 = var13.freeze;
    var7 = {};
    var16 = var14.ALL_MESSAGES;
    var15 = 'All';
    var7[var16] = var15;
    var16 = var14.ONLY_MENTIONS;
    var15 = 'Mentions';
    var7[var16] = var15;
    var16 = var14.NO_MESSAGES;
    var15 = 'Nothing';
    var7[var16] = var15;
    var15 = var14.NULL;
    var14 = null;
    var7[var15] = var14;
    var7 = var10.bind(var13)(var7);
    var _closure1_slot14 = var7;
    var10 = 11;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'utils/NotificationSettingsUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['NotificationLabels'] = var9;
    var3['NotificationLabel'] = var8;
    var3['MessageNotificationSettings'] = var7;
    var7 = function trackGuildNotificationSettingsUpdate(arg1, arg2, arg3, arg4, arg5) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var12 = arg1;
            var5 = function compute(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var2 = arguments[1];
                    var1 = undefined;
                    if(!(var2 === var1)) { _fun0017_ip = 7; continue _fun0017 }
case 29:
                    var2 = {};
case 7:
                    var1 = var2.mute_config;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0017_ip = 30; continue _fun0017 }
case 31:
                    var1 = var2.mute_config;
                    var1 = var1.end_time;
                    if(!(var4 == var1)) { _fun0017_ip = 32; continue _fun0017 }
case 30:
                    var6 = var3.guild_muted_until;
                    _fun0017_ip = 33; continue _fun0017;
case 32:
                    var1 = global;
                    var7 = var1.Date;
                    var1 = var2.mute_config;
                    var8 = var1.end_time;
                    var5 = var7.prototype;
                    var5 = Object.create(var5, {constructor: {value: var7}});
                    var9 = var5;
                    var1 = new var9[var7](var8, var7);
                    var5 = var1 instanceof Object ? var1 : var5;
                    var1 = var5.getTime;
                    var6 = var1.bind(var5)();
case 33:
                    var1 = var2.message_notifications;
                    if(!(var4 == var1)) { _fun0017_ip = 12; continue _fun0017 }
case 34:
                    var5 = var3.guild_message_notification_settings;
                    _fun0017_ip = 35; continue _fun0017;
case 12:
                    var7 = _closure1_slot14;
                    var1 = var2.message_notifications;
                    var5 = var7[var1];
case 35:
                    var1 = {};
                    var1['guild_muted_until'] = var6;
                    var6 = var2.flags;
                    if(!(var4 == var6)) { _fun0017_ip = 36; continue _fun0017 }
case 37:
                    var6 = var3.guild_flags;
case 36:
                    var1['guild_flags'] = var6;
                    var6 = var2.muted;
                    if(!(var4 == var6)) { _fun0017_ip = 38; continue _fun0017 }
case 39:
                    var6 = var3.guild_is_muted;
case 38:
                    var1['guild_is_muted'] = var6;
                    var1['guild_message_notification_settings'] = var5;
                    var5 = var2.suppress_roles;
                    if(!(var4 == var5)) { _fun0017_ip = 40; continue _fun0017 }
case 41:
                    var5 = var3.guild_suppress_roles;
case 40:
                    var1['guild_suppress_roles'] = var5;
                    var5 = var2.mobile_push;
                    if(!(var4 == var5)) { _fun0017_ip = 42; continue _fun0017 }
case 43:
                    var5 = var3.guild_receive_mobile_push;
case 42:
                    var1['guild_receive_mobile_push'] = var5;
                    var5 = var2.notify_highlights;
                    if(!(var4 == var5)) { _fun0017_ip = 44; continue _fun0017 }
case 45:
                    var5 = var3.guild_notify_highlights;
case 44:
                    var1['guild_notify_highlights'] = var5;
                    var5 = var2.suppress_everyone;
                    if(!(var4 == var5)) { _fun0017_ip = 46; continue _fun0017 }
case 47:
                    var5 = var3.guild_suppress_everyone;
case 46:
                    var1['guild_suppress_everyone'] = var5;
                    var2 = var2.mute_scheduled_events;
                    if(!(var4 == var2)) { _fun0017_ip = 48; continue _fun0017 }
case 49:
                    var2 = var3.guild_scheduled_events_muted;
case 48:
                    var1['guild_scheduled_events_muted'] = var2;
                    return var1;
                }
            };
            var1 = undefined;
            var2 = arg3;
            var4 = var5.bind(var1)(var2);
            var2 = _closure1_slot17;
            var3 = var2.bind(var1)(var12);
            var2 = arg2;
            var11 = var5.bind(var1)(var3, var2);
            var3 = _closure1_slot15;
            var2 = 'RETURN_PREVIOUS_WHEN_CHANGED';
            var9 = var3.bind(var1)(var4, var11, var2);
            var8 = 'guild_flags';
            var4 = var9.bind(var1)(var8);
            var2 = null;
            var5 = var2 != var4;
            var7 = 0;
            var3 = 0;
            if(!var5) { _fun0016_ip = 50; continue _fun0016 }
case 51:
            var3 = var4;
case 50:
            var4 = var11.guild_flags;
            var5 = var2 != var4;
            var2 = 0;
            if(!var5) { _fun0016_ip = 52; continue _fun0016 }
case 53:
            var2 = var4;
case 52:
            var13 = var2 ^ var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var5 = var6.removeFlags;
            var2 = _closure1_slot12;
            var3 = var2.OPT_IN_CHANNELS_OFF;
            var2 = var2.OPT_IN_CHANNELS_ON;
            var6 = var5.bind(var6)(var13, var3, var2);
            var3 = _closure1_slot1;
            var2 = 9;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot7;
            var3 = var2.NOTIFICATION_SETTINGS_UPDATED;
            var2 = {};
            var16 = var2;
            var15 = var11;
            var11 = copyDataProperties(var16, var15);
            var13 = _closure1_slot3;
            var11 = var13.getStats;
            var15 = var11.bind(var13)(var12);
            var16 = var2;
            var11 = copyDataProperties(var16, var15);
            var13 = arg5;
            var11 = 'location';
            var2[var11] = var13;
            var11 = 'guild_id';
            var2[var11] = var12;
            var10 = _closure1_slot9;
            var11 = var10.GUILD;
            var10 = 'update_type';
            var2[var10] = var11;
            var11 = arg4;
            var10 = 'label';
            var2[var10] = var11;
            var10 = var9.bind(var1)(var8);
            var8 = 'guild_flags_old';
            var2[var8] = var10;
            var8 = 'guild_is_muted';
            var10 = var9.bind(var1)(var8);
            var8 = 'guild_is_muted_old';
            var2[var8] = var10;
            var8 = 'guild_suppress_roles';
            var10 = var9.bind(var1)(var8);
            var8 = 'guild_suppress_roles_old';
            var2[var8] = var10;
            var8 = 'guild_notify_highlights';
            var10 = var9.bind(var1)(var8);
            var8 = 'guild_notify_highlights_old';
            var2[var8] = var10;
            var8 = 'guild_suppress_everyone';
            var10 = var9.bind(var1)(var8);
            var8 = 'guild_suppress_everyone_old';
            var2[var8] = var10;
            var8 = 'guild_receive_mobile_push';
            var10 = var9.bind(var1)(var8);
            var8 = 'guild_receive_mobile_push_old';
            var2[var8] = var10;
            var8 = 'guild_scheduled_events_muted';
            var10 = var9.bind(var1)(var8);
            var8 = 'guild_scheduled_events_muted_old';
            var2[var8] = var10;
            var8 = 'guild_message_notification_settings';
            var9 = var9.bind(var1)(var8);
            var8 = 'guild_message_notification_settings_old';
            var2[var8] = var9;
            var7 = var7 === var6;
            var6 = 'is_opt_in_only_change';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackGuildNotificationSettingsUpdate'] = var7;
    var3['muteConfigToTimestamp'] = var6;
    var6 = function trackChannelNotificationSettingsUpdate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var4 = arg1;
            var16 = var4.updateType;
            var1 = undefined;
            if(!(var16 === var1)) { _fun0018_ip = 54; continue _fun0018 }
case 55:
            var2 = _closure1_slot9;
            var16 = var2.CHANNEL;
case 54:
            var18 = var4.guildId;
            var _closure2_slot0 = var18;
            var17 = var4.channelId;
            var7 = var4.applicationId;
            var5 = var4.change;
            var2 = var4.previous;
            var15 = var4.label;
            var19 = var4.location;
            var3 = function compute(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var7 = arg1;
                    var2 = arguments[1];
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0019_ip = 7; continue _fun0019 }
case 29:
                    var2 = {};
case 7:
                    var9 = var2.muted;
                    var6 = null;
                    if(!(var6 == var9)) { _fun0019_ip = 56; continue _fun0019 }
case 31:
                    var3 = var6 == var7;
                    var1 = undefined;
                    if(var3) { _fun0019_ip = 57; continue _fun0019 }
case 58:
                    var1 = var7.channel_is_muted;
case 57:
                    var9 = var1;
case 56:
                    var1 = var2.message_notifications;
                    if(!(var6 == var1)) { _fun0019_ip = 59; continue _fun0019 }
case 4:
                    var1 = var6 == var7;
                    var3 = undefined;
                    if(var1) { _fun0019_ip = 60; continue _fun0019 }
case 61:
                    var3 = var7.channel_message_notification_settings;
case 60:
                    _fun0019_ip = 62; continue _fun0019;
case 59:
                    var5 = _closure1_slot14;
                    var1 = var2.message_notifications;
                    var3 = var5[var1];
case 62:
                    var1 = {};
                    var1['channel_is_muted'] = var9;
                    var5 = _closure2_slot0;
                    var8 = var6 == var5;
                    var5 = null;
                    if(var8) { _fun0019_ip = 63; continue _fun0019 }
case 64:
                    var8 = true;
                    var8 = var8 === var9;
                    if(var8) { _fun0019_ip = 65; continue _fun0019 }
case 66:
                    var8 = var6 != var3;
case 65:
                    var5 = var8;
case 63:
                    var1['channel_is_overridden'] = var5;
                    var5 = var2.flags;
                    if(!(var6 == var5)) { _fun0019_ip = 67; continue _fun0019 }
case 68:
                    var8 = var6 == var7;
                    var6 = undefined;
                    if(var8) { _fun0019_ip = 69; continue _fun0019 }
case 70:
                    var6 = var7.channel_flags;
case 69:
                    var5 = var6;
case 67:
                    var1['channel_flags'] = var5;
                    var1['channel_message_notification_settings'] = var3;
                    var3 = _closure1_slot16;
                    var2 = var2.mute_config;
                    var2 = var3.bind(var4)(var2);
                    var1['channel_muted_until'] = var2;
                    return var1;
                }
            };
            var4 = var3.bind(var1)(var2);
            var2 = _closure1_slot18;
            var2 = var2.bind(var1)(var18, var17);
            var20 = var3.bind(var1)(var2, var5);
            var3 = _closure1_slot15;
            var2 = 'RETURN_PREVIOUS_WHEN_CHANGED';
            var11 = var3.bind(var1)(var4, var20, var2);
            var3 = _closure1_slot4;
            var2 = var3.getChannel;
            var12 = var2.bind(var3)(var17);
            var10 = 'channel_flags';
            var2 = var11.bind(var1)(var10);
            var13 = null;
            var4 = var13 != var2;
            var9 = 0;
            var3 = 0;
            if(!var4) { _fun0018_ip = 71; continue _fun0018 }
case 72:
            var3 = var2;
case 71:
            var4 = var20.channel_flags;
            var5 = var13 != var4;
            var2 = 0;
            if(!var5) { _fun0018_ip = 73; continue _fun0018 }
case 74:
            var2 = var4;
case 73:
            var6 = var2 ^ var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.removeFlags;
            var2 = _closure1_slot11;
            var3 = var2.FAVORITED;
            var2 = var2.OPT_IN_ENABLED;
            var6 = var4.bind(var5)(var6, var3, var2);
            var3 = _closure1_slot5;
            var2 = var3.getLastMessage;
            var3 = var2.bind(var3)(var17);
            var4 = var13 == var3;
            var2 = undefined;
            if(var4) { _fun0018_ip = 75; continue _fun0018 }
case 76:
            var2 = var3.type;
case 75:
            var3 = var13 != var2;
            var8 = null;
            if(!var3) { _fun0018_ip = 77; continue _fun0018 }
case 78:
            var8 = var2;
case 77:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot7;
            var3 = var2.NOTIFICATION_SETTINGS_UPDATED;
            var2 = {};
            var23 = var2;
            var22 = var20;
            var20 = copyDataProperties(var23, var22);
            var20 = _closure1_slot3;
            var14 = var20.getStats;
            var22 = var14.bind(var20)(var18);
            var23 = var2;
            var14 = copyDataProperties(var23, var22);
            var14 = 'location';
            var2[var14] = var19;
            var14 = 'guild_id';
            var2[var14] = var18;
            var14 = 'channel_id';
            var2[var14] = var17;
            var14 = 'update_type';
            var2[var14] = var16;
            var14 = 'label';
            var2[var14] = var15;
            var14 = var13 != var12;
            var13 = null;
            if(!var14) { _fun0018_ip = 79; continue _fun0018 }
case 80:
            var13 = var12.parent_id;
case 79:
            var12 = 'parent_id';
            var2[var12] = var13;
            var12 = var11.bind(var1)(var10);
            var10 = 'channel_flags_old';
            var2[var10] = var12;
            var10 = 'channel_is_muted';
            var12 = var11.bind(var1)(var10);
            var10 = 'channel_is_muted_old';
            var2[var10] = var12;
            var10 = 'channel_muted_until';
            var12 = var11.bind(var1)(var10);
            var10 = 'channel_muted_until_old';
            var2[var10] = var12;
            var10 = 'channel_is_overridden';
            var12 = var11.bind(var1)(var10);
            var10 = 'channel_is_overridden_old';
            var2[var10] = var12;
            var10 = 'channel_message_notification_settings';
            var11 = var11.bind(var1)(var10);
            var10 = 'channel_message_notification_settings_old';
            var2[var10] = var11;
            var9 = var9 === var6;
            var6 = 'is_opt_in_only_change';
            var2[var6] = var9;
            var6 = 'last_message_type';
            var2[var6] = var8;
            var6 = 'application_id';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackChannelNotificationSettingsUpdate'] = var6;
    var3['getCurrentGuildSettings'] = var5;
    var5 = function getManyCurrentGuildSettings(arg1) {
        var4 = arg1;
        var1 = global;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var6 = var3;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot0 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var4 = arg1;
            var3 = _closure2_slot0;
            var2 = var3.set;
            var5 = _closure1_slot17;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['getManyCurrentGuildSettings'] = var5;
    var3['getCurrentChannelSettings'] = var4;
    var4 = function getManyCurrentChannelSettings(arg1, arg2) {
        var4 = arg2;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var6 = var3;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot1 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var4 = arg1;
            var3 = _closure2_slot1;
            var2 = var3.set;
            var6 = _closure1_slot18;
            var5 = _closure2_slot0;
            var1 = undefined;
            var1 = var6.bind(var1)(var5, var4);
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['getManyCurrentChannelSettings'] = var4;
    var2 = function trackAccountNotificationSettingUpdated(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot7;
        var3 = var2.NOTIFICATION_SETTINGS_UPDATED;
        var2 = {};
        var6 = _closure1_slot9;
        var6 = var6.ACCOUNT;
        var2['update_type'] = var6;
        var6 = arg1;
        var6 = var6.quietMode;
        var2['quiet_mode_enabled'] = var6;
        var6 = arg2;
        var6 = var6.quietMode;
        var2['quiet_mode_enabled_old'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackAccountNotificationSettingUpdated'] = var2;
    return var1;
})();