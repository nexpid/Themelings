// app/modules/activities/panel/native/ActivityPanelHeader.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var11 = var4.StyleSheet;
    var _closure1_slot6 = var11;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT;
    var _closure1_slot8 = var8;
    var8 = var4.LANDSCAPE_IFRAME_HORIZONTAL_MARGIN;
    var _closure1_slot9 = var8;
    var4 = var4.ActivityPanelModes;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var15 = var11.absoluteFillObject;
    var16 = var10;
    var11 = copyDataProperties(var16, var15);
    var13 = 'space-between';
    var11 = 'justifyContent';
    var10[var11] = var13;
    var13 = 'center';
    var11 = 'alignItems';
    var10[var11] = var13;
    var13 = 'row';
    var11 = 'flexDirection';
    var10[var11] = var13;
    var4['panelHeader'] = var10;
    var10 = {};
    var11 = 'column-reverse';
    var10['flexDirection'] = var11;
    var4['panelLandscape'] = var10;
    var10 = {'position': 'absolute', 'top': 0};
    var4['headerContainer'] = var10;
    var10 = {'backgroundColor': null, 'borderRadius': null, 'width': 32, 'height': 4, 'alignSelf': 'center', 'marginTop': 4, 'opacity': 0.3};
    var11 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderRadius'] = var11;
    var4['pullIndicator'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var8 = var7.memo;
    var4 = function ActivityPanelHeaderContentInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.landscape;
            var _closure2_slot0 = var7;
            var5 = var2.setMode;
            var _closure2_slot1 = var5;
            var17 = var2.pipState;
            var16 = var2.wrapperOffset;
            var12 = undefined;
            var _closure2_slot5 = var12;
            var _closure2_slot6 = var12;
            var _closure2_slot7 = var12;
            var _closure2_slot8 = var12;
            var3 = _closure1_slot14;
            var6 = var3.bind(var12)();
            var _closure2_slot2 = var6;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 9;
            var3 = var8[var3];
            var3 = var4.bind(var12)(var3);
            var9 = var3.bind(var12)();
            var _closure2_slot3 = var9;
            var4 = _closure1_slot0;
            var3 = 10;
            var3 = var8[var3];
            var11 = var4.bind(var12)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var3;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getSelfEmbeddedActivityForLocation;
                var1 = var3.getConnectedActivityLocation;
                var1 = var1.bind(var3)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = new Array(0);
            var11 = var10.bind(var11)(var8, var4, var3);
            var _closure2_slot4 = var11;
            var14 = null;
            var3 = var14 == var11;
            var10 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var11.applicationId;
case 2:
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var4 = 11;
            var4 = var19[var4];
            var8 = var3.bind(var12)(var4);
            var4 = new Array(1);
            var4[0] = var10;
            var10 = var8.bind(var12)(var4);
            var8 = _closure1_slot3;
            var4 = 1;
            var8 = var8.bind(var12)(var10, var4);
            var4 = 0;
            var13 = var8[var4];
            _closure2_slot5 = var13;
            var4 = _closure1_slot4;
            var15 = var4.useMemo;
            var10 = new Array(1);
            var10[0] = var7;
            var8 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var3 = 0;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.radii;
                    var3 = var1.lg;
case 4:
                    var1 = _closure1_slot6;
                    var2 = var1.absoluteFill;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var2['borderTopStartRadius'] = var3;
                    var2['borderTopEndRadius'] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var8 = var15.bind(var4)(var8, var10);
            _closure2_slot6 = var8;
            var15 = var4.useMemo;
            var10 = new Array(4);
            var10[0] = var7;
            var10[1] = var9;
            var9 = var6.panelHeader;
            var10[2] = var9;
            var9 = var6.panelLandscape;
            var10[3] = var9;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var6 = 24;
                    var3 = var6;
                    if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = _closure2_slot0;
                    var2 = 0;
                    if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = _closure2_slot3;
                    var2 = var1.top;
case 8:
                    var1 = 8;
                    var3 = var1 + var2;
case 6:
                    var1 = _closure2_slot2;
                    var2 = var1.panelHeader;
                    var1 = new Array(3);
                    var1[0] = var2;
                    var5 = _closure2_slot0;
                    var2 = undefined;
                    if(!var5) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = _closure2_slot2;
                    var2 = var5.panelLandscape;
case 10:
                    var1[1] = var2;
                    var2 = {};
                    var2['paddingTop'] = var3;
                    var7 = _closure2_slot0;
                    var5 = 8;
                    var3 = var5;
                    if(!var7) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = var6;
case 12:
                    var2['paddingBottom'] = var3;
                    var7 = _closure2_slot0;
                    var3 = 16;
                    var6 = var3;
                    if(var7) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var7 = _closure2_slot3;
                    var7 = var7.left;
                    var6 = var5 + var7;
case 14:
                    var2['paddingLeft'] = var6;
                    var6 = _closure2_slot0;
                    if(var6) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var4 = _closure2_slot3;
                    var4 = var4.right;
                    var3 = var5 + var4;
case 16:
                    var2['paddingRight'] = var3;
                    var1[2] = var2;
                    return var1;
                }
            };
            var9 = var15.bind(var4)(var9, var10);
            _closure2_slot7 = var9;
            var15 = var4.useCallback;
            var10 = function A() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.runOnJS;
                var3 = _closure2_slot1;
                var3 = var4.bind(var5)(var3);
                var2 = _closure1_slot10;
                var2 = var2.PIP;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var20 = {};
            var18 = _closure1_slot0;
            var21 = 12;
            var21 = var19[var21];
            var21 = var18.bind(var12)(var21);
            var21 = var21.runOnJS;
            var20['runOnJS'] = var21;
            var20['setMode'] = var5;
            var21 = _closure1_slot10;
            var20['ActivityPanelModes'] = var21;
            var10['__closure'] = var20;
            var20 = 14504167937928.0;
            var10['__workletHash'] = var20;
            var2 = _closure1_slot15;
            var10['__initData'] = var2;
            var2 = new Array(1);
            var2[0] = var5;
            var15 = var15.bind(var4)(var10, var2);
            var10 = 13;
            var2 = var19[var10];
            var3 = var3.bind(var12)(var2);
            var2 = {};
            var10 = var19[var10];
            var10 = var18.bind(var12)(var10);
            var10 = var10.MorphablePanelModes;
            var10 = var10.PANEL;
            var2['mode'] = var10;
            var10 = true;
            var2['panGestureEnabled'] = var10;
            var2['pipState'] = var17;
            var2['swipeRequiresPop'] = var10;
            var2['wrapperOffset'] = var16;
            var2['onPanMinimizeGestureEnd'] = var15;
            var2['disableHorizontalSafeAreas'] = var10;
            var10 = var3.bind(var12)(var2);
            _closure2_slot8 = var10;
            var3 = var4.useMemo;
            var2 = var14 == var13;
            var15 = undefined;
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var15 = var13.id;
case 18:
            var2 = new Array(9);
            var2[0] = var15;
            var14 = var14 == var13;
            var12 = undefined;
            if(var14) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var12 = var13.name;
case 20:
            var2[1] = var12;
            var2[2] = var11;
            var2[3] = var10;
            var2[4] = var9;
            var2[5] = var8;
            var2[6] = var7;
            var6 = var6.pullIndicator;
            var2[7] = var6;
            var2[8] = var5;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot4;
                    var22 = null;
                    var2 = var22 != var1;
                    var1 = null;
                    if(!var2) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var5 = _closure1_slot12;
                    var7 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 14;
                    var2 = var13[var2];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var3 = var2.ThemeContextProvider;
                    var2 = {};
                    var6 = _closure1_slot11;
                    var6 = var6.DARK;
                    var2['theme'] = var6;
                    var6 = 15;
                    var6 = var13[var6];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.GestureDetector;
                    var6 = {};
                    var8 = _closure2_slot8;
                    var6['gesture'] = var8;
                    var10 = _closure1_slot13;
                    var9 = _closure1_slot5;
                    var8 = {};
                    var11 = _closure2_slot6;
                    var8['style'] = var11;
                    var12 = _closure1_slot1;
                    var11 = 16;
                    var11 = var13[var11];
                    var12 = var12.bind(var4)(var11);
                    var11 = {};
                    var12 = var5.bind(var4)(var12, var11);
                    var11 = new Array(3);
                    var11[0] = var12;
                    var12 = _closure2_slot0;
                    var12 = !var12;
                    if(!var12) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var15 = _closure1_slot12;
                    var14 = _closure1_slot5;
                    var13 = {};
                    var17 = _closure2_slot2;
                    var17 = var17.pullIndicator;
                    var13['style'] = var17;
                    var12 = var15.bind(var4)(var14, var13);
case 24:
                    var11[1] = var12;
                    var14 = _closure1_slot13;
                    var13 = _closure1_slot5;
                    var12 = {};
                    var15 = _closure2_slot7;
                    var12['style'] = var15;
                    var18 = _closure1_slot12;
                    var17 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var15 = 17;
                    var15 = var20[var15];
                    var17 = var17.bind(var4)(var15);
                    var15 = {};
                    var21 = _closure2_slot0;
                    var20 = undefined;
                    if(var21) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var21 = _closure2_slot5;
                    var21 = var22 == var21;
                    var20 = undefined;
                    if(var21) { _fun0004_ip = 26; continue _fun0004 }
case 28:
                    var21 = _closure2_slot5;
                    var20 = var21.name;
case 26:
                    var15['activityName'] = var20;
                    var20 = _closure2_slot1;
                    var15['setMode'] = var20;
                    var17 = var18.bind(var4)(var17, var15);
                    var15 = new Array(3);
                    var15[0] = var17;
                    var20 = _closure1_slot12;
                    var18 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var17 = 18;
                    var17 = var21[var17];
                    var18 = var18.bind(var4)(var17);
                    var17 = {};
                    var21 = _closure2_slot5;
                    var22 = var22 == var21;
                    var21 = undefined;
                    if(var22) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var22 = _closure2_slot5;
                    var21 = var22.id;
case 29:
                    var17['applicationId'] = var21;
                    var17 = var20.bind(var4)(var18, var17);
                    var15[1] = var17;
                    var18 = _closure1_slot12;
                    var17 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var16 = 19;
                    var16 = var20[var16];
                    var17 = var17.bind(var4)(var16);
                    var16 = {};
                    var20 = _closure2_slot4;
                    var16['selfEmbeddedActivity'] = var20;
                    var19 = _closure2_slot1;
                    var16['setMode'] = var19;
                    var16 = var18.bind(var4)(var17, var16);
                    var15[2] = var16;
                    var12['children'] = var15;
                    var12 = var14.bind(var4)(var13, var12);
                    var11[2] = var12;
                    var8['children'] = var11;
                    var8 = var10.bind(var4)(var9, var8);
                    var6['children'] = var8;
                    var6 = var5.bind(var4)(var7, var6);
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 22:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.memo;
    var2 = function() {
        var2 = _closure1_slot14;
        var4 = undefined;
        var2 = var2.bind(var4)();
        var _closure2_slot0 = var2;
        var6 = _closure1_slot4;
        var7 = var6.useContext;
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var3 = 20;
        var3 = var9[var3];
        var3 = var8.bind(var4)(var3);
        var3 = var7.bind(var6)(var3);
        var10 = var3.wrapperDimensions;
        var _closure2_slot1 = var10;
        var9 = var3.setMode;
        var8 = var3.wrapperOffset;
        var7 = var3.pipState;
        var3 = var6.useMemo;
        var11 = var2.headerContainer;
        var2 = new Array(2);
        var2[0] = var11;
        var11 = var10.isWindowLandscape;
        var2[1] = var11;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot1;
                var3 = var2.isWindowLandscape;
                if(var3) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                var5 = _closure1_slot8;
                var6 = 'auto';
                var4 = 0;
                var3 = null;
                _fun0005_ip = 33; continue _fun0005;
case 31:
                var6 = _closure1_slot9;
                var5 = 'auto';
                var4 = null;
                var3 = 0;
case 33:
                var1 = _closure2_slot0;
                var2 = var1.headerContainer;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var2['width'] = var6;
                var2['height'] = var5;
                var5 = 0;
                var2['right'] = var5;
                var2['left'] = var4;
                var2['bottom'] = var3;
                var1[1] = var2;
                return var1;
            }
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot12;
        var2 = _closure1_slot5;
        var1 = {};
        var1['style'] = var6;
        var6 = _closure1_slot16;
        var5 = {};
        var10 = var10.isWindowLandscape;
        var5['landscape'] = var10;
        var5['setMode'] = var9;
        var5['wrapperOffset'] = var8;
        var5['pipState'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();