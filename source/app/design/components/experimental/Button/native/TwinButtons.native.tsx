// app/design/components/experimental/Button/native/TwinButtons.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = native4;
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
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var2 = {};
            var4 = 'row';
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
 14:
            var4 = 'column';
 18:
            var2['flexDirection'] = var4;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 4;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.spacing;
            if(var3) { _fun0001_ip = 63; continue _fun0001 }
 55:
            var3 = var4.PX_12;
            _fun0001_ip = 69; continue _fun0001;
 63:
            var3 = var4.PX_8;
 69:
            var2['gap'] = var3;
            var1['container'] = var2;
            var2 = {};
            var3 = 1;
            var2['flex'] = var3;
            var1['button'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/experimental/Button/native/TwinButtons.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TwinButtons(arg1) {
        var1 = arg1;
        var8 = var1.children;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var4 = undefined;
        var2 = var2.bind(var4)(var1);
        var1 = var2.useFontScale;
        var3 = var1.bind(var2)();
        var2 = _closure1_slot6;
        var1 = 1.2;
        var1 = var3 > var1;
        var7 = var2.bind(var4)(var1);
        var _closure2_slot0 = var7;
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = {};
        var7 = var7.container;
        var1['style'] = var7;
        var6 = _closure1_slot3;
        var7 = var6.Children;
        var6 = var7.map;
        var5 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = arg1;
                var3 = _closure1_slot3;
                var1 = var3.isValidElement;
                var3 = var1.bind(var3)(var6);
                var1 = null;
                if(!var3) { _fun0002_ip = 102; continue _fun0002 }
 26:
                var4 = var6.type;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 6;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var8.bind(var5)(var3);
                var3 = var3.Button;
                var1 = null;
                if(!(var4 === var3)) { _fun0002_ip = 102; continue _fun0002 }
 65:
                var4 = _closure1_slot5;
                var3 = _closure1_slot4;
                var2 = {};
                var7 = _closure2_slot0;
                var7 = var7.button;
                var2['style'] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 102:
                return var1;
            }
        };
        var5 = var6.bind(var7)(var8, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['TwinButtons'] = var2;
    return var1;
})();