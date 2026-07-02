// app/modules/user_profile/UserProfileAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function getProfileProperties(arg1) {
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
            var7 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
            var7 = 12;
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
            var9 = _closure1_slot13;
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
            var7 = 12;
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
            var9 = _closure1_slot13;
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
            var5 = _closure1_slot13;
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
            var5 = _closure1_slot13;
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
            var5 = _closure1_slot13;
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
            var2 = _closure1_slot13;
            var2 = var2.PROFILE_EFFECT;
            var2 = var3.bind(var1)(var2);
case 46:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getUserStatus(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot9;
            var2 = var3.getStatus;
            var5 = var2.bind(var3)(var4);
            var3 = _closure1_slot9;
            var2 = var3.isMobileOnline;
            var2 = var2.bind(var3)(var4);
            var3 = _closure1_slot16;
            var3 = var3.ONLINE;
            if(!(var5 === var3)) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            if(var2) { _fun0002_ip = 50; continue _fun0002 }
case 48:
            var1 = _closure1_slot16;
            var2 = var1.ONLINE;
            var1 = var5;
            if(!(var1 === var2)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-desktop';
            var1 = var4.bind(var3)(var5, var2);
case 51:
            _fun0002_ip = 53; continue _fun0002;
case 50:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-mobile';
            var1 = var4.bind(var3)(var5, var2);
case 53:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var6 = function getActivityType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var2 = null;
            var1 = var6;
            if(!(var2 != var1)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var2 = 'VOICE';
            if(!(var2 !== var6)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var5 = global;
            var8 = var5.Object;
            var7 = var8.keys;
            var4 = _closure1_slot14;
            var4 = var7.bind(var8)(var4);
            var7 = var5.Object;
            var5 = var7.values;
            var3 = _closure1_slot14;
            var5 = var5.bind(var7)(var3);
            var3 = var5.indexOf;
            var3 = var3.bind(var5)(var6);
            var2 = var4[var3];
case 56:
            var1 = var2;
case 54:
            return var1;
        }
    };
    var _closure1_slot19 = var6;
    var1 = function getTrackUserProfileProperties(arg1) {
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
            if(!(var1 === var3)) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var1 = true;
case 58:
            var4 = _closure1_slot11;
            var2 = var4.getUser;
            var5 = var2.bind(var4)(var5);
            var2 = null;
            if(!(var2 != var5)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 13;
            var4 = var12[var4];
            var13 = var10.bind(var3)(var4);
            var12 = var13.getDisplayProfile;
            var4 = var2 == var5;
            var10 = undefined;
            if(var4) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var10 = var5.id;
case 62:
            var4 = undefined;
            if(!var1) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var4 = var14;
case 64:
            var4 = var12.bind(var13)(var10, var4);
            var10 = null;
            if(!var1) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var1 = var2 != var14;
            var10 = null;
            if(!var1) { _fun0004_ip = 66; continue _fun0004 }
case 68:
            var13 = _closure1_slot8;
            var12 = var13.getMember;
            var15 = var2 == var5;
            var1 = undefined;
            if(var15) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var1 = var5.id;
case 69:
            var10 = var12.bind(var13)(var14, var1);
case 66:
            var1 = {};
            var1['profile_layout'] = var11;
            var1['profile_session_id'] = var9;
            var1['source_profile_session_id'] = var7;
            var9 = _closure1_slot17;
            var7 = {};
            var7['user'] = var5;
            var12 = var2 == var4;
            var11 = undefined;
            if(var12) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var11 = var4._userProfile;
case 16:
            var7['userProfile'] = var11;
            var7 = var9.bind(var3)(var7);
            var1['profile_properties'] = var7;
            var9 = _closure1_slot17;
            var7 = {};
            var7['guildMember'] = var10;
            var11 = var2 == var4;
            var10 = undefined;
            if(var11) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var10 = var4._guildMemberProfile;
case 71:
            var7['guildMemberProfile'] = var10;
            var7 = var9.bind(var3)(var7);
            var1['guild_profile_properties'] = var7;
            var10 = _closure1_slot9;
            var9 = var10.getActivities;
            var7 = var5.id;
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
            var9 = var2 == var4;
            var7 = undefined;
            if(var9) { _fun0004_ip = 73; continue _fun0004 }
case 28:
            var9 = var4.getBadges;
            var11 = var9.bind(var4)();
            var9 = var2 == var11;
            var7 = undefined;
            if(var9) { _fun0004_ip = 73; continue _fun0004 }
case 23:
            var10 = var11.map;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var10 = var10.bind(var11)(var9);
            var9 = var10.filter;
            var8 = function(arg1) {
                var2 = 'string';
                var1 = arg1;
                var1 = typeof var1;
                var1 = var2 === var1;
                return var1;
            };
            var7 = var9.bind(var10)(var8);
case 73:
            if(!(var2 == var7)) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var7 = new Array(0);
case 74:
            var1['profile_badges'] = var7;
            var8 = var5.avatarDecoration;
            var9 = var2 == var8;
            var7 = undefined;
            if(var9) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var7 = var8.skuId;
case 76:
            var1['avatar_decoration_sku_id'] = var7;
            var8 = var2 == var4;
            var7 = undefined;
            if(var8) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var8 = var4.profileEffect;
            var9 = var2 == var8;
            var7 = undefined;
            if(var9) { _fun0004_ip = 78; continue _fun0004 }
case 80:
            var7 = var8.skuId;
case 78:
            var1['profile_effect_sku_id'] = var7;
            var8 = var2 == var4;
            var7 = undefined;
            if(var8) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var8 = var4.profileFrame;
            var9 = var2 == var8;
            var7 = undefined;
            if(var9) { _fun0004_ip = 81; continue _fun0004 }
case 83:
            var7 = var8.skuId;
case 81:
            var1['profile_frame_sku_id'] = var7;
            var7 = _closure1_slot18;
            var6 = var5.id;
            var6 = var7.bind(var3)(var6);
            var1['user_status'] = var6;
            var7 = var2 == var4;
            var6 = undefined;
            if(var7) { _fun0004_ip = 84; continue _fun0004 }
case 42:
            var6 = var4.guildId;
case 84:
            var6 = var2 != var6;
            var1['is_guild_profile'] = var6;
            var5 = var5.bot;
            var1['is_bot_profile'] = var5;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0004_ip = 46; continue _fun0004 }
case 85:
            var3 = var4.private;
case 46:
            var2 = var2 != var3;
            if(!var2) { _fun0004_ip = 86; continue _fun0004 }
case 87:
            var2 = var3;
case 86:
            var1['is_private_to_viewer'] = var2;
            return var1;
case 60:
            var1 = {};
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var5 = function getTrackUserRelationshipProperties(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var6 = var1.userId;
            var4 = null;
            if(!(var4 != var6)) { _fun0005_ip = 88; continue _fun0005 }
case 89:
            var3 = _closure1_slot4;
            var1 = var3.getUserAffinity;
            var3 = var1.bind(var3)(var6);
            var1 = {};
            var1['related_user_id'] = var6;
            var7 = _closure1_slot10;
            var5 = var7.getRelationshipType;
            var5 = var5.bind(var7)(var6);
            var1['relationship_type'] = var5;
            var7 = _closure1_slot10;
            var5 = var7.getSince;
            var5 = var5.bind(var7)(var6);
            var1['related_since'] = var5;
            var7 = _closure1_slot12;
            var5 = var7.getMutualFriendsCount;
            var5 = var5.bind(var7)(var6);
            var1['num_mutual_friends'] = var5;
            var5 = _closure1_slot12;
            var2 = var5.getMutualGuilds;
            var6 = var2.bind(var5)(var6);
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0005_ip = 90; continue _fun0005 }
case 91:
            var5 = var6.length;
case 90:
            var1['num_mutual_guilds'] = var5;
            var6 = var4 == var3;
            var5 = undefined;
            if(var6) { _fun0005_ip = 92; continue _fun0005 }
case 93:
            var5 = var3.communicationProbability;
case 92:
            var1['communication_probability'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0005_ip = 94; continue _fun0005 }
case 95:
            var2 = var3.communicationRank;
case 94:
            var1['communication_rank'] = var2;
            return var1;
case 88:
            var1 = {};
            return var1;
        }
    };
    var _closure1_slot21 = var5;
    var1 = function getTrackUserProfileApplicationProperties(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var1 = {};
            var1['application_id'] = var6;
            var4 = null;
            var3 = var4 != var6;
            var2 = null;
            if(!var3) { _fun0006_ip = 61; continue _fun0006 }
case 96:
            var7 = _closure1_slot6;
            var5 = var7.getFetchStateForApplication;
            var7 = var5.bind(var7)(var6);
            var5 = _closure1_slot7;
            var5 = var5.FETCHED;
            var2 = null;
            if(!(var7 === var5)) { _fun0006_ip = 61; continue _fun0006 }
case 97:
            var5 = _closure1_slot6;
            var3 = var5.getNewestTokenForApplication;
            var3 = var3.bind(var5)(var6);
            var2 = var4 != var3;
case 61:
            var1['application_linked'] = var2;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var4 = function trackUserProfileAction(arg1) {
        var15 = arg1;
        var21 = var15.guildId;
        var17 = var15.channelId;
        var9 = var15.messageId;
        var8 = var15.roleId;
        var7 = var15.widgetType;
        var12 = var15.analyticsLocations;
        var11 = var15.action;
        var10 = var15.section;
        var13 = var15.applicationId;
        var3 = _closure1_slot1;
        var18 = _closure1_slot2;
        var1 = 14;
        var2 = var18[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot15;
        var3 = var2.USER_PROFILE_ACTION;
        var2 = {};
        var16 = _closure1_slot0;
        var14 = 15;
        var19 = var18[var14];
        var20 = var16.bind(var1)(var19);
        var19 = var20.collectGuildAnalyticsMetadata;
        var22 = var19.bind(var20)(var21);
        var23 = var2;
        var19 = copyDataProperties(var23, var22);
        var14 = var18[var14];
        var16 = var16.bind(var1)(var14);
        var14 = var16.collectChannelAnalyticsMetadataFromId;
        var22 = var14.bind(var16)(var17);
        var23 = var2;
        var14 = copyDataProperties(var23, var22);
        var14 = _closure1_slot20;
        var22 = var14.bind(var1)(var15);
        var23 = var2;
        var14 = copyDataProperties(var23, var22);
        var14 = _closure1_slot21;
        var22 = var14.bind(var1)(var15);
        var23 = var2;
        var14 = copyDataProperties(var23, var22);
        var6 = _closure1_slot22;
        var22 = var6.bind(var1)(var13);
        var23 = var2;
        var6 = copyDataProperties(var23, var22);
        var6 = 'location_stack';
        var2[5] = var12;
        var6 = 'profile_action';
        var2[5] = var11;
        var6 = 'profile_section';
        var2[5] = var10;
        var6 = 'source_message_id';
        var2[5] = var9;
        var6 = 'source_role_id';
        var2[5] = var8;
        var6 = 'widget_type';
        var2[5] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot23 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var11 = var9[var7];
    var11 = var10.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.FetchState;
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.TrackUserProfileProperties;
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.ActivityTypes;
    var _closure1_slot14 = var10;
    var7 = var7.AnalyticEvents;
    var _closure1_slot15 = var7;
    var7 = 11;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.StatusTypes;
    var _closure1_slot16 = var7;
    var7 = 17;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_profile/UserProfileAnalyticsUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getActivityType'] = var6;
    var3['getTrackUserRelationshipProperties'] = var5;
    var3['trackUserProfileAction'] = var4;
    var4 = function maybeTrackUserProfileUiViewed(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var14 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.isUserProfilePerformanceAnalyticsEnabled;
            var2 = 'UserProfileAnalyticsUtils';
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0007_ip = 98; continue _fun0007 }
case 99:
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
            if(!var5) { _fun0007_ip = 65; continue _fun0007 }
case 8:
            var2 = var9;
case 65:
            var2 = var2 <= var4;
            if(var2) { _fun0007_ip = 68; continue _fun0007 }
case 100:
            var15 = var3 != var8;
            var5 = 0;
            if(!var15) { _fun0007_ip = 101; continue _fun0007 }
case 102:
            var5 = var8;
case 101:
            var2 = var5 <= var4;
case 68:
            if(var2) { _fun0007_ip = 70; continue _fun0007 }
case 103:
            var5 = var3 != var7;
            var3 = 0;
            if(!var5) { _fun0007_ip = 104; continue _fun0007 }
case 105:
            var3 = var7;
case 104:
            var2 = var3 <= var4;
case 70:
            if(var2) { _fun0007_ip = 98; continue _fun0007 }
case 106:
            var3 = _closure1_slot1;
            var18 = _closure1_slot2;
            var2 = 14;
            var2 = var18[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot15;
            var3 = var2.USER_PROFILE_UI_VIEWED;
            var2 = {};
            var16 = _closure1_slot0;
            var15 = 15;
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
            var15 = _closure1_slot20;
            var22 = var15.bind(var1)(var14);
            var23 = var2;
            var15 = copyDataProperties(var23, var22);
            var6 = _closure1_slot21;
            var22 = var6.bind(var1)(var14);
            var23 = var2;
            var6 = copyDataProperties(var23, var22);
            var6 = 'location_stack';
            var2[5] = var13;
            var6 = 'profile_ui';
            var2[5] = var12;
            var6 = 'view_started_at';
            var2[5] = var11;
            var6 = 'fetch_started_at';
            var2[5] = var10;
            var6 = 'time_to_interactive_ms';
            var2[5] = var9;
            var6 = 'time_to_load_ms';
            var2[5] = var8;
            var6 = 'time_to_fetch_ms';
            var2[5] = var7;
            var2 = var4.bind(var5)(var3, var2);
case 98:
            return var1;
        }
    };
    var3['maybeTrackUserProfileUiViewed'] = var4;
    var4 = function trackUserProfileActivityJoined(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
            var1 = 14;
            var2 = var18[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot15;
            var3 = var2.USER_PROFILE_ACTIVITY_JOINED;
            var2 = {};
            var16 = _closure1_slot0;
            var12 = 15;
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
            var12 = _closure1_slot20;
            var22 = var12.bind(var1)(var15);
            var23 = var2;
            var12 = copyDataProperties(var23, var22);
            var12 = _closure1_slot21;
            var22 = var12.bind(var1)(var15);
            var23 = var2;
            var12 = copyDataProperties(var23, var22);
            var12 = 'location_stack';
            var2[11] = var14;
            var12 = null;
            var14 = var12 != var7;
            var12 = 'VOICE';
            if(var14) { _fun0008_ip = 107; continue _fun0008 }
case 108:
            var6 = _closure1_slot19;
            var12 = var6.bind(var1)(var13);
case 107:
            var6 = 'activity_type';
            var2[5] = var12;
            var6 = 'activity_name';
            var2[5] = var11;
            var6 = 'activity_platform';
            var2[5] = var10;
            var6 = 'activity_session_id';
            var2[5] = var9;
            var6 = 'application_id';
            var2[5] = var8;
            var6 = 'voice_channel_id';
            var2[5] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackUserProfileActivityJoined'] = var4;
    var4 = function trackUserProfileActivityAction(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
            var1 = 14;
            var2 = var20[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot15;
            var3 = var2.USER_PROFILE_ACTIVITY_ACTION;
            var2 = {};
            var18 = _closure1_slot0;
            var8 = 15;
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
            var8 = _closure1_slot20;
            var24 = var8.bind(var1)(var17);
            var25 = var2;
            var8 = copyDataProperties(var25, var24);
            var8 = _closure1_slot21;
            var24 = var8.bind(var1)(var17);
            var25 = var2;
            var8 = copyDataProperties(var25, var24);
            var8 = 'location_stack';
            var2[7] = var16;
            var8 = 'activity_action';
            var2[7] = var15;
            var8 = 'activity_display';
            var2[7] = var13;
            var13 = _closure1_slot19;
            var8 = null;
            if(!(var8 == var12)) { _fun0009_ip = 109; continue _fun0009 }
case 110:
            var15 = var8 == var11;
            var12 = undefined;
            if(var15) { _fun0009_ip = 111; continue _fun0009 }
case 112:
            var12 = var11.type;
case 111:
            _fun0009_ip = 113; continue _fun0009;
case 109:
            var14 = _closure1_slot14;
            var12 = var14.STREAMING;
case 113:
            var13 = var13.bind(var1)(var12);
            var12 = 'activity_type';
            var2[11] = var13;
            var12 = var8 == var11;
            var13 = undefined;
            if(var12) { _fun0009_ip = 114; continue _fun0009 }
case 115:
            var13 = var11.name;
case 114:
            var12 = 'activity_name';
            var2[11] = var13;
            var12 = var8 == var11;
            var13 = undefined;
            if(var12) { _fun0009_ip = 116; continue _fun0009 }
case 117:
            var13 = var11.platform;
case 116:
            var12 = 'activity_platform';
            var2[11] = var13;
            var12 = var8 == var11;
            var13 = undefined;
            if(var12) { _fun0009_ip = 118; continue _fun0009 }
case 119:
            var13 = var11.session_id;
case 118:
            var12 = 'activity_session_id';
            var2[11] = var13;
            var13 = var8 == var11;
            var12 = undefined;
            if(var13) { _fun0009_ip = 120; continue _fun0009 }
case 121:
            var12 = var11.application_id;
case 120:
            var11 = 'activity_application_id';
            var2[10] = var12;
            var11 = var8 == var10;
            var12 = undefined;
            if(var11) { _fun0009_ip = 33; continue _fun0009 }
case 122:
            var12 = var10.id;
case 33:
            var11 = 'item_id';
            var2[10] = var12;
            var12 = var8 == var10;
            var11 = undefined;
            if(var12) { _fun0009_ip = 123; continue _fun0009 }
case 124:
            var11 = var10.author_id;
case 123:
            var10 = 'author_id_v2';
            var2[9] = var11;
            var10 = var8 == var9;
            var11 = undefined;
            if(var10) { _fun0009_ip = 80; continue _fun0009 }
case 125:
            var13 = var9.entries;
            var12 = var13.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var11 = var12.bind(var13)(var10);
case 80:
            var10 = 'item_ids';
            var2[9] = var11;
            var10 = var8 == var9;
            var8 = undefined;
            if(var10) { _fun0009_ip = 81; continue _fun0009 }
case 126:
            var10 = var9.entries;
            var9 = var10.map;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.author_id;
                return var1;
            };
            var8 = var9.bind(var10)(var6);
case 81:
            var6 = 'author_ids_v2';
            var2[5] = var8;
            var6 = 'voice_channel_id';
            var2[5] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackUserProfileActivityAction'] = var4;
    var4 = function trackUserProfileBadgeAction(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var12 = arg1;
            var19 = var12.guildId;
            var15 = var12.channelId;
            var11 = var12.analyticsLocations;
            var9 = var12.badgeId;
            var10 = var12.badgeAction;
            var7 = var12.position;
            var5 = var12.userId;
            var2 = null;
            var3 = var2 != var9;
            var1 = undefined;
            var8 = undefined;
            if(!var3) { _fun0010_ip = 127; continue _fun0010 }
case 128:
            var3 = var2 != var5;
            var8 = undefined;
            if(!var3) { _fun0010_ip = 127; continue _fun0010 }
case 129:
            var4 = _closure1_slot3;
            var3 = var4.getBadgeById;
            var3 = var3.bind(var4)(var9, var5);
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0010_ip = 51; continue _fun0010 }
case 130:
            var2 = var3.current_tier;
case 51:
            var8 = var2;
case 127:
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 14;
            var2 = var16[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot15;
            var3 = var2.USER_PROFILE_BADGE_ACTION;
            var2 = {};
            var14 = _closure1_slot0;
            var13 = 15;
            var17 = var16[var13];
            var18 = var14.bind(var1)(var17);
            var17 = var18.collectGuildAnalyticsMetadata;
            var20 = var17.bind(var18)(var19);
            var21 = var2;
            var17 = copyDataProperties(var21, var20);
            var13 = var16[var13];
            var14 = var14.bind(var1)(var13);
            var13 = var14.collectChannelAnalyticsMetadataFromId;
            var20 = var13.bind(var14)(var15);
            var21 = var2;
            var13 = copyDataProperties(var21, var20);
            var13 = _closure1_slot20;
            var20 = var13.bind(var1)(var12);
            var21 = var2;
            var13 = copyDataProperties(var21, var20);
            var6 = _closure1_slot21;
            var20 = var6.bind(var1)(var12);
            var21 = var2;
            var6 = copyDataProperties(var21, var20);
            var6 = 'location_stack';
            var2[5] = var11;
            var6 = 'badge_action';
            var2[5] = var10;
            var6 = 'badge_id';
            var2[5] = var9;
            var6 = 'badge_tier';
            var2[5] = var8;
            var6 = 'position';
            var2[5] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackUserProfileBadgeAction'] = var4;
    var4 = function trackDmProfileToggled(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var8 = var1.displayProfile;
            var11 = var1.isProfileOpen;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var7 = null;
            var3 = var7 == var8;
            var9 = undefined;
            if(var3) { _fun0011_ip = 131; continue _fun0011 }
case 132:
            var9 = var8.userId;
case 131:
            _closure2_slot0 = var9;
            var3 = var7 != var9;
            var13 = null;
            if(!var3) { _fun0011_ip = 133; continue _fun0011 }
case 134:
            var4 = _closure1_slot9;
            var3 = var4.findActivity;
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var5 = _closure1_slot5;
                    var4 = var5.getAnyStreamForUser;
                    var1 = _closure2_slot0;
                    var4 = var4.bind(var5)(var1);
                    var1 = null;
                    if(!(var1 == var4)) { _fun0012_ip = 135; continue _fun0012 }
case 136:
                    var1 = _closure1_slot14;
                    var1 = var1.CUSTOM_STATUS;
                    var1 = var3 !== var1;
                    _fun0012_ip = 137; continue _fun0012;
case 135:
                    var2 = _closure1_slot14;
                    var2 = var2.PLAYING;
                    var1 = var3 === var2;
case 137:
                    return var1;
                }
            };
            var13 = var3.bind(var4)(var9, var2);
case 133:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot15;
            var3 = var2.DM_PROFILE_TOGGLED;
            var2 = {};
            var12 = _closure1_slot20;
            var10 = {};
            var10['userId'] = var9;
            var15 = var12.bind(var1)(var10);
            var16 = var2;
            var10 = copyDataProperties(var16, var15);
            var10 = 'is_profile_open';
            var2[9] = var11;
            var10 = global;
            var11 = var10.Boolean;
            var12 = var7 == var13;
            var10 = undefined;
            if(var12) { _fun0011_ip = 138; continue _fun0011 }
case 69:
            var12 = var13.assets;
            var14 = var7 == var12;
            var10 = undefined;
            if(var14) { _fun0011_ip = 138; continue _fun0011 }
case 139:
            var10 = var12.large_image;
case 138:
            if(!(var7 == var10)) { _fun0011_ip = 140; continue _fun0011 }
case 141:
            var14 = var7 == var13;
            var12 = undefined;
            if(var14) { _fun0011_ip = 142; continue _fun0011 }
case 143:
            var13 = var13.assets;
            var14 = var7 == var13;
            var12 = undefined;
            if(var14) { _fun0011_ip = 142; continue _fun0011 }
case 144:
            var12 = var13.small_image;
case 142:
            var10 = var12;
case 140:
            var11 = var11.bind(var1)(var10);
            var10 = 'has_images';
            var2[9] = var11;
            var10 = _closure1_slot10;
            var6 = var10.isFriend;
            var10 = var6.bind(var10)(var9);
            var6 = 'is_friend';
            var2[5] = var10;
            var6 = 'viewed_profile_user_id';
            var2[5] = var9;
            var6 = var7 == var8;
            var9 = undefined;
            if(var6) { _fun0011_ip = 145; continue _fun0011 }
case 146:
            var6 = var8.hasPremiumCustomization;
            var9 = var6.bind(var8)();
case 145:
            var6 = 'profile_has_nitro_customization';
            var2[5] = var9;
            var6 = var7 == var8;
            var9 = undefined;
            if(var6) { _fun0011_ip = 147; continue _fun0011 }
case 148:
            var6 = var8.hasThemeColors;
            var9 = var6.bind(var8)();
case 147:
            var6 = 'profile_has_theme_color_customized';
            var2[5] = var9;
            var9 = var7 == var8;
            var6 = undefined;
            if(var9) { _fun0011_ip = 149; continue _fun0011 }
case 150:
            var6 = var8.popoutAnimationParticleType;
case 149:
            var7 = var7 != var6;
            var6 = 'profile_has_theme_animation';
            var2[5] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackDmProfileToggled'] = var4;
    var4 = function trackUserProfileEditAction(arg1) {
        var15 = arg1;
        var21 = var15.guildId;
        var17 = var15.channelId;
        var13 = var15.analyticsLocations;
        var12 = var15.action;
        var11 = var15.widgetEdited;
        var10 = var15.gameId;
        var9 = var15.numResults;
        var8 = var15.numCharacters;
        var7 = var15.applicationId;
        var3 = _closure1_slot23;
        var2 = {};
        var23 = var2;
        var22 = var15;
        var1 = copyDataProperties(var23, var22);
        var1 = 'action';
        var2[0] = var12;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = _closure1_slot1;
        var18 = _closure1_slot2;
        var2 = 14;
        var2 = var18[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot15;
        var3 = var2.USER_PROFILE_EDIT_ACTION;
        var2 = {};
        var16 = _closure1_slot0;
        var14 = 15;
        var19 = var18[var14];
        var20 = var16.bind(var1)(var19);
        var19 = var20.collectGuildAnalyticsMetadata;
        var22 = var19.bind(var20)(var21);
        var23 = var2;
        var19 = copyDataProperties(var23, var22);
        var14 = var18[var14];
        var16 = var16.bind(var1)(var14);
        var14 = var16.collectChannelAnalyticsMetadataFromId;
        var22 = var14.bind(var16)(var17);
        var23 = var2;
        var14 = copyDataProperties(var23, var22);
        var14 = _closure1_slot20;
        var22 = var14.bind(var1)(var15);
        var23 = var2;
        var14 = copyDataProperties(var23, var22);
        var6 = _closure1_slot22;
        var22 = var6.bind(var1)(var7);
        var23 = var2;
        var6 = copyDataProperties(var23, var22);
        var6 = 'location_stack';
        var2[5] = var13;
        var6 = 'edit_action';
        var2[5] = var12;
        var6 = 'widget_edited';
        var2[5] = var11;
        var6 = 'game_id';
        var2[5] = var10;
        var6 = 'num_results';
        var2[5] = var9;
        var6 = 'num_characters';
        var2[5] = var8;
        var6 = 'application_id';
        var2[5] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackUserProfileEditAction'] = var4;
    var4 = function trackUserProfileEditSaved(arg1) {
        var13 = arg1;
        var20 = var13.guildId;
        var16 = var13.channelId;
        var12 = var13.analyticsLocations;
        var11 = var13.widgetEdited;
        var10 = var13.gameIds;
        var9 = var13.tags;
        var8 = var13.numCharactersCommentary;
        var7 = var13.isWidgetRemoved;
        var3 = _closure1_slot23;
        var2 = {};
        var22 = var2;
        var21 = var13;
        var1 = copyDataProperties(var22, var21);
        var4 = 'EDIT_SAVED';
        var1 = 'action';
        var2[0] = var4;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = _closure1_slot1;
        var17 = _closure1_slot2;
        var2 = 14;
        var2 = var17[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot15;
        var3 = var2.USER_PROFILE_EDIT_SAVED;
        var2 = {};
        var15 = _closure1_slot0;
        var14 = 15;
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
        var6 = _closure1_slot20;
        var21 = var6.bind(var1)(var13);
        var22 = var2;
        var6 = copyDataProperties(var22, var21);
        var6 = 'location_stack';
        var2[5] = var12;
        var6 = 'widget_edited';
        var2[5] = var11;
        var6 = 'game_ids';
        var2[5] = var10;
        var6 = 'tags';
        var2[5] = var9;
        var6 = 'num_characters_commentary';
        var2[5] = var8;
        var6 = 'is_widget_removed';
        var2[5] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackUserProfileEditSaved'] = var4;
    var2 = function trackUserProfileWishlistAction(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var12 = arg1;
            var19 = var12.guildId;
            var15 = var12.channelId;
            var11 = var12.analyticsLocations;
            var10 = var12.action;
            var8 = var12.wishlistId;
            var7 = var12.skuId;
            var9 = var12.productLines;
            var3 = _closure1_slot23;
            var2 = {};
            var21 = var2;
            var20 = var12;
            var1 = copyDataProperties(var21, var20);
            var1 = 'action';
            var2[0] = var10;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 14;
            var2 = var16[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot15;
            var3 = var2.USER_PROFILE_WISHLIST_ACTION;
            var2 = {};
            var14 = _closure1_slot0;
            var13 = 15;
            var17 = var16[var13];
            var18 = var14.bind(var1)(var17);
            var17 = var18.collectGuildAnalyticsMetadata;
            var20 = var17.bind(var18)(var19);
            var21 = var2;
            var17 = copyDataProperties(var21, var20);
            var13 = var16[var13];
            var14 = var14.bind(var1)(var13);
            var13 = var14.collectChannelAnalyticsMetadataFromId;
            var20 = var13.bind(var14)(var15);
            var21 = var2;
            var13 = copyDataProperties(var21, var20);
            var6 = _closure1_slot20;
            var20 = var6.bind(var1)(var12);
            var21 = var2;
            var6 = copyDataProperties(var21, var20);
            var6 = 'location_stack';
            var2[5] = var11;
            var6 = 'action_type';
            var2[5] = var10;
            var6 = 'wishlist_id';
            var2[5] = var8;
            var6 = 'sku_id';
            var2[5] = var7;
            var6 = null;
            if(!(var6 == var9)) { _fun0013_ip = 110; continue _fun0013 }
case 151:
            var7 = new Array(0);
            _fun0013_ip = 72; continue _fun0013;
case 110:
            var6 = global;
            var8 = var6.Array;
            var6 = var8.from;
            var7 = var6.bind(var8)(var9);
case 72:
            var6 = 'product_lines';
            var2[5] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackUserProfileWishlistAction'] = var2;
    return var1;
})();