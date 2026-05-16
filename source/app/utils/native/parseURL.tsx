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
    var7 = var4.MobileWebRedirectCheckoutDeepLinkActions;
    var _closure1_slot11 = var7;
    var4 = var4.MobileWebRedirectCheckoutDeepLinkQueryKeys;
    var _closure1_slot12 = var4;
    var4 = /feature\/([\w-]+)/;
    var _closure1_slot13 = var4;
    var4 = /feature\/boost\/([0-9]+)/;
    var _closure1_slot14 = var4;
    var4 = /users\/(\d+)/;
    var _closure1_slot15 = var4;
    var4 = /(?:connect|oauth2)\/authorize/;
    var _closure1_slot16 = var4;
    var4 = /login\/one-time/;
    var _closure1_slot17 = var4;
    var4 = /promos\.discord\.gg/;
    var _closure1_slot18 = var4;
    var4 = /mweb-handoff/;
    var _closure1_slot19 = var4;
    var4 = /connections\/(xbox|playstation|playstation-stg|crunchyroll)\/link/;
    var _closure1_slot20 = var4;
    var4 = /connections\/([a-z-]+)/;
    var _closure1_slot21 = var4;
    var4 = /guilds\/(\d+)\/settings(?:\/([a-z-]+)(?:\/([a-z-]+))?)?/;
    var _closure1_slot22 = var4;
    var4 = /guilds\/settings(?:\/([a-z-]+)(?:\/([a-z-]+))?)?/;
    var _closure1_slot23 = var4;
    var4 = /activate/;
    var _closure1_slot24 = var4;
    var4 = /quests\/(\d+)/;
    var _closure1_slot25 = var4;
    var4 = /quest-preview\/(\d+)/;
    var _closure1_slot26 = var4;
    var4 = /quest-home/;
    var _closure1_slot27 = var4;
    var4 = /subscriptions\/(\d+)/;
    var _closure1_slot28 = var4;
    var4 = /games\/([^\/]+)\/updates\/([^\/]+)/;
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
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/parseURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function parseURL(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var28 = arguments[1];
            var12 = undefined;
            if(!(var28 === var12)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var28 = false;
case 14:
            var _closure2_slot0 = var12;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var4 = var2.bind(var12)(var1);
            var2 = var4.sanitizeUrl;
            var1 = arg1;
            var39 = var2.bind(var4)(var1);
            var15 = null;
            if(!(var15 != var39)) { _fun0003_ip = 16; continue _fun0003 }
case 8:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var2 = var2.bind(var12)(var1);
            var1 = var2.parse;
            var1 = var1.bind(var2)(var39);
            var21 = var1.protocol;
            var34 = var1.host;
            var16 = var1.hostname;
            var40 = var1.pathname;
            var14 = var1.query;
            var4 = _closure1_slot30;
            var5 = var15 != var14;
            var1 = '';
            var2 = var1;
            if(!var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = var14;
case 17:
            var6 = var4.bind(var12)(var2);
            var7 = var6.fingerprint;
            var5 = var6.username;
            var4 = var6.attemptId;
            var2 = var6.installationId;
            var11 = var6.custom_id;
            var19 = var6.referrer_id;
            var10 = var6.link_id;
            var18 = var6.sort;
            var17 = var6.filter;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 8;
            var6 = var9[var6];
            var8 = var8.bind(var12)(var6);
            var6 = var8.findCodedLink;
            var6 = var6.bind(var8)(var39);
            if(!(var15 != var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var20 = 9;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.INVITE;
            if(!(var9 !== var8)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.TEMPLATE;
            if(!(var9 !== var8)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.BUILD_OVERRIDE;
            if(!(var9 !== var8)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.MANUAL_BUILD_OVERRIDE;
            if(!(var9 !== var8)) { _fun0003_ip = 25; continue _fun0003 }
case 27:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.EXPERIMENT;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 28:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.EVENT;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 29:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.CHANNEL_LINK;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 30:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.APP_DIRECTORY_PROFILE;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 31:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.ACTIVITY_BOOKMARK;
            if(!(var9 !== var8)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.EMBEDDED_ACTIVITY_INVITE;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 34:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.GUILD_PRODUCT;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 35:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.SERVER_SHOP;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 36:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.SOCIAL_LAYER_STOREFRONT;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 37:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.SOCIAL_LAYER_STOREFRONT_APP;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 38:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.QUESTS_EMBED;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 39:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.APP_DIRECTORY_STOREFRONT;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 40:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 41:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.APP_OAUTH2_LINK;
            if(!(var9 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 42:
            var9 = var6.type;
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var8 = var13.bind(var12)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.COLLECTIBLES_SHOP;
            if(!(var9 !== var8)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var8 = global;
            var9 = var8.Error;
            var20 = var6.type;
            var8 = var8.HermesInternal;
            var13 = var8.concat;
            var8 = 'Unknown coded link type: ';
            var8 = var13.bind(var8)(var20);
            var8 = var9.bind(var12)(var8);
            throw var8;
case 43:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 10;
            var8 = var13[var8];
            var13 = var9.bind(var12)(var8);
            var9 = var13.isVirtualCurrencyEnabled;
            var8 = {};
            var20 = 'parseURL';
            var8['location'] = var20;
            var8 = var9.bind(var13)(var8);
            var8 = var8.enabled;
            var20 = var6.code;
            var13 = var20.split;
            var9 = '-';
            var20 = var13.bind(var20)(var9);
            var13 = _closure1_slot3;
            var9 = 2;
            var20 = var13.bind(var12)(var20, var9);
            var9 = 0;
            var9 = var20[var9];
            var13 = 1;
            var20 = var20[var13];
            if(!var8) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var8 = _closure1_slot8;
            var8 = var8.ORBS;
            if(!(var9 !== var8)) { _fun0003_ip = 47; continue _fun0003 }
case 45:
            var8 = _closure1_slot9;
            var13 = var8.FEATURED_PAGE;
            _fun0003_ip = 48; continue _fun0003;
case 47:
            var8 = _closure1_slot9;
            var13 = var8.ORBS;
case 48:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var9 = {};
            var22 = _closure1_slot7;
            var22 = var22.SHOP;
            var9['type'] = var22;
            var9['screen'] = var13;
            var13 = undefined;
            if(!(var1 !== var20)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var13 = var20;
case 49:
            var9['skuId'] = var13;
            var8['payload'] = var9;
            return var8;
case 32:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var9 = {};
            var13 = _closure1_slot7;
            var13 = var13.ACTIVITY;
            var9['type'] = var13;
            var13 = var6.code;
            var9['applicationId'] = var13;
            var9['customId'] = var11;
            var9['referrerId'] = var19;
            var9['linkId'] = var10;
            var9['isDeepLink'] = var28;
            var8['payload'] = var9;
            return var8;
case 19:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 11;
            var8 = var10[var8];
            var8 = var9.bind(var12)(var8);
            var8 = var8.findGiftCodes;
            var10 = var8.bind(var12)(var39);
            var8 = var10.length;
            var9 = 0;
            if(!(!(var8 > var9))) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 12;
            var8 = var13[var8];
            var11 = var11.bind(var12)(var8);
            var8 = var11.findRemoteAuthFingerprint;
            var11 = var8.bind(var11)(var34, var40);
            if(!(var15 != var11)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var8 = var11.length;
            if(!(!(var8 > var9))) { _fun0003_ip = 55; continue _fun0003 }
case 53:
            var13 = _closure1_slot1;
            var8 = _closure1_slot2;
            var20 = 13;
            var8 = var8[var20];
            var13 = var13.bind(var12)(var8);
            var8 = var13.isDiscordHostname;
            var8 = var8.bind(var13)(var34);
            if(var8) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var13 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var13 = var13.bind(var12)(var8);
            var8 = var13.isDiscordProtocol;
            var8 = var8.bind(var13)(var21);
            if(var8) { _fun0003_ip = 56; continue _fun0003 }
case 58:
            var13 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var20];
            var13 = var13.bind(var12)(var8);
            var8 = var13.isDiscordLocalhost;
            var8 = var8.bind(var13)(var34, var16);
            if(!var8) { _fun0003_ip = 59; continue _fun0003 }
case 56:
            if(!(var15 != var40)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var33 = 14;
            var8 = var8[var33];
            var13 = var13.bind(var12)(var8);
            var8 = var13.tryParseChannelPath;
            var13 = var8.bind(var13)(var40);
            if(!(var15 == var13)) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var16 = var40.match;
            var8 = _closure1_slot25;
            var21 = var16.bind(var40)(var8);
            if(!(var15 != var21)) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var8 = var21.length;
            var20 = 1;
            if(!(!(var8 > var20))) { _fun0003_ip = 65; continue _fun0003 }
case 63:
            var16 = var40.match;
            var8 = _closure1_slot26;
            var23 = var16.bind(var40)(var8);
            if(!(var15 != var23)) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var8 = var23.length;
            var22 = 1;
            if(!(!(var8 > var22))) { _fun0003_ip = 68; continue _fun0003 }
case 66:
            var16 = var40.match;
            var8 = _closure1_slot27;
            var8 = var16.bind(var40)(var8);
            if(!(var15 == var8)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var16 = var40.match;
            var8 = _closure1_slot28;
            var8 = var16.bind(var40)(var8);
            if(!(var15 == var8)) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var16 = var40.match;
            var8 = _closure1_slot15;
            var25 = var16.bind(var40)(var8);
            if(!(var15 != var25)) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var8 = var25.length;
            var24 = 1;
            if(!(!(var8 > var24))) { _fun0003_ip = 75; continue _fun0003 }
case 73:
            var16 = var40.match;
            var8 = _closure1_slot16;
            var8 = var16.bind(var40)(var8);
            if(!(var15 != var8)) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var16 = _closure1_slot0;
            var27 = _closure1_slot2;
            var8 = 15;
            var8 = var27[var8];
            var27 = var16.bind(var12)(var8);
            var16 = var27.parseOAuth2AuthorizeProps;
            var29 = var15 != var14;
            var8 = var1;
            if(!var29) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var8 = var14;
case 78:
            var27 = var16.bind(var27)(var8);
            if(!(var15 == var27)) { _fun0003_ip = 80; continue _fun0003 }
case 76:
            var16 = var40.match;
            var8 = _closure1_slot17;
            var8 = var16.bind(var40)(var8);
            if(!(var15 == var8)) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var16 = var40.match;
            var8 = _closure1_slot14;
            var16 = var16.bind(var40)(var8);
            if(!(var15 != var16)) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var29 = var16.length;
            var8 = 1;
            if(!(!(var29 > var8))) { _fun0003_ip = 85; continue _fun0003 }
case 83:
            var30 = var40.match;
            var29 = _closure1_slot29;
            var31 = var30.bind(var40)(var29);
            if(!(var15 != var31)) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var29 = var31.length;
            var30 = 2;
            if(!(!(var29 > var30))) { _fun0003_ip = 88; continue _fun0003 }
case 86:
            var32 = var40.match;
            var29 = _closure1_slot13;
            var32 = var32.bind(var40)(var29);
            if(!(var15 != var32)) { _fun0003_ip = 89; continue _fun0003 }
case 90:
            var35 = var32.length;
            var29 = 1;
            if(!(var35 > var29)) { _fun0003_ip = 89; continue _fun0003 }
case 91:
            var35 = var32[var29];
            var29 = 'composeMessage';
            if(!(var29 !== var35)) { _fun0003_ip = 92; continue _fun0003 }
case 93:
            var29 = 'contactSync';
            if(!(var29 !== var35)) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var29 = 'addFriends';
            if(!(var29 !== var35)) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            var29 = 'friends';
            if(!(var29 !== var35)) { _fun0003_ip = 98; continue _fun0003 }
case 99:
            var29 = 'editProfile';
            if(!(var29 !== var35)) { _fun0003_ip = 100; continue _fun0003 }
case 101:
            var29 = 'voiceChannel';
            if(!(var29 !== var35)) { _fun0003_ip = 102; continue _fun0003 }
case 103:
            var29 = 'sessionManagement';
            if(!(var29 !== var35)) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var29 = 'home';
            if(!(var29 !== var35)) { _fun0003_ip = 106; continue _fun0003 }
case 107:
            var29 = 'icymi';
            if(!(var29 !== var35)) { _fun0003_ip = 108; continue _fun0003 }
case 109:
            var29 = 'connections';
            if(!(var29 !== var35)) { _fun0003_ip = 110; continue _fun0003 }
case 111:
            var29 = 'family-center';
            if(!(var29 !== var35)) { _fun0003_ip = 112; continue _fun0003 }
case 113:
            var29 = 'promo-url';
            if(!(var29 !== var35)) { _fun0003_ip = 114; continue _fun0003 }
case 115:
            var29 = 'account-standing';
            if(!(var29 !== var35)) { _fun0003_ip = 116; continue _fun0003 }
case 117:
            var29 = 'mobile-web-redirect-checkout';
            if(!(var29 !== var35)) { _fun0003_ip = 118; continue _fun0003 }
case 119:
            var29 = 'open-shop';
            if(!(var29 !== var35)) { _fun0003_ip = 120; continue _fun0003 }
case 121:
            var29 = 'authorized-apps';
            if(!(var29 !== var35)) { _fun0003_ip = 122; continue _fun0003 }
case 123:
            var29 = 'share';
            if(!(var29 !== var35)) { _fun0003_ip = 124; continue _fun0003 }
case 125:
            var29 = 'dave-protocol-verification';
            if(!(var29 !== var35)) { _fun0003_ip = 126; continue _fun0003 }
case 127:
            var29 = 'gift';
            if(!(var29 !== var35)) { _fun0003_ip = 128; continue _fun0003 }
case 129:
            var29 = 'store';
            if(!(var29 !== var35)) { _fun0003_ip = 130; continue _fun0003 }
case 131:
            var29 = 'connected-games';
            if(!(var29 !== var35)) { _fun0003_ip = 132; continue _fun0003 }
case 133:
            var29 = 'boost-settings';
            if(!(var29 !== var35)) { _fun0003_ip = 134; continue _fun0003 }
case 135:
            var29 = 'quest-preview-tool';
            if(!(var29 !== var35)) { _fun0003_ip = 136; continue _fun0003 }
case 137:
            var32 = 'subscription-settings';
            var29 = null;
            if(!(var32 === var35)) { _fun0003_ip = 138; continue _fun0003 }
case 139:
            var32 = {};
            var35 = _closure1_slot7;
            var35 = var35.SUBSCRIPTION_SETTINGS;
            var32['type'] = var35;
            var29 = var32;
            _fun0003_ip = 138; continue _fun0003;
case 136:
            var35 = _closure1_slot30;
            var36 = var15 != var14;
            var32 = var1;
            if(!var36) { _fun0003_ip = 140; continue _fun0003 }
case 141:
            var32 = var14;
case 140:
            var32 = var35.bind(var12)(var32);
            var35 = var32.quest_id;
            var32 = {};
            var36 = _closure1_slot7;
            var36 = var36.QUEST_PREVIEW_TOOL;
            var32['type'] = var36;
            var32['questId'] = var35;
            var29 = var32;
            _fun0003_ip = 138; continue _fun0003;
case 134:
            var32 = {};
            var35 = _closure1_slot7;
            var35 = var35.BOOST_SETTINGS;
            var32['type'] = var35;
            var29 = var32;
            _fun0003_ip = 138; continue _fun0003;
case 132:
            var32 = {};
            var35 = _closure1_slot7;
            var35 = var35.CONNECTED_GAMES;
            var32['type'] = var35;
            var29 = var32;
            _fun0003_ip = 138; continue _fun0003;
case 130:
            var35 = _closure1_slot30;
            var36 = var15 != var14;
            var32 = var1;
            if(!var36) { _fun0003_ip = 142; continue _fun0003 }
case 143:
            var32 = var14;
case 142:
            var32 = var35.bind(var12)(var32);
            var35 = var32.section;
            var32 = {};
            var36 = _closure1_slot7;
            var36 = var36.NITRO_HOME;
            var32['type'] = var36;
            var32['section'] = var35;
            var29 = var32;
            _fun0003_ip = 138; continue _fun0003;
case 128:
            var32 = {};
            var35 = _closure1_slot7;
            var35 = var35.GIFT;
            var32['type'] = var35;
            var29 = var32;
            _fun0003_ip = 138; continue _fun0003;
case 126:
            var35 = _closure1_slot30;
            var36 = var15 != var14;
            var32 = var1;
            if(!var36) { _fun0003_ip = 144; continue _fun0003 }
case 145:
            var32 = var14;
case 144:
            var32 = var35.bind(var12)(var32);
            var36 = var32.userId;
            var35 = var32.fingerprint;
            var32 = var15 != var36;
            var29 = null;
            if(!var32) { _fun0003_ip = 138; continue _fun0003 }
case 146:
            var32 = var15 != var35;
            var29 = null;
            if(!var32) { _fun0003_ip = 138; continue _fun0003 }
case 147:
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var32 = 19;
            var32 = var38[var32];
            var38 = var37.bind(var12)(var32);
            var37 = var38.getSecureFramesDeeplinkExperiment;
            var32 = {};
            var41 = 'parseUrl';
            var32['location'] = var41;
            var32 = var37.bind(var38)(var32);
            var32 = var32.enabled;
            var29 = null;
            if(!var32) { _fun0003_ip = 138; continue _fun0003 }
case 148:
            var32 = {};
            var37 = _closure1_slot7;
            var37 = var37.DAVE_PROTOCOL_VERIFICATION;
            var32['type'] = var37;
            var32['userId'] = var36;
            var32['fingerprint'] = var35;
            var29 = var32;
            _fun0003_ip = 138; continue _fun0003;
case 124:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var32 = 18;
            var32 = var36[var32];
            var35 = var35.bind(var12)(var32);
            var32 = var35.isIOS;
            var32 = var32.bind(var35)();
            var29 = null;
            if(!var32) { _fun0003_ip = 138; continue _fun0003 }
case 149:
            var35 = _closure1_slot30;
            var36 = var15 != var14;
            var32 = var1;
            if(!var36) { _fun0003_ip = 150; continue _fun0003 }
case 151:
            var32 = var14;
case 150:
            var35 = var35.bind(var12)(var32);
            var37 = var35.text;
            var36 = var35.channelId;
            var32 = var35.shareId;
            var42 = var35.attachmentManifest;
            var41 = function isValidUUID(arg1) {
                var3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                var2 = var3.test;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            _closure2_slot0 = var41;
            var38 = 'string';
            var43 = typeof var32;
            var35 = undefined;
            if(!(var38 === var43)) { _fun0003_ip = 152; continue _fun0003 }
case 153:
            var41 = var41.bind(var12)(var32);
            var35 = undefined;
            if(!var41) { _fun0003_ip = 152; continue _fun0003 }
case 154:
            var35 = var32;
case 152:
            var32 = typeof var42;
            if(!(var38 !== var32)) { _fun0003_ip = 155; continue _fun0003 }
case 156:
            var38 = new Array(0);
            _fun0003_ip = 157; continue _fun0003;
case 155:
            var32 = global;
            var41 = var32.JSON;
            var32 = var41.parse;
            var38 = var32.bind(var41)(var42);
case 157:
            var32 = global;
            var41 = var32.Array;
            var32 = var41.isArray;
            var32 = var32.bind(var41)(var38);
            if(var32) { _fun0003_ip = 158; continue _fun0003 }
case 159:
            var38 = new Array(0);
case 158:
            var32 = var38.filter;
            var26 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.originalFilename;
                    var4 = 'string';
                    var1 = typeof var1;
                    var1 = var4 === var1;
                    if(!var1) { _fun0004_ip = 160; continue _fun0004 }
case 161:
                    var3 = var2.temporaryFilename;
                    var3 = typeof var3;
                    var1 = var4 === var3;
case 160:
                    if(!var1) { _fun0004_ip = 162; continue _fun0004 }
case 163:
                    var4 = _closure2_slot0;
                    var3 = var2.temporaryFilename;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
case 162:
                    return var1;
                }
            };
            var32 = var32.bind(var38)(var26);
            var26 = {};
            var38 = _closure1_slot7;
            var38 = var38.SHARE;
            var26['type'] = var38;
            var26['text'] = var37;
            var26['channelId'] = var36;
            var26['shareId'] = var35;
            var26['attachmentManifest'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 122:
            var26 = {};
            var32 = _closure1_slot7;
            var32 = var32.AUTHORIZED_APPS;
            var26['type'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 120:
            var26 = {};
            var32 = _closure1_slot7;
            var32 = var32.SHOP;
            var26['type'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 118:
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var26 = 16;
            var26 = var35[var26];
            var32 = var32.bind(var12)(var26);
            var26 = var32.isMobileWebRedirectCheckoutEnabled;
            var26 = var26.bind(var32)();
            if(!var26) { _fun0003_ip = 164; continue _fun0003 }
case 165:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var32 = 17;
            var32 = var36[var32];
            var35 = var35.bind(var12)(var32);
            var32 = var35.isMetaQuest;
            var32 = var32.bind(var35)();
            var26 = !var32;
case 164:
            var35 = _closure1_slot30;
            var36 = var15 != var14;
            var32 = var1;
            if(!var36) { _fun0003_ip = 166; continue _fun0003 }
case 167:
            var32 = var14;
case 166:
            var36 = var35.bind(var12)(var32);
            var32 = _closure1_slot12;
            var35 = var32.DEEP_LINK_ACTION;
            var35 = var36[var35];
            var32 = var32.GUILD_ID;
            var32 = var36[var32];
            var29 = null;
            if(!var26) { _fun0003_ip = 138; continue _fun0003 }
case 168:
            var26 = {};
            var36 = _closure1_slot7;
            var36 = var36.MOBILE_WEB_REDIRECT_CHECKOUT;
            var26['type'] = var36;
            if(!(var15 == var35)) { _fun0003_ip = 169; continue _fun0003 }
case 170:
            var36 = _closure1_slot11;
            var35 = var36.DEFAULT;
case 169:
            var26['deepLinkAction'] = var35;
            var26['guildId'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 116:
            var26 = {};
            var32 = _closure1_slot7;
            var32 = var32.ACCOUNT_STANDING;
            var26['type'] = var32;
            var26['pathname'] = var40;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 114:
            var32 = _closure1_slot30;
            var35 = var15 != var14;
            var26 = var1;
            if(!var35) { _fun0003_ip = 171; continue _fun0003 }
case 172:
            var26 = var14;
case 171:
            var26 = var32.bind(var12)(var26);
            var32 = var26.promo_url;
            var29 = null;
            if(!(var12 !== var32)) { _fun0003_ip = 138; continue _fun0003 }
case 173:
            var26 = {};
            var35 = _closure1_slot7;
            var35 = var35.FEATURE_PROMO_URL;
            var26['type'] = var35;
            var26['promoUrl'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 112:
            var26 = {};
            var32 = _closure1_slot7;
            var32 = var32.FAMILY_CENTER;
            var26['type'] = var32;
            var26['pathname'] = var40;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 110:
            var32 = _closure1_slot30;
            var35 = var15 != var14;
            var26 = var1;
            if(!var35) { _fun0003_ip = 174; continue _fun0003 }
case 175:
            var26 = var14;
case 174:
            var26 = var32.bind(var12)(var26);
            var32 = var26.source;
            var26 = {};
            var35 = _closure1_slot7;
            var35 = var35.CONNECTIONS;
            var26['type'] = var35;
            var26['source'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 108:
            var26 = {};
            var32 = _closure1_slot7;
            var32 = var32.ICYMI;
            var26['type'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 106:
            var32 = _closure1_slot30;
            var35 = var15 != var14;
            var26 = var1;
            if(!var35) { _fun0003_ip = 176; continue _fun0003 }
case 177:
            var26 = var14;
case 176:
            var26 = var32.bind(var12)(var26);
            var36 = var26.guild_id;
            var35 = var26.highlight_channel_id;
            var32 = var26.highlight_message_id;
            var26 = {};
            var37 = _closure1_slot7;
            var37 = var37.GUILD_HOME;
            var26['type'] = var37;
            var26['guildId'] = var36;
            var26['highlightChannelId'] = var35;
            var26['highlightMessageId'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 104:
            var26 = {};
            var32 = _closure1_slot7;
            var32 = var32.SESSION_MANAGEMENT;
            var26['type'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 102:
            var32 = _closure1_slot30;
            var35 = var15 != var14;
            var26 = var1;
            if(!var35) { _fun0003_ip = 178; continue _fun0003 }
case 179:
            var26 = var14;
case 178:
            var26 = var32.bind(var12)(var26);
            var38 = var26.guild_id;
            var37 = var26.channel_id;
            var36 = var26.user_id;
            var35 = var26.via;
            var32 = var26.action;
            var26 = {};
            var41 = _closure1_slot7;
            var41 = var41.VOICE_CHANNEL;
            var26['type'] = var41;
            var26['guildId'] = var38;
            var26['channelId'] = var37;
            var26['userId'] = var36;
            var26['via'] = var35;
            var26['action'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 100:
            var26 = {};
            var32 = _closure1_slot7;
            var32 = var32.EDIT_PROFILE;
            var26['type'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 98:
            var32 = _closure1_slot30;
            var35 = var15 != var14;
            var26 = var1;
            if(!var35) { _fun0003_ip = 180; continue _fun0003 }
case 181:
            var26 = var14;
case 180:
            var26 = var32.bind(var12)(var26);
            var32 = var26.user_id;
            var26 = {};
            var35 = _closure1_slot7;
            var35 = var35.FRIENDS;
            var26['type'] = var35;
            var26['userId'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 96:
            var26 = {};
            var32 = _closure1_slot7;
            var32 = var32.ADD_FRIENDS;
            var26['type'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 94:
            var26 = {};
            var32 = _closure1_slot7;
            var32 = var32.CONTACT_SYNC;
            var26['type'] = var32;
            var29 = var26;
            _fun0003_ip = 138; continue _fun0003;
case 92:
            var26 = {};
            var32 = _closure1_slot7;
            var32 = var32.COMPOSE_MESSAGE;
            var26['type'] = var32;
            var29 = var26;
case 138:
            if(!(var15 == var29)) { _fun0003_ip = 182; continue _fun0003 }
case 89:
            var32 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var33];
            var32 = var32.bind(var12)(var26);
            var26 = var32.tryParseEventDetailsPath;
            var33 = var26.bind(var32)(var40);
            if(!(var15 == var33)) { _fun0003_ip = 183; continue _fun0003 }
case 184:
            var32 = var40.match;
            var26 = _closure1_slot19;
            var26 = var32.bind(var40)(var26);
            if(!(var15 == var26)) { _fun0003_ip = 185; continue _fun0003 }
case 186:
            var32 = var40.match;
            var26 = _closure1_slot20;
            var32 = var32.bind(var40)(var26);
            if(!(var15 == var32)) { _fun0003_ip = 187; continue _fun0003 }
case 188:
            var35 = var40.match;
            var26 = _closure1_slot21;
            var35 = var35.bind(var40)(var26);
            if(!(var15 == var35)) { _fun0003_ip = 189; continue _fun0003 }
case 190:
            var36 = var40.match;
            var26 = _closure1_slot22;
            var36 = var36.bind(var40)(var26);
            if(!(var15 == var36)) { _fun0003_ip = 191; continue _fun0003 }
case 192:
            var37 = var40.match;
            var26 = _closure1_slot23;
            var37 = var37.bind(var40)(var26);
            if(!(var15 == var37)) { _fun0003_ip = 193; continue _fun0003 }
case 194:
            var38 = var40.match;
            var26 = _closure1_slot24;
            var26 = var38.bind(var40)(var26);
            if(!(var15 == var26)) { _fun0003_ip = 195; continue _fun0003 }
case 59:
            var38 = var15 == var34;
            var26 = undefined;
            if(var38) { _fun0003_ip = 196; continue _fun0003 }
case 197:
            var40 = var34.match;
            var38 = _closure1_slot18;
            var26 = var40.bind(var34)(var38);
case 196:
            if(!(var15 == var26)) { _fun0003_ip = 198; continue _fun0003 }
case 199:
            var26 = _closure1_slot10;
            var38 = var15 == var26;
            var26 = undefined;
            if(var38) { _fun0003_ip = 200; continue _fun0003 }
case 201:
            var38 = _closure1_slot10;
            var38 = var38.url;
            var26 = var38.host;
case 200:
            if(!(var34 !== var26)) { _fun0003_ip = 202; continue _fun0003 }
case 203:
            var26 = {};
            var26['fingerprint'] = var7;
            var26['attemptId'] = var4;
            var26['installationId'] = var2;
            var34 = {};
            var38 = _closure1_slot7;
            var38 = var38.NONE;
            var34['type'] = var38;
            var26['payload'] = var34;
            _fun0003_ip = 204; continue _fun0003;
case 202:
            var34 = {};
            var34['fingerprint'] = var7;
            var34['attemptId'] = var4;
            var34['installationId'] = var2;
            var38 = {};
            var40 = _closure1_slot7;
            var40 = var40.MOBILE_NATIVE_UPDATE;
            var38['type'] = var40;
            var38['url'] = var39;
            var34['payload'] = var38;
            var26 = var34;
case 204:
            _fun0003_ip = 205; continue _fun0003;
case 198:
            var34 = {};
            var34['fingerprint'] = var7;
            var34['attemptId'] = var4;
            var34['installationId'] = var2;
            var38 = {};
            var40 = _closure1_slot7;
            var40 = var40.PROMOTIONS;
            var38['type'] = var40;
            var38['url'] = var39;
            var34['payload'] = var38;
            var26 = var34;
case 205:
            return var26;
case 195:
            var34 = _closure1_slot30;
            var26 = global;
            var38 = var26.decodeURIComponent;
            var39 = var15 != var14;
            var26 = var1;
            if(!var39) { _fun0003_ip = 206; continue _fun0003 }
case 207:
            var26 = var14;
case 206:
            var26 = var38.bind(var12)(var26);
            var26 = var34.bind(var12)(var26);
            var38 = var26.user_code;
            var26 = {};
            var26['fingerprint'] = var7;
            var26['attemptId'] = var4;
            var26['installationId'] = var2;
            var34 = {};
            var39 = _closure1_slot7;
            var39 = var39.ACTIVATE_DEVICE;
            var34['type'] = var39;
            var34['userCode'] = var38;
            var26['payload'] = var34;
            return var26;
case 193:
            var34 = _closure1_slot3;
            var26 = 3;
            var34 = var34.bind(var12)(var37, var26);
            var26 = 1;
            var44 = var34[var26];
            var26 = 2;
            var40 = var34[var26];
            var34 = _closure1_slot30;
            var37 = var15 != var14;
            var26 = var1;
            if(!var37) { _fun0003_ip = 208; continue _fun0003 }
case 209:
            var26 = var14;
case 208:
            var26 = var34.bind(var12)(var26);
            var37 = var26.feature;
            var26 = {};
            var26['fingerprint'] = var7;
            var26['attemptId'] = var4;
            var26['installationId'] = var2;
            var34 = {};
            var38 = _closure1_slot7;
            var38 = var38.GUILD_SETTINGS_PICKER;
            var34['type'] = var38;
            var39 = _closure1_slot1;
            var41 = _closure1_slot2;
            var38 = 22;
            var42 = var41[var38];
            var43 = var39.bind(var12)(var42);
            var42 = _closure1_slot5;
            var42 = var43.bind(var12)(var42, var44);
            var34['settingsSection'] = var42;
            var38 = var41[var38];
            var39 = var39.bind(var12)(var38);
            var38 = _closure1_slot6;
            var38 = var39.bind(var12)(var38, var40);
            var34['settingsSubsection'] = var38;
            var34['feature'] = var37;
            var26['payload'] = var34;
            return var26;
case 191:
            var34 = _closure1_slot3;
            var26 = 4;
            var34 = var34.bind(var12)(var36, var26);
            var26 = 1;
            var36 = var34[var26];
            var26 = 2;
            var42 = var34[var26];
            var26 = 3;
            var38 = var34[var26];
            var26 = {};
            var26['fingerprint'] = var7;
            var26['attemptId'] = var4;
            var26['installationId'] = var2;
            var34 = {};
            var37 = _closure1_slot7;
            var37 = var37.GUILD_SETTINGS;
            var34['type'] = var37;
            var34['guildId'] = var36;
            var37 = _closure1_slot1;
            var39 = _closure1_slot2;
            var36 = 22;
            var40 = var39[var36];
            var41 = var37.bind(var12)(var40);
            var40 = _closure1_slot5;
            var40 = var41.bind(var12)(var40, var42);
            var34['settingsSection'] = var40;
            var36 = var39[var36];
            var37 = var37.bind(var12)(var36);
            var36 = _closure1_slot6;
            var36 = var37.bind(var12)(var36, var38);
            var34['settingsSubsection'] = var36;
            var26['payload'] = var34;
            return var26;
case 189:
            var34 = _closure1_slot3;
            var26 = 2;
            var34 = var34.bind(var12)(var35, var26);
            var26 = var34[var9];
            var26 = 1;
            var36 = var34[var26];
            var34 = _closure1_slot30;
            var26 = global;
            var35 = var26.decodeURIComponent;
            var37 = var15 != var14;
            var26 = var1;
            if(!var37) { _fun0003_ip = 210; continue _fun0003 }
case 211:
            var26 = var14;
case 210:
            var26 = var35.bind(var12)(var26);
            var35 = var34.bind(var12)(var26);
            var26 = {};
            var26['fingerprint'] = var7;
            var26['attemptId'] = var4;
            var26['installationId'] = var2;
            var34 = {};
            var37 = _closure1_slot7;
            var37 = var37.USER_CONNECTIONS_CALLBACK;
            var34['type'] = var37;
            var34['provider'] = var36;
            var34['searchParams'] = var35;
            var26['payload'] = var34;
            return var26;
case 187:
            var34 = _closure1_slot30;
            var26 = global;
            var35 = var26.decodeURIComponent;
            var36 = var15 != var14;
            var26 = var1;
            if(!var36) { _fun0003_ip = 212; continue _fun0003 }
case 213:
            var26 = var14;
case 212:
            var26 = var35.bind(var12)(var26);
            var26 = var34.bind(var12)(var26);
            var35 = var26.code;
            var34 = var26.state;
            var26 = 1;
            var36 = var32[var26];
            var26 = {};
            var26['fingerprint'] = var7;
            var26['attemptId'] = var4;
            var26['installationId'] = var2;
            var32 = {};
            var37 = _closure1_slot7;
            var37 = var37.USER_CONNECTIONS_LINK_CALLBACK;
            var32['type'] = var37;
            var32['provider'] = var36;
            var32['callbackCode'] = var35;
            var32['callbackState'] = var34;
            var26['payload'] = var32;
            return var26;
case 185:
            var34 = _closure1_slot30;
            var26 = global;
            var32 = var26.decodeURIComponent;
            var32 = var32.bind(var12)(var14);
            var32 = var34.bind(var12)(var32);
            var36 = var32.key;
            var37 = var32.redirect;
            var38 = var32.fingerprint;
            if(!(var15 != var36)) { _fun0003_ip = 214; continue _fun0003 }
case 215:
            if(!(var15 != var37)) { _fun0003_ip = 214; continue _fun0003 }
case 216:
            var35 = var26.URL;
            var32 = var26.location;
            var39 = var32.protocol;
            var32 = var26.window;
            var32 = var32.GLOBAL_ENV;
            var34 = var32.WEBAPP_ENDPOINT;
            var32 = var26.HermesInternal;
            var32 = var32.concat;
            var46 = var32.bind(var1)(var39, var34);
            var34 = var35.prototype;
            var34 = Object.create(var34, {constructor: {value: var35}});
            var48 = var34;
            var47 = var37;
            var32 = new var48[var35](var47, var46, var45);
            var35 = var32 instanceof Object ? var32 : var34;
            if(!(var15 != var38)) { _fun0003_ip = 217; continue _fun0003 }
case 218:
            var37 = var35.searchParams;
            var34 = var37.append;
            var32 = 'fingerprint';
            var32 = var34.bind(var37)(var32, var38);
case 217:
            var32 = {};
            var32['fingerprint'] = var38;
            var32['attemptId'] = var4;
            var32['installationId'] = var2;
            var34 = {};
            var37 = _closure1_slot7;
            var37 = var37.MOBILE_WEB_HANDOFF;
            var34['type'] = var37;
            var34['nonce'] = var36;
            var34['redirectUrl'] = var35;
            var34['fingerprint'] = var38;
            var32['payload'] = var34;
            return var32;
case 214:
            var34 = _closure1_slot1;
            var40 = _closure1_slot2;
            var32 = 20;
            var32 = var40[var32];
            var37 = var34.bind(var12)(var32);
            var36 = var37.track;
            var32 = _closure1_slot4;
            var35 = var32.MOBILE_WEB_HANDOFF_FAILURE;
            var34 = {};
            var32 = 'invalid_query_params';
            var34['reason'] = var32;
            var39 = _closure1_slot0;
            var32 = 21;
            var32 = var40[var32];
            var39 = var39.bind(var12)(var32);
            var32 = var39.maybeExtractId;
            var32 = var32.bind(var39)(var38);
            var34['fingerprint'] = var32;
            var32 = {};
            var32['fingerprint'] = var38;
            var32 = var36.bind(var37)(var35, var34, var32);
            var34 = var26.Error;
            var26 = var34.prototype;
            var32 = Object.create(var26, {constructor: {value: var34}});
            var47 = 'Missing nonce or redirect query params';
            var48 = var32;
            var26 = new var48[var34](var47, var46);
            var26 = var26 instanceof Object ? var26 : var32;
            throw var26;
case 183:
            var26 = {};
            var26['fingerprint'] = var7;
            var26['attemptId'] = var4;
            var26['installationId'] = var2;
            var32 = {};
            var34 = _closure1_slot7;
            var34 = var34.GUILD_EVENT_DETAILS;
            var32['type'] = var34;
            var34 = var33.guildEventId;
            var32['guildEventId'] = var34;
            var34 = var33.guildId;
            var32['guildId'] = var34;
            var33 = var33.recurrenceId;
            var32['recurrenceId'] = var33;
            var26['payload'] = var32;
            return var26;
case 182:
            var26 = {};
            var26['fingerprint'] = var7;
            var26['attemptId'] = var4;
            var26['installationId'] = var2;
            var26['payload'] = var29;
            return var26;
case 88:
            var26 = {};
            var26['fingerprint'] = var7;
            var26['attemptId'] = var4;
            var26['installationId'] = var2;
            var29 = {};
            var32 = _closure1_slot7;
            var32 = var32.GAME_UPDATE;
            var29['type'] = var32;
            var32 = 1;
            var32 = var31[var32];
            var29['gameId'] = var32;
            var30 = var31[var30];
            var29['gameUpdateId'] = var30;
            var26['payload'] = var29;
            return var26;
case 85:
            var26 = var16[var8];
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var16 = {};
            var29 = _closure1_slot7;
            var29 = var29.BOOST_MARKETING;
            var16['type'] = var29;
            var16['guildId'] = var26;
            var8['payload'] = var16;
            return var8;
case 81:
            var16 = _closure1_slot30;
            var26 = var15 != var14;
            var8 = var1;
            if(!var26) { _fun0003_ip = 219; continue _fun0003 }
case 220:
            var8 = var14;
case 219:
            var8 = var16.bind(var12)(var8);
            var29 = var8.token;
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var16 = {};
            var26 = _closure1_slot7;
            var26 = var26.ONE_TIME_LOGIN;
            var16['type'] = var26;
            var30 = var15 != var29;
            var26 = null;
            if(!var30) { _fun0003_ip = 221; continue _fun0003 }
case 222:
            var26 = var29;
case 221:
            var16['token'] = var26;
            var8['payload'] = var16;
            return var8;
case 80:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var16 = {};
            var26 = _closure1_slot7;
            var26 = var26.OAUTH2_AUTHORIZE;
            var16['type'] = var26;
            var26 = {};
            var47 = var26;
            var46 = var27;
            var27 = copyDataProperties(var47, var46);
            var27 = 'wasDeepLink';
            var26[26] = var28;
            var16['props'] = var26;
            var8['payload'] = var16;
            return var8;
case 75:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var16 = {};
            var26 = _closure1_slot7;
            var26 = var26.USER_PROFILE;
            var16['type'] = var26;
            var24 = var25[var24];
            var16['userId'] = var24;
            var8['payload'] = var16;
            return var8;
case 71:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var16 = {};
            var24 = _closure1_slot7;
            var24 = var24.SUBSCRIPTION_SETTINGS;
            var16['type'] = var24;
            var8['payload'] = var16;
            return var8;
case 69:
            var16 = _closure1_slot1;
            var24 = _closure1_slot2;
            var8 = 5;
            var8 = var24[var8];
            var24 = var16.bind(var12)(var8);
            var16 = var24.parse;
            var25 = var15 != var14;
            var8 = var1;
            if(!var25) { _fun0003_ip = 223; continue _fun0003 }
case 224:
            var8 = var14;
case 223:
            var8 = var16.bind(var24)(var8);
            var8 = var8.ad_creative_ids;
            if(!(var15 == var8)) { _fun0003_ip = 225; continue _fun0003 }
case 226:
            var8 = new Array(0);
case 225:
            var16 = new Array(1);
            var16[0] = var8;
            var8 = var16.flat;
            var25 = var8.bind(var16)();
            var8 = var25.length;
            if(!(!(var8 > var9))) { _fun0003_ip = 227; continue _fun0003 }
case 228:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var16 = {};
            var24 = _closure1_slot7;
            var24 = var24.QUESTS;
            var16['type'] = var24;
            var16['referrerId'] = var19;
            var16['sort'] = var18;
            var16['filter'] = var17;
            var8['payload'] = var16;
            _fun0003_ip = 229; continue _fun0003;
case 227:
            var16 = {};
            var16['fingerprint'] = var7;
            var16['attemptId'] = var4;
            var16['installationId'] = var2;
            var24 = {};
            var26 = _closure1_slot7;
            var26 = var26.QUEST_HOME_PREVIEW;
            var24['type'] = var26;
            var24['adCreativeIds'] = var25;
            var16['payload'] = var24;
            var8 = var16;
case 229:
            return var8;
case 68:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var16 = {};
            var24 = _closure1_slot7;
            var24 = var24.QUEST_PREVIEW_TOOL;
            var16['type'] = var24;
            var22 = var23[var22];
            var16['questId'] = var22;
            var8['payload'] = var16;
            return var8;
case 65:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var16 = {};
            var22 = _closure1_slot7;
            var22 = var22.QUESTS;
            var16['type'] = var22;
            var20 = var21[var20];
            var16['questId'] = var20;
            var16['referrerId'] = var19;
            var16['sort'] = var18;
            var16['filter'] = var17;
            var8['payload'] = var16;
            return var8;
case 61:
            var8 = _closure1_slot30;
            var16 = var15 != var14;
            if(!var16) { _fun0003_ip = 230; continue _fun0003 }
case 231:
            var1 = var14;
case 230:
            var1 = var8.bind(var12)(var1);
            var12 = var1.summaryId;
            var1 = {};
            var1['fingerprint'] = var7;
            var1['attemptId'] = var4;
            var1['installationId'] = var2;
            var8 = {};
            var14 = var13.messageId;
            if(!(var15 == var14)) { _fun0003_ip = 232; continue _fun0003 }
case 233:
            var14 = _closure1_slot7;
            var14 = var14.CHANNEL;
            _fun0003_ip = 234; continue _fun0003;
case 232:
            var15 = _closure1_slot7;
            var14 = var15.MESSAGE;
case 234:
            var8['type'] = var14;
            var14 = var13.guildId;
            var8['guildId'] = var14;
            var14 = var13.channelId;
            var8['channelId'] = var14;
            var13 = var13.messageId;
            var8['messageId'] = var13;
            var8['summaryId'] = var12;
            var1['payload'] = var8;
            return var1;
case 55:
            var1 = {};
            var1['fingerprint'] = var7;
            var1['attemptId'] = var4;
            var1['installationId'] = var2;
            var8 = {};
            var12 = _closure1_slot7;
            var12 = var12.REMOTE_AUTH;
            var8['type'] = var12;
            var8['remoteAuthFingerprint'] = var11;
            var1['payload'] = var8;
            return var1;
case 51:
            var1 = {};
            var1['fingerprint'] = var7;
            var1['attemptId'] = var4;
            var1['installationId'] = var2;
            var8 = {};
            var11 = _closure1_slot7;
            var11 = var11.GIFT_CODE;
            var8['type'] = var11;
            var9 = var10[var9];
            var8['giftCode'] = var9;
            var1['payload'] = var8;
            return var1;
case 25:
            var1 = {};
            var1['fingerprint'] = var7;
            var1['attemptId'] = var4;
            var1['installationId'] = var2;
            var8 = {};
            var9 = _closure1_slot7;
            var9 = var9.BUILD_OVERRIDE;
            var8['type'] = var9;
            var9 = var6.code;
            var8['overrideUrl'] = var9;
            var1['payload'] = var8;
            return var1;
case 23:
            var1 = {};
            var1['fingerprint'] = var7;
            var1['attemptId'] = var4;
            var1['installationId'] = var2;
            var8 = {};
            var9 = _closure1_slot7;
            var9 = var9.GUILD_TEMPLATE;
            var8['type'] = var9;
            var9 = var6.code;
            var8['guildTemplateCode'] = var9;
            var1['payload'] = var8;
            return var1;
case 21:
            var1 = {};
            var1['fingerprint'] = var7;
            var1['attemptId'] = var4;
            var1['installationId'] = var2;
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