// app/modules/search/native/hooks/useChannelSearchTab.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function searchChannels(arg1, arg2, arg3) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.queryChannels;
        var2 = {'query': null, 'guildId': null, 'limit': 1000, 'allowEmptyQueries': true, 'type': null, 'fuzzy': false};
        var5 = arg1;
        var2['query'] = var5;
        var5 = arg2;
        var2['guildId'] = var5;
        var5 = arg3;
        var2['type'] = var5;
        var5 = function filter() {
            var1 = true;
            return var1;
        };
        var2['filter'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.record;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot10 = var1;
    var4 = global;
    var10 = var4.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.createZustandStore;
    var8 = 2;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var10 = var8.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot4 = var10;
    var8 = var8.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var9 = var4.Object;
    var8 = var9.freeze;
    var4 = {};
    var10 = new Array(0);
    var4['textChannels'] = var10;
    var10 = new Array(0);
    var4['voiceChannels'] = var10;
    var10 = null;
    var4['count'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = function() {
        var1 = _closure1_slot8;
        return var1;
    };
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search/native/hooks/useChannelSearchTab.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useChannelSearchTabCount(arg1, arg2) {
        var8 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var3;
        var5 = _closure1_slot3;
        var7 = var5.useCallback;
        var6 = new Array(1);
        var6[0] = var8;
        var4 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var8 = arg1;
                var7 = _closure1_slot7;
                var6 = var7.getState;
                var5 = _closure2_slot0;
                var4 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.isAutocompleteVisible;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4 = var6.bind(var7)(var5, var4);
                if(var4) { _fun0001_ip = 253; continue _fun0001 }
 44:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 6;
                var4 = var6[var4];
                var7 = undefined;
                var5 = var5.bind(var7)(var4);
                var4 = var5.getGuildIdFromSearchContext;
                var3 = _closure2_slot0;
                var6 = var4.bind(var5)(var3);
                var3 = null;
                if(!(var3 != var6)) { _fun0001_ip = 253; continue _fun0001 }
 90:
                var4 = _closure1_slot10;
                var3 = _closure1_slot4;
                var5 = var4.bind(var7)(var8, var6, var3);
                var3 = _closure1_slot5;
                var6 = var4.bind(var7)(var8, var6, var3);
                var4 = var5.map;
                var3 = function(arg1) {
                    var1 = {};
                    var2 = arg1;
                    var1['channel'] = var2;
                    return var1;
                };
                var5 = var4.bind(var5)(var3);
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 7;
                var3 = var8[var3];
                var4 = var4.bind(var7)(var3);
                var3 = var4.chain;
                var6 = var3.bind(var4)(var6);
                var4 = var6.map;
                var3 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = arg1;
                        var1 = {};
                        var1['channel'] = var3;
                        var5 = _closure1_slot6;
                        var4 = var5.lastMessageId;
                        var2 = var3.id;
                        var2 = var4.bind(var5)(var2);
                        var4 = null;
                        if(!(var4 == var2)) { _fun0002_ip = 44; continue _fun0002 }
 38:
                        var2 = var3.lastMessageId;
 44:
                        var1['lastMessageId'] = var2;
                        return var1;
                    }
                };
                var4 = var4.bind(var6)(var3);
                var3 = var4.sort;
                var2 = function(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.compare;
                    var1 = arg2;
                    var2 = var1.lastMessageId;
                    var1 = arg1;
                    var1 = var1.lastMessageId;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.value;
                var6 = var2.bind(var3)();
                var3 = var5.length;
                var2 = var6.length;
                var4 = var3 + var2;
                var3 = _closure1_slot9;
                var2 = var3.setState;
                var1 = {};
                var1['textChannels'] = var6;
                var1['voiceChannels'] = var5;
                var1['count'] = var4;
                var1 = var2.bind(var3)(var1);
 253:
                var1 = undefined;
                return var1;
            }
        };
        var7 = var7.bind(var5)(var4, var6);
        var _closure2_slot2 = var7;
        var6 = var5.useEffect;
        var4 = new Array(3);
        var4[0] = var8;
        var4[1] = var7;
        var4[2] = var3;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0003_ip = 86; continue _fun0003 }
 10:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.debounce;
                var4 = _closure2_slot2;
                var3 = 250;
                var5 = var5.bind(var6)(var4, var3);
                var4 = _closure1_slot7;
                var3 = var4.subscribeTextInputValue;
                var2 = _closure2_slot0;
                var1 = {};
                var6 = true;
                var1['fireImmediately'] = var6;
                var1 = var3.bind(var4)(var2, var5, var1);
                return var1;
 86:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var6.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = function() {
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.resetState;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var3 = _closure1_slot9;
        var2 = var3.useField;
        var1 = 'count';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var5;
    var3['ChannelSearchTabStore'] = var4;
    var4 = function useTextChannelSearchResults() {
        var3 = _closure1_slot9;
        var2 = var3.useField;
        var1 = 'textChannels';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useTextChannelSearchResults'] = var4;
    var2 = function useVoiceChannelSearchResults() {
        var3 = _closure1_slot9;
        var2 = var3.useField;
        var1 = 'voiceChannels';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useVoiceChannelSearchResults'] = var2;
    return var1;
})();