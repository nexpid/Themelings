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
    var4 = var4.NativePermissionTypes;
    var _closure1_slot18 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OAUTH2_AUTHORIZE_MODAL_KEY;
    var _closure1_slot19 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAMILY_CENTER_LINK_REQUEST_REGEX;
    var _closure1_slot20 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplePaymentLinkDeepLinkActions;
    var _closure1_slot21 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot22 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SHARE_SCREEN_MODAL_KEY;
    var _closure1_slot23 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MobileSetting;
    var _closure1_slot24 = var4;
    var4 = 74;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/native/handleSupportedURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleSupportedURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = function _handleSupportedURL(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                    if(!(var4 !== var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot12;
                    var4 = var4.COMPOSE_MESSAGE;
                    if(!(var4 !== var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot12;
                    var4 = var4.ADD_FRIENDS;
                    if(!(var4 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot12;
                    var4 = var4.FRIENDS;
                    if(!(var4 !== var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure1_slot12;
                    var4 = var4.EDIT_PROFILE;
                    if(!(var4 !== var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure1_slot12;
                    var4 = var4.INVITE;
                    if(!(var4 !== var5)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_TEMPLATE;
                    if(!(var4 !== var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = _closure1_slot12;
                    var4 = var4.GIFT_CODE;
                    if(!(var4 !== var5)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var4 = _closure1_slot12;
                    var4 = var4.CHANNEL;
                    if(!(var4 !== var5)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var4 = _closure1_slot12;
                    var4 = var4.MESSAGE;
                    if(!(var4 !== var5)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                    var4 = _closure1_slot12;
                    var4 = var4.SESSION_MANAGEMENT;
                    if(!(var4 !== var5)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var4 = _closure1_slot12;
                    var4 = var4.FAMILY_CENTER;
                    if(!(var4 !== var5)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var4 = _closure1_slot12;
                    var4 = var4.OAUTH2_AUTHORIZE;
                    if(!(var4 !== var5)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var4 = _closure1_slot12;
                    var4 = var4.REMOTE_AUTH;
                    if(!(var4 !== var5)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var4 = _closure1_slot12;
                    var4 = var4.PROMOTIONS;
                    if(!(var4 !== var5)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var4 = _closure1_slot12;
                    var4 = var4.FEATURE_PROMO_URL;
                    if(!(var4 !== var5)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var4 = _closure1_slot12;
                    var4 = var4.USER_PROFILE;
                    if(!(var4 !== var5)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var4 = _closure1_slot12;
                    var4 = var4.BUILD_OVERRIDE;
                    if(!(var4 !== var5)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_EVENT_DETAILS;
                    if(!(var4 !== var5)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var4 = _closure1_slot12;
                    var4 = var4.MOBILE_WEB_HANDOFF;
                    if(!(var4 !== var5)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var4 = _closure1_slot12;
                    var4 = var4.VOICE_CHANNEL;
                    if(!(var4 !== var5)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var4 = _closure1_slot12;
                    var4 = var4.ICYMI;
                    if(!(var4 !== var5)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_HOME;
                    if(!(var4 !== var5)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                    var4 = _closure1_slot12;
                    var4 = var4.USER_CONNECTIONS_LINK_CALLBACK;
                    if(!(var4 !== var5)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                    var4 = _closure1_slot12;
                    var4 = var4.USER_CONNECTIONS_CALLBACK;
                    if(!(var4 !== var5)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                    var4 = _closure1_slot12;
                    var4 = var4.CONNECTIONS;
                    if(!(var4 !== var5)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_SETTINGS;
                    if(!(var4 !== var5)) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                    var4 = _closure1_slot12;
                    var4 = var4.ACTIVATE_DEVICE;
                    if(!(var4 !== var5)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                    var4 = _closure1_slot12;
                    var4 = var4.GUILD_SETTINGS_PICKER;
                    if(!(var4 !== var5)) { _fun0002_ip = 57; continue _fun0002 }
case 58:
                    var4 = _closure1_slot12;
                    var4 = var4.SHARE;
                    if(!(var4 !== var5)) { _fun0002_ip = 59; continue _fun0002 }
case 60:
                    var4 = _closure1_slot12;
                    var4 = var4.CREATE_VOICE_INVITE;
                    if(!(var4 !== var5)) { _fun0002_ip = 61; continue _fun0002 }
case 62:
                    var4 = _closure1_slot12;
                    var4 = var4.SEND_VOICE_HANGOUT_WAVE;
                    if(!(var4 !== var5)) { _fun0002_ip = 61; continue _fun0002 }
case 63:
                    var4 = _closure1_slot12;
                    var4 = var4.ACCOUNT_STANDING;
                    if(!(var4 !== var5)) { _fun0002_ip = 64; continue _fun0002 }
case 65:
                    var4 = _closure1_slot12;
                    var4 = var4.MOBILE_NATIVE_UPDATE;
                    if(!(var4 !== var5)) { _fun0002_ip = 66; continue _fun0002 }
case 67:
                    var4 = _closure1_slot12;
                    var4 = var4.APPLE_PAYMENT_LINK;
                    if(!(var4 !== var5)) { _fun0002_ip = 68; continue _fun0002 }
case 69:
                    var4 = _closure1_slot12;
                    var4 = var4.SHOP;
                    if(!(var4 !== var5)) { _fun0002_ip = 70; continue _fun0002 }
case 71:
                    var4 = _closure1_slot12;
                    var4 = var4.AUTHORIZED_APPS;
                    if(!(var4 !== var5)) { _fun0002_ip = 72; continue _fun0002 }
case 73:
                    var4 = _closure1_slot12;
                    var4 = var4.DAVE_PROTOCOL_VERIFICATION;
                    if(!(var4 !== var5)) { _fun0002_ip = 74; continue _fun0002 }
case 75:
                    var4 = _closure1_slot12;
                    var4 = var4.QUESTS;
                    if(!(var4 !== var5)) { _fun0002_ip = 76; continue _fun0002 }
case 77:
                    var4 = _closure1_slot12;
                    var4 = var4.GIFT;
                    if(!(var4 !== var5)) { _fun0002_ip = 78; continue _fun0002 }
case 79:
                    var4 = _closure1_slot12;
                    var4 = var4.NITRO_HOME;
                    if(!(var4 !== var5)) { _fun0002_ip = 80; continue _fun0002 }
case 81:
                    var4 = _closure1_slot12;
                    var4 = var4.ACTIVITY;
                    if(!(var4 !== var5)) { _fun0002_ip = 82; continue _fun0002 }
case 83:
                    var4 = _closure1_slot12;
                    var4 = var4.CONNECTED_GAMES;
                    if(!(var4 !== var5)) { _fun0002_ip = 84; continue _fun0002 }
case 85:
                    var4 = _closure1_slot12;
                    var4 = var4.BOOST_MARKETING;
                    if(!(var4 !== var5)) { _fun0002_ip = 86; continue _fun0002 }
case 87:
                    var4 = _closure1_slot12;
                    var4 = var4.BOOST_SETTINGS;
                    if(!(var4 !== var5)) { _fun0002_ip = 88; continue _fun0002 }
case 89:
                    var4 = _closure1_slot12;
                    var4 = var4.QUEST_PREVIEW_TOOL;
                    if(!(var4 !== var5)) { _fun0002_ip = 90; continue _fun0002 }
case 91:
                    var4 = false;
                    return var4;
case 90:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 72;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.isQuestPreviewTool2Enabled;
                    var4 = {};
                    var8 = _closure1_slot22;
                    var8 = var8.QUEST_PREVIEW_TOOL_2;
                    var4['location'] = var8;
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0002_ip = 92; continue _fun0002 }
case 93:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 17;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 21;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.QUEST_PREVIEW_TOOL_2;
                        var2['screen'] = var5;
                        var5 = {};
                        var6 = _closure3_slot0;
                        var6 = var6.questId;
                        var5['questId'] = var6;
                        var2['params'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
case 92:
                    var4 = true;
                    return var4;
case 88:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 17;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 21;
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
case 86:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 71;
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
case 84:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 17;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getRootNavigationRef;
                    var8 = var4.bind(var5)();
                    _closure3_slot9 = var8;
                    var4 = null;
                    if(!(var4 != var8)) { _fun0002_ip = 94; continue _fun0002 }
case 95:
                    var6 = {};
                    var4 = _closure1_slot14;
                    var4 = var4.CONTENT_AND_SOCIAL;
                    var6['screen'] = var4;
                    var4 = {};
                    var5 = _closure1_slot24;
                    var5 = var5.CONNECTED_GAMES;
                    var4['tab'] = var5;
                    var6['params'] = var4;
                    _closure3_slot10 = var6;
                    var4 = var8.isReady;
                    var4 = var4.bind(var8)();
                    if(var4) { _fun0002_ip = 96; continue _fun0002 }
case 97:
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
                    _fun0002_ip = 94; continue _fun0002;
case 96:
                    var5 = var8.navigate;
                    var4 = 'settings';
                    var4 = var5.bind(var8)(var4, var6);
case 94:
                    var4 = true;
                    return var4;
case 82:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 70;
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
case 80:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 21;
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
case 78:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 69;
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
case 76:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 66;
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
                        var8 = 67;
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
                        var2 = 68;
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
case 74:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 65;
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
case 72:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 17;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 21;
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
case 70:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 63;
                        var2 = var7[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openCollectiblesShopMobile;
                        var2 = {};
                        var6 = _closure1_slot1;
                        var5 = 64;
                        var8 = var7[var5];
                        var8 = var6.bind(var1)(var8);
                        var9 = var8.DEEPLINK;
                        var8 = new Array(1);
                        var8[0] = var9;
                        var2['analyticsLocations'] = var8;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.DEEPLINK;
                        var2['analyticsSource'] = var5;
                        var5 = _closure3_slot0;
                        var6 = var5.screen;
                        var2['screen'] = var6;
                        var5 = var5.skuId;
                        var2['initialProductSkuId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
case 68:
                    var4 = var7.deepLinkAction;
                    _closure3_slot8 = var4;
                    var5 = _closure1_slot7;
                    var6 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 98:
                                var5 = _closure3_slot8;
                                var3 = _closure1_slot21;
                                var3 = var3.PREMIUM_CHECKOUT_SUCCESS;
                                if(!(var5 !== var3)) { _fun0003_ip = 99; continue _fun0003 }
case 100:
                                var5 = _closure3_slot8;
                                var3 = _closure1_slot21;
                                var3 = var3.PREMIUM_SUBSCRIPTION_UPDATE;
                                if(!(var5 !== var3)) { _fun0003_ip = 101; continue _fun0003 }
case 102:
                                var5 = _closure3_slot8;
                                var3 = _closure1_slot21;
                                var3 = var3.GUILD_BOOST_CHECKOUT_SUCCESS;
                                if(!(var5 === var3)) { _fun0003_ip = 103; continue _fun0003 }
case 104:
                                var7 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var5 = 17;
                                var5 = var3[var5];
                                var6 = undefined;
                                var7 = var7.bind(var6)(var5);
                                var5 = var7.popAll;
                                var5 = var5.bind(var7)();
                                var4 = _closure3_slot0;
                                var9 = var4.guildId;
                                var5 = _closure1_slot0;
                                var4 = 28;
                                var4 = var3[var4];
                                var5 = var5.bind(var6)(var4);
                                var4 = 40;
                                var4 = var3[var4];
                                var3 = var3.paths;
                                var3 = var5.bind(var6)(var4, var3);
                                SaveGenerator(address=158);
case 105:
                                return var3;
case 106:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                if(var4) { _fun0003_ip = 107; continue _fun0003 }
case 108:
                                var5 = var3.default;
                                var4 = var5.getGuild;
                                var5 = var4.bind(var5)(var9);
                                var4 = null;
                                if(!(var4 != var5)) { _fun0003_ip = 103; continue _fun0003 }
case 109:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var4 = 41;
                                var4 = var8[var4];
                                var7 = var7.bind(var6)(var4);
                                var4 = var7.transitionToGuild;
                                var4 = var4.bind(var7)(var9);
                                var7 = _closure1_slot1;
                                var4 = 62;
                                var4 = var8[var4];
                                var4 = var7.bind(var6)(var4);
                                var4 = var4.bind(var6)(var5);
                                _fun0003_ip = 103; continue _fun0003;
case 107:
                                return var3;
case 101:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 61;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.fetchSubscriptions;
                                var3 = var3.bind(var4)();
                                _fun0003_ip = 103; continue _fun0003;
case 99:
                                var4 = _closure1_slot9;
                                var3 = undefined;
                                var2 = 'succeeded';
                                var2 = var4.bind(var3)(var2);
case 103:
                                var2 = undefined;
                                return var2;
case 26:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var6.bind(var3)(var4);
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
case 66:
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var4 = 60;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.openBuildInstallerUrl;
                    var4 = var7.url;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
case 64:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 17;
                        var2 = var7[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var6 = _closure1_slot0;
                        var2 = 21;
                        var2 = var7[var2];
                        var4 = var6.bind(var1)(var2);
                        var3 = var4.openUserSettings;
                        var2 = {};
                        var5 = _closure1_slot14;
                        var5 = var5.ACCOUNT;
                        var2['screen'] = var5;
                        var5 = 59;
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
case 61:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 58;
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
case 59:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 56;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isIOS;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0002_ip = 110; continue _fun0002 }
case 111:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 17;
                    var8 = var4[var5];
                    var11 = var6.bind(var3)(var8);
                    var8 = var11.popAll;
                    var8 = var8.bind(var11)();
                    var5 = var4[var5];
                    var12 = var6.bind(var3)(var5);
                    var11 = var12.pushLazy;
                    var6 = _closure1_slot0;
                    var5 = 28;
                    var5 = var4[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = 57;
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
case 110:
                    var4 = true;
                    return var4;
case 57:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 55;
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
case 55:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 54;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showModal;
                    var4 = var7.userCode;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
case 53:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = _closure3_slot0;
                            var3 = var2.guildId;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0004_ip = 104; continue _fun0004 }
case 112:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 53;
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
case 104:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
case 51:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 17;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 21;
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
case 49:
                    var5 = _closure1_slot7;
                    var6 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0005_ip = 113; continue _fun0005 }
case 98:
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
                                if(!(var5 != var6)) { _fun0005_ip = 114; continue _fun0005 }
case 115:
                                var7 = {};
                                var7['code'] = var9;
                                var7['state'] = var6;
                                var13 = var2;
                                var9 = 'openid.';
                                var6 = undefined;
                                var2 = undefined;
                                for(var10 in var13)
case 116:
                                {
                                    var16 = var6;
                                    var2 = var16;
case 117:
                                    var17 = var10;
                                    var18 = var17.startsWith;
                                    var18 = var18.bind(var17)(var9);
                                    var6 = var16;
                                    if(!var18) { _fun0005_ip = 116; continue _fun0005 }
case 118:
                                    var6 = var16;
                                    if(!(var5 == var16)) { _fun0005_ip = 119; continue _fun0005 }
case 120:
                                    var6 = {};
case 119:
                                    var16 = var15[var17];
                                    var6[var17] = var16;
                                    _fun0005_ip = 116; continue _fun0005;
                                }
case 121:
                                if(!(var5 != var2)) { _fun0005_ip = 11; continue _fun0005 }
case 105:
                                var7['openid_params'] = var2;
case 11:
                                var6 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var2 = 17;
                                var2 = var9[var2];
                                var10 = var6.bind(var3)(var2);
                                var2 = var10.popAll;
                                var2 = var2.bind(var10)();
                                var10 = _closure1_slot0;
                                var2 = 21;
                                var2 = var9[var2];
                                var11 = var10.bind(var3)(var2);
                                var10 = var11.openUserSettings;
                                var2 = {};
                                var12 = _closure1_slot14;
                                var12 = var12.CONNECTIONS;
                                var2['screen'] = var12;
                                var2 = var10.bind(var11)(var2);
                                var2 = 51;
                                var2 = var9[var2];
                                var6 = var6.bind(var3)(var2);
                                var2 = var6.callback;
                                var2 = var2.bind(var6)(var8, var7);
                                SaveGenerator(address=264);
case 122:
                                return var2;
case 22:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(var6) { _fun0005_ip = 123; continue _fun0005 }
case 124:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var6 = 52;
                                var6 = var8[var6];
                                var8 = var7.bind(var3)(var6);
                                var7 = var8.toURLSafe;
                                var9 = var2.body;
                                var10 = var5 == var9;
                                var6 = undefined;
                                if(var10) { _fun0005_ip = 125; continue _fun0005 }
case 126:
                                var6 = var9.redirect;
case 125:
                                var7 = var7.bind(var8)(var6);
                                if(!(var5 != var7)) { _fun0005_ip = 114; continue _fun0005 }
case 127:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var4 = 38;
                                var4 = var6[var4];
                                var6 = var5.bind(var3)(var4);
                                var5 = var6.openURL;
                                var4 = var7.toString;
                                var4 = var4.bind(var7)();
                                var4 = var5.bind(var6)(var4);
case 114:
                                return var3;
case 123:
                                return var2;
case 113:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var6.bind(var3)(var4);
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
case 47:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = _closure3_slot0;
                            var1 = var1.callbackCode;
                            var3 = null;
                            var1 = var3 != var1;
                            if(!var1) { _fun0006_ip = 128; continue _fun0006 }
case 129:
                            var2 = _closure3_slot0;
                            var2 = var2.callbackState;
                            var1 = var3 != var2;
case 128:
                            if(!var1) { _fun0006_ip = 130; continue _fun0006 }
case 131:
                            var2 = _closure3_slot0;
                            var2 = var2.provider;
                            var1 = var3 != var2;
case 130:
                            if(!var1) { _fun0006_ip = 132; continue _fun0006 }
case 133:
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
case 132:
                            if(!var1) { _fun0006_ip = 134; continue _fun0006 }
case 135:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 50;
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
case 134:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
case 45:
                    var4 = var7.guildId;
                    var5 = null;
                    if(!(var5 != var4)) { _fun0002_ip = 136; continue _fun0002 }
case 137:
                    var4 = var7.highlightChannelId;
                    var4 = var5 != var4;
                    var8 = undefined;
                    if(!var4) { _fun0002_ip = 138; continue _fun0002 }
case 139:
                    var4 = var7.highlightMessageId;
                    var4 = var5 != var4;
                    var8 = undefined;
                    if(!var4) { _fun0002_ip = 138; continue _fun0002 }
case 140:
                    var4 = {};
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var5 = 48;
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
case 138:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 49;
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
case 136:
                    var4 = true;
                    return var4;
case 43:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 47;
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
case 41:
                    var5 = _closure1_slot7;
                    var6 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0007_ip = 141; continue _fun0007 }
case 98:
                                var2 = _closure3_slot0;
                                var2 = var2.guildId;
                                var5 = null;
                                var2 = var5 != var2;
                                if(!var2) { _fun0007_ip = 142; continue _fun0007 }
case 143:
                                var3 = _closure3_slot0;
                                var3 = var3.channelId;
                                var2 = var5 != var3;
case 142:
                                if(!var2) { _fun0007_ip = 144; continue _fun0007 }
case 145:
                                var3 = _closure3_slot0;
                                var3 = var3.userId;
                                var2 = var5 != var3;
case 144:
                                if(!var2) { _fun0007_ip = 146; continue _fun0007 }
case 147:
                                var8 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var3 = 17;
                                var3 = var2[var3];
                                var6 = undefined;
                                var8 = var8.bind(var6)(var3);
                                var3 = var8.popAll;
                                var3 = var3.bind(var8)();
                                var8 = _closure1_slot0;
                                var3 = 28;
                                var3 = var2[var3];
                                var8 = var8.bind(var6)(var3);
                                var3 = 40;
                                var3 = var2[var3];
                                var2 = var2.paths;
                                var2 = var8.bind(var6)(var3, var2);
                                SaveGenerator(address=139);
case 148:
                                return var2;
case 149:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0007_ip = 150; continue _fun0007 }
case 151:
                                var9 = var2.default;
                                var8 = var9.getGuild;
                                var3 = _closure3_slot0;
                                var3 = var3.guildId;
                                var3 = var8.bind(var9)(var3);
                                if(!(var5 != var3)) { _fun0007_ip = 152; continue _fun0007 }
case 153:
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var3 = 41;
                                var3 = var8[var3];
                                var8 = var5.bind(var6)(var3);
                                var5 = var8.transitionToGuild;
                                var3 = _closure3_slot0;
                                var3 = var3.guildId;
                                var3 = var5.bind(var8)(var3);
case 152:
                                var5 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var3 = 45;
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
case 146:
                                var3 = _closure3_slot0;
                                var5 = var3.action;
                                var3 = 'transfer_cancelled';
                                var3 = var3 === var5;
                                if(!var3) { _fun0007_ip = 154; continue _fun0007 }
case 155:
                                var4 = _closure3_slot0;
                                var5 = var4.via;
                                var4 = 'xbox';
                                var3 = var4 === var5;
case 154:
                                if(!var3) { _fun0007_ip = 123; continue _fun0007 }
case 156:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 46;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.disconnectRemote;
                                var3 = var3.bind(var4)();
case 123:
                                var3 = undefined;
                                return var3;
case 150:
                                return var2;
case 141:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var6.bind(var3)(var4);
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
case 39:
                    var12 = var7.nonce;
                    var5 = var7.redirectUrl;
                    var4 = var7.fingerprint;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var6 = 44;
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
case 37:
                    var5 = _closure1_slot7;
                    var6 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0008_ip = 157; continue _fun0008 }
case 98:
                                var6 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var3 = 17;
                                var5 = var2[var3];
                                var3 = undefined;
                                var6 = var6.bind(var3)(var5);
                                var5 = var6.popAll;
                                var5 = var5.bind(var6)();
                                var5 = _closure3_slot0;
                                var10 = var5.guildId;
                                var9 = var5.guildEventId;
                                var6 = _closure1_slot0;
                                var5 = 28;
                                var5 = var2[var5];
                                var6 = var6.bind(var3)(var5);
                                var5 = 40;
                                var5 = var2[var5];
                                var2 = var2.paths;
                                var2 = var6.bind(var3)(var5, var2);
                                SaveGenerator(address=101);
case 158:
                                return var2;
case 159:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0008_ip = 160; continue _fun0008 }
case 161:
                                var6 = var2.default;
                                var5 = var6.getGuild;
                                var6 = var5.bind(var6)(var10);
                                var5 = null;
                                if(!(var5 != var6)) { _fun0008_ip = 11; continue _fun0008 }
case 162:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var6 = 41;
                                var6 = var8[var6];
                                var7 = var7.bind(var3)(var6);
                                var6 = var7.transitionToGuild;
                                var6 = var6.bind(var7)(var10);
case 11:
                                var7 = _closure1_slot8;
                                var6 = var7.getGuildScheduledEvent;
                                var7 = var6.bind(var7)(var9);
                                if(!(var5 == var7)) { _fun0008_ip = 163; continue _fun0008 }
case 164:
                                var8 = _closure1_slot1;
                                var11 = _closure1_slot3;
                                var6 = 42;
                                var6 = var11[var6];
                                var8 = var8.bind(var3)(var6);
                                var6 = var8.fetchGuildEvent;
                                var6 = var6.bind(var8)(var10, var9);
                                SaveGenerator(address=217);
case 165:
                                return var6;
case 166:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                var7 = var6;
                                if(!var8) { _fun0008_ip = 163; continue _fun0008 }
case 167:
                                return var6;
case 163:
                                if(!(var5 != var7)) { _fun0008_ip = 24; continue _fun0008 }
case 168:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var4 = 43;
                                var4 = var6[var4];
                                var6 = var5.bind(var3)(var4);
                                var5 = var6.openGuildEventDetails;
                                var4 = {};
                                var8 = var7.id;
                                var4['eventId'] = var8;
                                var4['event'] = var7;
                                var4 = var5.bind(var6)(var4);
case 24:
                                return var3;
case 160:
                                return var2;
case 157:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var6.bind(var3)(var4);
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
case 35:
                    var11 = var7.overrideUrl;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 17;
                    var8 = var4[var5];
                    var12 = var6.bind(var3)(var8);
                    var8 = var12.popAll;
                    var8 = var8.bind(var12)();
                    var5 = var4[var5];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.pushLazy;
                    var12 = _closure1_slot0;
                    var5 = 28;
                    var5 = var4[var5];
                    var12 = var12.bind(var3)(var5);
                    var5 = 39;
                    var5 = var4[var5];
                    var4 = var4.paths;
                    var5 = var12.bind(var3)(var5, var4);
                    var4 = {};
                    var4['overrideUrl'] = var11;
                    var4 = var6.bind(var8)(var5, var4);
                    var4 = true;
                    return var4;
case 33:
                    var5 = var7.userId;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 169; continue _fun0002 }
case 170:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 20;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showUserProfileActionSheetPostConnection;
                    var4 = {};
                    var8 = var7.userId;
                    var4['userId'] = var8;
                    var4 = var5.bind(var6)(var4);
case 169:
                    var4 = true;
                    return var4;
case 31:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 38;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.openURLExternally;
                    var4 = var7.promoUrl;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
case 29:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 38;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.performURLNavigation;
                    var4 = var7.url;
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
case 27:
                    var5 = var7.remoteAuthFingerprint;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 171; continue _fun0002 }
case 172:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 36;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.requestPermission;
                    var4 = _closure1_slot18;
                    var4 = var4.CAMERA;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.then;
                    var4 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            if(!var1) { _fun0009_ip = 173; continue _fun0009 }
case 174:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var3 = 17;
                            var3 = var1[var3];
                            var6 = undefined;
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.pushLazy;
                            var5 = _closure1_slot0;
                            var2 = 28;
                            var2 = var1[var2];
                            var5 = var5.bind(var6)(var2);
                            var2 = 37;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var5.bind(var6)(var2, var1);
                            var1 = {};
                            var5 = true;
                            var1['showHelp'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
case 173:
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
case 171:
                    var4 = true;
                    return var4;
case 25:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 17;
                            var3 = var5[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.popAll;
                            var3 = var3.bind(var4)();
                            var4 = _closure1_slot0;
                            var3 = 31;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.isMidjourneyOnboardingFlow;
                            var3 = var3.bind(var4)();
                            if(var3) { _fun0010_ip = 175; continue _fun0010 }
case 176:
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = 35;
                            var3 = var8[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.openOAuth2Modal;
                            var3 = {};
                            var6 = _closure3_slot0;
                            var9 = var6.props;
                            var10 = var3;
                            var6 = copyDataProperties(var10, var9);
                            var7 = _closure1_slot1;
                            var6 = 33;
                            var6 = var8[var6];
                            var7 = var7.bind(var1)(var6);
                            var6 = 'callback';
                            var3[var6] = var7;
                            var3 = var4.bind(var5)(var3);
                            _fun0010_ip = 164; continue _fun0010;
case 175:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 34;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.openCreateGuildModal;
                            var2 = function(arg1) {
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot3;
                                var3 = 17;
                                var4 = var9[var3];
                                var1 = undefined;
                                var5 = var8.bind(var1)(var4);
                                var4 = var5.popAll;
                                var4 = var4.bind(var5)();
                                var3 = var9[var3];
                                var6 = var8.bind(var1)(var3);
                                var5 = var6.pushLazy;
                                var4 = _closure1_slot0;
                                var3 = 28;
                                var3 = var9[var3];
                                var7 = var4.bind(var1)(var3);
                                var3 = 32;
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
                                var7 = 33;
                                var7 = var9[var7];
                                var8 = var8.bind(var1)(var7);
                                var7 = 'callback';
                                var3[var7] = var8;
                                var8 = function dismissOAuthModal() {
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot3;
                                    var1 = 17;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.popWithKey;
                                    var2 = _closure1_slot19;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                };
                                var7 = 'dismissOAuthModal';
                                var3[var7] = var8;
                                var2 = _closure1_slot19;
                                var2 = var5.bind(var6)(var4, var3, var2);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
case 164:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
case 23:
                    var4 = null;
                    var5 = var7;
                    if(!(var4 == var5)) { _fun0002_ip = 177; continue _fun0002 }
case 178:
                    var5 = {};
case 177:
                    var5 = var5.pathname;
                    var4 = null;
                    if(!(var3 !== var5)) { _fun0002_ip = 179; continue _fun0002 }
case 180:
                    var4 = var5;
case 179:
                    _closure3_slot7 = var4;
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 17;
                            var2 = var5[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.popAll;
                            var2 = var2.bind(var4)();
                            var4 = _closure1_slot0;
                            var2 = 21;
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
                            if(!var4) { _fun0011_ip = 117; continue _fun0011 }
case 181:
                            var7 = _closure1_slot20;
                            var6 = var7.test;
                            var5 = _closure3_slot7;
                            var4 = var6.bind(var7)(var5);
case 117:
                            if(!var4) { _fun0011_ip = 106; continue _fun0011 }
case 182:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var3 = 30;
                            var3 = var5[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.handleFamilyCenterQRCodeScan;
                            var3 = _closure3_slot7;
                            var2 = 'NativeCameraScan';
                            var2 = var4.bind(var5)(var3, var2);
case 106:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
case 21:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 17;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 21;
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
case 18:
                    var12 = var7.guildId;
                    var11 = var7.channelId;
                    var5 = var7.type;
                    var4 = _closure1_slot12;
                    var4 = var4.MESSAGE;
                    var8 = undefined;
                    var6 = undefined;
                    if(!(var5 === var4)) { _fun0002_ip = 183; continue _fun0002 }
case 184:
                    var8 = var7.messageId;
                    var6 = var7.summaryId;
case 183:
                    var5 = null;
                    var4 = var5 != var12;
                    if(!var4) { _fun0002_ip = 185; continue _fun0002 }
case 186:
                    var4 = var5 != var11;
case 185:
                    if(!var4) { _fun0002_ip = 187; continue _fun0002 }
case 188:
                    var5 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var4 = 29;
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
case 187:
                    var4 = true;
                    return var4;
case 16:
                    var8 = var7.giftCode;
                    var4 = null;
                    var4 = var4 != var8;
                    if(!var4) { _fun0002_ip = 189; continue _fun0002 }
case 190:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 25;
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
                        var1 = 26;
                        var4 = var2[var1];
                        var1 = undefined;
                        var9 = var5.bind(var1)(var4);
                        var8 = var9.track;
                        var4 = _closure1_slot11;
                        var7 = var4.OPEN_MODAL;
                        var4 = {'type': 'gift_accept', 'location': null};
                        var4 = var8.bind(var9)(var7, var4);
                        var4 = 17;
                        var4 = var2[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.pushLazy;
                        var7 = _closure1_slot0;
                        var3 = 28;
                        var3 = var2[var3];
                        var7 = var7.bind(var1)(var3);
                        var3 = 27;
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
case 189:
                    return var4;
case 14:
                    var4 = var7.guildTemplateCode;
                    _closure3_slot6 = var4;
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 22;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.clearDisplayedInvite;
                            var2 = var2.bind(var4)();
                            var5 = _closure3_slot6;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0012_ip = 191; continue _fun0012 }
case 192:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 24;
                            var4 = var5[var4];
                            var6 = var6.bind(var1)(var4);
                            var4 = var6.dismissGlobalKeyboard;
                            var4 = var4.bind(var6)();
                            var4 = _closure1_slot1;
                            var3 = 23;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.showModal;
                            var2 = _closure3_slot6;
                            var2 = var3.bind(var4)(var2);
case 191:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
                    var4 = true;
                    return var4;
case 12:
                    var9 = var7.inviteCode;
                    _closure3_slot3 = var9;
                    var8 = var7.username;
                    _closure3_slot4 = var8;
                    var10 = var7.deeplinkAttemptId;
                    _closure3_slot5 = var10;
                    var5 = _closure1_slot10;
                    var4 = var5.isAuthenticated;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0002_ip = 193; continue _fun0002 }
case 194:
                    var4 = null;
                    if(!(var4 != var9)) { _fun0002_ip = 193; continue _fun0002 }
case 195:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 22;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showInvite;
                    var4 = {};
                    var4['deeplinkAttemptId'] = var10;
                    var10 = 'Deep Link';
                    var4['location'] = var10;
                    var4 = var5.bind(var6)(var9, var8, var4);
                    _fun0002_ip = 196; continue _fun0002;
case 193:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 23;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.hideModal;
                            var3 = var3.bind(var4)();
                            var4 = _closure3_slot3;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0013_ip = 197; continue _fun0013 }
case 192:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 24;
                            var2 = var4[var2];
                            var5 = var3.bind(var1)(var2);
                            var2 = var5.dismissGlobalKeyboard;
                            var2 = var2.bind(var5)();
                            var2 = 22;
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
case 197:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var4);
case 196:
                    var4 = true;
                    return var4;
case 10:
                    var5 = _closure1_slot7;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 17;
                        var2 = var4[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.popAll;
                        var2 = var2.bind(var3)();
                        var3 = _closure1_slot0;
                        var2 = 21;
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
case 8:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 17;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getRootNavigationRef;
                    var8 = var4.bind(var5)();
                    _closure3_slot2 = var8;
                    var5 = null;
                    if(!(var5 != var8)) { _fun0002_ip = 198; continue _fun0002 }
case 199:
                    var4 = var8.isReady;
                    var4 = var4.bind(var8)();
                    if(var4) { _fun0002_ip = 200; continue _fun0002 }
case 201:
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
                    _fun0002_ip = 198; continue _fun0002;
case 200:
                    var6 = var8.navigate;
                    var4 = 'friends';
                    var4 = var6.bind(var8)(var4);
case 198:
                    var4 = var7.userId;
                    if(!(var5 != var4)) { _fun0002_ip = 202; continue _fun0002 }
case 203:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var4 = 20;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.showUserProfileActionSheetPostConnection;
                    var4 = {};
                    var7 = var7.userId;
                    var4['userId'] = var7;
                    var4 = var5.bind(var6)(var4);
case 202:
                    var4 = true;
                    return var4;
case 6:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 17;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.popAll;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getRootNavigationRef;
                    var6 = var4.bind(var5)();
                    _closure3_slot1 = var6;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0002_ip = 204; continue _fun0002 }
case 205:
                    var4 = var6.isReady;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0002_ip = 206; continue _fun0002 }
case 207:
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
                    _fun0002_ip = 208; continue _fun0002;
case 206:
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
                    _fun0002_ip = 208; continue _fun0002;
case 204:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 19;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.openAddFriendModalDeeplink;
                    var2 = var2.bind(var4)();
case 208:
                    var2 = true;
                    return var2;
case 4:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 17;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.popAll;
                    var2 = var2.bind(var4)();
                    var4 = _closure1_slot0;
                    var2 = 18;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.getRootNavigationRef;
                    var6 = var2.bind(var4)();
                    var2 = null;
                    if(!(var2 != var6)) { _fun0002_ip = 209; continue _fun0002 }
case 210:
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
case 209:
                    var2 = true;
                    return var2;
case 2:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 16;
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
            if(!var2) { _fun0001_ip = 130; continue _fun0001 }
case 211:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 73;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.browserManagerCloseBrowser;
            var1 = var1.bind(var3)();
case 130:
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 212; continue _fun0001 }
case 213:
            var1 = var2;
case 212:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();