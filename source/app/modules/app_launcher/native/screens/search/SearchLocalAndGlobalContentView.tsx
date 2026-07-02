// app/modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function getApplicationIdFromApplicationItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.type;
            var1 = _closure1_slot13;
            var3 = var1.PLACERHOLDER;
            var1 = undefined;
            if(!(var5 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.application;
            var3 = null;
            var3 = var3 != var5;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var2.application;
            var1 = var2.id;
case 2:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getImpressionPropsFromApplicationItem(arg1) {
        var1 = {};
        var4 = _closure1_slot18;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var1['applicationId'] = var2;
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function CommandRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var12 = var1.context;
            var13 = var1.command;
            var17 = var1.application;
            var6 = var1.onPress;
            var14 = var1.isFirstRow;
            var7 = var1.isLastRow;
            var11 = var1.beforeExecuteCommand;
            var8 = var1.onExecuteCommand;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.getAppLauncherIconSource;
            var9 = var1.bind(var2)(var17);
            var1 = null;
            var15 = var1 != var9;
            if(!var15) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['iconSource'] = var9;
            var15 = var3.bind(var4)(var2, var1);
case 5:
            var3 = _closure1_slot10;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 11;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['icon'] = var15;
            var15 = var13.displayName;
            var1['label'] = var15;
            var15 = 12;
            var15 = var10[var15];
            var16 = var9.bind(var4)(var15);
            var15 = var16.getSectionName;
            var15 = var15.bind(var16)(var17);
            var1['subLabel'] = var15;
            var15 = 1;
            var1['subLabelLineClamp'] = var15;
            var1['start'] = var14;
            var1['end'] = var7;
            var1['onPress'] = var6;
            var7 = _closure1_slot10;
            var6 = _closure1_slot1;
            var5 = 13;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['command'] = var13;
            var5['context'] = var12;
            var5['beforeExecuteCommand'] = var11;
            var5['onExecuteCommand'] = var8;
            var8 = 14;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.AppLauncherSectionName;
            var8 = var8.SEARCH;
            var5['sectionName'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function PlaceholderCommandRow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = var1.isFirstRow;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var6 = false;
case 7:
            var5 = var1.isLastRow;
            if(!(var5 === var4)) { _fun0003_ip = 9; continue _fun0003 }
case 3:
            var5 = false;
case 9:
            var1 = _closure1_slot17;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var3 = var8[var1];
            var12 = var2.bind(var4)(var3);
            var11 = var12.usePlaceholderWidth;
            var9 = 10;
            var3 = 50;
            var19 = var11.bind(var12)(var9, var3);
            var1 = var8[var1];
            var11 = var2.bind(var4)(var1);
            var9 = var11.usePlaceholderWidth;
            var3 = 30;
            var1 = 90;
            var15 = var9.bind(var11)(var3, var1);
            var3 = _closure1_slot10;
            var1 = 11;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var11 = _closure1_slot10;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var10.loadingCommandAppIcon;
            var8['style'] = var12;
            var8 = var11.bind(var4)(var9, var8);
            var1['icon'] = var8;
            var11 = _closure1_slot10;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var10.loadingTextPlaceholder;
            var16 = new Array(2);
            var16[0] = var12;
            var17 = {};
            var12 = global;
            var13 = var12.HermesInternal;
            var18 = var13.concat;
            var14 = '';
            var13 = '%';
            var18 = var18.bind(var14)(var19, var13);
            var17['width'] = var18;
            var16[1] = var17;
            var8['style'] = var16;
            var8 = var11.bind(var4)(var9, var8);
            var1['label'] = var8;
            var9 = _closure1_slot10;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var10.loadingTextPlaceholderSmall;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var12 = var12.HermesInternal;
            var12 = var12.concat;
            var12 = var12.bind(var14)(var15, var13);
            var11['width'] = var12;
            var10[1] = var11;
            var7['style'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var1['subLabel'] = var7;
            var7 = 1;
            var1['subLabelLineClamp'] = var7;
            var1['start'] = var6;
            var1['end'] = var5;
            var5 = function onPress() {
                var1 = undefined;
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function keyExtractor(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var4 = var1.type;
            var2 = _closure1_slot13;
            var2 = var2.PLACERHOLDER;
            if(!(var4 !== var2)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var1 = var1.application;
            var1 = var1.id;
            _fun0004_ip = 12; continue _fun0004;
case 10:
            var2 = var3.toString;
            var1 = var2.bind(var3)();
case 12:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function CommandsExpandableList(arg1) {
        var1 = arg1;
        var9 = var1.commandData;
        var _closure2_slot0 = var9;
        var10 = var1.context;
        var _closure2_slot1 = var10;
        var11 = var1.beforeExecuteCommand;
        var _closure2_slot2 = var11;
        var7 = var1.onPressCommand;
        var _closure2_slot3 = var7;
        var8 = var1.onExecuteCommand;
        var _closure2_slot4 = var8;
        var5 = var1.expanded;
        var6 = _closure1_slot4;
        var4 = var6.useMemo;
        var3 = new Array(5);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var9;
        var3[3] = var8;
        var3[4] = var7;
        var2 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var3 = arg2;
                    var _closure4_slot0 = var3;
                    var3 = _closure1_slot14;
                    if(!(var2 !== var3)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var3 = var2.command;
                    var _closure4_slot1 = var3;
                    var2 = var2.application;
                    var _closure4_slot2 = var2;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var6 = var1.isLastRow;
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot20;
                        var2 = {};
                        var7 = _closure2_slot1;
                        var2['context'] = var7;
                        var8 = _closure4_slot1;
                        var2['command'] = var8;
                        var8 = _closure4_slot2;
                        var2['application'] = var8;
                        var8 = function onPress() {
                            var4 = _closure2_slot3;
                            var3 = _closure4_slot1;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var2['onPress'] = var8;
                        var8 = _closure4_slot0;
                        var7 = 0;
                        var7 = var7 === var8;
                        var2['isFirstRow'] = var7;
                        var2['isLastRow'] = var6;
                        var5 = function beforeExecuteCommand() {
                            var3 = _closure2_slot2;
                            var2 = {};
                            var4 = _closure4_slot1;
                            var2['command'] = var4;
                            var1 = _closure4_slot0;
                            var2['searchResultsPosition'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2['beforeExecuteCommand'] = var5;
                        var1 = _closure2_slot4;
                        var2['onExecuteCommand'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    return var2;
case 13:
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.isLastRow;
                        var4 = _closure1_slot10;
                        var3 = _closure1_slot21;
                        var2 = {};
                        var6 = _closure4_slot0;
                        var5 = 0;
                        var5 = var5 === var6;
                        var2['isFirstRow'] = var5;
                        var2['isLastRow'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var4.bind(var6)(var2, var3);
        var4 = _closure1_slot10;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 30;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['items'] = var6;
        var1['expandedOverride'] = var5;
        var5 = false;
        var1['showsExpandCTAOverride'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var16 = 0;
    var7 = var6[var16];
    var1 = undefined;
    var7 = var12.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var14 = 1;
    var8 = var6[var14];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot4 = var7;
    var11 = 2;
    var8 = var6[var11];
    var8 = var5.bind(var1)(var8);
    var8 = var8.View;
    var _closure1_slot5 = var8;
    var9 = 3;
    var8 = var6[var9];
    var8 = var5.bind(var1)(var8);
    var8 = var8.getSection;
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.FetchState;
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var13 = var8.DEFAULT_CONTENT_PADDING;
    var _closure1_slot8 = var13;
    var8 = var8.useAppLauncherNavigation;
    var _closure1_slot9 = var8;
    var15 = 6;
    var8 = var6[var15];
    var8 = var5.bind(var1)(var8);
    var10 = var8.jsx;
    var _closure1_slot10 = var10;
    var10 = var8.jsxs;
    var _closure1_slot11 = var10;
    var8 = var8.Fragment;
    var _closure1_slot12 = var8;
    var10 = {};
    var10['PLACERHOLDER'] = var16;
    var8 = 'PLACERHOLDER';
    var10[var16] = var8;
    var10['LOCAL_APPLICATION'] = var14;
    var8 = 'LOCAL_APPLICATION';
    var10[var14] = var8;
    var10['GLOBAL_APPLICATION'] = var11;
    var8 = 'GLOBAL_APPLICATION';
    var10[var11] = var8;
    var _closure1_slot13 = var10;
    var14 = 'placeholder';
    var _closure1_slot14 = var14;
    var8 = var4.Array;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var20 = var11;
    var19 = var15;
    var8 = new var20[var8](var19, var18);
    var11 = var8 instanceof Object ? var8 : var11;
    var8 = var11.fill;
    var8 = var8.bind(var11)(var14);
    var _closure1_slot15 = var8;
    var4 = var4.Array;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var20 = var8;
    var19 = var9;
    var4 = new var20[var4](var19, var18);
    var9 = var4 instanceof Object ? var4 : var8;
    var8 = var9.fill;
    var4 = {};
    var10 = var10.PLACERHOLDER;
    var4['type'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 8;
    var10['marginBottom'] = var11;
    var4['sectionHeader'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_KEYBOARD_PANEL_BACKGROUND;
    var10['backgroundColor'] = var13;
    var4['list'] = var10;
    var10 = {'width': 32, 'height': 32};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var13;
    var4['loadingCommandAppIcon'] = var10;
    var10 = {'backgroundColor': null, 'height': 16, 'marginBottom': 4, 'borderRadius': null, 'alignSelf': 'flex-start'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var13;
    var14 = 16;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10['borderRadius'] = var13;
    var13 = 'flex-start';
    var4['loadingTextPlaceholder'] = var10;
    var10 = {};
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var15;
    var10['height'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var10['alignSelf'] = var13;
    var4['loadingTextPlaceholderSmall'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['marginTop'] = var13;
    var4['divider'] = var10;
    var10 = {'justifyContent': 'space-between', 'flexDirection': 'row'};
    var4['commandsHeaderContainer'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_4;
    var10['marginBottom'] = var13;
    var13 = 'center';
    var10['justifyContent'] = var13;
    var4['commandsCTA'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var10['color'] = var11;
    var4['commandsCTAUnderlayColor'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var37 = var1.context;
            var _closure2_slot0 = var37;
            var16 = var1.onScroll;
            var _closure2_slot1 = var16;
            var34 = var1.onSend;
            var24 = var1.entrypoint;
            var _closure2_slot2 = var24;
            var5 = undefined;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var1 = _closure1_slot17;
            var27 = var1.bind(var5)();
            var _closure2_slot3 = var27;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 16;
            var1 = var9[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var6 = var1.bottom;
            var1 = 17;
            var1 = var9[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.bind(var5)();
            var _closure2_slot4 = var3;
            var1 = _closure1_slot9;
            var1 = var1.bind(var5)();
            var _closure2_slot5 = var1;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var4 = '';
            var8 = var7.bind(var8)(var4);
            var7 = _closure1_slot3;
            var4 = 2;
            var8 = var7.bind(var5)(var8, var4);
            var23 = 0;
            var4 = var8[var23];
            var _closure2_slot6 = var4;
            var7 = 1;
            var7 = var8[var7];
            var _closure2_slot7 = var7;
            var12 = _closure1_slot4;
            var10 = var12.useImperativeHandle;
            var8 = arg2;
            var7 = function() {
                var1 = {};
                var2 = _closure2_slot7;
                var1['setQuery'] = var2;
                return var1;
            };
            var7 = var10.bind(var12)(var8, var7);
            var8 = _closure1_slot0;
            var7 = 18;
            var7 = var9[var7];
            var9 = var8.bind(var5)(var7);
            var8 = var9.useIsActivitiesInTextEnabled;
            var12 = var37.type;
            var10 = 'channel';
            var7 = undefined;
            if(!(var10 === var12)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
            var10 = var37.channel;
            var7 = var10.id;
case 15:
            var13 = var8.bind(var9)(var7);
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 19;
            var8 = var12[var7];
            var10 = var14.bind(var5)(var8);
            var9 = var10.useLocalSearchResults;
            var8 = {};
            var8['context'] = var37;
            var8['query'] = var4;
            var15 = 20;
            var8['commandLimit'] = var15;
            var15 = 10;
            var8['applicationLimit'] = var15;
            var26 = 14;
            var12 = var12[var26];
            var12 = var14.bind(var5)(var12);
            var12 = var12.AppLauncherEntrypoint;
            var12 = var12.VOICE;
            var12 = var24 === var12;
            if(var12) { _fun0006_ip = 17; continue _fun0006 }
case 18:
            var12 = var13;
case 17:
            var8['searchesActivities'] = var12;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var14 = var13[var26];
            var14 = var12.bind(var5)(var14);
            var14 = var14.AppLauncherEntrypoint;
            var14 = var14.TEXT;
            var14 = var24 === var14;
            var8['searchesCommands'] = var14;
            var14 = var13[var26];
            var14 = var12.bind(var5)(var14);
            var14 = var14.AppLauncherEntrypoint;
            var14 = var14.TEXT;
            var14 = var24 === var14;
            var8['searchesBots'] = var14;
            var8 = var9.bind(var10)(var8);
            var15 = var8.loading;
            _closure2_slot8 = var15;
            var17 = var8.commandResults;
            _closure2_slot9 = var17;
            var19 = var8.applicationResults;
            _closure2_slot10 = var19;
            var7 = var13[var7];
            var10 = var12.bind(var5)(var7);
            var9 = var10.useGlobalSearchResults;
            var7 = {};
            var7['query'] = var4;
            var7['context'] = var37;
            var8 = true;
            var7['fetches'] = var8;
            var7['entrypoint'] = var24;
            var9 = var9.bind(var10)(var7);
            var7 = var9.fetchState;
            _closure2_slot11 = var7;
            var10 = var9.applicationResults;
            _closure2_slot12 = var10;
            var18 = var9.fetchNextPage;
            _closure2_slot13 = var18;
            var9 = function useCommandsExpanded(arg1) {
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var1 = false;
                var6 = var4.bind(var5)(var1);
                var5 = _closure1_slot3;
                var4 = undefined;
                var1 = 2;
                var5 = var5.bind(var4)(var6, var1);
                var1 = 0;
                var4 = var5[var1];
                var1 = 1;
                var1 = var5[var1];
                var _closure3_slot0 = var1;
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var5 = new Array(1);
                var1 = arg1;
                var5[0] = var1;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var6.bind(var7)(var1, var5);
                var1 = {};
                var1['isCommandsExpanded'] = var4;
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var3 = function() {
                    var3 = _closure3_slot0;
                    var1 = undefined;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = !var1;
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = new Array(0);
                var2 = var4.bind(var5)(var3, var2);
                var1['toggleCommandsExpanded'] = var2;
                return var1;
            };
            var9 = var9.bind(var5)(var4);
            var33 = var9.isCommandsExpanded;
            var41 = var9.toggleCommandsExpanded;
            var21 = _closure1_slot4;
            var20 = var21.useCallback;
            var14 = new Array(4);
            var14[0] = var37;
            var14[1] = var24;
            var14[2] = var1;
            var14[3] = var4;
            var9 = function(arg1, arg2) {
                var6 = arg1;
                var4 = _closure1_slot6;
                var10 = _closure2_slot0;
                var3 = var6.applicationId;
                var1 = undefined;
                var3 = var4.bind(var1)(var10, var3);
                var9 = var3.descriptor;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var4 = var7.bind(var1)(var2);
                var3 = var4.handleApplicationCommandSelected;
                var2 = {};
                var11 = 20;
                var11 = var8[var11];
                var11 = var7.bind(var1)(var11);
                var11 = var11.ApplicationCommandTriggerLocations;
                var11 = var11.APP_LAUNCHER_HOME_SEARCH;
                var2['location'] = var11;
                var2['context'] = var10;
                var2['command'] = var6;
                var2['section'] = var9;
                var6 = new Array(1);
                var6[0] = var9;
                var2['sectionDescriptors'] = var6;
                var6 = _closure2_slot6;
                var2['query'] = var6;
                var6 = _closure2_slot5;
                var2['navigation'] = var6;
                var6 = 14;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.AppLauncherSectionName;
                var6 = var6.SEARCH;
                var2['sectionName'] = var6;
                var6 = arg2;
                var2['searchResultsPosition'] = var6;
                var5 = _closure2_slot2;
                var2['entrypoint'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var35 = var20.bind(var21)(var9, var14);
            var21 = _closure1_slot4;
            var20 = var21.useCallback;
            var14 = new Array(2);
            var14[0] = var37;
            var14[1] = var4;
            var9 = function(arg1) {
                var1 = arg1;
                var10 = var1.command;
                var5 = var1.searchResultsPosition;
                var7 = _closure1_slot6;
                var4 = _closure2_slot0;
                var3 = var10.applicationId;
                var1 = undefined;
                var3 = var7.bind(var1)(var4, var3);
                var11 = var3.descriptor;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 21;
                var2 = var9[var7];
                var4 = var8.bind(var1)(var2);
                var3 = var4.trackCommandSelected;
                var2 = {};
                var2['command'] = var10;
                var10 = 20;
                var10 = var9[var10];
                var10 = var8.bind(var1)(var10);
                var10 = var10.ApplicationCommandTriggerLocations;
                var10 = var10.APP_LAUNCHER_HOME_SEARCH;
                var2['location'] = var10;
                var7 = var9[var7];
                var10 = var8.bind(var1)(var7);
                var7 = var10.getCommandTriggerSection;
                var7 = var7.bind(var10)(var11);
                var2['triggerSection'] = var7;
                var6 = _closure2_slot6;
                var7 = var6.length;
                var2['queryLength'] = var7;
                var7 = 14;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.AppLauncherSectionName;
                var7 = var7.SEARCH;
                var2['sectionName'] = var7;
                var2['query'] = var6;
                var2['searchResultsPosition'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var36 = var20.bind(var21)(var9, var14);
            var20 = _closure1_slot4;
            var14 = var20.useCallback;
            var9 = new Array(4);
            var9[0] = var1;
            var9[1] = var37;
            var9[2] = var4;
            var9[3] = var24;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = var1.section;
                var7 = var1.installOnDemand;
                var6 = var1.searchResultsPosition;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 9;
                var2 = var10[var1];
                var1 = undefined;
                var4 = var9.bind(var1)(var2);
                var3 = var4.handleApplicationSelected;
                var2 = {};
                var8 = 20;
                var8 = var10[var8];
                var8 = var9.bind(var1)(var8);
                var8 = var8.ApplicationCommandTriggerLocations;
                var8 = var8.APP_LAUNCHER_HOME_SEARCH;
                var2['location'] = var8;
                var2['application'] = var5;
                var8 = _closure2_slot5;
                var2['navigation'] = var8;
                var8 = _closure2_slot0;
                var2['context'] = var8;
                var8 = 14;
                var8 = var10[var8];
                var8 = var9.bind(var1)(var8);
                var8 = var8.AppLauncherSectionName;
                var8 = var8.SEARCH;
                var2['sectionName'] = var8;
                var2['installOnDemand'] = var7;
                var7 = _closure2_slot6;
                var2['query'] = var7;
                var2['searchResultsPosition'] = var6;
                var5 = _closure2_slot2;
                var2['entrypoint'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var14.bind(var20)(var1, var9);
            _closure2_slot14 = var1;
            var21 = _closure1_slot4;
            var20 = var21.useMemo;
            var14 = new Array(2);
            var14[0] = var15;
            var14[1] = var17;
            var9 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot8;
                    if(var2) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                    var1 = _closure2_slot9;
                    _fun0007_ip = 14; continue _fun0007;
case 19:
                    var1 = _closure1_slot15;
case 14:
                    return var1;
                }
            };
            var21 = var20.bind(var21)(var9, var14);
            var9 = 22;
            var9 = var13[var9];
            var14 = var12.bind(var5)(var9);
            var13 = var14.useTrackSearchItems;
            var12 = _closure1_slot18;
            var9 = _closure1_slot19;
            var9 = var13.bind(var14)(var12, var9, var4);
            var9 = var9.handleViewableItemsChanged;
            var14 = _closure1_slot4;
            var13 = var14.useMemo;
            var12 = new Array(4);
            var12[0] = var19;
            var12[1] = var10;
            var12[2] = var15;
            var12[3] = var7;
            var10 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure2_slot10;
                    var4 = var5.map;
                    var3 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot13;
                        var2 = var2.LOCAL_APPLICATION;
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['application'] = var2;
                        return var1;
                    };
                    var5 = var4.bind(var5)(var3);
                    var3 = global;
                    var6 = var3.Set;
                    var7 = _closure2_slot10;
                    var4 = var7.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var10 = var4.bind(var7)(var3);
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {constructor: {value: var6}});
                    var11 = var4;
                    var3 = new var11[var6](var10, var9);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var _closure3_slot0 = var3;
                    var4 = _closure2_slot12;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                    var7 = new Array(0);
                    _fun0008_ip = 23; continue _fun0008;
case 21:
                    var7 = _closure2_slot12;
case 23:
                    var6 = var7.filter;
                    var4 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.type;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 23;
                            var4 = var4[var1];
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4);
                            var1 = var1.ApplicationDirectorySearchResultType;
                            var1 = var1.CONNECTION;
                            var1 = var3 !== var1;
                            if(!var1) { _fun0009_ip = 24; continue _fun0009 }
case 25:
                            var4 = _closure3_slot0;
                            var3 = var4.has;
                            var2 = var2.data;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            var1 = !var2;
case 24:
                            return var1;
                        }
                    };
                    var6 = var6.bind(var7)(var4);
                    var4 = var6.map;
                    var2 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot13;
                        var2 = var2.GLOBAL_APPLICATION;
                        var1['type'] = var2;
                        var2 = arg1;
                        var2 = var2.data;
                        var1['application'] = var2;
                        return var1;
                    };
                    var4 = var4.bind(var6)(var2);
                    var2 = _closure2_slot8;
                    if(var2) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var2 = _closure2_slot11;
                    if(!(var3 != var2)) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var2 = _closure2_slot11;
                    var1 = _closure1_slot7;
                    var1 = var1.FETCHING;
                    if(!(var2 !== var1)) { _fun0008_ip = 28; continue _fun0008 }
case 30:
                    var1 = new Array(0);
                    var8 = 0;
                    var10 = var1;
                    var9 = var5;
                    var8 = arraySpread(var10, var9, var8);
                    var10 = var1;
                    var9 = var4;
                    var2 = arraySpread(var10, var9, var8);
                    _fun0008_ip = 31; continue _fun0008;
case 28:
                    var2 = new Array(0);
                    var8 = 0;
                    var10 = var2;
                    var9 = var5;
                    var8 = arraySpread(var10, var9, var8);
                    var10 = var2;
                    var9 = var4;
                    var8 = arraySpread(var10, var9, var8);
                    var9 = _closure1_slot16;
                    var10 = var2;
                    var3 = arraySpread(var10, var9, var8);
                    var1 = var2;
case 31:
                    _fun0008_ip = 32; continue _fun0008;
case 26:
                    var1 = _closure1_slot16;
case 32:
                    return var1;
                }
            };
            var10 = var13.bind(var14)(var10, var12);
            _closure2_slot15 = var10;
            var12 = var21.length;
            var20 = var23 === var12;
            if(!var20) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var12 = var10.length;
            var20 = var23 === var12;
case 33:
            var14 = _closure1_slot4;
            var13 = var14.useEffect;
            var12 = new Array(5);
            var12[0] = var4;
            var17 = var17.length;
            var12[1] = var17;
            var17 = var10.length;
            var12[2] = var17;
            var12[3] = var15;
            var12[4] = var7;
            var7 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = _closure2_slot6;
                    var1 = var1.length;
                    var2 = 0;
                    if(!(var2 !== var1)) { _fun0010_ip = 35; continue _fun0010 }
case 36:
                    var1 = _closure2_slot8;
                    if(var1) { _fun0010_ip = 35; continue _fun0010 }
case 37:
                    var5 = _closure2_slot11;
                    var4 = _closure1_slot7;
                    var4 = var4.FETCHING;
                    if(!(var5 !== var4)) { _fun0010_ip = 35; continue _fun0010 }
case 38:
                    var4 = _closure2_slot9;
                    var4 = var4.length;
                    var3 = _closure2_slot15;
                    var3 = var3.length;
                    var8 = var4 + var3;
                    if(!(var8 > var2)) { _fun0010_ip = 35; continue _fun0010 }
case 39:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 24;
                    var4 = var5[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var4);
                    var7 = var4.intl;
                    var6 = var7.formatToPlainString;
                    var1 = var5[var1];
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.t;
                    var4 = var1.ZGVL3g;
                    var1 = {};
                    var1['count'] = var8;
                    var4 = var6.bind(var7)(var4, var1);
                    var1 = 25;
                    var1 = var5[var1];
                    var1 = var3.bind(var2)(var1);
                    var3 = var1.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = 'polite';
                    var1 = var2.bind(var3)(var4, var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var7, var12);
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var14 = var10.length;
            var7 = new Array(3);
            var7[0] = var14;
            var7[1] = var1;
            var7[2] = var3;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.item;
                    var _closure3_slot0 = var2;
                    var7 = var1.index;
                    var _closure3_slot1 = var7;
                    var4 = undefined;
                    var _closure3_slot2 = var4;
                    var5 = var2.type;
                    var3 = _closure1_slot13;
                    var3 = var3.PLACERHOLDER;
                    if(!(var5 !== var3)) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                    var9 = var2.application;
                    _closure3_slot2 = var9;
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 9;
                    var2 = var10[var2];
                    var5 = var3.bind(var4)(var2);
                    var2 = var5.getAppLauncherIconSource;
                    var8 = var2.bind(var5)(var9);
                    var5 = _closure1_slot10;
                    var2 = 27;
                    var2 = var10[var2];
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.BaseAppRow;
                    var2 = {};
                    var2['application'] = var9;
                    var2['iconSource'] = var8;
                    var6 = function onPress() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var3 = _closure2_slot14;
                            var2 = {};
                            var4 = _closure3_slot2;
                            var2['section'] = var4;
                            var4 = _closure3_slot0;
                            var6 = var4.type;
                            var4 = _closure1_slot13;
                            var4 = var4.GLOBAL_APPLICATION;
                            var4 = var6 === var4;
                            if(var4) { _fun0012_ip = 42; continue _fun0012 }
case 43:
                            var6 = _closure3_slot0;
                            var6 = var6.type;
                            var5 = _closure1_slot13;
                            var5 = var5.LOCAL_APPLICATION;
                            var4 = var6 === var5;
case 42:
                            var2['installOnDemand'] = var4;
                            var1 = _closure3_slot1;
                            var2['searchResultsPosition'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2['onPress'] = var6;
                    var6 = 0;
                    var6 = var6 === var7;
                    var2['isFirstRow'] = var6;
                    var6 = _closure2_slot15;
                    var8 = var6.length;
                    var6 = 1;
                    var6 = var8 - var6;
                    var6 = var7 === var6;
                    var2['isLastRow'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
case 40:
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 26;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var5 = 0;
                    var5 = var5 === var7;
                    var1['isFirstRow'] = var5;
                    var5 = _closure2_slot15;
                    var8 = var5.length;
                    var5 = 1;
                    var5 = var8 - var5;
                    var5 = var7 === var5;
                    var1['isLastRow'] = var5;
                    var5 = {};
                    var6 = _closure2_slot4;
                    var5['height'] = var6;
                    var1['style'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var12 = var12.bind(var13)(var1, var7);
            var1 = _closure1_slot8;
            var17 = var6 + var1;
            _closure2_slot16 = var17;
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 28;
            var6 = var15[var1];
            var7 = var7.bind(var5)(var6);
            var6 = var7.useAppLauncherFlashListProps;
            var6 = var6.bind(var7)();
            var14 = _closure1_slot4;
            var13 = var14.useCallback;
            var7 = new Array(3);
            var7[0] = var18;
            var7[1] = var16;
            var7[2] = var3;
            var3 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.nativeEvent;
                    var2 = var1.layoutMeasurement;
                    var4 = var2.height;
                    var2 = var1.contentOffset;
                    var2 = var2.y;
                    var4 = var4 + var2;
                    var1 = var1.contentSize;
                    var5 = var1.height;
                    var6 = _closure2_slot4;
                    var2 = 3;
                    var2 = var2 * var6;
                    var2 = var5 - var2;
                    if(!(var4 >= var2)) { _fun0013_ip = 44; continue _fun0013 }
case 45:
                    var4 = _closure2_slot13;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
case 44:
                    var4 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0013_ip = 23; continue _fun0013 }
case 46:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var3, var7);
            var16 = _closure1_slot4;
            var14 = var16.useMemo;
            var3 = var27.list;
            var13 = new Array(2);
            var13[0] = var3;
            var13[1] = var17;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot3;
                var4 = var3.list;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var3 = _closure2_slot16;
                var2 = 'paddingBottom';
                var1[1] = var3;
                return var1;
            };
            var14 = var14.bind(var16)(var3, var13);
            var16 = _closure1_slot4;
            var13 = var16.useMemo;
            var3 = new Array(1);
            var3[0] = var17;
            var2 = function() {
                var1 = {};
                var2 = _closure2_slot16;
                var1['bottom'] = var2;
                return var1;
            };
            var13 = var13.bind(var16)(var2, var3);
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var1 = var15[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var17 = _closure1_slot11;
            var16 = _closure1_slot12;
            var15 = {};
            var18 = var21.length;
            var22 = null;
            if(!(var23 !== var18)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var28 = _closure1_slot11;
            var25 = _closure1_slot12;
            var18 = {};
            var30 = _closure1_slot5;
            var29 = {};
            var31 = var27.commandsHeaderContainer;
            var29['style'] = var31;
            var38 = _closure1_slot10;
            var39 = _closure1_slot0;
            var40 = _closure1_slot2;
            var44 = 29;
            var31 = var40[var44];
            var31 = var39.bind(var5)(var31);
            var32 = var31.Text;
            var31 = {'variant': 'text-md/medium', 'color': 'text-default'};
            var42 = var27.sectionHeader;
            var31['style'] = var42;
            var48 = 24;
            var42 = var40[var48];
            var42 = var39.bind(var5)(var42);
            var45 = var42.intl;
            var43 = var45.string;
            var42 = var40[var48];
            var42 = var39.bind(var5)(var42);
            var42 = var42.t;
            var42 = var42["0hKkS+"];
            var42 = var43.bind(var45)(var42);
            var31['children'] = var42;
            var32 = var38.bind(var5)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var38 = var21.length;
            var32 = 30;
            var32 = var40[var32];
            var32 = var39.bind(var5)(var32);
            var32 = var32.COLLAPSED_LIST_ITEM_MAX;
            var38 = var38 > var32;
            var32 = null;
            if(!var38) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var40 = _closure1_slot10;
            var39 = _closure1_slot0;
            var42 = _closure1_slot2;
            var38 = 31;
            var38 = var42[var38];
            var38 = var39.bind(var5)(var38);
            var39 = var38.AnimatedPressableHighlight;
            var38 = {};
            var42 = var27.commandsCTA;
            var38['style'] = var42;
            var42 = var27.commandsCTAUnderlayColor;
            var42 = var42.color;
            var38['underlayColor'] = var42;
            var43 = _closure1_slot0;
            var42 = _closure1_slot2;
            var45 = var42[var48];
            var45 = var43.bind(var5)(var45);
            var46 = var45.intl;
            var45 = var46.string;
            var42 = var42[var48];
            var42 = var43.bind(var5)(var42);
            var43 = var42.t;
            if(var33) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var42 = var43.xal319;
            var42 = var45.bind(var46)(var42);
            _fun0006_ip = 53; continue _fun0006;
case 51:
            var43 = var43.nPGLFQ;
            var42 = var45.bind(var46)(var43);
case 53:
            var38['accessibilityLabel'] = var42;
            var38['onPress'] = var41;
            var43 = _closure1_slot10;
            var42 = _closure1_slot0;
            var41 = _closure1_slot2;
            var41 = var41[var44];
            var41 = var42.bind(var5)(var41);
            var42 = var41.Text;
            var41 = {'color': 'text-brand', 'variant': 'text-md/semibold'};
            var45 = _closure1_slot0;
            var44 = _closure1_slot2;
            var46 = var44[var48];
            var46 = var45.bind(var5)(var46);
            var47 = var46.intl;
            var46 = var47.string;
            var44 = var44[var48];
            var44 = var45.bind(var5)(var44);
            var45 = var44.t;
            if(var33) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var44 = var45.xal319;
            var44 = var46.bind(var47)(var44);
            _fun0006_ip = 56; continue _fun0006;
case 54:
            var45 = var45.nPGLFQ;
            var44 = var46.bind(var47)(var45);
case 56:
            var41['children'] = var44;
            var41 = var43.bind(var5)(var42, var41);
            var38['children'] = var41;
            var32 = var40.bind(var5)(var39, var38);
case 49:
            var31[1] = var32;
            var29['children'] = var31;
            var30 = var28.bind(var5)(var30, var29);
            var29 = new Array(2);
            var29[0] = var30;
            var32 = _closure1_slot10;
            var31 = _closure1_slot23;
            var30 = {};
            var30['commandData'] = var21;
            var30['context'] = var37;
            var30['beforeExecuteCommand'] = var36;
            var30['onPressCommand'] = var35;
            var30['onExecuteCommand'] = var34;
            var30['expanded'] = var33;
            var30 = var32.bind(var5)(var31, var30);
            var29[1] = var30;
            var18['children'] = var29;
            var22 = var28.bind(var5)(var25, var18);
case 47:
            var18 = new Array(4);
            var18[0] = var22;
            var21 = var21.length;
            var22 = var21 > var23;
            var21 = null;
            if(!var22) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var22 = var10.length;
            var22 = var22 > var23;
            var21 = null;
            if(!var22) { _fun0006_ip = 57; continue _fun0006 }
case 59:
            var28 = _closure1_slot10;
            var25 = _closure1_slot5;
            var22 = {};
            var29 = var27.divider;
            var22['style'] = var29;
            var21 = var28.bind(var5)(var25, var22);
case 57:
            var18[1] = var21;
            var22 = var10.length;
            var21 = null;
            if(!(var23 !== var22)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var25 = _closure1_slot10;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var22 = 29;
            var22 = var31[var22];
            var22 = var30.bind(var5)(var22);
            var23 = var22.Text;
            var22 = {'variant': 'text-md/medium', 'color': 'text-default'};
            var27 = var27.sectionHeader;
            var22['style'] = var27;
            var27 = 24;
            var28 = var31[var27];
            var28 = var30.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var31[var27];
            var27 = var30.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27.PHjkRE;
            var27 = var28.bind(var29)(var27);
            var22['children'] = var27;
            var21 = var25.bind(var5)(var23, var22);
case 60:
            var18[2] = var21;
            var19 = null;
            if(!var20) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var22 = _closure1_slot10;
            var21 = _closure1_slot1;
            var23 = _closure1_slot2;
            var20 = 32;
            var20 = var23[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var20['query'] = var4;
            var25 = _closure1_slot0;
            var23 = var23[var26];
            var23 = var25.bind(var5)(var23);
            var23 = var23.AppLauncherEntrypoint;
            var23 = var23.VOICE;
            var23 = var24 === var23;
            var20['showsGenericMessage'] = var23;
            var19 = var22.bind(var5)(var21, var20);
case 62:
            var18[3] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var1['ListHeaderComponent'] = var15;
            var1['contentContainerStyle'] = var14;
            var1['scrollIndicatorInsets'] = var13;
            var1['renderItem'] = var12;
            var11 = _closure1_slot22;
            var1['keyExtractor'] = var11;
            var1['data'] = var10;
            var10 = 'on-drag';
            var1['keyboardDismissMode'] = var10;
            var10 = 'always';
            var1['keyboardShouldPersistTaps'] = var10;
            var10 = false;
            var1['automaticallyAdjustsScrollIndicatorInsets'] = var10;
            var1['showsVerticalScrollIndicator'] = var10;
            var1['onViewableItemsChanged'] = var9;
            var1['preserveScrollMomentum'] = var8;
            var1['onScroll'] = var7;
            var7 = var6.onScroll;
            var1['animatedOnScroll'] = var7;
            var7 = var6.scrollerRef;
            var1['ref'] = var7;
            var7 = var6.gestureRef;
            var1['simultaneousHandlers'] = var7;
            var6 = var6.animatedProps;
            var1['animatedProps'] = var6;
            var1 = var3.bind(var5)(var2, var1, var4);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/search/SearchLocalAndGlobalContentView.tsx';
    var4 = var5.bind(var6)(var4);
    var3['SearchLocalAndGlobalContentView'] = var2;
    return var1;
})();