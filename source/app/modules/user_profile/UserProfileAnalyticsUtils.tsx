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
 0:
            var2 = arg1;
            var6 = var2.user;
            var1 = var2.userProfile;
            var9 = var2.guildMember;
            var4 = var2.guildMemberProfile;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 35; continue _fun0001 }
 32:
            var4 = var1;
 35:
            var1 = new Array(0);
            var5 = global;
            var8 = var5.Boolean;
            var10 = var3 == var9;
            var2 = undefined;
            var7 = undefined;
            if(var10) { _fun0001_ip = 64; continue _fun0001 }
 58:
            var7 = var9.nick;
 64:
            var7 = var8.bind(var2)(var7);
            if(!var7) { _fun0001_ip = 95; continue _fun0001 }
 72:
            var8 = var1.push;
            var7 = _closure1_slot10;
            var7 = var7.NICKNAME;
            var7 = var8.bind(var1)(var7);
 95:
            var8 = var5.Boolean;
            var9 = var3 == var4;
            var7 = undefined;
            if(var9) { _fun0001_ip = 116; continue _fun0001 }
 110:
            var7 = var4.pronouns;
 116:
            var7 = var8.bind(var2)(var7);
            if(!var7) { _fun0001_ip = 147; continue _fun0001 }
 124:
            var8 = var1.push;
            var7 = _closure1_slot10;
            var7 = var7.PRONOUNS;
            var7 = var8.bind(var1)(var7);
 147:
            var8 = var5.Boolean;
            var9 = var3 == var6;
            var7 = undefined;
            if(var9) { _fun0001_ip = 168; continue _fun0001 }
 162:
            var7 = var6.avatar;
 168:
            var7 = var8.bind(var2)(var7);
            if(!var7) { _fun0001_ip = 256; continue _fun0001 }
 176:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 10;
            var7 = var10[var7];
            var10 = var8.bind(var2)(var7);
            var8 = var10.isAnimatedIconHash;
            var11 = var3 == var6;
            var7 = undefined;
            if(var11) { _fun0001_ip = 220; continue _fun0001 }
 214:
            var7 = var6.avatar;
 220:
            var7 = var8.bind(var10)(var7);
            var8 = var1.push;
            var9 = _closure1_slot10;
            if(var7) { _fun0001_ip = 245; continue _fun0001 }
 237:
            var7 = var9.AVATAR;
            _fun0001_ip = 251; continue _fun0001;
 245:
            var7 = var9.ANIMATED_AVATAR;
 251:
            var7 = var8.bind(var1)(var7);
 256:
            var8 = var5.Boolean;
            var9 = var3 == var4;
            var7 = undefined;
            if(var9) { _fun0001_ip = 277; continue _fun0001 }
 271:
            var7 = var4.banner;
 277:
            var7 = var8.bind(var2)(var7);
            if(!var7) { _fun0001_ip = 365; continue _fun0001 }
 285:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 10;
            var7 = var10[var7];
            var10 = var8.bind(var2)(var7);
            var8 = var10.isAnimatedIconHash;
            var11 = var3 == var4;
            var7 = undefined;
            if(var11) { _fun0001_ip = 329; continue _fun0001 }
 323:
            var7 = var4.banner;
 329:
            var7 = var8.bind(var10)(var7);
            var8 = var1.push;
            var9 = _closure1_slot10;
            if(var7) { _fun0001_ip = 354; continue _fun0001 }
 346:
            var7 = var9.BANNER;
            _fun0001_ip = 360; continue _fun0001;
 354:
            var7 = var9.ANIMATED_BANNER;
 360:
            var7 = var8.bind(var1)(var7);
 365:
            var7 = var5.Boolean;
            var8 = var3 == var4;
            var5 = undefined;
            if(var8) { _fun0001_ip = 386; continue _fun0001 }
 380:
            var5 = var4.bio;
 386:
            var5 = var7.bind(var2)(var5);
            if(!var5) { _fun0001_ip = 417; continue _fun0001 }
 394:
            var7 = var1.push;
            var5 = _closure1_slot10;
            var5 = var5.BIO;
            var5 = var7.bind(var1)(var5);
 417:
            var7 = var3 == var4;
            var5 = undefined;
            if(var7) { _fun0001_ip = 432; continue _fun0001 }
 426:
            var5 = var4.themeColors;
 432:
            var5 = var3 != var5;
            if(!var5) { _fun0001_ip = 466; continue _fun0001 }
 439:
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
 466:
            if(!var5) { _fun0001_ip = 492; continue _fun0001 }
 469:
            var7 = var1.push;
            var5 = _closure1_slot10;
            var5 = var5.THEME;
            var5 = var7.bind(var1)(var5);
 492:
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 507; continue _fun0001 }
 501:
            var5 = var6.avatarDecoration;
 507:
            if(!(var3 != var5)) { _fun0001_ip = 534; continue _fun0001 }
 511:
            var6 = var1.push;
            var5 = _closure1_slot10;
            var5 = var5.AVATAR_DECORATION;
            var5 = var6.bind(var1)(var5);
 534:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 549; continue _fun0001 }
 543:
            var2 = var4.profileEffect;
 549:
            if(!(var3 != var2)) { _fun0001_ip = 576; continue _fun0001 }
 553:
            var3 = var1.push;
            var2 = _closure1_slot10;
            var2 = var2.PROFILE_EFFECT;
            var2 = var3.bind(var1)(var2);
 576:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = function getUserStatus(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot6;
            var2 = var3.getStatus;
            var5 = var2.bind(var3)(var4);
            var2 = var3.isMobileOnline;
            var2 = var2.bind(var3)(var4);
            var3 = _closure1_slot13;
            var3 = var3.ONLINE;
            if(!(var5 === var3)) { _fun0002_ip = 49; continue _fun0002 }
 46:
            if(var2) { _fun0002_ip = 97; continue _fun0002 }
 49:
            var1 = _closure1_slot13;
            var2 = var1.ONLINE;
            var1 = var5;
            if(!(var1 === var2)) { _fun0002_ip = 95; continue _fun0002 }
 66:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-desktop';
            var1 = var4.bind(var3)(var5, var2);
 95:
            _fun0002_ip = 126; continue _fun0002;
 97:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-mobile';
            var1 = var4.bind(var3)(var5, var2);
 126:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var6 = function getActivityType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arg1;
            var2 = null;
            var1 = var6;
            if(!(var2 != var1)) { _fun0003_ip = 79; continue _fun0003 }
 12:
            var2 = 'VOICE';
            if(!(var2 !== var6)) { _fun0003_ip = 76; continue _fun0003 }
 20:
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
 76:
            var1 = var2;
 79:
            return var1;
        }
    };
    var _closure1_slot16 = var6;
    var4 = function getTrackUserProfileProperties(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var11 = var1.layout;
            var5 = var1.userId;
            var14 = var1.guildId;
            var9 = var1.sessionId;
            var7 = var1.sourceSessionId;
            var1 = var1.showGuildProfile;
            var3 = undefined;
            if(!(var1 === var3)) { _fun0004_ip = 47; continue _fun0004 }
 45:
            var1 = true;
 47:
            var4 = _closure1_slot8;
            var2 = var4.getUser;
            var2 = var2.bind(var4)(var5);
            var4 = null;
            if(!(var4 != var2)) { _fun0004_ip = 507; continue _fun0004 }
 74:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 11;
            var5 = var12[var5];
            var13 = var10.bind(var3)(var5);
            var12 = var13.getDisplayProfile;
            var5 = var4 == var2;
            var10 = undefined;
            if(var5) { _fun0004_ip = 114; continue _fun0004 }
 109:
            var10 = var2.id;
 114:
            var5 = undefined;
            if(!var1) { _fun0004_ip = 122; continue _fun0004 }
 119:
            var5 = var14;
 122:
            var5 = var12.bind(var13)(var10, var5);
            var10 = null;
            if(!var1) { _fun0004_ip = 172; continue _fun0004 }
 133:
            var1 = var4 != var14;
            var10 = null;
            if(!var1) { _fun0004_ip = 172; continue _fun0004 }
 142:
            var13 = _closure1_slot5;
            var12 = var13.getMember;
            var15 = var4 == var2;
            var1 = undefined;
            if(var15) { _fun0004_ip = 166; continue _fun0004 }
 161:
            var1 = var2.id;
 166:
            var10 = var12.bind(var13)(var14, var1);
 172:
            var1 = {};
            var1['profile_layout'] = var11;
            var1['profile_session_id'] = var9;
            var1['source_profile_session_id'] = var7;
            var9 = _closure1_slot14;
            var7 = {};
            var7['user'] = var2;
            var12 = var4 == var5;
            var11 = undefined;
            if(var12) { _fun0004_ip = 220; continue _fun0004 }
 214:
            var11 = var5._userProfile;
 220:
            var7['userProfile'] = var11;
            var7 = var9.bind(var3)(var7);
            var1['profile_properties'] = var7;
            var9 = _closure1_slot14;
            var7 = {};
            var7['guildMember'] = var10;
            var11 = var4 == var5;
            var10 = undefined;
            if(var11) { _fun0004_ip = 263; continue _fun0004 }
 257:
            var10 = var5._guildMemberProfile;
 263:
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
            if(var9) { _fun0004_ip = 380; continue _fun0004 }
 346:
            var9 = var5.getBadges;
            var10 = var9.bind(var5)();
            var9 = var4 == var10;
            var7 = undefined;
            if(var9) { _fun0004_ip = 380; continue _fun0004 }
 365:
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var7 = var9.bind(var10)(var8);
 380:
            var1['profile_badges'] = var7;
            var8 = var2.avatarDecoration;
            var9 = var4 == var8;
            var7 = undefined;
            if(var9) { _fun0004_ip = 408; continue _fun0004 }
 402:
            var7 = var8.skuId;
 408:
            var1['avatar_decoration_sku_id'] = var7;
            var8 = var4 == var5;
            var7 = undefined;
            if(var8) { _fun0004_ip = 443; continue _fun0004 }
 422:
            var8 = var5.profileEffect;
            var9 = var4 == var8;
            var7 = undefined;
            if(var9) { _fun0004_ip = 443; continue _fun0004 }
 437:
            var7 = var8.skuId;
 443:
            var1['profile_effect_sku_id'] = var7;
            var7 = _closure1_slot15;
            var6 = var2.id;
            var6 = var7.bind(var3)(var6);
            var1['user_status'] = var6;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0004_ip = 483; continue _fun0004 }
 478:
            var3 = var5.guildId;
 483:
            var3 = var4 != var3;
            var1['is_guild_profile'] = var3;
            var2 = var2.bot;
            var1['is_bot_profile'] = var2;
            return var1;
 507:
            var1 = {};
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var5 = function getTrackUserRelationshipProperties(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var6 = var1.userId;
            var4 = null;
            if(!(var4 != var6)) { _fun0005_ip = 178; continue _fun0005 }
 17:
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
            if(var7) { _fun0005_ip = 129; continue _fun0005 }
 124:
            var5 = var6.length;
 129:
            var1['num_mutual_guilds'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0005_ip = 151; continue _fun0005 }
 145:
            var5 = var3.communicationProbability;
 151:
            var1['communication_probability'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 171; continue _fun0005 }
 165:
            var2 = var3.communicationRank;
 171:
            var1['communication_rank'] = var2;
            return var1;
 178:
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
 0:
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
            if(!var2) { _fun0006_ip = 384; continue _fun0006 }
 57:
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
            if(!var5) { _fun0006_ip = 125; continue _fun0006 }
 122:
            var2 = var9;
 125:
            var2 = var2 <= var4;
            if(var2) { _fun0006_ip = 148; continue _fun0006 }
 132:
            var15 = var3 != var8;
            var5 = 0;
            if(!var15) { _fun0006_ip = 144; continue _fun0006 }
 141:
            var5 = var8;
 144:
            var2 = var5 <= var4;
 148:
            if(var2) { _fun0006_ip = 167; continue _fun0006 }
 151:
            var5 = var3 != var7;
            var3 = 0;
            if(!var5) { _fun0006_ip = 163; continue _fun0006 }
 160:
            var3 = var7;
 163:
            var2 = var3 <= var4;
 167:
            if(var2) { _fun0006_ip = 384; continue _fun0006 }
 173:
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
 384:
            return var1;
        }
    };
    var3['maybeTrackUserProfileUiViewed'] = var4;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
            if(var14) { _fun0007_ip = 222; continue _fun0007 }
 213:
            var6 = _closure1_slot16;
            var12 = var6.bind(var1)(var13);
 222:
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
 0:
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
            if(!(var8 == var12)) { _fun0008_ip = 253; continue _fun0008 }
 237:
            var15 = var8 == var11;
            var12 = undefined;
            if(var15) { _fun0008_ip = 251; continue _fun0008 }
 246:
            var12 = var11.type;
 251:
            _fun0008_ip = 263; continue _fun0008;
 253:
            var14 = _closure1_slot11;
            var12 = var14.STREAMING;
 263:
            var13 = var13.bind(var1)(var12);
            var12 = 'activity_type';
            var2[var12] = var13;
            var12 = var8 == var11;
            var13 = undefined;
            if(var12) { _fun0008_ip = 293; continue _fun0008 }
 288:
            var13 = var11.name;
 293:
            var12 = 'activity_name';
            var2[var12] = var13;
            var12 = var8 == var11;
            var13 = undefined;
            if(var12) { _fun0008_ip = 317; continue _fun0008 }
 311:
            var13 = var11.platform;
 317:
            var12 = 'activity_platform';
            var2[var12] = var13;
            var12 = var8 == var11;
            var13 = undefined;
            if(var12) { _fun0008_ip = 343; continue _fun0008 }
 337:
            var13 = var11.session_id;
 343:
            var12 = 'activity_session_id';
            var2[var12] = var13;
            var13 = var8 == var11;
            var12 = undefined;
            if(var13) { _fun0008_ip = 367; continue _fun0008 }
 361:
            var12 = var11.application_id;
 367:
            var11 = 'activity_application_id';
            var2[var11] = var12;
            var11 = var8 == var10;
            var12 = undefined;
            if(var11) { _fun0008_ip = 392; continue _fun0008 }
 387:
            var12 = var10.id;
 392:
            var11 = 'item_id';
            var2[var11] = var12;
            var12 = var8 == var10;
            var11 = undefined;
            if(var12) { _fun0008_ip = 418; continue _fun0008 }
 412:
            var11 = var10.author_id;
 418:
            var10 = 'author_id_v2';
            var2[var10] = var11;
            var10 = var8 == var9;
            var11 = undefined;
            if(var10) { _fun0008_ip = 459; continue _fun0008 }
 438:
            var13 = var9.entries;
            var12 = var13.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var11 = var12.bind(var13)(var10);
 459:
            var10 = 'item_ids';
            var2[var10] = var11;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0008_ip = 500; continue _fun0008 }
 479:
            var10 = var9.entries;
            var9 = var10.map;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.author_id;
                return var1;
            };
            var8 = var9.bind(var10)(var6);
 500:
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
 0:
            var1 = arg1;
            var8 = var1.displayProfile;
            var10 = var1.isProfileOpen;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var7 = null;
            var3 = var7 == var8;
            var6 = undefined;
            if(var3) { _fun0009_ip = 39; continue _fun0009 }
 34:
            var6 = var8.userId;
 39:
            _closure2_slot0 = var6;
            var3 = var7 != var6;
            var13 = null;
            if(!var3) { _fun0009_ip = 76; continue _fun0009 }
 52:
            var4 = _closure1_slot6;
            var3 = var4.findActivity;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var5 = _closure1_slot4;
                    var4 = var5.getAnyStreamForUser;
                    var1 = _closure2_slot0;
                    var4 = var4.bind(var5)(var1);
                    var1 = null;
                    if(!(var1 == var4)) { _fun0010_ip = 57; continue _fun0010 }
 41:
                    var1 = _closure1_slot11;
                    var1 = var1.CUSTOM_STATUS;
                    var1 = var3 !== var1;
                    _fun0010_ip = 71; continue _fun0010;
 57:
                    var2 = _closure1_slot11;
                    var2 = var2.PLAYING;
                    var1 = var3 === var2;
 71:
                    return var1;
                }
            };
            var13 = var3.bind(var4)(var6, var2);
 76:
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
            if(var12) { _fun0009_ip = 161; continue _fun0009 }
 140:
            var12 = var13.assets;
            var14 = var7 == var12;
            var10 = undefined;
            if(var14) { _fun0009_ip = 161; continue _fun0009 }
 155:
            var10 = var12.large_image;
 161:
            if(!(var7 == var10)) { _fun0009_ip = 198; continue _fun0009 }
 165:
            var14 = var7 == var13;
            var12 = undefined;
            if(var14) { _fun0009_ip = 195; continue _fun0009 }
 174:
            var13 = var13.assets;
            var14 = var7 == var13;
            var12 = undefined;
            if(var14) { _fun0009_ip = 195; continue _fun0009 }
 189:
            var12 = var13.small_image;
 195:
            var10 = var12;
 198:
            var10 = var11.bind(var1)(var10);
            var2['has_images'] = var10;
            var10 = _closure1_slot7;
            var9 = var10.isFriend;
            var9 = var9.bind(var10)(var6);
            var2['is_friend'] = var9;
            var2['viewed_profile_user_id'] = var6;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0009_ip = 254; continue _fun0009 }
 244:
            var9 = var8.hasPremiumCustomization;
            var6 = var9.bind(var8)();
 254:
            var2['profile_has_nitro_customization'] = var6;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0009_ip = 278; continue _fun0009 }
 268:
            var9 = var8.hasThemeColors;
            var6 = var9.bind(var8)();
 278:
            var2['profile_has_theme_color_customized'] = var6;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0009_ip = 298; continue _fun0009 }
 292:
            var6 = var8.popoutAnimationParticleType;
 298:
            var6 = var7 != var6;
            var2['profile_has_theme_animation'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackDmProfileToggled'] = var4;
    var2 = function(arg1) {
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
    var3['trackUserProfileEditAction'] = var2;
    return var1;
})();