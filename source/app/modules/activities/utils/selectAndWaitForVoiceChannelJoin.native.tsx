// app/modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _selectAndWaitForVoiceChannelJoin() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var8 = var2.channelId;
                    var6 = var8;
                    var _closure4_slot0 = var8;
                    var2 = var2.timeoutMs;
                    var9 = undefined;
                    if(!(var2 === var9)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = 10000;
case 8:
                    var _closure4_slot1 = var2;
                    var5 = undefined;
                    SaveGenerator(address=55);
case 10:
                    return var9;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var7 = global;
                    var8 = var7.Promise;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var11 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var1 = global;
                        var5 = var1.setTimeout;
                        var4 = _closure4_slot1;
                        var1 = undefined;
                        var3 = function() {
                            var3 = _closure5_slot1;
                            var4 = _closure1_slot9;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var5 = 'Joining voice channel has timed out.';
                            var6 = var2;
                            var1 = new var6[var4](var5, var4);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3 = var5.bind(var1)(var3, var4);
                        var _closure5_slot2 = var3;
                        var4 = _closure1_slot8;
                        var3 = var4.addConditionalChangeListener;
                        var2 = function() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var2 = _closure1_slot8;
                                var1 = var2.getVoiceChannelId;
                                var2 = var1.bind(var2)();
                                var1 = _closure4_slot0;
                                var1 = var2 !== var1;
                                if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                                var2 = global;
                                var5 = var2.clearTimeout;
                                var4 = _closure5_slot2;
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var2 = _closure5_slot0;
                                var2 = var2.bind(var3)();
                                var1 = false;
case 14:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var12 = var7;
                    var4 = new var12[var8](var11, var10);
                    var5 = var4 instanceof Object ? var4 : var7;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var7 = 8;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.selectVoiceChannel;
                    var6 = var7.bind(var8)(var6);
case 16: // try_start_0
                    SaveGenerator(address=132);
case 17:
                    return var5;
case 18:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 19; continue _fun0002 }
case 20: // try_end0
                    var6 = true;
                    return var6;
case 19:
                    return var5;
case 21: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = var5;
                    var4 = _closure1_slot9;
                    var4 = var5 instanceof var4;
                    if(var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    throw var3;
case 22:
                    var3 = false;
                    return var3;
case 12:
                    return var2;
case 6:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var4 = global;
    var9 = var4.Object;
    var7 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var6);
    var1 = 0;
    var6 = var5[var1];
    var1 = undefined;
    var6 = var8.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var8.bind(var1)(var6);
    var7 = 7;
    var7 = var5[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var4 = var4.Error;
    var6 = var6.bind(var1)(var4);
    var4 = function(arg1) {
        var3 = function JoinTimeoutError() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 26; continue _fun0004;
case 24:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 26:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4 = var4.bind(var1)(var6);
    var _closure1_slot9 = var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function selectAndWaitForVoiceChannelJoin() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();