// app/modules/user_profile/UserProfileAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var9[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.TrackUserProfileProperties;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.ActivityTypes;
    var _closure1_slot11 = var5;
    var4 = var4.AnalyticEvents;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot13 = var4;
    var4 = function getProfileProperties(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.user;
            var1 = var2.userProfile;
            var9 = var2.guildMember;
            var4 = var2.guildMemberProfile;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1;
case 2:
            var1 = new Array(0);
            var5 = global;
            var8 = var5.Boolean;
            var10 = var3 == var9;
            var2 = undefined;
            var7 = undefined;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var9.nick;
case 4:
            var7 = var8.bind(var2)(var7);
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var1.push;
            var7 = _closure1_slot10;
            var7 = var7.NICKNAME;
            var7 = var8.bind(var1)(var7);
case 6:
            var8 = var5.Boolean;
            var9 = var3 == var4;
            var7 = undefined;
            if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var4.pronouns;
case 8:
            var7 = var8.bind(var2)(var7);
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var1.push;
            var7 = _closure1_slot10;
            var7 = var7.PRONOUNS;
            var7 = var8.bind(var1)(var7);
case 10:
            var8 = var5.Boolean;
            var9 = var3 == var6;
            var7 = undefined;
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var6.avatar;
case 12:
            var7 = var8.bind(var2)(var7);
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 10;
            var7 = var10[var7];
            var10 = var8.bind(var2)(var7);
            var8 = var10.isAnimatedIconHash;
            var11 = var3 == var6;
            var7 = undefined;
            if(var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var6.avatar;
case 16:
            var7 = var8.bind(var10)(var7);
            var8 = var1.push;
            var9 = _closure1_slot10;
            if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = var9.AVATAR;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var7 = var9.ANIMATED_AVATAR;
case 20:
            var7 = var8.bind(var1)(var7);
case 14:
            var8 = var5.Boolean;
            var9 = var3 == var4;
            var7 = undefined;
            if(var9) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var7 = var4.banner;
case 21:
            var7 = var8.bind(var2)(var7);
            if(!var7) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 10;
            var7 = var10[var7];
            var10 = var8.bind(var2)(var7);
            var8 = var10.isAnimatedIconHash;
            var11 = var3 == var4;
            var7 = undefined;
            if(var11) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var7 = var4.banner;
case 25:
            var7 = var8.bind(var10)(var7);
            var8 = var1.push;
            var9 = _closure1_slot10;
            if(var7) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var7 = var9.BANNER;
            _fun0001_ip = 29; continue _fun0001;
case 27:
            var7 = var9.ANIMATED_BANNER;
case 29:
            var7 = var8.bind(var1)(var7);
case 23:
            var7 = var5.Boolean;
            var8 = var3 == var4;
            var5 = undefined;
            if(var8) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var5 = var4.bio;
case 30:
            var5 = var7.bind(var2)(var5);
            if(!var5) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var7 = var1.push;
            var5 = _closure1_slot10;
            var5 = var5.BIO;
            var5 = var7.bind(var1)(var5);
case 32:
            var7 = var3 == var4;
            var5 = undefined;
            if(var7) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var5 = var4.themeColors;
case 34:
            var5 = var3 != var5;
            if(!var5) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var9 = var4.themeColors;
            var8 = var9.find;
            var7 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var5 = var2 !== var7;
case 36:
            if(!var5) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var7 = var1.push;
            var5 = _closure1_slot10;
            var5 = var5.THEME;
            var5 = var7.bind(var1)(var5);
case 38:
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var5 = var6.avatarDecoration;
case 40:
            if(!(var3 != var5)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var6 = var1.push;
            var5 = _closure1_slot10;
            var5 = var5.AVATAR_DECORATION;
            var5 = var6.bind(var1)(var5);
case 42:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var2 = var4.profileEffect;
case 44:
            if(!(var3 != var2)) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var3 = var1.push;
            var2 = _closure1_slot10;
            var2 = var2.PROFILE_EFFECT;
            var2 = var3.bind(var1)(var2);
case 46:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = function getUserStatus(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot6;
            var2 = var3.getStatus;
            var5 = var2.bind(var3)(var4);
            var2 = var3.isMobileOnline;
            var2 = var2.bind(var3)(var4);
            var3 = _closure1_slot13;
            var3 = var3.ONLINE;
            if(!(var5 === var3)) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            if(var2) { _fun0002_ip = 50; continue _fun0002 }
case 48:
            var1 = _closure1_slot13;
            var2 = var1.ONLINE;
            var1 = var5;
            if(!(var1 === var2)) { _fun0002_ip = 6; continue _fun0002 }
case 51:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-desktop';
            var1 = var4.bind(var3)(var5, var2);
case 6:
            _fun0002_ip = 52; continue _fun0002;
case 50:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-mobile';
            var1 = var4.bind(var3)(var5, var2);
case 52:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var6 = function getActivityType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var2 = null;
            var1 = var6;
            if(!(var2 != var1)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var2 = 'VOICE';
            if(!(var2 !== var6)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var3 = global;
            var5 = var3.Object;
            var4 = var5.keys;
            var7 = _closure1_slot11;
            var4 = var4.bind(var5)(var7);
            var5 = var3.Object;
            var3 = var5.values;
            var5 = var3.bind(var5)(var7);
            var3 = var5.indexOf;
            var3 = var3.bind(var5)(var6);
            var2 = var4[var3];
case 55:
            var1 = var2;
case 53:
            return var1;
        }
    };
    var _closure1_slot16 = var6;
    var4 = function getTrackUserProfileProperties(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var11 = var1.layout;
            var5 = var1.userId;
            var14 = var1.guildId;
            var9 = var1.sessionId;
            var7 = var1.sourceSessionId;
            var1 = var1.showGuildProfile;
            var3 = undefined;
            if(!(var1 === var3)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var1 = true;
case 57:
            var4 = _closure1_slot8;
            var2 = var4.getUser;
            var2 = var2.bind(var4)(var5);
            var4 = null;
            if(!(var4 != var2)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 11;
            var5 = var12[var5];
            var13 = var10.bind(var3)(var5);
            var12 = var13.getDisplayProfile;
            var5 = var4 == var2;
            var10 = undefined;
            if(var5) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var10 = var2.id;
case 61:
            var5 = undefined;
            if(!var1) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var5 = var14;
case 63:
            var5 = var12.bind(var13)(var10, var5);
            var10 = null;
            if(!var1) { _fun0004_ip = 65; continue _fun0004 }
case 66:
            var1 = var4 != var14;
            var10 = null;
            if(!var1) { _fun0004_ip = 65; continue _fun0004 }
case 67:
            var13 = _closure1_slot5;
            var12 = var13.getMember;
            var15 = var4 == var2;
            var1 = undefined;
            if(var15) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var1 = var2.id;
case 68:
            var10 = var12.bind(var13)(var14, var1);
case 65:
            var1 = {};
            var1['profile_layout'] = var11;
            var1['profile_session_id'] = var9;
            var1['source_profile_session_id'] = var7;
            var9 = _closure1_slot14;
            var7 = {};
            var7['user'] = var2;
            var12 = var4 == var5;
            var11 = undefined;
            if(var12) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var11 = var5._userProfile;
case 16:
            var7['userProfile'] = var11;
            var7 = var9.bind(var3)(var7);
            var1['profile_properties'] = var7;
            var9 = _closure1_slot14;
            var7 = {};
            var7['guildMember'] = var10;
            var11 = var4 == var5;
            var10 = undefined;
            if(var11) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var10 = var5._guildMemberProfile;
case 70:
            var7['guildMemberProfile'] = var10;
            var7 = var9.bind(var3)(var7);
            var1['guild_profile_properties'] = var7;
            var10 = _closure1_slot6;
            var9 = var10.getActivities;
            var7 = var2.id;
            var10 = var9.bind(var10)(var7);
            var9 = var10.map;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.type;
                return var1;
            };
            var10 = var9.bind(var10)(var7);
            var9 = var10.filter;
            var7 = function(arg1) {
                var2 = undefined;
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var7 = var9.bind(var10)(var7);
            var1['profile_activity_types'] = var7;
            var9 = var4 == var5;
            var7 = undefined;
            if(var9) { _fun0004_ip = 31; continue _fun0004 }
case 28:
            var9 = var5.getBadges;
            var10 = var9.bind(var5)();
            var9 = var4 == var10;
            var7 = undefined;
            if(var9) { _fun0004_ip = 31; continue _fun0004 }
case 23:
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var7 = var9.bind(var10)(var8);
case 31:
            var1['profile_badges'] = var7;
            var8 = var2.avatarDecoration;
            var9 = var4 == var8;
            var7 = undefined;
            if(var9) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var7 = var8.skuId;
case 72:
            var1['avatar_decoration_sku_id'] = var7;
            var8 = var4 == var5;
            var7 = undefined;
            if(var8) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var8 = var5.profileEffect;
            var9 = var4 == var8;
            var7 = undefined;
            if(var9) { _fun0004_ip = 74; continue _fun0004 }
case 76:
            var7 = var8.skuId;
case 74:
            var1['profile_effect_sku_id'] = var7;
            var7 = _closure1_slot15;
            var6 = var2.id;
            var6 = var7.bind(var3)(var6);
            var1['user_status'] = var6;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var3 = var5.guildId;
case 77:
            var3 = var4 != var3;
            var1['is_guild_profile'] = var3;
            var2 = var2.bot;
            var1['is_bot_profile'] = var2;
            return var1;
case 59:
            var1 = {};
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var5 = function getTrackUserRelationshipProperties(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var6 = var1.userId;
            var4 = null;
            if(!(var4 != var6)) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var3 = _closure1_slot3;
            var1 = var3.getUserAffinity;
            var3 = var1.bind(var3)(var6);
            var1 = {};
            var1['related_user_id'] = var6;
            var7 = _closure1_slot7;
            var5 = var7.getRelationshipType;
            var5 = var5.bind(var7)(var6);
            var1['relationship_type'] = var5;
            var5 = var7.getSince;
            var5 = var5.bind(var7)(var6);
            var1['related_since'] = var5;
            var5 = _closure1_slot9;
            var2 = var5.getMutualFriendsCount;
            var2 = var2.bind(var5)(var6);
            var1['num_mutual_friends'] = var2;
            var2 = var5.getMutualGuilds;
            var6 = var2.bind(var5)(var6);
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0005_ip = 81; continue _fun0005 }
case 11:
            var5 = var6.length;
case 81:
            var1['num_mutual_guilds'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var5 = var3.communicationProbability;
case 82:
            var1['communication_probability'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var2 = var3.communicationRank;
case 84:
            var1['communication_rank'] = var2;
            return var1;
case 79:
            var1 = {};
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var4 = function trackUserProfileAction(arg1) {
        var13 = arg1;
        var20 = var13.guildId;
        var16 = var13.channelId;
        var9 = var13.messageId;
        var8 = var13.roleId;
        var7 = var13.widgetType;
        var12 = var13.analyticsLocations;
        var11 = var13.action;
        var10 = var13.section;
        var3 = _closure1_slot1;
        var17 = _closure1_slot2;
        var1 = 12;
        var2 = var17[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot12;
        var3 = var2.USER_PROFILE_ACTION;
        var2 = {};
        var15 = _closure1_slot0;
        var14 = 13;
        var18 = var17[var14];
        var19 = var15.bind(var1)(var18);
        var18 = var19.collectGuildAnalyticsMetadata;
        var21 = var18.bind(var19)(var20);
        var22 = var2;
        var18 = copyDataProperties(var22, var21);
        var14 = var17[var14];
        var15 = var15.bind(var1)(var14);
        var14 = var15.collectChannelAnalyticsMetadataFromId;
        var21 = var14.bind(var15)(var16);
        var22 = var2;
        var14 = copyDataProperties(var22, var21);
        var14 = _closure1_slot17;
        var21 = var14.bind(var1)(var13);
        var22 = var2;
        var14 = copyDataProperties(var22, var21);
        var6 = _closure1_slot18;
        var21 = var6.bind(var1)(var13);
        var22 = var2;
        var6 = copyDataProperties(var22, var21);
        var6 = 'location_stack';
        var2[var6] = var12;
        var6 = 'profile_action';
        var2[var6] = var11;
        var6 = 'profile_section';
        var2[var6] = var10;
        var6 = 'source_message_id';
        var2[var6] = var9;
        var6 = 'source_role_id';
        var2[var6] = var8;
        var6 = 'widget_type';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot19 = var4;
    var7 = 15;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_profile/UserProfileAnalyticsUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getActivityType'] = var6;
    var3['getTrackUserRelationshipProperties'] = var5;
    var3['trackUserProfileAction'] = var4;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var14 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.isUserProfilePerformanceAnalyticsEnabled;
            var2 = {};
            var5 = 'UserProfileAnalyticsUtils';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var21 = var14.guildId;
            var17 = var14.channelId;
            var13 = var14.analyticsLocations;
            var12 = var14.profileUi;
            var11 = var14.viewStartedAt;
            var10 = var14.fetchStartedAt;
            var9 = var14.timeToInteractiveMs;
            var8 = var14.timeToLoadMs;
            var7 = var14.timeToFetchMs;
            var3 = null;
            var5 = var3 != var9;
            var4 = 0;
            var2 = 0;
            if(!var5) { _fun0006_ip = 88; continue _fun0006 }
case 63:
            var2 = var9;
case 88:
            var2 = var2 <= var4;
            if(var2) { _fun0006_ip = 89; continue _fun0006 }
case 90:
            var15 = var3 != var8;
            var5 = 0;
            if(!var15) { _fun0006_ip = 91; continue _fun0006 }
case 92:
            var5 = var8;
case 91:
            var2 = var5 <= var4;
case 89:
            if(var2) { _fun0006_ip = 93; continue _fun0006 }
case 82:
            var5 = var3 != var7;
            var3 = 0;
            if(!var5) { _fun0006_ip = 94; continue _fun0006 }
case 95:
            var3 = var7;
case 94:
            var2 = var3 <= var4;
case 93:
            if(var2) { _fun0006_ip = 86; continue _fun0006 }
case 96:
            var3 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 12;
            var2 = var18[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot12;
            var3 = var2.USER_PROFILE_UI_VIEWED;
            var2 = {};
            var16 = _closure1_slot0;
            var15 = 13;
            var19 = var18[var15];
            var20 = var16.bind(var1)(var19);
            var19 = var20.collectGuildAnalyticsMetadata;
            var22 = var19.bind(var20)(var21);
            var23 = var2;
            var19 = copyDataProperties(var23, var22);
            var15 = var18[var15];
            var16 = var16.bind(var1)(var15);
            var15 = var16.collectChannelAnalyticsMetadataFromId;
            var22 = var15.bind(var16)(var17);
            var23 = var2;
            var15 = copyDataProperties(var23, var22);
            var15 = _closure1_slot17;
            var22 = var15.bind(var1)(var14);
            var23 = var2;
            var15 = copyDataProperties(var23, var22);
            var6 = _closure1_slot18;
            var22 = var6.bind(var1)(var14);
            var23 = var2;
            var6 = copyDataProperties(var23, var22);
            var6 = 'location_stack';
            var2[var6] = var13;
            var6 = 'profile_ui';
            var2[var6] = var12;
            var6 = 'view_started_at';
            var2[var6] = var11;
            var6 = 'fetch_started_at';
            var2[var6] = var10;
            var6 = 'time_to_interactive_ms';
            var2[var6] = var9;
            var6 = 'time_to_load_ms';
            var2[var6] = var8;
            var6 = 'time_to_fetch_ms';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
case 86:
            return var1;
        }
    };
    var3['maybeTrackUserProfileUiViewed'] = var4;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var15 = arg1;
            var21 = var15.guildId;
            var17 = var15.channelId;
            var14 = var15.analyticsLocations;
            var13 = var15.activityType;
            var11 = var15.activityName;
            var10 = var15.activityPlatform;
            var9 = var15.activitySessionId;
            var8 = var15.applicationId;
            var7 = var15.voiceChannelId;
            var3 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 12;
            var2 = var18[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot12;
            var3 = var2.USER_PROFILE_ACTIVITY_JOINED;
            var2 = {};
            var16 = _closure1_slot0;
            var12 = 13;
            var19 = var18[var12];
            var20 = var16.bind(var1)(var19);
            var19 = var20.collectGuildAnalyticsMetadata;
            var22 = var19.bind(var20)(var21);
            var23 = var2;
            var19 = copyDataProperties(var23, var22);
            var12 = var18[var12];
            var16 = var16.bind(var1)(var12);
            var12 = var16.collectChannelAnalyticsMetadataFromId;
            var22 = var12.bind(var16)(var17);
            var23 = var2;
            var12 = copyDataProperties(var23, var22);
            var12 = _closure1_slot17;
            var22 = var12.bind(var1)(var15);
            var23 = var2;
            var12 = copyDataProperties(var23, var22);
            var12 = _closure1_slot18;
            var22 = var12.bind(var1)(var15);
            var23 = var2;
            var12 = copyDataProperties(var23, var22);
            var12 = 'location_stack';
            var2[var12] = var14;
            var12 = null;
            var14 = var12 != var7;
            var12 = 'VOICE';
            if(var14) { _fun0007_ip = 97; continue _fun0007 }
case 98:
            var6 = _closure1_slot16;
            var12 = var6.bind(var1)(var13);
case 97:
            var6 = 'activity_type';
            var2[var6] = var12;
            var6 = 'activity_name';
            var2[var6] = var11;
            var6 = 'activity_platform';
            var2[var6] = var10;
            var6 = 'activity_session_id';
            var2[var6] = var9;
            var6 = 'application_id';
            var2[var6] = var8;
            var6 = 'voice_channel_id';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackUserProfileActivityJoined'] = var4;
    var4 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var17 = arg1;
            var23 = var17.guildId;
            var19 = var17.channelId;
            var16 = var17.analyticsLocations;
            var15 = var17.action;
            var13 = var17.display;
            var11 = var17.activity;
            var12 = var17.stream;
            var10 = var17.entry;
            var9 = var17.outbox;
            var7 = var17.voiceChannelId;
            var3 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 12;
            var2 = var20[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot12;
            var3 = var2.USER_PROFILE_ACTIVITY_ACTION;
            var2 = {};
            var18 = _closure1_slot0;
            var8 = 13;
            var21 = var20[var8];
            var22 = var18.bind(var1)(var21);
            var21 = var22.collectGuildAnalyticsMetadata;
            var24 = var21.bind(var22)(var23);
            var25 = var2;
            var21 = copyDataProperties(var25, var24);
            var8 = var20[var8];
            var18 = var18.bind(var1)(var8);
            var8 = var18.collectChannelAnalyticsMetadataFromId;
            var24 = var8.bind(var18)(var19);
            var25 = var2;
            var8 = copyDataProperties(var25, var24);
            var8 = _closure1_slot17;
            var24 = var8.bind(var1)(var17);
            var25 = var2;
            var8 = copyDataProperties(var25, var24);
            var8 = _closure1_slot18;
            var24 = var8.bind(var1)(var17);
            var25 = var2;
            var8 = copyDataProperties(var25, var24);
            var8 = 'location_stack';
            var2[var8] = var16;
            var8 = 'activity_action';
            var2[var8] = var15;
            var8 = 'activity_display';
            var2[var8] = var13;
            var13 = _closure1_slot16;
            var8 = null;
            if(!(var8 == var12)) { _fun0008_ip = 99; continue _fun0008 }
case 19:
            var15 = var8 == var11;
            var12 = undefined;
            if(var15) { _fun0008_ip = 20; continue _fun0008 }
case 100:
            var12 = var11.type;
case 20:
            _fun0008_ip = 70; continue _fun0008;
case 99:
            var14 = _closure1_slot11;
            var12 = var14.STREAMING;
case 70:
            var13 = var13.bind(var1)(var12);
            var12 = 'activity_type';
            var2[var12] = var13;
            var12 = var8 == var11;
            var13 = undefined;
            if(var12) { _fun0008_ip = 101; continue _fun0008 }
case 102:
            var13 = var11.name;
case 101:
            var12 = 'activity_name';
            var2[var12] = var13;
            var12 = var8 == var11;
            var13 = undefined;
            if(var12) { _fun0008_ip = 103; continue _fun0008 }
case 104:
            var13 = var11.platform;
case 103:
            var12 = 'activity_platform';
            var2[var12] = var13;
            var12 = var8 == var11;
            var13 = undefined;
            if(var12) { _fun0008_ip = 105; continue _fun0008 }
case 106:
            var13 = var11.session_id;
case 105:
            var12 = 'activity_session_id';
            var2[var12] = var13;
            var13 = var8 == var11;
            var12 = undefined;
            if(var13) { _fun0008_ip = 107; continue _fun0008 }
case 108:
            var12 = var11.application_id;
case 107:
            var11 = 'activity_application_id';
            var2[var11] = var12;
            var11 = var8 == var10;
            var12 = undefined;
            if(var11) { _fun0008_ip = 109; continue _fun0008 }
case 110:
            var12 = var10.id;
case 109:
            var11 = 'item_id';
            var2[var11] = var12;
            var12 = var8 == var10;
            var11 = undefined;
            if(var12) { _fun0008_ip = 111; continue _fun0008 }
case 112:
            var11 = var10.author_id;
case 111:
            var10 = 'author_id_v2';
            var2[var10] = var11;
            var10 = var8 == var9;
            var11 = undefined;
            if(var10) { _fun0008_ip = 113; continue _fun0008 }
case 114:
            var13 = var9.entries;
            var12 = var13.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var11 = var12.bind(var13)(var10);
case 113:
            var10 = 'item_ids';
            var2[var10] = var11;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0008_ip = 115; continue _fun0008 }
case 116:
            var10 = var9.entries;
            var9 = var10.map;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.author_id;
                return var1;
            };
            var8 = var9.bind(var10)(var6);
case 115:
            var6 = 'author_ids_v2';
            var2[var6] = var8;
            var6 = 'voice_channel_id';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackUserProfileActivityAction'] = var4;
    var4 = function(arg1) {
        var9 = arg1;
        var16 = var9.guildId;
        var12 = var9.channelId;
        var8 = var9.analyticsLocations;
        var7 = var9.badge;
        var3 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 12;
        var2 = var13[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot12;
        var3 = var2.USER_PROFILE_BADGE_PRESSED;
        var2 = {};
        var11 = _closure1_slot0;
        var10 = 13;
        var14 = var13[var10];
        var15 = var11.bind(var1)(var14);
        var14 = var15.collectGuildAnalyticsMetadata;
        var17 = var14.bind(var15)(var16);
        var18 = var2;
        var14 = copyDataProperties(var18, var17);
        var10 = var13[var10];
        var11 = var11.bind(var1)(var10);
        var10 = var11.collectChannelAnalyticsMetadataFromId;
        var17 = var10.bind(var11)(var12);
        var18 = var2;
        var10 = copyDataProperties(var18, var17);
        var10 = _closure1_slot17;
        var17 = var10.bind(var1)(var9);
        var18 = var2;
        var10 = copyDataProperties(var18, var17);
        var6 = _closure1_slot18;
        var17 = var6.bind(var1)(var9);
        var18 = var2;
        var6 = copyDataProperties(var18, var17);
        var6 = 'location_stack';
        var2[var6] = var8;
        var6 = 'badge';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackUserProfileBadgePressed'] = var4;
    var4 = function(arg1) {
        var9 = arg1;
        var16 = var9.guildId;
        var12 = var9.channelId;
        var8 = var9.analyticsLocations;
        var7 = var9.badge;
        var3 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 12;
        var2 = var13[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot12;
        var3 = var2.USER_PROFILE_BADGE_HOVERED;
        var2 = {};
        var11 = _closure1_slot0;
        var10 = 13;
        var14 = var13[var10];
        var15 = var11.bind(var1)(var14);
        var14 = var15.collectGuildAnalyticsMetadata;
        var17 = var14.bind(var15)(var16);
        var18 = var2;
        var14 = copyDataProperties(var18, var17);
        var10 = var13[var10];
        var11 = var11.bind(var1)(var10);
        var10 = var11.collectChannelAnalyticsMetadataFromId;
        var17 = var10.bind(var11)(var12);
        var18 = var2;
        var10 = copyDataProperties(var18, var17);
        var10 = _closure1_slot17;
        var17 = var10.bind(var1)(var9);
        var18 = var2;
        var10 = copyDataProperties(var18, var17);
        var6 = _closure1_slot18;
        var17 = var6.bind(var1)(var9);
        var18 = var2;
        var6 = copyDataProperties(var18, var17);
        var6 = 'location_stack';
        var2[var6] = var8;
        var6 = 'badge';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackUserProfileBadgeHovered'] = var4;
    var4 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var8 = var1.displayProfile;
            var10 = var1.isProfileOpen;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var7 = null;
            var3 = var7 == var8;
            var6 = undefined;
            if(var3) { _fun0009_ip = 117; continue _fun0009 }
case 118:
            var6 = var8.userId;
case 117:
            _closure2_slot0 = var6;
            var3 = var7 != var6;
            var13 = null;
            if(!var3) { _fun0009_ip = 55; continue _fun0009 }
case 119:
            var4 = _closure1_slot6;
            var3 = var4.findActivity;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var5 = _closure1_slot4;
                    var4 = var5.getAnyStreamForUser;
                    var1 = _closure2_slot0;
                    var4 = var4.bind(var5)(var1);
                    var1 = null;
                    if(!(var1 == var4)) { _fun0010_ip = 87; continue _fun0010 }
case 120:
                    var1 = _closure1_slot11;
                    var1 = var1.CUSTOM_STATUS;
                    var1 = var3 !== var1;
                    _fun0010_ip = 121; continue _fun0010;
case 87:
                    var2 = _closure1_slot11;
                    var2 = var2.PLAYING;
                    var1 = var3 === var2;
case 121:
                    return var1;
                }
            };
            var13 = var3.bind(var4)(var6, var2);
case 55:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot12;
            var3 = var2.DM_PROFILE_TOGGLED;
            var2 = {};
            var2['is_profile_open'] = var10;
            var10 = global;
            var11 = var10.Boolean;
            var12 = var7 == var13;
            var10 = undefined;
            if(var12) { _fun0009_ip = 69; continue _fun0009 }
case 122:
            var12 = var13.assets;
            var14 = var7 == var12;
            var10 = undefined;
            if(var14) { _fun0009_ip = 69; continue _fun0009 }
case 123:
            var10 = var12.large_image;
case 69:
            if(!(var7 == var10)) { _fun0009_ip = 124; continue _fun0009 }
case 85:
            var14 = var7 == var13;
            var12 = undefined;
            if(var14) { _fun0009_ip = 125; continue _fun0009 }
case 126:
            var13 = var13.assets;
            var14 = var7 == var13;
            var12 = undefined;
            if(var14) { _fun0009_ip = 125; continue _fun0009 }
case 127:
            var12 = var13.small_image;
case 125:
            var10 = var12;
case 124:
            var10 = var11.bind(var1)(var10);
            var2['has_images'] = var10;
            var10 = _closure1_slot7;
            var9 = var10.isFriend;
            var9 = var9.bind(var10)(var6);
            var2['is_friend'] = var9;
            var2['viewed_profile_user_id'] = var6;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0009_ip = 128; continue _fun0009 }
case 129:
            var9 = var8.hasPremiumCustomization;
            var6 = var9.bind(var8)();
case 128:
            var2['profile_has_nitro_customization'] = var6;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0009_ip = 130; continue _fun0009 }
case 131:
            var9 = var8.hasThemeColors;
            var6 = var9.bind(var8)();
case 130:
            var2['profile_has_theme_color_customized'] = var6;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0009_ip = 132; continue _fun0009 }
case 133:
            var6 = var8.popoutAnimationParticleType;
case 132:
            var6 = var7 != var6;
            var2['profile_has_theme_animation'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackDmProfileToggled'] = var4;
    var4 = function(arg1) {
        var13 = arg1;
        var20 = var13.guildId;
        var16 = var13.channelId;
        var12 = var13.analyticsLocations;
        var11 = var13.action;
        var10 = var13.widgetEdited;
        var9 = var13.gameId;
        var8 = var13.numResults;
        var7 = var13.numCharacters;
        var3 = _closure1_slot19;
        var2 = {};
        var22 = var2;
        var21 = var13;
        var1 = copyDataProperties(var22, var21);
        var1 = 'action';
        var2[var1] = var11;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = _closure1_slot1;
        var17 = _closure1_slot2;
        var2 = 12;
        var2 = var17[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot12;
        var3 = var2.USER_PROFILE_EDIT_ACTION;
        var2 = {};
        var15 = _closure1_slot0;
        var14 = 13;
        var18 = var17[var14];
        var19 = var15.bind(var1)(var18);
        var18 = var19.collectGuildAnalyticsMetadata;
        var21 = var18.bind(var19)(var20);
        var22 = var2;
        var18 = copyDataProperties(var22, var21);
        var14 = var17[var14];
        var15 = var15.bind(var1)(var14);
        var14 = var15.collectChannelAnalyticsMetadataFromId;
        var21 = var14.bind(var15)(var16);
        var22 = var2;
        var14 = copyDataProperties(var22, var21);
        var6 = _closure1_slot17;
        var21 = var6.bind(var1)(var13);
        var22 = var2;
        var6 = copyDataProperties(var22, var21);
        var6 = 'location_stack';
        var2[var6] = var12;
        var6 = 'edit_action';
        var2[var6] = var11;
        var6 = 'widget_edited';
        var2[var6] = var10;
        var6 = 'game_id';
        var2[var6] = var9;
        var6 = 'num_results';
        var2[var6] = var8;
        var6 = 'num_characters';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackUserProfileEditAction'] = var4;
    var4 = function(arg1) {
        var13 = arg1;
        var20 = var13.guildId;
        var16 = var13.channelId;
        var12 = var13.analyticsLocations;
        var11 = var13.widgetEdited;
        var10 = var13.gameIds;
        var9 = var13.tags;
        var8 = var13.numCharactersCommentary;
        var7 = var13.isWidgetRemoved;
        var3 = _closure1_slot19;
        var2 = {};
        var22 = var2;
        var21 = var13;
        var1 = copyDataProperties(var22, var21);
        var4 = 'EDIT_SAVED';
        var1 = 'action';
        var2[var1] = var4;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = _closure1_slot1;
        var17 = _closure1_slot2;
        var2 = 12;
        var2 = var17[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot12;
        var3 = var2.USER_PROFILE_EDIT_SAVED;
        var2 = {};
        var15 = _closure1_slot0;
        var14 = 13;
        var18 = var17[var14];
        var19 = var15.bind(var1)(var18);
        var18 = var19.collectGuildAnalyticsMetadata;
        var21 = var18.bind(var19)(var20);
        var22 = var2;
        var18 = copyDataProperties(var22, var21);
        var14 = var17[var14];
        var15 = var15.bind(var1)(var14);
        var14 = var15.collectChannelAnalyticsMetadataFromId;
        var21 = var14.bind(var15)(var16);
        var22 = var2;
        var14 = copyDataProperties(var22, var21);
        var6 = _closure1_slot17;
        var21 = var6.bind(var1)(var13);
        var22 = var2;
        var6 = copyDataProperties(var22, var21);
        var6 = 'location_stack';
        var2[var6] = var12;
        var6 = 'widget_edited';
        var2[var6] = var11;
        var6 = 'game_ids';
        var2[var6] = var10;
        var6 = 'tags';
        var2[var6] = var9;
        var6 = 'num_characters_commentary';
        var2[var6] = var8;
        var6 = 'is_widget_removed';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackUserProfileEditSaved'] = var4;
    var2 = function(arg1) {
        var11 = arg1;
        var18 = var11.guildId;
        var14 = var11.channelId;
        var10 = var11.analyticsLocations;
        var9 = var11.action;
        var8 = var11.wishlistId;
        var7 = var11.skuId;
        var3 = _closure1_slot19;
        var2 = {};
        var20 = var2;
        var19 = var11;
        var1 = copyDataProperties(var20, var19);
        var1 = 'action';
        var2[var1] = var9;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = _closure1_slot1;
        var15 = _closure1_slot2;
        var2 = 12;
        var2 = var15[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot12;
        var3 = var2.USER_PROFILE_WISHLIST_ACTION;
        var2 = {};
        var13 = _closure1_slot0;
        var12 = 13;
        var16 = var15[var12];
        var17 = var13.bind(var1)(var16);
        var16 = var17.collectGuildAnalyticsMetadata;
        var19 = var16.bind(var17)(var18);
        var20 = var2;
        var16 = copyDataProperties(var20, var19);
        var12 = var15[var12];
        var13 = var13.bind(var1)(var12);
        var12 = var13.collectChannelAnalyticsMetadataFromId;
        var19 = var12.bind(var13)(var14);
        var20 = var2;
        var12 = copyDataProperties(var20, var19);
        var6 = _closure1_slot17;
        var19 = var6.bind(var1)(var11);
        var20 = var2;
        var6 = copyDataProperties(var20, var19);
        var6 = 'location_stack';
        var2[var6] = var10;
        var6 = 'action_type';
        var2[var6] = var9;
        var6 = 'wishlist_id';
        var2[var6] = var8;
        var6 = 'sku_id';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackUserProfileWishlistAction'] = var2;
    return var1;
})();