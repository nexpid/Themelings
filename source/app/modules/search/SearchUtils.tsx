// app/modules/search/SearchUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot21;
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
            var7 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
    var _closure1_slot21 = var1;
    var7 = function getSearchContextId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = var1.type;
            var3 = _closure1_slot10;
            var3 = var3.GUILD;
            if(!(var3 !== var4)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = _closure1_slot10;
            var3 = var3.GUILD_CHANNEL;
            if(!(var3 !== var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var3 = _closure1_slot10;
            var3 = var3.CHANNEL;
            if(!(var3 !== var4)) { _fun0004_ip = 38; continue _fun0004 }
case 40:
            var3 = _closure1_slot10;
            var3 = var3.THREAD;
            if(!(var3 !== var4)) { _fun0004_ip = 38; continue _fun0004 }
case 30:
            var3 = _closure1_slot10;
            var3 = var3.DMS;
            if(!(var3 !== var4)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var3 = _closure1_slot10;
            var3 = var3.FAVORITES;
            if(!(var3 !== var4)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var3 = undefined;
            return var3;
case 43:
            var2 = _closure1_slot16;
            return var2;
case 41:
            var2 = var1.type;
            return var2;
case 38:
            var2 = var1.channelId;
            return var2;
case 36:
            var1 = var1.guildId;
            return var1;
        }
    };
    var _closure1_slot22 = var7;
    var5 = function quoteChannelName(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var2 = var5.match;
            var1 = /([\\" ])/g;
            var3 = var2.bind(var5)(var1);
            var2 = null;
            var1 = var5;
            if(!(var2 != var3)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var4 = var5.replaceAll;
            var3 = /([\\"])/g;
            var2 = function(arg1, arg2) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '\\';
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var4 = var4.bind(var5)(var3, var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '"';
            var1 = var3.bind(var2)(var4, var2);
case 44:
            return var1;
        }
    };
    var _closure1_slot23 = var5;
    var4 = function tokenizeQuery(arg1) {
        var3 = _closure1_slot18;
        var2 = var3.tokenize;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot24 = var4;
    var1 = global;
    var13 = var1.Object;
    var8 = var13.defineProperty;
    var6 = {};
    var12 = true;
    var6['value'] = var12;
    var1 = '__esModule';
    var1 = var8.bind(var13)(var3, var1, var6);
    var1 = 0;
    var6 = var10[var1];
    var1 = undefined;
    var6 = var11.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var6 = 6;
    var6 = var10[var6];
    var6 = var11.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.SearchTabs;
    var _closure1_slot9 = var6;
    var6 = 8;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var8 = var6.SearchTypes;
    var _closure1_slot10 = var8;
    var8 = var6.SearchTokenTypes;
    var _closure1_slot11 = var8;
    var13 = var6.SearchPopoutModes;
    var _closure1_slot12 = var13;
    var13 = var6.IS_SEARCH_ANSWER_TOKEN;
    var _closure1_slot13 = var13;
    var13 = var6.IS_SEARCH_FILTER_TOKEN;
    var _closure1_slot14 = var13;
    var13 = var6.SearchModes;
    var _closure1_slot15 = var13;
    var13 = var6.FAVORITES;
    var _closure1_slot16 = var13;
    var6 = var6.ME;
    var6 = {};
    var13 = var8.FILTER_BEFORE;
    var6[var13] = var12;
    var13 = var8.FILTER_AFTER;
    var6[var13] = var12;
    var8 = var8.FILTER_ON;
    var6[var8] = var12;
    var _closure1_slot17 = var6;
    var8 = 13;
    var12 = var10[var8];
    var12 = var11.bind(var1)(var12);
    var13 = var12.prototype;
    var13 = Object.create(var13, {constructor: {value: var12}});
    var17 = var13;
    var12 = new var17[var12](var16);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot18 = var12;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var17 = var11;
    var8 = new var17[var8](var16);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot19 = var8;
    var8 = 18;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/search/SearchUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['getSearchContextId'] = var7;
    var7 = function getSearchHistoryStateId(arg1) {
        var3 = _closure1_slot22;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['getSearchHistoryStateId'] = var7;
    var7 = function getSearchTabFetchId(arg1, arg2, arg3) {
        var3 = _closure1_slot22;
        var2 = undefined;
        var1 = arg1;
        var11 = var3.bind(var2)(var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var12 = '';
        var3 = '-';
        var9 = arg2;
        var7 = arg3;
        var10 = var3;
        var8 = var3;
        var1 = var12[var5](var11, var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getSearchTabFetchId'] = var7;
    var7 = function getChannelActiveAgoTimestamp(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 9;
            var4 = var7[var2];
            var6 = undefined;
            var4 = var3.bind(var6)(var4);
            var5 = var4.bind(var6)();
            var4 = var5.diff;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = arg1;
            var3 = var3.bind(var6)(var2);
            var2 = 's';
            var5 = var4.bind(var5)(var3, var2);
            var2 = 31536000;
            if(!(!(var5 > var2))) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var3 = 2592000;
            if(!(!(var5 > var3))) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var4 = 172800;
            if(!(!(var5 > var4))) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var4 = 86400;
            if(!(!(var5 > var4))) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var4 = 3600;
            if(!(!(var5 > var4))) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var7 = 60;
            if(!(!(var5 > var7))) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 10;
            var9 = var12[var8];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8["5Ldpkc"];
            var8 = var9.bind(var10)(var8);
            return var8;
case 56:
            var8 = global;
            var9 = var8.Math;
            var8 = var9.round;
            var7 = var5 / var7;
            var11 = var8.bind(var9)(var7);
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 10;
            var9 = var12[var7];
            var9 = var8.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var7 = var12[var7];
            var7 = var8.bind(var6)(var7);
            var7 = var7.t;
            var8 = var7.CbRfwg;
            var7 = {};
            var7['count'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            return var7;
case 54:
            var7 = global;
            var8 = var7.Math;
            var7 = var8.round;
            var4 = var5 / var4;
            var10 = var7.bind(var8)(var4);
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 10;
            var8 = var11[var4];
            var8 = var7.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var4 = var11[var4];
            var4 = var7.bind(var6)(var4);
            var4 = var4.t;
            var7 = var4.WJBWP1;
            var4 = {};
            var4['count'] = var10;
            var4 = var8.bind(var9)(var7, var4);
            return var4;
case 52:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 10;
            var7 = var10[var4];
            var7 = var9.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var10[var4];
            var4 = var9.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.uNkIhT;
            var4 = var7.bind(var8)(var4);
            return var4;
case 50:
            var4 = global;
            var8 = var4.Math;
            var7 = var8.round;
            var4 = 86400;
            var4 = var5 / var4;
            var10 = var7.bind(var8)(var4);
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 10;
            var8 = var11[var4];
            var8 = var7.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var4 = var11[var4];
            var4 = var7.bind(var6)(var4);
            var4 = var4.t;
            var7 = var4.HNgi95;
            var4 = {};
            var4['count'] = var10;
            var4 = var8.bind(var9)(var7, var4);
            return var4;
case 48:
            var4 = global;
            var7 = var4.Math;
            var4 = var7.round;
            var3 = var5 / var3;
            var9 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 10;
            var7 = var10[var3];
            var7 = var4.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.g2uHTD;
            var3 = {};
            var3['count'] = var9;
            var3 = var7.bind(var8)(var4, var3);
            return var3;
case 46:
            var3 = global;
            var4 = var3.Math;
            var3 = var4.round;
            var2 = var5 / var2;
            var5 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1["7th+Mf"];
            var1 = {};
            var1['count'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getChannelActiveAgoTimestamp'] = var7;
    var7 = function getIndexingErrorText(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot10;
            var2 = var2.CHANNEL;
            if(!(var2 !== var3)) { _fun0007_ip = 58; continue _fun0007 }
case 34:
            var2 = _closure1_slot10;
            var2 = var2.DMS;
            if(!(var2 !== var3)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var2 = _closure1_slot10;
            var2 = var2.GUILD_CHANNEL;
            if(!(var2 !== var3)) { _fun0007_ip = 41; continue _fun0007 }
case 61:
            var2 = _closure1_slot10;
            var2 = var2.GUILD;
            if(!(var2 !== var3)) { _fun0007_ip = 41; continue _fun0007 }
case 62:
            var2 = _closure1_slot10;
            var2 = var2.THREAD;
            if(!(var2 !== var3)) { _fun0007_ip = 41; continue _fun0007 }
case 63:
            var2 = _closure1_slot10;
            var2 = var2.FAVORITES;
            if(!(var2 !== var3)) { _fun0007_ip = 41; continue _fun0007 }
case 51:
            var2 = undefined;
            return var2;
case 41:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.AXPbZr;
            var2 = var3.bind(var4)(var2);
            return var2;
case 59:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Br0xJA;
            var2 = var3.bind(var4)(var2);
            return var2;
case 58:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.Q0JJjv;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getIndexingErrorText'] = var7;
    var7 = function getGuildIdFromSearchContext(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.type;
            var3 = _closure1_slot10;
            var3 = var3.GUILD_CHANNEL;
            if(!(var3 !== var4)) { _fun0008_ip = 64; continue _fun0008 }
case 37:
            var3 = _closure1_slot10;
            var3 = var3.GUILD;
            if(!(var3 !== var4)) { _fun0008_ip = 64; continue _fun0008 }
case 39:
            var3 = _closure1_slot10;
            var3 = var3.THREAD;
            if(!(var3 !== var4)) { _fun0008_ip = 64; continue _fun0008 }
case 40:
            var3 = _closure1_slot10;
            var3 = var3.CHANNEL;
            if(!(var3 !== var4)) { _fun0008_ip = 65; continue _fun0008 }
case 30:
            var3 = _closure1_slot10;
            var3 = var3.FAVORITES;
            if(!(var3 !== var4)) { _fun0008_ip = 66; continue _fun0008 }
case 42:
            var3 = null;
            return var3;
case 66:
            var3 = _closure1_slot16;
            return var3;
case 65:
            var4 = _closure1_slot4;
            var3 = var4.getChannel;
            var2 = var1.channelId;
            var4 = var3.bind(var4)(var2);
            var2 = null;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var3 = var4.guild_id;
case 67:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0008_ip = 69; continue _fun0008 }
case 70:
            var2 = var3;
case 69:
            return var2;
case 64:
            var1 = var1.guildId;
            return var1;
        }
    };
    var3['getGuildIdFromSearchContext'] = var7;
    var7 = function isGuildLikeSearchContext(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var4 = var3.type;
            var1 = _closure1_slot10;
            var1 = var1.GUILD;
            var1 = var4 === var1;
            if(var1) { _fun0009_ip = 71; continue _fun0009 }
case 34:
            var5 = var3.type;
            var4 = _closure1_slot10;
            var4 = var4.GUILD_CHANNEL;
            var1 = var5 === var4;
case 71:
            if(var1) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var3 = var3.type;
            var2 = _closure1_slot10;
            var2 = var2.THREAD;
            var1 = var3 === var2;
case 72:
            return var1;
        }
    };
    var3['isGuildLikeSearchContext'] = var7;
    var7 = function getChannelIdFromSearchContext(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.type;
            var4 = _closure1_slot10;
            var4 = var4.GUILD_CHANNEL;
            if(!(var4 !== var3)) { _fun0010_ip = 74; continue _fun0010 }
case 37:
            var4 = _closure1_slot10;
            var4 = var4.CHANNEL;
            if(!(var4 !== var3)) { _fun0010_ip = 74; continue _fun0010 }
case 39:
            var2 = _closure1_slot10;
            var2 = var2.THREAD;
            if(!(var2 !== var3)) { _fun0010_ip = 74; continue _fun0010 }
case 40:
            var2 = null;
            return var2;
case 74:
            var1 = var1.channelId;
            return var1;
        }
    };
    var3['getChannelIdFromSearchContext'] = var7;
    var7 = function getTabTitle(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot9;
            var2 = var2.RECENT;
            if(!(var2 !== var3)) { _fun0011_ip = 75; continue _fun0011 }
case 31:
            var2 = _closure1_slot9;
            var2 = var2.MESSAGES;
            if(!(var2 !== var3)) { _fun0011_ip = 76; continue _fun0011 }
case 77:
            var2 = _closure1_slot9;
            var2 = var2.PEOPLE;
            if(!(var2 !== var3)) { _fun0011_ip = 78; continue _fun0011 }
case 74:
            var2 = _closure1_slot9;
            var2 = var2.MEDIA;
            if(!(var2 !== var3)) { _fun0011_ip = 79; continue _fun0011 }
case 80:
            var2 = _closure1_slot9;
            var2 = var2.PINS;
            if(!(var2 !== var3)) { _fun0011_ip = 81; continue _fun0011 }
case 65:
            var2 = _closure1_slot9;
            var2 = var2.LINKS;
            if(!(var2 !== var3)) { _fun0011_ip = 82; continue _fun0011 }
case 83:
            var2 = _closure1_slot9;
            var2 = var2.FILES;
            if(!(var2 !== var3)) { _fun0011_ip = 84; continue _fun0011 }
case 85:
            var2 = _closure1_slot9;
            var2 = var2.GUILD_CHANNELS;
            if(!(var2 !== var3)) { _fun0011_ip = 86; continue _fun0011 }
case 87:
            var2 = _closure1_slot9;
            var2 = var2.MEMBERS;
            if(!(var2 !== var3)) { _fun0011_ip = 88; continue _fun0011 }
case 89:
            var2 = _closure1_slot9;
            var2 = var2.THREADS;
            if(!(var2 !== var3)) { _fun0011_ip = 90; continue _fun0011 }
case 91:
            var2 = undefined;
            return var2;
case 90:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.B2panI;
            var2 = var3.bind(var4)(var2);
            return var2;
case 88:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["9Oq93m"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 86:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.OGiMXJ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 84:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.WgVYR/;
            var2 = var3.bind(var4)(var2);
            return var2;
case 82:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.DFSvTt;
            var2 = var3.bind(var4)(var2);
            return var2;
case 81:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["/MoGoB"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 79:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Aw9+/M;
            var2 = var3.bind(var4)(var2);
            return var2;
case 78:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.GFd/I5;
            var2 = var3.bind(var4)(var2);
            return var2;
case 76:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.dvZAkp;
            var2 = var3.bind(var4)(var2);
            return var2;
case 75:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.tWnHcL;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getTabTitle'] = var7;
    var7 = function searchModeToSearchQueryParams(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot15;
            var2 = var2.MOST_RELEVANT;
            if(!(var2 !== var3)) { _fun0012_ip = 92; continue _fun0012 }
case 29:
            var2 = _closure1_slot15;
            var2 = var2.OLDEST;
            if(!(var2 !== var3)) { _fun0012_ip = 93; continue _fun0012 }
case 94:
            var1 = _closure1_slot15;
            var1 = var1.NEWEST;
            var1 = {'sort_by': 'timestamp', 'sort_order': 'desc'};
            return var1;
case 93:
            var1 = {'sort_by': 'timestamp', 'sort_order': 'asc'};
            return var1;
case 92:
            var1 = {'sort_by': 'relevance', 'sort_order': 'desc'};
            return var1;
        }
    };
    var3['searchModeToSearchQueryParams'] = var7;
    var7 = function searchQueryParamsToSearchMode(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = var1.sort_by;
            var3 = null;
            if(!(var3 != var2)) { _fun0013_ip = 95; continue _fun0013 }
case 96:
            var2 = var1.sort_order;
            if(!(var3 != var2)) { _fun0013_ip = 95; continue _fun0013 }
case 37:
            var3 = var1.sort_by;
            var2 = 'relevance';
            if(!(var2 !== var3)) { _fun0013_ip = 63; continue _fun0013 }
case 97:
            var2 = var1.sort_order;
            var1 = 'asc';
            if(!(var1 !== var2)) { _fun0013_ip = 98; continue _fun0013 }
case 74:
            var1 = _closure1_slot15;
            var1 = var1.NEWEST;
            _fun0013_ip = 66; continue _fun0013;
case 98:
            var2 = _closure1_slot15;
            var1 = var2.OLDEST;
case 66:
            _fun0013_ip = 99; continue _fun0013;
case 63:
            var2 = _closure1_slot15;
            var1 = var2.MOST_RELEVANT;
case 99:
            _fun0013_ip = 100; continue _fun0013;
case 95:
            var2 = _closure1_slot15;
            var1 = var2.NEWEST;
case 100:
            return var1;
        }
    };
    var3['searchQueryParamsToSearchMode'] = var7;
    var7 = function getSearchOptionAnswer(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot11;
            var2 = var2.FILTER_FROM;
            if(!(var2 !== var3)) { _fun0014_ip = 101; continue _fun0014 }
case 31:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_MENTIONS;
            if(!(var2 !== var3)) { _fun0014_ip = 102; continue _fun0014 }
case 77:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_HAS;
            if(!(var2 !== var3)) { _fun0014_ip = 103; continue _fun0014 }
case 74:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_BEFORE;
            if(!(var2 !== var3)) { _fun0014_ip = 104; continue _fun0014 }
case 80:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_ON;
            if(!(var2 !== var3)) { _fun0014_ip = 104; continue _fun0014 }
case 65:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_AFTER;
            if(!(var2 !== var3)) { _fun0014_ip = 104; continue _fun0014 }
case 83:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_IN;
            if(!(var2 !== var3)) { _fun0014_ip = 105; continue _fun0014 }
case 85:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_LINK_FROM;
            if(!(var2 !== var3)) { _fun0014_ip = 106; continue _fun0014 }
case 87:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_FILE_TYPE;
            if(!(var2 !== var3)) { _fun0014_ip = 107; continue _fun0014 }
case 108:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_FILE_NAME;
            if(!(var2 !== var3)) { _fun0014_ip = 26; continue _fun0014 }
case 109:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_PINNED;
            if(!(var2 !== var3)) { _fun0014_ip = 110; continue _fun0014 }
case 111:
            var2 = _closure1_slot11;
            var2 = var2.FILTER_AUTHOR_TYPE;
            if(!(var2 !== var3)) { _fun0014_ip = 112; continue _fun0014 }
case 113:
            var2 = undefined;
            return var2;
case 112:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.qCQzBl;
            var2 = var3.bind(var4)(var2);
            return var2;
case 110:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.UJxL3V;
            var2 = var3.bind(var4)(var2);
            return var2;
case 26:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.uAbFDM;
            var2 = var3.bind(var4)(var2);
            return var2;
case 107:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.FXcAFe;
            var2 = var3.bind(var4)(var2);
            return var2;
case 106:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.FdDTni;
            var2 = var3.bind(var4)(var2);
            return var2;
case 105:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.GpM+/7;
            var2 = var3.bind(var4)(var2);
            return var2;
case 104:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Zbbc1E;
            var2 = var3.bind(var4)(var2);
            return var2;
case 103:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.bhSYbc;
            var2 = var3.bind(var4)(var2);
            return var2;
case 102:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.BYvFWl;
            var2 = var3.bind(var4)(var2);
            return var2;
case 101:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.E466pL;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getSearchOptionAnswer'] = var7;
    var3['ShowDatePicker'] = var6;
    var6 = function setIncludeNSFW(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = _closure1_slot6;
            var3 = var4.didAgree;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0015_ip = 114; continue _fun0015 }
case 115:
            var2 = _closure1_slot8;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var3 = null;
            if(!(var3 != var1)) { _fun0015_ip = 47; continue _fun0015 }
case 116:
            var2 = var1.nsfwAllowed;
            var2 = var3 == var2;
            if(var2) { _fun0015_ip = 117; continue _fun0015 }
case 28:
            var2 = var1.nsfwAllowed;
case 117:
            var1 = arg1;
            var1['include_nsfw'] = var2;
case 114:
            var1 = undefined;
            return var1;
case 47:
            var1 = undefined;
            return var1;
        }
    };
    var3['setIncludeNSFW'] = var6;
    var6 = function getSearchQueryFromTokens(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var _closure2_slot0 = var1;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.type;
                    var5 = _closure1_slot14;
                    var1 = var5.test;
                    var1 = var1.bind(var5)(var3);
                    if(var1) { _fun0017_ip = 118; continue _fun0017 }
case 119:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_BEFORE;
                    if(!(var1 !== var3)) { _fun0017_ip = 120; continue _fun0017 }
case 121:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_ON;
                    if(!(var1 !== var3)) { _fun0017_ip = 120; continue _fun0017 }
case 122:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_AFTER;
                    if(!(var1 !== var3)) { _fun0017_ip = 120; continue _fun0017 }
case 123:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var1 = var6[var1];
                    var7 = undefined;
                    var1 = var5.bind(var7)(var1);
                    var1 = var1[var3];
                    var6 = null;
                    var8 = var6 != var1;
                    var5 = null;
                    if(!var8) { _fun0017_ip = 85; continue _fun0017 }
case 36:
                    var5 = var1.queryKey;
case 85:
                    if(!(var6 == var5)) { _fun0017_ip = 124; continue _fun0017 }
case 125:
                    var5 = 'content';
case 124:
                    var8 = _closure2_slot0;
                    var8 = var8[var5];
                    if(!(var6 == var8)) { _fun0017_ip = 126; continue _fun0017 }
case 127:
                    var9 = _closure2_slot0;
                    var8 = global;
                    var8 = var8.Set;
                    var10 = var8.prototype;
                    var10 = Object.create(var10, {constructor: {value: var8}});
                    var12 = var10;
                    var8 = new var12[var8](var11);
                    var8 = var8 instanceof Object ? var8 : var10;
                    var9[var5] = var8;
case 126:
                    var1 = _closure2_slot0;
                    var5 = var1[var5];
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_USERNAME_FROM;
                    if(!(var1 !== var3)) { _fun0017_ip = 128; continue _fun0017 }
case 129:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_USERNAME_MENTIONS;
                    if(!(var1 !== var3)) { _fun0017_ip = 128; continue _fun0017 }
case 130:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_LINK_FROM;
                    if(!(var1 !== var3)) { _fun0017_ip = 131; continue _fun0017 }
case 132:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_FILE_TYPE;
                    if(!(var1 !== var3)) { _fun0017_ip = 131; continue _fun0017 }
case 133:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_FILE_NAME;
                    if(!(var1 !== var3)) { _fun0017_ip = 131; continue _fun0017 }
case 134:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_IN;
                    if(!(var1 !== var3)) { _fun0017_ip = 135; continue _fun0017 }
case 136:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_HAS;
                    if(!(var1 !== var3)) { _fun0017_ip = 137; continue _fun0017 }
case 138:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_PINNED;
                    if(!(var1 !== var3)) { _fun0017_ip = 139; continue _fun0017 }
case 140:
                    var1 = _closure1_slot11;
                    var1 = var1.ANSWER_AUTHOR_TYPE;
                    if(!(var1 !== var3)) { _fun0017_ip = 141; continue _fun0017 }
case 142:
                    var3 = var5.add;
                    var1 = var4.getFullMatch;
                    var8 = var1.bind(var4)();
                    var1 = var8.trim;
                    var1 = var1.bind(var8)();
                    var1 = var3.bind(var5)(var1);
                    _fun0017_ip = 118; continue _fun0017;
case 141:
                    var3 = var5.add;
                    var8 = var4.getData;
                    var1 = 'author_type';
                    var1 = var8.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0017_ip = 118; continue _fun0017;
case 139:
                    var3 = var5.add;
                    var8 = var4.getData;
                    var1 = 'pinned';
                    var1 = var8.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0017_ip = 118; continue _fun0017;
case 137:
                    var3 = var5.add;
                    var8 = var4.getData;
                    var1 = 'has';
                    var1 = var8.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0017_ip = 118; continue _fun0017;
case 135:
                    var3 = _closure1_slot20;
                    var8 = var4.getData;
                    var1 = 'channelIds';
                    var1 = var8.bind(var4)(var1);
                    if(!(var6 == var1)) { _fun0017_ip = 143; continue _fun0017 }
case 144:
                    var1 = new Array(0);
case 143:
                    var6 = var3.bind(var7)(var1);
                    var3 = var6.bind(var7)();
                    var1 = var3.done;
                    if(var1) { _fun0017_ip = 118; continue _fun0017 }
case 145:
                    var8 = var3.value;
                    var1 = var5.add;
                    var1 = var1.bind(var5)(var8);
                    var8 = var6.bind(var7)();
                    var1 = var8.done;
                    var3 = var8;
                    if(var1) { _fun0017_ip = 118; continue _fun0017 }
case 146:
                    _fun0017_ip = 145; continue _fun0017;
case 131:
                    var3 = var5.add;
                    var6 = var4.getMatch;
                    var1 = 1;
                    var1 = var6.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0017_ip = 118; continue _fun0017;
case 128:
                    var3 = var5.add;
                    var6 = var4.getData;
                    var1 = 'userId';
                    var1 = var6.bind(var4)(var1);
                    var1 = var3.bind(var5)(var1);
                    _fun0017_ip = 118; continue _fun0017;
case 120:
                    var3 = var4.getData;
                    var1 = 'start';
                    var6 = var3.bind(var4)(var1);
                    var3 = var4.getData;
                    var1 = 'end';
                    var5 = var3.bind(var4)(var1);
                    if(!var6) { _fun0017_ip = 147; continue _fun0017 }
case 148:
                    var3 = _closure2_slot0;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    var1 = var4.fromTimestamp;
                    var1 = var1.bind(var4)(var6);
                    var3['min_id'] = var1;
case 147:
                    var1 = var5;
                    if(!var1) { _fun0017_ip = 149; continue _fun0017 }
case 150:
                    var3 = _closure2_slot0;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.fromTimestamp;
                    var2 = var2.bind(var4)(var5);
                    var3['max_id'] = var2;
                    var1 = var2;
case 149:
                    var1 = undefined;
                    return var1;
case 118:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var10 = global;
            var3 = var10.Object;
            var2 = var3.entries;
            var9 = var2.bind(var3)(var1);
            var2 = var9.length;
            var8 = 0;
            var2 = var8 < var2;
            var6 = undefined;
            var5 = 2;
            var4 = 1;
            var3 = 0;
            if(!var2) { _fun0016_ip = 151; continue _fun0016 }
case 80:
            var11 = var9[var3];
            var2 = _closure1_slot3;
            var2 = var2.bind(var6)(var11, var5);
            var11 = var2[var8];
            var13 = var2[var4];
            var2 = var10.Set;
            var2 = var13 instanceof var2;
            if(!var2) { _fun0016_ip = 125; continue _fun0016 }
case 152:
            var12 = var10.Array;
            var2 = var12.from;
            var2 = var2.bind(var12)(var13);
            var1[var11] = var2;
case 125:
            var3 = var3 + 1;
            var2 = var9.length;
            if(var3 < var2) { _fun0016_ip = 80; continue _fun0016 }
case 151:
            var2 = var1.content;
            if(!var2) { _fun0016_ip = 113; continue _fun0016 }
case 153:
            var2 = delete var1.contents;
            var4 = var1.content;
            var3 = var4.join;
            var2 = ' ';
            var3 = var3.bind(var4)(var2);
            var2 = var3.trim;
            var2 = var2.bind(var3)();
            var1['content'] = var2;
            var2 = var1.content;
            if(var2) { _fun0016_ip = 113; continue _fun0016 }
case 154:
            var2 = delete var1.content;
case 113:
            return var1;
        }
    };
    var3['getSearchQueryFromTokens'] = var6;
    var6 = function getQueryContentString(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            var2 = var3 == var5;
            var1 = undefined;
            if(var2) { _fun0018_ip = 29; continue _fun0018 }
case 32:
            var1 = var5.contents;
case 29:
            if(!(var3 != var1)) { _fun0018_ip = 97; continue _fun0018 }
case 115:
            var1 = var5.contents;
            var2 = var1.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0018_ip = 74; continue _fun0018 }
case 97:
            var2 = var3 == var5;
            var1 = undefined;
            if(var2) { _fun0018_ip = 4; continue _fun0018 }
case 73:
            var1 = var5.content;
case 4:
            _fun0018_ip = 36; continue _fun0018;
case 74:
            var6 = var3 == var5;
            var2 = undefined;
            if(var6) { _fun0018_ip = 155; continue _fun0018 }
case 156:
            var5 = var5.contents;
            var3 = var3 == var5;
            var2 = undefined;
            if(var3) { _fun0018_ip = 155; continue _fun0018 }
case 42:
            var4 = var5.map;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.split;
                var3 = '|';
                var4 = var1.bind(var2)(var3);
                var2 = var4.slice;
                var1 = 1;
                var2 = var2.bind(var4)(var1);
                var1 = var2.join;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.join;
            var3 = ' ';
            var2 = var4.bind(var5)(var3);
case 155:
            var1 = var2;
case 36:
            return var1;
        }
    };
    var3['getQueryContentString'] = var6;
    var6 = function getNonTokenQuery(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = arg1;
                var4 = var3.type;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var2 = var1.NON_TOKEN_TYPE;
                var1 = '';
                if(!(var4 === var2)) { _fun0019_ip = 74; continue _fun0019 }
case 71:
                var2 = var3.getFullMatch;
                var1 = var2.bind(var3)();
case 74:
                return var1;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = ' ';
        var2 = var2.bind(var3)(var1);
        var1 = var2.trim;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['getNonTokenQuery'] = var6;
    var6 = function getSelectionScope(arg1, arg2, arg3) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var3 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var3;
            var2 = var6.find;
            var1 = function(arg1, arg2) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var1 = arg1;
                    var6 = arg2;
                    var3 = _closure2_slot1;
                    var2 = var1.start;
                    if(!(var3 >= var2)) { _fun0021_ip = 7; continue _fun0021 }
case 157:
                    var3 = _closure2_slot1;
                    var2 = var1.end;
                    if(!(var3 <= var2)) { _fun0021_ip = 7; continue _fun0021 }
case 158:
                    var3 = _closure2_slot2;
                    var2 = var1.start;
                    if(!(var3 >= var2)) { _fun0021_ip = 7; continue _fun0021 }
case 121:
                    var3 = _closure2_slot2;
                    var2 = var1.end;
                    if(!(!(var3 <= var2))) { _fun0021_ip = 72; continue _fun0021 }
case 7:
                    var _closure2_slot3 = var1;
                    var1 = false;
                    _fun0021_ip = 159; continue _fun0021;
case 72:
                    var5 = _closure2_slot0;
                    var3 = 1;
                    var2 = var6 + var3;
                    var5 = var5[var2];
                    var2 = null;
                    var5 = var2 != var5;
                    var1 = true;
                    if(!var5) { _fun0021_ip = 159; continue _fun0021 }
case 44:
                    var5 = _closure2_slot0;
                    var3 = var6 + var3;
                    var3 = var5[var3];
                    var _closure2_slot4 = var3;
                    var1 = true;
case 159:
                    return var1;
                }
            };
            var6 = var2.bind(var6)(var1);
            var1 = null;
            var2 = var1 == var6;
            if(var2) { _fun0020_ip = 160; continue _fun0020 }
case 5:
            var2 = {};
            var7 = _closure2_slot3;
            var2['previousToken'] = var7;
            var2['currentToken'] = var6;
            var5 = _closure2_slot4;
            var2['nextToken'] = var5;
            var2['focusOffset'] = var4;
            var2['anchorOffset'] = var3;
            var1 = var2;
case 160:
            return var1;
        }
    };
    var3['getSelectionScope'] = var6;
    var6 = function getAutocompleteMode(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var7 = null;
            if(!(var7 == var1)) { _fun0022_ip = 161; continue _fun0022 }
case 162:
            var1 = {};
case 161:
            var3 = var1.currentToken;
            var2 = var1.nextToken;
            var6 = var1.previousToken;
            var1 = arg2;
            var4 = var1.length;
            var1 = 0;
            if(!(var1 !== var4)) { _fun0022_ip = 163; continue _fun0022 }
case 2:
            if(!(var7 != var3)) { _fun0022_ip = 164; continue _fun0022 }
case 40:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 11;
            var1 = var1[var9];
            var5 = undefined;
            var10 = var8.bind(var5)(var1);
            var8 = var10.isSearchFilterTokenType;
            var1 = var3.type;
            var1 = var8.bind(var10)(var1);
            if(!var1) { _fun0022_ip = 165; continue _fun0022 }
case 166:
            if(!(var7 != var2)) { _fun0022_ip = 141; continue _fun0022 }
case 167:
            var8 = var2.type;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 13;
            var1 = var11[var1];
            var1 = var10.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            if(!(var8 !== var1)) { _fun0022_ip = 141; continue _fun0022 }
case 87:
            if(!(var7 != var2)) { _fun0022_ip = 165; continue _fun0022 }
case 168:
            var10 = _closure1_slot13;
            var8 = var10.test;
            var1 = var2.type;
            var1 = var8.bind(var10)(var1);
            if(var1) { _fun0022_ip = 165; continue _fun0022 }
case 169:
            var1 = {};
            var8 = _closure1_slot12;
            var8 = var8.FILTER;
            var1['type'] = var8;
            var8 = var3.type;
            var1['filter'] = var8;
            var1['token'] = var7;
            return var1;
case 165:
            var8 = var3.type;
            var11 = _closure1_slot1;
            var1 = _closure1_slot2;
            var10 = 13;
            var1 = var1[var10];
            var1 = var11.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            if(!(var8 === var1)) { _fun0022_ip = 170; continue _fun0022 }
case 171:
            if(!(var7 != var6)) { _fun0022_ip = 170; continue _fun0022 }
case 172:
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var9 = var8.bind(var5)(var1);
            var8 = var9.isSearchFilterTokenType;
            var1 = var6.type;
            var1 = var8.bind(var9)(var1);
            if(var1) { _fun0022_ip = 142; continue _fun0022 }
case 170:
            var8 = var3.type;
            var9 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var9.bind(var5)(var1);
            var1 = var1.NON_TOKEN_TYPE;
            var5 = undefined;
            if(!(var8 === var1)) { _fun0022_ip = 173; continue _fun0022 }
case 174:
            var5 = var3;
case 173:
            var1 = {};
            var8 = _closure1_slot12;
            var8 = var8.FILTER_ALL;
            var1['type'] = var8;
            var1['filter'] = var7;
            var1['token'] = var5;
            _fun0022_ip = 175; continue _fun0022;
case 142:
            var5 = {};
            var7 = _closure1_slot12;
            var7 = var7.FILTER;
            var5['type'] = var7;
            var6 = var6.type;
            var5['filter'] = var6;
            var5['token'] = var3;
            var1 = var5;
case 175:
            return var1;
case 141:
            var1 = {};
            var4 = _closure1_slot12;
            var4 = var4.FILTER;
            var1['type'] = var4;
            var3 = var3.type;
            var1['filter'] = var3;
            var1['token'] = var2;
            return var1;
case 164:
            var1 = {'type': null, 'filter': null, 'token': null};
            var2 = _closure1_slot12;
            var2 = var2.FILTER_ALL;
            var1['type'] = var2;
            return var1;
case 163:
            var1 = {'type': null, 'filter': null, 'token': null};
            var2 = _closure1_slot12;
            var2 = var2.EMPTY;
            var1['type'] = var2;
            return var1;
        }
    };
    var3['getAutocompleteMode'] = var6;
    var3['quoteChannelName'] = var5;
    var5 = function getFlattenedAutocompleteResults(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = new Array(0);
        var _closure2_slot1 = var2;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 14;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = arg1;
        var4 = var3.bind(var4)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var2 = null;
                if(!(var2 != var5)) { _fun0023_ip = 9; continue _fun0023 }
case 96:
                var2 = var5.results;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0023_ip = 9; continue _fun0023 }
case 176:
                var2 = var5.group;
                var _closure3_slot1 = var2;
                var4 = _closure2_slot1;
                var3 = var4.concat;
                var6 = var5.results;
                var5 = var6.map;
                var1 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.text;
                        var1 = var3.channel;
                        var5 = null;
                        var7 = var4;
                        if(!(var5 != var1)) { _fun0024_ip = 177; continue _fun0024 }
case 157:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var7 = var2.bind(var1)(var4);
case 177:
                        var1 = _closure2_slot0;
                        var6 = var1.type;
                        var1 = _closure1_slot12;
                        var1 = var1.FILTER_ALL;
                        var2 = var7;
                        if(!(var6 === var1)) { _fun0024_ip = 129; continue _fun0024 }
case 114:
                        var6 = var3.group;
                        if(!(var5 == var6)) { _fun0024_ip = 49; continue _fun0024 }
case 42:
                        var6 = _closure3_slot1;
case 49:
                        _closure3_slot1 = var6;
                        var8 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 11;
                        var4 = var6[var4];
                        var6 = undefined;
                        var4 = var8.bind(var6)(var4);
                        var1 = _closure3_slot1;
                        var1 = var4[var1];
                        var8 = var5 == var1;
                        var4 = undefined;
                        if(var8) { _fun0024_ip = 178; continue _fun0024 }
case 57:
                        var4 = var1.key;
case 178:
                        var4 = var5 != var4;
                        if(!var4) { _fun0024_ip = 169; continue _fun0024 }
case 168:
                        var5 = var5 == var1;
                        var6 = undefined;
                        if(var5) { _fun0024_ip = 179; continue _fun0024 }
case 180:
                        var6 = var1.key;
case 179:
                        var5 = '';
                        var4 = var5 !== var6;
case 169:
                        var2 = var7;
                        if(!var4) { _fun0024_ip = 129; continue _fun0024 }
case 90:
                        var6 = var1.key;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var4 = '';
                        var1 = ' ';
                        var2 = var5.bind(var4)(var6, var1, var7);
case 129:
                        var1 = {};
                        var1['result'] = var3;
                        var3 = _closure3_slot0;
                        var3 = var3.group;
                        var1['group'] = var3;
                        var1['resultText'] = var2;
                        return var1;
                    }
                };
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var1);
                _closure2_slot1 = var1;
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var3 = _closure2_slot1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.resultText;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getFlattenedAutocompleteResults'] = var5;
    var5 = function getQueryFromTokens(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            var4 = '';
            var1 = var4;
            if(var2) { _fun0025_ip = 121; continue _fun0025 }
case 181:
            var3 = var5.map;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.getFullMatch;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            var2 = var3.join;
            var1 = var2.bind(var3)(var4);
case 121:
            return var1;
        }
    };
    var3['getQueryFromTokens'] = var5;
    var5 = function queryHasFilter(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot24;
        var3 = undefined;
        var2 = arg1;
        var3 = var4.bind(var3)(var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['queryHasFilter'] = var5;
    var3['tokenizeQuery'] = var4;
    var4 = function clearTokenCache() {
        var3 = _closure1_slot18;
        var2 = var3.clearCache;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot19;
        var1 = var2.clearCache;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var3['clearTokenCache'] = var4;
    var4 = function showDatePicker(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0026_ip = 31; continue _fun0026 }
case 182:
            var2 = _closure1_slot17;
            var1 = var2[var3];
case 31:
            return var1;
        }
    };
    var3['showDatePicker'] = var4;
    var4 = function filterHasAnswer(arg1, arg2) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var3 = arg2;
            var5 = _closure1_slot14;
            var2 = var5.test;
            var1 = arg1;
            var1 = var1.type;
            var5 = var2.bind(var5)(var1);
            var2 = null;
            var1 = var2 == var3;
            if(!var1) { _fun0027_ip = 77; continue _fun0027 }
case 45:
            var1 = var5;
case 77:
            if(var1) { _fun0027_ip = 42; continue _fun0027 }
case 116:
            var2 = var2 != var3;
            if(!var2) { _fun0027_ip = 40; continue _fun0027 }
case 73:
            var2 = var5;
case 40:
            if(!var2) { _fun0027_ip = 183; continue _fun0027 }
case 28:
            var5 = _closure1_slot13;
            var4 = var5.test;
            var3 = var3.type;
            var3 = var4.bind(var5)(var3);
            var2 = !var3;
case 183:
            var1 = var2;
case 42:
            var1 = !var1;
            return var1;
        }
    };
    var3['filterHasAnswer'] = var4;
    var4 = function refreshSearchTokens() {
        var7 = _closure1_slot0;
        var4 = _closure1_slot2;
        var6 = 11;
        var3 = var4[var6];
        var1 = undefined;
        var5 = var7.bind(var1)(var3);
        var3 = var5.rebuildSearchTokenConfigs;
        var3 = var3.bind(var5)();
        var5 = _closure1_slot18;
        var3 = var5.reset;
        var3 = var3.bind(var5)();
        var3 = _closure1_slot1;
        var5 = 14;
        var9 = var4[var5];
        var10 = var3.bind(var1)(var9);
        var9 = var4[var6];
        var9 = var3.bind(var1)(var9);
        var11 = var10.bind(var1)(var9);
        var10 = var11.forOwn;
        var9 = function(arg1, arg2) {
            var3 = _closure1_slot18;
            var2 = var3.addRule;
            var1 = {};
            var4 = arg2;
            var1['type'] = var4;
            var5 = arg1;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var10.bind(var11)(var9);
        var9 = _closure1_slot19;
        var8 = var9.reset;
        var8 = var8.bind(var9)();
        var6 = var4[var6];
        var7 = var7.bind(var1)(var6);
        var6 = var7.buildCrossDMSearchTokensConfig;
        var6 = var6.bind(var7)();
        var5 = var4[var5];
        var5 = var3.bind(var1)(var5);
        var6 = var5.bind(var1)(var6);
        var5 = var6.forOwn;
        var2 = function(arg1, arg2) {
            var3 = _closure1_slot19;
            var2 = var3.addRule;
            var1 = {};
            var4 = arg2;
            var1['type'] = var4;
            var5 = arg1;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var5.bind(var6)(var2);
        var2 = 15;
        var2 = var4[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.markSearchTokensRefreshed;
        var2 = var2.bind(var3)();
        return var1;
    };
    var3['refreshSearchTokens'] = var4;
    var4 = function getChannelDisplayName(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var7 = arg1;
            var4 = var7.name;
            var1 = var7.isGroupDM;
            var1 = var1.bind(var7)();
            if(var1) { _fun0028_ip = 184; continue _fun0028 }
case 115:
            var1 = var7.isDM;
            var1 = var1.bind(var7)();
            if(var1) { _fun0028_ip = 67; continue _fun0028 }
case 45:
            var1 = var7.isThread;
            var1 = var1.bind(var7)();
            var1 = !var1;
            var5 = _closure1_slot5;
            var3 = var5.getTextChannelNameDisambiguations;
            var2 = var7.getGuildId;
            var2 = var2.bind(var7)();
            var3 = var3.bind(var5)(var2);
            var2 = var7.id;
            var3 = var3[var2];
            var6 = null;
            var2 = var6 == var3;
            var5 = undefined;
            if(var2) { _fun0028_ip = 185; continue _fun0028 }
case 186:
            var5 = var3.name;
case 185:
            var2 = var1;
            if(!(var6 != var5)) { _fun0028_ip = 187; continue _fun0028 }
case 159:
            var4 = var3.name;
            var2 = var1;
            _fun0028_ip = 187; continue _fun0028;
case 67:
            var1 = var7.getRecipientId;
            var6 = var1.bind(var7)();
            var5 = _closure1_slot8;
            var3 = var5.getUser;
            var5 = var3.bind(var5)(var6);
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 17;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var6.bind(var1)(var3);
            var1 = var3.getUserTag;
            var6 = var1.bind(var3)(var5);
            var1 = null;
            var3 = var1 == var6;
            var2 = false;
            var4 = var6;
            if(!var3) { _fun0028_ip = 187; continue _fun0028 }
case 188:
            return var1;
case 184:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 16;
            var5 = var5[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.computeChannelName;
            var3 = _closure1_slot8;
            var1 = _closure1_slot7;
            var4 = var5.bind(var6)(var7, var3, var1);
            var2 = false;
case 187:
            var3 = _closure1_slot23;
            var1 = undefined;
            var4 = var3.bind(var1)(var4);
            var1 = var4;
            if(!var2) { _fun0028_ip = 189; continue _fun0028 }
case 190:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '#';
            var1 = var3.bind(var2)(var4);
case 189:
            return var1;
        }
    };
    var3['getChannelDisplayName'] = var4;
    var4 = function getChannelPlaceholderName(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var5 = arg1;
            var1 = var5.isGroupDM;
            var2 = var1.bind(var5)();
            if(var2) { _fun0029_ip = 89; continue _fun0029 }
case 157:
            var2 = var5.isDM;
            var2 = var2.bind(var5)();
            if(var2) { _fun0029_ip = 11; continue _fun0029 }
case 158:
            var4 = _closure1_slot5;
            var3 = var4.getTextChannelNameDisambiguations;
            var2 = var5.getGuildId;
            var2 = var2.bind(var5)();
            var3 = var3.bind(var4)(var2);
            var2 = var5.id;
            var4 = var3[var2];
            var3 = null;
            var6 = var3 == var4;
            var2 = undefined;
            if(var6) { _fun0029_ip = 66; continue _fun0029 }
case 191:
            var2 = var4.name;
case 66:
            if(!(var3 == var2)) { _fun0029_ip = 192; continue _fun0029 }
case 160:
            var2 = var5.name;
case 192:
            return var2;
case 11:
            var2 = var5.getRecipientId;
            var4 = var2.bind(var5)();
            var3 = _closure1_slot8;
            var2 = var3.getUser;
            var4 = var2.bind(var3)(var4);
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 17;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.getUserTag;
            var2 = var2.bind(var3)(var4);
            return var2;
case 89:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 16;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.computeChannelName;
            var2 = _closure1_slot8;
            var1 = _closure1_slot7;
            var1 = var3.bind(var4)(var5, var2, var1);
            return var1;
        }
    };
    var3['getChannelPlaceholderName'] = var4;
    var4 = function isFavoriteSearchEnabled() {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var2 = _closure1_slot8;
            var1 = var2.getCurrentUser;
            var4 = var1.bind(var2)();
            var1 = null;
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0030_ip = 45; continue _fun0030 }
case 193:
            var3 = var4.isStaff;
            var2 = var3.bind(var4)();
case 45:
            var1 = var1 != var2;
            if(!var1) { _fun0030_ip = 71; continue _fun0030 }
case 194:
            var1 = var2;
case 71:
            return var1;
        }
    };
    var3['isFavoriteSearchEnabled'] = var4;
    var2 = function removeInvalidPrivateChannelSearchTokens(arg1) {
        var4 = _closure1_slot19;
        var3 = var4.tokenize;
        var2 = arg1;
        var5 = var3.bind(var4)(var2);
        var4 = new Array(0);
        var _closure2_slot0 = var4;
        var3 = var5.forEach;
        var2 = function(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = arg1;
                var4 = var3.type;
                var1 = _closure1_slot11;
                var1 = var1.FILTER_IN;
                var1 = var4 === var1;
                if(var1) { _fun0031_ip = 71; continue _fun0031 }
case 34:
                var4 = var3.type;
                var2 = _closure1_slot11;
                var2 = var2.ANSWER_IN;
                var1 = var4 === var2;
case 71:
                if(var1) { _fun0031_ip = 30; continue _fun0031 }
case 73:
                var2 = _closure2_slot0;
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
case 30:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var5)(var2);
        var2 = '';
        var _closure2_slot1 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var4 = arg1;
            var3 = _closure2_slot1;
            var1 = var4.getFullMatch;
            var1 = var1.bind(var4)();
            var1 = var3 + var1;
            _closure2_slot1 = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var2 = _closure2_slot1;
        var1 = var2.trim;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['removeInvalidPrivateChannelSearchTokens'] = var2;
    return var1;
})();