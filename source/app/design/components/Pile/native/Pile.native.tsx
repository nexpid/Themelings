// app/design/components/Pile/native/Pile.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var4['pile'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Pile/native/Pile.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Pile(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.aria-label;
            var1 = var2.shape;
            var _closure2_slot0 = var1;
            var1 = var2.size;
            var _closure2_slot1 = var1;
            var3 = var2.gap;
            var _closure2_slot2 = var3;
            var3 = var2.depthX;
            var _closure2_slot3 = var3;
            var3 = var2.depthY;
            var _closure2_slot4 = var3;
            var8 = var2.children;
            var2 = _closure1_slot6;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var2 = _closure1_slot3;
            var3 = var2.Children;
            var2 = var3.toArray;
            var12 = var2.bind(var3)(var8);
            var3 = var12.filter;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 4;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var2 = var3.bind(var12)(var2);
            var2 = var2.length;
            var _closure2_slot5 = var2;
            var3 = 5;
            var3 = var11[var3];
            var10 = var10.bind(var4)(var3);
            var3 = var10.isArray;
            var3 = var3.bind(var10)(var1);
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var1.length;
            if(!(var1 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var9 = var9.pile;
            var1['style'] = var9;
            var1['aria-label'] = var7;
            var6 = _closure1_slot3;
            var7 = var6.Children;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var10 = arg1;
                    var5 = arg2;
                    var2 = _closure1_slot3;
                    var1 = var2.isValidElement;
                    var1 = var1.bind(var2)(var10);
                    if(var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var1 = null;
                    return var1;
case 5:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var14 = 5;
                    var1 = var1[var14];
                    var4 = undefined;
                    var6 = var2.bind(var4)(var1);
                    var2 = var6.isArray;
                    var1 = _closure2_slot1;
                    var2 = var2.bind(var6)(var1);
                    var1 = _closure2_slot1;
                    if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var11 = var1;
                    _fun0002_ip = 9; continue _fun0002;
case 7:
                    var11 = var1[var5];
case 9:
                    var1 = _closure2_slot5;
                    var2 = 1;
                    var1 = var1 - var2;
                    var1 = var5 < var1;
                    var12 = undefined;
                    if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var14];
                    var8 = var6.bind(var4)(var1);
                    var6 = var8.isArray;
                    var1 = _closure2_slot1;
                    var1 = var6.bind(var8)(var1);
                    var6 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var8 = var6;
                    _fun0002_ip = 14; continue _fun0002;
case 12:
                    var1 = var5 + var2;
                    var8 = var6[var1];
case 14:
                    var6 = _closure2_slot0;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var13 = 6;
                    var1 = var1[var13];
                    var1 = var9.bind(var4)(var1);
                    var1 = var1.CutoutShape;
                    var1 = var1.Circle;
                    if(!(var6 !== var1)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var6 = _closure2_slot0;
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var13];
                    var1 = var9.bind(var4)(var1);
                    var1 = var1.CutoutShape;
                    var1 = var1.RoundedRect;
                    if(!(var6 !== var1)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 4;
                    var1 = var9[var1];
                    var9 = var6.bind(var4)(var1);
                    var6 = var9.assertNever;
                    var1 = _closure2_slot0;
                    var1 = var6.bind(var9)(var1);
                    var12 = undefined;
                    _fun0002_ip = 10; continue _fun0002;
case 17:
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['shape'] = var6;
                    var6 = _closure2_slot3;
                    var9 = null;
                    if(!(var9 != var6)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var6 = _closure2_slot3;
                    var6 = var2 - var6;
                    var6 = var11 * var6;
                    _fun0002_ip = 21; continue _fun0002;
case 19:
                    var13 = _closure2_slot2;
                    var6 = -var13;
case 21:
                    var1['x'] = var6;
                    var6 = _closure2_slot4;
                    if(!(var9 != var6)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var6 = _closure2_slot4;
                    var6 = var2 - var6;
                    var6 = var11 * var6;
                    _fun0002_ip = 24; continue _fun0002;
case 22:
                    var9 = _closure2_slot2;
                    var6 = -var9;
case 24:
                    var1['y'] = var6;
                    var9 = _closure2_slot2;
                    var6 = 2;
                    var13 = var6 * var9;
                    var13 = var8 + var13;
                    var1['width'] = var13;
                    var6 = var6 * var9;
                    var6 = var8 + var6;
                    var1['height'] = var6;
                    var6 = 3;
                    var6 = var8 / var6;
                    var6 = var6 + var9;
                    var1['cornerRadius'] = var6;
                    var12 = var1;
                    _fun0002_ip = 10; continue _fun0002;
case 15:
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['shape'] = var6;
                    var6 = _closure2_slot3;
                    var9 = null;
                    if(!(var9 != var6)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var6 = _closure2_slot3;
                    var6 = var2 - var6;
                    var6 = var11 * var6;
                    _fun0002_ip = 27; continue _fun0002;
case 25:
                    var13 = _closure2_slot2;
                    var6 = -var13;
case 27:
                    var1['x'] = var6;
                    var6 = _closure2_slot4;
                    if(!(var9 != var6)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var6 = _closure2_slot4;
                    var6 = var2 - var6;
                    var6 = var11 * var6;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var9 = _closure2_slot2;
                    var6 = -var9;
case 30:
                    var1['y'] = var6;
                    var9 = _closure2_slot2;
                    var6 = 2;
                    var6 = var6 * var9;
                    var6 = var8 + var6;
                    var1['size'] = var6;
                    var12 = var1;
case 10:
                    var1 = 0;
                    var8 = var5 > var1;
                    var9 = 0;
                    var6 = 0;
                    if(!var8) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var13 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var14];
                    var14 = var13.bind(var4)(var8);
                    var13 = var14.isArray;
                    var8 = _closure2_slot1;
                    var13 = var13.bind(var14)(var8);
                    var8 = _closure2_slot1;
                    if(var13) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var13 = var8;
                    _fun0002_ip = 35; continue _fun0002;
case 33:
                    var2 = var5 - var2;
                    var13 = var8[var2];
case 35:
                    var2 = _closure2_slot3;
                    var14 = null;
                    if(!(var14 != var2)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var8 = -var13;
                    var2 = _closure2_slot3;
                    var8 = var8 * var2;
                    var2 = _closure2_slot2;
                    var2 = var8 + var2;
                    _fun0002_ip = 38; continue _fun0002;
case 36:
                    var2 = -var13;
case 38:
                    var8 = _closure2_slot4;
                    var8 = var14 == var8;
                    var1 = 0;
                    if(var8) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var8 = _closure2_slot4;
                    var8 = var13 * var8;
                    var8 = var13 - var8;
                    var3 = _closure2_slot2;
                    var3 = var8 + var3;
                    var1 = var5 * var3;
case 39:
                    var6 = var1;
                    var9 = var2;
case 31:
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot4;
                    var1 = {};
                    var8 = {};
                    var8['height'] = var11;
                    var8['marginLeft'] = var9;
                    var8['marginTop'] = var6;
                    var6 = new Array(2);
                    var6[0] = var8;
                    var9 = var10.type;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 7;
                    var8 = var14[var8];
                    var8 = var13.bind(var4)(var8);
                    var8 = var8.PileOverflow;
                    if(!(var9 !== var8)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var8 = {};
                    var8['width'] = var11;
                    _fun0002_ip = 43; continue _fun0002;
case 41:
                    var9 = {};
                    var9['minWidth'] = var11;
                    var8 = var9;
case 43:
                    var6[1] = var8;
                    var1['style'] = var6;
                    var8 = null;
                    var6 = var10;
                    if(!(var8 != var12)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 6;
                    var7 = var11[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var11 = new Array(1);
                    var11[0] = var12;
                    var7['cutouts'] = var11;
                    var7['children'] = var10;
                    var6 = var9.bind(var4)(var8, var7);
case 44:
                    var1['children'] = var6;
                    var1 = var3.bind(var4)(var2, var1, var5);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var8, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 4:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var14 = 'Pile: size array must have the same number of elements as children';
            var15 = var2;
            var1 = new var15[var3](var14, var13);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['Pile'] = var2;
    return var1;
})();