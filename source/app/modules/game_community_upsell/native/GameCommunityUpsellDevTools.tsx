// app/modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
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
    var _closure1_slot15 = var1;
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
            var2 = _closure1_slot15;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var13 = 1;
    var5 = var7[var13];
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
    var2 = var12.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot8 = var5;
    var2 = var2.jsxs;
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var7[var2];
    var8 = var12.bind(var1)(var2);
    var2 = var8.prototype;
    var5 = Object.create(var2, {constructor: {value: var8}});
    var17 = 'GameCommunityUpsell';
    var18 = var5;
    var2 = new var18[var8](var17, var16);
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
        var2 = _closure1_slot16;
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
        var3 = _closure1_slot16;
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
        var3 = _closure1_slot16;
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
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 7;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var14;
    var10['flex'] = var13;
    var5['container'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var5['scrollView'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingTop'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['paddingBottom'] = var13;
    var5['section'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['paddingVertical'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var13;
    var5['detailsContainer'] = var10;
    var10 = {'fontSize': 12, 'lineHeight': 16, 'color': null, 'fontFamily': 'ggmono-400-normal'};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_STRONG;
    var10['color'] = var13;
    var5['detailText'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_FEEDBACK_CRITICAL;
    var10['color'] = var13;
    var5['errorText'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_FEEDBACK_POSITIVE;
    var10['color'] = var13;
    var5['successText'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_FEEDBACK_WARNING;
    var10['color'] = var13;
    var5['warningText'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['paddingVertical'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var10['backgroundColor'] = var13;
    var5['logContainer'] = var10;
    var10 = {'fontSize': 11, 'lineHeight': 14, 'color': null, 'fontFamily': 'ggmono-400-normal', 'marginBottom': 4};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var10['color'] = var11;
    var5['logEntry'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot14 = var5;
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
            var28 = var1[var11];
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
            var36 = var1[var11];
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
            var2 = 8;
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
            var33 = var12.bind(var13)(var8, var7);
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
                var2 = 9;
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
            var23 = var3.bind(var5)(var2, var1);
            var _closure2_slot5 = var23;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var23;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isAndroid;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 11;
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
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.forceShowUpsell;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var32 = var3.bind(var5)(var2, var1);
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.resetState;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.invalidateInstalledGamesCache;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var31 = var3.bind(var5)(var2, var1);
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
            var24 = var3.bind(var5)(var2, var1);
            var3 = var5.useCallback;
            var2 = function() {
                var2 = new Array(0);
                _closure1_slot11 = var2;
                var2 = _closure1_slot15;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = new Array(0);
            var25 = var3.bind(var5)(var2, var1);
            var2 = var28.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isInstalled;
                return var1;
            };
            var1 = var2.bind(var28)(var1);
            var35 = var1.length;
            var27 = 'Checking...';
            if(var9) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var2 = var35 > var11;
            var1 = 'No supported games detected';
            if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var7 = 's';
            if(!(var22 === var35)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var7 = '';
case 12:
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var44 = '';
            var42 = ' game';
            var40 = ' detected';
            var43 = var35;
            var41 = var7;
            var1 = var44[var6](var43, var42, var41, var40, var39);
case 10:
            var27 = var1;
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
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var17 = 14;
            var12 = var20[var17];
            var12 = var21.bind(var4)(var12);
            var13 = var12.TableRowGroup;
            var12 = {};
            var18 = 'Game Community Upsell';
            var12['title'] = var18;
            var19 = 15;
            var18 = var20[var19];
            var18 = var21.bind(var4)(var18);
            var26 = var18.TableRow;
            var18 = {'label': 'Installed Games', 'subLabel': null, 'disabled': true};
            var18['subLabel'] = var27;
            var26 = var3.bind(var4)(var26, var18);
            var18 = new Array(6);
            var18[0] = var26;
            var20 = var20[var19];
            var20 = var21.bind(var4)(var20);
            var21 = var20.TableRow;
            var20 = {'label': 'Games Shown to User', 'subLabel': null, 'disabled': true};
            var34 = 's';
            if(!(var22 === var37)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var34 = '';
case 14:
            var26 = global;
            var22 = var26.HermesInternal;
            var30 = var22.concat;
            var29 = '';
            var42 = ' game';
            var40 = ' already shown';
            var44 = var29;
            var43 = var37;
            var41 = var34;
            var22 = var44[var30](var43, var42, var41, var40, var39);
            var20['subLabel'] = var22;
            var20 = var3.bind(var4)(var21, var20);
            var18[1] = var20;
            var22 = _closure1_slot8;
            var30 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = 16;
            var20 = var27[var20];
            var20 = var30.bind(var4)(var20);
            var21 = var20.TableSwitchRow;
            var20 = {'label': 'Debug Mode', 'subLabel': 'Bypasses single-use check to allow repeated testing'};
            var20['value'] = var33;
            var20['onValueChange'] = var24;
            var20 = var22.bind(var4)(var21, var20);
            var18[2] = var20;
            var20 = var27[var19];
            var20 = var30.bind(var4)(var20);
            var21 = var20.TableRow;
            var20 = {'label': 'Re-run Detection', 'subLabel': 'Check for installed games again'};
            var20['onPress'] = var23;
            var24 = 17;
            var23 = var27[var24];
            var23 = var30.bind(var4)(var23);
            var33 = var23.RefreshIcon;
            var23 = {};
            var23 = var22.bind(var4)(var33, var23);
            var20['icon'] = var23;
            var23 = 18;
            var33 = var27[var23];
            var33 = var30.bind(var4)(var33);
            var34 = var33.TableRowArrow;
            var33 = {};
            var33 = var22.bind(var4)(var34, var33);
            var20['trailing'] = var33;
            var20 = var22.bind(var4)(var21, var20);
            var18[3] = var20;
            var20 = var27[var19];
            var20 = var30.bind(var4)(var20);
            var21 = var20.TableRow;
            var20 = {'label': 'Force Show Upsell', 'subLabel': 'Bypasses all checks and shows the upsell immediately with the highest priority detected game'};
            var20['onPress'] = var32;
            var32 = 19;
            var32 = var27[var32];
            var32 = var30.bind(var4)(var32);
            var33 = var32.PlayIcon;
            var32 = {};
            var32 = var22.bind(var4)(var33, var32);
            var20['icon'] = var32;
            var32 = var27[var23];
            var32 = var30.bind(var4)(var32);
            var33 = var32.TableRowArrow;
            var32 = {};
            var32 = var22.bind(var4)(var33, var32);
            var20['trailing'] = var32;
            var20 = var22.bind(var4)(var21, var20);
            var18[4] = var20;
            var20 = var27[var19];
            var20 = var30.bind(var4)(var20);
            var21 = var20.TableRow;
            var20 = {'label': 'Reset Shown Games', 'subLabel': 'Clear the list of games that have been shown to this user'};
            var20['onPress'] = var31;
            var31 = var27[var24];
            var31 = var30.bind(var4)(var31);
            var32 = var31.RefreshIcon;
            var31 = {};
            var31 = var22.bind(var4)(var32, var31);
            var20['icon'] = var31;
            var27 = var27[var23];
            var27 = var30.bind(var4)(var27);
            var30 = var27.TableRowArrow;
            var27 = {};
            var27 = var22.bind(var4)(var30, var27);
            var20['trailing'] = var27;
            var20 = var22.bind(var4)(var21, var20);
            var18[5] = var20;
            var12['children'] = var18;
            var12 = var7.bind(var4)(var13, var12);
            var8['children'] = var12;
            var12 = var3.bind(var4)(var2, var8);
            var8 = new Array(6);
            var8[0] = var12;
            var12 = !var9;
            if(!var12) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var20 = _closure1_slot8;
            var18 = _closure1_slot5;
            var13 = {};
            var21 = var15.section;
            var13['style'] = var21;
            var27 = _closure1_slot9;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var21 = var34[var17];
            var21 = var33.bind(var4)(var21);
            var22 = var21.TableRowGroup;
            var21 = {};
            var30 = 'Detection Details';
            var21['title'] = var30;
            var30 = var34[var19];
            var30 = var33.bind(var4)(var30);
            var31 = var30.TableRow;
            var30 = {'label': 'Platform', 'subLabel': null, 'disabled': true};
            var32 = 10;
            var32 = var34[var32];
            var33 = var33.bind(var4)(var32);
            var32 = var33.isAndroid;
            var33 = var32.bind(var33)();
            var32 = 'iOS';
            if(!var33) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var32 = 'Android';
case 18:
            var30['subLabel'] = var32;
            var31 = var20.bind(var4)(var31, var30);
            var30 = new Array(3);
            var30[0] = var31;
            var33 = _closure1_slot8;
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var34 = var31[var19];
            var34 = var32.bind(var4)(var34);
            var37 = var34.TableRow;
            var34 = {'label': 'Total Games Configured', 'subLabel': null, 'disabled': true};
            var39 = var26.String;
            var38 = 11;
            var38 = var31[var38];
            var38 = var32.bind(var4)(var38);
            var38 = var38.SUPPORTED_GAMES;
            var38 = var38.length;
            var38 = var39.bind(var4)(var38);
            var34['subLabel'] = var38;
            var34 = var33.bind(var4)(var37, var34);
            var30[1] = var34;
            var31 = var31[var19];
            var31 = var32.bind(var4)(var31);
            var32 = var31.TableRow;
            var31 = {'label': 'Games Detected', 'subLabel': null, 'disabled': true};
            var34 = var26.String;
            var34 = var34.bind(var4)(var35);
            var31['subLabel'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var30[2] = var31;
            var21['children'] = var30;
            var21 = var27.bind(var4)(var22, var21);
            var13['children'] = var21;
            var12 = var20.bind(var4)(var18, var13);
case 16:
            var8[1] = var12;
            var12 = !var9;
            if(!var12) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var13 = var28.length;
            var12 = var13 > var11;
case 20:
            if(!var12) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var20 = _closure1_slot9;
            var18 = _closure1_slot5;
            var13 = {};
            var21 = var15.section;
            var13['style'] = var21;
            var27 = _closure1_slot8;
            var22 = _closure1_slot0;
            var34 = _closure1_slot2;
            var21 = 13;
            var21 = var34[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Detailed Results:'};
            var31 = var15.detailText;
            var30 = new Array(2);
            var30[0] = var31;
            var31 = {};
            var33 = _closure1_slot1;
            var32 = 7;
            var32 = var34[var32];
            var32 = var33.bind(var4)(var32);
            var32 = var32.spacing;
            var32 = var32.PX_8;
            var31['paddingBottom'] = var32;
            var30[1] = var31;
            var21['style'] = var30;
            var22 = var27.bind(var4)(var22, var21);
            var21 = new Array(2);
            var21[0] = var22;
            var27 = var28.map;
            var22 = function(arg1) {
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
                    var13 = 13;
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
                            var14 = 13;
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
            var22 = var27.bind(var28)(var22);
            var21[1] = var22;
            var13['children'] = var21;
            var12 = var20.bind(var4)(var18, var13);
case 22:
            var8[2] = var12;
            var9 = !var9;
            if(!var9) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 10;
            var12 = var18[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            var9 = !var12;
case 42:
            if(!var9) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var12 = var36.length;
            var9 = var12 > var11;
case 44:
            if(!var9) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var18 = _closure1_slot9;
            var13 = _closure1_slot5;
            var12 = {};
            var20 = var15.section;
            var12['style'] = var20;
            var30 = _closure1_slot8;
            var28 = _closure1_slot0;
            var35 = _closure1_slot2;
            var27 = 13;
            var20 = var35[var27];
            var20 = var28.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Info.plist Validation:'};
            var31 = var15.detailText;
            var22 = new Array(2);
            var22[0] = var31;
            var31 = {};
            var34 = _closure1_slot1;
            var33 = 7;
            var32 = var35[var33];
            var32 = var34.bind(var4)(var32);
            var32 = var32.spacing;
            var32 = var32.PX_8;
            var31['paddingBottom'] = var32;
            var22[1] = var31;
            var20['style'] = var22;
            var21 = var30.bind(var4)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var21 = {};
            var22 = var15.detailsContainer;
            var21['style'] = var22;
            var22 = var35[var27];
            var22 = var28.bind(var4)(var22);
            var31 = var22.Text;
            var22 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Expected LSApplicationQueriesSchemes:'};
            var32 = var15.detailText;
            var22['style'] = var32;
            var31 = var30.bind(var4)(var31, var22);
            var22 = new Array(3);
            var22[0] = var31;
            var32 = var36.map;
            var31 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
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
            var31 = var32.bind(var36)(var31);
            var22[1] = var31;
            var27 = var35[var27];
            var27 = var28.bind(var4)(var27);
            var28 = var27.Text;
            var27 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Check discord_ios/iOS/Info.plist to verify these schemes are present.'};
            var32 = var15.detailText;
            var31 = new Array(2);
            var31[0] = var32;
            var32 = {};
            var33 = var35[var33];
            var33 = var34.bind(var4)(var33);
            var33 = var33.spacing;
            var33 = var33.PX_8;
            var32['paddingTop'] = var33;
            var31[1] = var32;
            var27['style'] = var31;
            var27 = var30.bind(var4)(var28, var27);
            var22[2] = var27;
            var21['children'] = var22;
            var21 = var18.bind(var4)(var13, var21);
            var20[1] = var21;
            var12['children'] = var20;
            var9 = var18.bind(var4)(var13, var12);
case 46:
            var8[3] = var9;
            var13 = _closure1_slot8;
            var12 = _closure1_slot5;
            var9 = {};
            var18 = var15.section;
            var9['style'] = var18;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = var21[var17];
            var17 = var22.bind(var4)(var17);
            var18 = var17.TableRowGroup;
            var17 = {};
            var20 = 'Debug Logs';
            var17['title'] = var20;
            var19 = var21[var19];
            var19 = var22.bind(var4)(var19);
            var20 = var19.TableRow;
            var19 = {};
            var27 = 'Clear Logs';
            var19['label'] = var27;
            var28 = var16.length;
            var26 = var26.HermesInternal;
            var27 = var26.concat;
            var26 = ' log entries';
            var26 = var27.bind(var29)(var28, var26);
            var19['subLabel'] = var26;
            var19['onPress'] = var25;
            var24 = var21[var24];
            var24 = var22.bind(var4)(var24);
            var25 = var24.RefreshIcon;
            var24 = {};
            var24 = var13.bind(var4)(var25, var24);
            var19['icon'] = var24;
            var21 = var21[var23];
            var21 = var22.bind(var4)(var21);
            var22 = var21.TableRowArrow;
            var21 = {};
            var21 = var13.bind(var4)(var22, var21);
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
                    var1 = 13;
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