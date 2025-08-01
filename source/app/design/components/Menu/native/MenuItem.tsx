// app/design/components/Menu/native/MenuItem.tsx
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'width': 20, 'height': 20};
    var4['formIcon'] = var10;
    var10 = {'fontSize': 14, 'fontWeight': '500'};
    var4['formLabel'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.label;
            var3 = var1.IconComponent;
            var6 = var1.iconSource;
            var9 = var1.showIconFirst;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 36; continue _fun0001 }
 34:
            var9 = false;
 36:
            var14 = var1.style;
            var13 = var1.disabled;
            if(!(var13 === var4)) { _fun0001_ip = 52; continue _fun0001 }
 50:
            var13 = false;
 52:
            var1 = var1.action;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var4;
            var1 = _closure1_slot5;
            var10 = var1.bind(var4)();
            var8 = _closure1_slot3;
            var2 = var8.useContext;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 3;
            var1 = var15[var1];
            var1 = var12.bind(var4)(var1);
            var1 = var1.MenuContext;
            var1 = var2.bind(var8)(var1);
            var1 = var1.menuClose;
            _closure2_slot1 = var1;
            var12 = null;
            if(!(var12 == var3)) { _fun0001_ip = 190; continue _fun0001 }
 133:
            var1 = var12 != var6;
            var8 = null;
            if(!var1) { _fun0001_ip = 188; continue _fun0001 }
 142:
            var15 = _closure1_slot4;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 4;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['source'] = var6;
            var16 = var10.formIcon;
            var1['style'] = var16;
            var8 = var15.bind(var4)(var2, var1);
 188:
            _fun0001_ip = 210; continue _fun0001;
 190:
            var2 = _closure1_slot4;
            var1 = {};
            var15 = 'sm';
            var1['size'] = var15;
            var8 = var2.bind(var4)(var3, var1);
 210:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 5;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var15 = arg2;
            var1['ref'] = var15;
            var1['style'] = var14;
            var14 = 'menuitem';
            var1['accessibilityRole'] = var14;
            var1['disabled'] = var13;
            var14 = var12 != var6;
            var13 = null;
            if(!var14) { _fun0001_ip = 278; continue _fun0001 }
 270:
            var13 = null;
            if(!var9) { _fun0001_ip = 278; continue _fun0001 }
 275:
            var13 = var8;
 278:
            var1['leading'] = var13;
            var13 = var12 == var6;
            var6 = null;
            if(var13) { _fun0001_ip = 300; continue _fun0001 }
 292:
            var6 = null;
            if(var9) { _fun0001_ip = 300; continue _fun0001 }
 297:
            var6 = var8;
 300:
            var1['trailing'] = var6;
            var9 = 'string';
            var8 = typeof var11;
            var6 = var11;
            if(!(var9 === var8)) { _fun0001_ip = 365; continue _fun0001 }
 319:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 6;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['text'] = var11;
            var10 = var10.formLabel;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 365:
            var1['label'] = var6;
            var5 = function onPress() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Menu/native/MenuItem.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MenuItem'] = var2;
    return var1;
})();