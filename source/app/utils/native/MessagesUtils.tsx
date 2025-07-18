// app/utils/native/MessagesUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
 0:
            var2 = arg1;
            var3 = arg2;
            var4 = arg3;
            var5 = var3.messageAuthorActivities;
            var1 = var4.messageAuthorActivities;
            var1 = var5 !== var1;
            if(!var1) { _fun0001_ip = 40; continue _fun0001 }
 28:
            var6 = var2.activity;
            var5 = null;
            var1 = var5 != var6;
 40:
            if(!var1) { _fun0001_ip = 89; continue _fun0001 }
 43:
            var5 = var3.messageAuthorActivities;
            var3 = var2.author;
            var3 = var3.id;
            var3 = var5[var3];
            var4 = var4.messageAuthorActivities;
            var2 = var2.author;
            var2 = var2.id;
            var2 = var4[var2];
            var1 = var3 !== var2;
 89:
            return var1;
        }
    };
    var2['messageAuthorActivitiesChanged'] = var7;
    var7 = function codedLinksChanged(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var5 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var1 = var4.codedLinks;
            var2 = var1.length;
            var1 = 0;
            var1 = var1 !== var2;
            if(!var1) { _fun0002_ip = 297; continue _fun0002 }
 42:
            var7 = var6.invites;
            var2 = var5.invites;
            var2 = var7 !== var2;
            if(var2) { _fun0002_ip = 77; continue _fun0002 }
 61:
            var8 = var6.appDirectoryEmbedApplications;
            var7 = var5.appDirectoryEmbedApplications;
            var2 = var8 !== var7;
 77:
            if(var2) { _fun0002_ip = 96; continue _fun0002 }
 80:
            var8 = var6.invalidAppDirectoryEmbedApplicationIds;
            var7 = var5.invalidAppDirectoryEmbedApplicationIds;
            var2 = var8 !== var7;
 96:
            if(var2) { _fun0002_ip = 115; continue _fun0002 }
 99:
            var8 = var6.invalidApplicationIds;
            var7 = var5.invalidApplicationIds;
            var2 = var8 !== var7;
 115:
            if(var2) { _fun0002_ip = 134; continue _fun0002 }
 118:
            var8 = var6.appDirectoryEmbedApplicationFetchStates;
            var7 = var5.appDirectoryEmbedApplicationFetchStates;
            var2 = var8 !== var7;
 134:
            if(var2) { _fun0002_ip = 153; continue _fun0002 }
 137:
            var8 = var6.guildTemplates;
            var7 = var5.guildTemplates;
            var2 = var8 !== var7;
 153:
            if(var2) { _fun0002_ip = 172; continue _fun0002 }
 156:
            var8 = var6.buildOverrides;
            var7 = var5.buildOverrides;
            var2 = var8 !== var7;
 172:
            if(var2) { _fun0002_ip = 191; continue _fun0002 }
 175:
            var8 = var6.activityParticipants;
            var7 = var5.activityParticipants;
            var2 = var8 !== var7;
 191:
            if(var2) { _fun0002_ip = 210; continue _fun0002 }
 194:
            var8 = var6.quests;
            var7 = var5.quests;
            var2 = var8 !== var7;
 210:
            if(var2) { _fun0002_ip = 229; continue _fun0002 }
 213:
            var8 = var6.isFetchingCurrentQuests;
            var7 = var5.isFetchingCurrentQuests;
            var2 = var8 !== var7;
 229:
            if(var2) { _fun0002_ip = 248; continue _fun0002 }
 232:
            var8 = var6.applicationAssetFetchingIds;
            var7 = var5.applicationAssetFetchingIds;
            var2 = var8 !== var7;
 248:
            if(var2) { _fun0002_ip = 267; continue _fun0002 }
 251:
            var6 = var6.applications;
            var5 = var5.applications;
            var2 = var6 !== var5;
 267:
            if(!var2) { _fun0002_ip = 294; continue _fun0002 }
 270:
            var5 = var4.codedLinks;
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                    if(!(var7 !== var2)) { _fun0003_ip = 1417; continue _fun0003 }
 57:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.MANUAL_BUILD_OVERRIDE;
                    if(!(var7 !== var2)) { _fun0003_ip = 1417; continue _fun0003 }
 93:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.INVITE;
                    if(!(var7 !== var2)) { _fun0003_ip = 1285; continue _fun0003 }
 129:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.TEMPLATE;
                    if(!(var7 !== var2)) { _fun0003_ip = 1175; continue _fun0003 }
 165:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.EVENT;
                    if(!(var7 !== var2)) { _fun0003_ip = 1171; continue _fun0003 }
 201:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.CHANNEL_LINK;
                    if(!(var7 !== var2)) { _fun0003_ip = 1167; continue _fun0003 }
 237:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.APP_DIRECTORY_PROFILE;
                    if(!(var7 !== var2)) { _fun0003_ip = 1064; continue _fun0003 }
 273:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.ACTIVITY_BOOKMARK;
                    if(!(var7 !== var2)) { _fun0003_ip = 981; continue _fun0003 }
 309:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.EMBEDDED_ACTIVITY_INVITE;
                    if(!(var7 !== var2)) { _fun0003_ip = 795; continue _fun0003 }
 345:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.GUILD_PRODUCT;
                    if(!(var7 !== var2)) { _fun0003_ip = 791; continue _fun0003 }
 381:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.SERVER_SHOP;
                    if(!(var7 !== var2)) { _fun0003_ip = 787; continue _fun0003 }
 417:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.QUESTS_EMBED;
                    if(!(var7 !== var2)) { _fun0003_ip = 731; continue _fun0003 }
 453:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.APP_DIRECTORY_STOREFRONT;
                    if(!(var7 !== var2)) { _fun0003_ip = 727; continue _fun0003 }
 489:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.APP_DIRECTORY_STOREFRONT_SKU;
                    if(!(var7 !== var2)) { _fun0003_ip = 723; continue _fun0003 }
 525:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.APP_OAUTH2_LINK;
                    if(!(var7 !== var2)) { _fun0003_ip = 632; continue _fun0003 }
 558:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.COLLECTIBLES_SHOP;
                    if(!(var7 !== var2)) { _fun0003_ip = 628; continue _fun0003 }
 591:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'Unknown coded link type: ';
                    var2 = var6.bind(var2)(var7);
                    var2 = var4.bind(var1)(var2);
                    throw var2;
 628:
                    var2 = false;
                    return var2;
 632:
                    var2 = _closure2_slot0;
                    var2 = var2.applications;
                    var6 = var2[var3];
                    var2 = _closure2_slot1;
                    var2 = var2.applications;
                    var2 = var2[var3];
                    var2 = var6 !== var2;
                    if(var2) { _fun0003_ip = 694; continue _fun0003 }
 670:
                    var6 = _closure2_slot0;
                    var7 = var6.applicationAssetFetchingIds;
                    var6 = _closure2_slot1;
                    var6 = var6.applicationAssetFetchingIds;
                    var2 = var7 !== var6;
 694:
                    if(var2) { _fun0003_ip = 721; continue _fun0003 }
 697:
                    var6 = _closure2_slot0;
                    var6 = var6.invalidApplicationIds;
                    var4 = _closure2_slot1;
                    var4 = var4.invalidApplicationIds;
                    var2 = var6 !== var4;
 721:
                    return var2;
 723:
                    var2 = false;
                    return var2;
 727:
                    var2 = false;
                    return var2;
 731:
                    var2 = _closure2_slot0;
                    var6 = var2.quests;
                    var2 = _closure2_slot1;
                    var2 = var2.quests;
                    var2 = var6 !== var2;
                    if(var2) { _fun0003_ip = 785; continue _fun0003 }
 761:
                    var6 = _closure2_slot0;
                    var6 = var6.isFetchingCurrentQuests;
                    var4 = _closure2_slot1;
                    var4 = var4.isFetchingCurrentQuests;
                    var2 = var6 !== var4;
 785:
                    return var2;
 787:
                    var2 = false;
                    return var2;
 791:
                    var2 = false;
                    return var2;
 795:
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
                    if(var2) { _fun0003_ip = 881; continue _fun0003 }
 857:
                    var8 = _closure2_slot0;
                    var9 = var8.invalidApplicationIds;
                    var8 = _closure2_slot1;
                    var8 = var8.invalidApplicationIds;
                    var2 = var9 !== var8;
 881:
                    if(var2) { _fun0003_ip = 908; continue _fun0003 }
 884:
                    var8 = _closure2_slot0;
                    var8 = var8.applicationAssetFetchingIds;
                    var7 = _closure2_slot1;
                    var7 = var7.applicationAssetFetchingIds;
                    var2 = var8 !== var7;
 908:
                    if(var2) { _fun0003_ip = 979; continue _fun0003 }
 911:
                    var7 = null;
                    var9 = var7 == var4;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 927; continue _fun0003 }
 922:
                    var8 = var4.state;
 927:
                    var9 = var7 == var6;
                    var4 = undefined;
                    if(var9) { _fun0003_ip = 941; continue _fun0003 }
 936:
                    var4 = var6.state;
 941:
                    var4 = var8 !== var4;
                    if(!var4) { _fun0003_ip = 976; continue _fun0003 }
 948:
                    var8 = var7 == var6;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 962; continue _fun0003 }
 957:
                    var7 = var6.state;
 962:
                    var6 = _closure1_slot2;
                    var6 = var6.RESOLVING;
                    var4 = var7 !== var6;
 976:
                    var2 = var4;
 979:
                    return var2;
 981:
                    var2 = _closure2_slot0;
                    var6 = var2.activityParticipants;
                    var2 = _closure2_slot1;
                    var2 = var2.activityParticipants;
                    var2 = var6 !== var2;
                    if(var2) { _fun0003_ip = 1035; continue _fun0003 }
 1011:
                    var6 = _closure2_slot0;
                    var7 = var6.invalidApplicationIds;
                    var6 = _closure2_slot1;
                    var6 = var6.invalidApplicationIds;
                    var2 = var7 !== var6;
 1035:
                    if(var2) { _fun0003_ip = 1062; continue _fun0003 }
 1038:
                    var6 = _closure2_slot0;
                    var6 = var6.applicationAssetFetchingIds;
                    var4 = _closure2_slot1;
                    var4 = var4.applicationAssetFetchingIds;
                    var2 = var6 !== var4;
 1062:
                    return var2;
 1064:
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
                    if(var2) { _fun0003_ip = 1158; continue _fun0003 }
 1154:
                    var2 = var8 !== var7;
 1158:
                    if(var2) { _fun0003_ip = 1165; continue _fun0003 }
 1161:
                    var2 = var6 !== var4;
 1165:
                    return var2;
 1167:
                    var2 = false;
                    return var2;
 1171:
                    var2 = false;
                    return var2;
 1175:
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
                    if(var8) { _fun0003_ip = 1234; continue _fun0003 }
 1229:
                    var7 = var2.state;
 1234:
                    var8 = var6 == var4;
                    var2 = undefined;
                    if(var8) { _fun0003_ip = 1248; continue _fun0003 }
 1243:
                    var2 = var4.state;
 1248:
                    var2 = var7 !== var2;
                    if(!var2) { _fun0003_ip = 1283; continue _fun0003 }
 1255:
                    var7 = var6 == var4;
                    var6 = undefined;
                    if(var7) { _fun0003_ip = 1269; continue _fun0003 }
 1264:
                    var6 = var4.state;
 1269:
                    var4 = _closure1_slot4;
                    var4 = var4.RESOLVING;
                    var2 = var6 !== var4;
 1283:
                    return var2;
 1285:
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
                    if(var9) { _fun0003_ip = 1360; continue _fun0003 }
 1355:
                    var8 = var2.state;
 1360:
                    var9 = var6 == var7;
                    var2 = undefined;
                    if(var9) { _fun0003_ip = 1374; continue _fun0003 }
 1369:
                    var2 = var7.state;
 1374:
                    var2 = var8 !== var2;
                    if(!var2) { _fun0003_ip = 1409; continue _fun0003 }
 1381:
                    var8 = var6 == var7;
                    var6 = undefined;
                    if(var8) { _fun0003_ip = 1395; continue _fun0003 }
 1390:
                    var6 = var7.state;
 1395:
                    var5 = _closure1_slot2;
                    var5 = var5.RESOLVING;
                    var2 = var6 !== var5;
 1409:
                    if(var2) { _fun0003_ip = 1415; continue _fun0003 }
 1412:
                    var2 = var4;
 1415:
                    return var2;
 1417:
                    var4 = _closure2_slot0;
                    var4 = var4.buildOverrides;
                    var5 = var4[var3];
                    var2 = _closure2_slot1;
                    var2 = var2.buildOverrides;
                    var3 = var2[var3];
                    var4 = null;
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0003_ip = 1464; continue _fun0003 }
 1459:
                    var2 = var5.state;
 1464:
                    var4 = var4 == var3;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 1478; continue _fun0003 }
 1473:
                    var1 = var3.state;
 1478:
                    var1 = var2 !== var1;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
 294:
            var1 = var2;
 297:
            return var1;
        }
    };
    var2['codedLinksChanged'] = var7;
    var7 = function giftCodesChanged(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = arg3;
            var _closure2_slot1 = var1;
            var1 = var3.giftCodes;
            var4 = var1.length;
            var1 = 0;
            var1 = var1 !== var4;
            if(!var1) { _fun0004_ip = 63; continue _fun0004 }
 39:
            var4 = var3.giftCodes;
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                    if(!(var6 === var5)) { _fun0005_ip = 126; continue _fun0005 }
 114:
                    if(!(var4 === var3)) { _fun0005_ip = 126; continue _fun0005 }
 118:
                    if(!(var2 === var1)) { _fun0005_ip = 126; continue _fun0005 }
 122:
                    var1 = undefined;
                    return var1;
 126:
                    var1 = true;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
 63:
            return var1;
        }
    };
    var2['giftCodesChanged'] = var7;
    var4 = function mediaPostPreviewEmbedsChanged(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
            if(!var1) { _fun0006_ip = 74; continue _fun0006 }
 56:
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                    if(!var1) { _fun0007_ip = 88; continue _fun0007 }
 53:
                    var3 = _closure2_slot0;
                    var3 = var3.mediaPostPreviewEmbeds;
                    var3 = var3[var4];
                    var2 = _closure2_slot1;
                    var2 = var2.mediaPostPreviewEmbeds;
                    var2 = var2[var4];
                    var1 = var3 !== var2;
 88:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
 74:
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