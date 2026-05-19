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
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createCodedLinkEmbeds(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var3;
            var4 = arg3;
            var _closure2_slot1 = var4;
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
            var _closure2_slot2 = var3;
            var3 = var2.codedLinks;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var5 = var1.code;
                    var8 = var1.url;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var7 = 4;
                    var2 = var2[var7];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.INVITE;
                    if(!(var4 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 7:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.TEMPLATE;
                    if(!(var4 !== var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.BUILD_OVERRIDE;
                    if(!(var4 !== var2)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.MANUAL_BUILD_OVERRIDE;
                    if(!(var4 !== var2)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.EVENT;
                    if(!(var4 !== var2)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.CHANNEL_LINK;
                    if(!(var4 !== var2)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.APP_DIRECTORY_PROFILE;
                    if(!(var4 !== var2)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.ACTIVITY_BOOKMARK;
                    if(!(var4 !== var2)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.EMBEDDED_ACTIVITY_INVITE;
                    if(!(var4 !== var2)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.EXPERIMENT;
                    if(!(var4 !== var2)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.GUILD_PRODUCT;
                    if(!(var4 !== var2)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.SERVER_SHOP;
                    if(!(var4 !== var2)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.SOCIAL_LAYER_STOREFRONT;
                    if(!(var4 !== var2)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.SOCIAL_LAYER_STOREFRONT_APP;
                    if(!(var4 !== var2)) { _fun0003_ip = 38; continue _fun0003 }
case 40:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.QUESTS_EMBED;
                    if(!(var4 !== var2)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var9 = var2.APP_DIRECTORY_STOREFRONT;
                    var2 = null;
                    if(!(var4 !== var9)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var7];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.CodedLinkType;
                    var9 = var9.APP_DIRECTORY_STOREFRONT_SKU;
                    var2 = null;
                    if(!(var4 !== var9)) { _fun0003_ip = 43; continue _fun0003 }
case 45:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var7];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.CodedLinkType;
                    var9 = var9.APP_OAUTH2_LINK;
                    if(!(var4 !== var9)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var7];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.CodedLinkType;
                    var9 = var9.COLLECTIBLES_SHOP;
                    var6 = null;
                    if(!(var4 !== var9)) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var9 = 18;
                    var9 = var11[var9];
                    var10 = var10.bind(var3)(var9);
                    var9 = var10.assertNever;
                    var9 = var9.bind(var10)(var4);
                    var6 = undefined;
case 48:
                    _fun0003_ip = 50; continue _fun0003;
case 46:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var9 = 10;
                    var9 = var11[var9];
                    var11 = var10.bind(var3)(var9);
                    var10 = var11.createAppMessageEmbed;
                    var9 = {};
                    var13 = _closure2_slot1;
                    var9['theme'] = var13;
                    var9['appId'] = var5;
                    var9['embedUrl'] = var8;
                    var12 = _closure2_slot0;
                    var9['message'] = var12;
                    var6 = var10.bind(var11)(var9);
case 50:
                    var2 = var6;
case 43:
                    _fun0003_ip = 51; continue _fun0003;
case 41:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var6 = 17;
                    var6 = var10[var6];
                    var10 = var9.bind(var3)(var6);
                    var9 = var10.createQuestsEmbed;
                    var6 = {};
                    var12 = _closure2_slot1;
                    var6['theme'] = var12;
                    var6['questId'] = var5;
                    var11 = _closure2_slot2;
                    var6['currentUser'] = var11;
                    var2 = var9.bind(var10)(var6);
case 51:
                    return var2;
case 38:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var2 = 15;
                    var2 = var9[var2];
                    var9 = var6.bind(var3)(var2);
                    var6 = var9.getIsEligibleForSocialLayerStorefrontMobilePurchasing;
                    var2 = {};
                    var10 = 'create_coded_link_embeds';
                    var2['location'] = var10;
                    var2 = var6.bind(var9)(var2);
                    if(var2) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                    var2 = null;
                    return var2;
case 52:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.SOCIAL_LAYER_STOREFRONT_APP;
                    if(!(var4 !== var2)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                    var4 = var5.split;
                    var2 = '-';
                    var6 = var4.bind(var5)(var2);
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var4 = var4.bind(var3)(var6, var2);
                    var2 = 0;
                    var7 = var4[var2];
                    var2 = 1;
                    var9 = var4[var2];
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 16;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.createSocialLayerStorefrontProductDetailsEmbed;
                    var2 = {};
                    var2['skuId'] = var7;
                    var7 = {};
                    var10 = 'guild';
                    var7['type'] = var10;
                    var7['guildId'] = var9;
                    var2['guildOrApplication'] = var7;
                    var7 = _closure2_slot1;
                    var2['theme'] = var7;
                    var2 = var4.bind(var6)(var2);
                    return var2;
case 54:
                    var4 = var5.split;
                    var2 = '-';
                    var6 = var4.bind(var5)(var2);
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var4 = var4.bind(var3)(var6, var2);
                    var2 = 0;
                    var7 = var4[var2];
                    var2 = 1;
                    var9 = var4[var2];
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 16;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.createSocialLayerStorefrontProductDetailsEmbed;
                    var2 = {};
                    var2['skuId'] = var7;
                    var7 = {};
                    var10 = 'application';
                    var7['type'] = var10;
                    var7['applicationId'] = var9;
                    var2['guildOrApplication'] = var7;
                    var7 = _closure2_slot1;
                    var2['theme'] = var7;
                    var2 = var4.bind(var6)(var2);
                    return var2;
case 36:
                    var2 = null;
                    return var2;
case 34:
                    var2 = null;
                    return var2;
case 32:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 13;
                    var2 = var6[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.canSeeExperimentEmbeds;
                    var4 = var2.bind(var4)();
                    var2 = null;
                    if(!var4) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 14;
                    var4 = var7[var4];
                    var7 = var6.bind(var3)(var4);
                    var6 = var7.createExperimentEmbed;
                    var4 = _closure2_slot1;
                    var2 = var6.bind(var7)(var8, var4);
case 56:
                    return var2;
case 30:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 12;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.createEmbeddedActivityInviteEmbed;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var2['theme'] = var7;
                    var2['inviteCode'] = var5;
                    var2 = var4.bind(var6)(var2);
                    return var2;
case 28:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 11;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.createActivityMessageEmbed;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var2['theme'] = var9;
                    var2['appId'] = var5;
                    var2['embedUrl'] = var8;
                    var7 = _closure2_slot0;
                    var2['message'] = var7;
                    var2 = var4.bind(var6)(var2);
                    return var2;
case 26:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 10;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.createAppMessageEmbed;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var2['theme'] = var9;
                    var2['appId'] = var5;
                    var2['embedUrl'] = var8;
                    var7 = _closure2_slot0;
                    var2['message'] = var7;
                    var2 = var4.bind(var6)(var2);
                    return var2;
case 24:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 9;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.createVoiceChannelLinkEmbed;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var6)(var5, var2);
                    return var2;
case 22:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 8;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.createGuildScheduledEventLinkEmbed;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var6)(var5, var2);
                    return var2;
case 20:
                    var2 = _closure1_slot6;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if(!var4) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 7;
                    var4 = var7[var4];
                    var7 = var6.bind(var3)(var4);
                    var6 = var7.createBuildOverrideEmbed;
                    var4 = _closure2_slot1;
                    var2 = var6.bind(var7)(var5, var4);
case 58:
                    return var2;
case 18:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 7;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.createBuildOverrideEmbed;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var6)(var5, var2);
                    return var2;
case 16:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var2 = var6[var2];
                    var6 = var4.bind(var3)(var2);
                    var4 = var6.createGuildTemplateEmbed;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var6)(var5, var2);
                    return var2;
case 15:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 5;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.createInviteEmbed;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var5, var1);
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