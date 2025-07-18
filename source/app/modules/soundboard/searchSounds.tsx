// app/modules/soundboard/searchSounds.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var10 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var5 = function trackSearchStart(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot4;
        var3 = var2.SEARCH_STARTED;
        var2 = {};
        var7 = arg2;
        var2['channel_id'] = var7;
        var6 = _closure1_slot5;
        var6 = var6.SOUNDBOARD;
        var2['search_type'] = var6;
        var6 = arg1;
        var2['location_stack'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var4 = function trackSearchResultViewed(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot4;
        var3 = var2.SEARCH_RESULT_VIEWED;
        var2 = {};
        var6 = _closure1_slot5;
        var6 = var6.SOUNDBOARD;
        var2['search_type'] = var6;
        var6 = arg3;
        var2['channel_id'] = var6;
        var6 = arg4;
        var2['query'] = var6;
        var6 = arg1;
        var6 = var6.length;
        var2['total_results'] = var6;
        var6 = arg2;
        var2['location_stack'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot4 = var9;
    var6 = var6.SearchTypes;
    var _closure1_slot5 = var6;
    var6 = 2;
    var9 = var8[var6];
    var11 = var10.bind(var1)(var9);
    var9 = 350;
    var11 = var11.bind(var1)(var5, var9);
    var _closure1_slot6 = var11;
    var6 = var8[var6];
    var6 = var10.bind(var1)(var6);
    var6 = var6.bind(var1)(var4, var9);
    var _closure1_slot7 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/soundboard/searchSounds.tsx';
    var6 = var7.bind(var8)(var6);
    var3['trackSearchStart'] = var5;
    var3['trackSearchResultViewed'] = var4;
    var2 = function searchSounds(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var4 = arg2;
            var7 = arg4;
            var5 = arg5;
            var _closure2_slot0 = var6;
            var2 = arg3;
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var5;
            var8 = var4.reduce;
            var3 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var8 = arg2;
                    var5 = _closure1_slot6;
                    var4 = _closure2_slot3;
                    var6 = _closure2_slot2;
                    var3 = null;
                    var6 = var3 == var6;
                    var7 = undefined;
                    var3 = undefined;
                    if(var6) { _fun0002_ip = 46; continue _fun0002 }
 37:
                    var6 = _closure2_slot2;
                    var3 = var6.id;
 46:
                    var3 = var5.bind(var7)(var4, var3);
                    var3 = var8.soundId;
                    var5 = _closure2_slot0;
                    var4 = var5.toLocaleLowerCase;
                    var12 = var4.bind(var5)();
                    var10 = _closure2_slot1;
                    var9 = _closure2_slot2;
                    var2 = function getScore(arg1, arg2, arg3, arg4) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var10 = arg1;
                            var7 = arg2;
                            var _closure4_slot0 = var10;
                            var2 = var7.name;
                            var1 = var2.toLocaleLowerCase;
                            var4 = var1.bind(var2)();
                            var1 = var7.emojiId;
                            var2 = null;
                            var5 = var2 != var1;
                            var1 = null;
                            if(!var5) { _fun0003_ip = 68; continue _fun0003 }
 44:
                            var8 = _closure1_slot3;
                            var6 = var8.getCustomEmojiById;
                            var5 = var7.emojiId;
                            var1 = var6.bind(var8)(var5);
 68:
                            var5 = var7.emojiName;
                            var5 = var2 != var5;
                            var9 = null;
                            if(!var5) { _fun0003_ip = 128; continue _fun0003 }
 83:
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var5 = 4;
                            var6 = var6[var5];
                            var5 = undefined;
                            var11 = var8.bind(var5)(var6);
                            var8 = var11.convertSurrogateToName;
                            var6 = var7.emojiName;
                            var5 = false;
                            var9 = var8.bind(var11)(var6, var5);
 128:
                            var6 = var2 != var9;
                            var5 = null;
                            if(!var6) { _fun0003_ip = 173; continue _fun0003 }
 137:
                            var11 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 4;
                            var8 = var8[var6];
                            var6 = undefined;
                            var8 = var11.bind(var6)(var8);
                            var6 = var8.getByName;
                            var5 = var6.bind(var8)(var9);
 173:
                            if(!(var2 == var1)) { _fun0003_ip = 201; continue _fun0003 }
 177:
                            var6 = var2 == var5;
                            var8 = undefined;
                            if(var6) { _fun0003_ip = 191; continue _fun0003 }
 186:
                            var8 = var5.names;
 191:
                            if(!(var2 == var8)) { _fun0003_ip = 199; continue _fun0003 }
 195:
                            var8 = new Array(0);
 199:
                            _fun0003_ip = 217; continue _fun0003;
 201:
                            var2 = var1.name;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var8 = var1;
 217:
                            var2 = 0;
                            var6 = 0;
                            if(!(var10 === var4)) { _fun0003_ip = 228; continue _fun0003 }
 225:
                            var6 = 8;
 228:
                            var1 = var8.includes;
                            var1 = var1.bind(var8)(var10);
                            var5 = var6;
                            if(!var1) { _fun0003_ip = 251; continue _fun0003 }
 244:
                            var1 = 7;
                            var5 = var6 + var1;
 251:
                            var1 = var4.startsWith;
                            var1 = var1.bind(var4)(var10);
                            var6 = var5;
                            if(!var1) { _fun0003_ip = 275; continue _fun0003 }
 268:
                            var1 = 6;
                            var6 = var5 + var1;
 275:
                            var5 = var8.some;
                            var1 = function(arg1) {
                                var3 = arg1;
                                var2 = var3.startsWith;
                                var1 = _closure4_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var1 = var5.bind(var8)(var1);
                            var5 = var6;
                            if(!var1) { _fun0003_ip = 304; continue _fun0003 }
 297:
                            var1 = 5;
                            var5 = var6 + var1;
 304:
                            var1 = var4.endsWith;
                            var1 = var1.bind(var4)(var10);
                            var4 = var5;
                            if(!var1) { _fun0003_ip = 328; continue _fun0003 }
 321:
                            var1 = 4;
                            var4 = var5 + var1;
 328:
                            var5 = var8.some;
                            var1 = function(arg1) {
                                var3 = arg1;
                                var2 = var3.endsWith;
                                var1 = _closure4_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var1 = var5.bind(var8)(var1);
                            var9 = var4;
                            if(!var1) { _fun0003_ip = 357; continue _fun0003 }
 350:
                            var1 = 3;
                            var9 = var4 + var1;
 357:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var4 = 5;
                            var4 = var5[var4];
                            var5 = undefined;
                            var6 = var6.bind(var5)(var4);
                            var11 = var7.name;
                            var4 = var11.toLocaleLowerCase;
                            var4 = var4.bind(var11)();
                            var4 = var6.bind(var5)(var10, var4);
                            var6 = var9;
                            if(!var4) { _fun0003_ip = 416; continue _fun0003 }
 409:
                            var4 = 2;
                            var6 = var9 + var4;
 416:
                            var4 = var8.some;
                            var3 = function(arg1) {
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 5;
                                var1 = var3[var1];
                                var4 = undefined;
                                var3 = var2.bind(var4)(var1);
                                var2 = _closure4_slot0;
                                var1 = arg1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var4 = var4.bind(var8)(var3);
                            var3 = var6;
                            if(!var4) { _fun0003_ip = 445; continue _fun0003 }
 438:
                            var4 = 1;
                            var3 = var6 + var4;
 445:
                            var2 = var3 > var2;
                            if(!var2) { _fun0003_ip = 491; continue _fun0003 }
 452:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 6;
                            var1 = var6[var1];
                            var6 = var4.bind(var5)(var1);
                            var5 = var6.canUseSoundboardSound;
                            var4 = arg3;
                            var1 = arg4;
                            var2 = var5.bind(var6)(var4, var7, var1);
 491:
                            var1 = var3;
                            if(!var2) { _fun0003_ip = 504; continue _fun0003 }
 497:
                            var2 = 100;
                            var1 = var3 + var2;
 504:
                            return var1;
                        }
                    };
                    var13 = undefined;
                    var11 = var8;
                    var2 = var13[var2](var12, var11, var10, var9, var8);
                    var1[var3] = var2;
                    return var1;
                }
            };
            var2 = {};
            var2 = var8.bind(var4)(var3, var2);
            var _closure2_slot4 = var2;
            var3 = var4.filter;
            var2 = function(arg1) {
                var2 = _closure2_slot4;
                var1 = arg1;
                var1 = var1.soundId;
                var2 = var2[var1];
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.sort;
            var1 = function(arg1, arg2) {
                var3 = _closure2_slot4;
                var1 = arg2;
                var1 = var1.soundId;
                var2 = var3[var1];
                var1 = arg1;
                var1 = var1.soundId;
                var1 = var3[var1];
                var1 = var2 - var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var4 = _closure1_slot7;
            var2 = null;
            var8 = var2 == var7;
            var2 = undefined;
            if(var8) { _fun0001_ip = 110; continue _fun0001 }
 105:
            var2 = var7.id;
 110:
            var13 = undefined;
            var12 = var1;
            var11 = var5;
            var10 = var2;
            var9 = var6;
            var2 = var13[var4](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var3['searchSounds'] = var2;
    return var1;
})();