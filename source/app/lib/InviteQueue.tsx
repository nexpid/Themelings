// app/lib/InviteQueue.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var11 = 0;
    var2 = var6[var11];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var10 = 1;
    var2 = var6[var10];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var9 = 2;
    var2 = var6[var9];
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
    var2 = var2.Millis;
    var2 = var2.SECOND;
    var2 = var10 * var2;
    var5 = 10;
    var2 = var2 + var5;
    var _closure1_slot8 = var2;
    var2 = {};
    var2['GROUP_DM'] = var11;
    var8 = 'GROUP_DM';
    var2[var11] = var8;
    var2['USER'] = var10;
    var8 = 'USER';
    var2[var10] = var8;
    var2['CHANNEL'] = var9;
    var8 = 'CHANNEL';
    var2[var9] = var8;
    var _closure1_slot9 = var2;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function InviteQueue() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var4, var2);
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 7;
                var1 = var7[var1];
                var7 = var6.bind(var3)(var1);
                var1 = var7.prototype;
                var6 = Object.create(var1, {constructor: {value: var7}});
                var12 = 'InviteQueue';
                var13 = var6;
                var1 = new var13[var7](var12, var11);
                var1 = var1 instanceof Object ? var1 : var6;
                var9 = new Array(2);
                var9[0] = var1;
                var1 = _closure1_slot8;
                var9[1] = var1;
                var1 = _closure1_slot5;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot5;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
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
        var1 = '_sendInvite';
        var5['key'] = var1;
        var1 = function value(arg1, arg2, arg3, arg4, arg5) {
            var1 = arg5;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var8 = var4.bind(var1)(var3);
            var7 = var8.sendInvite;
            var3 = arg1;
            var12 = var3.id;
            var11 = arg2;
            var10 = arg3;
            var9 = arg4;
            var13 = var8;
            var5 = var13[var7](var12, var11, var10, var9, var8);
            var4 = var5.then;
            var3 = function() {
                var4 = _closure3_slot0;
                var3 = undefined;
                var2 = null;
                var1 = true;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2 = function() {
                var4 = _closure3_slot0;
                var3 = undefined;
                var2 = null;
                var1 = false;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'drain';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var7 = arg2;
                var6 = this;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var1;
                var _closure3_slot2 = var7;
                var5 = var1.location;
                var _closure3_slot3 = var5;
                var4 = var1.inviteAnalyticsMetadata;
                var _closure3_slot4 = var4;
                var9 = var1.type;
                var8 = _closure1_slot9;
                var8 = var8.GROUP_DM;
                if(!(var8 !== var9)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var8 = _closure1_slot9;
                var8 = var8.CHANNEL;
                if(!(var8 !== var9)) { _fun0003_ip = 9; continue _fun0003 }
case 11:
                var8 = _closure1_slot9;
                var8 = var8.USER;
                if(!(var8 === var9)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 9;
                var8 = var8[var3];
                var3 = undefined;
                var9 = var9.bind(var3)(var8);
                var8 = var9.ensurePrivateChannel;
                var3 = var1.user;
                var3 = var3.id;
                var9 = var8.bind(var9)(var3);
                var8 = var9.then;
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure1_slot7;
                        var2 = var3.getChannel;
                        var1 = arg1;
                        var7 = var2.bind(var3)(var1);
                        var1 = null;
                        if(!(var1 != var7)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var6 = _closure3_slot0;
                        var5 = var6._sendInvite;
                        var2 = _closure3_slot1;
                        var11 = var2.inviteKey;
                        var10 = _closure3_slot3;
                        var9 = _closure3_slot4;
                        var8 = _closure3_slot2;
                        var13 = var6;
                        var12 = var7;
                        var1 = var13[var5](var12, var11, var10, var9, var8, var7);
case 14:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = function() {
                    var4 = _closure3_slot2;
                    var3 = undefined;
                    var2 = null;
                    var1 = false;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2 = var8.bind(var9)(var3, var2);
                _fun0003_ip = 12; continue _fun0003;
case 9:
                var3 = var6._sendInvite;
                var14 = var1.channel;
                var13 = var1.inviteKey;
                var15 = var6;
                var12 = var5;
                var11 = var4;
                var10 = var7;
                var1 = var15[var3](var14, var13, var12, var11, var10, var9);
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var15 = var5;
    var4 = new var15[var4](var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 11;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/InviteQueue.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['InvitePropertiesType'] = var2;
    return var1;
})();