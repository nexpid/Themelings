// app/modules/search/native/stores/SearchGuildChannelTabStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot8 = var9;
    var8 = var8.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.AutocompleterResultTypes;
    var _closure1_slot11 = var8;
    var8 = new Array(0);
    var _closure1_slot12 = var8;
    var8 = new Array(0);
    var _closure1_slot13 = var8;
    var8 = function() {
        var4 = _closure1_slot7;
        var3 = function GuildChannelSearchManager() {
            var3 = this;
            var4 = _closure1_slot6;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = null;
            var3['count'] = var2;
            var2 = new Array(0);
            var3['textChannels'] = var2;
            var2 = new Array(0);
            var3['voiceChannels'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'search';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var3 = this;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 8;
                var7 = var8[var5];
                var1 = undefined;
                var11 = var6.bind(var1)(var7);
                var10 = var11.getBoosterMap;
                var7 = _closure1_slot11;
                var9 = var7.TEXT_CHANNEL;
                var17 = var10.bind(var11)(var9);
                var9 = var8[var5];
                var10 = var6.bind(var1)(var9);
                var9 = var10.getBoosterMap;
                var7 = var7.VOICE_CHANNEL;
                var12 = var9.bind(var10)(var7);
                var15 = {'query': null, 'guildId': null, 'limit': 1000, 'allowEmptyQueries': true, 'allowSnowflake': true, 'fuzzy': false};
                var15['query'] = var2;
                var7 = arg2;
                var15['guildId'] = var7;
                var7 = function filter() {
                    var1 = true;
                    return var1;
                };
                var15['filter'] = var7;
                var9 = _closure1_slot1;
                var7 = var8[var5];
                var16 = var9.bind(var1)(var7);
                var10 = var16.queryChannels;
                var7 = {};
                var19 = var7;
                var18 = var15;
                var11 = copyDataProperties(var19, var18);
                var11 = _closure1_slot9;
                var14 = 'type';
                var7[var14] = var11;
                var11 = 'boosters';
                var7[var11] = var17;
                var7 = var10.bind(var16)(var7);
                var5 = var8[var5];
                var10 = var9.bind(var1)(var5);
                var9 = var10.queryChannels;
                var5 = {};
                var19 = var5;
                var18 = var15;
                var15 = copyDataProperties(var19, var18);
                var13 = _closure1_slot8;
                var5[var14] = var13;
                var5[var11] = var12;
                var10 = var9.bind(var10)(var5);
                var9 = var10.map;
                var5 = function(arg1) {
                    var1 = {};
                    var2 = arg1;
                    var2 = var2.record;
                    var1['channel'] = var2;
                    return var1;
                };
                var5 = var9.bind(var10)(var5);
                var3['voiceChannels'] = var5;
                var5 = 9;
                var5 = var8[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.chain;
                var7 = var5.bind(var6)(var7);
                var6 = var7.map;
                var5 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = arg1;
                        var1 = {};
                        var2 = var3.record;
                        var1['channel'] = var2;
                        var5 = _closure1_slot10;
                        var4 = var5.lastMessageId;
                        var2 = var3.record;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var2);
                        var4 = null;
                        if(!(var4 == var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                        var3 = var3.record;
                        var2 = var3.lastMessageId;
case 6:
                        var1['lastMessageId'] = var2;
                        return var1;
                    }
                };
                var6 = var6.bind(var7)(var5);
                var5 = var6.sort;
                var4 = function(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
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
                var5 = var5.bind(var6)(var4);
                var4 = var5.value;
                var4 = var4.bind(var5)();
                var3['textChannels'] = var4;
                var4 = var2.length;
                var2 = 0;
                if(!(!(var4 > var2))) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = null;
                var3['count'] = var2;
                _fun0002_ip = 10; continue _fun0002;
case 8:
                var2 = var3.textChannels;
                var4 = var2.length;
                var2 = var3.voiceChannels;
                var2 = var2.length;
                var2 = var4 + var2;
                var3['count'] = var2;
case 10:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var6 = 'getTextChannels';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.textChannels;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getVoiceChannels';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.voiceChannels;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getCount';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var1 = var1.count;
            return var1;
        };
        var1['value'] = var5;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var8 = var8.bind(var1)();
    var _closure1_slot14 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot15 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SearchGuildChannelTabStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 13; continue _fun0004;
case 11:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 13:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getTextChannels';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = _closure1_slot15;
                var3 = var4.get;
                var1 = arg1;
                var5 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                if(var4) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var4 = var5.getTextChannels;
                var1 = var4.bind(var5)();
case 14:
                if(!(var3 == var1)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var1 = _closure1_slot12;
case 16:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getVoiceChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot15;
                var3 = var4.get;
                var1 = arg1;
                var5 = var3.bind(var4)(var1);
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                if(var4) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                var4 = var5.getVoiceChannels;
                var1 = var4.bind(var5)();
case 14:
                if(!(var3 == var1)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                var1 = _closure1_slot13;
case 16:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCount';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot15;
                var2 = var3.get;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0007_ip = 14; continue _fun0007 }
case 15:
                var3 = var4.getCount;
                var2 = var3.bind(var4)();
case 14:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0007_ip = 18; continue _fun0007 }
case 7:
                var1 = var2;
case 18:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SearchGuildChannelTabStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleSearchGuildChannelTabSearch(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var6 = var1.id;
            var4 = var1.guildId;
            var3 = var1.searchQueryString;
            var5 = _closure1_slot15;
            var2 = var5.get;
            var2 = var2.bind(var5)(var6);
            var5 = null;
            if(!(var5 == var2)) { _fun0008_ip = 19; continue _fun0008 }
case 20:
            var5 = _closure1_slot14;
            var7 = var5.prototype;
            var7 = Object.create(var7, {constructor: {value: var5}});
            var10 = var7;
            var5 = new var10[var5](var9);
            var2 = var5 instanceof Object ? var5 : var7;
case 19:
            var5 = _closure1_slot15;
            var1 = var5.set;
            var1 = var1.bind(var5)(var6, var2);
            var1 = var2.search;
            var1 = var1.bind(var2)(var3, var4);
            var1 = undefined;
            return var1;
        }
    };
    var2['SEARCH_GUILD_CHANNEL_TAB_SEARCH'] = var9;
    var4 = function handleSearchGuildChannelTabCleanup(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var2 = _closure1_slot15;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2['SEARCH_GUILD_CHANNEL_TAB_CLEANUP'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/stores/SearchGuildChannelTabStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();