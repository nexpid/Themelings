// app/modules/pomelo/native/components/PomeloEditableUserCardFooter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var12 = 18;
    var9['minHeight'] = var12;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DANGER;
    var9['color'] = var12;
    var4['errorMessage'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_POSITIVE;
    var9['color'] = var12;
    var4['iconPositive'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_WARNING;
    var9['color'] = var10;
    var4['iconWarning'] = var9;
    var9 = {'marginRight': 6, 'alignSelf': 'center'};
    var4['icon'] = var9;
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var4['footer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = function FooterMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.validation;
            var _closure2_slot0 = var3;
            var1 = _closure1_slot6;
            var5 = undefined;
            var14 = var1.bind(var5)();
            var _closure2_slot1 = var14;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 5;
            var4 = var9[var4];
            var7 = var8.bind(var5)(var4);
            var4 = var7.match;
            var3 = var3.type;
            var11 = var4.bind(var7)(var3);
            var10 = var11.with;
            var3 = 6;
            var4 = var9[var3];
            var4 = var8.bind(var5)(var4);
            var4 = var4.NameValidationState;
            var7 = var4.AVAILABLE;
            var4 = function() {
                var1 = {};
                var8 = _closure1_slot4;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var5 = var2.Text;
                var2 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-positive'};
                var3 = {};
                var9 = 1;
                var3['flex'] = var9;
                var2['style'] = var3;
                var9 = _closure2_slot0;
                var9 = var9.message;
                var2['children'] = var9;
                var2 = var8.bind(var6)(var5, var2);
                var1['textComponent'] = var2;
                var2 = {};
                var5 = _closure1_slot1;
                var4 = 8;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var2['source'] = var4;
                var3 = _closure2_slot1;
                var3 = var3.iconPositive;
                var3 = var3.color;
                var2['color'] = var3;
                var1['icon'] = var2;
                return var1;
            };
            var11 = var10.bind(var11)(var7, var4);
            var10 = var11.with;
            var4 = var9[var3];
            var4 = var8.bind(var5)(var4);
            var4 = var4.NameValidationState;
            var7 = var4.ERROR;
            var4 = function() {
                var1 = {};
                var8 = _closure1_slot4;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 9;
                var2 = var7[var2];
                var5 = undefined;
                var4 = var6.bind(var5)(var2);
                var2 = {};
                var3 = _closure2_slot1;
                var10 = var3.errorMessage;
                var2['style'] = var10;
                var9 = _closure2_slot0;
                var9 = var9.message;
                var2['children'] = var9;
                var2 = var8.bind(var5)(var4, var2);
                var1['textComponent'] = var2;
                var2 = {};
                var4 = 10;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var2['source'] = var4;
                var3 = var3.errorMessage;
                var3 = var3.color;
                var2['color'] = var3;
                var1['icon'] = var2;
                return var1;
            };
            var11 = var10.bind(var11)(var7, var4);
            var10 = var11.with;
            var4 = var9[var3];
            var4 = var8.bind(var5)(var4);
            var4 = var4.NameValidationState;
            var7 = var4.RATE_LIMIT;
            var4 = function() {
                var1 = {};
                var8 = _closure1_slot4;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var5 = var2.Text;
                var2 = {};
                var3 = 'text-sm/medium';
                var2['variant'] = var3;
                var9 = _closure2_slot0;
                var9 = var9.message;
                var2['children'] = var9;
                var2 = var8.bind(var6)(var5, var2);
                var1['textComponent'] = var2;
                var2 = {};
                var5 = _closure1_slot1;
                var4 = 10;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var2['source'] = var4;
                var3 = _closure2_slot1;
                var3 = var3.iconWarning;
                var3 = var3.color;
                var2['color'] = var3;
                var1['icon'] = var2;
                return var1;
            };
            var7 = var10.bind(var11)(var7, var4);
            var4 = var7.with;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.NameValidationState;
            var3 = var3.INTERNAL_ERROR;
            var2 = function() {
                var1 = null;
                return var1;
            };
            var3 = var4.bind(var7)(var3, var2);
            var2 = var3.exhaustive;
            var7 = var2.bind(var3)();
            if(!(var1 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var7.icon;
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var8 = var14.footer;
            var2['style'] = var8;
            var9 = _closure1_slot4;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 11;
            var6 = var13[var11];
            var8 = var12.bind(var5)(var6);
            var6 = {};
            var14 = var14.icon;
            var6['style'] = var14;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.Sizes;
            var11 = var11.EXTRA_SMALL_10;
            var6['size'] = var11;
            var11 = var10.color;
            var6['color'] = var11;
            var10 = var10.source;
            var6['source'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var7 = var7.textComponent;
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            return var1;
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/native/components/PomeloEditableUserCardFooter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PomeloEditableUserCardFooter(arg1) {
        var1 = arg1;
        var8 = var1.style;
        var9 = var1.validation;
        var11 = var1.message;
        var3 = _closure1_slot6;
        var4 = undefined;
        var7 = var3.bind(var4)();
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var10 = 5;
        var3 = var14[var10];
        var6 = var13.bind(var4)(var3);
        var5 = var6.match;
        var3 = new Array(2);
        var3[0] = var11;
        var3[1] = var9;
        var9 = var5.bind(var6)(var3);
        var6 = var9.with;
        var3 = var14[var10];
        var3 = var13.bind(var4)(var3);
        var3 = var3.P;
        var3 = var3.string;
        var5 = new Array(2);
        var5[0] = var3;
        var3 = var14[var10];
        var3 = var13.bind(var4)(var3);
        var3 = var3.P;
        var3 = var3._;
        var5[1] = var3;
        var3 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var1 = var2[Symbol.iterator];
                var2 = var1().next;
                var3 = var2().value;
                var2 = var1;
                var4 = undefined;
                var2 = var2 === var4;
                var5 = undefined;
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var5 = var3;
case 6:
                if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var1.return();
case 8:
                var3 = _closure1_slot4;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var9 = var6.bind(var9)(var5, var3);
        var6 = var9.with;
        var3 = var14[var10];
        var3 = var13.bind(var4)(var3);
        var3 = var3.P;
        var3 = var3.nullish;
        var5 = new Array(2);
        var5[0] = var3;
        var3 = {};
        var11 = var14[var10];
        var11 = var13.bind(var4)(var11);
        var15 = var11.P;
        var12 = var15.not;
        var11 = var14[var10];
        var11 = var13.bind(var4)(var11);
        var11 = var11.P;
        var11 = var11.nullish;
        var11 = var12.bind(var15)(var11);
        var3['username'] = var11;
        var5[1] = var3;
        var3 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var2 = var5[Symbol.iterator];
                var5 = var2().next;
                var7 = undefined;
                var3 = undefined;
                var4 = undefined;
                var6 = var5().value;
                var9 = var2;
                var9 = var9 === var7;
                var3 = var9;
                if(var9) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var4 = var6;
case 10:
                var4 = undefined;
                var6 = var3;
                if(var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var5 = var5().value;
                var6 = var2;
                var6 = var6 === var7;
                var3 = var6;
                if(var6) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                var4 = var5;
case 12: // try_start_0
                var8 = var4.username;
case 15: // try_end0
                var4 = var3;
                if(var4) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var2.return();
case 16:
                var6 = _closure1_slot4;
                var5 = _closure1_slot7;
                var4 = {};
                var4['validation'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                return var4;
case 18: // catch_target0
                CatchBlockStart(arg_register=0);
                _fun0003_ip = 19; continue _fun0003;
case 20:
                CatchBlockStart(arg_register=0);
                _fun0003_ip = 19; continue _fun0003;
case 21:
                CatchBlockStart(arg_register=0);
case 19:
                if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var2.return();
case 22:
                throw var1;
            }
        };
        var9 = var6.bind(var9)(var5, var3);
        var6 = var9.with;
        var3 = var14[var10];
        var3 = var13.bind(var4)(var3);
        var3 = var3.P;
        var3 = var3.nullish;
        var5 = new Array(2);
        var5[0] = var3;
        var3 = {};
        var11 = var14[var10];
        var11 = var13.bind(var4)(var11);
        var12 = var11.P;
        var11 = var12.not;
        var10 = var14[var10];
        var10 = var13.bind(var4)(var10);
        var10 = var10.P;
        var10 = var10.nullish;
        var10 = var11.bind(var12)(var10);
        var3['displayName'] = var10;
        var5[1] = var3;
        var3 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = arg1;
                var2 = var5[Symbol.iterator];
                var5 = var2().next;
                var7 = undefined;
                var3 = undefined;
                var4 = undefined;
                var6 = var5().value;
                var9 = var2;
                var9 = var9 === var7;
                var3 = var9;
                if(var9) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                var4 = var6;
case 10:
                var4 = undefined;
                var6 = var3;
                if(var6) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var5 = var5().value;
                var6 = var2;
                var6 = var6 === var7;
                var3 = var6;
                if(var6) { _fun0004_ip = 12; continue _fun0004 }
case 14:
                var4 = var5;
case 12: // try_start_0
                var8 = var4.displayName;
case 15: // try_end0
                var4 = var3;
                if(var4) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var2.return();
case 16:
                var6 = _closure1_slot4;
                var5 = _closure1_slot7;
                var4 = {};
                var4['validation'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                return var4;
case 18: // catch_target0
                CatchBlockStart(arg_register=0);
                _fun0004_ip = 19; continue _fun0004;
case 20:
                CatchBlockStart(arg_register=0);
                _fun0004_ip = 19; continue _fun0004;
case 21:
                CatchBlockStart(arg_register=0);
case 19:
                if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var2.return();
case 22:
                throw var1;
            }
        };
        var5 = var6.bind(var9)(var5, var3);
        var3 = var5.otherwise;
        var2 = function() {
            var1 = null;
            return var1;
        };
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = {};
        var6 = new Array(2);
        var6[0] = var8;
        var7 = var7.container;
        var6[1] = var7;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();