// app/modules/in_app_notifications/native/MessagePreviewText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function NativeMessagePreviewContent(arg1) {
        var1 = arg1;
        var10 = var1.message;
        var9 = var1.lineClamp;
        var8 = var1.maxHeight;
        var1 = _closure1_slot10;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot8;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.nativeChannelRowPreviewContainer;
        var1['style'] = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 8;
        var5 = var11[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.NativeChannelRowPreview;
        var5 = {};
        var5['message'] = var10;
        var5['lineClamp'] = var9;
        var5['maxHeight'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var2 = function SystemMessageText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.text;
            var2 = _closure1_slot10;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isIOS;
            var2 = var2.bind(var3)();
            var7 = 'text-md/medium';
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 'text-md/normal';
case 2:
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var1['variant'] = var7;
            var7 = 'text-subtle';
            var1['color'] = var7;
            var6 = var6.italic;
            var1['style'] = var6;
            var6 = 2;
            var1['lineClamp'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = function EmbedMediaThumbnail(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.media;
            var2 = _closure1_slot11;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var10 = var1.proxyURL;
            var2 = null;
            if(!(var2 == var10)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var10 = var1.url;
case 4:
            var2 = var1.width;
            var1 = var1.height;
            var1 = var2 / var1;
            var2 = global;
            var3 = var2.Number;
            var2 = var3.isFinite;
            var2 = var2.bind(var3)(var1);
            var3 = 1;
            var9 = var3;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = 0;
            var9 = var3;
            if(!(var1 > var2)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var9 = var1;
case 6:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var8.embedMediaContainer;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var7['aspectRatio'] = var9;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot8;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 11;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var9 = {};
            var9['uri'] = var10;
            var5['source'] = var9;
            var8 = var8.embedMedia;
            var5['style'] = var8;
            var8 = 'contain';
            var5['resizeMode'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function EmbedCard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var1 = var1.embed;
            var2 = _closure1_slot11;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var2 = var1.provider;
            var6 = null;
            var3 = var6 == var2;
            var18 = undefined;
            if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 4:
            var18 = var2.name;
case 9:
            var2 = var1.author;
            var3 = var6 == var2;
            var19 = undefined;
            if(var3) { _fun0003_ip = 2; continue _fun0003 }
case 10:
            var19 = var2.name;
case 2:
            var17 = var1.rawTitle;
            var10 = var1.thumbnail;
            if(!(var6 == var10)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var10 = var1.image;
case 11:
            var2 = var1.color;
            var2 = var6 != var2;
            var15 = undefined;
            if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = var1.color;
            var2 = var3.toLowerCase;
            var3 = var2.bind(var3)();
            var2 = '#ffffff';
            var15 = undefined;
            if(!(var2 !== var3)) { _fun0003_ip = 13; continue _fun0003 }
case 15:
            var15 = var1.color;
case 13:
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var12.embedContainer;
            var1['style'] = var5;
            var8 = var6 != var15;
            if(!var8) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var11 = _closure1_slot8;
            var9 = _closure1_slot4;
            var5 = {};
            var14 = var12.embedAccentBar;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var14['backgroundColor'] = var15;
            var13[1] = var14;
            var5['style'] = var13;
            var8 = var11.bind(var4)(var9, var5);
case 16:
            var5 = new Array(3);
            var5[0] = var8;
            var11 = _closure1_slot9;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = var12.embedTextContainer;
            var8['style'] = var12;
            var13 = var6 != var18;
            if(!var13) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var15 = _closure1_slot8;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 10;
            var12 = var16[var12];
            var12 = var14.bind(var4)(var12);
            var14 = var12.Text;
            var12 = {'variant': 'text-xxs/normal', 'color': 'text-subtle', 'lineClamp': 1};
            var12['children'] = var18;
            var13 = var15.bind(var4)(var14, var12);
case 18:
            var12 = new Array(3);
            var12[0] = var13;
            var13 = var6 != var19;
            if(!var13) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var16 = _closure1_slot8;
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 10;
            var14 = var20[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-xs/medium', 'color': 'text-default', 'lineClamp': 1};
            var14['children'] = var19;
            var13 = var16.bind(var4)(var15, var14);
case 20:
            var12[1] = var13;
            var13 = var6 != var17;
            if(!var13) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var16 = _closure1_slot8;
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 10;
            var14 = var20[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-xs/medium', 'color': 'text-link'};
            var21 = var6 == var18;
            var20 = 1;
            var18 = var20;
            if(!var21) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var19 = var6 == var19;
            var18 = var20;
            if(!var19) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var18 = 3;
case 24:
            var14['lineClamp'] = var18;
            var14['children'] = var17;
            var13 = var16.bind(var4)(var15, var14);
case 22:
            var12[2] = var13;
            var8['children'] = var12;
            var8 = var11.bind(var4)(var9, var8);
            var5[1] = var8;
            var6 = var6 != var10;
            if(!var6) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var9 = _closure1_slot8;
            var8 = _closure1_slot14;
            var7 = {};
            var7['media'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 27:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var13 = 1;
    var5 = var7[var13];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var8 = var7[var5];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MessageSnapshotRecord;
    var _closure1_slot6 = var5;
    var15 = 3;
    var5 = var7[var15];
    var5 = var6.bind(var1)(var5);
    var5 = var5.IN_APP_NOTIFICATION_MAX_HEIGHT;
    var _closure1_slot7 = var5;
    var14 = 4;
    var5 = var7[var14];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot8 = var8;
    var5 = var5.jsxs;
    var _closure1_slot9 = var5;
    var5 = 5;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {};
    var16 = 'italic';
    var11['fontStyle'] = var16;
    var8['italic'] = var11;
    var11 = {};
    var11['marginTop'] = var15;
    var8['nativeChannelRowPreviewContainer'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot10 = var8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 6;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var10['borderRadius'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['paddingTop'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['paddingBottom'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['paddingRight'] = var15;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var15;
    var15 = 'row';
    var10['flexDirection'] = var15;
    var15 = 'hidden';
    var10['overflow'] = var15;
    var5['embedContainer'] = var10;
    var10 = {};
    var10['width'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var14 = -var14;
    var10['marginTop'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var14 = -var14;
    var10['marginBottom'] = var14;
    var14 = 'stretch';
    var10['alignSelf'] = var14;
    var5['embedAccentBar'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var10['gap'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var10['paddingVertical'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['paddingHorizontal'] = var13;
    var5['embedTextContainer'] = var10;
    var10 = {'borderRadius': null, 'overflow': 'hidden', 'height': 60};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var10['borderRadius'] = var11;
    var10['width'] = var1;
    var5['embedMediaContainer'] = var10;
    var10 = {'width': '100%', 'height': '100%'};
    var5['embedMedia'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/in_app_notifications/native/MessagePreviewText.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function MessagePreviewText(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = var2.message;
            var _closure2_slot0 = var4;
            var11 = var2.lineClamp;
            var9 = var2.maxHeight;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var15 = 12;
            var3 = var7[var15];
            var5 = undefined;
            var8 = var6.bind(var5)(var3);
            var3 = var8.usePreviewableMedia;
            var8 = var3.bind(var8)(var4);
            var3 = 13;
            var3 = var7[var3];
            var7 = var6.bind(var5)(var3);
            var6 = var7.usePreviewableMediaText;
            var3 = {};
            var3['previewableMedia'] = var8;
            var3 = var6.bind(var7)(var3);
            var6 = var3.text;
            var20 = var3.secondaryText;
            var7 = {};
            var7['message'] = var4;
            var3 = function useGetInitialMessagePreview(arg1) {
                var2 = arg1;
                var5 = var2.message;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var6 = _closure1_slot5;
                        var8 = _closure3_slot0;
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var9 = var5;
                        var1 = new var9[var6](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var5;
                        var5 = new Array(0);
                        var1['attachments'] = var5;
                        var5 = new Array(0);
                        var1['stickerItems'] = var5;
                        var5 = var1.embeds;
                        var6 = var5.length;
                        var5 = 0;
                        if(!(var6 > var5)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                        var7 = var1.embeds;
                        var6 = var7.filter;
                        var5 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var2 = arg1;
                                var1 = var2.image;
                                var3 = null;
                                var1 = var3 == var1;
                                if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                                var2 = var2.thumbnail;
                                var1 = var3 == var2;
case 31:
                                return var1;
                            }
                        };
                        var5 = var6.bind(var7)(var5);
                        var1['embeds'] = var5;
case 29:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var4 = 7;
                        var4 = var5[var4];
                        var5 = undefined;
                        var4 = var6.bind(var5)(var4);
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var5)(var3);
                        if(!var3) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                        var4 = var1.messageSnapshots;
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var3 = _closure1_slot6;
                            var1 = {};
                            var2 = arg1;
                            var5 = var2.message;
                            var4 = var5.merge;
                            var2 = {};
                            var6 = new Array(0);
                            var2['attachments'] = var6;
                            var6 = new Array(0);
                            var2['embeds'] = var6;
                            var6 = new Array(0);
                            var2['stickerItems'] = var6;
                            var2 = var4.bind(var5)(var2);
                            var1['message'] = var2;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var8 = var2;
                            var7 = var1;
                            var1 = new var8[var3](var7, var6);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        var1['messageSnapshots'] = var2;
case 33:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var10 = var3.bind(var5)(var7);
            var12 = _closure1_slot3;
            var7 = var12.useMemo;
            var13 = var4.embeds;
            var3 = new Array(1);
            var3[0] = var13;
            var1 = function() {
                var1 = _closure2_slot0;
                var3 = var1.embeds;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.image;
                        var3 = null;
                        var1 = var3 != var1;
                        if(var1) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                        var2 = var2.thumbnail;
                        var1 = var3 != var2;
case 31:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var12)(var1, var3);
            var7 = var3.length;
            var1 = 0;
            if(!(!(var7 > var1))) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 7;
            var7 = var13[var7];
            var7 = var12.bind(var5)(var7);
            var7 = var7.bind(var5)(var4);
            if(var7) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var7 = var4.content;
            var7 = var7.length;
            if(!(!(var7 > var1))) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var7 = var8.length;
            if(!(var7 > var1)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var16 = null;
            if(!(var16 === var6)) { _fun0004_ip = 22; continue _fun0004 }
case 41:
            var12 = var4.poll;
            var7 = null;
            if(!(var7 == var12)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var13 = _closure1_slot8;
            var12 = _closure1_slot12;
            var7 = {};
            var7['message'] = var4;
            var7['lineClamp'] = var11;
            var7['maxHeight'] = var9;
            var7 = var13.bind(var5)(var12, var7);
            return var7;
case 43:
            var7 = var4.poll;
            var7 = var7.question;
            var21 = var7.text;
            var13 = _closure1_slot9;
            var12 = _closure1_slot4;
            var7 = {};
            var19 = _closure1_slot8;
            var17 = _closure1_slot13;
            var14 = {};
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var23 = 15;
            var24 = var22[var23];
            var24 = var18.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var22[var23];
            var23 = var18.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.n3shVJ;
            var23 = var24.bind(var25)(var23);
            var14['text'] = var23;
            var17 = var19.bind(var5)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var19 = _closure1_slot8;
            var17 = 10;
            var17 = var22[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'redesign/message-preview/medium', 'color': 'text-default', 'lineClamp': 2};
            var17['children'] = var21;
            var17 = var19.bind(var5)(var18, var17);
            var14[1] = var17;
            var7['children'] = var14;
            var7 = var13.bind(var5)(var12, var7);
            return var7;
case 22:
            var13 = _closure1_slot9;
            var12 = _closure1_slot4;
            var7 = {};
            var18 = _closure1_slot8;
            var17 = _closure1_slot13;
            var14 = {};
            var14['text'] = var6;
            var17 = var18.bind(var5)(var17, var14);
            var14 = new Array(2);
            var14[0] = var17;
            var16 = var16 !== var20;
            if(!var16) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var19 = _closure1_slot8;
            var18 = _closure1_slot0;
            var21 = _closure1_slot2;
            var17 = 10;
            var17 = var21[var17];
            var17 = var18.bind(var5)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'redesign/message-preview/medium', 'color': 'text-link', 'lineClamp': 2};
            var17['children'] = var20;
            var16 = var19.bind(var5)(var18, var17);
case 45:
            var14[1] = var16;
            var7['children'] = var14;
            var7 = var13.bind(var5)(var12, var7);
            return var7;
case 39:
            var13 = _closure1_slot8;
            var12 = _closure1_slot12;
            var7 = {};
            var7['message'] = var10;
            var7['lineClamp'] = var11;
            var7['maxHeight'] = var9;
            var7 = var13.bind(var5)(var12, var7);
            return var7;
case 37:
            var7 = var4.messageSnapshots;
            var7 = var7.length;
            var7 = var7 > var1;
            if(!var7) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var4 = var4.messageSnapshots;
            var4 = var4[var1];
            var4 = var4.message;
            var4 = var4.content;
            var4 = var4.length;
            var7 = var4 > var1;
case 47:
            var4 = var8.length;
            var4 = var4 > var1;
            if(!var4) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var12 = var8[var1];
            var13 = var12.type;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var15];
            var12 = var14.bind(var5)(var12);
            var12 = var12.PreviewableMediaTypes;
            var12 = var12.GIF;
            var4 = var13 === var12;
case 49:
            var8 = var8.length;
            if(!(var8 > var1)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            if(!var7) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            if(var4) { _fun0004_ip = 53; continue _fun0004 }
case 51:
            var8 = _closure1_slot8;
            var7 = _closure1_slot12;
            var4 = {};
            var4['message'] = var10;
            var4['lineClamp'] = var11;
            var4['maxHeight'] = var9;
            var4 = var8.bind(var5)(var7, var4);
            _fun0004_ip = 55; continue _fun0004;
case 53:
            var9 = _closure1_slot8;
            var8 = _closure1_slot13;
            var7 = {};
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 15;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11["9ddYKt"];
            var11 = var12.bind(var13)(var11);
            var7['text'] = var11;
            var4 = var9.bind(var5)(var8, var7);
case 55:
            return var4;
case 35:
            var11 = var3[var1];
            var3 = var11.type;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 14;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.MessageEmbedTypes;
            var1 = var1.GIFV;
            if(!(var3 === var1)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var1 = null;
            if(!(var1 == var6)) { _fun0004_ip = 58; continue _fun0004 }
case 56:
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var1 = {};
            var9 = _closure1_slot8;
            var8 = _closure1_slot12;
            var7 = {};
            var7['message'] = var10;
            var10 = 2;
            var7['lineClamp'] = var10;
            var10 = _closure1_slot7;
            var7['maxHeight'] = var10;
            var8 = var9.bind(var5)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot8;
            var9 = _closure1_slot15;
            var8 = {};
            var8['embed'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var7[1] = var8;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 59; continue _fun0004;
case 58:
            var4 = _closure1_slot8;
            var3 = _closure1_slot13;
            var2 = {};
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 59:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['SystemMessageText'] = var2;
    return var1;
})();