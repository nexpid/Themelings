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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getAutocompleterBoosterMap(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg2;
            var1 = var1.frecencyBoosters;
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = {};
            _fun0004_ip = 4; continue _fun0004;
case 36:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getBoosterMap;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
case 4:
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
case 0:
                var2 = arguments[2];
                var6 = arguments[3];
                var4 = this;
                var _closure3_slot0 = var4;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var2 = 100;
case 38:
                if(!(var6 === var1)) { _fun0005_ip = 40; continue _fun0005 }
case 34:
                var6 = _closure1_slot11;
case 40:
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
case 0:
                        var1 = arg1;
                        var3 = var1.results;
                        var5 = _closure3_slot0;
                        var4 = var5._include;
                        var2 = _closure1_slot10;
                        var2 = var2.USER;
                        var2 = var4.bind(var5)(var2);
                        if(!var2) { _fun0006_ip = 41; continue _fun0006 }
case 2:
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
                        if(var2) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                        var2 = var3.value;
                        var10 = var2.id;
                        var14 = var2.score;
                        var12 = var2.comparator;
                        var9 = _closure1_slot9;
                        var2 = var9.getUser;
                        var11 = var2.bind(var9)(var10);
                        if(!(var4 != var11)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
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
                        if(!var13) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                        var11 = var12;
case 46:
                        var2['comparator'] = var11;
                        var2 = var9.bind(var10)(var2);
case 44:
                        var9 = var6.bind(var7)();
                        var2 = var9.done;
                        var3 = var9;
                        if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 42:
                        var2 = _closure3_slot0;
                        var3 = var2._userResults;
                        var3 = var3.length;
                        var2 = var2._limit;
                        if(!(var3 > var2)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                        var2 = _closure3_slot0;
                        var3 = var2._userResults;
                        var2 = var2._limit;
                        var3['length'] = var2;
case 48:
                        var2 = _closure3_slot0;
                        var1 = var2.updateAllResults;
                        var1 = var1.bind(var2)();
case 41:
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
case 0:
                var2 = this;
                var3 = var2.userSearchContext;
                var1 = null;
                if(!(var1 == var3)) { _fun0007_ip = 35; continue _fun0007 }
case 50:
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
case 35:
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
case 0:
                var4 = arg1;
                var1 = this;
                var3 = var1.userSearchContext;
                var1['_limit'] = var4;
                var2 = null;
                if(!(var2 != var3)) { _fun0008_ip = 40; continue _fun0008 }
case 38:
                var2 = var3.setLimit;
                var2 = var2.bind(var3)(var4);
case 40:
                var2 = var1._userResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 51; continue _fun0008 }
case 28:
                var3 = var1._userResults;
                var2 = var1._limit;
                var3['length'] = var2;
case 51:
                var2 = var1._groupDMResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                var3 = var1._groupDMResults;
                var2 = var1._limit;
                var3['length'] = var2;
case 52:
                var2 = var1._textChannelResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                var3 = var1._textChannelResults;
                var2 = var1._limit;
                var3['length'] = var2;
case 54:
                var2 = var1._voiceChannelResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                var3 = var1._voiceChannelResults;
                var2 = var1._limit;
                var3['length'] = var2;
case 56:
                var2 = var1._guildResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                var3 = var1._guildResults;
                var2 = var1._limit;
                var3['length'] = var2;
case 58:
                var2 = var1._applicationResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                var3 = var1._applicationResults;
                var2 = var1._limit;
                var3['length'] = var2;
case 60:
                var2 = var1._linkResults;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                var3 = var1._linkResults;
                var2 = var1._limit;
                var3['length'] = var2;
case 62:
                var2 = var1._inAppNavigations;
                var3 = var2.length;
                var2 = var1._limit;
                if(!(var3 > var2)) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                var2 = var1._inAppNavigations;
                var1 = var1._limit;
                var2['length'] = var1;
case 64:
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
case 0:
                var5 = arg1;
                var2 = this;
                var1 = null;
                var3 = var1 != var5;
                if(!var3) { _fun0009_ip = 2; continue _fun0009 }
case 50:
                var3 = global;
                var3 = var3.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var7 = var4;
                var6 = var5;
                var3 = new var7[var3](var6, var5);
                var1 = var3 instanceof Object ? var3 : var4;
case 2:
                var2['resultTypes'] = var1;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.USER;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                var3 = new Array(0);
                _fun0009_ip = 43; continue _fun0009;
case 66:
                var3 = var2._userResults;
case 43:
                var2['_userResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.GROUP_DM;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                var3 = new Array(0);
                _fun0009_ip = 70; continue _fun0009;
case 68:
                var3 = var2._groupDMResults;
case 70:
                var2['_groupDMResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.TEXT_CHANNEL;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 17; continue _fun0009 }
case 14:
                var3 = new Array(0);
                _fun0009_ip = 71; continue _fun0009;
case 17:
                var3 = var2._textChannelResults;
case 71:
                var2['_textChannelResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.VOICE_CHANNEL;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 72; continue _fun0009 }
case 22:
                var3 = new Array(0);
                _fun0009_ip = 73; continue _fun0009;
case 72:
                var3 = var2._voiceChannelResults;
case 73:
                var2['_voiceChannelResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.GUILD;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 74; continue _fun0009 }
case 23:
                var3 = new Array(0);
                _fun0009_ip = 75; continue _fun0009;
case 74:
                var3 = var2._guildResults;
case 75:
                var2['_guildResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.APPLICATION;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 76; continue _fun0009 }
case 25:
                var3 = new Array(0);
                _fun0009_ip = 77; continue _fun0009;
case 76:
                var3 = var2._applicationResults;
case 77:
                var2['_applicationResults'] = var3;
                var4 = var2._include;
                var3 = _closure1_slot10;
                var3 = var3.LINK;
                var3 = var4.bind(var2)(var3);
                if(var3) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                var3 = new Array(0);
                _fun0009_ip = 6; continue _fun0009;
case 78:
                var3 = var2._linkResults;
case 6:
                var2['_linkResults'] = var3;
                var3 = var2._include;
                var1 = _closure1_slot10;
                var1 = var1.IN_APP_NAVIGATION;
                var1 = var3.bind(var2)(var1);
                if(var1) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                var1 = new Array(0);
                _fun0009_ip = 82; continue _fun0009;
case 80:
                var1 = var2._inAppNavigations;
case 82:
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
case 0:
                var2 = this;
                var3 = var2.resultTypes;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                var4 = var2.resultTypes;
                var3 = var4.has;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
case 83:
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
case 0:
                var2 = this;
                var3 = var2._include;
                var1 = _closure1_slot10;
                var1 = var1.USER;
                var1 = var3.bind(var2)(var1);
                if(!var1) { _fun0011_ip = 85; continue _fun0011 }
case 3:
                var4 = var2.options;
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0011_ip = 30; continue _fun0011 }
case 2:
                var4 = var4.userFilters;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0011_ip = 30; continue _fun0011 }
case 7:
                var2 = var4.thread;
case 30:
                var1 = var3 != var2;
case 85:
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
case 0:
                var6 = arg1;
                var5 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0012_ip = 86; continue _fun0012 }
case 87:
                var5 = false;
case 86:
                var4 = var6;
                if(!var5) { _fun0012_ip = 88; continue _fun0012 }
case 89:
                var5 = {};
                var8 = var3.options;
                var9 = var5;
                var7 = copyDataProperties(var9, var8);
                var9 = var5;
                var8 = var6;
                var6 = copyDataProperties(var9, var8);
                var4 = var5;
case 88:
                var3['options'] = var4;
                var4 = var3.options;
                var5 = var4.blacklist;
                var4 = null;
                if(!(var4 == var5)) { _fun0012_ip = 90; continue _fun0012 }
case 91:
                var3['_userBlacklist'] = var4;
                _fun0012_ip = 92; continue _fun0012;
case 90:
                var4 = global;
                var6 = var4.Array;
                var5 = var6.from;
                var4 = var3.options;
                var4 = var4.blacklist;
                var6 = var5.bind(var6)(var4);
                var5 = var6.map;
                var4 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var5 = arg1;
                        var1 = var5.startsWith;
                        var4 = 'user:';
                        var2 = var1.bind(var5)(var4);
                        var3 = '';
                        var1 = var3;
                        if(!var2) { _fun0013_ip = 93; continue _fun0013 }
case 3:
                        var2 = var5.replace;
                        var1 = var2.bind(var5)(var4, var3);
case 93:
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
case 92:
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
case 0:
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
                if(!(var3 !== var4)) { _fun0014_ip = 94; continue _fun0014 }
case 95:
                var3 = var2.options;
                var3 = var3.frecencyBoosters;
                if(var3) { _fun0014_ip = 96; continue _fun0014 }
case 7:
                var3 = global;
                var4 = var3.Promise;
                var3 = var4.resolve;
                var4 = var3.bind(var4)();
                _fun0014_ip = 97; continue _fun0014;
case 96:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 12;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var5 = var3.FrecencyUserSettingsActionCreators;
                var3 = var5.loadIfNecessary;
                var4 = var3.bind(var5)();
case 97:
                var3 = var4.finally;
                var1 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
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
                        if(var1) { _fun0015_ip = 46; continue _fun0015 }
case 98:
                        var3 = _closure3_slot0;
                        var1 = var3.updateAllResults;
                        var1 = var1.bind(var3)();
                        _fun0015_ip = 99; continue _fun0015;
case 46:
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
case 99:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var1 = undefined;
                return var1;
case 94:
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
case 0:
                var2 = this;
                var3 = var2.userSearchContext;
                var1 = null;
                if(!(var1 != var3)) { _fun0016_ip = 89; continue _fun0016 }
case 50:
                var1 = var3.clearQuery;
                var1 = var1.bind(var3)();
case 89:
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
case 0:
                var1 = this;
                var2 = var1.userSearchContext;
                var4 = null;
                var1 = var4 == var2;
                if(var1) { _fun0017_ip = 34; continue _fun0017 }
case 84:
                var3 = var2.unsubscribe;
                var1 = var4 == var3;
case 34:
                if(var1) { _fun0017_ip = 93; continue _fun0017 }
case 100:
                var1 = var2.unsubscribe;
                var1 = var1.bind(var2)();
case 93:
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
case 0:
                var1 = this;
                var2 = var1.userSearchContext;
                var4 = null;
                var1 = var4 == var2;
                if(var1) { _fun0018_ip = 34; continue _fun0018 }
case 84:
                var3 = var2.subscribe;
                var1 = var4 == var3;
case 34:
                if(var1) { _fun0018_ip = 93; continue _fun0018 }
case 100:
                var1 = var2.subscribe;
                var1 = var1.bind(var2)();
case 93:
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
case 0:
                var2 = this;
                var4 = var2.userSearchContext;
                var1 = null;
                if(!(var1 != var4)) { _fun0019_ip = 100; continue _fun0019 }
case 50:
                var3 = var4.destroy;
                var3 = var3.bind(var4)();
                var2['userSearchContext'] = var1;
case 100:
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
case 0:
                var5 = this;
                var4 = var5._include;
                var3 = _closure1_slot10;
                var3 = var3.TEXT_CHANNEL;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0020_ip = 101; continue _fun0020 }
case 102:
                var3 = new Array(0);
                return var3;
case 101:
                var7 = _closure1_slot14;
                var3 = _closure1_slot10;
                var6 = var3.TEXT_CHANNEL;
                var4 = var5.options;
                var3 = undefined;
                var4 = var7.bind(var3)(var6, var4);
                var5 = var5.options;
                var6 = var5.allowSnowflake;
                var5 = var5.blacklist;
                var _closure3_slot0 = var5;
                var7 = null;
                var8 = var7 != var5;
                var5 = undefined;
                if(!var8) { _fun0020_ip = 103; continue _fun0020 }
case 104:
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
case 103:
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.queryChannels;
                var1 = {};
                var8 = arg1;
                var1['query'] = var8;
                var1['guildId'] = var7;
                var7 = arg2;
                var1['limit'] = var7;
                var7 = true;
                var1['fuzzy'] = var7;
                var1['allowSnowflake'] = var6;
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
case 0:
                var1 = this;
                var3 = var1._include;
                var2 = _closure1_slot10;
                var2 = var2.VOICE_CHANNEL;
                var2 = var3.bind(var1)(var2);
                if(var2) { _fun0021_ip = 105; continue _fun0021 }
case 3:
                var2 = new Array(0);
                return var2;
case 105:
                var2 = var1.options;
                var5 = var2.allowSnowflake;
                var7 = var2.voiceChannelGuildFilter;
                var4 = _closure1_slot14;
                var2 = _closure1_slot10;
                var2 = var2.VOICE_CHANNEL;
                var1 = var1.options;
                var3 = undefined;
                var4 = var4.bind(var3)(var2, var1);
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.queryChannels;
                var1 = {};
                var8 = arg1;
                var1['query'] = var8;
                var1['guildId'] = var7;
                var7 = arg2;
                var1['limit'] = var7;
                var7 = true;
                var1['fuzzy'] = var7;
                var6 = _closure1_slot7;
                var1['type'] = var6;
                var1['allowSnowflake'] = var5;
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
case 0:
                var4 = this;
                var5 = var4._include;
                var3 = _closure1_slot10;
                var3 = var3.GUILD;
                var3 = var5.bind(var4)(var3);
                if(var3) { _fun0022_ip = 101; continue _fun0022 }
case 102:
                var3 = new Array(0);
                return var3;
case 101:
                var7 = _closure1_slot14;
                var3 = _closure1_slot10;
                var6 = var3.GUILD;
                var5 = var4.options;
                var3 = undefined;
                var5 = var7.bind(var3)(var6, var5);
                var6 = var4.options;
                var4 = var6.allowSnowflake;
                var7 = var6.blacklist;
                var _closure3_slot0 = var7;
                var6 = null;
                var7 = var6 != var7;
                var6 = undefined;
                if(!var7) { _fun0022_ip = 103; continue _fun0022 }
case 104:
                var6 = function(arg1) {
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
case 103:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.queryGuilds;
                var1 = {};
                var7 = arg1;
                var1['query'] = var7;
                var7 = arg2;
                var1['limit'] = var7;
                var7 = true;
                var1['fuzzy'] = var7;
                var1['filter'] = var6;
                var1['boosters'] = var5;
                var1['allowSnowflake'] = var4;
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
case 0:
                var7 = arg1;
                var10 = arg2;
                var2 = arg3;
                var5 = this;
                var3 = var5.userSearchContext;
                var29 = null;
                if(!(var29 != var3)) { _fun0023_ip = 106; continue _fun0023 }
case 107:
                var6 = var5._include;
                var4 = _closure1_slot10;
                var4 = var4.USER;
                var4 = var6.bind(var5)(var4);
                if(!var4) { _fun0023_ip = 106; continue _fun0023 }
case 108:
                var4 = var5.options;
                var13 = var4.allowSnowflake;
                var6 = var4.userFilters;
                var11 = _closure1_slot14;
                var4 = _closure1_slot10;
                var8 = var4.USER;
                var4 = var5.options;
                var9 = undefined;
                var4 = var11.bind(var9)(var8, var4);
                var11 = var29 == var6;
                var8 = undefined;
                if(var11) { _fun0023_ip = 109; continue _fun0023 }
case 13:
                var8 = var6.thread;
case 109:
                if(!(var29 != var8)) { _fun0023_ip = 110; continue _fun0023 }
case 111:
                var12 = _closure1_slot5;
                var11 = var12.getMemberListSections;
                var8 = var6.thread;
                var28 = var11.bind(var12)(var8);
                var14 = new Array(0);
                var26 = var28;
                var22 = undefined;
                var21 = undefined;
                var20 = undefined;
                var19 = undefined;
                for(var23 in var26)
case 112:
                {
                    var15 = var22;
                    var12 = var21;
                    var11 = var20;
case 56:
                    var8 = var23;
                    var18 = var28[var8];
                    var16 = _closure1_slot12;
                    var8 = var18.userIds;
                    var17 = var16.bind(var9)(var8);
                    var16 = var17.bind(var9)();
                    var8 = var16.done;
                    var22 = var15;
                    var21 = var12;
                    var20 = var11;
                    var15 = var22;
                    var12 = var21;
                    var11 = var20;
                    if(var8) { _fun0023_ip = 112; continue _fun0023 }
case 113:
                    var32 = var16.value;
                    var8 = var29 != var6;
                    if(!var8) { _fun0023_ip = 114; continue _fun0023 }
case 115:
                    var8 = var6.friends;
case 114:
                    if(!var8) { _fun0023_ip = 116; continue _fun0023 }
case 117:
                    var31 = _closure1_slot8;
                    var30 = var31.isFriend;
                    var30 = var30.bind(var31)(var32);
                    var8 = !var30;
case 116:
                    var30 = var11;
                    if(var8) { _fun0023_ip = 118; continue _fun0023 }
case 48:
                    var8 = var5._userBlacklist;
                    var33 = var29 == var8;
                    var31 = undefined;
                    if(var33) { _fun0023_ip = 119; continue _fun0023 }
case 120:
                    var33 = var8.includes;
                    var31 = var33.bind(var8)(var32);
case 119:
                    var33 = var29 != var31;
                    if(!var33) { _fun0023_ip = 8; continue _fun0023 }
case 121:
                    var33 = var31;
case 8:
                    if(var33) { _fun0023_ip = 122; continue _fun0023 }
case 27:
                    var35 = var14.push;
                    var34 = {};
                    var34['userId'] = var32;
                    var33 = var18.usersById;
                    var33 = var33[var32];
                    var37 = var29 == var33;
                    var36 = undefined;
                    if(var37) { _fun0023_ip = 123; continue _fun0023 }
case 124:
                    var36 = var33.displayName;
case 123:
                    var34['nick'] = var36;
                    var34 = var35.bind(var14)(var34);
                    var11 = var33;
case 122:
                    var30 = var11;
                    var15 = var31;
                    var12 = var8;
case 118:
                    var31 = var17.bind(var9)();
                    var8 = var31.done;
                    var22 = var15;
                    var21 = var12;
                    var20 = var30;
                    var19 = var32;
                    var16 = var31;
                    var15 = var22;
                    var12 = var21;
                    var11 = var20;
                    if(var8) { _fun0023_ip = 112; continue _fun0023 }
case 125:
                    _fun0023_ip = 113; continue _fun0023;
                }
case 126:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 8;
                var8 = var12[var8];
                var12 = var11.bind(var9)(var8);
                var11 = var12.queryUsers;
                var8 = {};
                var8['query'] = var7;
                var8['users'] = var14;
                var8['limit'] = var2;
                var8['boosters'] = var4;
                var8['allowSnowflake'] = var13;
                var8 = var11.bind(var12)(var8);
                var5['_userResults'] = var8;
                _fun0023_ip = 106; continue _fun0023;
case 110:
                if(!(var9 !== var10)) { _fun0023_ip = 127; continue _fun0023 }
case 128:
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 13;
                var1 = var11[var1];
                var9 = var8.bind(var9)(var1);
                var8 = var9.requestMembers;
                var1 = 100;
                var1 = var8.bind(var9)(var10, var7, var1);
case 127:
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
case 106:
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
case 0:
                var3 = this;
                var5 = var3._include;
                var4 = _closure1_slot10;
                var4 = var4.GROUP_DM;
                var4 = var5.bind(var3)(var4);
                if(var4) { _fun0024_ip = 101; continue _fun0024 }
case 102:
                var4 = new Array(0);
                return var4;
case 101:
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
                if(!var6) { _fun0024_ip = 11; continue _fun0024 }
case 43:
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
case 11:
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
case 0:
                var4 = this;
                var3 = var4._include;
                var1 = _closure1_slot10;
                var1 = var1.APPLICATION;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0025_ip = 105; continue _fun0025 }
case 3:
                var1 = new Array(0);
                _fun0025_ip = 129; continue _fun0025;
case 105:
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
case 129:
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
case 0:
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
                if(var11) { _fun0026_ip = 4; continue _fun0026 }
case 5:
                var11 = new Array(0);
                return var11;
case 4:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 14;
                var11 = var13[var11];
                var12 = var12.bind(var5)(var11);
                var11 = var12.sanitizeUrl;
                var10 = var11.bind(var12)(var8);
case 9: // try_start_0
                var8 = global;
                var12 = var8.URL;
                var14 = var10;
                var11 = var12.prototype;
                var11 = Object.create(var11, {constructor: {value: var12}});
                var15 = var11;
                var10 = new var15[var12](var14, var13);
                var9 = var10 instanceof Object ? var10 : var11;
case 130: // try_end0
                var3 = var9;
                var2 = var9.pathname;
                var9 = var9.hostname;
                var6 = var9;
                var11 = '';
                if(!(var5 !== var9)) { _fun0026_ip = 131; continue _fun0026 }
case 132:
                var11 = var6;
case 131:
                var7 = var3.host;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 15;
                var9 = var9[var6];
                var10 = var10.bind(var5)(var9);
                var9 = var10.isDiscordHostname;
                var9 = var9.bind(var10)(var11);
                var3 = var9;
                if(var9) { _fun0026_ip = 47; continue _fun0026 }
case 133:
                var8 = var8.window;
                var8 = var8.location;
                var8 = var8.host;
                var3 = var8 === var7;
case 47:
                var1 = var3;
                var7 = var2;
                var3 = null;
                if(!(var3 !== var7)) { _fun0026_ip = 75; continue _fun0026 }
case 134:
                if(!var1) { _fun0026_ip = 75; continue _fun0026 }
case 135:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var5 = var3.bind(var5)(var1);
                var3 = var5.isAppRoute;
                var1 = var2;
                var1 = var3.bind(var5)(var1);
                if(var1) { _fun0026_ip = 24; continue _fun0026 }
case 75:
                var1 = new Array(0);
                _fun0026_ip = 136; continue _fun0026;
case 24:
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
case 136:
                return var1;
case 137: // catch_target0
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
case 0:
                var4 = this;
                var3 = var4._include;
                var1 = _closure1_slot10;
                var1 = var1.IN_APP_NAVIGATION;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0027_ip = 105; continue _fun0027 }
case 3:
                var1 = new Array(0);
                _fun0027_ip = 129; continue _fun0027;
case 105:
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
case 129:
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