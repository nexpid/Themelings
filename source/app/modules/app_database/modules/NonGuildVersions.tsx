// app/modules/app_database/modules/NonGuildVersions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.prototype;
    var5 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'NonGuildVersions';
    var13 = var5;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot7 = var4;
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function NonGuildVersions() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = this;
                var _closure3_slot0 = var4;
                var6 = _closure1_slot4;
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var6.bind(var1)(var4, var3);
                var3 = {};
                var6 = function CONNECTION_OPEN(arg1, arg2) {
                    var4 = _closure3_slot0;
                    var3 = var4.handleConnectionOpen;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3['CONNECTION_OPEN'] = var6;
                var6 = function BACKGROUND_SYNC(arg1, arg2) {
                    var4 = _closure3_slot0;
                    var3 = var4.handleConnectionOpen;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3['BACKGROUND_SYNC'] = var6;
                var4['actions'] = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.isCacheEnabled;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot6;
                var3 = var4.addChangeListener;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 6;
                var5 = var9[var5];
                var7 = var8.bind(var1)(var5);
                var6 = var7.throttle;
                var5 = 8;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.Millis;
                var8 = var5.SECOND;
                var5 = 10;
                var5 = var5 * var8;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.database;
                        var4 = var2.bind(var3)();
                        var2 = null;
                        if(!(var2 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var3 = var4.transaction;
                        var2 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var3 = arg1;
                                var4 = _closure1_slot6;
                                var2 = var4.getGuildId;
                                var6 = var2.bind(var4)();
                                var2 = null;
                                if(!(var2 != var6)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                                var2 = global;
                                var4 = var2.isNaN;
                                var2 = var2.Number;
                                var5 = undefined;
                                var2 = var2.bind(var5)(var6);
                                var2 = var4.bind(var5)(var2);
                                if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                                var4 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var2 = 7;
                                var2 = var7[var2];
                                var4 = var4.bind(var5)(var2);
                                var2 = var4.nonGuildVersionsTransaction;
                                var5 = var2.bind(var4)(var3);
                                var4 = var5.put;
                                var2 = {};
                                var7 = 'initial_guild_id';
                                var2['id'] = var7;
                                var2['versionString'] = var6;
                                var2 = var4.bind(var5)(var2);
                                _fun0003_ip = 9; continue _fun0003;
case 6:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 7;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.nonGuildVersionsTransaction;
                                var3 = var1.bind(var2)(var3);
                                var2 = var3.delete;
                                var1 = 'initial_guild_id';
                                var1 = var2.bind(var3)(var1);
case 9:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
case 4:
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var2, var5);
                var2 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'getCommittedVersions';
        var5['key'] = var2;
        var7 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 2; continue _fun0004 }
case 10:
                    var5 = undefined;
                    var2 = undefined;
                    var6 = undefined;
case 11: // try_start_0
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 7;
                    var3 = var7[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.nonGuildVersions;
                    var3 = var3.bind(var4)();
                    var2 = var3;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var3 = var2;
                    var2 = var3.getMany;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=75);
case 14:
                    return var2;
case 15:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var4 = var2.map;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = arg1;
                            var2 = var3.id;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = 'version';
                            var2 = var2 in var3;
                            if(var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                            var2 = var3.versionString;
                            _fun0005_ip = 5; continue _fun0005;
case 18:
                            var2 = var3.version;
case 5:
                            var1[1] = var2;
                            return var1;
                        }
                    };
                    var3 = var4.bind(var2)(var3);
                    var6 = var3;
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.fromEntries;
                    if(!(var7 == var3)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var3 = new Array(0);
                    _fun0004_ip = 22; continue _fun0004;
case 20:
                    var3 = var6;
case 22:
                    var3 = var4.bind(var5)(var3);
case 23: // try_end0
                    return var3;
case 16:
                    return var2;
case 12:
                    var2 = {};
                    return var2;
case 24: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot7;
                    var3 = var4.warn;
                    var2 = "couldn't load guild versions";
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = {};
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function getCommittedVersions() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var2 = var4.apiCodeVersion;
                var1 = null;
                if(!(var1 != var2)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.nonGuildVersionsTransaction;
                var1 = arg2;
                var3 = var2.bind(var3)(var1);
                var2 = var3.put;
                var1 = {};
                var5 = 'api_code_version';
                var1['id'] = var5;
                var4 = var4.apiCodeVersion;
                var1['version'] = var4;
                var1 = var2.bind(var3)(var1);
case 25:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var5 = Object.create(var4, {constructor: {value: var2}});
    var13 = var5;
    var4 = new var13[var2](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_database/modules/NonGuildVersions.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['NonGuildVersions'] = var2;
    return var1;
})();