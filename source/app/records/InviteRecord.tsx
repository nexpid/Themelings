// app/records/InviteRecord.tsx
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
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
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 103:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.code;
                if(var3) { _fun0002_ip = 121; continue _fun0002 }
 117:
                var3 = '';
 121:
                var1['code'] = var3;
                var3 = var2.temporary;
                if(var3) { _fun0002_ip = 138; continue _fun0002 }
 136:
                var3 = false;
 138:
                var1['temporary'] = var3;
                var3 = var2.revoked;
                if(var3) { _fun0002_ip = 155; continue _fun0002 }
 153:
                var3 = false;
 155:
                var1['revoked'] = var3;
                var3 = var2.uses;
                if(var3) { _fun0002_ip = 172; continue _fun0002 }
 170:
                var3 = 0;
 172:
                var1['uses'] = var3;
                var3 = var2.maxUses;
                if(var3) { _fun0002_ip = 189; continue _fun0002 }
 187:
                var3 = 0;
 189:
                var1['maxUses'] = var3;
                var3 = var2.maxAge;
                if(var3) { _fun0002_ip = 206; continue _fun0002 }
 204:
                var3 = 0;
 206:
                var1['maxAge'] = var3;
                var3 = var2.createdAt;
                if(var3) { _fun0002_ip = 249; continue _fun0002 }
 221:
                var4 = global;
                var4 = var4.Date;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var14 = var5;
                var4 = new var14[var4](var13);
                var3 = var4 instanceof Object ? var4 : var5;
 249:
                var1['createdAt'] = var3;
                var3 = var2.channel;
                var1['channel'] = var3;
                var3 = var2.guild;
                var1['guild'] = var3;
                var3 = var2.inviter;
                if(var3) { _fun0002_ip = 288; continue _fun0002 }
 286:
                var3 = null;
 288:
                var1['inviter'] = var3;
                var3 = var2.targetType;
                if(var3) { _fun0002_ip = 305; continue _fun0002 }
 303:
                var3 = null;
 305:
                var1['targetType'] = var3;
                var3 = var2.targetUser;
                if(var3) { _fun0002_ip = 322; continue _fun0002 }
 320:
                var3 = null;
 322:
                var1['targetUser'] = var3;
                var3 = var2.targetApplication;
                if(var3) { _fun0002_ip = 339; continue _fun0002 }
 337:
                var3 = null;
 339:
                var1['targetApplication'] = var3;
                var3 = var2.type;
                if(var3) { _fun0002_ip = 355; continue _fun0002 }
 353:
                var3 = null;
 355:
                var1['type'] = var3;
                var2 = var2.flags;
                if(var2) { _fun0002_ip = 371; continue _fun0002 }
 369:
                var2 = 0;
 371:
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
 0:
                var1 = this;
                var4 = var1.maxAge;
                var2 = 0;
                if(!(var4 > var2)) { _fun0003_ip = 97; continue _fun0003 }
 15:
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
                if(var1) { _fun0003_ip = 101; continue _fun0003 }
 97:
                var1 = false;
                return var1;
 101:
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
 0:
                var2 = this;
                var3 = var2.maxAge;
                var1 = 0;
                var3 = var3 > var1;
                var1 = inf;
                if(!var3) { _fun0004_ip = 95; continue _fun0004 }
 28:
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
 95:
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
 0:
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
                if(!var8) { _fun0005_ip = 97; continue _fun0005 }
 94:
                var4 = var7;
 97:
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
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/InviteRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();