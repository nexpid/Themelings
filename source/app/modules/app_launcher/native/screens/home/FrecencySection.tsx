// app/modules/app_launcher/native/screens/home/FrecencySection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function Placeholder() {
        var1 = _closure1_slot13;
        var4 = undefined;
        var13 = var1.bind(var4)();
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 12;
        var5 = var3[var1];
        var8 = var2.bind(var4)(var5);
        var7 = var8.usePlaceholderWidth;
        var5 = 20;
        var6 = 90;
        var16 = var7.bind(var8)(var5, var6);
        var1 = var3[var1];
        var3 = var2.bind(var4)(var1);
        var2 = var3.usePlaceholderWidth;
        var1 = 70;
        var15 = var2.bind(var3)(var5, var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var13.commandContainer;
        var1['style'] = var5;
        var7 = _closure1_slot11;
        var6 = _closure1_slot5;
        var5 = {};
        var8 = var13.loadingCommandIcon;
        var5['style'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot12;
        var7 = _closure1_slot5;
        var6 = {};
        var11 = _closure1_slot11;
        var9 = {};
        var14 = var13.loadingTextPlaceholder;
        var12 = new Array(2);
        var12[0] = var14;
        var14 = {};
        var14['width'] = var16;
        var12[1] = var14;
        var9['style'] = var12;
        var11 = var11.bind(var4)(var7, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var12 = _closure1_slot11;
        var11 = _closure1_slot5;
        var10 = {};
        var14 = var13.loadingTextPlaceholderSmall;
        var13 = new Array(2);
        var13[0] = var14;
        var14 = {};
        var14['width'] = var15;
        var13[1] = var14;
        var10['style'] = var13;
        var10 = var12.bind(var4)(var11, var10);
        var9[1] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function FrecentActivityOneClickCTA(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var17 = var2.context;
            var _closure2_slot0 = var17;
            var10 = var2.app;
            var _closure2_slot1 = var10;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 13;
            var2 = var3[var2];
            var6 = var5.bind(var4)(var2);
            var2 = var6.useAppLauncherContext;
            var2 = var2.bind(var6)();
            var13 = var2.entrypoint;
            var14 = var2.onActivityItemSelected;
            var6 = _closure1_slot4;
            var2 = var6.useId;
            var12 = var2.bind(var6)();
            var2 = 14;
            var2 = var3[var2];
            var9 = var5.bind(var4)(var2);
            var7 = var9.useStateFromStoresArray;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var1 = var3.isLaunchingActivity;
                    var3 = var1.bind(var3)();
                    var1 = new Array(2);
                    var1[0] = var3;
                    var5 = _closure1_slot7;
                    var4 = var5.getLaunchState;
                    var2 = _closure2_slot1;
                    var3 = var2.applicationId;
                    var2 = _closure2_slot0;
                    var8 = var2.type;
                    var7 = 'channel';
                    var2 = undefined;
                    if(!(var7 === var8)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure2_slot0;
                    var6 = var6.channel;
                    var2 = var6.id;
case 2:
                    var2 = var4.bind(var5)(var3, var2);
                    var1[1] = var2;
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var6, var2);
            var6 = _closure1_slot3;
            var2 = 2;
            var6 = var6.bind(var4)(var7, var2);
            var2 = 0;
            var7 = var6[var2];
            var2 = 1;
            var2 = var6[var2];
            var11 = 30;
            var3 = var3[var11];
            var6 = var5.bind(var4)(var3);
            var5 = var6.useActivityAction;
            var3 = {};
            var3['context'] = var17;
            var9 = var10.applicationId;
            var3['applicationId'] = var9;
            var9 = var5.bind(var6)(var3);
            var3 = null;
            var6 = var3 != var2;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var2.isLaunching;
case 4:
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var2.componentId;
            var6 = var2 === var12;
case 6:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 22;
            var2 = var16[var2];
            var5 = var15.bind(var4)(var2);
            var3 = var5.useHandleActivityItemSelected;
            var2 = {};
            var18 = var10.applicationId;
            var2['applicationId'] = var18;
            var2['context'] = var17;
            var17 = 15;
            var17 = var16[var17];
            var17 = var15.bind(var4)(var17);
            var17 = var17.AppLauncherSectionName;
            var17 = var17.RECENT_APPS;
            var2['sectionName'] = var17;
            var2['onActivityItemSelected'] = var14;
            var14 = 31;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.ApplicationCommandTriggerLocations;
            var14 = var14.APP_LAUNCHER_HOME;
            var2['location'] = var14;
            var2['entrypoint'] = var13;
            var2['launchingComponentId'] = var12;
            var12 = false;
            var2['fetchesApplication'] = var12;
            var2 = var3.bind(var5)(var2);
            var12 = var2.handleActivityItemSelected;
            _closure2_slot2 = var12;
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot18;
            var1 = {};
            var1['app'] = var10;
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var10.bind(var4)(var8);
            var8 = var8.ActivityAction;
            var8 = var8.LEAVE;
            var7 = var9 === var8;
case 8:
            var1['disabled'] = var7;
            var1['submitting'] = var6;
            var1['onAppSelected'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function FrecentApp(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.app;
            var _closure2_slot0 = var2;
            var9 = var1.disabled;
            var12 = var1.submitting;
            var6 = undefined;
            if(!(var12 === var6)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var12 = false;
case 10:
            var1 = var1.onAppSelected;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot13;
            var11 = var1.bind(var6)();
            var3 = var2.section;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 22;
            var3 = var10[var3];
            var13 = var4.bind(var6)(var3);
            var5 = var13.getAppLauncherIconSource;
            var3 = var2.section;
            var3 = var3.application;
            var14 = var5.bind(var13)(var3);
            var5 = _closure1_slot12;
            var3 = 29;
            var3 = var10[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.PressableOpacity;
            var3 = {};
            if(var9) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var10 = var11.appContainer;
            _fun0003_ip = 16; continue _fun0003;
case 14:
            var10 = var11.appContainerDisabled;
case 16:
            var3['style'] = var10;
            var3['disabled'] = var9;
            var9 = true;
            var3['accessible'] = var9;
            var9 = var2.section;
            var10 = var9.application;
            var13 = var1 == var10;
            var9 = undefined;
            if(var13) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var9 = var10.name;
case 17:
            var3['accessibilityLabel'] = var9;
            var7 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 19:
                    var3 = _closure2_slot0;
                    var3 = var3.section;
                    var3 = var3.application;
                    var2 = var4 != var3;
case 10:
                    if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var3 = _closure2_slot1;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.section;
                    var1 = var1.application;
                    var2['application'] = var1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.AppLauncherSectionName;
                    var4 = var4.RECENT_APPS;
                    var2['sectionName'] = var4;
                    var1 = var3.bind(var1)(var2);
case 20:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['onPress'] = var7;
            var9 = var1 != var14;
            if(!var9) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var13 = _closure1_slot11;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 32;
            var7 = var15[var7];
            var10 = var10.bind(var6)(var7);
            var7 = {};
            var15 = var11.appIcon;
            var7['style'] = var15;
            var7['source'] = var14;
            var9 = var13.bind(var6)(var10, var7);
case 22:
            var7 = new Array(2);
            var7[0] = var9;
            var10 = _closure1_slot11;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 33;
            var8 = var13[var8];
            var8 = var9.bind(var6)(var8);
            var9 = var8.SubmittingOverlay;
            var8 = {};
            var8['submitting'] = var12;
            var11 = var11.submittingOverlay;
            var8['style'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var2.applicationId;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var9 = 0;
    var2 = var7[var9];
    var1 = undefined;
    var2 = var13.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var8 = 1;
    var5 = var7[var8];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.View;
    var _closure1_slot5 = var5;
    var2 = var2.ScrollView;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var5 = var7[var2];
    var5 = var13.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.FrecencySectionSelection;
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot11 = var5;
    var2 = var2.jsxs;
    var _closure1_slot12 = var2;
    var2 = 7;
    var2 = var7[var2];
    var10 = var6.bind(var1)(var2);
    var5 = var10.createStyles;
    var2 = {};
    var11 = {};
    var12 = 8;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11['marginBottom'] = var14;
    var2['container'] = var11;
    var16 = 'row';
    var14 = 'center';
    var11 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var2['headerContainer'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center'};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var11['gap'] = var15;
    var2['header'] = var11;
    var11 = {'marginTop': 8, 'overflow': 'visible'};
    var2['scrollView'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var11['gap'] = var15;
    var2['scrollViewContentContainer'] = var11;
    var15 = 16;
    var11 = {'height': 16, 'width': 16};
    var2['contextMenuIcon'] = var11;
    var11 = {};
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.CARD_PRIMARY_BG;
    var11['backgroundColor'] = var17;
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var11['borderRadius'] = var17;
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.shadows;
    var19 = var17.SHADOW_LOW;
    var20 = var11;
    var17 = copyDataProperties(var20, var19);
    var2['appContainer'] = var11;
    var11 = {};
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.CARD_PRIMARY_BG;
    var11['backgroundColor'] = var17;
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var11['borderRadius'] = var17;
    var17 = 0.4;
    var11['opacity'] = var17;
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.shadows;
    var19 = var17.SHADOW_LOW;
    var20 = var11;
    var17 = copyDataProperties(var20, var19);
    var2['appContainerDisabled'] = var11;
    var11 = {};
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.CARD_PRIMARY_BG;
    var11['backgroundColor'] = var17;
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.md;
    var11['borderRadius'] = var17;
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var11['paddingLeft'] = var17;
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var11['paddingRight'] = var17;
    var17 = var7[var12];
    var17 = var13.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var11['paddingVertical'] = var17;
    var11['flexDirection'] = var16;
    var11['justifyContent'] = var14;
    var11['alignItems'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var11['gap'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.shadows;
    var19 = var14.SHADOW_LOW;
    var20 = var11;
    var14 = copyDataProperties(var20, var19);
    var2['commandContainer'] = var11;
    var11 = {'width': 36, 'height': 36};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11['borderRadius'] = var14;
    var2['commandIcon'] = var11;
    var11 = {'width': 60, 'height': 60};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var11['borderRadius'] = var14;
    var2['appIcon'] = var11;
    var11 = {'width': 36, 'height': 36};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11['borderRadius'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_MOD_SUBTLE;
    var11['backgroundColor'] = var14;
    var2['loadingCommandIcon'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_MOD_SUBTLE;
    var11['backgroundColor'] = var14;
    var11['height'] = var15;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var11['borderRadius'] = var14;
    var14 = 'flex-start';
    var11['alignSelf'] = var14;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var11['marginBottom'] = var16;
    var2['loadingTextPlaceholder'] = var11;
    var11 = {};
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_MOD_SUBTLE;
    var11['backgroundColor'] = var16;
    var11['height'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var11['borderRadius'] = var15;
    var11['alignSelf'] = var14;
    var2['loadingTextPlaceholderSmall'] = var11;
    var11 = {'position': 'absolute', 'top': 0, 'left': 0, 'width': 60, 'height': 60};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var11['borderRadius'] = var12;
    var2['submittingOverlay'] = var11;
    var2 = var5.bind(var10)(var2);
    var _closure1_slot13 = var2;
    var2 = {};
    var2['APPS'] = var9;
    var5 = 'APPS';
    var2[var9] = var5;
    var2['COMMANDS'] = var8;
    var5 = 'COMMANDS';
    var2[var8] = var5;
    var _closure1_slot14 = var2;
    var5 = {};
    var8 = "function FrecencySectionTsx1(){const{withTiming,isRecentsMenuOpen}=this.__closure;return{transform:[{rotate:withTiming(isRecentsMenuOpen?'-180deg':'0deg')}]};}";
    var5['code'] = var8;
    var _closure1_slot15 = var5;
    var5 = 34;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/screens/home/FrecencySection.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function FrecencySection(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.context;
            var _closure2_slot0 = var2;
            var2 = var1.sectionDescriptors;
            var _closure2_slot1 = var2;
            var18 = var1.commands;
            var _closure2_slot2 = var18;
            var11 = var1.loading;
            var _closure2_slot3 = var11;
            var19 = var1.apps;
            var _closure2_slot4 = var19;
            var2 = var1.onAppSelected;
            var _closure2_slot5 = var2;
            var2 = var1.onCommandSelected;
            var _closure2_slot6 = var2;
            var1 = var1.onViewAllSelected;
            var _closure2_slot7 = var1;
            var4 = undefined;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var1 = _closure1_slot13;
            var14 = var1.bind(var4)();
            var _closure2_slot8 = var14;
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useAppLauncherContext;
            var1 = var1.bind(var2)();
            var2 = var1.entrypoint;
            var3 = _closure1_slot4;
            var1 = var3.useState;
            var12 = false;
            var3 = var1.bind(var3)(var12);
            var1 = _closure1_slot3;
            var7 = 2;
            var1 = var1.bind(var4)(var3, var7);
            var22 = 0;
            var8 = var1[var22];
            var _closure2_slot9 = var8;
            var3 = 1;
            var1 = var1[var3];
            var _closure2_slot10 = var1;
            var1 = 14;
            var13 = var9[var1];
            var17 = var5.bind(var4)(var13);
            var16 = var17.useStateFromStores;
            var13 = _closure1_slot8;
            var15 = new Array(1);
            var15[0] = var13;
            var13 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getSelection;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var16.bind(var17)(var15, var13);
            var1 = var9[var1];
            var15 = var5.bind(var4)(var1);
            var9 = var15.useStateFromStores;
            var1 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isLaunchingActivity;
                var1 = var1.bind(var2)();
                return var1;
            };
            var20 = var9.bind(var15)(var5, var1);
            var9 = _closure1_slot4;
            var5 = var9.useState;
            var1 = var18.length;
            if(!(var1 > var22)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var1 = _closure1_slot9;
            var1 = var1.COMMANDS;
            if(!(var13 !== var1)) { _fun0005_ip = 26; continue _fun0005 }
case 24:
            var1 = _closure1_slot14;
            var1 = var1.APPS;
            _fun0005_ip = 27; continue _fun0005;
case 26:
            var13 = _closure1_slot14;
            var1 = var13.COMMANDS;
case 27:
            var5 = var5.bind(var9)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var5, var7);
            var5 = var1[var22];
            _closure2_slot11 = var5;
            var1 = var1[var3];
            _closure2_slot12 = var1;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 15;
            var1 = var16[var1];
            var1 = var13.bind(var4)(var1);
            var1 = var1.AppLauncherEntrypoint;
            var1 = var1.VOICE;
            var1 = var2 === var1;
            _closure2_slot13 = var1;
            var9 = _closure1_slot4;
            var7 = var9.useEffect;
            var2 = var18.length;
            var3 = new Array(4);
            var3[0] = var2;
            var2 = var19.length;
            var3[1] = var2;
            var3[2] = var11;
            var3[3] = var5;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var2 = _closure2_slot2;
                    var2 = var2.length;
                    var4 = 0;
                    var2 = var4 === var2;
                    if(!var2) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var3 = _closure2_slot4;
                    var3 = var3.length;
                    var2 = var4 === var3;
case 30:
                    var1 = var2;
case 28:
                    if(var1) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var1 = var3[var1];
                    var7 = undefined;
                    var4 = var2.bind(var7)(var1);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot10;
                    var2 = var1.APP_LAUNCHER_FRECENTS_SEEN;
                    var1 = {};
                    var9 = _closure2_slot11;
                    var8 = _closure1_slot14;
                    var8 = var8.APPS;
                    if(!(var9 !== var8)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var8 = _closure2_slot2;
                    var8 = var8.length;
                    _fun0006_ip = 36; continue _fun0006;
case 34:
                    var9 = _closure2_slot4;
                    var8 = var9.length;
case 36:
                    var1['num'] = var8;
                    var8 = _closure2_slot11;
                    var6 = _closure1_slot14;
                    var6 = var6.APPS;
                    if(!(var8 !== var6)) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 15;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.AppLauncherSectionName;
                    var6 = var6.RECENT_COMMANDS;
                    _fun0006_ip = 39; continue _fun0006;
case 37:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 15;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.AppLauncherSectionName;
                    var6 = var8.RECENT_APPS;
case 39:
                    var1['section_name'] = var6;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 15;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.AppLauncherLocations;
                    var5 = var5.HOME;
                    var1['location'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var9)(var2, var3);
            var9 = _closure1_slot4;
            var7 = var9.useMemo;
            var3 = new Array(1);
            var3[0] = var19;
            var2 = function() {
                var4 = _closure2_slot4;
                var3 = var4.slice;
                var2 = 0;
                var1 = 8;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var7.bind(var9)(var2, var3);
            var2 = {};
            var2['apps'] = var15;
            var2['onlyActivityApps'] = var1;
            var1 = function useFetchFrecentActivityApps(arg1) {
                var1 = arg1;
                var7 = var1.apps;
                var _closure3_slot0 = var7;
                var6 = var1.onlyActivityApps;
                var _closure3_slot1 = var6;
                var5 = _closure1_slot4;
                var4 = var5.useMemo;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = arg1;
                            var1 = var3.section;
                            var5 = null;
                            var2 = var5 == var1;
                            var1 = null;
                            if(var2) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                            var2 = var3.section;
                            var2 = var2.application;
                            var4 = var5 != var2;
                            var2 = null;
                            if(!var4) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 9;
                            var6 = var6[var4];
                            var4 = undefined;
                            var7 = var7.bind(var4)(var6);
                            var6 = var7.isEmbeddedApp;
                            var4 = var3.section;
                            var4 = var4.application;
                            var4 = var6.bind(var7)(var4);
                            var2 = null;
                            if(!var4) { _fun0007_ip = 42; continue _fun0007 }
case 44:
                            var4 = _closure3_slot1;
                            var2 = null;
                            if(!var4) { _fun0007_ip = 42; continue _fun0007 }
case 45:
                            var3 = var3.section;
                            var3 = var3.application;
                            var2 = var3.id;
case 42:
                            var1 = var2;
case 40:
                            return var1;
                        }
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 10;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.isNotNullish;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var4.bind(var5)(var2, var3);
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var1.bind(var4)(var2);
            var1 = 17;
            var1 = var16[var1];
            var3 = var13.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function W() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = {};
                    var3 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 18;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.withTiming;
                    var6 = _closure2_slot9;
                    var2 = '0deg';
                    if(!var6) { _fun0008_ip = 46; continue _fun0008 }
case 33:
                    var2 = '-180deg';
case 46:
                    var2 = var4.bind(var5)(var2);
                    var3['rotate'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var9 = 18;
            var9 = var16[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.withTiming;
            var7['withTiming'] = var9;
            var7['isRecentsMenuOpen'] = var8;
            var1['__closure'] = var7;
            var7 = 4528534448308.0;
            var1['__workletHash'] = var7;
            var7 = _closure1_slot15;
            var1['__initData'] = var7;
            var1 = var2.bind(var3)(var1);
            _closure2_slot14 = var1;
            var1 = var18.length;
            if(!(var22 === var1)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var1 = var19.length;
            if(!(var22 !== var1)) { _fun0005_ip = 49; continue _fun0005 }
case 47:
            var1 = {};
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var26 = 19;
            var3 = var2[var26];
            var3 = var8.bind(var4)(var3);
            var7 = var3.intl;
            var3 = var7.string;
            var2 = var2[var26];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.XRBNsL;
            var2 = var3.bind(var7)(var2);
            var1['label'] = var2;
            var2 = _closure1_slot14;
            var3 = var2.COMMANDS;
            var2 = undefined;
            if(!(var5 === var3)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 20;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var2 = var3.CheckmarkSmallBoldIcon;
case 50:
            var1['IconComponent'] = var2;
            var2 = function action() {
                var4 = _closure2_slot12;
                var1 = _closure1_slot14;
                var3 = var1.COMMANDS;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 21;
                var3 = var8[var3];
                var5 = var7.bind(var1)(var3);
                var4 = var5.setFrecencySectionSelection;
                var3 = _closure1_slot9;
                var3 = var3.COMMANDS;
                var3 = var4.bind(var5)(var3);
                var3 = 16;
                var3 = var8[var3];
                var5 = var7.bind(var1)(var3);
                var4 = var5.trackWithMetadata;
                var2 = _closure1_slot10;
                var3 = var2.APP_LAUNCHER_FRECENTS_TOGGLED;
                var2 = {};
                var6 = _closure2_slot2;
                var6 = var6.length;
                var2['num'] = var6;
                var6 = 15;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.AppLauncherSectionName;
                var6 = var6.RECENT_COMMANDS;
                var2['section_name'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['action'] = var2;
            var13 = new Array(2);
            var13[0] = var1;
            var1 = {};
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var26];
            var3 = var8.bind(var4)(var3);
            var7 = var3.intl;
            var3 = var7.string;
            var2 = var2[var26];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.TCAk0t;
            var2 = var3.bind(var7)(var2);
            var1['label'] = var2;
            var2 = _closure1_slot14;
            var3 = var2.APPS;
            var2 = undefined;
            if(!(var5 === var3)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 20;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var2 = var3.CheckmarkSmallBoldIcon;
case 52:
            var1['IconComponent'] = var2;
            var2 = function action() {
                var4 = _closure2_slot12;
                var1 = _closure1_slot14;
                var3 = var1.APPS;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 21;
                var3 = var8[var3];
                var5 = var7.bind(var1)(var3);
                var4 = var5.setFrecencySectionSelection;
                var3 = _closure1_slot9;
                var3 = var3.APPS;
                var3 = var4.bind(var5)(var3);
                var3 = 16;
                var3 = var8[var3];
                var5 = var7.bind(var1)(var3);
                var4 = var5.trackWithMetadata;
                var2 = _closure1_slot10;
                var3 = var2.APP_LAUNCHER_FRECENTS_TOGGLED;
                var2 = {};
                var6 = _closure2_slot4;
                var6 = var6.length;
                var2['num'] = var6;
                var6 = 15;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.AppLauncherSectionName;
                var6 = var6.RECENT_APPS;
                var2['section_name'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['action'] = var2;
            var13[1] = var1;
            var2 = var18.slice;
            var1 = 8;
            var3 = var2.bind(var18)(var22, var1);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot1;
                    var3 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.applicationId;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var1);
                    var _closure3_slot1 = var3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 22;
                    var1 = var5[var1];
                    var6 = undefined;
                    var9 = var4.bind(var6)(var1);
                    var5 = var9.getAppLauncherIconSource;
                    var1 = null;
                    var10 = var1 == var3;
                    var4 = undefined;
                    if(var10) { _fun0009_ip = 54; continue _fun0009 }
case 2:
                    var4 = var3.application;
case 54:
                    var11 = var5.bind(var9)(var4);
                    if(!(var1 != var3)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 9;
                    var4 = var4[var5];
                    var9 = var9.bind(var6)(var4);
                    var4 = var9.getSectionName;
                    var3 = var3.application;
                    if(!(var1 == var3)) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var5];
                    var10 = var12.bind(var6)(var10);
                    var3 = var10.FAKE_BUILT_IN_APP;
case 57:
                    var15 = var4.bind(var9)(var3);
                    var4 = var2.type;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 23;
                    var3 = var10[var3];
                    var3 = var9.bind(var6)(var3);
                    var3 = var3.ApplicationCommandType;
                    var3 = var3.PRIMARY_ENTRY_POINT;
                    if(!(var4 !== var3)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var19 = var2.displayName;
                    _fun0009_ip = 61; continue _fun0009;
case 59:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.formatPrimaryEntryPointCommandName;
                    var3 = var2.displayName;
                    var19 = var4.bind(var5)(var3);
case 61:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 24;
                    var3 = var9[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.PressableScale;
                    var3 = {};
                    var8 = _closure2_slot8;
                    var8 = var8.commandContainer;
                    var3['style'] = var8;
                    var7 = function onPress() {
                        var4 = _closure2_slot6;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var3['onPress'] = var7;
                    var8 = var1 != var11;
                    if(!var8) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var10 = _closure1_slot11;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 25;
                    var7 = var12[var7];
                    var9 = var9.bind(var6)(var7);
                    var7 = {};
                    var12 = 36;
                    var7['iconSize'] = var12;
                    var7['iconSource'] = var11;
                    var8 = var10.bind(var6)(var9, var7);
case 62:
                    var7 = new Array(2);
                    var7[0] = var8;
                    var10 = _closure1_slot12;
                    var9 = _closure1_slot5;
                    var8 = {};
                    var18 = _closure1_slot11;
                    var13 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var12 = 26;
                    var11 = var16[var12];
                    var11 = var13.bind(var6)(var11);
                    var17 = var11.Text;
                    var11 = {'variant': 'text-sm/semibold', 'color': 'header-primary'};
                    var11['children'] = var19;
                    var17 = var18.bind(var6)(var17, var11);
                    var11 = new Array(2);
                    var11[0] = var17;
                    var14 = _closure1_slot11;
                    var12 = var16[var12];
                    var12 = var13.bind(var6)(var12);
                    var13 = var12.Text;
                    var12 = {'variant': 'text-xs/normal', 'color': 'text-secondary'};
                    var12['children'] = var15;
                    var12 = var14.bind(var6)(var13, var12);
                    var11[1] = var12;
                    var8['children'] = var11;
                    var8 = var10.bind(var6)(var9, var8);
                    var7[1] = var8;
                    var3['children'] = var7;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var2;
case 55:
                    return var1;
                }
            };
            var7 = var2.bind(var3)(var1);
            var3 = var7.filter;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var1 = var9[var2];
            var1 = var8.bind(var4)(var1);
            var1 = var1.isNotNullish;
            var1 = var3.bind(var7)(var1);
            var7 = var15.map;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.section;
                    var4 = null;
                    var2 = var4 == var1;
                    var1 = null;
                    if(var2) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var2 = var3.section;
                    var2 = var2.application;
                    if(!(var4 != var2)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var2);
                    var5 = var6.isEmbeddedApp;
                    var2 = var3.section;
                    var2 = var2.application;
                    var2 = var5.bind(var6)(var2);
                    if(!var2) { _fun0010_ip = 66; continue _fun0010 }
case 54:
                    var2 = _closure2_slot13;
                    if(var2) { _fun0010_ip = 68; continue _fun0010 }
case 66:
                    var10 = _closure1_slot11;
                    var9 = _closure1_slot18;
                    var6 = {};
                    var6['app'] = var3;
                    var2 = _closure2_slot5;
                    var6['onAppSelected'] = var2;
                    var5 = var3.applicationId;
                    var2 = undefined;
                    var2 = var10.bind(var2)(var9, var6, var5);
                    _fun0010_ip = 69; continue _fun0010;
case 68:
                    var6 = _closure1_slot11;
                    var5 = _closure1_slot17;
                    var4 = {};
                    var8 = _closure2_slot0;
                    var4['context'] = var8;
                    var4['app'] = var3;
                    var3 = var3.applicationId;
                    var2 = var6.bind(var7)(var5, var4, var3);
case 69:
                    var1 = var2;
case 64:
                    return var1;
                }
            };
            var7 = var7.bind(var15)(var3);
            var3 = var7.filter;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var7)(var2);
            var2 = var18.length;
            if(!(var22 === var2)) { _fun0005_ip = 70; continue _fun0005 }
case 71:
            var2 = var19.length;
            if(!(!(var2 > var22))) { _fun0005_ip = 72; continue _fun0005 }
case 70:
            var2 = var18.length;
            var21 = var5;
            if(!(var2 > var22)) { _fun0005_ip = 73; continue _fun0005 }
case 74:
            var2 = var19.length;
            var21 = var5;
            if(!(var22 === var2)) { _fun0005_ip = 73; continue _fun0005 }
case 75:
            var2 = _closure1_slot14;
            var21 = var2.COMMANDS;
case 73:
            _fun0005_ip = 76; continue _fun0005;
case 72:
            var2 = _closure1_slot14;
            var21 = var2.APPS;
case 76:
            _closure2_slot15 = var21;
            var2 = _closure1_slot14;
            var2 = var2.COMMANDS;
            var9 = var3;
            if(!(var21 === var2)) { _fun0005_ip = 77; continue _fun0005 }
case 78:
            var9 = var1;
case 77:
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var14.container;
            var1['style'] = var5;
            var8 = _closure1_slot12;
            var7 = _closure1_slot5;
            var5 = {};
            var15 = var14.headerContainer;
            var5['style'] = var15;
            var17 = _closure1_slot11;
            var16 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 27;
            var15 = var23[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.ContextMenu;
            var15 = {};
            var18 = var18.length;
            var18 = var18 > var22;
            if(!var18) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var19 = var19.length;
            var18 = var19 > var22;
case 79:
            var15['enabled'] = var18;
            var15['items'] = var13;
            var13 = true;
            var15['triggerOnTap'] = var13;
            var18 = function onOpen() {
                var3 = _closure2_slot10;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var15['onOpen'] = var18;
            var18 = function onClose() {
                var3 = _closure2_slot10;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var15['onClose'] = var18;
            var18 = function children(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var5 = var3.ref;
                    var8 = null;
                    var2 = Object.create(var8);
                    var9 = 0;
                    var2['ref'] = var9;
                    var19 = {};
                    var18 = var3;
                    var17 = var2;
                    var18 = copyDataProperties(var19, var18, var17);
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var6 = _closure2_slot8;
                    var6 = var6.header;
                    var2['style'] = var6;
                    var19 = var2;
                    var1 = copyDataProperties(var19, var18);
                    var1 = 'ref';
                    var2[var1] = var5;
                    var7 = _closure1_slot11;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var1 = 26;
                    var5 = var16[var1];
                    var1 = undefined;
                    var5 = var15.bind(var1)(var5);
                    var6 = var5.Text;
                    var5 = {'variant': 'text-lg/bold', 'color': 'header-primary'};
                    var11 = 19;
                    var12 = var16[var11];
                    var12 = var15.bind(var1)(var12);
                    var14 = var12.intl;
                    var12 = var14.string;
                    var11 = var16[var11];
                    var11 = var15.bind(var1)(var11);
                    var11 = var11.t;
                    var11 = var11.acSE0t;
                    var11 = var12.bind(var14)(var11);
                    var5['children'] = var11;
                    var5 = var7.bind(var1)(var6, var5);
                    var6 = new Array(2);
                    var6[0] = var5;
                    var5 = _closure2_slot2;
                    var5 = var5.length;
                    var7 = var5 > var9;
                    var5 = null;
                    if(!var7) { _fun0011_ip = 26; continue _fun0011 }
case 81:
                    var7 = _closure2_slot4;
                    var7 = var7.length;
                    var7 = var7 > var9;
                    var5 = null;
                    if(!var7) { _fun0011_ip = 26; continue _fun0011 }
case 82:
                    var9 = _closure1_slot11;
                    var8 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var7 = 17;
                    var7 = var14[var7];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.View;
                    var7 = {};
                    var11 = _closure2_slot14;
                    var7['style'] = var11;
                    var12 = _closure1_slot11;
                    var11 = _closure1_slot0;
                    var10 = 28;
                    var10 = var14[var10];
                    var10 = var11.bind(var1)(var10);
                    var11 = var10.ChevronSmallDownIcon;
                    var10 = {};
                    var14 = 'interactive-normal';
                    var10['color'] = var14;
                    var13 = _closure2_slot8;
                    var13 = var13.contextMenuIcon;
                    var10['style'] = var13;
                    var10 = var12.bind(var1)(var11, var10);
                    var7['children'] = var10;
                    var5 = var9.bind(var1)(var8, var7);
case 26:
                    var6[1] = var5;
                    var5 = 'children';
                    var2[var5] = var6;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var15['children'] = var18;
            var16 = var17.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var18 = _closure1_slot11;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 29;
            var16 = var19[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.PressableOpacity;
            var16 = {};
            var19 = _closure1_slot14;
            var19 = var19.APPS;
            var19 = var21 === var19;
            if(!var19) { _fun0005_ip = 83; continue _fun0005 }
case 84:
            var19 = var20;
case 83:
            var16['disabled'] = var19;
            var19 = function onPress() {
                var3 = _closure2_slot7;
                var2 = _closure2_slot15;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var16['onPress'] = var19;
            var19 = 'button';
            var16['accessibilityRole'] = var19;
            var21 = _closure1_slot11;
            var25 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 26;
            var19 = var22[var19];
            var19 = var25.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            var23 = var22[var26];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var26];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22./qG8v7;
            var22 = var23.bind(var24)(var22);
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var5['children'] = var15;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot11;
            var7 = _closure1_slot6;
            var6 = {};
            var15 = var14.scrollView;
            var6['style'] = var15;
            var14 = var14.scrollViewContentContainer;
            var6['contentContainerStyle'] = var14;
            var6['horizontal'] = var13;
            var6['showsHorizontalScrollIndicator'] = var12;
            if(!var11) { _fun0005_ip = 85; continue _fun0005 }
case 86:
            var12 = [1, 2, 3, 4, 5];
            var11 = var12.map;
            var10 = function(arg1, arg2) {
                var5 = _closure1_slot11;
                var4 = _closure1_slot16;
                var3 = undefined;
                var2 = {};
                var1 = arg2;
                var1 = var5.bind(var3)(var4, var2, var1);
                return var1;
            };
            var9 = var11.bind(var12)(var10);
case 85:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 49:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['SectionItemType'] = var2;
    return var1;
})();