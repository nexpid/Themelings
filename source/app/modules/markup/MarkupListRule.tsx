// app/modules/markup/MarkupListRule.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var2 = true;
    var6['value'] = var2;
    var2 = '__esModule';
    var2 = var8.bind(var9)(var3, var2, var6);
    var2 = /\n{2,}$/;
    var _closure1_slot2 = var2;
    var2 = /(?:^|\n)( *)$/;
    var _closure1_slot3 = var2;
    var8 = var1.RegExp;
    var10 = '(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +';
    var9 = var10.replace;
    var6 = '%INDENT_CAPTURE_PATTERN%';
    var2 = ' *';
    var6 = var9.bind(var10)(var6, var2);
    var2 = '^';
    var13 = var2 + var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {constructor: {value: var8}});
    var14 = var6;
    var2 = new var14[var8](var13, var12);
    var2 = var2 instanceof Object ? var2 : var6;
    var _closure1_slot4 = var2;
    var2 = / *\n$/;
    var _closure1_slot5 = var2;
    var6 = var1.RegExp;
    var1 = var6.prototype;
    var2 = Object.create(var1, {constructor: {value: var6}});
    var13 = '^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)';
    var14 = var2;
    var1 = new var14[var6](var13, var12);
    var1 = var1 instanceof Object ? var1 : var2;
    var _closure1_slot6 = var1;
    var1 = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;
    var _closure1_slot7 = var1;
    var2 = {};
    var1 = 0;
    var6 = var5[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.defaultRules;
    var12 = var6.list;
    var13 = var2;
    var6 = copyDataProperties(var13, var12);
    var8 = ' *-0123456789';
    var7 = var8.split;
    var6 = '';
    var7 = var7.bind(var8)(var6);
    var6 = 'requiredFirstCharacters';
    var2[var6] = var7;
    var7 = function match(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg2;
            var2 = var1.allowList;
            if(var2) { _fun0001_ip = 16; continue _fun0001 }
 12:
            var2 = null;
            return var2;
 16:
            var3 = var1._listLevel;
            var2 = 11;
            if(!(!(var3 >= var2))) { _fun0001_ip = 132; continue _fun0001 }
 29:
            var2 = var1.prevCapture;
            var4 = null;
            var2 = var4 == var2;
            var5 = '';
            if(var2) { _fun0001_ip = 60; continue _fun0001 }
 48:
            var2 = var1.prevCapture;
            var1 = 0;
            var5 = var2[var1];
 60:
            var3 = _closure1_slot3;
            var1 = var3.exec;
            var7 = var1.bind(var3)(var5);
            var3 = var4 == var7;
            var1 = null;
            if(var3) { _fun0001_ip = 130; continue _fun0001 }
 87:
            var6 = _closure1_slot7;
            var5 = var6.test;
            var3 = 0;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var1 = null;
            if(var3) { _fun0001_ip = 130; continue _fun0001 }
 112:
            var4 = _closure1_slot6;
            var3 = var4.exec;
            var2 = arg1;
            var1 = var3.bind(var4)(var2);
 130:
            return var1;
 132:
            var1 = null;
            return var1;
        }
    };
    var6 = 'match';
    var2[var6] = var7;
    var6 = function parse(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var3;
            var3 = arg3;
            var _closure2_slot1 = var3;
            var3 = 2;
            var4 = var1[var3];
            var3 = var4.length;
            var9 = 1;
            var5 = var3 > var9;
            var8 = undefined;
            var3 = undefined;
            if(!var5) { _fun0002_ip = 90; continue _fun0002 }
 45:
            var6 = global;
            var10 = var6.Math;
            var7 = var10.min;
            var11 = var6.Math;
            var6 = var11.max;
            var4 = var4 - 0;
            var6 = var6.bind(var11)(var9, var4);
            var4 = 1000000000;
            var3 = var7.bind(var10)(var4, var6);
 90:
            var18 = 0;
            var10 = var1[var18];
            var7 = var10.replace;
            var4 = _closure1_slot2;
            var1 = '\n';
            var10 = var7.bind(var10)(var4, var1);
            var4 = _closure1_slot4;
            var1 = var4.exec;
            var4 = var1.bind(var4)(var10);
            var1 = null;
            var7 = var1 != var4;
            var11 = 0;
            if(!var7) { _fun0002_ip = 153; continue _fun0002 }
 144:
            var7 = var4[var18];
            var11 = var7.length;
 153:
            var7 = var1 != var4;
            var18 = 0;
            if(!var7) { _fun0002_ip = 171; continue _fun0002 }
 162:
            var4 = var4[var9];
            var18 = var4.length;
 171:
            var15 = '(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%(?:[*-]|\\d+\\.) )[^\\n]*)*(\n|$)';
            var13 = var15.replaceAll;
            var20 = var18 + var9;
            var4 = global;
            var7 = var4.HermesInternal;
            var16 = var7.concat;
            var23 = ' {';
            var21 = ',';
            var14 = '}';
            var22 = var18;
            var19 = var14;
            var12 = var23[var16](var22, var21, var20, var19, var18);
            var7 = '%INDENT_CAPTURE_PATTERN%';
            var22 = var13.bind(var15)(var7, var12);
            var7 = var4.RegExp;
            var12 = var7.prototype;
            var12 = Object.create(var12, {constructor: {value: var7}});
            var13 = 'gm';
            var23 = var12;
            var21 = var13;
            var7 = new var23[var7](var22, var21, var20);
            var7 = var7 instanceof Object ? var7 : var12;
            var12 = var4.RegExp;
            var4 = '^ {1,';
            var4 = var4 + var11;
            var11 = var12.prototype;
            var11 = Object.create(var11, {constructor: {value: var12}});
            var22 = var4 + var14;
            var23 = var11;
            var4 = new var23[var12](var22, var21, var20);
            var4 = var4 instanceof Object ? var4 : var11;
            var _closure2_slot2 = var4;
            var4 = var10.match;
            var4 = var4.bind(var10)(var7);
            var _closure2_slot3 = var4;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var9];
            var7 = var7.bind(var8)(var6);
            var6 = var1 != var4;
            var1 = 'markup list items can not be parsed.';
            var1 = var7.bind(var8)(var6, var1);
            var1 = false;
            var _closure2_slot4 = var1;
            var1 = {};
            var1['ordered'] = var5;
            var1['start'] = var3;
            var3 = var4.map;
            var2 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var3 = var4.replace;
                    var1 = _closure1_slot4;
                    var11 = '';
                    var5 = var3.bind(var4)(var1, var11);
                    var4 = var5.replace;
                    var3 = _closure2_slot2;
                    var9 = var4.bind(var5)(var3, var11);
                    var3 = _closure2_slot3;
                    var3 = var3.length;
                    var13 = 1;
                    var4 = var3 - var13;
                    var3 = arg2;
                    var3 = var3 === var4;
                    var4 = var9.indexOf;
                    var7 = '\n\n';
                    var5 = var4.bind(var9)(var7);
                    var4 = -1;
                    var8 = var4 !== var5;
                    if(var8) { _fun0003_ip = 106; continue _fun0003 }
 96:
                    if(!var3) { _fun0003_ip = 103; continue _fun0003 }
 99:
                    var3 = _closure2_slot4;
 103:
                    var8 = var3;
 106:
                    _closure2_slot4 = var8;
                    var12 = _closure2_slot1;
                    var5 = var12.inline;
                    var4 = var12._list;
                    var3 = var12._listLevel;
                    var6 = true;
                    var12['_list'] = var6;
                    var10 = null;
                    var14 = var10 != var3;
                    var10 = 0;
                    if(!var14) { _fun0003_ip = 154; continue _fun0003 }
 151:
                    var10 = var3;
 154:
                    var10 = var10 + var13;
                    var12['_listLevel'] = var10;
                    var10 = _closure2_slot1;
                    if(var8) { _fun0003_ip = 194; continue _fun0003 }
 171:
                    var10['inline'] = var6;
                    var8 = var9.replace;
                    var6 = _closure1_slot5;
                    var8 = var8.bind(var9)(var6, var11);
                    _fun0003_ip = 217; continue _fun0003;
 194:
                    var6 = false;
                    var10['inline'] = var6;
                    var6 = var9.replace;
                    var2 = _closure1_slot5;
                    var8 = var6.bind(var9)(var2, var7);
 217:
                    var7 = _closure2_slot0;
                    var6 = {};
                    var2 = _closure2_slot1;
                    var16 = var6;
                    var15 = var2;
                    var1 = copyDataProperties(var16, var15);
                    var9 = false;
                    var1 = 'allowHeading';
                    var6[var1] = var9;
                    var1 = undefined;
                    var7 = var7.bind(var1)(var8, var6);
                    var6 = var7.map;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = arg1;
                            var3 = var1.type;
                            var2 = 'text';
                            var2 = var2 === var3;
                            if(!var2) { _fun0004_ip = 30; continue _fun0004 }
 19:
                            var4 = var1.content;
                            var3 = null;
                            var2 = var3 != var4;
 30:
                            if(!var2) { _fun0004_ip = 73; continue _fun0004 }
 33:
                            var5 = var1.content;
                            var4 = var5.replace;
                            var3 = /\n+\s*$/;
                            var2 = '';
                            var2 = var4.bind(var5)(var3, var2);
                            var1['content'] = var2;
 73:
                            return var1;
                        }
                    };
                    var1 = var6.bind(var7)(var1);
                    var2['inline'] = var5;
                    var2['_list'] = var4;
                    var2['_listLevel'] = var3;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1['items'] = var2;
            return var1;
        }
    };
    var4 = 'parse';
    var2[var4] = var6;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/MarkupListRule.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();