// app/modules/gateway/LocalPresenceStateManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function LocalPresenceStateManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var1 = _closure1_slot2;
                var4 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var5, var4);
                var11 = new Array(1);
                var3 = false;
                var11[0] = var3;
                var1 = _closure1_slot5;
                var10 = var1.bind(var6)(var4);
                var4 = _closure1_slot4;
                var1 = _closure1_slot8;
                var1 = var1.bind(var6)();
                if(var1) { _fun0002_ip = 72; continue _fun0002 }
 59:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var11);
                _fun0002_ip = 106; continue _fun0002;
 72:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var6)(var5);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 106:
                var1 = var4.bind(var6)(var5, var1);
                var4 = arg1;
                var1['socket'] = var4;
                var1['switchingAccounts'] = var3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var2 = var4[var2];
                var5 = var3.bind(var6)(var2);
                var3 = var1.emitPresenceUpdate;
                var2 = var3.bind;
                var4 = var2.bind(var3)(var1);
                var3 = 5;
                var2 = 20000;
                var2 = var5.bind(var6)(var3, var2, var4);
                var1['didCommit'] = var2;
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
        var1 = 'getInitialState';
        var5['key'] = var1;
        var1 = function value() {
            var2 = _closure1_slot7;
            var1 = var2.getLocalPresence;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getNextState';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot7;
            var1 = var2.getLocalPresence;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'shouldCommit';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.socket;
            var1 = var2.isSessionEstablished;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'emitPresenceUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var10 = var1.status;
            var9 = var1.since;
            var8 = var1.activities;
            var7 = var1.afk;
            var1 = this;
            var2 = var1.socket;
            var1 = var2.presenceUpdate;
            var11 = var2;
            var1 = var11[var1](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var1 = var2.switchingAccounts;
            var4 = !var1;
            var3 = var2.update;
            var1 = {};
            var1 = var3.bind(var2)(var1, var4);
            var1 = false;
            var2['switchingAccounts'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleAccountSwitch';
        var5['key'] = var7;
        var6 = function value() {
            var3 = this;
            var1 = true;
            var3['switchingAccounts'] = var1;
            var1 = var3.reset;
            var1 = var1.bind(var3)();
            var2 = var3.emitPresenceUpdate;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 8;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/LocalPresenceStateManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();