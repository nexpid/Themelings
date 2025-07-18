// app/records/EmojiRecord.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native3;
    var3 = native6;
    var5 = native7;
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
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var7.bind(var1)(var4);
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var2 = function(arg1) {
        var3 = function EmojiRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var6 = this;
                var1 = _closure1_slot1;
                var4 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var1 = _closure1_slot3;
                var11 = var1.bind(var5)(var4);
                var4 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var5);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot3;
                var7 = var7.bind(var5)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
 103:
                var1 = var4.bind(var5)(var6, var1);
                var4 = var2.id;
                var1['id'] = var4;
                var4 = var2.name;
                var1['name'] = var4;
                var4 = var2.managed;
                var1['managed'] = var4;
                var4 = var2.roles;
                var1['roles'] = var4;
                var4 = var2.requiredColons;
                var1['requiredColons'] = var4;
                var5 = _closure1_slot5;
                var14 = var2.user;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var15 = var4;
                var3 = new var15[var5](var14, var13);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['user'] = var3;
                var3 = var2.animated;
                var1['animated'] = var3;
                var2 = var2.available;
                var1['available'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot0;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 7;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/EmojiRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();