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
            var6 = var6.applicationAssetFetchingIds;
            var5 = var5.applicationAssetFetchingIds;
            var2 = var6 !== var5;
case 26:
            if(!var2) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var5 = var4.codedLinks;
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.type;
                    var3 = var1.code;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var6 = 2;
                    var2 = var1[var6];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.BUILD_OVERRIDE;
                    if(!(var7 !== var2)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.MANUAL_BUILD_OVERRIDE;
                    if(!(var7 !== var2)) { _fun0003_ip = 30; continue _fun0003 }
case 32:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.INVITE;
                    if(!(var7 !== var2)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.TEMPLATE;
                    if(!(var7 !== var2)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.EVENT;
                    if(!(var7 !== var2)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.CHANNEL_LINK;
                    if(!(var7 !== var2)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.APP_DIRECTORY_PROFILE;
                    if(!(var7 !== var2)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.ACTIVITY_BOOKMARK;
                    if(!(var7 !== var2)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.EMBEDDED_ACTIVITY_INVITE;
                    if(!(var7 !== var2)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.GUILD_PRODUCT;
                    if(!(var7 !== var2)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.SERVER_SHOP;
                    if(!(var7 !== var2)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.QUESTS_EMBED;
                    if(!(var7 !== var2)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.APP_DIRECTORY_STOREFRONT;
                    if(!(var7 !== var2)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.APP_DIRECTORY_STOREFRONT_SKU;
                    if(!(var7 !== var2)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.APP_OAUTH2_LINK;
                    if(!(var7 !== var2)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.COLLECTIBLES_SHOP;
                    if(!(var7 !== var2)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'Unknown coded link type: ';
                    var2 = var6.bind(var2)(var7);
                    var2 = var4.bind(var1)(var2);
                    throw var2;
case 59:
                    var2 = false;
                    return var2;
case 57:
                    var2 = _closure2_slot0;
                    var6 = var2.applicationAssetFetchingIds;
                    var2 = _closure2_slot1;
                    var2 = var2.applicationAssetFetchingIds;
                    var2 = var6 !== var2;
                    if(var2) { _fun0003_ip = 61; continue _fun0003 }
case 62:
                    var6 = _closure2_slot0;
                    var6 = var6.invalidApplicationIds;
                    var4 = _closure2_slot1;
                    var4 = var4.invalidApplicationIds;
                    var2 = var6 !== var4;
case 61:
                    return var2;
case 55:
                    var2 = false;
                    return var2;
case 53:
                    var2 = false;
                    return var2;
case 51:
                    var2 = _closure2_slot0;
                    var6 = var2.quests;
                    var2 = _closure2_slot1;
                    var2 = var2.quests;
                    var2 = var6 !== var2;
                    if(var2) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                    var6 = _closure2_slot0;
                    var6 = var6.isFetchingCurrentQuests;
                    var4 = _closure2_slot1;
                    var4 = var4.isFetchingCurrentQuests;
                    var2 = var6 !== var4;
case 63:
                    return var2;
case 49:
                    var2 = false;
                    return var2;
case 47:
                    var2 = false;
                    return var2;
case 45:
                    var8 = _closure2_slot0;
                    var4 = var8.invites;
                    var2 = var4.get;
                    var4 = var2.bind(var4)(var3);
                    var2 = _closure2_slot1;
                    var9 = var2.invites;
                    var6 = var9.get;
                    var6 = var6.bind(var9)(var3);
                    var8 = var8.activityParticipants;
                    var2 = var2.activityParticipants;
                    var2 = var8 !== var2;
                    if(var2) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                    var8 = _closure2_slot0;
                    var9 = var8.invalidApplicationIds;
                    var8 = _closure2_slot1;
                    var8 = var8.invalidApplicationIds;
                    var2 = var9 !== var8;
case 65:
                    if(var2) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                    var8 = _closure2_slot0;
                    var8 = var8.applicationAssetFetchingIds;
                    var7 = _closure2_slot1;
                    var7 = var7.applicationAssetFetchingIds;
                    var2 = var8 !== var7;
case 67:
                    if(var2) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                    var7 = null;
                    var9 = var7 == var4;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 71; continue _fun0003 }
case 72:
                    var8 = var4.state;
case 71:
                    var9 = var7 == var6;
                    var4 = undefined;
                    if(var9) { _fun0003_ip = 73; continue _fun0003 }
case 74:
                    var4 = var6.state;
case 73:
                    var4 = var8 !== var4;
                    if(!var4) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                    var8 = var7 == var6;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 77; continue _fun0003 }
case 78:
                    var7 = var6.state;
case 77:
                    var6 = _closure1_slot2;
                    var6 = var6.RESOLVING;
                    var4 = var7 !== var6;
case 75:
                    var2 = var4;
case 69:
                    return var2;
case 43:
                    var2 = _closure2_slot0;
                    var6 = var2.activityParticipants;
                    var2 = _closure2_slot1;
                    var2 = var2.activityParticipants;
                    var2 = var6 !== var2;
                    if(var2) { _fun0003_ip = 79; continue _fun0003 }
case 80:
                    var6 = _closure2_slot0;
                    var7 = var6.invalidApplicationIds;
                    var6 = _closure2_slot1;
                    var6 = var6.invalidApplicationIds;
                    var2 = var7 !== var6;
case 79:
                    if(var2) { _fun0003_ip = 81; continue _fun0003 }
case 82:
                    var6 = _closure2_slot0;
                    var6 = var6.applicationAssetFetchingIds;
                    var4 = _closure2_slot1;
                    var4 = var4.applicationAssetFetchingIds;
                    var2 = var6 !== var4;
case 81:
                    return var2;
case 41:
                    var6 = _closure2_slot0;
                    var4 = var6.appDirectoryEmbedApplications;
                    var9 = var4[var3];
                    var4 = _closure2_slot1;
                    var2 = var4.appDirectoryEmbedApplications;
                    var2 = var2[var3];
                    var8 = var6.invalidAppDirectoryEmbedApplicationIds;
                    var7 = var8.has;
                    var8 = var7.bind(var8)(var3);
                    var10 = var4.invalidAppDirectoryEmbedApplicationIds;
                    var7 = var10.has;
                    var7 = var7.bind(var10)(var3);
                    var6 = var6.appDirectoryEmbedApplicationFetchStates;
                    var6 = var6[var3];
                    var4 = var4.appDirectoryEmbedApplicationFetchStates;
                    var4 = var4[var3];
                    var2 = var9 !== var2;
                    if(var2) { _fun0003_ip = 83; continue _fun0003 }
case 84:
                    var2 = var8 !== var7;
case 83:
                    if(var2) { _fun0003_ip = 85; continue _fun0003 }
case 86:
                    var2 = var6 !== var4;
case 85:
                    return var2;
case 39:
                    var2 = false;
                    return var2;
case 37:
                    var2 = false;
                    return var2;
case 35:
                    var2 = _closure2_slot0;
                    var6 = var2.guildTemplates;
                    var2 = var6.get;
                    var2 = var2.bind(var6)(var3);
                    var4 = _closure2_slot1;
                    var6 = var4.guildTemplates;
                    var4 = var6.get;
                    var4 = var4.bind(var6)(var3);
                    var6 = null;
                    var8 = var6 == var2;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 87; continue _fun0003 }
case 88:
                    var7 = var2.state;
case 87:
                    var8 = var6 == var4;
                    var2 = undefined;
                    if(var8) { _fun0003_ip = 89; continue _fun0003 }
case 90:
                    var2 = var4.state;
case 89:
                    var2 = var7 !== var2;
                    if(!var2) { _fun0003_ip = 91; continue _fun0003 }
case 92:
                    var7 = var6 == var4;
                    var6 = undefined;
                    if(var7) { _fun0003_ip = 93; continue _fun0003 }
case 94:
                    var6 = var4.state;
case 93:
                    var4 = _closure1_slot4;
                    var4 = var4.RESOLVING;
                    var2 = var6 !== var4;
case 91:
                    return var2;
case 33:
                    var6 = _closure2_slot0;
                    var7 = var6.invites;
                    var2 = var7.get;
                    var2 = var2.bind(var7)(var3);
                    var4 = _closure2_slot1;
                    var8 = var4.invites;
                    var7 = var8.get;
                    var7 = var7.bind(var8)(var3);
                    var6 = var6.applicationAssetFetchingIds;
                    var4 = var4.applicationAssetFetchingIds;
                    var4 = var6 !== var4;
                    var6 = null;
                    var9 = var6 == var2;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 95; continue _fun0003 }
case 96:
                    var8 = var2.state;
case 95:
                    var9 = var6 == var7;
                    var2 = undefined;
                    if(var9) { _fun0003_ip = 97; continue _fun0003 }
case 98:
                    var2 = var7.state;
case 97:
                    var2 = var8 !== var2;
                    if(!var2) { _fun0003_ip = 99; continue _fun0003 }
case 100:
                    var8 = var6 == var7;
                    var6 = undefined;
                    if(var8) { _fun0003_ip = 101; continue _fun0003 }
case 102:
                    var6 = var7.state;
case 101:
                    var5 = _closure1_slot2;
                    var5 = var5.RESOLVING;
                    var2 = var6 !== var5;
case 99:
                    if(var2) { _fun0003_ip = 103; continue _fun0003 }
case 104:
                    var2 = var4;
case 103:
                    return var2;
case 30:
                    var4 = _closure2_slot0;
                    var4 = var4.buildOverrides;
                    var5 = var4[var3];
                    var2 = _closure2_slot1;
                    var2 = var2.buildOverrides;
                    var3 = var2[var3];
                    var4 = null;
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0003_ip = 105; continue _fun0003 }
case 106:
                    var2 = var5.state;
case 105:
                    var4 = var4 == var3;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 107; continue _fun0003 }
case 108:
                    var1 = var3.state;
case 107:
                    var1 = var2 !== var1;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
case 28:
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
            if(!var1) { _fun0004_ip = 109; continue _fun0004 }
case 110:
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
                    if(!(var6 === var5)) { _fun0005_ip = 111; continue _fun0005 }
case 112:
                    if(!(var4 === var3)) { _fun0005_ip = 111; continue _fun0005 }
case 15:
                    if(!(var2 === var1)) { _fun0005_ip = 111; continue _fun0005 }
case 113:
                    var1 = undefined;
                    return var1;
case 111:
                    var1 = true;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 109:
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
            if(!var1) { _fun0006_ip = 114; continue _fun0006 }
case 115:
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getMediaPostEmbedChannelId;
                    var1 = arg1;
                    var1 = var1.url;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0007_ip = 116; continue _fun0007 }
case 117:
                    var3 = _closure2_slot0;
                    var3 = var3.mediaPostPreviewEmbeds;
                    var3 = var3[var4];
                    var2 = _closure2_slot1;
                    var2 = var2.mediaPostPreviewEmbeds;
                    var2 = var2[var4];
                    var1 = var3 !== var2;
case 116:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 114:
            return var1;
        }
    };
    var2['mediaPostPreviewEmbedsChanged'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/MessagesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();