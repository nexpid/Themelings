// app/modules/notifications/friend_online/FriendOnlineTimer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _reportSessionMeaningfullyOnline() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7: // try_start_0
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var6 = _closure1_slot11;
                    var6 = var6.USER_MEANINGFULLY_ONLINE;
                    var3['url'] = var6;
                    var6 = true;
                    var3['rejectWithError'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=77);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11: // try_end0
                    _fun0002_ip = 12; continue _fun0002;
case 10:
                    return var3;
case 13: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var2 = var6;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 11;
                    var4 = var5[var4];
                    var5 = undefined;
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.HTTPResponseError;
                    var4 = var6 instanceof var4;
                    if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = var2;
                    var6 = var4.status;
                    var4 = 429;
                    if(!(var4 === var6)) { _fun0002_ip = 14; continue _fun0002 }
case 12:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var6 = var6[var4];
                    var4 = undefined;
                    var8 = var7.bind(var4)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'FRIEND_ONLINE_TIMER_REPORTED';
                    var6['type'] = var9;
                    var9 = global;
                    var10 = var9.Date;
                    var9 = var10.now;
                    var9 = var9.bind(var10)();
                    var6['timestampMs'] = var9;
                    var6 = var7.bind(var8)(var6);
                    return var4;
case 14:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 12;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.captureException;
                    var3 = var2;
                    var2 = {};
                    var6 = {};
                    var7 = 'session_timer';
                    var6['app_context'] = var7;
                    var2['tags'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = undefined;
                    return var2;
case 6:
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
    var1 = function isStatusEffectivelyOnline(arg1) {
        var2 = _closure1_slot12;
        var2 = var2.ONLINE;
        var3 = new Array(2);
        var3[0] = var2;
        var1 = _closure1_slot12;
        var1 = var1.STREAMING;
        var3[1] = var1;
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot16 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var8 = 5;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var8 * var4;
    var _closure1_slot13 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function FriendOnlineTimerManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 18; continue _fun0003;
case 16:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 18:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = null;
                var1['timerId'] = var3;
                var3 = {};
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.start;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var4 = function CONNECTION_RESUMED() {
                    var2 = _closure3_slot0;
                    var1 = var2.start;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['CONNECTION_RESUMED'] = var4;
                var4 = function CONNECTION_CLOSED() {
                    var2 = _closure3_slot0;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['CONNECTION_CLOSED'] = var4;
                var4 = function CONNECTION_INTERRUPTED() {
                    var2 = _closure3_slot0;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['CONNECTION_INTERRUPTED'] = var4;
                var4 = function SELF_PRESENCE_STORE_UPDATE() {
                    var2 = _closure3_slot0;
                    var1 = var2.start;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['SELF_PRESENCE_STORE_UPDATE'] = var4;
                var1['actions'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure1_slot10;
                        var2 = var3.isCooldownElapsed;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var3 = _closure3_slot0;
                        var4 = var3.timerId;
                        var3 = null;
                        var2 = var3 == var4;
case 19:
                        if(!var2) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var5 = _closure1_slot16;
                        var4 = _closure1_slot9;
                        var3 = var4.getStatus;
                        var4 = var3.bind(var4)();
                        var3 = undefined;
                        var2 = var5.bind(var3)(var4);
case 21:
                        if(!var2) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var2 = _closure3_slot0;
                        var3 = global;
                        var5 = var3.setTimeout;
                        var4 = _closure1_slot13;
                        var3 = undefined;
                        var1 = function() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var2 = _closure3_slot0;
                                var1 = null;
                                var2['timerId'] = var1;
                                var4 = _closure1_slot16;
                                var2 = _closure1_slot9;
                                var1 = var2.getStatus;
                                var2 = var1.bind(var2)();
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                if(!var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                                var4 = _closure1_slot10;
                                var3 = var4.isCooldownElapsed;
                                var2 = var3.bind(var4)();
case 25:
                                if(!var2) { _fun0005_ip = 4; continue _fun0005 }
case 27:
                                var2 = function reportSessionMeaningfullyOnline() {
                                    var1 = undefined;
                                    var4 = _closure1_slot15;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                var2 = var2.bind(var1)();
case 4:
                                return var1;
                            }
                        };
                        var1 = var5.bind(var3)(var1, var4);
                        var2['timerId'] = var1;
case 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['start'] = var3;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = var2.timerId;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                        var3 = global;
                        var5 = var3.clearTimeout;
                        var1 = _closure3_slot0;
                        var4 = var1.timerId;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var1['timerId'] = var2;
case 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['clear'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var2 = this;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/friend_online/FriendOnlineTimer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();