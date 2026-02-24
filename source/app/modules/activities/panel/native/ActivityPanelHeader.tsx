// app/modules/activities/panel/native/ActivityPanelHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var10;
    var6 = function useBaseActivityPanelHeaderContent(arg1) {
        var1 = arg1;
        var15 = var1.landscape;
        var _closure2_slot0 = var15;
        var14 = var1.setMode;
        var _closure2_slot1 = var14;
        var10 = var1.wrapperOffset;
        var11 = var1.pipState;
        var2 = _closure1_slot14;
        var7 = undefined;
        var2 = var2.bind(var7)();
        var _closure2_slot2 = var2;
        var6 = _closure1_slot1;
        var13 = _closure1_slot2;
        var3 = 9;
        var3 = var13[var3];
        var3 = var6.bind(var7)(var3);
        var3 = var3.bind(var7)();
        var _closure2_slot3 = var3;
        var12 = _closure1_slot4;
        var9 = var12.useMemo;
        var8 = new Array(1);
        var8[0] = var15;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var3 = 0;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var1 = var1.radii;
                var3 = var1.lg;
case 2:
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
        var4 = var9.bind(var12)(var4, var8);
        var12 = _closure1_slot4;
        var9 = var12.useMemo;
        var8 = new Array(4);
        var8[0] = var15;
        var8[1] = var3;
        var3 = var2.panelHeader;
        var8[2] = var3;
        var3 = var2.panelLandscape;
        var8[3] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot0;
                var6 = 24;
                var3 = var6;
                if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var1 = _closure2_slot0;
                var2 = 0;
                if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = _closure2_slot3;
                var2 = var1.top;
case 6:
                var1 = 8;
                var3 = var1 + var2;
case 4:
                var1 = _closure2_slot2;
                var2 = var1.panelHeader;
                var1 = new Array(3);
                var1[0] = var2;
                var5 = _closure2_slot0;
                var2 = undefined;
                if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var5 = _closure2_slot2;
                var2 = var5.panelLandscape;
case 8:
                var1[1] = var2;
                var2 = {};
                var2['paddingTop'] = var3;
                var7 = _closure2_slot0;
                var5 = 8;
                var3 = var5;
                if(!var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var3 = var6;
case 10:
                var2['paddingBottom'] = var3;
                var7 = _closure2_slot0;
                var3 = 16;
                var6 = var3;
                if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var7 = _closure2_slot3;
                var7 = var7.left;
                var6 = var5 + var7;
case 12:
                var2['paddingLeft'] = var6;
                var6 = _closure2_slot0;
                if(var6) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var4 = _closure2_slot3;
                var4 = var4.right;
                var3 = var5 + var4;
case 14:
                var2['paddingRight'] = var3;
                var1[2] = var2;
                return var1;
            }
        };
        var3 = var9.bind(var12)(var3, var8);
        var9 = _closure1_slot4;
        var8 = var9.useCallback;
        var5 = function c() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
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
        var15 = {};
        var12 = _closure1_slot0;
        var16 = 10;
        var16 = var13[var16];
        var16 = var12.bind(var7)(var16);
        var16 = var16.runOnJS;
        var15['runOnJS'] = var16;
        var15['setMode'] = var14;
        var16 = _closure1_slot10;
        var15['ActivityPanelModes'] = var16;
        var5['__closure'] = var15;
        var15 = 14504167937928.0;
        var5['__workletHash'] = var15;
        var1 = _closure1_slot15;
        var5['__initData'] = var1;
        var1 = new Array(1);
        var1[0] = var14;
        var9 = var8.bind(var9)(var5, var1);
        var1 = {};
        var8 = 11;
        var5 = var13[var8];
        var6 = var6.bind(var7)(var5);
        var5 = {};
        var8 = var13[var8];
        var8 = var12.bind(var7)(var8);
        var8 = var8.MorphablePanelModes;
        var8 = var8.PANEL;
        var5['mode'] = var8;
        var8 = true;
        var5['panGestureEnabled'] = var8;
        var5['pipState'] = var11;
        var5['swipeRequiresPop'] = var8;
        var5['wrapperOffset'] = var10;
        var5['onPanMinimizeGestureEnd'] = var9;
        var5['disableHorizontalSafeAreas'] = var8;
        var5 = var6.bind(var7)(var5);
        var1['gesture'] = var5;
        var1['headerWrapperStyles'] = var4;
        var1['headerStyles'] = var3;
        var1['styles'] = var2;
        return var1;
    };
    var _closure1_slot18 = var6;
    var5 = function BaseActivityPanelContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var16 = var1.children;
            var2 = var1.hasConnectedActivity;
            var9 = var1.gesture;
            var12 = var1.headerWrapperStyles;
            var17 = var1.headerStyles;
            var14 = var1.landscape;
            var1 = _closure1_slot14;
            var5 = undefined;
            var20 = var1.bind(var5)();
            var1 = null;
            if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = _closure1_slot12;
            var7 = _closure1_slot0;
            var19 = _closure1_slot2;
            var2 = 12;
            var2 = var19[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var6 = _closure1_slot11;
            var6 = var6.DARK;
            var2['theme'] = var6;
            var8 = _closure1_slot12;
            var6 = 13;
            var6 = var19[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var9;
            var11 = _closure1_slot13;
            var10 = _closure1_slot5;
            var9 = {};
            var9['style'] = var12;
            var18 = _closure1_slot12;
            var15 = _closure1_slot1;
            var12 = 14;
            var12 = var19[var12];
            var15 = var15.bind(var5)(var12);
            var12 = {};
            var15 = var18.bind(var5)(var15, var12);
            var12 = new Array(3);
            var12[0] = var15;
            var14 = !var14;
            if(!var14) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var19 = _closure1_slot12;
            var18 = _closure1_slot5;
            var15 = {};
            var20 = var20.pullIndicator;
            var15['style'] = var20;
            var14 = var19.bind(var5)(var18, var15);
case 18:
            var12[1] = var14;
            var15 = _closure1_slot12;
            var14 = _closure1_slot5;
            var13 = {};
            var13['style'] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var2 = function useBaseActivityPanelHeader(arg1) {
        var1 = arg1;
        var3 = var1.context;
        var2 = _closure1_slot14;
        var1 = undefined;
        var7 = var2.bind(var1)();
        var _closure2_slot0 = var7;
        var2 = _closure1_slot4;
        var1 = var2.useContext;
        var1 = var1.bind(var2)(var3);
        var5 = var1.wrapperDimensions;
        var _closure2_slot1 = var5;
        var4 = var1.setMode;
        var3 = var1.wrapperOffset;
        var2 = var1.pipState;
        var1 = {};
        var9 = _closure1_slot4;
        var8 = var9.useMemo;
        var10 = var7.headerContainer;
        var7 = new Array(2);
        var7[0] = var10;
        var10 = var5.isWindowLandscape;
        var7[1] = var10;
        var6 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot1;
                var3 = var2.isWindowLandscape;
                if(var3) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var5 = _closure1_slot8;
                var6 = 'auto';
                var4 = 0;
                var3 = null;
                _fun0004_ip = 22; continue _fun0004;
case 20:
                var6 = _closure1_slot9;
                var5 = 'auto';
                var4 = null;
                var3 = 0;
case 22:
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
        var6 = var8.bind(var9)(var6, var7);
        var1['headerStyles'] = var6;
        var1['wrapperDimensions'] = var5;
        var1['setMode'] = var4;
        var1['wrapperOffset'] = var3;
        var1['pipState'] = var2;
        return var1;
    };
    var _closure1_slot20 = var2;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var10[var1];
    var1 = undefined;
    var4 = var16.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var10[var4];
    var4 = metroImportAll;
    var11 = var4.bind(var1)(var8);
    var _closure1_slot4 = var11;
    var4 = 2;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var15 = var4.StyleSheet;
    var _closure1_slot6 = var15;
    var4 = 3;
    var4 = var10[var4];
    var4 = var16.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var8 = var4.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT;
    var _closure1_slot8 = var8;
    var8 = var4.LANDSCAPE_IFRAME_HORIZONTAL_MARGIN;
    var _closure1_slot9 = var8;
    var4 = var4.ActivityPanelModes;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var10[var4];
    var4 = var9.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 7;
    var8 = var10[var4];
    var13 = var9.bind(var1)(var8);
    var12 = var13.createStyles;
    var8 = {};
    var14 = {};
    var20 = var15.absoluteFillObject;
    var21 = var14;
    var15 = copyDataProperties(var21, var20);
    var17 = 'space-between';
    var15 = 'justifyContent';
    var14[var15] = var17;
    var17 = 'center';
    var15 = 'alignItems';
    var14[var15] = var17;
    var17 = 'row';
    var15 = 'flexDirection';
    var14[var15] = var17;
    var15 = 8;
    var17 = 'gap';
    var14[var17] = var15;
    var8['panelHeader'] = var14;
    var17 = {};
    var14 = 'column-reverse';
    var17['flexDirection'] = var14;
    var8['panelLandscape'] = var17;
    var17 = {'position': 'absolute', 'top': 0};
    var8['headerContainer'] = var17;
    var17 = {'backgroundColor': null, 'borderRadius': null, 'width': 32, 'height': 4, 'alignSelf': 'center', 'marginTop': 4, 'opacity': 0.3};
    var18 = var10[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var17['backgroundColor'] = var18;
    var18 = var10[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var17['borderRadius'] = var18;
    var8['pullIndicator'] = var17;
    var8 = var12.bind(var13)(var8);
    var _closure1_slot14 = var8;
    var8 = {};
    var12 = 'function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}';
    var8['code'] = var12;
    var _closure1_slot15 = var8;
    var4 = var10[var4];
    var12 = var9.bind(var1)(var4);
    var8 = var12.createStyles;
    var4 = {};
    var13 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': null, 'flexShrink': 1};
    var15 = var10[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var13['gap'] = var15;
    var4['buttonContainer'] = var13;
    var13 = {};
    var13['flexDirection'] = var14;
    var4['buttonContainerLandscape'] = var13;
    var4 = var8.bind(var12)(var4);
    var _closure1_slot16 = var4;
    var12 = var11.memo;
    var8 = function ActivityPanelHeaderContentInner(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var11 = var2.landscape;
            var _closure2_slot0 = var11;
            var10 = var2.setMode;
            var _closure2_slot1 = var10;
            var5 = var2.pipState;
            var6 = var2.wrapperOffset;
            var7 = undefined;
            var _closure2_slot6 = var7;
            var _closure2_slot7 = var7;
            var _closure2_slot8 = var7;
            var4 = _closure1_slot18;
            var3 = {};
            var3['landscape'] = var11;
            var3['setMode'] = var10;
            var3['wrapperOffset'] = var6;
            var3['pipState'] = var5;
            var3 = var4.bind(var7)(var3);
            var14 = var3.gesture;
            var _closure2_slot2 = var14;
            var13 = var3.headerWrapperStyles;
            var _closure2_slot3 = var13;
            var12 = var3.headerStyles;
            var _closure2_slot4 = var12;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var3 = var5[var3];
            var8 = var4.bind(var7)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var3;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getSelfEmbeddedActivityForLocation;
                var1 = var3.getConnectedActivityLocation;
                var1 = var1.bind(var3)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = new Array(0);
            var15 = var6.bind(var8)(var5, var4, var3);
            var _closure2_slot5 = var15;
            var9 = null;
            var3 = var9 == var15;
            var6 = undefined;
            if(var3) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var6 = var15.applicationId;
case 23:
            _closure2_slot6 = var6;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 16;
            var3 = var5[var3];
            var4 = var4.bind(var7)(var3);
            var3 = new Array(1);
            var3[0] = var6;
            var5 = var4.bind(var7)(var3);
            var4 = _closure1_slot3;
            var3 = 1;
            var4 = var4.bind(var7)(var5, var3);
            var3 = 0;
            var8 = var4[var3];
            _closure2_slot7 = var8;
            var3 = _closure1_slot16;
            var5 = var3.bind(var7)();
            _closure2_slot8 = var5;
            var4 = _closure1_slot4;
            var3 = var4.useMemo;
            var2 = new Array(10);
            var2[0] = var15;
            var2[1] = var14;
            var2[2] = var13;
            var2[3] = var12;
            var2[4] = var11;
            var2[5] = var10;
            var11 = var9 == var8;
            var10 = undefined;
            if(var11) { _fun0005_ip = 25; continue _fun0005 }
case 26:
            var10 = var8.name;
case 25:
            var2[6] = var10;
            var9 = var9 == var8;
            var7 = undefined;
            if(var9) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var7 = var8.id;
case 27:
            var2[7] = var7;
            var2[8] = var6;
            var2[9] = var5;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot19;
                    var2 = {};
                    var1 = _closure2_slot5;
                    var11 = null;
                    var1 = var11 != var1;
                    var2['hasConnectedActivity'] = var1;
                    var1 = _closure2_slot2;
                    var2['gesture'] = var1;
                    var1 = _closure2_slot3;
                    var2['headerWrapperStyles'] = var1;
                    var1 = _closure2_slot4;
                    var2['headerStyles'] = var1;
                    var13 = _closure2_slot0;
                    var2['landscape'] = var13;
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot5;
                    var5 = {};
                    var1 = _closure2_slot8;
                    var1 = var1.buttonContainer;
                    var10 = new Array(2);
                    var10[0] = var1;
                    var1 = undefined;
                    var12 = undefined;
                    if(!var13) { _fun0006_ip = 29; continue _fun0006 }
case 11:
                    var13 = _closure2_slot8;
                    var12 = var13.buttonContainerLandscape;
case 29:
                    var10[1] = var12;
                    var5['style'] = var10;
                    var13 = _closure1_slot12;
                    var12 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var10 = 17;
                    var10 = var14[var10];
                    var12 = var12.bind(var1)(var10);
                    var10 = {};
                    var15 = _closure2_slot0;
                    var14 = undefined;
                    if(var15) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var15 = _closure2_slot7;
                    var15 = var11 == var15;
                    var14 = undefined;
                    if(var15) { _fun0006_ip = 30; continue _fun0006 }
case 32:
                    var15 = _closure2_slot7;
                    var14 = var15.name;
case 30:
                    var10['activityName'] = var14;
                    var14 = _closure2_slot1;
                    var10['setMode'] = var14;
                    var12 = var13.bind(var1)(var12, var10);
                    var10 = new Array(3);
                    var10[0] = var12;
                    var12 = _closure2_slot6;
                    var12 = var11 != var12;
                    if(!var12) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var15 = _closure1_slot12;
                    var14 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var13 = 18;
                    var13 = var16[var13];
                    var14 = var14.bind(var1)(var13);
                    var13 = {};
                    var16 = _closure2_slot6;
                    var13['applicationId'] = var16;
                    var12 = var15.bind(var1)(var14, var13);
case 33:
                    var10[1] = var12;
                    var14 = _closure1_slot12;
                    var13 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var12 = 19;
                    var12 = var15[var12];
                    var13 = var13.bind(var1)(var12);
                    var12 = {};
                    var15 = _closure2_slot7;
                    var16 = var11 == var15;
                    var15 = undefined;
                    if(var16) { _fun0006_ip = 26; continue _fun0006 }
case 35:
                    var16 = _closure2_slot7;
                    var15 = var16.id;
case 26:
                    var12['applicationId'] = var15;
                    var12 = var14.bind(var1)(var13, var12);
                    var10[2] = var12;
                    var5['children'] = var10;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 20;
                    var6 = var10[var6];
                    var7 = var7.bind(var1)(var6);
                    var6 = {};
                    var10 = _closure2_slot5;
                    var11 = var11 != var10;
                    var10 = undefined;
                    if(!var11) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                    var10 = _closure2_slot5;
case 36:
                    var6['selfEmbeddedActivity'] = var10;
                    var9 = _closure2_slot1;
                    var6['setMode'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var8 = var12.bind(var11)(var8);
    var _closure1_slot17 = var8;
    var8 = var11.memo;
    var7 = function() {
        var2 = _closure1_slot20;
        var1 = {};
        var6 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 21;
        var3 = var4[var3];
        var4 = undefined;
        var3 = var6.bind(var4)(var3);
        var1['context'] = var3;
        var1 = var2.bind(var4)(var1);
        var6 = var1.headerStyles;
        var11 = var1.wrapperDimensions;
        var10 = var1.setMode;
        var9 = var1.wrapperOffset;
        var8 = var1.pipState;
        var3 = _closure1_slot12;
        var2 = _closure1_slot5;
        var1 = {};
        var1['style'] = var6;
        var7 = _closure1_slot12;
        var6 = _closure1_slot17;
        var5 = {};
        var11 = var11.isWindowLandscape;
        var5['landscape'] = var11;
        var5['setMode'] = var10;
        var5['wrapperOffset'] = var9;
        var5['pipState'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var7 = var8.bind(var11)(var7);
    var8 = 22;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/activities/panel/native/ActivityPanelHeader.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['useBaseActivityPanelHeaderContent'] = var6;
    var3['BaseActivityPanelContent'] = var5;
    var3['useMinimizeAndQuestButtonContainerStyles'] = var4;
    var3['useBaseActivityPanelHeader'] = var2;
    return var1;
})();