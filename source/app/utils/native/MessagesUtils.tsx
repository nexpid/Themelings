// app/utils/native/MessagesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.InviteStates;
    var _closure1_slot2 = var7;
    var2 = var2.MessageEmbedTypes;
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildTemplateStates;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function messageAuthorActivitiesChanged(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var4 = arg3;
            var5 = var3.messageAuthorActivities;
            var1 = var4.messageAuthorActivities;
            var1 = var5 !== var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var2.activity;
            var5 = null;
            var1 = var5 != var6;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var3.messageAuthorActivities;
            var3 = var2.author;
            var3 = var3.id;
            var3 = var5[var3];
            var4 = var4.messageAuthorActivities;
            var2 = var2.author;
            var2 = var2.id;
            var2 = var4[var2];
            var1 = var3 !== var2;
case 4:
            return var1;
        }
    };
    var2['messageAuthorActivitiesChanged'] = var7;
    var7 = function codedLinksChanged(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var5 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var1 = var4.codedLinks;
            var2 = var1.length;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = var6.invites;
            var2 = var5.invites;
            var2 = var7 !== var2;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = var6.appDirectoryEmbedApplications;
            var7 = var5.appDirectoryEmbedApplications;
            var2 = var8 !== var7;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var8 = var6.invalidAppDirectoryEmbedApplicationIds;
            var7 = var5.invalidAppDirectoryEmbedApplicationIds;
            var2 = var8 !== var7;
case 10:
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = var6.invalidApplicationIds;
            var7 = var5.invalidApplicationIds;
            var2 = var8 !== var7;
case 12:
            if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var8 = var6.appDirectoryEmbedApplicationFetchStates;
            var7 = var5.appDirectoryEmbedApplicationFetchStates;
            var2 = var8 !== var7;
case 14:
            if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var8 = var6.guildTemplates;
            var7 = var5.guildTemplates;
            var2 = var8 !== var7;
case 16:
            if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var8 = var6.buildOverrides;
            var7 = var5.buildOverrides;
            var2 = var8 !== var7;
case 18:
            if(var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var8 = var6.activityParticipants;
            var7 = var5.activityParticipants;
            var2 = var8 !== var7;
case 20:
            if(var2) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var8 = var6.quests;
            var7 = var5.quests;
            var2 = var8 !== var7;
case 22:
            if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var8 = var6.isFetchingCurrentQuests;
            var7 = var5.isFetchingCurrentQuests;
            var2 = var8 !== var7;
case 24:
            if(var2) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var8 = var6.applicationAssetFetchingIds;
            var7 = var5.applicationAssetFetchingIds;
            var2 = var8 !== var7;
case 26:
            if(var2) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var6 = var6.experimentEmbeds;
            var5 = var5.experimentEmbeds;
            var2 = var6 !== var5;
case 28:
            if(!var2) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var5 = var4.codedLinks;
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.type;
                    var3 = var1.code;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var6 = 2;
                    var4 = var1[var6];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.BUILD_OVERRIDE;
                    if(!(var7 !== var4)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.MANUAL_BUILD_OVERRIDE;
                    if(!(var7 !== var4)) { _fun0003_ip = 32; continue _fun0003 }
case 34:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.EXPERIMENT;
                    if(!(var7 !== var4)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.INVITE;
                    if(!(var7 !== var4)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.TEMPLATE;
                    if(!(var7 !== var4)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.EVENT;
                    if(!(var7 !== var4)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.CHANNEL_LINK;
                    if(!(var7 !== var4)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.APP_DIRECTORY_PROFILE;
                    if(!(var7 !== var4)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.ACTIVITY_BOOKMARK;
                    if(!(var7 !== var4)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.EMBEDDED_ACTIVITY_INVITE;
                    if(!(var7 !== var4)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.GUILD_PRODUCT;
                    if(!(var7 !== var4)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.SERVER_SHOP;
                    if(!(var7 !== var4)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.SOCIAL_LAYER_STOREFRONT;
                    if(!(var7 !== var4)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.QUESTS_EMBED;
                    if(!(var7 !== var4)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.APP_DIRECTORY_STOREFRONT;
                    if(!(var7 !== var4)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.APP_DIRECTORY_STOREFRONT_SKU;
                    if(!(var7 !== var4)) { _fun0003_ip = 61; continue _fun0003 }
case 62:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.APP_OAUTH2_LINK;
                    if(!(var7 !== var4)) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.COLLECTIBLES_SHOP;
                    if(!(var7 !== var4)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.GORILLA_DEEP_LINK;
                    if(!(var7 !== var4)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                    var4 = global;
                    var5 = var4.Error;
                    var4 = var4.HermesInternal;
                    var6 = var4.concat;
                    var4 = 'Unknown coded link type: ';
                    var4 = var6.bind(var4)(var7);
                    var4 = var5.bind(var1)(var4);
                    throw var4;
case 67:
                    var4 = false;
                    return var4;
case 65:
                    var4 = false;
                    return var4;
case 63:
                    var4 = _closure2_slot0;
                    var6 = var4.applicationAssetFetchingIds;
                    var4 = _closure2_slot1;
                    var4 = var4.applicationAssetFetchingIds;
                    var4 = var6 !== var4;
                    if(var4) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                    var6 = _closure2_slot0;
                    var6 = var6.invalidApplicationIds;
                    var5 = _closure2_slot1;
                    var5 = var5.invalidApplicationIds;
                    var4 = var6 !== var5;
case 69:
                    return var4;
case 61:
                    var4 = false;
                    return var4;
case 59:
                    var4 = false;
                    return var4;
case 57:
                    var4 = _closure2_slot0;
                    var6 = var4.quests;
                    var4 = _closure2_slot1;
                    var4 = var4.quests;
                    var4 = var6 !== var4;
                    if(var4) { _fun0003_ip = 71; continue _fun0003 }
case 72:
                    var6 = _closure2_slot0;
                    var6 = var6.isFetchingCurrentQuests;
                    var5 = _closure2_slot1;
                    var5 = var5.isFetchingCurrentQuests;
                    var4 = var6 !== var5;
case 71:
                    return var4;
case 55:
                    var4 = false;
                    return var4;
case 53:
                    var4 = false;
                    return var4;
case 51:
                    var4 = false;
                    return var4;
case 49:
                    var8 = _closure2_slot0;
                    var5 = var8.invites;
                    var4 = var5.get;
                    var5 = var4.bind(var5)(var3);
                    var4 = _closure2_slot1;
                    var9 = var4.invites;
                    var6 = var9.get;
                    var6 = var6.bind(var9)(var3);
                    var8 = var8.activityParticipants;
                    var4 = var4.activityParticipants;
                    var4 = var8 !== var4;
                    if(var4) { _fun0003_ip = 73; continue _fun0003 }
case 74:
                    var8 = _closure2_slot0;
                    var9 = var8.invalidApplicationIds;
                    var8 = _closure2_slot1;
                    var8 = var8.invalidApplicationIds;
                    var4 = var9 !== var8;
case 73:
                    if(var4) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                    var8 = _closure2_slot0;
                    var8 = var8.applicationAssetFetchingIds;
                    var7 = _closure2_slot1;
                    var7 = var7.applicationAssetFetchingIds;
                    var4 = var8 !== var7;
case 75:
                    if(var4) { _fun0003_ip = 77; continue _fun0003 }
case 78:
                    var7 = null;
                    var9 = var7 == var5;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 79; continue _fun0003 }
case 80:
                    var8 = var5.state;
case 79:
                    var9 = var7 == var6;
                    var5 = undefined;
                    if(var9) { _fun0003_ip = 81; continue _fun0003 }
case 82:
                    var5 = var6.state;
case 81:
                    var5 = var8 !== var5;
                    if(!var5) { _fun0003_ip = 83; continue _fun0003 }
case 84:
                    var8 = var7 == var6;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 85; continue _fun0003 }
case 86:
                    var7 = var6.state;
case 85:
                    var6 = _closure1_slot2;
                    var6 = var6.RESOLVING;
                    var5 = var7 !== var6;
case 83:
                    var4 = var5;
case 77:
                    return var4;
case 47:
                    var4 = _closure2_slot0;
                    var6 = var4.activityParticipants;
                    var4 = _closure2_slot1;
                    var4 = var4.activityParticipants;
                    var4 = var6 !== var4;
                    if(var4) { _fun0003_ip = 87; continue _fun0003 }
case 88:
                    var6 = _closure2_slot0;
                    var7 = var6.invalidApplicationIds;
                    var6 = _closure2_slot1;
                    var6 = var6.invalidApplicationIds;
                    var4 = var7 !== var6;
case 87:
                    if(var4) { _fun0003_ip = 89; continue _fun0003 }
case 90:
                    var6 = _closure2_slot0;
                    var6 = var6.applicationAssetFetchingIds;
                    var5 = _closure2_slot1;
                    var5 = var5.applicationAssetFetchingIds;
                    var4 = var6 !== var5;
case 89:
                    return var4;
case 45:
                    var6 = _closure2_slot0;
                    var5 = var6.appDirectoryEmbedApplications;
                    var9 = var5[var3];
                    var5 = _closure2_slot1;
                    var4 = var5.appDirectoryEmbedApplications;
                    var4 = var4[var3];
                    var8 = var6.invalidAppDirectoryEmbedApplicationIds;
                    var7 = var8.has;
                    var8 = var7.bind(var8)(var3);
                    var10 = var5.invalidAppDirectoryEmbedApplicationIds;
                    var7 = var10.has;
                    var7 = var7.bind(var10)(var3);
                    var6 = var6.appDirectoryEmbedApplicationFetchStates;
                    var6 = var6[var3];
                    var5 = var5.appDirectoryEmbedApplicationFetchStates;
                    var5 = var5[var3];
                    var4 = var9 !== var4;
                    if(var4) { _fun0003_ip = 91; continue _fun0003 }
case 92:
                    var4 = var8 !== var7;
case 91:
                    if(var4) { _fun0003_ip = 93; continue _fun0003 }
case 94:
                    var4 = var6 !== var5;
case 93:
                    return var4;
case 43:
                    var4 = false;
                    return var4;
case 41:
                    var4 = false;
                    return var4;
case 39:
                    var4 = _closure2_slot0;
                    var6 = var4.guildTemplates;
                    var4 = var6.get;
                    var4 = var4.bind(var6)(var3);
                    var5 = _closure2_slot1;
                    var6 = var5.guildTemplates;
                    var5 = var6.get;
                    var5 = var5.bind(var6)(var3);
                    var6 = null;
                    var8 = var6 == var4;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 95; continue _fun0003 }
case 96:
                    var7 = var4.state;
case 95:
                    var8 = var6 == var5;
                    var4 = undefined;
                    if(var8) { _fun0003_ip = 97; continue _fun0003 }
case 98:
                    var4 = var5.state;
case 97:
                    var4 = var7 !== var4;
                    if(!var4) { _fun0003_ip = 99; continue _fun0003 }
case 100:
                    var7 = var6 == var5;
                    var6 = undefined;
                    if(var7) { _fun0003_ip = 101; continue _fun0003 }
case 102:
                    var6 = var5.state;
case 101:
                    var5 = _closure1_slot4;
                    var5 = var5.RESOLVING;
                    var4 = var6 !== var5;
case 99:
                    return var4;
case 37:
                    var7 = _closure2_slot0;
                    var6 = var7.invites;
                    var4 = var6.get;
                    var4 = var4.bind(var6)(var3);
                    var5 = _closure2_slot1;
                    var8 = var5.invites;
                    var6 = var8.get;
                    var6 = var6.bind(var8)(var3);
                    var7 = var7.applicationAssetFetchingIds;
                    var5 = var5.applicationAssetFetchingIds;
                    var5 = var7 !== var5;
                    var7 = null;
                    var9 = var7 == var4;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 103; continue _fun0003 }
case 104:
                    var8 = var4.state;
case 103:
                    var9 = var7 == var6;
                    var4 = undefined;
                    if(var9) { _fun0003_ip = 105; continue _fun0003 }
case 106:
                    var4 = var6.state;
case 105:
                    var4 = var8 !== var4;
                    if(!var4) { _fun0003_ip = 107; continue _fun0003 }
case 108:
                    var8 = var7 == var6;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 109; continue _fun0003 }
case 110:
                    var7 = var6.state;
case 109:
                    var6 = _closure1_slot2;
                    var6 = var6.RESOLVING;
                    var4 = var7 !== var6;
case 107:
                    if(var4) { _fun0003_ip = 111; continue _fun0003 }
case 112:
                    var4 = var5;
case 111:
                    return var4;
case 35:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 3;
                    var2 = var5[var2];
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.getExperimentFromEmbedURL;
                    var8 = var2.bind(var4)(var3);
                    var5 = null;
                    var2 = var5 != var8;
                    if(!var2) { _fun0003_ip = 113; continue _fun0003 }
case 114:
                    var4 = _closure2_slot0;
                    var4 = var4.experimentEmbeds;
                    var4 = var4.legacyExperiments;
                    var9 = var5 == var4;
                    var6 = undefined;
                    if(var9) { _fun0003_ip = 115; continue _fun0003 }
case 116:
                    var6 = var4[var8];
case 115:
                    var4 = _closure2_slot1;
                    var4 = var4.experimentEmbeds;
                    var9 = var4.legacyExperiments;
                    var10 = var5 == var9;
                    var4 = undefined;
                    if(var10) { _fun0003_ip = 117; continue _fun0003 }
case 118:
                    var4 = var9[var8];
case 117:
                    var4 = var6 !== var4;
                    if(var4) { _fun0003_ip = 119; continue _fun0003 }
case 120:
                    var6 = _closure2_slot0;
                    var6 = var6.experimentEmbeds;
                    var6 = var6.legacyOverridesInfo;
                    var10 = var5 == var6;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 121; continue _fun0003 }
case 122:
                    var9 = var6[var8];
case 121:
                    var6 = _closure2_slot1;
                    var6 = var6.experimentEmbeds;
                    var10 = var6.legacyOverridesInfo;
                    var11 = var5 == var10;
                    var6 = undefined;
                    if(var11) { _fun0003_ip = 123; continue _fun0003 }
case 124:
                    var6 = var10[var8];
case 123:
                    var4 = var9 !== var6;
case 119:
                    if(var4) { _fun0003_ip = 125; continue _fun0003 }
case 126:
                    var6 = _closure2_slot0;
                    var6 = var6.experimentEmbeds;
                    var6 = var6.apexExperiments;
                    var10 = var5 == var6;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 127; continue _fun0003 }
case 128:
                    var9 = var6[var8];
case 127:
                    var6 = _closure2_slot1;
                    var6 = var6.experimentEmbeds;
                    var10 = var6.apexExperiments;
                    var11 = var5 == var10;
                    var6 = undefined;
                    if(var11) { _fun0003_ip = 129; continue _fun0003 }
case 130:
                    var6 = var10[var8];
case 129:
                    var4 = var9 !== var6;
case 125:
                    if(var4) { _fun0003_ip = 131; continue _fun0003 }
case 132:
                    var6 = _closure2_slot0;
                    var6 = var6.experimentEmbeds;
                    var9 = var6.apexOverridesInfo;
                    var10 = var5 == var9;
                    var6 = undefined;
                    if(var10) { _fun0003_ip = 133; continue _fun0003 }
case 134:
                    var6 = var9[var8];
case 133:
                    var7 = _closure2_slot1;
                    var7 = var7.experimentEmbeds;
                    var7 = var7.apexOverridesInfo;
                    var9 = var5 == var7;
                    var5 = undefined;
                    if(var9) { _fun0003_ip = 135; continue _fun0003 }
case 136:
                    var5 = var7[var8];
case 135:
                    var4 = var6 !== var5;
case 131:
                    var2 = var4;
case 113:
                    return var2;
case 32:
                    var4 = _closure2_slot0;
                    var4 = var4.buildOverrides;
                    var5 = var4[var3];
                    var2 = _closure2_slot1;
                    var2 = var2.buildOverrides;
                    var3 = var2[var3];
                    var4 = null;
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0003_ip = 137; continue _fun0003 }
case 138:
                    var2 = var5.state;
case 137:
                    var4 = var4 == var3;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 139; continue _fun0003 }
case 140:
                    var1 = var3.state;
case 139:
                    var1 = var2 !== var1;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
case 30:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var2['codedLinksChanged'] = var7;
    var7 = function giftCodesChanged(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = arg3;
            var _closure2_slot1 = var1;
            var1 = var3.giftCodes;
            var4 = var1.length;
            var1 = 0;
            var1 = var1 !== var4;
            if(!var1) { _fun0004_ip = 141; continue _fun0004 }
case 142:
            var4 = var3.giftCodes;
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var8 = arg1;
                    var2 = _closure2_slot0;
                    var4 = var2.resolvedGiftCodes;
                    var3 = var4.includes;
                    var6 = var3.bind(var4)(var8);
                    var1 = _closure2_slot1;
                    var4 = var1.resolvedGiftCodes;
                    var3 = var4.includes;
                    var5 = var3.bind(var4)(var8);
                    var4 = var2.resolvingGiftCodes;
                    var3 = var4.includes;
                    var4 = var3.bind(var4)(var8);
                    var7 = var1.resolvingGiftCodes;
                    var3 = var7.includes;
                    var3 = var3.bind(var7)(var8);
                    var7 = var2.acceptingGiftCodes;
                    var2 = var7.includes;
                    var2 = var2.bind(var7)(var8);
                    var7 = var1.acceptingGiftCodes;
                    var1 = var7.includes;
                    var1 = var1.bind(var7)(var8);
                    if(!(var6 === var5)) { _fun0005_ip = 143; continue _fun0005 }
case 144:
                    if(!(var4 === var3)) { _fun0005_ip = 143; continue _fun0005 }
case 15:
                    if(!(var2 === var1)) { _fun0005_ip = 143; continue _fun0005 }
case 145:
                    var1 = undefined;
                    return var1;
case 143:
                    var1 = true;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 141:
            return var1;
        }
    };
    var2['giftCodesChanged'] = var7;
    var4 = function mediaPostPreviewEmbedsChanged(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = arg3;
            var _closure2_slot1 = var1;
            var1 = arg1;
            var4 = var1.embeds;
            var3 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot3;
                var1 = var1.POST_PREVIEW;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var3.bind(var4)(var1);
            var3 = var4.length;
            var1 = 0;
            var1 = var1 !== var3;
            if(!var1) { _fun0006_ip = 146; continue _fun0006 }
case 147:
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getMediaPostEmbedChannelId;
                    var1 = arg1;
                    var1 = var1.url;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0007_ip = 148; continue _fun0007 }
case 149:
                    var3 = _closure2_slot0;
                    var3 = var3.mediaPostPreviewEmbeds;
                    var3 = var3[var4];
                    var2 = _closure2_slot1;
                    var2 = var2.mediaPostPreviewEmbeds;
                    var2 = var2[var4];
                    var1 = var3 !== var2;
case 148:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 146:
            return var1;
        }
    };
    var2['mediaPostPreviewEmbedsChanged'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/MessagesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();