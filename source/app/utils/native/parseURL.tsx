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
    var4 = var4.UPDATE_CONFIG;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ApplePaymentLinkDeepLinkActions;
    var _closure1_slot9 = var7;
    var4 = var4.ApplePaymentLinkDeepLinkQueryKeys;
    var _closure1_slot10 = var4;
    var4 = /feature\\/([\w-]+)/;
    var _closure1_slot11 = var4;
    var4 = /feature\\/boost\\/([0-9]+)/;
    var _closure1_slot12 = var4;
    var4 = /users\\/(\d+)/;
    var _closure1_slot13 = var4;
    var4 = /(?:connect|oauth2)\\/authorize/;
    var _closure1_slot14 = var4;
    var4 = /promos\.discord\.gg/;
    var _closure1_slot15 = var4;
    var4 = /mweb-handoff/;
    var _closure1_slot16 = var4;
    var4 = /connections\\/(xbox|playstation|playstation-stg|crunchyroll)\\/link/;
    var _closure1_slot17 = var4;
    var4 = /connections\\/([a-z-]+)/;
    var _closure1_slot18 = var4;
    var4 = /guilds\\/(\d+)\\/settings(?:\\/([a-z-]+)(?:\\/([a-z-]+))?)?/;
    var _closure1_slot19 = var4;
    var4 = /guilds\\/settings(?:\\/([a-z-]+)(?:\\/([a-z-]+))?)?/;
    var _closure1_slot20 = var4;
    var4 = /activate/;
    var _closure1_slot21 = var4;
    var4 = /quests\\/(\d+)/;
    var _closure1_slot22 = var4;
    var4 = function parseQuery(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
 3: // try_start_0
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 4;
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
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var4 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var3 = var2 === var7;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 27; continue _fun0002 }
 24:
                    var2 = var4;
 27:
                    var4 = undefined;
                    if(var3) { _fun0002_ip = 57; continue _fun0002 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var4 = undefined;
                    var3 = var5;
                    if(var5) { _fun0002_ip = 57; continue _fun0002 }
 51:
                    var4 = var6;
                    var3 = var5;
 57:
                    if(var3) { _fun0002_ip = 63; continue _fun0002 }
 60:
                    var1.return();
 63:
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = global;
                    var3 = var2.Array;
                    var2 = var3.isArray;
                    var3 = var2.bind(var3)(var4);
                    var2 = var4;
                    if(!var3) { _fun0002_ip = 101; continue _fun0002 }
 95:
                    var3 = 0;
                    var2 = var4[var3];
 101:
                    var1[1] = var2;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
 92: // try_end0
            return var1;
 94: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = {};
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/parseURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function parseURL(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var23 = arguments[1];
            var11 = undefined;
            if(!(var23 === var11)) { _fun0003_ip = 13; continue _fun0003 }
 11:
            var23 = false;
 13:
            var _closure2_slot0 = var11;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var4 = var2.bind(var11)(var1);
            var2 = var4.sanitizeUrl;
            var1 = arg1;
            var32 = var2.bind(var4)(var1);
            var14 = null;
            if(!(var14 != var32)) { _fun0003_ip = 4789; continue _fun0003 }
 63:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var2 = var2.bind(var11)(var1);
            var1 = var2.parse;
            var1 = var1.bind(var2)(var32);
            var18 = var1.protocol;
            var27 = var1.host;
            var15 = var1.hostname;
            var33 = var1.pathname;
            var13 = var1.query;
            var4 = _closure1_slot23;
            var5 = var14 != var13;
            var1 = '';
            var2 = var1;
            if(!var5) { _fun0003_ip = 144; continue _fun0003 }
 141:
            var2 = var13;
 144:
            var6 = var4.bind(var11)(var2);
            var2 = var6.fingerprint;
            var5 = var6.username;
            var4 = var6.attemptId;
            var10 = var6.custom_id;
            var16 = var6.referrer_id;
            var9 = var6.link_id;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 7;
            var6 = var8[var6];
            var7 = var7.bind(var11)(var6);
            var6 = var7.findCodedLink;
            var6 = var6.bind(var7)(var32);
            if(!(var14 != var6)) { _fun0003_ip = 984; continue _fun0003 }
 222:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var17 = 8;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.INVITE;
            if(!(var8 !== var7)) { _fun0003_ip = 4735; continue _fun0003 }
 266:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.TEMPLATE;
            if(!(var8 !== var7)) { _fun0003_ip = 4690; continue _fun0003 }
 307:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.BUILD_OVERRIDE;
            if(!(var8 !== var7)) { _fun0003_ip = 4645; continue _fun0003 }
 348:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.MANUAL_BUILD_OVERRIDE;
            if(!(var8 !== var7)) { _fun0003_ip = 4645; continue _fun0003 }
 389:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.EVENT;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 430:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.CHANNEL_LINK;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 471:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_PROFILE;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 512:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.ACTIVITY_BOOKMARK;
            if(!(var8 !== var7)) { _fun0003_ip = 920; continue _fun0003 }
 553:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.EMBEDDED_ACTIVITY_INVITE;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 594:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.GUILD_PRODUCT;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 635:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.SERVER_SHOP;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 676:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.QUESTS_EMBED;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 717:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_STOREFRONT;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 758:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 799:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_OAUTH2_LINK;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 840:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.COLLECTIBLES_SHOP;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 878:
            var7 = global;
            var8 = var7.Error;
            var17 = var6.type;
            var7 = var7.HermesInternal;
            var12 = var7.concat;
            var7 = 'Unknown coded link type: ';
            var7 = var12.bind(var7)(var17);
            var7 = var8.bind(var11)(var7);
            throw var7;
 920:
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
            var8['referrerId'] = var16;
            var8['linkId'] = var9;
            var8['isDeepLink'] = var23;
            var7['payload'] = var8;
            return var7;
 984:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 9;
            var7 = var9[var7];
            var7 = var8.bind(var11)(var7);
            var7 = var7.findGiftCodes;
            var9 = var7.bind(var11)(var32);
            var7 = var9.length;
            var8 = 0;
            if(!(!(var7 > var8))) { _fun0003_ip = 4601; continue _fun0003 }
 1029:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 10;
            var7 = var12[var7];
            var10 = var10.bind(var11)(var7);
            var7 = var10.findRemoteAuthFingerprint;
            var10 = var7.bind(var10)(var27, var33);
            if(!(var14 != var10)) { _fun0003_ip = 1077; continue _fun0003 }
 1065:
            var7 = var10.length;
            if(!(!(var7 > var8))) { _fun0003_ip = 4561; continue _fun0003 }
 1077:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var17 = 11;
            var7 = var7[var17];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordHostname;
            var7 = var7.bind(var12)(var27);
            if(var7) { _fun0003_ip = 1177; continue _fun0003 }
 1111:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordProtocol;
            var7 = var7.bind(var12)(var18);
            if(var7) { _fun0003_ip = 1177; continue _fun0003 }
 1142:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordLocalhost;
            var7 = var7.bind(var12)(var27, var15);
            if(!var7) { _fun0003_ip = 3083; continue _fun0003 }
 1177:
            if(!(var14 != var33)) { _fun0003_ip = 3083; continue _fun0003 }
 1184:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var26 = 12;
            var7 = var7[var26];
            var12 = var12.bind(var11)(var7);
            var7 = var12.tryParseChannelPath;
            var12 = var7.bind(var12)(var33);
            if(!(var14 == var12)) { _fun0003_ip = 4448; continue _fun0003 }
 1222:
            var15 = var33.match;
            var7 = _closure1_slot22;
            var18 = var15.bind(var33)(var7);
            if(!(var14 != var18)) { _fun0003_ip = 1256; continue _fun0003 }
 1241:
            var7 = var18.length;
            var17 = 1;
            if(!(!(var7 > var17))) { _fun0003_ip = 4399; continue _fun0003 }
 1256:
            var15 = var33.match;
            var7 = _closure1_slot13;
            var20 = var15.bind(var33)(var7);
            if(!(var14 != var20)) { _fun0003_ip = 1290; continue _fun0003 }
 1275:
            var7 = var20.length;
            var19 = 1;
            if(!(!(var7 > var19))) { _fun0003_ip = 4356; continue _fun0003 }
 1290:
            var15 = var33.match;
            var7 = _closure1_slot14;
            var7 = var15.bind(var33)(var7);
            if(!(var14 != var7)) { _fun0003_ip = 1360; continue _fun0003 }
 1309:
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var7 = 13;
            var7 = var22[var7];
            var22 = var15.bind(var11)(var7);
            var15 = var22.parseOAuth2AuthorizeProps;
            var24 = var14 != var13;
            var7 = var1;
            if(!var24) { _fun0003_ip = 1348; continue _fun0003 }
 1345:
            var7 = var13;
 1348:
            var22 = var15.bind(var22)(var7);
            if(!(var14 == var22)) { _fun0003_ip = 4296; continue _fun0003 }
 1360:
            var15 = var33.match;
            var7 = _closure1_slot12;
            var15 = var15.bind(var33)(var7);
            if(!(var14 != var15)) { _fun0003_ip = 1394; continue _fun0003 }
 1379:
            var24 = var15.length;
            var7 = 1;
            if(!(!(var24 > var7))) { _fun0003_ip = 4253; continue _fun0003 }
 1394:
            var25 = var33.match;
            var24 = _closure1_slot11;
            var25 = var25.bind(var33)(var24);
            if(!(var14 != var25)) { _fun0003_ip = 2916; continue _fun0003 }
 1416:
            var28 = var25.length;
            var24 = 1;
            if(!(var28 > var24)) { _fun0003_ip = 2916; continue _fun0003 }
 1431:
            var28 = var25[var24];
            var24 = 'composeMessage';
            if(!(var24 !== var28)) { _fun0003_ip = 2890; continue _fun0003 }
 1448:
            var24 = 'contactSync';
            if(!(var24 !== var28)) { _fun0003_ip = 2869; continue _fun0003 }
 1461:
            var24 = 'addFriends';
            if(!(var24 !== var28)) { _fun0003_ip = 2848; continue _fun0003 }
 1474:
            var24 = 'friends';
            if(!(var24 !== var28)) { _fun0003_ip = 2795; continue _fun0003 }
 1485:
            var24 = 'editProfile';
            if(!(var24 !== var28)) { _fun0003_ip = 2774; continue _fun0003 }
 1498:
            var24 = 'voiceChannel';
            if(!(var24 !== var28)) { _fun0003_ip = 2680; continue _fun0003 }
 1509:
            var24 = 'sessionManagement';
            if(!(var24 !== var28)) { _fun0003_ip = 2656; continue _fun0003 }
 1522:
            var24 = 'home';
            if(!(var24 !== var28)) { _fun0003_ip = 2579; continue _fun0003 }
 1533:
            var24 = 'icymi';
            if(!(var24 !== var28)) { _fun0003_ip = 2555; continue _fun0003 }
 1544:
            var24 = 'connections';
            if(!(var24 !== var28)) { _fun0003_ip = 2500; continue _fun0003 }
 1555:
            var24 = 'family-center';
            if(!(var24 !== var28)) { _fun0003_ip = 2471; continue _fun0003 }
 1568:
            var24 = 'promo-url';
            if(!(var24 !== var28)) { _fun0003_ip = 2403; continue _fun0003 }
 1581:
            var24 = 'account-standing';
            if(!(var24 !== var28)) { _fun0003_ip = 2374; continue _fun0003 }
 1594:
            var24 = 'apple-payment-link';
            if(!(var24 !== var28)) { _fun0003_ip = 2213; continue _fun0003 }
 1607:
            var24 = 'open-shop';
            if(!(var24 !== var28)) { _fun0003_ip = 2189; continue _fun0003 }
 1620:
            var24 = 'authorized-apps';
            if(!(var24 !== var28)) { _fun0003_ip = 2165; continue _fun0003 }
 1633:
            var24 = 'share';
            if(!(var24 !== var28)) { _fun0003_ip = 1938; continue _fun0003 }
 1644:
            var24 = 'dave-protocol-verification';
            if(!(var24 !== var28)) { _fun0003_ip = 1794; continue _fun0003 }
 1657:
            var24 = 'gift';
            if(!(var24 !== var28)) { _fun0003_ip = 1770; continue _fun0003 }
 1665:
            var24 = 'store';
            if(!(var24 !== var28)) { _fun0003_ip = 1746; continue _fun0003 }
 1673:
            var24 = 'connected-games';
            if(!(var24 !== var28)) { _fun0003_ip = 1722; continue _fun0003 }
 1683:
            var25 = 'boost-settings';
            var24 = null;
            if(!(var25 === var28)) { _fun0003_ip = 2909; continue _fun0003 }
 1698:
            var25 = {};
            var28 = _closure1_slot7;
            var28 = var28.BOOST_SETTINGS;
            var25['type'] = var28;
            var24 = var25;
            _fun0003_ip = 2909; continue _fun0003;
 1722:
            var25 = {};
            var28 = _closure1_slot7;
            var28 = var28.CONNECTED_GAMES;
            var25['type'] = var28;
            var24 = var25;
            _fun0003_ip = 2909; continue _fun0003;
 1746:
            var25 = {};
            var28 = _closure1_slot7;
            var28 = var28.NITRO_HOME;
            var25['type'] = var28;
            var24 = var25;
            _fun0003_ip = 2909; continue _fun0003;
 1770:
            var25 = {};
            var28 = _closure1_slot7;
            var28 = var28.GIFT;
            var25['type'] = var28;
            var24 = var25;
            _fun0003_ip = 2909; continue _fun0003;
 1794:
            var28 = _closure1_slot23;
            var29 = var14 != var13;
            var25 = var1;
            if(!var29) { _fun0003_ip = 1811; continue _fun0003 }
 1808:
            var25 = var13;
 1811:
            var25 = var28.bind(var11)(var25);
            var29 = var25.userId;
            var28 = var25.fingerprint;
            var25 = var14 != var29;
            var24 = null;
            if(!var25) { _fun0003_ip = 2909; continue _fun0003 }
 1839:
            var25 = var14 != var28;
            var24 = null;
            if(!var25) { _fun0003_ip = 2909; continue _fun0003 }
 1851:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var25 = 16;
            var25 = var31[var25];
            var31 = var30.bind(var11)(var25);
            var30 = var31.getSecureFramesDeeplinkExperiment;
            var25 = {};
            var34 = 'parseUrl';
            var25['location'] = var34;
            var25 = var30.bind(var31)(var25);
            var25 = var25.enabled;
            var24 = null;
            if(!var25) { _fun0003_ip = 2909; continue _fun0003 }
 1905:
            var25 = {};
            var30 = _closure1_slot7;
            var30 = var30.DAVE_PROTOCOL_VERIFICATION;
            var25['type'] = var30;
            var25['userId'] = var29;
            var25['fingerprint'] = var28;
            var24 = var25;
            _fun0003_ip = 2909; continue _fun0003;
 1938:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var25 = 15;
            var25 = var29[var25];
            var28 = var28.bind(var11)(var25);
            var25 = var28.isIOS;
            var25 = var25.bind(var28)();
            var24 = null;
            if(!var25) { _fun0003_ip = 2909; continue _fun0003 }
 1976:
            var28 = _closure1_slot23;
            var29 = var14 != var13;
            var25 = var1;
            if(!var29) { _fun0003_ip = 1993; continue _fun0003 }
 1990:
            var25 = var13;
 1993:
            var28 = var28.bind(var11)(var25);
            var30 = var28.text;
            var29 = var28.channelId;
            var25 = var28.shareId;
            var35 = var28.attachmentManifest;
            var34 = function isValidUUID(arg1) {
                var3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                var2 = var3.test;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            _closure2_slot0 = var34;
            var31 = 'string';
            var36 = typeof var25;
            var28 = undefined;
            if(!(var31 === var36)) { _fun0003_ip = 2055; continue _fun0003 }
 2042:
            var34 = var34.bind(var11)(var25);
            var28 = undefined;
            if(!var34) { _fun0003_ip = 2055; continue _fun0003 }
 2052:
            var28 = var25;
 2055:
            var25 = typeof var35;
            if(!(var31 !== var25)) { _fun0003_ip = 2066; continue _fun0003 }
 2062:
            var34 = {};
            _fun0003_ip = 2085; continue _fun0003;
 2066:
            var25 = global;
            var31 = var25.JSON;
            var25 = var31.parse;
            var34 = var25.bind(var31)(var35);
 2085:
            var25 = global;
            var31 = var25.Object;
            var25 = var31.entries;
            var34 = var25.bind(var31)(var34);
            var31 = var34.reduce;
            var25 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var7 = arg2;
                    var4 = var7[Symbol.iterator];
                    var7 = var4().next;
                    var2 = var7().value;
                    var3 = var4;
                    var5 = undefined;
                    var6 = var3 === var5;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 30; continue _fun0004 }
 27:
                    var3 = var2;
 30:
                    var2 = undefined;
                    if(var6) { _fun0004_ip = 60; continue _fun0004 }
 35:
                    var8 = var7().value;
                    var7 = var4;
                    var7 = var7 === var5;
                    var2 = undefined;
                    var6 = var7;
                    if(var7) { _fun0004_ip = 60; continue _fun0004 }
 54:
                    var2 = var8;
                    var6 = var7;
 60:
                    if(var6) { _fun0004_ip = 66; continue _fun0004 }
 63:
                    var4.return();
 66:
                    var4 = _closure2_slot0;
                    var4 = var4.bind(var5)(var3);
                    if(!var4) { _fun0004_ip = 92; continue _fun0004 }
 81:
                    var6 = 'string';
                    var5 = typeof var2;
                    var4 = var6 === var5;
 92:
                    if(!var4) { _fun0004_ip = 99; continue _fun0004 }
 95:
                    var1[var3] = var2;
 99:
                    return var1;
                }
            };
            var21 = {};
            var25 = var31.bind(var34)(var25, var21);
            var21 = {};
            var31 = _closure1_slot7;
            var31 = var31.SHARE;
            var21['type'] = var31;
            var21['text'] = var30;
            var21['channelId'] = var29;
            var21['shareId'] = var28;
            var21['attachmentManifest'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2165:
            var21 = {};
            var25 = _closure1_slot7;
            var25 = var25.AUTHORIZED_APPS;
            var21['type'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2189:
            var21 = {};
            var25 = _closure1_slot7;
            var25 = var25.SHOP;
            var21['type'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2213:
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 14;
            var21 = var28[var21];
            var28 = var25.bind(var11)(var21);
            var25 = var28.isMobileApplePaymentLinksEnabled;
            var21 = {};
            var29 = 'parseUrl';
            var21['location'] = var29;
            var21 = var25.bind(var28)(var21);
            var28 = _closure1_slot23;
            var29 = var14 != var13;
            var25 = var1;
            if(!var29) { _fun0003_ip = 2271; continue _fun0003 }
 2268:
            var25 = var13;
 2271:
            var28 = var28.bind(var11)(var25);
            var25 = _closure1_slot10;
            var25 = var25.DEEP_LINK_ACTION;
            var25 = var28[var25];
            if(!var21) { _fun0003_ip = 2323; continue _fun0003 }
 2293:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var28 = 15;
            var28 = var30[var28];
            var29 = var29.bind(var11)(var28);
            var28 = var29.isIOS;
            var21 = var28.bind(var29)();
 2323:
            var24 = null;
            if(!var21) { _fun0003_ip = 2909; continue _fun0003 }
 2331:
            var21 = {};
            var28 = _closure1_slot7;
            var28 = var28.APPLE_PAYMENT_LINK;
            var21['type'] = var28;
            if(!(var14 == var25)) { _fun0003_ip = 2361; continue _fun0003 }
 2351:
            var28 = _closure1_slot9;
            var25 = var28.DEFAULT;
 2361:
            var21['deepLinkAction'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2374:
            var21 = {};
            var25 = _closure1_slot7;
            var25 = var25.ACCOUNT_STANDING;
            var21['type'] = var25;
            var21['pathname'] = var33;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2403:
            var25 = _closure1_slot23;
            var28 = var14 != var13;
            var21 = var1;
            if(!var28) { _fun0003_ip = 2420; continue _fun0003 }
 2417:
            var21 = var13;
 2420:
            var21 = var25.bind(var11)(var21);
            var25 = var21.promo_url;
            var24 = null;
            if(!(var11 !== var25)) { _fun0003_ip = 2909; continue _fun0003 }
 2442:
            var21 = {};
            var28 = _closure1_slot7;
            var28 = var28.FEATURE_PROMO_URL;
            var21['type'] = var28;
            var21['promoUrl'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2471:
            var21 = {};
            var25 = _closure1_slot7;
            var25 = var25.FAMILY_CENTER;
            var21['type'] = var25;
            var21['pathname'] = var33;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2500:
            var25 = _closure1_slot23;
            var28 = var14 != var13;
            var21 = var1;
            if(!var28) { _fun0003_ip = 2517; continue _fun0003 }
 2514:
            var21 = var13;
 2517:
            var21 = var25.bind(var11)(var21);
            var25 = var21.source;
            var21 = {};
            var28 = _closure1_slot7;
            var28 = var28.CONNECTIONS;
            var21['type'] = var28;
            var21['source'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2555:
            var21 = {};
            var25 = _closure1_slot7;
            var25 = var25.ICYMI;
            var21['type'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2579:
            var25 = _closure1_slot23;
            var28 = var14 != var13;
            var21 = var1;
            if(!var28) { _fun0003_ip = 2596; continue _fun0003 }
 2593:
            var21 = var13;
 2596:
            var21 = var25.bind(var11)(var21);
            var29 = var21.guild_id;
            var28 = var21.highlight_channel_id;
            var25 = var21.highlight_message_id;
            var21 = {};
            var30 = _closure1_slot7;
            var30 = var30.GUILD_HOME;
            var21['type'] = var30;
            var21['guildId'] = var29;
            var21['highlightChannelId'] = var28;
            var21['highlightMessageId'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2656:
            var21 = {};
            var25 = _closure1_slot7;
            var25 = var25.SESSION_MANAGEMENT;
            var21['type'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2680:
            var25 = _closure1_slot23;
            var28 = var14 != var13;
            var21 = var1;
            if(!var28) { _fun0003_ip = 2697; continue _fun0003 }
 2694:
            var21 = var13;
 2697:
            var21 = var25.bind(var11)(var21);
            var31 = var21.guild_id;
            var30 = var21.channel_id;
            var29 = var21.user_id;
            var28 = var21.via;
            var25 = var21.action;
            var21 = {};
            var34 = _closure1_slot7;
            var34 = var34.VOICE_CHANNEL;
            var21['type'] = var34;
            var21['guildId'] = var31;
            var21['channelId'] = var30;
            var21['userId'] = var29;
            var21['via'] = var28;
            var21['action'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2774:
            var21 = {};
            var25 = _closure1_slot7;
            var25 = var25.EDIT_PROFILE;
            var21['type'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2795:
            var25 = _closure1_slot23;
            var28 = var14 != var13;
            var21 = var1;
            if(!var28) { _fun0003_ip = 2812; continue _fun0003 }
 2809:
            var21 = var13;
 2812:
            var21 = var25.bind(var11)(var21);
            var25 = var21.user_id;
            var21 = {};
            var28 = _closure1_slot7;
            var28 = var28.FRIENDS;
            var21['type'] = var28;
            var21['userId'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2848:
            var21 = {};
            var25 = _closure1_slot7;
            var25 = var25.ADD_FRIENDS;
            var21['type'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2869:
            var21 = {};
            var25 = _closure1_slot7;
            var25 = var25.CONTACT_SYNC;
            var21['type'] = var25;
            var24 = var21;
            _fun0003_ip = 2909; continue _fun0003;
 2890:
            var21 = {};
            var25 = _closure1_slot7;
            var25 = var25.COMPOSE_MESSAGE;
            var21['type'] = var25;
            var24 = var21;
 2909:
            if(!(var14 == var24)) { _fun0003_ip = 4234; continue _fun0003 }
 2916:
            var25 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var26];
            var25 = var25.bind(var11)(var21);
            var21 = var25.tryParseEventDetailsPath;
            var26 = var21.bind(var25)(var33);
            if(!(var14 == var26)) { _fun0003_ip = 4168; continue _fun0003 }
 2951:
            var25 = var33.match;
            var21 = _closure1_slot16;
            var21 = var25.bind(var33)(var21);
            if(!(var14 == var21)) { _fun0003_ip = 3835; continue _fun0003 }
 2973:
            var25 = var33.match;
            var21 = _closure1_slot17;
            var25 = var25.bind(var33)(var21);
            if(!(var14 == var25)) { _fun0003_ip = 3733; continue _fun0003 }
 2995:
            var28 = var33.match;
            var21 = _closure1_slot18;
            var28 = var28.bind(var33)(var21);
            if(!(var14 == var28)) { _fun0003_ip = 3629; continue _fun0003 }
 3017:
            var29 = var33.match;
            var21 = _closure1_slot19;
            var29 = var29.bind(var33)(var21);
            if(!(var14 == var29)) { _fun0003_ip = 3497; continue _fun0003 }
 3039:
            var30 = var33.match;
            var21 = _closure1_slot20;
            var30 = var30.bind(var33)(var21);
            if(!(var14 == var30)) { _fun0003_ip = 3343; continue _fun0003 }
 3061:
            var31 = var33.match;
            var21 = _closure1_slot21;
            var21 = var31.bind(var33)(var21);
            if(!(var14 == var21)) { _fun0003_ip = 3262; continue _fun0003 }
 3083:
            var31 = var14 == var27;
            var21 = undefined;
            if(var31) { _fun0003_ip = 3107; continue _fun0003 }
 3092:
            var33 = var27.match;
            var31 = _closure1_slot15;
            var21 = var33.bind(var27)(var31);
 3107:
            if(!(var14 == var21)) { _fun0003_ip = 3220; continue _fun0003 }
 3111:
            var21 = _closure1_slot8;
            var31 = var14 == var21;
            var21 = undefined;
            if(var31) { _fun0003_ip = 3139; continue _fun0003 }
 3124:
            var31 = _closure1_slot8;
            var31 = var31.url;
            var21 = var31.host;
 3139:
            if(!(var27 !== var21)) { _fun0003_ip = 3178; continue _fun0003 }
 3143:
            var21 = {};
            var21['fingerprint'] = var2;
            var21['attemptId'] = var4;
            var27 = {};
            var31 = _closure1_slot7;
            var31 = var31.NONE;
            var27['type'] = var31;
            var21['payload'] = var27;
            _fun0003_ip = 3218; continue _fun0003;
 3178:
            var27 = {};
            var27['fingerprint'] = var2;
            var27['attemptId'] = var4;
            var31 = {};
            var33 = _closure1_slot7;
            var33 = var33.MOBILE_NATIVE_UPDATE;
            var31['type'] = var33;
            var31['url'] = var32;
            var27['payload'] = var31;
            var21 = var27;
 3218:
            _fun0003_ip = 3260; continue _fun0003;
 3220:
            var27 = {};
            var27['fingerprint'] = var2;
            var27['attemptId'] = var4;
            var31 = {};
            var33 = _closure1_slot7;
            var33 = var33.PROMOTIONS;
            var31['type'] = var33;
            var31['url'] = var32;
            var27['payload'] = var31;
            var21 = var27;
 3260:
            return var21;
 3262:
            var27 = _closure1_slot23;
            var21 = global;
            var31 = var21.decodeURIComponent;
            var32 = var14 != var13;
            var21 = var1;
            if(!var32) { _fun0003_ip = 3287; continue _fun0003 }
 3284:
            var21 = var13;
 3287:
            var21 = var31.bind(var11)(var21);
            var21 = var27.bind(var11)(var21);
            var31 = var21.user_code;
            var21 = {};
            var21['fingerprint'] = var2;
            var21['attemptId'] = var4;
            var27 = {};
            var32 = _closure1_slot7;
            var32 = var32.ACTIVATE_DEVICE;
            var27['type'] = var32;
            var27['userCode'] = var31;
            var21['payload'] = var27;
            return var21;
 3343:
            var27 = _closure1_slot3;
            var21 = 3;
            var27 = var27.bind(var11)(var30, var21);
            var21 = 1;
            var37 = var27[var21];
            var21 = 2;
            var33 = var27[var21];
            var27 = _closure1_slot23;
            var30 = var14 != var13;
            var21 = var1;
            if(!var30) { _fun0003_ip = 3387; continue _fun0003 }
 3384:
            var21 = var13;
 3387:
            var21 = var27.bind(var11)(var21);
            var30 = var21.feature;
            var21 = {};
            var21['fingerprint'] = var2;
            var21['attemptId'] = var4;
            var27 = {};
            var31 = _closure1_slot7;
            var31 = var31.GUILD_SETTINGS_PICKER;
            var27['type'] = var31;
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var31 = 19;
            var35 = var34[var31];
            var36 = var32.bind(var11)(var35);
            var35 = _closure1_slot5;
            var35 = var36.bind(var11)(var35, var37);
            var27['settingsSection'] = var35;
            var31 = var34[var31];
            var32 = var32.bind(var11)(var31);
            var31 = _closure1_slot6;
            var31 = var32.bind(var11)(var31, var33);
            var27['settingsSubsection'] = var31;
            var27['feature'] = var30;
            var21['payload'] = var27;
            return var21;
 3497:
            var27 = _closure1_slot3;
            var21 = 4;
            var27 = var27.bind(var11)(var29, var21);
            var21 = 1;
            var29 = var27[var21];
            var21 = 2;
            var35 = var27[var21];
            var21 = 3;
            var31 = var27[var21];
            var21 = {};
            var21['fingerprint'] = var2;
            var21['attemptId'] = var4;
            var27 = {};
            var30 = _closure1_slot7;
            var30 = var30.GUILD_SETTINGS;
            var27['type'] = var30;
            var27['guildId'] = var29;
            var30 = _closure1_slot1;
            var32 = _closure1_slot2;
            var29 = 19;
            var33 = var32[var29];
            var34 = var30.bind(var11)(var33);
            var33 = _closure1_slot5;
            var33 = var34.bind(var11)(var33, var35);
            var27['settingsSection'] = var33;
            var29 = var32[var29];
            var30 = var30.bind(var11)(var29);
            var29 = _closure1_slot6;
            var29 = var30.bind(var11)(var29, var31);
            var27['settingsSubsection'] = var29;
            var21['payload'] = var27;
            return var21;
 3629:
            var27 = _closure1_slot3;
            var21 = 2;
            var27 = var27.bind(var11)(var28, var21);
            var21 = var27[var8];
            var21 = 1;
            var29 = var27[var21];
            var27 = _closure1_slot23;
            var21 = global;
            var28 = var21.decodeURIComponent;
            var30 = var14 != var13;
            var21 = var1;
            if(!var30) { _fun0003_ip = 3678; continue _fun0003 }
 3675:
            var21 = var13;
 3678:
            var21 = var28.bind(var11)(var21);
            var28 = var27.bind(var11)(var21);
            var21 = {};
            var21['fingerprint'] = var2;
            var21['attemptId'] = var4;
            var27 = {};
            var30 = _closure1_slot7;
            var30 = var30.USER_CONNECTIONS_CALLBACK;
            var27['type'] = var30;
            var27['provider'] = var29;
            var27['searchParams'] = var28;
            var21['payload'] = var27;
            return var21;
 3733:
            var27 = _closure1_slot23;
            var21 = global;
            var28 = var21.decodeURIComponent;
            var29 = var14 != var13;
            var21 = var1;
            if(!var29) { _fun0003_ip = 3758; continue _fun0003 }
 3755:
            var21 = var13;
 3758:
            var21 = var28.bind(var11)(var21);
            var21 = var27.bind(var11)(var21);
            var28 = var21.code;
            var27 = var21.state;
            var21 = 1;
            var29 = var25[var21];
            var21 = {};
            var21['fingerprint'] = var2;
            var21['attemptId'] = var4;
            var25 = {};
            var30 = _closure1_slot7;
            var30 = var30.USER_CONNECTIONS_LINK_CALLBACK;
            var25['type'] = var30;
            var25['provider'] = var29;
            var25['callbackCode'] = var28;
            var25['callbackState'] = var27;
            var21['payload'] = var25;
            return var21;
 3835:
            var27 = _closure1_slot23;
            var21 = global;
            var25 = var21.decodeURIComponent;
            var25 = var25.bind(var11)(var13);
            var25 = var27.bind(var11)(var25);
            var29 = var25.key;
            var30 = var25.redirect;
            var31 = var25.fingerprint;
            if(!(var14 != var29)) { _fun0003_ip = 4040; continue _fun0003 }
 3881:
            if(!(var14 != var30)) { _fun0003_ip = 4040; continue _fun0003 }
 3888:
            var28 = var21.URL;
            var25 = var21.location;
            var32 = var25.protocol;
            var25 = var21.window;
            var25 = var25.GLOBAL_ENV;
            var27 = var25.WEBAPP_ENDPOINT;
            var25 = var21.HermesInternal;
            var25 = var25.concat;
            var39 = var25.bind(var1)(var32, var27);
            var27 = var28.prototype;
            var27 = Object.create(var27, {constructor: {value: var28}});
            var41 = var27;
            var40 = var30;
            var25 = new var41[var28](var40, var39, var38);
            var28 = var25 instanceof Object ? var25 : var27;
            if(!(var14 != var31)) { _fun0003_ip = 3990; continue _fun0003 }
 3968:
            var30 = var28.searchParams;
            var27 = var30.append;
            var25 = 'fingerprint';
            var25 = var27.bind(var30)(var25, var31);
 3990:
            var25 = {};
            var25['fingerprint'] = var31;
            var25['attemptId'] = var4;
            var27 = {};
            var30 = _closure1_slot7;
            var30 = var30.MOBILE_WEB_HANDOFF;
            var27['type'] = var30;
            var27['nonce'] = var29;
            var27['redirectUrl'] = var28;
            var27['fingerprint'] = var31;
            var25['payload'] = var27;
            return var25;
 4040:
            var27 = _closure1_slot1;
            var33 = _closure1_slot2;
            var25 = 17;
            var25 = var33[var25];
            var30 = var27.bind(var11)(var25);
            var29 = var30.track;
            var25 = _closure1_slot4;
            var28 = var25.MOBILE_WEB_HANDOFF_FAILURE;
            var27 = {};
            var25 = 'invalid_query_params';
            var27['reason'] = var25;
            var32 = _closure1_slot0;
            var25 = 18;
            var25 = var33[var25];
            var32 = var32.bind(var11)(var25);
            var25 = var32.maybeExtractId;
            var25 = var25.bind(var32)(var31);
            var27['fingerprint'] = var25;
            var25 = {};
            var25['fingerprint'] = var31;
            var25 = var29.bind(var30)(var28, var27, var25);
            var27 = var21.Error;
            var21 = var27.prototype;
            var25 = Object.create(var21, {constructor: {value: var27}});
            var40 = 'Missing nonce or redirect query params';
            var41 = var25;
            var21 = new var41[var27](var40, var39);
            var21 = var21 instanceof Object ? var21 : var25;
            throw var21;
 4168:
            var21 = {};
            var21['fingerprint'] = var2;
            var21['attemptId'] = var4;
            var25 = {};
            var27 = _closure1_slot7;
            var27 = var27.GUILD_EVENT_DETAILS;
            var25['type'] = var27;
            var27 = var26.guildEventId;
            var25['guildEventId'] = var27;
            var27 = var26.guildId;
            var25['guildId'] = var27;
            var26 = var26.recurrenceId;
            var25['recurrenceId'] = var26;
            var21['payload'] = var25;
            return var21;
 4234:
            var21 = {};
            var21['fingerprint'] = var2;
            var21['attemptId'] = var4;
            var21['payload'] = var24;
            return var21;
 4253:
            var21 = var15[var7];
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var24 = _closure1_slot7;
            var24 = var24.BOOST_MARKETING;
            var15['type'] = var24;
            var15['guildId'] = var21;
            var7['payload'] = var15;
            return var7;
 4296:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var21 = _closure1_slot7;
            var21 = var21.OAUTH2_AUTHORIZE;
            var15['type'] = var21;
            var21 = {};
            var40 = var21;
            var39 = var22;
            var22 = copyDataProperties(var40, var39);
            var22 = 'wasDeepLink';
            var21[var22] = var23;
            var15['props'] = var21;
            var7['payload'] = var15;
            return var7;
 4356:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var21 = _closure1_slot7;
            var21 = var21.USER_PROFILE;
            var15['type'] = var21;
            var19 = var20[var19];
            var15['userId'] = var19;
            var7['payload'] = var15;
            return var7;
 4399:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var19 = _closure1_slot7;
            var19 = var19.QUESTS;
            var15['type'] = var19;
            var17 = var18[var17];
            var15['questId'] = var17;
            var15['referrerId'] = var16;
            var7['payload'] = var15;
            return var7;
 4448:
            var7 = _closure1_slot23;
            var15 = var14 != var13;
            if(!var15) { _fun0003_ip = 4462; continue _fun0003 }
 4459:
            var1 = var13;
 4462:
            var1 = var7.bind(var11)(var1);
            var11 = var1.summaryId;
            var1 = {};
            var1['fingerprint'] = var2;
            var1['attemptId'] = var4;
            var7 = {};
            var13 = var12.messageId;
            if(!(var14 == var13)) { _fun0003_ip = 4508; continue _fun0003 }
 4496:
            var13 = _closure1_slot7;
            var13 = var13.CHANNEL;
            _fun0003_ip = 4518; continue _fun0003;
 4508:
            var14 = _closure1_slot7;
            var13 = var14.MESSAGE;
 4518:
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
 4561:
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
 4601:
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
 4645:
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
 4690:
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
 4735:
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
 4789:
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