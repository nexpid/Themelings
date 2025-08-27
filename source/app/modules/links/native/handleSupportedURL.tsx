// app/modules/links/native/handleSupportedURL.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = ['code', 'state'];
    var _closure1_slot4 = var1;
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
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.addPostConnectionCallback;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.handleApplePaymentLinkStatus;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var7 = var4.LinkingTypes;
    var _closure1_slot12 = var7;
    var7 = var4.Routes;
    var _closure1_slot13 = var7;
    var7 = var4.UserSettingsSections;
    var _closure1_slot14 = var7;
    var4 = var4.PlatformTypes;
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot16 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StreamTypes;
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MobileSetting;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot19 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OAUTH2_AUTHORIZE_MODAL_KEY;
    var _closure1_slot20 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAMILY_CENTER_LINK_REQUEST_REGEX;
    var _closure1_slot21 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplePaymentLinkDeepLinkActions;
    var _closure1_slot22 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SHARE_SCREEN_MODAL_KEY;
    var _closure1_slot23 = var4;
    var4 = 70;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/native/handleSupportedURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleSupportedURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = function _handleSupportedURL(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.payload;
                    var _closure3_slot0 = var7;
                    var10 = var1.safe;
                    var9 = var1.navigationReplace;
                    var3 = undefined;
                    var _closure3_slot1 = var3;
                    var _closure3_slot2 = var3;
                    var _closure3_slot3 = var3;
                    var _closure3_slot4 = var3;
                    var _closure3_slot5 = var3;
                    var _closure3_slot6 = var3;
                    var _closure3_slot7 = var3;
                    var _closure3_slot8 = var3;
                    var _closure3_slot9 = var3;
                    var _closure3_slot10 = var3;
                    var5 = var7.type;
                    var4 = _closure1_slot12;
                    var4 = var4.CONTACT_SYNC;
                    if(!(var4 !== var5)) { _fun0002_ip = 3198; continue _fun0002 }
 94:
                    var4 = _closure1_slot12;
                    var4 = var4.COMPOSE_MESSAGE;
                    if(!(var4 !== var5)) { _fun0002_ip = 3085; continue _fun0002 }
 111:
                    var4 = _closure1_slot12;
                    var4 = var4.ADD_FRIENDS;
                    if(!(var4 !== var5)) { _fun0002_ip = 2907; continue _fun0002 }
 128:
                    var4 = _closure1_slot12;
                    var4 = var4.FRIENDS;
                    if(!(var4 !== var5)) { _fun0002_ip = 2742; continue _fun0002 }
 145:
                    var4 = _closure1_slot12;
                    var4 = var4.EDIT_PROFILE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2724; continue _fun0002 }
 162:
                    var4 = _closure1_slot12;
                    var4 = var4.INVITE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2602; continue _fun0002 }
 179:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_TEMPLATE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2574; continue _fun0002 }
 196:
                    var4 = _closure1_slot12;
                    var4 = var4.GIFT_CODE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2493; continue _fun0002 }
 213:
                    var4 = _closure1_slot12;
                    var4 = var4.CHANNEL;
                    if(!(var4 !== var5)) { _fun0002_ip = 2368; continue _fun0002 }
 230:
                    var4 = _closure1_slot12;
                    var4 = var4.MESSAGE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2368; continue _fun0002 }
 247:
                    var4 = _closure1_slot12;
                    var4 = var4.SESSION_MANAGEMENT;
                    if(!(var4 !== var5)) { _fun0002_ip = 2350; continue _fun0002 }
 264:
                    var4 = _closure1_slot12;
                    var4 = var4.FAMILY_CENTER;
                    if(!(var4 !== var5)) { _fun0002_ip = 2302; continue _fun0002 }
 281:
                    var4 = _closure1_slot12;
                    var4 = var4.OAUTH2_AUTHORIZE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2284; continue _fun0002 }
 298:
                    var4 = _closure1_slot12;
                    var4 = var4.REMOTE_AUTH;
                    if(!(var4 !== var5)) { _fun0002_ip = 2196; continue _fun0002 }
 315:
                    var4 = _closure1_slot12;
                    var4 = var4.PROMOTIONS;
                    if(!(var4 !== var5)) { _fun0002_ip = 2156; continue _fun0002 }
 332:
                    var4 = _closure1_slot12;
                    var4 = var4.FEATURE_PROMO_URL;
                    if(!(var4 !== var5)) { _fun0002_ip = 2115; continue _fun0002 }
 349:
                    var4 = _closure1_slot12;
                    var4 = var4.USER_PROFILE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2058; continue _fun0002 }
 366:
                    var4 = _closure1_slot12;
                    var4 = var4.BUILD_OVERRIDE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1956; continue _fun0002 }
 383:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_EVENT_DETAILS;
                    if(!(var4 !== var5)) { _fun0002_ip = 1929; continue _fun0002 }
 400:
                    var4 = _closure1_slot12;
                    var4 = var4.MOBILE_WEB_HANDOFF;
                    if(!(var4 !== var5)) { _fun0002_ip = 1852; continue _fun0002 }
 417:
                    var4 = _closure1_slot12;
                    var4 = var4.VOICE_CHANNEL;
                    if(!(var4 !== var5)) { _fun0002_ip = 1825; continue _fun0002 }
 434:
                    var4 = _closure1_slot12;
                    var4 = var4.ICYMI;
                    if(!(var4 !== var5)) { _fun0002_ip = 1807; continue _fun0002 }
 451:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_HOME;
                    if(!(var4 !== var5)) { _fun0002_ip = 1631; continue _fun0002 }
 468:
                    var4 = _closure1_slot12;
                    var4 = var4.USER_CONNECTIONS_LINK_CALLBACK;
                    if(!(var4 !== var5)) { _fun0002_ip = 1613; continue _fun0002 }
 485:
                    var4 = _closure1_slot12;
                    var4 = var4.USER_CONNECTIONS_CALLBACK;
                    if(!(var4 !== var5)) { _fun0002_ip = 1586; continue _fun0002 }
 502:
                    var4 = _closure1_slot12;
                    var4 = var4.CONNECTIONS;
                    if(!(var4 !== var5)) { _fun0002_ip = 1568; continue _fun0002 }
 519:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_SETTINGS;
                    if(!(var4 !== var5)) { _fun0002_ip = 1550; continue _fun0002 }
 536:
                    var4 = _closure1_slot12;
                    var4 = var4.ACTIVATE_DEVICE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1509; continue _fun0002 }
 553:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_SETTINGS_PICKER;
                    if(!(var4 !== var5)) { _fun0002_ip = 1491; continue _fun0002 }
 570:
                    var4 = _closure1_slot12;
                    var4 = var4.SHARE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1302; continue _fun0002 }
 587:
                    var4 = _closure1_slot12;
                    var4 = var4.CREATE_VOICE_INVITE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1284; continue _fun0002 }
 604:
                    var4 = _closure1_slot12;
                    var4 = var4.SEND_VOICE_HANGOUT_WAVE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1284; continue _fun0002 }
 621:
                    var4 = _closure1_slot12;
                    var4 = var4.ACCOUNT_STANDING;
                    if(!(var4 !== var5)) { _fun0002_ip = 1266; continue _fun0002 }
 638:
                    var4 = _closure1_slot12;
                    var4 = var4.MOBILE_NATIVE_UPDATE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1226; continue _fun0002 }
 655:
                    var4 = _closure1_slot12;
                    var4 = var4.APPLE_PAYMENT_LINK;
                    if(!(var4 !== var5)) { _fun0002_ip = 1198; continue _fun0002 }
 672:
                    var4 = _closure1_slot12;
                    var4 = var4.SHOP;
                    if(!(var4 !== var5)) { _fun0002_ip = 1180; continue _fun0002 }
 689:
                    var4 = _closure1_slot12;
                    var4 = var4.AUTHORIZED_APPS;
                    if(!(var4 !== var5)) { _fun0002_ip = 1162; continue _fun0002 }
 706:
                    var4 = _closure1_slot12;
                    var4 = var4.DAVE_PROTOCOL_VERIFICATION;
                    if(!(var4 !== var5)) { _fun0002_ip = 1144; continue _fun0002 }
 723:
                    var4 = _closure1_slot12;
                    var4 = var4.QUESTS;
                    if(!(var4 !== var5)) { _fun0002_ip = 1126; continue _fun0002 }
 740:
                    var4 = _closure1_slot12;
                    var4 = var4.GIFT;
                    if(!(var4 !== var5)) { _fun0002_ip = 1108; continue _fun0002 }
 757:
                    var4 = _closure1_slot12;
                    var4 = var4.NITRO_HOME;
                    if(!(var4 !== var5)) { _fun0002_ip = 1090; continue _fun0002 }
 774:
                    var4 = _closure1_slot12;
                    var4 = var4.ACTIVITY;
                    if(!(var4 !== var5)) { _fun0002_ip = 1031; continue _fun0002 }
 791:
                    var4 = _closure1_slot12;
                    var4 = var4.CONNECTED_GAMES;
                    if(!(var4 !== var5)) { _fun0002_ip = 873; continue _fun0002 }
 805:
                    var4 = _closure1_slot12;
                    var4 = var4.BOOST_MARKETING;
                    if(!(var4 !== var5)) { _fun0002_ip = 855; continue _fun0002 }
 819:
                    var4 = _closure1_slot12;
                    var4 = var4.BOOST_SETTINGS;
                    if(!(var4 !== var5)) { _fun0002_ip = 837; continue _fun0002 }
 833:
                    var4 = false;
                    return var4;
 837:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 16;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 20;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.GUILD_BOOSTING;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 855:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 68;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openApplyBoostModal;
                        var2 = _closure3_slot0;
                        var2 = var2.guildId;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 873:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 16;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 17;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getRootNavigationRef;
                    var8 = var4.bind(var5)();
                    _closure3_slot9 = var8;
                    var4 = null;
                    if(!(var4 != var8)) { _fun0002_ip = 1027; continue _fun0002 }
 939:
                    var6 = {};
                    var4 = _closure1_slot14;
                    var4 = var4.CONTENT_AND_SOCIAL;
                    var6['screen'] = var4;
                    var4 = {};
                    var5 = _closure1_slot18;
                    var5 = var5.CONNECTED_GAMES;
                    var4['tab'] = var5;
                    var6['params'] = var4;
                    _closure3_slot10 = var6;
                    var4 = var8.isReady;
                    var4 = var4.bind(var8)();
                    if(var4) { _fun0002_ip = 1011; continue _fun0002 }
 995:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var4 = _closure3_slot9;
                        var3 = var4.navigate;
                        var2 = _closure3_slot10;
                        var1 = 'settings';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    _fun0002_ip = 1027; continue _fun0002;
 1011:
                    var5 = var8.navigate;
                    var4 = 'settings';
                    var4 = var5.bind(var8)(var4, var6);
 1027:
                    var4 = true;
                    return var4;
 1031:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 67;
                    var4 = var6[var4];
                    var12 = var5.bind(var3)(var4);
                    var18 = var7.applicationId;
                    var17 = var7.referrerId;
                    var16 = var7.customId;
                    var15 = var7.linkId;
                    var14 = var7.isDeepLink;
                    var19 = undefined;
                    var4 = var19[var12](var18, var17, var16, var15, var14, var13);
                    var4 = true;
                    return var4;
 1090:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.PREMIUM;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1108:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 65;
                        var2 = var7[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openGiftModal;
                        var2 = {};
                        var6 = _closure1_slot1;
                        var5 = 66;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var6 = var5.DEEPLINK;
                        var5 = new Array(1);
                        var5[0] = var6;
                        var2['analyticsLocations'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1126:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 62;
                        var2 = var4[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var6 = var7.trackQuestEvent;
                        var2 = {};
                        var5 = _closure3_slot0;
                        var9 = var5.questId;
                        var2['questId'] = var9;
                        var8 = _closure1_slot11;
                        var8 = var8.QUEST_SHARE_LINK_DEEP_LINKED_INTO_MOBILE_CLIENT;
                        var2['event'] = var8;
                        var8 = 63;
                        var8 = var4[var8];
                        var8 = var3.bind(var1)(var8);
                        var8 = var8.QuestContent;
                        var8 = var8.QUEST_EMBED_MOBILE;
                        var2['sourceQuestContent'] = var8;
                        var8 = {};
                        var9 = var5.referrerId;
                        var8['referrer_id'] = var9;
                        var2['properties'] = var8;
                        var2 = var6.bind(var7)(var2);
                        var2 = 64;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openQuestHome;
                        var2 = {};
                        var5 = var5.questId;
                        var2['scrollToQuestId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1144:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 61;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleSecureFramesUserVerificationLink;
                        var2 = {};
                        var5 = _closure3_slot0;
                        var6 = var5.userId;
                        var2['userId'] = var6;
                        var8 = var5.fingerprint;
                        var7 = var8.replaceAll;
                        var6 = ' ';
                        var5 = '+';
                        var5 = var7.bind(var8)(var6, var5);
                        var2['fingerprint'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1162:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 16;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 20;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.AUTHORIZED_APPS;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1180:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.COLLECTIBLES_SHOP;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1198:
                    var4 = var7.deepLinkAction;
                    _closure3_slot8 = var4;
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var4 = _closure3_slot8;
                            var3 = _closure1_slot22;
                            var3 = var3.PREMIUM_CHECKOUT_SUCCESS;
                            if(!(var4 !== var3)) { _fun0003_ip = 76; continue _fun0003 }
 24:
                            var3 = _closure3_slot8;
                            var2 = _closure1_slot22;
                            var2 = var2.PREMIUM_SUBSCRIPTION_UPDATE;
                            if(!(var3 === var2)) { _fun0003_ip = 93; continue _fun0003 }
 42:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 60;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.fetchSubscriptions;
                            var2 = var2.bind(var3)();
                            _fun0003_ip = 93; continue _fun0003;
 76:
                            var3 = _closure1_slot9;
                            var2 = undefined;
                            var1 = 'succeeded';
                            var1 = var3.bind(var2)(var1);
 93:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1226:
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var4 = 59;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.openBuildInstallerUrl;
                    var4 = var7.url;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
 1266:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 16;
                        var2 = var7[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var6 = _closure1_slot0;
                        var2 = 20;
                        var2 = var7[var2];
                        var4 = var6.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.ACCOUNT;
                        var2['screen'] = var5;
                        var5 = 58;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.AccountSettingsTabs;
                        var5 = var5.STANDING;
                        var2['subsection'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1284:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 57;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.showInstantInviteActionSheetForChannel;
                        var2 = _closure3_slot0;
                        var2 = var2.channelId;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1302:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 55;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isIOS;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0002_ip = 1487; continue _fun0002 }
 1338:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 16;
                    var8 = var4[var5];
                    var11 = var6.bind(var3)(var8);
                    var8 = var11.popAll;
                    var8 = var8.bind(var11)();
                    var5 = var4[var5];
                    var12 = var6.bind(var3)(var5);
                    var11 = var12.pushLazy;
                    var6 = _closure1_slot0;
                    var5 = 27;
                    var5 = var4[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = 56;
                    var5 = var4[var5];
                    var4 = var4.paths;
                    var18 = var6.bind(var3)(var5, var4);
                    var6 = {};
                    var4 = var7.text;
                    var6['text'] = var4;
                    var4 = var7.channelId;
                    var6['channelId'] = var4;
                    var4 = var7.shareId;
                    var6['shareId'] = var4;
                    var4 = var7.attachmentManifest;
                    var6['attachmentManifest'] = var4;
                    var16 = _closure1_slot23;
                    var4 = {};
                    var13 = 'modal';
                    var4['presentation'] = var13;
                    var19 = var12;
                    var17 = var6;
                    var15 = var4;
                    var4 = var19[var11](var18, var17, var16, var15, var14);
 1487:
                    var4 = true;
                    return var4;
 1491:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 54;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openGuildSettingsPickerModal;
                        var2 = {};
                        var5 = _closure3_slot0;
                        var6 = var5.settingsSection;
                        var2['section'] = var6;
                        var6 = var5.settingsSubsection;
                        var2['subsection'] = var6;
                        var5 = var5.feature;
                        var2['feature'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1509:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 53;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showModal;
                    var4 = var7.userCode;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
 1550:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = _closure3_slot0;
                            var3 = var2.guildId;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0004_ip = 79; continue _fun0004 }
 18:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 52;
                            var2 = var4[var2];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var2);
                            var4 = var5.open;
                            var1 = _closure3_slot0;
                            var10 = var1.guildId;
                            var9 = var1.settingsSection;
                            var7 = var1.settingsSubsection;
                            var11 = var5;
                            var8 = undefined;
                            var1 = var11[var4](var10, var9, var8, var7, var6);
 79:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1568:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 16;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 20;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.CONNECTIONS;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1586:
                    var5 = _closure1_slot7;
                    var6 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0005_ip = 371; continue _fun0005 }
 10:
                                var2 = _closure3_slot0;
                                var8 = var2.provider;
                                var15 = var2.searchParams;
                                var9 = var15.code;
                                var6 = var15.state;
                                var5 = _closure1_slot5;
                                var2 = _closure1_slot4;
                                var3 = undefined;
                                var2 = var5.bind(var3)(var15, var2);
                                var5 = null;
                                if(!(var5 != var6)) { _fun0005_ip = 365; continue _fun0005 }
 67:
                                var7 = {};
                                var7['code'] = var9;
                                var7['state'] = var6;
                                var13 = var2;
                                var9 = 'openid.';
                                var6 = undefined;
                                var2 = undefined;
                                for(var10 in var13)
 98:
                                {
                                    var16 = var6;
                                    var2 = var16;
 113:
                                    var17 = var10;
                                    var18 = var17.startsWith;
                                    var18 = var18.bind(var17)(var9);
                                    var6 = var16;
                                    if(!var18) { _fun0005_ip = 98; continue _fun0005 }
 133:
                                    var6 = var16;
                                    if(!(var5 == var16)) { _fun0005_ip = 142; continue _fun0005 }
 140:
                                    var6 = {};
 142:
                                    var16 = var15[var17];
                                    var6[var17] = var16;
                                    _fun0005_ip = 98; continue _fun0005;
                                }
 152:
                                if(!(var5 != var2)) { _fun0005_ip = 162; continue _fun0005 }
 156:
                                var7['openid_params'] = var2;
 162:
                                var6 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var2 = 16;
                                var2 = var9[var2];
                                var10 = var6.bind(var3)(var2);
                                var2 = var10.popAll;
                                var2 = var2.bind(var10)();
                                var10 = _closure1_slot0;
                                var2 = 20;
                                var2 = var9[var2];
                                var11 = var10.bind(var3)(var2);
                                var10 = var11.openUserSettings;
                                var2 = {};
                                var12 = _closure1_slot14;
                                var12 = var12.CONNECTIONS;
                                var2['screen'] = var12;
                                var2 = var10.bind(var11)(var2);
                                var2 = 50;
                                var2 = var9[var2];
                                var6 = var6.bind(var3)(var2);
                                var2 = var6.callback;
                                var2 = var2.bind(var6)(var8, var7);
                                SaveGenerator(address=264);
 262:
                                return var2;
 264:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(var6) { _fun0005_ip = 368; continue _fun0005 }
 270:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var6 = 51;
                                var6 = var8[var6];
                                var8 = var7.bind(var3)(var6);
                                var7 = var8.toURLSafe;
                                var9 = var2.body;
                                var10 = var5 == var9;
                                var6 = undefined;
                                if(var10) { _fun0005_ip = 316; continue _fun0005 }
 310:
                                var6 = var9.redirect;
 316:
                                var7 = var7.bind(var8)(var6);
                                if(!(var5 != var7)) { _fun0005_ip = 365; continue _fun0005 }
 325:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var4 = 37;
                                var4 = var6[var4];
                                var6 = var5.bind(var3)(var4);
                                var5 = var6.openURL;
                                var4 = var7.toString;
                                var4 = var4.bind(var7)();
                                var4 = var5.bind(var6)(var4);
 365:
                                return var3;
 368:
                                return var2;
 371:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var6.bind(var3)(var4);
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1613:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = _closure3_slot0;
                            var1 = var1.callbackCode;
                            var3 = null;
                            var1 = var3 != var1;
                            if(!var1) { _fun0006_ip = 36; continue _fun0006 }
 22:
                            var2 = _closure3_slot0;
                            var2 = var2.callbackState;
                            var1 = var3 != var2;
 36:
                            if(!var1) { _fun0006_ip = 53; continue _fun0006 }
 39:
                            var2 = _closure3_slot0;
                            var2 = var2.provider;
                            var1 = var3 != var2;
 53:
                            if(!var1) { _fun0006_ip = 127; continue _fun0006 }
 56:
                            var2 = _closure1_slot15;
                            var3 = var2.XBOX;
                            var5 = new Array(4);
                            var5[0] = var3;
                            var3 = var2.PLAYSTATION;
                            var5[1] = var3;
                            var3 = var2.PLAYSTATION_STAGING;
                            var5[2] = var3;
                            var2 = var2.CRUNCHYROLL;
                            var5[3] = var2;
                            var3 = var5.includes;
                            var2 = _closure3_slot0;
                            var2 = var2.provider;
                            var1 = var3.bind(var5)(var2);
 127:
                            if(!var1) { _fun0006_ip = 212; continue _fun0006 }
 130:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 49;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var5 = 'USER_CONNECTIONS_LINK_CALLBACK';
                            var1['type'] = var5;
                            var4 = _closure3_slot0;
                            var5 = var4.provider;
                            var1['provider'] = var5;
                            var5 = var4.callbackCode;
                            var1['callbackCode'] = var5;
                            var4 = var4.callbackState;
                            var1['callbackState'] = var4;
                            var1 = var2.bind(var3)(var1);
 212:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1631:
                    var4 = var7.guildId;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0002_ip = 1803; continue _fun0002 }
 1645:
                    var4 = var7.highlightChannelId;
                    var4 = var5 != var4;
                    var8 = undefined;
                    if(!var4) { _fun0002_ip = 1740; continue _fun0002 }
 1660:
                    var4 = var7.highlightMessageId;
                    var4 = var5 != var4;
                    var8 = undefined;
                    if(!var4) { _fun0002_ip = 1740; continue _fun0002 }
 1675:
                    var4 = {};
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 47;
                    var5 = var11[var5];
                    var11 = var6.bind(var3)(var5);
                    var6 = var11.stringify;
                    var5 = {};
                    var12 = var7.highlightChannelId;
                    var5['highlight_channel_id'] = var12;
                    var12 = var7.highlightMessageId;
                    var5['highlight_message_id'] = var12;
                    var5 = var6.bind(var11)(var5);
                    var4['search'] = var5;
                    var8 = var4;
 1740:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 48;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.transitionTo;
                    var13 = _closure1_slot13;
                    var12 = var13.CHANNEL;
                    var11 = var7.guildId;
                    var4 = _closure1_slot16;
                    var4 = var4.GUILD_HOME;
                    var4 = var12.bind(var13)(var11, var4);
                    var4 = var5.bind(var6)(var4, var8);
 1803:
                    var4 = true;
                    return var4;
 1807:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 46;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.navigateToRootTab;
                        var2 = {};
                        var5 = 'icymi';
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1825:
                    var5 = _closure1_slot7;
                    var6 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0007_ip = 376; continue _fun0007 }
 10:
                                var2 = _closure3_slot0;
                                var2 = var2.guildId;
                                var5 = null;
                                var2 = var5 != var2;
                                if(!var2) { _fun0007_ip = 44; continue _fun0007 }
 31:
                                var3 = _closure3_slot0;
                                var3 = var3.channelId;
                                var2 = var5 != var3;
 44:
                                if(!var2) { _fun0007_ip = 60; continue _fun0007 }
 47:
                                var3 = _closure3_slot0;
                                var3 = var3.userId;
                                var2 = var5 != var3;
 60:
                                if(!var2) { _fun0007_ip = 290; continue _fun0007 }
 66:
                                var8 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var3 = 16;
                                var3 = var2[var3];
                                var6 = undefined;
                                var8 = var8.bind(var6)(var3);
                                var3 = var8.popAll;
                                var3 = var3.bind(var8)();
                                var8 = _closure1_slot0;
                                var3 = 27;
                                var3 = var2[var3];
                                var8 = var8.bind(var6)(var3);
                                var3 = 39;
                                var3 = var2[var3];
                                var2 = var2.paths;
                                var2 = var8.bind(var6)(var3, var2);
                                SaveGenerator(address=139);
 137:
                                return var2;
 139:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0007_ip = 373; continue _fun0007 }
 148:
                                var9 = var2.default;
                                var8 = var9.getGuild;
                                var3 = _closure3_slot0;
                                var3 = var3.guildId;
                                var3 = var8.bind(var9)(var3);
                                if(!(var5 != var3)) { _fun0007_ip = 216; continue _fun0007 }
 176:
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var3 = 40;
                                var3 = var8[var3];
                                var8 = var5.bind(var6)(var3);
                                var5 = var8.transitionToGuild;
                                var3 = _closure3_slot0;
                                var3 = var3.guildId;
                                var3 = var5.bind(var8)(var3);
 216:
                                var5 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var3 = 44;
                                var3 = var8[var3];
                                var5 = var5.bind(var6)(var3);
                                var3 = {};
                                var7 = _closure1_slot17;
                                var7 = var7.GUILD;
                                var3['streamType'] = var7;
                                var7 = _closure3_slot0;
                                var8 = var7.userId;
                                var3['ownerId'] = var8;
                                var8 = var7.guildId;
                                var3['guildId'] = var8;
                                var7 = var7.channelId;
                                var3['channelId'] = var7;
                                var3 = var5.bind(var6)(var3);
 290:
                                var3 = _closure3_slot0;
                                var5 = var3.action;
                                var3 = 'transfer_cancelled';
                                var3 = var3 === var5;
                                if(!var3) { _fun0007_ip = 330; continue _fun0007 }
 312:
                                var4 = _closure3_slot0;
                                var5 = var4.via;
                                var4 = 'xbox';
                                var3 = var4 === var5;
 330:
                                if(!var3) { _fun0007_ip = 368; continue _fun0007 }
 333:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 45;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.disconnectRemote;
                                var3 = var3.bind(var4)();
 368:
                                var3 = undefined;
                                return var3;
 373:
                                return var2;
 376:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var6.bind(var3)(var4);
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1852:
                    var12 = var7.nonce;
                    var5 = var7.redirectUrl;
                    var4 = var7.fingerprint;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var6 = 43;
                    var6 = var11[var6];
                    var11 = var8.bind(var3)(var6);
                    var8 = var11.redirectWithHandoffToken;
                    var6 = var5.href;
                    var5 = {};
                    var5['nonce'] = var12;
                    var5['fingerprint'] = var4;
                    var4 = true;
                    var5['skipLoginRedirect'] = var4;
                    var5 = var8.bind(var11)(var6, var5);
                    return var4;
 1929:
                    var5 = _closure1_slot7;
                    var6 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0008_ip = 287; continue _fun0008 }
 10:
                                var6 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var3 = 16;
                                var5 = var2[var3];
                                var3 = undefined;
                                var6 = var6.bind(var3)(var5);
                                var5 = var6.popAll;
                                var5 = var5.bind(var6)();
                                var5 = _closure3_slot0;
                                var10 = var5.guildId;
                                var9 = var5.guildEventId;
                                var6 = _closure1_slot0;
                                var5 = 27;
                                var5 = var2[var5];
                                var6 = var6.bind(var3)(var5);
                                var5 = 39;
                                var5 = var2[var5];
                                var2 = var2.paths;
                                var2 = var6.bind(var3)(var5, var2);
                                SaveGenerator(address=101);
 99:
                                return var2;
 101:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0008_ip = 284; continue _fun0008 }
 110:
                                var6 = var2.default;
                                var5 = var6.getGuild;
                                var6 = var5.bind(var6)(var10);
                                var5 = null;
                                if(!(var5 != var6)) { _fun0008_ip = 162; continue _fun0008 }
 131:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var6 = 40;
                                var6 = var8[var6];
                                var7 = var7.bind(var3)(var6);
                                var6 = var7.transitionToGuild;
                                var6 = var6.bind(var7)(var10);
 162:
                                var7 = _closure1_slot8;
                                var6 = var7.getGuildScheduledEvent;
                                var7 = var6.bind(var7)(var9);
                                if(!(var5 == var7)) { _fun0008_ip = 229; continue _fun0008 }
 181:
                                var8 = _closure1_slot1;
                                var11 = _closure1_slot3;
                                var6 = 41;
                                var6 = var11[var6];
                                var8 = var8.bind(var3)(var6);
                                var6 = var8.fetchGuildEvent;
                                var6 = var6.bind(var8)(var10, var9);
                                SaveGenerator(address=217);
 215:
                                return var6;
 217:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                var7 = var6;
                                if(!var8) { _fun0008_ip = 229; continue _fun0008 }
 226:
                                return var6;
 229:
                                if(!(var5 != var7)) { _fun0008_ip = 281; continue _fun0008 }
 233:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var4 = 42;
                                var4 = var6[var4];
                                var6 = var5.bind(var3)(var4);
                                var5 = var6.openGuildEventDetails;
                                var4 = {};
                                var8 = var7.id;
                                var4['eventId'] = var8;
                                var4['event'] = var7;
                                var4 = var5.bind(var6)(var4);
 281:
                                return var3;
 284:
                                return var2;
 287:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var6.bind(var3)(var4);
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1956:
                    var11 = var7.overrideUrl;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 16;
                    var8 = var4[var5];
                    var12 = var6.bind(var3)(var8);
                    var8 = var12.popAll;
                    var8 = var8.bind(var12)();
                    var5 = var4[var5];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.pushLazy;
                    var12 = _closure1_slot0;
                    var5 = 27;
                    var5 = var4[var5];
                    var12 = var12.bind(var3)(var5);
                    var5 = 38;
                    var5 = var4[var5];
                    var4 = var4.paths;
                    var5 = var12.bind(var3)(var5, var4);
                    var4 = {};
                    var4['overrideUrl'] = var11;
                    var4 = var6.bind(var8)(var5, var4);
                    var4 = true;
                    return var4;
 2058:
                    var5 = var7.userId;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 2111; continue _fun0002 }
 2069:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 19;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showUserProfileActionSheetPostConnection;
                    var4 = {};
                    var8 = var7.userId;
                    var4['userId'] = var8;
                    var4 = var5.bind(var6)(var4);
 2111:
                    var4 = true;
                    return var4;
 2115:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 37;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.openURLExternally;
                    var4 = var7.promoUrl;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
 2156:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 37;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.performURLNavigation;
                    var4 = var7.url;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
 2196:
                    var5 = var7.remoteAuthFingerprint;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 2280; continue _fun0002 }
 2208:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 35;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.requestPermission;
                    var4 = _closure1_slot19;
                    var4 = var4.CAMERA;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.then;
                    var4 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0009_ip = 86; continue _fun0009 }
 6:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var3 = 16;
                            var3 = var1[var3];
                            var6 = undefined;
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.pushLazy;
                            var5 = _closure1_slot0;
                            var2 = 27;
                            var2 = var1[var2];
                            var5 = var5.bind(var6)(var2);
                            var2 = 36;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var5.bind(var6)(var2, var1);
                            var1 = {};
                            var5 = true;
                            var1['showHelp'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
 86:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.catch;
                    var4 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
 2280:
                    var4 = true;
                    return var4;
 2284:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 16;
                            var3 = var5[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.popAll;
                            var3 = var3.bind(var4)();
                            var4 = _closure1_slot0;
                            var3 = 30;
                            var3 = var5[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.isMidjourneyOnboardingFlow;
                            var3 = 'create-guild-and-oauth2-modal-mobile';
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0010_ip = 150; continue _fun0010 }
 71:
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = 34;
                            var3 = var8[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.openOAuth2Modal;
                            var3 = {};
                            var6 = _closure3_slot0;
                            var9 = var6.props;
                            var10 = var3;
                            var6 = copyDataProperties(var10, var9);
                            var7 = _closure1_slot1;
                            var6 = 32;
                            var6 = var8[var6];
                            var7 = var7.bind(var1)(var6);
                            var6 = 'callback';
                            var3[var6] = var7;
                            var3 = var4.bind(var5)(var3);
                            _fun0010_ip = 188; continue _fun0010;
 150:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 33;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.openCreateGuildModal;
                            var2 = function(arg1) {
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var3 = 16;
                                var4 = var9[var3];
                                var1 = undefined;
                                var5 = var8.bind(var1)(var4);
                                var4 = var5.popAll;
                                var4 = var4.bind(var5)();
                                var3 = var9[var3];
                                var6 = var8.bind(var1)(var3);
                                var5 = var6.pushLazy;
                                var4 = _closure1_slot0;
                                var3 = 27;
                                var3 = var9[var3];
                                var7 = var4.bind(var1)(var3);
                                var3 = 31;
                                var4 = var9[var3];
                                var3 = var9.paths;
                                var4 = var7.bind(var1)(var4, var3);
                                var3 = {};
                                var7 = _closure3_slot0;
                                var12 = var7.props;
                                var13 = var3;
                                var7 = copyDataProperties(var13, var12);
                                var10 = arg1;
                                var7 = 'guildId';
                                var3[var7] = var10;
                                var7 = 32;
                                var7 = var9[var7];
                                var8 = var8.bind(var1)(var7);
                                var7 = 'callback';
                                var3[var7] = var8;
                                var8 = function dismissOAuthModal() {
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot3;
                                    var1 = 16;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.popWithKey;
                                    var2 = _closure1_slot20;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                };
                                var7 = 'dismissOAuthModal';
                                var3[var7] = var8;
                                var2 = _closure1_slot20;
                                var2 = var5.bind(var6)(var4, var3, var2);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
 188:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 2302:
                    var4 = null;
                    var5 = var7;
                    if(!(var4 == var5)) { _fun0002_ip = 2313; continue _fun0002 }
 2311:
                    var5 = {};
 2313:
                    var5 = var5.pathname;
                    var4 = null;
                    if(!(var3 !== var5)) { _fun0002_ip = 2328; continue _fun0002 }
 2325:
                    var4 = var5;
 2328:
                    _closure3_slot7 = var4;
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 16;
                            var2 = var5[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.popAll;
                            var2 = var2.bind(var4)();
                            var4 = _closure1_slot0;
                            var2 = 20;
                            var2 = var5[var2];
                            var5 = var4.bind(var1)(var2);
                            var4 = var5.openUserSettings;
                            var2 = {};
                            var6 = _closure1_slot14;
                            var6 = var6.FAMILY_CENTER;
                            var2['screen'] = var6;
                            var2 = var4.bind(var5)(var2);
                            var5 = _closure3_slot7;
                            var4 = null;
                            var4 = var4 != var5;
                            if(!var4) { _fun0011_ip = 113; continue _fun0011 }
 95:
                            var7 = _closure1_slot21;
                            var6 = var7.test;
                            var5 = _closure3_slot7;
                            var4 = var6.bind(var7)(var5);
 113:
                            if(!var4) { _fun0011_ip = 158; continue _fun0011 }
 116:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var3 = 29;
                            var3 = var5[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.handleFamilyCenterQRCodeScan;
                            var3 = _closure3_slot7;
                            var2 = 'NativeCameraScan';
                            var2 = var4.bind(var5)(var3, var2);
 158:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 2350:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 16;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 20;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.SESSIONS;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 2368:
                    var12 = var7.guildId;
                    var11 = var7.channelId;
                    var5 = var7.type;
                    var4 = _closure1_slot12;
                    var4 = var4.MESSAGE;
                    var8 = undefined;
                    var6 = undefined;
                    if(!(var5 === var4)) { _fun0002_ip = 2412; continue _fun0002 }
 2401:
                    var8 = var7.messageId;
                    var6 = var7.summaryId;
 2412:
                    var5 = null;
                    var4 = var5 != var12;
                    if(!var4) { _fun0002_ip = 2425; continue _fun0002 }
 2421:
                    var4 = var5 != var11;
 2425:
                    if(!var4) { _fun0002_ip = 2489; continue _fun0002 }
 2428:
                    var5 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var4 = 28;
                    var4 = var13[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = {};
                    var4['guildId'] = var12;
                    var4['channelId'] = var11;
                    var4['messageId'] = var8;
                    var8 = {};
                    var8['safe'] = var10;
                    var8['navigationReplace'] = var9;
                    var4['navigationSettings'] = var8;
                    var4['summaryId'] = var6;
                    var4 = var5.bind(var3)(var4);
 2489:
                    var4 = true;
                    return var4;
 2493:
                    var8 = var7.giftCode;
                    var4 = null;
                    var4 = var4 != var8;
                    if(!var4) { _fun0002_ip = 2572; continue _fun0002 }
 2508:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 24;
                    var5 = var9[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.resolveGiftCode;
                    var8 = var5.bind(var6)(var8);
                    var6 = var8.then;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var6 = var1.giftCode;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 25;
                        var4 = var2[var1];
                        var1 = undefined;
                        var9 = var5.bind(var1)(var4);
                        var8 = var9.track;
                        var4 = _closure1_slot11;
                        var7 = var4.OPEN_MODAL;
                        var4 = {'type': 'gift_accept', 'location': null};
                        var4 = var8.bind(var9)(var7, var4);
                        var4 = 16;
                        var4 = var2[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.pushLazy;
                        var7 = _closure1_slot0;
                        var3 = 27;
                        var3 = var2[var3];
                        var7 = var7.bind(var1)(var3);
                        var3 = 26;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var3 = var7.bind(var1)(var3, var2);
                        var2 = {};
                        var6 = var6.code;
                        var2['code'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var8 = var6.bind(var8)(var5);
                    var6 = var8.catch;
                    var5 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    var5 = var6.bind(var8)(var5);
                    var4 = true;
 2572:
                    return var4;
 2574:
                    var4 = var7.guildTemplateCode;
                    _closure3_slot6 = var4;
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.clearDisplayedInvite;
                            var2 = var2.bind(var4)();
                            var5 = _closure3_slot6;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0012_ip = 109; continue _fun0012 }
 48:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 23;
                            var4 = var5[var4];
                            var6 = var6.bind(var1)(var4);
                            var4 = var6.dismissGlobalKeyboard;
                            var4 = var4.bind(var6)();
                            var4 = _closure1_slot1;
                            var3 = 22;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.showModal;
                            var2 = _closure3_slot6;
                            var2 = var3.bind(var4)(var2);
 109:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 2602:
                    var9 = var7.inviteCode;
                    _closure3_slot3 = var9;
                    var8 = var7.username;
                    _closure3_slot4 = var8;
                    var10 = var7.deeplinkAttemptId;
                    _closure3_slot5 = var10;
                    var5 = _closure1_slot10;
                    var4 = var5.isAuthenticated;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0002_ip = 2706; continue _fun0002 }
 2648:
                    var4 = null;
                    if(!(var4 != var9)) { _fun0002_ip = 2706; continue _fun0002 }
 2654:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 21;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showInvite;
                    var4 = {};
                    var4['deeplinkAttemptId'] = var10;
                    var10 = 'Deep Link';
                    var4['location'] = var10;
                    var4 = var5.bind(var6)(var9, var8, var4);
                    _fun0002_ip = 2720; continue _fun0002;
 2706:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 22;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideModal;
                            var3 = var3.bind(var4)();
                            var4 = _closure3_slot3;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0013_ip = 132; continue _fun0013 }
 48:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 23;
                            var2 = var4[var2];
                            var5 = var3.bind(var1)(var2);
                            var2 = var5.dismissGlobalKeyboard;
                            var2 = var2.bind(var5)();
                            var2 = 21;
                            var2 = var4[var2];
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.showInvite;
                            var4 = _closure3_slot3;
                            var3 = _closure3_slot4;
                            var2 = {};
                            var7 = _closure3_slot5;
                            var2['deeplinkAttemptId'] = var7;
                            var7 = 'Deep Link';
                            var2['location'] = var7;
                            var2 = var5.bind(var6)(var4, var3, var2);
 132:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
 2720:
                    var4 = true;
                    return var4;
 2724:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 16;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 20;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.PROFILE_CUSTOMIZATION;
                        var2['screen'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 2742:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 16;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 17;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getRootNavigationRef;
                    var8 = var4.bind(var5)();
                    _closure3_slot2 = var8;
                    var5 = null;
                    if(!(var5 != var8)) { _fun0002_ip = 2852; continue _fun0002 }
 2808:
                    var4 = var8.isReady;
                    var4 = var4.bind(var8)();
                    if(var4) { _fun0002_ip = 2837; continue _fun0002 }
 2821:
                    var6 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure3_slot2;
                        var2 = var3.navigate;
                        var1 = 'friends';
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var4 = var6.bind(var3)(var4);
                    _fun0002_ip = 2852; continue _fun0002;
 2837:
                    var6 = var8.navigate;
                    var4 = 'friends';
                    var4 = var6.bind(var8)(var4);
 2852:
                    var4 = var7.userId;
                    if(!(var5 != var4)) { _fun0002_ip = 2903; continue _fun0002 }
 2861:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 19;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showUserProfileActionSheetPostConnection;
                    var4 = {};
                    var7 = var7.userId;
                    var4['userId'] = var7;
                    var4 = var5.bind(var6)(var4);
 2903:
                    var4 = true;
                    return var4;
 2907:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 16;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 17;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getRootNavigationRef;
                    var6 = var4.bind(var5)();
                    _closure3_slot1 = var6;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0002_ip = 3051; continue _fun0002 }
 2973:
                    var4 = var6.isReady;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0002_ip = 3002; continue _fun0002 }
 2986:
                    var4 = _closure1_slot7;
                    var2 = function() {
                        var4 = _closure3_slot1;
                        var3 = var4.navigate;
                        var2 = {};
                        var1 = 'add-friends';
                        var2['screen'] = var1;
                        var1 = {};
                        var5 = 'Deeplink';
                        var1['sourcePage'] = var5;
                        var2['params'] = var1;
                        var1 = 'friends';
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    _fun0002_ip = 3081; continue _fun0002;
 3002:
                    var5 = var6.navigate;
                    var4 = {};
                    var2 = 'add-friends';
                    var4['screen'] = var2;
                    var2 = {};
                    var7 = 'Deeplink';
                    var2['sourcePage'] = var7;
                    var4['params'] = var2;
                    var2 = 'friends';
                    var2 = var5.bind(var6)(var2, var4);
                    _fun0002_ip = 3081; continue _fun0002;
 3051:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 18;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.openAddFriendModalDeeplink;
                    var2 = var2.bind(var4)();
 3081:
                    var2 = true;
                    return var2;
 3085:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 16;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.popAll;
                    var2 = var2.bind(var4)();
                    var4 = _closure1_slot0;
                    var2 = 17;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.getRootNavigationRef;
                    var6 = var2.bind(var4)();
                    var2 = null;
                    if(!(var2 != var6)) { _fun0002_ip = 3194; continue _fun0002 }
 3147:
                    var5 = var6.navigate;
                    var4 = {};
                    var2 = 'new-message';
                    var4['screen'] = var2;
                    var2 = {};
                    var7 = 'Deeplink';
                    var2['sourcePage'] = var7;
                    var4['params'] = var2;
                    var2 = 'friends';
                    var2 = var5.bind(var6)(var2, var4);
 3194:
                    var2 = true;
                    return var2;
 3198:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 15;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.openContactSyncModalDeeplink;
                    var1 = var1.bind(var2)();
                    var1 = true;
                    return var1;
                }
            };
            var4 = undefined;
            var1 = arg1;
            var2 = var2.bind(var4)(var1);
            if(!var2) { _fun0001_ip = 53; continue _fun0001 }
 20:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 69;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.browserManagerCloseBrowser;
            var1 = var1.bind(var3)();
 53:
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 65; continue _fun0001 }
 62:
            var1 = var2;
 65:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();