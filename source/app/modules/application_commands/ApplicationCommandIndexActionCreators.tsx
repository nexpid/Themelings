// app/modules/application_commands/ApplicationCommandIndexActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchApplicationCommandIndex() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 283; continue _fun0001 }
 15:
                    var _closure4_slot0 = var2;
                    var3 = arg2;
                    var _closure4_slot1 = var3;
                    var3 = undefined;
                    var _closure4_slot2 = var3;
                    var _closure4_slot3 = var3;
                    var _closure4_slot4 = var3;
                    var _closure4_slot5 = var3;
                    var _closure4_slot6 = var3;
                    var _closure4_slot7 = var3;
                    var _closure4_slot8 = var3;
                    var4 = global;
                    var6 = var4.performance;
                    var4 = var6.now;
                    var4 = var4.bind(var6)();
                    _closure4_slot3 = var4;
                    var4 = 0;
                    _closure4_slot4 = var4;
                    var4 = new Array(0);
                    _closure4_slot5 = var4;
                    var6 = var2.type;
                    var4 = 'channel';
                    if(!(var4 !== var6)) { _fun0001_ip = 205; continue _fun0001 }
 104:
                    var4 = 'guild';
                    if(!(var4 !== var6)) { _fun0001_ip = 176; continue _fun0001 }
 112:
                    var4 = 'user';
                    if(!(var4 !== var6)) { _fun0001_ip = 157; continue _fun0001 }
 120:
                    var4 = 'application';
                    if(!(var4 === var6)) { _fun0001_ip = 232; continue _fun0001 }
 128:
                    var7 = _closure1_slot5;
                    var6 = var7.APPLICATION_COMMAND_INDEX_APPLICATION;
                    var4 = var2.applicationId;
                    var4 = var6.bind(var7)(var4);
                    _closure4_slot2 = var4;
                    _fun0001_ip = 232; continue _fun0001;
 157:
                    var4 = _closure1_slot5;
                    var4 = var4.APPLICATION_COMMAND_INDEX_USER;
                    _closure4_slot2 = var4;
                    _fun0001_ip = 232; continue _fun0001;
 176:
                    var7 = _closure1_slot5;
                    var6 = var7.APPLICATION_COMMAND_INDEX_GUILD;
                    var4 = var2.guildId;
                    var4 = var6.bind(var7)(var4);
                    _closure4_slot2 = var4;
                    _fun0001_ip = 232; continue _fun0001;
 205:
                    var6 = _closure1_slot5;
                    var4 = var6.APPLICATION_COMMAND_INDEX_CHANNEL;
                    var2 = var2.channelId;
                    var2 = var4.bind(var6)(var2);
                    _closure4_slot2 = var2;
 232:
                    var2 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                    if(var3) { _fun0002_ip = 187; continue _fun0002 }
 12:
                                    var3 = arg1;
                                    var _closure7_slot0 = var3;
                                    var4 = _closure4_slot4;
                                    var3 = 3;
                                    if(!(!(var4 >= var3))) { _fun0002_ip = 91; continue _fun0002 }
 33:
                                    var3 = global;
                                    var4 = var3.Promise;
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {constructor: {value: var4}});
                                    var8 = function(arg1) {
                                        var1 = global;
                                        var4 = var1.setTimeout;
                                        var3 = _closure7_slot0;
                                        var2 = undefined;
                                        var1 = arg1;
                                        var1 = var4.bind(var2)(var1, var3);
                                        return var1;
                                    };
                                    var9 = var3;
                                    var2 = new var9[var4](var8, var7);
                                    var3 = var2 instanceof Object ? var2 : var3;
                                    SaveGenerator(address=70);
 68:
                                    return var3;
 70:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=1);
                                    if(var2) { _fun0002_ip = 88; continue _fun0002 }
 76:
                                    var4 = _closure4_slot7;
                                    var2 = undefined;
                                    var2 = var4.bind(var2)();
                                    _fun0002_ip = 184; continue _fun0002;
 88:
                                    return var3;
 91:
                                    var5 = _closure4_slot5;
                                    var4 = var5.push;
                                    var3 = 1002;
                                    var3 = var4.bind(var5)(var3);
                                    var4 = _closure4_slot8;
                                    var3 = {};
                                    var5 = true;
                                    var3['error'] = var5;
                                    var5 = undefined;
                                    var3 = var4.bind(var5)(var3);
                                    var4 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var3 = 2;
                                    var3 = var7[var3];
                                    var5 = var4.bind(var5)(var3);
                                    var4 = var5.dispatch;
                                    var3 = {};
                                    var7 = 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE';
                                    var3['type'] = var7;
                                    var6 = _closure4_slot0;
                                    var3['target'] = var6;
                                    var2 = var4.bind(var5)(var3);
 184:
                                    return var2;
 187:
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
                    var2 = var2.bind(var3)();
                    _closure4_slot6 = var2;
                    var2 = function fetch() {
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var7 = 3;
                        var3 = var2[var7];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var6 = _closure4_slot2;
                        var2['url'] = var6;
                        var6 = _closure4_slot4;
                        var7 = var7 - var6;
                        var6 = 1;
                        var6 = var7 - var6;
                        var2['retries'] = var6;
                        var5 = _closure4_slot1;
                        var5 = var5.signal;
                        var2['signal'] = var5;
                        var5 = function onRequestCreated() {
                            var1 = _closure4_slot4;
                            var1 = parseFloat(var1);
                            var2 = var1 + 1;
                            _closure4_slot4 = var2;
                            return var1;
                        };
                        var2['onRequestCreated'] = var5;
                        var5 = false;
                        var2['rejectWithError'] = var5;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.then;
                        var2 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var4 = arg1;
                                var1 = var4.status;
                                var5 = 202;
                                if(!(var5 !== var1)) { _fun0003_ip = 102; continue _fun0003 }
 15:
                                var2 = _closure4_slot8;
                                var1 = {};
                                var3 = false;
                                var1['error'] = var3;
                                var3 = undefined;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var1 = 2;
                                var1 = var7[var1];
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var7 = 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS';
                                var1['type'] = var7;
                                var6 = _closure4_slot0;
                                var1['target'] = var6;
                                var4 = var4.body;
                                var1['index'] = var4;
                                var1 = var2.bind(var3)(var1);
                                _fun0003_ip = 136; continue _fun0003;
 102:
                                var4 = _closure4_slot5;
                                var3 = var4.push;
                                var3 = var3.bind(var4)(var5);
                                var4 = _closure4_slot6;
                                var3 = undefined;
                                var2 = 5000;
                                var1 = var4.bind(var3)(var2);
 136:
                                return var1;
                            }
                        };
                        var1 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var3 = arg1;
                                var1 = _closure4_slot1;
                                var1 = var1.signal;
                                var1 = var1.aborted;
                                if(var1) { _fun0004_ip = 232; continue _fun0004 }
 28:
                                var1 = var3.status;
                                var6 = 429;
                                if(!(var6 !== var1)) { _fun0004_ip = 155; continue _fun0004 }
 43:
                                var5 = _closure4_slot5;
                                var4 = var5.push;
                                var7 = var3.status;
                                var1 = null;
                                var8 = var1 != var7;
                                var1 = 1000;
                                if(!var8) { _fun0004_ip = 75; continue _fun0004 }
 72:
                                var1 = var7;
 75:
                                var1 = var4.bind(var5)(var1);
                                var4 = _closure4_slot8;
                                var1 = {};
                                var5 = true;
                                var1['error'] = var5;
                                var5 = undefined;
                                var1 = var4.bind(var5)(var1);
                                var4 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var1 = 2;
                                var1 = var7[var1];
                                var5 = var4.bind(var5)(var1);
                                var4 = var5.dispatch;
                                var1 = {};
                                var7 = 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE';
                                var1['type'] = var7;
                                var7 = _closure4_slot0;
                                var1['target'] = var7;
                                var1 = var4.bind(var5)(var1);
                                _fun0004_ip = 230; continue _fun0004;
 155:
                                var5 = _closure4_slot5;
                                var4 = var5.push;
                                var4 = var4.bind(var5)(var6);
                                var5 = _closure4_slot6;
                                var3 = var3.body;
                                var6 = var3.retry_after;
                                var7 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 4;
                                var3 = var4[var3];
                                var4 = undefined;
                                var3 = var7.bind(var4)(var3);
                                var3 = var3.Millis;
                                var3 = var3.SECOND;
                                var3 = var6 * var3;
                                var1 = var5.bind(var4)(var3);
 230:
                                _fun0004_ip = 273; continue _fun0004;
 232:
                                var5 = _closure4_slot5;
                                var4 = var5.push;
                                var3 = 1001;
                                var3 = var4.bind(var5)(var3);
                                var4 = _closure4_slot8;
                                var3 = {};
                                var2 = true;
                                var3['error'] = var2;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var1 = undefined;
 273:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    _closure4_slot7 = var2;
                    var4 = function end(arg1) {
                        var1 = arg1;
                        var9 = var1.error;
                        var8 = global;
                        var2 = var8.performance;
                        var1 = var2.now;
                        var2 = var1.bind(var2)();
                        var1 = _closure4_slot3;
                        var10 = var2 - var1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot4;
                        var3 = var2.APPLICATION_COMMAND_PERFORMANCE;
                        var2 = {};
                        var2['duration_ms'] = var10;
                        var2['error'] = var9;
                        var9 = _closure4_slot1;
                        var9 = var9.signal;
                        var9 = var9.aborted;
                        var2['aborted'] = var9;
                        var9 = true;
                        var2['include_applications'] = var9;
                        var11 = var8.Math;
                        var10 = var11.max;
                        var9 = _closure4_slot4;
                        var8 = 1;
                        var9 = var9 - var8;
                        var8 = 0;
                        var8 = var10.bind(var11)(var9, var8);
                        var2['retries'] = var8;
                        var8 = null;
                        var2['kind'] = var8;
                        var2['command_type'] = var8;
                        var8 = _closure4_slot2;
                        var2['url'] = var8;
                        var8 = _closure4_slot0;
                        var9 = var8.type;
                        var2['target_type'] = var9;
                        var7 = _closure1_slot7;
                        var7 = var7.bind(var1)(var8);
                        var2['target_id'] = var7;
                        var6 = _closure4_slot5;
                        var2['failure_statuses'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    _closure4_slot8 = var4;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=271);
 269:
                    return var2;
 271:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 280; continue _fun0001 }
 277:
                    return var3;
 280:
                    return var2;
 283:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function getTargetId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = 'channel';
            if(!(var2 !== var3)) { _fun0005_ip = 96; continue _fun0005 }
 16:
            var2 = 'guild';
            if(!(var2 !== var3)) { _fun0005_ip = 89; continue _fun0005 }
 24:
            var2 = 'user';
            if(!(var2 !== var3)) { _fun0005_ip = 85; continue _fun0005 }
 32:
            var2 = 'application';
            if(!(var2 !== var3)) { _fun0005_ip = 78; continue _fun0005 }
 40:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.assertNever;
            var3 = var3.bind(var4)(var1);
            return var2;
 78:
            var2 = var1.applicationId;
            return var2;
 85:
            var2 = null;
            return var2;
 89:
            var2 = var1.guildId;
            return var2;
 96:
            var1 = var1.channelId;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot4 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/ApplicationCommandIndexActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchApplicationCommandIndex() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchApplicationCommandIndex'] = var4;
    var2 = function requestApplicationCommandIndex(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST';
        var2['type'] = var5;
        var5 = arg1;
        var2['target'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['requestApplicationCommandIndex'] = var2;
    return var1;
})();