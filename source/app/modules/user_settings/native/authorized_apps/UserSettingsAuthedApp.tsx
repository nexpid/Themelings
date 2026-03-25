// app/modules/user_settings/native/authorized_apps/UserSettingsAuthedApp.tsx
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
        var1 = _closure1_slot19;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var3 = _closure1_slot18;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var12.warningContainer;
        var1['style'] = var5;
        var11 = _closure1_slot17;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 14;
        var5 = var10[var5];
        var5 = var7.bind(var4)(var5);
        var8 = var5.CircleInformationIcon;
        var5 = {};
        var13 = 'xs';
        var5['size'] = var13;
        var14 = _closure1_slot1;
        var13 = 13;
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
        var8 = _closure1_slot17;
        var6 = 15;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.TextWithIOSLinkWorkaround;
        var6 = {'color': 'text-default', 'variant': 'text-sm/medium'};
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function AuthorizedAppTwoWay(arg1) {
        var1 = arg1;
        var10 = var1.application;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 16;
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
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var6 = var2.CommonActions;
            var5 = var6.navigate;
            var2 = {};
            var7 = _closure1_slot12;
            var7 = var7.CONNECTIONS;
            var2['name'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var9 = var5.bind(var7)(var2, var3);
        var3 = _closure1_slot17;
        var2 = _closure1_slot20;
        var1 = {};
        var5 = 18;
        var7 = var11[var5];
        var7 = var6.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.format;
        var5 = var11[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.t;
        var6 = var5.jUhnwb;
        var5 = {};
        var10 = var10.name;
        var5['applicationName'] = var10;
        var5['onConnectionPress'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var1['text'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function ParentApp(arg1) {
        var1 = arg1;
        var9 = var1.application;
        var4 = _closure1_slot17;
        var3 = _closure1_slot20;
        var2 = {};
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 18;
        var7 = var10[var5];
        var1 = undefined;
        var7 = var6.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.format;
        var5 = var10[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.t;
        var6 = var5.j4B7EW;
        var5 = {};
        var9 = var9.name;
        var5['applicationName'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var2['text'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.UserSettingsSections;
    var _closure1_slot12 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot13 = var7;
    var4 = var4.AnalyticsPages;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelDetailsNavigatorScreens;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 12;
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
    var10 = 13;
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
    var _closure1_slot19 = var4;
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/authorized_apps/UserSettingsAuthedApp.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsAuthedApp(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.oauth2Token;
            var _closure2_slot0 = var5;
            var1 = _closure1_slot19;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var10 = var5.application;
            var _closure2_slot1 = var10;
            var22 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 19;
            var1 = var19[var1];
            var1 = var22.bind(var4)(var1);
            var6 = var1.bind(var4)(var10);
            var24 = _closure1_slot0;
            var1 = 20;
            var2 = var19[var1];
            var11 = var24.bind(var4)(var2);
            var8 = var11.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getNewestTokenForApplication;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var8.bind(var11)(var3, var2);
            var _closure2_slot2 = var16;
            var2 = var19[var1];
            var11 = var24.bind(var4)(var2);
            var8 = var11.useStateFromStores;
            var2 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot11;
                var1 = var1.locale;
                return var1;
            };
            var14 = var8.bind(var11)(var3, var2);
            var2 = var19[var1];
            var11 = var24.bind(var4)(var2);
            var8 = var11.useStateFromStores;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getSelfEmbeddedActivities;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var8.bind(var11)(var3, var2);
            var _closure2_slot3 = var2;
            var3 = 16;
            var3 = var19[var3];
            var8 = var24.bind(var4)(var3);
            var3 = var8.useNavigation;
            var3 = var3.bind(var8)();
            var _closure2_slot4 = var3;
            var8 = var19[var1];
            var13 = var24.bind(var4)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot9;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.isBlocked;
                    var1 = _closure2_slot1;
                    var5 = null;
                    var7 = var5 == var1;
                    var1 = undefined;
                    if(var7) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot1;
                    var4 = var4.bot;
                    var5 = var5 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var1 = var4.id;
case 2:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var12.bind(var13)(var11, var8);
            var _closure2_slot5 = var8;
            var8 = 21;
            var8 = var19[var8];
            var12 = var24.bind(var4)(var8);
            var11 = var12.useShouldWarnAuthorizedAppTwoWay;
            var8 = var10.id;
            var8 = var11.bind(var12)(var8);
            var11 = 22;
            var11 = var19[var11];
            var13 = var22.bind(var4)(var11);
            var12 = var13.getApplicationIconSource;
            var11 = {};
            var17 = var10.id;
            var11['id'] = var17;
            var17 = var10.icon;
            var11['icon'] = var17;
            var18 = var12.bind(var13)(var11);
            var13 = _closure1_slot3;
            var12 = var13.useEffect;
            var11 = new Array(2);
            var11[0] = var16;
            var11[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var2 = _closure2_slot4;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
case 5:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var3, var11);
            var12 = _closure1_slot3;
            var11 = var12.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var7 = var1.id;
                    var5 = var1.application;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 23;
                    var2 = var4[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var2 = var6.delete;
                    var2 = var2.bind(var6)(var7);
                    var7 = _closure2_slot3;
                    var6 = var7.get;
                    var2 = var5.id;
                    var7 = var6.bind(var7)(var2);
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.leaveActivity;
                    var2 = {};
                    var6 = null;
                    var8 = var6 == var7;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var6 = var7.location;
case 7:
                    var2['location'] = var6;
                    var5 = var5.id;
                    var2['applicationId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var11.bind(var12)(var2, var3);
            var _closure2_slot6 = var2;
            var12 = _closure1_slot3;
            var11 = var12.useCallback;
            var3 = new Array(3);
            var3[0] = var10;
            var3[1] = var2;
            var3[2] = var5;
            var2 = function() {
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 25;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.openAlert;
                var6 = _closure1_slot17;
                var3 = _closure1_slot1;
                var2 = 26;
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
            var21 = var11.bind(var12)(var2, var3);
            var12 = _closure1_slot3;
            var11 = var12.useCallback;
            var3 = function(arg1) {
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 27;
                var3 = var9[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.openLazy;
                var8 = _closure1_slot0;
                var3 = 29;
                var3 = var9[var3];
                var5 = var8.bind(var1)(var3);
                var3 = 28;
                var4 = var9[var3];
                var3 = var9.paths;
                var5 = var5.bind(var1)(var4, var3);
                var12 = _closure1_slot16;
                var3 = {};
                var2 = arg1;
                var3['userId'] = var2;
                var2 = 30;
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
            var2 = new Array(0);
            var2 = var11.bind(var12)(var3, var2);
            var _closure2_slot7 = var2;
            var12 = _closure1_slot3;
            var11 = var12.useCallback;
            var3 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 31;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.unblockUser;
                var2 = {};
                var8 = _closure1_slot13;
                var8 = var8.SETTINGS_AUTHORIZED_APP;
                var2['location'] = var8;
                var2 = var6.bind(var7)(var4, var2);
                var2 = 32;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.showUnblockSuccessToast;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var2 = new Array(0);
            var2 = var11.bind(var12)(var3, var2);
            var _closure2_slot8 = var2;
            var2 = var19[var1];
            var12 = var24.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getDMFromUserId;
                    var1 = _closure2_slot1;
                    var4 = var1.bot;
                    var1 = null;
                    var5 = var1 == var4;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                    var1 = var4.id;
case 9:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var11 = var11.bind(var12)(var3, var2);
            var _closure2_slot9 = var11;
            var1 = var19[var1];
            var13 = var24.bind(var4)(var1);
            var12 = var13.useStateFromStoresObject;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0006_ip = 11; continue _fun0006 }
case 6:
                    var1 = {};
                    var4 = _closure1_slot10;
                    var2 = var4.getChannelMuteConfig;
                    var3 = _closure2_slot9;
                    var2 = var2.bind(var4)(var5, var3);
                    var1['appDMChannelMuteConfig'] = var2;
                    var2 = var4.isChannelMuted;
                    var2 = var2.bind(var4)(var5, var3);
                    var1['muted'] = var2;
                    _fun0006_ip = 12; continue _fun0006;
case 11:
                    var1 = {'appDMChannelMuteConfig': null, 'muted': false};
case 12:
                    return var1;
                }
            };
            var1 = var12.bind(var13)(var3, var1, var2);
            var33 = var1.appDMChannelMuteConfig;
            var23 = var1.muted;
            var3 = _closure1_slot18;
            var2 = _closure1_slot4;
            var1 = {};
            var12 = var15.container;
            var1['contentContainerStyle'] = var12;
            var20 = var10.description;
            var12 = 39;
            var12 = var19[var12];
            var13 = var22.bind(var4)(var12);
            var12 = var13.extractTimestamp;
            var5 = var5.id;
            var38 = var12.bind(var13)(var5);
            var34 = global;
            var5 = var34.Date;
            var12 = var5.prototype;
            var12 = Object.create(var12, {constructor: {value: var5}});
            var39 = var12;
            var5 = new var39[var5](var38, var37);
            var13 = var5 instanceof Object ? var5 : var12;
            var12 = var13.toLocaleDateString;
            var5 = {'year': 'numeric', 'month': 'short', 'day': 'numeric'};
            var28 = var12.bind(var13)(var14, var5);
            var13 = _closure1_slot18;
            var12 = _closure1_slot5;
            var5 = {};
            var16 = var15.header;
            var14 = new Array(2);
            var14[0] = var16;
            var16 = var15.section;
            var14[1] = var16;
            var5['style'] = var14;
            var17 = _closure1_slot17;
            var14 = 40;
            var14 = var19[var14];
            var16 = var22.bind(var4)(var14);
            var14 = {};
            var14['iconSource'] = var18;
            var18 = 13;
            var18 = var19[var18];
            var18 = var22.bind(var4)(var18);
            var18 = var18.radii;
            var18 = var18.md;
            var14['iconBorderRadius'] = var18;
            var18 = 64;
            var14['iconSize'] = var18;
            var16 = var17.bind(var4)(var16, var14);
            var14 = new Array(3);
            var14[0] = var16;
            var18 = _closure1_slot17;
            var22 = 41;
            var16 = var19[var22];
            var16 = var24.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            var26 = 18;
            var25 = var19[var26];
            var25 = var24.bind(var4)(var25);
            var27 = var25.intl;
            var25 = var27.format;
            var19 = var19[var26];
            var19 = var24.bind(var4)(var19);
            var19 = var19.t;
            var24 = var19.yOApCK;
            var19 = {};
            var19['date'] = var28;
            var19 = var25.bind(var27)(var24, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var14[1] = var16;
            var24 = null;
            var16 = null;
            if(!(var4 !== var20)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var17 = '';
            var16 = null;
            if(!(var17 !== var20)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var19 = _closure1_slot17;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var22];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-default'};
            var22 = var15.appAboutDescription;
            var17['style'] = var22;
            var17['children'] = var20;
            var16 = var19.bind(var4)(var18, var17);
case 13:
            var14[2] = var16;
            var5['children'] = var14;
            var12 = var13.bind(var4)(var12, var5);
            var5 = new Array(7);
            var5[0] = var12;
            var12 = var24 == var11;
            var11 = null;
            if(var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var14 = _closure1_slot17;
            var13 = _closure1_slot5;
            var12 = {};
            var16 = var15.section;
            var12['style'] = var16;
            var18 = _closure1_slot17;
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var16 = 42;
            var16 = var25[var16];
            var16 = var20.bind(var4)(var16);
            var17 = var16.TableRowGroup;
            var16 = {};
            var19 = 'Notifications';
            var16['title'] = var19;
            var22 = _closure1_slot17;
            var19 = 43;
            var19 = var25[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.TableSwitchRow;
            var19 = {};
            var25 = 'Mute DMs';
            var19['label'] = var25;
            var27 = var24 == var33;
            var25 = undefined;
            if(var27) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var25 = var33.end_time;
case 18:
            var27 = var24 != var25;
            var25 = undefined;
            if(!var27) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var27 = var31[var26];
            var27 = var32.bind(var4)(var27);
            var30 = var27.intl;
            var29 = var30.format;
            var27 = var31[var26];
            var27 = var32.bind(var4)(var27);
            var27 = var27.t;
            var28 = var27.j7h4AJ;
            var27 = {};
            var35 = var34.Date;
            var38 = var33.end_time;
            var34 = var35.prototype;
            var34 = Object.create(var34, {constructor: {value: var35}});
            var39 = var34;
            var33 = new var39[var35](var38, var37);
            var34 = var33 instanceof Object ? var33 : var34;
            var33 = var34.toLocaleString;
            var31 = var31[var26];
            var31 = var32.bind(var4)(var31);
            var31 = var31.intl;
            var32 = var31.currentLocale;
            var31 = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
            var31 = var33.bind(var34)(var32, var31);
            var27['endTime'] = var31;
            var25 = var29.bind(var30)(var28, var27);
case 20:
            var19['subLabel'] = var25;
            var19['value'] = var23;
            var23 = function handleMuteChannelChange(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var1 = arg1;
                    if(var1) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var4 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 37;
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
                    var1 = 38;
                    var1 = var12[var1];
                    var1 = var10.bind(var11)(var1);
                    var1 = var1.NotificationLabels;
                    var13 = var1.Unmuted;
                    var18 = var9;
                    var17 = null;
                    var14 = var4;
                    var1 = var18[var8](var17, var16, var15, var14, var13, var12);
                    _fun0007_ip = 22; continue _fun0007;
case 24:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 36;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.getRootNavigationRef;
                    var5 = var4.bind(var5)();
                    if(!(var3 != var5)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var3 = var5.isReady;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0007_ip = 26; continue _fun0007 }
case 28:
                    var4 = var5.navigate;
                    var3 = {};
                    var7 = _closure2_slot9;
                    var3['channelId'] = var7;
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var3['applicationId'] = var6;
                    var2 = _closure1_slot15;
                    var2 = var2.MUTE;
                    var3['initialRouteName'] = var2;
                    var2 = 'authorized-apps-settings';
                    var3['source'] = var2;
                    var2 = 'sidebar';
                    var2 = var4.bind(var5)(var2, var3);
case 22:
                    var2 = undefined;
                    return var2;
case 26:
                    return var1;
                }
            };
            var19['onValueChange'] = var23;
            var19 = var22.bind(var4)(var20, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var12['children'] = var16;
            var11 = var14.bind(var4)(var13, var12);
case 16:
            var5[1] = var11;
            var13 = _closure1_slot17;
            var12 = _closure1_slot5;
            var11 = {};
            var14 = var15.section;
            var11['style'] = var14;
            var19 = _closure1_slot18;
            var29 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 42;
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
            var17 = var17["8pMev2"];
            var17 = var22.bind(var23)(var17);
            var16['title'] = var17;
            var25 = _closure1_slot17;
            var17 = 44;
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
            var20 = var20.xrmhRX;
            var20 = var27.bind(var28)(var20);
            var22['label'] = var20;
            var20 = function handleClickPermissions() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 33;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.setSection;
                var3 = _closure1_slot12;
                var3 = var3.AUTHORIZED_APP_PERMISSIONS;
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot0;
                var3 = 34;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.trackUserSettingsPaneViewed;
                var3 = {};
                var6 = _closure1_slot12;
                var6 = var6.AUTHORIZED_APP_PERMISSIONS;
                var3['destinationPane'] = var6;
                var6 = {};
                var7 = _closure1_slot14;
                var7 = var7.USER_SETTINGS;
                var6['page'] = var7;
                var3['source'] = var6;
                var7 = _closure2_slot1;
                var7 = var7.id;
                var3['applicationId'] = var7;
                var3 = var4.bind(var5)(var3);
                var5 = _closure2_slot4;
                var4 = var5.navigate;
                var2 = _closure1_slot12;
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
            if(!var23) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var28 = _closure1_slot17;
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
            var29 = var29.lx+Gec;
            var29 = var30.bind(var31)(var29);
            var25['label'] = var29;
            var29 = function handleClickToS() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.terms_of_service_url;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 35;
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
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var25['onPress'] = var29;
            var25['arrow'] = var20;
            var23 = var28.bind(var4)(var27, var25);
case 29:
            var22[1] = var23;
            var23 = var10.privacy_policy_url;
            var23 = var24 != var23;
            if(!var23) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var27 = _closure1_slot17;
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
            var28 = var28.okSwq9;
            var28 = var29.bind(var30)(var28);
            var24['label'] = var28;
            var28 = function handleClickPrivacyPolicy() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.privacy_policy_url;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 35;
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
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var24['onPress'] = var28;
            var24['arrow'] = var20;
            var23 = var27.bind(var4)(var25, var24);
case 33:
            var22[2] = var23;
            var16['children'] = var22;
            var16 = var19.bind(var4)(var18, var16);
            var11['children'] = var16;
            var11 = var13.bind(var4)(var12, var11);
            var5[2] = var11;
            var13 = _closure1_slot17;
            var12 = _closure1_slot5;
            var11 = {};
            var15 = var15.section;
            var11['style'] = var15;
            var16 = _closure1_slot17;
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
            var18 = var18.gAHBA7;
            var18 = var19.bind(var23)(var18);
            var14['title'] = var18;
            var19 = _closure1_slot17;
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
            var22 = var22.xUqheM;
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
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var3 = var2 == var1;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0010_ip = 35; continue _fun0010 }
case 36:
                    var3 = _closure2_slot1;
                    var3 = var3.bot;
                    var6 = var2 == var3;
                    var1 = undefined;
                    if(var6) { _fun0010_ip = 35; continue _fun0010 }
case 37:
                    var1 = var3.id;
case 35:
                    var _closure3_slot0 = var1;
                    if(!(var2 == var1)) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                    return var4;
case 38:
                    var3 = _closure1_slot17;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 42;
                    var1 = var11[var1];
                    var1 = var8.bind(var4)(var1);
                    var2 = var1.TableRowGroup;
                    var1 = {};
                    var14 = 18;
                    var6 = var11[var14];
                    var6 = var8.bind(var4)(var6);
                    var12 = var6.intl;
                    var7 = var12.string;
                    var6 = var11[var14];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.t;
                    var6 = var6["8msQQO"];
                    var6 = var7.bind(var12)(var6);
                    var1['title'] = var6;
                    var7 = _closure1_slot17;
                    var6 = 44;
                    var6 = var11[var6];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.TableRow;
                    var5 = _closure2_slot5;
                    if(var5) { _fun0010_ip = 40; continue _fun0010 }
case 41:
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
                    var8 = var8.l4Emac;
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
                    _fun0010_ip = 42; continue _fun0010;
case 40:
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
                    var10 = var10.XyHpKH;
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
case 42:
                    var5 = var7.bind(var4)(var6, var5);
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var9 = var9.bind(var4)();
            var5[4] = var9;
            if(!var8) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var12 = _closure1_slot17;
            var11 = _closure1_slot21;
            var9 = {};
            var9['application'] = var10;
            var8 = var12.bind(var4)(var11, var9);
case 43:
            var5[5] = var8;
            if(!var6) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var9 = _closure1_slot17;
            var8 = _closure1_slot22;
            var7 = {};
            var7['application'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 45:
            var5[6] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();