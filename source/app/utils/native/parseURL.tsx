// app/utils/native/parseURL.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot4 = var7;
    var7 = var4.GuildSettingsSections;
    var _closure1_slot5 = var7;
    var7 = var4.GuildSettingsSubsections;
    var _closure1_slot6 = var7;
    var4 = var4.LinkingTypes;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CollectibleShopTab;
    var _closure1_slot8 = var7;
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot9 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UPDATE_CONFIG;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ApplePaymentLinkDeepLinkActions;
    var _closure1_slot11 = var7;
    var4 = var4.ApplePaymentLinkDeepLinkQueryKeys;
    var _closure1_slot12 = var4;
    var4 = /feature\\/([\w-]+)/;
    var _closure1_slot13 = var4;
    var4 = /feature\\/boost\\/([0-9]+)/;
    var _closure1_slot14 = var4;
    var4 = /users\\/(\d+)/;
    var _closure1_slot15 = var4;
    var4 = /(?:connect|oauth2)\\/authorize/;
    var _closure1_slot16 = var4;
    var4 = /login\\/one-time/;
    var _closure1_slot17 = var4;
    var4 = /promos\.discord\.gg/;
    var _closure1_slot18 = var4;
    var4 = /mweb-handoff/;
    var _closure1_slot19 = var4;
    var4 = /connections\\/(xbox|playstation|playstation-stg|crunchyroll)\\/link/;
    var _closure1_slot20 = var4;
    var4 = /connections\\/([a-z-]+)/;
    var _closure1_slot21 = var4;
    var4 = /guilds\\/(\d+)\\/settings(?:\\/([a-z-]+)(?:\\/([a-z-]+))?)?/;
    var _closure1_slot22 = var4;
    var4 = /guilds\\/settings(?:\\/([a-z-]+)(?:\\/([a-z-]+))?)?/;
    var _closure1_slot23 = var4;
    var4 = /activate/;
    var _closure1_slot24 = var4;
    var4 = /quests\\/(\d+)/;
    var _closure1_slot25 = var4;
    var4 = /quest-preview\\/(\d+)/;
    var _closure1_slot26 = var4;
    var4 = /quest-home/;
    var _closure1_slot27 = var4;
    var4 = /subscriptions\\/(\d+)/;
    var _closure1_slot28 = var4;
    var4 = /games\\/([^\\/]+)\\/updates\\/([^\\/]+)/;
    var _closure1_slot29 = var4;
    var4 = function parseQuery(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
case 2: // try_start_0
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.parse;
            var5 = var2.bind(var3)(var1);
            var1 = global;
            var3 = var1.Object;
            var2 = var3.fromEntries;
            var4 = var1.Object;
            var1 = var4.entries;
            var5 = var1.bind(var4)(var5);
            var4 = var5.map;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var4 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var3 = var2 === var7;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 3; continue _fun0002 }
case 4:
                    var2 = var4;
case 3:
                    var4 = undefined;
                    if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var4 = undefined;
                    var3 = var5;
                    if(var5) { _fun0002_ip = 5; continue _fun0002 }
case 7:
                    var4 = var6;
                    var3 = var5;
case 5:
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1.return();
case 8:
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = global;
                    var3 = var2.Array;
                    var2 = var3.isArray;
                    var3 = var2.bind(var3)(var4);
                    var2 = var4;
                    if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = 0;
                    var2 = var4[var3];
case 10:
                    var1[1] = var2;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
case 12: // try_end0
            return var1;
case 13: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = {};
            return var1;
        }
    };
    var _closure1_slot30 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/parseURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function parseURL(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var27 = arguments[1];
            var11 = undefined;
            if(!(var27 === var11)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var27 = false;
case 14:
            var _closure2_slot0 = var11;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var4 = var2.bind(var11)(var1);
            var2 = var4.sanitizeUrl;
            var1 = arg1;
            var38 = var2.bind(var4)(var1);
            var14 = null;
            if(!(var14 != var38)) { _fun0003_ip = 16; continue _fun0003 }
case 8:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var2 = var2.bind(var11)(var1);
            var1 = var2.parse;
            var1 = var1.bind(var2)(var38);
            var20 = var1.protocol;
            var33 = var1.host;
            var15 = var1.hostname;
            var39 = var1.pathname;
            var13 = var1.query;
            var4 = _closure1_slot30;
            var5 = var14 != var13;
            var1 = '';
            var2 = var1;
            if(!var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = var13;
case 17:
            var6 = var4.bind(var11)(var2);
            var2 = var6.fingerprint;
            var5 = var6.username;
            var4 = var6.attemptId;
            var10 = var6.custom_id;
            var18 = var6.referrer_id;
            var9 = var6.link_id;
            var17 = var6.sort;
            var16 = var6.filter;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 8;
            var6 = var8[var6];
            var7 = var7.bind(var11)(var6);
            var6 = var7.findCodedLink;
            var6 = var6.bind(var7)(var38);
            if(!(var14 != var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var19 = 9;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.INVITE;
            if(!(var8 !== var7)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.TEMPLATE;
            if(!(var8 !== var7)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.BUILD_OVERRIDE;
            if(!(var8 !== var7)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.MANUAL_BUILD_OVERRIDE;
            if(!(var8 !== var7)) { _fun0003_ip = 25; continue _fun0003 }
case 27:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.EXPERIMENT;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 28:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.EVENT;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 29:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.CHANNEL_LINK;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 30:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_PROFILE;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 31:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.ACTIVITY_BOOKMARK;
            if(!(var8 !== var7)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.EMBEDDED_ACTIVITY_INVITE;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 34:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.GUILD_PRODUCT;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 35:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.SERVER_SHOP;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 36:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.SOCIAL_LAYER_STOREFRONT;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 37:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.QUESTS_EMBED;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 38:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_STOREFRONT;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 39:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 40:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_OAUTH2_LINK;
            if(!(var8 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 41:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.COLLECTIBLES_SHOP;
            if(!(var8 !== var7)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var7 = global;
            var8 = var7.Error;
            var19 = var6.type;
            var7 = var7.HermesInternal;
            var12 = var7.concat;
            var7 = 'Unknown coded link type: ';
            var7 = var12.bind(var7)(var19);
            var7 = var8.bind(var11)(var7);
            throw var7;
case 42:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 10;
            var7 = var12[var7];
            var12 = var8.bind(var11)(var7);
            var8 = var12.isVirtualCurrencyEnabled;
            var7 = {};
            var19 = 'parseURL';
            var7['location'] = var19;
            var7 = var8.bind(var12)(var7);
            var7 = var7.enabled;
            var19 = var6.code;
            var12 = var19.split;
            var8 = '-';
            var19 = var12.bind(var19)(var8);
            var12 = _closure1_slot3;
            var8 = 2;
            var19 = var12.bind(var11)(var19, var8);
            var8 = 0;
            var8 = var19[var8];
            var12 = 1;
            var19 = var19[var12];
            if(!var7) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var7 = _closure1_slot8;
            var7 = var7.ORBS;
            if(!(var8 !== var7)) { _fun0003_ip = 46; continue _fun0003 }
case 44:
            var7 = _closure1_slot9;
            var12 = var7.FEATURED_PAGE;
            _fun0003_ip = 47; continue _fun0003;
case 46:
            var7 = _closure1_slot9;
            var12 = var7.ORBS;
case 47:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var8 = {};
            var21 = _closure1_slot7;
            var21 = var21.SHOP;
            var8['type'] = var21;
            var8['screen'] = var12;
            var12 = undefined;
            if(!(var1 !== var19)) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var12 = var19;
case 48:
            var8['skuId'] = var12;
            var7['payload'] = var8;
            return var7;
case 32:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var8 = {};
            var12 = _closure1_slot7;
            var12 = var12.ACTIVITY;
            var8['type'] = var12;
            var12 = var6.code;
            var8['applicationId'] = var12;
            var8['customId'] = var10;
            var8['referrerId'] = var18;
            var8['linkId'] = var9;
            var8['isDeepLink'] = var27;
            var7['payload'] = var8;
            return var7;
case 19:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 11;
            var7 = var9[var7];
            var7 = var8.bind(var11)(var7);
            var7 = var7.findGiftCodes;
            var9 = var7.bind(var11)(var38);
            var7 = var9.length;
            var8 = 0;
            if(!(!(var7 > var8))) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 12;
            var7 = var12[var7];
            var10 = var10.bind(var11)(var7);
            var7 = var10.findRemoteAuthFingerprint;
            var10 = var7.bind(var10)(var33, var39);
            if(!(var14 != var10)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var7 = var10.length;
            if(!(!(var7 > var8))) { _fun0003_ip = 54; continue _fun0003 }
case 52:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var19 = 13;
            var7 = var7[var19];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordHostname;
            var7 = var7.bind(var12)(var33);
            if(var7) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordProtocol;
            var7 = var7.bind(var12)(var20);
            if(var7) { _fun0003_ip = 55; continue _fun0003 }
case 57:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var19];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordLocalhost;
            var7 = var7.bind(var12)(var33, var15);
            if(!var7) { _fun0003_ip = 58; continue _fun0003 }
case 55:
            if(!(var14 != var39)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var32 = 14;
            var7 = var7[var32];
            var12 = var12.bind(var11)(var7);
            var7 = var12.tryParseChannelPath;
            var12 = var7.bind(var12)(var39);
            if(!(var14 == var12)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var15 = var39.match;
            var7 = _closure1_slot25;
            var20 = var15.bind(var39)(var7);
            if(!(var14 != var20)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var7 = var20.length;
            var19 = 1;
            if(!(!(var7 > var19))) { _fun0003_ip = 64; continue _fun0003 }
case 62:
            var15 = var39.match;
            var7 = _closure1_slot26;
            var22 = var15.bind(var39)(var7);
            if(!(var14 != var22)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var7 = var22.length;
            var21 = 1;
            if(!(!(var7 > var21))) { _fun0003_ip = 67; continue _fun0003 }
case 65:
            var15 = var39.match;
            var7 = _closure1_slot27;
            var7 = var15.bind(var39)(var7);
            if(!(var14 == var7)) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var15 = var39.match;
            var7 = _closure1_slot28;
            var7 = var15.bind(var39)(var7);
            if(!(var14 == var7)) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var15 = var39.match;
            var7 = _closure1_slot15;
            var24 = var15.bind(var39)(var7);
            if(!(var14 != var24)) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var7 = var24.length;
            var23 = 1;
            if(!(!(var7 > var23))) { _fun0003_ip = 74; continue _fun0003 }
case 72:
            var15 = var39.match;
            var7 = _closure1_slot16;
            var7 = var15.bind(var39)(var7);
            if(!(var14 != var7)) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var15 = _closure1_slot0;
            var26 = _closure1_slot2;
            var7 = 15;
            var7 = var26[var7];
            var26 = var15.bind(var11)(var7);
            var15 = var26.parseOAuth2AuthorizeProps;
            var28 = var14 != var13;
            var7 = var1;
            if(!var28) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var7 = var13;
case 77:
            var26 = var15.bind(var26)(var7);
            if(!(var14 == var26)) { _fun0003_ip = 79; continue _fun0003 }
case 75:
            var15 = var39.match;
            var7 = _closure1_slot17;
            var7 = var15.bind(var39)(var7);
            if(!(var14 == var7)) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var15 = var39.match;
            var7 = _closure1_slot14;
            var15 = var15.bind(var39)(var7);
            if(!(var14 != var15)) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var28 = var15.length;
            var7 = 1;
            if(!(!(var28 > var7))) { _fun0003_ip = 84; continue _fun0003 }
case 82:
            var29 = var39.match;
            var28 = _closure1_slot29;
            var30 = var29.bind(var39)(var28);
            if(!(var14 != var30)) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var28 = var30.length;
            var29 = 2;
            if(!(!(var28 > var29))) { _fun0003_ip = 87; continue _fun0003 }
case 85:
            var31 = var39.match;
            var28 = _closure1_slot13;
            var31 = var31.bind(var39)(var28);
            if(!(var14 != var31)) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var34 = var31.length;
            var28 = 1;
            if(!(var34 > var28)) { _fun0003_ip = 88; continue _fun0003 }
case 90:
            var34 = var31[var28];
            var28 = 'composeMessage';
            if(!(var28 !== var34)) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var28 = 'contactSync';
            if(!(var28 !== var34)) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var28 = 'addFriends';
            if(!(var28 !== var34)) { _fun0003_ip = 95; continue _fun0003 }
case 96:
            var28 = 'friends';
            if(!(var28 !== var34)) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var28 = 'editProfile';
            if(!(var28 !== var34)) { _fun0003_ip = 99; continue _fun0003 }
case 100:
            var28 = 'voiceChannel';
            if(!(var28 !== var34)) { _fun0003_ip = 101; continue _fun0003 }
case 102:
            var28 = 'sessionManagement';
            if(!(var28 !== var34)) { _fun0003_ip = 103; continue _fun0003 }
case 104:
            var28 = 'home';
            if(!(var28 !== var34)) { _fun0003_ip = 105; continue _fun0003 }
case 106:
            var28 = 'icymi';
            if(!(var28 !== var34)) { _fun0003_ip = 107; continue _fun0003 }
case 108:
            var28 = 'connections';
            if(!(var28 !== var34)) { _fun0003_ip = 109; continue _fun0003 }
case 110:
            var28 = 'family-center';
            if(!(var28 !== var34)) { _fun0003_ip = 111; continue _fun0003 }
case 112:
            var28 = 'promo-url';
            if(!(var28 !== var34)) { _fun0003_ip = 113; continue _fun0003 }
case 114:
            var28 = 'account-standing';
            if(!(var28 !== var34)) { _fun0003_ip = 115; continue _fun0003 }
case 116:
            var28 = 'apple-payment-link';
            if(!(var28 !== var34)) { _fun0003_ip = 117; continue _fun0003 }
case 118:
            var28 = 'open-shop';
            if(!(var28 !== var34)) { _fun0003_ip = 119; continue _fun0003 }
case 120:
            var28 = 'authorized-apps';
            if(!(var28 !== var34)) { _fun0003_ip = 121; continue _fun0003 }
case 122:
            var28 = 'share';
            if(!(var28 !== var34)) { _fun0003_ip = 123; continue _fun0003 }
case 124:
            var28 = 'dave-protocol-verification';
            if(!(var28 !== var34)) { _fun0003_ip = 125; continue _fun0003 }
case 126:
            var28 = 'gift';
            if(!(var28 !== var34)) { _fun0003_ip = 127; continue _fun0003 }
case 128:
            var28 = 'store';
            if(!(var28 !== var34)) { _fun0003_ip = 129; continue _fun0003 }
case 130:
            var28 = 'connected-games';
            if(!(var28 !== var34)) { _fun0003_ip = 131; continue _fun0003 }
case 132:
            var28 = 'boost-settings';
            if(!(var28 !== var34)) { _fun0003_ip = 133; continue _fun0003 }
case 134:
            var28 = 'quest-preview-tool';
            if(!(var28 !== var34)) { _fun0003_ip = 135; continue _fun0003 }
case 136:
            var31 = 'subscription-settings';
            var28 = null;
            if(!(var31 === var34)) { _fun0003_ip = 137; continue _fun0003 }
case 138:
            var31 = {};
            var34 = _closure1_slot7;
            var34 = var34.SUBSCRIPTION_SETTINGS;
            var31['type'] = var34;
            var28 = var31;
            _fun0003_ip = 137; continue _fun0003;
case 135:
            var34 = _closure1_slot30;
            var35 = var14 != var13;
            var31 = var1;
            if(!var35) { _fun0003_ip = 139; continue _fun0003 }
case 140:
            var31 = var13;
case 139:
            var31 = var34.bind(var11)(var31);
            var34 = var31.quest_id;
            var31 = {};
            var35 = _closure1_slot7;
            var35 = var35.QUEST_PREVIEW_TOOL;
            var31['type'] = var35;
            var31['questId'] = var34;
            var28 = var31;
            _fun0003_ip = 137; continue _fun0003;
case 133:
            var31 = {};
            var34 = _closure1_slot7;
            var34 = var34.BOOST_SETTINGS;
            var31['type'] = var34;
            var28 = var31;
            _fun0003_ip = 137; continue _fun0003;
case 131:
            var31 = {};
            var34 = _closure1_slot7;
            var34 = var34.CONNECTED_GAMES;
            var31['type'] = var34;
            var28 = var31;
            _fun0003_ip = 137; continue _fun0003;
case 129:
            var31 = {};
            var34 = _closure1_slot7;
            var34 = var34.NITRO_HOME;
            var31['type'] = var34;
            var28 = var31;
            _fun0003_ip = 137; continue _fun0003;
case 127:
            var31 = {};
            var34 = _closure1_slot7;
            var34 = var34.GIFT;
            var31['type'] = var34;
            var28 = var31;
            _fun0003_ip = 137; continue _fun0003;
case 125:
            var34 = _closure1_slot30;
            var35 = var14 != var13;
            var31 = var1;
            if(!var35) { _fun0003_ip = 141; continue _fun0003 }
case 142:
            var31 = var13;
case 141:
            var31 = var34.bind(var11)(var31);
            var35 = var31.userId;
            var34 = var31.fingerprint;
            var31 = var14 != var35;
            var28 = null;
            if(!var31) { _fun0003_ip = 137; continue _fun0003 }
case 143:
            var31 = var14 != var34;
            var28 = null;
            if(!var31) { _fun0003_ip = 137; continue _fun0003 }
case 144:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var31 = 18;
            var31 = var37[var31];
            var37 = var36.bind(var11)(var31);
            var36 = var37.getSecureFramesDeeplinkExperiment;
            var31 = {};
            var40 = 'parseUrl';
            var31['location'] = var40;
            var31 = var36.bind(var37)(var31);
            var31 = var31.enabled;
            var28 = null;
            if(!var31) { _fun0003_ip = 137; continue _fun0003 }
case 145:
            var31 = {};
            var36 = _closure1_slot7;
            var36 = var36.DAVE_PROTOCOL_VERIFICATION;
            var31['type'] = var36;
            var31['userId'] = var35;
            var31['fingerprint'] = var34;
            var28 = var31;
            _fun0003_ip = 137; continue _fun0003;
case 123:
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var31 = 17;
            var31 = var35[var31];
            var34 = var34.bind(var11)(var31);
            var31 = var34.isIOS;
            var31 = var31.bind(var34)();
            var28 = null;
            if(!var31) { _fun0003_ip = 137; continue _fun0003 }
case 146:
            var34 = _closure1_slot30;
            var35 = var14 != var13;
            var31 = var1;
            if(!var35) { _fun0003_ip = 147; continue _fun0003 }
case 148:
            var31 = var13;
case 147:
            var34 = var34.bind(var11)(var31);
            var36 = var34.text;
            var35 = var34.channelId;
            var31 = var34.shareId;
            var41 = var34.attachmentManifest;
            var40 = function isValidUUID(arg1) {
                var3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                var2 = var3.test;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            _closure2_slot0 = var40;
            var37 = 'string';
            var42 = typeof var31;
            var34 = undefined;
            if(!(var37 === var42)) { _fun0003_ip = 149; continue _fun0003 }
case 150:
            var40 = var40.bind(var11)(var31);
            var34 = undefined;
            if(!var40) { _fun0003_ip = 149; continue _fun0003 }
case 151:
            var34 = var31;
case 149:
            var31 = typeof var41;
            if(!(var37 !== var31)) { _fun0003_ip = 152; continue _fun0003 }
case 153:
            var37 = new Array(0);
            _fun0003_ip = 154; continue _fun0003;
case 152:
            var31 = global;
            var40 = var31.JSON;
            var31 = var40.parse;
            var37 = var31.bind(var40)(var41);
case 154:
            var31 = global;
            var40 = var31.Array;
            var31 = var40.isArray;
            var31 = var31.bind(var40)(var37);
            if(var31) { _fun0003_ip = 155; continue _fun0003 }
case 156:
            var37 = new Array(0);
case 155:
            var31 = var37.filter;
            var25 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.originalFilename;
                    var4 = 'string';
                    var1 = typeof var1;
                    var1 = var4 === var1;
                    if(!var1) { _fun0004_ip = 157; continue _fun0004 }
case 158:
                    var3 = var2.temporaryFilename;
                    var3 = typeof var3;
                    var1 = var4 === var3;
case 157:
                    if(!var1) { _fun0004_ip = 159; continue _fun0004 }
case 160:
                    var4 = _closure2_slot0;
                    var3 = var2.temporaryFilename;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
case 159:
                    return var1;
                }
            };
            var31 = var31.bind(var37)(var25);
            var25 = {};
            var37 = _closure1_slot7;
            var37 = var37.SHARE;
            var25['type'] = var37;
            var25['text'] = var36;
            var25['channelId'] = var35;
            var25['shareId'] = var34;
            var25['attachmentManifest'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 121:
            var25 = {};
            var31 = _closure1_slot7;
            var31 = var31.AUTHORIZED_APPS;
            var25['type'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 119:
            var25 = {};
            var31 = _closure1_slot7;
            var31 = var31.SHOP;
            var25['type'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 117:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var25 = 16;
            var25 = var34[var25];
            var34 = var31.bind(var11)(var25);
            var31 = var34.getApplePaymentLinkExperimentConfig;
            var25 = {};
            var35 = 'parseUrl';
            var25['location'] = var35;
            var25 = var31.bind(var34)(var25);
            var25 = var25.enabled;
            var34 = _closure1_slot30;
            var35 = var14 != var13;
            var31 = var1;
            if(!var35) { _fun0003_ip = 161; continue _fun0003 }
case 162:
            var31 = var13;
case 161:
            var35 = var34.bind(var11)(var31);
            var31 = _closure1_slot12;
            var34 = var31.DEEP_LINK_ACTION;
            var34 = var35[var34];
            var31 = var31.GUILD_ID;
            var31 = var35[var31];
            if(!var25) { _fun0003_ip = 163; continue _fun0003 }
case 164:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var35 = 17;
            var35 = var37[var35];
            var36 = var36.bind(var11)(var35);
            var35 = var36.isIOS;
            var25 = var35.bind(var36)();
case 163:
            var28 = null;
            if(!var25) { _fun0003_ip = 137; continue _fun0003 }
case 165:
            var25 = {};
            var35 = _closure1_slot7;
            var35 = var35.APPLE_PAYMENT_LINK;
            var25['type'] = var35;
            if(!(var14 == var34)) { _fun0003_ip = 166; continue _fun0003 }
case 167:
            var35 = _closure1_slot11;
            var34 = var35.DEFAULT;
case 166:
            var25['deepLinkAction'] = var34;
            var25['guildId'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 115:
            var25 = {};
            var31 = _closure1_slot7;
            var31 = var31.ACCOUNT_STANDING;
            var25['type'] = var31;
            var25['pathname'] = var39;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 113:
            var31 = _closure1_slot30;
            var34 = var14 != var13;
            var25 = var1;
            if(!var34) { _fun0003_ip = 168; continue _fun0003 }
case 169:
            var25 = var13;
case 168:
            var25 = var31.bind(var11)(var25);
            var31 = var25.promo_url;
            var28 = null;
            if(!(var11 !== var31)) { _fun0003_ip = 137; continue _fun0003 }
case 170:
            var25 = {};
            var34 = _closure1_slot7;
            var34 = var34.FEATURE_PROMO_URL;
            var25['type'] = var34;
            var25['promoUrl'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 111:
            var25 = {};
            var31 = _closure1_slot7;
            var31 = var31.FAMILY_CENTER;
            var25['type'] = var31;
            var25['pathname'] = var39;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 109:
            var31 = _closure1_slot30;
            var34 = var14 != var13;
            var25 = var1;
            if(!var34) { _fun0003_ip = 171; continue _fun0003 }
case 172:
            var25 = var13;
case 171:
            var25 = var31.bind(var11)(var25);
            var31 = var25.source;
            var25 = {};
            var34 = _closure1_slot7;
            var34 = var34.CONNECTIONS;
            var25['type'] = var34;
            var25['source'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 107:
            var25 = {};
            var31 = _closure1_slot7;
            var31 = var31.ICYMI;
            var25['type'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 105:
            var31 = _closure1_slot30;
            var34 = var14 != var13;
            var25 = var1;
            if(!var34) { _fun0003_ip = 173; continue _fun0003 }
case 174:
            var25 = var13;
case 173:
            var25 = var31.bind(var11)(var25);
            var35 = var25.guild_id;
            var34 = var25.highlight_channel_id;
            var31 = var25.highlight_message_id;
            var25 = {};
            var36 = _closure1_slot7;
            var36 = var36.GUILD_HOME;
            var25['type'] = var36;
            var25['guildId'] = var35;
            var25['highlightChannelId'] = var34;
            var25['highlightMessageId'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 103:
            var25 = {};
            var31 = _closure1_slot7;
            var31 = var31.SESSION_MANAGEMENT;
            var25['type'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 101:
            var31 = _closure1_slot30;
            var34 = var14 != var13;
            var25 = var1;
            if(!var34) { _fun0003_ip = 175; continue _fun0003 }
case 176:
            var25 = var13;
case 175:
            var25 = var31.bind(var11)(var25);
            var37 = var25.guild_id;
            var36 = var25.channel_id;
            var35 = var25.user_id;
            var34 = var25.via;
            var31 = var25.action;
            var25 = {};
            var40 = _closure1_slot7;
            var40 = var40.VOICE_CHANNEL;
            var25['type'] = var40;
            var25['guildId'] = var37;
            var25['channelId'] = var36;
            var25['userId'] = var35;
            var25['via'] = var34;
            var25['action'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 99:
            var25 = {};
            var31 = _closure1_slot7;
            var31 = var31.EDIT_PROFILE;
            var25['type'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 97:
            var31 = _closure1_slot30;
            var34 = var14 != var13;
            var25 = var1;
            if(!var34) { _fun0003_ip = 177; continue _fun0003 }
case 178:
            var25 = var13;
case 177:
            var25 = var31.bind(var11)(var25);
            var31 = var25.user_id;
            var25 = {};
            var34 = _closure1_slot7;
            var34 = var34.FRIENDS;
            var25['type'] = var34;
            var25['userId'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 95:
            var25 = {};
            var31 = _closure1_slot7;
            var31 = var31.ADD_FRIENDS;
            var25['type'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 93:
            var25 = {};
            var31 = _closure1_slot7;
            var31 = var31.CONTACT_SYNC;
            var25['type'] = var31;
            var28 = var25;
            _fun0003_ip = 137; continue _fun0003;
case 91:
            var25 = {};
            var31 = _closure1_slot7;
            var31 = var31.COMPOSE_MESSAGE;
            var25['type'] = var31;
            var28 = var25;
case 137:
            if(!(var14 == var28)) { _fun0003_ip = 179; continue _fun0003 }
case 88:
            var31 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var32];
            var31 = var31.bind(var11)(var25);
            var25 = var31.tryParseEventDetailsPath;
            var32 = var25.bind(var31)(var39);
            if(!(var14 == var32)) { _fun0003_ip = 180; continue _fun0003 }
case 181:
            var31 = var39.match;
            var25 = _closure1_slot19;
            var25 = var31.bind(var39)(var25);
            if(!(var14 == var25)) { _fun0003_ip = 182; continue _fun0003 }
case 183:
            var31 = var39.match;
            var25 = _closure1_slot20;
            var31 = var31.bind(var39)(var25);
            if(!(var14 == var31)) { _fun0003_ip = 184; continue _fun0003 }
case 185:
            var34 = var39.match;
            var25 = _closure1_slot21;
            var34 = var34.bind(var39)(var25);
            if(!(var14 == var34)) { _fun0003_ip = 186; continue _fun0003 }
case 187:
            var35 = var39.match;
            var25 = _closure1_slot22;
            var35 = var35.bind(var39)(var25);
            if(!(var14 == var35)) { _fun0003_ip = 188; continue _fun0003 }
case 189:
            var36 = var39.match;
            var25 = _closure1_slot23;
            var36 = var36.bind(var39)(var25);
            if(!(var14 == var36)) { _fun0003_ip = 190; continue _fun0003 }
case 191:
            var37 = var39.match;
            var25 = _closure1_slot24;
            var25 = var37.bind(var39)(var25);
            if(!(var14 == var25)) { _fun0003_ip = 192; continue _fun0003 }
case 58:
            var37 = var14 == var33;
            var25 = undefined;
            if(var37) { _fun0003_ip = 193; continue _fun0003 }
case 194:
            var39 = var33.match;
            var37 = _closure1_slot18;
            var25 = var39.bind(var33)(var37);
case 193:
            if(!(var14 == var25)) { _fun0003_ip = 195; continue _fun0003 }
case 196:
            var25 = _closure1_slot10;
            var37 = var14 == var25;
            var25 = undefined;
            if(var37) { _fun0003_ip = 197; continue _fun0003 }
case 198:
            var37 = _closure1_slot10;
            var37 = var37.url;
            var25 = var37.host;
case 197:
            if(!(var33 !== var25)) { _fun0003_ip = 199; continue _fun0003 }
case 200:
            var25 = {};
            var25['fingerprint'] = var2;
            var25['attemptId'] = var4;
            var33 = {};
            var37 = _closure1_slot7;
            var37 = var37.NONE;
            var33['type'] = var37;
            var25['payload'] = var33;
            _fun0003_ip = 201; continue _fun0003;
case 199:
            var33 = {};
            var33['fingerprint'] = var2;
            var33['attemptId'] = var4;
            var37 = {};
            var39 = _closure1_slot7;
            var39 = var39.MOBILE_NATIVE_UPDATE;
            var37['type'] = var39;
            var37['url'] = var38;
            var33['payload'] = var37;
            var25 = var33;
case 201:
            _fun0003_ip = 202; continue _fun0003;
case 195:
            var33 = {};
            var33['fingerprint'] = var2;
            var33['attemptId'] = var4;
            var37 = {};
            var39 = _closure1_slot7;
            var39 = var39.PROMOTIONS;
            var37['type'] = var39;
            var37['url'] = var38;
            var33['payload'] = var37;
            var25 = var33;
case 202:
            return var25;
case 192:
            var33 = _closure1_slot30;
            var25 = global;
            var37 = var25.decodeURIComponent;
            var38 = var14 != var13;
            var25 = var1;
            if(!var38) { _fun0003_ip = 203; continue _fun0003 }
case 204:
            var25 = var13;
case 203:
            var25 = var37.bind(var11)(var25);
            var25 = var33.bind(var11)(var25);
            var37 = var25.user_code;
            var25 = {};
            var25['fingerprint'] = var2;
            var25['attemptId'] = var4;
            var33 = {};
            var38 = _closure1_slot7;
            var38 = var38.ACTIVATE_DEVICE;
            var33['type'] = var38;
            var33['userCode'] = var37;
            var25['payload'] = var33;
            return var25;
case 190:
            var33 = _closure1_slot3;
            var25 = 3;
            var33 = var33.bind(var11)(var36, var25);
            var25 = 1;
            var43 = var33[var25];
            var25 = 2;
            var39 = var33[var25];
            var33 = _closure1_slot30;
            var36 = var14 != var13;
            var25 = var1;
            if(!var36) { _fun0003_ip = 205; continue _fun0003 }
case 206:
            var25 = var13;
case 205:
            var25 = var33.bind(var11)(var25);
            var36 = var25.feature;
            var25 = {};
            var25['fingerprint'] = var2;
            var25['attemptId'] = var4;
            var33 = {};
            var37 = _closure1_slot7;
            var37 = var37.GUILD_SETTINGS_PICKER;
            var33['type'] = var37;
            var38 = _closure1_slot1;
            var40 = _closure1_slot2;
            var37 = 21;
            var41 = var40[var37];
            var42 = var38.bind(var11)(var41);
            var41 = _closure1_slot5;
            var41 = var42.bind(var11)(var41, var43);
            var33['settingsSection'] = var41;
            var37 = var40[var37];
            var38 = var38.bind(var11)(var37);
            var37 = _closure1_slot6;
            var37 = var38.bind(var11)(var37, var39);
            var33['settingsSubsection'] = var37;
            var33['feature'] = var36;
            var25['payload'] = var33;
            return var25;
case 188:
            var33 = _closure1_slot3;
            var25 = 4;
            var33 = var33.bind(var11)(var35, var25);
            var25 = 1;
            var35 = var33[var25];
            var25 = 2;
            var41 = var33[var25];
            var25 = 3;
            var37 = var33[var25];
            var25 = {};
            var25['fingerprint'] = var2;
            var25['attemptId'] = var4;
            var33 = {};
            var36 = _closure1_slot7;
            var36 = var36.GUILD_SETTINGS;
            var33['type'] = var36;
            var33['guildId'] = var35;
            var36 = _closure1_slot1;
            var38 = _closure1_slot2;
            var35 = 21;
            var39 = var38[var35];
            var40 = var36.bind(var11)(var39);
            var39 = _closure1_slot5;
            var39 = var40.bind(var11)(var39, var41);
            var33['settingsSection'] = var39;
            var35 = var38[var35];
            var36 = var36.bind(var11)(var35);
            var35 = _closure1_slot6;
            var35 = var36.bind(var11)(var35, var37);
            var33['settingsSubsection'] = var35;
            var25['payload'] = var33;
            return var25;
case 186:
            var33 = _closure1_slot3;
            var25 = 2;
            var33 = var33.bind(var11)(var34, var25);
            var25 = var33[var8];
            var25 = 1;
            var35 = var33[var25];
            var33 = _closure1_slot30;
            var25 = global;
            var34 = var25.decodeURIComponent;
            var36 = var14 != var13;
            var25 = var1;
            if(!var36) { _fun0003_ip = 207; continue _fun0003 }
case 208:
            var25 = var13;
case 207:
            var25 = var34.bind(var11)(var25);
            var34 = var33.bind(var11)(var25);
            var25 = {};
            var25['fingerprint'] = var2;
            var25['attemptId'] = var4;
            var33 = {};
            var36 = _closure1_slot7;
            var36 = var36.USER_CONNECTIONS_CALLBACK;
            var33['type'] = var36;
            var33['provider'] = var35;
            var33['searchParams'] = var34;
            var25['payload'] = var33;
            return var25;
case 184:
            var33 = _closure1_slot30;
            var25 = global;
            var34 = var25.decodeURIComponent;
            var35 = var14 != var13;
            var25 = var1;
            if(!var35) { _fun0003_ip = 209; continue _fun0003 }
case 210:
            var25 = var13;
case 209:
            var25 = var34.bind(var11)(var25);
            var25 = var33.bind(var11)(var25);
            var34 = var25.code;
            var33 = var25.state;
            var25 = 1;
            var35 = var31[var25];
            var25 = {};
            var25['fingerprint'] = var2;
            var25['attemptId'] = var4;
            var31 = {};
            var36 = _closure1_slot7;
            var36 = var36.USER_CONNECTIONS_LINK_CALLBACK;
            var31['type'] = var36;
            var31['provider'] = var35;
            var31['callbackCode'] = var34;
            var31['callbackState'] = var33;
            var25['payload'] = var31;
            return var25;
case 182:
            var33 = _closure1_slot30;
            var25 = global;
            var31 = var25.decodeURIComponent;
            var31 = var31.bind(var11)(var13);
            var31 = var33.bind(var11)(var31);
            var35 = var31.key;
            var36 = var31.redirect;
            var37 = var31.fingerprint;
            if(!(var14 != var35)) { _fun0003_ip = 211; continue _fun0003 }
case 212:
            if(!(var14 != var36)) { _fun0003_ip = 211; continue _fun0003 }
case 213:
            var34 = var25.URL;
            var31 = var25.location;
            var38 = var31.protocol;
            var31 = var25.window;
            var31 = var31.GLOBAL_ENV;
            var33 = var31.WEBAPP_ENDPOINT;
            var31 = var25.HermesInternal;
            var31 = var31.concat;
            var45 = var31.bind(var1)(var38, var33);
            var33 = var34.prototype;
            var33 = Object.create(var33, {constructor: {value: var34}});
            var47 = var33;
            var46 = var36;
            var31 = new var47[var34](var46, var45, var44);
            var34 = var31 instanceof Object ? var31 : var33;
            if(!(var14 != var37)) { _fun0003_ip = 214; continue _fun0003 }
case 215:
            var36 = var34.searchParams;
            var33 = var36.append;
            var31 = 'fingerprint';
            var31 = var33.bind(var36)(var31, var37);
case 214:
            var31 = {};
            var31['fingerprint'] = var37;
            var31['attemptId'] = var4;
            var33 = {};
            var36 = _closure1_slot7;
            var36 = var36.MOBILE_WEB_HANDOFF;
            var33['type'] = var36;
            var33['nonce'] = var35;
            var33['redirectUrl'] = var34;
            var33['fingerprint'] = var37;
            var31['payload'] = var33;
            return var31;
case 211:
            var33 = _closure1_slot1;
            var39 = _closure1_slot2;
            var31 = 19;
            var31 = var39[var31];
            var36 = var33.bind(var11)(var31);
            var35 = var36.track;
            var31 = _closure1_slot4;
            var34 = var31.MOBILE_WEB_HANDOFF_FAILURE;
            var33 = {};
            var31 = 'invalid_query_params';
            var33['reason'] = var31;
            var38 = _closure1_slot0;
            var31 = 20;
            var31 = var39[var31];
            var38 = var38.bind(var11)(var31);
            var31 = var38.maybeExtractId;
            var31 = var31.bind(var38)(var37);
            var33['fingerprint'] = var31;
            var31 = {};
            var31['fingerprint'] = var37;
            var31 = var35.bind(var36)(var34, var33, var31);
            var33 = var25.Error;
            var25 = var33.prototype;
            var31 = Object.create(var25, {constructor: {value: var33}});
            var46 = 'Missing nonce or redirect query params';
            var47 = var31;
            var25 = new var47[var33](var46, var45);
            var25 = var25 instanceof Object ? var25 : var31;
            throw var25;
case 180:
            var25 = {};
            var25['fingerprint'] = var2;
            var25['attemptId'] = var4;
            var31 = {};
            var33 = _closure1_slot7;
            var33 = var33.GUILD_EVENT_DETAILS;
            var31['type'] = var33;
            var33 = var32.guildEventId;
            var31['guildEventId'] = var33;
            var33 = var32.guildId;
            var31['guildId'] = var33;
            var32 = var32.recurrenceId;
            var31['recurrenceId'] = var32;
            var25['payload'] = var31;
            return var25;
case 179:
            var25 = {};
            var25['fingerprint'] = var2;
            var25['attemptId'] = var4;
            var25['payload'] = var28;
            return var25;
case 87:
            var25 = {};
            var25['fingerprint'] = var2;
            var25['attemptId'] = var4;
            var28 = {};
            var31 = _closure1_slot7;
            var31 = var31.GAME_UPDATE;
            var28['type'] = var31;
            var31 = 1;
            var31 = var30[var31];
            var28['gameId'] = var31;
            var29 = var30[var29];
            var28['gameUpdateId'] = var29;
            var25['payload'] = var28;
            return var25;
case 84:
            var25 = var15[var7];
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var28 = _closure1_slot7;
            var28 = var28.BOOST_MARKETING;
            var15['type'] = var28;
            var15['guildId'] = var25;
            var7['payload'] = var15;
            return var7;
case 80:
            var15 = _closure1_slot30;
            var25 = var14 != var13;
            var7 = var1;
            if(!var25) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            var7 = var13;
case 216:
            var7 = var15.bind(var11)(var7);
            var28 = var7.token;
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var25 = _closure1_slot7;
            var25 = var25.ONE_TIME_LOGIN;
            var15['type'] = var25;
            var29 = var14 != var28;
            var25 = null;
            if(!var29) { _fun0003_ip = 218; continue _fun0003 }
case 219:
            var25 = var28;
case 218:
            var15['token'] = var25;
            var7['payload'] = var15;
            return var7;
case 79:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var25 = _closure1_slot7;
            var25 = var25.OAUTH2_AUTHORIZE;
            var15['type'] = var25;
            var25 = {};
            var46 = var25;
            var45 = var26;
            var26 = copyDataProperties(var46, var45);
            var26 = 'wasDeepLink';
            var25[var26] = var27;
            var15['props'] = var25;
            var7['payload'] = var15;
            return var7;
case 74:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var25 = _closure1_slot7;
            var25 = var25.USER_PROFILE;
            var15['type'] = var25;
            var23 = var24[var23];
            var15['userId'] = var23;
            var7['payload'] = var15;
            return var7;
case 70:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var23 = _closure1_slot7;
            var23 = var23.SUBSCRIPTION_SETTINGS;
            var15['type'] = var23;
            var7['payload'] = var15;
            return var7;
case 68:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var23 = _closure1_slot7;
            var23 = var23.QUESTS;
            var15['type'] = var23;
            var15['referrerId'] = var18;
            var15['sort'] = var17;
            var15['filter'] = var16;
            var7['payload'] = var15;
            return var7;
case 67:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var23 = _closure1_slot7;
            var23 = var23.QUEST_PREVIEW_TOOL;
            var15['type'] = var23;
            var21 = var22[var21];
            var15['questId'] = var21;
            var7['payload'] = var15;
            return var7;
case 64:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var21 = _closure1_slot7;
            var21 = var21.QUESTS;
            var15['type'] = var21;
            var19 = var20[var19];
            var15['questId'] = var19;
            var15['referrerId'] = var18;
            var15['sort'] = var17;
            var15['filter'] = var16;
            var7['payload'] = var15;
            return var7;
case 60:
            var7 = _closure1_slot30;
            var15 = var14 != var13;
            if(!var15) { _fun0003_ip = 220; continue _fun0003 }
case 221:
            var1 = var13;
case 220:
            var1 = var7.bind(var11)(var1);
            var11 = var1.summaryId;
            var1 = {};
            var1['fingerprint'] = var2;
            var1['attemptId'] = var4;
            var7 = {};
            var13 = var12.messageId;
            if(!(var14 == var13)) { _fun0003_ip = 222; continue _fun0003 }
case 223:
            var13 = _closure1_slot7;
            var13 = var13.CHANNEL;
            _fun0003_ip = 224; continue _fun0003;
case 222:
            var14 = _closure1_slot7;
            var13 = var14.MESSAGE;
case 224:
            var7['type'] = var13;
            var13 = var12.guildId;
            var7['guildId'] = var13;
            var13 = var12.channelId;
            var7['channelId'] = var13;
            var12 = var12.messageId;
            var7['messageId'] = var12;
            var7['summaryId'] = var11;
            var1['payload'] = var7;
            return var1;
case 54:
            var1 = {};
            var1['fingerprint'] = var2;
            var1['attemptId'] = var4;
            var7 = {};
            var11 = _closure1_slot7;
            var11 = var11.REMOTE_AUTH;
            var7['type'] = var11;
            var7['remoteAuthFingerprint'] = var10;
            var1['payload'] = var7;
            return var1;
case 50:
            var1 = {};
            var1['fingerprint'] = var2;
            var1['attemptId'] = var4;
            var7 = {};
            var10 = _closure1_slot7;
            var10 = var10.GIFT_CODE;
            var7['type'] = var10;
            var8 = var9[var8];
            var7['giftCode'] = var8;
            var1['payload'] = var7;
            return var1;
case 25:
            var1 = {};
            var1['fingerprint'] = var2;
            var1['attemptId'] = var4;
            var7 = {};
            var8 = _closure1_slot7;
            var8 = var8.BUILD_OVERRIDE;
            var7['type'] = var8;
            var8 = var6.code;
            var7['overrideUrl'] = var8;
            var1['payload'] = var7;
            return var1;
case 23:
            var1 = {};
            var1['fingerprint'] = var2;
            var1['attemptId'] = var4;
            var7 = {};
            var8 = _closure1_slot7;
            var8 = var8.GUILD_TEMPLATE;
            var7['type'] = var8;
            var8 = var6.code;
            var7['guildTemplateCode'] = var8;
            var1['payload'] = var7;
            return var1;
case 21:
            var1 = {};
            var1['fingerprint'] = var2;
            var1['attemptId'] = var4;
            var2 = {};
            var7 = _closure1_slot7;
            var7 = var7.INVITE;
            var2['type'] = var7;
            var6 = var6.code;
            var2['inviteCode'] = var6;
            var2['username'] = var5;
            var2['deeplinkAttemptId'] = var4;
            var1['payload'] = var2;
            return var1;
case 16:
            var1 = {};
            var2 = {};
            var3 = _closure1_slot7;
            var3 = var3.NONE;
            var2['type'] = var3;
            var1['payload'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();