// app/modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TABLE_ROW_HEIGHT;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.DEFAULT_CONTENT_PADDING;
    var _closure1_slot6 = var13;
    var4 = var4.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
    var _closure1_slot7 = var4;
    var7 = 4;
    var4 = var6[var7];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = {};
    var4['bottom'] = var7;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': '100%', 'backgroundColor': null, 'flex': 1, 'flexDirection': 'column', 'paddingBottom': 12};
    var11 = 6;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'height': 24, 'backgroundColor': null, 'paddingHorizontal': null, 'marginBottom': 12};
    var10 = 'center';
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var14;
    var9['paddingHorizontal'] = var13;
    var4['header'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var9['paddingBottom'] = var11;
    var4['list'] = var9;
    var9 = {};
    var11 = 7;
    var12 = var6[var11];
    var12 = var5.bind(var1)(var12);
    var12 = var12.BACK_BUTTON_SIZE;
    var9['width'] = var12;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.BACK_BUTTON_SIZE;
    var9['height'] = var11;
    var9['alignItems'] = var10;
    var9['justifyContent'] = var10;
    var4['backButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/app_list_view/AppLauncherViewAllScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherViewAllScreen(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.route;
            var3 = var1.params;
            var12 = var3.context;
            var _closure2_slot0 = var12;
            var26 = var3.analyticsLocation;
            var _closure2_slot1 = var26;
            var6 = var3.sectionItemType;
            var1 = var3.sectionName;
            var20 = var3.sectionOverallPosition;
            var _closure2_slot2 = var20;
            var17 = var3.applications;
            var _closure2_slot3 = var17;
            var23 = var3.commands;
            var _closure2_slot4 = var23;
            var13 = var3.sectionDescriptors;
            var _closure2_slot5 = var13;
            var7 = var3.title;
            var _closure2_slot6 = var7;
            var19 = var3.promotedApplicationIds;
            var _closure2_slot7 = var19;
            var2 = var2.navigation;
            var _closure2_slot8 = var2;
            var4 = undefined;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var3 = null;
            var3 = var3 != var1;
            var24 = 'frecency_view_all';
            if(!var3) { _fun0001_ip = 181; continue _fun0001 }
 178:
            var24 = var1;
 181:
            _closure2_slot9 = var24;
            var3 = _closure1_slot11;
            var5 = var3.bind(var4)();
            _closure2_slot10 = var5;
            var8 = _closure1_slot1;
            var22 = _closure1_slot2;
            var3 = 8;
            var3 = var22[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var8 = var3.bottom;
            var3 = _closure1_slot6;
            var10 = var8 + var3;
            _closure2_slot11 = var10;
            var8 = _closure1_slot0;
            var3 = 9;
            var3 = var22[var3];
            var9 = var8.bind(var4)(var3);
            var3 = var9.useRequiredAppLauncherContext;
            var9 = var3.bind(var9)();
            var16 = var9.chatInputRef;
            _closure2_slot12 = var16;
            var3 = var9.keyboardCloseReasonRef;
            _closure2_slot13 = var3;
            var14 = var9.entrypoint;
            _closure2_slot14 = var14;
            var25 = _closure1_slot3;
            var15 = var25.useCallback;
            var11 = new Array(3);
            var11[0] = var16;
            var11[1] = var3;
            var11[2] = var2;
            var9 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot8;
                    var2 = var3.canGoBack;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0002_ip = 94; continue _fun0002 }
 20:
                    var3 = _closure2_slot13;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.AppLauncherKeyboardCloseReason;
                    var2 = var2.BACK;
                    var3['current'] = var2;
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 108; continue _fun0002 }
 82:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
                    _fun0002_ip = 108; continue _fun0002;
 94:
                    var2 = _closure2_slot8;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
 108:
                    var1 = undefined;
                    return var1;
                }
            };
            var21 = var15.bind(var25)(var9, var11);
            _closure2_slot15 = var21;
            var15 = var25.useCallback;
            var11 = new Array(4);
            var11[0] = var26;
            var11[1] = var12;
            var11[2] = var14;
            var11[3] = var2;
            var9 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.application;
                    var6 = var1.sectionName;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleApplicationSelected;
                    var2 = {};
                    var10 = _closure2_slot1;
                    var9 = null;
                    if(!(var9 == var10)) { _fun0003_ip = 94; continue _fun0003 }
 60:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 11;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.ApplicationCommandTriggerLocations;
                    var8 = var8.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
                    _fun0003_ip = 98; continue _fun0003;
 94:
                    var8 = _closure2_slot1;
 98:
                    var2['location'] = var8;
                    var2['application'] = var7;
                    var7 = _closure2_slot8;
                    var2['navigation'] = var7;
                    var7 = _closure2_slot0;
                    var2['context'] = var7;
                    var2['sectionName'] = var6;
                    var5 = _closure2_slot14;
                    var2['entrypoint'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var9 = var15.bind(var25)(var9, var11);
            _closure2_slot16 = var9;
            var15 = var25.useCallback;
            var11 = new Array(5);
            var11[0] = var26;
            var11[1] = var12;
            var11[2] = var14;
            var11[3] = var2;
            var11[4] = var13;
            var2 = function(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleApplicationCommandSelected;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var7 = null;
                    if(!(var7 == var8)) { _fun0004_ip = 80; continue _fun0004 }
 46:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 11;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.ApplicationCommandTriggerLocations;
                    var6 = var6.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
                    _fun0004_ip = 84; continue _fun0004;
 80:
                    var6 = _closure2_slot1;
 84:
                    var2['location'] = var6;
                    var6 = _closure2_slot0;
                    var2['context'] = var6;
                    var6 = arg1;
                    var2['command'] = var6;
                    var6 = arg2;
                    var2['section'] = var6;
                    var6 = _closure2_slot5;
                    var2['sectionDescriptors'] = var6;
                    var6 = '';
                    var2['query'] = var6;
                    var6 = _closure2_slot8;
                    var2['navigation'] = var6;
                    var6 = arg3;
                    var2['sectionName'] = var6;
                    var5 = _closure2_slot14;
                    var2['entrypoint'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var15.bind(var25)(var2, var11);
            _closure2_slot17 = var2;
            var15 = var25.useMemo;
            var11 = new Array(4);
            var11[0] = var21;
            var21 = var5.backButton;
            var11[1] = var21;
            var21 = var5.header;
            var11[2] = var21;
            var11[3] = var7;
            var7 = function() {
                var4 = _closure1_slot9;
                var3 = _closure1_slot4;
                var2 = {};
                var1 = _closure2_slot10;
                var1 = var1.header;
                var2['style'] = var1;
                var8 = _closure1_slot8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 12;
                var5 = var11[var1];
                var1 = undefined;
                var5 = var10.bind(var1)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var9 = _closure2_slot10;
                var9 = var9.backButton;
                var5['style'] = var9;
                var9 = 13;
                var13 = var11[var9];
                var13 = var10.bind(var1)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.13/7kZ;
                var9 = var13.bind(var14)(var9);
                var5['accessibilityLabel'] = var9;
                var9 = 'button';
                var5['accessibilityRole'] = var9;
                var9 = _closure2_slot15;
                var5['onPress'] = var9;
                var9 = 14;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var13 = var9.ArrowLargeLeftIcon;
                var9 = {};
                var7 = _closure1_slot1;
                var14 = 6;
                var14 = var11[var14];
                var14 = var7.bind(var1)(var14);
                var14 = var14.colors;
                var14 = var14.INTERACTIVE_NORMAL;
                var9['color'] = var14;
                var9 = var8.bind(var1)(var13, var9);
                var5['children'] = var9;
                var6 = var8.bind(var1)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var6 = 15;
                var6 = var11[var6];
                var6 = var10.bind(var1)(var6);
                var9 = var6.Text;
                var6 = {'lineClamp': 1, 'variant': 'heading-lg/bold', 'color': 'header-primary'};
                var12 = _closure2_slot6;
                var6['children'] = var12;
                var6 = var8.bind(var1)(var9, var6);
                var5[1] = var6;
                var6 = 16;
                var6 = var11[var6];
                var7 = var7.bind(var1)(var6);
                var6 = {};
                var9 = 7;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var9 = var9.BACK_BUTTON_SIZE;
                var6['size'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[2] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var7 = var15.bind(var25)(var7, var11);
            var15 = var25.useCallback;
            var11 = new Array(4);
            var11[0] = var17;
            var11[1] = var19;
            var11[2] = var9;
            var11[3] = var24;
            var9 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var _closure3_slot0 = var1;
                    var10 = var2.index;
                    var2 = _closure2_slot3;
                    var8 = null;
                    var6 = var8 != var2;
                    if(!var6) { _fun0005_ip = 55; continue _fun0005 }
 35:
                    var2 = _closure2_slot3;
                    var3 = var2.length;
                    var2 = 1;
                    var2 = var3 - var2;
                    var6 = var10 === var2;
 55:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['application'] = var1;
                    var9 = function onPress() {
                        var3 = _closure2_slot16;
                        var2 = {};
                        var4 = _closure3_slot0;
                        var2['application'] = var4;
                        var1 = _closure2_slot9;
                        var2['sectionName'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onPress'] = var9;
                    var9 = 0;
                    var9 = var9 === var10;
                    var2['isFirstRow'] = var9;
                    var2['isLastRow'] = var6;
                    var6 = _closure2_slot7;
                    var8 = var8 == var6;
                    var6 = undefined;
                    if(var8) { _fun0005_ip = 149; continue _fun0005 }
 130:
                    var9 = _closure2_slot7;
                    var8 = var9.has;
                    var7 = var1.id;
                    var6 = var8.bind(var9)(var7);
 149:
                    var2['showsPromoted'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var15 = var15.bind(var25)(var9, var11);
            var11 = var25.useCallback;
            var9 = new Array(2);
            var9[0] = var16;
            var9[1] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot12;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 28; continue _fun0006 }
 18:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
 28:
                    var3 = _closure2_slot13;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.AppLauncherKeyboardCloseReason;
                    var2 = var2.COMMAND;
                    var3['current'] = var2;
                    return var1;
                }
            };
            var11 = var11.bind(var25)(var3, var9);
            _closure2_slot18 = var11;
            var9 = var25.useCallback;
            var3 = new Array(6);
            var3[0] = var13;
            var3[1] = var12;
            var12 = var23.length;
            var3[2] = var12;
            var3[3] = var11;
            var3[4] = var24;
            var3[5] = var2;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var14 = var1.item;
                    var _closure3_slot0 = var14;
                    var12 = var1.index;
                    var5 = undefined;
                    var _closure3_slot1 = var5;
                    var2 = _closure2_slot5;
                    var1 = null;
                    var2 = var1 == var2;
                    var8 = undefined;
                    if(var2) { _fun0007_ip = 64; continue _fun0007 }
 43:
                    var4 = _closure2_slot5;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.applicationId;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var8 = var3.bind(var4)(var2);
 64:
                    _closure3_slot1 = var8;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.getAppLauncherIconSource;
                    var9 = var1 == var8;
                    var3 = undefined;
                    if(var9) { _fun0007_ip = 111; continue _fun0007 }
 106:
                    var3 = var8.application;
 111:
                    var10 = var4.bind(var6)(var3);
                    var3 = _closure2_slot4;
                    var4 = var3.length;
                    var3 = 1;
                    var11 = var4 - var3;
                    if(!(var1 != var8)) { _fun0007_ip = 330; continue _fun0007 }
 139:
                    var6 = var1 != var10;
                    if(!var6) { _fun0007_ip = 191; continue _fun0007 }
 146:
                    var9 = _closure1_slot8;
                    var4 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var3 = 18;
                    var3 = var15[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var3['iconSource'] = var10;
                    var10 = 36;
                    var3['iconSize'] = var10;
                    var6 = var9.bind(var5)(var4, var3);
 191:
                    var4 = _closure1_slot8;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var5)(var2);
                    var3 = var2.CommandRow;
                    var2 = {};
                    var2['command'] = var14;
                    var13 = function onPressCommand() {
                        var5 = _closure2_slot17;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var2 = _closure2_slot9;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    };
                    var2['onPressCommand'] = var13;
                    var13 = _closure2_slot18;
                    var2['onExecuteCommand'] = var13;
                    var13 = 0;
                    var13 = var13 === var12;
                    var2['isFirstRow'] = var13;
                    var11 = var12 === var11;
                    var2['isLastRow'] = var11;
                    var11 = _closure2_slot0;
                    var2['context'] = var11;
                    var2['section'] = var8;
                    var8 = 11;
                    var8 = var10[var8];
                    var8 = var9.bind(var5)(var8);
                    var8 = var8.ApplicationCommandTriggerLocations;
                    var8 = var8.APP_LAUNCHER_FRECENTS_VIEW_ALL;
                    var2['location'] = var8;
                    var7 = _closure2_slot9;
                    var2['sectionName'] = var7;
                    var2['icon'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
 330:
                    return var1;
                }
            };
            var21 = var9.bind(var25)(var2, var3);
            var2 = 20;
            var2 = var22[var2];
            var3 = var8.bind(var4)(var2);
            var2 = var3.useBottomSheetFlashListBottomViewabilityInset;
            var2 = var2.bind(var3)();
            var12 = var2.flashListRef;
            var11 = var2.bottomVisibilityInsetRef;
            var2 = 21;
            var2 = var22[var2];
            var3 = var8.bind(var4)(var2);
            var2 = var3.useTrackAppLauncherItemImpressionOnFirstView;
            var2 = var2.bind(var3)();
            var3 = var2.trackAppLauncherItemImpressionOnFirstView;
            _closure2_slot19 = var3;
            var2 = 22;
            var9 = var22[var2];
            var13 = var8.bind(var4)(var9);
            var9 = var13.useAppLauncherFlashListProps;
            var9 = var9.bind(var13)();
            var16 = var25.useMemo;
            var13 = new Array(2);
            var13[0] = var10;
            var10 = var5.list;
            var13[1] = var10;
            var10 = function() {
                var1 = {};
                var3 = _closure2_slot10;
                var4 = var3.list;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var3 = _closure2_slot11;
                var2 = 'paddingBottom';
                var1[var2] = var3;
                return var1;
            };
            var19 = var16.bind(var25)(var10, var13);
            var16 = var25.useMemo;
            var13 = new Array(3);
            var13[0] = var24;
            var13[1] = var20;
            var13[2] = var3;
            var10 = function() {
                var2 = {};
                var1 = _closure1_slot7;
                var2['viewabilityConfig'] = var1;
                var1 = function onViewableItemsChanged(arg1) {
                    var1 = arg1;
                    var3 = var1.viewableItems;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.item;
                        var5 = var2.index;
                        var3 = _closure2_slot19;
                        var2 = {};
                        var8 = var1.id;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var7 = var6.concat;
                        var6 = 'applicationId:';
                        var6 = var7.bind(var6)(var8);
                        var2['itemKey'] = var6;
                        var6 = _closure2_slot9;
                        var2['sectionName'] = var6;
                        var2['sectionPosition'] = var5;
                        var4 = _closure2_slot2;
                        var2['sectionOverallPosition'] = var4;
                        var1 = var1.id;
                        var2['applicationId'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2['onViewableItemsChanged'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var10 = var16.bind(var25)(var10, var13);
            var16 = var25.useMemo;
            var13 = new Array(3);
            var13[0] = var24;
            var13[1] = var20;
            var13[2] = var3;
            var3 = function() {
                var2 = {};
                var1 = _closure1_slot7;
                var2['viewabilityConfig'] = var1;
                var1 = function onViewableItemsChanged(arg1) {
                    var1 = arg1;
                    var3 = var1.viewableItems;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.item;
                        var5 = var2.index;
                        var3 = _closure2_slot19;
                        var2 = {};
                        var8 = var1.id;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var7 = var6.concat;
                        var6 = 'commandId:';
                        var6 = var7.bind(var6)(var8);
                        var2['itemKey'] = var6;
                        var6 = _closure2_slot9;
                        var2['sectionName'] = var6;
                        var2['sectionPosition'] = var5;
                        var4 = _closure2_slot2;
                        var2['sectionOverallPosition'] = var4;
                        var4 = var1.applicationId;
                        var2['applicationId'] = var4;
                        var1 = var1.id;
                        var2['commandId'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2['onViewableItemsChanged'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var16 = var16.bind(var25)(var3, var13);
            var20 = var25.useMemo;
            var3 = var17.length;
            var13 = new Array(1);
            var13[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure1_slot5;
                var2 = _closure2_slot3;
                var2 = var2.length;
                var2 = var3 * var2;
                var1['height'] = var2;
                var2 = 500;
                var1['width'] = var2;
                return var1;
            };
            var13 = var20.bind(var25)(var3, var13);
            var24 = var25.useMemo;
            var3 = var23.length;
            var20 = new Array(1);
            var20[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure1_slot5;
                var2 = _closure2_slot4;
                var2 = var2.length;
                var2 = var3 * var2;
                var1['height'] = var2;
                var2 = 500;
                var1['width'] = var2;
                return var1;
            };
            var20 = var24.bind(var25)(var3, var20);
            var3 = 23;
            var3 = var22[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.SectionItemType;
            var3 = var3.APPS;
            if(!(var6 !== var3)) { _fun0001_ip = 1077; continue _fun0001 }
 884:
            var8 = _closure1_slot8;
            var6 = _closure1_slot1;
            var22 = _closure1_slot2;
            var3 = var22[var2];
            var6 = var6.bind(var4)(var3);
            var3 = {'preserveScrollMomentum': true, 'estimatedFirstItemOffset': 10};
            var3['contentContainerStyle'] = var19;
            var24 = _closure1_slot10;
            var3['scrollIndicatorInsets'] = var24;
            var24 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var3['keyExtractor'] = var24;
            var3['data'] = var23;
            var3['renderItem'] = var21;
            var21 = 'radiogroup';
            var3['accessibilityRole'] = var21;
            var21 = _closure1_slot5;
            var3['estimatedItemSize'] = var21;
            var3['estimatedListSize'] = var20;
            var21 = _closure1_slot0;
            var20 = 24;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.AppLauncherEntrypoint;
            var21 = var20.VOICE;
            var20 = var12;
            if(!(var14 === var21)) { _fun0001_ip = 1019; continue _fun0001 }
 1013:
            var20 = var9.scrollerRef;
 1019:
            var3['ref'] = var20;
            var3['bottomViewabilityInsetRef'] = var11;
            var3['viewabilityConfigCallbackPairs'] = var16;
            var16 = var9.onScroll;
            var3['animatedOnScroll'] = var16;
            var16 = var9.gestureRef;
            var3['simultaneousHandlers'] = var16;
            var16 = var9.animatedProps;
            var3['animatedProps'] = var16;
            var6 = var8.bind(var4)(var6, var3);
            _fun0001_ip = 1262; continue _fun0001;
 1077:
            var8 = _closure1_slot8;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = var16[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {'preserveScrollMomentum': true, 'estimatedFirstItemOffset': 10};
            var2['contentContainerStyle'] = var19;
            var19 = _closure1_slot10;
            var2['scrollIndicatorInsets'] = var19;
            var18 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var2['keyExtractor'] = var18;
            var2['data'] = var17;
            var2['renderItem'] = var15;
            var15 = 'radiogroup';
            var2['accessibilityRole'] = var15;
            var15 = _closure1_slot5;
            var2['estimatedItemSize'] = var15;
            var2['estimatedListSize'] = var13;
            var15 = _closure1_slot0;
            var13 = 24;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.AppLauncherEntrypoint;
            var13 = var13.VOICE;
            if(!(var14 === var13)) { _fun0001_ip = 1209; continue _fun0001 }
 1203:
            var12 = var9.scrollerRef;
 1209:
            var2['ref'] = var12;
            var2['bottomViewabilityInsetRef'] = var11;
            var2['viewabilityConfigCallbackPairs'] = var10;
            var10 = var9.onScroll;
            var2['animatedOnScroll'] = var10;
            var10 = var9.gestureRef;
            var2['simultaneousHandlers'] = var10;
            var9 = var9.animatedProps;
            var2['animatedProps'] = var9;
            var6 = var8.bind(var4)(var3, var2);
 1262:
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();