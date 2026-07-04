// app/modules/devtools/native/components/screens/DevToolsRevenuePlaygroundScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function dismissalPath(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var1 = null;
            if(!(var1 == var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot21;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '/';
            var1 = var3.bind(var2)(var4, var1, var7);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var12 = _closure1_slot21;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var13 = '';
            var2 = '/';
            var11 = var2;
            var10 = var7;
            var9 = var2;
            var8 = var6;
            var1 = var13[var4](var12, var11, var10, var9, var8, var7);
case 4:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function describeServerError(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 == var3;
            var4 = undefined;
            var5 = undefined;
            if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var5 = var3.status;
case 5:
            var1 = 'Forbidden (403): this account is likely not in the backend-persistence experiment; clearing also requires staff.';
            var2 = 403;
            if(!(var2 !== var5)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = global;
            var5 = var2.Error;
            var5 = var3 instanceof var5;
            if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var2.String;
            var2 = var2.bind(var4)(var3);
            _fun0002_ip = 11; continue _fun0002;
case 9:
            var2 = var3.message;
case 11:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function formatTimestamp(arg1) {
        var1 = global;
        var3 = var1.Date;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var7 = arg1;
        var8 = var2;
        var1 = new var8[var3](var7, var6);
        var5 = var1 instanceof Object ? var1 : var2;
        var2 = var5.toLocaleDateString;
        var4 = 'en-US';
        var1 = {'month': 'short', 'day': 'numeric', 'year': 'numeric'};
        var2 = var2.bind(var5)(var4, var1);
        var1 = ' ';
        var2 = var2 + var1;
        var3 = var5.toLocaleTimeString;
        var1 = {'hour': 'numeric', 'minute': '2-digit', 'hour12': true};
        var1 = var3.bind(var5)(var4, var1);
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function FriendAnniversary() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = function renderDismissalRow(arg1, arg2, arg3, arg4) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var9 = arg1;
                    var _closure3_slot0 = var9;
                    var2 = _closure1_slot12;
                    var1 = var2.getUser;
                    var2 = var1.bind(var2)(var9);
                    var1 = null;
                    var3 = var1 == var2;
                    var5 = undefined;
                    var16 = undefined;
                    if(var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var16 = var2.username;
case 12:
                    if(!(var1 == var16)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var3 = 'Unknown User (';
                    var2 = ')';
                    var16 = var4.bind(var3)(var9, var2);
case 14:
                    var _closure3_slot1 = var16;
                    var2 = _closure2_slot1;
                    var13 = var2[var9];
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var8 = var2.bind(var3)(var9);
                    var10 = var1 != var8;
                    if(!var10) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var10 = _closure2_slot2;
case 16:
                    if(!var10) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var2 = _closure2_slot5;
                    var10 = !var2;
case 18:
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 17;
                    var2 = var11[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.TableRow;
                    var2 = {};
                    var14 = arg2;
                    var11 = var16;
                    if(!var14) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var14 = global;
                    var14 = var14.HermesInternal;
                    var15 = var14.concat;
                    var14 = '★ ';
                    var11 = var15.bind(var14)(var16);
case 20:
                    var2['label'] = var11;
                    var11 = var1 != var13;
                    var17 = 'not dismissed';
                    var16 = var17;
                    if(!var11) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var11 = _closure1_slot26;
                    var16 = var11.bind(var5)(var13);
case 22:
                    var1 = var1 != var8;
                    if(!var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var1 = _closure1_slot26;
                    var17 = var1.bind(var5)(var8);
case 24:
                    var1 = global;
                    var8 = var1.HermesInternal;
                    var15 = var8.concat;
                    var8 = '';
                    var22 = arg3;
                    var21 = 'Mobile: ';
                    var19 = ' · Server: ';
                    var23 = var8;
                    var20 = var16;
                    var18 = var17;
                    var11 = var23[var15](var22, var21, var20, var19, var18, var17);
                    var2['subLabel'] = var11;
                    var11 = undefined;
                    if(!var10) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var14 = _closure1_slot17;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 18;
                    var12 = var15[var12];
                    var12 = var13.bind(var5)(var12);
                    var13 = var12.TableRowArrow;
                    var12 = {};
                    var11 = var14.bind(var5)(var13, var12);
case 26:
                    var2['trailing'] = var11;
                    var6 = _closure2_slot11;
                    var2['disabled'] = var6;
                    var6 = undefined;
                    if(!var10) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var6 = function() {
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var2 = function handleClearServerDismissal(arg1, arg2) {
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var4 = _closure2_slot10;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var5 = 'Cleared server dismissal for ';
                            var3 = arg2;
                            var1 = '.';
                            var3 = var6.bind(var5)(var3, var1);
                            var1 = undefined;
                            var2 = function() {
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 15;
                                var1 = var3[var1];
                                var7 = undefined;
                                var1 = var2.bind(var7)(var1);
                                var3 = var1.HTTP;
                                var2 = var3.del;
                                var1 = {};
                                var6 = _closure1_slot24;
                                var5 = _closure1_slot22;
                                var4 = _closure5_slot0;
                                var4 = var6.bind(var7)(var5, var4);
                                var1['url'] = var4;
                                var4 = true;
                                var1['rejectWithError'] = var4;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var2 = var4.bind(var1)(var2, var3);
                            return var1;
                        };
                        var1 = undefined;
                        var2 = var2.bind(var1)(var4, var3);
                        return var1;
                    };
case 28:
                    var2['onPress'] = var6;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = arg4;
                    var1 = '-';
                    var1 = var7.bind(var8)(var6, var1, var9);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var _closure2_slot16 = var1;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 14;
            var1 = var6[var2];
            var4 = undefined;
            var11 = var3.bind(var4)(var1);
            var9 = var11.useStateFromStores;
            var1 = _closure1_slot7;
            var8 = new Array(3);
            var8[0] = var1;
            var1 = _closure1_slot12;
            var8[1] = var1;
            var1 = _closure1_slot8;
            var8[2] = var1;
            var1 = var6[var2];
            var1 = var3.bind(var4)(var1);
            var33 = var1.statesWillNeverBeEqual;
            var35 = function() {
                var4 = function buildRow(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var9 = arg1;
                        var3 = _closure1_slot8;
                        var1 = var3.getUserAffinity;
                        var3 = var1.bind(var3)(var9);
                        var1 = {};
                        var1['userId'] = var9;
                        var4 = _closure1_slot12;
                        var2 = var4.getUser;
                        var6 = var2.bind(var4)(var9);
                        var4 = null;
                        var7 = var4 == var6;
                        var5 = undefined;
                        if(var7) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                        var5 = var6.username;
case 30:
                        if(!(var4 == var5)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var8 = var6.concat;
                        var7 = 'Unknown User (';
                        var6 = ')';
                        var5 = var8.bind(var7)(var9, var6);
case 32:
                        var1['username'] = var5;
                        var5 = var4 == var3;
                        var2 = undefined;
                        if(var5) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                        var2 = var3.dmProbability;
case 34:
                        var4 = var4 != var2;
                        var2 = 'N/A';
                        if(!var4) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                        var4 = var3.dmProbability;
                        var3 = 100;
                        var5 = var3 * var4;
                        var4 = var5.toFixed;
                        var3 = 3;
                        var6 = var4.bind(var5)(var3);
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var4 = '';
                        var3 = '%';
                        var2 = var5.bind(var4)(var6, var3);
case 36:
                        var1['affinity'] = var2;
                        return var1;
                    }
                };
                var1 = {};
                var5 = _closure1_slot7;
                var3 = var5.getDevToolTotalFriendAnniversaries;
                var3 = var3.bind(var5)();
                var1['selected'] = var3;
                var5 = _closure1_slot7;
                var3 = var5.getHighestAffinityFriendAnniversaries;
                var5 = var3.bind(var5)();
                var3 = var5.map;
                var3 = var3.bind(var5)(var4);
                var1['highestAffinity'] = var3;
                var3 = _closure1_slot7;
                var2 = var3.getHighAffinityFriendAnniversaries;
                var3 = var2.bind(var3)();
                var2 = var3.map;
                var2 = var2.bind(var3)(var4);
                var1['highAffinity'] = var2;
                return var1;
            };
            var34 = new Array(0);
            var37 = var11;
            var36 = var8;
            var5 = var37[var9](var36, var35, var34, var33, var32);
            var1 = var5.selected;
            var _closure2_slot0 = var1;
            var1 = var5.highestAffinity;
            var5 = var5.highAffinity;
            var7 = var6[var2];
            var11 = var3.bind(var4)(var7);
            var9 = var11.useStateFromStores;
            var7 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getMessageGiftIntentLastShownMap;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var9.bind(var11)(var8, var7);
            var _closure2_slot1 = var7;
            var8 = var6[var2];
            var12 = var3.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot12;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure1_slot12;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0006_ip = 8; continue _fun0006 }
case 38:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
case 8:
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var1 = var2;
case 39:
                    return var1;
                }
            };
            var20 = var11.bind(var12)(var9, var8);
            var _closure2_slot2 = var20;
            var2 = var6[var2];
            var8 = var3.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = global;
                    var5 = var1.Number;
                    var2 = _closure1_slot9;
                    var2 = var2.settings;
                    var2 = var2.userContent;
                    var4 = null;
                    var7 = var4 == var2;
                    var3 = undefined;
                    var6 = undefined;
                    if(var7) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                    var6 = var2.lastGiftIntentDismissedAtMs;
case 12:
                    var7 = var4 != var6;
                    var2 = '0';
                    if(!var7) { _fun0007_ip = 41; continue _fun0007 }
case 30:
                    var2 = var6;
case 41:
                    var2 = var5.bind(var3)(var2);
                    var3 = var1.Number;
                    var1 = var3.isNaN;
                    var3 = var1.bind(var3)(var2);
                    var1 = null;
                    if(var3) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                    var3 = 0;
                    var1 = null;
                    if(!(var3 !== var2)) { _fun0007_ip = 42; continue _fun0007 }
case 44:
                    var1 = var2;
case 42:
                    return var1;
                }
            };
            var26 = var6.bind(var8)(var3, var2);
            var _closure2_slot3 = var26;
            var6 = _closure1_slot5;
            var3 = var6.useState;
            var2 = new Array(0);
            var3 = var3.bind(var6)(var2);
            var2 = _closure1_slot4;
            var9 = 2;
            var2 = var2.bind(var4)(var3, var9);
            var18 = 0;
            var8 = var2[var18];
            var6 = 1;
            var2 = var2[var6];
            var _closure2_slot4 = var2;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var11 = false;
            var3 = var2.bind(var3)(var11);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var3, var9);
            var19 = var2[var18];
            var _closure2_slot5 = var19;
            var2 = var2[var6];
            var _closure2_slot6 = var2;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var3 = var2.bind(var3)(var11);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var3, var9);
            var16 = var2[var18];
            var2 = var2[var6];
            var _closure2_slot7 = var2;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var3 = var2.bind(var3)(var11);
            var2 = _closure1_slot4;
            var3 = var2.bind(var4)(var3, var9);
            var2 = var3[var18];
            var3 = var3[var6];
            var _closure2_slot8 = var3;
            var11 = _closure1_slot5;
            var9 = var11.useCallback;
            var6 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                        var5 = undefined;
                        var8 = undefined;
                        var4 = _closure2_slot7;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 47: // try_start_0 // try_start_1
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 15;
                        var2 = var6[var2];
                        var2 = var4.bind(var5)(var2);
                        var6 = var2.HTTP;
                        var4 = var6.get;
                        var2 = {'url': '/users/@me/gift-intent-dismissals', 'rejectWithError': true};
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=84);
case 48:
                        return var2;
case 49:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                        var4 = var2.body;
                        var6 = _closure2_slot4;
                        var9 = var4.dismissals;
                        var8 = var9;
                        var4 = null;
                        if(!(var4 == var9)) { _fun0008_ip = 52; continue _fun0008 }
case 34:
                        var4 = new Array(0);
                        _fun0008_ip = 53; continue _fun0008;
case 52:
                        var4 = var8;
case 53:
                        var4 = var6.bind(var5)(var4);
                        var6 = _closure2_slot6;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
case 54: // try_end0
                        _fun0008_ip = 55; continue _fun0008;
case 50: // try_end1
                        var6 = _closure2_slot7;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 56: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var7 = var2;
                        var4 = var2.status;
                        var2 = 403;
                        var2 = var2 === var4;
                        var4 = _closure2_slot6;
                        var4 = var4.bind(var5)(var2);
                        if(var2) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 16;
                        var2 = var6[var2];
                        var6 = var4.bind(var5)(var2);
                        var4 = var6.open;
                        var2 = {};
                        var9 = 'dev-tools-gift-intent-server';
                        var2['key'] = var9;
                        var8 = _closure1_slot25;
                        var7 = var8.bind(var5)(var7);
                        var2['content'] = var7;
                        var2 = var4.bind(var6)(var2);
                        _fun0008_ip = 55; continue _fun0008;
case 57:
                        var4 = _closure2_slot4;
                        var2 = new Array(0);
                        var2 = var4.bind(var5)(var2);
case 55: // try_end2
                        var4 = _closure2_slot7;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
case 59: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot7;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 45:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var6.bind(var4)(var3);
            var3 = new Array(0);
            var24 = var9.bind(var11)(var6, var3);
            var _closure2_slot9 = var24;
            var11 = _closure1_slot5;
            var9 = var11.useEffect;
            var6 = new Array(2);
            var6[0] = var24;
            var6[1] = var26;
            var3 = function() {
                var2 = _closure2_slot9;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var9.bind(var11)(var3, var6);
            var11 = _closure1_slot5;
            var9 = var11.useCallback;
            var3 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0009_ip = 60; continue _fun0009 }
case 46:
                            var2 = arg1;
                            var8 = arg2;
                            var6 = _closure2_slot8;
                            var5 = undefined;
                            var4 = true;
                            var4 = var6.bind(var5)(var4);
case 61: // try_start_0 // try_start_1
                            var2 = var2.bind(var5)();
                            SaveGenerator(address=40);
case 62:
                            return var2;
case 13:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0009_ip = 63; continue _fun0009 }
case 12:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 16;
                            var4 = var7[var4];
                            var7 = var6.bind(var5)(var4);
                            var6 = var7.open;
                            var4 = {};
                            var9 = 'dev-tools-gift-intent-server';
                            var4['key'] = var9;
                            var4['content'] = var8;
                            var4 = var6.bind(var7)(var4);
                            var4 = _closure2_slot9;
                            var4 = var4.bind(var5)();
                            SaveGenerator(address=108);
case 64:
                            return var4;
case 35:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                            if(var6) { _fun0009_ip = 65; continue _fun0009 }
case 34: // try_end0
                            _fun0009_ip = 66; continue _fun0009;
case 65: // try_end1
                            var7 = _closure2_slot8;
                            var6 = false;
                            var6 = var7.bind(var5)(var6);
                            return var4;
case 63:
                            var6 = _closure2_slot8;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
case 67: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=7);
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 16;
                            var2 = var6[var2];
                            var6 = var4.bind(var5)(var2);
                            var4 = var6.open;
                            var2 = {};
                            var9 = 'dev-tools-gift-intent-server';
                            var2['key'] = var9;
                            var7 = _closure1_slot25;
                            var7 = var7.bind(var5)(var8);
                            var2['content'] = var7;
                            var2 = var4.bind(var6)(var2);
case 66: // try_end2
                            var4 = _closure2_slot8;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            return var5;
case 68: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot8;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 60:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var6 = var3.bind(var4)();
            var3 = new Array(1);
            var3[0] = var24;
            var3 = var9.bind(var11)(var6, var3);
            var _closure2_slot10 = var3;
            if(var16) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var16 = var2;
case 69:
            var _closure2_slot11 = var16;
            var15 = global;
            var6 = var15.Map;
            var3 = var8.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.intent_type;
                var1 = _closure1_slot22;
                var1 = var2 === var1;
                return var1;
            };
            var8 = var3.bind(var8)(var2);
            var3 = var8.map;
            var2 = function(arg1) {
                var2 = arg1;
                var3 = var2.target_id;
                var1 = new Array(2);
                var1[0] = var3;
                var3 = global;
                var4 = var3.Number;
                var3 = var2.dismissed_at_ms;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var1[1] = var2;
                return var1;
            };
            var36 = var3.bind(var8)(var2);
            var3 = var6.prototype;
            var3 = Object.create(var3, {constructor: {value: var6}});
            var37 = var3;
            var2 = new var37[var6](var36, var35);
            var17 = var2 instanceof Object ? var2 : var3;
            var _closure2_slot12 = var17;
            var6 = var15.Set;
            var3 = var1.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.userId;
                return var1;
            };
            var36 = var3.bind(var1)(var2);
            var3 = var6.prototype;
            var3 = Object.create(var3, {constructor: {value: var6}});
            var37 = var3;
            var2 = new var37[var6](var36, var35);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure2_slot13 = var2;
            var3 = var15.Array;
            var2 = var3.from;
            var6 = var15.Map;
            var8 = new Array(0);
            var36 = var8;
            var35 = var1;
            var34 = 0;
            var34 = arraySpread(var36, var35, var34);
            var36 = var8;
            var35 = var5;
            var1 = arraySpread(var36, var35, var34);
            var5 = var8.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.userId;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var36 = var5.bind(var8)(var1);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var37 = var5;
            var1 = new var37[var6](var36, var35);
            var5 = var1 instanceof Object ? var1 : var5;
            var1 = var5.values;
            var1 = var1.bind(var5)();
            var22 = var2.bind(var3)(var1);
            var _closure2_slot14 = var22;
            var3 = var15.Set;
            var2 = var22.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.userId;
                return var1;
            };
            var36 = var2.bind(var22)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var37 = var2;
            var1 = new var37[var3](var36, var35);
            var1 = var1 instanceof Object ? var1 : var2;
            var _closure2_slot15 = var1;
            var3 = var15.Array;
            var2 = var3.from;
            var6 = var15.Set;
            var5 = var15.Object;
            var1 = var5.keys;
            var35 = var1.bind(var5)(var7);
            var1 = new Array(0);
            var36 = var1;
            var34 = 0;
            var34 = arraySpread(var36, var35, var34);
            var9 = var15.Array;
            var8 = var9.from;
            var5 = var17.keys;
            var5 = var5.bind(var17)();
            var35 = var8.bind(var9)(var5);
            var36 = var1;
            var5 = arraySpread(var36, var35, var34);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var37 = var5;
            var36 = var1;
            var1 = new var37[var6](var36, var35);
            var1 = var1 instanceof Object ? var1 : var5;
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot15;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var31 = var2.bind(var3)(var1);
            var3 = _closure1_slot20;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var21 = null;
            var3 = var21 == var2;
            var1 = undefined;
            if(var3) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var1 = var2.label;
case 71:
            var2 = var21 != var1;
            var28 = 'None';
            if(!var2) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var28 = var1;
case 73:
            var3 = _closure1_slot18;
            var2 = _closure1_slot19;
            var1 = {};
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 19;
            var5 = var9[var6];
            var5 = var11.bind(var4)(var5);
            var7 = var5.TableRowGroup;
            var5 = {'title': 'Friend Anniversary', 'hasIcons': false};
            var23 = _closure1_slot17;
            var14 = 17;
            var8 = var9[var14];
            var8 = var11.bind(var4)(var8);
            var12 = var8.TableRow;
            var8 = {};
            var25 = 'Number of anniversaries';
            var8['label'] = var25;
            var25 = var15.HermesInternal;
            var27 = var25.concat;
            var25 = 'Current: ';
            var25 = var27.bind(var25)(var28);
            var8['subLabel'] = var25;
            var29 = _closure1_slot17;
            var25 = 18;
            var27 = var9[var25];
            var27 = var11.bind(var4)(var27);
            var28 = var27.TableRowArrow;
            var27 = {};
            var27 = var29.bind(var4)(var28, var27);
            var8['trailing'] = var27;
            var27 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showSimpleActionSheet;
                var2 = {};
                var6 = 'dev-tools-friend-anniversary-count';
                var2['key'] = var6;
                var6 = {};
                var7 = 'Anniversaries to generate';
                var6['title'] = var7;
                var2['header'] = var6;
                var7 = _closure1_slot20;
                var6 = var7.map;
                var5 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var7 = var1.label;
                        var5 = var1.value;
                        var _closure4_slot0 = var5;
                        var1 = {};
                        var4 = _closure2_slot0;
                        var3 = var7;
                        if(!(var5 === var4)) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var6 = var4.concat;
                        var5 = '';
                        var4 = '  (selected)';
                        var3 = var6.bind(var5)(var7, var4);
case 75:
                        var1['label'] = var3;
                        var2 = function onPress() {
                            var5 = _closure4_slot0;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var6 = 'DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT';
                            var2['type'] = var6;
                            var2['total'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var1['onPress'] = var2;
                        return var1;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var2['options'] = var5;
                var5 = false;
                var2['hasIcons'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var8['onPress'] = var27;
            var12 = var23.bind(var4)(var12, var8);
            var8 = new Array(3);
            var8[0] = var12;
            var12 = _closure1_slot17;
            var9 = var9[var14];
            var9 = var11.bind(var4)(var9);
            var11 = var9.TableRow;
            var9 = {'label': 'Trigger Mobile FA message in current DM', 'subLabel': 'Sends an ephemeral GIFTING_PROMPT into the selected channel'};
            var23 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure1_slot11;
                    var1 = var2.getChannelId;
                    var7 = var1.bind(var2)();
                    var1 = null;
                    if(!(var1 == var7)) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.open;
                    var2 = {'key': 'dev-tools-gift-intent-no-channel', 'content': 'Open a DM first.'};
                    var2 = var3.bind(var4)(var2);
                    _fun0011_ip = 79; continue _fun0011;
case 77:
                    var3 = _closure1_slot10;
                    var2 = var3.getChannel;
                    var2 = var2.bind(var3)(var7);
                    var4 = var1 == var2;
                    var3 = undefined;
                    var8 = undefined;
                    if(var4) { _fun0011_ip = 16; continue _fun0011 }
case 42:
                    var4 = var2.recipients;
                    var2 = var1 == var4;
                    var8 = undefined;
                    if(var2) { _fun0011_ip = 16; continue _fun0011 }
case 80:
                    var2 = 0;
                    var8 = var4[var2];
case 16:
                    if(!(var1 == var8)) { _fun0011_ip = 21; continue _fun0011 }
case 81:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 16;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.open;
                    var1 = {'key': 'dev-tools-gift-intent-no-recipient', 'content': 'Selected channel has no other recipient.'};
                    var1 = var2.bind(var4)(var1);
                    _fun0011_ip = 79; continue _fun0011;
case 21:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 21;
                    var1 = var4[var1];
                    var6 = var2.bind(var3)(var1);
                    var5 = var6.sendGiftingPromptSystemMessage;
                    var1 = {};
                    var9 = _closure1_slot15;
                    var9 = var9.FRIEND_ANNIVERSARY;
                    var1['giftIntentType'] = var9;
                    var1['recipientUserId'] = var8;
                    var1 = var5.bind(var6)(var7, var1);
                    var1 = 16;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.open;
                    var1 = {'key': 'dev-tools-gift-intent-triggered', 'content': 'Friendship anniversary card sent.'};
                    var1 = var2.bind(var3)(var1);
case 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onPress'] = var23;
            var9 = var12.bind(var4)(var11, var9);
            var8[1] = var9;
            var11 = var22.map;
            var9 = function(arg1) {
                var1 = arg1;
                var6 = var1.userId;
                var7 = var1.affinity;
                var5 = _closure2_slot16;
                var2 = _closure2_slot13;
                var1 = var2.has;
                var4 = var1.bind(var2)(var6);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ' · ';
                var9 = var3.bind(var2)(var7, var1);
                var12 = undefined;
                var8 = 'gen';
                var11 = var6;
                var10 = var4;
                var1 = var12[var5](var11, var10, var9, var8, var7);
                return var1;
            };
            var9 = var11.bind(var22)(var9);
            var8[2] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var7 = var31.length;
            var7 = var7 > var18;
            if(!var7) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var11 = _closure1_slot18;
            var9 = _closure1_slot19;
            var8 = {};
            var29 = _closure1_slot17;
            var27 = _closure1_slot0;
            var23 = _closure1_slot2;
            var12 = 22;
            var12 = var23[var12];
            var12 = var27.bind(var4)(var12);
            var28 = var12.Spacer;
            var12 = {};
            var32 = _closure1_slot1;
            var30 = 23;
            var30 = var23[var30];
            var30 = var32.bind(var4)(var30);
            var30 = var30.space;
            var30 = var30.PX_16;
            var12['size'] = var30;
            var28 = var29.bind(var4)(var28, var12);
            var12 = new Array(2);
            var12[0] = var28;
            var28 = _closure1_slot17;
            var23 = var23[var6];
            var23 = var27.bind(var4)(var23);
            var27 = var23.TableRowGroup;
            var23 = {'title': 'Other Dismissals (not generated)', 'hasIcons': false};
            var30 = var31.map;
            var29 = function(arg1) {
                var6 = _closure2_slot16;
                var11 = undefined;
                var10 = arg1;
                var9 = false;
                var8 = '';
                var7 = 'other';
                var1 = var11[var6](var10, var9, var8, var7, var6);
                return var1;
            };
            var29 = var30.bind(var31)(var29);
            var23['children'] = var29;
            var23 = var28.bind(var4)(var27, var23);
            var12[1] = var23;
            var8['children'] = var12;
            var7 = var11.bind(var4)(var9, var8);
case 82:
            var5[1] = var7;
            var12 = _closure1_slot17;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 22;
            var7 = var9[var7];
            var7 = var11.bind(var4)(var7);
            var8 = var7.Spacer;
            var7 = {};
            var27 = _closure1_slot1;
            var23 = 23;
            var23 = var9[var23];
            var23 = var27.bind(var4)(var23);
            var23 = var23.space;
            var23 = var23.PX_16;
            var7['size'] = var23;
            var7 = var12.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot18;
            var6 = var9[var6];
            var6 = var11.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {'title': 'Backend Dismissal Sync', 'hasIcons': false};
            var12 = _closure1_slot17;
            var9 = var9[var14];
            var9 = var11.bind(var4)(var9);
            var11 = var9.TableRow;
            var9 = {};
            var23 = 'Eligibility';
            var9['label'] = var23;
            var29 = 'ok';
            if(!var19) { _fun0003_ip = 84; continue _fun0003 }
case 85:
            var29 = 'not enrolled (calls 403)';
case 84:
            var28 = 'no';
            if(!var20) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var28 = 'yes';
case 86:
            var15 = var15.HermesInternal;
            var27 = var15.concat;
            var23 = 'Experiment: ';
            var15 = ' · Staff: ';
            var15 = var27.bind(var23)(var29, var15, var28);
            var9['subLabel'] = var15;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(7);
            var9[0] = var11;
            var15 = _closure1_slot17;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var14];
            var11 = var12.bind(var4)(var11);
            var12 = var11.TableRow;
            var11 = {};
            var23 = 'Server last recorded dismissal';
            var11['label'] = var23;
            var23 = var21 != var26;
            var21 = 'never';
            if(!var23) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var23 = _closure1_slot26;
            var21 = var23.bind(var4)(var26);
case 88:
            var11['subLabel'] = var21;
            var11 = var15.bind(var4)(var12, var11);
            var9[1] = var11;
            var15 = _closure1_slot17;
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var11 = var21[var14];
            var11 = var23.bind(var4)(var11);
            var12 = var11.TableRow;
            var11 = {'label': 'Reconcile now', 'subLabel': 'Fetch + merge server dismissals into the local store'};
            var11['disabled'] = var16;
            var26 = function onPress() {
                var4 = _closure2_slot10;
                var1 = undefined;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.fetchAndReconcileGiftIntentDismissals;
                        var5 = _closure2_slot3;
                        var1 = null;
                        var5 = var1 != var5;
                        var1 = 0;
                        if(!var5) { _fun0012_ip = 31; continue _fun0012 }
case 2:
                        var1 = _closure2_slot3;
case 31:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var2 = 'Reconcile triggered.';
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var11['onPress'] = var26;
            var11 = var15.bind(var4)(var12, var11);
            var9[2] = var11;
            var15 = _closure1_slot17;
            var11 = var21[var14];
            var11 = var23.bind(var4)(var11);
            var12 = var11.TableRow;
            var11 = {'label': 'Refresh server dismissals', 'subLabel': 'Re-fetch the per-friend server view above'};
            var11['disabled'] = var16;
            var11['onPress'] = var24;
            var11 = var15.bind(var4)(var12, var11);
            var9[3] = var11;
            var15 = _closure1_slot17;
            var11 = var21[var14];
            var11 = var23.bind(var4)(var11);
            var12 = var11.TableRow;
            var11 = {'label': 'Dismiss a generated anniversary on the server', 'subLabel': 'POST a server dismissal for a generated friend'};
            var24 = _closure1_slot17;
            var21 = var21[var25];
            var21 = var23.bind(var4)(var21);
            var23 = var21.TableRowArrow;
            var21 = {};
            var21 = var24.bind(var4)(var23, var21);
            var11['trailing'] = var21;
            var21 = var16;
            if(var16) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            var21 = var19;
case 90:
            if(var21) { _fun0003_ip = 92; continue _fun0003 }
case 93:
            var22 = var22.length;
            var21 = var18 === var22;
case 92:
            var11['disabled'] = var21;
            var21 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showSimpleActionSheet;
                var2 = {};
                var5 = 'dev-tools-gift-intent-seed';
                var2['key'] = var5;
                var5 = {};
                var6 = 'Dismiss a generated anniversary on the server';
                var5['title'] = var6;
                var2['header'] = var5;
                var7 = _closure2_slot14;
                var6 = var7.map;
                var5 = function(arg1) {
                    var3 = arg1;
                    var _closure4_slot0 = var3;
                    var1 = {};
                    var3 = var3.username;
                    var1['label'] = var3;
                    var2 = function onPress() {
                        var4 = _closure2_slot10;
                        var1 = _closure4_slot0;
                        var5 = var1.username;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var2 = 'Dismissed ';
                        var1 = ' on the server.';
                        var3 = var3.bind(var2)(var5, var1);
                        var2 = undefined;
                        var1 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.HTTP;
                            var2 = var3.post;
                            var1 = {'url': '/users/@me/gift-intents/dismiss', 'body': null, 'rejectWithError': true};
                            var4 = {};
                            var5 = _closure1_slot22;
                            var4['intent_type'] = var5;
                            var5 = _closure4_slot0;
                            var5 = var5.userId;
                            var4['target_id'] = var5;
                            var1['body'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var1['onPress'] = var2;
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
                var2['options'] = var5;
                var5 = false;
                var2['hasIcons'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11['onPress'] = var21;
            var11 = var15.bind(var4)(var12, var11);
            var9[4] = var11;
            var15 = _closure1_slot17;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var14];
            var11 = var12.bind(var4)(var11);
            var12 = var11.TableRow;
            var11 = {'variant': 'danger', 'label': 'Clear all server dismissals (staff)', 'subLabel': 'DELETE every server dismissal for this user'};
            if(var16) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var16 = !var20;
case 94:
            if(var16) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            var16 = var19;
case 96:
            if(var16) { _fun0003_ip = 98; continue _fun0003 }
case 99:
            var17 = var17.size;
            var16 = var18 === var17;
case 98:
            var11['disabled'] = var16;
            var16 = function onPress() {
                var4 = _closure2_slot10;
                var1 = undefined;
                var3 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var1 = var3[var1];
                    var6 = undefined;
                    var1 = var2.bind(var6)(var1);
                    var3 = var1.HTTP;
                    var2 = var3.del;
                    var1 = {};
                    var5 = _closure1_slot24;
                    var4 = _closure1_slot22;
                    var4 = var5.bind(var6)(var4);
                    var1['url'] = var4;
                    var4 = true;
                    var1['rejectWithError'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = 'Cleared all server dismissals.';
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var11['onPress'] = var16;
            var11 = var15.bind(var4)(var12, var11);
            var9[5] = var11;
            var12 = _closure1_slot17;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var14];
            var10 = var11.bind(var4)(var10);
            var11 = var10.TableRow;
            var10 = {'variant': 'danger', 'label': 'Reset local message cooldown', 'subLabel': 'Clears messageGiftIntentLastShownMap on this device'};
            var13 = function onPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 13;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.dispatch;
                var2 = {};
                var7 = 'DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET';
                var2['type'] = var7;
                var2 = var5.bind(var6)(var2);
                var2 = 16;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {'key': 'dev-tools-gift-intent-local', 'content': 'Cleared local message cooldown.'};
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[6] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function TrialOfferSheetExample() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 26;
            var1 = var5[var1];
            var4 = undefined;
            var2 = var7.bind(var4)(var1);
            var1 = var2.usePremiumTrialOffer;
            var2 = var1.bind(var2)();
            var _closure2_slot0 = var2;
            var1 = null;
            var12 = var1 != var2;
            var1 = function openTrialOfferActionSheet(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0014_ip = 19; continue _fun0014 }
case 100:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 27;
                    var4 = var2[var4];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.openLazy;
                    var6 = _closure1_slot0;
                    var3 = 29;
                    var3 = var2[var3];
                    var6 = var6.bind(var7)(var3);
                    var3 = 28;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var7)(var3, var2);
                    var2 = {};
                    var6 = arg1;
                    var2['fallbackPremiumType'] = var6;
                    var1 = _closure2_slot0;
                    var2['userTrialOffer'] = var1;
                    var1 = function markAsDismissed() {
                        var1 = undefined;
                        return var1;
                    };
                    var2['markAsDismissed'] = var1;
                    var1 = 'PremiumTrialOfferActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot1 = var1;
            var3 = _closure1_slot18;
            var1 = 19;
            var1 = var5[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.TableRowGroup;
            var1 = {'title': 'Trial Offers', 'hasIcons': false};
            var8 = _closure1_slot17;
            var13 = 17;
            var5 = var5[var13];
            var5 = var7.bind(var4)(var5);
            var7 = var5.TableRow;
            var5 = {};
            var10 = 'Trial Offer Nitro Basic';
            var5['label'] = var10;
            var11 = 'No trial offer in store';
            var10 = var11;
            if(!var12) { _fun0013_ip = 101; continue _fun0013 }
case 102:
            var10 = undefined;
case 101:
            var5['subLabel'] = var10;
            var10 = !var12;
            var5['disabled'] = var10;
            var14 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure1_slot16;
                var2 = var1.TIER_0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onPress'] = var14;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot17;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var13];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TableRow;
            var6 = {};
            var13 = 'Trial Offer Nitro';
            var6['label'] = var13;
            if(!var12) { _fun0013_ip = 103; continue _fun0013 }
case 104:
            var11 = undefined;
case 103:
            var6['subLabel'] = var11;
            var6['disabled'] = var10;
            var9 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure1_slot16;
                var2 = var1.TIER_2;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function PremiumToggles() {
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 14;
        var7 = var6[var3];
        var4 = undefined;
        var11 = var2.bind(var4)(var7);
        var10 = var11.useStateFromStores;
        var7 = _closure1_slot13;
        var9 = new Array(1);
        var9[0] = var7;
        var3 = var6[var3];
        var3 = var2.bind(var4)(var3);
        var12 = var3.statesWillNeverBeEqual;
        var14 = function() {
            var3 = _closure1_slot13;
            var2 = var3.allByCategory;
            var1 = _closure1_slot14;
            var1 = var1.PREMIUM;
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2[Symbol.iterator];
                    var2 = var1().next;
                    var4 = var2().value;
                    var3 = var1;
                    var2 = undefined;
                    var3 = var3 === var2;
                    if(var3) { _fun0015_ip = 105; continue _fun0015 }
case 106:
                    var2 = var4;
case 105:
                    if(var3) { _fun0015_ip = 107; continue _fun0015 }
case 47:
                    var1.return();
case 107:
                    var1 = 'force_mock_iap';
                    var1 = var1 !== var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var13 = new Array(0);
        var16 = var11;
        var15 = var9;
        var7 = var16[var10](var15, var14, var13, var12, var11);
        var3 = _closure1_slot17;
        var1 = 19;
        var1 = var6[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TableRowGroup;
        var1 = {'title': 'Premium Toggles', 'hasIcons': false};
        var6 = var7.map;
        var5 = function(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var6 = arg1;
                var2 = var6[Symbol.iterator];
                var6 = var2().next;
                var8 = undefined;
                var3 = undefined;
                var5 = undefined;
                var7 = var6().value;
                var12 = var2;
                var12 = var12 === var8;
                var3 = var12;
                if(var12) { _fun0016_ip = 108; continue _fun0016 }
case 107:
                var5 = var7;
case 108:
                var7 = var5;
                var4 = var7;
                var _closure3_slot0 = var7;
                var5 = undefined;
                var7 = var3;
                if(var7) { _fun0016_ip = 109; continue _fun0016 }
case 10:
                var7 = var6().value;
                var12 = var2;
                var12 = var12 === var8;
                var3 = var12;
                if(var12) { _fun0016_ip = 109; continue _fun0016 }
case 110:
                var5 = var7;
case 109:
                var10 = var5;
                var5 = undefined;
                var7 = var3;
                if(var7) { _fun0016_ip = 111; continue _fun0016 }
case 112:
                var6 = var6().value;
                var7 = var2;
                var7 = var7 === var8;
                var3 = var7;
                if(var7) { _fun0016_ip = 111; continue _fun0016 }
case 42:
                var5 = var6;
case 111: // try_start_0
                var11 = var5.label;
case 35: // try_end0
                var5 = var3;
                if(var5) { _fun0016_ip = 17; continue _fun0016 }
case 34:
                var2.return();
case 17:
                var7 = _closure1_slot17;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 30;
                var5 = var12[var5];
                var5 = var6.bind(var8)(var5);
                var6 = var5.TableSwitchRow;
                var5 = {};
                var5['label'] = var11;
                var5['subLabel'] = var4;
                var5['value'] = var10;
                var9 = function onValueChange(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.toggle;
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var5['onValueChange'] = var9;
                var4 = var7.bind(var8)(var6, var5, var4);
                return var4;
case 113: // catch_target0
                CatchBlockStart(arg_register=0);
                _fun0016_ip = 114; continue _fun0016;
case 115:
                CatchBlockStart(arg_register=0);
case 114:
                if(var3) { _fun0016_ip = 116; continue _fun0016 }
case 117:
                var2.return();
case 116:
                throw var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function ForceMockIAP() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 14;
            var1 = var10[var1];
            var4 = undefined;
            var7 = var6.bind(var4)(var1);
            var3 = var7.useStateFromStores;
            var1 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot13;
                var2 = var3.get;
                var1 = 'force_mock_iap';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var3.bind(var7)(var2, var1);
            var1 = 32;
            var1 = var10[var1];
            var2 = var6.bind(var4)(var1);
            var1 = var2.shouldMockIAPForceEnable;
            var9 = var1.bind(var2)();
            var3 = _closure1_slot17;
            var1 = 19;
            var1 = var10[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.TableRowGroup;
            var1 = {'title': 'iOS IAP Mock', 'hasIcons': false};
            var7 = _closure1_slot17;
            var5 = 30;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TableSwitchRow;
            var5 = {};
            var10 = 'Force mock IAP products';
            var5['label'] = var10;
            var10 = 'Replaces StoreKit with hardcoded fixture data. App will restart when toggled.';
            if(!var9) { _fun0017_ip = 118; continue _fun0017 }
case 119:
            var10 = "Forced on - the current device can't fetch real StoreKit products.";
case 118:
            var5['subLabel'] = var10;
            var10 = var9;
            if(var10) { _fun0017_ip = 120; continue _fun0017 }
case 121:
            var10 = var11;
case 120:
            var5['value'] = var10;
            var5['disabled'] = var9;
            var8 = function onValueChange(arg1) {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 31;
                var3 = var4[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var3);
                var6 = var7.toggle;
                var5 = 'force_mock_iap';
                var3 = arg1;
                var3 = var6.bind(var7)(var5, var3);
                var5 = _closure1_slot13;
                var3 = var5.persist;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot1;
                var2 = 33;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.checkForUpdateAndReload;
                var2 = var2.bind(var3)();
                return var1;
            };
            var5['onValueChange'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function PaymentFlowTest() {
        var4 = _closure1_slot17;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 19;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.TableRowGroup;
        var1 = {'title': 'Payment Flow Test', 'hasIcons': false};
        var7 = _closure1_slot17;
        var5 = 17;
        var5 = var11[var5];
        var5 = var9.bind(var3)(var5);
        var6 = var5.TableRow;
        var5 = {};
        var10 = 'Test Payment Flow';
        var5['label'] = var10;
        var10 = function onPress() {
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 34;
            var3 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.pushLazy;
            var6 = _closure1_slot0;
            var5 = 29;
            var5 = var2[var5];
            var6 = var6.bind(var1)(var5);
            var5 = 35;
            var5 = var2[var5];
            var2 = var2.paths;
            var2 = var6.bind(var1)(var5, var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['onPress'] = var10;
        var10 = _closure1_slot17;
        var8 = 18;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.TableRowArrow;
        var8 = {};
        var8 = var10.bind(var3)(var9, var8);
        var5['trailing'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function Orbs() {
        var4 = _closure1_slot17;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 19;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.TableRowGroup;
        var1 = {'title': 'Orbs', 'hasIcons': false};
        var7 = _closure1_slot17;
        var5 = 17;
        var5 = var11[var5];
        var5 = var9.bind(var3)(var5);
        var6 = var5.TableRow;
        var5 = {};
        var10 = 'Test Orbs Flow';
        var5['label'] = var10;
        var10 = function onPress() {
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 34;
            var3 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.pushLazy;
            var6 = _closure1_slot0;
            var5 = 29;
            var5 = var2[var5];
            var6 = var6.bind(var1)(var5);
            var5 = 36;
            var5 = var2[var5];
            var2 = var2.paths;
            var2 = var6.bind(var1)(var5, var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['onPress'] = var10;
        var10 = _closure1_slot17;
        var8 = 18;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.TableRowArrow;
        var8 = {};
        var8 = var10.bind(var3)(var9, var8);
        var5['trailing'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot32 = var1;
    var1 = function RevenueSmokeTests() {
        var4 = _closure1_slot17;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 19;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.TableRowGroup;
        var1 = {'title': 'Revenue Smoke Tests', 'hasIcons': false};
        var7 = _closure1_slot17;
        var5 = 17;
        var5 = var11[var5];
        var5 = var9.bind(var3)(var5);
        var6 = var5.TableRow;
        var5 = {};
        var10 = 'Test all purchasing flows';
        var5['label'] = var10;
        var10 = function onPress() {
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 34;
            var3 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.pushLazy;
            var6 = _closure1_slot0;
            var5 = 29;
            var5 = var2[var5];
            var6 = var6.bind(var1)(var5);
            var5 = 37;
            var5 = var2[var5];
            var2 = var2.paths;
            var2 = var6.bind(var1)(var5, var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['onPress'] = var10;
        var10 = _closure1_slot17;
        var8 = 18;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.TableRowArrow;
        var8 = {};
        var8 = var10.bind(var3)(var9, var8);
        var5['trailing'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function GuildPowerups() {
        var4 = _closure1_slot17;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 19;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.TableRowGroup;
        var1 = {'title': 'Guild Powerups', 'hasIcons': false};
        var10 = 'Guild Powerups';
        var7 = _closure1_slot17;
        var5 = 17;
        var5 = var11[var5];
        var5 = var9.bind(var3)(var5);
        var6 = var5.TableRow;
        var5 = {};
        var5['label'] = var10;
        var10 = function onPress() {
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 34;
            var3 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.pushLazy;
            var6 = _closure1_slot0;
            var5 = 29;
            var5 = var2[var5];
            var6 = var6.bind(var1)(var5);
            var5 = 38;
            var5 = var2[var5];
            var2 = var2.paths;
            var2 = var6.bind(var1)(var5, var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['onPress'] = var10;
        var10 = _closure1_slot17;
        var8 = 18;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.TableRowArrow;
        var8 = {};
        var8 = var10.bind(var3)(var9, var8);
        var5['trailing'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot34 = var1;
    var1 = function GuildTagBadges() {
        var4 = _closure1_slot17;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 19;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.TableRowGroup;
        var1 = {'title': 'Guild Tag Badges', 'hasIcons': false};
        var7 = _closure1_slot17;
        var5 = 17;
        var5 = var11[var5];
        var5 = var9.bind(var3)(var5);
        var6 = var5.TableRow;
        var5 = {'label': 'Badge gallery', 'subLabel': 'Preview all native badge kinds across sizes and tints'};
        var10 = function onPress() {
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 34;
            var3 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.pushLazy;
            var6 = _closure1_slot0;
            var5 = 29;
            var5 = var2[var5];
            var6 = var6.bind(var1)(var5);
            var5 = 39;
            var5 = var2[var5];
            var2 = var2.paths;
            var2 = var6.bind(var1)(var5, var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['onPress'] = var10;
        var10 = _closure1_slot17;
        var8 = 18;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.TableRowArrow;
        var8 = {};
        var8 = var10.bind(var3)(var9, var8);
        var5['trailing'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot35 = var1;
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
    var12 = 1;
    var4 = var6[var12];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DevSettingsCategory;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GiftIntentType;
    var _closure1_slot15 = var7;
    var4 = var4.PremiumTypes;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var7 = var4.jsxs;
    var _closure1_slot18 = var7;
    var4 = var4.Fragment;
    var _closure1_slot19 = var4;
    var7 = new Array(8);
    var4 = {'label': 'None', 'value': null};
    var7[0] = var4;
    var4 = {'label': '1', 'value': 1};
    var7[1] = var4;
    var4 = {'label': '2', 'value': 2};
    var7[2] = var4;
    var4 = {'label': '3', 'value': 3};
    var7[3] = var4;
    var4 = {'label': '4', 'value': 4};
    var7[4] = var4;
    var4 = {'label': '5', 'value': 5};
    var7[5] = var4;
    var4 = {'label': '10', 'value': 10};
    var7[6] = var4;
    var4 = 25;
    var8 = {'label': '25', 'value': 25};
    var7[7] = var8;
    var _closure1_slot20 = var7;
    var7 = '/users/@me/gift-intents/dismissals';
    var _closure1_slot21 = var7;
    var7 = 'FRIEND_ANNIVERSARY';
    var _closure1_slot22 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 23;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var9['flex'] = var12;
    var4['container'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['padding'] = var10;
    var4['scrollContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/DevToolsRevenuePlaygroundScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DevToolsRevenuePlaygroundScreen() {
        var1 = _closure1_slot23;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot18;
        var2 = _closure1_slot6;
        var1 = {};
        var7 = var5.container;
        var1['style'] = var7;
        var5 = var5.scrollContainer;
        var1['contentContainerStyle'] = var5;
        var8 = _closure1_slot17;
        var7 = _closure1_slot28;
        var5 = {};
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(17);
        var5[0] = var7;
        var14 = _closure1_slot17;
        var8 = _closure1_slot0;
        var12 = _closure1_slot2;
        var7 = 22;
        var9 = var12[var7];
        var9 = var8.bind(var4)(var9);
        var13 = var9.Spacer;
        var9 = {};
        var11 = _closure1_slot1;
        var10 = 23;
        var15 = var12[var10];
        var15 = var11.bind(var4)(var15);
        var15 = var15.space;
        var15 = var15.PX_16;
        var9['size'] = var15;
        var9 = var14.bind(var4)(var13, var9);
        var5[1] = var9;
        var14 = _closure1_slot17;
        var13 = _closure1_slot29;
        var9 = {};
        var9 = var14.bind(var4)(var13, var9);
        var5[2] = var9;
        var14 = _closure1_slot17;
        var9 = var12[var7];
        var9 = var8.bind(var4)(var9);
        var13 = var9.Spacer;
        var9 = {};
        var15 = var12[var10];
        var15 = var11.bind(var4)(var15);
        var15 = var15.space;
        var15 = var15.PX_16;
        var9['size'] = var15;
        var9 = var14.bind(var4)(var13, var9);
        var5[3] = var9;
        var14 = _closure1_slot17;
        var13 = _closure1_slot30;
        var9 = {};
        var9 = var14.bind(var4)(var13, var9);
        var5[4] = var9;
        var14 = _closure1_slot17;
        var9 = var12[var7];
        var9 = var8.bind(var4)(var9);
        var13 = var9.Spacer;
        var9 = {};
        var15 = var12[var10];
        var15 = var11.bind(var4)(var15);
        var15 = var15.space;
        var15 = var15.PX_16;
        var9['size'] = var15;
        var9 = var14.bind(var4)(var13, var9);
        var5[5] = var9;
        var14 = _closure1_slot17;
        var13 = _closure1_slot31;
        var9 = {};
        var9 = var14.bind(var4)(var13, var9);
        var5[6] = var9;
        var14 = _closure1_slot17;
        var9 = var12[var7];
        var9 = var8.bind(var4)(var9);
        var13 = var9.Spacer;
        var9 = {};
        var15 = var12[var10];
        var15 = var11.bind(var4)(var15);
        var15 = var15.space;
        var15 = var15.PX_16;
        var9['size'] = var15;
        var9 = var14.bind(var4)(var13, var9);
        var5[7] = var9;
        var14 = _closure1_slot17;
        var13 = _closure1_slot32;
        var9 = {};
        var9 = var14.bind(var4)(var13, var9);
        var5[8] = var9;
        var14 = _closure1_slot17;
        var9 = var12[var7];
        var9 = var8.bind(var4)(var9);
        var13 = var9.Spacer;
        var9 = {};
        var15 = var12[var10];
        var15 = var11.bind(var4)(var15);
        var15 = var15.space;
        var15 = var15.PX_16;
        var9['size'] = var15;
        var9 = var14.bind(var4)(var13, var9);
        var5[9] = var9;
        var14 = _closure1_slot17;
        var13 = _closure1_slot33;
        var9 = {};
        var9 = var14.bind(var4)(var13, var9);
        var5[10] = var9;
        var14 = _closure1_slot17;
        var9 = var12[var7];
        var9 = var8.bind(var4)(var9);
        var13 = var9.Spacer;
        var9 = {};
        var15 = var12[var10];
        var15 = var11.bind(var4)(var15);
        var15 = var15.space;
        var15 = var15.PX_16;
        var9['size'] = var15;
        var9 = var14.bind(var4)(var13, var9);
        var5[11] = var9;
        var14 = _closure1_slot17;
        var13 = _closure1_slot34;
        var9 = {};
        var9 = var14.bind(var4)(var13, var9);
        var5[12] = var9;
        var14 = _closure1_slot17;
        var9 = var12[var7];
        var9 = var8.bind(var4)(var9);
        var13 = var9.Spacer;
        var9 = {};
        var15 = var12[var10];
        var15 = var11.bind(var4)(var15);
        var15 = var15.space;
        var15 = var15.PX_16;
        var9['size'] = var15;
        var9 = var14.bind(var4)(var13, var9);
        var5[13] = var9;
        var14 = _closure1_slot17;
        var13 = _closure1_slot35;
        var9 = {};
        var9 = var14.bind(var4)(var13, var9);
        var5[14] = var9;
        var9 = _closure1_slot17;
        var7 = var12[var7];
        var7 = var8.bind(var4)(var7);
        var8 = var7.Spacer;
        var7 = {};
        var10 = var12[var10];
        var10 = var11.bind(var4)(var10);
        var10 = var10.space;
        var10 = var10.PX_16;
        var7['size'] = var10;
        var7 = var9.bind(var4)(var8, var7);
        var5[15] = var7;
        var8 = _closure1_slot17;
        var7 = _closure1_slot27;
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[16] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();