// app/modules/user_settings/native/UserSettingsAuthedApp.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function WarningLabel(arg1) {
        var1 = arg1;
        var9 = var1.text;
        var1 = _closure1_slot23;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var3 = _closure1_slot22;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var12.warningContainer;
        var1['style'] = var5;
        var11 = _closure1_slot21;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 16;
        var5 = var10[var5];
        var5 = var7.bind(var4)(var5);
        var8 = var5.CircleInformationIcon;
        var5 = {};
        var13 = 'xs';
        var5['size'] = var13;
        var14 = _closure1_slot1;
        var13 = 15;
        var13 = var10[var13];
        var13 = var14.bind(var4)(var13);
        var13 = var13.colors;
        var13 = var13.TEXT_MUTED;
        var5['color'] = var13;
        var12 = var12.warningIcon;
        var5['style'] = var12;
        var8 = var11.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot21;
        var6 = 17;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.TextWithIOSLinkWorkaround;
        var6 = {'color': 'text-normal', 'variant': 'text-sm/medium'};
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function AuthorizedAppTwoWay(arg1) {
        var1 = arg1;
        var10 = var1.application;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 18;
        var3 = var11[var3];
        var4 = undefined;
        var5 = var6.bind(var4)(var3);
        var3 = var5.useNavigation;
        var8 = var3.bind(var5)();
        var _closure2_slot0 = var8;
        var7 = _closure1_slot3;
        var5 = var7.useCallback;
        var3 = new Array(1);
        var3[0] = var8;
        var2 = function() {
            var4 = _closure2_slot0;
            var3 = var4.dispatch;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var6 = var2.CommonActions;
            var5 = var6.navigate;
            var2 = {};
            var7 = _closure1_slot13;
            var7 = var7.CONNECTIONS;
            var2['name'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var9 = var5.bind(var7)(var2, var3);
        var3 = _closure1_slot21;
        var2 = _closure1_slot24;
        var1 = {};
        var5 = 20;
        var7 = var11[var5];
        var7 = var6.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.format;
        var5 = var11[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.t;
        var6 = var5.jUhnwc;
        var5 = {};
        var10 = var10.name;
        var5['applicationName'] = var10;
        var5['onConnectionPress'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var1['text'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function ParentApp(arg1) {
        var1 = arg1;
        var9 = var1.application;
        var4 = _closure1_slot21;
        var3 = _closure1_slot24;
        var2 = {};
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 20;
        var7 = var10[var5];
        var1 = undefined;
        var7 = var6.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.format;
        var5 = var10[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.t;
        var6 = var5.j4B7ER;
        var5 = {};
        var9 = var9.name;
        var5['applicationName'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var2['text'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ScrollView;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.UserSettingsSections;
    var _closure1_slot13 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot14 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot15 = var7;
    var7 = var4.ApplicationFlags;
    var _closure1_slot16 = var7;
    var4 = var4.AnalyticEvents;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelDetailsNavigatorScreens;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NotificationSettingsUpdateType;
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot20 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot21 = var7;
    var4 = var4.jsxs;
    var _closure1_slot22 = var4;
    var4 = 14;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var10 = 24;
    var9 = {'paddingHorizontal': 16, 'paddingVertical': 24};
    var4['container'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['section'] = var9;
    var9 = {'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'gap': 12};
    var4['header'] = var9;
    var9 = {};
    var10 = '100%';
    var9['width'] = var10;
    var4['appAboutDescription'] = var9;
    var9 = {'marginTop': null, 'display': 'flex', 'flexDirection': 'row'};
    var10 = 15;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['marginTop'] = var12;
    var4['warningContainer'] = var9;
    var9 = {'width': 16, 'height': 16, 'marginRight': 8};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9['color'] = var10;
    var4['warningIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = 52;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/UserSettingsAuthedApp.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsAuthedApp(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var27 = var1.oauth2Token;
            var _closure2_slot0 = var27;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var1 = _closure1_slot23;
            var15 = var1.bind(var4)();
            var10 = var27.application;
            var _closure2_slot1 = var10;
            var14 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 21;
            var1 = var5[var1];
            var1 = var14.bind(var4)(var1);
            var6 = var1.bind(var4)(var10);
            var3 = _closure1_slot0;
            var11 = 22;
            var1 = var5[var11];
            var12 = var3.bind(var4)(var1);
            var8 = var12.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getNewestTokenForApplication;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var8.bind(var12)(var2, var1);
            var _closure2_slot2 = var18;
            var1 = var5[var11];
            var12 = var3.bind(var4)(var1);
            var8 = var12.useStateFromStores;
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot11;
                var1 = var1.locale;
                return var1;
            };
            var13 = var8.bind(var12)(var2, var1);
            var1 = var5[var11];
            var12 = var3.bind(var4)(var1);
            var8 = var12.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getSelfEmbeddedActivities;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var8.bind(var12)(var2, var1);
            var _closure2_slot3 = var1;
            var2 = 18;
            var2 = var5[var2];
            var8 = var3.bind(var4)(var2);
            var2 = var8.useNavigation;
            var2 = var2.bind(var8)();
            var _closure2_slot4 = var2;
            var8 = var5[var11];
            var17 = var3.bind(var4)(var8);
            var16 = var17.useStateFromStores;
            var8 = _closure1_slot9;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot9;
                    var2 = var3.isBlocked;
                    var1 = _closure2_slot1;
                    var5 = null;
                    var7 = var5 == var1;
                    var1 = undefined;
                    if(var7) { _fun0002_ip = 55; continue _fun0002 }
 31:
                    var4 = _closure2_slot1;
                    var4 = var4.bot;
                    var5 = var5 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 55; continue _fun0002 }
 50:
                    var1 = var4.id;
 55:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var16.bind(var17)(var12, var8);
            var _closure2_slot5 = var8;
            var8 = 23;
            var8 = var5[var8];
            var16 = var3.bind(var4)(var8);
            var12 = var16.useShouldWarnAuthorizedAppTwoWay;
            var8 = var10.id;
            var8 = var12.bind(var16)(var8);
            var12 = 24;
            var12 = var5[var12];
            var16 = var14.bind(var4)(var12);
            var14 = var16.getApplicationIconSource;
            var12 = {};
            var17 = var10.id;
            var12['id'] = var17;
            var17 = var10.icon;
            var12['icon'] = var17;
            var17 = var14.bind(var16)(var12);
            var16 = _closure1_slot3;
            var14 = var16.useEffect;
            var12 = new Array(2);
            var12[0] = var18;
            var12[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 27; continue _fun0003 }
 13:
                    var2 = _closure2_slot4;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
 27:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var14.bind(var16)(var2, var12);
            var14 = _closure1_slot3;
            var12 = var14.useCallback;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.id;
                    var5 = var1.application;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 25;
                    var2 = var4[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.delete;
                    var2 = var2.bind(var6)(var7);
                    var7 = _closure2_slot3;
                    var6 = var7.get;
                    var2 = var5.id;
                    var7 = var6.bind(var7)(var2);
                    var2 = 26;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.leaveActivity;
                    var2 = {};
                    var6 = null;
                    var8 = var6 == var7;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 106; continue _fun0004 }
 101:
                    var6 = var7.location;
 106:
                    var2['location'] = var6;
                    var5 = var5.id;
                    var2['applicationId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var12.bind(var14)(var1, var2);
            var _closure2_slot6 = var1;
            var14 = _closure1_slot3;
            var12 = var14.useCallback;
            var2 = new Array(3);
            var2[0] = var10;
            var2[1] = var1;
            var2[2] = var27;
            var1 = function() {
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 27;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.openAlert;
                var6 = _closure1_slot21;
                var3 = _closure1_slot1;
                var2 = 28;
                var2 = var7[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var7 = _closure2_slot1;
                var2['application'] = var7;
                var7 = function onDelete() {
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onDelete'] = var7;
                var3 = var6.bind(var1)(var3, var2);
                var2 = 'confirm-delete-authed-app';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var21 = var12.bind(var14)(var1, var2);
            var14 = _closure1_slot3;
            var12 = var14.useCallback;
            var2 = function(arg1) {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 29;
                var3 = var9[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.openLazy;
                var8 = _closure1_slot0;
                var3 = 31;
                var3 = var9[var3];
                var5 = var8.bind(var1)(var3);
                var3 = 30;
                var4 = var9[var3];
                var3 = var9.paths;
                var5 = var5.bind(var1)(var4, var3);
                var12 = _closure1_slot20;
                var3 = {};
                var2 = arg1;
                var3['userId'] = var2;
                var2 = 32;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.ImpressionNames;
                var2 = var2.BLOCK_USER_CONFIRMATION;
                var3['impressionName'] = var2;
                var10 = 'stack';
                var14 = var7;
                var13 = var5;
                var11 = var3;
                var2 = var14[var6](var13, var12, var11, var10, var9);
                return var1;
            };
            var1 = new Array(0);
            var1 = var12.bind(var14)(var2, var1);
            var _closure2_slot7 = var1;
            var14 = _closure1_slot3;
            var12 = var14.useCallback;
            var2 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 33;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.unblockUser;
                var2 = {};
                var8 = _closure1_slot14;
                var8 = var8.SETTINGS_AUTHORIZED_APP;
                var2['location'] = var8;
                var2 = var6.bind(var7)(var4, var2);
                var2 = 34;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.showUnblockSuccessToast;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var1 = new Array(0);
            var1 = var12.bind(var14)(var2, var1);
            var _closure2_slot8 = var1;
            var1 = 38;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var12 = var1.ActivityDMNoPushExperiment;
            var2 = var12.useExperiment;
            var1 = {};
            var14 = 'authorized_app_settings';
            var1['location'] = var14;
            var2 = var2.bind(var12)(var1);
            var1 = 39;
            var1 = var5[var1];
            var12 = var3.bind(var4)(var1);
            var5 = var12.hasFlag;
            var1 = var10.flags;
            var24 = null;
            var14 = var24 != var1;
            var3 = 0;
            if(!var14) { _fun0001_ip = 582; continue _fun0001 }
 579:
            var3 = var1;
 582:
            var1 = _closure1_slot16;
            var1 = var1.EMBEDDED;
            var1 = var5.bind(var12)(var3, var1);
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var12 = var3[var11];
            var19 = var5.bind(var4)(var12);
            var18 = var19.useStateFromStores;
            var12 = _closure1_slot12;
            var16 = new Array(1);
            var16[0] = var12;
            var12 = var10.id;
            var14 = new Array(1);
            var14[0] = var12;
            var12 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure1_slot12;
                    var1 = var1.settings;
                    var2 = var1.applications;
                    var3 = null;
                    var5 = var3 == var2;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 91; continue _fun0005 }
 30:
                    var5 = var2.appSettings;
                    var2 = var3 == var5;
                    var1 = undefined;
                    if(var2) { _fun0005_ip = 91; continue _fun0005 }
 45:
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var2 = var5[var2];
                    var5 = var3 == var2;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 91; continue _fun0005 }
 70:
                    var2 = var2.appDmSettings;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 91; continue _fun0005 }
 85:
                    var1 = var2.allowMobilePush;
 91:
                    return var1;
                }
            };
            var29 = var18.bind(var19)(var16, var12, var14);
            var12 = var3[var11];
            var18 = var5.bind(var4)(var12);
            var16 = var18.useStateFromStores;
            var12 = _closure1_slot8;
            var14 = new Array(1);
            var14[0] = var12;
            var12 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getDMFromUserId;
                    var1 = _closure2_slot1;
                    var4 = var1.bot;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 42; continue _fun0006 }
 37:
                    var1 = var4.id;
 42:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var19 = var16.bind(var18)(var14, var12);
            _closure2_slot9 = var19;
            var3 = var3[var11];
            var14 = var5.bind(var4)(var3);
            var12 = var14.useStateFromStoresObject;
            var3 = _closure1_slot10;
            var11 = new Array(1);
            var11[0] = var3;
            var5 = new Array(1);
            var5[0] = var19;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot9;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0007_ip = 66; continue _fun0007 }
 13:
                    var1 = {};
                    var4 = _closure1_slot10;
                    var6 = var4.getChannelMuteConfig;
                    var3 = _closure2_slot9;
                    var3 = var6.bind(var4)(var5, var3);
                    var1['appDMChannelMuteConfig'] = var3;
                    var3 = var4.isChannelMuted;
                    var2 = _closure2_slot9;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['muted'] = var2;
                    _fun0007_ip = 80; continue _fun0007;
 66:
                    var1 = {'appDMChannelMuteConfig': null, 'muted': false};
 80:
                    return var1;
                }
            };
            var3 = var12.bind(var14)(var11, var3, var5);
            var37 = var3.appDMChannelMuteConfig;
            var28 = var3.muted;
            var20 = var2.enabled;
            if(!var20) { _fun0001_ip = 774; continue _fun0001 }
 771:
            var20 = var1;
 774:
            if(!var20) { _fun0001_ip = 780; continue _fun0001 }
 777:
            var20 = !var28;
 780:
            var3 = _closure1_slot22;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var15.container;
            var1['contentContainerStyle'] = var5;
            var22 = var10.description;
            var23 = _closure1_slot1;
            var18 = _closure1_slot2;
            var5 = 46;
            var5 = var18[var5];
            var12 = var23.bind(var4)(var5);
            var11 = var12.extractTimestamp;
            var5 = var27.id;
            var42 = var11.bind(var12)(var5);
            var38 = global;
            var5 = var38.Date;
            var11 = var5.prototype;
            var11 = Object.create(var11, {constructor: {value: var5}});
            var43 = var11;
            var5 = new var43[var5](var42, var41);
            var12 = var5 instanceof Object ? var5 : var11;
            var11 = var12.toLocaleDateString;
            var5 = {'year': 'numeric', 'month': 'short', 'day': 'numeric'};
            var32 = var11.bind(var12)(var13, var5);
            var12 = _closure1_slot22;
            var11 = _closure1_slot5;
            var5 = {};
            var14 = var15.header;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var15.section;
            var13[1] = var14;
            var5['style'] = var13;
            var16 = _closure1_slot21;
            var13 = 47;
            var13 = var18[var13];
            var14 = var23.bind(var4)(var13);
            var13 = {};
            var13['iconSource'] = var17;
            var17 = 15;
            var17 = var18[var17];
            var17 = var23.bind(var4)(var17);
            var17 = var17.radii;
            var17 = var17.md;
            var13['iconBorderRadius'] = var17;
            var17 = 64;
            var13['iconSize'] = var17;
            var14 = var16.bind(var4)(var14, var13);
            var13 = new Array(3);
            var13[0] = var14;
            var17 = _closure1_slot21;
            var25 = _closure1_slot0;
            var23 = 48;
            var14 = var18[var23];
            var14 = var25.bind(var4)(var14);
            var16 = var14.Text;
            var14 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            var26 = 20;
            var30 = var18[var26];
            var30 = var25.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.format;
            var18 = var18[var26];
            var18 = var25.bind(var4)(var18);
            var18 = var18.t;
            var25 = var18.yOApCA;
            var18 = {};
            var18['date'] = var32;
            var18 = var30.bind(var31)(var25, var18);
            var14['children'] = var18;
            var14 = var17.bind(var4)(var16, var14);
            var13[1] = var14;
            var14 = null;
            if(!(var4 !== var22)) { _fun0001_ip = 1192; continue _fun0001 }
 1120:
            var16 = '';
            var14 = null;
            if(!(var16 !== var22)) { _fun0001_ip = 1192; continue _fun0001 }
 1130:
            var18 = _closure1_slot21;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var23];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-normal'};
            var23 = var15.appAboutDescription;
            var16['style'] = var23;
            var16['children'] = var22;
            var14 = var18.bind(var4)(var17, var16);
 1192:
            var13[2] = var14;
            var5['children'] = var13;
            var11 = var12.bind(var4)(var11, var5);
            var5 = new Array(7);
            var5[0] = var11;
            if(var20) { _fun0001_ip = 1229; continue _fun0001 }
 1217:
            var12 = var24 != var19;
            var11 = null;
            if(!var12) { _fun0001_ip = 1703; continue _fun0001 }
 1229:
            var14 = _closure1_slot21;
            var13 = _closure1_slot5;
            var12 = {};
            var16 = var15.section;
            var12['style'] = var16;
            var18 = _closure1_slot22;
            var17 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = 49;
            var16 = var22[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.TableRowGroup;
            var16 = {};
            var22 = 'Notifications';
            var16['title'] = var22;
            var22 = var24 != var19;
            if(!var22) { _fun0001_ip = 1534; continue _fun0001 }
 1298:
            var25 = _closure1_slot21;
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var19 = 50;
            var19 = var30[var19];
            var19 = var23.bind(var4)(var19);
            var23 = var19.TableSwitchRow;
            var19 = {};
            var30 = 'Mute DMs';
            var19['label'] = var30;
            var31 = var24 == var37;
            var30 = undefined;
            if(var31) { _fun0001_ip = 1355; continue _fun0001 }
 1349:
            var30 = var37.end_time;
 1355:
            var31 = var24 != var30;
            var30 = undefined;
            if(!var31) { _fun0001_ip = 1507; continue _fun0001 }
 1367:
            var36 = _closure1_slot0;
            var35 = _closure1_slot2;
            var31 = var35[var26];
            var31 = var36.bind(var4)(var31);
            var34 = var31.intl;
            var33 = var34.format;
            var31 = var35[var26];
            var31 = var36.bind(var4)(var31);
            var31 = var31.t;
            var32 = var31.j7h4AA;
            var31 = {};
            var39 = var38.Date;
            var42 = var37.end_time;
            var38 = var39.prototype;
            var38 = Object.create(var38, {constructor: {value: var39}});
            var43 = var38;
            var37 = new var43[var39](var42, var41);
            var38 = var37 instanceof Object ? var37 : var38;
            var37 = var38.toLocaleString;
            var35 = var35[var26];
            var35 = var36.bind(var4)(var35);
            var35 = var35.intl;
            var36 = var35.currentLocale;
            var35 = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
            var35 = var37.bind(var38)(var36, var35);
            var31['endTime'] = var35;
            var30 = var33.bind(var34)(var32, var31);
 1507:
            var19['subLabel'] = var30;
            var19['value'] = var28;
            var28 = function handleMuteChannelChange(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot9;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0008_ip = 232; continue _fun0008 }
 16:
                    var1 = arg1;
                    if(var1) { _fun0008_ip = 117; continue _fun0008 }
 25:
                    var4 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 41;
                    var1 = var12[var1];
                    var11 = undefined;
                    var9 = var4.bind(var11)(var1);
                    var8 = var9.updateAppDMOverrideSettings;
                    var16 = _closure2_slot9;
                    var1 = _closure2_slot1;
                    var15 = var1.id;
                    var4 = {};
                    var1 = false;
                    var4['muted'] = var1;
                    var10 = _closure1_slot0;
                    var1 = 42;
                    var1 = var12[var1];
                    var1 = var10.bind(var11)(var1);
                    var1 = var1.NotificationLabels;
                    var13 = var1.Unmuted;
                    var18 = var9;
                    var17 = null;
                    var14 = var4;
                    var1 = var18[var8](var17, var16, var15, var14, var13, var12);
                    _fun0008_ip = 232; continue _fun0008;
 117:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 40;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.getRootNavigationRef;
                    var5 = var4.bind(var5)();
                    if(!(var3 != var5)) { _fun0008_ip = 236; continue _fun0008 }
 153:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0008_ip = 236; continue _fun0008 }
 166:
                    var4 = var5.navigate;
                    var3 = {};
                    var7 = _closure2_slot9;
                    var3['channelId'] = var7;
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var3['applicationId'] = var6;
                    var2 = _closure1_slot18;
                    var2 = var2.MUTE;
                    var3['initialRouteName'] = var2;
                    var2 = 'authorized-apps-settings';
                    var3['source'] = var2;
                    var2 = 'sidebar';
                    var2 = var4.bind(var5)(var2, var3);
 232:
                    var2 = undefined;
                    return var2;
 236:
                    return var1;
                }
            };
            var19['onValueChange'] = var28;
            var22 = var25.bind(var4)(var23, var19);
 1534:
            var19 = new Array(2);
            var19[0] = var22;
            if(!var20) { _fun0001_ip = 1679; continue _fun0001 }
 1548:
            var25 = _closure1_slot21;
            var32 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = 50;
            var22 = var28[var22];
            var22 = var32.bind(var4)(var22);
            var23 = var22.TableSwitchRow;
            var22 = {};
            var30 = 'Mobile Push Notifications';
            var22['label'] = var30;
            var30 = var28[var26];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var28 = var28[var26];
            var28 = var32.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.c1uXo6;
            var28 = var30.bind(var31)(var28);
            var22['subLabel'] = var28;
            var28 = var24 != var29;
            if(!var28) { _fun0001_ip = 1649; continue _fun0001 }
 1646:
            var28 = var29;
 1649:
            var22['value'] = var28;
            var28 = function handleDMSettingChange(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 43;
                    var8 = var4[var3];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var8);
                    var9 = var8.PreloadedUserSettingsActionCreators;
                    var8 = var9.updateAsync;
                    var3 = var4[var3];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.UserSettingsDelay;
                    var5 = var3.INFREQUENT_USER_ACTION;
                    var3 = 'applications';
                    var2 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var2 = arg1;
                            var3 = _closure2_slot1;
                            var4 = var3.id;
                            var3 = var2.appSettings;
                            var5 = var4 in var3;
                            var4 = var2.appSettings;
                            var3 = _closure2_slot1;
                            var3 = var3.id;
                            if(var5) { _fun0010_ip = 139; continue _fun0010 }
 43:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var8 = 44;
                            var5 = var11[var8];
                            var9 = undefined;
                            var5 = var10.bind(var9)(var5);
                            var7 = var5.ApplicationSettings;
                            var6 = var7.create;
                            var5 = {};
                            var8 = var11[var8];
                            var8 = var10.bind(var9)(var8);
                            var10 = var8.ApplicationDMSettings;
                            var9 = var10.create;
                            var8 = {};
                            var11 = _closure3_slot0;
                            var8['allowMobilePush'] = var11;
                            var8 = var9.bind(var10)(var8);
                            var5['appDmSettings'] = var8;
                            var5 = var6.bind(var7)(var5);
                            var4[var3] = var5;
                            _fun0010_ip = 275; continue _fun0010;
 139:
                            var3 = var4[var3];
                            var4 = var3.appDmSettings;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0010_ip = 195; continue _fun0010 }
 155:
                            var4 = var2.appSettings;
                            var3 = _closure2_slot1;
                            var3 = var3.id;
                            var3 = var4[var3];
                            var4 = var3.appDmSettings;
                            var3 = _closure3_slot0;
                            var4['allowMobilePush'] = var3;
                            _fun0010_ip = 275; continue _fun0010;
 195:
                            var2 = var2.appSettings;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var2 = var2[var1];
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 44;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var4 = var1.ApplicationDMSettings;
                            var3 = var4.create;
                            var1 = {};
                            var5 = _closure3_slot0;
                            var1['allowMobilePush'] = var5;
                            var1 = var3.bind(var4)(var1);
                            var2['appDmSettings'] = var1;
 275:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var8.bind(var9)(var3, var2, var5);
                    var3 = _closure1_slot1;
                    var2 = 45;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot17;
                    var3 = var2.NOTIFICATION_SETTINGS_UPDATED;
                    var2 = {};
                    var8 = _closure1_slot19;
                    var8 = var8.AUTHORIZED_APP_DM_PUSH_NOTIFICATION;
                    var2['update_type'] = var8;
                    var8 = _closure2_slot1;
                    var8 = var8.id;
                    var2['application_id'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 42;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.NotificationLabels;
                    if(var6) { _fun0009_ip = 188; continue _fun0009 }
 180:
                    var6 = var7.Muted;
                    _fun0009_ip = 194; continue _fun0009;
 188:
                    var6 = var7.Unmuted;
 194:
                    var2['label'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var22['onValueChange'] = var28;
            var27 = var24 == var27;
            var22['disabled'] = var27;
            var20 = var25.bind(var4)(var23, var22);
 1679:
            var19[1] = var20;
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var12['children'] = var16;
            var11 = var14.bind(var4)(var13, var12);
 1703:
            var5[1] = var11;
            var13 = _closure1_slot21;
            var12 = _closure1_slot5;
            var11 = {};
            var14 = var15.section;
            var11['style'] = var14;
            var19 = _closure1_slot22;
            var29 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 49;
            var16 = var20[var14];
            var16 = var29.bind(var4)(var16);
            var18 = var16.TableRowGroup;
            var16 = {};
            var17 = var20[var26];
            var17 = var29.bind(var4)(var17);
            var23 = var17.intl;
            var22 = var23.string;
            var17 = var20[var26];
            var17 = var29.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.8pMev7;
            var17 = var22.bind(var23)(var17);
            var16['title'] = var17;
            var25 = _closure1_slot21;
            var17 = 51;
            var22 = var20[var17];
            var22 = var29.bind(var4)(var22);
            var23 = var22.TableRow;
            var22 = {};
            var27 = var20[var26];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var20 = var20[var26];
            var20 = var29.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.xrmhRU;
            var20 = var27.bind(var28)(var20);
            var22['label'] = var20;
            var20 = function handleClickPermissions() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 35;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.setSection;
                var3 = _closure1_slot13;
                var3 = var3.AUTHORIZED_APP_PERMISSIONS;
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot0;
                var3 = 36;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.trackUserSettingsPaneViewed;
                var3 = {};
                var6 = _closure1_slot13;
                var6 = var6.AUTHORIZED_APP_PERMISSIONS;
                var3['destinationPane'] = var6;
                var6 = {};
                var7 = _closure1_slot15;
                var7 = var7.USER_SETTINGS;
                var6['page'] = var7;
                var3['source'] = var6;
                var7 = _closure2_slot1;
                var7 = var7.id;
                var3['applicationId'] = var7;
                var3 = var4.bind(var5)(var3);
                var5 = _closure2_slot4;
                var4 = var5.navigate;
                var2 = _closure1_slot13;
                var3 = var2.AUTHORIZED_APP_PERMISSIONS;
                var2 = {};
                var6 = _closure2_slot0;
                var2['oauth2Token'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var22['onPress'] = var20;
            var20 = true;
            var22['arrow'] = var20;
            var23 = var25.bind(var4)(var23, var22);
            var22 = new Array(3);
            var22[0] = var23;
            var23 = var10.terms_of_service_url;
            var23 = var24 != var23;
            if(!var23) { _fun0001_ip = 2026; continue _fun0001 }
 1925:
            var28 = _closure1_slot21;
            var32 = _closure1_slot0;
            var29 = _closure1_slot2;
            var25 = var29[var17];
            var25 = var32.bind(var4)(var25);
            var27 = var25.TableRow;
            var25 = {};
            var30 = var29[var26];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var29[var26];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.lx+GeX;
            var29 = var30.bind(var31)(var29);
            var25['label'] = var29;
            var29 = function handleClickToS() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.terms_of_service_url;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0011_ip = 79; continue _fun0011 }
 19:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 37;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleClick;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.terms_of_service_url;
                    var1['href'] = var4;
                    var4 = true;
                    var1['shouldConfirm'] = var4;
                    var1 = var2.bind(var3)(var1);
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var25['onPress'] = var29;
            var25['arrow'] = var20;
            var23 = var28.bind(var4)(var27, var25);
 2026:
            var22[1] = var23;
            var23 = var10.privacy_policy_url;
            var23 = var24 != var23;
            if(!var23) { _fun0001_ip = 2144; continue _fun0001 }
 2043:
            var27 = _closure1_slot21;
            var31 = _closure1_slot0;
            var28 = _closure1_slot2;
            var24 = var28[var17];
            var24 = var31.bind(var4)(var24);
            var25 = var24.TableRow;
            var24 = {};
            var29 = var28[var26];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var28[var26];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.okSwq6;
            var28 = var29.bind(var30)(var28);
            var24['label'] = var28;
            var28 = function handleClickPrivacyPolicy() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.privacy_policy_url;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0012_ip = 79; continue _fun0012 }
 19:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 37;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleClick;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.privacy_policy_url;
                    var1['href'] = var4;
                    var4 = true;
                    var1['shouldConfirm'] = var4;
                    var1 = var2.bind(var3)(var1);
 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var24['onPress'] = var28;
            var24['arrow'] = var20;
            var23 = var27.bind(var4)(var25, var24);
 2144:
            var22[2] = var23;
            var16['children'] = var22;
            var16 = var19.bind(var4)(var18, var16);
            var11['children'] = var16;
            var11 = var13.bind(var4)(var12, var11);
            var5[2] = var11;
            var13 = _closure1_slot21;
            var12 = _closure1_slot5;
            var11 = {};
            var15 = var15.section;
            var11['style'] = var15;
            var16 = _closure1_slot21;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = var22[var14];
            var14 = var25.bind(var4)(var14);
            var15 = var14.TableRowGroup;
            var14 = {};
            var18 = var22[var26];
            var18 = var25.bind(var4)(var18);
            var23 = var18.intl;
            var19 = var23.string;
            var18 = var22[var26];
            var18 = var25.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.gAHBAw;
            var18 = var19.bind(var23)(var18);
            var14['title'] = var18;
            var19 = _closure1_slot21;
            var17 = var22[var17];
            var17 = var25.bind(var4)(var17);
            var18 = var17.TableRow;
            var17 = {};
            var23 = var22[var26];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var26];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.xUqheH;
            var22 = var23.bind(var24)(var22);
            var17['label'] = var22;
            var22 = 'danger';
            var17['variant'] = var22;
            var17['onPress'] = var21;
            var17['arrow'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var5[3] = var11;
            var9 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var3 = var2 == var1;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0013_ip = 46; continue _fun0013 }
 22:
                    var3 = _closure2_slot1;
                    var3 = var3.bot;
                    var6 = var2 == var3;
                    var1 = undefined;
                    if(var6) { _fun0013_ip = 46; continue _fun0013 }
 41:
                    var1 = var3.id;
 46:
                    var _closure3_slot0 = var1;
                    if(!(var2 == var1)) { _fun0013_ip = 56; continue _fun0013 }
 54:
                    return var4;
 56:
                    var3 = _closure1_slot21;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 49;
                    var1 = var11[var1];
                    var1 = var8.bind(var4)(var1);
                    var2 = var1.TableRowGroup;
                    var1 = {};
                    var14 = 20;
                    var6 = var11[var14];
                    var6 = var8.bind(var4)(var6);
                    var12 = var6.intl;
                    var7 = var12.string;
                    var6 = var11[var14];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.t;
                    var6 = var6.8msQQE;
                    var6 = var7.bind(var12)(var6);
                    var1['title'] = var6;
                    var7 = _closure1_slot21;
                    var6 = 51;
                    var6 = var11[var6];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.TableRow;
                    var5 = _closure2_slot5;
                    if(var5) { _fun0013_ip = 259; continue _fun0013 }
 173:
                    var5 = {};
                    var13 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var11 = var8[var14];
                    var11 = var13.bind(var4)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var8 = var8[var14];
                    var8 = var13.bind(var4)(var8);
                    var8 = var8.t;
                    var8 = var8.l4EmaW;
                    var8 = var11.bind(var12)(var8);
                    var5['label'] = var8;
                    var8 = 'danger';
                    var5['variant'] = var8;
                    var8 = function onPress() {
                        var3 = _closure2_slot7;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5['onPress'] = var8;
                    var8 = true;
                    var5['arrow'] = var8;
                    _fun0013_ip = 338; continue _fun0013;
 259:
                    var8 = {};
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var11 = var10[var14];
                    var11 = var13.bind(var4)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var10[var14];
                    var10 = var13.bind(var4)(var10);
                    var10 = var10.t;
                    var10 = var10.XyHpKC;
                    var10 = var11.bind(var12)(var10);
                    var8['label'] = var10;
                    var9 = function onPress() {
                        var3 = _closure2_slot8;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8['onPress'] = var9;
                    var9 = true;
                    var8['arrow'] = var9;
                    var5 = var8;
 338:
                    var5 = var7.bind(var4)(var6, var5);
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var9 = var9.bind(var4)();
            var5[4] = var9;
            if(!var8) { _fun0001_ip = 2424; continue _fun0001 }
 2404:
            var12 = _closure1_slot21;
            var11 = _closure1_slot25;
            var9 = {};
            var9['application'] = var10;
            var8 = var12.bind(var4)(var11, var9);
 2424:
            var5[5] = var8;
            if(!var6) { _fun0001_ip = 2451; continue _fun0001 }
 2431:
            var9 = _closure1_slot21;
            var8 = _closure1_slot26;
            var7 = {};
            var7['application'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 2451:
            var5[6] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();