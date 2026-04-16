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
            var6 = var1.previewableMedia;
            var11 = var1.size;
            var1 = _closure1_slot11;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 8;
            var2 = var1[var2];
            var10 = var3.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var10 = var9.bind(var10)(var8, var2);
            var13 = var6.type;
            var2 = var6.media;
            var8 = var6.icon;
            var15 = 9;
            var1 = var1[var15];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.VOICE_MESSAGE;
            if(!(var1 !== var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var15];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.AUDIO;
            if(!(var1 !== var13)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var15];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.FILE;
            if(!(var1 !== var13)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var15];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.IMAGE;
            if(!(var1 !== var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var15];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.VIDEO;
            if(!(var1 !== var13)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var15];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.GIF;
            if(!(var1 !== var13)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var15];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.STICKER;
            if(!(var1 !== var13)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = null;
            return var1;
case 11:
            var6 = _closure1_slot7;
            var3 = _closure1_slot5;
            var1 = {};
            var12 = var5.mediaThumbnailContainer;
            var9 = new Array(2);
            var9[0] = var12;
            var12 = {};
            var12['width'] = var11;
            var12['height'] = var11;
            var9[1] = var12;
            var1['style'] = var9;
            var14 = _closure1_slot7;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 15;
            var9 = var16[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var9['sticker'] = var2;
            var9['size'] = var11;
            var16 = !var10;
            var9['animated'] = var16;
            var9 = var14.bind(var4)(var12, var9);
            var1['children'] = var9;
            var1 = var6.bind(var4)(var3, var1);
            return var1;
case 9:
            var3 = var2.video;
            var1 = null;
            var6 = var1 == var3;
            var19 = undefined;
            if(var6) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var19 = var3.url;
case 13:
            var3 = var2.thumbnail;
            if(!(var1 != var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = var3.proxyURL;
            if(!(var1 != var6)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var9 = var3.proxyURL;
            var6 = '';
            if(!(var6 === var9)) { _fun0001_ip = 19; continue _fun0001 }
case 17:
            var18 = var3.url;
            _fun0001_ip = 20; continue _fun0001;
case 19:
            var18 = var3.proxyURL;
case 20:
            var9 = _closure1_slot7;
            var6 = _closure1_slot5;
            var3 = {};
            var14 = var5.mediaThumbnailContainer;
            var12 = new Array(2);
            var12[0] = var14;
            var14 = {};
            var14['width'] = var11;
            var14['height'] = var11;
            var12[1] = var14;
            var3['style'] = var12;
            if(!(var1 != var19)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = '';
            if(!(var12 !== var19)) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            if(var10) { _fun0001_ip = 21; continue _fun0001 }
case 24:
            var14 = _closure1_slot7;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 14;
            var10 = var16[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var16 = 'cover';
            var10['resizeMode'] = var16;
            var10['width'] = var11;
            var10['height'] = var11;
            var16 = false;
            var10['paused'] = var16;
            var17 = {};
            var17['videoURI'] = var19;
            var10['src'] = var17;
            var10['poster'] = var18;
            var10['postponeRender'] = var16;
            var10 = var14.bind(var4)(var12, var10);
            _fun0001_ip = 25; continue _fun0001;
case 21:
            var16 = _closure1_slot7;
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 13;
            var12 = var17[var12];
            var14 = var14.bind(var4)(var12);
            var12 = {};
            var17 = {};
            var17['uri'] = var18;
            var12['source'] = var17;
            var17 = var5.mediaThumbnail;
            var12['style'] = var17;
            var17 = 'cover';
            var12['resizeMode'] = var17;
            var10 = var16.bind(var4)(var14, var12);
case 25:
            var3['children'] = var10;
            var3 = var9.bind(var4)(var6, var3);
            return var3;
case 15:
            return var1;
case 6:
            var1 = var2.spoiler;
            var16 = var2.width;
            var14 = var2.height;
            if(var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = null;
            if(!(var10 != var16)) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var1 = 0;
            if(!(!(var16 <= var1))) { _fun0001_ip = 26; continue _fun0001 }
case 29:
            if(!(var10 != var14)) { _fun0001_ip = 26; continue _fun0001 }
case 30:
            if(!(!(var14 <= var1))) { _fun0001_ip = 26; continue _fun0001 }
case 31:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var3 = var12.bind(var4)(var1);
            var1 = var3.getAttachmentUrl;
            var17 = var1.bind(var3)(var2);
            var1 = 12;
            var1 = var9[var1];
            var6 = var12.bind(var4)(var1);
            var3 = var6.getSrcWithWidthAndHeight;
            var1 = {};
            var1['src'] = var17;
            var1['sourceWidth'] = var16;
            var1['sourceHeight'] = var14;
            var14 = 2;
            var16 = var14 * var11;
            var1['targetWidth'] = var16;
            var14 = var14 * var11;
            var1['targetHeight'] = var14;
            var14 = false;
            var1['animated'] = var14;
            var9 = var9[var15];
            var9 = var12.bind(var4)(var9);
            var9 = var9.PreviewableMediaTypes;
            var12 = var9.VIDEO;
            var9 = undefined;
            if(!(var13 === var12)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var9 = 'png';
case 32:
            var1['format'] = var9;
            var18 = var3.bind(var6)(var1);
            var6 = _closure1_slot8;
            var3 = _closure1_slot5;
            var1 = {};
            var12 = var5.mediaThumbnailContainer;
            var9 = new Array(2);
            var9[0] = var12;
            var12 = {};
            var12['width'] = var11;
            var12['height'] = var11;
            var9[1] = var12;
            var1['style'] = var9;
            var16 = _closure1_slot7;
            var14 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 13;
            var9 = var12[var9];
            var14 = var14.bind(var4)(var9);
            var9 = {};
            var17 = {};
            var17['uri'] = var18;
            var9['source'] = var17;
            var17 = var5.mediaThumbnail;
            var9['style'] = var17;
            var17 = 'cover';
            var9['resizeMode'] = var17;
            var14 = var16.bind(var4)(var14, var9);
            var9 = new Array(2);
            var9[0] = var14;
            var14 = _closure1_slot0;
            var12 = var12[var15];
            var12 = var14.bind(var4)(var12);
            var12 = var12.PreviewableMediaTypes;
            var12 = var12.VIDEO;
            var10 = null;
            if(!(var13 === var12)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var14 = _closure1_slot7;
            var13 = _closure1_slot13;
            var12 = {};
            var10 = var14.bind(var4)(var13, var12);
case 34:
            var9[1] = var10;
            var1['children'] = var9;
            var1 = var6.bind(var4)(var3, var1);
            return var1;
case 26:
            var1 = null;
            return var1;
case 2:
            var1 = var2.duration_secs;
            var6 = null;
            var1 = var6 != var1;
            var10 = null;
            if(!var1) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var9 = var3.bind(var4)(var1);
            var3 = var9.convertSecondsToClockFormat;
            var1 = global;
            var13 = var1.Math;
            var12 = var13.ceil;
            var2 = var2.duration_secs;
            var2 = var12.bind(var13)(var2);
            var3 = var3.bind(var9)(var2);
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '';
            var10 = var2.bind(var1)(var3);
case 36:
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var9 = var5.iconContainer;
            var5 = new Array(2);
            var5[0] = var9;
            var9 = {};
            var9['width'] = var11;
            var9['height'] = var11;
            var5[1] = var9;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var6 != var10;
            var6 = null;
            if(!var8) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 7;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-xs/medium', 'color': 'text-default'};
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 38:
            var5[1] = var6;
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
            var1 = 16;
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
            var5 = 17;
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
        var5 = 17;
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
    var4 = 18;
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
            if(!(var1 !== var7)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var6 = var3[var1];
            var1 = 1;
            if(!(var1 !== var7)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var4 = _closure1_slot7;
            var3 = _closure1_slot16;
            var1 = {};
            var1['previewableMedia'] = var6;
            var1['totalMediaCount'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 44; continue _fun0002;
case 42:
            var4 = _closure1_slot7;
            var3 = _closure1_slot15;
            var2 = {};
            var2['previewableMedia'] = var6;
            var6 = 64;
            var2['size'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 44:
            return var1;
case 40:
            var1 = null;
            return var1;
        }
    };
    var3['MediaPreviewRightAccessory'] = var2;
    return var1;
})();