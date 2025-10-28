// app/modules/soundboard/useSoundOrganizer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function sortSoundsOldestToNewestCreationDate(arg1) {
        var3 = new Array(0);
        var5 = arg1;
        var4 = 0;
        var6 = var3;
        var1 = arraySpread(var6, var5, var4);
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.compare;
            var1 = arg1;
            var2 = var1.soundId;
            var1 = arg2;
            var1 = var1.soundId;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = function sortSoundsNewestToOldestCreationDate(arg1) {
        var3 = new Array(0);
        var5 = arg1;
        var4 = 0;
        var6 = var3;
        var1 = arraySpread(var6, var5, var4);
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.compare;
            var1 = arg2;
            var2 = var1.soundId;
            var1 = arg1;
            var1 = var1.soundId;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _sortSoundsBySoundIdSequence(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var1 = global;
        var5 = var1.Map;
        var4 = var7.map;
        var3 = function(arg1) {
            var2 = arg1;
            var3 = var2.soundId;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var10 = var4.bind(var7)(var3);
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var11 = var4;
        var3 = new var11[var5](var10, var9);
        var5 = var3 instanceof Object ? var3 : var4;
        var _closure2_slot0 = var5;
        var3 = new Array(0);
        var _closure2_slot1 = var3;
        var4 = var6.forEach;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var4 = _closure2_slot0;
                var2 = var4.get;
                var5 = var2.bind(var4)(var3);
                var2 = null;
                if(!(var2 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot1;
                var2 = var4.push;
                var2 = var2.bind(var4)(var5);
                var2 = _closure2_slot0;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var6)(var2);
        var4 = var1.Array;
        var2 = var4.from;
        var1 = var5.values;
        var1 = var1.bind(var5)();
        var5 = var2.bind(var4)(var1);
        var1 = new Array(0);
        var8 = 0;
        var10 = var1;
        var9 = var3;
        var8 = arraySpread(var10, var9, var8);
        var4 = _closure1_slot6;
        var2 = undefined;
        var9 = var4.bind(var2)(var5);
        var10 = var1;
        var2 = arraySpread(var10, var9, var8);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/soundboard/useSoundOrganizer.tsx';
    var5 = var6.bind(var7)(var5);
    var3['sortSoundsOldestToNewestCreationDate'] = var4;
    var2 = function useSoundOrganizer() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 4;
            var1 = var4[var8];
            var7 = undefined;
            var9 = var6.bind(var7)(var1);
            var5 = var9.useSoundboardXP3Experiment;
            var1 = 'useSoundOrganizer';
            var1 = var5.bind(var9)(var1);
            var5 = var1.sortingStrategy;
            var9 = 5;
            var1 = var4[var9];
            var12 = var6.bind(var7)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getAllTopSoundsForGuilds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var11.bind(var12)(var10, var1);
            var _closure2_slot0 = var1;
            var9 = var4[var9];
            var12 = var6.bind(var7)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var1 = _closure1_slot4;
                var1 = var1.frecentlyPlayedSounds;
                return var1;
            };
            var10 = var11.bind(var12)(var10, var9);
            var11 = _closure1_slot3;
            var9 = var11.useRef;
            var9 = var9.bind(var11)(var10);
            var12 = var9.current;
            var _closure2_slot1 = var12;
            var10 = var11.useCallback;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.length;
                    var3 = 0;
                    if(!(var3 !== var4)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = var1[var3];
                    var5 = var3.guildId;
                    var _closure3_slot0 = var5;
                    var4 = var1.every;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.guildId;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var4.bind(var1)(var3);
                    if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    return var1;
case 6:
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var5 = var3.bind(var4)(var5);
                    var3 = null;
                    if(!(var3 != var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure1_slot8;
                    var3 = var5.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.soundId;
                        return var1;
                    };
                    var3 = var3.bind(var5)(var2);
                    var2 = undefined;
                    var2 = var4.bind(var2)(var1, var3);
                    _fun0003_ip = 10; continue _fun0003;
case 8:
                    var4 = _closure1_slot6;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var1);
case 10:
                    return var2;
case 4:
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var1, var9);
            var10 = var11.useCallback;
            var9 = new Array(1);
            var9[0] = var12;
            var2 = function(arg1) {
                var4 = _closure1_slot8;
                var3 = _closure2_slot1;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.soundId;
                    return var1;
                };
                var3 = var2.bind(var3)(var1);
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var2 = var10.bind(var11)(var2, var9);
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.SoundboardSortingStrategy;
            var4 = var4.TOP_SOUNDS;
            if(!(var4 !== var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.SoundboardSortingStrategy;
            var4 = var4.RECENTLY_USED_BY_USER;
            if(!(var4 !== var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.SoundboardSortingStrategy;
            var4 = var4.NEWEST_CREATION_DATE;
            if(!(var4 !== var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = _closure1_slot6;
            return var4;
case 15:
            var3 = _closure1_slot7;
            return var3;
case 13:
            return var2;
case 11:
            return var1;
        }
    };
    var3['useSoundOrganizer'] = var2;
    return var1;
})();