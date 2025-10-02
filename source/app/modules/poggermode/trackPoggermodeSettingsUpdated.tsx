// app/modules/poggermode/trackPoggermodeSettingsUpdated.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function getScreenshakeLocationName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot2;
            var3 = var3.CHAT_INPUT;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot2;
            var3 = var3.MENTION;
            if(!(var3 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot2;
            var1 = var1.VOICE_USER;
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = undefined;
            return var1;
case 6:
            var1 = 'voice_user';
            return var1;
case 4:
            var1 = 'mention';
            return var1;
case 2:
            var1 = 'chat_input';
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function getConfettiLocationName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot3;
            var3 = var3.CHAT_INPUT;
            if(!(var3 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 3:
            var3 = _closure1_slot3;
            var3 = var3.MEMBER_USER;
            if(!(var3 !== var2)) { _fun0002_ip = 9; continue _fun0002 }
case 5:
            var3 = _closure1_slot3;
            var3 = var3.REACTION;
            if(!(var3 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 7:
            var1 = _closure1_slot3;
            var1 = var1.CALL_TILE;
            if(!(var1 !== var2)) { _fun0002_ip = 2; continue _fun0002 }
case 11:
            var1 = undefined;
            return var1;
case 2:
            var1 = 'call_tile';
            return var1;
case 10:
            var1 = 'reaction';
            return var1;
case 9:
            var1 = 'member_user';
            return var1;
case 8:
            var1 = 'chat_input';
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function getListOfEnabledLocations(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = global;
        var4 = var2.Object;
        var3 = var4.entries;
        var2 = arg1;
        var4 = var3.bind(var4)(var2);
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var2 = var4[Symbol.iterator];
                var4 = var2().next;
                var1 = var4().value;
                var1 = var2;
                var6 = undefined;
                var3 = var1 === var6;
                var1 = undefined;
                if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var5 = var4().value;
                var4 = var2;
                var4 = var4 === var6;
                var1 = undefined;
                var3 = var4;
                if(var4) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                var1 = var5;
                var3 = var4;
case 12:
                if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 6:
                var2.return();
case 15:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = arg1;
                var1 = var2[Symbol.iterator];
                var2 = var1().next;
                var4 = var2().value;
                var2 = var1;
                var3 = undefined;
                var2 = var2 === var3;
                var5 = undefined;
                if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 13:
                var5 = var4;
case 16:
                if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var1.return();
case 17:
                var2 = _closure2_slot0;
                var1 = global;
                var4 = var1.Number;
                var1 = var4.parseInt;
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.ShakeLocation;
    var _closure1_slot2 = var8;
    var4 = var4.ConfettiLocation;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var7 = var8.throttle;
    var4 = function(arg1) {
        var1 = arg1;
        var16 = var1.enabled;
        var15 = var1.combosEnabled;
        var14 = var1.combosRequiredCount;
        var12 = var1.screenshakeEnabled;
        var7 = var1.shakeIntensity;
        var13 = var1.screenshakeEnabledLocations;
        var11 = var1.confettiEnabled;
        var10 = var1.confettiSize;
        var9 = var1.confettiCount;
        var8 = var1.confettiEnabledLocations;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot4;
        var3 = var2.POGGERMODE_SETTINGS_UPDATED;
        var2 = {};
        var2['enabled'] = var16;
        var2['combos_enabled'] = var15;
        var2['combos_required_count'] = var14;
        var2['screenshake_enabled'] = var12;
        var2['shake_intensity'] = var7;
        var7 = _closure1_slot7;
        var12 = _closure1_slot5;
        var12 = var7.bind(var1)(var13, var12);
        var2['screenshake_enabled_locations'] = var12;
        var2['confetti_enabled'] = var11;
        var2['confetti_size'] = var10;
        var2['confetti_count'] = var9;
        var6 = _closure1_slot6;
        var6 = var7.bind(var1)(var8, var6);
        var2['confetti_enabled_locations'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2 = 5000;
    var2 = var7.bind(var8)(var4, var2);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/poggermode/trackPoggermodeSettingsUpdated.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();