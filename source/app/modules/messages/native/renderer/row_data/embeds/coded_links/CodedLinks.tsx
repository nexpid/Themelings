// app/modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function canSeeDevLinks() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot5;
            var1 = var2.getCurrentUser;
            var6 = var1.bind(var2)();
            var4 = null;
            var5 = var4 == var6;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.isStaff;
            var1 = var5.bind(var6)();
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot5;
            var5 = var6.getCurrentUser;
            var6 = var5.bind(var6)();
            var5 = var4 == var6;
            var2 = undefined;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var6.isStaffPersonal;
            var2 = var5.bind(var6)();
case 6:
            var1 = var2;
case 4:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot4;
            var2 = var6.getGuild;
            var5 = '943265993613008967';
            var2 = var2.bind(var6)(var5);
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot3;
            var3 = var4.isLurking;
            var3 = var3.bind(var4)(var5);
            var2 = !var3;
case 10:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createCodedLinkEmbeds(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var3;
            var4 = arg3;
            var _closure2_slot1 = var4;
            var4 = arg4;
            var _closure2_slot2 = var4;
            var4 = var3.author;
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var2.codedLinks;
            var4 = var3.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var4 = _closure1_slot5;
            var3 = var4.getCurrentUser;
            var3 = var3.bind(var4)();
            var _closure2_slot3 = var3;
            var3 = var2.codedLinks;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.type;
                    var6 = var1.code;
                    var9 = var1.url;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var10 = 4;
                    var1 = var1[var10];
                    var5 = undefined;
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.isApplicationCodedLink;
                    var1 = var1.bind(var2)(var7);
                    if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var4 = 6;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.INVITE;
                    if(!(var7 !== var1)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.TEMPLATE;
                    if(!(var7 !== var1)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.BUILD_OVERRIDE;
                    if(!(var7 !== var1)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.MANUAL_BUILD_OVERRIDE;
                    if(!(var7 !== var1)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.EVENT;
                    if(!(var7 !== var1)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.CHANNEL_LINK;
                    if(!(var7 !== var1)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.EMBEDDED_ACTIVITY_INVITE;
                    if(!(var7 !== var1)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.EXPERIMENT;
                    if(!(var7 !== var1)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.GUILD_PRODUCT;
                    if(!(var7 !== var1)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.SERVER_SHOP;
                    if(!(var7 !== var1)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.SOCIAL_LAYER_STOREFRONT;
                    if(!(var7 !== var1)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.SOCIAL_LAYER_STOREFRONT_APP;
                    if(!(var7 !== var1)) { _fun0003_ip = 37; continue _fun0003 }
case 39:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.QUESTS_EMBED;
                    if(!(var7 !== var1)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.COLLECTIBLES_SHOP;
                    if(!(var7 !== var1)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var1 = 19;
                    var1 = var8[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.assertNever;
                    var1 = var1.bind(var2)(var7);
                    return var5;
case 42:
                    var1 = null;
                    return var1;
case 40:
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var1 = 18;
                    var1 = var8[var1];
                    var8 = var2.bind(var5)(var1);
                    var2 = var8.createQuestsEmbed;
                    var1 = {};
                    var12 = _closure2_slot2;
                    var1['theme'] = var12;
                    var1['questId'] = var6;
                    var11 = _closure2_slot3;
                    var1['currentUser'] = var11;
                    var1 = var2.bind(var8)(var1);
                    return var1;
case 37:
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var1 = 16;
                    var1 = var8[var1];
                    var8 = var2.bind(var5)(var1);
                    var2 = var8.getIsEligibleForSocialLayerStorefrontMobilePurchasing;
                    var1 = {};
                    var11 = 'create_coded_link_embeds';
                    var1['location'] = var11;
                    var1 = var2.bind(var8)(var1);
                    if(var1) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                    var1 = null;
                    return var1;
case 44:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.SOCIAL_LAYER_STOREFRONT_APP;
                    if(!(var7 !== var1)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var2 = var6.split;
                    var1 = '-';
                    var4 = var2.bind(var6)(var1);
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2.bind(var5)(var4, var1);
                    var1 = 0;
                    var8 = var2[var1];
                    var1 = 1;
                    var11 = var2[var1];
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 17;
                    var1 = var4[var1];
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.createSocialLayerStorefrontProductDetailsEmbed;
                    var1 = {};
                    var1['skuId'] = var8;
                    var8 = {};
                    var12 = 'guild';
                    var8['type'] = var12;
                    var8['guildId'] = var11;
                    var1['guildOrApplication'] = var8;
                    var8 = _closure2_slot2;
                    var1['theme'] = var8;
                    var1 = var2.bind(var4)(var1);
                    return var1;
case 46:
                    var2 = var6.split;
                    var1 = '-';
                    var4 = var2.bind(var6)(var1);
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2.bind(var5)(var4, var1);
                    var1 = 0;
                    var8 = var2[var1];
                    var1 = 1;
                    var11 = var2[var1];
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 17;
                    var1 = var4[var1];
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.createSocialLayerStorefrontProductDetailsEmbed;
                    var1 = {};
                    var1['skuId'] = var8;
                    var8 = {};
                    var12 = 'application';
                    var8['type'] = var12;
                    var8['applicationId'] = var11;
                    var1['guildOrApplication'] = var8;
                    var8 = _closure2_slot2;
                    var1['theme'] = var8;
                    var1 = var2.bind(var4)(var1);
                    return var1;
case 35:
                    var1 = null;
                    return var1;
case 33:
                    var1 = null;
                    return var1;
case 31:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 14;
                    var1 = var4[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.canSeeExperimentEmbeds;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    if(!var2) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 15;
                    var2 = var8[var2];
                    var8 = var4.bind(var5)(var2);
                    var4 = var8.createExperimentEmbed;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var8)(var9, var2);
case 48:
                    return var1;
case 29:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 13;
                    var1 = var4[var1];
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.createEmbeddedActivityInviteEmbed;
                    var1 = {};
                    var8 = _closure2_slot2;
                    var1['theme'] = var8;
                    var1['inviteCode'] = var6;
                    var1 = var2.bind(var4)(var1);
                    return var1;
case 27:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 12;
                    var1 = var4[var1];
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.createVoiceChannelLinkEmbed;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var4)(var6, var1);
                    return var1;
case 25:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 11;
                    var1 = var4[var1];
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.createGuildScheduledEventLinkEmbed;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var4)(var6, var1);
                    return var1;
case 23:
                    var1 = _closure1_slot6;
                    var2 = var1.bind(var5)();
                    var1 = null;
                    if(!var2) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 10;
                    var2 = var8[var2];
                    var8 = var4.bind(var5)(var2);
                    var4 = var8.createBuildOverrideEmbed;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var8)(var6, var2);
case 50:
                    return var1;
case 21:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 10;
                    var1 = var4[var1];
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.createBuildOverrideEmbed;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var4)(var6, var1);
                    return var1;
case 19:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 9;
                    var1 = var4[var1];
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.createGuildTemplateEmbed;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var4)(var6, var1);
                    return var1;
case 17:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 8;
                    var1 = var4[var1];
                    var8 = var2.bind(var5)(var1);
                    var4 = var8.createInviteEmbed;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var8)(var2, var6, var1);
                    return var1;
case 15:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var10];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.isApplicationCodedLinkMobileSupported;
                    var2 = var2.bind(var4)(var7);
                    if(var2) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                    return var1;
case 54:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var10];
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getApplicationCodedLinkData;
                    var4 = var2.bind(var4)(var7, var6, var9);
                    if(!(var1 != var4)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                    var10 = var4.applicationId;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var11 = 5;
                    var2 = var2[var11];
                    var7 = var6.bind(var5)(var2);
                    var6 = var7.getAppLinkGateResult;
                    var2 = {};
                    var2['appId'] = var10;
                    var10 = _closure2_slot1;
                    var2['channel'] = var10;
                    var10 = _closure2_slot0;
                    var2['message'] = var10;
                    var10 = _closure2_slot2;
                    var2['theme'] = var10;
                    var2 = var6.bind(var7)(var2);
                    var7 = var2.state;
                    var6 = 'unavailable';
                    if(!(var6 !== var7)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                    var7 = var2.state;
                    var6 = 'blocked';
                    if(!(var6 !== var7)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                    var7 = var2.app;
                    var10 = var4.type;
                    var12 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var13 = 6;
                    var6 = var6[var13];
                    var6 = var12.bind(var5)(var6);
                    var6 = var6.CodedLinkType;
                    var6 = var6.ACTIVITY_BOOKMARK;
                    if(!(var6 !== var10)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                    var12 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var13];
                    var6 = var12.bind(var5)(var6);
                    var6 = var6.CodedLinkType;
                    var6 = var6.APP_DIRECTORY_PROFILE;
                    if(!(var6 !== var10)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var12 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var13];
                    var6 = var12.bind(var5)(var6);
                    var6 = var6.CodedLinkType;
                    var6 = var6.APP_OAUTH2_LINK;
                    if(!(var6 !== var10)) { _fun0003_ip = 64; continue _fun0003 }
case 66:
                    return var1;
case 64:
                    var10 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var11];
                    var11 = var10.bind(var5)(var6);
                    var10 = var11.createAppMessageEmbed;
                    var6 = {};
                    var12 = _closure2_slot2;
                    var6['theme'] = var12;
                    var6['embedUrl'] = var9;
                    var12 = _closure2_slot0;
                    var6['message'] = var12;
                    var6['app'] = var7;
                    var6 = var10.bind(var11)(var6);
                    return var6;
case 62:
                    var6 = var4.params;
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var3 = 7;
                    var3 = var10[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.createActivityMessageEmbed;
                    var3 = {};
                    var10 = _closure2_slot2;
                    var3['theme'] = var10;
                    var3['embedUrl'] = var9;
                    var8 = _closure2_slot0;
                    var3['message'] = var8;
                    var3['app'] = var7;
                    var3['params'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 60:
                    var2 = var2.model;
                    return var2;
case 58:
                    return var1;
case 56:
                    return var1;
case 52:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
case 12:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['createCodedLinkEmbeds'] = var2;
    return var1;
})();