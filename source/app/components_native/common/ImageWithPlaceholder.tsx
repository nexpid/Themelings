// app/components_native/common/ImageWithPlaceholder.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var9 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var9;
        var _closure1_slot1 = var7;
        var1 = global;
        var8 = var1.Object;
        var5 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var8)(var3, var1, var4);
        var1 = 0;
        var4 = var7[var1];
        var1 = undefined;
        var4 = var6.bind(var1)(var4);
        var5 = var4.View;
        var _closure1_slot2 = var5;
        var8 = var4.requireNativeComponent;
        var10 = 1;
        var4 = var7[var10];
        var4 = var6.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot3 = var4;
        var4 = {};
        var4['flex'] = var10;
        var _closure1_slot4 = var4;
        var4 = {};
        var4['THUMBHASH'] = var10;
        var5 = 'THUMBHASH';
        var4[var10] = var5;
        var _closure1_slot5 = var4;
        var5 = 2;
        var5 = var7[var5];
        var10 = var6.bind(var1)(var5);
        var5 = var10.isAndroid;
        var5 = var5.bind(var10)();
        if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var5 = 'DCDImageWithThumbhashPlaceholderView';
        var5 = var8.bind(var1)(var5);
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var8 = 3;
        var8 = var7[var8];
        var5 = var9.bind(var1)(var8);
case 4:
        var _closure1_slot6 = var5;
        var5 = 5;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'components_native/common/ImageWithPlaceholder.tsx';
        var5 = var6.bind(var7)(var5);
        var3['ImagePlaceholderVersions'] = var4;
        var2 = function ImageWithPlaceholder(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var9 = var4.uri;
                var8 = var4.placeholder;
                var7 = var4.placeholderVersion;
                var6 = var4.alt;
                var10 = var4.style;
                var3 = {'uri': 0, 'placeholder': 0, 'placeholderVersion': 0, 'alt': 0, 'style': 0};
                var1 = null;
                var18 = var3;
                var17 = null;
                var2 = silentSetPrototypeOf(var18, var17);
                var18 = {};
                var17 = var4;
                var16 = var3;
                var2 = copyDataProperties(var18, var17, var16);
                if(!(var1 != var8)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var1 = _closure1_slot5;
                var1 = var1.THUMBHASH;
                if(!(var7 !== var1)) { _fun0002_ip = 7; continue _fun0002 }
case 5:
                var11 = _closure1_slot3;
                var5 = _closure1_slot2;
                var4 = {};
                var4['style'] = var10;
                var18 = var4;
                var17 = var2;
                var1 = copyDataProperties(var18, var17);
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var1 = 4;
                var12 = var12[var1];
                var1 = undefined;
                var13 = var13.bind(var1)(var12);
                var12 = {};
                var14 = _closure1_slot4;
                var12['style'] = var14;
                var14 = 'cover';
                var12['resizeMode'] = var14;
                var14 = {};
                var14['uri'] = var9;
                var12['source'] = var14;
                var12['alt'] = var6;
                var13 = var11.bind(var1)(var13, var12);
                var12 = 'children';
                var4[var12] = var13;
                var1 = var11.bind(var1)(var5, var4);
                _fun0002_ip = 8; continue _fun0002;
case 7:
                var5 = _closure1_slot3;
                var4 = _closure1_slot6;
                var3 = {};
                var18 = var3;
                var17 = var2;
                var2 = copyDataProperties(var18, var17);
                var2 = 'style';
                var3[var2] = var10;
                var2 = 'uri';
                var3[var2] = var9;
                var2 = 'placeholder';
                var3[var2] = var8;
                var2 = 'placeholderVersion';
                var3[var2] = var7;
                var2 = 'alt';
                var3[var2] = var6;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
case 8:
                return var1;
            }
        };
        var3['ImageWithPlaceholder'] = var2;
        return var1;
    }
})();