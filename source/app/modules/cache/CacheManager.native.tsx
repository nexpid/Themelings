// app/modules/cache/CacheManager.native.tsx
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
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'CacheStore';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var8 = var4.MINUTE;
    var4 = 15;
    var4 = var4 * var8;
    var _closure1_slot11 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function CacheManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var4 = var1.handleConnectionOpen;
                var2['POST_CONNECTION_OPEN'] = var4;
                var4 = var1.handleConnectionClose;
                var2['CONNECTION_CLOSED'] = var4;
                var4 = function APP_STATE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAppStateUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['APP_STATE_UPDATE'] = var4;
                var3 = function WINDOW_FOCUS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleWindowFocus;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['WINDOW_FOCUS'] = var3;
                var1['actions'] = var2;
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
        var1 = 'handleConnectionOpen';
        var5['key'] = var1;
        var1 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.doesDatabaseVersionMatchJsConstants;
            var4 = var2.bind(var3)();
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    if(var1) { _fun0003_ip = 41; continue _fun0003 }
 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.writeCaches;
                    var1 = var1.bind(var2)();
 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleConnectionClose';
        var5['key'] = var7;
        var7 = function value() {
            var1 = false;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleAppStateUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var4 = var1.state;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var5.isAndroid;
                var2 = var2.bind(var5)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 12;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.AppStates;
                if(var2) { _fun0004_ip = 79; continue _fun0004 }
 71:
                var2 = var5.INACTIVE;
                _fun0004_ip = 85; continue _fun0004;
 79:
                var2 = var5.BACKGROUND;
 85:
                var2 = var2 === var4;
                if(!var2) { _fun0004_ip = 106; continue _fun0004 }
 92:
                var5 = _closure1_slot8;
                var4 = var5.isConnected;
                var2 = var4.bind(var5)();
 106:
                if(!var2) { _fun0004_ip = 139; continue _fun0004 }
 109:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.writeCaches;
                var1 = var1.bind(var2)();
 139:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleWindowFocus';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var1 = var1.focused;
                if(var1) { _fun0005_ip = 132; continue _fun0005 }
 12:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var3 = var1.bind(var2)();
                var2 = _closure1_slot9;
                var2 = var2.lastWriteTime;
                var3 = var3 - var2;
                var2 = _closure1_slot11;
                if(!(!(var3 > var2))) { _fun0005_ip = 79; continue _fun0005 }
 56:
                var4 = _closure1_slot10;
                var3 = var4.verbose;
                var2 = 'Not writing cache from window unfocus';
                var2 = var3.bind(var4)(var2);
                _fun0005_ip = 132; continue _fun0005;
 79:
                var4 = _closure1_slot10;
                var3 = var4.verbose;
                var2 = 'Writing cache from window unfocus';
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.writeCaches;
                var1 = var1.bind(var2)();
 132:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
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
    var4 = 'modules/cache/CacheManager.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();