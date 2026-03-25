// app/modules/game_community_upsell/native/GameDetectionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var6 = function isGameInstalled() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var6;
    var1 = function _isGameInstalled() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var6 = arg1;
                    var7 = _closure1_slot4;
                    var3 = var7.hasConsented;
                    var2 = _closure1_slot8;
                    var2 = var2.PERSONALIZATION;
                    var2 = var3.bind(var7)(var2);
                    if(var2) { _fun0004_ip = 7; continue _fun0004 }
case 38:
                    var2 = {'isInstalled': false, 'error': 'Personalization consent not granted'};
                    return var2;
case 7: // try_start_0
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var2 = var7[var2];
                    var8 = undefined;
                    var7 = var3.bind(var8)(var2);
                    var3 = var7.canOpenUrlScheme;
                    var2 = var6;
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=101);
case 39:
                    return var2;
case 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 41:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 7;
                    var3 = var9[var3];
                    var9 = var7.bind(var8)(var3);
                    var8 = var9.track;
                    var3 = _closure1_slot7;
                    var7 = var3.CAN_OPEN_URL_REQUESTED;
                    var3 = {};
                    var10 = var6;
                    var3['scheme'] = var10;
                    var3['result'] = var2;
                    var3 = var8.bind(var9)(var7, var3);
                    var3 = {};
                    var3['isInstalled'] = var2;
                    var7 = null;
                    var3['error'] = var7;
case 42: // try_end0
                    return var3;
case 16:
                    return var2;
case 43: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var5 = var7;
                    var2 = global;
                    var3 = var2.Error;
                    var3 = var7 instanceof var3;
                    if(var3) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var8 = var2.String;
                    var7 = var5;
                    var3 = undefined;
                    var3 = var8.bind(var3)(var7);
                    _fun0004_ip = 46; continue _fun0004;
case 44:
                    var3 = var5.message;
case 46:
                    var5 = _closure1_slot9;
                    var4 = var5.warn;
                    var8 = var6;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var6 = 'Error checking URL scheme: ';
                    var2 = ' - Error: ';
                    var2 = var7.bind(var6)(var8, var2, var3);
                    var2 = var4.bind(var5)(var2);
                    var2 = {};
                    var4 = false;
                    var2['isInstalled'] = var4;
                    var2['error'] = var3;
                    return var2;
case 36:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _checkAllSchemes() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var2 = new Array(0);
                    var4 = _closure1_slot12;
                    var7 = undefined;
                    var3 = arg1;
                    var6 = var4.bind(var7)(var3);
                    var4 = var6.bind(var7)();
                    var3 = var4.done;
                    var5 = var4;
                    if(var3) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var12 = var5.value;
                    var3 = _closure1_slot14;
                    var3 = var3.bind(var7)(var12);
                    SaveGenerator(address=61);
case 51:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 52; continue _fun0005 }
case 30:
                    var11 = var3.isInstalled;
                    var10 = var3.error;
                    var9 = var2.push;
                    var4 = {};
                    var4['scheme'] = var12;
                    var4['isInstalled'] = var11;
                    var4['error'] = var10;
                    var4 = var9.bind(var2)(var4);
                    var9 = var6.bind(var7)();
                    var4 = var9.done;
                    var5 = var9;
                    if(var4) { _fun0005_ip = 49; continue _fun0005 }
case 53:
                    _fun0005_ip = 50; continue _fun0005;
case 52:
                    return var3;
case 49:
                    return var2;
case 47:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _isGameInstalledForPlatform() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var3 = var4[var3];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.isAndroid;
                    var3 = var3.bind(var5)();
                    if(var3) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var5 = var7.iosUrlSchemes;
                    var3 = function checkAllSchemes() {
                        var1 = undefined;
                        var4 = _closure1_slot16;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var5);
                    SaveGenerator(address=75);
case 58:
                    return var3;
case 59:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var5 = {};
                    var8 = var3.some;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.isInstalled;
                        return var1;
                    };
                    var6 = var8.bind(var3)(var6);
                    var5['isInstalled'] = var6;
                    var5['schemeResults'] = var3;
                    return var5;
case 60:
                    return var3;
case 56:
                    var3 = _closure1_slot14;
                    var2 = var7.androidPackageName;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=136);
case 62:
                    return var2;
case 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                    var6 = var2.isInstalled;
                    var4 = var2.error;
                    var3 = {};
                    var3['isInstalled'] = var6;
                    var5 = {};
                    var7 = var7.androidPackageName;
                    var5['scheme'] = var7;
                    var5['isInstalled'] = var6;
                    var5['error'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var3['schemeResults'] = var4;
                    return var3;
case 64:
                    return var2;
case 54:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var5 = function detectInstalledGamesWithDiagnostics() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var5;
    var1 = function _detectInstalledGamesWithDiagnostics() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 11; continue _fun0007 }
case 48:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var4 = var2.SUPPORTED_GAMES;
                    var3 = var4.map;
                    var2 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    StartGenerator();
                                    var5 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0008_ip = 66; continue _fun0008 }
case 37:
                                    var3 = _closure1_slot6;
                                    var2 = var3.isDebugMode;
                                    var4 = var2.bind(var3)();
                                    if(!var4) { _fun0008_ip = 67; continue _fun0008 }
case 3:
                                    var4 = var5.overrideInstall;
case 67:
                                    var3 = function isGameInstalledForPlatform() {
                                        var1 = undefined;
                                        var4 = _closure1_slot17;
                                        var3 = var4.apply;
                                        var1 = arguments;
                                        var2 = var1;
                                        var1 = this;
                                        var1 = var3.bind(var4)(var1, var2);
                                        return var1;
                                    };
                                    var2 = undefined;
                                    var2 = var3.bind(var2)(var5);
                                    SaveGenerator(address=56);
case 68:
                                    return var2;
case 28:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                                    var6 = var2.isInstalled;
                                    var3 = {};
                                    var3['game'] = var5;
                                    var5 = var4;
                                    if(var5) { _fun0008_ip = 71; continue _fun0008 }
case 61:
                                    var5 = var6;
case 71:
                                    var3['isInstalled'] = var5;
                                    var3['overridden'] = var4;
                                    var4 = var2.schemeResults;
                                    var3['schemeResults'] = var4;
                                    return var3;
case 69:
                                    return var2;
case 66:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure5_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure5_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = var2.bind(var5)();
                    var4 = var3.bind(var4)(var2);
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.all;
                    var2 = var2.bind(var3)(var4);
                    SaveGenerator(address=84);
case 72:
                    return var2;
case 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 73; continue _fun0007 }
case 74:
                    return var2;
case 73:
                    return var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var4 = function detectInstalledGames() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var4;
    var1 = function _detectInstalledGames() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var5 = var2.bind(var3)();
                    var3 = _closure1_slot10;
                    var6 = null;
                    if(!(var6 !== var3)) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                    var3 = _closure1_slot11;
                    if(!(var6 !== var3)) { _fun0009_ip = 77; continue _fun0009 }
case 79:
                    var3 = _closure1_slot11;
                    var6 = var5 - var3;
                    var3 = 3600000;
                    if(!(!(var6 < var3))) { _fun0009_ip = 80; continue _fun0009 }
case 77:
                    var7 = _closure1_slot9;
                    var6 = var7.info;
                    var3 = 'detectInstalledGames: Cache not valid, calling detectInstalledGamesWithDiagnostics';
                    var3 = var6.bind(var7)(var3);
                    var6 = _closure1_slot18;
                    var3 = undefined;
                    var3 = var6.bind(var3)();
                    SaveGenerator(address=103);
case 40:
                    return var3;
case 81:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                    var7 = var3.filter;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.isInstalled;
                        return var1;
                    };
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.game;
                        return var1;
                    };
                    var4 = var6.bind(var7)(var4);
                    _closure1_slot10 = var4;
                    _closure1_slot11 = var5;
                    return var4;
case 82:
                    return var3;
case 80:
                    var5 = _closure1_slot9;
                    var4 = var5.info;
                    var3 = 'detectInstalledGames: Cache hit';
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure1_slot10;
                    return var2;
case 75:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _getTopPriorityGame() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 63; continue _fun0010 }
case 76:
                    var4 = _closure1_slot20;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
                    SaveGenerator(address=29);
case 84:
                    return var2;
case 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                    var5 = var2.filter;
                    var4 = function(arg1) {
                        var3 = _closure1_slot5;
                        var2 = var3.isMember;
                        var1 = arg1;
                        var1 = var1.guildId;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        var3 = _closure1_slot6;
                        var2 = var3.hasShownGame;
                        var1 = arg1;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var5 = var4.bind(var5)(var3);
                    var6 = var5.length;
                    var4 = 0;
                    var3 = null;
                    if(!(var4 !== var6)) { _fun0010_ip = 88; continue _fun0010 }
case 72:
                    var4 = global;
                    var7 = var4.Math;
                    var6 = var7.floor;
                    var8 = var4.Math;
                    var4 = var8.random;
                    var8 = var4.bind(var8)();
                    var4 = var5.length;
                    var4 = var8 * var4;
                    var4 = var6.bind(var7)(var4);
                    var3 = var5[var4];
case 88:
                    return var3;
case 86:
                    return var2;
case 63:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var11 = var7.AnalyticEvents;
    var _closure1_slot7 = var11;
    var7 = var7.Consents;
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var9[var7];
    var11 = var10.bind(var1)(var7);
    var7 = var11.prototype;
    var10 = Object.create(var7, {constructor: {value: var11}});
    var15 = 'GameDetectionUtils';
    var16 = var10;
    var7 = new var16[var11](var15, var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot9 = var7;
    var7 = null;
    var _closure1_slot10 = var7;
    var _closure1_slot11 = var7;
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/game_community_upsell/native/GameDetectionUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function invalidateInstalledGamesCache() {
        var1 = null;
        _closure1_slot10 = var1;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var3['invalidateInstalledGamesCache'] = var7;
    var3['isGameInstalled'] = var6;
    var3['detectInstalledGamesWithDiagnostics'] = var5;
    var3['detectInstalledGames'] = var4;
    var2 = function getTopPriorityGame() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getTopPriorityGame'] = var2;
    return var1;
})();