// app/modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function AppLauncherApplicationViewScreenInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.context;
            var14 = var1.application;
            var _closure2_slot0 = var14;
            var12 = var1.lockableScrollableContentOffsetY;
            var19 = var1.initiallyExpanded;
            var11 = var1.installOnDemand;
            var10 = var1.sectionName;
            var9 = var1.onPressBack;
            var8 = var1.onActivityItemSelected;
            var7 = var1.entrypoint;
            var18 = var1.expandBottomSheet;
            var _closure2_slot1 = var18;
            var6 = var1.onCommandExecuted;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var5 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 7;
            var3 = var16[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useRequiredAppLauncherContext;
            var3 = var3.bind(var5)();
            var17 = var3.bottomSheetExpandReasonRef;
            var _closure2_slot2 = var17;
            var3 = var3.chatInputRef;
            var _closure2_slot3 = var3;
            var15 = _closure1_slot1;
            var5 = 8;
            var5 = var16[var5];
            var5 = var15.bind(var4)(var5);
            var20 = var5.bind(var4)();
            var _closure2_slot4 = var20;
            var5 = null;
            if(!(var5 == var19)) { _fun0001_ip = 197; continue _fun0001 }
 166:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 9;
            var5 = var16[var5];
            var15 = var15.bind(var4)(var5);
            var5 = var15.isEmbeddedApp;
            var19 = var5.bind(var15)(var14);
 197:
            _closure2_slot5 = var19;
            var16 = _closure1_slot3;
            var15 = var16.useCallback;
            var5 = new Array(2);
            var5[0] = var14;
            var5[1] = var3;
            var3 = function() {
                var1 = _closure2_slot3;
                var4 = var1.current;
                var3 = var4.openCustomKeyboard;
                var2 = {};
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 10;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var5);
                var5 = var5.KeyboardTypes;
                var5 = var5.APP_LAUNCHER;
                var2['type'] = var5;
                var5 = {};
                var7 = _closure1_slot7;
                var7 = var7.APPLICATION_VIEW;
                var5['initialRouteName'] = var7;
                var6 = _closure2_slot0;
                var5['application'] = var6;
                var2['context'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var15.bind(var16)(var3, var5);
            var16 = _closure1_slot3;
            var15 = var16.useEffect;
            var3 = new Array(4);
            var3[0] = var20;
            var3[1] = var19;
            var3[2] = var18;
            var3[3] = var17;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0002_ip = 14; continue _fun0002 }
 10:
                    var2 = _closure2_slot4;
 14:
                    if(!var2) { _fun0002_ip = 82; continue _fun0002 }
 17:
                    var4 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var3 = var3.AppLauncherBottomSheetExpandReason;
                    var3 = var3.APP_VIEW;
                    var4['current'] = var3;
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 82; continue _fun0002 }
 74:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)();
 82:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var15.bind(var16)(var2, var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 11;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['application'] = var14;
            var1['context'] = var13;
            var1['lockableScrollableContentOffsetY'] = var12;
            var1['installOnDemand'] = var11;
            var1['sectionName'] = var10;
            var1['onPressBack'] = var9;
            var1['onActivityItemSelected'] = var8;
            var1['entrypoint'] = var7;
            var1['onCommandExecuted'] = var6;
            var1['onAauth2Cancel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ActivityIndicator;
    var _closure1_slot4 = var8;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AppLauncherRouteName;
    var _closure1_slot7 = var7;
    var11 = var4.SCREEN_BACKGROUND_COLOR;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BuiltInSectionId;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['backgroundColor'] = var11;
    var9['flex'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherApplicationViewScreen(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = var2.route;
            var3 = var1.params;
            var18 = var3.application;
            var1 = var3.applicationId;
            var4 = var3.onPressBack;
            var _closure2_slot0 = var4;
            var19 = var3.context;
            var _closure2_slot1 = var19;
            var16 = var3.initiallyExpanded;
            var15 = var3.installOnDemand;
            var _closure2_slot2 = var15;
            var14 = var3.sectionName;
            var10 = var3.expandBottomSheet;
            var9 = var3.onCommandExecuted;
            var2 = var2.navigation;
            var _closure2_slot3 = var2;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useRequiredAppLauncherContext;
            var2 = var2.bind(var3)();
            var3 = var2.chatInputRef;
            var _closure2_slot4 = var3;
            var11 = var2.entrypoint;
            var12 = var2.onActivityItemSelected;
            var2 = var2.keyboardCloseReasonRef;
            var _closure2_slot5 = var2;
            var2 = _closure1_slot10;
            var7 = var2.bind(var4)();
            var5 = null;
            var3 = var5 == var18;
            var2 = undefined;
            if(var3) { _fun0003_ip = 185; continue _fun0003 }
 180:
            var2 = var18.id;
 185:
            if(!(var5 != var2)) { _fun0003_ip = 192; continue _fun0003 }
 189:
            var1 = var2;
 192:
            _closure2_slot6 = var1;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 12;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.useGetOrFetchApplication;
            var2 = _closure1_slot8;
            var17 = var2.BUILT_IN;
            var2 = null;
            if(!(var1 !== var17)) { _fun0003_ip = 241; continue _fun0003 }
 238:
            var2 = var1;
 241:
            var2 = var3.bind(var8)(var2);
            var3 = _closure1_slot8;
            var3 = var3.BUILT_IN;
            if(!(var1 !== var3)) { _fun0003_ip = 269; continue _fun0003 }
 260:
            if(!(var5 != var2)) { _fun0003_ip = 267; continue _fun0003 }
 264:
            var18 = var2;
 267:
            _fun0003_ip = 295; continue _fun0003;
 269:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var18 = var2.FAKE_BUILT_IN_APP;
 295:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.useSharedValue;
            var2 = 0;
            var17 = var3.bind(var8)(var2);
            var8 = _closure1_slot3;
            var3 = var8.useEffect;
            var2 = new Array(3);
            var2[0] = var1;
            var2[1] = var19;
            var2[2] = var15;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0004_ip = 33; continue _fun0004 }
 16:
                    var3 = _closure2_slot1;
                    var4 = var3.type;
                    var3 = 'channel';
                    var2 = var3 === var4;
 33:
                    if(!var2) { _fun0004_ip = 40; continue _fun0004 }
 36:
                    var2 = _closure2_slot2;
 40:
                    if(!var2) { _fun0004_ip = 82; continue _fun0004 }
 43:
                    var4 = _closure1_slot6;
                    var3 = var4.queryInstallOnDemandApp;
                    var2 = _closure2_slot6;
                    var1 = _closure2_slot1;
                    var1 = var1.channel;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
 82:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var7.container;
            var1['style'] = var7;
            if(!(var5 == var18)) { _fun0003_ip = 464; continue _fun0003 }
 389:
            var8 = _closure1_slot9;
            var7 = _closure1_slot5;
            var5 = {};
            var20 = {};
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var21 = 14;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.EXPANDED_HEADER_HEIGHT;
            var20['paddingTop'] = var21;
            var5['style'] = var20;
            var22 = _closure1_slot9;
            var21 = _closure1_slot4;
            var20 = {};
            var20 = var22.bind(var4)(var21, var20);
            var5['children'] = var20;
            var5 = var8.bind(var4)(var7, var5);
            _fun0003_ip = 540; continue _fun0003;
 464:
            var8 = _closure1_slot9;
            var7 = _closure1_slot11;
            var6 = {};
            var6['context'] = var19;
            var6['application'] = var18;
            var6['lockableScrollableContentOffsetY'] = var17;
            var6['initiallyExpanded'] = var16;
            var6['installOnDemand'] = var15;
            var6['sectionName'] = var14;
            var13 = function onPressBack() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 23; continue _fun0005 }
 13:
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var3 = var4.bind(var3)();
 23:
                    var4 = _closure2_slot3;
                    var3 = var4.canGoBack;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0005_ip = 112; continue _fun0005 }
 40:
                    var4 = _closure2_slot5;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.AppLauncherKeyboardCloseReason;
                    var3 = var3.BACK;
                    var4['current'] = var3;
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0005_ip = 126; continue _fun0005 }
 100:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
                    _fun0005_ip = 126; continue _fun0005;
 112:
                    var2 = _closure2_slot3;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
 126:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onPressBack'] = var13;
            var6['onActivityItemSelected'] = var12;
            var6['entrypoint'] = var11;
            var6['expandBottomSheet'] = var10;
            var6['onCommandExecuted'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 540:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();