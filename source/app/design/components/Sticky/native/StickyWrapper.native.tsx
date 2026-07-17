// app/design/components/Sticky/native/StickyWrapper.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var8 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'height': '100%', 'width': '100%'};
    var4['wrapper'] = var9;
    var9 = {};
    var9['zIndex'] = var10;
    var4['header'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0};
    var4['androidHeader'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sticky/native/StickyWrapper.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StickyWrapper(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.header;
            var5 = var2.children;
            var1 = var2.pointerEvents;
            var7 = var2.style;
            var4 = _closure1_slot4;
            var3 = _closure1_slot2;
            var2 = {};
            var6 = new Array(2);
            var6[0] = var7;
            var7 = _closure1_slot5;
            var7 = var7.wrapper;
            var6[1] = var7;
            var2['style'] = var6;
            var2['pointerEvents'] = var1;
            var6 = null;
            var1 = var6 != var10;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot3;
            var8 = _closure1_slot2;
            var7 = {};
            var1 = _closure1_slot5;
            var1 = var1.header;
            var11 = new Array(2);
            var11[0] = var1;
            var14 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 3;
            var12 = var12[var1];
            var1 = undefined;
            var14 = var14.bind(var1)(var12);
            var12 = var14.isAndroid;
            var14 = var12.bind(var14)();
            var12 = undefined;
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = _closure1_slot5;
            var12 = var13.androidHeader;
case 4:
            var11[1] = var12;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var1)(var8, var7);
case 2:
            var1 = new Array(2);
            var1[0] = var6;
            var1[1] = var5;
            var2['children'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['StickyWrapper'] = var2;
    return var1;
})();