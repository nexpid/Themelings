// app/modules/in_app_notifications/native/MessagePreviewText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var12 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var12;
        var _closure1_slot2 = var7;
        var1 = function NativeMessagePreviewContent(arg1) {
            var1 = arg1;
            var9 = var1.message;
            var8 = var1.lineClamp;
            var7 = var1.maxHeight;
            var4 = _closure1_slot10;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.NativeChannelRowPreview;
            var5 = {};
            var5['message'] = var9;
            var5['lineClamp'] = var8;
            var5['maxHeight'] = var7;
            var5 = var4.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var _closure1_slot14 = var1;
        var2 = function SystemMessageText(arg1) {
            var1 = arg1;
            var5 = var1.text;
            var1 = _closure1_slot12;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.getMessagePreviewTextVariant;
            var8 = var1.bind(var3)();
            var3 = _closure1_slot10;
            var1 = 12;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var1['variant'] = var8;
            var8 = 'text-subtle';
            var1['color'] = var8;
            var7 = var7.italic;
            var1['style'] = var7;
            var6 = _closure1_slot9;
            var1['lineClamp'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var _closure1_slot15 = var2;
        var1 = function EmbedMediaThumbnail(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var1 = var1.media;
                var2 = _closure1_slot13;
                var4 = undefined;
                var8 = var2.bind(var4)();
                var10 = var1.proxyURL;
                var2 = null;
                if(!(var2 == var10)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var10 = var1.url;
case 2:
                var2 = var1.width;
                var1 = var1.height;
                var1 = var2 / var1;
                var2 = global;
                var3 = var2.Number;
                var2 = var3.isFinite;
                var2 = var2.bind(var3)(var1);
                var3 = 1;
                var9 = var3;
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = 0;
                var9 = var3;
                if(!(var1 > var2)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var9 = var1;
case 4:
                var3 = _closure1_slot10;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var8.embedMediaContainer;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var7['aspectRatio'] = var9;
                var6[1] = var7;
                var1['style'] = var6;
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 13;
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
        var _closure1_slot16 = var1;
        var1 = function EmbedCard(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var17 = var1.embed;
                var1 = _closure1_slot13;
                var4 = undefined;
                var12 = var1.bind(var4)();
                var1 = var17.provider;
                var6 = null;
                var2 = var6 == var1;
                var19 = undefined;
                if(var2) { _fun0003_ip = 7; continue _fun0003 }
case 2:
                var19 = var1.name;
case 7:
                var1 = var17.author;
                var2 = var6 == var1;
                var20 = undefined;
                if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var20 = var1.name;
case 8:
                var18 = var17.rawTitle;
                var10 = var17.thumbnail;
                if(!(var6 == var10)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var10 = var17.image;
case 10:
                var1 = var17.color;
                var1 = var6 != var1;
                var15 = undefined;
                if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var2 = var17.color;
                var1 = var2.toLowerCase;
                var2 = var1.bind(var2)();
                var1 = '#ffffff';
                var15 = undefined;
                if(!(var1 !== var2)) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                var15 = var17.color;
case 12:
                var3 = _closure1_slot11;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var12.embedContainer;
                var1['style'] = var5;
                var8 = var6 != var15;
                if(!var8) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var11 = _closure1_slot10;
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
case 15:
                var5 = new Array(3);
                var5[0] = var8;
                var11 = _closure1_slot11;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var12.embedTextContainer;
                var8['style'] = var12;
                var13 = var6 != var19;
                if(!var13) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var15 = _closure1_slot10;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 12;
                var12 = var16[var12];
                var12 = var14.bind(var4)(var12);
                var14 = var12.Text;
                var12 = {'variant': 'text-xxs/normal', 'color': 'text-subtle', 'lineClamp': 1};
                var12['children'] = var19;
                var13 = var15.bind(var4)(var14, var12);
case 17:
                var12 = new Array(4);
                var12[0] = var13;
                var13 = var6 != var20;
                if(!var13) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var16 = _closure1_slot10;
                var15 = _closure1_slot0;
                var21 = _closure1_slot2;
                var14 = 12;
                var14 = var21[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {'variant': 'text-xs/medium', 'color': 'text-default', 'lineClamp': 1};
                var14['children'] = var20;
                var13 = var16.bind(var4)(var15, var14);
case 19:
                var12[1] = var13;
                var13 = var6 != var18;
                if(!var13) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                var16 = _closure1_slot10;
                var15 = _closure1_slot0;
                var21 = _closure1_slot2;
                var14 = 12;
                var14 = var21[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {'variant': 'text-xs/medium', 'color': 'text-link'};
                var22 = var6 == var19;
                var21 = 1;
                var19 = var21;
                if(!var22) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var20 = var6 == var20;
                var19 = var21;
                if(!var20) { _fun0003_ip = 23; continue _fun0003 }
case 25:
                var19 = 3;
case 23:
                var14['lineClamp'] = var19;
                var14['children'] = var18;
                var13 = var16.bind(var4)(var15, var14);
case 21:
                var12[2] = var13;
                var13 = var17.rawDescription;
                var13 = var6 != var13;
                if(!var13) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var16 = _closure1_slot10;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 12;
                var14 = var18[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {'variant': 'text-xs/medium', 'color': 'text-default', 'lineClamp': 3};
                var17 = var17.rawDescription;
                var14['children'] = var17;
                var13 = var16.bind(var4)(var15, var14);
case 26:
                var12[3] = var13;
                var8['children'] = var12;
                var8 = var11.bind(var4)(var9, var8);
                var5[1] = var8;
                var6 = var6 != var10;
                if(!var6) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var9 = _closure1_slot10;
                var8 = _closure1_slot16;
                var7 = {};
                var7['media'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 28:
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot17 = var1;
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
        var5 = 3;
        var5 = var7[var5];
        var5 = var12.bind(var1)(var5);
        var _closure1_slot7 = var5;
        var14 = 4;
        var5 = var7[var14];
        var5 = var6.bind(var1)(var5);
        var8 = var5.IN_APP_NOTIFICATION_MAX_HEIGHT;
        var _closure1_slot8 = var8;
        var5 = var5.NOTIFICATION_PREVIEW_LINE_CLAMP;
        var _closure1_slot9 = var5;
        var5 = 5;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var8 = var5.jsx;
        var _closure1_slot10 = var8;
        var5 = var5.jsxs;
        var _closure1_slot11 = var5;
        var5 = 6;
        var8 = var7[var5];
        var10 = var6.bind(var1)(var8);
        var9 = var10.createStyles;
        var8 = {};
        var11 = {};
        var15 = 'italic';
        var11['fontStyle'] = var15;
        var15 = 7;
        var15 = var7[var15];
        var16 = var6.bind(var1)(var15);
        var15 = var16.isIOS;
        var16 = var15.bind(var16)();
        var15 = 'ggsans-MediumItalic, NotoSans-MediumItalic';
        if(!var16) { _fun0001_ip = 30; continue _fun0001 }
case 31:
        var15 = 'ggsans-NormalItalic, NotoSans-NormalItalic';
case 30:
        var11['fontFamily'] = var15;
        var8['italic'] = var11;
        var8 = var9.bind(var10)(var8);
        var _closure1_slot12 = var8;
        var5 = var7[var5];
        var9 = var6.bind(var1)(var5);
        var8 = var9.createStyles;
        var5 = {};
        var10 = {};
        var11 = 8;
        var15 = var7[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.sm;
        var10['borderRadius'] = var15;
        var15 = var7[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.space;
        var15 = var15.PX_8;
        var10['paddingTop'] = var15;
        var15 = var7[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.space;
        var15 = var15.PX_8;
        var10['paddingBottom'] = var15;
        var15 = var7[var11];
        var15 = var12.bind(var1)(var15);
        var15 = var15.space;
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
        var14 = var14.space;
        var14 = var14.PX_8;
        var14 = -var14;
        var10['marginTop'] = var14;
        var14 = var7[var11];
        var14 = var12.bind(var1)(var14);
        var14 = var14.space;
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
        var13 = var13.space;
        var13 = var13.PX_4;
        var10['gap'] = var13;
        var13 = var7[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.space;
        var13 = var13.PX_4;
        var10['paddingVertical'] = var13;
        var13 = var7[var11];
        var13 = var12.bind(var1)(var13);
        var13 = var13.space;
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
        var _closure1_slot13 = var5;
        var5 = 20;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/in_app_notifications/native/MessagePreviewText.tsx';
        var5 = var6.bind(var7)(var5);
        var4 = function MessagePreviewText(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var7 = var1.message;
                var _closure2_slot0 = var7;
                var12 = var1.lineClamp;
                var11 = var1.maxHeight;
                var10 = var1.showMessageAuthor;
                var5 = undefined;
                if(!(var10 === var5)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var10 = false;
case 32:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var17 = 14;
                var1 = var6[var17];
                var8 = var4.bind(var5)(var1);
                var1 = var8.usePreviewableMedia;
                var9 = var1.bind(var8)(var7);
                var1 = 15;
                var1 = var6[var1];
                var8 = var4.bind(var5)(var1);
                var6 = var8.useNullableMessageAuthor;
                var1 = null;
                var4 = null;
                if(!var10) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                var4 = var7;
case 34:
                var13 = var6.bind(var8)(var4);
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 16;
                var4 = var8[var4];
                var8 = var6.bind(var5)(var4);
                var6 = var8.usePreviewableMediaText;
                var4 = {};
                var4['previewableMedia'] = var9;
                var4['author'] = var13;
                var4 = var6.bind(var8)(var4);
                var6 = var4.text;
                var22 = var4.secondaryText;
                var8 = {};
                var8['message'] = var7;
                var4 = function useGetInitialMessagePreview(arg1) {
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
                            if(!(var6 > var5)) { _fun0005_ip = 34; continue _fun0005 }
case 36:
                            var7 = var1.embeds;
                            var6 = var7.filter;
                            var5 = function(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    var2 = arg1;
                                    var1 = var2.image;
                                    var3 = null;
                                    var1 = var3 == var1;
                                    if(!var1) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                                    var2 = var2.thumbnail;
                                    var1 = var3 == var2;
case 37:
                                    return var1;
                                }
                            };
                            var5 = var6.bind(var7)(var5);
                            var1['embeds'] = var5;
case 34:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var4 = 9;
                            var4 = var5[var4];
                            var5 = undefined;
                            var4 = var6.bind(var5)(var4);
                            var3 = _closure3_slot0;
                            var3 = var4.bind(var5)(var3);
                            if(!var3) { _fun0005_ip = 39; continue _fun0005 }
case 40:
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
case 39:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var10 = var4.bind(var5)(var8);
                var14 = _closure1_slot3;
                var8 = var14.useMemo;
                var15 = var7.embeds;
                var4 = new Array(1);
                var4[0] = var15;
                var3 = function() {
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
                            if(var1) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                            var2 = var2.thumbnail;
                            var1 = var3 != var2;
case 37:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var8.bind(var14)(var3, var4);
                var8 = var4.length;
                var3 = 0;
                if(!(!(var8 > var3))) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 9;
                var8 = var15[var8];
                var8 = var14.bind(var5)(var8);
                var8 = var8.bind(var5)(var7);
                if(var8) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                var8 = var7.content;
                var8 = var8.length;
                if(!(!(var8 > var3))) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                var8 = var9.length;
                if(!(var8 > var3)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                if(!(var1 === var6)) { _fun0004_ip = 49; continue _fun0004 }
case 47:
                var8 = var7.poll;
                if(!(var1 == var8)) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                var15 = _closure1_slot10;
                var14 = _closure1_slot14;
                var8 = {};
                var8['message'] = var7;
                var8['lineClamp'] = var12;
                var8['maxHeight'] = var11;
                var8 = var15.bind(var5)(var14, var8);
                return var8;
case 50:
                var8 = var7.poll;
                var8 = var8.question;
                var21 = var8.text;
                if(!(var1 == var13)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 18;
                var14 = var18[var8];
                var14 = var16.bind(var5)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var8 = var18[var8];
                var8 = var16.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.n3shVJ;
                var20 = var14.bind(var15)(var8);
                _fun0004_ip = 54; continue _fun0004;
case 52:
                var14 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 18;
                var15 = var18[var8];
                var15 = var14.bind(var5)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var8 = var18[var8];
                var8 = var14.bind(var5)(var8);
                var8 = var8.t;
                var14 = var8["1wtRlq"];
                var8 = {};
                var18 = var13.nick;
                var8['username'] = var18;
                var20 = var15.bind(var16)(var14, var8);
case 54:
                var15 = _closure1_slot11;
                var14 = _closure1_slot4;
                var8 = {};
                var19 = _closure1_slot10;
                var18 = _closure1_slot15;
                var16 = {};
                var16['text'] = var20;
                var18 = var19.bind(var5)(var18, var16);
                var16 = new Array(2);
                var16[0] = var18;
                var20 = _closure1_slot10;
                var19 = _closure1_slot0;
                var23 = _closure1_slot2;
                var18 = 12;
                var18 = var23[var18];
                var18 = var19.bind(var5)(var18);
                var19 = var18.Text;
                var18 = {'variant': 'redesign/message-preview/medium', 'color': 'text-default'};
                var23 = _closure1_slot9;
                var18['lineClamp'] = var23;
                var18['children'] = var21;
                var18 = var20.bind(var5)(var19, var18);
                var16[1] = var18;
                var8['children'] = var16;
                var8 = var15.bind(var5)(var14, var8);
                return var8;
case 49:
                var15 = _closure1_slot11;
                var14 = _closure1_slot4;
                var8 = {};
                var19 = _closure1_slot10;
                var18 = _closure1_slot15;
                var16 = {};
                var16['text'] = var6;
                var18 = var19.bind(var5)(var18, var16);
                var16 = new Array(2);
                var16[0] = var18;
                var18 = var1 !== var22;
                if(!var18) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                var21 = _closure1_slot10;
                var20 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 12;
                var19 = var23[var19];
                var19 = var20.bind(var5)(var19);
                var20 = var19.Text;
                var19 = {'variant': 'redesign/message-preview/medium', 'color': 'text-link'};
                var23 = _closure1_slot9;
                var19['lineClamp'] = var23;
                var19['children'] = var22;
                var18 = var21.bind(var5)(var20, var19);
case 55:
                var16[1] = var18;
                var8['children'] = var16;
                var8 = var15.bind(var5)(var14, var8);
                return var8;
case 45:
                if(!(var1 != var13)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                var15 = _closure1_slot7;
                var14 = var15.getChannel;
                var8 = var7.channel_id;
                var18 = var14.bind(var15)(var8);
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 11;
                var8 = var15[var8];
                var14 = var14.bind(var5)(var8);
                var8 = var14.getMessagePreviewTextVariant;
                var16 = var8.bind(var14)();
                if(!(var1 == var18)) { _fun0004_ip = 59; continue _fun0004 }
case 57:
                var15 = _closure1_slot10;
                var14 = _closure1_slot14;
                var8 = {};
                var8['message'] = var10;
                var8['lineClamp'] = var12;
                var8['maxHeight'] = var11;
                var8 = var15.bind(var5)(var14, var8);
                return var8;
case 59:
                var15 = _closure1_slot10;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = 10;
                var8 = var20[var8];
                var8 = var19.bind(var5)(var8);
                var14 = var8.ChannelRowPreview;
                var8 = {};
                var8['channel'] = var18;
                var8['message'] = var7;
                var18 = 'text-default';
                var8['color'] = var18;
                var18 = 19;
                var18 = var20[var18];
                var18 = var19.bind(var5)(var18);
                var18 = var18.ChannelListLayoutTypes;
                var18 = var18.COZY;
                var8['layout'] = var18;
                var8['variant'] = var16;
                var16 = false;
                var8['muted'] = var16;
                var8['lineClamp'] = var12;
                var8 = var15.bind(var5)(var14, var8);
                return var8;
case 43:
                var8 = var7.messageSnapshots;
                var8 = var8.length;
                var8 = var8 > var3;
                if(!var8) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                var7 = var7.messageSnapshots;
                var7 = var7[var3];
                var7 = var7.message;
                var7 = var7.content;
                var7 = var7.length;
                var8 = var7 > var3;
case 60:
                var7 = var9.length;
                var7 = var7 > var3;
                if(!var7) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                var14 = var9[var3];
                var15 = var14.type;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var17];
                var14 = var16.bind(var5)(var14);
                var14 = var14.PreviewableMediaTypes;
                var14 = var14.GIF;
                var7 = var15 === var14;
case 62:
                var9 = var9.length;
                if(!(var9 > var3)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                if(!var8) { _fun0004_ip = 66; continue _fun0004 }
case 67:
                if(var7) { _fun0004_ip = 66; continue _fun0004 }
case 64:
                var9 = _closure1_slot10;
                var8 = _closure1_slot14;
                var7 = {};
                var7['message'] = var10;
                var7['lineClamp'] = var12;
                var7['maxHeight'] = var11;
                var7 = var9.bind(var5)(var8, var7);
                return var7;
case 66:
                if(!(var1 == var13)) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 18;
                var8 = var12[var7];
                var8 = var11.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var12[var7];
                var7 = var11.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7["9ddYKt"];
                var11 = var8.bind(var9)(var7);
                _fun0004_ip = 70; continue _fun0004;
case 68:
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 18;
                var9 = var14[var7];
                var9 = var8.bind(var5)(var9);
                var12 = var9.intl;
                var9 = var12.format;
                var7 = var14[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.t;
                var8 = var7.sLDHDi;
                var7 = {};
                var13 = var13.nick;
                var7['username'] = var13;
                var11 = var9.bind(var12)(var8, var7);
case 70:
                var9 = _closure1_slot10;
                var8 = _closure1_slot15;
                var7 = {};
                var7['text'] = var11;
                var7 = var9.bind(var5)(var8, var7);
                return var7;
case 41:
                var11 = var4[var3];
                var4 = var11.type;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 17;
                var3 = var8[var3];
                var3 = var7.bind(var5)(var3);
                var3 = var3.MessageEmbedTypes;
                var3 = var3.GIFV;
                if(!(var4 === var3)) { _fun0004_ip = 71; continue _fun0004 }
case 72:
                if(!(var1 == var6)) { _fun0004_ip = 73; continue _fun0004 }
case 71:
                var4 = _closure1_slot11;
                var3 = _closure1_slot4;
                var1 = {};
                var9 = _closure1_slot10;
                var8 = _closure1_slot14;
                var7 = {};
                var7['message'] = var10;
                var10 = _closure1_slot9;
                var7['lineClamp'] = var10;
                var10 = _closure1_slot8;
                var7['maxHeight'] = var10;
                var8 = var9.bind(var5)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot17;
                var8 = {};
                var8['embed'] = var11;
                var8 = var10.bind(var5)(var9, var8);
                var7[1] = var8;
                var1['children'] = var7;
                var1 = var4.bind(var5)(var3, var1);
                _fun0004_ip = 74; continue _fun0004;
case 73:
                var4 = _closure1_slot10;
                var3 = _closure1_slot15;
                var2 = {};
                var2['text'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 74:
                return var1;
            }
        };
        var3['default'] = var4;
        var3['SystemMessageText'] = var2;
        return var1;
    }
})();