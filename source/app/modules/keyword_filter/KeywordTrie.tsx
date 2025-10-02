// app/modules/keyword_filter/KeywordTrie.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = function() {
        var4 = function TrieNode() {
            var3 = this;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = {};
            var3['suffix'] = var4;
            var4 = null;
            var3['isWord'] = var4;
            var3['value'] = var4;
            var4 = {};
            var3['suffix'] = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.MatchStrategy;
            var2 = var2.ExactMatch;
            var3['strategy'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var1 = {};
        var2 = '_internalAdd';
        var1['key'] = var2;
        var2 = function value(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var5 = arg2;
                var6 = arg3;
                var8 = this;
                var2 = var1.charAt;
                var10 = 0;
                var3 = var2.bind(var1)(var10);
                var2 = var8.suffix;
                var4 = var2[var3];
                var7 = null;
                if(!(var7 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
                var9 = var2.prototype;
                var9 = Object.create(var9, {constructor: {value: var2}});
                var15 = var9;
                var2 = new var15[var2](var14);
                var2 = var2 instanceof Object ? var2 : var9;
                var8 = var8.suffix;
                var8[var3] = var2;
                if(!(var7 != var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var9 = var6.slice;
                var11 = var6.length;
                var8 = var1.length;
                var11 = var11 - var8;
                var8 = 1;
                var8 = var11 + var8;
                var3 = var9.bind(var6)(var10, var8);
case 4:
                var2['value'] = var3;
                var4 = var2;
case 2:
                var2 = var1.length;
                var8 = 1;
                if(!(var2 > var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var2 = var1.charAt;
                var3 = var2.bind(var1)(var8);
                var2 = '*';
                if(!(var2 === var3)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
                var3 = var5.charAt;
                var2 = var5.length;
                var2 = var2 - var8;
                var3 = var3.bind(var5)(var2);
                var2 = '*';
                if(!(var2 !== var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var9 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var9.bind(var2)(var3);
                var2 = var2.MatchStrategy;
                var2 = var2.ExactMatch;
                _fun0001_ip = 11; continue _fun0001;
case 9:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 2;
                var9 = var9[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var9);
                var3 = var3.MatchStrategy;
                var2 = var3.PrefixMatch;
case 11:
                var4['strategy'] = var2;
                var2 = true;
                var4['isWord'] = var2;
                _fun0001_ip = 12; continue _fun0001;
case 8:
                var3 = var4._internalAdd;
                var2 = var1.substring;
                var2 = var2.bind(var1)(var8);
                if(!(var7 != var6)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var1 = var6;
case 13:
                var1 = var3.bind(var4)(var2, var5, var1);
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'add';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var3 = arg1;
            var2 = this;
            var1 = var2._internalAdd;
            var1 = var1.bind(var2)(var3, var3);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot4 = var4;
    var2 = function() {
        var5 = function Trie() {
            var3 = this;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var2 = _closure1_slot4;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['trie'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var1 = {};
        var3 = 'search';
        var1['key'] = var3;
        var3 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var18 = arg1;
                var17 = this;
                var16 = var17.trie;
                var1 = {};
                var2 = var18.length;
                var15 = 0;
                var2 = var15 <= var2;
                var14 = undefined;
                var12 = 2;
                var11 = null;
                var10 = 1;
                var9 = 0;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var2 = var18.charAt;
                var21 = var2.bind(var18)(var9);
                var2 = var16.suffix;
                var16 = var2[var21];
                var2 = var9;
                if(!(var11 == var16)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var19 = var17.trie;
                var19 = var19.suffix;
                var19 = var19[var21];
                if(!(var11 == var19)) { _fun0002_ip = 4; continue _fun0002 }
case 19:
                var19 = var17.trie;
                _fun0002_ip = 20; continue _fun0002;
case 4:
                var20 = var17.trie;
                var20 = var20.suffix;
                var19 = var20[var21];
case 20:
                var16 = var19;
case 17:
                var20 = var16.isWord;
                var19 = var3;
                if(!var20) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var22 = var16.strategy;
                var21 = var2 + var10;
                var23 = var16.value;
                var20 = var11 == var23;
                var24 = undefined;
                if(var20) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var24 = var23.length;
case 23:
                var25 = var11 != var24;
                var20 = 0;
                if(!var25) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var20 = var24;
case 25:
                var21 = var21 - var20;
                var25 = _closure1_slot0;
                var20 = _closure1_slot1;
                var20 = var20[var12];
                var25 = var25.bind(var14)(var20);
                var20 = var25.isMatch;
                var32 = var25;
                var31 = var18;
                var30 = var21;
                var29 = var2;
                var28 = var22;
                var20 = var32[var20](var31, var30, var29, var28, var27);
                var8 = var24;
                var7 = var23;
                var6 = var22;
                var5 = var21;
                var4 = var2;
                var19 = var3;
                if(!var20) { _fun0002_ip = 21; continue _fun0002 }
case 27:
                var25 = _closure1_slot0;
                var20 = _closure1_slot1;
                var20 = var20[var12];
                var25 = var25.bind(var14)(var20);
                var20 = var25.getMatchedPositions;
                var32 = var25;
                var31 = var18;
                var30 = var21;
                var29 = var2;
                var28 = var22;
                var20 = var32[var20](var31, var30, var29, var28, var27);
                var25 = var20.start;
                var25 = var1[var25];
                var25 = var11 == var25;
                if(var25) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                var26 = var20.start;
                var26 = var1[var26];
                var27 = var26.end;
                var26 = var20.end;
                var25 = var27 < var26;
case 28:
                var8 = var24;
                var7 = var23;
                var6 = var22;
                var5 = var21;
                var4 = var2;
                var19 = var20;
                if(!var25) { _fun0002_ip = 21; continue _fun0002 }
case 30:
                var25 = var20.start;
                var1[var25] = var20;
                var8 = var24;
                var7 = var23;
                var6 = var22;
                var5 = var21;
                var4 = var2;
                var19 = var20;
case 21:
                var9 = var2 + 1;
                var2 = var18.length;
                var3 = var19;
                if(var9 <= var2) { _fun0002_ip = 16; continue _fun0002 }
case 15:
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(4);
        var3[0] = var1;
        var1 = {};
        var6 = 'addWord';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = this;
                var3 = var1.trie;
                var2 = null;
                if(!(var2 == var3)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var2 = _closure1_slot4;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var5 = var3;
                var2 = new var5[var2](var4);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['trie'] = var2;
case 31:
                var3 = var1.trie;
                var2 = var3.add;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'addWords';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.addWord;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            var1 = _closure1_slot4;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var3 = var2;
            var1 = new var3[var1](var2);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = this;
            var1['trie'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'fromSnapshot';
        var1['key'] = var6;
        var2 = function value(arg1) {
            var1 = _closure2_slot0;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var3 = var2;
            var1 = new var3[var1](var2);
            var1 = var1 instanceof Object ? var1 : var2;
            var2 = arg1;
            var2 = var2.trie;
            var1['trie'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyword_filter/KeywordTrie.tsx';
    var4 = var5.bind(var6)(var4);
    var3['Trie'] = var2;
    return var1;
})();