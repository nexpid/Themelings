// app/utils/ChangeLogUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var5 = function getDefaultRules(arg1) {
        var1 = {};
        var4 = _closure1_slot13;
        var3 = undefined;
        var2 = arg1;
        var5 = var4.bind(var3)(var2);
        var6 = var1;
        var2 = copyDataProperties(var6, var5);
        return var1;
    };
    var _closure1_slot16 = var5;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var4 = 0;
    var9 = var7[var4];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.lheading;
    var _closure1_slot3 = var9;
    var9 = var7[var4];
    var9 = var8.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.heading;
    var _closure1_slot4 = var9;
    var9 = var7[var4];
    var9 = var8.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.link;
    var _closure1_slot5 = var9;
    var9 = var7[var4];
    var9 = var8.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.image;
    var _closure1_slot6 = var9;
    var9 = var7[var4];
    var9 = var8.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.list;
    var _closure1_slot7 = var9;
    var9 = var7[var4];
    var9 = var8.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.blockQuote;
    var _closure1_slot8 = var9;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.defaultRules;
    var4 = var4.paragraph;
    var _closure1_slot9 = var4;
    var4 = /\{(.+?)}/;
    var _closure1_slot10 = var4;
    var4 = /^\$(\w+?)\$/;
    var _closure1_slot11 = var4;
    var4 = function parseWithClassNameExtraction(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.transformUpperCase;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 19; continue _fun0001 }
 17:
            var2 = false;
 19:
            var _closure2_slot0 = var2;
            var1 = function(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var8 = _closure1_slot10;
                    var3 = var8.exec;
                    var4 = 1;
                    var1 = var5[var4];
                    var7 = var3.bind(var8)(var1);
                    var6 = var5[var4];
                    var3 = var6.replace;
                    var1 = '';
                    var3 = var3.bind(var6)(var8, var1);
                    var1 = _closure2_slot0;
                    var6 = var3;
                    if(!var1) { _fun0002_ip = 70; continue _fun0002 }
 60:
                    var1 = var3.toUpperCase;
                    var6 = var1.bind(var3)();
 70:
                    var1 = {};
                    var3 = null;
                    var8 = var3 != var7;
                    if(!var8) { _fun0002_ip = 85; continue _fun0002 }
 81:
                    var3 = var7[var4];
 85:
                    var1['className'] = var3;
                    var3 = 2;
                    var7 = var5[var3];
                    var5 = '=';
                    if(!(var5 === var7)) { _fun0002_ip = 108; continue _fun0002 }
 105:
                    var3 = var4;
 108:
                    var1['level'] = var3;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 0;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.parseInline;
                    var3 = arg2;
                    var2 = arg3;
                    var2 = var4.bind(var5)(var3, var6, var2);
                    var1['content'] = var2;
                    return var1;
                }
            };
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = function defaultRules(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arg1;
            var1 = {};
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 1;
            var9 = var2[var8];
            var7 = undefined;
            var9 = var5.bind(var7)(var9);
            var12 = var9.baseRules;
            var13 = var1;
            var9 = copyDataProperties(var13, var12);
            var9 = {};
            var12 = _closure1_slot6;
            var13 = var9;
            var10 = copyDataProperties(var13, var12);
            var2 = var2[var8];
            var2 = var5.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.image;
            var5 = 'function';
            var2 = typeof var2;
            if(!(var5 !== var2)) { _fun0003_ip = 121; continue _fun0003 }
 90:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.image;
            _fun0003_ip = 155; continue _fun0003;
 121:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var11 = var10.customRules;
            var10 = var11.image;
            var2 = var10.bind(var11)(var6);
 155:
            var13 = var9;
            var12 = var2;
            var2 = copyDataProperties(var13, var12);
            var2 = 'image';
            var1[var2] = var9;
            var9 = {};
            var12 = _closure1_slot5;
            var13 = var9;
            var2 = copyDataProperties(var13, var12);
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.link;
            var2 = typeof var2;
            if(!(var5 !== var2)) { _fun0003_ip = 254; continue _fun0003 }
 223:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.link;
            _fun0003_ip = 288; continue _fun0003;
 254:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var11 = var10.customRules;
            var10 = var11.link;
            var2 = var10.bind(var11)(var6);
 288:
            var13 = var9;
            var12 = var2;
            var2 = copyDataProperties(var13, var12);
            var2 = 'link';
            var1[var2] = var9;
            var9 = {};
            var12 = _closure1_slot7;
            var13 = var9;
            var2 = copyDataProperties(var13, var12);
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.list;
            var2 = typeof var2;
            if(!(var5 !== var2)) { _fun0003_ip = 387; continue _fun0003 }
 356:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var10.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.list;
            _fun0003_ip = 421; continue _fun0003;
 387:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var11 = var10.customRules;
            var10 = var11.list;
            var2 = var10.bind(var11)(var6);
 421:
            var13 = var9;
            var12 = var2;
            var2 = copyDataProperties(var13, var12);
            var2 = 'list';
            var1[var2] = var9;
            var9 = {};
            var11 = _closure1_slot1;
            var2 = _closure1_slot2;
            var10 = 2;
            var10 = var2[var10];
            var10 = var11.bind(var7)(var10);
            var10 = var10.order;
            var9['order'] = var10;
            var10 = function match(arg1) {
                var3 = _closure1_slot11;
                var2 = var3.exec;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9['match'] = var10;
            var10 = function parse(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var1 = arg3;
                    var2 = var1.interpolations;
                    var1 = 1;
                    var1 = var4[var1];
                    var2 = var2[var1];
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 50; continue _fun0004 }
 31:
                    var1 = {};
                    var3 = 'interpolation';
                    var1['type'] = var3;
                    var1['renderer'] = var2;
                    _fun0004_ip = 73; continue _fun0004;
 50:
                    var2 = {};
                    var3 = 'text';
                    var2['type'] = var3;
                    var3 = 0;
                    var3 = var4[var3];
                    var2['content'] = var3;
                    var1 = var2;
 73:
                    return var1;
                }
            };
            var9['parse'] = var10;
            var3 = function react(arg1) {
                var2 = arg1;
                var1 = var2.renderer;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9['react'] = var3;
            var3 = 'interpolation';
            var1[var3] = var9;
            var3 = {};
            var12 = _closure1_slot3;
            var13 = var3;
            var9 = copyDataProperties(var13, var12);
            var10 = _closure1_slot12;
            var9 = {};
            var11 = true;
            var9['transformUpperCase'] = var11;
            var10 = var10.bind(var7)(var9);
            var9 = 'parse';
            var3[var9] = var10;
            var9 = _closure1_slot0;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.lheading;
            var2 = typeof var2;
            if(!(var5 !== var2)) { _fun0003_ip = 617; continue _fun0003 }
 586:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.lheading;
            _fun0003_ip = 651; continue _fun0003;
 617:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var10 = var9.customRules;
            var9 = var10.lheading;
            var2 = var9.bind(var10)(var6);
 651:
            var13 = var3;
            var12 = var2;
            var2 = copyDataProperties(var13, var12);
            var2 = 'lheading';
            var1[var2] = var3;
            var3 = {};
            var12 = _closure1_slot4;
            var13 = var3;
            var2 = copyDataProperties(var13, var12);
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.heading;
            var2 = typeof var2;
            if(!(var5 !== var2)) { _fun0003_ip = 750; continue _fun0003 }
 719:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.heading;
            _fun0003_ip = 784; continue _fun0003;
 750:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var10 = var9.customRules;
            var9 = var10.heading;
            var2 = var9.bind(var10)(var6);
 784:
            var13 = var3;
            var12 = var2;
            var2 = copyDataProperties(var13, var12);
            var2 = 'heading';
            var1[var2] = var3;
            var3 = {};
            var12 = _closure1_slot8;
            var13 = var3;
            var2 = copyDataProperties(var13, var12);
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.blockQuote;
            var2 = typeof var2;
            if(!(var5 !== var2)) { _fun0003_ip = 883; continue _fun0003 }
 852:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.blockQuote;
            _fun0003_ip = 917; continue _fun0003;
 883:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var10 = var9.customRules;
            var9 = var10.blockQuote;
            var2 = var9.bind(var10)(var6);
 917:
            var13 = var3;
            var12 = var2;
            var2 = copyDataProperties(var13, var12);
            var2 = 'blockQuote';
            var1[var2] = var3;
            var3 = {};
            var12 = _closure1_slot9;
            var13 = var3;
            var2 = copyDataProperties(var13, var12);
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var9.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.paragraph;
            var2 = typeof var2;
            if(!(var5 !== var2)) { _fun0003_ip = 1016; continue _fun0003 }
 985:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var5.bind(var7)(var2);
            var2 = var2.customRules;
            var2 = var2.paragraph;
            _fun0003_ip = 1050; continue _fun0003;
 1016:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var4 = var5.bind(var7)(var4);
            var5 = var4.customRules;
            var4 = var5.paragraph;
            var2 = var4.bind(var5)(var6);
 1050:
            var13 = var3;
            var12 = var2;
            var2 = copyDataProperties(var13, var12);
            var2 = 'paragraph';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = function specialRules(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = {};
            var2 = {};
            var8 = _closure1_slot3;
            var9 = var2;
            var3 = copyDataProperties(var9, var8);
            var5 = _closure1_slot12;
            var3 = {};
            var6 = false;
            var3['transformUpperCase'] = var6;
            var6 = undefined;
            var5 = var5.bind(var6)(var3);
            var3 = 'parse';
            var2[var3] = var5;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.customRules;
            var3 = var3.lheading;
            var5 = 'function';
            var3 = typeof var3;
            if(!(var5 !== var3)) { _fun0005_ip = 121; continue _fun0005 }
 90:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.customRules;
            var3 = var3.lheading;
            _fun0005_ip = 158; continue _fun0005;
 121:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var6 = var4.customRules;
            var5 = var6.lheading;
            var4 = arg1;
            var3 = var5.bind(var6)(var4);
 158:
            var9 = var2;
            var8 = var3;
            var3 = copyDataProperties(var9, var8);
            var1['lheading'] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = function messageRules(arg1) {
        var1 = {};
        var5 = _closure1_slot13;
        var4 = undefined;
        var3 = arg1;
        var7 = var5.bind(var4)(var3);
        var8 = var1;
        var3 = copyDataProperties(var8, var7);
        var6 = {};
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 0;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.defaultRules;
        var7 = var2.newline;
        var8 = var6;
        var2 = copyDataProperties(var8, var7);
        var2 = 'newline';
        var1[var2] = var6;
        var2 = 2;
        var2 = var5[var2];
        var6 = var3.bind(var4)(var2);
        var2 = 'text';
        var1[var2] = var6;
        var2 = 3;
        var2 = var5[var2];
        var6 = var3.bind(var4)(var2);
        var2 = 'list';
        var1[var2] = var6;
        var2 = 4;
        var2 = var5[var2];
        var3 = var3.bind(var4)(var2);
        var2 = 'subtext';
        var1[var2] = var3;
        return var1;
    };
    var _closure1_slot15 = var4;
    var4 = {};
    var4['getDefaultRules'] = var5;
    var5 = function getSpecialRules(arg1) {
        var4 = arg1;
        var1 = {};
        var5 = _closure1_slot13;
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var2 = _closure1_slot14;
        var6 = var2.bind(var3)(var4);
        var7 = var1;
        var2 = copyDataProperties(var7, var6);
        return var1;
    };
    var4['getSpecialRules'] = var5;
    var5 = function getMessageRules(arg1) {
        var1 = {};
        var4 = _closure1_slot15;
        var3 = undefined;
        var2 = arg1;
        var5 = var4.bind(var3)(var2);
        var6 = var1;
        var2 = copyDataProperties(var6, var5);
        return var1;
    };
    var4['getMessageRules'] = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/ChangeLogUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function renderChangelogMessageMarkup(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = arg3;
            var1 = {};
            var6 = false;
            var1['hasSpoilerEmbeds'] = var6;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.reactParserFor;
            var7 = _closure1_slot16;
            var2 = arg2;
            var2 = var7.bind(var5)(var2);
            var4 = var3.bind(var4)(var2);
            var2 = arg1;
            var3 = var2.content;
            var2 = null;
            if(!(var2 == var8)) { _fun0006_ip = 78; continue _fun0006 }
 74:
            var2 = {};
            _fun0006_ip = 88; continue _fun0006;
 78:
            var7 = {};
            var7['changeLog'] = var8;
            var2 = var7;
 88:
            var2 = var4.bind(var5)(var3, var6, var2);
            var1['content'] = var2;
            return var1;
        }
    };
    var3['renderChangelogMessageMarkup'] = var2;
    return var1;
})();