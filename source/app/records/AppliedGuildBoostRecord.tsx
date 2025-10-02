// app/records/AppliedGuildBoostRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot5 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var5 = function AppliedGuildBoostRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var2);
                var1 = _closure1_slot3;
                var10 = var1.bind(var4)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot5;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
                var1 = var2.bind(var4)(var5, var1);
                var2 = var3.id;
                var1['id'] = var2;
                var2 = var3.guildId;
                var1['guildId'] = var2;
                var2 = var3.userId;
                var1['userId'] = var2;
                var2 = var3.user;
                var1['user'] = var2;
                var2 = var3.ended;
                var1['ended'] = var2;
                var4 = var3.endsAt;
                var2 = null;
                var4 = var2 != var4;
                if(!var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var2 = var3.endsAt;
case 9:
                var1['endsAt'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot4;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot1;
        var1 = {};
        var6 = 'createFromServer';
        var1['key'] = var6;
        var2 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var2 = var4.id;
                var1['id'] = var2;
                var2 = var4.guild_id;
                var1['guildId'] = var2;
                var2 = var4.user;
                var7 = null;
                if(!(var7 == var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var2 = var4.user_id;
                _fun0003_ip = 13; continue _fun0003;
case 11:
                var5 = var4.user;
                var2 = var5.id;
case 13:
                var1['userId'] = var2;
                var2 = var4.user;
                var1['user'] = var2;
                var2 = var4.ended;
                var1['ended'] = var2;
                var2 = var4.ends_at;
                var5 = var7 != var2;
                var2 = null;
                if(!var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var6 = var4.ends_at;
                var5 = '';
                var2 = null;
                if(!(var5 !== var6)) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                var5 = global;
                var6 = var5.Date;
                var8 = var4.ends_at;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var4 = new var9[var6](var8, var7);
                var2 = var4 instanceof Object ? var4 : var5;
case 14:
                var1['endsAt'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var9 = var2;
                var8 = var1;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = null;
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 6;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/AppliedGuildBoostRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();