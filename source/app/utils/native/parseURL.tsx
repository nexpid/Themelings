// app/utils/native/parseURL.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = /feature\\/([\w-]+)/;
    var _closure1_slot9 = var4;
    var4 = /feature\\/boost\\/([0-9]+)/;
    var _closure1_slot10 = var4;
    var4 = /users\\/(\d+)/;
    var _closure1_slot11 = var4;
    var4 = /(?:connect|oauth2)\\/authorize/;
    var _closure1_slot12 = var4;
    var4 = /promos\.discord\.gg/;
    var _closure1_slot13 = var4;
    var4 = /mweb-handoff/;
    var _closure1_slot14 = var4;
    var4 = /connections\\/(xbox|playstation|playstation-stg|crunchyroll)\\/link/;
    var _closure1_slot15 = var4;
    var4 = /connections\\/([a-z-]+)/;
    var _closure1_slot16 = var4;
    var4 = /guilds\\/(\d+)\\/settings(?:\\/([a-z-]+)(?:\\/([a-z-]+))?)?/;
    var _closure1_slot17 = var4;
    var4 = /guilds\\/settings(?:\\/([a-z-]+)(?:\\/([a-z-]+))?)?/;
    var _closure1_slot18 = var4;
    var4 = /activate/;
    var _closure1_slot19 = var4;
    var4 = /quests\\/(\d+)/;
    var _closure1_slot20 = var4;
    var4 = function parseQuery(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
 3: // try_start_0
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 3;
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
    var _closure1_slot21 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/parseURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function parseURL(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var22 = arguments[1];
            var11 = undefined;
            if(!(var22 === var11)) { _fun0003_ip = 13; continue _fun0003 }
 11:
            var22 = false;
 13:
            var _closure2_slot0 = var11;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var28 = 4;
            var1 = var1[var28];
            var4 = var2.bind(var11)(var1);
            var2 = var4.sanitizeUrl;
            var1 = arg1;
            var32 = var2.bind(var4)(var1);
            var14 = null;
            if(!(var14 != var32)) { _fun0003_ip = 4607; continue _fun0003 }
 63:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var2 = var2.bind(var11)(var1);
            var1 = var2.parse;
            var1 = var1.bind(var2)(var32);
            var17 = var1.protocol;
            var29 = var1.host;
            var15 = var1.hostname;
            var33 = var1.pathname;
            var13 = var1.query;
            var4 = _closure1_slot21;
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
            var12 = var6.custom_id;
            var10 = var6.referrer_id;
            var9 = var6.link_id;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 6;
            var6 = var8[var6];
            var7 = var7.bind(var11)(var6);
            var6 = var7.findCodedLink;
            var6 = var6.bind(var7)(var32);
            if(!(var14 != var6)) { _fun0003_ip = 984; continue _fun0003 }
 222:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var18 = 7;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.INVITE;
            if(!(var8 !== var7)) { _fun0003_ip = 4553; continue _fun0003 }
 266:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.TEMPLATE;
            if(!(var8 !== var7)) { _fun0003_ip = 4508; continue _fun0003 }
 307:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.BUILD_OVERRIDE;
            if(!(var8 !== var7)) { _fun0003_ip = 4463; continue _fun0003 }
 348:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.MANUAL_BUILD_OVERRIDE;
            if(!(var8 !== var7)) { _fun0003_ip = 4463; continue _fun0003 }
 389:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.EVENT;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 430:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.CHANNEL_LINK;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 471:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_PROFILE;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 512:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.ACTIVITY_BOOKMARK;
            if(!(var8 !== var7)) { _fun0003_ip = 920; continue _fun0003 }
 553:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.EMBEDDED_ACTIVITY_INVITE;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 594:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.GUILD_PRODUCT;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 635:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.SERVER_SHOP;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 676:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.QUESTS_EMBED;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 717:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_STOREFRONT;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 758:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 799:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.APP_OAUTH2_LINK;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 840:
            var8 = var6.type;
            var16 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var7 = var16.bind(var11)(var7);
            var7 = var7.CodedLinkType;
            var7 = var7.COLLECTIBLES_SHOP;
            if(!(var8 !== var7)) { _fun0003_ip = 984; continue _fun0003 }
 878:
            var7 = global;
            var8 = var7.Error;
            var18 = var6.type;
            var7 = var7.HermesInternal;
            var16 = var7.concat;
            var7 = 'Unknown coded link type: ';
            var7 = var16.bind(var7)(var18);
            var7 = var8.bind(var11)(var7);
            throw var7;
 920:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var8 = {};
            var16 = _closure1_slot7;
            var16 = var16.ACTIVITY;
            var8['type'] = var16;
            var16 = var6.code;
            var8['applicationId'] = var16;
            var8['customId'] = var12;
            var8['referrerId'] = var10;
            var8['linkId'] = var9;
            var8['isDeepLink'] = var22;
            var7['payload'] = var8;
            return var7;
 984:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 8;
            var7 = var9[var7];
            var7 = var8.bind(var11)(var7);
            var7 = var7.findGiftCodes;
            var9 = var7.bind(var11)(var32);
            var7 = var9.length;
            var8 = 0;
            if(!(!(var7 > var8))) { _fun0003_ip = 4419; continue _fun0003 }
 1029:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 9;
            var7 = var12[var7];
            var10 = var10.bind(var11)(var7);
            var7 = var10.findRemoteAuthFingerprint;
            var10 = var7.bind(var10)(var29, var33);
            if(!(var14 != var10)) { _fun0003_ip = 1077; continue _fun0003 }
 1065:
            var7 = var10.length;
            if(!(!(var7 > var8))) { _fun0003_ip = 4379; continue _fun0003 }
 1077:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var16 = 10;
            var7 = var7[var16];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordHostname;
            var7 = var7.bind(var12)(var29);
            if(var7) { _fun0003_ip = 1177; continue _fun0003 }
 1111:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var16];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordProtocol;
            var7 = var7.bind(var12)(var17);
            if(var7) { _fun0003_ip = 1177; continue _fun0003 }
 1142:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var16];
            var12 = var12.bind(var11)(var7);
            var7 = var12.isDiscordLocalhost;
            var7 = var7.bind(var12)(var29, var15);
            if(!var7) { _fun0003_ip = 2909; continue _fun0003 }
 1177:
            if(!(var14 != var33)) { _fun0003_ip = 2909; continue _fun0003 }
 1184:
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var25 = 11;
            var7 = var7[var25];
            var12 = var12.bind(var11)(var7);
            var7 = var12.tryParseChannelPath;
            var12 = var7.bind(var12)(var33);
            if(!(var14 == var12)) { _fun0003_ip = 4266; continue _fun0003 }
 1222:
            var15 = var33.match;
            var7 = _closure1_slot20;
            var17 = var15.bind(var33)(var7);
            if(!(var14 != var17)) { _fun0003_ip = 1256; continue _fun0003 }
 1241:
            var7 = var17.length;
            var16 = 1;
            if(!(!(var7 > var16))) { _fun0003_ip = 4222; continue _fun0003 }
 1256:
            var15 = var33.match;
            var7 = _closure1_slot11;
            var19 = var15.bind(var33)(var7);
            if(!(var14 != var19)) { _fun0003_ip = 1290; continue _fun0003 }
 1275:
            var7 = var19.length;
            var18 = 1;
            if(!(!(var7 > var18))) { _fun0003_ip = 4179; continue _fun0003 }
 1290:
            var15 = var33.match;
            var7 = _closure1_slot12;
            var7 = var15.bind(var33)(var7);
            if(!(var14 != var7)) { _fun0003_ip = 1360; continue _fun0003 }
 1309:
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var7 = 12;
            var7 = var21[var7];
            var21 = var15.bind(var11)(var7);
            var15 = var21.parseOAuth2AuthorizeProps;
            var23 = var14 != var13;
            var7 = var1;
            if(!var23) { _fun0003_ip = 1348; continue _fun0003 }
 1345:
            var7 = var13;
 1348:
            var21 = var15.bind(var21)(var7);
            if(!(var14 == var21)) { _fun0003_ip = 4119; continue _fun0003 }
 1360:
            var15 = var33.match;
            var7 = _closure1_slot10;
            var15 = var15.bind(var33)(var7);
            if(!(var14 != var15)) { _fun0003_ip = 1394; continue _fun0003 }
 1379:
            var23 = var15.length;
            var7 = 1;
            if(!(!(var23 > var7))) { _fun0003_ip = 4076; continue _fun0003 }
 1394:
            var24 = var33.match;
            var23 = _closure1_slot9;
            var24 = var24.bind(var33)(var23);
            if(!(var14 != var24)) { _fun0003_ip = 2742; continue _fun0003 }
 1416:
            var26 = var24.length;
            var23 = 1;
            if(!(var26 > var23)) { _fun0003_ip = 2742; continue _fun0003 }
 1431:
            var26 = var24[var23];
            var23 = 'composeMessage';
            if(!(var23 !== var26)) { _fun0003_ip = 2716; continue _fun0003 }
 1448:
            var23 = 'contactSync';
            if(!(var23 !== var26)) { _fun0003_ip = 2695; continue _fun0003 }
 1461:
            var23 = 'addFriends';
            if(!(var23 !== var26)) { _fun0003_ip = 2674; continue _fun0003 }
 1474:
            var23 = 'friends';
            if(!(var23 !== var26)) { _fun0003_ip = 2621; continue _fun0003 }
 1485:
            var23 = 'editProfile';
            if(!(var23 !== var26)) { _fun0003_ip = 2600; continue _fun0003 }
 1498:
            var23 = 'voiceChannel';
            if(!(var23 !== var26)) { _fun0003_ip = 2506; continue _fun0003 }
 1509:
            var23 = 'sessionManagement';
            if(!(var23 !== var26)) { _fun0003_ip = 2482; continue _fun0003 }
 1522:
            var23 = 'home';
            if(!(var23 !== var26)) { _fun0003_ip = 2405; continue _fun0003 }
 1533:
            var23 = 'icymi';
            if(!(var23 !== var26)) { _fun0003_ip = 2381; continue _fun0003 }
 1544:
            var23 = 'connections';
            if(!(var23 !== var26)) { _fun0003_ip = 2326; continue _fun0003 }
 1555:
            var23 = 'family-center';
            if(!(var23 !== var26)) { _fun0003_ip = 2297; continue _fun0003 }
 1568:
            var23 = 'promo-url';
            if(!(var23 !== var26)) { _fun0003_ip = 2229; continue _fun0003 }
 1581:
            var23 = 'account-standing';
            if(!(var23 !== var26)) { _fun0003_ip = 2200; continue _fun0003 }
 1594:
            var23 = 'open-shop';
            if(!(var23 !== var26)) { _fun0003_ip = 2176; continue _fun0003 }
 1607:
            var23 = 'authorized-apps';
            if(!(var23 !== var26)) { _fun0003_ip = 2152; continue _fun0003 }
 1620:
            var23 = 'share';
            if(!(var23 !== var26)) { _fun0003_ip = 1925; continue _fun0003 }
 1631:
            var23 = 'dave-protocol-verification';
            if(!(var23 !== var26)) { _fun0003_ip = 1781; continue _fun0003 }
 1644:
            var23 = 'gift';
            if(!(var23 !== var26)) { _fun0003_ip = 1757; continue _fun0003 }
 1652:
            var23 = 'store';
            if(!(var23 !== var26)) { _fun0003_ip = 1733; continue _fun0003 }
 1660:
            var23 = 'connected-games';
            if(!(var23 !== var26)) { _fun0003_ip = 1709; continue _fun0003 }
 1670:
            var24 = 'boost-settings';
            var23 = null;
            if(!(var24 === var26)) { _fun0003_ip = 2735; continue _fun0003 }
 1685:
            var24 = {};
            var26 = _closure1_slot7;
            var26 = var26.BOOST_SETTINGS;
            var24['type'] = var26;
            var23 = var24;
            _fun0003_ip = 2735; continue _fun0003;
 1709:
            var24 = {};
            var26 = _closure1_slot7;
            var26 = var26.CONNECTED_GAMES;
            var24['type'] = var26;
            var23 = var24;
            _fun0003_ip = 2735; continue _fun0003;
 1733:
            var24 = {};
            var26 = _closure1_slot7;
            var26 = var26.NITRO_HOME;
            var24['type'] = var26;
            var23 = var24;
            _fun0003_ip = 2735; continue _fun0003;
 1757:
            var24 = {};
            var26 = _closure1_slot7;
            var26 = var26.GIFT;
            var24['type'] = var26;
            var23 = var24;
            _fun0003_ip = 2735; continue _fun0003;
 1781:
            var26 = _closure1_slot21;
            var27 = var14 != var13;
            var24 = var1;
            if(!var27) { _fun0003_ip = 1798; continue _fun0003 }
 1795:
            var24 = var13;
 1798:
            var24 = var26.bind(var11)(var24);
            var27 = var24.userId;
            var26 = var24.fingerprint;
            var24 = var14 != var27;
            var23 = null;
            if(!var24) { _fun0003_ip = 2735; continue _fun0003 }
 1826:
            var24 = var14 != var26;
            var23 = null;
            if(!var24) { _fun0003_ip = 2735; continue _fun0003 }
 1838:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var24 = 14;
            var24 = var31[var24];
            var31 = var30.bind(var11)(var24);
            var30 = var31.getSecureFramesDeeplinkExperiment;
            var24 = {};
            var34 = 'parseUrl';
            var24['location'] = var34;
            var24 = var30.bind(var31)(var24);
            var24 = var24.enabled;
            var23 = null;
            if(!var24) { _fun0003_ip = 2735; continue _fun0003 }
 1892:
            var24 = {};
            var30 = _closure1_slot7;
            var30 = var30.DAVE_PROTOCOL_VERIFICATION;
            var24['type'] = var30;
            var24['userId'] = var27;
            var24['fingerprint'] = var26;
            var23 = var24;
            _fun0003_ip = 2735; continue _fun0003;
 1925:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = 13;
            var24 = var27[var24];
            var26 = var26.bind(var11)(var24);
            var24 = var26.isIOS;
            var24 = var24.bind(var26)();
            var23 = null;
            if(!var24) { _fun0003_ip = 2735; continue _fun0003 }
 1963:
            var26 = _closure1_slot21;
            var27 = var14 != var13;
            var24 = var1;
            if(!var27) { _fun0003_ip = 1980; continue _fun0003 }
 1977:
            var24 = var13;
 1980:
            var26 = var26.bind(var11)(var24);
            var30 = var26.text;
            var27 = var26.channelId;
            var24 = var26.shareId;
            var35 = var26.attachmentManifest;
            var34 = function isValidUUID(arg1) {
                var3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                var2 = var3.test;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            _closure2_slot0 = var34;
            var31 = 'string';
            var36 = typeof var24;
            var26 = undefined;
            if(!(var31 === var36)) { _fun0003_ip = 2042; continue _fun0003 }
 2029:
            var34 = var34.bind(var11)(var24);
            var26 = undefined;
            if(!var34) { _fun0003_ip = 2042; continue _fun0003 }
 2039:
            var26 = var24;
 2042:
            var24 = typeof var35;
            if(!(var31 !== var24)) { _fun0003_ip = 2053; continue _fun0003 }
 2049:
            var34 = {};
            _fun0003_ip = 2072; continue _fun0003;
 2053:
            var24 = global;
            var31 = var24.JSON;
            var24 = var31.parse;
            var34 = var24.bind(var31)(var35);
 2072:
            var24 = global;
            var31 = var24.Object;
            var24 = var31.entries;
            var34 = var24.bind(var31)(var34);
            var31 = var34.reduce;
            var24 = function(arg1, arg2) {
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
            var20 = {};
            var24 = var31.bind(var34)(var24, var20);
            var20 = {};
            var31 = _closure1_slot7;
            var31 = var31.SHARE;
            var20['type'] = var31;
            var20['text'] = var30;
            var20['channelId'] = var27;
            var20['shareId'] = var26;
            var20['attachmentManifest'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2152:
            var20 = {};
            var24 = _closure1_slot7;
            var24 = var24.AUTHORIZED_APPS;
            var20['type'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2176:
            var20 = {};
            var24 = _closure1_slot7;
            var24 = var24.SHOP;
            var20['type'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2200:
            var20 = {};
            var24 = _closure1_slot7;
            var24 = var24.ACCOUNT_STANDING;
            var20['type'] = var24;
            var20['pathname'] = var33;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2229:
            var24 = _closure1_slot21;
            var26 = var14 != var13;
            var20 = var1;
            if(!var26) { _fun0003_ip = 2246; continue _fun0003 }
 2243:
            var20 = var13;
 2246:
            var20 = var24.bind(var11)(var20);
            var24 = var20.promo_url;
            var23 = null;
            if(!(var11 !== var24)) { _fun0003_ip = 2735; continue _fun0003 }
 2268:
            var20 = {};
            var26 = _closure1_slot7;
            var26 = var26.FEATURE_PROMO_URL;
            var20['type'] = var26;
            var20['promoUrl'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2297:
            var20 = {};
            var24 = _closure1_slot7;
            var24 = var24.FAMILY_CENTER;
            var20['type'] = var24;
            var20['pathname'] = var33;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2326:
            var24 = _closure1_slot21;
            var26 = var14 != var13;
            var20 = var1;
            if(!var26) { _fun0003_ip = 2343; continue _fun0003 }
 2340:
            var20 = var13;
 2343:
            var20 = var24.bind(var11)(var20);
            var24 = var20.source;
            var20 = {};
            var26 = _closure1_slot7;
            var26 = var26.CONNECTIONS;
            var20['type'] = var26;
            var20['source'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2381:
            var20 = {};
            var24 = _closure1_slot7;
            var24 = var24.ICYMI;
            var20['type'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2405:
            var24 = _closure1_slot21;
            var26 = var14 != var13;
            var20 = var1;
            if(!var26) { _fun0003_ip = 2422; continue _fun0003 }
 2419:
            var20 = var13;
 2422:
            var20 = var24.bind(var11)(var20);
            var27 = var20.guild_id;
            var26 = var20.highlight_channel_id;
            var24 = var20.highlight_message_id;
            var20 = {};
            var30 = _closure1_slot7;
            var30 = var30.GUILD_HOME;
            var20['type'] = var30;
            var20['guildId'] = var27;
            var20['highlightChannelId'] = var26;
            var20['highlightMessageId'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2482:
            var20 = {};
            var24 = _closure1_slot7;
            var24 = var24.SESSION_MANAGEMENT;
            var20['type'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2506:
            var24 = _closure1_slot21;
            var26 = var14 != var13;
            var20 = var1;
            if(!var26) { _fun0003_ip = 2523; continue _fun0003 }
 2520:
            var20 = var13;
 2523:
            var20 = var24.bind(var11)(var20);
            var31 = var20.guild_id;
            var30 = var20.channel_id;
            var27 = var20.user_id;
            var26 = var20.via;
            var24 = var20.action;
            var20 = {};
            var34 = _closure1_slot7;
            var34 = var34.VOICE_CHANNEL;
            var20['type'] = var34;
            var20['guildId'] = var31;
            var20['channelId'] = var30;
            var20['userId'] = var27;
            var20['via'] = var26;
            var20['action'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2600:
            var20 = {};
            var24 = _closure1_slot7;
            var24 = var24.EDIT_PROFILE;
            var20['type'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2621:
            var24 = _closure1_slot21;
            var26 = var14 != var13;
            var20 = var1;
            if(!var26) { _fun0003_ip = 2638; continue _fun0003 }
 2635:
            var20 = var13;
 2638:
            var20 = var24.bind(var11)(var20);
            var24 = var20.user_id;
            var20 = {};
            var26 = _closure1_slot7;
            var26 = var26.FRIENDS;
            var20['type'] = var26;
            var20['userId'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2674:
            var20 = {};
            var24 = _closure1_slot7;
            var24 = var24.ADD_FRIENDS;
            var20['type'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2695:
            var20 = {};
            var24 = _closure1_slot7;
            var24 = var24.CONTACT_SYNC;
            var20['type'] = var24;
            var23 = var20;
            _fun0003_ip = 2735; continue _fun0003;
 2716:
            var20 = {};
            var24 = _closure1_slot7;
            var24 = var24.COMPOSE_MESSAGE;
            var20['type'] = var24;
            var23 = var20;
 2735:
            if(!(var14 == var23)) { _fun0003_ip = 4057; continue _fun0003 }
 2742:
            var24 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var25];
            var24 = var24.bind(var11)(var20);
            var20 = var24.tryParseEventDetailsPath;
            var25 = var20.bind(var24)(var33);
            if(!(var14 == var25)) { _fun0003_ip = 3991; continue _fun0003 }
 2777:
            var24 = var33.match;
            var20 = _closure1_slot14;
            var20 = var24.bind(var33)(var20);
            if(!(var14 == var20)) { _fun0003_ip = 3658; continue _fun0003 }
 2799:
            var24 = var33.match;
            var20 = _closure1_slot15;
            var24 = var24.bind(var33)(var20);
            if(!(var14 == var24)) { _fun0003_ip = 3556; continue _fun0003 }
 2821:
            var26 = var33.match;
            var20 = _closure1_slot16;
            var27 = var26.bind(var33)(var20);
            if(!(var14 == var27)) { _fun0003_ip = 3452; continue _fun0003 }
 2843:
            var26 = var33.match;
            var20 = _closure1_slot17;
            var26 = var26.bind(var33)(var20);
            if(!(var14 == var26)) { _fun0003_ip = 3323; continue _fun0003 }
 2865:
            var30 = var33.match;
            var20 = _closure1_slot18;
            var30 = var30.bind(var33)(var20);
            if(!(var14 == var30)) { _fun0003_ip = 3169; continue _fun0003 }
 2887:
            var31 = var33.match;
            var20 = _closure1_slot19;
            var20 = var31.bind(var33)(var20);
            if(!(var14 == var20)) { _fun0003_ip = 3088; continue _fun0003 }
 2909:
            var31 = var14 == var29;
            var20 = undefined;
            if(var31) { _fun0003_ip = 2933; continue _fun0003 }
 2918:
            var33 = var29.match;
            var31 = _closure1_slot13;
            var20 = var33.bind(var29)(var31);
 2933:
            if(!(var14 == var20)) { _fun0003_ip = 3046; continue _fun0003 }
 2937:
            var20 = _closure1_slot8;
            var31 = var14 == var20;
            var20 = undefined;
            if(var31) { _fun0003_ip = 2965; continue _fun0003 }
 2950:
            var31 = _closure1_slot8;
            var31 = var31.url;
            var20 = var31.host;
 2965:
            if(!(var29 !== var20)) { _fun0003_ip = 3004; continue _fun0003 }
 2969:
            var20 = {};
            var20['fingerprint'] = var2;
            var20['attemptId'] = var4;
            var29 = {};
            var31 = _closure1_slot7;
            var31 = var31.NONE;
            var29['type'] = var31;
            var20['payload'] = var29;
            _fun0003_ip = 3044; continue _fun0003;
 3004:
            var29 = {};
            var29['fingerprint'] = var2;
            var29['attemptId'] = var4;
            var31 = {};
            var33 = _closure1_slot7;
            var33 = var33.MOBILE_NATIVE_UPDATE;
            var31['type'] = var33;
            var31['url'] = var32;
            var29['payload'] = var31;
            var20 = var29;
 3044:
            _fun0003_ip = 3086; continue _fun0003;
 3046:
            var29 = {};
            var29['fingerprint'] = var2;
            var29['attemptId'] = var4;
            var31 = {};
            var33 = _closure1_slot7;
            var33 = var33.PROMOTIONS;
            var31['type'] = var33;
            var31['url'] = var32;
            var29['payload'] = var31;
            var20 = var29;
 3086:
            return var20;
 3088:
            var29 = _closure1_slot21;
            var20 = global;
            var31 = var20.decodeURIComponent;
            var32 = var14 != var13;
            var20 = var1;
            if(!var32) { _fun0003_ip = 3113; continue _fun0003 }
 3110:
            var20 = var13;
 3113:
            var20 = var31.bind(var11)(var20);
            var20 = var29.bind(var11)(var20);
            var31 = var20.user_code;
            var20 = {};
            var20['fingerprint'] = var2;
            var20['attemptId'] = var4;
            var29 = {};
            var32 = _closure1_slot7;
            var32 = var32.ACTIVATE_DEVICE;
            var29['type'] = var32;
            var29['userCode'] = var31;
            var20['payload'] = var29;
            return var20;
 3169:
            var29 = _closure1_slot3;
            var20 = 3;
            var29 = var29.bind(var11)(var30, var20);
            var20 = 1;
            var37 = var29[var20];
            var20 = 2;
            var33 = var29[var20];
            var29 = _closure1_slot21;
            var30 = var14 != var13;
            var20 = var1;
            if(!var30) { _fun0003_ip = 3213; continue _fun0003 }
 3210:
            var20 = var13;
 3213:
            var20 = var29.bind(var11)(var20);
            var30 = var20.feature;
            var20 = {};
            var20['fingerprint'] = var2;
            var20['attemptId'] = var4;
            var29 = {};
            var31 = _closure1_slot7;
            var31 = var31.GUILD_SETTINGS_PICKER;
            var29['type'] = var31;
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var31 = 17;
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
            var29['feature'] = var30;
            var20['payload'] = var29;
            return var20;
 3323:
            var20 = _closure1_slot3;
            var26 = var20.bind(var11)(var26, var28);
            var20 = 1;
            var28 = var26[var20];
            var20 = 2;
            var34 = var26[var20];
            var20 = 3;
            var30 = var26[var20];
            var20 = {};
            var20['fingerprint'] = var2;
            var20['attemptId'] = var4;
            var26 = {};
            var29 = _closure1_slot7;
            var29 = var29.GUILD_SETTINGS;
            var26['type'] = var29;
            var26['guildId'] = var28;
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var28 = 17;
            var32 = var31[var28];
            var33 = var29.bind(var11)(var32);
            var32 = _closure1_slot5;
            var32 = var33.bind(var11)(var32, var34);
            var26['settingsSection'] = var32;
            var28 = var31[var28];
            var29 = var29.bind(var11)(var28);
            var28 = _closure1_slot6;
            var28 = var29.bind(var11)(var28, var30);
            var26['settingsSubsection'] = var28;
            var20['payload'] = var26;
            return var20;
 3452:
            var26 = _closure1_slot3;
            var20 = 2;
            var26 = var26.bind(var11)(var27, var20);
            var20 = var26[var8];
            var20 = 1;
            var28 = var26[var20];
            var26 = _closure1_slot21;
            var20 = global;
            var27 = var20.decodeURIComponent;
            var29 = var14 != var13;
            var20 = var1;
            if(!var29) { _fun0003_ip = 3501; continue _fun0003 }
 3498:
            var20 = var13;
 3501:
            var20 = var27.bind(var11)(var20);
            var27 = var26.bind(var11)(var20);
            var20 = {};
            var20['fingerprint'] = var2;
            var20['attemptId'] = var4;
            var26 = {};
            var29 = _closure1_slot7;
            var29 = var29.USER_CONNECTIONS_CALLBACK;
            var26['type'] = var29;
            var26['provider'] = var28;
            var26['searchParams'] = var27;
            var20['payload'] = var26;
            return var20;
 3556:
            var26 = _closure1_slot21;
            var20 = global;
            var27 = var20.decodeURIComponent;
            var28 = var14 != var13;
            var20 = var1;
            if(!var28) { _fun0003_ip = 3581; continue _fun0003 }
 3578:
            var20 = var13;
 3581:
            var20 = var27.bind(var11)(var20);
            var20 = var26.bind(var11)(var20);
            var27 = var20.code;
            var26 = var20.state;
            var20 = 1;
            var28 = var24[var20];
            var20 = {};
            var20['fingerprint'] = var2;
            var20['attemptId'] = var4;
            var24 = {};
            var29 = _closure1_slot7;
            var29 = var29.USER_CONNECTIONS_LINK_CALLBACK;
            var24['type'] = var29;
            var24['provider'] = var28;
            var24['callbackCode'] = var27;
            var24['callbackState'] = var26;
            var20['payload'] = var24;
            return var20;
 3658:
            var26 = _closure1_slot21;
            var20 = global;
            var24 = var20.decodeURIComponent;
            var24 = var24.bind(var11)(var13);
            var24 = var26.bind(var11)(var24);
            var28 = var24.key;
            var29 = var24.redirect;
            var30 = var24.fingerprint;
            if(!(var14 != var28)) { _fun0003_ip = 3863; continue _fun0003 }
 3704:
            if(!(var14 != var29)) { _fun0003_ip = 3863; continue _fun0003 }
 3711:
            var27 = var20.URL;
            var24 = var20.location;
            var31 = var24.protocol;
            var24 = var20.window;
            var24 = var24.GLOBAL_ENV;
            var26 = var24.WEBAPP_ENDPOINT;
            var24 = var20.HermesInternal;
            var24 = var24.concat;
            var39 = var24.bind(var1)(var31, var26);
            var26 = var27.prototype;
            var26 = Object.create(var26, {constructor: {value: var27}});
            var41 = var26;
            var40 = var29;
            var24 = new var41[var27](var40, var39, var38);
            var27 = var24 instanceof Object ? var24 : var26;
            if(!(var14 != var30)) { _fun0003_ip = 3813; continue _fun0003 }
 3791:
            var29 = var27.searchParams;
            var26 = var29.append;
            var24 = 'fingerprint';
            var24 = var26.bind(var29)(var24, var30);
 3813:
            var24 = {};
            var24['fingerprint'] = var30;
            var24['attemptId'] = var4;
            var26 = {};
            var29 = _closure1_slot7;
            var29 = var29.MOBILE_WEB_HANDOFF;
            var26['type'] = var29;
            var26['nonce'] = var28;
            var26['redirectUrl'] = var27;
            var26['fingerprint'] = var30;
            var24['payload'] = var26;
            return var24;
 3863:
            var26 = _closure1_slot1;
            var32 = _closure1_slot2;
            var24 = 15;
            var24 = var32[var24];
            var29 = var26.bind(var11)(var24);
            var28 = var29.track;
            var24 = _closure1_slot4;
            var27 = var24.MOBILE_WEB_HANDOFF_FAILURE;
            var26 = {};
            var24 = 'invalid_query_params';
            var26['reason'] = var24;
            var31 = _closure1_slot0;
            var24 = 16;
            var24 = var32[var24];
            var31 = var31.bind(var11)(var24);
            var24 = var31.maybeExtractId;
            var24 = var24.bind(var31)(var30);
            var26['fingerprint'] = var24;
            var24 = {};
            var24['fingerprint'] = var30;
            var24 = var28.bind(var29)(var27, var26, var24);
            var26 = var20.Error;
            var20 = var26.prototype;
            var24 = Object.create(var20, {constructor: {value: var26}});
            var40 = 'Missing nonce or redirect query params';
            var41 = var24;
            var20 = new var41[var26](var40, var39);
            var20 = var20 instanceof Object ? var20 : var24;
            throw var20;
 3991:
            var20 = {};
            var20['fingerprint'] = var2;
            var20['attemptId'] = var4;
            var24 = {};
            var26 = _closure1_slot7;
            var26 = var26.GUILD_EVENT_DETAILS;
            var24['type'] = var26;
            var26 = var25.guildEventId;
            var24['guildEventId'] = var26;
            var26 = var25.guildId;
            var24['guildId'] = var26;
            var25 = var25.recurrenceId;
            var24['recurrenceId'] = var25;
            var20['payload'] = var24;
            return var20;
 4057:
            var20 = {};
            var20['fingerprint'] = var2;
            var20['attemptId'] = var4;
            var20['payload'] = var23;
            return var20;
 4076:
            var20 = var15[var7];
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var23 = _closure1_slot7;
            var23 = var23.BOOST_MARKETING;
            var15['type'] = var23;
            var15['guildId'] = var20;
            var7['payload'] = var15;
            return var7;
 4119:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var20 = _closure1_slot7;
            var20 = var20.OAUTH2_AUTHORIZE;
            var15['type'] = var20;
            var20 = {};
            var40 = var20;
            var39 = var21;
            var21 = copyDataProperties(var40, var39);
            var21 = 'wasDeepLink';
            var20[var21] = var22;
            var15['props'] = var20;
            var7['payload'] = var15;
            return var7;
 4179:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var20 = _closure1_slot7;
            var20 = var20.USER_PROFILE;
            var15['type'] = var20;
            var18 = var19[var18];
            var15['userId'] = var18;
            var7['payload'] = var15;
            return var7;
 4222:
            var7 = {};
            var7['fingerprint'] = var2;
            var7['attemptId'] = var4;
            var15 = {};
            var18 = _closure1_slot7;
            var18 = var18.QUESTS;
            var15['type'] = var18;
            var16 = var17[var16];
            var15['questId'] = var16;
            var7['payload'] = var15;
            return var7;
 4266:
            var7 = _closure1_slot21;
            var15 = var14 != var13;
            if(!var15) { _fun0003_ip = 4280; continue _fun0003 }
 4277:
            var1 = var13;
 4280:
            var1 = var7.bind(var11)(var1);
            var11 = var1.summaryId;
            var1 = {};
            var1['fingerprint'] = var2;
            var1['attemptId'] = var4;
            var7 = {};
            var13 = var12.messageId;
            if(!(var14 == var13)) { _fun0003_ip = 4326; continue _fun0003 }
 4314:
            var13 = _closure1_slot7;
            var13 = var13.CHANNEL;
            _fun0003_ip = 4336; continue _fun0003;
 4326:
            var14 = _closure1_slot7;
            var13 = var14.MESSAGE;
 4336:
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
 4379:
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
 4419:
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
 4463:
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
 4508:
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
 4553:
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
 4607:
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