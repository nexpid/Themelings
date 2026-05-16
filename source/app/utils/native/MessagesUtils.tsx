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
                    var4 = var4.SOCIAL_LAYER_STOREFRONT_APP;
                    if(!(var7 !== var4)) { _fun0003_ip = 55; continue _fun0003 }
case 57:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.QUESTS_EMBED;
                    if(!(var7 !== var4)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.APP_DIRECTORY_STOREFRONT;
                    if(!(var7 !== var4)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.APP_DIRECTORY_STOREFRONT_SKU;
                    if(!(var7 !== var4)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.APP_OAUTH2_LINK;
                    if(!(var7 !== var4)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.CodedLinkType;
                    var4 = var4.COLLECTIBLES_SHOP;
                    if(!(var7 !== var4)) { _fun0003_ip = 66; continue _fun0003 }
case 67:
                    var4 = global;
                    var5 = var4.Error;
                    var4 = var4.HermesInternal;
                    var6 = var4.concat;
                    var4 = 'Unknown coded link type: ';
                    var4 = var6.bind(var4)(var7);
                    var4 = var5.bind(var1)(var4);
                    throw var4;
case 66:
                    var4 = false;
                    return var4;
case 64:
                    var4 = _closure2_slot0;
                    var6 = var4.applicationAssetFetchingIds;
                    var4 = _closure2_slot1;
                    var4 = var4.applicationAssetFetchingIds;
                    var4 = var6 !== var4;
                    if(var4) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                    var6 = _closure2_slot0;
                    var6 = var6.invalidApplicationIds;
                    var5 = _closure2_slot1;
                    var5 = var5.invalidApplicationIds;
                    var4 = var6 !== var5;
case 68:
                    return var4;
case 62:
                    var4 = false;
                    return var4;
case 60:
                    var4 = false;
                    return var4;
case 58:
                    var4 = _closure2_slot0;
                    var6 = var4.quests;
                    var4 = _closure2_slot1;
                    var4 = var4.quests;
                    var4 = var6 !== var4;
                    if(var4) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                    var6 = _closure2_slot0;
                    var6 = var6.isFetchingCurrentQuests;
                    var5 = _closure2_slot1;
                    var5 = var5.isFetchingCurrentQuests;
                    var4 = var6 !== var5;
case 70:
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
                    if(var4) { _fun0003_ip = 72; continue _fun0003 }
case 73:
                    var8 = _closure2_slot0;
                    var9 = var8.invalidApplicationIds;
                    var8 = _closure2_slot1;
                    var8 = var8.invalidApplicationIds;
                    var4 = var9 !== var8;
case 72:
                    if(var4) { _fun0003_ip = 74; continue _fun0003 }
case 75:
                    var8 = _closure2_slot0;
                    var8 = var8.applicationAssetFetchingIds;
                    var7 = _closure2_slot1;
                    var7 = var7.applicationAssetFetchingIds;
                    var4 = var8 !== var7;
case 74:
                    if(var4) { _fun0003_ip = 76; continue _fun0003 }
case 77:
                    var7 = null;
                    var9 = var7 == var5;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 78; continue _fun0003 }
case 79:
                    var8 = var5.state;
case 78:
                    var9 = var7 == var6;
                    var5 = undefined;
                    if(var9) { _fun0003_ip = 80; continue _fun0003 }
case 81:
                    var5 = var6.state;
case 80:
                    var5 = var8 !== var5;
                    if(!var5) { _fun0003_ip = 82; continue _fun0003 }
case 83:
                    var8 = var7 == var6;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 84; continue _fun0003 }
case 85:
                    var7 = var6.state;
case 84:
                    var6 = _closure1_slot2;
                    var6 = var6.RESOLVING;
                    var5 = var7 !== var6;
case 82:
                    var4 = var5;
case 76:
                    return var4;
case 47:
                    var4 = _closure2_slot0;
                    var6 = var4.activityParticipants;
                    var4 = _closure2_slot1;
                    var4 = var4.activityParticipants;
                    var4 = var6 !== var4;
                    if(var4) { _fun0003_ip = 86; continue _fun0003 }
case 87:
                    var6 = _closure2_slot0;
                    var7 = var6.invalidApplicationIds;
                    var6 = _closure2_slot1;
                    var6 = var6.invalidApplicationIds;
                    var4 = var7 !== var6;
case 86:
                    if(var4) { _fun0003_ip = 88; continue _fun0003 }
case 89:
                    var6 = _closure2_slot0;
                    var6 = var6.applicationAssetFetchingIds;
                    var5 = _closure2_slot1;
                    var5 = var5.applicationAssetFetchingIds;
                    var4 = var6 !== var5;
case 88:
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
                    if(var4) { _fun0003_ip = 90; continue _fun0003 }
case 91:
                    var4 = var8 !== var7;
case 90:
                    if(var4) { _fun0003_ip = 92; continue _fun0003 }
case 93:
                    var4 = var6 !== var5;
case 92:
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
                    if(var8) { _fun0003_ip = 94; continue _fun0003 }
case 95:
                    var7 = var4.state;
case 94:
                    var8 = var6 == var5;
                    var4 = undefined;
                    if(var8) { _fun0003_ip = 96; continue _fun0003 }
case 97:
                    var4 = var5.state;
case 96:
                    var4 = var7 !== var4;
                    if(!var4) { _fun0003_ip = 98; continue _fun0003 }
case 99:
                    var7 = var6 == var5;
                    var6 = undefined;
                    if(var7) { _fun0003_ip = 100; continue _fun0003 }
case 101:
                    var6 = var5.state;
case 100:
                    var5 = _closure1_slot4;
                    var5 = var5.RESOLVING;
                    var4 = var6 !== var5;
case 98:
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
                    if(var9) { _fun0003_ip = 102; continue _fun0003 }
case 103:
                    var8 = var4.state;
case 102:
                    var9 = var7 == var6;
                    var4 = undefined;
                    if(var9) { _fun0003_ip = 104; continue _fun0003 }
case 105:
                    var4 = var6.state;
case 104:
                    var4 = var8 !== var4;
                    if(!var4) { _fun0003_ip = 106; continue _fun0003 }
case 107:
                    var8 = var7 == var6;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 108; continue _fun0003 }
case 109:
                    var7 = var6.state;
case 108:
                    var6 = _closure1_slot2;
                    var6 = var6.RESOLVING;
                    var4 = var7 !== var6;
case 106:
                    if(var4) { _fun0003_ip = 110; continue _fun0003 }
case 111:
                    var4 = var5;
case 110:
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
                    if(!var2) { _fun0003_ip = 112; continue _fun0003 }
case 113:
                    var4 = _closure2_slot0;
                    var4 = var4.experimentEmbeds;
                    var4 = var4.legacyExperiments;
                    var9 = var5 == var4;
                    var6 = undefined;
                    if(var9) { _fun0003_ip = 114; continue _fun0003 }
case 115:
                    var6 = var4[var8];
case 114:
                    var4 = _closure2_slot1;
                    var4 = var4.experimentEmbeds;
                    var9 = var4.legacyExperiments;
                    var10 = var5 == var9;
                    var4 = undefined;
                    if(var10) { _fun0003_ip = 116; continue _fun0003 }
case 117:
                    var4 = var9[var8];
case 116:
                    var4 = var6 !== var4;
                    if(var4) { _fun0003_ip = 118; continue _fun0003 }
case 119:
                    var6 = _closure2_slot0;
                    var6 = var6.experimentEmbeds;
                    var6 = var6.legacyOverridesInfo;
                    var10 = var5 == var6;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 120; continue _fun0003 }
case 121:
                    var9 = var6[var8];
case 120:
                    var6 = _closure2_slot1;
                    var6 = var6.experimentEmbeds;
                    var10 = var6.legacyOverridesInfo;
                    var11 = var5 == var10;
                    var6 = undefined;
                    if(var11) { _fun0003_ip = 122; continue _fun0003 }
case 123:
                    var6 = var10[var8];
case 122:
                    var4 = var9 !== var6;
case 118:
                    if(var4) { _fun0003_ip = 124; continue _fun0003 }
case 125:
                    var6 = _closure2_slot0;
                    var6 = var6.experimentEmbeds;
                    var6 = var6.apexExperiments;
                    var10 = var5 == var6;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 126; continue _fun0003 }
case 127:
                    var9 = var6[var8];
case 126:
                    var6 = _closure2_slot1;
                    var6 = var6.experimentEmbeds;
                    var10 = var6.apexExperiments;
                    var11 = var5 == var10;
                    var6 = undefined;
                    if(var11) { _fun0003_ip = 128; continue _fun0003 }
case 129:
                    var6 = var10[var8];
case 128:
                    var4 = var9 !== var6;
case 124:
                    if(var4) { _fun0003_ip = 130; continue _fun0003 }
case 131:
                    var6 = _closure2_slot0;
                    var6 = var6.experimentEmbeds;
                    var9 = var6.apexOverridesInfo;
                    var10 = var5 == var9;
                    var6 = undefined;
                    if(var10) { _fun0003_ip = 132; continue _fun0003 }
case 133:
                    var6 = var9[var8];
case 132:
                    var7 = _closure2_slot1;
                    var7 = var7.experimentEmbeds;
                    var7 = var7.apexOverridesInfo;
                    var9 = var5 == var7;
                    var5 = undefined;
                    if(var9) { _fun0003_ip = 134; continue _fun0003 }
case 135:
                    var5 = var7[var8];
case 134:
                    var4 = var6 !== var5;
case 130:
                    var2 = var4;
case 112:
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
                    if(var6) { _fun0003_ip = 136; continue _fun0003 }
case 137:
                    var2 = var5.state;
case 136:
                    var4 = var4 == var3;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 138; continue _fun0003 }
case 139:
                    var1 = var3.state;
case 138:
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
            if(!var1) { _fun0004_ip = 140; continue _fun0004 }
case 141:
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
                    if(!(var6 === var5)) { _fun0005_ip = 142; continue _fun0005 }
case 143:
                    if(!(var4 === var3)) { _fun0005_ip = 142; continue _fun0005 }
case 15:
                    if(!(var2 === var1)) { _fun0005_ip = 142; continue _fun0005 }
case 144:
                    var1 = undefined;
                    return var1;
case 142:
                    var1 = true;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 140:
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
            if(!var1) { _fun0006_ip = 145; continue _fun0006 }
case 146:
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
                    if(!var1) { _fun0007_ip = 147; continue _fun0007 }
case 148:
                    var3 = _closure2_slot0;
                    var3 = var3.mediaPostPreviewEmbeds;
                    var3 = var3[var4];
                    var2 = _closure2_slot1;
                    var2 = var2.mediaPostPreviewEmbeds;
                    var2 = var2[var4];
                    var1 = var3 !== var2;
case 147:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 145:
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