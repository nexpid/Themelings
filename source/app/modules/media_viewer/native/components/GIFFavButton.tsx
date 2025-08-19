// app/modules/media_viewer/native/components/GIFFavButton.tsx
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
    var4 = var7.memo;
    var2 = function GIFFavButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.source;
            var _closure2_slot0 = var2;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var1 = var2.isGIFV;
            if(var1) { _fun0001_ip = 41; continue _fun0001 }
 33:
            var12 = var2.sourceURI;
            _fun0001_ip = 47; continue _fun0001;
 41:
            var12 = var2.embedURI;
 47:
            var1 = null;
            if(!(var1 == var12)) { _fun0001_ip = 58; continue _fun0001 }
 53:
            var12 = var2.uri;
 58:
            _closure2_slot1 = var12;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 2;
            var6 = var8[var6];
            var9 = var4.bind(var5)(var6);
            var7 = var9.useIsFavoriteGIF;
            var6 = 3;
            var6 = var8[var6];
            var11 = var4.bind(var5)(var6);
            var6 = var11.gifUrlKey;
            var6 = var6.bind(var11)(var12);
            var6 = var7.bind(var9)(var6);
            _closure2_slot2 = var6;
            var11 = _closure1_slot3;
            var9 = var11.useCallback;
            var7 = new Array(6);
            var7[0] = var6;
            var13 = var2.height;
            var7[1] = var13;
            var13 = var2.isGIFV;
            var7[2] = var13;
            var13 = var2.uri;
            var7[3] = var13;
            var13 = var2.width;
            var7[4] = var13;
            var7[5] = var12;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot2;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 3;
                    var5 = var7[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    if(var4) { _fun0002_ip = 269; continue _fun0002 }
 38:
                    var8 = var5.addFavoriteGIF;
                    var4 = {};
                    var9 = _closure2_slot1;
                    var4['url'] = var9;
                    var9 = _closure2_slot0;
                    var10 = var9.uri;
                    var4['src'] = var10;
                    var10 = var9.width;
                    var4['width'] = var10;
                    var10 = var9.height;
                    var4['height'] = var10;
                    var9 = var9.isGIFV;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 7;
                    var10 = var12[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.GIFType;
                    if(var9) { _fun0002_ip = 129; continue _fun0002 }
 121:
                    var9 = var10.IMAGE;
                    _fun0002_ip = 135; continue _fun0002;
 129:
                    var9 = var10.VIDEO;
 135:
                    var4['format'] = var9;
                    var4 = var8.bind(var5)(var4);
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var4 = 4;
                    var4 = var12[var4];
                    var9 = var8.bind(var1)(var4);
                    var8 = var9.open;
                    var4 = {};
                    var10 = 'ADDED_TO_FAVORITES';
                    var4['key'] = var10;
                    var11 = _closure1_slot0;
                    var10 = 5;
                    var13 = var12[var10];
                    var13 = var11.bind(var1)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var10 = var12[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.okQonp;
                    var10 = var13.bind(var14)(var10);
                    var4['content'] = var10;
                    var10 = 6;
                    var10 = var12[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.GifIcon;
                    var4['IconComponent'] = var10;
                    var4 = var8.bind(var9)(var4);
                    _fun0002_ip = 396; continue _fun0002;
 269:
                    var4 = var5.removeFavoriteGIF;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var2 = var7[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var5 = 'REMOVED_FROM_FAVORITES';
                    var2['key'] = var5;
                    var5 = 5;
                    var8 = var7[var5];
                    var8 = var6.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.in1rgY;
                    var5 = var8.bind(var9)(var5);
                    var2['content'] = var5;
                    var5 = 6;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.GifIcon;
                    var2['IconComponent'] = var5;
                    var2 = var3.bind(var4)(var2);
 396:
                    return var1;
                }
            };
            var7 = var9.bind(var11)(var3, var7);
            var3 = 8;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isAnimatedImageSource;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0001_ip = 234; continue _fun0001 }
 220:
            var2 = var2.isGIFV;
            var1 = null;
            if(!var2) { _fun0001_ip = 475; continue _fun0001 }
 234:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.MediaOverlayIconButton;
            var2 = {};
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 5;
            var11 = var13[var8];
            var11 = var9.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var13[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.t;
            if(var6) { _fun0001_ip = 326; continue _fun0001 }
 313:
            var8 = var9.nIH0v7;
            var8 = var11.bind(var12)(var8);
            _fun0001_ip = 337; continue _fun0001;
 326:
            var9 = var9.5/NS7+;
            var8 = var11.bind(var12)(var9);
 337:
            var2['accessibilityLabel'] = var8;
            var2['onPress'] = var7;
            var9 = _closure1_slot4;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var6) { _fun0001_ip = 400; continue _fun0001 }
 360:
            var6 = 12;
            var6 = var12[var6];
            var6 = var8.bind(var5)(var6);
            var7 = var6.StarOutlineIcon;
            var6 = {'color': 'interactive-normal', 'size': 'md'};
            var6 = var9.bind(var5)(var7, var6);
            _fun0001_ip = 465; continue _fun0001;
 400:
            var7 = 10;
            var7 = var12[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.StarIcon;
            var7 = {};
            var11 = _closure1_slot1;
            var10 = 11;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.YELLOW_300;
            var7['color'] = var10;
            var10 = 'md';
            var7['size'] = var10;
            var6 = var9.bind(var5)(var8, var7);
 465:
            var2['icon'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 475:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/GIFFavButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();