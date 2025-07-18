// app/modules/poggermode/trackPoggermodeSettingsUpdated.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function getScreenshakeLocationName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot2;
            var3 = var3.CHAT_INPUT;
            if(!(var3 !== var2)) { _fun0001_ip = 66; continue _fun0001 }
 20:
            var3 = _closure1_slot2;
            var3 = var3.MENTION;
            if(!(var3 !== var2)) { _fun0001_ip = 60; continue _fun0001 }
 34:
            var1 = _closure1_slot2;
            var1 = var1.VOICE_USER;
            if(!(var1 !== var2)) { _fun0001_ip = 52; continue _fun0001 }
 48:
            var1 = undefined;
            return var1;
 52:
            var1 = 'voice_user';
            return var1;
 60:
            var1 = 'mention';
            return var1;
 66:
            var1 = 'chat_input';
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function getConfettiLocationName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot3;
            var3 = var3.CHAT_INPUT;
            if(!(var3 !== var2)) { _fun0002_ip = 88; continue _fun0002 }
 20:
            var3 = _closure1_slot3;
            var3 = var3.MEMBER_USER;
            if(!(var3 !== var2)) { _fun0002_ip = 80; continue _fun0002 }
 34:
            var3 = _closure1_slot3;
            var3 = var3.REACTION;
            if(!(var3 !== var2)) { _fun0002_ip = 74; continue _fun0002 }
 48:
            var1 = _closure1_slot3;
            var1 = var1.CALL_TILE;
            if(!(var1 !== var2)) { _fun0002_ip = 66; continue _fun0002 }
 62:
            var1 = undefined;
            return var1;
 66:
            var1 = 'call_tile';
            return var1;
 74:
            var1 = 'reaction';
            return var1;
 80:
            var1 = 'member_user';
            return var1;
 88:
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
 0:
                var4 = arg1;
                var2 = var4[Symbol.iterator];
                var4 = var2().next;
                var1 = var4().value;
                var1 = var2;
                var6 = undefined;
                var3 = var1 === var6;
                var1 = undefined;
                if(var3) { _fun0003_ip = 49; continue _fun0003 }
 24:
                var5 = var4().value;
                var4 = var2;
                var4 = var4 === var6;
                var1 = undefined;
                var3 = var4;
                if(var4) { _fun0003_ip = 49; continue _fun0003 }
 43:
                var1 = var5;
                var3 = var4;
 49:
                if(var3) { _fun0003_ip = 55; continue _fun0003 }
 52:
                var2.return();
 55:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg1;
                var1 = var2[Symbol.iterator];
                var2 = var1().next;
                var4 = var2().value;
                var2 = var1;
                var3 = undefined;
                var2 = var2 === var3;
                var5 = undefined;
                if(var2) { _fun0004_ip = 27; continue _fun0004 }
 24:
                var5 = var4;
 27:
                if(var2) { _fun0004_ip = 33; continue _fun0004 }
 30:
                var1.return();
 33:
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