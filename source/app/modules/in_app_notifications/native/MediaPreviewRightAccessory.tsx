// app/modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function VideoBadge() {
        var1 = _closure1_slot8;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = var9.videoBadge;
        var1['style'] = var5;
        var7 = _closure1_slot5;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 6;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.PlayIcon;
        var5 = {};
        var11 = 'custom';
        var5['size'] = var11;
        var9 = var9.playIcon;
        var5['style'] = var9;
        var9 = _closure1_slot1;
        var8 = 5;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.WHITE;
        var5['color'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function SinglePreviewableMedia(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.previewableMedia;
            var1 = _closure1_slot9;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 7;
            var2 = var1[var2];
            var10 = var3.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var10 = var9.bind(var10)(var8, var2);
            var12 = var6.type;
            var2 = var6.media;
            var8 = var6.icon;
            var14 = 8;
            var1 = var1[var14];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.VOICE_MESSAGE;
            if(!(var1 !== var12)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var14];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.AUDIO;
            if(!(var1 !== var12)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var14];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.FILE;
            if(!(var1 !== var12)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var14];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.IMAGE;
            if(!(var1 !== var12)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var14];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.VIDEO;
            if(!(var1 !== var12)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var14];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.GIF;
            if(!(var1 !== var12)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var14];
            var1 = var3.bind(var4)(var1);
            var1 = var1.PreviewableMediaTypes;
            var1 = var1.STICKER;
            if(!(var1 !== var12)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = null;
            return var1;
case 11:
            var6 = _closure1_slot5;
            var3 = _closure1_slot3;
            var1 = {};
            var9 = var5.mediaThumbnailContainer;
            var1['style'] = var9;
            var13 = _closure1_slot5;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 15;
            var9 = var15[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var9['sticker'] = var2;
            var15 = _closure1_slot7;
            var9['size'] = var15;
            var15 = !var10;
            var9['animated'] = var15;
            var9 = var13.bind(var4)(var11, var9);
            var1['children'] = var9;
            var1 = var6.bind(var4)(var3, var1);
            return var1;
case 9:
            var3 = var2.video;
            var1 = null;
            var6 = var1 == var3;
            var18 = undefined;
            if(var6) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var18 = var3.url;
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
            var17 = var3.url;
            _fun0001_ip = 20; continue _fun0001;
case 19:
            var17 = var3.proxyURL;
case 20:
            var9 = _closure1_slot5;
            var6 = _closure1_slot3;
            var3 = {};
            var11 = var5.mediaThumbnailContainer;
            var3['style'] = var11;
            if(!(var1 != var18)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var11 = '';
            if(!(var11 !== var18)) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            if(var10) { _fun0001_ip = 21; continue _fun0001 }
case 24:
            var13 = _closure1_slot5;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 14;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var15 = 'cover';
            var10['resizeMode'] = var15;
            var15 = _closure1_slot7;
            var10['width'] = var15;
            var15 = _closure1_slot7;
            var10['height'] = var15;
            var15 = false;
            var10['paused'] = var15;
            var16 = {};
            var16['videoURI'] = var18;
            var10['src'] = var16;
            var10['poster'] = var17;
            var10['postponeRender'] = var15;
            var10 = var13.bind(var4)(var11, var10);
            _fun0001_ip = 25; continue _fun0001;
case 21:
            var15 = _closure1_slot5;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 13;
            var11 = var16[var11];
            var13 = var13.bind(var4)(var11);
            var11 = {};
            var16 = {};
            var16['uri'] = var17;
            var11['source'] = var16;
            var16 = var5.mediaThumbnail;
            var11['style'] = var16;
            var16 = 'cover';
            var11['resizeMode'] = var16;
            var10 = var15.bind(var4)(var13, var11);
case 25:
            var3['children'] = var10;
            var3 = var9.bind(var4)(var6, var3);
            return var3;
case 15:
            return var1;
case 6:
            var1 = var2.spoiler;
            var15 = var2.width;
            var13 = var2.height;
            if(var1) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var10 = null;
            if(!(var10 != var15)) { _fun0001_ip = 26; continue _fun0001 }
case 28:
            var1 = 0;
            if(!(!(var15 <= var1))) { _fun0001_ip = 26; continue _fun0001 }
case 29:
            if(!(var10 != var13)) { _fun0001_ip = 26; continue _fun0001 }
case 30:
            if(!(!(var13 <= var1))) { _fun0001_ip = 26; continue _fun0001 }
case 31:
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var3 = var11.bind(var4)(var1);
            var1 = var3.getAttachmentUrl;
            var16 = var1.bind(var3)(var2);
            var1 = 12;
            var1 = var9[var1];
            var6 = var11.bind(var4)(var1);
            var3 = var6.getSrcWithWidthAndHeight;
            var1 = {'src': null, 'sourceWidth': null, 'sourceHeight': null, 'targetWidth': 128, 'targetHeight': 128, 'animated': false};
            var1['src'] = var16;
            var1['sourceWidth'] = var15;
            var1['sourceHeight'] = var13;
            var9 = var9[var14];
            var9 = var11.bind(var4)(var9);
            var9 = var9.PreviewableMediaTypes;
            var11 = var9.VIDEO;
            var9 = undefined;
            if(!(var12 === var11)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var9 = 'png';
case 32:
            var1['format'] = var9;
            var17 = var3.bind(var6)(var1);
            var6 = _closure1_slot6;
            var3 = _closure1_slot3;
            var1 = {};
            var9 = var5.mediaThumbnailContainer;
            var1['style'] = var9;
            var15 = _closure1_slot5;
            var13 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 13;
            var9 = var11[var9];
            var13 = var13.bind(var4)(var9);
            var9 = {};
            var16 = {};
            var16['uri'] = var17;
            var9['source'] = var16;
            var16 = var5.mediaThumbnail;
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
            var13 = _closure1_slot5;
            var12 = _closure1_slot10;
            var11 = {};
            var10 = var13.bind(var4)(var12, var11);
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
            var1 = 9;
            var1 = var9[var1];
            var9 = var3.bind(var4)(var1);
            var3 = var9.convertSecondsToClockFormat;
            var1 = global;
            var12 = var1.Math;
            var11 = var12.ceil;
            var2 = var2.duration_secs;
            var2 = var11.bind(var12)(var2);
            var3 = var3.bind(var9)(var2);
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '';
            var10 = var2.bind(var1)(var3);
case 36:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var5.iconContainer;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var6 != var10;
            var6 = null;
            if(!var8) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 10;
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
    var _closure1_slot11 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 64;
    var _closure1_slot7 = var4;
    var4 = 4;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var12 = {'position': 'absolute', 'left': 4, 'bottom': 4, 'alignItems': 'center', 'justifyContent': 'center', 'height': 14, 'width': 14};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var12['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var12['borderRadius'] = var13;
    var7['videoBadge'] = var12;
    var12 = {'width': 10, 'height': 10};
    var7['playIcon'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': 64, 'height': 64, 'borderRadius': null, 'overflow': 'hidden'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['mediaThumbnailContainer'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['mediaThumbnail'] = var9;
    var9 = {'width': 64, 'height': 64, 'alignItems': 'center', 'justifyContent': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['iconContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaPreviewRightAccessory(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.message;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.usePreviewableMedia;
            var3 = var2.bind(var3)(var5);
            var5 = var3.length;
            var2 = 0;
            if(!(var2 !== var5)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var5 = var3[var2];
            var3 = _closure1_slot5;
            var2 = _closure1_slot11;
            var1 = {};
            var1['previewableMedia'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 40:
            var1 = null;
            return var1;
        }
    };
    var3['MediaPreviewRightAccessory'] = var2;
    return var1;
})();