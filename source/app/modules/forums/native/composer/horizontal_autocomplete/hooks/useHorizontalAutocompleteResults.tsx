// app/modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AutoCompleteResultTypes;
    var _closure1_slot4 = var7;
    var4 = var4.ChannelTypes;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHorizontalAutocompleteResults(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var _closure2_slot0 = var3;
        var2 = var1.selection;
        var _closure2_slot1 = var2;
        var11 = var1.text;
        var _closure2_slot2 = var11;
        var7 = _closure1_slot3;
        var6 = var7.useState;
        var1 = new Array(0);
        var1 = var6.bind(var7)(var1);
        var12 = _closure1_slot2;
        var9 = undefined;
        var6 = 2;
        var5 = var12.bind(var9)(var1, var6);
        var1 = 0;
        var8 = var5[var1];
        var _closure2_slot3 = var8;
        var10 = 1;
        var5 = var5[var10];
        var _closure2_slot4 = var5;
        var13 = var7.useMemo;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getAutocompleteOptions;
            var2 = _closure2_slot0;
            var1 = false;
            var1 = var3.bind(var4)(var2, var1, var1);
            return var1;
        };
        var5 = var13.bind(var7)(var3, var5);
        var _closure2_slot5 = var5;
        var13 = var7.useState;
        var3 = {};
        var3['text'] = var11;
        var14 = var2.start;
        var3['selectionStart'] = var14;
        var14 = var2.end;
        var3['selectionEnd'] = var14;
        var3 = var13.bind(var7)(var3);
        var3 = var12.bind(var9)(var3, var6);
        var6 = var3[var1];
        var1 = var6.text;
        var _closure2_slot6 = var1;
        var9 = var6.selectionStart;
        var _closure2_slot7 = var9;
        var6 = var6.selectionEnd;
        var _closure2_slot8 = var6;
        var3 = var3[var10];
        var _closure2_slot9 = var3;
        var10 = var7.useEffect;
        var3 = new Array(2);
        var3[0] = var11;
        var3[1] = var2;
        var2 = function() {
            var2 = global;
            var5 = var2.setTimeout;
            var4 = undefined;
            var3 = function() {
                var3 = _closure2_slot9;
                var2 = {};
                var4 = _closure2_slot2;
                var2['text'] = var4;
                var1 = _closure2_slot1;
                var4 = var1.start;
                var2['selectionStart'] = var4;
                var1 = var1.end;
                var2['selectionEnd'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = 16;
            var2 = var5.bind(var4)(var3, var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = global;
                var3 = var1.clearTimeout;
                var2 = _closure3_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var2 = var10.bind(var7)(var2, var3);
        var3 = var7.useMemo;
        var2 = new Array(4);
        var2[0] = var9;
        var2[1] = var6;
        var2[2] = var1;
        var2[3] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var13 = _closure2_slot7;
                var _closure3_slot2 = var13;
                var1 = _closure2_slot6;
                var12 = null;
                if(!(var12 != var1)) { _fun0001_ip = 350; continue _fun0001 }
 26:
                var2 = _closure2_slot6;
                var1 = var2.trim;
                var1 = var1.bind(var2)();
                var2 = var1.length;
                var11 = undefined;
                var10 = 0;
                var9 = 1;
                var8 = global;
                var7 = 4;
                var6 = undefined;
                var1 = undefined;
                if(!(var10 !== var2)) { _fun0001_ip = 350; continue _fun0001 }
 71:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var4.bind(var11)(var2);
                var5 = var2.WHITESPACE_RE;
                var4 = var5.test;
                var16 = _closure2_slot6;
                var2 = var13 - var9;
                var2 = var16[var2];
                var2 = var4.bind(var5)(var2);
                if(!(var10 !== var13)) { _fun0001_ip = 123; continue _fun0001 }
 120:
                if(!var2) { _fun0001_ip = 238; continue _fun0001 }
 123:
                var5 = _closure2_slot6;
                var4 = var5.slice;
                var16 = _closure2_slot8;
                var2 = var13;
                if(!(var12 != var16)) { _fun0001_ip = 147; continue _fun0001 }
 143:
                var2 = _closure2_slot8;
 147:
                var4 = var4.bind(var5)(var13, var2);
                var2 = var4[var10];
                var _closure3_slot0 = var2;
                var2 = var4.slice;
                var4 = var2.bind(var4)(var9);
                var2 = var4.toLowerCase;
                var2 = var2.bind(var4)();
                var _closure3_slot1 = var2;
                var16 = var8.Object;
                var5 = var16.keys;
                var4 = _closure2_slot5;
                var16 = var5.bind(var16)(var4);
                var5 = var16.find;
                var4 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure2_slot5;
                        var1 = arg1;
                        var6 = var2[var1];
                        var1 = _closure3_slot0;
                        var4 = undefined;
                        var1 = var4 !== var1;
                        if(!var1) { _fun0002_ip = 38; continue _fun0002 }
 30:
                        var3 = _closure3_slot1;
                        var1 = var4 !== var3;
 38:
                        if(!var1) { _fun0002_ip = 66; continue _fun0002 }
 41:
                        var5 = var6.matches;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var2 = _closure3_slot2;
                        var1 = var5.bind(var6)(var4, var3, var2);
 66:
                        return var1;
                    }
                };
                var6 = var5.bind(var16)(var4);
                var1 = var2;
                var5 = var1;
                var2 = var13;
                var4 = var6;
                if(!(var12 == var4)) { _fun0001_ip = 264; continue _fun0001 }
 238:
                var16 = var13 - 1;
                _closure3_slot2 = var16;
                var13 = var16;
                var4 = var6;
                var5 = var1;
                var2 = var13;
                if(var2 >= var10) { _fun0001_ip = 71; continue _fun0001 }
 264:
                var1 = {};
                var1['query'] = var5;
                var1['autocompleteType'] = var4;
                var1['autocompleteSelectionStart'] = var2;
                var2 = {};
                var4 = false;
                var2['includeEmojiPremiumUpsell'] = var4;
                var4 = _closure1_slot5;
                var5 = var4.GUILD_FORUM;
                var3 = new Array(4);
                var3[0] = var5;
                var5 = var4.GUILD_MEDIA;
                var3[1] = var5;
                var5 = var4.GUILD_TEXT;
                var3[2] = var5;
                var4 = var4.GUILD_ANNOUNCEMENT;
                var3[3] = var4;
                var2['channelTypes'] = var3;
                var1['queryOptions'] = var2;
                return var1;
 350:
                var1 = {'query': null, 'autocompleteType': null, 'autocompleteSelectionStart': null};
                return var1;
            }
        };
        var3 = var3.bind(var7)(var1, var2);
        var10 = var3.autocompleteType;
        var _closure2_slot10 = var10;
        var2 = var3.query;
        var _closure2_slot11 = var2;
        var1 = var3.queryOptions;
        var _closure2_slot12 = var1;
        var3 = var3.autocompleteSelectionStart;
        var9 = var7.useCallback;
        var6 = new Array(4);
        var6[0] = var10;
        var6[1] = var2;
        var6[2] = var1;
        var6[3] = var5;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot10;
                var3 = null;
                if(!(var3 != var2)) { _fun0003_ip = 21; continue _fun0003 }
 13:
                var2 = _closure2_slot11;
                if(!(var3 == var2)) { _fun0003_ip = 38; continue _fun0003 }
 21:
                var4 = _closure2_slot4;
                var3 = undefined;
                var2 = new Array(0);
                var2 = var4.bind(var3)(var2);
                _fun0003_ip = 85; continue _fun0003;
 38:
                var3 = _closure2_slot5;
                var2 = _closure2_slot10;
                var6 = var3[var2];
                var3 = _closure2_slot4;
                var5 = var6.queryResults;
                var4 = _closure2_slot11;
                var2 = _closure2_slot12;
                var1 = arg1;
                var2 = var5.bind(var6)(var4, var2, var1);
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 85:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var9.bind(var7)(var1, var6);
        var _closure2_slot13 = var1;
        var9 = var7.useEffect;
        var6 = new Array(3);
        var6[0] = var10;
        var6[1] = var1;
        var6[2] = var5;
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure2_slot10;
                var2 = null;
                var3 = var2 != var3;
                var5 = null;
                if(!var3) { _fun0004_ip = 54; continue _fun0004 }
 20:
                var3 = _closure2_slot5;
                var6 = var2 == var3;
                var3 = undefined;
                if(var6) { _fun0004_ip = 51; continue _fun0004 }
 33:
                var6 = _closure2_slot5;
                var4 = _closure2_slot10;
                var4 = var6[var4];
                var3 = var4.stores;
 51:
                var5 = var3;
 54:
                if(!(var2 == var5)) { _fun0004_ip = 62; continue _fun0004 }
 58:
                var2 = undefined;
                return var2;
 62:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.BatchedStoreListener;
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var7 = function() {
                    var3 = _closure2_slot13;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var9 = var3;
                var8 = var5;
                var2 = new var9[var4](var8, var7, var6);
                var4 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var4;
                var3 = var4.attach;
                var2 = 'useHorizontalAutocompleteResults';
                var2 = var3.bind(var4)(var2);
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.detach;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            }
        };
        var5 = var9.bind(var7)(var5, var6);
        var6 = var7.useEffect;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() {
            var3 = _closure2_slot13;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var6.bind(var7)(var1, var5);
        var1 = {};
        var6 = var7.useMemo;
        var5 = new Array(1);
        var5[0] = var8;
        var4 = function() {
            var3 = _closure2_slot3;
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var1 = _closure1_slot4;
                    var1 = var1.USER;
                    var1 = var3 === var1;
                    if(var1) { _fun0005_ip = 42; continue _fun0005 }
 28:
                    var4 = _closure1_slot4;
                    var4 = var4.ROLE;
                    var1 = var3 === var4;
 42:
                    if(var1) { _fun0005_ip = 59; continue _fun0005 }
 45:
                    var4 = _closure1_slot4;
                    var4 = var4.CHANNEL;
                    var1 = var3 === var4;
 59:
                    if(var1) { _fun0005_ip = 76; continue _fun0005 }
 62:
                    var2 = _closure1_slot4;
                    var2 = var2.EMOJI;
                    var1 = var3 === var2;
 76:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4 = var6.bind(var7)(var4, var5);
        var1['results'] = var4;
        var1['autocompleteSelectionStart'] = var3;
        var1['query'] = var2;
        return var1;
    };
    var3['useHorizontalAutocompleteResults'] = var2;
    return var1;
})();