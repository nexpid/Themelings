// app/modules/explicit_media_redaction/ObscuredMediaUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var18 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var19 = dependencyMap;
    var _closure1_slot0 = var18;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var19;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot15;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot15;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var12 = function messageHasObscurableMediaForBitmask(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var6;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.ContentHarmTypeBitMask;
            var1 = var1.NONE;
            if(!(var6 !== var1)) { _fun0004_ip = 36; continue _fun0004 }
case 28:
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var10 = var3.attachments;
            var8 = var1 == var10;
            var2 = undefined;
            if(var8) { _fun0004_ip = 11; continue _fun0004 }
case 38:
            var9 = var10.some;
            var8 = function(arg1) {
                var4 = _closure1_slot18;
                var3 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.Attachment;
                var3['type'] = var1;
                var1 = arg1;
                var3['media'] = var1;
                var1 = _closure2_slot0;
                var1 = var4.bind(var2)(var3, var1);
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var2 = var9.bind(var10)(var8);
case 11:
            if(var2) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var9 = var3.embeds;
            var8 = var1 == var9;
            var2 = undefined;
            if(var8) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var8 = var9.some;
            var7 = function(arg1) {
                var4 = _closure1_slot18;
                var3 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.Embed;
                var3['type'] = var1;
                var1 = arg1;
                var3['media'] = var1;
                var1 = _closure2_slot0;
                var1 = var4.bind(var2)(var3, var1);
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var2 = var8.bind(var9)(var7);
case 41:
            if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 43:
            var2 = 'messageSnapshots';
            var2 = var2 in var3;
            if(var2) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var2 = 'message_snapshots';
            var7 = var2 in var3;
            var2 = null;
            if(!var7) { _fun0004_ip = 46; continue _fun0004 }
case 14:
            var2 = var3.message_snapshots;
            _fun0004_ip = 46; continue _fun0004;
case 44:
            var2 = var3.messageSnapshots;
case 46:
            if(!(var1 != var2)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0004_ip = 47; continue _fun0004 }
case 49:
            var1 = _closure1_slot14;
            var3 = var1.bind(var4)(var2);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var7 = _closure1_slot16;
            var1 = var2.value;
            var1 = var1.message;
            var1 = var7.bind(var4)(var1, var6);
            if(var1) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var7 = var3.bind(var4)();
            var1 = var7.done;
            var2 = var7;
            if(var1) { _fun0004_ip = 50; continue _fun0004 }
case 54:
            _fun0004_ip = 51; continue _fun0004;
case 52:
            var1 = true;
            return var1;
case 50:
            var1 = false;
            return var1;
case 47:
            var1 = false;
            return var1;
case 24:
            var1 = true;
            return var1;
case 39:
            var1 = true;
            return var1;
case 36:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot16 = var12;
    var1 = function findComponentMedia(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var2 = global;
            var4 = var2.Array;
            var2 = var4.isArray;
            var2 = var2.bind(var4)(var3);
            var4 = var3;
            if(var2) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var2 = new Array(1);
            var2[0] = var3;
            var4 = var2;
case 55:
            var3 = var4.flatMap;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.type;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 10;
                    var3 = var3[var7];
                    var6 = undefined;
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ComponentType;
                    var3 = var3.MEDIA_GALLERY;
                    if(!(var3 !== var4)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ComponentType;
                    var3 = var3.THUMBNAIL;
                    if(!(var3 !== var4)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ComponentType;
                    var3 = var3.FILE;
                    if(!(var3 !== var4)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ComponentType;
                    var3 = var3.SECTION;
                    if(!(var3 !== var4)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var5.bind(var6)(var3);
                    var3 = var3.ComponentType;
                    var3 = var3.ACTION_ROW;
                    if(!(var3 !== var4)) { _fun0006_ip = 63; continue _fun0006 }
case 19:
                    var3 = new Array(0);
                    return var3;
case 63:
                    var4 = var1.components;
                    var3 = var4.flatMap;
                    var2 = _closure1_slot17;
                    var2 = var3.bind(var4)(var2);
                    return var2;
case 61:
                    var2 = var1.file;
                    return var2;
case 59:
                    var2 = var1.media;
                    return var2;
case 57:
                    var3 = var1.items;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.media;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = arg1;
                    var1 = 'proxy_url';
                    var2 = var1 in var4;
                    var1 = var4;
                    if(!var2) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.toUnfurledMediaItem;
                    var1 = var2.bind(var3)(var4);
case 65:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var11 = function getMediaObscuredReasonFromBitmask(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var5 = var5.ContentHarmTypeBitMask;
            var5 = var5.NONE;
            if(!(var4 !== var5)) { _fun0008_ip = 67; continue _fun0008 }
case 65:
            var2 = _closure1_slot22;
            var4 = var2.bind(var3)(var4);
            var3 = var4.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var3 = var4.filter;
            var2 = function(arg1) {
                var4 = _closure1_slot20;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.CONTENT_SCAN_TYPE_REGISTRY;
                var1 = arg1;
                var1 = var2[var1];
                var1 = var1.obscureReason;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0008_ip = 70; continue _fun0008;
case 68:
            var1 = new Array(0);
case 70:
            return var1;
case 67:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot18 = var11;
    var9 = function isMediaScanPending(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var6 = arg2;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 7;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var3 = var3.ContentHarmTypeBitMask;
            var3 = var3.NONE;
            if(!(var6 !== var3)) { _fun0009_ip = 71; continue _fun0009 }
case 58:
            var8 = _closure1_slot4;
            var7 = var8.get;
            var3 = 'explicit_media_redaction_ignore_pending_scan';
            var3 = var7.bind(var8)(var3);
            if(var3) { _fun0009_ip = 36; continue _fun0009 }
case 72:
            var3 = _closure1_slot22;
            var3 = var3.bind(var4)(var6);
            var7 = var3.length;
            var6 = 0;
            if(!(var6 !== var7)) { _fun0009_ip = 39; continue _fun0009 }
case 73:
            var6 = var2.type;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 9;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ObscuredMediaTypes;
            var7 = var7.Embed;
            if(!(var7 !== var6)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var8];
            var7 = var9.bind(var4)(var7);
            var7 = var7.ObscuredMediaTypes;
            var7 = var7.Attachment;
            if(!(var7 !== var6)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var7.bind(var4)(var5);
            var5 = var5.ObscuredMediaTypes;
            var5 = var5.GenericMedia;
            if(!(var5 !== var6)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var5 = false;
            return var5;
case 78:
            var6 = var2.media;
            var5 = function shouldScanGenericMedia(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arg1;
                    var6 = arg2;
                    var _closure3_slot0 = var3;
                    var1 = var6.length;
                    var4 = 0;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                    var5 = var6.filter;
                    var2 = function(arg1) {
                        var4 = _closure1_slot20;
                        var3 = {};
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.ObscuredMediaTypes;
                        var1 = var1.GenericMedia;
                        var3['type'] = var1;
                        var1 = _closure3_slot0;
                        var3['media'] = var1;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        var1 = !var1;
                        return var1;
                    };
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.length;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0010_ip = 82; continue _fun0010 }
case 65:
                    var5 = _closure1_slot24;
                    var7 = var3.contentScanMetadata;
                    var3 = null;
                    var8 = var3 == var7;
                    var4 = undefined;
                    var3 = undefined;
                    if(var8) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                    var3 = var7.version;
case 83:
                    var2 = var5.bind(var4)(var3, var6);
case 82:
                    var1 = var2;
case 80:
                    return var1;
                }
            };
            var5 = var5.bind(var4)(var6, var3);
            return var5;
case 76:
            var6 = var2.media;
            var5 = function shouldScanAttachment(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var6 = arg2;
                    var _closure3_slot0 = var3;
                    var1 = var6.length;
                    var4 = 0;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0011_ip = 85; continue _fun0011 }
case 81:
                    var5 = var6.filter;
                    var2 = function(arg1) {
                        var4 = _closure1_slot20;
                        var3 = {};
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.ObscuredMediaTypes;
                        var1 = var1.Attachment;
                        var3['type'] = var1;
                        var1 = _closure3_slot0;
                        var3['media'] = var1;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        var1 = !var1;
                        return var1;
                    };
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.length;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0011_ip = 9; continue _fun0011 }
case 65:
                    var5 = _closure1_slot24;
                    var4 = var3.content_scan_version;
                    var7 = null;
                    if(!(var7 == var4)) { _fun0011_ip = 72; continue _fun0011 }
case 86:
                    var4 = var3.contentScanVersion;
case 72:
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4, var6);
case 9:
                    var1 = var2;
case 85:
                    return var1;
                }
            };
            var5 = var5.bind(var4)(var6, var3);
            return var5;
case 74:
            var2 = var2.media;
            var1 = function shouldScanEmbed(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var4 = arg2;
                    var _closure3_slot0 = var1;
                    var3 = var4.length;
                    var6 = 0;
                    if(!(var6 !== var3)) { _fun0012_ip = 87; continue _fun0012 }
case 81:
                    var3 = null;
                    if(!(var3 != var1)) { _fun0012_ip = 87; continue _fun0012 }
case 88:
                    var7 = var4.filter;
                    var5 = function(arg1) {
                        var4 = _closure1_slot20;
                        var3 = {};
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.ObscuredMediaTypes;
                        var1 = var1.Embed;
                        var3['type'] = var1;
                        var1 = _closure3_slot0;
                        var3['media'] = var1;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        var1 = !var1;
                        return var1;
                    };
                    var5 = var7.bind(var4)(var5);
                    var5 = var5.length;
                    if(!(var6 !== var5)) { _fun0012_ip = 89; continue _fun0012 }
case 90:
                    var5 = 'video';
                    var5 = var5 in var1;
                    if(!var5) { _fun0012_ip = 91; continue _fun0012 }
case 69:
                    var5 = var1.video;
                    if(!(var3 != var5)) { _fun0012_ip = 91; continue _fun0012 }
case 92:
                    var8 = var1.video;
                    var9 = var3 == var8;
                    var7 = undefined;
                    if(var9) { _fun0012_ip = 93; continue _fun0012 }
case 94:
                    var7 = var8.width;
case 93:
                    if(!(var6 === var7)) { _fun0012_ip = 91; continue _fun0012 }
case 95:
                    var7 = var1.video;
                    var8 = var3 == var7;
                    var5 = undefined;
                    if(var8) { _fun0012_ip = 96; continue _fun0012 }
case 97:
                    var5 = var7.height;
case 96:
                    if(!(var6 !== var5)) { _fun0012_ip = 98; continue _fun0012 }
case 91:
                    var5 = 'thumbnail';
                    var5 = var5 in var1;
                    if(!var5) { _fun0012_ip = 99; continue _fun0012 }
case 100:
                    var5 = var1.thumbnail;
                    if(!(var3 != var5)) { _fun0012_ip = 99; continue _fun0012 }
case 101:
                    var8 = var1.thumbnail;
                    var9 = var3 == var8;
                    var7 = undefined;
                    if(var9) { _fun0012_ip = 77; continue _fun0012 }
case 102:
                    var7 = var8.width;
case 77:
                    if(!(var6 === var7)) { _fun0012_ip = 99; continue _fun0012 }
case 16:
                    var7 = var1.thumbnail;
                    var8 = var3 == var7;
                    var5 = undefined;
                    if(var8) { _fun0012_ip = 103; continue _fun0012 }
case 104:
                    var5 = var7.height;
case 103:
                    if(!(var6 !== var5)) { _fun0012_ip = 105; continue _fun0012 }
case 99:
                    var5 = 'image';
                    var5 = var5 in var1;
                    if(!var5) { _fun0012_ip = 106; continue _fun0012 }
case 107:
                    var5 = var1.image;
                    if(!(var3 != var5)) { _fun0012_ip = 106; continue _fun0012 }
case 108:
                    var8 = var1.image;
                    var9 = var3 == var8;
                    var7 = undefined;
                    if(var9) { _fun0012_ip = 23; continue _fun0012 }
case 109:
                    var7 = var8.width;
case 23:
                    if(!(var6 === var7)) { _fun0012_ip = 106; continue _fun0012 }
case 54:
                    var7 = var1.image;
                    var8 = var3 == var7;
                    var5 = undefined;
                    if(var8) { _fun0012_ip = 110; continue _fun0012 }
case 111:
                    var5 = var7.height;
case 110:
                    if(!(var6 !== var5)) { _fun0012_ip = 112; continue _fun0012 }
case 106:
                    var5 = 'images';
                    var5 = var5 in var1;
                    if(!var5) { _fun0012_ip = 113; continue _fun0012 }
case 114:
                    var6 = var1.images;
                    if(!(var3 != var6)) { _fun0012_ip = 113; continue _fun0012 }
case 115:
                    var5 = var6.some;
                    var2 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var2 = arg1;
                            var1 = null;
                            var1 = var1 != var2;
                            if(!var1) { _fun0013_ip = 31; continue _fun0013 }
case 116:
                            var4 = var2.width;
                            var3 = 0;
                            var1 = var3 === var4;
case 31:
                            if(!var1) { _fun0013_ip = 117; continue _fun0013 }
case 81:
                            var3 = var2.height;
                            var2 = 0;
                            var1 = var2 === var3;
case 117:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var2);
                    if(var2) { _fun0012_ip = 118; continue _fun0012 }
case 113:
                    var2 = _closure1_slot24;
                    var5 = var1.content_scan_version;
                    if(!(var3 == var5)) { _fun0012_ip = 119; continue _fun0012 }
case 120:
                    var5 = var1.contentScanVersion;
                    if(!(var3 == var5)) { _fun0012_ip = 121; continue _fun0012 }
case 122:
                    var5 = var1.contentScanVersion;
                    var5 = var3 != var5;
                    var3 = null;
                    if(!var5) { _fun0012_ip = 123; continue _fun0012 }
case 124:
                    var3 = var1.contentScanVersion;
                    _fun0012_ip = 123; continue _fun0012;
case 121:
                    var3 = var1.contentScanVersion;
                    _fun0012_ip = 123; continue _fun0012;
case 119:
                    var3 = var1.content_scan_version;
case 123:
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3, var4);
                    return var1;
case 118:
                    var1 = false;
                    return var1;
case 112:
                    var1 = false;
                    return var1;
case 105:
                    var1 = false;
                    return var1;
case 98:
                    var1 = false;
                    return var1;
case 89:
                    var1 = false;
                    return var1;
case 87:
                    var1 = false;
                    return var1;
                }
            };
            var1 = var1.bind(var4)(var2, var3);
            return var1;
case 39:
            var1 = false;
            return var1;
case 36:
            var1 = false;
            return var1;
case 71:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot19 = var9;
    var8 = function isMediaFlaggedForHarmType(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var2 = null;
            if(!(var2 != var4)) { _fun0014_ip = 125; continue _fun0014 }
case 126:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var6 = undefined;
            var1 = var7.bind(var6)(var1);
            var1 = var1.CONTENT_SCAN_TYPE_REGISTRY;
            var1 = var1[var4];
            var4 = var1.devSettingKey;
            if(!(var2 != var4)) { _fun0014_ip = 9; continue _fun0014 }
case 127:
            var8 = _closure1_slot4;
            var7 = var8.get;
            var4 = var1.devSettingKey;
            var4 = var7.bind(var8)(var4);
            if(var4) { _fun0014_ip = 128; continue _fun0014 }
case 9:
            var7 = var5.type;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = 9;
            var4 = var4[var9];
            var4 = var8.bind(var6)(var4);
            var4 = var4.ObscuredMediaTypes;
            var4 = var4.Embed;
            if(!(var4 !== var7)) { _fun0014_ip = 129; continue _fun0014 }
case 130:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var6)(var4);
            var4 = var4.ObscuredMediaTypes;
            var4 = var4.Attachment;
            if(!(var4 !== var7)) { _fun0014_ip = 131; continue _fun0014 }
case 14:
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var8.bind(var6)(var4);
            var4 = var4.ObscuredMediaTypes;
            var4 = var4.GenericMedia;
            if(!(var4 !== var7)) { _fun0014_ip = 132; continue _fun0014 }
case 133:
            var4 = false;
            return var4;
case 132:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 12;
            var4 = var8[var4];
            var9 = var7.bind(var6)(var4);
            var8 = var9.hasFlag;
            var4 = var5.media;
            var7 = var4.contentScanMetadata;
            var10 = var2 == var7;
            var4 = undefined;
            if(var10) { _fun0014_ip = 134; continue _fun0014 }
case 23:
            var4 = var7.flags;
case 134:
            var10 = var2 != var4;
            var7 = 0;
            if(!var10) { _fun0014_ip = 135; continue _fun0014 }
case 47:
            var7 = var4;
case 135:
            var4 = var1.genericMediaFlag;
            var4 = var8.bind(var9)(var7, var4);
            return var4;
case 131:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 12;
            var4 = var8[var4];
            var9 = var7.bind(var6)(var4);
            var8 = var9.hasFlag;
            var4 = var5.media;
            var4 = var4.flags;
            var10 = var2 != var4;
            var7 = 0;
            if(!var10) { _fun0014_ip = 136; continue _fun0014 }
case 137:
            var7 = var4;
case 136:
            var4 = var1.attachmentFlag;
            var4 = var8.bind(var9)(var7, var4);
            return var4;
case 129:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.hasFlag;
            var5 = var5.media;
            var5 = var5.flags;
            var6 = var2 != var5;
            var2 = 0;
            if(!var6) { _fun0014_ip = 138; continue _fun0014 }
case 139:
            var2 = var5;
case 138:
            var1 = var1.embedFlag;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 128:
            var1 = true;
            return var1;
case 125:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot20 = var8;
    var7 = function contentHarmTypesToFlags(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 7;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var1 = var1.ContentHarmTypeBitMask;
            var1 = var1.NONE;
            var3 = _closure1_slot14;
            var2 = arg1;
            var5 = var3.bind(var6)(var2);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            var3 = var1;
            var1 = var3;
            if(var2) { _fun0015_ip = 140; continue _fun0015 }
case 69:
            var10 = var4.value;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var9.bind(var6)(var2);
            var2 = var2.ContentHarmType;
            var2 = var2.EXPLICIT;
            if(!(var2 !== var10)) { _fun0015_ip = 141; continue _fun0015 }
case 67:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var9.bind(var6)(var2);
            var2 = var2.ContentHarmType;
            var2 = var2.GORE;
            var9 = var3;
            if(!(var2 === var10)) { _fun0015_ip = 142; continue _fun0015 }
case 143:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var10.bind(var6)(var2);
            var2 = var2.ContentHarmTypeBitMask;
            var2 = var2.GORE;
            var9 = var3 | var2;
            _fun0015_ip = 142; continue _fun0015;
case 141:
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var10.bind(var6)(var2);
            var2 = var2.ContentHarmTypeBitMask;
            var2 = var2.EXPLICIT;
            var9 = var3 | var2;
case 142:
            var10 = var5.bind(var6)();
            var2 = var10.done;
            var3 = var9;
            var4 = var10;
            var1 = var3;
            if(!var2) { _fun0015_ip = 69; continue _fun0015 }
case 140:
            return var1;
        }
    };
    var _closure1_slot21 = var7;
    var6 = function getHarmTypeFromBitmask(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var1 = var1.ContentHarmTypeBitMask;
            var1 = var1.NONE;
            if(!(var7 !== var1)) { _fun0016_ip = 144; continue _fun0016 }
case 145:
            var1 = new Array(0);
            var3 = _closure1_slot14;
            var2 = _closure1_slot10;
            var2 = var2.bind(var6)();
            var5 = var3.bind(var6)(var2);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = 0;
            if(var2) { _fun0016_ip = 146; continue _fun0016 }
case 84:
            var2 = var3.value;
            var8 = var2.bitmask;
            var8 = var7 & var8;
            if(!(var8 > var4)) { _fun0016_ip = 147; continue _fun0016 }
case 94:
            var8 = var1.push;
            var2 = var2.harmType;
            var2 = var8.bind(var1)(var2);
case 147:
            var8 = var5.bind(var6)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0016_ip = 84; continue _fun0016 }
case 146:
            return var1;
case 144:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot22 = var6;
    var5 = function getChannelTypeById(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var7 = arg2;
            var3 = arguments[2];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0017_ip = 148; continue _fun0017 }
case 116:
            var2 = _closure1_slot9;
            var1 = new Array(2);
            var1[0] = var2;
            var2 = global;
            var2 = var2.l;
            var1[1] = var2;
            var3 = var1;
case 148:
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var6)(var3, var1);
            var1 = 0;
            var3 = var2[var1];
            var1 = 1;
            var5 = var2[var1];
            var2 = var3.getChannel;
            var1 = arg1;
            var8 = var2.bind(var3)(var1);
            var2 = _closure1_slot8;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var3 = null;
            var9 = var3 == var2;
            var1 = null;
            if(var9) { _fun0017_ip = 115; continue _fun0017 }
case 67:
            var2 = var2.id;
            var1 = null;
            if(!(var7 !== var2)) { _fun0017_ip = 115; continue _fun0017 }
case 149:
            var2 = var3 == var8;
            var1 = null;
            if(var2) { _fun0017_ip = 115; continue _fun0017 }
case 150:
            var2 = var8.isDM;
            var2 = var2.bind(var8)();
            if(var2) { _fun0017_ip = 151; continue _fun0017 }
case 45:
            var2 = var8.isGroupDM;
            var2 = var2.bind(var8)();
            if(var2) { _fun0017_ip = 151; continue _fun0017 }
case 14:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var2 = var8.bind(var6)(var2);
            var2 = var2.ContentHarmTypeChannel;
            var2 = var2.GUILD;
            _fun0017_ip = 152; continue _fun0017;
case 151:
            if(!(var3 != var7)) { _fun0017_ip = 59; continue _fun0017 }
case 153:
            var3 = var5.getFriendIDs;
            var5 = var3.bind(var5)();
            var3 = var5.includes;
            var3 = var3.bind(var5)(var7);
            if(var3) { _fun0017_ip = 154; continue _fun0017 }
case 59:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.NON_FRIEND_DM;
            _fun0017_ip = 155; continue _fun0017;
case 154:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.ContentHarmTypeChannel;
            var3 = var4.FRIEND_DM;
case 155:
            var2 = var3;
case 152:
            var1 = var2;
case 115:
            return var1;
        }
    };
    var _closure1_slot23 = var5;
    var1 = function shouldScanForContentScanVersion(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var1 = _closure1_slot9;
            var4 = var1.validContentScanVersion;
            var1 = -1;
            var1 = var1 !== var5;
            if(!var1) { _fun0018_ip = 156; continue _fun0018 }
case 157:
            var3 = var6.includes;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var7 = var7[var2];
            var2 = undefined;
            var2 = var8.bind(var2)(var7);
            var2 = var2.ContentHarmType;
            var2 = var2.GORE;
            var2 = var3.bind(var6)(var2);
            var3 = null;
            var6 = var3 == var5;
            if(var2) { _fun0018_ip = 158; continue _fun0018 }
case 83:
            var2 = var6;
            _fun0018_ip = 93; continue _fun0018;
case 158:
            var3 = var6;
            if(var6) { _fun0018_ip = 159; continue _fun0018 }
case 11:
            var3 = var5 < var4;
case 159:
            var2 = var3;
case 93:
            var1 = var2;
case 156:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var4 = function shouldRedactForSettingValue(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0019_ip = 160; continue _fun0019 }
case 116:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 13;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var3 = var3.ExplicitContentRedaction;
            var8 = var3.BLOCK;
            var3 = new Array(2);
            var3[0] = var8;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.ExplicitContentRedaction;
            var2 = var2.BLUR;
            var3[1] = var2;
            var2 = var3.includes;
            var1 = var2.bind(var3)(var4);
case 160:
            return var1;
        }
    };
    var _closure1_slot25 = var4;
    var2 = function getChannelIdAndAuthorIdFromMessage(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var4 = arg1;
            var5 = null;
            if(!(var5 != var4)) { _fun0020_ip = 161; continue _fun0020 }
case 116:
            var1 = 'channel_id';
            var1 = var1 in var4;
            var3 = null;
            if(!var1) { _fun0020_ip = 3; continue _fun0020 }
case 162:
            var3 = var4.channel_id;
case 3:
            var1 = 'messageReference';
            var1 = var1 in var4;
            if(!var1) { _fun0020_ip = 163; continue _fun0020 }
case 164:
            var7 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var7.bind(var1)(var2);
            var2 = var2.bind(var1)(var4);
            if(!var2) { _fun0020_ip = 163; continue _fun0020 }
case 165:
            var2 = var4.messageReference;
            if(!(var5 == var2)) { _fun0020_ip = 166; continue _fun0020 }
case 163:
            var2 = 'author';
            var2 = var2 in var4;
            if(var2) { _fun0020_ip = 167; continue _fun0020 }
case 168:
            var2 = 'author_id';
            var7 = var2 in var4;
            var2 = null;
            if(!var7) { _fun0020_ip = 78; continue _fun0020 }
case 169:
            var2 = var4.author_id;
            _fun0020_ip = 78; continue _fun0020;
case 167:
            var8 = var4.author;
            var9 = var5 == var8;
            var7 = undefined;
            if(var9) { _fun0020_ip = 170; continue _fun0020 }
case 144:
            var7 = var8.id;
case 170:
            var2 = var7;
            _fun0020_ip = 78; continue _fun0020;
case 166:
            var8 = _closure1_slot6;
            var7 = var8.getMessage;
            var6 = var4.messageReference;
            var6 = var6.channel_id;
            var4 = var4.messageReference;
            var4 = var4.message_id;
            var4 = var7.bind(var8)(var6, var4);
            var6 = var5 != var4;
            var2 = null;
            if(!var6) { _fun0020_ip = 78; continue _fun0020 }
case 171:
            var4 = var4.author;
            var5 = var5 == var4;
            var1 = undefined;
            if(var5) { _fun0020_ip = 172; continue _fun0020 }
case 173:
            var1 = var4.id;
case 172:
            var2 = var1;
case 78:
            var1 = {};
            var1['channelId'] = var3;
            var1['authorId'] = var2;
            return var1;
case 161:
            var1 = {'channelId': null, 'authorId': null};
            return var1;
        }
    };
    var _closure1_slot26 = var2;
    var1 = global;
    var16 = var1.Object;
    var15 = var16.defineProperty;
    var13 = {};
    var1 = true;
    var13['value'] = var1;
    var1 = '__esModule';
    var1 = var15.bind(var16)(var3, var1, var13);
    var1 = 0;
    var13 = var19[var1];
    var1 = undefined;
    var13 = var14.bind(var1)(var13);
    var _closure1_slot3 = var13;
    var13 = 1;
    var13 = var19[var13];
    var13 = var14.bind(var1)(var13);
    var _closure1_slot4 = var13;
    var13 = 2;
    var13 = var19[var13];
    var13 = var14.bind(var1)(var13);
    var _closure1_slot5 = var13;
    var13 = 3;
    var13 = var19[var13];
    var13 = var14.bind(var1)(var13);
    var _closure1_slot6 = var13;
    var13 = 4;
    var13 = var19[var13];
    var13 = var14.bind(var1)(var13);
    var _closure1_slot7 = var13;
    var13 = 5;
    var13 = var19[var13];
    var13 = var14.bind(var1)(var13);
    var _closure1_slot8 = var13;
    var13 = 6;
    var13 = var19[var13];
    var13 = var14.bind(var1)(var13);
    var _closure1_slot9 = var13;
    var16 = function getEligibleHarmTypesConfigsForContext() {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 7;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var1.CONTENT_SCAN_TYPE_REGISTRY;
        var3 = var2.bind(var3)(var1);
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var4 = arg1;
                var1 = var4.isEligible;
                var3 = null;
                var1 = var3 == var1;
                if(var1) { _fun0021_ip = 2; continue _fun0021 }
case 174:
                var2 = var4.isEligible;
                var3 = var3 == var2;
                var2 = undefined;
                if(var3) { _fun0021_ip = 175; continue _fun0021 }
case 33:
                var3 = var4.isEligible;
                var2 = var3.bind(var4)();
case 175:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot10 = var16;
    var15 = function getEnabledHarmTypesForMessage(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot26;
            var4 = undefined;
            var1 = var1.bind(var4)(var6);
            var5 = var1.channelId;
            var3 = var1.authorId;
            var1 = null;
            if(!(var1 != var5)) { _fun0022_ip = 176; continue _fun0022 }
case 177:
            if(!(var1 != var6)) { _fun0022_ip = 176; continue _fun0022 }
case 178:
            var1 = _closure1_slot12;
            var1 = var1.bind(var4)(var5, var3);
            _fun0022_ip = 179; continue _fun0022;
case 176:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ContentHarmTypeBitMask;
            var1 = var2.NONE;
case 179:
            return var1;
        }
    };
    var _closure1_slot11 = var15;
    var14 = function getEnabledHarmTypesForChannelAndAuthorId(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var7 = arg2;
            var3 = _closure1_slot8;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0023_ip = 180; continue _fun0023 }
case 162:
            var3 = var3.id;
            if(!(var7 !== var3)) { _fun0023_ip = 180; continue _fun0023 }
case 177:
            var6 = _closure1_slot23;
            var3 = _closure1_slot5;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = _closure1_slot7;
            var4[1] = var3;
            var5 = undefined;
            var3 = arg1;
            var3 = var6.bind(var5)(var3, var7, var4);
            if(!(var2 != var3)) { _fun0023_ip = 83; continue _fun0023 }
case 165:
            var2 = _closure1_slot13;
            var2 = var2.bind(var5)(var3);
            _fun0023_ip = 42; continue _fun0023;
case 83:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.ContentHarmTypeBitMask;
            var2 = var3.NONE;
case 42:
            return var2;
case 180:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.ContentHarmTypeBitMask;
            var1 = var1.NONE;
            return var1;
        }
    };
    var _closure1_slot12 = var14;
    var13 = function getEnabledHarmTypesBitmaskForChannelType(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot10;
            var4 = undefined;
            var6 = var3.bind(var4)();
            var3 = null;
            if(!(var3 != var5)) { _fun0024_ip = 158; continue _fun0024 }
case 34:
            var3 = _closure1_slot21;
            var5 = var6.map;
            var1 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot25;
                    var1 = var2.getUserSettingsWithDefaults;
                    var3 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var1 = null;
                    if(!var3) { _fun0025_ip = 5; continue _fun0025 }
case 175:
                    var1 = var2.harmType;
case 5:
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var1);
            var5 = var6.filter;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.isNotNullish;
            var1 = var5.bind(var6)(var1);
            var1 = var3.bind(var4)(var1);
            _fun0024_ip = 97; continue _fun0024;
case 158:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ContentHarmTypeBitMask;
            var1 = var2.NONE;
case 97:
            return var1;
        }
    };
    var _closure1_slot13 = var13;
    var17 = 15;
    var17 = var19[var17];
    var19 = var18.bind(var1)(var17);
    var18 = var19.fileFinishedImporting;
    var17 = 'modules/explicit_media_redaction/ObscuredMediaUtils.tsx';
    var17 = var18.bind(var19)(var17);
    var3['getEligibleHarmTypesConfigsForContext'] = var16;
    var3['getEnabledHarmTypesForMessage'] = var15;
    var3['getEnabledHarmTypesForChannelAndAuthorId'] = var14;
    var3['getEnabledHarmTypesBitmaskForChannelType'] = var13;
    var13 = function messageHasObscurableMedia(arg1) {
        var4 = arg1;
        var3 = _closure1_slot16;
        var1 = _closure1_slot11;
        var2 = undefined;
        var1 = var1.bind(var2)(var4);
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var3['messageHasObscurableMedia'] = var13;
    var3['messageHasObscurableMediaForBitmask'] = var12;
    var12 = function hasUnscannedMedia(arg1, arg2) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var1 = null;
            if(!(var1 == var6)) { _fun0026_ip = 34; continue _fun0026 }
case 32:
            var5 = _closure1_slot11;
            var4 = undefined;
            var6 = var5.bind(var4)(var3);
case 34:
            var _closure2_slot0 = var6;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 7;
            var7 = var7[var4];
            var4 = undefined;
            var7 = var8.bind(var4)(var7);
            var7 = var7.ContentHarmTypeBitMask;
            var7 = var7.NONE;
            if(!(var6 !== var7)) { _fun0026_ip = 181; continue _fun0026 }
case 182:
            var10 = var3.attachments;
            var8 = var1 == var10;
            var7 = undefined;
            if(var8) { _fun0026_ip = 95; continue _fun0026 }
case 82:
            var9 = var10.some;
            var8 = function(arg1) {
                var4 = _closure1_slot19;
                var3 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.Attachment;
                var3['type'] = var1;
                var1 = arg1;
                var3['media'] = var1;
                var1 = _closure2_slot0;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var7 = var9.bind(var10)(var8);
case 95:
            if(var7) { _fun0026_ip = 183; continue _fun0026 }
case 184:
            var10 = var3.embeds;
            var8 = var1 == var10;
            var7 = undefined;
            if(var8) { _fun0026_ip = 185; continue _fun0026 }
case 186:
            var9 = var10.some;
            var8 = function(arg1) {
                var4 = _closure1_slot19;
                var3 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.Embed;
                var3['type'] = var1;
                var1 = arg1;
                var3['media'] = var1;
                var1 = _closure2_slot0;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var7 = var9.bind(var10)(var8);
case 185:
            if(var7) { _fun0026_ip = 136; continue _fun0026 }
case 45:
            var7 = var3.components;
            if(!(var1 != var7)) { _fun0026_ip = 151; continue _fun0026 }
case 187:
            var8 = _closure1_slot17;
            var7 = var3.components;
            var8 = var8.bind(var4)(var7);
            var7 = var8.some;
            var2 = function(arg1) {
                var4 = _closure1_slot19;
                var3 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.GenericMedia;
                var3['type'] = var1;
                var1 = arg1;
                var3['media'] = var1;
                var1 = _closure2_slot0;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var2 = var7.bind(var8)(var2);
            if(var2) { _fun0026_ip = 8; continue _fun0026 }
case 151:
            var2 = 'messageSnapshots';
            var2 = var2 in var3;
            if(var2) { _fun0026_ip = 188; continue _fun0026 }
case 79:
            var2 = 'message_snapshots';
            var7 = var2 in var3;
            var2 = null;
            if(!var7) { _fun0026_ip = 189; continue _fun0026 }
case 190:
            var2 = var3.message_snapshots;
            _fun0026_ip = 189; continue _fun0026;
case 188:
            var2 = var3.messageSnapshots;
case 189:
            if(!(var1 != var2)) { _fun0026_ip = 191; continue _fun0026 }
case 140:
            var3 = var2.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0026_ip = 191; continue _fun0026 }
case 74:
            var1 = _closure1_slot14;
            var3 = var1.bind(var4)(var2);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0026_ip = 113; continue _fun0026 }
case 110:
            var7 = _closure1_slot27;
            var1 = var2.value;
            var1 = var1.message;
            var1 = var7.bind(var4)(var1, var6);
            if(var1) { _fun0026_ip = 192; continue _fun0026 }
case 193:
            var7 = var3.bind(var4)();
            var1 = var7.done;
            var2 = var7;
            if(var1) { _fun0026_ip = 113; continue _fun0026 }
case 194:
            _fun0026_ip = 110; continue _fun0026;
case 192:
            var1 = true;
            return var1;
case 113:
            var1 = false;
            return var1;
case 191:
            var1 = false;
            return var1;
case 8:
            var1 = true;
            return var1;
case 136:
            var1 = true;
            return var1;
case 183:
            var1 = true;
            return var1;
case 181:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot27 = var12;
    var3['hasUnscannedMedia'] = var12;
    var12 = function getUnscannedMediaIds(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot11;
            var2 = undefined;
            var5 = var5.bind(var2)(var1);
            var _closure2_slot0 = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var3 = var6.bind(var2)(var3);
            var3 = var3.ContentHarmTypeBitMask;
            var3 = var3.NONE;
            if(!(var5 !== var3)) { _fun0027_ip = 195; continue _fun0027 }
case 90:
            var7 = var1.attachments;
            var3 = null;
            var5 = var3 == var7;
            var9 = undefined;
            if(var5) { _fun0027_ip = 80; continue _fun0027 }
case 84:
            var6 = var7.filter;
            var5 = function(arg1) {
                var4 = _closure1_slot19;
                var3 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.Attachment;
                var3['type'] = var1;
                var1 = arg1;
                var3['media'] = var1;
                var1 = _closure2_slot0;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var9 = var6.bind(var7)(var5);
case 80:
            var7 = var1.embeds;
            var1 = var3 == var7;
            var6 = undefined;
            if(var1) { _fun0027_ip = 196; continue _fun0027 }
case 70:
            var5 = var7.filter;
            var1 = function(arg1) {
                var4 = _closure1_slot19;
                var3 = {};
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.Embed;
                var3['type'] = var1;
                var1 = arg1;
                var3['media'] = var1;
                var1 = _closure2_slot0;
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            };
            var6 = var5.bind(var7)(var1);
case 196:
            var1 = {};
            var7 = var3 == var9;
            var5 = undefined;
            if(var7) { _fun0027_ip = 197; continue _fun0027 }
case 198:
            var8 = var9.map;
            var7 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var9 = var8.bind(var9)(var7);
            var8 = var9.filter;
            var7 = global;
            var7 = var7.Boolean;
            var5 = var8.bind(var9)(var7);
case 197:
            if(!(var3 == var5)) { _fun0027_ip = 199; continue _fun0027 }
case 200:
            var5 = new Array(0);
case 199:
            var1['attachmentIds'] = var5;
            var5 = var3 == var6;
            var2 = undefined;
            if(var5) { _fun0027_ip = 201; continue _fun0027 }
case 202:
            var5 = var6.map;
            var4 = function(arg1, arg2) {
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'embed_';
                var1 = arg2;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var6 = var5.bind(var6)(var4);
            var5 = var6.filter;
            var4 = global;
            var4 = var4.Boolean;
            var2 = var5.bind(var6)(var4);
case 201:
            if(!(var3 == var2)) { _fun0027_ip = 76; continue _fun0027 }
case 108:
            var2 = new Array(0);
case 76:
            var1['embedIds'] = var2;
            return var1;
case 195:
            var1 = {};
            var2 = new Array(0);
            var1['attachmentIds'] = var2;
            var2 = new Array(0);
            var1['embedIds'] = var2;
            return var1;
        }
    };
    var3['getUnscannedMediaIds'] = var12;
    var3['getMediaObscuredReasonFromBitmask'] = var11;
    var10 = function isMediaObscuredForHarmTypes(arg1, arg2) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var4 = arg2;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var5 = var5.ContentHarmTypeBitMask;
            var5 = var5.NONE;
            if(!(var4 !== var5)) { _fun0028_ip = 40; continue _fun0028 }
case 65:
            var1 = _closure1_slot22;
            var5 = var1.bind(var3)(var4);
            var1 = var5.length;
            var3 = 0;
            var1 = var3 !== var1;
            if(!var1) { _fun0028_ip = 159; continue _fun0028 }
case 182:
            var4 = var5.filter;
            var2 = function(arg1) {
                var4 = _closure1_slot20;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var2 = var2.length;
            var1 = var2 > var3;
case 159:
            return var1;
case 40:
            var1 = false;
            return var1;
        }
    };
    var3['isMediaObscuredForHarmTypes'] = var10;
    var3['isMediaScanPending'] = var9;
    var3['isMediaFlaggedForHarmType'] = var8;
    var3['contentHarmTypesToFlags'] = var7;
    var3['getHarmTypeFromBitmask'] = var6;
    var3['getChannelTypeById'] = var5;
    var3['shouldRedactForSettingValue'] = var4;
    var3['getChannelIdAndAuthorIdFromMessage'] = var2;
    return var1;
})();