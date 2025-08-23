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
    var4 = var4.SHARE_SCREEN_MODAL_KEY;
    var _closure1_slot22 = var4;
    var4 = 68;
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
                    var5 = var7.type;
                    var4 = _closure1_slot12;
                    var4 = var4.CONTACT_SYNC;
                    if(!(var4 !== var5)) { _fun0002_ip = 3184; continue _fun0002 }
 90:
                    var4 = _closure1_slot12;
                    var4 = var4.COMPOSE_MESSAGE;
                    if(!(var4 !== var5)) { _fun0002_ip = 3071; continue _fun0002 }
 107:
                    var4 = _closure1_slot12;
                    var4 = var4.ADD_FRIENDS;
                    if(!(var4 !== var5)) { _fun0002_ip = 2893; continue _fun0002 }
 124:
                    var4 = _closure1_slot12;
                    var4 = var4.FRIENDS;
                    if(!(var4 !== var5)) { _fun0002_ip = 2728; continue _fun0002 }
 141:
                    var4 = _closure1_slot12;
                    var4 = var4.EDIT_PROFILE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2710; continue _fun0002 }
 158:
                    var4 = _closure1_slot12;
                    var4 = var4.INVITE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2588; continue _fun0002 }
 175:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_TEMPLATE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2560; continue _fun0002 }
 192:
                    var4 = _closure1_slot12;
                    var4 = var4.GIFT_CODE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2479; continue _fun0002 }
 209:
                    var4 = _closure1_slot12;
                    var4 = var4.CHANNEL;
                    if(!(var4 !== var5)) { _fun0002_ip = 2354; continue _fun0002 }
 226:
                    var4 = _closure1_slot12;
                    var4 = var4.MESSAGE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2354; continue _fun0002 }
 243:
                    var4 = _closure1_slot12;
                    var4 = var4.SESSION_MANAGEMENT;
                    if(!(var4 !== var5)) { _fun0002_ip = 2336; continue _fun0002 }
 260:
                    var4 = _closure1_slot12;
                    var4 = var4.FAMILY_CENTER;
                    if(!(var4 !== var5)) { _fun0002_ip = 2288; continue _fun0002 }
 277:
                    var4 = _closure1_slot12;
                    var4 = var4.OAUTH2_AUTHORIZE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2270; continue _fun0002 }
 294:
                    var4 = _closure1_slot12;
                    var4 = var4.REMOTE_AUTH;
                    if(!(var4 !== var5)) { _fun0002_ip = 2182; continue _fun0002 }
 311:
                    var4 = _closure1_slot12;
                    var4 = var4.PROMOTIONS;
                    if(!(var4 !== var5)) { _fun0002_ip = 2142; continue _fun0002 }
 328:
                    var4 = _closure1_slot12;
                    var4 = var4.FEATURE_PROMO_URL;
                    if(!(var4 !== var5)) { _fun0002_ip = 2101; continue _fun0002 }
 345:
                    var4 = _closure1_slot12;
                    var4 = var4.USER_PROFILE;
                    if(!(var4 !== var5)) { _fun0002_ip = 2044; continue _fun0002 }
 362:
                    var4 = _closure1_slot12;
                    var4 = var4.BUILD_OVERRIDE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1942; continue _fun0002 }
 379:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_EVENT_DETAILS;
                    if(!(var4 !== var5)) { _fun0002_ip = 1915; continue _fun0002 }
 396:
                    var4 = _closure1_slot12;
                    var4 = var4.MOBILE_WEB_HANDOFF;
                    if(!(var4 !== var5)) { _fun0002_ip = 1838; continue _fun0002 }
 413:
                    var4 = _closure1_slot12;
                    var4 = var4.VOICE_CHANNEL;
                    if(!(var4 !== var5)) { _fun0002_ip = 1811; continue _fun0002 }
 430:
                    var4 = _closure1_slot12;
                    var4 = var4.ICYMI;
                    if(!(var4 !== var5)) { _fun0002_ip = 1793; continue _fun0002 }
 447:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_HOME;
                    if(!(var4 !== var5)) { _fun0002_ip = 1617; continue _fun0002 }
 464:
                    var4 = _closure1_slot12;
                    var4 = var4.USER_CONNECTIONS_LINK_CALLBACK;
                    if(!(var4 !== var5)) { _fun0002_ip = 1599; continue _fun0002 }
 481:
                    var4 = _closure1_slot12;
                    var4 = var4.USER_CONNECTIONS_CALLBACK;
                    if(!(var4 !== var5)) { _fun0002_ip = 1572; continue _fun0002 }
 498:
                    var4 = _closure1_slot12;
                    var4 = var4.CONNECTIONS;
                    if(!(var4 !== var5)) { _fun0002_ip = 1554; continue _fun0002 }
 515:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_SETTINGS;
                    if(!(var4 !== var5)) { _fun0002_ip = 1536; continue _fun0002 }
 532:
                    var4 = _closure1_slot12;
                    var4 = var4.ACTIVATE_DEVICE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1495; continue _fun0002 }
 549:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_SETTINGS_PICKER;
                    if(!(var4 !== var5)) { _fun0002_ip = 1477; continue _fun0002 }
 566:
                    var4 = _closure1_slot12;
                    var4 = var4.SHARE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1288; continue _fun0002 }
 583:
                    var4 = _closure1_slot12;
                    var4 = var4.CREATE_VOICE_INVITE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1270; continue _fun0002 }
 600:
                    var4 = _closure1_slot12;
                    var4 = var4.SEND_VOICE_HANGOUT_WAVE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1270; continue _fun0002 }
 617:
                    var4 = _closure1_slot12;
                    var4 = var4.ACCOUNT_STANDING;
                    if(!(var4 !== var5)) { _fun0002_ip = 1252; continue _fun0002 }
 634:
                    var4 = _closure1_slot12;
                    var4 = var4.MOBILE_NATIVE_UPDATE;
                    if(!(var4 !== var5)) { _fun0002_ip = 1212; continue _fun0002 }
 651:
                    var4 = _closure1_slot12;
                    var4 = var4.APPLE_PAYMENT_LINK;
                    if(!(var4 !== var5)) { _fun0002_ip = 1194; continue _fun0002 }
 668:
                    var4 = _closure1_slot12;
                    var4 = var4.SHOP;
                    if(!(var4 !== var5)) { _fun0002_ip = 1176; continue _fun0002 }
 685:
                    var4 = _closure1_slot12;
                    var4 = var4.AUTHORIZED_APPS;
                    if(!(var4 !== var5)) { _fun0002_ip = 1158; continue _fun0002 }
 702:
                    var4 = _closure1_slot12;
                    var4 = var4.DAVE_PROTOCOL_VERIFICATION;
                    if(!(var4 !== var5)) { _fun0002_ip = 1140; continue _fun0002 }
 719:
                    var4 = _closure1_slot12;
                    var4 = var4.QUESTS;
                    if(!(var4 !== var5)) { _fun0002_ip = 1122; continue _fun0002 }
 736:
                    var4 = _closure1_slot12;
                    var4 = var4.GIFT;
                    if(!(var4 !== var5)) { _fun0002_ip = 1104; continue _fun0002 }
 753:
                    var4 = _closure1_slot12;
                    var4 = var4.NITRO_HOME;
                    if(!(var4 !== var5)) { _fun0002_ip = 1086; continue _fun0002 }
 770:
                    var4 = _closure1_slot12;
                    var4 = var4.ACTIVITY;
                    if(!(var4 !== var5)) { _fun0002_ip = 1027; continue _fun0002 }
 787:
                    var4 = _closure1_slot12;
                    var4 = var4.CONNECTED_GAMES;
                    if(!(var4 !== var5)) { _fun0002_ip = 869; continue _fun0002 }
 801:
                    var4 = _closure1_slot12;
                    var4 = var4.BOOST_MARKETING;
                    if(!(var4 !== var5)) { _fun0002_ip = 851; continue _fun0002 }
 815:
                    var4 = _closure1_slot12;
                    var4 = var4.BOOST_SETTINGS;
                    if(!(var4 !== var5)) { _fun0002_ip = 833; continue _fun0002 }
 829:
                    var4 = false;
                    return var4;
 833:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 15;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 19;
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
 851:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 66;
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
 869:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 15;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 16;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getRootNavigationRef;
                    var8 = var4.bind(var5)();
                    _closure3_slot8 = var8;
                    var4 = null;
                    if(!(var4 != var8)) { _fun0002_ip = 1023; continue _fun0002 }
 935:
                    var6 = {};
                    var4 = _closure1_slot14;
                    var4 = var4.CONTENT_AND_SOCIAL;
                    var6['screen'] = var4;
                    var4 = {};
                    var5 = _closure1_slot18;
                    var5 = var5.CONNECTED_GAMES;
                    var4['tab'] = var5;
                    var6['params'] = var4;
                    _closure3_slot9 = var6;
                    var4 = var8.isReady;
                    var4 = var4.bind(var8)();
                    if(var4) { _fun0002_ip = 1007; continue _fun0002 }
 991:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var4 = _closure3_slot8;
                        var3 = var4.navigate;
                        var2 = _closure3_slot9;
                        var1 = 'settings';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    _fun0002_ip = 1023; continue _fun0002;
 1007:
                    var5 = var8.navigate;
                    var4 = 'settings';
                    var4 = var5.bind(var8)(var4, var6);
 1023:
                    var4 = true;
                    return var4;
 1027:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 65;
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
 1086:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 19;
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
 1104:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 63;
                        var2 = var7[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openGiftModal;
                        var2 = {};
                        var6 = _closure1_slot1;
                        var5 = 64;
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
 1122:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 60;
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
                        var8 = 61;
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
                        var2 = 62;
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
 1140:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 59;
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
 1158:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 15;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 19;
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
 1176:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 19;
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
 1194:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot9;
                        var1 = undefined;
                        var2 = 'succeeded';
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
 1212:
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var4 = 58;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.openBuildInstallerUrl;
                    var4 = var7.url;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
 1252:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 15;
                        var2 = var7[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var6 = _closure1_slot0;
                        var2 = 19;
                        var2 = var7[var2];
                        var4 = var6.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.ACCOUNT;
                        var2['screen'] = var5;
                        var5 = 57;
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
 1270:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 56;
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
 1288:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 54;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isIOS;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0002_ip = 1473; continue _fun0002 }
 1324:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 15;
                    var8 = var4[var5];
                    var11 = var6.bind(var3)(var8);
                    var8 = var11.popAll;
                    var8 = var8.bind(var11)();
                    var5 = var4[var5];
                    var12 = var6.bind(var3)(var5);
                    var11 = var12.pushLazy;
                    var6 = _closure1_slot0;
                    var5 = 26;
                    var5 = var4[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = 55;
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
                    var16 = _closure1_slot22;
                    var4 = {};
                    var13 = 'modal';
                    var4['presentation'] = var13;
                    var19 = var12;
                    var17 = var6;
                    var15 = var4;
                    var4 = var19[var11](var18, var17, var16, var15, var14);
 1473:
                    var4 = true;
                    return var4;
 1477:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 53;
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
 1495:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 52;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showModal;
                    var4 = var7.userCode;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
 1536:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var2 = _closure3_slot0;
                            var3 = var2.guildId;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0003_ip = 79; continue _fun0003 }
 18:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 51;
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
 1554:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 15;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 19;
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
 1572:
                    var5 = _closure1_slot7;
                    var6 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 371; continue _fun0004 }
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
                                if(!(var5 != var6)) { _fun0004_ip = 365; continue _fun0004 }
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
                                    if(!var18) { _fun0004_ip = 98; continue _fun0004 }
 133:
                                    var6 = var16;
                                    if(!(var5 == var16)) { _fun0004_ip = 142; continue _fun0004 }
 140:
                                    var6 = {};
 142:
                                    var16 = var15[var17];
                                    var6[var17] = var16;
                                    _fun0004_ip = 98; continue _fun0004;
                                }
 152:
                                if(!(var5 != var2)) { _fun0004_ip = 162; continue _fun0004 }
 156:
                                var7['openid_params'] = var2;
 162:
                                var6 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var2 = 15;
                                var2 = var9[var2];
                                var10 = var6.bind(var3)(var2);
                                var2 = var10.popAll;
                                var2 = var2.bind(var10)();
                                var10 = _closure1_slot0;
                                var2 = 19;
                                var2 = var9[var2];
                                var11 = var10.bind(var3)(var2);
                                var10 = var11.openUserSettings;
                                var2 = {};
                                var12 = _closure1_slot14;
                                var12 = var12.CONNECTIONS;
                                var2['screen'] = var12;
                                var2 = var10.bind(var11)(var2);
                                var2 = 49;
                                var2 = var9[var2];
                                var6 = var6.bind(var3)(var2);
                                var2 = var6.callback;
                                var2 = var2.bind(var6)(var8, var7);
                                SaveGenerator(address=264);
 262:
                                return var2;
 264:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(var6) { _fun0004_ip = 368; continue _fun0004 }
 270:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var6 = 50;
                                var6 = var8[var6];
                                var8 = var7.bind(var3)(var6);
                                var7 = var8.toURLSafe;
                                var9 = var2.body;
                                var10 = var5 == var9;
                                var6 = undefined;
                                if(var10) { _fun0004_ip = 316; continue _fun0004 }
 310:
                                var6 = var9.redirect;
 316:
                                var7 = var7.bind(var8)(var6);
                                if(!(var5 != var7)) { _fun0004_ip = 365; continue _fun0004 }
 325:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var4 = 36;
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
 1599:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = _closure3_slot0;
                            var1 = var1.callbackCode;
                            var3 = null;
                            var1 = var3 != var1;
                            if(!var1) { _fun0005_ip = 36; continue _fun0005 }
 22:
                            var2 = _closure3_slot0;
                            var2 = var2.callbackState;
                            var1 = var3 != var2;
 36:
                            if(!var1) { _fun0005_ip = 53; continue _fun0005 }
 39:
                            var2 = _closure3_slot0;
                            var2 = var2.provider;
                            var1 = var3 != var2;
 53:
                            if(!var1) { _fun0005_ip = 127; continue _fun0005 }
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
                            if(!var1) { _fun0005_ip = 212; continue _fun0005 }
 130:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 48;
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
 1617:
                    var4 = var7.guildId;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0002_ip = 1789; continue _fun0002 }
 1631:
                    var4 = var7.highlightChannelId;
                    var4 = var5 != var4;
                    var8 = undefined;
                    if(!var4) { _fun0002_ip = 1726; continue _fun0002 }
 1646:
                    var4 = var7.highlightMessageId;
                    var4 = var5 != var4;
                    var8 = undefined;
                    if(!var4) { _fun0002_ip = 1726; continue _fun0002 }
 1661:
                    var4 = {};
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 46;
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
 1726:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 47;
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
 1789:
                    var4 = true;
                    return var4;
 1793:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 45;
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
 1811:
                    var5 = _closure1_slot7;
                    var6 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0006_ip = 376; continue _fun0006 }
 10:
                                var2 = _closure3_slot0;
                                var2 = var2.guildId;
                                var5 = null;
                                var2 = var5 != var2;
                                if(!var2) { _fun0006_ip = 44; continue _fun0006 }
 31:
                                var3 = _closure3_slot0;
                                var3 = var3.channelId;
                                var2 = var5 != var3;
 44:
                                if(!var2) { _fun0006_ip = 60; continue _fun0006 }
 47:
                                var3 = _closure3_slot0;
                                var3 = var3.userId;
                                var2 = var5 != var3;
 60:
                                if(!var2) { _fun0006_ip = 290; continue _fun0006 }
 66:
                                var8 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var3 = 15;
                                var3 = var2[var3];
                                var6 = undefined;
                                var8 = var8.bind(var6)(var3);
                                var3 = var8.popAll;
                                var3 = var3.bind(var8)();
                                var8 = _closure1_slot0;
                                var3 = 26;
                                var3 = var2[var3];
                                var8 = var8.bind(var6)(var3);
                                var3 = 38;
                                var3 = var2[var3];
                                var2 = var2.paths;
                                var2 = var8.bind(var6)(var3, var2);
                                SaveGenerator(address=139);
 137:
                                return var2;
 139:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0006_ip = 373; continue _fun0006 }
 148:
                                var9 = var2.default;
                                var8 = var9.getGuild;
                                var3 = _closure3_slot0;
                                var3 = var3.guildId;
                                var3 = var8.bind(var9)(var3);
                                if(!(var5 != var3)) { _fun0006_ip = 216; continue _fun0006 }
 176:
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var3 = 39;
                                var3 = var8[var3];
                                var8 = var5.bind(var6)(var3);
                                var5 = var8.transitionToGuild;
                                var3 = _closure3_slot0;
                                var3 = var3.guildId;
                                var3 = var5.bind(var8)(var3);
 216:
                                var5 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var3 = 43;
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
                                if(!var3) { _fun0006_ip = 330; continue _fun0006 }
 312:
                                var4 = _closure3_slot0;
                                var5 = var4.via;
                                var4 = 'xbox';
                                var3 = var4 === var5;
 330:
                                if(!var3) { _fun0006_ip = 368; continue _fun0006 }
 333:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 44;
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
 1838:
                    var12 = var7.nonce;
                    var5 = var7.redirectUrl;
                    var4 = var7.fingerprint;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var6 = 42;
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
 1915:
                    var5 = _closure1_slot7;
                    var6 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0007_ip = 287; continue _fun0007 }
 10:
                                var6 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var3 = 15;
                                var5 = var2[var3];
                                var3 = undefined;
                                var6 = var6.bind(var3)(var5);
                                var5 = var6.popAll;
                                var5 = var5.bind(var6)();
                                var5 = _closure3_slot0;
                                var10 = var5.guildId;
                                var9 = var5.guildEventId;
                                var6 = _closure1_slot0;
                                var5 = 26;
                                var5 = var2[var5];
                                var6 = var6.bind(var3)(var5);
                                var5 = 38;
                                var5 = var2[var5];
                                var2 = var2.paths;
                                var2 = var6.bind(var3)(var5, var2);
                                SaveGenerator(address=101);
 99:
                                return var2;
 101:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0007_ip = 284; continue _fun0007 }
 110:
                                var6 = var2.default;
                                var5 = var6.getGuild;
                                var6 = var5.bind(var6)(var10);
                                var5 = null;
                                if(!(var5 != var6)) { _fun0007_ip = 162; continue _fun0007 }
 131:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var6 = 39;
                                var6 = var8[var6];
                                var7 = var7.bind(var3)(var6);
                                var6 = var7.transitionToGuild;
                                var6 = var6.bind(var7)(var10);
 162:
                                var7 = _closure1_slot8;
                                var6 = var7.getGuildScheduledEvent;
                                var7 = var6.bind(var7)(var9);
                                if(!(var5 == var7)) { _fun0007_ip = 229; continue _fun0007 }
 181:
                                var8 = _closure1_slot1;
                                var11 = _closure1_slot3;
                                var6 = 40;
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
                                if(!var8) { _fun0007_ip = 229; continue _fun0007 }
 226:
                                return var6;
 229:
                                if(!(var5 != var7)) { _fun0007_ip = 281; continue _fun0007 }
 233:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var4 = 41;
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
 1942:
                    var11 = var7.overrideUrl;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 15;
                    var8 = var4[var5];
                    var12 = var6.bind(var3)(var8);
                    var8 = var12.popAll;
                    var8 = var8.bind(var12)();
                    var5 = var4[var5];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.pushLazy;
                    var12 = _closure1_slot0;
                    var5 = 26;
                    var5 = var4[var5];
                    var12 = var12.bind(var3)(var5);
                    var5 = 37;
                    var5 = var4[var5];
                    var4 = var4.paths;
                    var5 = var12.bind(var3)(var5, var4);
                    var4 = {};
                    var4['overrideUrl'] = var11;
                    var4 = var6.bind(var8)(var5, var4);
                    var4 = true;
                    return var4;
 2044:
                    var5 = var7.userId;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 2097; continue _fun0002 }
 2055:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 18;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showUserProfileActionSheetPostConnection;
                    var4 = {};
                    var8 = var7.userId;
                    var4['userId'] = var8;
                    var4 = var5.bind(var6)(var4);
 2097:
                    var4 = true;
                    return var4;
 2101:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 36;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.openURLExternally;
                    var4 = var7.promoUrl;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
 2142:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 36;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.performURLNavigation;
                    var4 = var7.url;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
 2182:
                    var5 = var7.remoteAuthFingerprint;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 2266; continue _fun0002 }
 2194:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 34;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.requestPermission;
                    var4 = _closure1_slot19;
                    var4 = var4.CAMERA;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.then;
                    var4 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0008_ip = 86; continue _fun0008 }
 6:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var3 = 15;
                            var3 = var1[var3];
                            var6 = undefined;
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.pushLazy;
                            var5 = _closure1_slot0;
                            var2 = 26;
                            var2 = var1[var2];
                            var5 = var5.bind(var6)(var2);
                            var2 = 35;
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
 2266:
                    var4 = true;
                    return var4;
 2270:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 15;
                            var3 = var5[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.popAll;
                            var3 = var3.bind(var4)();
                            var4 = _closure1_slot0;
                            var3 = 29;
                            var3 = var5[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.isMidjourneyOnboardingFlow;
                            var3 = 'create-guild-and-oauth2-modal-mobile';
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0009_ip = 150; continue _fun0009 }
 71:
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = 33;
                            var3 = var8[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.openOAuth2Modal;
                            var3 = {};
                            var6 = _closure3_slot0;
                            var9 = var6.props;
                            var10 = var3;
                            var6 = copyDataProperties(var10, var9);
                            var7 = _closure1_slot1;
                            var6 = 31;
                            var6 = var8[var6];
                            var7 = var7.bind(var1)(var6);
                            var6 = 'callback';
                            var3[var6] = var7;
                            var3 = var4.bind(var5)(var3);
                            _fun0009_ip = 188; continue _fun0009;
 150:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 32;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.openCreateGuildModal;
                            var2 = function(arg1) {
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var3 = 15;
                                var4 = var9[var3];
                                var1 = undefined;
                                var5 = var8.bind(var1)(var4);
                                var4 = var5.popAll;
                                var4 = var4.bind(var5)();
                                var3 = var9[var3];
                                var6 = var8.bind(var1)(var3);
                                var5 = var6.pushLazy;
                                var4 = _closure1_slot0;
                                var3 = 26;
                                var3 = var9[var3];
                                var7 = var4.bind(var1)(var3);
                                var3 = 30;
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
                                var7 = 31;
                                var7 = var9[var7];
                                var8 = var8.bind(var1)(var7);
                                var7 = 'callback';
                                var3[var7] = var8;
                                var8 = function dismissOAuthModal() {
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot3;
                                    var1 = 15;
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
 2288:
                    var4 = null;
                    var5 = var7;
                    if(!(var4 == var5)) { _fun0002_ip = 2299; continue _fun0002 }
 2297:
                    var5 = {};
 2299:
                    var5 = var5.pathname;
                    var4 = null;
                    if(!(var3 !== var5)) { _fun0002_ip = 2314; continue _fun0002 }
 2311:
                    var4 = var5;
 2314:
                    _closure3_slot7 = var4;
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 15;
                            var2 = var5[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.popAll;
                            var2 = var2.bind(var4)();
                            var4 = _closure1_slot0;
                            var2 = 19;
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
                            if(!var4) { _fun0010_ip = 113; continue _fun0010 }
 95:
                            var7 = _closure1_slot21;
                            var6 = var7.test;
                            var5 = _closure3_slot7;
                            var4 = var6.bind(var7)(var5);
 113:
                            if(!var4) { _fun0010_ip = 158; continue _fun0010 }
 116:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var3 = 28;
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
 2336:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 15;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 19;
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
 2354:
                    var12 = var7.guildId;
                    var11 = var7.channelId;
                    var5 = var7.type;
                    var4 = _closure1_slot12;
                    var4 = var4.MESSAGE;
                    var8 = undefined;
                    var6 = undefined;
                    if(!(var5 === var4)) { _fun0002_ip = 2398; continue _fun0002 }
 2387:
                    var8 = var7.messageId;
                    var6 = var7.summaryId;
 2398:
                    var5 = null;
                    var4 = var5 != var12;
                    if(!var4) { _fun0002_ip = 2411; continue _fun0002 }
 2407:
                    var4 = var5 != var11;
 2411:
                    if(!var4) { _fun0002_ip = 2475; continue _fun0002 }
 2414:
                    var5 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var4 = 27;
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
 2475:
                    var4 = true;
                    return var4;
 2479:
                    var8 = var7.giftCode;
                    var4 = null;
                    var4 = var4 != var8;
                    if(!var4) { _fun0002_ip = 2558; continue _fun0002 }
 2494:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 23;
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
                        var1 = 24;
                        var4 = var2[var1];
                        var1 = undefined;
                        var9 = var5.bind(var1)(var4);
                        var8 = var9.track;
                        var4 = _closure1_slot11;
                        var7 = var4.OPEN_MODAL;
                        var4 = {'type': 'gift_accept', 'location': null};
                        var4 = var8.bind(var9)(var7, var4);
                        var4 = 15;
                        var4 = var2[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.pushLazy;
                        var7 = _closure1_slot0;
                        var3 = 26;
                        var3 = var2[var3];
                        var7 = var7.bind(var1)(var3);
                        var3 = 25;
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
 2558:
                    return var4;
 2560:
                    var4 = var7.guildTemplateCode;
                    _closure3_slot6 = var4;
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 20;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.clearDisplayedInvite;
                            var2 = var2.bind(var4)();
                            var5 = _closure3_slot6;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0011_ip = 109; continue _fun0011 }
 48:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 22;
                            var4 = var5[var4];
                            var6 = var6.bind(var1)(var4);
                            var4 = var6.dismissGlobalKeyboard;
                            var4 = var4.bind(var6)();
                            var4 = _closure1_slot1;
                            var3 = 21;
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
 2588:
                    var9 = var7.inviteCode;
                    _closure3_slot3 = var9;
                    var8 = var7.username;
                    _closure3_slot4 = var8;
                    var10 = var7.deeplinkAttemptId;
                    _closure3_slot5 = var10;
                    var5 = _closure1_slot10;
                    var4 = var5.isAuthenticated;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0002_ip = 2692; continue _fun0002 }
 2634:
                    var4 = null;
                    if(!(var4 != var9)) { _fun0002_ip = 2692; continue _fun0002 }
 2640:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 20;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showInvite;
                    var4 = {};
                    var4['deeplinkAttemptId'] = var10;
                    var10 = 'Deep Link';
                    var4['location'] = var10;
                    var4 = var5.bind(var6)(var9, var8, var4);
                    _fun0002_ip = 2706; continue _fun0002;
 2692:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 21;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideModal;
                            var3 = var3.bind(var4)();
                            var4 = _closure3_slot3;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0012_ip = 132; continue _fun0012 }
 48:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 22;
                            var2 = var4[var2];
                            var5 = var3.bind(var1)(var2);
                            var2 = var5.dismissGlobalKeyboard;
                            var2 = var2.bind(var5)();
                            var2 = 20;
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
 2706:
                    var4 = true;
                    return var4;
 2710:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 15;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 19;
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
 2728:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 15;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 16;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getRootNavigationRef;
                    var8 = var4.bind(var5)();
                    _closure3_slot2 = var8;
                    var5 = null;
                    if(!(var5 != var8)) { _fun0002_ip = 2838; continue _fun0002 }
 2794:
                    var4 = var8.isReady;
                    var4 = var4.bind(var8)();
                    if(var4) { _fun0002_ip = 2823; continue _fun0002 }
 2807:
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
                    _fun0002_ip = 2838; continue _fun0002;
 2823:
                    var6 = var8.navigate;
                    var4 = 'friends';
                    var4 = var6.bind(var8)(var4);
 2838:
                    var4 = var7.userId;
                    if(!(var5 != var4)) { _fun0002_ip = 2889; continue _fun0002 }
 2847:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 18;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showUserProfileActionSheetPostConnection;
                    var4 = {};
                    var7 = var7.userId;
                    var4['userId'] = var7;
                    var4 = var5.bind(var6)(var4);
 2889:
                    var4 = true;
                    return var4;
 2893:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 15;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 16;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getRootNavigationRef;
                    var6 = var4.bind(var5)();
                    _closure3_slot1 = var6;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0002_ip = 3037; continue _fun0002 }
 2959:
                    var4 = var6.isReady;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0002_ip = 2988; continue _fun0002 }
 2972:
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
                    _fun0002_ip = 3067; continue _fun0002;
 2988:
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
                    _fun0002_ip = 3067; continue _fun0002;
 3037:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 17;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.openAddFriendModalDeeplink;
                    var2 = var2.bind(var4)();
 3067:
                    var2 = true;
                    return var2;
 3071:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 15;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.popAll;
                    var2 = var2.bind(var4)();
                    var4 = _closure1_slot0;
                    var2 = 16;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.getRootNavigationRef;
                    var6 = var2.bind(var4)();
                    var2 = null;
                    if(!(var2 != var6)) { _fun0002_ip = 3180; continue _fun0002 }
 3133:
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
 3180:
                    var2 = true;
                    return var2;
 3184:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 14;
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
            var1 = 67;
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