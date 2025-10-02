// app/records/InviteRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var2 = function(arg1) {
        var5 = function InviteRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot5;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot7;
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
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.code;
                if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var3 = '';
case 9:
                var1['code'] = var3;
                var3 = var2.temporary;
                if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var3 = false;
case 11:
                var1['temporary'] = var3;
                var3 = var2.revoked;
                if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var3 = false;
case 13:
                var1['revoked'] = var3;
                var3 = var2.uses;
                if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var3 = 0;
case 15:
                var1['uses'] = var3;
                var3 = var2.maxUses;
                if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var3 = 0;
case 17:
                var1['maxUses'] = var3;
                var3 = var2.maxAge;
                if(var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var3 = 0;
case 19:
                var1['maxAge'] = var3;
                var3 = var2.createdAt;
                if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var4 = global;
                var4 = var4.Date;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var14 = var5;
                var4 = new var14[var4](var13);
                var3 = var4 instanceof Object ? var4 : var5;
case 21:
                var1['createdAt'] = var3;
                var3 = var2.channel;
                var1['channel'] = var3;
                var3 = var2.guild;
                var1['guild'] = var3;
                var3 = var2.inviter;
                if(var3) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var3 = null;
case 23:
                var1['inviter'] = var3;
                var3 = var2.targetType;
                if(var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var3 = null;
case 25:
                var1['targetType'] = var3;
                var3 = var2.targetUser;
                if(var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var3 = null;
case 27:
                var1['targetUser'] = var3;
                var3 = var2.targetApplication;
                if(var3) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var3 = null;
case 29:
                var1['targetApplication'] = var3;
                var3 = var2.type;
                if(var3) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var3 = null;
case 31:
                var1['type'] = var3;
                var2 = var2.flags;
                if(var2) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var2 = 0;
case 33:
                var1['flags'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var6 = {};
        var2 = 'isExpired';
        var6['key'] = var2;
        var2 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = this;
                var4 = var1.maxAge;
                var2 = 0;
                if(!(var4 > var2)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var1 = var1.createdAt;
                var3 = var2.bind(var3)(var1);
                var2 = var3.add;
                var1 = 'seconds';
                var3 = var2.bind(var3)(var4, var1);
                var2 = var3.isBefore;
                var1 = global;
                var4 = var1.Date;
                var1 = var4.now;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                if(var1) { _fun0003_ip = 37; continue _fun0003 }
case 35:
                var1 = false;
                return var1;
case 37:
                var1 = true;
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = {};
        var7 = 'getExpiresAt';
        var6['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var3 = var2.maxAge;
                var1 = 0;
                var3 = var3 > var1;
                var1 = inf;
                if(!var3) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 6;
                var3 = var5[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = var2.createdAt;
                var5 = var4.bind(var5)(var3);
                var4 = var5.add;
                var3 = var2.maxAge;
                var2 = 'seconds';
                var3 = var4.bind(var5)(var3, var2);
                var2 = var3.toDate;
                var1 = var2.bind(var3)();
case 38:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'toString';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.code;
            return var1;
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var10 = var1;
                var9 = var2;
                var4 = copyDataProperties(var10, var9);
                var5 = var2.max_uses;
                var4 = 'maxUses';
                var1[var4] = var5;
                var5 = var2.max_age;
                var4 = 'maxAge';
                var1[var4] = var5;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 6;
                var4 = var6[var4];
                var6 = undefined;
                var5 = var5.bind(var6)(var4);
                var7 = var2.created_at;
                var4 = null;
                var8 = var4 != var7;
                var4 = undefined;
                if(!var8) { _fun0005_ip = 35; continue _fun0005 }
case 40:
                var4 = var7;
case 35:
                var5 = var5.bind(var6)(var4);
                var4 = 'createdAt';
                var1[var4] = var5;
                var5 = var2.target_type;
                var4 = 'targetType';
                var1[var4] = var5;
                var5 = var2.target_user;
                var4 = 'targetUser';
                var1[var4] = var5;
                var4 = var2.target_application;
                var2 = 'targetApplication';
                var1[var2] = var4;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var11 = var2;
                var10 = var1;
                var1 = new var11[var3](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/InviteRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();