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
            var2 = _closure1_slot4;
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
            var6 = _closure1_slot4;
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
            var6 = _closure1_slot3;
            var2 = var6.getGuild;
            var5 = '943265993613008967';
            var2 = var2.bind(var6)(var5);
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot2;
            var3 = var4.isLurking;
            var3 = var3.bind(var4)(var5);
            var2 = !var3;
case 10:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = 14;
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
            var3 = var2.codedLinks;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var10 = var1.type;
                    var6 = var1.code;
                    var9 = var1.url;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var11 = 3;
                    var1 = var1[var11];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.INVITE;
                    if(!(var10 !== var1)) { _fun0003_ip = 15; continue _fun0003 }
case 7:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.TEMPLATE;
                    if(!(var10 !== var1)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.BUILD_OVERRIDE;
                    if(!(var10 !== var1)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.MANUAL_BUILD_OVERRIDE;
                    if(!(var10 !== var1)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.EVENT;
                    if(!(var10 !== var1)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.CHANNEL_LINK;
                    if(!(var10 !== var1)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.APP_DIRECTORY_PROFILE;
                    if(!(var10 !== var1)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.ACTIVITY_BOOKMARK;
                    if(!(var10 !== var1)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.EMBEDDED_ACTIVITY_INVITE;
                    if(!(var10 !== var1)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var3 = var1.GUILD_PRODUCT;
                    var1 = null;
                    if(!(var10 !== var3)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var11];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.SERVER_SHOP;
                    var1 = null;
                    if(!(var10 !== var3)) { _fun0003_ip = 32; continue _fun0003 }
case 34:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var11];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.QUESTS_EMBED;
                    if(!(var10 !== var3)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var11];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.CodedLinkType;
                    var7 = var3.APP_DIRECTORY_STOREFRONT;
                    var3 = null;
                    if(!(var10 !== var7)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var11];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.CodedLinkType;
                    var7 = var7.APP_DIRECTORY_STOREFRONT_SKU;
                    var3 = null;
                    if(!(var10 !== var7)) { _fun0003_ip = 37; continue _fun0003 }
case 39:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var11];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.CodedLinkType;
                    var7 = var7.APP_OAUTH2_LINK;
                    if(!(var10 !== var7)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var11];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.CodedLinkType;
                    var7 = var7.COLLECTIBLES_SHOP;
                    var5 = null;
                    if(!(var10 !== var7)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var7 = 13;
                    var7 = var11[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.assertNever;
                    var7 = var7.bind(var8)(var10);
                    var5 = undefined;
case 42:
                    _fun0003_ip = 44; continue _fun0003;
case 40:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var7 = 9;
                    var7 = var10[var7];
                    var10 = var8.bind(var4)(var7);
                    var8 = var10.createAppMessageEmbed;
                    var7 = {};
                    var12 = _closure2_slot1;
                    var7['theme'] = var12;
                    var7['appId'] = var6;
                    var7['embedUrl'] = var9;
                    var11 = _closure2_slot0;
                    var7['message'] = var11;
                    var5 = var8.bind(var10)(var7);
case 44:
                    var3 = var5;
case 37:
                    _fun0003_ip = 45; continue _fun0003;
case 35:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 12;
                    var5 = var8[var5];
                    var8 = var7.bind(var4)(var5);
                    var7 = var8.createQuestsEmbed;
                    var5 = {};
                    var10 = _closure2_slot1;
                    var5['theme'] = var10;
                    var5['questId'] = var6;
                    var3 = var7.bind(var8)(var5);
case 45:
                    var1 = var3;
case 32:
                    _fun0003_ip = 46; continue _fun0003;
case 30:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 11;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createEmbeddedActivityInviteEmbed;
                    var3 = {};
                    var8 = _closure2_slot1;
                    var3['theme'] = var8;
                    var3['inviteCode'] = var6;
                    var1 = var5.bind(var7)(var3);
case 46:
                    _fun0003_ip = 47; continue _fun0003;
case 28:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 10;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createActivityMessageEmbed;
                    var3 = {};
                    var10 = _closure2_slot1;
                    var3['theme'] = var10;
                    var3['appId'] = var6;
                    var3['embedUrl'] = var9;
                    var8 = _closure2_slot0;
                    var3['message'] = var8;
                    var1 = var5.bind(var7)(var3);
case 47:
                    _fun0003_ip = 48; continue _fun0003;
case 26:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 9;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createAppMessageEmbed;
                    var3 = {};
                    var10 = _closure2_slot1;
                    var3['theme'] = var10;
                    var3['appId'] = var6;
                    var3['embedUrl'] = var9;
                    var8 = _closure2_slot0;
                    var3['message'] = var8;
                    var1 = var5.bind(var7)(var3);
case 48:
                    _fun0003_ip = 49; continue _fun0003;
case 24:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 8;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createVoiceChannelLinkEmbed;
                    var3 = _closure2_slot1;
                    var1 = var5.bind(var7)(var6, var3);
case 49:
                    _fun0003_ip = 50; continue _fun0003;
case 22:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 7;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createGuildScheduledEventLinkEmbed;
                    var3 = _closure2_slot1;
                    var1 = var5.bind(var7)(var6, var3);
case 50:
                    _fun0003_ip = 51; continue _fun0003;
case 20:
                    var3 = _closure1_slot5;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!var5) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 6;
                    var5 = var8[var5];
                    var8 = var7.bind(var4)(var5);
                    var7 = var8.createBuildOverrideEmbed;
                    var5 = _closure2_slot1;
                    var3 = var7.bind(var8)(var6, var5);
case 52:
                    var1 = var3;
case 51:
                    _fun0003_ip = 54; continue _fun0003;
case 18:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 6;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createBuildOverrideEmbed;
                    var3 = _closure2_slot1;
                    var1 = var5.bind(var7)(var6, var3);
case 54:
                    _fun0003_ip = 55; continue _fun0003;
case 16:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 5;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createGuildTemplateEmbed;
                    var3 = _closure2_slot1;
                    var1 = var5.bind(var7)(var6, var3);
case 55:
                    _fun0003_ip = 56; continue _fun0003;
case 15:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 4;
                    var2 = var5[var2];
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.createInviteEmbed;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var6, var2);
case 56:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0002_ip = 4; continue _fun0002;
case 12:
            var1 = new Array(0);
case 4:
            return var1;
        }
    };
    var3['createCodedLinkEmbeds'] = var2;
    return var1;
})();