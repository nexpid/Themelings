// app/modules/voice_calls/CallIdleManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function isIdle() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = _closure1_slot10;
            var1 = var2.getCurrentClientVoiceChannelId;
            var5 = null;
            var7 = var1.bind(var2)(var5);
            if(!(var5 != var7)) { _fun0002_ip = 140; continue _fun0002 }
 24:
            var2 = _closure1_slot9;
            var1 = var2.getChannel;
            var2 = var1.bind(var2)(var7);
            var3 = var5 == var2;
            if(var3) { _fun0002_ip = 58; continue _fun0002 }
 45:
            var1 = var2.isPrivate;
            var1 = var1.bind(var2)();
            var3 = !var1;
 58:
            var1 = !var3;
            if(var3) { _fun0002_ip = 138; continue _fun0002 }
 64:
            var2 = var2.recipients;
            var2 = var2.length;
            var6 = 1;
            var3 = var2 > var6;
            var2 = !var3;
            if(var3) { _fun0002_ip = 135; continue _fun0002 }
 88:
            var8 = _closure1_slot11;
            var3 = var8.countVoiceStatesForChannel;
            var3 = var3.bind(var8)(var7);
            var6 = var3 > var6;
            var3 = !var6;
            if(var6) { _fun0002_ip = 132; continue _fun0002 }
 113:
            var6 = _closure1_slot8;
            var4 = var6.getSelfEmbeddedActivityForChannel;
            var4 = var4.bind(var6)(var7);
            var3 = var5 == var4;
 132:
            var2 = var3;
 135:
            var1 = var2;
 138:
            return var1;
 140:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function disconnect() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot13;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0003_ip = 159; continue _fun0003 }
 19:
            var5 = _closure1_slot10;
            var3 = var5.getCurrentClientVoiceChannelId;
            var4 = null;
            var8 = var3.bind(var5)(var4);
            if(!(var4 != var8)) { _fun0003_ip = 159; continue _fun0003 }
 40:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 9;
            var6 = var5[var6];
            var7 = var3.bind(var1)(var6);
            var6 = var7.sendBotMessage;
            var9 = _closure1_slot0;
            var2 = 10;
            var10 = var5[var2];
            var10 = var9.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.formatToPlainString;
            var2 = var5[var2];
            var2 = var9.bind(var1)(var2);
            var2 = var2.t;
            var9 = var2.XYof5O;
            var2 = {};
            var12 = 3;
            var2['number'] = var12;
            var2 = var10.bind(var11)(var9, var2);
            var2 = var6.bind(var7)(var8, var2);
            var2 = 11;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.selectVoiceChannel;
            var2 = var2.bind(var3)(var4);
 159:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var4 = 5;
    var4 = var6[var4];
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function CallIdleManager(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var5)();
                if(var1) { _fun0004_ip = 86; continue _fun0004 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0004_ip = 120; continue _fun0004;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 12;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.Timeout;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['idleTimeout'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.idleTimeout;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleConnectionClosed'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = _closure1_slot13;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        if(!var3) { _fun0005_ip = 53; continue _fun0005 }
 16:
                        var3 = _closure3_slot0;
                        var6 = var3.idleTimeout;
                        var5 = var6.start;
                        var4 = _closure1_slot14;
                        var3 = 180000;
                        var2 = true;
                        var2 = var5.bind(var6)(var3, var4, var2);
 53:
                        return var1;
                    }
                };
                var1['handleEmbeddedActivityDisconnect'] = var3;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var3 = _closure1_slot13;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var4 = _closure3_slot0;
                        var6 = var4.idleTimeout;
                        if(var3) { _fun0006_ip = 41; continue _fun0006 }
 29:
                        var3 = var6.stop;
                        var3 = var3.bind(var6)();
                        _fun0006_ip = 65; continue _fun0006;
 41:
                        var5 = var6.start;
                        var4 = _closure1_slot14;
                        var3 = 180000;
                        var2 = false;
                        var2 = var5.bind(var6)(var3, var4, var2);
 65:
                        return var1;
                    }
                };
                var1['handleVoiceStateUpdates'] = var2;
                var2 = {};
                var3 = var1.handleVoiceStateUpdates;
                var2['VOICE_STATE_UPDATES'] = var3;
                var3 = var1.handleConnectionClosed;
                var2['CONNECTION_CLOSED'] = var3;
                var3 = var1.handleEmbeddedActivityDisconnect;
                var2['EMBEDDED_ACTIVITY_CLOSE'] = var3;
                var1['actions'] = var2;
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
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/CallIdleManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();