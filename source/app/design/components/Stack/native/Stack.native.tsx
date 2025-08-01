// app/design/components/Stack/native/Stack.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot0 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot1 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = {};
            var2 = {};
            var3 = '100%';
            var2['width'] = var3;
            var3 = arg1;
            var2['gap'] = var3;
            var3 = arg3;
            var2['alignItems'] = var3;
            var3 = arg4;
            var2['justifyContent'] = var3;
            var3 = 'column';
            var5 = 'horizontal';
            var4 = arg2;
            if(!(var5 === var4)) { _fun0001_ip = 55; continue _fun0001 }
 51:
            var3 = 'row';
 55:
            var2['flexDirection'] = var3;
            var1['stack'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Stack/native/Stack.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Stack(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.spacing;
            var10 = 8;
            var4 = undefined;
            if(!(var4 !== var2)) { _fun0002_ip = 20; continue _fun0002 }
 17:
            var10 = var2;
 20:
            var2 = var1.direction;
            var9 = 'vertical';
            if(!(var4 !== var2)) { _fun0002_ip = 37; continue _fun0002 }
 34:
            var9 = var2;
 37:
            var2 = var1.align;
            var7 = 'stretch';
            if(!(var4 !== var2)) { _fun0002_ip = 54; continue _fun0002 }
 51:
            var7 = var2;
 54:
            var2 = var1.justify;
            var3 = 'flex-start';
            if(!(var4 !== var2)) { _fun0002_ip = 73; continue _fun0002 }
 70:
            var3 = var2;
 73:
            var5 = var1.children;
            var8 = var1.style;
            var6 = var1.onLayout;
            var2 = _closure1_slot2;
            var15 = undefined;
            var14 = var10;
            var13 = var9;
            var12 = var7;
            var11 = var3;
            var7 = var15[var2](var14, var13, var12, var11, var10);
            var3 = _closure1_slot1;
            var2 = _closure1_slot0;
            var1 = {};
            var9 = var7.stack;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var1['style'] = var7;
            var1['onLayout'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['Stack'] = var2;
    return var1;
})();