// app/stores/PermissionSpeakStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var8 = true;
    var2['value'] = var8;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = false;
    var _closure1_slot11 = var2;
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function PermissionSpeakStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var5 = var2.Storage;
                var4 = var5.get;
                var2 = 'hideSuppressWarning';
                var2 = var4.bind(var5)(var2);
                if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = _closure1_slot13;
case 9:
                _closure1_slot13 = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'isAFKChannel';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot7;
                var3 = var4.getChannel;
                var1 = _closure1_slot10;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var5 = _closure1_slot8;
                var4 = var5.getGuild;
                var2 = var3.getGuildId;
                var2 = var2.bind(var3)();
                var2 = var4.bind(var5)(var2);
                var1 = var1 != var2;
                if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = var3.id;
                var2 = var2.afkChannelId;
                var1 = var3 === var2;
case 13:
                return var1;
case 11:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'shouldShowWarning';
        var5['key'] = var7;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = _closure1_slot7;
                var3 = var4.getChannel;
                var1 = _closure1_slot10;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var3 = var4.isGuildStageVoice;
                var1 = var3.bind(var4)();
case 15:
                if(var1) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var1 = _closure1_slot12;
case 17:
                var1 = !var1;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PermissionSpeakStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen(arg1) {
        var1 = arg1;
        var1 = var1.sessionId;
        var _closure1_slot9 = var1;
        var1 = false;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleConnectionClosed() {
        var1 = null;
        _closure1_slot9 = var1;
        var _closure1_slot10 = var1;
        var1 = true;
        _closure1_slot12 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_CLOSED'] = var9;
    var9 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var2 = arg2;
                var5 = _closure1_slot9;
                var4 = var2.sessionId;
                if(!(var5 === var4)) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var5 = _closure1_slot11;
                var4 = var2.suppress;
                if(!(var5 !== var4)) { _fun0006_ip = 9; continue _fun0006 }
case 21:
                var4 = var2.suppress;
                _closure1_slot11 = var4;
                var4 = !var4;
                _closure1_slot12 = var4;
case 9:
                var5 = _closure1_slot10;
                var4 = var2.channelId;
                if(!(var5 !== var4)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                var4 = var2.channelId;
                _closure1_slot10 = var4;
                var4 = _closure1_slot11;
                var4 = !var4;
                _closure1_slot12 = var4;
case 22:
                var4 = _closure1_slot13;
                if(var4) { _fun0006_ip = 8; continue _fun0006 }
case 24:
                var5 = var2.channelId;
                var2 = null;
                var4 = var2 == var5;
case 8:
                var2 = true;
                var1 = true;
                if(!var4) { _fun0006_ip = 19; continue _fun0006 }
case 25:
                _closure1_slot12 = var2;
                var1 = true;
case 19:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var9;
    var4 = function handleClearWarning(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.forever;
            var2 = true;
            _closure1_slot12 = var2;
            if(!var3) { _fun0007_ip = 5; continue _fun0007 }
case 26:
            _closure1_slot13 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = _closure1_slot13;
            var1 = 'hideSuppressWarning';
            var1 = var3.bind(var4)(var1, var2);
case 5:
            var1 = undefined;
            return var1;
        }
    };
    var2['PERMISSION_CLEAR_SUPPRESS_WARNING'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/PermissionSpeakStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();