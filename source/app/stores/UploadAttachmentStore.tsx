// app/stores/UploadAttachmentStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _getUploads(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot14;
            var1 = undefined;
            var3 = arg1;
            var6 = var4.bind(var1)(var3);
            var3 = null;
            var4 = var3 == var6;
            if(var4) { _fun0002_ip = 39; continue _fun0002 }
 26:
            var5 = var6.get;
            var4 = arg2;
            var1 = var5.bind(var6)(var4);
 39:
            if(!(var3 == var1)) { _fun0002_ip = 47; continue _fun0002 }
 43:
            var1 = _closure1_slot11;
 47:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function getChannelUploads(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot10;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 == var1)) { _fun0003_ip = 54; continue _fun0003 }
 26:
            var2 = global;
            var2 = var2.Map;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var5 = var3;
            var2 = new var5[var2](var4);
            var1 = var2 instanceof Object ? var2 : var3;
 54:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function setUploads(arg1, arg2, arg3) {
        var5 = arg1;
        var3 = _closure1_slot14;
        var1 = undefined;
        var4 = var3.bind(var1)(var5);
        var7 = var4.set;
        var6 = arg2;
        var3 = arg3;
        var3 = var7.bind(var4)(var6, var3);
        var3 = _closure1_slot10;
        var2 = var3.set;
        var2 = var2.bind(var3)(var5, var4);
        return var1;
    };
    var _closure1_slot15 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.DraftType;
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.MAX_UPLOAD_COUNT;
    var _closure1_slot9 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot10 = var2;
    var2 = new Array(0);
    var _closure1_slot11 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function UploadAttachmentStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getFirstUpload';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = _closure1_slot13;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var3 = var4.bind(var3)(var2, var1);
                var1 = var3.length;
                var2 = 0;
                var4 = var1 > var2;
                var1 = null;
                if(!var4) { _fun0005_ip = 41; continue _fun0005 }
 37:
                var1 = var3[var2];
 41:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasAdditionalUploads';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = _closure1_slot13;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var3)(var2, var1);
                var1 = var1.length;
                var2 = null;
                var3 = var2 != var1;
                var2 = 0;
                if(!var3) { _fun0006_ip = 40; continue _fun0006 }
 37:
                var2 = var1;
 40:
                var1 = 1;
                var1 = var2 > var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getUploads';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = _closure1_slot13;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getUploadCount';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = _closure1_slot13;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var3)(var2, var1);
                var2 = var1.length;
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0007_ip = 40; continue _fun0007 }
 37:
                var1 = var2;
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUpload';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var2 = arg2;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot13;
            var4 = undefined;
            var3 = arg1;
            var2 = arg3;
            var3 = var5.bind(var4)(var3, var2);
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'findUpload';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            var4 = _closure1_slot13;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var3 = var4.bind(var3)(var2, var1);
            var2 = var3.find;
            var1 = arg3;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UploadAttachmentStore';
    var8['displayName'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handlePopFile(arg1) {
        var1 = arg1;
        var5 = var1.channelId;
        var6 = _closure1_slot13;
        var2 = _closure1_slot8;
        var4 = var2.ChannelMessage;
        var1 = undefined;
        var9 = var6.bind(var1)(var5, var4);
        var4 = new Array(0);
        var8 = 0;
        var10 = var4;
        var6 = arraySpread(var10, var9, var8);
        var6 = var4.shift;
        var6 = var6.bind(var4)();
        var3 = _closure1_slot15;
        var2 = var2.ChannelMessage;
        var2 = var3.bind(var1)(var5, var2, var4);
        return var1;
    };
    var2['UPLOAD_ATTACHMENT_POP_FILE'] = var9;
    var9 = function UPLOAD_ATTACHMENT_ADD_FILES(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var8 = var1.files;
            var5 = var1.channelId;
            var _closure2_slot0 = var5;
            var3 = var1.showLargeMessageDialog;
            var _closure2_slot1 = var3;
            var4 = var1.draftType;
            var3 = _closure1_slot13;
            var1 = undefined;
            var13 = var3.bind(var1)(var5, var4);
            var3 = new Array(0);
            var12 = 0;
            var14 = var3;
            var6 = arraySpread(var14, var13, var12);
            var _closure2_slot2 = var3;
            var7 = var3.length;
            var6 = var8.length;
            var7 = var7 + var6;
            var6 = _closure1_slot9;
            if(!(var7 > var6)) { _fun0008_ip = 118; continue _fun0008 }
 90:
            var6 = _closure1_slot8;
            var6 = var6.SlashCommand;
            if(!(var4 !== var6)) { _fun0008_ip = 118; continue _fun0008 }
 104:
            var6 = _closure1_slot8;
            var6 = var6.ApplicationLauncherCommand;
            if(!(var4 === var6)) { _fun0008_ip = 170; continue _fun0008 }
 118:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var8 = var2.CloudUpload;
                var11 = _closure2_slot0;
                var10 = _closure2_slot1;
                var4 = _closure2_slot2;
                var9 = var4.length;
                var2 = var8.prototype;
                var3 = Object.create(var2, {constructor: {value: var8}});
                var12 = arg1;
                var13 = var3;
                var2 = new var13[var8](var12, var11, var10, var9, var8);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var4.push;
                var2 = var2.bind(var4)(var3);
                return var1;
            };
            var2 = var6.bind(var7)(var8, var2);
            var2 = _closure1_slot15;
            var2 = var2.bind(var1)(var5, var4, var3);
            _fun0008_ip = 317; continue _fun0008;
 170:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 7;
            var2 = var10[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.show;
            var2 = {};
            var6 = _closure1_slot0;
            var5 = 8;
            var7 = var10[var5];
            var7 = var6.bind(var1)(var7);
            var11 = var7.intl;
            var8 = var11.string;
            var7 = var10[var5];
            var7 = var6.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.wOr6hI;
            var7 = var8.bind(var11)(var7);
            var2['title'] = var7;
            var7 = var10[var5];
            var7 = var6.bind(var1)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var10[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.t;
            var6 = var5.qqyp/f;
            var5 = {};
            var9 = _closure1_slot9;
            var5['limit'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2['body'] = var5;
            var2 = var3.bind(var4)(var2);
 317:
            return var1;
        }
    };
    var2['UPLOAD_ATTACHMENT_ADD_FILES'] = var9;
    var9 = function handleUpdateFile(arg1) {
        var1 = arg1;
        var5 = var1.channelId;
        var3 = var1.id;
        var _closure2_slot0 = var3;
        var3 = var1.filename;
        var _closure2_slot1 = var3;
        var3 = var1.description;
        var _closure2_slot2 = var3;
        var3 = var1.spoiler;
        var _closure2_slot3 = var3;
        var3 = var1.thumbnail;
        var _closure2_slot4 = var3;
        var4 = var1.draftType;
        var3 = _closure1_slot15;
        var6 = _closure1_slot13;
        var1 = undefined;
        var10 = var6.bind(var1)(var5, var4);
        var7 = new Array(0);
        var9 = 0;
        var11 = var7;
        var6 = arraySpread(var11, var10, var9);
        var6 = var7.map;
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = arg1;
                var4 = var1.id;
                var3 = _closure2_slot0;
                if(!(var4 === var3)) { _fun0009_ip = 93; continue _fun0009 }
 19:
                var3 = _closure2_slot1;
                var4 = undefined;
                if(!(var4 !== var3)) { _fun0009_ip = 39; continue _fun0009 }
 29:
                var3 = _closure2_slot1;
                var1['filename'] = var3;
 39:
                var3 = _closure2_slot3;
                if(!(var4 !== var3)) { _fun0009_ip = 57; continue _fun0009 }
 47:
                var3 = _closure2_slot3;
                var1['spoiler'] = var3;
 57:
                var3 = _closure2_slot2;
                if(!(var4 !== var3)) { _fun0009_ip = 75; continue _fun0009 }
 65:
                var3 = _closure2_slot2;
                var1['description'] = var3;
 75:
                var3 = _closure2_slot4;
                if(!(var4 !== var3)) { _fun0009_ip = 93; continue _fun0009 }
 83:
                var2 = _closure2_slot4;
                var1['isThumbnail'] = var2;
 93:
                return var1;
            }
        };
        var2 = var6.bind(var7)(var2);
        var2 = var3.bind(var1)(var5, var4, var2);
        return var1;
    };
    var2['UPLOAD_ATTACHMENT_UPDATE_FILE'] = var9;
    var9 = function handleRemoveFile(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var2 = var1.id;
            var _closure2_slot0 = var2;
            var4 = var1.draftType;
            var3 = _closure1_slot13;
            var1 = undefined;
            var11 = var3.bind(var1)(var5, var4);
            var3 = new Array(0);
            var7 = 0;
            var12 = var3;
            var10 = 0;
            var8 = arraySpread(var12, var11, var10);
            var8 = var3.findIndex;
            var6 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.doesImageMatchUpload;
                var2 = {};
                var1 = _closure2_slot0;
                var2['uri'] = var1;
                var2['filename'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var8.bind(var3)(var6);
            var6 = -1;
            if(!(var9 > var6)) { _fun0010_ip = 121; continue _fun0010 }
 81:
            var8 = var3.splice;
            var6 = 1;
            var6 = var8.bind(var3)(var9, var6);
            var7 = var6[var7];
            var6 = var7.cancel;
            var6 = var6.bind(var7)();
            var2 = _closure1_slot15;
            var2 = var2.bind(var1)(var5, var4, var3);
 121:
            return var1;
        }
    };
    var2['UPLOAD_ATTACHMENT_REMOVE_FILE'] = var9;
    var9 = function handleRemoveFiles(arg1) {
        var1 = arg1;
        var5 = var1.channelId;
        var8 = var1.attachmentIds;
        var4 = var1.draftType;
        var3 = _closure1_slot13;
        var1 = undefined;
        var11 = var3.bind(var1)(var5, var4);
        var3 = new Array(0);
        var10 = 0;
        var12 = var3;
        var7 = arraySpread(var12, var11, var10);
        var _closure2_slot0 = var3;
        var7 = var8.forEach;
        var6 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = _closure2_slot0;
                var3 = var4.findIndex;
                var2 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var2 = -1;
                if(!(var4 > var2)) { _fun0011_ip = 77; continue _fun0011 }
 42:
                var3 = _closure2_slot0;
                var2 = var3.splice;
                var1 = 1;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var2 = var2[var1];
                var1 = var2.cancel;
                var1 = var1.bind(var2)();
 77:
                var1 = undefined;
                return var1;
            }
        };
        var6 = var7.bind(var8)(var6);
        var2 = _closure1_slot15;
        var2 = var2.bind(var1)(var5, var4, var3);
        return var1;
    };
    var2['UPLOAD_ATTACHMENT_REMOVE_FILES'] = var9;
    var9 = function handleClearAllFiles(arg1) {
        var1 = arg1;
        var5 = var1.channelId;
        var4 = var1.draftType;
        var3 = _closure1_slot15;
        var1 = undefined;
        var2 = new Array(0);
        var2 = var3.bind(var1)(var5, var4, var2);
        return var1;
    };
    var2['UPLOAD_ATTACHMENT_CLEAR_ALL_FILES'] = var9;
    var9 = function handleSetUploads(arg1) {
        var1 = arg1;
        var5 = var1.channelId;
        var4 = var1.uploads;
        var3 = var1.draftType;
        var2 = _closure1_slot15;
        var1 = undefined;
        var2 = var2.bind(var1)(var5, var3, var4);
        return var1;
    };
    var2['UPLOAD_ATTACHMENT_SET_UPLOADS'] = var9;
    var9 = function handleSetFile(arg1) {
        var1 = arg1;
        var5 = var1.channelId;
        var2 = var1.id;
        var _closure2_slot0 = var2;
        var8 = var1.file;
        var4 = var1.draftType;
        var6 = _closure1_slot13;
        var1 = undefined;
        var11 = var6.bind(var1)(var5, var4);
        var7 = new Array(0);
        var10 = 0;
        var12 = var7;
        var6 = arraySpread(var12, var11, var10);
        var6 = var7.filter;
        var3 = function(arg1) {
            var1 = arg1;
            var2 = var1.id;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var3 = var6.bind(var7)(var3);
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var6 = 10;
        var6 = var9[var6];
        var6 = var7.bind(var1)(var6);
        var6 = var6.CloudUpload;
        var7 = var6.prototype;
        var7 = Object.create(var7, {constructor: {value: var6}});
        var13 = var7;
        var12 = var8;
        var11 = var5;
        var6 = new var13[var6](var12, var11, var10);
        var7 = var6 instanceof Object ? var6 : var7;
        var6 = var3.push;
        var6 = var6.bind(var3)(var7);
        var2 = _closure1_slot15;
        var2 = var2.bind(var1)(var5, var4, var3);
        return var1;
    };
    var2['UPLOAD_ATTACHMENT_SET_FILE'] = var9;
    var4 = function handleThreadSidebarClose(arg1) {
        var1 = arg1;
        var5 = var1.baseChannelId;
        var4 = _closure1_slot15;
        var1 = _closure1_slot8;
        var3 = var1.FirstThreadMessage;
        var1 = undefined;
        var2 = new Array(0);
        var2 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var2['SIDEBAR_CLOSE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/UploadAttachmentStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();