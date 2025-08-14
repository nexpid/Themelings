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
 0:
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var6 = var1.bind(var2)();
            var4 = null;
            var5 = var4 == var6;
            var1 = undefined;
            if(var5) { _fun0001_ip = 37; continue _fun0001 }
 27:
            var5 = var6.isStaff;
            var1 = var5.bind(var6)();
 37:
            if(var1) { _fun0001_ip = 75; continue _fun0001 }
 40:
            var6 = _closure1_slot4;
            var5 = var6.getCurrentUser;
            var6 = var5.bind(var6)();
            var5 = var4 == var6;
            var2 = undefined;
            if(var5) { _fun0001_ip = 72; continue _fun0001 }
 62:
            var5 = var6.isStaffPersonal;
            var2 = var5.bind(var6)();
 72:
            var1 = var2;
 75:
            if(var1) { _fun0001_ip = 126; continue _fun0001 }
 78:
            var6 = _closure1_slot3;
            var2 = var6.getGuild;
            var5 = '943265993613008967';
            var2 = var2.bind(var6)(var5);
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 123; continue _fun0001 }
 105:
            var4 = _closure1_slot2;
            var3 = var4.isLurking;
            var3 = var3.bind(var4)(var5);
            var2 = !var3;
 123:
            var1 = var2;
 126:
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
 0:
            var3 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var3;
            var4 = arg3;
            var _closure2_slot1 = var4;
            var4 = var3.author;
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 71; continue _fun0002 }
 31:
            var3 = var2.codedLinks;
            var4 = var3.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0002_ip = 71; continue _fun0002 }
 48:
            var3 = var2.codedLinks;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                    if(!(var10 !== var1)) { _fun0003_ip = 1167; continue _fun0003 }
 62:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.TEMPLATE;
                    if(!(var10 !== var1)) { _fun0003_ip = 1126; continue _fun0003 }
 98:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.BUILD_OVERRIDE;
                    if(!(var10 !== var1)) { _fun0003_ip = 1085; continue _fun0003 }
 134:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.MANUAL_BUILD_OVERRIDE;
                    if(!(var10 !== var1)) { _fun0003_ip = 1028; continue _fun0003 }
 170:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.EVENT;
                    if(!(var10 !== var1)) { _fun0003_ip = 987; continue _fun0003 }
 206:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.CHANNEL_LINK;
                    if(!(var10 !== var1)) { _fun0003_ip = 946; continue _fun0003 }
 242:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.APP_DIRECTORY_PROFILE;
                    if(!(var10 !== var1)) { _fun0003_ip = 881; continue _fun0003 }
 278:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.ACTIVITY_BOOKMARK;
                    if(!(var10 !== var1)) { _fun0003_ip = 816; continue _fun0003 }
 314:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var1 = var1.EMBEDDED_ACTIVITY_INVITE;
                    if(!(var10 !== var1)) { _fun0003_ip = 764; continue _fun0003 }
 350:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var11];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.CodedLinkType;
                    var3 = var1.GUILD_PRODUCT;
                    var1 = null;
                    if(!(var10 !== var3)) { _fun0003_ip = 762; continue _fun0003 }
 388:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var11];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.SERVER_SHOP;
                    var1 = null;
                    if(!(var10 !== var3)) { _fun0003_ip = 762; continue _fun0003 }
 426:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var11];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.CodedLinkType;
                    var3 = var3.QUESTS_EMBED;
                    if(!(var10 !== var3)) { _fun0003_ip = 709; continue _fun0003 }
 462:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var11];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.CodedLinkType;
                    var7 = var3.APP_DIRECTORY_STOREFRONT;
                    var3 = null;
                    if(!(var10 !== var7)) { _fun0003_ip = 707; continue _fun0003 }
 500:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var11];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.CodedLinkType;
                    var7 = var7.APP_DIRECTORY_STOREFRONT_SKU;
                    var3 = null;
                    if(!(var10 !== var7)) { _fun0003_ip = 707; continue _fun0003 }
 538:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var11];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.CodedLinkType;
                    var7 = var7.APP_OAUTH2_LINK;
                    if(!(var10 !== var7)) { _fun0003_ip = 641; continue _fun0003 }
 571:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var11];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.CodedLinkType;
                    var7 = var7.COLLECTIBLES_SHOP;
                    var5 = null;
                    if(!(var10 !== var7)) { _fun0003_ip = 639; continue _fun0003 }
 606:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var7 = 13;
                    var7 = var11[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = var8.assertNever;
                    var7 = var7.bind(var8)(var10);
                    var5 = undefined;
 639:
                    _fun0003_ip = 704; continue _fun0003;
 641:
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
 704:
                    var3 = var5;
 707:
                    _fun0003_ip = 759; continue _fun0003;
 709:
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
 759:
                    var1 = var3;
 762:
                    _fun0003_ip = 814; continue _fun0003;
 764:
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
 814:
                    _fun0003_ip = 879; continue _fun0003;
 816:
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
 879:
                    _fun0003_ip = 944; continue _fun0003;
 881:
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
 944:
                    _fun0003_ip = 985; continue _fun0003;
 946:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 8;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createVoiceChannelLinkEmbed;
                    var3 = _closure2_slot1;
                    var1 = var5.bind(var7)(var6, var3);
 985:
                    _fun0003_ip = 1026; continue _fun0003;
 987:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 7;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createGuildScheduledEventLinkEmbed;
                    var3 = _closure2_slot1;
                    var1 = var5.bind(var7)(var6, var3);
 1026:
                    _fun0003_ip = 1083; continue _fun0003;
 1028:
                    var3 = _closure1_slot5;
                    var5 = var3.bind(var4)();
                    var3 = null;
                    if(!var5) { _fun0003_ip = 1080; continue _fun0003 }
 1041:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 6;
                    var5 = var8[var5];
                    var8 = var7.bind(var4)(var5);
                    var7 = var8.createBuildOverrideEmbed;
                    var5 = _closure2_slot1;
                    var3 = var7.bind(var8)(var6, var5);
 1080:
                    var1 = var3;
 1083:
                    _fun0003_ip = 1124; continue _fun0003;
 1085:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 6;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createBuildOverrideEmbed;
                    var3 = _closure2_slot1;
                    var1 = var5.bind(var7)(var6, var3);
 1124:
                    _fun0003_ip = 1165; continue _fun0003;
 1126:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 5;
                    var3 = var7[var3];
                    var7 = var5.bind(var4)(var3);
                    var5 = var7.createGuildTemplateEmbed;
                    var3 = _closure2_slot1;
                    var1 = var5.bind(var7)(var6, var3);
 1165:
                    _fun0003_ip = 1211; continue _fun0003;
 1167:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 4;
                    var2 = var5[var2];
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.createInviteEmbed;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var6, var2);
 1211:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0002_ip = 75; continue _fun0002;
 71:
            var1 = new Array(0);
 75:
            return var1;
        }
    };
    var3['createCodedLinkEmbeds'] = var2;
    return var1;
})();