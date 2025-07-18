// app/uikit-native/Icon.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var3 = native6;
    var9 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var9;
    var4 = function getIconSize(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot4;
            var3 = var3.EXTRA_SMALL_10;
            if(!(var3 !== var2)) { _fun0001_ip = 181; continue _fun0001 }
 23:
            var3 = _closure1_slot4;
            var3 = var3.EXTRA_SMALL;
            if(!(var3 !== var2)) { _fun0001_ip = 176; continue _fun0001 }
 40:
            var3 = _closure1_slot4;
            var3 = var3.SMALL;
            if(!(var3 !== var2)) { _fun0001_ip = 171; continue _fun0001 }
 54:
            var3 = _closure1_slot4;
            var3 = var3.SMALL_14;
            if(!(var3 !== var2)) { _fun0001_ip = 166; continue _fun0001 }
 68:
            var3 = _closure1_slot4;
            var3 = var3.SMALL_20;
            if(!(var3 !== var2)) { _fun0001_ip = 161; continue _fun0001 }
 82:
            var3 = _closure1_slot4;
            var3 = var3.MEDIUM;
            if(!(var3 !== var2)) { _fun0001_ip = 156; continue _fun0001 }
 96:
            var3 = _closure1_slot4;
            var3 = var3.LARGE;
            if(!(var3 !== var2)) { _fun0001_ip = 151; continue _fun0001 }
 110:
            var3 = _closure1_slot4;
            var3 = var3.REFRESH_SMALL_16;
            if(!(var3 !== var2)) { _fun0001_ip = 146; continue _fun0001 }
 124:
            var1 = _closure1_slot4;
            var1 = var1.CUSTOM;
            if(!(var1 !== var2)) { _fun0001_ip = 142; continue _fun0001 }
 138:
            var1 = undefined;
            return var1;
 142:
            var1 = undefined;
            return var1;
 146:
            var1 = 16;
            return var1;
 151:
            var1 = 32;
            return var1;
 156:
            var1 = 24;
            return var1;
 161:
            var1 = 20;
            return var1;
 166:
            var1 = 14;
            return var1;
 171:
            var1 = 18;
            return var1;
 176:
            var1 = 12;
            return var1;
 181:
            var1 = 10;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var2 = function getIconStyle(arg1) {
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = {};
        var1['width'] = var2;
        var1['height'] = var2;
        return var1;
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var5);
    var1 = 0;
    var7 = var9[var1];
    var5 = native4;
    var1 = undefined;
    var10 = var5.bind(var1)(var7);
    var5 = 1;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Image;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot3 = var5;
    var5 = {};
    var7 = 'extraSmall10';
    var5['EXTRA_SMALL_10'] = var7;
    var7 = 'extraSmall';
    var5['EXTRA_SMALL'] = var7;
    var7 = 'small';
    var5['SMALL'] = var7;
    var7 = 'small20';
    var5['SMALL_20'] = var7;
    var7 = 'medium';
    var5['MEDIUM'] = var7;
    var7 = 'large';
    var5['LARGE'] = var7;
    var7 = 'custom';
    var5['CUSTOM'] = var7;
    var7 = 'refreshSmall16';
    var5['REFRESH_SMALL_16'] = var7;
    var7 = 'small14';
    var5['SMALL_14'] = var7;
    var _closure1_slot4 = var5;
    var7 = 3;
    var7 = var9[var7];
    var12 = var8.bind(var1)(var7);
    var11 = var12.createStyles;
    var7 = function(arg1) {
        var1 = {};
        var4 = _closure1_slot7;
        var5 = undefined;
        var2 = arg1;
        var2 = var4.bind(var5)(var2);
        var1['icon'] = var2;
        var2 = {};
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 4;
        var3 = var6[var3];
        var3 = var4.bind(var5)(var3);
        var3 = var3.colors;
        var3 = var3.INTERACTIVE_NORMAL;
        var2['tintColor'] = var3;
        var1['iconColor'] = var2;
        return var1;
    };
    var7 = var11.bind(var12)(var7);
    var _closure1_slot5 = var7;
    var7 = var10.memo;
    var11 = var10.forwardRef;
    var6 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.source;
            var3 = var1.color;
            var2 = var1.disableColor;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0002_ip = 27; continue _fun0002 }
 25:
            var2 = false;
 27:
            var10 = var1.size;
            if(!(var10 === var4)) { _fun0002_ip = 49; continue _fun0002 }
 36:
            var5 = _closure1_slot4;
            var10 = var5.MEDIUM;
 49:
            var8 = var1.style;
            var12 = var1.resizeMode;
            if(!(var12 === var4)) { _fun0002_ip = 68; continue _fun0002 }
 64:
            var12 = 'cover';
 68:
            var6 = var1.accessible;
            var5 = var1.accessibilityLabel;
            var1 = _closure1_slot5;
            var1 = var1.bind(var4)(var10);
            var9 = undefined;
            if(var2) { _fun0002_ip = 123; continue _fun0002 }
 96:
            var2 = null;
            if(!(var2 == var3)) { _fun0002_ip = 110; continue _fun0002 }
 102:
            var1 = var1.iconColor;
            _fun0002_ip = 120; continue _fun0002;
 110:
            var2 = {};
            var2['tintColor'] = var3;
            var1 = var2;
 120:
            var9 = var1;
 123:
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var1['resizeMode'] = var12;
            var1['source'] = var11;
            var7 = _closure1_slot7;
            var10 = var7.bind(var4)(var10);
            var7 = new Array(3);
            var7[0] = var10;
            var7[1] = var9;
            var7[2] = var8;
            var1['style'] = var7;
            var1['accessible'] = var6;
            var1['accessibilityLabel'] = var5;
            var5 = 0;
            var1['fadeDuration'] = var5;
            var5 = arg2;
            var1['ref'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var6 = var11.bind(var10)(var6);
    var6 = var7.bind(var10)(var6);
    var6['Sizes'] = var5;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'uikit-native/Icon.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['IconSizes'] = var5;
    var3['getIconSize'] = var4;
    var3['getIconStyle'] = var2;
    return var1;
})();