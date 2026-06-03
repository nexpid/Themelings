// app/modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function VideoBadge() {
        var1 = _closure1_slot12;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var2 = _closure1_slot6;
        var1 = {};
        var6 = var8.badge;
        var1['style'] = var6;
        var7 = _closure1_slot9;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 7;
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
    var _closure1_slot16 = var1;
    var1 = function CountBadge(arg1) {
        var1 = arg1;
        var8 = var1.total;
        var1 = _closure1_slot13;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var2 = _closure1_slot6;
        var1 = {};
        var6 = var6.badge;
        var1['style'] = var6;
        var7 = _closure1_slot9;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 8;
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
    var _closure1_slot17 = var1;
    var1 = function ObscuredMediaOverlay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var9 = var2.isObscured;
            var1 = var2.isSpoiler;
            var6 = var2.children;
            var2 = _closure1_slot14;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useToken;
            var7 = _closure1_slot1;
            var2 = 6;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.colors;
            var2 = var2.SPOILER_HIDDEN_BACKGROUND;
            var12 = var3.bind(var5)(var2);
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            return var6;
case 2:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            var14 = 'light';
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var14 = 'dark';
case 5:
            var3 = _closure1_slot11;
            var2 = _closure1_slot10;
            var1 = {};
            var5 = new Array(4);
            var5[0] = var6;
            var6 = var9;
            if(!var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = _closure1_slot9;
            var8 = _closure1_slot6;
            var7 = {};
            var15 = var13.obscureBackground;
            var7['style'] = var15;
            var6 = var11.bind(var4)(var8, var7);
case 7:
            var5[1] = var6;
            var6 = !var9;
            if(!var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = _closure1_slot9;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 11;
            var7 = var15[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['blurTheme'] = var14;
            var7['android_fallbackColor'] = var12;
            var12 = _closure1_slot5;
            var12 = var12.absoluteFill;
            var7['style'] = var12;
            var6 = var11.bind(var4)(var8, var7);
case 9:
            var5[2] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot6;
            var6 = {};
            var11 = var13.spoilerIconContainer;
            var6['style'] = var11;
            var12 = _closure1_slot9;
            if(var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var11 = _closure1_slot6;
            var9 = {};
            var13 = var13.spoilerPill;
            var9['style'] = var13;
            var15 = _closure1_slot9;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 13;
            var13 = var16[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.EyeIcon;
            var13 = {'size': 'sm', 'color': 'white'};
            var13 = var15.bind(var4)(var14, var13);
            var9['children'] = var13;
            var9 = var12.bind(var4)(var11, var9);
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 12;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.ImageWarningIcon;
            var10 = {'size': 'sm', 'color': 'white'};
            var9 = var12.bind(var4)(var11, var10);
case 13:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function SinglePreviewableMedia(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.previewableMedia;
            var7 = var1.size;
            var10 = var1.message;
            var2 = _closure1_slot14;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 14;
            var6 = var2[var6];
            var12 = var3.bind(var4)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var1 = _closure1_slot7;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var14 = var11.bind(var12)(var9, var6);
            var16 = var5.type;
            var9 = var5.media;
            var5 = var5.icon;
            var6 = 15;
            var6 = var2[var6];
            var11 = var3.bind(var4)(var6);
            var6 = var11.useShouldAgeVerifyForExplicitMedia;
            var15 = var6.bind(var11)();
            var6 = 16;
            var6 = var2[var6];
            var11 = var3.bind(var4)(var6);
            var6 = var11.useEnabledHarmTypesBitmaskForMessage;
            var18 = var6.bind(var11)(var10);
            var6 = 17;
            var6 = var2[var6];
            var11 = var3.bind(var4)(var6);
            var6 = var11.useRnvHttpEngine;
            var21 = var6.bind(var11)();
            var17 = 18;
            var2 = var2[var17];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.VOICE_MESSAGE;
            if(!(var2 !== var16)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var17];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.AUDIO;
            if(!(var2 !== var16)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var17];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.FILE;
            if(!(var2 !== var16)) { _fun0002_ip = 16; continue _fun0002 }
case 18:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var17];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.IMAGE;
            if(!(var2 !== var16)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var17];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.VIDEO;
            if(!(var2 !== var16)) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var17];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.GIF;
            if(!(var2 !== var16)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var17];
            var2 = var3.bind(var4)(var2);
            var2 = var2.PreviewableMediaTypes;
            var2 = var2.STICKER;
            if(!(var2 !== var16)) { _fun0002_ip = 24; continue _fun0002 }
case 13:
            var2 = null;
            return var2;
case 24:
            var6 = _closure1_slot9;
            var3 = _closure1_slot6;
            var2 = {};
            var12 = var8.mediaThumbnailContainer;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var12['width'] = var7;
            var12['height'] = var7;
            var11[1] = var12;
            var2['style'] = var11;
            var13 = _closure1_slot9;
            var12 = _closure1_slot1;
            var19 = _closure1_slot2;
            var11 = 26;
            var11 = var19[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['sticker'] = var9;
            var11['size'] = var7;
            var19 = !var14;
            var11['animated'] = var19;
            var11 = var13.bind(var4)(var12, var11);
            var2['children'] = var11;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 22:
            var3 = var9.video;
            var2 = null;
            var6 = var2 == var3;
            var25 = undefined;
            if(var6) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var25 = var3.url;
case 25:
            var3 = var9.thumbnail;
            if(!(var2 != var3)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 23;
            var11 = var11[var6];
            var13 = var12.bind(var4)(var11);
            var12 = var13.getEnabledHarmTypesForChannelAndAuthorId;
            var11 = var10.channel_id;
            var19 = var10.author;
            var20 = var2 == var19;
            var10 = undefined;
            if(var20) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var10 = var19.id;
case 29:
            var12 = var12.bind(var13)(var11, var10);
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var6 = var20[var6];
            var11 = var19.bind(var4)(var6);
            var10 = var11.getMediaObscuredReasonFromBitmask;
            var6 = {};
            var13 = 24;
            var13 = var20[var13];
            var13 = var19.bind(var4)(var13);
            var13 = var13.ObscuredMediaTypes;
            var13 = var13.Embed;
            var6['type'] = var13;
            var6['media'] = var9;
            var6 = var10.bind(var11)(var6, var12);
            var10 = var6.length;
            var6 = 0;
            var22 = var10 > var6;
            var12 = var9.url;
            var10 = var2 == var12;
            var6 = undefined;
            if(var10) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var11 = var12.split;
            var10 = '/';
            var11 = var11.bind(var12)(var10);
            var10 = var11.pop;
            var6 = var10.bind(var11)();
case 31:
            var10 = var2 != var6;
            var19 = '';
            var11 = var19;
            if(!var10) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var11 = var6;
case 33:
            var10 = var11.startsWith;
            var6 = _closure1_slot8;
            var20 = var10.bind(var11)(var6);
            var6 = var3.proxyURL;
            if(!(var2 != var6)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var6 = var3.proxyURL;
            if(!(var19 === var6)) { _fun0002_ip = 37; continue _fun0002 }
case 35:
            var23 = var3.url;
            _fun0002_ip = 38; continue _fun0002;
case 37:
            var23 = var3.proxyURL;
case 38:
            var10 = _closure1_slot9;
            var6 = _closure1_slot6;
            var3 = {};
            var12 = var8.mediaThumbnailContainer;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var12['width'] = var7;
            var12['height'] = var7;
            var11[1] = var12;
            var3['style'] = var11;
            var13 = _closure1_slot9;
            var12 = _closure1_slot18;
            var11 = {};
            var11['isObscured'] = var22;
            var11['isSpoiler'] = var20;
            if(!(var2 != var25)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            if(!(var19 !== var25)) { _fun0002_ip = 39; continue _fun0002 }
case 41:
            if(var14) { _fun0002_ip = 39; continue _fun0002 }
case 42:
            var20 = _closure1_slot9;
            var19 = _closure1_slot1;
            var22 = _closure1_slot2;
            var14 = 25;
            var14 = var22[var14];
            var19 = var19.bind(var4)(var14);
            var14 = {};
            var22 = 'cover';
            var14['resizeMode'] = var22;
            var14['width'] = var7;
            var14['height'] = var7;
            var22 = false;
            var14['paused'] = var22;
            var24 = {};
            var24['videoURI'] = var25;
            var14['src'] = var24;
            var14['poster'] = var23;
            var14['postponeRender'] = var22;
            var14['httpEngine'] = var21;
            var14 = var20.bind(var4)(var19, var14);
            _fun0002_ip = 43; continue _fun0002;
case 39:
            var21 = _closure1_slot9;
            var20 = _closure1_slot1;
            var22 = _closure1_slot2;
            var19 = 22;
            var19 = var22[var19];
            var20 = var20.bind(var4)(var19);
            var19 = {};
            var22 = {};
            var22['uri'] = var23;
            var19['source'] = var22;
            var22 = var8.mediaThumbnail;
            var19['style'] = var22;
            var22 = 'cover';
            var19['resizeMode'] = var22;
            var14 = var21.bind(var4)(var20, var19);
case 43:
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var3['children'] = var11;
            var3 = var10.bind(var4)(var6, var3);
            return var3;
case 27:
            return var2;
case 19:
            var14 = var9.width;
            var12 = var9.height;
            var2 = null;
            if(!(var2 != var14)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var3 = 0;
            if(!(!(var14 <= var3))) { _fun0002_ip = 44; continue _fun0002 }
case 46:
            if(!(var2 != var12)) { _fun0002_ip = 44; continue _fun0002 }
case 47:
            if(!(!(var12 <= var3))) { _fun0002_ip = 44; continue _fun0002 }
case 48:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 19;
            var3 = var10[var3];
            var13 = var11.bind(var4)(var3);
            var6 = var13.getAttachmentObscurityProps;
            var3 = {};
            var3['attachment'] = var9;
            var19 = true;
            var3['shouldObscureSpoiler'] = var19;
            var3['enabledContentHarmTypeFlags'] = var18;
            var3['shouldAgeVerify'] = var15;
            var13 = var6.bind(var13)(var3);
            var3 = 20;
            var3 = var10[var3];
            var6 = var11.bind(var4)(var3);
            var3 = var6.getAttachmentUrl;
            var15 = var3.bind(var6)(var9);
            var3 = 21;
            var3 = var10[var3];
            var9 = var11.bind(var4)(var3);
            var6 = var9.getSrcWithWidthAndHeight;
            var3 = {};
            var3['src'] = var15;
            var3['sourceWidth'] = var14;
            var3['sourceHeight'] = var12;
            var12 = 2;
            var14 = var12 * var7;
            var3['targetWidth'] = var14;
            var12 = var12 * var7;
            var3['targetHeight'] = var12;
            var12 = false;
            var3['animated'] = var12;
            var10 = var10[var17];
            var10 = var11.bind(var4)(var10);
            var10 = var10.PreviewableMediaTypes;
            var11 = var10.VIDEO;
            var10 = undefined;
            if(!(var16 === var11)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var10 = 'png';
case 49:
            var3['format'] = var10;
            var20 = var6.bind(var9)(var3);
            var9 = _closure1_slot9;
            var6 = _closure1_slot6;
            var3 = {};
            var11 = var8.mediaThumbnailContainer;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var11['width'] = var7;
            var11['height'] = var7;
            var10[1] = var11;
            var3['style'] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot18;
            var10 = {};
            var14 = var13.obscure;
            var10['isObscured'] = var14;
            var13 = var13.isSpoiler;
            var10['isSpoiler'] = var13;
            var18 = _closure1_slot9;
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var13 = 22;
            var13 = var14[var13];
            var15 = var15.bind(var4)(var13);
            var13 = {};
            var19 = {};
            var19['uri'] = var20;
            var13['source'] = var19;
            var19 = var8.mediaThumbnail;
            var13['style'] = var19;
            var19 = 'cover';
            var13['resizeMode'] = var19;
            var15 = var18.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var15 = _closure1_slot0;
            var14 = var14[var17];
            var14 = var15.bind(var4)(var14);
            var14 = var14.PreviewableMediaTypes;
            var15 = var14.VIDEO;
            var14 = null;
            if(!(var16 === var15)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var17 = _closure1_slot9;
            var16 = _closure1_slot16;
            var15 = {};
            var14 = var17.bind(var4)(var16, var15);
case 51:
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var3['children'] = var10;
            var3 = var9.bind(var4)(var6, var3);
            return var3;
case 44:
            return var2;
case 16:
            var6 = _closure1_slot9;
            var3 = _closure1_slot6;
            var2 = {};
            var9 = var8.iconContainer;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var9['width'] = var7;
            var9['height'] = var7;
            var8[1] = var9;
            var2['style'] = var8;
            var2['children'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 14:
            var3 = _closure1_slot9;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = {};
            var6['width'] = var7;
            var6['height'] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function MultiplePreviewableMedia(arg1) {
        var1 = arg1;
        var14 = var1.previewableMedia;
        var9 = var1.totalMediaCount;
        var13 = var1.message;
        var1 = _closure1_slot15;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var7 = _closure1_slot3;
        var3 = var7.useMemo;
        var2 = function() {
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 27;
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
            var5 = 28;
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
        var3 = _closure1_slot11;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var5.container;
        var1['style'] = var5;
        var8 = _closure1_slot9;
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var5 = 28;
        var5 = var10[var5];
        var7 = var7.bind(var4)(var5);
        var5 = {};
        var10 = new Array(1);
        var10[0] = var11;
        var5['cutouts'] = var10;
        var12 = _closure1_slot9;
        var11 = _closure1_slot19;
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
        var8 = _closure1_slot9;
        var7 = _closure1_slot17;
        var6 = {};
        var6['total'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function MediaPreviewRightAccessoryContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.previewableMedia;
            var8 = var1.totalMediaCount;
            var6 = var1.message;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 29;
            var1 = var5[var1];
            var5 = undefined;
            var7 = var4.bind(var5)(var1);
            var4 = var7.useInAppNotificationRedesign;
            var1 = 'MediaPreviewRightAccessory';
            var1 = var4.bind(var7)(var1);
            var1 = 0;
            var7 = var3[var1];
            var1 = 1;
            if(!(var1 !== var8)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var4 = _closure1_slot9;
            var3 = _closure1_slot20;
            var1 = {};
            var1['previewableMedia'] = var7;
            var1['totalMediaCount'] = var8;
            var1['message'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 55; continue _fun0003;
case 53:
            var4 = _closure1_slot9;
            var3 = _closure1_slot19;
            var2 = {};
            var2['previewableMedia'] = var7;
            var7 = 64;
            var2['size'] = var7;
            var2['message'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 55:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var14 = var4.StyleSheet;
    var _closure1_slot5 = var14;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.Fragment;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 5;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'borderRadius': null, 'width': 16, 'height': 16, 'position': 'absolute', 'bottom': 4, 'left': 4};
    var11 = 'center';
    var12 = 6;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var10['backgroundColor'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var10['borderRadius'] = var15;
    var7['badge'] = var10;
    var10 = {'width': 10, 'height': 10};
    var7['icon'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot12 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'width': 20, 'height': 20, 'backgroundColor': null, 'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center', 'position': 'absolute', 'right': 4294967291, 'top': 4294967291};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var10['borderRadius'] = var15;
    var7['badge'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot13 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var10['borderRadius'] = var15;
    var15 = 'hidden';
    var10['overflow'] = var15;
    var7['mediaThumbnailContainer'] = var10;
    var10 = {'width': '100%', 'height': '100%'};
    var7['mediaThumbnail'] = var10;
    var10 = {'alignItems': 'center', 'justifyContent': 'center'};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var10['borderRadius'] = var15;
    var7['iconContainer'] = var10;
    var10 = {};
    var18 = var14.absoluteFillObject;
    var19 = var10;
    var15 = copyDataProperties(var19, var18);
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var16 = var15.PRIMARY_500;
    var15 = 'backgroundColor';
    var10[14] = var16;
    var7['obscureBackground'] = var10;
    var10 = {};
    var18 = var14.absoluteFillObject;
    var19 = var10;
    var14 = copyDataProperties(var19, var18);
    var14 = 'justifyContent';
    var10[13] = var11;
    var14 = 'alignItems';
    var10[13] = var11;
    var7['spoilerIconContainer'] = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['padding'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10['borderRadius'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var10['backgroundColor'] = var12;
    var10['justifyContent'] = var11;
    var10['alignItems'] = var11;
    var7['spoilerPill'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot14 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'visible';
    var9['overflow'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 64;
    var3['PREVIEW_SIZE'] = var4;
    var2 = function MediaPreviewRightAccessory(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var6 = var1.message;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 18;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.usePreviewableMedia;
            var8 = var1.bind(var3)(var6);
            var7 = var8.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var7)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var4 = _closure1_slot9;
            var3 = _closure1_slot21;
            var2 = {};
            var2['previewableMedia'] = var8;
            var2['totalMediaCount'] = var7;
            var2['message'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 56:
            return var1;
        }
    };
    var3['MediaPreviewRightAccessory'] = var2;
    return var1;
})();