// app/modules/autocompleter/Autocompleter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getAutocompleterBoosterMap(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg2;
            var1 = var1.frecencyBoosters;
            if(var1) { _fun0004_ip = 16; continue _fun0004 }
 12:
            var1 = {};
            _fun0004_ip = 55; continue _fun0004;
 16:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getBoosterMap;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
 55:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.AutocompleterResultTypes;
    var _closure1_slot10 = var7;
    var8 = var4.Object;
    var7 = var8.freeze;
    var4 = {};
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function Autocompleter(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arguments[2];
                var6 = arguments[3];
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0005_ip = 24; continue _fun0005 }
 21:
                var2 = 100;
 24:
                if(!(var6 === var1)) { _fun0005_ip = 35; continue _fun0005 }
 28:
                var6 = _closure1_slot11;
 35:
                var8 = _closure1_slot3;
                var7 = _closure2_slot0;
                var7 = var8.bind(var1)(var4, var7);
                var7 = '';
                var4['query'] = var7;
                var5 = _closure1_slot11;
                var4['options'] = var5;
                var5 = new Array(0);
                var4['results'] = var5;
                var5 = new Array(0);
                var4['_userResults'] = var5;
                var5 = new Array(0);
                var4['_groupDMResults'] = var5;
                var5 = new Array(0);
                var4['_textChannelResults'] = var5;
                var5 = new Array(0);
                var4['_voiceChannelResults'] = var5;
                var5 = new Array(0);
                var4['_guildResults'] = var5;
                var5 = new Array(0);
                var4['_applicationResults'] = var5;
                var5 = new Array(0);
                var4['_linkResults'] = var5;
                var5 = new Array(0);
                var4['_inAppNavigations'] = var5;
                var5 = null;
                var4['_userBlacklist'] = var5;
                var5 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.results;
                        var5 = _closure3_slot0;
                        var4 = var5._include;
                        var2 = _closure1_slot10;
                        var2 = var2.USER;
                        var2 = var4.bind(var5)(var2);
                        if(!var2) { _fun0006_ip = 302; continue _fun0006 }
 46:
                        var4 = _closure3_slot0;
                        var2 = new Array(0);
                        var4['_userResults'] = var2;
                        var2 = _closure1_slot12;
                        var7 = undefined;
                        var6 = var2.bind(var7)(var3);
                        var3 = var6.bind(var7)();
                        var2 = var3.done;
                        var5 = 8;
                        var4 = null;
                        if(var2) { _fun0006_ip = 241; continue _fun0006 }
 91:
                        var2 = var3.value;
                        var10 = var2.id;
                        var14 = var2.score;
                        var12 = var2.comparator;
                        var9 = _closure1_slot9;
                        var2 = var9.getUser;
                        var11 = var2.bind(var9)(var10);
                        if(!(var4 != var11)) { _fun0006_ip = 223; continue _fun0006 }
 132:
                        var2 = _closure3_slot0;
                        var10 = var2._userResults;
                        var9 = var10.push;
                        var2 = {};
                        var13 = _closure1_slot10;
                        var13 = var13.USER;
                        var2['type'] = var13;
                        var2['record'] = var11;
                        var13 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var11 = var11[var5];
                        var13 = var13.bind(var7)(var11);
                        var11 = var13.calculateScore;
                        var11 = var11.bind(var13)(var14);
                        var2['score'] = var11;
                        var13 = var4 != var12;
                        var11 = undefined;
                        if(!var13) { _fun0006_ip = 213; continue _fun0006 }
 210:
                        var11 = var12;
 213:
                        var2['comparator'] = var11;
                        var2 = var9.bind(var10)(var2);
 223:
                        var9 = var6.bind(var7)();
                        var2 = var9.done;
                        var3 = var9;
                        if(!var2) { _fun0006_ip = 91; continue _fun0006 }
 241:
                        var2 = _closure3_slot0;
                        var3 = var2._userResults;
                        var3 = var3.length;
                        var2 = var2._limit;
                        if(!(var3 > var2)) { _fun0006_ip = 288; continue _fun0006 }
 266:
                        var2 = _closure3_slot0;
                        var3 = var2._userResults;
                        var2 = var2._limit;
                        var3['length'] = var2;
 288:
                        var2 = _closure3_slot0;
                        var1 = var2.updateAllResults;
                        var1 = var1.bind(var2)();
 302:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4['parseUserResults'] = var5;
                var3 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var5 = _closure3_slot0;
                    var2 = var5._asyncTimeout;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 9;
                    var2 = var7[var2];
                    var3 = var6.bind(var1)(var2);
                    var10 = var5._userResults;
                    var2 = new Array(0);
                    var9 = 0;
                    var11 = var2;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = var5._groupDMResults;
                    var11 = var2;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = var5._textChannelResults;
                    var11 = var2;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = var5._voiceChannelResults;
                    var11 = var2;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = var5._guildResults;
                    var11 = var2;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = var5._linkResults;
                    var11 = var2;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = var5._inAppNavigations;
                    var11 = var2;
                    var4 = arraySpread(var11, var10, var9);
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.uniqBy;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var5 = var1.type;
                        var1 = var1.record;
                        var4 = var1.id;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var2 = '';
                        var1 = '-';
                        var1 = var3.bind(var2)(var5, var1, var4);
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.sort;
                    var2 = 10;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.value;
                    var2 = var2.bind(var3)();
                    var5['results'] = var2;
                    var4 = var5.onResultsChange;
                    var3 = var5.results;
                    var2 = var5.query;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var4['updateAllResults'] = var3;
                var3 = arg1;
                var4['onResultsChange'] = var3;
                var5 = var4.setOptions;
                var3 = true;
                var3 = var5.bind(var4)(var6, var3);
                var4['_limit'] = var2;
                var2 = var4.createSearchContext;
                var2 = var2.bind(var4)();
                var3 = var4.setResultTypes;
                var2 = arg2;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'createSearchContext';
        var1['key'] = var2;
        var2 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = this;
                var3 = var2.userSearchContext;
                var1 = null;
                if(!(var1 == var3)) { _fun0007_ip = 70; continue _fun0007 }
 15:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.getUserSearchContext;
                var3 = var2.parseUserResults;
                var1 = var2._limit;
                var1 = var4.bind(var5)(var3, var1);
                var2['userSearchContext'] = var1;
 70:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(20);
        var2[0] = var1;
        var1 = {};
        var6 = 'setLimit';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var3 = var1.userSearchContext;
                var1['_limit'] = var4;
                var2 = null;
                if(!(var2 != var3)) { _fun0008_ip = 35; continue _fun0008 }
 24:
                var2 = var3.setLimit;
                var2 = var2.bind(var3)(var4);
 35:
                var2 = var1._userResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 74; continue _fun0008 }
 56:
                var3 = var1._userResults;
                var2 = var1._limit;
                var3['length'] = var2;
 74:
                var2 = var1._groupDMResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 113; continue _fun0008 }
 95:
                var3 = var1._groupDMResults;
                var2 = var1._limit;
                var3['length'] = var2;
 113:
                var2 = var1._textChannelResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 152; continue _fun0008 }
 134:
                var3 = var1._textChannelResults;
                var2 = var1._limit;
                var3['length'] = var2;
 152:
                var2 = var1._voiceChannelResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 191; continue _fun0008 }
 173:
                var3 = var1._voiceChannelResults;
                var2 = var1._limit;
                var3['length'] = var2;
 191:
                var2 = var1._guildResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 230; continue _fun0008 }
 212:
                var3 = var1._guildResults;
                var2 = var1._limit;
                var3['length'] = var2;
 230:
                var2 = var1._applicationResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 269; continue _fun0008 }
 251:
                var3 = var1._applicationResults;
                var2 = var1._limit;
                var3['length'] = var2;
 269:
                var2 = var1._linkResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 308; continue _fun0008 }
 290:
                var3 = var1._linkResults;
                var2 = var1._limit;
                var3['length'] = var2;
 308:
                var2 = var1._inAppNavigations;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 347; continue _fun0008 }
 329:
                var2 = var1._inAppNavigations;
                var1 = var1._limit;
                var2['length'] = var1;
 347:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'setResultTypes';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var2 = this;
                var1 = null;
                var3 = var1 != var5;
                if(!var3) { _fun0009_ip = 46; continue _fun0009 }
 15:
                var3 = global;
                var3 = var3.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var7 = var4;
                var6 = var5;
                var3 = new var7[var3](var6, var5);
                var1 = var3 instanceof Object ? var3 : var4;
 46:
                var2['resultTypes'] = var1;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.USER;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 85; continue _fun0009 }
 79:
                var3 = new Array(0);
                _fun0009_ip = 91; continue _fun0009;
 85:
                var3 = var2._userResults;
 91:
                var2['_userResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.GROUP_DM;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 127; continue _fun0009 }
 121:
                var3 = new Array(0);
                _fun0009_ip = 133; continue _fun0009;
 127:
                var3 = var2._groupDMResults;
 133:
                var2['_groupDMResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.TEXT_CHANNEL;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 169; continue _fun0009 }
 163:
                var3 = new Array(0);
                _fun0009_ip = 175; continue _fun0009;
 169:
                var3 = var2._textChannelResults;
 175:
                var2['_textChannelResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.VOICE_CHANNEL;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 211; continue _fun0009 }
 205:
                var3 = new Array(0);
                _fun0009_ip = 217; continue _fun0009;
 211:
                var3 = var2._voiceChannelResults;
 217:
                var2['_voiceChannelResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.GUILD;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 253; continue _fun0009 }
 247:
                var3 = new Array(0);
                _fun0009_ip = 259; continue _fun0009;
 253:
                var3 = var2._guildResults;
 259:
                var2['_guildResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.APPLICATION;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 295; continue _fun0009 }
 289:
                var3 = new Array(0);
                _fun0009_ip = 301; continue _fun0009;
 295:
                var3 = var2._applicationResults;
 301:
                var2['_applicationResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.LINK;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 337; continue _fun0009 }
 331:
                var3 = new Array(0);
                _fun0009_ip = 343; continue _fun0009;
 337:
                var3 = var2._linkResults;
 343:
                var2['_linkResults'] = var3;
                var3 = var2._include;
                var1 = _closure1_slot10;
                var1 = var1.IN_APP_NAVIGATION;
                var1 = var3.bind(var2)(var1);
                if(var1) { _fun0009_ip = 379; continue _fun0009 }
 373:
                var1 = new Array(0);
                _fun0009_ip = 385; continue _fun0009;
 379:
                var1 = var2._inAppNavigations;
 385:
                var2['_inAppNavigations'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = '_include';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = this;
                var3 = var2.resultTypes;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0010_ip = 37; continue _fun0010 }
 18:
                var4 = var2.resultTypes;
                var3 = var4.has;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 37:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = '_isAsyncSearch';
        var1['key'] = var6;
        var6 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = this;
                var3 = var2._include;
                var1 = _closure1_slot10;
                var1 = var1.USER;
                var1 = var3.bind(var2)(var1);
                if(!var1) { _fun0011_ip = 71; continue _fun0011 }
 30:
                var4 = var2.options;
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0011_ip = 67; continue _fun0011 }
 46:
                var4 = var4.userFilters;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0011_ip = 67; continue _fun0011 }
 61:
                var2 = var4.thread;
 67:
                var1 = var3 != var2;
 71:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'setOptions';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var6 = arg1;
                var5 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0012_ip = 19; continue _fun0012 }
 17:
                var5 = false;
 19:
                var4 = var6;
                if(!var5) { _fun0012_ip = 52; continue _fun0012 }
 25:
                var5 = {};
                var8 = var3.options;
                var9 = var5;
                var7 = copyDataProperties(var9, var8);
                var9 = var5;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var4 = var5;
 52:
                var3['options'] = var4;
                var4 = var3.options;
                var5 = var4.blacklist;
                var4 = null;
                if(!(var4 == var5)) { _fun0012_ip = 83; continue _fun0012 }
 75:
                var3['_userBlacklist'] = var4;
                _fun0012_ip = 148; continue _fun0012;
 83:
                var4 = global;
                var6 = var4.Array;
                var5 = var6.from;
                var4 = var3.options;
                var4 = var4.blacklist;
                var6 = var5.bind(var6)(var4);
                var5 = var6.map;
                var4 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var5 = arg1;
                        var1 = var5.startsWith;
                        var4 = 'user:';
                        var2 = var1.bind(var5)(var4);
                        var3 = '';
                        var1 = var3;
                        if(!var2) { _fun0013_ip = 41; continue _fun0013 }
 30:
                        var2 = var5.replace;
                        var1 = var2.bind(var5)(var4, var3);
 41:
                        return var1;
                    }
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.filter;
                var2 = function(arg1) {
                    var2 = '';
                    var1 = arg1;
                    var1 = var2 !== var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var3['_userBlacklist'] = var2;
 148:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'search';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var4;
                var3 = arg2;
                var _closure3_slot2 = var3;
                var2['query'] = var4;
                var3 = var4.trim;
                var4 = var3.bind(var4)();
                var3 = '';
                if(!(var3 !== var4)) { _fun0014_ip = 142; continue _fun0014 }
 47:
                var3 = var2.options;
                var3 = var3.frecencyBoosters;
                if(var3) { _fun0014_ip = 81; continue _fun0014 }
 61:
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.resolve;
                var4 = var3.bind(var4)();
                _fun0014_ip = 122; continue _fun0014;
 81:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 12;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var5 = var3.FrecencyUserSettingsActionCreators;
                var3 = var5.loadIfNecessary;
                var4 = var3.bind(var5)();
 122:
                var3 = var4.finally;
                var1 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var3 = _closure3_slot0;
                        var6 = var3.queryUsers;
                        var5 = _closure3_slot1;
                        var4 = _closure3_slot2;
                        var1 = var3._limit;
                        var1 = var6.bind(var3)(var5, var4, var1);
                        var4 = var3.queryGroupDMs;
                        var1 = var3._limit;
                        var1 = var4.bind(var3)(var5, var1);
                        var3['_groupDMResults'] = var1;
                        var4 = var3.queryTextChannels;
                        var1 = var3._limit;
                        var1 = var4.bind(var3)(var5, var1);
                        var3['_textChannelResults'] = var1;
                        var4 = var3.queryVoiceChannels;
                        var1 = var3._limit;
                        var1 = var4.bind(var3)(var5, var1);
                        var3['_voiceChannelResults'] = var1;
                        var4 = var3.queryGuilds;
                        var1 = var3._limit;
                        var1 = var4.bind(var3)(var5, var1);
                        var3['_guildResults'] = var1;
                        var4 = var3.queryApplications;
                        var1 = var3._limit;
                        var1 = var4.bind(var3)(var5, var1);
                        var3['_applicationResults'] = var1;
                        var4 = var3.queryInAppNavigations;
                        var1 = var3._limit;
                        var1 = var4.bind(var3)(var5, var1);
                        var3['_inAppNavigations'] = var1;
                        var1 = var3._isAsyncSearch;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0015_ip = 213; continue _fun0015 }
 197:
                        var3 = _closure3_slot0;
                        var1 = var3.updateAllResults;
                        var1 = var1.bind(var3)();
                        _fun0015_ip = 268; continue _fun0015;
 213:
                        var1 = global;
                        var4 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var3 = var2._asyncTimeout;
                        var5 = undefined;
                        var3 = var4.bind(var5)(var3);
                        var4 = var1.setTimeout;
                        var3 = var2.updateAllResults;
                        var1 = 300;
                        var1 = var4.bind(var5)(var3, var1);
                        var2['_asyncTimeout'] = var1;
 268:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var1 = undefined;
                return var1;
 142:
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                var1 = var2.updateAllResults;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var2 = this;
                var3 = var2.userSearchContext;
                var1 = null;
                if(!(var1 != var3)) { _fun0016_ip = 25; continue _fun0016 }
 15:
                var1 = var3.clearQuery;
                var1 = var1.bind(var3)();
 25:
                var1 = new Array(0);
                var2['results'] = var1;
                var1 = new Array(0);
                var2['_userResults'] = var1;
                var1 = new Array(0);
                var2['_groupDMResults'] = var1;
                var1 = new Array(0);
                var2['_textChannelResults'] = var1;
                var1 = new Array(0);
                var2['_voiceChannelResults'] = var1;
                var1 = new Array(0);
                var2['_guildResults'] = var1;
                var1 = new Array(0);
                var2['_applicationResults'] = var1;
                var1 = new Array(0);
                var2['_linkResults'] = var1;
                var1 = new Array(0);
                var2['_inAppNavigations'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'clean';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = var2.destroy;
            var1 = var1.bind(var2)();
            var1 = '';
            var2['query'] = var1;
            var1 = var2.updateAllResults;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'pause';
        var1['key'] = var6;
        var6 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var1 = this;
                var2 = var1.userSearchContext;
                var4 = null;
                var1 = var4 == var2;
                if(var1) { _fun0017_ip = 28; continue _fun0017 }
 18:
                var3 = var2.unsubscribe;
                var1 = var4 == var3;
 28:
                if(var1) { _fun0017_ip = 41; continue _fun0017 }
 31:
                var1 = var2.unsubscribe;
                var1 = var1.bind(var2)();
 41:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'resume';
        var1['key'] = var6;
        var6 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var1 = this;
                var2 = var1.userSearchContext;
                var4 = null;
                var1 = var4 == var2;
                if(var1) { _fun0018_ip = 28; continue _fun0018 }
 18:
                var3 = var2.subscribe;
                var1 = var4 == var3;
 28:
                if(var1) { _fun0018_ip = 41; continue _fun0018 }
 31:
                var1 = var2.subscribe;
                var1 = var1.bind(var2)();
 41:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'destroy';
        var1['key'] = var6;
        var6 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var2 = this;
                var4 = var2.userSearchContext;
                var1 = null;
                if(!(var1 != var4)) { _fun0019_ip = 31; continue _fun0019 }
 15:
                var3 = var4.destroy;
                var3 = var3.bind(var4)();
                var2['userSearchContext'] = var1;
 31:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'queryTextChannels';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var5 = this;
                var4 = var5._include;
                var3 = _closure1_slot10;
                var3 = var3.TEXT_CHANNEL;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0020_ip = 38; continue _fun0020 }
 32:
                var3 = new Array(0);
                return var3;
 38:
                var7 = _closure1_slot14;
                var3 = _closure1_slot10;
                var6 = var3.TEXT_CHANNEL;
                var4 = var5.options;
                var3 = undefined;
                var4 = var7.bind(var3)(var6, var4);
                var5 = var5.options;
                var5 = var5.blacklist;
                var _closure3_slot0 = var5;
                var6 = null;
                var7 = var6 != var5;
                var5 = undefined;
                if(!var7) { _fun0020_ip = 96; continue _fun0020 }
 91:
                var5 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.has;
                    var1 = arg1;
                    var5 = var1.id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'channel:';
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
 96:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.queryChannels;
                var1 = {};
                var7 = arg1;
                var1['query'] = var7;
                var1['guildId'] = var6;
                var6 = arg2;
                var1['limit'] = var6;
                var6 = true;
                var1['fuzzy'] = var6;
                var1['filter'] = var5;
                var1['boosters'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'queryVoiceChannels';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var1 = this;
                var3 = var1._include;
                var2 = _closure1_slot10;
                var2 = var2.VOICE_CHANNEL;
                var2 = var3.bind(var1)(var2);
                if(var2) { _fun0021_ip = 36; continue _fun0021 }
 30:
                var2 = new Array(0);
                return var2;
 36:
                var2 = var1.options;
                var6 = var2.voiceChannelGuildFilter;
                var4 = _closure1_slot14;
                var2 = _closure1_slot10;
                var2 = var2.VOICE_CHANNEL;
                var1 = var1.options;
                var3 = undefined;
                var4 = var4.bind(var3)(var2, var1);
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.queryChannels;
                var1 = {};
                var7 = arg1;
                var1['query'] = var7;
                var1['guildId'] = var6;
                var6 = arg2;
                var1['limit'] = var6;
                var6 = true;
                var1['fuzzy'] = var6;
                var5 = _closure1_slot7;
                var1['type'] = var5;
                var1['boosters'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'queryGuilds';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var5 = this;
                var4 = var5._include;
                var3 = _closure1_slot10;
                var3 = var3.GUILD;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0022_ip = 38; continue _fun0022 }
 32:
                var3 = new Array(0);
                return var3;
 38:
                var7 = _closure1_slot14;
                var3 = _closure1_slot10;
                var6 = var3.GUILD;
                var4 = var5.options;
                var3 = undefined;
                var4 = var7.bind(var3)(var6, var4);
                var5 = var5.options;
                var6 = var5.blacklist;
                var _closure3_slot0 = var6;
                var5 = null;
                var6 = var5 != var6;
                var5 = undefined;
                if(!var6) { _fun0022_ip = 96; continue _fun0022 }
 91:
                var5 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.has;
                    var1 = arg1;
                    var5 = var1.id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'guild:';
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
 96:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.queryGuilds;
                var1 = {};
                var6 = arg1;
                var1['query'] = var6;
                var6 = arg2;
                var1['limit'] = var6;
                var6 = true;
                var1['fuzzy'] = var6;
                var1['filter'] = var5;
                var1['boosters'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'queryUsers';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var7 = arg1;
                var10 = arg2;
                var2 = arg3;
                var5 = this;
                var3 = var5.userSearchContext;
                var28 = null;
                if(!(var28 != var3)) { _fun0023_ip = 569; continue _fun0023 }
 27:
                var6 = var5._include;
                var4 = _closure1_slot10;
                var4 = var4.USER;
                var4 = var6.bind(var5)(var4);
                if(!var4) { _fun0023_ip = 569; continue _fun0023 }
 57:
                var4 = var5.options;
                var6 = var4.userFilters;
                var11 = _closure1_slot14;
                var4 = _closure1_slot10;
                var8 = var4.USER;
                var4 = var5.options;
                var9 = undefined;
                var4 = var11.bind(var9)(var8, var4);
                var11 = var28 == var6;
                var8 = undefined;
                if(var11) { _fun0023_ip = 110; continue _fun0023 }
 104:
                var8 = var6.thread;
 110:
                if(!(var28 != var8)) { _fun0023_ip = 480; continue _fun0023 }
 117:
                var12 = _closure1_slot5;
                var11 = var12.getMemberListSections;
                var8 = var6.thread;
                var27 = var11.bind(var12)(var8);
                var13 = new Array(0);
                var25 = var27;
                var21 = undefined;
                var20 = undefined;
                var19 = undefined;
                var18 = undefined;
                for(var22 in var25)
 164:
                {
                    var14 = var21;
                    var12 = var20;
                    var11 = var19;
 185:
                    var8 = var22;
                    var17 = var27[var8];
                    var15 = _closure1_slot12;
                    var8 = var17.userIds;
                    var16 = var15.bind(var9)(var8);
                    var15 = var16.bind(var9)();
                    var8 = var15.done;
                    var21 = var14;
                    var20 = var12;
                    var19 = var11;
                    var14 = var21;
                    var12 = var20;
                    var11 = var19;
                    if(var8) { _fun0023_ip = 164; continue _fun0023 }
 237:
                    var31 = var15.value;
                    var8 = var28 != var6;
                    if(!var8) { _fun0023_ip = 255; continue _fun0023 }
 249:
                    var8 = var6.friends;
 255:
                    if(!var8) { _fun0023_ip = 276; continue _fun0023 }
 258:
                    var30 = _closure1_slot8;
                    var29 = var30.isFriend;
                    var29 = var29.bind(var30)(var31);
                    var8 = !var29;
 276:
                    var29 = var11;
                    if(var8) { _fun0023_ip = 377; continue _fun0023 }
 282:
                    var8 = var5._userBlacklist;
                    var32 = var28 == var8;
                    var30 = undefined;
                    if(var32) { _fun0023_ip = 307; continue _fun0023 }
 297:
                    var32 = var8.includes;
                    var30 = var32.bind(var8)(var31);
 307:
                    var32 = var28 != var30;
                    if(!var32) { _fun0023_ip = 317; continue _fun0023 }
 314:
                    var32 = var30;
 317:
                    if(var32) { _fun0023_ip = 368; continue _fun0023 }
 320:
                    var34 = var13.push;
                    var33 = {};
                    var33['userId'] = var31;
                    var32 = var17.usersById;
                    var32 = var32[var31];
                    var36 = var28 == var32;
                    var35 = undefined;
                    if(var36) { _fun0023_ip = 355; continue _fun0023 }
 350:
                    var35 = var32.displayName;
 355:
                    var33['nick'] = var35;
                    var33 = var34.bind(var13)(var33);
                    var11 = var32;
 368:
                    var29 = var11;
                    var14 = var30;
                    var12 = var8;
 377:
                    var30 = var16.bind(var9)();
                    var8 = var30.done;
                    var21 = var14;
                    var20 = var12;
                    var19 = var29;
                    var18 = var31;
                    var15 = var30;
                    var14 = var21;
                    var12 = var20;
                    var11 = var19;
                    if(var8) { _fun0023_ip = 164; continue _fun0023 }
 416:
                    _fun0023_ip = 237; continue _fun0023;
                }
 421:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 8;
                var8 = var12[var8];
                var12 = var11.bind(var9)(var8);
                var11 = var12.queryUsers;
                var8 = {};
                var8['query'] = var7;
                var8['users'] = var13;
                var8['limit'] = var2;
                var8['boosters'] = var4;
                var8 = var11.bind(var12)(var8);
                var5['_userResults'] = var8;
                _fun0023_ip = 569; continue _fun0023;
 480:
                if(!(var9 !== var10)) { _fun0023_ip = 520; continue _fun0023 }
 484:
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 13;
                var1 = var11[var1];
                var9 = var8.bind(var9)(var1);
                var8 = var9.requestMembers;
                var1 = 100;
                var1 = var8.bind(var9)(var10, var7, var1);
 520:
                var1 = var3.setLimit;
                var1 = var1.bind(var3)(var2);
                var2 = var3.setQuery;
                var1 = {};
                var1['query'] = var7;
                var1['filters'] = var6;
                var5 = var5._userBlacklist;
                var1['blacklist'] = var5;
                var1['boosters'] = var4;
                var1 = var2.bind(var3)(var1);
 569:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'queryGroupDMs';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var3 = this;
                var5 = var3._include;
                var4 = _closure1_slot10;
                var4 = var4.GROUP_DM;
                var4 = var5.bind(var3)(var4);
                if(var4) { _fun0024_ip = 38; continue _fun0024 }
 32:
                var4 = new Array(0);
                return var4;
 38:
                var4 = var3.options;
                var6 = var4.blacklist;
                var _closure3_slot0 = var6;
                var7 = _closure1_slot14;
                var4 = _closure1_slot10;
                var5 = var4.GROUP_DM;
                var4 = var3.options;
                var3 = undefined;
                var4 = var7.bind(var3)(var5, var4);
                var5 = null;
                var6 = var5 != var6;
                var5 = undefined;
                if(!var6) { _fun0024_ip = 96; continue _fun0024 }
 91:
                var5 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.has;
                    var1 = arg1;
                    var5 = var1.id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'channel:';
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
 96:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.queryGroupDMs;
                var1 = {};
                var6 = arg1;
                var1['query'] = var6;
                var6 = arg2;
                var1['limit'] = var6;
                var6 = true;
                var1['fuzzy'] = var6;
                var1['filter'] = var5;
                var1['boosters'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'queryApplications';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var4 = this;
                var3 = var4._include;
                var1 = _closure1_slot10;
                var1 = var1.APPLICATION;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0025_ip = 36; continue _fun0025 }
 30:
                var1 = new Array(0);
                _fun0025_ip = 92; continue _fun0025;
 36:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.queryApplications;
                var2 = {};
                var5 = arg1;
                var2['query'] = var5;
                var5 = arg2;
                var2['limit'] = var5;
                var5 = true;
                var2['fuzzy'] = var5;
                var1 = var3.bind(var4)(var2);
 92:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'queryLink';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var13 = this;
                var8 = arg1;
                var5 = undefined;
                var9 = undefined;
                var10 = undefined;
                var3 = undefined;
                var2 = undefined;
                var6 = undefined;
                var7 = undefined;
                var1 = undefined;
                var12 = var13._include;
                var11 = _closure1_slot10;
                var11 = var11.LINK;
                var11 = var12.bind(var13)(var11);
                if(var11) { _fun0026_ip = 55; continue _fun0026 }
 49:
                var11 = new Array(0);
                return var11;
 55:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 14;
                var11 = var13[var11];
                var12 = var12.bind(var5)(var11);
                var11 = var12.sanitizeUrl;
                var10 = var11.bind(var12)(var8);
 86: // try_start_0
                var8 = global;
                var12 = var8.URL;
                var14 = var10;
                var11 = var12.prototype;
                var11 = Object.create(var11, {constructor: {value: var12}});
                var15 = var11;
                var10 = new var15[var12](var14, var13);
                var9 = var10 instanceof Object ? var10 : var11;
 117: // try_end0
                var3 = var9;
                var2 = var9.pathname;
                var9 = var9.hostname;
                var6 = var9;
                var11 = '';
                if(!(var5 !== var9)) { _fun0026_ip = 146; continue _fun0026 }
 143:
                var11 = var6;
 146:
                var7 = var3.host;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 15;
                var9 = var9[var6];
                var10 = var10.bind(var5)(var9);
                var9 = var10.isDiscordHostname;
                var9 = var9.bind(var10)(var11);
                var3 = var9;
                if(var9) { _fun0026_ip = 210; continue _fun0026 }
 189:
                var8 = var8.window;
                var8 = var8.location;
                var8 = var8.host;
                var3 = var8 === var7;
 210:
                var1 = var3;
                var7 = var2;
                var3 = null;
                if(!(var3 !== var7)) { _fun0026_ip = 259; continue _fun0026 }
 222:
                if(!var1) { _fun0026_ip = 259; continue _fun0026 }
 225:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var5 = var3.bind(var5)(var1);
                var3 = var5.isAppRoute;
                var1 = var2;
                var1 = var3.bind(var5)(var1);
                if(var1) { _fun0026_ip = 265; continue _fun0026 }
 259:
                var1 = new Array(0);
                _fun0026_ip = 322; continue _fun0026;
 265:
                var3 = {};
                var5 = _closure1_slot10;
                var5 = var5.LINK;
                var3['type'] = var5;
                var5 = _closure1_slot6;
                var4 = var5.fromPath;
                var2 = var4.bind(var5)(var2);
                var3['record'] = var2;
                var2 = 1;
                var3['score'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 322:
                return var1;
 324: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = new Array(0);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'queryInAppNavigations';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var4 = this;
                var3 = var4._include;
                var1 = _closure1_slot10;
                var1 = var1.IN_APP_NAVIGATION;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0027_ip = 36; continue _fun0027 }
 30:
                var1 = new Array(0);
                _fun0027_ip = 92; continue _fun0027;
 36:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.queryInAppNavigations;
                var2 = {};
                var5 = arg1;
                var2['query'] = var5;
                var5 = arg2;
                var2['limit'] = var5;
                var5 = true;
                var2['fuzzy'] = var5;
                var1 = var3.bind(var4)(var2);
 92:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[19] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/autocompleter/Autocompleter.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();