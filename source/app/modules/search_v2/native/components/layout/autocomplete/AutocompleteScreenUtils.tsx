// app/modules/search_v2/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function isAutocompleteEligibleGuildChannel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg2;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getGuildIdFromSearchContext;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = null;
            var1 = var2 != var4;
            if(!var1) { _fun0001_ip = 73; continue _fun0001 }
 51:
            var8 = _closure1_slot5;
            var7 = var8.has;
            var6 = var4.type;
            var6 = var7.bind(var8)(var6);
            var1 = !var6;
 73:
            if(!var1) { _fun0001_ip = 98; continue _fun0001 }
 76:
            var7 = _closure1_slot4;
            var6 = var7.has;
            var5 = var4.type;
            var5 = var6.bind(var7)(var5);
            var1 = !var5;
 98:
            if(!var1) { _fun0001_ip = 105; continue _fun0001 }
 101:
            var1 = var2 != var3;
 105:
            if(!var1) { _fun0001_ip = 122; continue _fun0001 }
 108:
            var2 = var4.getGuildId;
            var2 = var2.bind(var4)();
            var1 = var2 === var3;
 122:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot4 = var8;
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot9 = var8;
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.SearchListItemTypes;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.ID_REGEX;
    var _closure1_slot17 = var5;
    var5 = var4.RelationshipTypes;
    var _closure1_slot18 = var5;
    var5 = var4.SearchTokenTypes;
    var _closure1_slot19 = var5;
    var4 = var4.SearchTypes;
    var _closure1_slot20 = var4;
    var4 = 19;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.cachedFunction;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.getGuildIdFromSearchContext;
            var6 = var2.bind(var3)(var6);
            var2 = null;
            if(!(var2 != var6)) { _fun0002_ip = 140; continue _fun0002 }
 51:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 13;
            var2 = var7[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.queryChannels;
            var2 = {'query': '', 'guildId': null, 'limit': 15, 'allowEmptyQueries': true};
            var2['guildId'] = var6;
            var5 = _closure1_slot9;
            var2['type'] = var5;
            var5 = function filter(arg1) {
                var4 = _closure1_slot22;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var2['filter'] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.record;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0002_ip = 144; continue _fun0002;
 140:
            var1 = new Array(0);
 144:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var5 = 30;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/search_v2/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function isUserFilterPrefixAutocomplete(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = _closure1_slot15;
            var4 = var5.getState;
            var3 = arg1;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = var2.getPrefixTag;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1);
            var3 = null;
            if(!(var3 != var1)) { _fun0003_ip = 76; continue _fun0003 }
 37:
            var3 = var1.searchTokenType;
            var1 = _closure1_slot19;
            var1 = var1.FILTER_FROM;
            var1 = var3 === var1;
            if(var1) { _fun0003_ip = 74; continue _fun0003 }
 60:
            var2 = _closure1_slot19;
            var2 = var2.FILTER_MENTIONS;
            var1 = var3 === var2;
 74:
            return var1;
 76:
            var1 = false;
            return var1;
        }
    };
    var3['isUserFilterPrefixAutocomplete'] = var5;
    var5 = function getUserEmptyState(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var7 = new Array(0);
            var _closure2_slot0 = var7;
            var6 = _closure1_slot15;
            var5 = var6.getState;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = var2.getChannelIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var5.bind(var6)(var1, var4);
            var5 = var6.forEach;
            var4 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.getRecentlyTalked;
                var3 = arg1;
                var2 = 15;
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.record;
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var5 = var1.type;
            var4 = _closure1_slot20;
            var4 = var4.GUILD;
            if(!(var4 !== var5)) { _fun0004_ip = 274; continue _fun0004 }
 78:
            var4 = _closure1_slot20;
            var4 = var4.GUILD_CHANNEL;
            if(!(var4 !== var5)) { _fun0004_ip = 274; continue _fun0004 }
 95:
            var4 = _closure1_slot20;
            var4 = var4.DMS;
            if(!(var4 !== var5)) { _fun0004_ip = 210; continue _fun0004 }
 109:
            var4 = _closure1_slot20;
            var4 = var4.CHANNEL;
            if(!(var4 === var5)) { _fun0004_ip = 313; continue _fun0004 }
 126:
            var6 = _closure1_slot7;
            var5 = var6.getChannel;
            var4 = var1.channelId;
            var5 = var5.bind(var6)(var4);
            var4 = null;
            if(!(var4 != var5)) { _fun0004_ip = 313; continue _fun0004 }
 154:
            var8 = var7.push;
            var9 = _closure1_slot6;
            var6 = var9.getId;
            var6 = var6.bind(var9)();
            var6 = var8.bind(var7)(var6);
            var6 = var5.recipients;
            if(!(var4 != var6)) { _fun0004_ip = 313; continue _fun0004 }
 191:
            var5 = var6.forEach;
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            _fun0004_ip = 313; continue _fun0004;
 210:
            var5 = _closure1_slot7;
            var4 = var5.getSortedPrivateChannels;
            var6 = var4.bind(var5)();
            var5 = var6.forEach;
            var4 = function(arg1) {
                var1 = arg1;
                var3 = var1.recipients;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot12;
            var4 = var5.getFriendIDs;
            var6 = var4.bind(var5)();
            var5 = var6.forEach;
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            _fun0004_ip = 313; continue _fun0004;
 274:
            var5 = _closure1_slot14;
            var4 = var5.getRecentMessageAuthorIds;
            var1 = var1.guildId;
            var5 = var4.bind(var5)(var1);
            var4 = var5.forEach;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var5)(var1);
 313:
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var4 = 14;
            var4 = var1[var4];
            var6 = undefined;
            var5 = var5.bind(var6)(var4);
            var4 = var5.chain;
            var5 = var4.bind(var5)(var7);
            var4 = var5.uniq;
            var5 = var4.bind(var5)();
            var4 = var5.map;
            var2 = function(arg1) {
                var3 = _closure1_slot13;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var5)(var2);
            var2 = var4.filter;
            var5 = _closure1_slot0;
            var3 = 15;
            var1 = var1[var3];
            var1 = var5.bind(var6)(var1);
            var1 = var1.isNotNullish;
            var2 = var2.bind(var4)(var1);
            var1 = var2.take;
            var2 = var1.bind(var2)(var3);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['getUserEmptyState'] = var5;
    var5 = function getUserExactMatch(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg2;
            var2 = _closure1_slot17;
            var1 = var2.test;
            var1 = var1.bind(var2)(var6);
            if(!var1) { _fun0005_ip = 47; continue _fun0005 }
 23:
            var2 = _closure1_slot13;
            var1 = var2.getUser;
            var1 = var1.bind(var2)(var6);
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 273; continue _fun0005 }
 47:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 16;
            var2 = var2[var3];
            var7 = undefined;
            var5 = var5.bind(var7)(var2);
            var2 = var5.isMeAutcompleteAnswer;
            var2 = var2.bind(var5)(var6);
            if(!var2) { _fun0005_ip = 105; continue _fun0005 }
 83:
            var5 = _closure1_slot13;
            var2 = var5.getCurrentUser;
            var2 = var2.bind(var5)();
            var5 = null;
            if(!(var5 == var2)) { _fun0005_ip = 271; continue _fun0005 }
 105:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = var10[var3];
            var9 = var5.bind(var7)(var3);
            var8 = var9.searchUsers;
            var3 = 17;
            var3 = var10[var3];
            var10 = var5.bind(var7)(var3);
            var5 = var10.getBackwardCompatibilitySearchId;
            var3 = arg1;
            var5 = var5.bind(var10)(var3);
            var3 = 1;
            var5 = var8.bind(var9)(var6, var5, var3);
            var3 = 0;
            var5 = var5[var3];
            var3 = null;
            var8 = var3 == var5;
            var3 = undefined;
            if(var8) { _fun0005_ip = 186; continue _fun0005 }
 181:
            var3 = var5.user;
 186:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 18;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.getUserTag;
            var5 = var4.bind(var5)(var3);
            var4 = var5.trim;
            var8 = var4.bind(var5)();
            var4 = var6.trim;
            var5 = var4.bind(var6)();
            var4 = var3;
            var3 = undefined;
            if(!(var8 === var5)) { _fun0005_ip = 269; continue _fun0005 }
 246:
            var5 = var6.trim;
            var6 = var5.bind(var6)();
            var5 = '';
            var3 = undefined;
            if(!(var5 !== var6)) { _fun0005_ip = 269; continue _fun0005 }
 266:
            var3 = var4;
 269:
            return var3;
 271:
            return var2;
 273:
            return var1;
        }
    };
    var3['getUserExactMatch'] = var5;
    var3['getDefaultGuildChannelIds'] = var4;
    var4 = function getChannelEmptyState(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot3;
            var2 = var3.getChannelHistory;
            var11 = var2.bind(var3)();
            var10 = new Array(0);
            var _closure2_slot1 = var10;
            var3 = _closure1_slot8;
            var2 = var3.getFrequentlyWithoutFetchingLatest;
            var4 = var2.bind(var3)();
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var2 = arg1;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var5 = _closure1_slot22;
                    var4 = _closure2_slot0;
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4, var2);
                    if(!var4) { _fun0007_ip = 66; continue _fun0007 }
 47:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
 66:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var7 = undefined;
            var3 = var3.bind(var7)(var2);
            var2 = var3.getGuildIdFromSearchContext;
            var4 = var2.bind(var3)(var8);
            var2 = null;
            if(!(var2 == var4)) { _fun0006_ip = 110; continue _fun0006 }
 104:
            var9 = new Array(0);
            _fun0006_ip = 127; continue _fun0006;
 110:
            var3 = _closure1_slot14;
            var2 = var3.getRecentMessageChannelIds;
            var9 = var2.bind(var3)(var4);
 127:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = var3.bind(var7)(var2);
            var3 = var4.chain;
            var2 = new Array(0);
            var12 = 0;
            var14 = var2;
            var13 = var11;
            var12 = arraySpread(var14, var13, var12);
            var14 = var2;
            var13 = var10;
            var12 = arraySpread(var14, var13, var12);
            var14 = var2;
            var13 = var9;
            var12 = arraySpread(var14, var13, var12);
            var5 = _closure1_slot21;
            var13 = var5.bind(var7)(var8);
            var14 = var2;
            var5 = arraySpread(var14, var13, var12);
            var3 = var3.bind(var4)(var2);
            var2 = var3.uniq;
            var4 = var2.bind(var3)();
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var4 = _closure1_slot22;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.take;
            var1 = 15;
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['getChannelEmptyState'] = var4;
    var4 = function getChannelExactMatch(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var6 = arg1;
            var11 = arg2;
            var2 = _closure1_slot17;
            var1 = var2.test;
            var1 = var1.bind(var2)(var11);
            if(!var1) { _fun0008_ip = 64; continue _fun0008 }
 26:
            var2 = _closure1_slot7;
            var1 = var2.getChannel;
            var1 = var1.bind(var2)(var11);
            var2 = null;
            if(!(var2 != var1)) { _fun0008_ip = 64; continue _fun0008 }
 46:
            var3 = _closure1_slot22;
            var2 = undefined;
            var2 = var3.bind(var2)(var6, var1);
            if(var2) { _fun0008_ip = 284; continue _fun0008 }
 64:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 17;
            var3 = var2[var3];
            var5 = undefined;
            var7 = var7.bind(var5)(var3);
            var3 = var7.getGuildIdFromSearchContext;
            var10 = var3.bind(var7)(var6);
            var3 = _closure1_slot1;
            var9 = 13;
            var2 = var2[var9];
            var7 = var3.bind(var5)(var2);
            var3 = var7.queryChannels;
            var2 = {};
            var2['query'] = var11;
            var8 = _closure1_slot9;
            var2['type'] = var8;
            var2['guildId'] = var10;
            var8 = false;
            var2['fuzzy'] = var8;
            var8 = 1;
            var2['limit'] = var8;
            var3 = var3.bind(var7)(var2);
            var2 = var3.length;
            if(!(var8 === var2)) { _fun0008_ip = 191; continue _fun0008 }
 166:
            var2 = 0;
            var2 = var3[var2];
            var2 = var2.record;
            var3 = _closure1_slot22;
            var3 = var3.bind(var5)(var6, var2);
            if(var3) { _fun0008_ip = 282; continue _fun0008 }
 191:
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var9 = var7.bind(var5)(var3);
            var7 = var9.queryChannels;
            var3 = {};
            var3['query'] = var11;
            var11 = _closure1_slot10;
            var3['type'] = var11;
            var3['guildId'] = var10;
            var3['limit'] = var8;
            var7 = var7.bind(var9)(var3);
            var3 = var7.length;
            if(!(var8 === var3)) { _fun0008_ip = 276; continue _fun0008 }
 251:
            var3 = 0;
            var3 = var7[var3];
            var3 = var3.record;
            var4 = _closure1_slot22;
            var4 = var4.bind(var5)(var6, var3);
            if(var4) { _fun0008_ip = 280; continue _fun0008 }
 276:
            var4 = null;
            return var4;
 280:
            return var3;
 282:
            return var2;
 284:
            return var1;
        }
    };
    var3['getChannelExactMatch'] = var4;
    var4 = function isChannelFilterPrefixAutocomplete(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = _closure1_slot15;
            var4 = var5.getState;
            var3 = arg1;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getPrefixTag;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var5)(var3, var2);
            var2 = null;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0009_ip = 48; continue _fun0009 }
 42:
            var2 = var3.searchTokenType;
 48:
            var1 = _closure1_slot19;
            var1 = var1.FILTER_IN;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isChannelFilterPrefixAutocomplete'] = var4;
    var4 = function isHasFilterPrefixAutocomplete(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = _closure1_slot15;
            var4 = var5.getState;
            var3 = arg1;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getPrefixTag;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var5)(var3, var2);
            var2 = null;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0010_ip = 48; continue _fun0010 }
 42:
            var2 = var3.searchTokenType;
 48:
            var1 = _closure1_slot19;
            var1 = var1.FILTER_HAS;
            var1 = var2 === var1;
            return var1;
        }
    };
    var3['isHasFilterPrefixAutocomplete'] = var4;
    var4 = function getSearchQueryChannelIds(arg1) {
        var4 = _closure1_slot15;
        var3 = var4.getState;
        var2 = arg1;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.getChannelIds;
            var4 = var1.bind(var2)();
            var1 = global;
            var1 = var1.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var5 = var2;
            var1 = new var5[var1](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getSearchQueryChannelIds'] = var4;
    var4 = function getSearchQueryUserIds(arg1) {
        var4 = _closure1_slot15;
        var3 = var4.getState;
        var2 = arg1;
        var1 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = arg1;
                var1 = var3.getPrefixTag;
                var1 = var1.bind(var3)();
                var2 = null;
                if(!(var2 != var1)) { _fun0011_ip = 66; continue _fun0011 }
 19:
                var2 = var3.getUserIds;
                var1 = var1.searchTokenType;
                var4 = var2.bind(var3)(var1);
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
 66:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getSearchQueryUserIds'] = var4;
    var4 = function getSearchFilterHasIcon(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = arg1;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 20;
            var5 = var2[var8];
            var3 = undefined;
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.nrpA5O;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0012_ip = 762; continue _fun0012 }
 70:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.ZNR2fn;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0012_ip = 734; continue _fun0012 }
 129:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.20uQR0;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0012_ip = 706; continue _fun0012 }
 188:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.L4lxyM;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0012_ip = 678; continue _fun0012 }
 247:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.AV/v6u;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0012_ip = 650; continue _fun0012 }
 306:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.XM9XGB;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0012_ip = 622; continue _fun0012 }
 365:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.TNLcp6;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0012_ip = 594; continue _fun0012 }
 424:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.F8Wf0d;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0012_ip = 566; continue _fun0012 }
 480:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var7.bind(var3)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var2[var8];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var2 = var2.PJgX2t;
            var2 = var5.bind(var6)(var2);
            if(!(var2 !== var4)) { _fun0012_ip = 538; continue _fun0012 }
 536:
            return var3;
 538:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 29;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.StickerIcon;
            return var2;
 566:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 28;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.SoundboardIcon;
            return var2;
 594:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 27;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.ImageIcon;
            return var2;
 622:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 26;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.VideoIcon;
            return var2;
 650:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 25;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.AttachmentIcon;
            return var2;
 678:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 24;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.PollsIcon;
            return var2;
 706:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 23;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.EmbedIcon;
            return var2;
 734:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 22;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.LinkIcon;
            return var2;
 762:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.ChatArrowRightIcon;
            return var1;
        }
    };
    var3['getSearchFilterHasIcon'] = var4;
    var4 = function toSearchListUserItem(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var5 = arg2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var7 = undefined;
            var3 = var2.bind(var7)(var1);
            var2 = var3.getGuildIdFromSearchContext;
            var1 = arg1;
            var9 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var5)) { _fun0013_ip = 194; continue _fun0013 }
 51:
            var2 = var1 == var9;
            var4 = null;
            if(!var2) { _fun0013_ip = 80; continue _fun0013 }
 60:
            var8 = _closure1_slot12;
            var3 = var8.getNickname;
            var2 = var5.id;
            var4 = var3.bind(var8)(var2);
 80:
            if(!(var1 == var4)) { _fun0013_ip = 105; continue _fun0013 }
 84:
            var8 = _closure1_slot11;
            var3 = var8.getNick;
            var2 = var5.id;
            var4 = var3.bind(var8)(var9, var2);
 105:
            if(!(var1 == var4)) { _fun0013_ip = 140; continue _fun0013 }
 109:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 18;
            var2 = var8[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.getName;
            var4 = var2.bind(var3)(var5);
 140:
            var2 = {};
            var3 = _closure1_slot16;
            var3 = var3.DM;
            var2['type'] = var3;
            var3 = {};
            var6 = _closure1_slot18;
            var6 = var6.NONE;
            var3['type'] = var6;
            var3['user'] = var5;
            var3['nickname'] = var4;
            var4 = arg3;
            var3['onPress'] = var4;
            var2['props'] = var3;
            return var2;
 194:
            return var1;
        }
    };
    var3['toSearchListUserItem'] = var4;
    var2 = function toSearchListChannelItem(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            if(var2) { _fun0014_ip = 51; continue _fun0014 }
 12:
            var2 = {};
            var3 = _closure1_slot16;
            var3 = var3.GUILD_TEXT_CHANNEL;
            var2['type'] = var3;
            var3 = {};
            var3['channel'] = var4;
            var4 = arg2;
            var3['onPress'] = var4;
            var2['props'] = var3;
            var1 = var2;
 51:
            return var1;
        }
    };
    var3['toSearchListChannelItem'] = var2;
    return var1;
})();