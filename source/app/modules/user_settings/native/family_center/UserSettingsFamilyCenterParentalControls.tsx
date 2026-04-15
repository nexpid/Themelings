// app/modules/user_settings/native/family_center/UserSettingsFamilyCenterParentalControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FamilyCenterSubPages;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flex': 1};
    var4['container'] = var9;
    var9 = {};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var4['segmentedControlContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['paddingBottom'] = var10;
    var4['content'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/family_center/UserSettingsFamilyCenterParentalControls.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FamilyCenterParentalControlsSettings() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot11;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = var5.useStackNavigation;
            var14 = var1.bind(var5)();
            var _closure2_slot0 = var14;
            var6 = _closure1_slot1;
            var7 = 9;
            var1 = var3[var7];
            var5 = var6.bind(var4)(var1);
            var1 = 10;
            var1 = var3[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.FAMILY_CENTER;
            var1 = var5.bind(var4)(var1);
            var6 = var1.analyticsLocations;
            var5 = _closure1_slot4;
            var1 = var5.useState;
            var19 = 0;
            var8 = var1.bind(var5)(var19);
            var5 = _closure1_slot3;
            var1 = 2;
            var5 = var5.bind(var4)(var8, var1);
            var17 = var5[var19];
            var1 = 1;
            var1 = var5[var1];
            var _closure2_slot1 = var1;
            var1 = 11;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useSettingNavigationRoute;
            var1 = var1.bind(var2)();
            var5 = var1.params;
            var2 = null;
            var8 = var2 == var5;
            var3 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5.selectedSubPage;
case 2:
            if(!(var2 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot8;
            var3 = var5.CONTENT_AND_SOCIAL;
case 4:
            var _closure2_slot2 = var3;
            var5 = var1.params;
            var8 = var2 == var5;
            var1 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var5.autoOpenCreate;
case 6:
            var15 = true;
            var5 = var15 === var1;
            var _closure2_slot3 = var5;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 12;
            var1 = var10[var1];
            var13 = var9.bind(var4)(var1);
            var8 = var13.useIsFamilyCenterV3Enabled;
            var1 = {};
            var18 = 'FamilyCenterParentalControlsSettings';
            var1['location'] = var18;
            var1 = var8.bind(var13)(var1);
            var _closure2_slot4 = var1;
            var8 = 13;
            var8 = var10[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.useSelectedTeenUser;
            var8 = var8.bind(var9)();
            var9 = var2 == var8;
            var2 = undefined;
            if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var8.id;
case 8:
            var _closure2_slot5 = var2;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 14;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var13 = var8.bind(var4)();
            var _closure2_slot6 = var13;
            var10 = _closure1_slot4;
            var18 = var10.useCallback;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var8 = new Array(0);
            var8 = var18.bind(var10)(var9, var8);
            var18 = var10.useRef;
            var9 = false;
            var9 = var18.bind(var10)(var9);
            var _closure2_slot7 = var9;
            var18 = var10.useEffect;
            var9 = new Array(3);
            var9[0] = var5;
            var9[1] = var2;
            var9[2] = var14;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = _closure2_slot5;
                    var2 = null;
                    var1 = var2 != var3;
case 10:
                    if(!var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = _closure2_slot7;
                    var2 = var2.current;
                    var1 = !var2;
case 12:
                    if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var2 = _closure2_slot7;
                    var1 = true;
                    var2['current'] = var1;
                    var4 = _closure2_slot0;
                    var2 = var4.setParams;
                    var1 = {};
                    var3 = false;
                    var1['autoOpenCreate'] = var3;
                    var1 = var2.bind(var4)(var1);
                    var3 = var4.navigate;
                    var1 = _closure1_slot7;
                    var2 = var1.FAMILY_CENTER_SCHEDULE_DOWNTIME;
                    var1 = {};
                    var5 = _closure2_slot5;
                    var1['teenId'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var18.bind(var10)(var5, var9);
            var9 = var10.useLayoutEffect;
            var5 = new Array(5);
            var5[0] = var14;
            var5[1] = var3;
            var5[2] = var1;
            var5[3] = var2;
            var5[4] = var13;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 11:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot8;
                    var1 = var1.SCREEN_TIME_CONTROLS;
                    if(!(var2 === var1)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 18; continue _fun0003 }
case 16:
                    var3 = _closure2_slot0;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = undefined;
                    var1['title'] = var4;
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0003_ip = 19; continue _fun0003;
case 18:
                    var3 = _closure2_slot0;
                    var2 = var3.setOptions;
                    var1 = {};
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 15;
                    var7 = var10[var4];
                    var4 = undefined;
                    var7 = var8.bind(var4)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var9 = _closure1_slot1;
                    var6 = 16;
                    var6 = var10[var6];
                    var6 = var9.bind(var4)(var6);
                    var6 = var6["1Op+NP"];
                    var6 = var7.bind(var8)(var6);
                    var1['title'] = var6;
                    var5 = _closure2_slot6;
                    if(var5) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var4 = function(arg1) {
                        var4 = _closure1_slot9;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 17;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderTextButton;
                        var1 = {};
                        var10 = arg1;
                        var11 = var1;
                        var5 = copyDataProperties(var11, var10);
                        var6 = function onPress() {
                            var4 = _closure2_slot0;
                            var3 = var4.navigate;
                            var1 = _closure1_slot7;
                            var2 = var1.FAMILY_CENTER_SCHEDULE_DOWNTIME;
                            var1 = {};
                            var5 = _closure2_slot5;
                            var1['teenId'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var5 = 'onPress';
                        var1[4] = var6;
                        var5 = 15;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.OYkgVk;
                        var6 = var6.bind(var7)(var5);
                        var5 = 'label';
                        var1[4] = var6;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
case 20:
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var2, var5);
            if(!var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var2 = _closure1_slot8;
            var2 = var2.SCREEN_TIME_CONTROLS;
            var1 = var3 === var2;
case 22:
            var9 = {};
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var18 = 15;
            var3 = var2[var18];
            var3 = var5.bind(var4)(var3);
            var14 = var3.intl;
            var10 = var14.string;
            var3 = var2[var18];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3["+o1pDZ"];
            var3 = var10.bind(var14)(var3);
            var9['label'] = var3;
            var10 = _closure1_slot8;
            var3 = var10.CONTENT_AND_SOCIAL;
            var9['id'] = var3;
            var3 = _closure1_slot9;
            var14 = _closure1_slot1;
            var20 = 18;
            var20 = var2[var20];
            var21 = var14.bind(var4)(var20);
            var20 = {};
            var20 = var3.bind(var4)(var21, var20);
            var9['page'] = var20;
            var21 = new Array(2);
            var21[0] = var9;
            var9 = {};
            var20 = var2[var18];
            var20 = var5.bind(var4)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var18 = var2[var18];
            var18 = var5.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.OAuOHD;
            var18 = var20.bind(var22)(var18);
            var9['label'] = var18;
            var10 = var10.DATA_AND_PRIVACY;
            var9['id'] = var10;
            var10 = 19;
            var10 = var2[var10];
            var14 = var14.bind(var4)(var10);
            var10 = {};
            var10 = var3.bind(var4)(var14, var10);
            var9['page'] = var10;
            var21[1] = var9;
            var _closure2_slot8 = var21;
            var9 = 20;
            var9 = var2[var9];
            var14 = var5.bind(var4)(var9);
            var10 = var14.useSegmentedControlState;
            var9 = {};
            var9['items'] = var21;
            var18 = function onPageChange(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.selectTab;
                var5 = _closure2_slot8;
                var2 = arg1;
                var2 = var5[var2];
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9['onPageChange'] = var18;
            var9['pageWidth'] = var17;
            var17 = global;
            var18 = var17.Math;
            var17 = var18.max;
            var20 = var21.findIndex;
            var16 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot2;
                var1 = var2 === var1;
                return var1;
            };
            var16 = var20.bind(var21)(var16);
            var16 = var17.bind(var18)(var16, var19);
            var9['defaultIndex'] = var16;
            var21 = var10.bind(var14)(var9);
            var2 = var2[var7];
            var2 = var5.bind(var4)(var2);
            var2 = var2.AnalyticsLocationProvider;
            var5 = {};
            var5['value'] = var6;
            if(var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = _closure1_slot10;
            var6 = _closure1_slot5;
            var1 = {};
            var9 = var12.container;
            var1['style'] = var9;
            var1['onLayout'] = var8;
            var10 = _closure1_slot9;
            var8 = {};
            var9 = var12.segmentedControlContainer;
            var8['style'] = var9;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 24;
            var9 = var22[var9];
            var9 = var20.bind(var4)(var9);
            var14 = var9.SegmentedControl;
            var9 = {};
            var9['state'] = var21;
            var9 = var10.bind(var4)(var14, var9);
            var8['children'] = var9;
            var9 = var10.bind(var4)(var6, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var14 = var12.container;
            var9['style'] = var14;
            var16 = _closure1_slot6;
            var14 = {};
            var17 = 22;
            var17 = var22[var17];
            var17 = var20.bind(var4)(var17);
            var18 = var17.SafeAreaPaddingView;
            var17 = {};
            var17['bottom'] = var15;
            var19 = var12.content;
            var17['style'] = var19;
            var19 = 25;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.SegmentedControlPages;
            var19 = {};
            var19['state'] = var21;
            var19 = var10.bind(var4)(var20, var19);
            var17['children'] = var19;
            var17 = var10.bind(var4)(var18, var17);
            var14['children'] = var17;
            var14 = var10.bind(var4)(var16, var14);
            var9['children'] = var14;
            var9 = var10.bind(var4)(var6, var9);
            var8[1] = var9;
            var1['children'] = var8;
            var1 = var7.bind(var4)(var6, var1);
            var5['children'] = var1;
            var1 = var5;
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var8 = _closure1_slot9;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var12.container;
            var6['style'] = var9;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 22;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.SafeAreaPaddingView;
            var9 = {};
            var9['bottom'] = var15;
            var12 = var12.content;
            var9['style'] = var12;
            var12 = _closure1_slot1;
            var11 = 23;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['readOnly'] = var13;
            var11 = var8.bind(var4)(var12, var11);
            var9['children'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5['children'] = var6;
            var1 = var5;
case 26:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();