// app/modules/media_viewer/native/MediaSourceUtil.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var21 = require;
    var3 = exports;
    var22 = dependencyMap;
    var _closure1_slot0 = var21;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var22;
    var19 = function flattenSource(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = global;
            var2 = var1.Array;
            var1 = var2.isArray;
            var2 = var1.bind(var2)(var4);
            var1 = var4;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = arg2;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = 0;
            var2 = var4[var2];
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var5 = var4.length;
            var3 = 1;
            var3 = var5 - var3;
            var2 = var4[var3];
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot10 = var19;
    var18 = function isValidImageAttachment(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var5 = null;
            if(!(var5 != var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var9 = var4.filename;
            var8 = var4.height;
            var6 = var4.width;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var7 = var7.bind(var3)(var1);
            var1 = var7.isImageFile;
            var1 = var1.bind(var7)(var9);
            if(!var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var5 != var8;
case 9:
            if(!var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = 0;
            var1 = var8 > var7;
case 11:
            if(!var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = var5 != var6;
case 13:
            if(!var1) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = 0;
            var1 = var6 > var5;
case 15:
            if(!var1) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = _closure1_slot15;
            var2 = var2.bind(var3)(var4);
            var1 = !var2;
case 17:
            return var1;
case 7:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot11 = var18;
    var17 = function isValidVideoAttachment(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 19:
            var2 = var4 != var3;
            if(!var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 3;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.isVideoFile;
            var5 = var3.filename;
            var2 = var6.bind(var7)(var5);
case 20:
            if(!var2) { _fun0003_ip = 22; continue _fun0003 }
case 10:
            var3 = var3.proxy_url;
            var2 = var4 != var3;
case 22:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot12 = var17;
    var16 = function isValidImageEmbed(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.image;
            var3 = null;
            var1 = var3 != var1;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var2 = var2.thumbnail;
            var1 = var3 != var2;
case 23:
            return var1;
        }
    };
    var _closure1_slot13 = var16;
    var15 = function isValidVideoEmbed(arg1) {
        var1 = arg1;
        var2 = var1.video;
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot14 = var15;
    var14 = function isThumbnailAttachment(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = null;
            var1 = var3 != var4;
            if(!var1) { _fun0005_ip = 25; continue _fun0005 }
case 19:
            var2 = var4.flags;
            var2 = var3 != var2;
            if(!var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 4;
            var6 = var6[var5];
            var5 = undefined;
            var6 = var7.bind(var5)(var6);
            var5 = var6.hasFlag;
            var4 = var4.flags;
            var3 = _closure1_slot6;
            var3 = var3.IS_THUMBNAIL;
            var2 = var5.bind(var6)(var4, var3);
case 26:
            var1 = var2;
case 25:
            return var1;
        }
    };
    var _closure1_slot15 = var14;
    var13 = function getAttachmentUrl(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = var2.proxy_url;
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
            var3 = var2.proxy_url;
            var1 = '';
            if(!(var1 === var3)) { _fun0006_ip = 30; continue _fun0006 }
case 28:
            var1 = var2.url;
            _fun0006_ip = 31; continue _fun0006;
case 30:
            var1 = var2.proxy_url;
case 31:
            return var1;
        }
    };
    var _closure1_slot16 = var13;
    var12 = function extractMediaFromAttachment(arg1, arg2, arg3, arg4, arg5) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var9 = arg2;
            var6 = arg3;
            var10 = arg4;
            var3 = arg5;
            var1 = var2.width;
            var20 = null;
            if(!(var20 != var1)) { _fun0007_ip = 32; continue _fun0007 }
case 28:
            var1 = var2.width;
            var19 = 0;
            if(!(!(var1 <= var19))) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var1 = var2.height;
            if(!(var20 != var1)) { _fun0007_ip = 32; continue _fun0007 }
case 34:
            var1 = var2.height;
            if(!(!(var1 <= var19))) { _fun0007_ip = 32; continue _fun0007 }
case 35:
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 5;
            var4 = var13[var1];
            var8 = undefined;
            var11 = var5.bind(var8)(var4);
            var4 = var11.getEnabledHarmTypesForMessage;
            var12 = var4.bind(var11)(var9);
            var1 = var13[var1];
            var11 = var5.bind(var8)(var1);
            var4 = var11.isMediaObscuredForHarmTypes;
            var1 = {};
            var14 = 6;
            var14 = var13[var14];
            var14 = var5.bind(var8)(var14);
            var14 = var14.ObscuredMediaTypes;
            var14 = var14.Attachment;
            var1['type'] = var14;
            var1['media'] = var2;
            var4 = var4.bind(var11)(var1, var12);
            var1 = 3;
            var1 = var13[var1];
            var11 = var5.bind(var8)(var1);
            var5 = var11.isVideoFile;
            var1 = var2.filename;
            var1 = var5.bind(var11)(var1);
            var5 = _closure1_slot16;
            var5 = var5.bind(var8)(var2);
            var12 = _closure1_slot1;
            var11 = 7;
            var11 = var13[var11];
            var15 = var12.bind(var8)(var11);
            var14 = var15.getMobileOptimizedSrc;
            var13 = var2.width;
            var12 = var2.height;
            var11 = undefined;
            if(!var1) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            var11 = 'png';
case 36:
            var26 = var15;
            var25 = var5;
            var24 = var13;
            var23 = var12;
            var22 = var11;
            var11 = var26[var14](var25, var24, var23, var22, var21);
            if(var1) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var12 = {};
            var12['uri'] = var11;
            var1 = var9.id;
            var12['messageId'] = var1;
            var12['guildId'] = var10;
            var1 = var9.channel_id;
            var12['channelId'] = var1;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 8;
            var13 = var18[var1];
            var13 = var16.bind(var8)(var13);
            var13 = var13.bind(var8)(var2);
            var12['filename'] = var13;
            var12['mediaIndex'] = var6;
            var13 = var2.width;
            var12['width'] = var13;
            var13 = var2.height;
            var12['height'] = var13;
            var13 = var2.url;
            var12['sourceURI'] = var13;
            var13 = var2.description;
            var12['description'] = var13;
            var13 = 'attachment';
            var12['accessoryType'] = var13;
            var13 = var2.spoiler;
            var12['spoiler'] = var13;
            var13 = var2.flags;
            var12['flags'] = var13;
            var12['obscure'] = var4;
            var13 = var2.placeholder;
            var12['placeholder'] = var13;
            var13 = var2.content_scan_version;
            var12['contentScanVersion'] = var13;
            var12['mediaViewIndex'] = var3;
            var13 = var2.id;
            var12['attachmentId'] = var13;
            var13 = {};
            var25 = var13;
            var24 = var12;
            var14 = copyDataProperties(var25, var24);
            var14 = 'uri';
            var13[var14] = var5;
            var15 = var18[var1];
            var15 = var16.bind(var8)(var15);
            var17 = var15.bind(var8)(var2);
            var15 = var17.toLowerCase;
            var21 = var15.bind(var17)();
            var17 = var21.endsWith;
            var15 = '.webp';
            var15 = var17.bind(var21)(var15);
            var1 = var18[var1];
            var1 = var16.bind(var8)(var1);
            var16 = var1.bind(var8)(var2);
            var1 = var16.toLowerCase;
            var17 = var1.bind(var16)();
            var16 = var17.endsWith;
            var1 = '.avif';
            var1 = var16.bind(var17)(var1);
            var17 = _closure1_slot0;
            var16 = 4;
            var16 = var18[var16];
            var18 = var17.bind(var8)(var16);
            var17 = var18.hasFlag;
            var16 = var2.flags;
            var20 = var20 != var16;
            var19 = 0;
            if(!var20) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var19 = var16;
case 40:
            var16 = _closure1_slot6;
            var16 = var16.IS_ANIMATED;
            var16 = var17.bind(var18)(var19, var16);
            if(!var16) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            if(var15) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            if(var1) { _fun0007_ip = 44; continue _fun0007 }
case 42:
            if(var1) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var15 = var13;
            if(!(var5 !== var11)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var16 = new Array(2);
            var16[0] = var12;
            var16[1] = var13;
            var15 = var16;
case 48:
            return var15;
case 46:
            var15 = global;
            var15 = var15.URL;
            var16 = var15.prototype;
            var16 = Object.create(var16, {constructor: {value: var15}});
            var26 = var16;
            var25 = var5;
            var15 = new var26[var15](var25, var24);
            var18 = var15 instanceof Object ? var15 : var16;
            var19 = var18.searchParams;
            var17 = var19.append;
            var16 = 'format';
            var15 = 'webp';
            var15 = var17.bind(var19)(var16, var15);
            var15 = new Array(2);
            var15[0] = var12;
            var16 = {};
            var25 = var16;
            var24 = var13;
            var17 = copyDataProperties(var25, var24);
            var17 = var18.toString;
            var17 = var17.bind(var18)();
            var16[var14] = var17;
            var15[1] = var16;
            return var15;
case 44:
            var15 = global;
            var15 = var15.URL;
            var16 = var15.prototype;
            var16 = Object.create(var16, {constructor: {value: var15}});
            var26 = var16;
            var25 = var5;
            var15 = new var26[var15](var25, var24);
            var15 = var15 instanceof Object ? var15 : var16;
            var19 = var15.searchParams;
            var18 = var19.append;
            var17 = 'animated';
            var16 = 'true';
            var16 = var18.bind(var19)(var17, var16);
            if(!var1) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var18 = var15.searchParams;
            var17 = var18.append;
            var16 = 'format';
            var1 = 'webp';
            var1 = var17.bind(var18)(var16, var1);
case 50:
            var1 = new Array(2);
            var1[0] = var12;
            var12 = {};
            var25 = var12;
            var24 = var13;
            var13 = copyDataProperties(var25, var24);
            var13 = var15.toString;
            var13 = var13.bind(var15)();
            var12[var14] = var13;
            var1[1] = var12;
            return var1;
case 38:
            var1 = {};
            var1['uri'] = var11;
            var11 = var9.id;
            var1['messageId'] = var11;
            var1['guildId'] = var10;
            var9 = var9.channel_id;
            var1['channelId'] = var9;
            var1['videoURI'] = var5;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 8;
            var7 = var10[var7];
            var7 = var9.bind(var8)(var7);
            var7 = var7.bind(var8)(var2);
            var1['filename'] = var7;
            var1['mediaIndex'] = var6;
            var6 = var2.width;
            var1['width'] = var6;
            var6 = var2.height;
            var1['height'] = var6;
            var1['sourceURI'] = var5;
            var5 = var2.description;
            var1['description'] = var5;
            var5 = 'attachment';
            var1['accessoryType'] = var5;
            var5 = var2.spoiler;
            var1['spoiler'] = var5;
            var5 = var2.flags;
            var1['flags'] = var5;
            var1['obscure'] = var4;
            var4 = var2.placeholder;
            var1['placeholder'] = var4;
            var4 = var2.content_scan_version;
            var1['contentScanVersion'] = var4;
            var1['mediaViewIndex'] = var3;
            var2 = var2.id;
            var1['attachmentId'] = var2;
            return var1;
case 32:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var12;
    var11 = function getEmbedUrl(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var3 = var2.proxyURL;
            var1 = var2.url;
            var5 = var2.srcIsAnimated;
            var2 = null;
            if(!(var2 != var3)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var2 = '';
            if(!(var2 === var3)) { _fun0008_ip = 30; continue _fun0008 }
case 52:
            return var1;
case 30:
            var1 = global;
            var1 = var1.URL;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var11 = var2;
            var10 = var3;
            var1 = new var11[var1](var10, var9);
            var2 = var1 instanceof Object ? var1 : var2;
            var4 = var2.pathname;
            var1 = var4.toLowerCase;
            var6 = var1.bind(var4)();
            var4 = var6.endsWith;
            var1 = '.avif';
            var1 = var4.bind(var6)(var1);
            var6 = var2.pathname;
            var4 = var6.toLowerCase;
            var7 = var4.bind(var6)();
            var6 = var7.endsWith;
            var4 = '.webp';
            var4 = var6.bind(var7)(var4);
            if(var5) { _fun0008_ip = 54; continue _fun0008 }
case 55:
            if(!var1) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var8 = var2.searchParams;
            var7 = var8.append;
            var6 = 'format';
            var5 = 'webp';
            var5 = var7.bind(var8)(var6, var5);
            var5 = var2.toString;
            var5 = var5.bind(var2)();
            return var5;
case 54:
            if(var4) { _fun0008_ip = 58; continue _fun0008 }
case 59:
            if(var1) { _fun0008_ip = 58; continue _fun0008 }
case 56:
            return var3;
case 58:
            var6 = var2.searchParams;
            var5 = var6.append;
            var4 = 'animated';
            var3 = 'true';
            var3 = var5.bind(var6)(var4, var3);
            if(!var1) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var5 = var2.searchParams;
            var4 = var5.append;
            var3 = 'format';
            var1 = 'webp';
            var1 = var4.bind(var5)(var3, var1);
case 60:
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot18 = var11;
    var1 = function getEmbedContentScanVersion(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = var2.contentScanVersion;
            var3 = null;
            if(!(var3 == var1)) { _fun0009_ip = 62; continue _fun0009 }
case 29:
            var1 = var2.content_scan_version;
            var3 = var3 != var1;
            var1 = undefined;
            if(!var3) { _fun0009_ip = 30; continue _fun0009 }
case 63:
            var1 = var2.content_scan_version;
case 30:
            _fun0009_ip = 64; continue _fun0009;
case 62:
            var1 = var2.contentScanVersion;
case 64:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function getMediaContentType(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var1 = 'contentType';
            var1 = var1 in var2;
            if(var1) { _fun0010_ip = 65; continue _fun0010 }
case 66:
            var1 = 'content_type';
            var3 = var1 in var2;
            var1 = undefined;
            if(!var3) { _fun0010_ip = 67; continue _fun0010 }
case 3:
            var3 = var2.content_type;
            var4 = null;
            var4 = var4 != var3;
            var1 = undefined;
            if(!var4) { _fun0010_ip = 67; continue _fun0010 }
case 64:
            var1 = var3;
case 67:
            _fun0010_ip = 34; continue _fun0010;
case 65:
            var1 = var2.contentType;
case 34:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var10 = function getEmbedMedia(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var1 = var2.image;
            var3 = null;
            if(!(var3 == var1)) { _fun0011_ip = 68; continue _fun0011 }
case 29:
            var1 = var2.video;
case 68:
            if(!(var3 == var1)) { _fun0011_ip = 69; continue _fun0011 }
case 70:
            var1 = var2.thumbnail;
case 69:
            return var1;
        }
    };
    var _closure1_slot21 = var10;
    var9 = function extractMediaFromEmbed(arg1, arg2, arg3, arg4, arg5) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var9 = arg1;
            var13 = arg2;
            var12 = arg4;
            var14 = arg5;
            var2 = _closure1_slot21;
            var6 = undefined;
            var3 = var2.bind(var6)(var9);
            var17 = null;
            if(!(var17 != var3)) { _fun0012_ip = 71; continue _fun0012 }
case 72:
            var2 = var9.video;
            var2 = var17 != var2;
            var16 = undefined;
            if(!var2) { _fun0012_ip = 73; continue _fun0012 }
case 74:
            var4 = _closure1_slot18;
            var2 = var9.video;
            var16 = var4.bind(var6)(var2);
case 73:
            var18 = var9.type;
            var2 = _closure1_slot18;
            var5 = var2.bind(var6)(var3);
            var2 = _closure1_slot19;
            var7 = var2.bind(var6)(var9);
            var8 = _closure1_slot1;
            var22 = _closure1_slot2;
            var19 = 7;
            var2 = var22[var19];
            var11 = var8.bind(var6)(var2);
            var10 = var11.getMobileOptimizedSrc;
            var4 = var3.width;
            var2 = var3.height;
            var2 = var10.bind(var11)(var5, var4, var2);
            var4 = 9;
            var4 = var22[var4];
            var8 = var8.bind(var6)(var4);
            var4 = {};
            var10 = arg3;
            var4['contentMessage'] = var10;
            var4 = var8.bind(var6)(var13, var4);
            var10 = var4.hasSpoilerEmbeds;
            var21 = _closure1_slot0;
            var4 = 5;
            var8 = var22[var4];
            var11 = var21.bind(var6)(var8);
            var8 = var11.getEnabledHarmTypesForMessage;
            var15 = var8.bind(var11)(var13);
            var4 = var22[var4];
            var11 = var21.bind(var6)(var4);
            var8 = var11.isMediaObscuredForHarmTypes;
            var4 = {};
            var20 = 6;
            var20 = var22[var20];
            var20 = var21.bind(var6)(var20);
            var20 = var20.ObscuredMediaTypes;
            var20 = var20.Embed;
            var4['type'] = var20;
            var4['media'] = var9;
            var8 = var8.bind(var11)(var4, var15);
            var4 = 'title';
            var4 = var4 in var9;
            if(var4) { _fun0012_ip = 75; continue _fun0012 }
case 76:
            var4 = 'rawTitle';
            var4 = var4 in var9;
            var23 = undefined;
            if(!var4) { _fun0012_ip = 77; continue _fun0012 }
case 78:
            var23 = var9.rawTitle;
            _fun0012_ip = 77; continue _fun0012;
case 75:
            var23 = var9.title;
case 77:
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var4 = 10;
            var4 = var20[var4];
            var21 = var15.bind(var6)(var4);
            var11 = var21.isEmbedInline;
            var4 = {};
            var26 = var4;
            var25 = var9;
            var22 = copyDataProperties(var26, var25);
            var22 = 'rawTitle';
            var4[var22] = var23;
            var11 = var11.bind(var21)(var4);
            var4 = 11;
            var4 = var20[var4];
            var20 = var15.bind(var6)(var4);
            var15 = var20.shouldPlayVideoInline;
            var21 = var9.provider;
            var22 = var17 == var21;
            var4 = undefined;
            if(var22) { _fun0012_ip = 79; continue _fun0012 }
case 80:
            var4 = var21.name;
case 79:
            var4 = var15.bind(var20)(var4);
            if(!(var17 != var16)) { _fun0012_ip = 81; continue _fun0012 }
case 82:
            if(var4) { _fun0012_ip = 81; continue _fun0012 }
case 83:
            var15 = {};
            var15['uri'] = var2;
            var20 = var13.id;
            var15['messageId'] = var20;
            var15['guildId'] = var14;
            var20 = var13.channel_id;
            var15['channelId'] = var20;
            var15['mediaIndex'] = var12;
            var15['videoURI'] = var16;
            var16 = var9.url;
            var15['embedURI'] = var16;
            var16 = var3.width;
            var15['width'] = var16;
            var16 = var3.height;
            var15['height'] = var16;
            var16 = 'gifv';
            var16 = var16 === var18;
            var15['isGIFV'] = var16;
            var16 = var3.url;
            var15['sourceURI'] = var16;
            var16 = 'embed';
            var15['accessoryType'] = var16;
            var16 = !var11;
            var15['noCarousel'] = var16;
            var15['spoiler'] = var10;
            var16 = var9.flags;
            var15['flags'] = var16;
            var15['contentScanVersion'] = var7;
            var16 = _closure1_slot20;
            var16 = var16.bind(var6)(var3);
            var15['contentType'] = var16;
            var15['obscure'] = var8;
            var16 = var9.thumbnail;
            var18 = var17 != var16;
            var16 = undefined;
            if(!var18) { _fun0012_ip = 84; continue _fun0012 }
case 85:
            var18 = {};
            var20 = var9.thumbnail;
            var20 = var20.width;
            var18['width'] = var20;
            var20 = var9.thumbnail;
            var20 = var20.height;
            var18['height'] = var20;
            var20 = var9.thumbnail;
            var20 = var20.url;
            var18['uri'] = var20;
            var16 = var18;
case 84:
            var15['thumbnail'] = var16;
            return var15;
case 81:
            var16 = var9.type;
            var15 = 'video';
            if(!(var15 === var16)) { _fun0012_ip = 86; continue _fun0012 }
case 87:
            var16 = new Array(0);
            var15 = var9.thumbnail;
            if(!(var17 != var15)) { _fun0012_ip = 88; continue _fun0012 }
case 89:
            var18 = _closure1_slot18;
            var15 = var9.thumbnail;
            var21 = var18.bind(var6)(var15);
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var15 = var15[var19];
            var20 = var18.bind(var6)(var15);
            var19 = var20.getMobileOptimizedSrc;
            var15 = var9.thumbnail;
            var18 = var15.width;
            var15 = var9.thumbnail;
            var15 = var15.height;
            var19 = var19.bind(var20)(var21, var18, var15);
            var18 = var16.push;
            var15 = {};
            var15['uri'] = var19;
            var15['guildId'] = var14;
            var15['spoiler'] = var10;
            var19 = var9.flags;
            var15['flags'] = var19;
            var15['obscure'] = var8;
            var15['contentScanVersion'] = var7;
            var20 = _closure1_slot20;
            var19 = var9.thumbnail;
            var19 = var20.bind(var6)(var19);
            var15['contentType'] = var19;
            var19 = var13.id;
            var15['messageId'] = var19;
            var19 = !var11;
            var15['noCarousel'] = var19;
            var15['mediaIndex'] = var12;
            var19 = 'embed';
            var15['accessoryType'] = var19;
            var19 = var13.channel_id;
            var15['channelId'] = var19;
            var19 = var9.thumbnail;
            var19 = var19.url;
            var15['sourceURI'] = var19;
            var19 = var9.thumbnail;
            var19 = var19.width;
            var15['width'] = var19;
            var19 = var9.thumbnail;
            var19 = var19.height;
            var15['height'] = var19;
            var15 = var18.bind(var16)(var15);
case 88:
            if(!var4) { _fun0012_ip = 90; continue _fun0012 }
case 91:
            var15 = var9.video;
            var4 = var17 != var15;
case 90:
            if(!var4) { _fun0012_ip = 92; continue _fun0012 }
case 93:
            var15 = var16.push;
            var4 = {};
            var4['uri'] = var2;
            var4['guildId'] = var14;
            var4['spoiler'] = var10;
            var18 = var9.flags;
            var4['flags'] = var18;
            var4['obscure'] = var8;
            var4['contentScanVersion'] = var7;
            var19 = _closure1_slot20;
            var18 = var9.video;
            var18 = var19.bind(var6)(var18);
            var4['contentType'] = var18;
            var18 = var9.url;
            var4['sourceURI'] = var18;
            var18 = var13.id;
            var4['messageId'] = var18;
            var18 = !var11;
            var4['noCarousel'] = var18;
            var4['mediaIndex'] = var12;
            var18 = 'embed';
            var4['accessoryType'] = var18;
            var18 = var9.video;
            var18 = var18.width;
            var4['width'] = var18;
            var18 = var9.video;
            var18 = var18.height;
            var4['height'] = var18;
            var18 = var13.channel_id;
            var4['channelId'] = var18;
            var19 = _closure1_slot18;
            var18 = var9.video;
            var18 = var19.bind(var6)(var18);
            var4['embedURI'] = var18;
            var18 = var9.provider;
            var19 = var17 == var18;
            var17 = undefined;
            if(var19) { _fun0012_ip = 94; continue _fun0012 }
case 95:
            var17 = var18.name;
case 94:
            var4['embedProviderName'] = var17;
            var17 = true;
            var4['disableDownload'] = var17;
            var4 = var15.bind(var16)(var4);
case 92:
            var4 = var16.length;
            var15 = 0;
            if(!(var15 === var4)) { _fun0012_ip = 96; continue _fun0012 }
case 71:
            return var6;
case 96:
            var4 = var16.length;
            var18 = 1;
            if(!(var18 !== var4)) { _fun0012_ip = 97; continue _fun0012 }
case 98:
            var19 = var16.length;
            var17 = 2;
            var4 = undefined;
            if(!(var17 === var19)) { _fun0012_ip = 99; continue _fun0012 }
case 100:
            var19 = var16[var15];
            var17 = new Array(2);
            var17[0] = var19;
            var18 = var16[var18];
            var17[1] = var18;
            var4 = var17;
case 99:
            _fun0012_ip = 101; continue _fun0012;
case 97:
            var4 = var16[var15];
case 101:
            return var4;
case 86:
            var4 = {};
            var4['uri'] = var2;
            var15 = var13.id;
            var4['messageId'] = var15;
            var4['guildId'] = var14;
            var13 = var13.channel_id;
            var4['channelId'] = var13;
            var4['mediaIndex'] = var12;
            var12 = var3.width;
            var4['width'] = var12;
            var12 = var3.height;
            var4['height'] = var12;
            var12 = var3.url;
            var4['sourceURI'] = var12;
            var12 = 'embed';
            var4['accessoryType'] = var12;
            var11 = !var11;
            var4['noCarousel'] = var11;
            var4['spoiler'] = var10;
            var9 = var9.flags;
            var4['flags'] = var9;
            var4['obscure'] = var8;
            var4['contentScanVersion'] = var7;
            var1 = _closure1_slot20;
            var1 = var1.bind(var6)(var3);
            var4['contentType'] = var1;
            var3 = {};
            var26 = var3;
            var25 = var4;
            var1 = copyDataProperties(var26, var25);
            var1 = 'uri';
            var3[var1] = var5;
            var1 = var3;
            if(!(var5 !== var2)) { _fun0012_ip = 102; continue _fun0012 }
case 103:
            var2 = new Array(2);
            var2[0] = var4;
            var2[1] = var3;
            var1 = var2;
case 102:
            return var1;
        }
    };
    var _closure1_slot22 = var9;
    var1 = function toMediaSourceFromUnfurledMedia(arg1, arg2, arg3, arg4, arg5) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var9 = arg1;
            var2 = arg3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var1 = var5[var1];
            var14 = undefined;
            var3 = var6.bind(var14)(var1);
            var1 = var3.getUnfurledMediaItemType;
            var3 = var1.bind(var3)(var2);
            var1 = 13;
            var5 = var5[var1];
            var5 = var6.bind(var14)(var5);
            var5 = var5.MediaGalleryItemType;
            var5 = var5.VISUAL_PLACEHOLDER;
            if(!(var3 !== var5)) { _fun0013_ip = 104; continue _fun0013 }
case 105:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = var6[var1];
            var1 = var5.bind(var14)(var1);
            var1 = var1.MediaGalleryItemType;
            var1 = var1.VIDEO;
            var5 = var3 === var1;
            var3 = _closure1_slot1;
            var1 = 7;
            var1 = var6[var1];
            var12 = var3.bind(var14)(var1);
            var11 = var12.getMobileOptimizedSrc;
            var10 = var2.proxyUrl;
            var3 = var2.width;
            var8 = null;
            var6 = var8 != var3;
            var1 = 0;
            var7 = 0;
            if(!var6) { _fun0013_ip = 106; continue _fun0013 }
case 107:
            var7 = var3;
case 106:
            var3 = var2.height;
            var13 = var8 != var3;
            var6 = 0;
            if(!var13) { _fun0013_ip = 108; continue _fun0013 }
case 109:
            var6 = var3;
case 108:
            var3 = undefined;
            if(!var5) { _fun0013_ip = 110; continue _fun0013 }
case 111:
            var3 = 'png';
case 110:
            var20 = var12;
            var19 = var10;
            var18 = var7;
            var17 = var6;
            var16 = var3;
            var6 = var20[var11](var19, var18, var17, var16, var15);
            var7 = var2.contentScanMetadata;
            var10 = var8 == var7;
            var3 = undefined;
            if(var10) { _fun0013_ip = 112; continue _fun0013 }
case 113:
            var3 = var7.version;
case 112:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 5;
            var7 = var15[var4];
            var10 = var13.bind(var14)(var7);
            var7 = var10.getEnabledHarmTypesForMessage;
            var11 = var7.bind(var10)(var9);
            var4 = var15[var4];
            var10 = var13.bind(var14)(var4);
            var7 = var10.isMediaObscuredForHarmTypes;
            var4 = {};
            var12 = 6;
            var12 = var15[var12];
            var12 = var13.bind(var14)(var12);
            var12 = var12.ObscuredMediaTypes;
            var12 = var12.GenericMedia;
            var4['type'] = var12;
            var4['media'] = var2;
            var7 = var7.bind(var10)(var4, var11);
            var4 = {};
            var10 = var9.id;
            var4['messageId'] = var10;
            var10 = arg2;
            var4['guildId'] = var10;
            var9 = var9.channel_id;
            var4['channelId'] = var9;
            var4['uri'] = var6;
            var9 = var2.url;
            var4['sourceURI'] = var9;
            var10 = var2.width;
            var11 = var8 != var10;
            var9 = 0;
            if(!var11) { _fun0013_ip = 114; continue _fun0013 }
case 115:
            var9 = var10;
case 114:
            var4['width'] = var9;
            var9 = var2.height;
            var10 = var8 != var9;
            var8 = 0;
            if(!var10) { _fun0013_ip = 82; continue _fun0013 }
case 116:
            var8 = var9;
case 82:
            var4['height'] = var8;
            var8 = var2.contentType;
            var4['contentType'] = var8;
            var8 = arg4;
            var4['description'] = var8;
            var8 = arg5;
            var4['spoiler'] = var8;
            var4['obscure'] = var7;
            var4['contentScanVersion'] = var3;
            var3 = 'component';
            var4['accessoryType'] = var3;
            var4['mediaIndex'] = var1;
            var1 = {};
            var19 = var1;
            var18 = var4;
            var3 = copyDataProperties(var19, var18);
            var3 = var2.proxyUrl;
            if(var5) { _fun0013_ip = 117; continue _fun0013 }
case 118:
            var5 = 'uri';
            var1[var5] = var3;
            var5 = var2.proxyUrl;
            var2 = var1;
            if(!(var5 !== var6)) { _fun0013_ip = 119; continue _fun0013 }
case 120:
            var5 = {};
            var19 = var5;
            var18 = var4;
            var4 = copyDataProperties(var19, var18);
            var4 = new Array(2);
            var4[0] = var5;
            var4[1] = var1;
            var2 = var4;
case 119:
            return var2;
case 117:
            var2 = 'videoURI';
            var1[var2] = var3;
            return var1;
case 104:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function handleDownloadError() {
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 22;
        var2 = var9[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var8 = _closure1_slot0;
        var5 = 23;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.cV3alJ;
        var6 = var7.bind(var10)(var6);
        var2['title'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.r4Zjzs;
        var5 = var6.bind(var7)(var5);
        var2['body'] = var5;
        var5 = true;
        var2['isDismissable'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var8 = function downloadMediaAssetWithContentType(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var5 = arg3;
            var _closure2_slot0 = var6;
            var2 = null;
            if(!(var2 == var5)) { _fun0014_ip = 121; continue _fun0014 }
case 68:
            var2 = _closure1_slot4;
            var3 = var2.MediaManager;
            var2 = var3.downloadMediaAsset;
            var4 = var2.bind(var3)(var7, var6);
            _fun0014_ip = 22; continue _fun0014;
case 121:
            var2 = _closure1_slot4;
            var3 = var2.MediaManager;
            var2 = var3.downloadMediaAssetWithContentType;
            var4 = var2.bind(var3)(var7, var6, var5);
case 22:
            var3 = var4.then;
            var2 = _closure1_slot24;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 18;
                    var3 = var1[var6];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.MediaType;
                    var3 = var3.IMAGE;
                    if(!(var3 !== var4)) { _fun0015_ip = 110; continue _fun0015 }
case 122:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.MediaType;
                    var3 = var3.GIF;
                    if(!(var3 !== var4)) { _fun0015_ip = 123; continue _fun0015 }
case 13:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.MediaType;
                    var3 = var3.VIDEO;
                    if(!(var3 === var4)) { _fun0015_ip = 124; continue _fun0015 }
case 125:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 19;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.presentVideoSaved;
                    var3 = var3.bind(var4)();
                    _fun0015_ip = 124; continue _fun0015;
case 123:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 19;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.presentGifSaved;
                    var3 = var3.bind(var4)();
                    _fun0015_ip = 124; continue _fun0015;
case 110:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 19;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.presentImageSaved;
                    var3 = var3.bind(var4)();
case 124:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 20;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.useMediaViewerSessionManager;
                    var3 = var4.getState;
                    var6 = var3.bind(var4)();
                    var4 = _closure1_slot1;
                    var3 = 21;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot5;
                    var3 = var2.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED;
                    var2 = {};
                    var7 = var6.guildId;
                    var2['guild_id'] = var7;
                    var7 = var6.channelId;
                    var2['channel_id'] = var7;
                    var6 = var6.channelType;
                    var2['channel_type'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot25 = var8;
    var6 = function isAnimatedWebpSource(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var1 = var2.sourceURI;
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0016_ip = 3; continue _fun0016 }
case 24:
            var3 = var2.uri;
            var1 = var4 != var3;
case 3:
            if(!var1) { _fun0016_ip = 11; continue _fun0016 }
case 63:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 3;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.urlMatchesFileExtension;
            var4 = var2.sourceURI;
            var3 = _closure1_slot7;
            var1 = var5.bind(var6)(var4, var3);
case 11:
            if(!var1) { _fun0016_ip = 126; continue _fun0016 }
case 14:
            var3 = global;
            var4 = var3.URL;
            var8 = var2.uri;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            var4 = var2.searchParams;
            var3 = var4.get;
            var2 = 'animated';
            var3 = var3.bind(var4)(var2);
            var2 = 'true';
            var1 = var2 === var3;
case 126:
            return var1;
        }
    };
    var _closure1_slot26 = var6;
    var5 = function isAnimatedAvifSource(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var1 = var2.sourceURI;
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0017_ip = 3; continue _fun0017 }
case 24:
            var3 = var2.uri;
            var1 = var4 != var3;
case 3:
            if(!var1) { _fun0017_ip = 11; continue _fun0017 }
case 63:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 3;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.urlMatchesFileExtension;
            var4 = var2.sourceURI;
            var3 = _closure1_slot8;
            var1 = var5.bind(var6)(var4, var3);
case 11:
            if(!var1) { _fun0017_ip = 126; continue _fun0017 }
case 14:
            var3 = global;
            var4 = var3.URL;
            var8 = var2.uri;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            var4 = var2.searchParams;
            var3 = var4.get;
            var2 = 'animated';
            var3 = var3.bind(var4)(var2);
            var2 = 'true';
            var1 = var2 === var3;
case 126:
            return var1;
        }
    };
    var _closure1_slot27 = var5;
    var4 = function isGIFSource(arg1) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 3;
        var1 = var7[var1];
        var5 = undefined;
        var4 = var6.bind(var5)(var1);
        var3 = var4.urlMatchesFileExtension;
        var1 = arg1;
        var2 = var1.sourceURI;
        var1 = 18;
        var1 = var7[var1];
        var1 = var6.bind(var5)(var1);
        var1 = var1.GIF_RE_IOS;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot28 = var4;
    var1 = global;
    var23 = var1.Object;
    var20 = var23.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var20.bind(var23)(var3, var1, var7);
    var25 = 0;
    var20 = var22[var25];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var20);
    var _closure1_slot3 = var7;
    var24 = 1;
    var7 = var22[var24];
    var7 = var21.bind(var1)(var7);
    var7 = var7.NativeModules;
    var _closure1_slot4 = var7;
    var23 = 2;
    var7 = var22[var23];
    var7 = var21.bind(var1)(var7);
    var20 = var7.AnalyticEvents;
    var _closure1_slot5 = var20;
    var20 = var7.MessageAttachmentFlags;
    var _closure1_slot6 = var20;
    var7 = var7.WEBP_RE_IOS;
    var _closure1_slot7 = var7;
    var7 = /\.avif$/i;
    var _closure1_slot8 = var7;
    var7 = {};
    var7['PORTAL'] = var25;
    var20 = 'PORTAL';
    var7[var25] = var20;
    var7['TIKTOK_IFRAME'] = var24;
    var20 = 'TIKTOK_IFRAME';
    var7[var24] = var20;
    var7['DEFAULT'] = var23;
    var20 = 'DEFAULT';
    var7[var23] = var20;
    var _closure1_slot9 = var7;
    var20 = 25;
    var20 = var22[var20];
    var22 = var21.bind(var1)(var20);
    var21 = var22.fileFinishedImporting;
    var20 = 'modules/media_viewer/native/MediaSourceUtil.tsx';
    var20 = var21.bind(var22)(var20);
    var3['flattenSource'] = var19;
    var3['isValidImageAttachment'] = var18;
    var3['isValidVideoAttachment'] = var17;
    var3['isValidImageEmbed'] = var16;
    var3['isValidVideoEmbed'] = var15;
    var3['isThumbnailAttachment'] = var14;
    var3['getAttachmentUrl'] = var13;
    var3['extractMediaFromAttachment'] = var12;
    var3['getEmbedUrl'] = var11;
    var3['getEmbedMedia'] = var10;
    var3['extractMediaFromEmbed'] = var9;
    var9 = function extractMediaSourcesFromEmbed(arg1, arg2, arg3, arg4, arg5) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var6 = arg1;
            var2 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var2;
            var3 = arg4;
            var _closure2_slot2 = var3;
            var3 = arg5;
            var _closure2_slot3 = var3;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var7 = arg2;
            var3['contentMessage'] = var7;
            var3 = var4.bind(var5)(var6, var3);
            var3 = var3.hasSpoilerEmbeds;
            var _closure2_slot4 = var3;
            var3 = var2.images;
            var4 = null;
            if(!(var4 == var3)) { _fun0018_ip = 7; continue _fun0018 }
case 15:
            var4 = var2.image;
            var2 = new Array(1);
            var2[0] = var4;
            var3 = var2;
case 7:
            var2 = var3.map;
            var1 = function(arg1) {
                var6 = arg1;
                var1 = _closure1_slot18;
                var14 = undefined;
                var13 = var1.bind(var14)(var6);
                var3 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 7;
                var1 = var15[var1];
                var5 = var3.bind(var14)(var1);
                var4 = var5.getMobileOptimizedSrc;
                var3 = var6.width;
                var1 = var6.height;
                var7 = var4.bind(var5)(var13, var3, var1);
                var3 = _closure1_slot19;
                var5 = _closure2_slot1;
                var3 = var3.bind(var14)(var5);
                var12 = _closure1_slot0;
                var2 = 5;
                var4 = var15[var2];
                var8 = var12.bind(var14)(var4);
                var4 = var8.getEnabledHarmTypesForMessage;
                var11 = _closure2_slot0;
                var9 = var4.bind(var8)(var11);
                var2 = var15[var2];
                var8 = var12.bind(var14)(var2);
                var4 = var8.getMediaObscuredReasonFromBitmask;
                var2 = {};
                var10 = 6;
                var10 = var15[var10];
                var10 = var12.bind(var14)(var10);
                var10 = var10.ObscuredMediaTypes;
                var10 = var10.Embed;
                var2['type'] = var10;
                var2['media'] = var5;
                var2 = var4.bind(var8)(var2, var9);
                var4 = var2.length;
                var2 = 0;
                var4 = var4 > var2;
                var2 = {};
                var2['uri'] = var7;
                var7 = var11.id;
                var2['messageId'] = var7;
                var12 = _closure2_slot3;
                var2['guildId'] = var12;
                var7 = var11.channel_id;
                var2['channelId'] = var7;
                var10 = _closure2_slot2;
                var2['mediaIndex'] = var10;
                var7 = var6.width;
                var2['width'] = var7;
                var7 = var6.height;
                var2['height'] = var7;
                var7 = var6.url;
                var2['sourceURI'] = var7;
                var9 = 'embed';
                var2['accessoryType'] = var9;
                var8 = false;
                var2['noCarousel'] = var8;
                var7 = _closure2_slot4;
                var2['spoiler'] = var7;
                var1 = var5.flags;
                var2['flags'] = var1;
                var2['obscure'] = var4;
                var2['contentScanVersion'] = var3;
                var1 = var6.contentType;
                var2['contentType'] = var1;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var2['uri'] = var13;
                var13 = var11.id;
                var2['messageId'] = var13;
                var2['guildId'] = var12;
                var11 = var11.channel_id;
                var2['channelId'] = var11;
                var2['mediaIndex'] = var10;
                var10 = var6.width;
                var2['width'] = var10;
                var10 = var6.height;
                var2['height'] = var10;
                var10 = var6.url;
                var2['sourceURI'] = var10;
                var2['accessoryType'] = var9;
                var2['noCarousel'] = var8;
                var2['spoiler'] = var7;
                var6 = var6.contentType;
                var2['contentType'] = var6;
                var5 = var5.flags;
                var2['flags'] = var5;
                var2['obscure'] = var4;
                var2['contentScanVersion'] = var3;
                var1[1] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['extractMediaSourcesFromEmbed'] = var9;
    var9 = function extractMediaSourcesFromComponent(arg1, arg2, arg3, arg4, arg5) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var12 = arg1;
            var11 = arg3;
            var6 = arg5;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var11;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var7 = undefined;
            var5 = var3.bind(var7)(var1);
            var3 = var5.flattenComponents;
            var1 = arg2;
            var1 = var1.components;
            var5 = var3.bind(var5)(var1);
            var3 = var5.get;
            var1 = arg4;
            var3 = var3.bind(var5)(var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0019_ip = 127; continue _fun0019 }
case 128:
            var8 = var3.type;
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = 15;
            var5 = var5[var10];
            var5 = var9.bind(var7)(var5);
            var5 = var5.ComponentType;
            var5 = var5.MEDIA_GALLERY;
            if(!(var5 !== var8)) { _fun0019_ip = 129; continue _fun0019 }
case 130:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var5 = var9.bind(var7)(var5);
            var5 = var5.ComponentType;
            var5 = var5.THUMBNAIL;
            if(!(var5 !== var8)) { _fun0019_ip = 131; continue _fun0019 }
case 132:
            return var1;
case 131:
            var10 = _closure1_slot23;
            var15 = var3.media;
            var14 = var3.description;
            var13 = var3.spoiler;
            var18 = undefined;
            var17 = var12;
            var16 = var11;
            var10 = var18[var10](var17, var16, var15, var14, var13, var12);
            var8 = var1 == var10;
            var5 = null;
            if(var8) { _fun0019_ip = 133; continue _fun0019 }
case 134:
            var8 = {};
            var9 = 0;
            var8['initialIndex'] = var9;
            var9 = new Array(1);
            var9[0] = var10;
            var8['sources'] = var9;
            var5 = var8;
case 133:
            return var5;
case 129:
            var8 = var1 != var6;
            var5 = 0;
            if(!var8) { _fun0019_ip = 39; continue _fun0019 }
case 135:
            var8 = var3.items;
            var8 = var8.length;
            var8 = var6 <= var8;
            var5 = 0;
            if(!var8) { _fun0019_ip = 39; continue _fun0019 }
case 136:
            var5 = var6;
case 39:
            var _closure2_slot2 = var5;
            var6 = var3.items;
            var5 = var6.map;
            var3 = function(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var1 = arg1;
                    var8 = _closure1_slot23;
                    var13 = _closure2_slot0;
                    var12 = _closure2_slot1;
                    var11 = var1.media;
                    var10 = var1.description;
                    var9 = var1.spoiler;
                    var14 = undefined;
                    var1 = var14[var8](var13, var12, var11, var10, var9, var8);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0020_ip = 25; continue _fun0020 }
case 74:
                    var5 = _closure2_slot2;
                    var3 = arg2;
                    var3 = var3 < var5;
                    var1 = null;
                    if(!var3) { _fun0020_ip = 25; continue _fun0020 }
case 137:
                    var3 = _closure2_slot2;
                    var3 = var3 - 1;
                    _closure2_slot2 = var3;
                    var1 = null;
case 25:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var3);
            var3 = var5.filter;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var4 = _closure2_slot2;
            var2['initialIndex'] = var4;
            var2['sources'] = var3;
            return var2;
case 127:
            return var1;
        }
    };
    var3['extractMediaSourcesFromComponent'] = var9;
    var9 = function extractMediaSourcesFromMessage(arg1, arg2, arg3, arg4) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var11 = arg1;
            var10 = arg2;
            var9 = arg3;
            var8 = arg4;
            var1 = new Array(0);
            var2 = var10.attachments;
            var2 = var2.length;
            var7 = 0;
            var2 = var7 < var2;
            var6 = undefined;
            var14 = 1;
            var4 = null;
            var13 = 0;
            var12 = 0;
            var3 = undefined;
            if(!var2) { _fun0021_ip = 138; continue _fun0021 }
case 139:
            var2 = var10.attachments;
            var15 = var2[var12];
            var2 = _closure1_slot11;
            var2 = var2.bind(var6)(var15);
            if(var2) { _fun0021_ip = 128; continue _fun0021 }
case 22:
            var2 = _closure1_slot12;
            var2 = var2.bind(var6)(var15);
            if(!var2) { _fun0021_ip = 140; continue _fun0021 }
case 128:
            var2 = _closure1_slot17;
            var22 = undefined;
            var21 = var15;
            var20 = var11;
            var19 = var12;
            var18 = var9;
            var17 = var13;
            var2 = var22[var2](var21, var20, var19, var18, var17, var16);
            var3 = var2;
            if(!(var4 != var3)) { _fun0021_ip = 140; continue _fun0021 }
case 141:
            var16 = var1.push;
            var16 = var16.bind(var1)(var2);
            var3 = var2;
case 140:
            var2 = _closure1_slot15;
            var2 = var2.bind(var6)(var15);
            var15 = var13;
            if(var2) { _fun0021_ip = 142; continue _fun0021 }
case 143:
            var15 = var13 + var14;
case 142:
            var12 = var12 + 1;
            var2 = var10.attachments;
            var2 = var2.length;
            var13 = var15;
            if(var12 < var2) { _fun0021_ip = 139; continue _fun0021 }
case 138:
            var2 = var10.embeds;
            var2 = var2.length;
            var2 = var7 < var2;
            var7 = 0;
            var3 = undefined;
            if(!var2) { _fun0021_ip = 144; continue _fun0021 }
case 145:
            var2 = var10.embeds;
            var13 = var2[var7];
            if(!(var4 != var8)) { _fun0021_ip = 129; continue _fun0021 }
case 146:
            var12 = var8.has;
            var2 = var13.type;
            var2 = var12.bind(var8)(var2);
            var12 = var3;
            if(!var2) { _fun0021_ip = 147; continue _fun0021 }
case 129:
            var2 = _closure1_slot13;
            var2 = var2.bind(var6)(var13);
            if(var2) { _fun0021_ip = 148; continue _fun0021 }
case 149:
            var2 = _closure1_slot14;
            var2 = var2.bind(var6)(var13);
            var12 = var3;
            if(!var2) { _fun0021_ip = 147; continue _fun0021 }
case 148:
            var2 = _closure1_slot22;
            var22 = undefined;
            var21 = var13;
            var20 = var11;
            var19 = var10;
            var18 = var7;
            var17 = var9;
            var2 = var22[var2](var21, var20, var19, var18, var17, var16);
            var12 = var2;
            if(!(var4 != var12)) { _fun0021_ip = 147; continue _fun0021 }
case 150:
            var13 = var1.push;
            var13 = var13.bind(var1)(var2);
            var12 = var2;
case 147:
            var7 = var7 + 1;
            var2 = var10.embeds;
            var2 = var2.length;
            var3 = var12;
            if(var7 < var2) { _fun0021_ip = 145; continue _fun0021 }
case 144:
            return var1;
        }
    };
    var3['extractMediaSourcesFromMessage'] = var9;
    var9 = function setMediaSourcePortal(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = _closure1_slot10;
            var1 = undefined;
            var5 = var2.bind(var1)(var4);
            var2 = null;
            var2 = var2 == var5;
            if(var2) { _fun0022_ip = 72; continue _fun0022 }
case 28:
            var2 = var5.obscure;
case 72:
            if(var2) { _fun0022_ip = 25; continue _fun0022 }
case 62:
            var2 = global;
            var5 = var2.Array;
            var2 = var5.isArray;
            var2 = var2.bind(var5)(var4);
            if(var2) { _fun0022_ip = 35; continue _fun0022 }
case 151:
            var4['portal'] = var3;
            _fun0022_ip = 25; continue _fun0022;
case 35:
            var2 = 0;
            var2 = var4[var2];
            var2['portal'] = var3;
case 25:
            return var1;
        }
    };
    var3['setMediaSourcePortal'] = var9;
    var9 = function getSelectedMediaSource(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var3 = var1.index;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var3 = 0;
            if(!(!(var2 < var3))) { _fun0023_ip = 152; continue _fun0023 }
case 153:
            var3 = var1.sources;
            var3 = var3.length;
            if(!(!(var2 >= var3))) { _fun0023_ip = 152; continue _fun0023 }
case 62:
            var1 = var1.sources;
            var4 = var1[var2];
            var1 = null;
            var2 = var1 == var4;
            if(var2) { _fun0023_ip = 154; continue _fun0023 }
case 6:
            var2 = global;
            var3 = var2.Array;
            var2 = var3.isArray;
            var3 = var2.bind(var3)(var4);
            var2 = var4;
            if(!var3) { _fun0023_ip = 155; continue _fun0023 }
case 156:
            var5 = var4.length;
            var3 = 1;
            var3 = var5 - var3;
            var2 = var4[var3];
case 155:
            var1 = var2;
case 154:
            return var1;
case 152:
            var1 = null;
            return var1;
        }
    };
    var3['getSelectedMediaSource'] = var9;
    var9 = function useSelectedMediaSource(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 17;
        var3 = var6[var3];
        var6 = undefined;
        var5 = var5.bind(var6)(var3);
        var3 = var2.index;
        var3 = var5.bind(var6)(var3);
        var _closure2_slot1 = var3;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var6 = var2.sources;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var3;
        var1 = function() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = 0;
                if(!(!(var3 < var2))) { _fun0024_ip = 17; continue _fun0024 }
case 157:
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var2.sources;
                var2 = var2.length;
                if(!(!(var3 >= var2))) { _fun0024_ip = 17; continue _fun0024 }
case 30:
                var2 = _closure2_slot0;
                var2 = var2.sources;
                var1 = _closure2_slot1;
                var4 = var2[var1];
                var1 = null;
                var2 = var1 == var4;
                if(var2) { _fun0024_ip = 158; continue _fun0024 }
case 159:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var3 = var2.bind(var3)(var4);
                var2 = var4;
                if(!var3) { _fun0024_ip = 160; continue _fun0024 }
case 16:
                var5 = var4.length;
                var3 = 1;
                var3 = var5 - var3;
                var2 = var4[var3];
case 160:
                var1 = var2;
case 158:
                return var1;
case 17:
                var1 = null;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var1, var2);
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['useSelectedMediaSource'] = var9;
    var9 = function downloadMediaAsset(arg1, arg2) {
        var4 = _closure1_slot25;
        var3 = undefined;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['downloadMediaAsset'] = var9;
    var3['downloadMediaAssetWithContentType'] = var8;
    var8 = function getYoutubeClipVideoIdFromURI(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = /^https:\\/\\/www\.youtube\.com\\/embed\\/([^#\&\?]*)(\?clip=([^#\&\?]+)(&clipt=([^#\&\?]+)))?$/;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0025_ip = 161; continue _fun0025 }
case 52:
            var4 = var3.length;
            var2 = 6;
            if(!(var2 === var4)) { _fun0025_ip = 161; continue _fun0025 }
case 162:
            var2 = 1;
            var6 = var3[var2];
            var2 = 3;
            var5 = var3[var2];
            var2 = 5;
            var4 = var3[var2];
            var3 = var1 == var6;
            var2 = null;
            if(var3) { _fun0025_ip = 163; continue _fun0025 }
case 26:
            var3 = var1 == var5;
            var2 = null;
            if(var3) { _fun0025_ip = 163; continue _fun0025 }
case 164:
            var3 = var1 == var4;
            var2 = null;
            if(var3) { _fun0025_ip = 163; continue _fun0025 }
case 165:
            var3 = {};
            var3['videoId'] = var6;
            var3['clip'] = var5;
            var3['clipt'] = var4;
            var2 = var3;
case 163:
            return var2;
case 161:
            return var1;
        }
    };
    var3['getYoutubeClipVideoIdFromURI'] = var8;
    var8 = function getYoutubeVideoIdFromURI(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = /^https:\\/\\/www\.youtube\.com\\/embed\\/([^#\&\?]*)(\?start=([0-9]+))?$/;
            var5 = var2.bind(var3)(var1);
            var3 = null;
            var2 = var3 == var5;
            var1 = null;
            if(var2) { _fun0026_ip = 123; continue _fun0026 }
case 166:
            var6 = 1;
            var2 = var5[var6];
            var2 = var3 == var2;
            var1 = null;
            if(var2) { _fun0026_ip = 123; continue _fun0026 }
case 34:
            var2 = var5[var6];
            var4 = var2.length;
            var2 = 11;
            var1 = null;
            if(!(var2 === var4)) { _fun0026_ip = 123; continue _fun0026 }
case 105:
            var4 = var5.length;
            var2 = 4;
            if(!(var2 === var4)) { _fun0026_ip = 18; continue _fun0026 }
case 164:
            var4 = 3;
            var2 = var5[var4];
            if(!(var3 == var2)) { _fun0026_ip = 167; continue _fun0026 }
case 18:
            var2 = {};
            var3 = var5[var6];
            var2['videoId'] = var3;
            _fun0026_ip = 143; continue _fun0026;
case 167:
            var3 = {};
            var6 = var5[var6];
            var3['videoId'] = var6;
            var6 = global;
            var6 = var6.Number;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var3['start'] = var4;
            var2 = var3;
case 143:
            var1 = var2;
case 123:
            return var1;
        }
    };
    var3['getYoutubeVideoIdFromURI'] = var8;
    var3['VideoSourceType'] = var7;
    var7 = function getVideoSourceType(arg1, arg2) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var2 = arg2;
            var1 = var2.portal;
            var4 = null;
            if(!(var4 != var1)) { _fun0027_ip = 168; continue _fun0027 }
case 29:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 24;
            var5 = var5[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.isPortalExpired;
            var3 = var2.portal;
            var3 = var5.bind(var6)(var3);
            if(var3) { _fun0027_ip = 168; continue _fun0027 }
case 2:
            var1 = _closure1_slot9;
            var1 = var1.PORTAL;
            _fun0027_ip = 169; continue _fun0027;
case 168:
            var3 = var2.embedURI;
            if(!(var4 != var3)) { _fun0027_ip = 170; continue _fun0027 }
case 171:
            var3 = var2.embedProviderName;
            var2 = 'TikTok';
            if(!(var2 !== var3)) { _fun0027_ip = 172; continue _fun0027 }
case 170:
            var2 = _closure1_slot9;
            var2 = var2.DEFAULT;
            _fun0027_ip = 173; continue _fun0027;
case 172:
            var3 = _closure1_slot9;
            var2 = var3.TIKTOK_IFRAME;
case 173:
            var1 = var2;
case 169:
            return var1;
        }
    };
    var3['getVideoSourceType'] = var7;
    var7 = function supportOverlayVideoControls(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var3 = arg1;
            var1 = var3.videoURI;
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0028_ip = 63; continue _fun0028 }
case 24:
            var5 = var3.isGIFV;
            var2 = true;
            var1 = var2 !== var5;
case 63:
            if(var1) { _fun0028_ip = 73; continue _fun0028 }
case 5:
            var2 = var3.embedURI;
            var2 = var4 != var2;
            if(!var2) { _fun0028_ip = 174; continue _fun0028 }
case 162:
            var4 = var3.embedProviderName;
            var3 = 'TikTok';
            var2 = var3 === var4;
case 174:
            var1 = var2;
case 73:
            return var1;
        }
    };
    var3['supportOverlayVideoControls'] = var7;
    var3['isAnimatedWebpSource'] = var6;
    var3['isAnimatedAvifSource'] = var5;
    var3['isGIFSource'] = var4;
    var2 = function isAnimatedImageSource(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot28;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0029_ip = 28; continue _fun0029 }
case 175:
            var5 = _closure1_slot26;
            var1 = var5.bind(var3)(var4);
case 28:
            if(var1) { _fun0029_ip = 4; continue _fun0029 }
case 176:
            var2 = _closure1_slot27;
            var1 = var2.bind(var3)(var4);
case 4:
            return var1;
        }
    };
    var3['isAnimatedImageSource'] = var2;
    return var1;
})();