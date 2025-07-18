// app/lib/guild/GuildChannelSubscriptions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function serializeChannelRanges(arg1) {
        var4 = arg1;
        var1 = {};
        var _closure2_slot0 = var1;
        var3 = var4.forEach;
        var2 = function(arg1, arg2) {
            var3 = _closure2_slot0;
            var2 = arg1;
            var1 = arg2;
            var3[var1] = var2;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot4 = var1;
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
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function GuildChannelSubscriptions(arg1) {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = {};
            var3['_subscriptions'] = var2;
            var2 = arg1;
            var3['_onChange'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'reset';
        var1['key'] = var2;
        var2 = function value() {
            var2 = {};
            var1 = this;
            var1['_subscriptions'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var3 = _closure1_slot4;
            var2 = var4._get;
            var1 = arg1;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = '_get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = this;
                var2 = var1._subscriptions;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0001_ip = 79; continue _fun0001 }
 22:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var2 = {};
                var3 = 5;
                var2['max'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var6 = var3;
                var5 = var2;
                var2 = new var6[var4](var5, var4);
                var1 = var2 instanceof Object ? var2 : var3;
 79:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1._subscriptions;
            var1 = arg1;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'subscribe';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = arg1;
                var9 = arg2;
                var8 = arg3;
                var4 = this;
                var1 = var4._get;
                var7 = var1.bind(var4)(var5);
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var6 = undefined;
                var10 = var3.bind(var6)(var1);
                var3 = var10.isEqual;
                var1 = var7.get;
                var1 = var1.bind(var7)(var9);
                var1 = var3.bind(var10)(var1, var8);
                var1 = !var1;
                if(!var1) { _fun0002_ip = 120; continue _fun0002 }
 76:
                var3 = var7.set;
                var3 = var3.bind(var7)(var9, var8);
                var3 = var4._subscriptions;
                var3[var5] = var7;
                var3 = var4._onChange;
                var2 = _closure1_slot4;
                var2 = var2.bind(var6)(var7);
                var2 = var3.bind(var4)(var5, var2);
                var1 = true;
 120:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/guild/GuildChannelSubscriptions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 100;
    var3['MINIMUM_RANGE'] = var2;
    var2 = new Array(1);
    var4 = [0, 99];
    var2[0] = var4;
    var3['DEFAULT_RANGES'] = var2;
    return var1;
})();