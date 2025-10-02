// app/modules/forums/ForumPostMediaUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var13;
    var10 = function isValidImageAttachment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var1.filename;
            var5 = var1.height;
            var3 = var1.width;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var7.bind(var1)(var4);
            var1 = var4.isImageFile;
            var1 = var1.bind(var4)(var6);
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2 != var5;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = 0;
            var1 = var5 > var4;
case 6:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var2 != var3;
case 8:
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = 0;
            var1 = var3 > var2;
case 10:
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot11 = var10;
    var9 = function isValidVideoAttachment(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 12:
            var2 = var4 != var3;
            if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 6;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.isVideoFile;
            var5 = var3.filename;
            var2 = var6.bind(var7)(var5);
case 13:
            if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 5:
            var3 = var3.proxy_url;
            var2 = var4 != var3;
case 15:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot12 = var9;
    var8 = function isMediaAttachment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot11;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var2 = _closure1_slot12;
            var1 = var2.bind(var3)(var4);
case 16:
            return var1;
        }
    };
    var _closure1_slot13 = var8;
    var6 = function getForumPostMedia(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = arguments[1];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0004_ip = 18; continue _fun0004 }
case 12:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.InlineAttachmentMedia;
            var3 = var4.getSetting;
            var1 = var3.bind(var4)();
case 18:
            if(var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var1 = new Array(0);
            return var1;
case 19:
            var1 = null;
            var4 = var1 == var2;
            var3 = undefined;
            if(var4) { _fun0004_ip = 21; continue _fun0004 }
case 7:
            var6 = var2.messageSnapshots;
            var4 = 0;
            var4 = var6[var4];
            var6 = var1 == var4;
            var3 = undefined;
            if(var6) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var3 = var4.moderatorReport;
case 21:
            if(!(var1 == var3)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var3 = var1 == var2;
            var4 = undefined;
            if(var3) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var4 = var2.attachments;
case 25:
            _fun0004_ip = 27; continue _fun0004;
case 23:
            var6 = var1 == var2;
            var3 = undefined;
            if(var6) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var7 = var2.messageSnapshots;
            var6 = 0;
            var6 = var7[var6];
            var7 = var1 == var6;
            var3 = undefined;
            if(var7) { _fun0004_ip = 28; continue _fun0004 }
case 30:
            var6 = var6.message;
            var3 = var6.attachments;
case 28:
            var4 = var3;
case 27:
            if(!(var1 != var2)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            if(!(var1 != var4)) { _fun0004_ip = 31; continue _fun0004 }
case 33:
            var3 = var4.filter;
            var2 = _closure1_slot13;
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arg1;
                    var16 = var4.proxy_url;
                    var14 = var4.url;
                    var8 = var4.description;
                    var12 = var4.spoiler;
                    var10 = var4.flags;
                    var13 = var4.width;
                    var11 = var4.height;
                    var6 = var4.filename;
                    var9 = var4.content_scan_version;
                    var1 = null;
                    if(!(var1 != var13)) { _fun0005_ip = 34; continue _fun0005 }
case 13:
                    if(!(var1 != var11)) { _fun0005_ip = 34; continue _fun0005 }
case 4:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var2 = var7[var2];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var2);
                    var2 = var5.isVideoFile;
                    var6 = var2.bind(var5)(var6);
                    var2 = var4.flags;
                    var5 = var1 != var2;
                    if(!var5) { _fun0005_ip = 27; continue _fun0005 }
case 35:
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var2 = 8;
                    var2 = var17[var2];
                    var18 = var15.bind(var7)(var2);
                    var17 = var18.hasFlag;
                    var15 = var4.flags;
                    var2 = _closure1_slot8;
                    var2 = var2.IS_THUMBNAIL;
                    var5 = var17.bind(var18)(var15, var2);
case 27:
                    if(!(var1 != var16)) { _fun0005_ip = 36; continue _fun0005 }
case 32:
                    var14 = var16;
case 36:
                    if(!var6) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var15 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var2 = 9;
                    var2 = var17[var2];
                    var15 = var15.bind(var7)(var2);
                    var2 = var15.toURLSafe;
                    var15 = var2.bind(var15)(var16);
                    if(!(var1 != var15)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var18 = var15.searchParams;
                    var17 = var18.append;
                    var16 = 'format';
                    var2 = 'webp';
                    var2 = var17.bind(var18)(var16, var2);
                    var2 = var15.toString;
                    var14 = var2.bind(var15)();
case 37:
                    var2 = {};
                    var15 = _closure1_slot10;
                    var15 = var15.ATTACHMENT;
                    var2['type'] = var15;
                    var2['src'] = var14;
                    var2['width'] = var13;
                    var2['height'] = var11;
                    var11 = var1 != var12;
                    if(!var11) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var11 = var12;
case 41:
                    var2['spoiler'] = var11;
                    var2['flags'] = var10;
                    var2['contentScanVersion'] = var9;
                    var2['alt'] = var8;
                    var2['isVideo'] = var6;
                    var2['isThumbnail'] = var5;
                    var5 = var4.id;
                    var2['attachmentId'] = var5;
                    var5 = arg2;
                    var2['mediaIndex'] = var5;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 8;
                    var5 = var8[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.hasFlag;
                    var7 = var4.flags;
                    var8 = var1 != var7;
                    var4 = 0;
                    if(!var8) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var4 = var7;
case 43:
                    var3 = _closure1_slot8;
                    var3 = var3.IS_ANIMATED;
                    var3 = var5.bind(var6)(var4, var3);
                    var2['srcIsAnimated'] = var3;
                    return var2;
case 39:
                    return var1;
case 34:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            _fun0004_ip = 45; continue _fun0004;
case 31:
            var1 = new Array(0);
case 45:
            return var1;
        }
    };
    var _closure1_slot14 = var6;
    var1 = function useForumPostMedia(arg1) {
        var4 = _closure1_slot14;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 7;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.InlineAttachmentMedia;
        var1 = var2.useSetting;
        var2 = var1.bind(var2)();
        var1 = arg1;
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function useForumPostEmbeds(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var7 = var5[var1];
            var6 = undefined;
            var7 = var4.bind(var6)(var7);
            var9 = var7.InlineEmbedMedia;
            var7 = var9.useSetting;
            var7 = var7.bind(var9)();
            var1 = var5[var1];
            var1 = var4.bind(var6)(var1);
            var4 = var1.RenderEmbeds;
            var1 = var4.useSetting;
            var4 = var1.bind(var4)();
            var1 = null;
            if(!(var1 != var8)) { _fun0006_ip = 46; continue _fun0006 }
case 11:
            var5 = var8.messageSnapshots;
            var9 = 0;
            var10 = var5[var9];
            var11 = var1 == var10;
            var5 = undefined;
            if(var11) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var5 = var10.moderatorReport;
case 47:
            if(!(var1 == var5)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var5 = var8.embeds;
            _fun0006_ip = 51; continue _fun0006;
case 49:
            var8 = var8.messageSnapshots;
            var9 = var8[var9];
            var10 = var1 == var9;
            var8 = undefined;
            if(var10) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var9 = var9.message;
            var8 = var9.embeds;
case 52:
            var5 = var8;
case 51:
            if(!var7) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            if(!var4) { _fun0006_ip = 54; continue _fun0006 }
case 56:
            if(!(var1 == var5)) { _fun0006_ip = 57; continue _fun0006 }
case 54:
            var1 = new Array(0);
            _fun0006_ip = 58; continue _fun0006;
case 57:
            var4 = var5.map;
            var3 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.image;
                    var3 = null;
                    if(!(var3 == var1)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                    var1 = var5.thumbnail;
case 59:
                    var2 = var3 == var1;
                    if(!var2) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                    var4 = var5.images;
                    var2 = var3 != var4;
case 61:
                    if(!var2) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                    var4 = var5.images;
                    var2 = 0;
                    var1 = var4[var2];
case 63:
                    if(!(var3 != var1)) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                    var2 = var1.url;
                    if(!(var3 == var2)) { _fun0007_ip = 67; continue _fun0007 }
case 65:
                    var2 = undefined;
                    return var2;
case 67:
                    var8 = var1.height;
                    var10 = var1.proxyURL;
                    var12 = var1.url;
                    var7 = var1.width;
                    var6 = var1.flags;
                    var4 = var3 != var10;
                    if(!var4) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var9.bind(var1)(var2);
                    var1 = var2.isVideoUrl;
                    var4 = var1.bind(var2)(var10);
case 68:
                    var1 = {};
                    var9 = _closure1_slot10;
                    var9 = var9.EMBED;
                    var1['type'] = var9;
                    var9 = var12;
                    if(!(var3 != var10)) { _fun0007_ip = 70; continue _fun0007 }
case 56:
                    var11 = '';
                    var9 = var12;
                    if(!(var11 !== var10)) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                    var9 = var10;
case 70:
                    var1['src'] = var9;
                    var1['height'] = var8;
                    var1['width'] = var7;
                    var7 = _closure2_slot0;
                    var1['spoiler'] = var7;
                    var7 = var5.flags;
                    var1['flags'] = var7;
                    var5 = var5.contentScanVersion;
                    var1['contentScanVersion'] = var5;
                    var1['isVideo'] = var4;
                    var4 = arg2;
                    var1['mediaIndex'] = var4;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 8;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.hasFlag;
                    var7 = var3 != var6;
                    var3 = 0;
                    if(!var7) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                    var3 = var6;
case 72:
                    var2 = _closure1_slot9;
                    var2 = var2.IS_ANIMATED;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['srcIsAnimated'] = var2;
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.filter;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.isNotNullish;
            var1 = var3.bind(var4)(var2);
case 58:
            return var1;
case 46:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var5 = function useForumPostComponentsMedia(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var3 = var1.InlineEmbedMedia;
            var1 = var3.useSetting;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var4)) { _fun0008_ip = 74; continue _fun0008 }
case 63:
            var9 = var4.components;
            if(!var3) { _fun0008_ip = 65; continue _fun0008 }
case 75:
            if(!(var1 == var9)) { _fun0008_ip = 76; continue _fun0008 }
case 65:
            var1 = new Array(0);
            _fun0008_ip = 71; continue _fun0008;
case 76:
            var3 = global;
            var4 = var3.Array;
            var3 = var4.from;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var8 = var5.bind(var6)(var2);
            var2 = var8.flattenComponents;
            var8 = var2.bind(var8)(var9);
            var2 = var8.values;
            var2 = var2.bind(var8)();
            var4 = var3.bind(var4)(var2);
            var3 = var4.flatMap;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 12;
                    var3 = var3[var7];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.ComponentType;
                    var3 = var3.THUMBNAIL;
                    if(!(var3 !== var5)) { _fun0009_ip = 26; continue _fun0009 }
case 77:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.ComponentType;
                    var3 = var3.MEDIA_GALLERY;
                    if(!(var3 !== var5)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                    var3 = null;
                    return var3;
case 78:
                    var6 = var1.items;
                    var5 = var6.map;
                    var3 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            var4 = _closure1_slot18;
                            var3 = var1.media;
                            var1 = var1.spoiler;
                            var2 = null;
                            var2 = var2 != var1;
                            if(!var2) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                            var2 = var1;
case 80:
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var3);
                    return var3;
case 26:
                    var3 = _closure1_slot18;
                    var2 = var1.media;
                    var5 = var1.spoiler;
                    var1 = null;
                    var1 = var1 != var5;
                    if(!var1) { _fun0009_ip = 68; continue _fun0009 }
case 82:
                    var1 = var5;
case 68:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = 10;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.isNotNullish;
            var1 = var3.bind(var4)(var2);
case 71:
            return var1;
case 74:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var1 = function unfurledMediaToForumPostMediaAttachment(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 13;
            var1 = var1[var12];
            var11 = undefined;
            var2 = var2.bind(var11)(var1);
            var1 = var2.getUnfurledMediaItemType;
            var6 = var1.bind(var2)(var3);
            var7 = null;
            var2 = 'INVALID';
            var1 = null;
            if(!(var2 !== var6)) { _fun0011_ip = 83; continue _fun0011 }
case 20:
            var2 = {};
            var4 = _closure1_slot10;
            var4 = var4.COMPONENT;
            var2['type'] = var4;
            var4 = var3.proxyUrl;
            var2['src'] = var4;
            var9 = var3.height;
            var10 = var7 != var9;
            var4 = 0;
            var8 = 0;
            if(!var10) { _fun0011_ip = 84; continue _fun0011 }
case 85:
            var8 = var9;
case 84:
            var2['height'] = var8;
            var9 = var3.width;
            var10 = var7 != var9;
            var8 = 0;
            if(!var10) { _fun0011_ip = 86; continue _fun0011 }
case 50:
            var8 = var9;
case 86:
            var2['width'] = var8;
            var8 = arg2;
            var2['spoiler'] = var8;
            var8 = var3.contentScanMetadata;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0011_ip = 87; continue _fun0011 }
case 88:
            var7 = var8.version;
case 87:
            var2['contentScanVersion'] = var7;
            var2['flags'] = var4;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 8;
            var7 = var5[var7];
            var9 = var10.bind(var11)(var7);
            var8 = var9.hasFlag;
            var7 = var3.flags;
            var5 = var5[var12];
            var5 = var10.bind(var11)(var5);
            var5 = var5.UnfurledMediaItemFlags;
            var5 = var5.IS_ANIMATED;
            var5 = var8.bind(var9)(var7, var5);
            var2['srcIsAnimated'] = var5;
            var5 = 'VIDEO';
            var5 = var5 === var6;
            var2['isVideo'] = var5;
            var2['mediaIndex'] = var4;
            var2['srcUnfurledMediaItem'] = var3;
            var1 = var2;
case 83:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var4 = function useForumPostMediaProperties(arg1, arg2) {
        var5 = arg1;
        var1 = _closure1_slot15;
        var4 = undefined;
        var9 = var1.bind(var4)(var5);
        var1 = new Array(0);
        var8 = 0;
        var10 = var1;
        var8 = arraySpread(var10, var9, var8);
        var7 = _closure1_slot16;
        var3 = arg2;
        var9 = var7.bind(var4)(var5, var3);
        var10 = var1;
        var8 = arraySpread(var10, var9, var8);
        var2 = _closure1_slot17;
        var9 = var2.bind(var4)(var5);
        var10 = var1;
        var2 = arraySpread(var10, var9, var8);
        return var1;
    };
    var _closure1_slot19 = var4;
    var1 = global;
    var15 = var1.Object;
    var14 = var15.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var7);
    var1 = 0;
    var14 = var13[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var14);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var13[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var13[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var13[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var13[var7];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var13[var7];
    var7 = var12.bind(var1)(var7);
    var11 = var7.MessageAttachmentFlags;
    var _closure1_slot8 = var11;
    var7 = var7.MessageEmbedMediaFlags;
    var _closure1_slot9 = var7;
    var7 = {};
    var11 = 'embed';
    var7['EMBED'] = var11;
    var11 = 'attachment';
    var7['ATTACHMENT'] = var11;
    var11 = 'component';
    var7['COMPONENT'] = var11;
    var _closure1_slot10 = var7;
    var11 = 15;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/forums/ForumPostMediaUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var11 = function getEmbedColor(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var1 != var2)) { _fun0012_ip = 89; continue _fun0012 }
case 3:
            var4 = var2.embeds;
            var3 = 0;
            var4 = var4[var3];
            if(!(var1 == var4)) { _fun0012_ip = 16; continue _fun0012 }
case 89:
            var4 = undefined;
            return var4;
case 16:
            var2 = var2.embeds;
            var2 = var2[var3];
            var2 = var2.color;
            if(!(var1 != var2)) { _fun0012_ip = 67; continue _fun0012 }
case 90:
            var1 = var2.toLowerCase;
            var4 = var1.bind(var2)();
            var3 = '#ffffff';
            var1 = undefined;
            if(!(var3 !== var4)) { _fun0012_ip = 91; continue _fun0012 }
case 67:
            var1 = undefined;
            var3 = arg2;
            if(var3) { _fun0012_ip = 91; continue _fun0012 }
case 92:
            var1 = var2;
case 91:
            return var1;
        }
    };
    var3['getEmbedColor'] = var11;
    var3['isValidImageAttachment'] = var10;
    var3['isValidVideoAttachment'] = var9;
    var3['isMediaAttachment'] = var8;
    var3['ForumPostMediaTypes'] = var7;
    var3['getForumPostMedia'] = var6;
    var3['useForumPostComponentsMedia'] = var5;
    var5 = function useForumPostMediaThumbnail(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var6 = arg2;
            var7 = arguments[2];
            var _closure2_slot0 = var6;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0013_ip = 17; continue _fun0013 }
case 93:
            var7 = false;
case 17:
            var _closure2_slot1 = var5;
            var4 = _closure1_slot19;
            var3 = arg1;
            var5 = var4.bind(var5)(var3, var7);
            _closure2_slot1 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0014_ip = 6; continue _fun0014 }
case 94:
                    var4 = _closure2_slot0;
                    var3 = var4.isMediaChannel;
                    var3 = var3.bind(var4)();
                    var5 = _closure2_slot1;
                    if(var3) { _fun0014_ip = 95; continue _fun0014 }
case 80:
                    return var5;
case 95:
                    var4 = var5.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.isThumbnail;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    if(!(var2 == var3)) { _fun0014_ip = 5; continue _fun0014 }
case 96:
                    var1 = _closure2_slot1;
                    _fun0014_ip = 97; continue _fun0014;
case 5:
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 97:
                    return var1;
case 6:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useForumPostMediaThumbnail'] = var5;
    var3['useForumPostMediaProperties'] = var4;
    var4 = function useFindFirstMediaProperties(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot15;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            var6 = _closure1_slot16;
            var5 = arg2;
            var5 = var6.bind(var3)(var4, var5);
            var2 = _closure1_slot17;
            var4 = var2.bind(var3)(var4);
            var3 = 0;
            var2 = var1[var3];
            var1 = null;
            if(!(var1 == var2)) { _fun0015_ip = 98; continue _fun0015 }
case 18:
            var2 = var5[var3];
case 98:
            if(!(var1 == var2)) { _fun0015_ip = 99; continue _fun0015 }
case 100:
            var2 = var4[var3];
case 99:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0015_ip = 97; continue _fun0015 }
case 76:
            var1 = var2;
case 97:
            return var1;
        }
    };
    var3['useFindFirstMediaProperties'] = var4;
    var4 = function useFirstMediaIsEmbed(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot15;
            var3 = undefined;
            var1 = var1.bind(var3)(var5);
            var6 = _closure1_slot16;
            var4 = arg2;
            var4 = var6.bind(var3)(var5, var4);
            var2 = _closure1_slot17;
            var5 = var2.bind(var3)(var5);
            var2 = 0;
            var1 = var1[var2];
            var3 = null;
            var1 = var3 == var1;
            if(!var1) { _fun0016_ip = 75; continue _fun0016 }
case 20:
            var5 = var5[var2];
            var1 = var3 == var5;
case 75:
            if(!var1) { _fun0016_ip = 101; continue _fun0016 }
case 102:
            var2 = var4[var2];
            var1 = var3 != var2;
case 101:
            return var1;
        }
    };
    var3['useFirstMediaIsEmbed'] = var4;
    var4 = function shouldShowAddMediaToOriginalPostModal(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var12 = arg1;
            var3 = _closure1_slot5;
            var2 = var3.getChannel;
            var1 = arg2;
            var3 = var2.bind(var3)(var1);
            var5 = null;
            if(!(var5 != var3)) { _fun0017_ip = 103; continue _fun0017 }
case 80:
            var7 = _closure1_slot6;
            var6 = var7.getMessage;
            var2 = var3.id;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 14;
            var1 = var9[var1];
            var9 = undefined;
            var11 = var10.bind(var9)(var1);
            var10 = var11.castChannelIdAsMessageId;
            var1 = var3.id;
            var1 = var10.bind(var11)(var1);
            var6 = var6.bind(var7)(var2, var1);
            var1 = var5 != var6;
            if(!var1) { _fun0017_ip = 104; continue _fun0017 }
case 69:
            var2 = var12.length;
            var7 = 0;
            var2 = var2 > var7;
            if(!var2) { _fun0017_ip = 105; continue _fun0017 }
case 25:
            var11 = var12.find;
            var10 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.isImage;
                    if(var1) { _fun0018_ip = 93; continue _fun0018 }
case 12:
                    var1 = var2.isVideo;
case 93:
                    return var1;
                }
            };
            var10 = var11.bind(var12)(var10);
            var2 = var5 != var10;
case 105:
            if(!var2) { _fun0017_ip = 106; continue _fun0017 }
case 107:
            var10 = var3.isForumPost;
            var2 = var10.bind(var3)();
case 106:
            if(!var2) { _fun0017_ip = 108; continue _fun0017 }
case 109:
            var10 = var3.ownerId;
            var12 = _closure1_slot7;
            var11 = var12.getCurrentUser;
            var11 = var11.bind(var12)();
            var12 = var5 == var11;
            var9 = undefined;
            if(var12) { _fun0017_ip = 110; continue _fun0017 }
case 111:
            var9 = var11.id;
case 110:
            var2 = var10 === var9;
case 108:
            if(!var2) { _fun0017_ip = 112; continue _fun0017 }
case 113:
            var9 = _closure1_slot4;
            var8 = var9.getCount;
            var3 = var3.id;
            var3 = var8.bind(var9)(var3);
            var2 = var7 === var3;
case 112:
            if(!var2) { _fun0017_ip = 114; continue _fun0017 }
case 115:
            var3 = var6.attachments;
            var3 = var3.length;
            var3 = var7 === var3;
            if(var3) { _fun0017_ip = 116; continue _fun0017 }
case 117:
            var7 = var6.attachments;
            var6 = var7.find;
            var4 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure1_slot11;
                    var3 = undefined;
                    var1 = var1.bind(var3)(var4);
                    if(var1) { _fun0019_ip = 16; continue _fun0019 }
case 17:
                    var2 = _closure1_slot12;
                    var1 = var2.bind(var3)(var4);
case 16:
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4);
            var3 = var5 == var4;
case 116:
            var2 = var3;
case 114:
            var1 = var2;
case 104:
            return var1;
case 103:
            var1 = false;
            return var1;
        }
    };
    var3['shouldShowAddMediaToOriginalPostModal'] = var4;
    var2 = function messageContainsGifOrVideo(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = arg1;
                var3 = arg2;
                var1 = {};
                var4 = var2.containsVideo;
                if(var4) { _fun0020_ip = 118; continue _fun0020 }
case 119:
                var4 = var3.isVideo;
case 118:
                var1['containsVideo'] = var4;
                var2 = var2.containsGif;
                if(var2) { _fun0020_ip = 120; continue _fun0020 }
case 121:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.isAnimatedImageUrl;
                var3 = var3.src;
                var2 = var4.bind(var5)(var3);
case 120:
                var1['containsGif'] = var2;
                return var1;
            }
        };
        var1 = {'containsVideo': false, 'containsGif': false};
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['messageContainsGifOrVideo'] = var2;
    return var1;
})();