// app/modules/guild_automod/AutomodPermissionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var5 = function getAutomodQuarantinedProfileFlags(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = global;
            var3 = var2.Set;
            var5 = _closure1_slot4;
            var4 = var5.reduce;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var3 = arg2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.hasFlag;
                    var7 = _closure2_slot0;
                    var2 = null;
                    var7 = var2 != var7;
                    var2 = 0;
                    if(!var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot0;
case 4:
                    var2 = var4.bind(var5)(var2, var3);
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var3);
case 6:
                    return var1;
                }
            };
            var1 = new Array(0);
            var7 = var4.bind(var5)(var2, var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            _fun0001_ip = 8; continue _fun0001;
case 2:
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var8 = var3;
            var2 = new var8[var2](var7);
            var1 = var2 instanceof Object ? var2 : var3;
case 8:
            return var1;
        }
    };
    var _closure1_slot5 = var5;
    var4 = function hasAutomodQuarantinedProfile(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = null;
            var1 = var4 != var2;
            if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var2 = var2.flags;
            var2 = var4 != var2;
            if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var5 = _closure1_slot4;
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.hasFlag;
                    var1 = _closure2_slot0;
                    var1 = var1.flags;
                    var2 = null;
                    var5 = var2 != var1;
                    var2 = 0;
                    if(!var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var2 = var1;
case 13:
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
case 11:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var6);
    var1 = 0;
    var7 = var9[var1];
    var6 = metroImportDefault;
    var1 = undefined;
    var6 = var6.bind(var1)(var7);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.GuildMemberFlags;
    var _closure1_slot3 = var7;
    var10 = var7.AUTOMOD_QUARANTINED_BIO;
    var6 = new Array(3);
    var6[0] = var10;
    var10 = var7.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
    var6[1] = var10;
    var7 = var7.AUTOMOD_QUARANTINED_SERVER_TAG;
    var6[2] = var7;
    var _closure1_slot4 = var6;
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_automod/AutomodPermissionUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['AUTOMOD_QUARANTINED_PROFILE_FLAGS'] = var6;
    var3['getAutomodQuarantinedProfileFlags'] = var5;
    var5 = function getAutomodQuarantinedGuildMemberFlags(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0005_ip = 12; continue _fun0005 }
case 15:
            var3 = _closure1_slot5;
            var2 = var1.flags;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            _fun0005_ip = 16; continue _fun0005;
case 12:
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var5 = var3;
            var2 = new var5[var2](var4);
            var1 = var2 instanceof Object ? var2 : var3;
case 16:
            return var1;
        }
    };
    var3['getAutomodQuarantinedGuildMemberFlags'] = var5;
    var5 = function getAutomodReason(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var3 = var4.has;
            var1 = _closure1_slot3;
            var1 = var1.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0006_ip = 8; continue _fun0006 }
case 17:
            var3 = var4.has;
            var1 = _closure1_slot3;
            var1 = var1.AUTOMOD_QUARANTINED_BIO;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var3 = var4.has;
            var1 = _closure1_slot3;
            var1 = var1.AUTOMOD_QUARANTINED_SERVER_TAG;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            if(!var3) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var3 = _closure1_slot3;
            var1 = var3.AUTOMOD_QUARANTINED_SERVER_TAG;
case 20:
            _fun0006_ip = 22; continue _fun0006;
case 18:
            var3 = _closure1_slot3;
            var1 = var3.AUTOMOD_QUARANTINED_BIO;
case 22:
            _fun0006_ip = 23; continue _fun0006;
case 8:
            var2 = _closure1_slot3;
            var1 = var2.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
case 23:
            return var1;
        }
    };
    var3['getAutomodReason'] = var5;
    var3['hasAutomodQuarantinedProfile'] = var4;
    var2 = function useCurrentUserAutomodQuaratinedProfile(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                var4 = _closure1_slot6;
                var5 = _closure1_slot2;
                var3 = var5.getSelfMember;
                var2 = _closure2_slot0;
                var3 = var3.bind(var5)(var2);
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 24:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCurrentUserAutomodQuaratinedProfile'] = var2;
    return var1;
})();