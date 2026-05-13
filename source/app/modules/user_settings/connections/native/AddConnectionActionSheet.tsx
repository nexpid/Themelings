// app/modules/user_settings/connections/native/AddConnectionActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function AddApplicationIdentityTableRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.application;
            var11 = var2.start;
            var9 = var2.end;
            var10 = _closure1_slot1;
            var2 = _closure1_slot2;
            var3 = 19;
            var3 = var2[var3];
            var5 = undefined;
            var3 = var10.bind(var5)(var3);
            var3 = var3.bind(var5)(var1);
            var6 = var3.canStartAuthorization;
            var3 = var3.startAuthorization;
            var _closure2_slot0 = var3;
            var3 = 20;
            var3 = var2[var3];
            var4 = var10.bind(var5)(var3);
            var3 = 21;
            var3 = var2[var3];
            var3 = var10.bind(var5)(var3);
            var3 = var3.ACTION_SHEET;
            var3 = var4.bind(var5)(var3);
            var3 = var3.analyticsLocations;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot7;
            var13 = var3.bind(var5)();
            var10 = var1.getIconSource;
            var3 = _closure1_slot0;
            var15 = 4;
            var4 = var2[var15];
            var14 = var3.bind(var5)(var4);
            var12 = var14.getIconSize;
            var4 = var2[var15];
            var4 = var3.bind(var5)(var4);
            var4 = var4.IconSizes;
            var4 = var4.LARGE;
            var4 = var12.bind(var14)(var4);
            var14 = var10.bind(var1)(var4);
            var4 = _closure1_slot5;
            var10 = 14;
            var2 = var2[var10];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var2['start'] = var11;
            var2['end'] = var9;
            var9 = var1.name;
            var2['label'] = var9;
            var8 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot0;
                var2 = {};
                var4 = _closure2_slot1;
                var2['analyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onPress'] = var8;
            var8 = null;
            var9 = var8 != var14;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var15];
            var9 = var11.bind(var5)(var9);
            var11 = var9.Icon;
            var9 = {};
            var9['source'] = var14;
            var13 = var13.icon;
            var9['style'] = var13;
            var13 = true;
            var9['disableColor'] = var13;
            var8 = var12.bind(var5)(var11, var9);
case 2:
            var2['icon'] = var8;
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var7 = var8.bind(var5)(var7);
            var7 = var7.TableRow;
            var8 = var7.Arrow;
            var7 = {};
            var7 = var9.bind(var5)(var8, var7);
            var2['trailing'] = var7;
            var6 = !var6;
            var2['disabled'] = var6;
            var1 = var1.id;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticsLocations;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.APPLICATION_IDENTITY_CONNECTIONS_SCREEN_APPLICATIONS;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 16;
    var9['paddingHorizontal'] = var10;
    var4['list'] = var9;
    var9 = {};
    var10 = 4;
    var11 = var6[var10];
    var12 = var5.bind(var1)(var11);
    var11 = var12.getIconSize;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.Icon;
    var10 = var10.Sizes;
    var10 = var10.LARGE;
    var10 = var11.bind(var12)(var10);
    var9['borderRadius'] = var10;
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/connections/native/AddConnectionActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddConnectionActionSheet() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot7;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var _closure2_slot0 = var1;
            var1 = 6;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var10 = var1.bottom;
            var7 = _closure1_slot0;
            var1 = 7;
            var1 = var6[var1];
            var11 = var7.bind(var4)(var1);
            var2 = var11.useIsRiotSocialSDKMigrationEnabled;
            var1 = {};
            var12 = 'AddConnectionActionSheet';
            var1['location'] = var12;
            var1 = var2.bind(var11)(var1);
            var _closure2_slot1 = var1;
            var2 = 8;
            var2 = var6[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.usePlatforms;
            var11 = var2.bind(var7)();
            var7 = var11.filter;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var1 = !var1;
                    if(var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = arg1;
                    var3 = var2.replacedBy;
                    var2 = null;
                    var1 = var2 == var3;
case 4:
                    return var1;
                }
            };
            var11 = var7.bind(var11)(var2);
            var _closure2_slot2 = var11;
            var2 = 9;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = new Array(0);
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var1 = _closure1_slot4;
case 8:
            var3 = var2.bind(var4)(var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var12 = var2.bind(var3)(var1);
            var _closure2_slot3 = var12;
            var3 = _closure1_slot5;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 10;
            var1 = var13[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'scrollable': true, 'startExpanded': true};
            var15 = _closure1_slot5;
            var7 = 11;
            var7 = var13[var7];
            var7 = var6.bind(var4)(var7);
            var14 = var7.BottomSheetTitleHeader;
            var7 = {};
            var16 = 12;
            var17 = var13[var16];
            var17 = var6.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var13[var16];
            var16 = var6.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.Zhcj9X;
            var16 = var17.bind(var18)(var16);
            var7['title'] = var16;
            var7 = var15.bind(var4)(var14, var7);
            var1['header'] = var7;
            var7 = _closure1_slot6;
            var5 = 13;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var8 = var8.list;
            var5['style'] = var8;
            var8 = {};
            var8['paddingBottom'] = var10;
            var5['contentContainerStyle'] = var8;
            var10 = var12.map;
            var8 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var8 = arg2;
                    var5 = _closure1_slot5;
                    var4 = _closure1_slot8;
                    var3 = {};
                    var3['application'] = var1;
                    var7 = 0;
                    var2 = var7 === var8;
                    var3['start'] = var2;
                    var2 = _closure2_slot3;
                    var9 = var2.length;
                    var2 = 1;
                    var2 = var9 - var2;
                    var2 = var8 === var2;
                    if(!var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var6 = _closure2_slot2;
                    var6 = var6.length;
                    var2 = var7 === var6;
case 9:
                    var3['end'] = var2;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                }
            };
            var10 = var10.bind(var12)(var8);
            var8 = new Array(2);
            var8[0] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var12 = arg2;
                    var8 = var1.name;
                    var5 = var1.type;
                    var _closure3_slot0 = var5;
                    var14 = var1.icon;
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 14;
                    var1 = var1[var9];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var13 = 0;
                    var10 = var13 === var12;
                    if(!var10) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var11 = _closure2_slot3;
                    var11 = var11.length;
                    var10 = var13 === var11;
case 11:
                    var1['start'] = var10;
                    var10 = _closure2_slot2;
                    var13 = var10.length;
                    var10 = 1;
                    var10 = var13 - var10;
                    var10 = var12 === var10;
                    var1['end'] = var10;
                    var1['label'] = var8;
                    var7 = function onPress() {
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 15;
                        var2 = var5[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var2 = var6.hideActionSheet;
                        var2 = var2.bind(var6)();
                        var2 = 16;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var5 = _closure3_slot0;
                        var2['platformType'] = var5;
                        var4 = _closure1_slot3;
                        var4 = var4.USER_SETTINGS;
                        var2['location'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onPress'] = var7;
                    var10 = _closure1_slot5;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var7 = 4;
                    var7 = var17[var7];
                    var7 = var16.bind(var3)(var7);
                    var8 = var7.Icon;
                    var7 = {};
                    var12 = 17;
                    var12 = var17[var12];
                    var13 = var16.bind(var3)(var12);
                    var12 = var13.makeSource;
                    var15 = 18;
                    var15 = var17[var15];
                    var16 = var16.bind(var3)(var15);
                    var15 = var16.isThemeDark;
                    var11 = _closure2_slot0;
                    var11 = var15.bind(var16)(var11);
                    if(var11) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var11 = var14.lightPNG;
                    _fun0005_ip = 15; continue _fun0005;
case 13:
                    var11 = var14.darkPNG;
case 15:
                    var11 = var12.bind(var13)(var11);
                    var7['source'] = var11;
                    var11 = true;
                    var7['disableColor'] = var11;
                    var7 = var10.bind(var3)(var8, var7);
                    var1['icon'] = var7;
                    var8 = _closure1_slot5;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var6 = var7.bind(var3)(var6);
                    var6 = var6.TableRow;
                    var7 = var6.Arrow;
                    var6 = {};
                    var6 = var8.bind(var3)(var7, var6);
                    var1['trailing'] = var6;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();