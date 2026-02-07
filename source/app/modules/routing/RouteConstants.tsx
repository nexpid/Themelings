// app/modules/routing/RouteConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = require;
        var3 = exports;
        var11 = dependencyMap;
        var2 = global;
        var6 = var2.Object;
        var5 = var6.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var6)(var3, var1, var4);
        var1 = 0;
        var4 = var11[var1];
        var1 = undefined;
        var4 = var10.bind(var1)(var4);
        var17 = var4.CONFERENCE_MODE_ENABLED;
        var4 = 1;
        var4 = var11[var4];
        var4 = var10.bind(var1)(var4);
        var4 = var4.GlobalDiscoveryAppsSections;
        var _closure1_slot0 = var4;
        var4 = 2;
        var4 = var11[var4];
        var4 = var10.bind(var1)(var4);
        var4 = var4.ApplicationDirectoryProfileSections;
        var _closure1_slot1 = var4;
        var4 = new Array(4);
        var8 = '@me';
        var4[0] = var8;
        var7 = '@favorites';
        var4[1] = var7;
        var5 = '@guilds-empty-nux';
        var4[2] = var5;
        var6 = '@inbox';
        var4[3] = var6;
        var12 = var2.Object;
        var9 = var12.freeze;
        var2 = {'INDEX': '/', 'APP': '/app', 'APP_WITH_INVITE_AND_GUILD_ONBOARDING': null, 'APP_WITH_GIFT_CODE': null, 'ACTIVITY': '/activity', 'ACTIVITIES': '/activities', 'ACTIVITIES_HAPPENING_NOW': '/activities/happening-now', 'ACTIVITY_DETAILS': null, 'APPLICATION_LIBRARY': '/library', 'APPLICATION_LIBRARY_INVENTORY': '/library/inventory'};
        var14 = function APP_WITH_INVITE_AND_GUILD_ONBOARDING(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/app/invite-with-guild-onboarding/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['APP_WITH_INVITE_AND_GUILD_ONBOARDING'] = var14;
        var14 = function APP_WITH_GIFT_CODE(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/app/gifts/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['APP_WITH_GIFT_CODE'] = var14;
        var14 = function ACTIVITY_DETAILS(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/activities/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['ACTIVITY_DETAILS'] = var14;
        var14 = function APPLICATION_LIBRARY_ACTION(arg1, arg2) {
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '/library/';
            var3 = arg1;
            var2 = '/';
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2['APPLICATION_LIBRARY_ACTION'] = var14;
        var14 = '/library/settings';
        var2['APPLICATION_LIBRARY_SETTINGS'] = var14;
        var14 = '/store';
        var2['APPLICATION_STORE'] = var14;
        var15 = function APPLICATION_STORE_LISTING_SKU(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg2;
                var1 = null;
                var1 = var1 != var3;
                var4 = '';
                if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '/';
                var4 = var2.bind(var1)(var3);
case 2:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '/store/skus/';
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4);
                return var1;
            }
        };
        var2['APPLICATION_STORE_LISTING_SKU'] = var15;
        var15 = function APPLICATION_STORE_LISTING_APPLICATION(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg2;
                var1 = null;
                var1 = var1 != var3;
                var4 = '';
                if(!var1) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '/';
                var4 = var2.bind(var1)(var3);
case 2:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '/store/applications/';
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4);
                return var1;
            }
        };
        var2['APPLICATION_STORE_LISTING_APPLICATION'] = var15;
        var15 = '/billing';
        var2['BILLING_PREFIX'] = var15;
        var15 = '/billing/login/handoff';
        var2['BILLING_LOGIN_HANDOFF'] = var15;
        var15 = '/billing/premium/subscribe';
        var2['BILLING_PREMIUM_SUBSCRIBE'] = var15;
        var15 = '/billing/payment-sources/create';
        var2['BILLING_PAYMENT_SOURCES_CREATE'] = var15;
        var15 = '/billing/premium/switch-plan';
        var2['BILLING_PREMIUM_SWITCH_PLAN'] = var15;
        var15 = '/billing/guild-subscriptions/purchase';
        var2['BILLING_GUILD_SUBSCRIPTIONS_PURCHASE'] = var15;
        var15 = '/billing/payments';
        var2['BILLING_PAYMENTS'] = var15;
        var15 = function BILLING_PROMOTION_REDEMPTION(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/billing/promotions/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['BILLING_PROMOTION_REDEMPTION'] = var15;
        var15 = '/billing/promotions';
        var2['BILLING_PROMOTION_REDEMPTION_GENERIC'] = var15;
        var15 = function BILLING_PROMOTION_DIRECT_FULFILLMENT_REDEMPTION(arg1, arg2) {
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '/billing/partner-promotions/';
            var3 = arg1;
            var2 = '/';
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2['BILLING_PROMOTION_DIRECT_FULFILLMENT_REDEMPTION'] = var15;
        var15 = '/notifications';
        var2['NOTIFICATIONS'] = var15;
        var15 = '/channels/@me';
        var2['FRIENDS'] = var15;
        var2['ME'] = var15;
        var15 = '/message-requests';
        var2['MESSAGE_REQUESTS'] = var15;
        var15 = function CHANNEL(arg1, arg2, arg3) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var8 = arg2;
                var6 = arg3;
                var2 = null;
                if(!(var2 != var8)) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                var7 = var4;
                if(var4) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                var7 = '@me';
case 6:
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var3 = '/channels/';
                var1 = '/';
                var5 = var5.bind(var3)(var7, var1, var8);
                _fun0004_ip = 8; continue _fun0004;
case 4:
                if(var4) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var4 = '@me';
case 9:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '/channels/';
                var5 = var3.bind(var1)(var4);
case 8:
                var1 = var5;
                if(!(var2 != var6)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '/';
                var1 = var4.bind(var3)(var5, var2, var6);
case 11:
                return var1;
            }
        };
        var2['CHANNEL'] = var15;
        var15 = function CHANNEL_THREAD_VIEW(arg1, arg2, arg3, arg4) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = arg4;
                var2 = global;
                var1 = var2.HermesInternal;
                var9 = var1.concat;
                var15 = '/channels/';
                var14 = arg1;
                var5 = '/';
                var12 = arg2;
                var11 = '/threads/';
                var10 = arg3;
                var13 = var5;
                var4 = var15[var9](var14, var13, var12, var11, var10, var9);
                var3 = null;
                var1 = var4;
                if(!(var3 != var6)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var1 = var3.bind(var2)(var4, var5, var6);
case 13:
                return var1;
            }
        };
        var2['CHANNEL_THREAD_VIEW'] = var15;
        var15 = function VOICE_CHAT_CHANNEL_PARTIAL(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arg3;
                var2 = global;
                var1 = var2.HermesInternal;
                var7 = var1.concat;
                var4 = '/voice/';
                var3 = arg1;
                var5 = '/';
                var1 = arg2;
                var4 = var7.bind(var4)(var3, var5, var1);
                var3 = null;
                var1 = var4;
                if(!(var3 != var6)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '';
                var1 = var3.bind(var2)(var4, var5, var6);
case 15:
                return var1;
            }
        };
        var2['VOICE_CHAT_CHANNEL_PARTIAL'] = var15;
        var15 = '/login';
        var2['LOGIN'] = var15;
        var16 = '/login/handoff';
        var2['LOGIN_HANDOFF'] = var16;
        var16 = '/login/one-time';
        var2['LOGIN_ONE_TIME'] = var16;
        var16 = '/register';
        var2['REGISTER'] = var16;
        if(!var17) { _fun0001_ip = 17; continue _fun0001 }
case 18:
        var15 = var16;
case 17:
        var2['DEFAULT_LOGGED_OUT'] = var15;
        var15 = function INVITE(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/invite/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['INVITE'] = var15;
        var15 = function INVITE_LOGIN(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/invite/';
            var2 = arg1;
            var1 = '/login';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['INVITE_LOGIN'] = var15;
        var15 = function INVITE_REGISTER(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/invite/';
            var2 = arg1;
            var1 = '/register';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['INVITE_REGISTER'] = var15;
        var15 = function INVITE_PROXY(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/invite-proxy/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['INVITE_PROXY'] = var15;
        var15 = function GUILD_TEMPLATE(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/template/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['GUILD_TEMPLATE'] = var15;
        var15 = function GUILD_TEMPLATE_LOGIN(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/template/';
            var2 = arg1;
            var1 = '/login';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['GUILD_TEMPLATE_LOGIN'] = var15;
        var15 = function GIFT_CODE(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/gifts/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['GIFT_CODE'] = var15;
        var15 = function GIFT_CODE_LOGIN(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/gifts/';
            var2 = arg1;
            var1 = '/login';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['GIFT_CODE_LOGIN'] = var15;
        var15 = function WELCOME(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var6 = arg2;
                var3 = null;
                if(!(var3 == var6)) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                var1 = var3 != var2;
                var5 = '@me';
                if(!var1) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                var5 = var2;
case 21:
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var1 = '/welcome/';
                var1 = var4.bind(var1)(var5);
                _fun0007_ip = 23; continue _fun0007;
case 19:
                var3 = var3 != var2;
                var5 = '@me';
                if(!var3) { _fun0007_ip = 15; continue _fun0007 }
case 24:
                var5 = var2;
case 15:
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '/welcome/';
                var2 = '/';
                var1 = var4.bind(var3)(var5, var2, var6);
case 23:
                return var1;
            }
        };
        var2['WELCOME'] = var15;
        var15 = '/verify';
        var2['VERIFY'] = var15;
        var15 = '/verify-request';
        var2['VERIFY_REQUEST'] = var15;
        var15 = '/reset';
        var2['RESET'] = var15;
        var15 = '/apps';
        var2['APPS'] = var15;
        var15 = '/activate';
        var2['ACTIVATE'] = var15;
        var15 = '/activate/handoff';
        var2['ACTIVATE_HANDOFF'] = var15;
        var15 = function CONNECTION_LINK(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/connections/';
            var2 = arg1;
            var1 = '/link';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['CONNECTION_LINK'] = var15;
        var15 = function CONNECTION_LINK_AUTHORIZE(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/connections/';
            var2 = arg1;
            var1 = '/link-authorize';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['CONNECTION_LINK_AUTHORIZE'] = var15;
        var15 = function CONNECTIONS_SUCCESS(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/connections/';
            var2 = arg1;
            var1 = '/success';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['CONNECTIONS_SUCCESS'] = var15;
        var15 = function CONNECTIONS_ERROR(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/connections/';
            var2 = arg1;
            var1 = '/error';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['CONNECTIONS_ERROR'] = var15;
        var15 = function CONNECTIONS(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/connections/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['CONNECTIONS'] = var15;
        var15 = function CONNECTIONS_AUTHORIZE_CONTINUE(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/connections/';
            var2 = arg1;
            var1 = '/authorize-continue';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['CONNECTIONS_AUTHORIZE_CONTINUE'] = var15;
        var15 = '/connect/authorize';
        var2['CONNECT_AUTHORIZE'] = var15;
        var15 = '/oauth2/authorize';
        var2['OAUTH2_AUTHORIZE'] = var15;
        var15 = '/oauth2/authorized';
        var2['OAUTH2_AUTHORIZED'] = var15;
        var15 = '/oauth2/error';
        var2['OAUTH2_ERROR'] = var15;
        var15 = function SETTINGS(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg2;
                var1 = null;
                var1 = var1 != var3;
                var4 = '';
                if(!var1) { _fun0008_ip = 2; continue _fun0008 }
case 3:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '/';
                var4 = var2.bind(var1)(var3);
case 2:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '/settings/';
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4);
                return var1;
            }
        };
        var2['SETTINGS'] = var15;
        var15 = '/snowsgiving';
        var2['SNOWSGIVING'] = var15;
        var15 = function PLAYGROUND(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var8 = arg1;
                var6 = arg2;
                var7 = null;
                var2 = var7 != var8;
                var4 = '/playground';
                var1 = var4;
                if(!var2) { _fun0009_ip = 25; continue _fun0009 }
case 26:
                var3 = global;
                var2 = var3.HermesInternal;
                var2 = var2.concat;
                var5 = '/';
                var2 = var2.bind(var5)(var8);
                var4 = var4 + var2;
                var2 = var4;
                if(!(var7 != var6)) { _fun0009_ip = 27; continue _fun0009 }
case 14:
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var3 = var3.bind(var5)(var6);
                var2 = var4 + var3;
case 27:
                var1 = var2;
case 25:
                return var1;
            }
        };
        var2['PLAYGROUND'] = var15;
        var15 = function CHANGELOGS(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                var2 = '';
                if(!var1) { _fun0010_ip = 2; continue _fun0010 }
case 3:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '/';
                var2 = var3.bind(var1)(var4);
case 2:
                var1 = '/settings/changelogs';
                var1 = var1 + var2;
                return var1;
            }
        };
        var2['CHANGELOGS'] = var15;
        var15 = function USERS(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/users/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['USERS'] = var15;
        var15 = '/guilds/create';
        var2['GUILD_CREATE'] = var15;
        var15 = '/disable-email-notifications';
        var2['DISABLE_EMAIL_NOTIFICATIONS'] = var15;
        var15 = '/disable-server-highlight-notifications';
        var2['DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS'] = var15;
        var15 = function USER_GUILD_NOTIFICATION_SETTINGS(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/guilds/';
            var2 = arg1;
            var1 = '/notification-settings';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['USER_GUILD_NOTIFICATION_SETTINGS'] = var15;
        var15 = '/authorize-ip';
        var2['AUTHORIZE_IP'] = var15;
        var15 = '/reject-ip';
        var2['REJECT_IP'] = var15;
        var15 = '/reject-mfa';
        var2['REJECT_MFA'] = var15;
        var15 = '/authorize-payment';
        var2['AUTHORIZE_PAYMENT'] = var15;
        var15 = '/handoff';
        var2['HANDOFF'] = var15;
        var15 = '/domain-migration';
        var2['DOMAIN_MIGRATION'] = var15;
        var15 = '/connections/xbox/intro';
        var2['XBOX_EDU'] = var15;
        var15 = '/connections/xbox/pin';
        var2['XBOX_PIN'] = var15;
        var15 = '/download-qr-code';
        var2['DOWNLOAD_QR_CODE_REDIRECT'] = var15;
        var15 = '/billing/popup-bridge/callback';
        var2['BILLING_POPUP_BRIDGE_CALLBACK'] = var15;
        var15 = '/oauth2/allowlist/accept';
        var2['OAUTH2_WHITELIST_ACCEPT'] = var15;
        var15 = '/guild-discovery';
        var2['GUILD_DISCOVERY'] = var15;
        var15 = '/discovery';
        var2['GLOBAL_DISCOVERY'] = var15;
        var15 = '/discovery/quests';
        var2['QUEST_HOME'] = var15;
        var15 = '/quest-home';
        var2['QUEST_HOME_V2'] = var15;
        var15 = '/discovery/servers';
        var2['GLOBAL_DISCOVERY_SERVERS'] = var15;
        var15 = '/discovery/applications';
        var2['GLOBAL_DISCOVERY_APPS'] = var15;
        var15 = function GLOBAL_DISCOVERY_APPS_CATEGORY(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/discovery/applications/categories/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['GLOBAL_DISCOVERY_APPS_CATEGORY'] = var15;
        var15 = function GLOBAL_DISCOVERY_APPS_PROFILE(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/discovery/applications/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['GLOBAL_DISCOVERY_APPS_PROFILE'] = var15;
        var15 = function GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(arg1, arg2) {
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '/discovery/applications/';
            var3 = arg1;
            var2 = '/';
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2['GLOBAL_DISCOVERY_APPS_PROFILE_SECTION'] = var15;
        var15 = function GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(arg1, arg2) {
            var1 = _closure1_slot0;
            var9 = var1.STORE;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var12 = '/discovery/applications/';
            var11 = arg1;
            var2 = '/';
            var7 = arg2;
            var10 = var2;
            var8 = var2;
            var1 = var12[var5](var11, var10, var9, var8, var7, var6);
            return var1;
        };
        var2['GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU'] = var15;
        var15 = '/discovery/applications/search';
        var2['GLOBAL_DISCOVERY_APPS_SEARCH'] = var15;
        var15 = function GUILD_MEMBER_VERIFICATION(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/member-verification/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['GUILD_MEMBER_VERIFICATION'] = var15;
        var15 = function GUILD_MEMBER_VERIFICATION_FOR_HUB(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg2;
                var1 = null;
                var1 = var1 != var3;
                var4 = '';
                if(!var1) { _fun0011_ip = 2; continue _fun0011 }
case 3:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '/';
                var4 = var2.bind(var1)(var3);
case 2:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '/member-verification-for-hub/';
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4);
                return var1;
            }
        };
        var2['GUILD_MEMBER_VERIFICATION_FOR_HUB'] = var15;
        var15 = '/popout';
        var2['POPOUT_WINDOW'] = var15;
        var15 = function UPCOMING_STAGES(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg2;
                var1 = null;
                var1 = var1 != var3;
                var4 = '';
                if(!var1) { _fun0012_ip = 2; continue _fun0012 }
case 3:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '/';
                var4 = var2.bind(var1)(var3);
case 2:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '/guild-stages/';
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4);
                return var1;
            }
        };
        var2['UPCOMING_STAGES'] = var15;
        var15 = '/verify-hub-email';
        var2['VERIFY_HUB_EMAIL'] = var15;
        var15 = '/open-app-from-email';
        var2['OPEN_APP_FROM_EMAIL'] = var15;
        var15 = '/billing/premium/manage';
        var2['BILLING_MANAGE_SUBSCRIPTION'] = var15;
        var15 = function BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arg2;
                var1 = null;
                var1 = var1 != var3;
                var4 = '';
                if(!var1) { _fun0013_ip = 28; continue _fun0013 }
case 3:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '&load_id=';
                var4 = var2.bind(var1)(var3);
case 28:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '/billing/premium/manage?deep_link_type=';
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4);
                return var1;
            }
        };
        var2['BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK'] = var15;
        var15 = function BILLING_STANDALONE_CHECKOUT_PAGE(arg1, arg2, arg3, arg4, arg5, arg6) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var6 = arg4;
                var5 = arg5;
                var3 = arg6;
                var1 = null;
                var2 = var1 != var6;
                var10 = '';
                var9 = var10;
                if(!var2) { _fun0014_ip = 29; continue _fun0014 }
case 22:
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = '&payment_method_type=';
                var9 = var4.bind(var2)(var6);
case 29:
                var2 = var1 != var5;
                var8 = var10;
                if(!var2) { _fun0014_ip = 30; continue _fun0014 }
case 4:
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = '&deep_link_type=';
                var8 = var4.bind(var2)(var5);
case 30:
                var1 = var1 != var3;
                if(!var1) { _fun0014_ip = 31; continue _fun0014 }
case 32:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '&use_preset_offer=';
                var10 = var2.bind(var1)(var3);
case 31:
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var19 = '/billing/premium/subscribe?plan_id=';
                var18 = arg1;
                var17 = '&gift=';
                var16 = arg2;
                var15 = '&load_id=';
                var14 = arg3;
                var13 = var9;
                var12 = var8;
                var11 = var10;
                var1 = var19[var7](var18, var17, var16, var15, var14, var13, var12, var11, var10);
                return var1;
            }
        };
        var2['BILLING_STANDALONE_CHECKOUT_PAGE'] = var15;
        var15 = function BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(arg1, arg2, arg3) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var7 = arg2;
                var3 = arg3;
                var1 = null;
                var2 = var1 != var7;
                var5 = '';
                var4 = var5;
                if(!var2) { _fun0015_ip = 33; continue _fun0015 }
case 34:
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = '&deep_link_type=';
                var4 = var6.bind(var2)(var7);
case 33:
                var1 = var1 != var3;
                if(!var1) { _fun0015_ip = 27; continue _fun0015 }
case 35:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '&load_id=';
                var5 = var2.bind(var1)(var3);
case 27:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '/billing/guild-subscriptions/purchase?guild_id=';
                var1 = arg1;
                var1 = var3.bind(var2)(var1, var4, var5);
                return var1;
            }
        };
        var2['BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE'] = var15;
        var15 = function GUILD_BOOSTING_MARKETING(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/guilds/';
            var2 = arg1;
            var1 = '/premium-guild-subscriptions';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['GUILD_BOOSTING_MARKETING'] = var15;
        var15 = function GUILD_SETTINGS(arg1, arg2, arg3) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = arg2;
                var6 = arg3;
                var3 = null;
                var1 = var3 != var4;
                var5 = '';
                var9 = var5;
                if(!var1) { _fun0016_ip = 36; continue _fun0016 }
case 34:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '/';
                var9 = var2.bind(var1)(var4);
case 36:
                var2 = global;
                var1 = var2.HermesInternal;
                var8 = var1.concat;
                var7 = '/guilds/';
                var4 = arg1;
                var1 = '/settings';
                var4 = var8.bind(var7)(var4, var1, var9);
                var1 = var4;
                if(!(var3 != var6)) { _fun0016_ip = 37; continue _fun0016 }
case 38:
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '/';
                var1 = var3.bind(var5)(var4, var2, var6);
case 37:
                return var1;
            }
        };
        var2['GUILD_SETTINGS'] = var15;
        var15 = function PICK_GUILD_SETTINGS(arg1, arg2, arg3) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var7 = arg1;
                var8 = arg2;
                var6 = arg3;
                var1 = null;
                var2 = var1 != var7;
                var4 = '';
                var3 = var4;
                if(!var2) { _fun0017_ip = 39; continue _fun0017 }
case 22:
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = '/';
                var3 = var5.bind(var2)(var7);
case 39:
                var2 = '/guilds/settings';
                var7 = var2 + var3;
                var3 = var7;
                if(!(var1 != var8)) { _fun0017_ip = 40; continue _fun0017 }
case 41:
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = '/';
                var3 = var5.bind(var4)(var7, var2, var8);
case 40:
                var1 = var1 != var6;
                var2 = var4;
                if(!var1) { _fun0017_ip = 42; continue _fun0017 }
case 43:
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var1 = '?feature=';
                var2 = var5.bind(var1)(var6);
case 42:
                var1 = global;
                var1 = var1.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var4)(var3, var2);
                return var1;
            }
        };
        var2['PICK_GUILD_SETTINGS'] = var15;
        var15 = function GUILD_EVENT_DETAILS(arg1, arg2, arg3) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = arg3;
                var3 = global;
                var1 = var3.HermesInternal;
                var7 = var1.concat;
                var6 = '/events/';
                var2 = arg1;
                var4 = '/';
                var1 = arg2;
                var2 = var7.bind(var6)(var2, var4, var1);
                var1 = null;
                var6 = var1 != var5;
                var1 = '';
                if(!var6) { _fun0018_ip = 9; continue _fun0018 }
case 44:
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var1 = var3.bind(var4)(var5);
case 9:
                var1 = var2 + var1;
                return var1;
            }
        };
        var2['GUILD_EVENT_DETAILS'] = var15;
        var15 = function FEATURE(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/feature/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['FEATURE'] = var15;
        var15 = function GUILD_FEATURE(arg1, arg2) {
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '/feature/';
            var3 = arg1;
            var2 = '/';
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2['GUILD_FEATURE'] = var15;
        var15 = function GUILD_JOIN_REQUEST(arg1, arg2) {
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '/guilds/';
            var3 = arg1;
            var2 = '/requests/';
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2['GUILD_JOIN_REQUEST'] = var15;
        var15 = '/mweb-handoff';
        var2['MOBILE_WEB_HANDOFF'] = var15;
        var15 = '/application-directory';
        var2['APPLICATION_DIRECTORY'] = var15;
        var15 = function APPLICATION_DIRECTORY_PROFILE(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/application-directory/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['APPLICATION_DIRECTORY_PROFILE'] = var15;
        var15 = function APPLICATION_DIRECTORY_PROFILE_SECTION(arg1, arg2) {
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '/application-directory/';
            var3 = arg1;
            var2 = '/';
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2['APPLICATION_DIRECTORY_PROFILE_SECTION'] = var15;
        var15 = function APPLICATION_DIRECTORY_PROFILE_STORE_SKU(arg1, arg2) {
            var1 = _closure1_slot1;
            var9 = var1.STORE;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var12 = '/application-directory/';
            var11 = arg1;
            var2 = '/';
            var7 = arg2;
            var10 = var2;
            var8 = var2;
            var1 = var12[var5](var11, var10, var9, var8, var7, var6);
            return var1;
        };
        var2['APPLICATION_DIRECTORY_PROFILE_STORE_SKU'] = var15;
        var15 = '/application-directory/search';
        var2['APPLICATION_DIRECTORY_SEARCH'] = var15;
        var15 = '/family-center';
        var2['FAMILY_CENTER'] = var15;
        var15 = function SERVER_SHOP(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/channels/';
            var2 = arg1;
            var1 = '/shop';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['SERVER_SHOP'] = var15;
        var15 = function CHANNELS_GAME_SHOP(arg1, arg2, arg3, arg4) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = arg2;
                var8 = arg3;
                var6 = arg4;
                var3 = global;
                var2 = var3.HermesInternal;
                var7 = var2.concat;
                var5 = '/channels/';
                var4 = arg1;
                var2 = '/game-shop';
                var2 = var7.bind(var5)(var4, var2);
                var7 = null;
                var5 = var7 != var1;
                var4 = 0;
                if(!var5) { _fun0019_ip = 14; continue _fun0019 }
case 19:
                var4 = var1;
case 14:
                var1 = var3.HermesInternal;
                var1 = var1.concat;
                var5 = '/';
                var1 = var1.bind(var5)(var4);
                var4 = var2 + var1;
                var1 = var4;
                if(!(var7 != var8)) { _fun0019_ip = 45; continue _fun0019 }
case 40:
                var2 = var3.HermesInternal;
                var2 = var2.concat;
                var2 = var2.bind(var5)(var8);
                var4 = var4 + var2;
                var2 = var4;
                if(!(var7 != var6)) { _fun0019_ip = 46; continue _fun0019 }
case 47:
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var3 = var3.bind(var5)(var6);
                var2 = var4 + var3;
case 46:
                var1 = var2;
case 45:
                return var1;
            }
        };
        var2['CHANNELS_GAME_SHOP'] = var15;
        var15 = function GAME_SHOP(arg1, arg2, arg3) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var8 = arg2;
                var6 = arg3;
                var3 = global;
                var1 = var3.HermesInternal;
                var4 = var1.concat;
                var2 = '/game-shop/';
                var1 = arg1;
                var4 = var4.bind(var2)(var1);
                var7 = null;
                var1 = var4;
                if(!(var7 != var8)) { _fun0020_ip = 48; continue _fun0020 }
case 49:
                var2 = var3.HermesInternal;
                var2 = var2.concat;
                var5 = '/';
                var2 = var2.bind(var5)(var8);
                var4 = var4 + var2;
                var2 = var4;
                if(!(var7 != var6)) { _fun0020_ip = 50; continue _fun0020 }
case 51:
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var3 = var3.bind(var5)(var6);
                var2 = var4 + var3;
case 50:
                var1 = var2;
case 48:
                return var1;
            }
        };
        var2['GAME_SHOP'] = var15;
        var15 = function GUILD_PRODUCT(arg1, arg2) {
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '/channels/';
            var3 = arg1;
            var2 = '/shop/';
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2['GUILD_PRODUCT'] = var15;
        var15 = '/report';
        var2['REPORT'] = var15;
        var15 = '/report-review';
        var2['REPORT_SECOND_LOOK'] = var15;
        var15 = '/shop';
        var2['COLLECTIBLES_SHOP'] = var15;
        var15 = function COLLECTIBLES_SHOP_WITH_TAB(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/shop?tab=';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['COLLECTIBLES_SHOP_WITH_TAB'] = var15;
        var15 = function COLLECTIBLES_SHOP_PRODUCT_DETAIL(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/shop/product/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['COLLECTIBLES_SHOP_PRODUCT_DETAIL'] = var15;
        var15 = function COLLECTIBLES_SHOP_LAYOUT(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/shop/layout/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['COLLECTIBLES_SHOP_LAYOUT'] = var15;
        var2['NITRO_HOME'] = var14;
        var14 = '/account-standing';
        var2['ACCOUNT_STANDING'] = var14;
        var14 = function CHANNEL_SUMMARIES(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/channels/';
            var2 = arg1;
            var1 = '/summaries';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['CHANNEL_SUMMARIES'] = var14;
        var14 = function CHANNEL_SUMMARY(arg1, arg2) {
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '/channels/';
            var3 = arg1;
            var2 = '/summaries/';
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2['CHANNEL_SUMMARY'] = var14;
        var14 = '/users/@me/summaries';
        var2['USER_SUMMARIES'] = var14;
        var14 = function QUESTS(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/quests/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['QUESTS'] = var14;
        var14 = function ACCOUNT_REVERT(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/wasntme/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['ACCOUNT_REVERT'] = var14;
        var14 = function POWERUP_STORE(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '/channels/';
            var2 = arg1;
            var1 = '/boosts';
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['POWERUP_STORE'] = var14;
        var14 = '/conference-mode';
        var2['CONFERENCE_MODE'] = var14;
        var14 = function CONFERENCE_MODE_VOICE(arg1, arg2) {
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '/conference-mode/voice/';
            var3 = arg1;
            var2 = '/';
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2['CONFERENCE_MODE_VOICE'] = var14;
        var14 = function QUEST_PREVIEW(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/quest-preview/';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['QUEST_PREVIEW'] = var14;
        var13 = function QUEST_PREVIEW_TOOL_2(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '/quest-home?tab=preview_tool&quest_id=';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['QUEST_PREVIEW_TOOL_2'] = var13;
        var13 = '/icymi';
        var2['ICYMI'] = var13;
        var13 = var9.bind(var12)(var2);
        var2 = 3;
        var2 = var11[var2];
        var12 = var10.bind(var1)(var2);
        var9 = var12.wrapPaths;
        var2 = [':', '?', '@'];
        var2 = var9.bind(var12)(var13, var2);
        var9 = 4;
        var9 = var11[var9];
        var11 = var10.bind(var1)(var9);
        var10 = var11.fileFinishedImporting;
        var9 = 'modules/routing/RouteConstants.tsx';
        var9 = var10.bind(var11)(var9);
        var3['ME'] = var8;
        var3['FAVORITES'] = var7;
        var3['NOTIFICATIONS_INBOX'] = var6;
        var3['EMPTY_NUX_SERVER'] = var5;
        var3['PSEUDO_GUILD_IDS'] = var4;
        var3['Routes'] = var2;
        return var1;
    }
})();