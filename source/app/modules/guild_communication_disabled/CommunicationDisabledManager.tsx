// app/modules/guild_communication_disabled/CommunicationDisabledManager.tsx
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
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
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var9 = var8.getGuildIdFromCommunicationDisabledUserKey;
    var _closure1_slot8 = var9;
    var8 = var8.getUserIdFromCommunicationDisabledUserKey;
    var _closure1_slot9 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = null;
    var _closure1_slot12 = var4;
    var4 = function clearGuildMemberTimeout(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var8 = arg1;
            var4 = arg2;
            var3 = _closure1_slot10;
            var2 = var3.getMember;
            var6 = var2.bind(var3)(var8, var4);
            var3 = _closure1_slot11;
            var2 = var3.getUser;
            var2 = var2.bind(var3)(var4);
            var5 = null;
            if(!(var5 != var6)) { _fun0002_ip = 395; continue _fun0002 }
 49:
            if(!(var5 != var2)) { _fun0002_ip = 395; continue _fun0002 }
 56:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var7 = var7.bind(var3)(var4);
            var4 = var7.isMemberCommunicationDisabled;
            var4 = var4.bind(var7)(var6);
            if(var4) { _fun0002_ip = 395; continue _fun0002 }
 95:
            var4 = {};
            var11 = var4;
            var10 = var6;
            var7 = copyDataProperties(var11, var10);
            var7 = 'guildId';
            var4[var7] = var8;
            var8 = var6.nick;
            if(!(var5 == var8)) { _fun0002_ip = 131; continue _fun0002 }
 126:
            var8 = var2.username;
 131:
            var7 = 'nick';
            var4[var7] = var8;
            var7 = var6.avatar;
            var9 = var5 != var7;
            var8 = undefined;
            if(!var9) { _fun0002_ip = 158; continue _fun0002 }
 155:
            var8 = var7;
 158:
            var7 = 'avatar';
            var4[var7] = var8;
            var7 = var6.avatarDecoration;
            var7 = var5 != var7;
            var8 = undefined;
            if(!var7) { _fun0002_ip = 200; continue _fun0002 }
 182:
            var7 = {};
            var10 = var6.avatarDecoration;
            var11 = var7;
            var9 = copyDataProperties(var11, var10);
            var8 = var7;
 200:
            var7 = 'avatarDecoration';
            var4[var7] = var8;
            var7 = var6.premiumSince;
            var9 = var5 != var7;
            var8 = undefined;
            if(!var9) { _fun0002_ip = 227; continue _fun0002 }
 224:
            var8 = var7;
 227:
            var7 = 'premiumSince';
            var4[var7] = var8;
            var6 = var6.isPending;
            var7 = var5 != var6;
            if(!var7) { _fun0002_ip = 252; continue _fun0002 }
 249:
            var7 = var6;
 252:
            var6 = 'isPending';
            var4[var6] = var7;
            var6 = {};
            var11 = var6;
            var10 = var2;
            var7 = copyDataProperties(var11, var10);
            var7 = var2.email;
            var9 = var5 != var7;
            var8 = undefined;
            if(!var9) { _fun0002_ip = 291; continue _fun0002 }
 288:
            var8 = var7;
 291:
            var7 = 'email';
            var6[var7] = var8;
            var2 = var2.phone;
            var8 = var5 != var2;
            var7 = undefined;
            if(!var8) { _fun0002_ip = 318; continue _fun0002 }
 315:
            var7 = var2;
 318:
            var2 = 'phone';
            var6[var2] = var7;
            var2 = 'user';
            var4[var2] = var6;
            var2 = 'communicationDisabledUntil';
            var4[var2] = var5;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'GUILD_MEMBER_UPDATE';
            var1['type'] = var5;
            var11 = var1;
            var10 = var4;
            var4 = copyDataProperties(var11, var10);
            var1 = var2.bind(var3)(var1);
 395:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function CommunicationDisabledManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 84; continue _fun0003 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 118; continue _fun0003;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var3.bind(var4)(var5, var1);
                var2 = _closure1_slot13;
                var1['clearGuildMemberTimeout'] = var2;
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
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var1 = global;
            var4 = var1.setInterval;
            var1 = undefined;
            var3 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getCommunicationDisabledUserMap;
                var4 = var2.bind(var3)();
                var _closure4_slot0 = var4;
                var2 = global;
                var3 = var2.Object;
                var2 = var3.keys;
                var3 = var2.bind(var3)(var4);
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var6 = arg1;
                        var3 = _closure1_slot8;
                        var1 = undefined;
                        var4 = var3.bind(var1)(var6);
                        var3 = _closure1_slot9;
                        var3 = var3.bind(var1)(var6);
                        var5 = _closure4_slot0;
                        var7 = var5[var6];
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 7;
                        var5 = var8[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.isCommunicationDisabled;
                        var5 = var5.bind(var6)(var7);
                        if(var5) { _fun0004_ip = 81; continue _fun0004 }
 71:
                        var2 = _closure1_slot13;
                        var2 = var2.bind(var1)(var4, var3);
 81:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = 10000;
            var3 = var4.bind(var1)(var3, var2);
            _closure1_slot12 = var3;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var1 = global;
            var3 = var1.clearInterval;
            var2 = _closure1_slot12;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_communication_disabled/CommunicationDisabledManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();