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
case 0:
            var1 = arg1;
            var2 = var1.source;
            var _closure2_slot0 = var2;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var1 = var2.isGIFV;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = var2.sourceURI;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var12 = var2.embedURI;
case 4:
            var1 = null;
            if(!(var1 == var12)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var12 = var2.uri;
case 5:
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
            var7 = new Array(8);
            var7[0] = var6;
            var13 = var2.embedProviderName;
            var7[1] = var13;
            var13 = var2.height;
            var7[2] = var13;
            var13 = var2.isGIFV;
            var7[3] = var13;
            var13 = var2.thumbnail;
            var7[4] = var13;
            var13 = var2.uri;
            var7[5] = var13;
            var13 = var2.width;
            var7[6] = var13;
            var7[7] = var12;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = 7;
                    var3 = var7[var3];
                    var10 = undefined;
                    var5 = var6.bind(var10)(var3);
                    var4 = var5.getGIFThumbnailForFavorite;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var9 = var8.embedProviderName;
                    var3['providerName'] = var9;
                    var9 = var8.thumbnail;
                    var3['thumbnail'] = var9;
                    var9 = var4.bind(var5)(var3);
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = var6.bind(var10)(var3);
                    var4 = var5.addFavoriteGIF;
                    var3 = {};
                    var11 = _closure2_slot1;
                    var3['url'] = var11;
                    var11 = var8.uri;
                    var3['src'] = var11;
                    var3['gifSrc'] = var9;
                    var9 = var8.width;
                    var3['width'] = var9;
                    var9 = var8.height;
                    var3['height'] = var9;
                    var8 = var8.isGIFV;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 8;
                    var9 = var12[var9];
                    var9 = var11.bind(var10)(var9);
                    var9 = var9.GIFType;
                    if(var8) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var8 = var9.IMAGE;
                    _fun0002_ip = 11; continue _fun0002;
case 9:
                    var8 = var9.VIDEO;
case 11:
                    var3['format'] = var8;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 4;
                    var3 = var11[var3];
                    var5 = var4.bind(var10)(var3);
                    var4 = var5.open;
                    var3 = {};
                    var8 = 'ADDED_TO_FAVORITES';
                    var3['key'] = var8;
                    var9 = _closure1_slot0;
                    var8 = 5;
                    var12 = var11[var8];
                    var12 = var9.bind(var10)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var8 = var11[var8];
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.t;
                    var8 = var8.okQonm;
                    var8 = var12.bind(var13)(var8);
                    var3['content'] = var8;
                    var8 = 6;
                    var8 = var11[var8];
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.GifIcon;
                    var3['IconComponent'] = var8;
                    var3 = var4.bind(var5)(var3);
                    _fun0002_ip = 12; continue _fun0002;
case 7:
                    var3 = 3;
                    var3 = var7[var3];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var3);
                    var3 = var4.removeFavoriteGIF;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var1 = var7[var1];
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var4 = 'REMOVED_FROM_FAVORITES';
                    var1['key'] = var4;
                    var4 = 5;
                    var8 = var7[var4];
                    var8 = var6.bind(var5)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.t;
                    var4 = var4.in1rga;
                    var4 = var8.bind(var9)(var4);
                    var1['content'] = var4;
                    var4 = 6;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.GifIcon;
                    var1['IconComponent'] = var4;
                    var1 = var2.bind(var3)(var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var9.bind(var11)(var3, var7);
            var3 = 9;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isAnimatedImageSource;
            var3 = var3.bind(var4)(var2);
            if(var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var2.isGIFV;
            var1 = null;
            if(!var2) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
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
            if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var9.nIH0v8;
            var8 = var11.bind(var12)(var8);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var9 = var9.5/NS74;
            var8 = var11.bind(var12)(var9);
case 18:
            var2['accessibilityLabel'] = var8;
            var2['onPress'] = var7;
            var9 = _closure1_slot4;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var6 = 13;
            var6 = var12[var6];
            var6 = var8.bind(var5)(var6);
            var7 = var6.StarOutlineIcon;
            var6 = {'color': 'interactive-text-default', 'size': 'md'};
            var6 = var9.bind(var5)(var7, var6);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var7 = 11;
            var7 = var12[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.StarIcon;
            var7 = {};
            var11 = _closure1_slot1;
            var10 = 12;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.YELLOW_300;
            var7['color'] = var10;
            var10 = 'md';
            var7['size'] = var10;
            var6 = var9.bind(var5)(var8, var7);
case 21:
            var2['icon'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/GIFFavButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();