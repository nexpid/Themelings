// app/lib/guild/GuildMemberRequester.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildMemberRequestState(arg1, arg2) {
            var4 = arg1;
            var3 = this;
            var _closure3_slot0 = var4;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = global;
            var6 = var5.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var10 = var7;
            var6 = new var10[var6](var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['_pendingRequests'] = var6;
            var6 = var5.Set;
            var7 = var6.prototype;
            var7 = Object.create(var7, {constructor: {value: var6}});
            var10 = var7;
            var6 = new var10[var6](var9);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['_sentRequests'] = var6;
            var5 = var5.Set;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var10 = var6;
            var5 = new var10[var5](var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var3['_unacknowledgedRequests'] = var5;
            var3['_guildId'] = var4;
            var2 = function(arg1) {
                var4 = _closure3_slot1;
                var3 = _closure3_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var3['_guildMemberExists'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'acknowledge';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var3 = arg1;
            var1 = this;
            var4 = var1._unacknowledgedRequests;
            var2 = var4.delete;
            var2 = var2.bind(var4)(var3);
            var2 = var1._pendingRequests;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'flushRequests';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var3 = var1._pendingRequests;
                var4 = var3.size;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0001_ip = 97; continue _fun0001 }
 26:
                var5 = new Array(0);
                var _closure3_slot1 = var5;
                var6 = var1._pendingRequests;
                var4 = var6.forEach;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure3_slot0;
                        var2 = var4._guildMemberExists;
                        var2 = var2.bind(var4)(var3);
                        if(var2) { _fun0002_ip = 74; continue _fun0002 }
 24:
                        var2 = _closure3_slot0;
                        var5 = var2._unacknowledgedRequests;
                        var4 = var5.add;
                        var4 = var4.bind(var5)(var3);
                        var4 = var2._sentRequests;
                        var2 = var4.add;
                        var2 = var2.bind(var4)(var3);
                        var2 = _closure3_slot1;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
 74:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var6)(var2);
                var2 = var5.length;
                if(!(var2 > var3)) { _fun0001_ip = 81; continue _fun0001 }
 64:
                var4 = var1._guildId;
                var3 = arg1;
                var2 = undefined;
                var2 = var3.bind(var2)(var4, var5);
 81:
                var2 = var1._pendingRequests;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
 97:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'requestUnacknowledged';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = var2._unacknowledgedRequests;
                var1 = var1.size;
                var3 = 0;
                var1 = var3 !== var1;
                if(!var1) { _fun0003_ip = 73; continue _fun0003 }
 29:
                var6 = var2._unacknowledgedRequests;
                var5 = var6.forEach;
                var4 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure3_slot0;
                        var2 = var4._guildMemberExists;
                        var2 = var2.bind(var4)(var3);
                        var1 = _closure3_slot0;
                        if(var2) { _fun0004_ip = 46; continue _fun0004 }
 28:
                        var4 = var1._pendingRequests;
                        var2 = var4.add;
                        var2 = var2.bind(var4)(var3);
                        _fun0004_ip = 62; continue _fun0004;
 46:
                        var2 = var1._unacknowledgedRequests;
                        var1 = var2.delete;
                        var1 = var1.bind(var2)(var3);
 62:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var2 = var2._pendingRequests;
                var2 = var2.size;
                var2 = var3 !== var2;
                if(!var2) { _fun0003_ip = 70; continue _fun0003 }
 68:
                var2 = undefined;
 70:
                var1 = var2;
 73:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'request';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = var1._guildMemberExists;
                var2 = var2.bind(var1)(var3);
                if(var2) { _fun0005_ip = 78; continue _fun0005 }
 20:
                var4 = var1._sentRequests;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0005_ip = 78; continue _fun0005 }
 39:
                var4 = var1._pendingRequests;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0005_ip = 78; continue _fun0005 }
 58:
                var2 = var1._pendingRequests;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
 78:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildMemberRequester(arg1, arg2) {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot3;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = {};
            var3['_guildStates'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.DelayedCall;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var8 = 0;
            var7 = function() {
                var2 = _closure3_slot0;
                var1 = var2.flushRequests;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var4;
            var2 = new var9[var6](var8, var7, var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_flush'] = var2;
            var2 = arg1;
            var3['_guildMemberExists'] = var2;
            var2 = arg2;
            var3['_onChange'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'reset';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var2 = {};
            var1['_guildStates'] = var2;
            var2 = var1._flush;
            var1 = var2.cancel;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'request';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = this;
                var3 = var1._getGuildState;
                var2 = arg1;
                var4 = var3.bind(var1)(var2);
                var3 = var4.request;
                var2 = arg2;
                var2 = var3.bind(var4)(var2);
                var3 = false;
                if(!(var3 !== var2)) { _fun0006_ip = 54; continue _fun0006 }
 37:
                var2 = var1._flush;
                var1 = var2.delay;
                var1 = var1.bind(var2)(var3);
 54:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'acknowledge';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3._getGuildState;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.acknowledge;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'flushRequests';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.forEach;
            var3 = var3._guildStates;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.flushRequests;
                var1 = _closure3_slot0;
                var1 = var1._onChange;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'requestUnacknowledged';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.reduce;
                var5 = var2._guildStates;
                var4 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var2 = arg2;
                        var1 = var2.requestUnacknowledged;
                        var3 = var1.bind(var2)();
                        var1 = false;
                        var1 = var1 !== var3;
                        if(var1) { _fun0008_ip = 25; continue _fun0008 }
 22:
                        var1 = var2;
 25:
                        return var1;
                    }
                };
                var3 = false;
                var3 = var6.bind(var7)(var5, var4, var3);
                if(!var3) { _fun0007_ip = 75; continue _fun0007 }
 59:
                var3 = var2._flush;
                var2 = var3.delay;
                var2 = var2.bind(var3)();
 75:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = '_getGuildState';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var1 = var2._guildStates;
                var1 = var1[var4];
                var3 = null;
                if(!(var3 == var1)) { _fun0009_ip = 71; continue _fun0009 }
 22:
                var3 = var2._guildStates;
                var6 = _closure1_slot5;
                var7 = var2._guildMemberExists;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var8 = var4;
                var2 = new var9[var6](var8, var7, var6);
                var2 = var2 instanceof Object ? var2 : var5;
                var3[var4] = var2;
                var1 = var2;
 71:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[5] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/guild/GuildMemberRequester.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();