// app/modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var18 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var18;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var7;
    var1 = function PlaceholderCommandRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.isFirstRow;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 17; continue _fun0001 }
 15:
            var6 = false;
 17:
            var5 = var1.isLastRow;
            if(!(var5 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 27:
            var5 = false;
 29:
            var1 = _closure1_slot16;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 11;
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
            var3 = _closure1_slot13;
            var1 = 12;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var11 = _closure1_slot13;
            var9 = _closure1_slot6;
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
            var9 = _closure1_slot13;
            var8 = _closure1_slot6;
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
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var2 = function CommandRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var13 = var1.command;
            var _closure2_slot0 = var13;
            var2 = var1.onPressCommand;
            var _closure2_slot1 = var2;
            var15 = var1.isFirstRow;
            var7 = var1.isLastRow;
            var12 = var1.context;
            var _closure2_slot2 = var12;
            var9 = var1.onExecuteCommand;
            var2 = var1.section;
            var _closure2_slot3 = var2;
            var2 = var1.location;
            var _closure2_slot4 = var2;
            var11 = var1.installOnDemand;
            var8 = var1.sectionName;
            var _closure2_slot5 = var8;
            var6 = var1.icon;
            var2 = _closure1_slot0;
            var14 = _closure1_slot3;
            var1 = 13;
            var1 = var14[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.useAppLauncherContext;
            var1 = var1.bind(var3)();
            var1 = var1.entrypoint;
            var _closure2_slot6 = var1;
            var1 = _closure1_slot8;
            var3 = true;
            var1 = var1.bind(var4)(var3, var3);
            var1 = _closure1_slot7;
            var1 = var1.bind(var4)(var12, var3, var3);
            var3 = _closure1_slot13;
            var1 = 12;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['start'] = var15;
            var1['end'] = var7;
            var7 = var13.displayName;
            var1['label'] = var7;
            var7 = 1;
            var1['labelLineClamp'] = var7;
            var15 = var13.displayDescription;
            var1['subLabel'] = var15;
            var1['subLabelLineClamp'] = var7;
            var1['icon'] = var6;
            var6 = function onPress() {
                var5 = _closure2_slot1;
                var4 = _closure2_slot0;
                var3 = _closure2_slot3;
                var2 = _closure2_slot4;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var1['onPress'] = var6;
            var7 = _closure1_slot13;
            var6 = _closure1_slot1;
            var5 = 14;
            var5 = var14[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['command'] = var13;
            var5['context'] = var12;
            var12 = function beforeExecuteCommand() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 15;
                var1 = var8[var5];
                var6 = undefined;
                var3 = var7.bind(var6)(var1);
                var2 = var3.trackCommandSelected;
                var1 = {};
                var9 = _closure2_slot0;
                var1['command'] = var9;
                var9 = _closure2_slot4;
                var1['location'] = var9;
                var5 = var8[var5];
                var7 = var7.bind(var6)(var5);
                var6 = var7.getCommandTriggerSection;
                var5 = _closure2_slot3;
                var5 = var6.bind(var7)(var5);
                var1['triggerSection'] = var5;
                var4 = _closure2_slot5;
                var1['sectionName'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['beforeExecuteCommand'] = var12;
            var5['onExecuteCommand'] = var9;
            var9 = undefined;
            if(!var11) { _fun0002_ip = 303; continue _fun0002 }
 292:
            var10 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 176; continue _fun0003 }
 10:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 16;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.installApplicationOnDemandIfNeeded;
                            var2 = {};
                            var6 = _closure2_slot0;
                            var6 = var6.applicationId;
                            var2['applicationId'] = var6;
                            var6 = _closure2_slot2;
                            var9 = var6.type;
                            var8 = 'channel';
                            var6 = undefined;
                            if(!(var8 === var9)) { _fun0003_ip = 87; continue _fun0003 }
 78:
                            var8 = _closure2_slot2;
                            var6 = var8.channel;
 87:
                            var2['channel'] = var6;
                            var6 = _closure2_slot0;
                            var6 = var6.integration_types;
                            var2['commandIntegrationTypes'] = var6;
                            var6 = {};
                            var8 = _closure2_slot6;
                            var6['entrypoint'] = var8;
                            var8 = _closure2_slot4;
                            var6['location'] = var8;
                            var7 = _closure2_slot5;
                            var6['sectionName'] = var7;
                            var2['appLauncherContext'] = var6;
                            var2 = var4.bind(var5)(var2);
                            SaveGenerator(address=148);
 146:
                            return var2;
 148:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 173; continue _fun0003 }
 154:
                            var4 = var2.isAuthorized;
                            if(!var4) { _fun0003_ip = 170; continue _fun0003 }
 163:
                            var4 = arg1;
                            var4 = var4.bind(var3)();
 170:
                            return var3;
 173:
                            return var2;
 176:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var9 = var10.bind(var4)();
 303:
            var5['tryExecuteCommand'] = var9;
            var5['sectionName'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var2;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var12 = 0;
    var8 = var7[var12];
    var1 = undefined;
    var8 = var18.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var11 = 1;
    var8 = var7[var11];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.View;
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.useContextIndexState;
    var _closure1_slot7 = var9;
    var8 = var8.useUserIndexState;
    var _closure1_slot8 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var15 = var8.DEFAULT_CONTENT_PADDING;
    var _closure1_slot9 = var15;
    var16 = var8.SCREEN_BACKGROUND_COLOR;
    var8 = var8.useAppLauncherNavigation;
    var _closure1_slot10 = var8;
    var8 = 5;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot11 = var8;
    var9 = 6;
    var8 = var7[var9];
    var8 = var6.bind(var1)(var8);
    var8 = var8.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot12 = var8;
    var8 = 7;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var10 = var8.jsx;
    var _closure1_slot13 = var10;
    var10 = var8.jsxs;
    var _closure1_slot14 = var10;
    var8 = var8.Fragment;
    var _closure1_slot15 = var8;
    var8 = 8;
    var8 = var7[var8];
    var13 = var6.bind(var1)(var8);
    var10 = var13.createStyles;
    var8 = {};
    var14 = {};
    var14['backgroundColor'] = var16;
    var14['flex'] = var11;
    var8['container'] = var14;
    var14 = {};
    var16 = 9;
    var17 = var7[var16];
    var17 = var6.bind(var1)(var17);
    var17 = var17.EXPANDED_HEADER_HEIGHT;
    var16 = var7[var16];
    var16 = var6.bind(var1)(var16);
    var16 = var16.SHEET_HANDLE_CONTAINER_HEIGHT;
    var16 = var17 - var16;
    var14['height'] = var16;
    var8['headerSpacer'] = var14;
    var14 = {};
    var14['paddingHorizontal'] = var15;
    var8['list'] = var14;
    var15 = 'center';
    var14 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'marginBottom': 8};
    var8['commandsHeaderContainer'] = var14;
    var14 = {'alignItems': 'center', 'flexDirection': 'row', 'gap': 8};
    var8['commandsHeaderTextContainer'] = var14;
    var14 = {};
    var17 = 10;
    var16 = var7[var17];
    var16 = var18.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var14['borderRadius'] = var16;
    var8['viewContainerStyle'] = var14;
    var14 = {'backgroundColor': null, 'paddingHorizontal': 12, 'paddingVertical': 16};
    var16 = var7[var17];
    var16 = var18.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.CARD_PRIMARY_BG;
    var14['backgroundColor'] = var16;
    var19 = 16;
    var8['mainContainerStyle'] = var14;
    var14 = {'right': 16, 'bottom': 16};
    var8['expandDescriptionCTAStyle'] = var14;
    var14 = {};
    var16 = var7[var17];
    var16 = var18.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var14['marginLeft'] = var16;
    var8['monetizationDisclosureTextStyle'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center'};
    var16 = var7[var17];
    var16 = var18.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_24;
    var14['marginBottom'] = var16;
    var16 = var7[var17];
    var16 = var18.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var14['gap'] = var16;
    var8['monetizationDisclosureContainerStyle'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center'};
    var8['monetizationDisclosureStyle'] = var14;
    var14 = {'backgroundColor': null, 'height': 16, 'marginBottom': 4, 'borderRadius': null, 'alignSelf': 'flex-start'};
    var16 = var7[var17];
    var16 = var18.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_MOD_SUBTLE;
    var14['backgroundColor'] = var16;
    var16 = var7[var17];
    var16 = var18.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var14['borderRadius'] = var16;
    var16 = 'flex-start';
    var8['loadingTextPlaceholder'] = var14;
    var14 = {};
    var20 = var7[var17];
    var20 = var18.bind(var1)(var20);
    var20 = var20.colors;
    var20 = var20.BG_MOD_SUBTLE;
    var14['backgroundColor'] = var20;
    var14['height'] = var19;
    var17 = var7[var17];
    var17 = var18.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var14['borderRadius'] = var17;
    var14['alignSelf'] = var16;
    var8['loadingTextPlaceholderSmall'] = var14;
    var14 = {};
    var14['alignItems'] = var15;
    var8['noCommandsTextContainer'] = var14;
    var8 = var10.bind(var13)(var8);
    var _closure1_slot16 = var8;
    var10 = {};
    var10['PLACEHOLDER'] = var12;
    var8 = 'PLACEHOLDER';
    var10[var12] = var8;
    var10['COMMAND'] = var11;
    var8 = 'COMMAND';
    var10[var11] = var8;
    var _closure1_slot17 = var10;
    var5 = var5.Array;
    var8 = var5.prototype;
    var8 = Object.create(var8, {constructor: {value: var5}});
    var24 = var8;
    var23 = var9;
    var5 = new var24[var5](var23, var22);
    var9 = var5 instanceof Object ? var5 : var8;
    var8 = var9.fill;
    var5 = {};
    var10 = var10.PLACEHOLDER;
    var5['type'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot18 = var5;
    var5 = 41;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AppDetailContent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var26 = var2.context;
            var _closure2_slot0 = var26;
            var13 = var2.application;
            var _closure2_slot1 = var13;
            var11 = var2.lockableScrollableContentOffsetY;
            var12 = var2.onPressBack;
            var37 = var2.installOnDemand;
            var _closure2_slot2 = var37;
            var36 = var2.sectionName;
            var _closure2_slot3 = var36;
            var46 = var2.onActivityItemSelected;
            var44 = var2.entrypoint;
            var _closure2_slot4 = var44;
            var1 = var2.onCommandExecuted;
            var _closure2_slot5 = var1;
            var2 = var2.onAauth2Cancel;
            var _closure2_slot6 = var2;
            var4 = undefined;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var2 = _closure1_slot16;
            var33 = var2.bind(var4)();
            var _closure2_slot7 = var33;
            var8 = _closure1_slot1;
            var19 = _closure1_slot3;
            var2 = 18;
            var2 = var19[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.bottom;
            var16 = _closure1_slot0;
            var3 = 13;
            var3 = var19[var3];
            var5 = var16.bind(var4)(var3);
            var3 = var5.useRequiredAppLauncherContext;
            var3 = var3.bind(var5)();
            var17 = var3.chatInputRef;
            var _closure2_slot8 = var17;
            var14 = var3.keyboardCloseReasonRef;
            var _closure2_slot9 = var14;
            var3 = 17;
            var3 = var19[var3];
            var5 = var16.bind(var4)(var3);
            var3 = var5.useFontScale;
            var3 = var3.bind(var5)();
            var5 = global;
            var7 = var5.Math;
            var5 = var7.max;
            var42 = 36;
            var3 = var42 * var3;
            var3 = var3 - var42;
            var45 = 0;
            var5 = var5.bind(var7)(var3, var45);
            var3 = 60;
            var18 = var3 + var5;
            var5 = _closure1_slot2;
            var3 = 19;
            var3 = var19[var3];
            var7 = var5.bind(var4)(var3);
            var5 = var7.useDiscovery;
            var3 = {};
            var3['context'] = var26;
            var10 = {};
            var15 = 20;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.ApplicationCommandType;
            var16 = var15.CHAT;
            var15 = new Array(1);
            var15[0] = var16;
            var10['commandTypes'] = var15;
            var3['filters'] = var10;
            var10 = {'placeholderCount': 0, 'limit': null, 'includeFrecency': true};
            var15 = _closure1_slot12;
            var10['limit'] = var15;
            var16 = true;
            var10['allowApplicationState'] = var37;
            var10['installOnDemand'] = var37;
            var15 = var13.id;
            var10['applicationId'] = var15;
            var3['options'] = var10;
            var3['allowFetch'] = var16;
            var5 = var5.bind(var7)(var3);
            var3 = var5.filterSection;
            var _closure2_slot10 = var3;
            var10 = var5.commandsByActiveSection;
            var7 = var5.sectionDescriptors;
            var _closure2_slot11 = var7;
            var15 = var5.loading;
            var _closure2_slot12 = var15;
            var5 = 21;
            var5 = var19[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var19 = var13.id;
            var5['sectionId'] = var19;
            var5['commandsByActiveSection'] = var10;
            var5 = var8.bind(var4)(var5);
            var34 = var5.sortOrder;
            var8 = var5.setSortOrder;
            var _closure2_slot13 = var8;
            var41 = var5.commands;
            var _closure2_slot14 = var41;
            var30 = var5.canSort;
            var5 = _closure1_slot8;
            var5 = var5.bind(var4)(var16, var16);
            var8 = var5.result;
            var28 = null;
            var10 = var28 == var8;
            var5 = undefined;
            if(var10) { _fun0004_ip = 547; continue _fun0004 }
 532:
            var10 = var8.sections;
            var8 = var13.id;
            var5 = var10[var8];
 547:
            var5 = var28 == var5;
            var27 = !var15;
            if(!var27) { _fun0004_ip = 566; continue _fun0004 }
 557:
            var8 = var41.length;
            var27 = var45 === var8;
 566:
            var10 = var27;
            if(!var10) { _fun0004_ip = 575; continue _fun0004 }
 572:
            var10 = var5;
 575:
            if(!var10) { _fun0004_ip = 612; continue _fun0004 }
 578:
            var8 = _closure1_slot0;
            var19 = _closure1_slot3;
            var5 = 22;
            var5 = var19[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.isEmbeddedApp;
            var5 = var5.bind(var8)(var13);
            var10 = !var5;
 612:
            var5 = _closure1_slot5;
            var20 = var5.useMemo;
            var19 = new Array(3);
            var19[0] = var15;
            var19[1] = var41;
            var8 = var26.type;
            var19[2] = var8;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = var2.type;
                    var2 = 'channel';
                    if(!(var2 === var3)) { _fun0005_ip = 61; continue _fun0005 }
 20:
                    var2 = _closure2_slot12;
                    if(var2) { _fun0005_ip = 52; continue _fun0005 }
 27:
                    var3 = _closure2_slot14;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = {};
                        var2 = _closure1_slot17;
                        var2 = var2.COMMAND;
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['command'] = var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 59; continue _fun0005;
 52:
                    var1 = _closure1_slot18;
 59:
                    _fun0005_ip = 65; continue _fun0005;
 61:
                    var1 = new Array(0);
 65:
                    return var1;
                }
            };
            var19 = var20.bind(var5)(var8, var19);
            var20 = var5.useEffect;
            var21 = var13.id;
            var8 = new Array(2);
            var8[0] = var21;
            var8[1] = var3;
            var3 = function() {
                var3 = _closure2_slot10;
                var1 = _closure2_slot1;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var20.bind(var5)(var3, var8);
            var3 = _closure1_slot10;
            var3 = var3.bind(var4)();
            _closure2_slot15 = var3;
            var20 = var5.useCallback;
            var8 = new Array(7);
            var8[0] = var26;
            var8[1] = var44;
            var8[2] = var37;
            var8[3] = var3;
            var8[4] = var1;
            var8[5] = var7;
            var8[6] = var36;
            var3 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arguments[2];
                    var1 = undefined;
                    if(!(var5 === var1)) { _fun0006_ip = 44; continue _fun0006 }
 9:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 23;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.ApplicationCommandTriggerLocations;
                    var5 = var2.APP_LAUNCHER_APPLICATION_VIEW;
 44:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 24;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleApplicationCommandSelected;
                    var2 = {};
                    var2['location'] = var5;
                    var6 = _closure2_slot0;
                    var2['context'] = var6;
                    var6 = arg1;
                    var2['command'] = var6;
                    var6 = arg2;
                    var2['section'] = var6;
                    var6 = _closure2_slot11;
                    var2['sectionDescriptors'] = var6;
                    var6 = '';
                    var2['query'] = var6;
                    var6 = _closure2_slot15;
                    var2['navigation'] = var6;
                    var6 = _closure2_slot2;
                    var2['installOnDemand'] = var6;
                    var6 = _closure2_slot3;
                    var2['sectionName'] = var6;
                    var6 = _closure2_slot4;
                    var2['entrypoint'] = var6;
                    var5 = _closure2_slot5;
                    var2['onCommandExecuted'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var40 = var20.bind(var5)(var3, var8);
            _closure2_slot16 = var40;
            var8 = var5.useCallback;
            var3 = new Array(3);
            var3[0] = var17;
            var3[1] = var14;
            var3[2] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot8;
                    var3 = var1.current;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0007_ip = 28; continue _fun0007 }
 18:
                    var1 = var3.closeCustomKeyboard;
                    var1 = var1.bind(var3)();
 28:
                    var5 = _closure2_slot9;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.AppLauncherKeyboardCloseReason;
                    var3 = var3.COMMAND;
                    var5['current'] = var3;
                    var3 = _closure2_slot5;
                    if(!(var4 != var3)) { _fun0007_ip = 91; continue _fun0007 }
 83:
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
 91:
                    return var1;
                }
            };
            var38 = var8.bind(var5)(var1, var3);
            _closure2_slot17 = var38;
            var3 = var7.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var39 = var3.bind(var7)(var1);
            _closure2_slot18 = var39;
            var7 = var5.useCallback;
            var3 = new Array(7);
            var3[0] = var40;
            var1 = var41.length;
            var3[1] = var1;
            var3[2] = var26;
            var3[3] = var38;
            var3[4] = var39;
            var3[5] = var37;
            var3[6] = var36;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.item;
                    var6 = var1.index;
                    var4 = var3.type;
                    var1 = _closure1_slot17;
                    var1 = var1.PLACEHOLDER;
                    if(!(var4 !== var1)) { _fun0008_ip = 220; continue _fun0008 }
 38:
                    var5 = var3.type;
                    var1 = _closure1_slot17;
                    var4 = var1.COMMAND;
                    var1 = null;
                    if(!(var5 === var4)) { _fun0008_ip = 218; continue _fun0008 }
 62:
                    var7 = _closure1_slot13;
                    var5 = _closure1_slot20;
                    var4 = {};
                    var3 = var3.command;
                    var4['command'] = var3;
                    var3 = _closure2_slot16;
                    var4['onPressCommand'] = var3;
                    var3 = 0;
                    var3 = var3 === var6;
                    var4['isFirstRow'] = var3;
                    var3 = _closure2_slot14;
                    var9 = var3.length;
                    var3 = 1;
                    var3 = var9 - var3;
                    var3 = var6 === var3;
                    var4['isLastRow'] = var3;
                    var3 = _closure2_slot0;
                    var4['context'] = var3;
                    var3 = _closure2_slot17;
                    var4['onExecuteCommand'] = var3;
                    var3 = _closure2_slot18;
                    var4['section'] = var3;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 23;
                    var9 = var9[var3];
                    var3 = undefined;
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.ApplicationCommandTriggerLocations;
                    var9 = var9.APP_LAUNCHER_APPLICATION_VIEW;
                    var4['location'] = var9;
                    var9 = _closure2_slot2;
                    var4['installOnDemand'] = var9;
                    var8 = _closure2_slot3;
                    var4['sectionName'] = var8;
                    var1 = var7.bind(var3)(var5, var4);
 218:
                    _fun0008_ip = 274; continue _fun0008;
 220:
                    var5 = _closure1_slot13;
                    var4 = _closure1_slot19;
                    var3 = {};
                    var7 = 0;
                    var7 = var7 === var6;
                    var3['isFirstRow'] = var7;
                    var2 = _closure1_slot18;
                    var7 = var2.length;
                    var2 = 1;
                    var2 = var7 - var2;
                    var2 = var6 === var2;
                    var3['isLastRow'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 274:
                    return var1;
                }
            };
            var20 = var7.bind(var5)(var1, var3);
            var1 = _closure1_slot9;
            var2 = var2 + var1;
            _closure2_slot19 = var2;
            var8 = _closure1_slot1;
            var29 = _closure1_slot3;
            var1 = 25;
            var1 = var29[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var1.width;
            _closure2_slot20 = var7;
            var1 = 26;
            var1 = var29[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.maximum;
            _closure2_slot21 = var1;
            var17 = var5.useMemo;
            var14 = new Array(4);
            var14[0] = var13;
            var3 = var33.monetizationDisclosureContainerStyle;
            var14[1] = var3;
            var3 = var33.monetizationDisclosureStyle;
            var14[2] = var3;
            var3 = var33.monetizationDisclosureTextStyle;
            var14[3] = var3;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 27;
                    var1 = var4[var1];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.isAndroid;
                    var4 = var1.bind(var3)();
                    if(!var4) { _fun0009_ip = 75; continue _fun0009 }
 37:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 22;
                    var1 = var6[var1];
                    var6 = var3.bind(var5)(var1);
                    var3 = var6.isApplicationMonetizedWithIAP;
                    var1 = _closure2_slot1;
                    var4 = var3.bind(var6)(var1);
 75:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 22;
                    var1 = var6[var1];
                    var7 = var3.bind(var5)(var1);
                    var3 = var7.isApplicationAdSupported;
                    var1 = _closure2_slot1;
                    var3 = var3.bind(var7)(var1);
                    var7 = null;
                    if(!var3) { _fun0009_ip = 323; continue _fun0009 }
 121:
                    var10 = _closure1_slot14;
                    var9 = _closure1_slot6;
                    var8 = {};
                    var15 = _closure2_slot7;
                    var11 = var15.monetizationDisclosureStyle;
                    var8['style'] = var11;
                    var13 = _closure1_slot13;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var11 = 28;
                    var11 = var19[var11];
                    var11 = var18.bind(var5)(var11);
                    var12 = var11.BillIcon;
                    var11 = {'size': 'sm', 'color': 'interactive-muted'};
                    var12 = var13.bind(var5)(var12, var11);
                    var11 = new Array(2);
                    var11[0] = var12;
                    var14 = _closure1_slot13;
                    var12 = 29;
                    var12 = var19[var12];
                    var12 = var18.bind(var5)(var12);
                    var13 = var12.Text;
                    var12 = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-secondary', 'lineClamp': 1};
                    var15 = var15.monetizationDisclosureTextStyle;
                    var12['style'] = var15;
                    var15 = 30;
                    var16 = var19[var15];
                    var16 = var18.bind(var5)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var19[var15];
                    var15 = var18.bind(var5)(var15);
                    var15 = var15.t;
                    var15 = var15.5khEk5;
                    var15 = var16.bind(var17)(var15);
                    var12['children'] = var15;
                    var12 = var14.bind(var5)(var13, var12);
                    var11[1] = var12;
                    var8['children'] = var11;
                    var7 = var10.bind(var5)(var9, var8);
 323:
                    var8 = null;
                    if(!var4) { _fun0009_ip = 533; continue _fun0009 }
 331:
                    var11 = _closure1_slot14;
                    var10 = _closure1_slot6;
                    var9 = {};
                    var16 = _closure2_slot7;
                    var12 = var16.monetizationDisclosureStyle;
                    var9['style'] = var12;
                    var14 = _closure1_slot13;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var12 = 31;
                    var12 = var20[var12];
                    var12 = var19.bind(var5)(var12);
                    var13 = var12.ShopIcon;
                    var12 = {'size': 'sm', 'color': 'interactive-muted'};
                    var13 = var14.bind(var5)(var13, var12);
                    var12 = new Array(2);
                    var12[0] = var13;
                    var15 = _closure1_slot13;
                    var13 = 29;
                    var13 = var20[var13];
                    var13 = var19.bind(var5)(var13);
                    var14 = var13.Text;
                    var13 = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-secondary', 'lineClamp': 1};
                    var16 = var16.monetizationDisclosureTextStyle;
                    var13['style'] = var16;
                    var16 = 30;
                    var17 = var20[var16];
                    var17 = var19.bind(var5)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var16 = var20[var16];
                    var16 = var19.bind(var5)(var16);
                    var16 = var16.t;
                    var16 = var16.8z5B2d;
                    var16 = var17.bind(var18)(var16);
                    var13['children'] = var16;
                    var13 = var15.bind(var5)(var14, var13);
                    var12[1] = var13;
                    var9['children'] = var12;
                    var8 = var11.bind(var5)(var10, var9);
 533:
                    if(var4) { _fun0009_ip = 541; continue _fun0009 }
 536:
                    var1 = null;
                    if(!var3) { _fun0009_ip = 587; continue _fun0009 }
 541:
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var6 = _closure2_slot7;
                    var6 = var6.monetizationDisclosureContainerStyle;
                    var2['style'] = var6;
                    var6 = new Array(2);
                    var6[0] = var8;
                    var6[1] = var7;
                    var2['children'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 587:
                    return var1;
                }
            };
            var25 = var17.bind(var5)(var3, var14);
            var17 = var5.useMemo;
            var14 = new Array(2);
            var14[0] = var2;
            var3 = var33.list;
            var14[1] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot7;
                var4 = var3.list;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var3 = _closure2_slot19;
                var2 = 'paddingBottom';
                var1[var2] = var3;
                return var1;
            };
            var22 = var17.bind(var5)(var3, var14);
            var14 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = {};
                var2 = _closure2_slot19;
                var1['bottom'] = var2;
                return var1;
            };
            var21 = var14.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot20;
                var1['width'] = var3;
                var2 = _closure2_slot21;
                var1['height'] = var2;
                return var1;
            };
            var17 = var3.bind(var5)(var1, var2);
            var31 = _closure1_slot0;
            var7 = 32;
            var1 = var29[var7];
            var2 = var31.bind(var4)(var1);
            var1 = var2.useAppLauncherFlashListProps;
            var5 = var1.bind(var2)();
            var3 = _closure1_slot14;
            var2 = _closure1_slot15;
            var1 = {};
            var14 = _closure1_slot13;
            var7 = var29[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var23 = {};
            var35 = _closure1_slot13;
            var32 = _closure1_slot6;
            var24 = {};
            var43 = var33.headerSpacer;
            var24['style'] = var43;
            var32 = var35.bind(var4)(var32, var24);
            var24 = new Array(7);
            var24[0] = var32;
            var32 = 22;
            var29 = var29[var32];
            var31 = var31.bind(var4)(var29);
            var29 = var31.isEmbeddedApp;
            var29 = var29.bind(var31)(var13);
            var43 = _closure1_slot13;
            var35 = _closure1_slot1;
            var47 = _closure1_slot3;
            if(var29) { _fun0004_ip = 1274; continue _fun0004 }
 1215:
            var29 = 34;
            var29 = var47[var29];
            var31 = var35.bind(var4)(var29);
            var29 = {};
            var29['application'] = var13;
            var48 = var33.viewContainerStyle;
            var29['viewContainerStyle'] = var48;
            var48 = var33.mainContainerStyle;
            var29['mainContainerStyle'] = var48;
            var48 = var33.expandDescriptionCTAStyle;
            var29['expandDescriptionCTAStyle'] = var48;
            var29 = var43.bind(var4)(var31, var29);
            _fun0004_ip = 1331; continue _fun0004;
 1274:
            var31 = 33;
            var31 = var47[var31];
            var35 = var35.bind(var4)(var31);
            var31 = {};
            var31['application'] = var13;
            var31['context'] = var26;
            var31['sectionName'] = var36;
            var31['onActivityItemSelected'] = var46;
            var31['entrypoint'] = var44;
            var44 = var41.length;
            var44 = var44 > var45;
            var31['hasCommands'] = var44;
            var29 = var43.bind(var4)(var35, var31);
 1331:
            var24[1] = var29;
            var35 = _closure1_slot13;
            var31 = _closure1_slot1;
            var43 = _closure1_slot3;
            var29 = 35;
            var29 = var43[var29];
            var31 = var31.bind(var4)(var29);
            var29 = {};
            var44 = var28 == var25;
            var43 = 24;
            if(var44) { _fun0004_ip = 1401; continue _fun0004 }
 1371:
            var45 = _closure1_slot1;
            var46 = _closure1_slot3;
            var44 = 10;
            var44 = var46[var44];
            var44 = var45.bind(var4)(var44);
            var44 = var44.spacing;
            var43 = var44.PX_16;
 1401:
            var29['size'] = var43;
            var29 = var35.bind(var4)(var31, var29);
            var24[2] = var29;
            var24[3] = var25;
            var29 = var41.length;
            var25 = 1;
            var25 = var29 > var25;
            if(!var25) { _fun0004_ip = 1437; continue _fun0004 }
 1434:
            var25 = !var15;
 1437:
            if(!var25) { _fun0004_ip = 1453; continue _fun0004 }
 1440:
            var31 = var26.type;
            var29 = 'channel';
            var25 = var29 === var31;
 1453:
            if(!var25) { _fun0004_ip = 1518; continue _fun0004 }
 1456:
            var35 = _closure1_slot13;
            var31 = _closure1_slot1;
            var29 = _closure1_slot3;
            var29 = var29[var42];
            var31 = var31.bind(var4)(var29);
            var29 = {};
            var29['context'] = var26;
            var29['allCommands'] = var41;
            var29['onPressCommand'] = var40;
            var29['section'] = var39;
            var29['onExecuteCommand'] = var38;
            var29['installOnDemand'] = var37;
            var29['sectionName'] = var36;
            var25 = var35.bind(var4)(var31, var29);
 1518:
            var24[4] = var25;
            var25 = null;
            if(!var27) { _fun0004_ip = 1698; continue _fun0004 }
 1530:
            var31 = _closure1_slot0;
            var29 = _closure1_slot3;
            var29 = var29[var32];
            var31 = var31.bind(var4)(var29);
            var29 = var31.isEmbeddedApp;
            var29 = var29.bind(var31)(var13);
            var25 = null;
            if(var29) { _fun0004_ip = 1698; continue _fun0004 }
 1566:
            var32 = _closure1_slot13;
            var31 = _closure1_slot6;
            var29 = {};
            var35 = var33.noCommandsTextContainer;
            var29['style'] = var35;
            var37 = _closure1_slot13;
            var41 = _closure1_slot0;
            var42 = _closure1_slot3;
            var35 = 29;
            var35 = var42[var35];
            var35 = var41.bind(var4)(var35);
            var36 = var35.Text;
            var35 = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            var38 = 30;
            var39 = var42[var38];
            var39 = var41.bind(var4)(var39);
            var40 = var39.intl;
            var39 = var40.string;
            var38 = var42[var38];
            var38 = var41.bind(var4)(var38);
            var38 = var38.t;
            var38 = var38.w8+YDA;
            var38 = var39.bind(var40)(var38);
            var35['children'] = var38;
            var35 = var37.bind(var4)(var36, var35);
            var29['children'] = var35;
            var25 = var32.bind(var4)(var31, var29);
 1698:
            var24[5] = var25;
            var25 = null;
            if(var27) { _fun0004_ip = 1954; continue _fun0004 }
 1710:
            var27 = var26.type;
            var26 = 'channel';
            var25 = null;
            if(!(var26 === var27)) { _fun0004_ip = 1954; continue _fun0004 }
 1728:
            var28 = _closure1_slot14;
            var27 = _closure1_slot6;
            var26 = {};
            var29 = var33.commandsHeaderContainer;
            var26['style'] = var29;
            var32 = _closure1_slot13;
            var31 = _closure1_slot6;
            var29 = {};
            var33 = var33.commandsHeaderTextContainer;
            var29['style'] = var33;
            var36 = _closure1_slot13;
            var40 = _closure1_slot0;
            var41 = _closure1_slot3;
            var33 = 29;
            var33 = var41[var33];
            var33 = var40.bind(var4)(var33);
            var35 = var33.Text;
            var33 = {'variant': 'text-md/medium', 'color': 'text-normal'};
            var37 = 30;
            var38 = var41[var37];
            var38 = var40.bind(var4)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var37 = var41[var37];
            var37 = var40.bind(var4)(var37);
            var37 = var37.t;
            var37 = var37.GOXqkp;
            var37 = var38.bind(var39)(var37);
            var33['children'] = var37;
            var33 = var36.bind(var4)(var35, var33);
            var29['children'] = var33;
            var31 = var32.bind(var4)(var31, var29);
            var29 = new Array(2);
            var29[0] = var31;
            if(!var30) { _fun0004_ip = 1940; continue _fun0004 }
 1891:
            var33 = _closure1_slot13;
            var32 = _closure1_slot1;
            var35 = _closure1_slot3;
            var31 = 37;
            var31 = var35[var31];
            var32 = var32.bind(var4)(var31);
            var31 = {};
            var31['sortOrder'] = var34;
            var34 = function onSortOptionPress(arg1) {
                var3 = _closure2_slot13;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var31['onSortOptionPress'] = var34;
            var30 = var33.bind(var4)(var32, var31);
 1940:
            var29[1] = var30;
            var26['children'] = var29;
            var25 = var28.bind(var4)(var27, var26);
 1954:
            var24[6] = var25;
            var23['children'] = var24;
            var23 = var3.bind(var4)(var2, var23);
            var7['ListHeaderComponent'] = var23;
            var7['contentContainerStyle'] = var22;
            var7['scrollIndicatorInsets'] = var21;
            var7['renderItem'] = var20;
            var7['data'] = var19;
            var7['estimatedItemSize'] = var18;
            var7['estimatedListSize'] = var17;
            var7['preserveScrollMomentum'] = var16;
            var7['lockableScrollableContentOffsetY'] = var11;
            var16 = false;
            var7['automaticallyAdjustsScrollIndicatorInsets'] = var16;
            var16 = 'none';
            var7['keyboardDismissMode'] = var16;
            var16 = var5.onScroll;
            var7['animatedOnScroll'] = var16;
            var16 = var5.scrollerRef;
            var7['ref'] = var16;
            var16 = var5.gestureRef;
            var7['simultaneousHandlers'] = var16;
            var5 = var5.animatedProps;
            var7['animatedProps'] = var5;
            var5 = undefined;
            if(!var15) { _fun0004_ip = 2080; continue _fun0004 }
 2076:
            var5 = 'loading';
 2080:
            var7 = var14.bind(var4)(var8, var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var14 = _closure1_slot3;
            var6 = 9;
            var6 = var14[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['application'] = var13;
            var6['onPressBack'] = var12;
            var6['scrollOffsetY'] = var11;
            var6['showsAddCTA'] = var10;
            var9 = function onAddAppMenuClick(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.installAppProps;
                    var1 = undefined;
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 38;
                    var3 = var9[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideActionSheet;
                    var3 = var3.bind(var4)();
                    var7 = _closure2_slot9;
                    var8 = _closure1_slot0;
                    var4 = 13;
                    var4 = var9[var4];
                    var4 = var8.bind(var1)(var4);
                    var4 = var4.AppLauncherKeyboardCloseReason;
                    var4 = var4.OAUTH_MODAL;
                    var7['current'] = var4;
                    var4 = _closure2_slot8;
                    var8 = var4.current;
                    var4 = null;
                    if(!(var4 != var8)) { _fun0010_ip = 116; continue _fun0010 }
 106:
                    var7 = var8.closeCustomKeyboard;
                    var7 = var7.bind(var8)();
 116:
                    var8 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 23;
                    var7 = var10[var7];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.ApplicationCommandTriggerLocations;
                    var7 = var7.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU;
                    var8['location'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var8['application_id'] = var7;
                    var7 = _closure2_slot3;
                    var8['section_name'] = var7;
                    var3 = _closure2_slot4;
                    var8['source'] = var3;
                    _closure3_slot0 = var8;
                    var3 = var6.customInstallUrl;
                    if(!(var4 == var3)) { _fun0010_ip = 241; continue _fun0010 }
 199:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 39;
                    var3 = var7[var3];
                    var7 = var4.bind(var1)(var3);
                    var4 = var7.trackWithMetadata;
                    var3 = _closure1_slot11;
                    var3 = var3.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED;
                    var3 = var4.bind(var7)(var3, var8);
 241:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 40;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.installApplication;
                    var2 = {};
                    var12 = var2;
                    var11 = var6;
                    var6 = copyDataProperties(var12, var11);
                    var7 = 'app_launcher_app_details';
                    var6 = 'source';
                    var2[var6] = var7;
                    var6 = function oauth2Callback(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.canceled;
                            var1 = var1.location;
                            var3 = null;
                            if(var2) { _fun0011_ip = 79; continue _fun0011 }
 19:
                            if(!(var3 != var1)) { _fun0011_ip = 100; continue _fun0011 }
 23:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 39;
                            var4 = var4[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.trackWithMetadata;
                            var1 = _closure1_slot11;
                            var2 = var1.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED;
                            var1 = _closure3_slot0;
                            var1 = var4.bind(var5)(var2, var1);
                            _fun0011_ip = 100; continue _fun0011;
 79:
                            var2 = _closure2_slot6;
                            if(!(var3 != var2)) { _fun0011_ip = 100; continue _fun0011 }
 90:
                            var2 = _closure2_slot6;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
 100:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = 'oauth2Callback';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var6['onAddAppMenuClick'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = 24;
    var3['BETWEEN_SECTIONS_MARGIN'] = var4;
    var3['CommandRow'] = var2;
    return var1;
})();