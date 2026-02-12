// app/modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function notifyListeners() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot13;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = true;
            _closure1_slot13 = var1;
            var1 = global;
            var4 = var1.setTimeout;
            var3 = undefined;
            var2 = function() {
                var2 = false;
                _closure1_slot13 = var2;
                var3 = _closure1_slot12;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = 0;
            var1 = var4.bind(var3)(var2, var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function addLog(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = global;
            var1 = var1.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var7 = var2;
            var1 = new var7[var1](var6);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = var2.toLocaleTimeString;
            var5 = var1.bind(var2)();
            var4 = _closure1_slot11;
            var3 = var4.push;
            var2 = {};
            var2['timestamp'] = var5;
            var5 = arg1;
            var2['message'] = var5;
            var5 = arg2;
            var2['data'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot11;
            var3 = var2.length;
            var2 = 50;
            if(!(var3 > var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot11;
            var3 = var4.slice;
            var2 = -50;
            var2 = var3.bind(var4)(var2);
            _closure1_slot11 = var2;
case 4:
            var2 = _closure1_slot23;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var13.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var14 = 1;
    var5 = var7[var14];
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
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.jsx;
    var _closure1_slot8 = var9;
    var2 = var2.jsxs;
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var7[var2];
    var8 = var13.bind(var1)(var2);
    var2 = var8.prototype;
    var5 = Object.create(var2, {constructor: {value: var8}});
    var18 = 'GameCommunityUpsell';
    var19 = var5;
    var2 = new var19[var8](var18, var17);
    var2 = var2 instanceof Object ? var2 : var5;
    var _closure1_slot10 = var2;
    var2 = new Array(0);
    var _closure1_slot11 = var2;
    var2 = new Array(0);
    var _closure1_slot12 = var2;
    var2 = false;
    var _closure1_slot13 = var2;
    var2 = {};
    var5 = function log(arg1, arg2) {
        var4 = arg1;
        var3 = arg2;
        var5 = _closure1_slot10;
        var2 = var5.log;
        var2 = var2.bind(var5)(var4, var3);
        var2 = _closure1_slot24;
        var1 = undefined;
        var2 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var2['log'] = var5;
    var5 = function error(arg1, arg2) {
        var5 = arg1;
        var4 = arg2;
        var3 = _closure1_slot10;
        var2 = var3.error;
        var2 = var2.bind(var3)(var5, var4);
        var3 = _closure1_slot24;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'ERROR: ';
        var2 = var2.bind(var1)(var5);
        var1 = undefined;
        var2 = var3.bind(var1)(var2, var4);
        return var1;
    };
    var2['error'] = var5;
    var5 = function warn(arg1, arg2) {
        var5 = arg1;
        var4 = arg2;
        var3 = _closure1_slot10;
        var2 = var3.warn;
        var2 = var2.bind(var3)(var5, var4);
        var3 = _closure1_slot24;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'WARN: ';
        var2 = var2.bind(var1)(var5);
        var1 = undefined;
        var2 = var3.bind(var1)(var2, var4);
        return var1;
    };
    var2['warn'] = var5;
    var5 = 6;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var8 = var10.createStyles;
    var5 = {};
    var11 = {};
    var12 = 7;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var11['backgroundColor'] = var15;
    var11['flex'] = var14;
    var5['container'] = var11;
    var11 = {};
    var11['flex'] = var14;
    var5['scrollView'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11['paddingHorizontal'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11['paddingTop'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var11['paddingBottom'] = var14;
    var5['section'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11['paddingHorizontal'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var11['paddingVertical'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var11['backgroundColor'] = var14;
    var5['detailsContainer'] = var11;
    var11 = {'fontSize': 12, 'lineHeight': 16, 'color': null, 'fontFamily': 'ggmono-400-normal'};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_STRONG;
    var11['color'] = var14;
    var5['detailText'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_FEEDBACK_CRITICAL;
    var11['color'] = var14;
    var5['errorText'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_FEEDBACK_POSITIVE;
    var11['color'] = var14;
    var5['successText'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_FEEDBACK_WARNING;
    var11['color'] = var14;
    var5['warningText'] = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11['paddingHorizontal'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var11['paddingVertical'] = var14;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var11['backgroundColor'] = var14;
    var5['logContainer'] = var11;
    var11 = {'fontSize': 11, 'lineHeight': 14, 'color': null, 'fontFamily': 'ggmono-400-normal', 'marginBottom': 4};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_MUTED;
    var11['color'] = var12;
    var5['logEntry'] = var11;
    var5 = var8.bind(var10)(var5);
    var _closure1_slot14 = var5;
    var8 = 8;
    var5 = var7[var8];
    var5 = var6.bind(var1)(var5);
    var10 = var5.RefreshIcon;
    var5 = {};
    var5 = var9.bind(var1)(var10, var5);
    var _closure1_slot15 = var5;
    var5 = 9;
    var10 = var7[var5];
    var10 = var6.bind(var1)(var10);
    var11 = var10.TableRowArrow;
    var10 = {};
    var10 = var9.bind(var1)(var11, var10);
    var _closure1_slot16 = var10;
    var10 = 10;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var11 = var10.PlayIcon;
    var10 = {};
    var10 = var9.bind(var1)(var11, var10);
    var _closure1_slot17 = var10;
    var10 = var7[var5];
    var10 = var6.bind(var1)(var10);
    var11 = var10.TableRowArrow;
    var10 = {};
    var10 = var9.bind(var1)(var11, var10);
    var _closure1_slot18 = var10;
    var10 = var7[var8];
    var10 = var6.bind(var1)(var10);
    var11 = var10.RefreshIcon;
    var10 = {};
    var10 = var9.bind(var1)(var11, var10);
    var _closure1_slot19 = var10;
    var10 = var7[var5];
    var10 = var6.bind(var1)(var10);
    var11 = var10.TableRowArrow;
    var10 = {};
    var10 = var9.bind(var1)(var11, var10);
    var _closure1_slot20 = var10;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var10 = var8.RefreshIcon;
    var8 = {};
    var8 = var9.bind(var1)(var10, var8);
    var _closure1_slot21 = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.TableRowArrow;
    var5 = {};
    var5 = var9.bind(var1)(var8, var5);
    var _closure1_slot22 = var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GameCommunityUpsellDevTools() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot14;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var _closure2_slot0 = var15;
            var5 = _closure1_slot4;
            var2 = var5.useState;
            var1 = new Array(0);
            var1 = var2.bind(var5)(var1);
            var3 = _closure1_slot3;
            var2 = 2;
            var1 = var3.bind(var4)(var1, var2);
            var11 = 0;
            var27 = var1[var11];
            var22 = 1;
            var1 = var1[var22];
            var _closure2_slot1 = var1;
            var6 = var5.useState;
            var1 = true;
            var1 = var6.bind(var5)(var1);
            var1 = var3.bind(var4)(var1, var2);
            var9 = var1[var11];
            var1 = var1[var22];
            var _closure2_slot2 = var1;
            var6 = var5.useState;
            var1 = new Array(0);
            var1 = var6.bind(var5)(var1);
            var1 = var3.bind(var4)(var1, var2);
            var34 = var1[var11];
            var1 = var1[var22];
            var _closure2_slot3 = var1;
            var6 = var5.useState;
            var1 = _closure1_slot11;
            var1 = var6.bind(var5)(var1);
            var1 = var3.bind(var4)(var1, var2);
            var16 = var1[var11];
            var1 = var1[var22];
            var _closure2_slot4 = var1;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var1 = var6[var2];
            var13 = var3.bind(var4)(var1);
            var12 = var13.useStateFromStores;
            var1 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var1;
            var7 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isDebugMode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var35 = var12.bind(var13)(var8, var7);
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useStateFromStores;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getShownGameIds;
                var1 = var1.bind(var2)();
                var1 = var1.size;
                return var1;
            };
            var37 = var3.bind(var6)(var2, var1);
            var3 = var5.useEffect;
            var2 = function() {
                var4 = function listener() {
                    var3 = _closure2_slot4;
                    var6 = _closure1_slot11;
                    var2 = new Array(0);
                    var5 = 0;
                    var7 = var2;
                    var1 = arraySpread(var7, var6, var5);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure3_slot0 = var4;
                var3 = _closure1_slot12;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
                var1 = function() {
                    var4 = _closure1_slot12;
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    _closure1_slot12 = var1;
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 12;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.detectInstalledGamesWithDiagnostics;
                var4 = var2.bind(var3)();
                var3 = var4.then;
                var2 = function(arg1) {
                    var4 = _closure2_slot1;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot2;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var31 = var3.bind(var5)(var2, var1);
            var _closure2_slot5 = var31;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var31;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isAndroid;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.SUPPORTED_GAMES;
                    var4 = var5.flatMap;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.iosUrlSchemes;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)(var3);
case 6:
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.forceShowUpsell;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var30 = var3.bind(var5)(var2, var1);
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.resetState;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.invalidateInstalledGamesCache;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var26 = var3.bind(var5)(var2, var1);
            var3 = var5.useCallback;
            var2 = function(arg1) {
                var3 = _closure1_slot7;
                var2 = var3.setDebugMode;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = new Array(0);
            var32 = var3.bind(var5)(var2, var1);
            var3 = var5.useCallback;
            var2 = function() {
                var2 = new Array(0);
                _closure1_slot11 = var2;
                var2 = _closure1_slot23;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = new Array(0);
            var21 = var3.bind(var5)(var2, var1);
            var2 = var27.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isInstalled;
                return var1;
            };
            var1 = var2.bind(var27)(var1);
            var33 = var1.length;
            var25 = 'Checking...';
            if(var9) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = var33 > var11;
            var1 = 'No supported games detected';
            if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var7 = 's';
            if(!(var22 === var33)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var7 = '';
case 12:
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var42 = '';
            var40 = ' game';
            var38 = ' detected';
            var41 = var33;
            var39 = var7;
            var1 = var42[var6](var41, var40, var39, var38, var37);
case 10:
            var25 = var1;
case 8:
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var15.container;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var15.scrollView;
            var5['style'] = var8;
            var8 = {};
            var12 = var15.section;
            var8['style'] = var12;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = 17;
            var12 = var19[var17];
            var12 = var20.bind(var4)(var12);
            var13 = var12.TableRowGroup;
            var12 = {};
            var18 = 'Game Community Upsell';
            var12['title'] = var18;
            var23 = 18;
            var18 = var19[var23];
            var18 = var20.bind(var4)(var18);
            var24 = var18.TableRow;
            var18 = {'label': 'Installed Games', 'subLabel': null, 'disabled': true};
            var18['subLabel'] = var25;
            var24 = var3.bind(var4)(var24, var18);
            var18 = new Array(6);
            var18[0] = var24;
            var19 = var19[var23];
            var19 = var20.bind(var4)(var19);
            var20 = var19.TableRow;
            var19 = {'label': 'Games Shown to User', 'subLabel': null, 'disabled': true};
            var36 = 's';
            if(!(var22 === var37)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var36 = '';
case 14:
            var22 = global;
            var24 = var22.HermesInternal;
            var29 = var24.concat;
            var25 = '';
            var40 = ' game';
            var38 = ' already shown';
            var42 = var25;
            var41 = var37;
            var39 = var36;
            var24 = var42[var29](var41, var40, var39, var38, var37);
            var19['subLabel'] = var24;
            var19 = var3.bind(var4)(var20, var19);
            var18[1] = var19;
            var24 = _closure1_slot8;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var28 = 19;
            var28 = var19[var28];
            var28 = var20.bind(var4)(var28);
            var29 = var28.TableSwitchRow;
            var28 = {'label': 'Debug Mode', 'subLabel': 'Bypasses single-use check to allow repeated testing'};
            var28['value'] = var35;
            var28['onValueChange'] = var32;
            var28 = var24.bind(var4)(var29, var28);
            var18[2] = var28;
            var28 = var19[var23];
            var28 = var20.bind(var4)(var28);
            var29 = var28.TableRow;
            var28 = {'label': 'Re-run Detection', 'subLabel': 'Check for installed games again'};
            var28['onPress'] = var31;
            var31 = _closure1_slot15;
            var28['icon'] = var31;
            var31 = _closure1_slot16;
            var28['trailing'] = var31;
            var28 = var24.bind(var4)(var29, var28);
            var18[3] = var28;
            var28 = var19[var23];
            var28 = var20.bind(var4)(var28);
            var29 = var28.TableRow;
            var28 = {'label': 'Force Show Upsell', 'subLabel': 'Bypasses all checks and shows the upsell immediately with the highest priority detected game'};
            var28['onPress'] = var30;
            var30 = _closure1_slot17;
            var28['icon'] = var30;
            var30 = _closure1_slot18;
            var28['trailing'] = var30;
            var28 = var24.bind(var4)(var29, var28);
            var18[4] = var28;
            var19 = var19[var23];
            var19 = var20.bind(var4)(var19);
            var20 = var19.TableRow;
            var19 = {'label': 'Reset Shown Games', 'subLabel': 'Clear the list of games that have been shown to this user'};
            var19['onPress'] = var26;
            var26 = _closure1_slot19;
            var19['icon'] = var26;
            var26 = _closure1_slot20;
            var19['trailing'] = var26;
            var19 = var24.bind(var4)(var20, var19);
            var18[5] = var19;
            var12['children'] = var18;
            var12 = var7.bind(var4)(var13, var12);
            var8['children'] = var12;
            var12 = var3.bind(var4)(var2, var8);
            var8 = new Array(6);
            var8[0] = var12;
            var12 = !var9;
            if(!var12) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var19 = _closure1_slot8;
            var18 = _closure1_slot5;
            var13 = {};
            var20 = var15.section;
            var13['style'] = var20;
            var26 = _closure1_slot9;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var20 = var32[var17];
            var20 = var31.bind(var4)(var20);
            var24 = var20.TableRowGroup;
            var20 = {};
            var28 = 'Detection Details';
            var20['title'] = var28;
            var28 = var32[var23];
            var28 = var31.bind(var4)(var28);
            var29 = var28.TableRow;
            var28 = {'label': 'Platform', 'subLabel': null, 'disabled': true};
            var30 = 13;
            var30 = var32[var30];
            var31 = var31.bind(var4)(var30);
            var30 = var31.isAndroid;
            var31 = var30.bind(var31)();
            var30 = 'iOS';
            if(!var31) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var30 = 'Android';
case 18:
            var28['subLabel'] = var30;
            var29 = var19.bind(var4)(var29, var28);
            var28 = new Array(3);
            var28[0] = var29;
            var31 = _closure1_slot8;
            var30 = _closure1_slot0;
            var29 = _closure1_slot2;
            var32 = var29[var23];
            var32 = var30.bind(var4)(var32);
            var35 = var32.TableRow;
            var32 = {'label': 'Total Games Configured', 'subLabel': null, 'disabled': true};
            var37 = var22.String;
            var36 = 14;
            var36 = var29[var36];
            var36 = var30.bind(var4)(var36);
            var36 = var36.SUPPORTED_GAMES;
            var36 = var36.length;
            var36 = var37.bind(var4)(var36);
            var32['subLabel'] = var36;
            var32 = var31.bind(var4)(var35, var32);
            var28[1] = var32;
            var29 = var29[var23];
            var29 = var30.bind(var4)(var29);
            var30 = var29.TableRow;
            var29 = {'label': 'Games Detected', 'subLabel': null, 'disabled': true};
            var32 = var22.String;
            var32 = var32.bind(var4)(var33);
            var29['subLabel'] = var32;
            var29 = var31.bind(var4)(var30, var29);
            var28[2] = var29;
            var20['children'] = var28;
            var20 = var26.bind(var4)(var24, var20);
            var13['children'] = var20;
            var12 = var19.bind(var4)(var18, var13);
case 16:
            var8[1] = var12;
            var12 = !var9;
            if(!var12) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var13 = var27.length;
            var12 = var13 > var11;
case 20:
            if(!var12) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var19 = _closure1_slot9;
            var18 = _closure1_slot5;
            var13 = {};
            var20 = var15.section;
            var13['style'] = var20;
            var26 = _closure1_slot8;
            var24 = _closure1_slot0;
            var32 = _closure1_slot2;
            var20 = 16;
            var20 = var32[var20];
            var20 = var24.bind(var4)(var20);
            var24 = var20.Text;
            var20 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Detailed Results:'};
            var29 = var15.detailText;
            var28 = new Array(2);
            var28[0] = var29;
            var29 = {};
            var31 = _closure1_slot1;
            var30 = 7;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.spacing;
            var30 = var30.PX_8;
            var29['paddingBottom'] = var30;
            var28[1] = var29;
            var20['style'] = var28;
            var24 = var26.bind(var4)(var24, var20);
            var20 = new Array(2);
            var20[0] = var24;
            var26 = var27.map;
            var24 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.game;
                    var16 = var2.isInstalled;
                    var14 = var2.overridden;
                    var9 = var2.schemeResults;
                    var2 = _closure2_slot0;
                    if(var16) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var15 = var2.warningText;
                    _fun0005_ip = 26; continue _fun0005;
case 24:
                    var15 = var2.successText;
case 26:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var10 = _closure2_slot0;
                    var2 = var10.detailsContainer;
                    var3['style'] = var2;
                    var8 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var13 = 16;
                    var6 = var2[var13];
                    var2 = undefined;
                    var6 = var8.bind(var2)(var6);
                    var8 = var6.Text;
                    var6 = {};
                    var12 = 'text-xs/normal';
                    var6['variant'] = var12;
                    var17 = var10.detailText;
                    var10 = new Array(2);
                    var10[0] = var17;
                    var10[1] = var15;
                    var6['style'] = var10;
                    var15 = var1.name;
                    var10 = new Array(4);
                    var10[0] = var15;
                    var15 = ' - ';
                    var10[1] = var15;
                    var15 = 'NOT INSTALLED';
                    if(!var16) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var15 = 'INSTALLED';
case 27:
                    var10[2] = var15;
                    if(!var14) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var14 = ' (DEBUG OVERRIDE)';
case 29:
                    var10[3] = var14;
                    var6['children'] = var10;
                    var8 = var5.bind(var2)(var8, var6);
                    var6 = new Array(5);
                    var6[0] = var8;
                    var10 = _closure1_slot9;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var14 = var7[var13];
                    var14 = var8.bind(var2)(var14);
                    var15 = var14.Text;
                    var14 = {};
                    var14['variant'] = var12;
                    var11 = _closure2_slot0;
                    var16 = var11.detailText;
                    var14['style'] = var16;
                    var17 = var1.id;
                    var16 = ['ID: '];
                    var16[1] = var17;
                    var14['children'] = var16;
                    var14 = var10.bind(var2)(var15, var14);
                    var6[1] = var14;
                    var14 = var7[var13];
                    var14 = var8.bind(var2)(var14);
                    var15 = var14.Text;
                    var14 = {};
                    var14['variant'] = var12;
                    var16 = var11.detailText;
                    var14['style'] = var16;
                    var17 = var1.guildName;
                    var16 = ['Guild: '];
                    var16[1] = var17;
                    var17 = ' (';
                    var16[2] = var17;
                    var17 = var1.guildId;
                    var16[3] = var17;
                    var17 = ')';
                    var16[4] = var17;
                    var14['children'] = var16;
                    var14 = var10.bind(var2)(var15, var14);
                    var6[2] = var14;
                    var7 = var7[var13];
                    var7 = var8.bind(var2)(var7);
                    var8 = var7.Text;
                    var7 = {};
                    var7['variant'] = var12;
                    var11 = var11.detailText;
                    var7['style'] = var11;
                    var11 = ['\n', 'Scheme Checks:'];
                    var7['children'] = var11;
                    var7 = var10.bind(var2)(var8, var7);
                    var6[3] = var7;
                    var8 = var9.map;
                    var7 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var1 = arg1;
                            var5 = var1.scheme;
                            var2 = var1.isInstalled;
                            var12 = var1.error;
                            var1 = null;
                            var7 = var1 !== var12;
                            var16 = 'ERROR';
                            if(var7) { _fun0006_ip = 26; continue _fun0006 }
case 31:
                            var1 = 'NOT FOUND';
                            if(!var2) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                            var1 = 'FOUND';
case 32:
                            var16 = var1;
case 26:
                            var1 = _closure2_slot0;
                            if(var7) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                            if(var2) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                            var17 = var1.warningText;
                            _fun0006_ip = 38; continue _fun0006;
case 36:
                            var17 = var1.successText;
case 38:
                            _fun0006_ip = 39; continue _fun0006;
case 34:
                            var17 = var1.errorText;
case 39:
                            var4 = _closure1_slot9;
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var14 = 16;
                            var1 = var9[var14];
                            var3 = undefined;
                            var1 = var10.bind(var3)(var1);
                            var2 = var1.Text;
                            var1 = {};
                            var13 = 'text-xs/normal';
                            var1['variant'] = var13;
                            var6 = _closure2_slot0;
                            var6 = var6.detailText;
                            var1['style'] = var6;
                            var6 = ['  ', '• '];
                            var6[2] = var5;
                            var15 = ':';
                            var6[3] = var15;
                            var15 = ' ';
                            var6[4] = var15;
                            var15 = _closure1_slot8;
                            var9 = var9[var14];
                            var9 = var10.bind(var3)(var9);
                            var10 = var9.Text;
                            var9 = {};
                            var9['variant'] = var13;
                            var9['style'] = var17;
                            var9['children'] = var16;
                            var9 = var15.bind(var3)(var10, var9);
                            var6[5] = var9;
                            if(!var7) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                            var10 = _closure1_slot9;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var8 = var8[var14];
                            var8 = var9.bind(var3)(var8);
                            var9 = var8.Text;
                            var8 = {};
                            var8['variant'] = var13;
                            var11 = _closure2_slot0;
                            var11 = var11.errorText;
                            var8['style'] = var11;
                            var11 = [' ', '- '];
                            var11[2] = var12;
                            var8['children'] = var11;
                            var7 = var10.bind(var3)(var9, var8);
case 40:
                            var6[6] = var7;
                            var1['children'] = var6;
                            var1 = var4.bind(var3)(var2, var1, var5);
                            return var1;
                        }
                    };
                    var7 = var8.bind(var9)(var7);
                    var6[4] = var7;
                    var3['children'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var24 = var26.bind(var27)(var24);
            var20[1] = var24;
            var13['children'] = var20;
            var12 = var19.bind(var4)(var18, var13);
case 22:
            var8[2] = var12;
            var9 = !var9;
            if(!var9) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 13;
            var12 = var18[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            var9 = !var12;
case 42:
            if(!var9) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var12 = var34.length;
            var9 = var12 > var11;
case 44:
            if(!var9) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var18 = _closure1_slot9;
            var13 = _closure1_slot5;
            var12 = {};
            var19 = var15.section;
            var12['style'] = var19;
            var28 = _closure1_slot8;
            var27 = _closure1_slot0;
            var33 = _closure1_slot2;
            var26 = 16;
            var19 = var33[var26];
            var19 = var27.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Info.plist Validation:'};
            var29 = var15.detailText;
            var24 = new Array(2);
            var24[0] = var29;
            var29 = {};
            var32 = _closure1_slot1;
            var31 = 7;
            var30 = var33[var31];
            var30 = var32.bind(var4)(var30);
            var30 = var30.spacing;
            var30 = var30.PX_8;
            var29['paddingBottom'] = var30;
            var24[1] = var29;
            var19['style'] = var24;
            var20 = var28.bind(var4)(var20, var19);
            var19 = new Array(2);
            var19[0] = var20;
            var20 = {};
            var24 = var15.detailsContainer;
            var20['style'] = var24;
            var24 = var33[var26];
            var24 = var27.bind(var4)(var24);
            var29 = var24.Text;
            var24 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Expected LSApplicationQueriesSchemes:'};
            var30 = var15.detailText;
            var24['style'] = var30;
            var29 = var28.bind(var4)(var29, var24);
            var24 = new Array(3);
            var24[0] = var29;
            var30 = var34.map;
            var29 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {};
                var6 = 'text-xs/normal';
                var1['variant'] = var6;
                var6 = _closure2_slot0;
                var6 = var6.detailText;
                var1['style'] = var6;
                var6 = ['  ', '• '];
                var6[2] = var5;
                var1['children'] = var6;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var29 = var30.bind(var34)(var29);
            var24[1] = var29;
            var26 = var33[var26];
            var26 = var27.bind(var4)(var26);
            var27 = var26.Text;
            var26 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Check discord_ios/iOS/Info.plist to verify these schemes are present.'};
            var30 = var15.detailText;
            var29 = new Array(2);
            var29[0] = var30;
            var30 = {};
            var31 = var33[var31];
            var31 = var32.bind(var4)(var31);
            var31 = var31.spacing;
            var31 = var31.PX_8;
            var30['paddingTop'] = var31;
            var29[1] = var30;
            var26['style'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var24[2] = var26;
            var20['children'] = var24;
            var20 = var18.bind(var4)(var13, var20);
            var19[1] = var20;
            var12['children'] = var19;
            var9 = var18.bind(var4)(var13, var12);
case 46:
            var8[3] = var9;
            var13 = _closure1_slot8;
            var12 = _closure1_slot5;
            var9 = {};
            var18 = var15.section;
            var9['style'] = var18;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var17 = var19[var17];
            var17 = var20.bind(var4)(var17);
            var18 = var17.TableRowGroup;
            var17 = {};
            var24 = 'Debug Logs';
            var17['title'] = var24;
            var19 = var19[var23];
            var19 = var20.bind(var4)(var19);
            var20 = var19.TableRow;
            var19 = {};
            var23 = 'Clear Logs';
            var19['label'] = var23;
            var24 = var16.length;
            var22 = var22.HermesInternal;
            var23 = var22.concat;
            var22 = ' log entries';
            var22 = var23.bind(var25)(var24, var22);
            var19['subLabel'] = var22;
            var19['onPress'] = var21;
            var21 = _closure1_slot21;
            var19['icon'] = var21;
            var21 = _closure1_slot22;
            var19['trailing'] = var21;
            var19 = var13.bind(var4)(var20, var19);
            var17['children'] = var19;
            var17 = var13.bind(var4)(var18, var17);
            var9['children'] = var17;
            var9 = var13.bind(var4)(var12, var9);
            var8[4] = var9;
            var9 = var16.length;
            var9 = var9 > var11;
            if(!var9) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var12 = _closure1_slot8;
            var11 = _closure1_slot5;
            var10 = {};
            var13 = var15.section;
            var10['style'] = var13;
            var13 = {};
            var15 = var15.logContainer;
            var13['style'] = var15;
            var15 = var16.map;
            var14 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var8 = arg1;
                    var5 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {};
                    var1 = 'text-xs/normal';
                    var2['variant'] = var1;
                    var1 = _closure2_slot0;
                    var1 = var1.logEntry;
                    var2['style'] = var1;
                    var6 = var8.timestamp;
                    var1 = ['['];
                    var1[1] = var6;
                    var6 = '] ';
                    var1[2] = var6;
                    var6 = var8.message;
                    var1[3] = var6;
                    var7 = var8.data;
                    var6 = null;
                    var6 = var6 != var7;
                    if(!var6) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                    var7 = global;
                    var10 = var7.JSON;
                    var9 = var10.stringify;
                    var8 = var8.data;
                    var9 = var9.bind(var10)(var8);
                    var7 = var7.HermesInternal;
                    var8 = var7.concat;
                    var7 = ' ';
                    var6 = var8.bind(var7)(var9);
case 50:
                    var1[4] = var6;
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var14 = var15.bind(var16)(var14);
            var13['children'] = var14;
            var13 = var12.bind(var4)(var11, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 48:
            var8[5] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['debugLogger'] = var2;
    return var1;
})();