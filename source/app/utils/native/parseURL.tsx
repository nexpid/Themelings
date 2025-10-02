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
    var4 = /quest-preview\\/(\d+)/;
    var _closure1_slot23 = var4;
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
    var _closure1_slot24 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/parseURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function parseURL(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var25 = arguments[1];
            var11 = undefined;
            if(!(var25 === var11)) { _fun0003_ip = 13; continue _fun0003 }
 11:
            var25 = false;
 13:
            var _closure2_slot0 = var11;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var4 = var2.bind(var11)(var1);
            var2 = var4.sanitizeUrl;
            var1 = arg1;
            var34 = var2.bind(var4)(var1);
            var14 = null;
            if(!(var14 != var34)) { _fun0003_ip = 4950; continue _fun0003 }
 63:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var2 = var2.bind(var11)(var1);
            var1 = var2.parse;
            var1 = var1.bind(var2)(var34);
            var18 = var1.protocol;
            var29 = var1.host;
            var15 = var1.hostname;
            var35 = var1.pathname;
            var13 = var1.query;
            var4 = _closure1_slot24;
            var5 = var14 != var13;
            var1 = '';
            var2 = var1;
            if(!var5) { _fun0003_ip = 145; continue _fun0003 }
 142:
            var2 = var13;
 145:
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
            var6 = var6.bind(var7)(var34);
            if(!(var14 != var6)) { _fun0003_ip = 985; continue _fun0003 }
 223:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var17 = 8;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.INVITE;
            if(!(var8 !== var7)) { _fun0003_ip = 4896; continue _fun0003 }
 267:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.TEMPLATE;
            if(!(var8 !== var7)) { _fun0003_ip = 4851; continue _fun0003 }
 308:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.BUILD_OVERRIDE;
            if(!(var8 !== var7)) { _fun0003_ip = 4806; continue _fun0003 }
 349:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.MANUAL_BUILD_OVERRIDE;
            if(!(var8 !== var7)) { _fun0003_ip = 4806; continue _fun0003 }
 390:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.EVENT;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 431:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.CHANNEL_LINK;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 472:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_PROFILE;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 513:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.ACTIVITY_BOOKMARK;
            if(!(var8 !== var7)) { _fun0003_ip = 921; continue _fun0003 }
 554:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.EMBEDDED_ACTIVITY_INVITE;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 595:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.GUILD_PRODUCT;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 636:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.SERVER_SHOP;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 677:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.QUESTS_EMBED;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 718:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_STOREFRONT;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 759:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 800:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_OAUTH2_LINK;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 841:
            var8 = var6.type;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var7 = var12.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.COLLECTIBLES_SHOP;
            if(!(var8 !== var7)) { _fun0003_ip = 985; continue _fun0003 }
 879:
            var7 = global;
            var8 = var7.Error;
            var17 = var6.type;
            var7 = var7.HermesInternal;
            var12 = var7.concat;
            var7 = 'Unknown coded link type: ';
            var7 = var12.bind(var7)(var17);
            var7 = var8.bind(var11)(var7);
            throw var7;
 921:
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
            var8['isDeepLink'] = var25;
            var7['payload'] = var8;
            return var7;
 985:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 9;
            var7 = var9[var7];
            var7 = var8.bind(var11)(var7);
            var7 = var7.findGiftCodes;
            var9 = var7.bind(var11)(var34);
            var7 = var9.length;
            var8 = 0;
            if(!(!(var7 > var8))) { _fun0003_ip = 4762; continue _fun0003 }
 1030:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 10;
            var7 = var12[var7];
            var10 = var10.bind(var11)(var7);
            var7 = var10.findRemoteAuthFingerprint;
            var10 = var7.bind(var10)(var29, var35);
            if(!(var14 != var10)) { _fun0003_ip = 1078; continue _fun0003 }
 1066:
            var7 = var10.length;
            if(!(!(var7 > var8))) { _fun0003_ip = 4722; continue _fun0003 }
 1078:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var17 = 11;
            var7 = var7[var17];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordHostname;
            var7 = var7.bind(var12)(var29);
            if(var7) { _fun0003_ip = 1178; continue _fun0003 }
 1112:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordProtocol;
            var7 = var7.bind(var12)(var18);
            if(var7) { _fun0003_ip = 1178; continue _fun0003 }
 1143:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var17];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordLocalhost;
            var7 = var7.bind(var12)(var29, var15);
            if(!var7) { _fun0003_ip = 3200; continue _fun0003 }
 1178:
            if(!(var14 != var35)) { _fun0003_ip = 3200; continue _fun0003 }
 1185:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var28 = 12;
            var7 = var7[var28];
            var12 = var12.bind(var11)(var7);
            var7 = var12.tryParseChannelPath;
            var12 = var7.bind(var12)(var35);
            if(!(var14 == var12)) { _fun0003_ip = 4609; continue _fun0003 }
 1223:
            var15 = var35.match;
            var7 = _closure1_slot22;
            var18 = var15.bind(var35)(var7);
            if(!(var14 != var18)) { _fun0003_ip = 1257; continue _fun0003 }
 1242:
            var7 = var18.length;
            var17 = 1;
            if(!(!(var7 > var17))) { _fun0003_ip = 4560; continue _fun0003 }
 1257:
            var15 = var35.match;
            var7 = _closure1_slot23;
            var20 = var15.bind(var35)(var7);
            if(!(var14 != var20)) { _fun0003_ip = 1291; continue _fun0003 }
 1276:
            var7 = var20.length;
            var19 = 1;
            if(!(!(var7 > var19))) { _fun0003_ip = 4516; continue _fun0003 }
 1291:
            var15 = var35.match;
            var7 = _closure1_slot13;
            var22 = var15.bind(var35)(var7);
            if(!(var14 != var22)) { _fun0003_ip = 1325; continue _fun0003 }
 1310:
            var7 = var22.length;
            var21 = 1;
            if(!(!(var7 > var21))) { _fun0003_ip = 4473; continue _fun0003 }
 1325:
            var15 = var35.match;
            var7 = _closure1_slot14;
            var7 = var15.bind(var35)(var7);
            if(!(var14 != var7)) { _fun0003_ip = 1395; continue _fun0003 }
 1344:
            var15 = _closure1_slot0;
            var24 = _closure1_slot2;
            var7 = 13;
            var7 = var24[var7];
            var24 = var15.bind(var11)(var7);
            var15 = var24.parseOAuth2AuthorizeProps;
            var26 = var14 != var13;
            var7 = var1;
            if(!var26) { _fun0003_ip = 1383; continue _fun0003 }
 1380:
            var7 = var13;
 1383:
            var24 = var15.bind(var24)(var7);
            if(!(var14 == var24)) { _fun0003_ip = 4413; continue _fun0003 }
 1395:
            var15 = var35.match;
            var7 = _closure1_slot12;
            var15 = var15.bind(var35)(var7);
            if(!(var14 != var15)) { _fun0003_ip = 1429; continue _fun0003 }
 1414:
            var26 = var15.length;
            var7 = 1;
            if(!(!(var26 > var7))) { _fun0003_ip = 4370; continue _fun0003 }
 1429:
            var27 = var35.match;
            var26 = _closure1_slot11;
            var27 = var27.bind(var35)(var26);
            if(!(var14 != var27)) { _fun0003_ip = 3033; continue _fun0003 }
 1451:
            var30 = var27.length;
            var26 = 1;
            if(!(var30 > var26)) { _fun0003_ip = 3033; continue _fun0003 }
 1466:
            var30 = var27[var26];
            var26 = 'composeMessage';
            if(!(var26 !== var30)) { _fun0003_ip = 3007; continue _fun0003 }
 1483:
            var26 = 'contactSync';
            if(!(var26 !== var30)) { _fun0003_ip = 2986; continue _fun0003 }
 1496:
            var26 = 'addFriends';
            if(!(var26 !== var30)) { _fun0003_ip = 2965; continue _fun0003 }
 1509:
            var26 = 'friends';
            if(!(var26 !== var30)) { _fun0003_ip = 2912; continue _fun0003 }
 1520:
            var26 = 'editProfile';
            if(!(var26 !== var30)) { _fun0003_ip = 2891; continue _fun0003 }
 1533:
            var26 = 'voiceChannel';
            if(!(var26 !== var30)) { _fun0003_ip = 2797; continue _fun0003 }
 1544:
            var26 = 'sessionManagement';
            if(!(var26 !== var30)) { _fun0003_ip = 2773; continue _fun0003 }
 1557:
            var26 = 'home';
            if(!(var26 !== var30)) { _fun0003_ip = 2696; continue _fun0003 }
 1568:
            var26 = 'icymi';
            if(!(var26 !== var30)) { _fun0003_ip = 2672; continue _fun0003 }
 1579:
            var26 = 'connections';
            if(!(var26 !== var30)) { _fun0003_ip = 2617; continue _fun0003 }
 1590:
            var26 = 'family-center';
            if(!(var26 !== var30)) { _fun0003_ip = 2588; continue _fun0003 }
 1603:
            var26 = 'promo-url';
            if(!(var26 !== var30)) { _fun0003_ip = 2520; continue _fun0003 }
 1616:
            var26 = 'account-standing';
            if(!(var26 !== var30)) { _fun0003_ip = 2491; continue _fun0003 }
 1629:
            var26 = 'apple-payment-link';
            if(!(var26 !== var30)) { _fun0003_ip = 2325; continue _fun0003 }
 1642:
            var26 = 'open-shop';
            if(!(var26 !== var30)) { _fun0003_ip = 2301; continue _fun0003 }
 1655:
            var26 = 'authorized-apps';
            if(!(var26 !== var30)) { _fun0003_ip = 2277; continue _fun0003 }
 1668:
            var26 = 'share';
            if(!(var26 !== var30)) { _fun0003_ip = 2046; continue _fun0003 }
 1679:
            var26 = 'dave-protocol-verification';
            if(!(var26 !== var30)) { _fun0003_ip = 1902; continue _fun0003 }
 1692:
            var26 = 'gift';
            if(!(var26 !== var30)) { _fun0003_ip = 1878; continue _fun0003 }
 1703:
            var26 = 'store';
            if(!(var26 !== var30)) { _fun0003_ip = 1854; continue _fun0003 }
 1714:
            var26 = 'connected-games';
            if(!(var26 !== var30)) { _fun0003_ip = 1830; continue _fun0003 }
 1724:
            var26 = 'boost-settings';
            if(!(var26 !== var30)) { _fun0003_ip = 1806; continue _fun0003 }
 1734:
            var27 = 'quest-preview-tool';
            var26 = null;
            if(!(var27 === var30)) { _fun0003_ip = 3026; continue _fun0003 }
 1749:
            var30 = _closure1_slot24;
            var31 = var14 != var13;
            var27 = var1;
            if(!var31) { _fun0003_ip = 1766; continue _fun0003 }
 1763:
            var27 = var13;
 1766:
            var27 = var30.bind(var11)(var27);
            var30 = var27.quest_id;
            var27 = {};
            var31 = _closure1_slot7;
            var31 = var31.QUEST_PREVIEW_TOOL;
            var27['type'] = var31;
            var27['questId'] = var30;
            var26 = var27;
            _fun0003_ip = 3026; continue _fun0003;
 1806:
            var27 = {};
            var30 = _closure1_slot7;
            var30 = var30.BOOST_SETTINGS;
            var27['type'] = var30;
            var26 = var27;
            _fun0003_ip = 3026; continue _fun0003;
 1830:
            var27 = {};
            var30 = _closure1_slot7;
            var30 = var30.CONNECTED_GAMES;
            var27['type'] = var30;
            var26 = var27;
            _fun0003_ip = 3026; continue _fun0003;
 1854:
            var27 = {};
            var30 = _closure1_slot7;
            var30 = var30.NITRO_HOME;
            var27['type'] = var30;
            var26 = var27;
            _fun0003_ip = 3026; continue _fun0003;
 1878:
            var27 = {};
            var30 = _closure1_slot7;
            var30 = var30.GIFT;
            var27['type'] = var30;
            var26 = var27;
            _fun0003_ip = 3026; continue _fun0003;
 1902:
            var30 = _closure1_slot24;
            var31 = var14 != var13;
            var27 = var1;
            if(!var31) { _fun0003_ip = 1919; continue _fun0003 }
 1916:
            var27 = var13;
 1919:
            var27 = var30.bind(var11)(var27);
            var31 = var27.userId;
            var30 = var27.fingerprint;
            var27 = var14 != var31;
            var26 = null;
            if(!var27) { _fun0003_ip = 3026; continue _fun0003 }
 1947:
            var27 = var14 != var30;
            var26 = null;
            if(!var27) { _fun0003_ip = 3026; continue _fun0003 }
 1959:
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var27 = 16;
            var27 = var33[var27];
            var33 = var32.bind(var11)(var27);
            var32 = var33.getSecureFramesDeeplinkExperiment;
            var27 = {};
            var36 = 'parseUrl';
            var27['location'] = var36;
            var27 = var32.bind(var33)(var27);
            var27 = var27.enabled;
            var26 = null;
            if(!var27) { _fun0003_ip = 3026; continue _fun0003 }
 2013:
            var27 = {};
            var32 = _closure1_slot7;
            var32 = var32.DAVE_PROTOCOL_VERIFICATION;
            var27['type'] = var32;
            var27['userId'] = var31;
            var27['fingerprint'] = var30;
            var26 = var27;
            _fun0003_ip = 3026; continue _fun0003;
 2046:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var27 = 15;
            var27 = var31[var27];
            var30 = var30.bind(var11)(var27);
            var27 = var30.isIOS;
            var27 = var27.bind(var30)();
            var26 = null;
            if(!var27) { _fun0003_ip = 3026; continue _fun0003 }
 2084:
            var30 = _closure1_slot24;
            var31 = var14 != var13;
            var27 = var1;
            if(!var31) { _fun0003_ip = 2101; continue _fun0003 }
 2098:
            var27 = var13;
 2101:
            var30 = var30.bind(var11)(var27);
            var32 = var30.text;
            var31 = var30.channelId;
            var27 = var30.shareId;
            var37 = var30.attachmentManifest;
            var36 = function isValidUUID(arg1) {
                var3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                var2 = var3.test;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            _closure2_slot0 = var36;
            var33 = 'string';
            var38 = typeof var27;
            var30 = undefined;
            if(!(var33 === var38)) { _fun0003_ip = 2163; continue _fun0003 }
 2150:
            var36 = var36.bind(var11)(var27);
            var30 = undefined;
            if(!var36) { _fun0003_ip = 2163; continue _fun0003 }
 2160:
            var30 = var27;
 2163:
            var27 = typeof var37;
            if(!(var33 !== var27)) { _fun0003_ip = 2176; continue _fun0003 }
 2170:
            var33 = new Array(0);
            _fun0003_ip = 2195; continue _fun0003;
 2176:
            var27 = global;
            var36 = var27.JSON;
            var27 = var36.parse;
            var33 = var27.bind(var36)(var37);
 2195:
            var27 = global;
            var36 = var27.Array;
            var27 = var36.isArray;
            var27 = var27.bind(var36)(var33);
            if(var27) { _fun0003_ip = 2220; continue _fun0003 }
 2216:
            var33 = new Array(0);
 2220:
            var27 = var33.filter;
            var23 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.originalFilename;
                    var4 = 'string';
                    var1 = typeof var1;
                    var1 = var4 === var1;
                    if(!var1) { _fun0004_ip = 38; continue _fun0004 }
 25:
                    var3 = var2.temporaryFilename;
                    var3 = typeof var3;
                    var1 = var4 === var3;
 38:
                    if(!var1) { _fun0004_ip = 61; continue _fun0004 }
 41:
                    var4 = _closure2_slot0;
                    var3 = var2.temporaryFilename;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
 61:
                    return var1;
                }
            };
            var27 = var27.bind(var33)(var23);
            var23 = {};
            var33 = _closure1_slot7;
            var33 = var33.SHARE;
            var23['type'] = var33;
            var23['text'] = var32;
            var23['channelId'] = var31;
            var23['shareId'] = var30;
            var23['attachmentManifest'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2277:
            var23 = {};
            var27 = _closure1_slot7;
            var27 = var27.AUTHORIZED_APPS;
            var23['type'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2301:
            var23 = {};
            var27 = _closure1_slot7;
            var27 = var27.SHOP;
            var23['type'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2325:
            var27 = _closure1_slot0;
            var30 = _closure1_slot2;
            var23 = 14;
            var23 = var30[var23];
            var30 = var27.bind(var11)(var23);
            var27 = var30.getApplePaymentLinkExperimentConfig;
            var23 = {};
            var31 = 'parseUrl';
            var23['location'] = var31;
            var23 = var27.bind(var30)(var23);
            var23 = var23.enabled;
            var30 = _closure1_slot24;
            var31 = var14 != var13;
            var27 = var1;
            if(!var31) { _fun0003_ip = 2388; continue _fun0003 }
 2385:
            var27 = var13;
 2388:
            var30 = var30.bind(var11)(var27);
            var27 = _closure1_slot10;
            var27 = var27.DEEP_LINK_ACTION;
            var27 = var30[var27];
            if(!var23) { _fun0003_ip = 2440; continue _fun0003 }
 2410:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var30 = 15;
            var30 = var32[var30];
            var31 = var31.bind(var11)(var30);
            var30 = var31.isIOS;
            var23 = var30.bind(var31)();
 2440:
            var26 = null;
            if(!var23) { _fun0003_ip = 3026; continue _fun0003 }
 2448:
            var23 = {};
            var30 = _closure1_slot7;
            var30 = var30.APPLE_PAYMENT_LINK;
            var23['type'] = var30;
            if(!(var14 == var27)) { _fun0003_ip = 2478; continue _fun0003 }
 2468:
            var30 = _closure1_slot9;
            var27 = var30.DEFAULT;
 2478:
            var23['deepLinkAction'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2491:
            var23 = {};
            var27 = _closure1_slot7;
            var27 = var27.ACCOUNT_STANDING;
            var23['type'] = var27;
            var23['pathname'] = var35;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2520:
            var27 = _closure1_slot24;
            var30 = var14 != var13;
            var23 = var1;
            if(!var30) { _fun0003_ip = 2537; continue _fun0003 }
 2534:
            var23 = var13;
 2537:
            var23 = var27.bind(var11)(var23);
            var27 = var23.promo_url;
            var26 = null;
            if(!(var11 !== var27)) { _fun0003_ip = 3026; continue _fun0003 }
 2559:
            var23 = {};
            var30 = _closure1_slot7;
            var30 = var30.FEATURE_PROMO_URL;
            var23['type'] = var30;
            var23['promoUrl'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2588:
            var23 = {};
            var27 = _closure1_slot7;
            var27 = var27.FAMILY_CENTER;
            var23['type'] = var27;
            var23['pathname'] = var35;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2617:
            var27 = _closure1_slot24;
            var30 = var14 != var13;
            var23 = var1;
            if(!var30) { _fun0003_ip = 2634; continue _fun0003 }
 2631:
            var23 = var13;
 2634:
            var23 = var27.bind(var11)(var23);
            var27 = var23.source;
            var23 = {};
            var30 = _closure1_slot7;
            var30 = var30.CONNECTIONS;
            var23['type'] = var30;
            var23['source'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2672:
            var23 = {};
            var27 = _closure1_slot7;
            var27 = var27.ICYMI;
            var23['type'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2696:
            var27 = _closure1_slot24;
            var30 = var14 != var13;
            var23 = var1;
            if(!var30) { _fun0003_ip = 2713; continue _fun0003 }
 2710:
            var23 = var13;
 2713:
            var23 = var27.bind(var11)(var23);
            var31 = var23.guild_id;
            var30 = var23.highlight_channel_id;
            var27 = var23.highlight_message_id;
            var23 = {};
            var32 = _closure1_slot7;
            var32 = var32.GUILD_HOME;
            var23['type'] = var32;
            var23['guildId'] = var31;
            var23['highlightChannelId'] = var30;
            var23['highlightMessageId'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2773:
            var23 = {};
            var27 = _closure1_slot7;
            var27 = var27.SESSION_MANAGEMENT;
            var23['type'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2797:
            var27 = _closure1_slot24;
            var30 = var14 != var13;
            var23 = var1;
            if(!var30) { _fun0003_ip = 2814; continue _fun0003 }
 2811:
            var23 = var13;
 2814:
            var23 = var27.bind(var11)(var23);
            var33 = var23.guild_id;
            var32 = var23.channel_id;
            var31 = var23.user_id;
            var30 = var23.via;
            var27 = var23.action;
            var23 = {};
            var36 = _closure1_slot7;
            var36 = var36.VOICE_CHANNEL;
            var23['type'] = var36;
            var23['guildId'] = var33;
            var23['channelId'] = var32;
            var23['userId'] = var31;
            var23['via'] = var30;
            var23['action'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2891:
            var23 = {};
            var27 = _closure1_slot7;
            var27 = var27.EDIT_PROFILE;
            var23['type'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2912:
            var27 = _closure1_slot24;
            var30 = var14 != var13;
            var23 = var1;
            if(!var30) { _fun0003_ip = 2929; continue _fun0003 }
 2926:
            var23 = var13;
 2929:
            var23 = var27.bind(var11)(var23);
            var27 = var23.user_id;
            var23 = {};
            var30 = _closure1_slot7;
            var30 = var30.FRIENDS;
            var23['type'] = var30;
            var23['userId'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2965:
            var23 = {};
            var27 = _closure1_slot7;
            var27 = var27.ADD_FRIENDS;
            var23['type'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 2986:
            var23 = {};
            var27 = _closure1_slot7;
            var27 = var27.CONTACT_SYNC;
            var23['type'] = var27;
            var26 = var23;
            _fun0003_ip = 3026; continue _fun0003;
 3007:
            var23 = {};
            var27 = _closure1_slot7;
            var27 = var27.COMPOSE_MESSAGE;
            var23['type'] = var27;
            var26 = var23;
 3026:
            if(!(var14 == var26)) { _fun0003_ip = 4351; continue _fun0003 }
 3033:
            var27 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var28];
            var27 = var27.bind(var11)(var23);
            var23 = var27.tryParseEventDetailsPath;
            var28 = var23.bind(var27)(var35);
            if(!(var14 == var28)) { _fun0003_ip = 4285; continue _fun0003 }
 3068:
            var27 = var35.match;
            var23 = _closure1_slot16;
            var23 = var27.bind(var35)(var23);
            if(!(var14 == var23)) { _fun0003_ip = 3952; continue _fun0003 }
 3090:
            var27 = var35.match;
            var23 = _closure1_slot17;
            var27 = var27.bind(var35)(var23);
            if(!(var14 == var27)) { _fun0003_ip = 3850; continue _fun0003 }
 3112:
            var30 = var35.match;
            var23 = _closure1_slot18;
            var30 = var30.bind(var35)(var23);
            if(!(var14 == var30)) { _fun0003_ip = 3746; continue _fun0003 }
 3134:
            var31 = var35.match;
            var23 = _closure1_slot19;
            var31 = var31.bind(var35)(var23);
            if(!(var14 == var31)) { _fun0003_ip = 3614; continue _fun0003 }
 3156:
            var32 = var35.match;
            var23 = _closure1_slot20;
            var32 = var32.bind(var35)(var23);
            if(!(var14 == var32)) { _fun0003_ip = 3460; continue _fun0003 }
 3178:
            var33 = var35.match;
            var23 = _closure1_slot21;
            var23 = var33.bind(var35)(var23);
            if(!(var14 == var23)) { _fun0003_ip = 3379; continue _fun0003 }
 3200:
            var33 = var14 == var29;
            var23 = undefined;
            if(var33) { _fun0003_ip = 3224; continue _fun0003 }
 3209:
            var35 = var29.match;
            var33 = _closure1_slot15;
            var23 = var35.bind(var29)(var33);
 3224:
            if(!(var14 == var23)) { _fun0003_ip = 3337; continue _fun0003 }
 3228:
            var23 = _closure1_slot8;
            var33 = var14 == var23;
            var23 = undefined;
            if(var33) { _fun0003_ip = 3256; continue _fun0003 }
 3241:
            var33 = _closure1_slot8;
            var33 = var33.url;
            var23 = var33.host;
 3256:
            if(!(var29 !== var23)) { _fun0003_ip = 3295; continue _fun0003 }
 3260:
            var23 = {};
            var23['fingerprint'] = var2;
            var23['attemptId'] = var4;
            var29 = {};
            var33 = _closure1_slot7;
            var33 = var33.NONE;
            var29['type'] = var33;
            var23['payload'] = var29;
            _fun0003_ip = 3335; continue _fun0003;
 3295:
            var29 = {};
            var29['fingerprint'] = var2;
            var29['attemptId'] = var4;
            var33 = {};
            var35 = _closure1_slot7;
            var35 = var35.MOBILE_NATIVE_UPDATE;
            var33['type'] = var35;
            var33['url'] = var34;
            var29['payload'] = var33;
            var23 = var29;
 3335:
            _fun0003_ip = 3377; continue _fun0003;
 3337:
            var29 = {};
            var29['fingerprint'] = var2;
            var29['attemptId'] = var4;
            var33 = {};
            var35 = _closure1_slot7;
            var35 = var35.PROMOTIONS;
            var33['type'] = var35;
            var33['url'] = var34;
            var29['payload'] = var33;
            var23 = var29;
 3377:
            return var23;
 3379:
            var29 = _closure1_slot24;
            var23 = global;
            var33 = var23.decodeURIComponent;
            var34 = var14 != var13;
            var23 = var1;
            if(!var34) { _fun0003_ip = 3404; continue _fun0003 }
 3401:
            var23 = var13;
 3404:
            var23 = var33.bind(var11)(var23);
            var23 = var29.bind(var11)(var23);
            var33 = var23.user_code;
            var23 = {};
            var23['fingerprint'] = var2;
            var23['attemptId'] = var4;
            var29 = {};
            var34 = _closure1_slot7;
            var34 = var34.ACTIVATE_DEVICE;
            var29['type'] = var34;
            var29['userCode'] = var33;
            var23['payload'] = var29;
            return var23;
 3460:
            var29 = _closure1_slot3;
            var23 = 3;
            var29 = var29.bind(var11)(var32, var23);
            var23 = 1;
            var39 = var29[var23];
            var23 = 2;
            var35 = var29[var23];
            var29 = _closure1_slot24;
            var32 = var14 != var13;
            var23 = var1;
            if(!var32) { _fun0003_ip = 3504; continue _fun0003 }
 3501:
            var23 = var13;
 3504:
            var23 = var29.bind(var11)(var23);
            var32 = var23.feature;
            var23 = {};
            var23['fingerprint'] = var2;
            var23['attemptId'] = var4;
            var29 = {};
            var33 = _closure1_slot7;
            var33 = var33.GUILD_SETTINGS_PICKER;
            var29['type'] = var33;
            var34 = _closure1_slot1;
            var36 = _closure1_slot2;
            var33 = 19;
            var37 = var36[var33];
            var38 = var34.bind(var11)(var37);
            var37 = _closure1_slot5;
            var37 = var38.bind(var11)(var37, var39);
            var29['settingsSection'] = var37;
            var33 = var36[var33];
            var34 = var34.bind(var11)(var33);
            var33 = _closure1_slot6;
            var33 = var34.bind(var11)(var33, var35);
            var29['settingsSubsection'] = var33;
            var29['feature'] = var32;
            var23['payload'] = var29;
            return var23;
 3614:
            var29 = _closure1_slot3;
            var23 = 4;
            var29 = var29.bind(var11)(var31, var23);
            var23 = 1;
            var31 = var29[var23];
            var23 = 2;
            var37 = var29[var23];
            var23 = 3;
            var33 = var29[var23];
            var23 = {};
            var23['fingerprint'] = var2;
            var23['attemptId'] = var4;
            var29 = {};
            var32 = _closure1_slot7;
            var32 = var32.GUILD_SETTINGS;
            var29['type'] = var32;
            var29['guildId'] = var31;
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var31 = 19;
            var35 = var34[var31];
            var36 = var32.bind(var11)(var35);
            var35 = _closure1_slot5;
            var35 = var36.bind(var11)(var35, var37);
            var29['settingsSection'] = var35;
            var31 = var34[var31];
            var32 = var32.bind(var11)(var31);
            var31 = _closure1_slot6;
            var31 = var32.bind(var11)(var31, var33);
            var29['settingsSubsection'] = var31;
            var23['payload'] = var29;
            return var23;
 3746:
            var29 = _closure1_slot3;
            var23 = 2;
            var29 = var29.bind(var11)(var30, var23);
            var23 = var29[var8];
            var23 = 1;
            var31 = var29[var23];
            var29 = _closure1_slot24;
            var23 = global;
            var30 = var23.decodeURIComponent;
            var32 = var14 != var13;
            var23 = var1;
            if(!var32) { _fun0003_ip = 3795; continue _fun0003 }
 3792:
            var23 = var13;
 3795:
            var23 = var30.bind(var11)(var23);
            var30 = var29.bind(var11)(var23);
            var23 = {};
            var23['fingerprint'] = var2;
            var23['attemptId'] = var4;
            var29 = {};
            var32 = _closure1_slot7;
            var32 = var32.USER_CONNECTIONS_CALLBACK;
            var29['type'] = var32;
            var29['provider'] = var31;
            var29['searchParams'] = var30;
            var23['payload'] = var29;
            return var23;
 3850:
            var29 = _closure1_slot24;
            var23 = global;
            var30 = var23.decodeURIComponent;
            var31 = var14 != var13;
            var23 = var1;
            if(!var31) { _fun0003_ip = 3875; continue _fun0003 }
 3872:
            var23 = var13;
 3875:
            var23 = var30.bind(var11)(var23);
            var23 = var29.bind(var11)(var23);
            var30 = var23.code;
            var29 = var23.state;
            var23 = 1;
            var31 = var27[var23];
            var23 = {};
            var23['fingerprint'] = var2;
            var23['attemptId'] = var4;
            var27 = {};
            var32 = _closure1_slot7;
            var32 = var32.USER_CONNECTIONS_LINK_CALLBACK;
            var27['type'] = var32;
            var27['provider'] = var31;
            var27['callbackCode'] = var30;
            var27['callbackState'] = var29;
            var23['payload'] = var27;
            return var23;
 3952:
            var29 = _closure1_slot24;
            var23 = global;
            var27 = var23.decodeURIComponent;
            var27 = var27.bind(var11)(var13);
            var27 = var29.bind(var11)(var27);
            var31 = var27.key;
            var32 = var27.redirect;
            var33 = var27.fingerprint;
            if(!(var14 != var31)) { _fun0003_ip = 4157; continue _fun0003 }
 3998:
            if(!(var14 != var32)) { _fun0003_ip = 4157; continue _fun0003 }
 4005:
            var30 = var23.URL;
            var27 = var23.location;
            var34 = var27.protocol;
            var27 = var23.window;
            var27 = var27.GLOBAL_ENV;
            var29 = var27.WEBAPP_ENDPOINT;
            var27 = var23.HermesInternal;
            var27 = var27.concat;
            var41 = var27.bind(var1)(var34, var29);
            var29 = var30.prototype;
            var29 = Object.create(var29, {constructor: {value: var30}});
            var43 = var29;
            var42 = var32;
            var27 = new var43[var30](var42, var41, var40);
            var30 = var27 instanceof Object ? var27 : var29;
            if(!(var14 != var33)) { _fun0003_ip = 4107; continue _fun0003 }
 4085:
            var32 = var30.searchParams;
            var29 = var32.append;
            var27 = 'fingerprint';
            var27 = var29.bind(var32)(var27, var33);
 4107:
            var27 = {};
            var27['fingerprint'] = var33;
            var27['attemptId'] = var4;
            var29 = {};
            var32 = _closure1_slot7;
            var32 = var32.MOBILE_WEB_HANDOFF;
            var29['type'] = var32;
            var29['nonce'] = var31;
            var29['redirectUrl'] = var30;
            var29['fingerprint'] = var33;
            var27['payload'] = var29;
            return var27;
 4157:
            var29 = _closure1_slot1;
            var35 = _closure1_slot2;
            var27 = 17;
            var27 = var35[var27];
            var32 = var29.bind(var11)(var27);
            var31 = var32.track;
            var27 = _closure1_slot4;
            var30 = var27.MOBILE_WEB_HANDOFF_FAILURE;
            var29 = {};
            var27 = 'invalid_query_params';
            var29['reason'] = var27;
            var34 = _closure1_slot0;
            var27 = 18;
            var27 = var35[var27];
            var34 = var34.bind(var11)(var27);
            var27 = var34.maybeExtractId;
            var27 = var27.bind(var34)(var33);
            var29['fingerprint'] = var27;
            var27 = {};
            var27['fingerprint'] = var33;
            var27 = var31.bind(var32)(var30, var29, var27);
            var29 = var23.Error;
            var23 = var29.prototype;
            var27 = Object.create(var23, {constructor: {value: var29}});
            var42 = 'Missing nonce or redirect query params';
            var43 = var27;
            var23 = new var43[var29](var42, var41);
            var23 = var23 instanceof Object ? var23 : var27;
            throw var23;
 4285:
            var23 = {};
            var23['fingerprint'] = var2;
            var23['attemptId'] = var4;
            var27 = {};
            var29 = _closure1_slot7;
            var29 = var29.GUILD_EVENT_DETAILS;
            var27['type'] = var29;
            var29 = var28.guildEventId;
            var27['guildEventId'] = var29;
            var29 = var28.guildId;
            var27['guildId'] = var29;
            var28 = var28.recurrenceId;
            var27['recurrenceId'] = var28;
            var23['payload'] = var27;
            return var23;
 4351:
            var23 = {};
            var23['fingerprint'] = var2;
            var23['attemptId'] = var4;
            var23['payload'] = var26;
            return var23;
 4370:
            var23 = var15[var7];
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var26 = _closure1_slot7;
            var26 = var26.BOOST_MARKETING;
            var15['type'] = var26;
            var15['guildId'] = var23;
            var7['payload'] = var15;
            return var7;
 4413:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var23 = _closure1_slot7;
            var23 = var23.OAUTH2_AUTHORIZE;
            var15['type'] = var23;
            var23 = {};
            var42 = var23;
            var41 = var24;
            var24 = copyDataProperties(var42, var41);
            var24 = 'wasDeepLink';
            var23[var24] = var25;
            var15['props'] = var23;
            var7['payload'] = var15;
            return var7;
 4473:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var23 = _closure1_slot7;
            var23 = var23.USER_PROFILE;
            var15['type'] = var23;
            var21 = var22[var21];
            var15['userId'] = var21;
            var7['payload'] = var15;
            return var7;
 4516:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var21 = _closure1_slot7;
            var21 = var21.QUEST_PREVIEW_TOOL;
            var15['type'] = var21;
            var19 = var20[var19];
            var15['questId'] = var19;
            var7['payload'] = var15;
            return var7;
 4560:
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
 4609:
            var7 = _closure1_slot24;
            var15 = var14 != var13;
            if(!var15) { _fun0003_ip = 4623; continue _fun0003 }
 4620:
            var1 = var13;
 4623:
            var1 = var7.bind(var11)(var1);
            var11 = var1.summaryId;
            var1 = {};
            var1['fingerprint'] = var2;
            var1['attemptId'] = var4;
            var7 = {};
            var13 = var12.messageId;
            if(!(var14 == var13)) { _fun0003_ip = 4669; continue _fun0003 }
 4657:
            var13 = _closure1_slot7;
            var13 = var13.CHANNEL;
            _fun0003_ip = 4679; continue _fun0003;
 4669:
            var14 = _closure1_slot7;
            var13 = var14.MESSAGE;
 4679:
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
 4722:
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
 4762:
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
 4806:
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
 4851:
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
 4896:
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
 4950:
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