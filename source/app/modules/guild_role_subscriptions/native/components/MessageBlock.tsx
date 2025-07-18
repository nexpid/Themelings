// app/modules/guild_role_subscriptions/native/components/MessageBlock.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function getContainerStyles(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot5;
            var1 = var1.RED;
            if(!(var1 !== var3)) { _fun0001_ip = 104; continue _fun0001 }
 20:
            var1 = _closure1_slot5;
            var1 = var1.YELLOW;
            if(!(var1 !== var3)) { _fun0001_ip = 38; continue _fun0001 }
 34:
            var1 = undefined;
            return var1;
 38:
            var1 = {};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 3;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.INFO_WARNING_BACKGROUND;
            var1['backgroundColor'] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var3 = var3.STATUS_WARNING;
            var1['borderColor'] = var3;
            return var1;
 104:
            var1 = {};
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var6 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var6);
            var6 = var6.colors;
            var6 = var6.INFO_DANGER_BACKGROUND;
            var1['backgroundColor'] = var6;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.colors;
            var2 = var2.STATUS_DANGER;
            var1['borderColor'] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function getTextColor(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot5;
            var2 = var2.RED;
            if(!(var2 !== var3)) { _fun0002_ip = 73; continue _fun0002 }
 20:
            var2 = _closure1_slot5;
            var2 = var2.YELLOW;
            if(!(var2 !== var3)) { _fun0002_ip = 38; continue _fun0002 }
 34:
            var2 = undefined;
            return var2;
 38:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.colors;
            var2 = var2.INFO_WARNING_TEXT;
            return var2;
 73:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.colors;
            var1 = var1.INFO_DANGER_TEXT;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var9 = 0;
    var5 = var7[var9];
    var2 = native4;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var8 = 1;
    var2 = var7[var8];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot4 = var2;
    var2 = {};
    var2['RED'] = var9;
    var5 = 'RED';
    var2[var9] = var5;
    var2['YELLOW'] = var8;
    var5 = 'YELLOW';
    var2[var8] = var5;
    var _closure1_slot5 = var2;
    var5 = 4;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function(arg1) {
        var5 = arg1;
        var1 = {};
        var2 = {};
        var6 = _closure1_slot7;
        var4 = undefined;
        var10 = var6.bind(var4)(var5);
        var11 = var2;
        var6 = copyDataProperties(var11, var10);
        var6 = 'center';
        var7 = 'alignItems';
        var2[var7] = var6;
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var7 = 3;
        var7 = var9[var7];
        var7 = var8.bind(var4)(var7);
        var7 = var7.radii;
        var8 = var7.xs;
        var7 = 'borderRadius';
        var2[var7] = var8;
        var8 = 1;
        var7 = 'borderWidth';
        var2[var7] = var8;
        var8 = 8;
        var7 = 'padding';
        var2[var7] = var8;
        var8 = '100%';
        var7 = 'width';
        var2[var7] = var8;
        var1['container'] = var2;
        var2 = {};
        var2['textAlign'] = var6;
        var3 = _closure1_slot8;
        var3 = var3.bind(var4)(var5);
        var2['color'] = var3;
        var1['text'] = var2;
        return var1;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/native/components/MessageBlock.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function MessageBlock(arg1) {
        var1 = arg1;
        var2 = var1.color;
        var7 = var1.children;
        var1 = _closure1_slot6;
        var4 = undefined;
        var8 = var1.bind(var4)(var2);
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = {};
        var6 = var8.container;
        var1['style'] = var6;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 5;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.LegacyText;
        var5 = {};
        var8 = var8.text;
        var5['style'] = var8;
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['MessageBlockColors'] = var2;
    return var1;
})();