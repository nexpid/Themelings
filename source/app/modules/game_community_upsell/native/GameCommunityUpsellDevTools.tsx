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
            var1 = _closure1_slot15;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = true;
            _closure1_slot15 = var1;
            var1 = global;
            var4 = var1.setTimeout;
            var3 = undefined;
            var2 = function() {
                var2 = false;
                _closure1_slot15 = var2;
                var3 = _closure1_slot14;
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
    var _closure1_slot17 = var1;
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
            var4 = _closure1_slot13;
            var3 = var4.push;
            var2 = {};
            var2['timestamp'] = var5;
            var5 = arg1;
            var2['message'] = var5;
            var5 = arg2;
            var2['data'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot13;
            var3 = var2.length;
            var2 = 50;
            if(!(var3 > var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot13;
            var3 = var4.slice;
            var2 = -50;
            var2 = var3.bind(var4)(var2);
            _closure1_slot13 = var2;
case 4:
            var2 = _closure1_slot17;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function MultiGuildDevTools() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot16;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var2 = var7[var1];
            var8 = var6.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getUserAgnosticState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var8)(var3, var2);
            var _closure2_slot0 = var2;
            var1 = var7[var1];
            var5 = var6.bind(var4)(var1);
            var3 = var5.useStateFromStoresObject;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot9;
                var3 = var4.getPresentableUpsellGuilds;
                var3 = var3.bind(var4)();
                var3 = var3.length;
                var1['guildsCount'] = var3;
                var4 = _closure1_slot9;
                var3 = var4.getDismissedGuildIds;
                var3 = var3.bind(var4)();
                var3 = var3.size;
                var1['dismissedCount'] = var3;
                var3 = _closure1_slot9;
                var2 = var3.getLastFetchedAt;
                var2 = var2.bind(var3)();
                var1['lastFetchedAt'] = var2;
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var30 = var1.guildsCount;
            var29 = var1.dismissedCount;
            var3 = var1.lastFetchedAt;
            var28 = global;
            var5 = var28.Object;
            var2 = var5.entries;
            var1 = 11;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.DETECTABLE_GAME_TO_APPLICATION_ID_MAP;
            var5 = var2.bind(var5)(var1);
            var2 = var5.map;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var1 = var6[Symbol.iterator];
                    var6 = var1().next;
                    var4 = var6().value;
                    var3 = var1;
                    var2 = undefined;
                    var3 = var3 === var2;
                    var5 = undefined;
                    if(var3) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var5 = var4;
case 6:
                    var4 = undefined;
                    if(var3) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var7 = var6().value;
                    var6 = var1;
                    var6 = var6 === var2;
                    var4 = undefined;
                    var3 = var6;
                    if(var6) { _fun0004_ip = 8; continue _fun0004 }
case 10:
                    var4 = var7;
                    var3 = var6;
case 8:
                    if(var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var1.return();
case 11:
                    var1 = _closure2_slot0;
                    var1 = var1.apps;
                    var3 = var1[var5];
                    var1 = {};
                    var1['detectableAppName'] = var5;
                    var1['gameId'] = var4;
                    var4 = null;
                    var5 = var4 == var3;
                    var6 = undefined;
                    if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var6 = var3.detected;
case 13:
                    var5 = var4 != var6;
                    if(!var5) { _fun0004_ip = 15; continue _fun0004 }
case 4:
                    var5 = var6;
case 15:
                    var1['detected'] = var5;
                    var4 = var4 == var3;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var2 = var3.lastScannedAt;
case 16:
                    var1['lastScannedAt'] = var2;
                    return var1;
                }
            };
            var18 = var2.bind(var5)(var1);
            var17 = 0;
            var1 = var3 > var17;
            var27 = 'Never';
            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = var28.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var33 = var2;
            var32 = var3;
            var1 = new var33[var1](var32, var31);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = var2.toLocaleTimeString;
            var3 = var1.bind(var2)();
            var1 = var28.HermesInternal;
            var2 = var1.concat;
            var1 = '';
            var27 = var2.bind(var1)(var3);
case 18:
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.DEV_resetState;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot9;
                var2 = var3.DEV_clearFetchCache;
                var2 = var2.bind(var3)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var2 = var6[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var2);
                var3 = var4.detectLocalApps;
                var2 = 13;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.ALL_DETECTABLE_APP_NAMES;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var19 = var3.bind(var5)(var2, var1);
            var _closure2_slot1 = var19;
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var13.container;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var13.scrollView;
            var5['style'] = var8;
            var10 = _closure1_slot10;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var13.section;
            var8['style'] = var11;
            var15 = _closure1_slot10;
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = 14;
            var11 = var11[var12];
            var11 = var14.bind(var4)(var11);
            var14 = var11.TableRowGroup;
            var11 = {};
            var16 = 'Detected Apps';
            var11['title'] = var16;
            var16 = var18.length;
            if(!(var17 !== var16)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var17 = var18.map;
            var16 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.TableRow;
                    var2 = {};
                    var6 = var1.detectableAppName;
                    var2['label'] = var6;
                    var11 = var1.gameId;
                    var6 = var1.detected;
                    var10 = 'Not detected';
                    if(!var6) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var10 = 'Detected';
case 22:
                    var7 = var1.lastScannedAt;
                    var6 = null;
                    var6 = var6 != var7;
                    var9 = '';
                    if(!var6) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var6 = global;
                    var12 = var6.Date;
                    var16 = var1.lastScannedAt;
                    var8 = var12.prototype;
                    var8 = Object.create(var8, {constructor: {value: var12}});
                    var17 = var8;
                    var7 = new var17[var12](var16, var15);
                    var8 = var7 instanceof Object ? var7 : var8;
                    var7 = var8.toLocaleTimeString;
                    var12 = var7.bind(var8)();
                    var6 = var6.HermesInternal;
                    var8 = var6.concat;
                    var7 = ' (scanned ';
                    var6 = ')';
                    var9 = var8.bind(var7)(var12, var6);
case 24:
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var8 = var6.concat;
                    var17 = 'Game ID: ';
                    var15 = ' — ';
                    var16 = var11;
                    var14 = var10;
                    var13 = var9;
                    var6 = var17[var8](var16, var15, var14, var13, var12);
                    var2['subLabel'] = var6;
                    var6 = true;
                    var2['disabled'] = var6;
                    var1 = var1.detectableAppName;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var16 = var17.bind(var18)(var16);
            _fun0003_ip = 26; continue _fun0003;
case 20:
            var20 = _closure1_slot10;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = 15;
            var17 = var22[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.TableRow;
            var17 = {'label': 'No games configured', 'subLabel': 'MULTI_GUILD_GAME_CONFIGS is empty', 'disabled': true};
            var16 = var20.bind(var4)(var18, var17);
case 26:
            var11['children'] = var16;
            var11 = var15.bind(var4)(var14, var11);
            var8['children'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot5;
            var9 = {};
            var14 = var13.section;
            var9['style'] = var14;
            var17 = _closure1_slot11;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = var22[var12];
            var14 = var20.bind(var4)(var14);
            var15 = var14.TableRowGroup;
            var14 = {};
            var16 = 'Store State';
            var14['title'] = var16;
            var25 = _closure1_slot10;
            var16 = 15;
            var18 = var22[var16];
            var18 = var20.bind(var4)(var18);
            var23 = var18.TableRow;
            var18 = {'label': 'Presentable Guilds', 'subLabel': null, 'disabled': true};
            var26 = var28.String;
            var26 = var26.bind(var4)(var30);
            var18['subLabel'] = var26;
            var23 = var25.bind(var4)(var23, var18);
            var18 = new Array(3);
            var18[0] = var23;
            var26 = _closure1_slot10;
            var23 = var22[var16];
            var23 = var20.bind(var4)(var23);
            var25 = var23.TableRow;
            var23 = {'label': 'Dismissed Guilds', 'subLabel': null, 'disabled': true};
            var28 = var28.String;
            var28 = var28.bind(var4)(var29);
            var23['subLabel'] = var28;
            var23 = var26.bind(var4)(var25, var23);
            var18[1] = var23;
            var26 = _closure1_slot10;
            var23 = var22[var16];
            var23 = var20.bind(var4)(var23);
            var25 = var23.TableRow;
            var23 = {'label': 'Last Fetched', 'subLabel': null, 'disabled': true};
            var23['subLabel'] = var27;
            var23 = var26.bind(var4)(var25, var23);
            var18[2] = var23;
            var14['children'] = var18;
            var14 = var17.bind(var4)(var15, var14);
            var9['children'] = var14;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot5;
            var9 = {};
            var13 = var13.section;
            var9['style'] = var13;
            var14 = _closure1_slot11;
            var12 = var22[var12];
            var12 = var20.bind(var4)(var12);
            var13 = var12.TableRowGroup;
            var12 = {};
            var15 = 'Actions';
            var12['title'] = var15;
            var18 = _closure1_slot10;
            var15 = var22[var16];
            var15 = var20.bind(var4)(var15);
            var17 = var15.TableRow;
            var15 = {'label': 'Refresh Upsell Guilds', 'subLabel': 'Redects games and suggested guilds'};
            var15['onPress'] = var19;
            var26 = _closure1_slot10;
            var23 = 16;
            var19 = var22[var23];
            var19 = var20.bind(var4)(var19);
            var25 = var19.RefreshIcon;
            var19 = {};
            var19 = var26.bind(var4)(var25, var19);
            var15['icon'] = var19;
            var27 = _closure1_slot10;
            var19 = 17;
            var25 = var22[var19];
            var25 = var20.bind(var4)(var25);
            var26 = var25.TableRowArrow;
            var25 = {};
            var25 = var27.bind(var4)(var26, var25);
            var15['trailing'] = var25;
            var17 = var18.bind(var4)(var17, var15);
            var15 = new Array(3);
            var15[0] = var17;
            var25 = _closure1_slot10;
            var17 = var22[var16];
            var17 = var20.bind(var4)(var17);
            var18 = var17.TableRow;
            var17 = {'label': 'Clear Dismissed Guilds', 'subLabel': 'Reset dismissed guild IDs so all guilds show again'};
            var26 = function onPress() {
                var2 = _closure1_slot9;
                var1 = var2.DEV_clearDismissedGuilds;
                var1 = var1.bind(var2)();
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var17['onPress'] = var26;
            var28 = _closure1_slot10;
            var26 = var22[var23];
            var26 = var20.bind(var4)(var26);
            var27 = var26.RefreshIcon;
            var26 = {};
            var26 = var28.bind(var4)(var27, var26);
            var17['icon'] = var26;
            var28 = _closure1_slot10;
            var26 = var22[var19];
            var26 = var20.bind(var4)(var26);
            var27 = var26.TableRowArrow;
            var26 = {};
            var26 = var28.bind(var4)(var27, var26);
            var17['trailing'] = var26;
            var17 = var25.bind(var4)(var18, var17);
            var15[1] = var17;
            var18 = _closure1_slot10;
            var16 = var22[var16];
            var16 = var20.bind(var4)(var16);
            var17 = var16.TableRow;
            var16 = {'label': 'Reset Upsell Animation', 'subLabel': 'Clear the dismissed state for the create button NUX animation so it can replay'};
            var24 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 18;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.removeDismissedContent;
                var2 = 19;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.MOBILE_MULTI_GUILD_CREATE_UPSELL_ANIMATION;
                var2 = var5.bind(var6)(var2);
                var2 = 20;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.resetDismissibleContentFrameworkStore;
                var2 = var2.bind(var3)();
                return var1;
            };
            var16['onPress'] = var24;
            var25 = _closure1_slot10;
            var23 = var22[var23];
            var23 = var20.bind(var4)(var23);
            var24 = var23.RefreshIcon;
            var23 = {};
            var23 = var25.bind(var4)(var24, var23);
            var16['icon'] = var23;
            var21 = _closure1_slot10;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.TableRowArrow;
            var19 = {};
            var19 = var21.bind(var4)(var20, var19);
            var16['trailing'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[2] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function SingleGuildDevTools() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = _closure1_slot16;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var _closure2_slot0 = var17;
            var3 = _closure1_slot4;
            var2 = var3.useState;
            var1 = new Array(0);
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot3;
            var3 = 2;
            var1 = var1.bind(var4)(var2, var3);
            var10 = 0;
            var24 = var1[var10];
            var28 = 1;
            var1 = var1[var28];
            var _closure2_slot1 = var1;
            var5 = _closure1_slot4;
            var2 = var5.useState;
            var1 = true;
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var2, var3);
            var9 = var1[var10];
            var1 = var1[var28];
            var _closure2_slot2 = var1;
            var5 = _closure1_slot4;
            var2 = var5.useState;
            var1 = new Array(0);
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var2, var3);
            var34 = var1[var10];
            var1 = var1[var28];
            var _closure2_slot3 = var1;
            var5 = _closure1_slot4;
            var2 = var5.useState;
            var1 = _closure1_slot13;
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var2, var3);
            var18 = var1[var10];
            var1 = var1[var28];
            var _closure2_slot4 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var5 = var3[var1];
            var8 = var2.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure1_slot8;
                var1 = var2.isDebugMode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var38 = var7.bind(var8)(var6, var5);
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getShownGameIds;
                var1 = var1.bind(var2)();
                var1 = var1.size;
                return var1;
            };
            var41 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot4;
            var3 = var5.useEffect;
            var2 = function() {
                var4 = function listener() {
                    var3 = _closure2_slot4;
                    var6 = _closure1_slot13;
                    var2 = new Array(0);
                    var5 = 0;
                    var7 = var2;
                    var1 = arraySpread(var7, var6, var5);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure3_slot0 = var4;
                var3 = _closure1_slot14;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
                var1 = function() {
                    var4 = _closure1_slot14;
                    var3 = var4.filter;
                    var1 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    _closure1_slot14 = var1;
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure2_slot2;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 21;
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
            var25 = var3.bind(var5)(var2, var1);
            var _closure2_slot5 = var25;
            var5 = _closure1_slot4;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var25;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 22;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isAndroid;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0007_ip = 27; continue _fun0007 }
case 28:
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
case 27:
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.forceShowUpsell;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var37 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.resetState;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.invalidateInstalledGamesCache;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var35 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function(arg1) {
                var3 = _closure1_slot8;
                var2 = var3.setDebugMode;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = new Array(0);
            var30 = var3.bind(var5)(var2, var1);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = function() {
                var2 = new Array(0);
                _closure1_slot13 = var2;
                var2 = _closure1_slot17;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = new Array(0);
            var27 = var3.bind(var5)(var2, var1);
            var2 = var24.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isInstalled;
                return var1;
            };
            var1 = var2.bind(var24)(var1);
            var36 = var1.length;
            var32 = 'Checking...';
            if(var9) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var2 = var36 > var10;
            var1 = 'No supported games detected';
            if(!var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var7 = 's';
            if(!(var28 === var36)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var7 = '';
case 33:
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var46 = '';
            var44 = ' game';
            var42 = ' detected';
            var45 = var36;
            var43 = var7;
            var1 = var46[var6](var45, var44, var43, var42, var41);
case 31:
            var32 = var1;
case 29:
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var17.container;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var17.scrollView;
            var5['style'] = var8;
            var12 = _closure1_slot10;
            var11 = _closure1_slot5;
            var8 = {};
            var14 = var17.section;
            var8['style'] = var14;
            var21 = _closure1_slot11;
            var26 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = 14;
            var15 = var23[var14];
            var15 = var26.bind(var4)(var15);
            var19 = var15.TableRowGroup;
            var15 = {};
            var20 = 'Game Community Upsell';
            var15['title'] = var20;
            var31 = _closure1_slot10;
            var20 = 15;
            var22 = var23[var20];
            var22 = var26.bind(var4)(var22);
            var29 = var22.TableRow;
            var22 = {'label': 'Installed Games', 'subLabel': null, 'disabled': true};
            var22['subLabel'] = var32;
            var29 = var31.bind(var4)(var29, var22);
            var22 = new Array(6);
            var22[0] = var29;
            var29 = _closure1_slot10;
            var23 = var23[var20];
            var23 = var26.bind(var4)(var23);
            var26 = var23.TableRow;
            var23 = {'label': 'Games Shown to User', 'subLabel': null, 'disabled': true};
            var40 = 's';
            if(!(var28 === var41)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var40 = '';
case 35:
            var28 = global;
            var31 = var28.HermesInternal;
            var39 = var31.concat;
            var31 = '';
            var44 = ' game';
            var42 = ' already shown';
            var46 = var31;
            var45 = var41;
            var43 = var40;
            var32 = var46[var39](var45, var44, var43, var42, var41);
            var23['subLabel'] = var32;
            var23 = var29.bind(var4)(var26, var23);
            var22[1] = var23;
            var29 = _closure1_slot10;
            var33 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = 25;
            var23 = var32[var23];
            var23 = var33.bind(var4)(var23);
            var26 = var23.TableSwitchRow;
            var23 = {'label': 'Debug Mode', 'subLabel': 'Bypasses single-use check to allow repeated testing'};
            var23['value'] = var38;
            var23['onValueChange'] = var30;
            var23 = var29.bind(var4)(var26, var23);
            var22[2] = var23;
            var30 = _closure1_slot10;
            var23 = var32[var20];
            var23 = var33.bind(var4)(var23);
            var29 = var23.TableRow;
            var23 = {'label': 'Re-run Detection', 'subLabel': 'Check for installed games again'};
            var23['onPress'] = var25;
            var39 = _closure1_slot10;
            var25 = 16;
            var26 = var32[var25];
            var26 = var33.bind(var4)(var26);
            var38 = var26.RefreshIcon;
            var26 = {};
            var26 = var39.bind(var4)(var38, var26);
            var23['icon'] = var26;
            var40 = _closure1_slot10;
            var26 = 17;
            var38 = var32[var26];
            var38 = var33.bind(var4)(var38);
            var39 = var38.TableRowArrow;
            var38 = {};
            var38 = var40.bind(var4)(var39, var38);
            var23['trailing'] = var38;
            var23 = var30.bind(var4)(var29, var23);
            var22[3] = var23;
            var30 = _closure1_slot10;
            var23 = var32[var20];
            var23 = var33.bind(var4)(var23);
            var29 = var23.TableRow;
            var23 = {'label': 'Force Show Upsell', 'subLabel': 'Bypasses all checks and shows the upsell immediately with the highest priority detected game'};
            var23['onPress'] = var37;
            var39 = _closure1_slot10;
            var37 = 26;
            var37 = var32[var37];
            var37 = var33.bind(var4)(var37);
            var38 = var37.PlayIcon;
            var37 = {};
            var37 = var39.bind(var4)(var38, var37);
            var23['icon'] = var37;
            var39 = _closure1_slot10;
            var37 = var32[var26];
            var37 = var33.bind(var4)(var37);
            var38 = var37.TableRowArrow;
            var37 = {};
            var37 = var39.bind(var4)(var38, var37);
            var23['trailing'] = var37;
            var23 = var30.bind(var4)(var29, var23);
            var22[4] = var23;
            var30 = _closure1_slot10;
            var23 = var32[var20];
            var23 = var33.bind(var4)(var23);
            var29 = var23.TableRow;
            var23 = {'label': 'Reset Shown Games', 'subLabel': 'Clear the list of games that have been shown to this user'};
            var23['onPress'] = var35;
            var38 = _closure1_slot10;
            var35 = var32[var25];
            var35 = var33.bind(var4)(var35);
            var37 = var35.RefreshIcon;
            var35 = {};
            var35 = var38.bind(var4)(var37, var35);
            var23['icon'] = var35;
            var35 = _closure1_slot10;
            var32 = var32[var26];
            var32 = var33.bind(var4)(var32);
            var33 = var32.TableRowArrow;
            var32 = {};
            var32 = var35.bind(var4)(var33, var32);
            var23['trailing'] = var32;
            var23 = var30.bind(var4)(var29, var23);
            var22[5] = var23;
            var15['children'] = var22;
            var15 = var21.bind(var4)(var19, var15);
            var8['children'] = var15;
            var11 = var12.bind(var4)(var11, var8);
            var8 = new Array(6);
            var8[0] = var11;
            var11 = !var9;
            if(!var11) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var19 = _closure1_slot10;
            var15 = _closure1_slot5;
            var12 = {};
            var21 = var17.section;
            var12['style'] = var21;
            var23 = _closure1_slot11;
            var35 = _closure1_slot0;
            var37 = _closure1_slot2;
            var21 = var37[var14];
            var21 = var35.bind(var4)(var21);
            var22 = var21.TableRowGroup;
            var21 = {};
            var29 = 'Detection Details';
            var21['title'] = var29;
            var32 = _closure1_slot10;
            var29 = var37[var20];
            var29 = var35.bind(var4)(var29);
            var30 = var29.TableRow;
            var29 = {'label': 'Platform', 'subLabel': null, 'disabled': true};
            var33 = 22;
            var33 = var37[var33];
            var35 = var35.bind(var4)(var33);
            var33 = var35.isAndroid;
            var35 = var33.bind(var35)();
            var33 = 'iOS';
            if(!var35) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var33 = 'Android';
case 39:
            var29['subLabel'] = var33;
            var30 = var32.bind(var4)(var30, var29);
            var29 = new Array(3);
            var29[0] = var30;
            var37 = _closure1_slot10;
            var32 = _closure1_slot0;
            var30 = _closure1_slot2;
            var33 = var30[var20];
            var33 = var32.bind(var4)(var33);
            var35 = var33.TableRow;
            var33 = {'label': 'Total Games Configured', 'subLabel': null, 'disabled': true};
            var39 = var28.String;
            var38 = 11;
            var38 = var30[var38];
            var38 = var32.bind(var4)(var38);
            var38 = var38.SUPPORTED_GAMES;
            var38 = var38.length;
            var38 = var39.bind(var4)(var38);
            var33['subLabel'] = var38;
            var33 = var37.bind(var4)(var35, var33);
            var29[1] = var33;
            var33 = _closure1_slot10;
            var30 = var30[var20];
            var30 = var32.bind(var4)(var30);
            var32 = var30.TableRow;
            var30 = {'label': 'Games Detected', 'subLabel': null, 'disabled': true};
            var35 = var28.String;
            var35 = var35.bind(var4)(var36);
            var30['subLabel'] = var35;
            var30 = var33.bind(var4)(var32, var30);
            var29[2] = var30;
            var21['children'] = var29;
            var21 = var23.bind(var4)(var22, var21);
            var12['children'] = var21;
            var11 = var19.bind(var4)(var15, var12);
case 37:
            var8[1] = var11;
            var11 = !var9;
            if(!var11) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var12 = var24.length;
            var11 = var12 > var10;
case 41:
            if(!var11) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var19 = _closure1_slot11;
            var15 = _closure1_slot5;
            var12 = {};
            var21 = var17.section;
            var12['style'] = var21;
            var23 = _closure1_slot10;
            var22 = _closure1_slot0;
            var35 = _closure1_slot2;
            var21 = 24;
            var21 = var35[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Detailed Results:'};
            var30 = var17.detailText;
            var29 = new Array(2);
            var29[0] = var30;
            var30 = {};
            var33 = _closure1_slot1;
            var32 = 9;
            var32 = var35[var32];
            var32 = var33.bind(var4)(var32);
            var32 = var32.spacing;
            var32 = var32.PX_8;
            var30['paddingBottom'] = var32;
            var29[1] = var30;
            var21['style'] = var29;
            var22 = var23.bind(var4)(var22, var21);
            var21 = new Array(2);
            var21[0] = var22;
            var23 = var24.map;
            var22 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.game;
                    var17 = var2.isInstalled;
                    var15 = var2.overridden;
                    var9 = var2.schemeResults;
                    var2 = _closure2_slot0;
                    if(var17) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                    var16 = var2.warningText;
                    _fun0008_ip = 10; continue _fun0008;
case 45:
                    var16 = var2.successText;
case 10:
                    var5 = _closure1_slot11;
                    var4 = _closure1_slot5;
                    var3 = {};
                    var14 = _closure2_slot0;
                    var2 = var14.detailsContainer;
                    var3['style'] = var2;
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var13 = 24;
                    var6 = var2[var13];
                    var2 = undefined;
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.Text;
                    var6 = {};
                    var12 = 'text-xs/normal';
                    var6['variant'] = var12;
                    var18 = var14.detailText;
                    var14 = new Array(2);
                    var14[0] = var18;
                    var14[1] = var16;
                    var6['style'] = var14;
                    var16 = var1.name;
                    var14 = new Array(4);
                    var14[0] = var16;
                    var16 = ' - ';
                    var14[1] = var16;
                    var16 = 'NOT INSTALLED';
                    if(!var17) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var16 = 'INSTALLED';
case 47:
                    var14[2] = var16;
                    if(!var15) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                    var15 = ' (DEBUG OVERRIDE)';
case 49:
                    var14[3] = var15;
                    var6['children'] = var14;
                    var7 = var8.bind(var2)(var7, var6);
                    var6 = new Array(5);
                    var6[0] = var7;
                    var16 = _closure1_slot11;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var14 = var7[var13];
                    var14 = var8.bind(var2)(var14);
                    var15 = var14.Text;
                    var14 = {};
                    var14['variant'] = var12;
                    var11 = _closure2_slot0;
                    var17 = var11.detailText;
                    var14['style'] = var17;
                    var18 = var1.id;
                    var17 = ['ID: '];
                    var17[1] = var18;
                    var14['children'] = var17;
                    var14 = var16.bind(var2)(var15, var14);
                    var6[1] = var14;
                    var16 = _closure1_slot11;
                    var14 = var7[var13];
                    var14 = var8.bind(var2)(var14);
                    var15 = var14.Text;
                    var14 = {};
                    var14['variant'] = var12;
                    var17 = var11.detailText;
                    var14['style'] = var17;
                    var18 = var1.guildName;
                    var17 = ['Guild: '];
                    var17[1] = var18;
                    var18 = ' (';
                    var17[2] = var18;
                    var18 = var1.guildId;
                    var17[3] = var18;
                    var18 = ')';
                    var17[4] = var18;
                    var14['children'] = var17;
                    var14 = var16.bind(var2)(var15, var14);
                    var6[2] = var14;
                    var10 = _closure1_slot11;
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
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var1 = arg1;
                            var5 = var1.scheme;
                            var2 = var1.isInstalled;
                            var12 = var1.error;
                            var1 = null;
                            var7 = var1 !== var12;
                            var16 = 'ERROR';
                            if(var7) { _fun0009_ip = 10; continue _fun0009 }
case 51:
                            var1 = 'NOT FOUND';
                            if(!var2) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                            var1 = 'FOUND';
case 52:
                            var16 = var1;
case 10:
                            var1 = _closure2_slot0;
                            if(var7) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                            if(var2) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                            var17 = var1.warningText;
                            _fun0009_ip = 58; continue _fun0009;
case 56:
                            var17 = var1.successText;
case 58:
                            _fun0009_ip = 59; continue _fun0009;
case 54:
                            var17 = var1.errorText;
case 59:
                            var4 = _closure1_slot11;
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var14 = 24;
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
                            var15 = _closure1_slot10;
                            var9 = var9[var14];
                            var9 = var10.bind(var3)(var9);
                            var10 = var9.Text;
                            var9 = {};
                            var9['variant'] = var13;
                            var9['style'] = var17;
                            var9['children'] = var16;
                            var9 = var15.bind(var3)(var10, var9);
                            var6[5] = var9;
                            if(!var7) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                            var10 = _closure1_slot11;
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
case 60:
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
            var22 = var23.bind(var24)(var22);
            var21[1] = var22;
            var12['children'] = var21;
            var11 = var19.bind(var4)(var15, var12);
case 43:
            var8[2] = var11;
            var9 = !var9;
            if(!var9) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 22;
            var11 = var15[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.isAndroid;
            var11 = var11.bind(var12)();
            var9 = !var11;
case 62:
            if(!var9) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var11 = var34.length;
            var9 = var11 > var10;
case 64:
            if(!var9) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            var15 = _closure1_slot11;
            var12 = _closure1_slot5;
            var11 = {};
            var19 = var17.section;
            var11['style'] = var19;
            var22 = _closure1_slot10;
            var30 = _closure1_slot0;
            var37 = _closure1_slot2;
            var29 = 24;
            var19 = var37[var29];
            var19 = var30.bind(var4)(var19);
            var21 = var19.Text;
            var19 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Info.plist Validation:'};
            var24 = var17.detailText;
            var23 = new Array(2);
            var23[0] = var24;
            var24 = {};
            var36 = _closure1_slot1;
            var35 = 9;
            var32 = var37[var35];
            var32 = var36.bind(var4)(var32);
            var32 = var32.spacing;
            var32 = var32.PX_8;
            var24['paddingBottom'] = var32;
            var23[1] = var24;
            var19['style'] = var23;
            var21 = var22.bind(var4)(var21, var19);
            var19 = new Array(2);
            var19[0] = var21;
            var23 = _closure1_slot11;
            var22 = _closure1_slot5;
            var21 = {};
            var24 = var17.detailsContainer;
            var21['style'] = var24;
            var33 = _closure1_slot10;
            var24 = var37[var29];
            var24 = var30.bind(var4)(var24);
            var32 = var24.Text;
            var24 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Expected LSApplicationQueriesSchemes:'};
            var38 = var17.detailText;
            var24['style'] = var38;
            var32 = var33.bind(var4)(var32, var24);
            var24 = new Array(3);
            var24[0] = var32;
            var33 = var34.map;
            var32 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 24;
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
            var32 = var33.bind(var34)(var32);
            var24[1] = var32;
            var32 = _closure1_slot10;
            var29 = var37[var29];
            var29 = var30.bind(var4)(var29);
            var30 = var29.Text;
            var29 = {'variant': 'text-xs/normal', 'style': null, 'children': 'Check discord_ios/iOS/Info.plist to verify these schemes are present.'};
            var34 = var17.detailText;
            var33 = new Array(2);
            var33[0] = var34;
            var34 = {};
            var35 = var37[var35];
            var35 = var36.bind(var4)(var35);
            var35 = var35.spacing;
            var35 = var35.PX_8;
            var34['paddingTop'] = var35;
            var33[1] = var34;
            var29['style'] = var33;
            var29 = var32.bind(var4)(var30, var29);
            var24[2] = var29;
            var21['children'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var19[1] = var21;
            var11['children'] = var19;
            var9 = var15.bind(var4)(var12, var11);
case 66:
            var8[3] = var9;
            var12 = _closure1_slot10;
            var11 = _closure1_slot5;
            var9 = {};
            var15 = var17.section;
            var9['style'] = var15;
            var19 = _closure1_slot10;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = var23[var14];
            var14 = var24.bind(var4)(var14);
            var15 = var14.TableRowGroup;
            var14 = {};
            var21 = 'Debug Logs';
            var14['title'] = var21;
            var22 = _closure1_slot10;
            var20 = var23[var20];
            var20 = var24.bind(var4)(var20);
            var21 = var20.TableRow;
            var20 = {};
            var29 = 'Clear Logs';
            var20['label'] = var29;
            var30 = var18.length;
            var28 = var28.HermesInternal;
            var29 = var28.concat;
            var28 = ' log entries';
            var28 = var29.bind(var31)(var30, var28);
            var20['subLabel'] = var28;
            var20['onPress'] = var27;
            var28 = _closure1_slot10;
            var25 = var23[var25];
            var25 = var24.bind(var4)(var25);
            var27 = var25.RefreshIcon;
            var25 = {};
            var25 = var28.bind(var4)(var27, var25);
            var20['icon'] = var25;
            var25 = _closure1_slot10;
            var23 = var23[var26];
            var23 = var24.bind(var4)(var23);
            var24 = var23.TableRowArrow;
            var23 = {};
            var23 = var25.bind(var4)(var24, var23);
            var20['trailing'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var14['children'] = var20;
            var14 = var19.bind(var4)(var15, var14);
            var9['children'] = var14;
            var9 = var12.bind(var4)(var11, var9);
            var8[4] = var9;
            var9 = var18.length;
            var9 = var9 > var10;
            if(!var9) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var12 = _closure1_slot10;
            var11 = _closure1_slot5;
            var10 = {};
            var14 = var17.section;
            var10['style'] = var14;
            var15 = _closure1_slot10;
            var14 = _closure1_slot5;
            var13 = {};
            var17 = var17.logContainer;
            var13['style'] = var17;
            var17 = var18.map;
            var16 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var8 = arg1;
                    var5 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 24;
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
                    if(!var6) { _fun0010_ip = 70; continue _fun0010 }
case 15:
                    var7 = global;
                    var10 = var7.JSON;
                    var9 = var10.stringify;
                    var8 = var8.data;
                    var9 = var9.bind(var10)(var8);
                    var7 = var7.HermesInternal;
                    var8 = var7.concat;
                    var7 = ' ';
                    var6 = var8.bind(var7)(var9);
case 70:
                    var1[4] = var6;
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var16 = var17.bind(var18)(var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 68:
            var8[5] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
    var2 = var12.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot10 = var5;
    var2 = var2.jsxs;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var7[var2];
    var8 = var12.bind(var1)(var2);
    var2 = var8.prototype;
    var5 = Object.create(var2, {constructor: {value: var8}});
    var17 = 'GameCommunityUpsell';
    var18 = var5;
    var2 = new var18[var8](var17, var16);
    var2 = var2 instanceof Object ? var2 : var5;
    var _closure1_slot12 = var2;
    var2 = new Array(0);
    var _closure1_slot13 = var2;
    var2 = new Array(0);
    var _closure1_slot14 = var2;
    var2 = false;
    var _closure1_slot15 = var2;
    var2 = {};
    var5 = function log(arg1, arg2) {
        var4 = arg1;
        var3 = arg2;
        var5 = _closure1_slot12;
        var2 = var5.log;
        var2 = var2.bind(var5)(var4, var3);
        var2 = _closure1_slot18;
        var1 = undefined;
        var2 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var2['log'] = var5;
    var5 = function error(arg1, arg2) {
        var5 = arg1;
        var4 = arg2;
        var3 = _closure1_slot12;
        var2 = var3.error;
        var2 = var2.bind(var3)(var5, var4);
        var3 = _closure1_slot18;
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
        var3 = _closure1_slot12;
        var2 = var3.warn;
        var2 = var2.bind(var3)(var5, var4);
        var3 = _closure1_slot18;
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
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 9;
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
    var _closure1_slot16 = var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_community_upsell/native/GameCommunityUpsellDevTools.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GameCommunityUpsellDevTools() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 27;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var5 = var2.GameCommunityUpsellMultiExperiment;
            var3 = var5.useConfig;
            var2 = {};
            var6 = 'GameCommunityUpsellDevTools';
            var2['location'] = var6;
            var2 = var3.bind(var5)(var2);
            var2 = var2.enabled;
            var3 = _closure1_slot10;
            if(var2) { _fun0011_ip = 56; continue _fun0011 }
case 71:
            var2 = _closure1_slot20;
            _fun0011_ip = 72; continue _fun0011;
case 56:
            var2 = _closure1_slot19;
case 72:
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['debugLogger'] = var2;
    return var1;
})();