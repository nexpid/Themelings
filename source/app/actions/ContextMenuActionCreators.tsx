// app/actions/ContextMenuActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function open(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CONTEXT_MENU_OPEN';
        var2['type'] = var5;
        var5 = arg1;
        var2['contextMenu'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var4 = function openContextMenu(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var7 = arg3;
            var1 = var6.stopPropagation;
            var1 = var1.bind(var6)();
            var1 = var6.currentTarget;
            var1 = var1.contains;
            var8 = null;
            if(!(var8 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var6.currentTarget;
            var3 = var4.contains;
            var1 = var6.target;
            var1 = var3.bind(var4)(var1);
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = 'pageX';
            var1 = var1 in var6;
            var10 = 0;
            var15 = 0;
            var14 = 0;
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var15 = var6.pageX;
            var14 = var6.pageY;
case 5:
            var9 = var14;
            var4 = var15;
            if(!(var10 === var4)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = var15;
            var9 = var14;
            if(!(var10 === var14)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var3 = var6.target;
            var1 = var8 == var3;
            var13 = undefined;
            var12 = undefined;
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var3.ownerDocument;
            var5 = var1.defaultView;
            var1 = var8 == var5;
            var12 = undefined;
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var1 = var5.getSelection;
            var12 = var1.bind(var5)();
case 10:
            var5 = var15;
            var1 = var14;
            if(!(var8 != var12)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = var12.rangeCount;
            var5 = var15;
            var1 = var14;
            if(!(var11 > var10)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var5 = var15;
            var1 = var14;
            if(!(var8 != var3)) { _fun0001_ip = 13; continue _fun0001 }
case 16:
            var11 = var12.getRangeAt;
            var12 = var11.bind(var12)(var10);
            var16 = var3.contains;
            var11 = var12.commonAncestorContainer;
            var11 = var16.bind(var3)(var11);
            var5 = var15;
            var1 = var14;
            if(!var11) { _fun0001_ip = 13; continue _fun0001 }
case 17:
            var11 = var12.getBoundingClientRect;
            var11 = var11.bind(var12)();
            var12 = var11.height;
            var5 = var15;
            var1 = var14;
            if(!(var10 !== var12)) { _fun0001_ip = 13; continue _fun0001 }
case 18:
            var5 = var11.left;
            var1 = var11.bottom;
case 13:
            var9 = var1;
            var4 = var5;
            if(!(var10 === var4)) { _fun0001_ip = 7; continue _fun0001 }
case 19:
            var4 = var5;
            var9 = var1;
            if(!(var10 === var1)) { _fun0001_ip = 7; continue _fun0001 }
case 20:
            var1 = var8 == var3;
            var11 = undefined;
            if(var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = var3.getBoundingClientRect;
            var11 = var1.bind(var3)();
case 21:
            if(!(var8 == var11)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var11 = {};
case 23:
            var1 = var11.left;
            var3 = 0;
            if(!(var13 !== var1)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var3 = var1;
case 25:
            var1 = var11.top;
            var5 = 0;
            if(!(var13 !== var1)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var5 = var1;
case 27:
            var12 = var11.width;
            var1 = 0;
            if(!(var13 !== var12)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var1 = var12;
case 29:
            var12 = var11.height;
            var11 = 2;
            var1 = var1 / var11;
            var3 = var3 + var1;
            var1 = 0;
            if(!(var13 !== var12)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var1 = var12;
case 31:
            var1 = var1 / var11;
            var9 = var5 + var1;
            var4 = var3;
case 7:
            var5 = {};
            var1 = arg2;
            var5['render'] = var1;
            var1 = arg4;
            var5['renderLazy'] = var1;
            var1 = var6.target;
            if(!(var8 == var1)) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var1 = var6.currentTarget;
case 33:
            var5['target'] = var1;
            var1 = global;
            var1 = var1.DOMRect;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var21 = var3;
            var20 = var4;
            var19 = var9;
            var18 = 0;
            var17 = 0;
            var1 = new var21[var1](var20, var19, var18, var17, var16);
            var1 = var1 instanceof Object ? var1 : var3;
            var5['rect'] = var1;
            var3 = {};
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 2;
            var9 = var9[var4];
            var4 = undefined;
            var10 = var10.bind(var4)(var9);
            var9 = var10.getCurrentlyInteractingAppContext;
            var9 = var9.bind(var10)();
            if(!(var8 == var9)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var10 = _closure1_slot3;
            var9 = var10.APP;
case 35:
            var3['context'] = var9;
            var20 = var3;
            var19 = var7;
            var9 = copyDataProperties(var20, var19);
            var5['config'] = var3;
            var _closure2_slot0 = var5;
            var3 = 'nativeEvent';
            var9 = var3 in var6;
            var3 = var6;
            if(!var9) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var3 = var6.nativeEvent;
case 37:
            if(!(var8 != var7)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var7 = var7.enableSpellCheck;
            if(!var7) { _fun0001_ip = 39; continue _fun0001 }
case 41:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 3;
            var7 = var9[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isDesktop;
            var7 = var7.bind(var8)();
            if(!var7) { _fun0001_ip = 39; continue _fun0001 }
case 42:
            var3 = var3.isTrusted;
            if(var3) { _fun0001_ip = 43; continue _fun0001 }
case 39:
            var3 = var6.preventDefault;
            var3 = var3.bind(var6)();
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var5);
            _fun0001_ip = 4; continue _fun0001;
case 43:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.addResultListener;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot4;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var _closure2_slot1 = var1;
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.AppContext;
    var _closure1_slot3 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/ContextMenuActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function closeContextMenu() {
        var1 = undefined;
        return var1;
    };
    var3['closeContextMenu'] = var5;
    var3['openContextMenu'] = var4;
    var2 = function openContextMenuLazy(arg1, arg2, arg3) {
        var5 = _closure1_slot5;
        var1 = undefined;
        var9 = arg1;
        var7 = arg3;
        var6 = arg2;
        var10 = undefined;
        var8 = undefined;
        var2 = var10[var5](var9, var8, var7, var6, var5);
        return var1;
    };
    var3['openContextMenuLazy'] = var2;
    return var1;
})();