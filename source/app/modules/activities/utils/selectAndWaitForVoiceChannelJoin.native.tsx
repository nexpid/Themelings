// app/modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 172; continue _fun0002 }
 15:
                    var8 = var2.channelId;
                    var6 = var8;
                    var _closure4_slot0 = var8;
                    var2 = var2.timeoutMs;
                    var9 = undefined;
                    if(!(var2 === var9)) { _fun0002_ip = 45; continue _fun0002 }
 39:
                    var2 = 10000;
 45:
                    var _closure4_slot1 = var2;
                    var5 = undefined;
                    SaveGenerator(address=55);
 53:
                    return var9;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 169; continue _fun0002 }
 61:
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
 0:
                                var2 = _closure1_slot8;
                                var1 = var2.getVoiceChannelId;
                                var2 = var1.bind(var2)();
                                var1 = _closure4_slot0;
                                var1 = var2 !== var1;
                                if(var1) { _fun0003_ip = 63; continue _fun0003 }
 31:
                                var2 = global;
                                var5 = var2.clearTimeout;
                                var4 = _closure5_slot2;
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var2 = _closure5_slot0;
                                var2 = var2.bind(var3)();
                                var1 = false;
 63:
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
 128: // try_start_0
                    SaveGenerator(address=132);
 130:
                    return var5;
 132:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 143; continue _fun0002 }
 138: // try_end0
                    var6 = true;
                    return var6;
 143:
                    return var5;
 146: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = var5;
                    var4 = _closure1_slot9;
                    var4 = var5 instanceof var4;
                    if(var4) { _fun0002_ip = 164; continue _fun0002 }
 162:
                    throw var3;
 164:
                    var3 = false;
                    return var3;
 169:
                    return var2;
 172:
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
 0:
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
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
    var4 = native2;
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