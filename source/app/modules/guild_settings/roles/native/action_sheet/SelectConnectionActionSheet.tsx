// app/modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SelectConnectionActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.addConnection;
            var _closure2_slot0 = var2;
            var2 = var1.excludedConnections;
            var _closure2_slot1 = var2;
            var2 = var1.excludedApplications;
            var _closure2_slot2 = var2;
            var5 = var1.integrations;
            var1 = var1.onCompleteApplication;
            var _closure2_slot3 = var1;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var _closure2_slot4 = var1;
            var3 = _closure1_slot6;
            var10 = _closure1_slot0;
            var1 = 5;
            var1 = var7[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.BottomSheetTitleHeader;
            var1 = {};
            var12 = 6;
            var8 = var7[var12];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var7[var12];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Sm0YG7;
            var7 = var8.bind(var9)(var7);
            var1['title'] = var7;
            var8 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var16 = 0;
            var3 = var1.bind(var2)(var16);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var15 = var2[var16];
            var1 = 1;
            var17 = var2[var1];
            var7 = null;
            var1 = var7 == var5;
            var3 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.filter;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var2 = var5.application;
                    var6 = null;
                    var3 = var6 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var2.roleConnectionsVerificationUrl;
case 4:
                    var1 = var6 != var1;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot2;
                    var2 = var3.has;
                    var5 = var5.application;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = var5.id;
case 8:
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
case 6:
                    return var1;
                }
            };
            var3 = var2.bind(var5)(var1);
case 2:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.usePlatforms;
            var5 = var1.bind(var2)();
            var2 = var5.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var5 = var2.bind(var5)(var1);
            var2 = var5.map;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 8;
                    var3 = var9[var3];
                    var5 = undefined;
                    var7 = var8.bind(var5)(var3);
                    var4 = var7.makeSource;
                    var3 = 9;
                    var3 = var9[var3];
                    var9 = var8.bind(var5)(var3);
                    var8 = var9.isThemeDark;
                    var3 = _closure2_slot4;
                    var3 = var8.bind(var9)(var3);
                    var8 = var1.icon;
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = var8.lightPNG;
                    _fun0003_ip = 12; continue _fun0003;
case 10:
                    var3 = var8.darkPNG;
case 12:
                    var9 = var4.bind(var7)(var3);
                    var4 = _closure1_slot6;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 10;
                    var2 = var10[var2];
                    var2 = var8.bind(var5)(var2);
                    var3 = var2.TableRow;
                    var2 = {};
                    var7 = 11;
                    var7 = var10[var7];
                    var7 = var8.bind(var5)(var7);
                    var8 = var7.Icon;
                    var7 = {};
                    var7['source'] = var9;
                    var9 = true;
                    var7['disableColor'] = var9;
                    var7 = var4.bind(var5)(var8, var7);
                    var2['icon'] = var7;
                    var7 = var1.name;
                    var2['label'] = var7;
                    var6 = function onPress() {
                        var3 = _closure2_slot0;
                        var1 = _closure3_slot0;
                        var2 = var1.type;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var2['onPress'] = var6;
                    var7 = var1.type;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = 'row-';
                    var1 = var6.bind(var1)(var7);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var14 = var2.bind(var5)(var1);
            var1 = var7 == var3;
            var13 = undefined;
            if(var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.application;
                    var _closure3_slot0 = var2;
                    var1 = null;
                    var3 = var1 == var2;
                    if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var6 = _closure1_slot6;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 10;
                    var3 = var12[var3];
                    var5 = undefined;
                    var3 = var11.bind(var5)(var3);
                    var4 = var3.TableRow;
                    var3 = {};
                    var10 = 11;
                    var8 = var12[var10];
                    var8 = var11.bind(var5)(var8);
                    var9 = var8.Avatar;
                    var8 = {};
                    var13 = var2.bot;
                    var8['user'] = var13;
                    var10 = var12[var10];
                    var10 = var11.bind(var5)(var10);
                    var10 = var10.AvatarSizes;
                    var10 = var10.XSMALL;
                    var8['size'] = var10;
                    var8['guildId'] = var5;
                    var8 = var6.bind(var5)(var9, var8);
                    var3['icon'] = var8;
                    var8 = var2.name;
                    var3['label'] = var8;
                    var10 = var2.description;
                    var9 = '';
                    var8 = undefined;
                    if(!(var9 !== var10)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var8 = var2.description;
case 17:
                    var3['subLabel'] = var8;
                    var7 = function onPress() {
                        var3 = _closure2_slot3;
                        var1 = _closure3_slot0;
                        var2 = var1.id;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 12;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var3['onPress'] = var7;
                    var8 = var2.id;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var2 = 'row-';
                    var2 = var7.bind(var2)(var8);
                    var1 = var6.bind(var5)(var4, var3, var2);
case 15:
                    return var1;
                }
            };
            var13 = var2.bind(var3)(var1);
case 13:
            var1 = var7 == var13;
            var2 = undefined;
            if(var1) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = var13.length;
case 19:
            var3 = var7 != var2;
            var1 = 0;
            if(!var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = var2;
case 21:
            var5 = var1 > var16;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var10 = var2.bind(var4)(var1);
            var3 = var10.useSegmentedControlState;
            var1 = {};
            var1['pageWidth'] = var16;
            var1['defaultIndex'] = var15;
            var1['onSetActiveIndex'] = var17;
            var17 = var9[var12];
            var17 = var2.bind(var4)(var17);
            var19 = var17.intl;
            var18 = var19.string;
            var17 = var9[var12];
            var17 = var2.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17["3fe7U5"];
            var18 = var18.bind(var19)(var17);
            var17 = new Array(2);
            var17[0] = var18;
            var18 = var9[var12];
            var18 = var2.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var12 = var9[var12];
            var12 = var2.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.PHjkRE;
            var12 = var18.bind(var19)(var12);
            var17[1] = var12;
            var12 = var17.map;
            var11 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var1['id'] = var2;
                var1['label'] = var2;
                var2 = null;
                var1['page'] = var2;
                return var1;
            };
            var11 = var12.bind(var17)(var11);
            var1['items'] = var11;
            var17 = var3.bind(var10)(var1);
            var3 = _closure1_slot7;
            var1 = 14;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {'scrollable': true, 'header': null, 'startExpanded': true};
            var11 = true;
            var1['header'] = var8;
            var7 = null;
            if(!var5) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var9 = _closure1_slot6;
            var8 = _closure1_slot5;
            var5 = {};
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 15;
            var10 = var18[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.SegmentedControl;
            var10 = {};
            var10['state'] = var17;
            var10 = var9.bind(var4)(var12, var10);
            var5['children'] = var10;
            var7 = var9.bind(var4)(var8, var5);
case 23:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 16;
            var6 = var17[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.BottomSheetScrollView;
            var6 = {};
            var9 = 17;
            var9 = var17[var9];
            var9 = var12.bind(var4)(var9);
            var10 = var9.SafeAreaPaddingView;
            var9 = {};
            var9['bottom'] = var11;
            var11 = 18;
            var11 = var17[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.TableRowGroup;
            var11 = {};
            if(!(var16 === var15)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var13 = var14;
case 25:
            var11['children'] = var13;
            var11 = var8.bind(var4)(var12, var11);
            var9['children'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();