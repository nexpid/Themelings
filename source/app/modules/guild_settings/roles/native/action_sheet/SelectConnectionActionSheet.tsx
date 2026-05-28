// app/modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function IdentityApplicationRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.applicationId;
            var6 = var1.onPress;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.useGetOrFetchApplicationBatched;
            var8 = var1.bind(var2)(var3);
            var1 = null;
            if(!(var1 != var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var8.bot;
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var10 = var1 != var15;
            var7 = null;
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = _closure1_slot6;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 6;
            var9 = var14[var12];
            var9 = var13.bind(var5)(var9);
            var10 = var9.Avatar;
            var9 = {};
            var9['user'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.AvatarSizes;
            var12 = var12.XSMALL;
            var9['size'] = var12;
            var9['guildId'] = var5;
            var7 = var11.bind(var5)(var10, var9);
case 4:
            var2['icon'] = var7;
            var7 = var8.name;
            var2['label'] = var7;
            var10 = var8.description;
            var9 = '';
            var7 = undefined;
            if(!(var9 !== var10)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8.description;
case 6:
            var2['subLabel'] = var7;
            var2['onPress'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SelectConnectionActionSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.addConnection;
            var _closure2_slot0 = var2;
            var2 = var1.excludedConnections;
            var _closure2_slot1 = var2;
            var2 = var1.excludedApplications;
            var _closure2_slot2 = var2;
            var7 = var1.integrations;
            var2 = var1.onCompleteApplication;
            var _closure2_slot3 = var2;
            var11 = var1.gameApplicationIds;
            var1 = var1.onCompleteIdentityApplication;
            var _closure2_slot4 = var1;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var _closure2_slot5 = var2;
            var5 = _closure1_slot6;
            var10 = _closure1_slot0;
            var2 = 8;
            var2 = var6[var2];
            var2 = var10.bind(var4)(var2);
            var3 = var2.BottomSheetTitleHeader;
            var2 = {};
            var22 = 9;
            var8 = var6[var22];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var6[var22];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.Sm0YG7;
            var6 = var8.bind(var9)(var6);
            var2['title'] = var6;
            var8 = var5.bind(var4)(var3, var2);
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var19 = 0;
            var3 = var2.bind(var3)(var19);
            var2 = _closure1_slot3;
            var9 = 2;
            var2 = var2.bind(var4)(var3, var9);
            var3 = var2[var19];
            var13 = 1;
            var17 = var2[var13];
            var6 = null;
            var2 = var6 == var7;
            var14 = undefined;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = var7.filter;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg1;
                    var2 = var5.application;
                    var6 = null;
                    var3 = var6 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = var2.roleConnectionsVerificationUrl;
case 10:
                    var1 = var6 != var1;
                    if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = _closure2_slot2;
                    var2 = var3.has;
                    var5 = var5.application;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 14; continue _fun0003 }
case 3:
                    var4 = var5.id;
case 14:
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
case 12:
                    return var1;
                }
            };
            var14 = var5.bind(var7)(var2);
case 8:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.usePlatforms;
            var7 = var2.bind(var5)();
            var5 = var7.filter;
            var2 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var7 = var5.bind(var7)(var2);
            var5 = var7.map;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 11;
                    var2 = var9[var2];
                    var5 = undefined;
                    var4 = var8.bind(var5)(var2);
                    var3 = var4.makeSource;
                    var2 = 12;
                    var2 = var9[var2];
                    var9 = var8.bind(var5)(var2);
                    var8 = var9.isThemeDark;
                    var2 = _closure2_slot5;
                    var2 = var8.bind(var9)(var2);
                    var8 = var1.icon;
                    if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var2 = var8.lightPNG;
                    _fun0004_ip = 17; continue _fun0004;
case 15:
                    var2 = var8.darkPNG;
case 17:
                    var10 = var3.bind(var4)(var2);
                    var4 = _closure1_slot6;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 5;
                    var2 = var11[var2];
                    var2 = var8.bind(var5)(var2);
                    var3 = var2.TableRow;
                    var2 = {};
                    var9 = _closure1_slot6;
                    var7 = 6;
                    var7 = var11[var7];
                    var7 = var8.bind(var5)(var7);
                    var8 = var7.Icon;
                    var7 = {};
                    var7['source'] = var10;
                    var10 = true;
                    var7['disableColor'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
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
                        var2 = 13;
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
            var10 = var5.bind(var7)(var2);
            var5 = var6 == var14;
            var2 = undefined;
            if(var5) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var14.map;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.application;
                    var _closure3_slot0 = var2;
                    var1 = null;
                    var3 = var1 == var2;
                    if(var3) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var6 = _closure1_slot6;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 5;
                    var3 = var13[var3];
                    var5 = undefined;
                    var3 = var12.bind(var5)(var3);
                    var4 = var3.TableRow;
                    var3 = {};
                    var10 = _closure1_slot6;
                    var11 = 6;
                    var8 = var13[var11];
                    var8 = var12.bind(var5)(var8);
                    var9 = var8.Avatar;
                    var8 = {};
                    var14 = var2.bot;
                    var8['user'] = var14;
                    var11 = var13[var11];
                    var11 = var12.bind(var5)(var11);
                    var11 = var11.AvatarSizes;
                    var11 = var11.XSMALL;
                    var8['size'] = var11;
                    var8['guildId'] = var5;
                    var8 = var10.bind(var5)(var9, var8);
                    var3['icon'] = var8;
                    var8 = var2.name;
                    var3['label'] = var8;
                    var10 = var2.description;
                    var9 = '';
                    var8 = undefined;
                    if(!(var9 !== var10)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var8 = var2.description;
case 22:
                    var3['subLabel'] = var8;
                    var7 = function onPress() {
                        var3 = _closure2_slot3;
                        var1 = _closure3_slot0;
                        var2 = var1.id;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 13;
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
case 20:
                    return var1;
                }
            };
            var2 = var7.bind(var14)(var5);
case 18:
            if(!(var6 == var11)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var11 = new Array(0);
case 24:
            var7 = var11.filter;
            var5 = function(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var11 = var7.bind(var11)(var5);
            if(!(var6 == var1)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var1 = new Array(0);
            _fun0002_ip = 28; continue _fun0002;
case 26:
            var7 = var11.map;
            var5 = function(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot6;
                var4 = _closure1_slot8;
                var3 = {};
                var3['applicationId'] = var6;
                var1 = function onPress() {
                    var3 = _closure2_slot4;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var3['onPress'] = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'row-identity-';
                var2 = var2.bind(var1)(var6);
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var1 = var7.bind(var11)(var5);
case 28:
            var5 = var6 == var2;
            var7 = undefined;
            if(var5) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var7 = var2.length;
case 29:
            var11 = var6 != var7;
            var5 = 0;
            if(!var11) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var5 = var7;
case 31:
            var7 = var5 > var19;
            var5 = var1.length;
            var5 = var5 > var19;
            var18 = _closure1_slot0;
            var11 = _closure1_slot2;
            var14 = var11[var22];
            var14 = var18.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var11[var22];
            var11 = var18.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11["3fe7U5"];
            var11 = var14.bind(var15)(var11);
            var18 = new Array(1);
            var18[0] = var11;
            if(!var7) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var14 = var18.push;
            var21 = _closure1_slot0;
            var11 = _closure1_slot2;
            var15 = var11[var22];
            var15 = var21.bind(var4)(var15);
            var20 = var15.intl;
            var15 = var20.string;
            var11 = var11[var22];
            var11 = var21.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.PHjkRE;
            var11 = var15.bind(var20)(var11);
            var11 = var14.bind(var18)(var11);
case 33:
            if(!var5) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var14 = var18.push;
            var21 = _closure1_slot0;
            var11 = _closure1_slot2;
            var15 = var11[var22];
            var15 = var21.bind(var4)(var15);
            var20 = var15.intl;
            var15 = var20.string;
            var11 = var11[var22];
            var11 = var21.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.y3ZnnU;
            var11 = var15.bind(var20)(var11);
            var11 = var14.bind(var18)(var11);
case 35:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 14;
            var11 = var15[var11];
            var15 = var14.bind(var4)(var11);
            var14 = var15.useSegmentedControlState;
            var11 = {};
            var11['pageWidth'] = var19;
            var11['defaultIndex'] = var3;
            var11['onSetActiveIndex'] = var17;
            var17 = var18.map;
            var16 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var1['id'] = var2;
                var1['label'] = var2;
                var2 = null;
                var1['page'] = var2;
                return var1;
            };
            var16 = var17.bind(var18)(var16);
            var11['items'] = var16;
            var11 = var14.bind(var15)(var11);
            if(!(var13 !== var3)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var15 = var10;
            if(!(var9 === var3)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var15 = var1;
            _fun0002_ip = 39; continue _fun0002;
case 37:
            if(!var7) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var1 = var2;
case 41:
            var15 = var1;
case 39:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 15;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {'scrollable': true, 'header': null, 'startExpanded': true};
            var16 = true;
            var1['header'] = var8;
            if(var7) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var6 = null;
            if(!var5) { _fun0002_ip = 45; continue _fun0002 }
case 43:
            var8 = _closure1_slot6;
            var7 = _closure1_slot5;
            var5 = {};
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 16;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.SegmentedControl;
            var9 = {};
            var9['state'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 45:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 17;
            var6 = var17[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.BottomSheetScrollView;
            var6 = {};
            var11 = _closure1_slot6;
            var9 = 18;
            var9 = var17[var9];
            var9 = var13.bind(var4)(var9);
            var10 = var9.SafeAreaPaddingView;
            var9 = {};
            var9['bottom'] = var16;
            var14 = _closure1_slot6;
            var12 = 19;
            var12 = var17[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.TableRowGroup;
            var12 = {};
            var12['hasIcons'] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
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