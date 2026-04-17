// app/modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function VideoBadge() {
        var1 = _closure1_slot9;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var8.badge;
        var1['style'] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 6;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.PlayIcon;
        var5 = {'style': null, 'size': 'custom', 'color': 'white'};
        var8 = var8.icon;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function CountBadge(arg1) {
        var1 = arg1;
        var8 = var1.total;
        var1 = _closure1_slot10;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.badge;
        var1['style'] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 7;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-xs/semibold', 'color': 'text-default'};
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function SinglePreviewableMedia(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.previewableMedia;
            var8 = var1.size;
            var2 = _closure1_slot11;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 8;
            var7 = var2[var7];
            var11 = var3.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var10.bind(var11)(var9, var7);
            var12 = var5.type;
            var7 = var5.media;
            var5 = var5.icon;
            var14 = 9;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.VOICE_MESSAGE;
            if(!(var2 !== var12)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.AUDIO;
            if(!(var2 !== var12)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.FILE;
            if(!(var2 !== var12)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.IMAGE;
            if(!(var2 !== var12)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.VIDEO;
            if(!(var2 !== var12)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.GIF;
            if(!(var2 !== var12)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.STICKER;
            if(!(var2 !== var12)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = null;
            return var2;
case 11:
            var9 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var13 = var6.mediaThumbnailContainer;
            var10 = new Array(2);
            var10[0] = var13;
            var13 = {};
            var13['width'] = var8;
            var13['height'] = var8;
            var10[1] = var13;
            var2['style'] = var10;
            var15 = _closure1_slot7;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 14;
            var10 = var16[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var10['sticker'] = var7;
            var10['size'] = var8;
            var16 = !var11;
            var10['animated'] = var16;
            var10 = var15.bind(var4)(var13, var10);
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            return var2;
case 9:
            var3 = var7.video;
            var2 = null;
            var9 = var2 == var3;
            var19 = undefined;
            if(var9) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var19 = var3.url;
case 13:
            var3 = var7.thumbnail;
            if(!(var2 != var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = var3.proxyURL;
            if(!(var2 != var9)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var10 = var3.proxyURL;
            var9 = '';
            if(!(var9 === var10)) { _fun0001_ip = 19; continue _fun0001 }
case 17:
            var18 = var3.url;
            _fun0001_ip = 20; continue _fun0001;
case 19:
            var18 = var3.proxyURL;
case 20:
            var10 = _closure1_slot7;
            var9 = _closure1_slot5;
            var3 = {};
            var15 = var6.mediaThumbnailContainer;
            var13 = new Array(2);
            var13[0] = var15;
            var15 = {};
            var15['width'] = var8;
            var15['height'] = var8;
            var13[1] = var15;
            var3['style'] = var13;
            if(!(var2 != var19)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var13 = '';
            if(!(var13 !== var19)) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            if(var11) { _fun0001_ip = 21; continue _fun0001 }
case 24:
            var15 = _closure1_slot7;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 13;
            var11 = var16[var11];
            var13 = var13.bind(var4)(var11);
            var11 = {};
            var16 = 'cover';
            var11['resizeMode'] = var16;
            var11['width'] = var8;
            var11['height'] = var8;
            var16 = false;
            var11['paused'] = var16;
            var17 = {};
            var17['videoURI'] = var19;
            var11['src'] = var17;
            var11['poster'] = var18;
            var11['postponeRender'] = var16;
            var11 = var15.bind(var4)(var13, var11);
            _fun0001_ip = 25; continue _fun0001;
case 21:
            var16 = _closure1_slot7;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 12;
            var13 = var17[var13];
            var15 = var15.bind(var4)(var13);
            var13 = {};
            var17 = {};
            var17['uri'] = var18;
            var13['source'] = var17;
            var17 = var6.mediaThumbnail;
            var13['style'] = var17;
            var17 = 'cover';
            var13['resizeMode'] = var17;
            var11 = var16.bind(var4)(var15, var13);
case 25:
            var3['children'] = var11;
            var3 = var10.bind(var4)(var9, var3);
            return var3;
case 15:
            return var2;
case 6:
            var2 = var7.spoiler;
            var15 = var7.width;
            var13 = var7.height;
            if(var2) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = null;
            if(!(var10 != var15)) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var2 = 0;
            if(!(!(var15 <= var2))) { _fun0001_ip = 26; continue _fun0001 }
case 29:
            if(!(var10 != var13)) { _fun0001_ip = 26; continue _fun0001 }
case 30:
            if(!(!(var13 <= var2))) { _fun0001_ip = 26; continue _fun0001 }
case 31:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var3.getAttachmentUrl;
            var16 = var2.bind(var3)(var7);
            var2 = 11;
            var2 = var9[var2];
            var7 = var11.bind(var4)(var2);
            var3 = var7.getSrcWithWidthAndHeight;
            var2 = {};
            var2['src'] = var16;
            var2['sourceWidth'] = var15;
            var2['sourceHeight'] = var13;
            var13 = 2;
            var15 = var13 * var8;
            var2['targetWidth'] = var15;
            var13 = var13 * var8;
            var2['targetHeight'] = var13;
            var13 = false;
            var2['animated'] = var13;
            var9 = var9[var14];
            var9 = var11.bind(var4)(var9);
            var9 = var9.PreviewableMediaTypes;
            var11 = var9.VIDEO;
            var9 = undefined;
            if(!(var12 === var11)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var9 = 'png';
case 32:
            var2['format'] = var9;
            var17 = var3.bind(var7)(var2);
            var7 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var11 = var6.mediaThumbnailContainer;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var11['width'] = var8;
            var11['height'] = var8;
            var9[1] = var11;
            var2['style'] = var9;
            var15 = _closure1_slot7;
            var13 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 12;
            var9 = var11[var9];
            var13 = var13.bind(var4)(var9);
            var9 = {};
            var16 = {};
            var16['uri'] = var17;
            var9['source'] = var16;
            var16 = var6.mediaThumbnail;
            var9['style'] = var16;
            var16 = 'cover';
            var9['resizeMode'] = var16;
            var13 = var15.bind(var4)(var13, var9);
            var9 = new Array(2);
            var9[0] = var13;
            var13 = _closure1_slot0;
            var11 = var11[var14];
            var11 = var13.bind(var4)(var11);
            var11 = var11.PreviewableMediaTypes;
            var11 = var11.VIDEO;
            var10 = null;
            if(!(var12 === var11)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var13 = _closure1_slot7;
            var12 = _closure1_slot13;
            var11 = {};
            var10 = var13.bind(var4)(var12, var11);
case 34:
            var9[1] = var10;
            var2['children'] = var9;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 26:
            var2 = null;
            return var2;
case 2:
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var6.iconContainer;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var7['width'] = var8;
            var7['height'] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function MultiplePreviewableMedia(arg1) {
        var1 = arg1;
        var13 = var1.previewableMedia;
        var9 = var1.totalMediaCount;
        var1 = _closure1_slot12;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var7 = _closure1_slot3;
        var3 = var7.useMemo;
        var2 = function() {
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var1 = var8[var1];
            var6 = undefined;
            var1 = var7.bind(var6)(var1);
            var3 = var1.BADGE_PADDING;
            var1 = 5;
            var4 = var3 + var1;
            var9 = _closure1_slot4;
            var5 = var9.roundToNearestPixel;
            var1 = 2;
            var10 = var1 * var3;
            var3 = 20;
            var3 = var3 + var10;
            var3 = var5.bind(var9)(var3);
            var5 = _closure1_slot4;
            var2 = var5.roundToNearestPixel;
            var1 = var3 / var1;
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var5 = 16;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.CutoutShape;
            var5 = var5.RoundedRect;
            var1['shape'] = var5;
            var5 = 56;
            var5 = var5 - var3;
            var5 = var5 + var4;
            var1['x'] = var5;
            var4 = -var4;
            var1['y'] = var4;
            var1['width'] = var3;
            var1['height'] = var3;
            var1['cornerRadius'] = var2;
            return var1;
        };
        var1 = new Array(0);
        var11 = var3.bind(var7)(var2, var1);
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var5.container;
        var1['style'] = var5;
        var8 = _closure1_slot7;
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var5 = 16;
        var5 = var10[var5];
        var7 = var7.bind(var4)(var5);
        var5 = {};
        var10 = new Array(1);
        var10[0] = var11;
        var5['cutouts'] = var10;
        var12 = _closure1_slot7;
        var11 = _closure1_slot15;
        var10 = {};
        var10['previewableMedia'] = var13;
        var13 = 56;
        var10['size'] = var13;
        var10 = var12.bind(var4)(var11, var10);
        var5['children'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot7;
        var7 = _closure1_slot14;
        var6 = {};
        var6['total'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PixelRatio;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'borderRadius': null, 'width': 16, 'height': 16, 'position': 'absolute', 'bottom': 4, 'left': 4};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var10['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10['borderRadius'] = var13;
    var7['badge'] = var10;
    var10 = {'width': 10, 'height': 10};
    var7['icon'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'width': 20, 'height': 20, 'backgroundColor': null, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'position': 'absolute', 'right': 4294967291, 'top': 4294967291};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var7['badge'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderRadius'] = var13;
    var13 = 'hidden';
    var10['overflow'] = var13;
    var7['mediaThumbnailContainer'] = var10;
    var10 = {'width': '100%', 'height': '100%'};
    var7['mediaThumbnail'] = var10;
    var10 = {'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderRadius'] = var11;
    var7['iconContainer'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot11 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'visible';
    var9['overflow'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaPreviewRightAccessory(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.message;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.usePreviewableMedia;
            var3 = var1.bind(var3)(var4);
            var7 = var3.length;
            var1 = 0;
            if(!(var1 !== var7)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var6 = var3[var1];
            var1 = 1;
            if(!(var1 !== var7)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var4 = _closure1_slot7;
            var3 = _closure1_slot16;
            var1 = {};
            var1['previewableMedia'] = var6;
            var1['totalMediaCount'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 40; continue _fun0002;
case 38:
            var4 = _closure1_slot7;
            var3 = _closure1_slot15;
            var2 = {};
            var2['previewableMedia'] = var6;
            var6 = 64;
            var2['size'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 40:
            return var1;
case 36:
            var1 = null;
            return var1;
        }
    };
    var3['MediaPreviewRightAccessory'] = var2;
    return var1;
})();