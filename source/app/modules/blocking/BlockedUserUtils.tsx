// app/modules/blocking/BlockedUserUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function voiceStateHasBlockedUsers(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.isBlockedOrIgnored;
        var1 = arg1;
        var1 = var1.userId;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/blocking/BlockedUserUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function filterOutBlockedOrIgnoredUsers(arg1, arg2) {
        var4 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var3 = var4.filter;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isNotNullish;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var4 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var4)) { _fun0001_ip = 41; continue _fun0001 }
 16:
                var5 = _closure1_slot3;
                var4 = var5.isBlockedOrIgnored;
                var1 = var2.id;
                var1 = var4.bind(var5)(var1);
                _fun0001_ip = 60; continue _fun0001;
 41:
                var4 = _closure2_slot0;
                var3 = var4.includes;
                var2 = var2.id;
                var1 = var3.bind(var4)(var2);
 60:
                var1 = !var1;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['filterOutBlockedOrIgnoredUsers'] = var5;
    var5 = function filterOutBlockedOrIgnoredUserIds(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = arg1;
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var3)) { _fun0002_ip = 36; continue _fun0002 }
 16:
                var3 = _closure1_slot3;
                var1 = var3.isBlockedOrIgnored;
                var1 = var1.bind(var3)(var4);
                _fun0002_ip = 50; continue _fun0002;
 36:
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = var2.bind(var3)(var4);
 50:
                var1 = !var1;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['filterOutBlockedOrIgnoredUserIds'] = var5;
    var5 = function filterOutStreamsByBlockedOwner(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var3 = _closure1_slot3;
            var2 = var3.isBlockedOrIgnored;
            var1 = arg1;
            var1 = var1.ownerId;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['filterOutStreamsByBlockedOwner'] = var5;
    var5 = function hasBlockedOrIgnoredUserIds(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.some;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var3)) { _fun0003_ip = 36; continue _fun0003 }
 16:
                var3 = _closure1_slot3;
                var1 = var3.isBlockedOrIgnored;
                var1 = var1.bind(var3)(var4);
                _fun0003_ip = 50; continue _fun0003;
 36:
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = var2.bind(var3)(var4);
 50:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['hasBlockedOrIgnoredUserIds'] = var5;
    var3['voiceStateHasBlockedUsers'] = var4;
    var2 = function filterBlockedUsersFromVoiceStates(arg1) {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 2;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg1;
        var3 = var2.bind(var3)(var1);
        var2 = var3.filter;
        var1 = function(arg1) {
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var1 = !var1;
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.keyBy;
        var1 = 'userId';
        var2 = var2.bind(var3)(var1);
        var1 = var2.value;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['filterBlockedUsersFromVoiceStates'] = var2;
    return var1;
})();