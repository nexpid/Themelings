// app/modules/search_v2/native/message_parsers/MessageSearchResultParser.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CachedSearchResultParser;
    var2 = function(arg1) {
        var3 = function SearchResultMessageParser(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = this;
                var1 = _closure1_slot3;
                var5 = _closure2_slot0;
                var3 = undefined;
                var1 = var1.bind(var3)(var6, var5);
                var1 = _closure1_slot5;
                var11 = var1.bind(var3)(var5);
                var5 = _closure1_slot4;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 64; continue _fun0002 }
 51:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var3);
                _fun0002_ip = 102; continue _fun0002;
 64:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var3)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
 102:
                var1 = var5.bind(var3)(var6, var1);
                var _closure3_slot0 = var1;
                var5 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var6 = arg1;
                        var9 = arguments[2];
                        var8 = undefined;
                        if(!(var9 === var8)) { _fun0003_ip = 17; continue _fun0003 }
 14:
                        var9 = 1;
 17:
                        var _closure4_slot0 = var8;
                        var1 = null;
                        if(!(var1 != var6)) { _fun0003_ip = 330; continue _fun0003 }
 30:
                        var5 = var6.replace;
                        var4 = /(\r\n|\n|\r)/gm;
                        var2 = ' ';
                        var7 = var5.bind(var6)(var4, var2);
                        var2 = global;
                        var6 = var2.Set;
                        var5 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var4 = 6;
                        var4 = var10[var4];
                        var8 = var5.bind(var8)(var4);
                        var5 = var8.analyze;
                        var4 = arg2;
                        var12 = var5.bind(var8)(var4);
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var13 = var5;
                        var4 = new var13[var6](var12, var11);
                        var4 = var4 instanceof Object ? var4 : var5;
                        _closure4_slot0 = var4;
                        var5 = var7.split;
                        var4 = /(\W+)/g;
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.find;
                        var3 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.shouldHighlight;
                            var2 = _closure4_slot0;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
                        if(!(var1 != var3)) { _fun0003_ip = 328; continue _fun0003 }
 176:
                        var6 = var2.RegExp;
                        var8 = '\\b';
                        var4 = var8 + var3;
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var12 = var4 + var8;
                        var13 = var5;
                        var4 = new var13[var6](var12, var11);
                        var5 = var4 instanceof Object ? var4 : var5;
                        var4 = var7.search;
                        var4 = var4.bind(var7)(var5);
                        var5 = -1;
                        if(!(var5 !== var4)) { _fun0003_ip = 326; continue _fun0003 }
 237:
                        var8 = var3.length;
                        var6 = var2.Math;
                        var5 = var6.max;
                        var3 = 30;
                        var3 = var3 * var9;
                        var3 = var3 - var8;
                        var4 = var4 - var3;
                        var3 = 0;
                        var6 = var5.bind(var6)(var3, var4);
                        var3 = var6 > var3;
                        var5 = '';
                        var4 = var5;
                        if(!var3) { _fun0003_ip = 296; continue _fun0003 }
 290:
                        var4 = '...';
 296:
                        var3 = var7.substring;
                        var3 = var3.bind(var7)(var6);
                        var2 = var2.HermesInternal;
                        var2 = var2.concat;
                        var2 = var2.bind(var5)(var4, var3);
                        return var2;
 326:
                        return var1;
 328:
                        return var1;
 330:
                        return var1;
                    }
                };
                var1['truncateMessage'] = var5;
                var4 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var3 = _closure3_slot0;
                        var3 = var3.tokenizedQueryContent;
                        var5 = null;
                        if(!(var5 != var3)) { _fun0004_ip = 253; continue _fun0004 }
 27:
                        var3 = _closure3_slot0;
                        var6 = var3.tokenizedQueryContent;
                        var3 = '';
                        if(!(var3 !== var6)) { _fun0004_ip = 253; continue _fun0004 }
 48:
                        var8 = _closure3_slot0;
                        var7 = var8.truncateMessage;
                        var6 = var1.content;
                        var3 = var8.tokenizedQueryContent;
                        var2 = var8.lineClamp;
                        var3 = var7.bind(var8)(var6, var3, var2);
                        if(!(var5 == var3)) { _fun0004_ip = 215; continue _fun0004 }
 89:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var6 = 7;
                        var7 = var7[var6];
                        var6 = undefined;
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.chain;
                        var6 = var1.embeds;
                        var8 = var7.bind(var8)(var6);
                        var7 = var8.map;
                        var6 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var2 = arg1;
                                var7 = _closure3_slot0;
                                var6 = var7.truncateMessage;
                                var5 = var2.rawTitle;
                                var4 = var7.tokenizedQueryContent;
                                var1 = var7.lineClamp;
                                var1 = var6.bind(var7)(var5, var4, var1);
                                var4 = null;
                                if(!(var4 == var1)) { _fun0005_ip = 82; continue _fun0005 }
 47:
                                var6 = _closure3_slot0;
                                var5 = var6.truncateMessage;
                                var4 = var2.rawDescription;
                                var3 = var6.tokenizedQueryContent;
                                var2 = var6.lineClamp;
                                var1 = var5.bind(var6)(var4, var3, var2);
 82:
                                return var1;
                            }
                        };
                        var7 = var7.bind(var8)(var6);
                        var6 = var7.find;
                        var4 = function(arg1) {
                            var2 = null;
                            var1 = arg1;
                            var1 = var2 != var1;
                            return var1;
                        };
                        var6 = var6.bind(var7)(var4);
                        var4 = var6.value;
                        var4 = var4.bind(var6)();
                        if(!(var5 == var4)) { _fun0004_ip = 180; continue _fun0004 }
 178:
                        return var1;
 180:
                        var2 = _closure1_slot7;
                        var5 = var2.prototype;
                        var5 = Object.create(var5, {constructor: {value: var2}});
                        var12 = var5;
                        var11 = var1;
                        var2 = new var12[var2](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var5;
                        var2['content'] = var4;
                        return var2;
 215:
                        var2 = _closure1_slot7;
                        var4 = var2.prototype;
                        var4 = Object.create(var4, {constructor: {value: var2}});
                        var12 = var4;
                        var11 = var1;
                        var2 = new var12[var2](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var2['content'] = var3;
                        return var2;
 253:
                        return var1;
                    }
                };
                var1['getSearchResults'] = var4;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 8;
                var5 = var6[var2];
                var8 = var4.bind(var3)(var5);
                var7 = var8.tokenizeQuery;
                var5 = arg1;
                var5 = var7.bind(var8)(var5);
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getSearchQueryFromTokens;
                var2 = var2.bind(var4)(var5);
                var5 = var2.content;
                var2 = null;
                var4 = var2 == var5;
                var3 = undefined;
                if(var4) { _fun0002_ip = 218; continue _fun0002 }
 208:
                var4 = var5.trim;
                var3 = var4.bind(var5)();
 218:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0002_ip = 230; continue _fun0002 }
 227:
                var2 = var3;
 230:
                var1['tokenizedQueryContent'] = var2;
                var2 = arg2;
                var1['lineClamp'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot2;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/native/message_parsers/MessageSearchResultParser.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();