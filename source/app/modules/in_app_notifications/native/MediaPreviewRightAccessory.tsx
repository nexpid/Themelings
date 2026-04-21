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
            var10 = var1.message;
            var2 = _closure1_slot11;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = 8;
            var7 = var2[var7];
            var12 = var3.bind(var4)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var12 = var11.bind(var12)(var9, var7);
            var13 = var5.type;
            var9 = var5.media;
            var5 = var5.icon;
            var14 = 9;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.VOICE_MESSAGE;
            if(!(var2 !== var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.AUDIO;
            if(!(var2 !== var13)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.FILE;
            if(!(var2 !== var13)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.IMAGE;
            if(!(var2 !== var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.VIDEO;
            if(!(var2 !== var13)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.GIF;
            if(!(var2 !== var13)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var14];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.STICKER;
            if(!(var2 !== var13)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = null;
            return var2;
case 11:
            var7 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var15 = var6.mediaThumbnailContainer;
            var11 = new Array(2);
            var11[0] = var15;
            var15 = {};
            var15['width'] = var8;
            var15['height'] = var8;
            var11[1] = var15;
            var2['style'] = var11;
            var16 = _closure1_slot7;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var11 = 16;
            var11 = var17[var11];
            var15 = var15.bind(var4)(var11);
            var11 = {};
            var11['sticker'] = var9;
            var11['size'] = var8;
            var17 = !var12;
            var11['animated'] = var17;
            var11 = var16.bind(var4)(var15, var11);
            var2['children'] = var11;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 9:
            var3 = var9.video;
            var2 = null;
            var7 = var2 == var3;
            var20 = undefined;
            if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var20 = var3.url;
case 13:
            var3 = var9.thumbnail;
            if(!(var2 != var3)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 10;
            var11 = var11[var7];
            var17 = var15.bind(var4)(var11);
            var16 = var17.getEnabledHarmTypesForChannelAndAuthorId;
            var15 = var10.channel_id;
            var18 = var10.author;
            var19 = var2 == var18;
            var11 = undefined;
            if(var19) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = var18.id;
case 17:
            var16 = var16.bind(var17)(var15, var11);
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = var19[var7];
            var15 = var18.bind(var4)(var7);
            var11 = var15.getMediaObscuredReasonFromBitmask;
            var7 = {};
            var17 = 11;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.ObscuredMediaTypes;
            var17 = var17.Embed;
            var7['type'] = var17;
            var7['media'] = var9;
            var7 = var11.bind(var15)(var7, var16);
            var11 = var7.length;
            var7 = 0;
            if(!(!(var11 > var7))) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var7 = var3.proxyURL;
            if(!(var2 != var7)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var11 = var3.proxyURL;
            var7 = '';
            if(!(var7 === var11)) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var19 = var3.url;
            _fun0001_ip = 24; continue _fun0001;
case 23:
            var19 = var3.proxyURL;
case 24:
            var11 = _closure1_slot7;
            var7 = _closure1_slot5;
            var3 = {};
            var16 = var6.mediaThumbnailContainer;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = {};
            var16['width'] = var8;
            var16['height'] = var8;
            var15[1] = var16;
            var3['style'] = var15;
            if(!(var2 != var20)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var15 = '';
            if(!(var15 !== var20)) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            if(var12) { _fun0001_ip = 25; continue _fun0001 }
case 28:
            var16 = _closure1_slot7;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 15;
            var12 = var17[var12];
            var15 = var15.bind(var4)(var12);
            var12 = {};
            var17 = 'cover';
            var12['resizeMode'] = var17;
            var12['width'] = var8;
            var12['height'] = var8;
            var17 = false;
            var12['paused'] = var17;
            var18 = {};
            var18['videoURI'] = var20;
            var12['src'] = var18;
            var12['poster'] = var19;
            var12['postponeRender'] = var17;
            var12 = var16.bind(var4)(var15, var12);
            _fun0001_ip = 29; continue _fun0001;
case 25:
            var17 = _closure1_slot7;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 14;
            var15 = var18[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var18 = {};
            var18['uri'] = var19;
            var15['source'] = var18;
            var18 = var6.mediaThumbnail;
            var15['style'] = var18;
            var18 = 'cover';
            var15['resizeMode'] = var18;
            var12 = var17.bind(var4)(var16, var15);
case 29:
            var3['children'] = var12;
            var3 = var11.bind(var4)(var7, var3);
            return var3;
case 19:
            return var2;
case 15:
            return var2;
case 6:
            var2 = var9.spoiler;
            var15 = var9.width;
            var12 = var9.height;
            if(var2) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var2 = null;
            if(!(var2 != var15)) { _fun0001_ip = 30; continue _fun0001 }
case 32:
            var7 = 0;
            if(!(!(var15 <= var7))) { _fun0001_ip = 30; continue _fun0001 }
case 33:
            if(!(var2 != var12)) { _fun0001_ip = 30; continue _fun0001 }
case 34:
            if(!(!(var12 <= var7))) { _fun0001_ip = 30; continue _fun0001 }
case 35:
            var16 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 10;
            var11 = var11[var3];
            var17 = var16.bind(var4)(var11);
            var16 = var17.getEnabledHarmTypesForChannelAndAuthorId;
            var11 = var10.channel_id;
            var18 = var10.author;
            var19 = var2 == var18;
            var10 = undefined;
            if(var19) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var10 = var18.id;
case 36:
            var16 = var16.bind(var17)(var11, var10);
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = var19[var3];
            var11 = var18.bind(var4)(var3);
            var10 = var11.getMediaObscuredReasonFromBitmask;
            var3 = {};
            var17 = 11;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.ObscuredMediaTypes;
            var17 = var17.Attachment;
            var3['type'] = var17;
            var3['media'] = var9;
            var3 = var10.bind(var11)(var3, var16);
            var3 = var3.length;
            if(!(!(var3 > var7))) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 12;
            var3 = var10[var3];
            var7 = var11.bind(var4)(var3);
            var3 = var7.getAttachmentUrl;
            var16 = var3.bind(var7)(var9);
            var3 = 13;
            var3 = var10[var3];
            var9 = var11.bind(var4)(var3);
            var7 = var9.getSrcWithWidthAndHeight;
            var3 = {};
            var3['src'] = var16;
            var3['sourceWidth'] = var15;
            var3['sourceHeight'] = var12;
            var12 = 2;
            var15 = var12 * var8;
            var3['targetWidth'] = var15;
            var12 = var12 * var8;
            var3['targetHeight'] = var12;
            var12 = false;
            var3['animated'] = var12;
            var10 = var10[var14];
            var10 = var11.bind(var4)(var10);
            var10 = var10.PreviewableMediaTypes;
            var11 = var10.VIDEO;
            var10 = undefined;
            if(!(var13 === var11)) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var10 = 'png';
case 40:
            var3['format'] = var10;
            var17 = var7.bind(var9)(var3);
            var9 = _closure1_slot8;
            var7 = _closure1_slot5;
            var3 = {};
            var11 = var6.mediaThumbnailContainer;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var11['width'] = var8;
            var11['height'] = var8;
            var10[1] = var11;
            var3['style'] = var10;
            var15 = _closure1_slot7;
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var10 = 14;
            var10 = var11[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var16 = {};
            var16['uri'] = var17;
            var10['source'] = var16;
            var16 = var6.mediaThumbnail;
            var10['style'] = var16;
            var16 = 'cover';
            var10['resizeMode'] = var16;
            var12 = var15.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = _closure1_slot0;
            var11 = var11[var14];
            var11 = var12.bind(var4)(var11);
            var11 = var11.PreviewableMediaTypes;
            var12 = var11.VIDEO;
            var11 = null;
            if(!(var13 === var12)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var14 = _closure1_slot7;
            var13 = _closure1_slot13;
            var12 = {};
            var11 = var14.bind(var4)(var13, var12);
case 42:
            var10[1] = var11;
            var3['children'] = var10;
            var3 = var9.bind(var4)(var7, var3);
            return var3;
case 38:
            return var2;
case 30:
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
        var14 = var1.previewableMedia;
        var9 = var1.totalMediaCount;
        var13 = var1.message;
        var1 = _closure1_slot12;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var7 = _closure1_slot3;
        var3 = var7.useMemo;
        var2 = function() {
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 17;
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
            var5 = 18;
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
        var5 = 18;
        var5 = var10[var5];
        var7 = var7.bind(var4)(var5);
        var5 = {};
        var10 = new Array(1);
        var10[0] = var11;
        var5['cutouts'] = var10;
        var12 = _closure1_slot7;
        var11 = _closure1_slot15;
        var10 = {};
        var10['previewableMedia'] = var14;
        var14 = 56;
        var10['size'] = var14;
        var10['message'] = var13;
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
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaPreviewRightAccessory(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.message;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.usePreviewableMedia;
            var3 = var1.bind(var3)(var6);
            var8 = var3.length;
            var1 = 0;
            if(!(var1 !== var8)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var7 = var3[var1];
            var1 = 1;
            if(!(var1 !== var8)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var4 = _closure1_slot7;
            var3 = _closure1_slot16;
            var1 = {};
            var1['previewableMedia'] = var7;
            var1['totalMediaCount'] = var8;
            var1['message'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 48; continue _fun0002;
case 46:
            var4 = _closure1_slot7;
            var3 = _closure1_slot15;
            var2 = {};
            var2['previewableMedia'] = var7;
            var7 = 64;
            var2['size'] = var7;
            var2['message'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 48:
            return var1;
case 44:
            var1 = null;
            return var1;
        }
    };
    var3['MediaPreviewRightAccessory'] = var2;
    return var1;
})();