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
            var29 = arguments[1];
            var13 = undefined;
            if(!(var29 === var13)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var29 = false;
case 14:
            var _closure2_slot0 = var13;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var4 = var2.bind(var13)(var1);
            var2 = var4.sanitizeUrl;
            var1 = arg1;
            var40 = var2.bind(var4)(var1);
            var16 = null;
            if(!(var16 != var40)) { _fun0003_ip = 16; continue _fun0003 }
case 8:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var2 = var2.bind(var13)(var1);
            var1 = var2.parse;
            var1 = var1.bind(var2)(var40);
            var21 = var1.protocol;
            var35 = var1.host;
            var14 = var1.hostname;
            var41 = var1.pathname;
            var15 = var1.query;
            var4 = _closure1_slot30;
            var5 = var16 != var15;
            var1 = '';
            var2 = var1;
            if(!var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = var15;
case 17:
            var6 = var4.bind(var13)(var2);
            var7 = var6.fingerprint;
            var5 = var6.username;
            var4 = var6.attemptId;
            var2 = var6.installationId;
            var11 = var6.custom_id;
            var20 = var6.referrer_id;
            var10 = var6.link_id;
            var19 = var6.sort;
            var18 = var6.filter;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 8;
            var6 = var9[var6];
            var8 = var8.bind(var13)(var6);
            var6 = var8.findCodedLink;
            var6 = var6.bind(var8)(var40);
            if(!(var16 != var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var9 = var6.type;
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var17 = 9;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.INVITE;
            if(!(var8 !== var9)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.TEMPLATE;
            if(!(var8 !== var9)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.BUILD_OVERRIDE;
            if(!(var8 !== var9)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.MANUAL_BUILD_OVERRIDE;
            if(!(var8 !== var9)) { _fun0003_ip = 25; continue _fun0003 }
case 27:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.EXPERIMENT;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 28:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.EVENT;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 29:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.CHANNEL_LINK;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 30:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.APP_DIRECTORY_PROFILE;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 31:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.ACTIVITY_BOOKMARK;
            if(!(var8 !== var9)) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.EMBEDDED_ACTIVITY_INVITE;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 34:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.GUILD_PRODUCT;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 35:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.SERVER_SHOP;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 36:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.SOCIAL_LAYER_STOREFRONT;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 37:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.SOCIAL_LAYER_STOREFRONT_APP;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 38:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.QUESTS_EMBED;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 39:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.APP_DIRECTORY_STOREFRONT;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 40:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 41:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.APP_OAUTH2_LINK;
            if(!(var8 !== var9)) { _fun0003_ip = 19; continue _fun0003 }
case 42:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var8 = var12.bind(var13)(var8);
            var8 = var8.CodedLinkType;
            var8 = var8.COLLECTIBLES_SHOP;
            if(!(var8 !== var9)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var8 = global;
            var9 = var8.Error;
            var17 = var6.type;
            var8 = var8.HermesInternal;
            var12 = var8.concat;
            var8 = 'Unknown coded link type: ';
            var8 = var12.bind(var8)(var17);
            var8 = var9.bind(var13)(var8);
            throw var8;
case 43:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 10;
            var8 = var12[var8];
            var9 = var9.bind(var13)(var8);
            var8 = var9.isVirtualCurrencyEnabled;
            var8 = var8.bind(var9)();
            var8 = var8.enabled;
            var17 = var6.code;
            var12 = var17.split;
            var9 = '-';
            var17 = var12.bind(var17)(var9);
            var12 = _closure1_slot3;
            var9 = 2;
            var17 = var12.bind(var13)(var17, var9);
            var9 = 0;
            var9 = var17[var9];
            var12 = 1;
            var17 = var17[var12];
            if(!var8) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var8 = _closure1_slot8;
            var8 = var8.ORBS;
            if(!(var9 !== var8)) { _fun0003_ip = 47; continue _fun0003 }
case 45:
            var8 = _closure1_slot9;
            var12 = var8.FEATURED_PAGE;
            _fun0003_ip = 48; continue _fun0003;
case 47:
            var8 = _closure1_slot9;
            var12 = var8.ORBS;
case 48:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var9 = {};
            var22 = _closure1_slot7;
            var22 = var22.SHOP;
            var9['type'] = var22;
            var9['screen'] = var12;
            var12 = undefined;
            if(!(var1 !== var17)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var12 = var17;
case 49:
            var9['skuId'] = var12;
            var8['payload'] = var9;
            return var8;
case 32:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var9 = {};
            var12 = _closure1_slot7;
            var12 = var12.ACTIVITY;
            var9['type'] = var12;
            var12 = var6.code;
            var9['applicationId'] = var12;
            var9['customId'] = var11;
            var9['referrerId'] = var20;
            var9['linkId'] = var10;
            var9['isDeepLink'] = var29;
            var8['payload'] = var9;
            return var8;
case 19:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 11;
            var8 = var10[var8];
            var8 = var9.bind(var13)(var8);
            var8 = var8.findGiftCodes;
            var10 = var8.bind(var13)(var40);
            var8 = var10.length;
            var9 = 0;
            if(!(!(var8 > var9))) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 12;
            var8 = var12[var8];
            var11 = var11.bind(var13)(var8);
            var8 = var11.findRemoteAuthFingerprint;
            var11 = var8.bind(var11)(var35, var41);
            if(!(var16 != var11)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var8 = var11.length;
            if(!(!(var8 > var9))) { _fun0003_ip = 55; continue _fun0003 }
case 53:
            var12 = _closure1_slot1;
            var8 = _closure1_slot2;
            var17 = 13;
            var8 = var8[var17];
            var12 = var12.bind(var13)(var8);
            var8 = var12.isDiscordHostname;
            var8 = var8.bind(var12)(var35);
            if(var8) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var12 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var12 = var12.bind(var13)(var8);
            var8 = var12.isDiscordProtocol;
            var8 = var8.bind(var12)(var21);
            if(var8) { _fun0003_ip = 56; continue _fun0003 }
case 58:
            var12 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var17];
            var12 = var12.bind(var13)(var8);
            var8 = var12.isDiscordLocalhost;
            var8 = var8.bind(var12)(var35, var14);
            if(!var8) { _fun0003_ip = 59; continue _fun0003 }
case 56:
            if(!(var16 != var41)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var34 = 14;
            var8 = var8[var34];
            var12 = var12.bind(var13)(var8);
            var8 = var12.tryParseDiceRollLink;
            var12 = var8.bind(var12)(var41);
            if(!(var16 == var12)) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var14 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var34];
            var14 = var14.bind(var13)(var8);
            var8 = var14.tryParseChannelPath;
            var14 = var8.bind(var14)(var41);
            if(!(var16 == var14)) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var17 = var41.match;
            var8 = _closure1_slot25;
            var22 = var17.bind(var41)(var8);
            if(!(var16 != var22)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var8 = var22.length;
            var21 = 1;
            if(!(!(var8 > var21))) { _fun0003_ip = 67; continue _fun0003 }
case 65:
            var17 = var41.match;
            var8 = _closure1_slot26;
            var24 = var17.bind(var41)(var8);
            if(!(var16 != var24)) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var8 = var24.length;
            var23 = 1;
            if(!(!(var8 > var23))) { _fun0003_ip = 70; continue _fun0003 }
case 68:
            var17 = var41.match;
            var8 = _closure1_slot27;
            var8 = var17.bind(var41)(var8);
            if(!(var16 == var8)) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var17 = var41.match;
            var8 = _closure1_slot28;
            var8 = var17.bind(var41)(var8);
            if(!(var16 == var8)) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var17 = var41.match;
            var8 = _closure1_slot15;
            var26 = var17.bind(var41)(var8);
            if(!(var16 != var26)) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var8 = var26.length;
            var25 = 1;
            if(!(!(var8 > var25))) { _fun0003_ip = 77; continue _fun0003 }
case 75:
            var17 = var41.match;
            var8 = _closure1_slot16;
            var8 = var17.bind(var41)(var8);
            if(!(var16 != var8)) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var17 = _closure1_slot0;
            var28 = _closure1_slot2;
            var8 = 15;
            var8 = var28[var8];
            var28 = var17.bind(var13)(var8);
            var17 = var28.parseOAuth2AuthorizeProps;
            var30 = var16 != var15;
            var8 = var1;
            if(!var30) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var8 = var15;
case 80:
            var28 = var17.bind(var28)(var8);
            if(!(var16 == var28)) { _fun0003_ip = 82; continue _fun0003 }
case 78:
            var17 = var41.match;
            var8 = _closure1_slot17;
            var8 = var17.bind(var41)(var8);
            if(!(var16 == var8)) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var17 = var41.match;
            var8 = _closure1_slot14;
            var17 = var17.bind(var41)(var8);
            if(!(var16 != var17)) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var30 = var17.length;
            var8 = 1;
            if(!(!(var30 > var8))) { _fun0003_ip = 87; continue _fun0003 }
case 85:
            var31 = var41.match;
            var30 = _closure1_slot29;
            var32 = var31.bind(var41)(var30);
            if(!(var16 != var32)) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var30 = var32.length;
            var31 = 2;
            if(!(!(var30 > var31))) { _fun0003_ip = 90; continue _fun0003 }
case 88:
            var33 = var41.match;
            var30 = _closure1_slot13;
            var33 = var33.bind(var41)(var30);
            if(!(var16 != var33)) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var36 = var33.length;
            var30 = 1;
            if(!(var36 > var30)) { _fun0003_ip = 91; continue _fun0003 }
case 93:
            var36 = var33[var30];
            var30 = 'composeMessage';
            if(!(var30 !== var36)) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var30 = 'contactSync';
            if(!(var30 !== var36)) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            var30 = 'addFriends';
            if(!(var30 !== var36)) { _fun0003_ip = 98; continue _fun0003 }
case 99:
            var30 = 'friends';
            if(!(var30 !== var36)) { _fun0003_ip = 100; continue _fun0003 }
case 101:
            var30 = 'editProfile';
            if(!(var30 !== var36)) { _fun0003_ip = 102; continue _fun0003 }
case 103:
            var30 = 'voiceChannel';
            if(!(var30 !== var36)) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var30 = 'sessionManagement';
            if(!(var30 !== var36)) { _fun0003_ip = 106; continue _fun0003 }
case 107:
            var30 = 'home';
            if(!(var30 !== var36)) { _fun0003_ip = 108; continue _fun0003 }
case 109:
            var30 = 'icymi';
            if(!(var30 !== var36)) { _fun0003_ip = 110; continue _fun0003 }
case 111:
            var30 = 'connections';
            if(!(var30 !== var36)) { _fun0003_ip = 112; continue _fun0003 }
case 113:
            var30 = 'family-center';
            if(!(var30 !== var36)) { _fun0003_ip = 114; continue _fun0003 }
case 115:
            var30 = 'promo-url';
            if(!(var30 !== var36)) { _fun0003_ip = 116; continue _fun0003 }
case 117:
            var30 = 'account-standing';
            if(!(var30 !== var36)) { _fun0003_ip = 118; continue _fun0003 }
case 119:
            var30 = 'mobile-web-redirect-checkout';
            if(!(var30 !== var36)) { _fun0003_ip = 120; continue _fun0003 }
case 121:
            var30 = 'open-shop';
            if(!(var30 !== var36)) { _fun0003_ip = 122; continue _fun0003 }
case 123:
            var30 = 'authorized-apps';
            if(!(var30 !== var36)) { _fun0003_ip = 124; continue _fun0003 }
case 125:
            var30 = 'share';
            if(!(var30 !== var36)) { _fun0003_ip = 126; continue _fun0003 }
case 127:
            var30 = 'dave-protocol-verification';
            if(!(var30 !== var36)) { _fun0003_ip = 128; continue _fun0003 }
case 129:
            var30 = 'gift';
            if(!(var30 !== var36)) { _fun0003_ip = 130; continue _fun0003 }
case 131:
            var30 = 'store';
            if(!(var30 !== var36)) { _fun0003_ip = 132; continue _fun0003 }
case 133:
            var30 = 'connected-games';
            if(!(var30 !== var36)) { _fun0003_ip = 134; continue _fun0003 }
case 135:
            var30 = 'boost-settings';
            if(!(var30 !== var36)) { _fun0003_ip = 136; continue _fun0003 }
case 137:
            var30 = 'quest-preview-tool';
            if(!(var30 !== var36)) { _fun0003_ip = 138; continue _fun0003 }
case 139:
            var33 = 'subscription-settings';
            var30 = null;
            if(!(var33 === var36)) { _fun0003_ip = 140; continue _fun0003 }
case 141:
            var33 = {};
            var36 = _closure1_slot7;
            var36 = var36.SUBSCRIPTION_SETTINGS;
            var33['type'] = var36;
            var30 = var33;
            _fun0003_ip = 140; continue _fun0003;
case 138:
            var36 = _closure1_slot30;
            var37 = var16 != var15;
            var33 = var1;
            if(!var37) { _fun0003_ip = 142; continue _fun0003 }
case 143:
            var33 = var15;
case 142:
            var33 = var36.bind(var13)(var33);
            var36 = var33.quest_id;
            var33 = {};
            var37 = _closure1_slot7;
            var37 = var37.QUEST_PREVIEW_TOOL;
            var33['type'] = var37;
            var33['questId'] = var36;
            var30 = var33;
            _fun0003_ip = 140; continue _fun0003;
case 136:
            var33 = {};
            var36 = _closure1_slot7;
            var36 = var36.BOOST_SETTINGS;
            var33['type'] = var36;
            var30 = var33;
            _fun0003_ip = 140; continue _fun0003;
case 134:
            var33 = {};
            var36 = _closure1_slot7;
            var36 = var36.CONNECTED_GAMES;
            var33['type'] = var36;
            var30 = var33;
            _fun0003_ip = 140; continue _fun0003;
case 132:
            var36 = _closure1_slot30;
            var37 = var16 != var15;
            var33 = var1;
            if(!var37) { _fun0003_ip = 144; continue _fun0003 }
case 145:
            var33 = var15;
case 144:
            var33 = var36.bind(var13)(var33);
            var36 = var33.section;
            var33 = {};
            var37 = _closure1_slot7;
            var37 = var37.NITRO_HOME;
            var33['type'] = var37;
            var33['section'] = var36;
            var30 = var33;
            _fun0003_ip = 140; continue _fun0003;
case 130:
            var33 = {};
            var36 = _closure1_slot7;
            var36 = var36.GIFT;
            var33['type'] = var36;
            var30 = var33;
            _fun0003_ip = 140; continue _fun0003;
case 128:
            var36 = _closure1_slot30;
            var37 = var16 != var15;
            var33 = var1;
            if(!var37) { _fun0003_ip = 146; continue _fun0003 }
case 147:
            var33 = var15;
case 146:
            var33 = var36.bind(var13)(var33);
            var37 = var33.userId;
            var36 = var33.fingerprint;
            var33 = var16 != var37;
            var30 = null;
            if(!var33) { _fun0003_ip = 140; continue _fun0003 }
case 148:
            var33 = var16 != var36;
            var30 = null;
            if(!var33) { _fun0003_ip = 140; continue _fun0003 }
case 149:
            var38 = _closure1_slot0;
            var39 = _closure1_slot2;
            var33 = 19;
            var33 = var39[var33];
            var39 = var38.bind(var13)(var33);
            var38 = var39.getSecureFramesDeeplinkExperiment;
            var33 = {};
            var42 = 'parseUrl';
            var33['location'] = var42;
            var33 = var38.bind(var39)(var33);
            var33 = var33.enabled;
            var30 = null;
            if(!var33) { _fun0003_ip = 140; continue _fun0003 }
case 150:
            var33 = {};
            var38 = _closure1_slot7;
            var38 = var38.DAVE_PROTOCOL_VERIFICATION;
            var33['type'] = var38;
            var33['userId'] = var37;
            var33['fingerprint'] = var36;
            var30 = var33;
            _fun0003_ip = 140; continue _fun0003;
case 126:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var33 = 18;
            var33 = var37[var33];
            var36 = var36.bind(var13)(var33);
            var33 = var36.isIOS;
            var33 = var33.bind(var36)();
            var30 = null;
            if(!var33) { _fun0003_ip = 140; continue _fun0003 }
case 151:
            var36 = _closure1_slot30;
            var37 = var16 != var15;
            var33 = var1;
            if(!var37) { _fun0003_ip = 152; continue _fun0003 }
case 153:
            var33 = var15;
case 152:
            var36 = var36.bind(var13)(var33);
            var38 = var36.text;
            var37 = var36.channelId;
            var33 = var36.shareId;
            var43 = var36.attachmentManifest;
            var42 = function isValidUUID(arg1) {
                var3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                var2 = var3.test;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            _closure2_slot0 = var42;
            var39 = 'string';
            var44 = typeof var33;
            var36 = undefined;
            if(!(var39 === var44)) { _fun0003_ip = 154; continue _fun0003 }
case 155:
            var42 = var42.bind(var13)(var33);
            var36 = undefined;
            if(!var42) { _fun0003_ip = 154; continue _fun0003 }
case 156:
            var36 = var33;
case 154:
            var33 = typeof var43;
            if(!(var39 !== var33)) { _fun0003_ip = 157; continue _fun0003 }
case 158:
            var39 = new Array(0);
            _fun0003_ip = 159; continue _fun0003;
case 157:
            var33 = global;
            var42 = var33.JSON;
            var33 = var42.parse;
            var39 = var33.bind(var42)(var43);
case 159:
            var33 = global;
            var42 = var33.Array;
            var33 = var42.isArray;
            var33 = var33.bind(var42)(var39);
            if(var33) { _fun0003_ip = 160; continue _fun0003 }
case 161:
            var39 = new Array(0);
case 160:
            var33 = var39.filter;
            var27 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.originalFilename;
                    var4 = 'string';
                    var1 = typeof var1;
                    var1 = var4 === var1;
                    if(!var1) { _fun0004_ip = 162; continue _fun0004 }
case 163:
                    var3 = var2.temporaryFilename;
                    var3 = typeof var3;
                    var1 = var4 === var3;
case 162:
                    if(!var1) { _fun0004_ip = 164; continue _fun0004 }
case 165:
                    var4 = _closure2_slot0;
                    var3 = var2.temporaryFilename;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
case 164:
                    return var1;
                }
            };
            var33 = var33.bind(var39)(var27);
            var27 = {};
            var39 = _closure1_slot7;
            var39 = var39.SHARE;
            var27['type'] = var39;
            var27['text'] = var38;
            var27['channelId'] = var37;
            var27['shareId'] = var36;
            var27['attachmentManifest'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 124:
            var27 = {};
            var33 = _closure1_slot7;
            var33 = var33.AUTHORIZED_APPS;
            var27['type'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 122:
            var27 = {};
            var33 = _closure1_slot7;
            var33 = var33.SHOP;
            var27['type'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 120:
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var27 = 16;
            var27 = var36[var27];
            var33 = var33.bind(var13)(var27);
            var27 = var33.isMobileWebRedirectCheckoutEnabled;
            var27 = var27.bind(var33)();
            if(!var27) { _fun0003_ip = 166; continue _fun0003 }
case 167:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var33 = 17;
            var33 = var37[var33];
            var36 = var36.bind(var13)(var33);
            var33 = var36.isMetaQuest;
            var33 = var33.bind(var36)();
            var27 = !var33;
case 166:
            var36 = _closure1_slot30;
            var37 = var16 != var15;
            var33 = var1;
            if(!var37) { _fun0003_ip = 168; continue _fun0003 }
case 169:
            var33 = var15;
case 168:
            var37 = var36.bind(var13)(var33);
            var33 = _closure1_slot12;
            var36 = var33.DEEP_LINK_ACTION;
            var36 = var37[var36];
            var33 = var33.GUILD_ID;
            var33 = var37[var33];
            var30 = null;
            if(!var27) { _fun0003_ip = 140; continue _fun0003 }
case 170:
            var27 = {};
            var37 = _closure1_slot7;
            var37 = var37.MOBILE_WEB_REDIRECT_CHECKOUT;
            var27['type'] = var37;
            if(!(var16 == var36)) { _fun0003_ip = 171; continue _fun0003 }
case 172:
            var37 = _closure1_slot11;
            var36 = var37.DEFAULT;
case 171:
            var27['deepLinkAction'] = var36;
            var27['guildId'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 118:
            var27 = {};
            var33 = _closure1_slot7;
            var33 = var33.ACCOUNT_STANDING;
            var27['type'] = var33;
            var27['pathname'] = var41;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 116:
            var33 = _closure1_slot30;
            var36 = var16 != var15;
            var27 = var1;
            if(!var36) { _fun0003_ip = 173; continue _fun0003 }
case 174:
            var27 = var15;
case 173:
            var27 = var33.bind(var13)(var27);
            var33 = var27.promo_url;
            var30 = null;
            if(!(var13 !== var33)) { _fun0003_ip = 140; continue _fun0003 }
case 175:
            var27 = {};
            var36 = _closure1_slot7;
            var36 = var36.FEATURE_PROMO_URL;
            var27['type'] = var36;
            var27['promoUrl'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 114:
            var27 = {};
            var33 = _closure1_slot7;
            var33 = var33.FAMILY_CENTER;
            var27['type'] = var33;
            var27['pathname'] = var41;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 112:
            var33 = _closure1_slot30;
            var36 = var16 != var15;
            var27 = var1;
            if(!var36) { _fun0003_ip = 176; continue _fun0003 }
case 177:
            var27 = var15;
case 176:
            var27 = var33.bind(var13)(var27);
            var33 = var27.source;
            var27 = {};
            var36 = _closure1_slot7;
            var36 = var36.CONNECTIONS;
            var27['type'] = var36;
            var27['source'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 110:
            var27 = {};
            var33 = _closure1_slot7;
            var33 = var33.ICYMI;
            var27['type'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 108:
            var33 = _closure1_slot30;
            var36 = var16 != var15;
            var27 = var1;
            if(!var36) { _fun0003_ip = 178; continue _fun0003 }
case 179:
            var27 = var15;
case 178:
            var27 = var33.bind(var13)(var27);
            var37 = var27.guild_id;
            var36 = var27.highlight_channel_id;
            var33 = var27.highlight_message_id;
            var27 = {};
            var38 = _closure1_slot7;
            var38 = var38.GUILD_HOME;
            var27['type'] = var38;
            var27['guildId'] = var37;
            var27['highlightChannelId'] = var36;
            var27['highlightMessageId'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 106:
            var27 = {};
            var33 = _closure1_slot7;
            var33 = var33.SESSION_MANAGEMENT;
            var27['type'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 104:
            var33 = _closure1_slot30;
            var36 = var16 != var15;
            var27 = var1;
            if(!var36) { _fun0003_ip = 180; continue _fun0003 }
case 181:
            var27 = var15;
case 180:
            var27 = var33.bind(var13)(var27);
            var39 = var27.guild_id;
            var38 = var27.channel_id;
            var37 = var27.user_id;
            var36 = var27.via;
            var33 = var27.action;
            var27 = {};
            var42 = _closure1_slot7;
            var42 = var42.VOICE_CHANNEL;
            var27['type'] = var42;
            var27['guildId'] = var39;
            var27['channelId'] = var38;
            var27['userId'] = var37;
            var27['via'] = var36;
            var27['action'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 102:
            var27 = {};
            var33 = _closure1_slot7;
            var33 = var33.EDIT_PROFILE;
            var27['type'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 100:
            var33 = _closure1_slot30;
            var36 = var16 != var15;
            var27 = var1;
            if(!var36) { _fun0003_ip = 182; continue _fun0003 }
case 183:
            var27 = var15;
case 182:
            var27 = var33.bind(var13)(var27);
            var33 = var27.user_id;
            var27 = {};
            var36 = _closure1_slot7;
            var36 = var36.FRIENDS;
            var27['type'] = var36;
            var27['userId'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 98:
            var27 = {};
            var33 = _closure1_slot7;
            var33 = var33.ADD_FRIENDS;
            var27['type'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 96:
            var27 = {};
            var33 = _closure1_slot7;
            var33 = var33.CONTACT_SYNC;
            var27['type'] = var33;
            var30 = var27;
            _fun0003_ip = 140; continue _fun0003;
case 94:
            var27 = {};
            var33 = _closure1_slot7;
            var33 = var33.COMPOSE_MESSAGE;
            var27['type'] = var33;
            var30 = var27;
case 140:
            if(!(var16 == var30)) { _fun0003_ip = 184; continue _fun0003 }
case 91:
            var33 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var34];
            var33 = var33.bind(var13)(var27);
            var27 = var33.tryParseEventDetailsPath;
            var34 = var27.bind(var33)(var41);
            if(!(var16 == var34)) { _fun0003_ip = 185; continue _fun0003 }
case 186:
            var33 = var41.match;
            var27 = _closure1_slot19;
            var27 = var33.bind(var41)(var27);
            if(!(var16 == var27)) { _fun0003_ip = 187; continue _fun0003 }
case 188:
            var33 = var41.match;
            var27 = _closure1_slot20;
            var33 = var33.bind(var41)(var27);
            if(!(var16 == var33)) { _fun0003_ip = 189; continue _fun0003 }
case 190:
            var36 = var41.match;
            var27 = _closure1_slot21;
            var36 = var36.bind(var41)(var27);
            if(!(var16 == var36)) { _fun0003_ip = 191; continue _fun0003 }
case 192:
            var37 = var41.match;
            var27 = _closure1_slot22;
            var37 = var37.bind(var41)(var27);
            if(!(var16 == var37)) { _fun0003_ip = 193; continue _fun0003 }
case 194:
            var38 = var41.match;
            var27 = _closure1_slot23;
            var38 = var38.bind(var41)(var27);
            if(!(var16 == var38)) { _fun0003_ip = 195; continue _fun0003 }
case 196:
            var39 = var41.match;
            var27 = _closure1_slot24;
            var27 = var39.bind(var41)(var27);
            if(!(var16 == var27)) { _fun0003_ip = 197; continue _fun0003 }
case 59:
            var39 = var16 == var35;
            var27 = undefined;
            if(var39) { _fun0003_ip = 198; continue _fun0003 }
case 199:
            var41 = var35.match;
            var39 = _closure1_slot18;
            var27 = var41.bind(var35)(var39);
case 198:
            if(!(var16 == var27)) { _fun0003_ip = 200; continue _fun0003 }
case 201:
            var27 = _closure1_slot10;
            var39 = var16 == var27;
            var27 = undefined;
            if(var39) { _fun0003_ip = 202; continue _fun0003 }
case 203:
            var39 = _closure1_slot10;
            var39 = var39.url;
            var27 = var39.host;
case 202:
            if(!(var35 !== var27)) { _fun0003_ip = 204; continue _fun0003 }
case 205:
            var27 = {};
            var27['fingerprint'] = var7;
            var27['attemptId'] = var4;
            var27['installationId'] = var2;
            var35 = {};
            var39 = _closure1_slot7;
            var39 = var39.NONE;
            var35['type'] = var39;
            var27['payload'] = var35;
            _fun0003_ip = 206; continue _fun0003;
case 204:
            var35 = {};
            var35['fingerprint'] = var7;
            var35['attemptId'] = var4;
            var35['installationId'] = var2;
            var39 = {};
            var41 = _closure1_slot7;
            var41 = var41.MOBILE_NATIVE_UPDATE;
            var39['type'] = var41;
            var39['url'] = var40;
            var35['payload'] = var39;
            var27 = var35;
case 206:
            _fun0003_ip = 207; continue _fun0003;
case 200:
            var35 = {};
            var35['fingerprint'] = var7;
            var35['attemptId'] = var4;
            var35['installationId'] = var2;
            var39 = {};
            var41 = _closure1_slot7;
            var41 = var41.PROMOTIONS;
            var39['type'] = var41;
            var39['url'] = var40;
            var35['payload'] = var39;
            var27 = var35;
case 207:
            return var27;
case 197:
            var35 = _closure1_slot30;
            var27 = global;
            var39 = var27.decodeURIComponent;
            var40 = var16 != var15;
            var27 = var1;
            if(!var40) { _fun0003_ip = 208; continue _fun0003 }
case 209:
            var27 = var15;
case 208:
            var27 = var39.bind(var13)(var27);
            var27 = var35.bind(var13)(var27);
            var39 = var27.user_code;
            var27 = {};
            var27['fingerprint'] = var7;
            var27['attemptId'] = var4;
            var27['installationId'] = var2;
            var35 = {};
            var40 = _closure1_slot7;
            var40 = var40.ACTIVATE_DEVICE;
            var35['type'] = var40;
            var35['userCode'] = var39;
            var27['payload'] = var35;
            return var27;
case 195:
            var35 = _closure1_slot3;
            var27 = 3;
            var35 = var35.bind(var13)(var38, var27);
            var27 = 1;
            var45 = var35[var27];
            var27 = 2;
            var41 = var35[var27];
            var35 = _closure1_slot30;
            var38 = var16 != var15;
            var27 = var1;
            if(!var38) { _fun0003_ip = 210; continue _fun0003 }
case 211:
            var27 = var15;
case 210:
            var27 = var35.bind(var13)(var27);
            var38 = var27.feature;
            var27 = {};
            var27['fingerprint'] = var7;
            var27['attemptId'] = var4;
            var27['installationId'] = var2;
            var35 = {};
            var39 = _closure1_slot7;
            var39 = var39.GUILD_SETTINGS_PICKER;
            var35['type'] = var39;
            var40 = _closure1_slot1;
            var42 = _closure1_slot2;
            var39 = 22;
            var43 = var42[var39];
            var44 = var40.bind(var13)(var43);
            var43 = _closure1_slot5;
            var43 = var44.bind(var13)(var43, var45);
            var35['settingsSection'] = var43;
            var39 = var42[var39];
            var40 = var40.bind(var13)(var39);
            var39 = _closure1_slot6;
            var39 = var40.bind(var13)(var39, var41);
            var35['settingsSubsection'] = var39;
            var35['feature'] = var38;
            var27['payload'] = var35;
            return var27;
case 193:
            var35 = _closure1_slot3;
            var27 = 4;
            var35 = var35.bind(var13)(var37, var27);
            var27 = 1;
            var37 = var35[var27];
            var27 = 2;
            var43 = var35[var27];
            var27 = 3;
            var39 = var35[var27];
            var27 = {};
            var27['fingerprint'] = var7;
            var27['attemptId'] = var4;
            var27['installationId'] = var2;
            var35 = {};
            var38 = _closure1_slot7;
            var38 = var38.GUILD_SETTINGS;
            var35['type'] = var38;
            var35['guildId'] = var37;
            var38 = _closure1_slot1;
            var40 = _closure1_slot2;
            var37 = 22;
            var41 = var40[var37];
            var42 = var38.bind(var13)(var41);
            var41 = _closure1_slot5;
            var41 = var42.bind(var13)(var41, var43);
            var35['settingsSection'] = var41;
            var37 = var40[var37];
            var38 = var38.bind(var13)(var37);
            var37 = _closure1_slot6;
            var37 = var38.bind(var13)(var37, var39);
            var35['settingsSubsection'] = var37;
            var27['payload'] = var35;
            return var27;
case 191:
            var35 = _closure1_slot3;
            var27 = 2;
            var35 = var35.bind(var13)(var36, var27);
            var27 = var35[var9];
            var27 = 1;
            var37 = var35[var27];
            var35 = _closure1_slot30;
            var27 = global;
            var36 = var27.decodeURIComponent;
            var38 = var16 != var15;
            var27 = var1;
            if(!var38) { _fun0003_ip = 212; continue _fun0003 }
case 213:
            var27 = var15;
case 212:
            var27 = var36.bind(var13)(var27);
            var36 = var35.bind(var13)(var27);
            var27 = {};
            var27['fingerprint'] = var7;
            var27['attemptId'] = var4;
            var27['installationId'] = var2;
            var35 = {};
            var38 = _closure1_slot7;
            var38 = var38.USER_CONNECTIONS_CALLBACK;
            var35['type'] = var38;
            var35['provider'] = var37;
            var35['searchParams'] = var36;
            var27['payload'] = var35;
            return var27;
case 189:
            var35 = _closure1_slot30;
            var27 = global;
            var36 = var27.decodeURIComponent;
            var37 = var16 != var15;
            var27 = var1;
            if(!var37) { _fun0003_ip = 214; continue _fun0003 }
case 215:
            var27 = var15;
case 214:
            var27 = var36.bind(var13)(var27);
            var27 = var35.bind(var13)(var27);
            var36 = var27.code;
            var35 = var27.state;
            var27 = 1;
            var37 = var33[var27];
            var27 = {};
            var27['fingerprint'] = var7;
            var27['attemptId'] = var4;
            var27['installationId'] = var2;
            var33 = {};
            var38 = _closure1_slot7;
            var38 = var38.USER_CONNECTIONS_LINK_CALLBACK;
            var33['type'] = var38;
            var33['provider'] = var37;
            var33['callbackCode'] = var36;
            var33['callbackState'] = var35;
            var27['payload'] = var33;
            return var27;
case 187:
            var35 = _closure1_slot30;
            var27 = global;
            var33 = var27.decodeURIComponent;
            var33 = var33.bind(var13)(var15);
            var33 = var35.bind(var13)(var33);
            var37 = var33.key;
            var38 = var33.redirect;
            var39 = var33.fingerprint;
            if(!(var16 != var37)) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            if(!(var16 != var38)) { _fun0003_ip = 216; continue _fun0003 }
case 218:
            var36 = var27.URL;
            var33 = var27.location;
            var40 = var33.protocol;
            var33 = var27.window;
            var33 = var33.GLOBAL_ENV;
            var35 = var33.WEBAPP_ENDPOINT;
            var33 = var27.HermesInternal;
            var33 = var33.concat;
            var47 = var33.bind(var1)(var40, var35);
            var35 = var36.prototype;
            var35 = Object.create(var35, {constructor: {value: var36}});
            var49 = var35;
            var48 = var38;
            var33 = new var49[var36](var48, var47, var46);
            var36 = var33 instanceof Object ? var33 : var35;
            if(!(var16 != var39)) { _fun0003_ip = 219; continue _fun0003 }
case 220:
            var38 = var36.searchParams;
            var35 = var38.append;
            var33 = 'fingerprint';
            var33 = var35.bind(var38)(var33, var39);
case 219:
            var33 = {};
            var33['fingerprint'] = var39;
            var33['attemptId'] = var4;
            var33['installationId'] = var2;
            var35 = {};
            var38 = _closure1_slot7;
            var38 = var38.MOBILE_WEB_HANDOFF;
            var35['type'] = var38;
            var35['nonce'] = var37;
            var35['redirectUrl'] = var36;
            var35['fingerprint'] = var39;
            var33['payload'] = var35;
            return var33;
case 216:
            var35 = _closure1_slot1;
            var41 = _closure1_slot2;
            var33 = 20;
            var33 = var41[var33];
            var38 = var35.bind(var13)(var33);
            var37 = var38.track;
            var33 = _closure1_slot4;
            var36 = var33.MOBILE_WEB_HANDOFF_FAILURE;
            var35 = {};
            var33 = 'invalid_query_params';
            var35['reason'] = var33;
            var40 = _closure1_slot0;
            var33 = 21;
            var33 = var41[var33];
            var40 = var40.bind(var13)(var33);
            var33 = var40.maybeExtractId;
            var33 = var33.bind(var40)(var39);
            var35['fingerprint'] = var33;
            var33 = {};
            var33['fingerprint'] = var39;
            var33 = var37.bind(var38)(var36, var35, var33);
            var35 = var27.Error;
            var27 = var35.prototype;
            var33 = Object.create(var27, {constructor: {value: var35}});
            var48 = 'Missing nonce or redirect query params';
            var49 = var33;
            var27 = new var49[var35](var48, var47);
            var27 = var27 instanceof Object ? var27 : var33;
            throw var27;
case 185:
            var27 = {};
            var27['fingerprint'] = var7;
            var27['attemptId'] = var4;
            var27['installationId'] = var2;
            var33 = {};
            var35 = _closure1_slot7;
            var35 = var35.GUILD_EVENT_DETAILS;
            var33['type'] = var35;
            var35 = var34.guildEventId;
            var33['guildEventId'] = var35;
            var35 = var34.guildId;
            var33['guildId'] = var35;
            var34 = var34.recurrenceId;
            var33['recurrenceId'] = var34;
            var27['payload'] = var33;
            return var27;
case 184:
            var27 = {};
            var27['fingerprint'] = var7;
            var27['attemptId'] = var4;
            var27['installationId'] = var2;
            var27['payload'] = var30;
            return var27;
case 90:
            var27 = {};
            var27['fingerprint'] = var7;
            var27['attemptId'] = var4;
            var27['installationId'] = var2;
            var30 = {};
            var33 = _closure1_slot7;
            var33 = var33.GAME_UPDATE;
            var30['type'] = var33;
            var33 = 1;
            var33 = var32[var33];
            var30['gameId'] = var33;
            var31 = var32[var31];
            var30['gameUpdateId'] = var31;
            var27['payload'] = var30;
            return var27;
case 87:
            var27 = var17[var8];
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var17 = {};
            var30 = _closure1_slot7;
            var30 = var30.BOOST_MARKETING;
            var17['type'] = var30;
            var17['guildId'] = var27;
            var8['payload'] = var17;
            return var8;
case 83:
            var17 = _closure1_slot30;
            var27 = var16 != var15;
            var8 = var1;
            if(!var27) { _fun0003_ip = 221; continue _fun0003 }
case 222:
            var8 = var15;
case 221:
            var8 = var17.bind(var13)(var8);
            var30 = var8.token;
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var17 = {};
            var27 = _closure1_slot7;
            var27 = var27.ONE_TIME_LOGIN;
            var17['type'] = var27;
            var31 = var16 != var30;
            var27 = null;
            if(!var31) { _fun0003_ip = 223; continue _fun0003 }
case 224:
            var27 = var30;
case 223:
            var17['token'] = var27;
            var8['payload'] = var17;
            return var8;
case 82:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var17 = {};
            var27 = _closure1_slot7;
            var27 = var27.OAUTH2_AUTHORIZE;
            var17['type'] = var27;
            var27 = {};
            var48 = var27;
            var47 = var28;
            var28 = copyDataProperties(var48, var47);
            var28 = 'wasDeepLink';
            var27[27] = var29;
            var17['props'] = var27;
            var8['payload'] = var17;
            return var8;
case 77:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var17 = {};
            var27 = _closure1_slot7;
            var27 = var27.USER_PROFILE;
            var17['type'] = var27;
            var25 = var26[var25];
            var17['userId'] = var25;
            var8['payload'] = var17;
            return var8;
case 73:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var17 = {};
            var25 = _closure1_slot7;
            var25 = var25.SUBSCRIPTION_SETTINGS;
            var17['type'] = var25;
            var8['payload'] = var17;
            return var8;
case 71:
            var17 = _closure1_slot1;
            var25 = _closure1_slot2;
            var8 = 5;
            var8 = var25[var8];
            var25 = var17.bind(var13)(var8);
            var17 = var25.parse;
            var26 = var16 != var15;
            var8 = var1;
            if(!var26) { _fun0003_ip = 225; continue _fun0003 }
case 226:
            var8 = var15;
case 225:
            var8 = var17.bind(var25)(var8);
            var8 = var8.ad_creative_ids;
            if(!(var16 == var8)) { _fun0003_ip = 227; continue _fun0003 }
case 228:
            var8 = new Array(0);
case 227:
            var17 = new Array(1);
            var17[0] = var8;
            var8 = var17.flat;
            var26 = var8.bind(var17)();
            var8 = var26.length;
            if(!(!(var8 > var9))) { _fun0003_ip = 229; continue _fun0003 }
case 230:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var17 = {};
            var25 = _closure1_slot7;
            var25 = var25.QUESTS;
            var17['type'] = var25;
            var17['referrerId'] = var20;
            var17['sort'] = var19;
            var17['filter'] = var18;
            var8['payload'] = var17;
            _fun0003_ip = 231; continue _fun0003;
case 229:
            var17 = {};
            var17['fingerprint'] = var7;
            var17['attemptId'] = var4;
            var17['installationId'] = var2;
            var25 = {};
            var27 = _closure1_slot7;
            var27 = var27.QUEST_HOME_PREVIEW;
            var25['type'] = var27;
            var25['adCreativeIds'] = var26;
            var17['payload'] = var25;
            var8 = var17;
case 231:
            return var8;
case 70:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var17 = {};
            var25 = _closure1_slot7;
            var25 = var25.QUEST_PREVIEW_TOOL;
            var17['type'] = var25;
            var23 = var24[var23];
            var17['questId'] = var23;
            var8['payload'] = var17;
            return var8;
case 67:
            var8 = {};
            var8['fingerprint'] = var7;
            var8['attemptId'] = var4;
            var8['installationId'] = var2;
            var17 = {};
            var23 = _closure1_slot7;
            var23 = var23.QUESTS;
            var17['type'] = var23;
            var21 = var22[var21];
            var17['questId'] = var21;
            var17['referrerId'] = var20;
            var17['sort'] = var19;
            var17['filter'] = var18;
            var8['payload'] = var17;
            return var8;
case 63:
            var8 = _closure1_slot30;
            var17 = var16 != var15;
            if(!var17) { _fun0003_ip = 232; continue _fun0003 }
case 233:
            var1 = var15;
case 232:
            var1 = var8.bind(var13)(var1);
            var13 = var1.summaryId;
            var1 = {};
            var1['fingerprint'] = var7;
            var1['attemptId'] = var4;
            var1['installationId'] = var2;
            var8 = {};
            var15 = var14.messageId;
            if(!(var16 == var15)) { _fun0003_ip = 234; continue _fun0003 }
case 235:
            var15 = _closure1_slot7;
            var15 = var15.CHANNEL;
            _fun0003_ip = 236; continue _fun0003;
case 234:
            var16 = _closure1_slot7;
            var15 = var16.MESSAGE;
case 236:
            var8['type'] = var15;
            var15 = var14.guildId;
            var8['guildId'] = var15;
            var15 = var14.channelId;
            var8['channelId'] = var15;
            var14 = var14.messageId;
            var8['messageId'] = var14;
            var8['summaryId'] = var13;
            var1['payload'] = var8;
            return var1;
case 61:
            var1 = {};
            var1['fingerprint'] = var7;
            var1['attemptId'] = var4;
            var1['installationId'] = var2;
            var8 = {};
            var13 = _closure1_slot7;
            var13 = var13.ROLL_DICE;
            var8['type'] = var13;
            var13 = var12.guildId;
            var8['guildId'] = var13;
            var13 = var12.channelId;
            var8['channelId'] = var13;
            var13 = var12.diceCount;
            var8['diceCount'] = var13;
            var12 = var12.diceSides;
            var8['diceSides'] = var12;
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