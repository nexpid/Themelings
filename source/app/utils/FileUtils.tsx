// app/utils/FileUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var8 = function makeFile(arg1, arg2, arg3) {
        var1 = global;
        var5 = var1.File;
        var4 = new Array(1);
        var1 = arg1;
        var4[0] = var1;
        var3 = {};
        var1 = arg3;
        var3['type'] = var1;
        var1 = var5.prototype;
        var2 = Object.create(var1, {constructor: {value: var5}});
        var7 = arg2;
        var9 = var2;
        var8 = var4;
        var6 = var3;
        var1 = new var9[var5](var8, var7, var6, var5);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot11 = var8;
    var7 = function classifyFileName(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = null;
            var3 = var1 == var5;
            var6 = undefined;
            var4 = undefined;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var5.toLowerCase;
            var4 = var3.bind(var5)();
case 36:
            var5 = var1 != var4;
            var3 = '';
            if(!var5) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var3 = var4;
case 38:
            _closure2_slot0 = var3;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.find;
            var3 = _closure1_slot8;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.reType;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var1 = _closure2_slot1;
                    if(!(var4 == var1)) { _fun0005_ip = 42; continue _fun0005 }
case 40:
                    var1 = var3.reName;
                    var1 = var4 != var1;
                    if(!var1) { _fun0005_ip = 43; continue _fun0005 }
case 36:
                    var5 = _closure2_slot0;
                    var4 = '';
                    var1 = var4 !== var5;
case 43:
                    if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var6 = var3.reName;
                    var5 = var6.test;
                    var4 = _closure2_slot0;
                    var1 = var5.bind(var6)(var4);
case 44:
                    _fun0005_ip = 46; continue _fun0005;
case 42:
                    var4 = var3.reType;
                    var3 = var4.test;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 46:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var3 = var1 != var2;
            var1 = 'unknown';
            if(!var3) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var1 = var2.klass;
case 47:
            return var1;
        }
    };
    var _closure1_slot12 = var7;
    var6 = function maxFileSize(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var4 = var1.bind(var2)();
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var1 = var2.getUserMaxFileSize;
            var1 = var1.bind(var2)(var4);
            var4 = null;
            if(!(var4 != var6)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var5 = _closure1_slot3;
            var2 = var5.getGuild;
            var2 = var2.bind(var5)(var6);
            if(!(var4 == var2)) { _fun0006_ip = 42; continue _fun0006 }
case 51:
            var4 = _closure1_slot5;
            _fun0006_ip = 52; continue _fun0006;
case 42:
            var3 = _closure1_slot6;
            var2 = var2.premiumTier;
            var2 = var3[var2];
            var2 = var2.limits;
            var4 = var2.fileSize;
case 52:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.max;
            var2 = var2.bind(var3)(var4, var1);
            return var2;
case 49:
            return var1;
        }
    };
    var _closure1_slot13 = var6;
    var5 = function getUploadFileSizeSum(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot9;
            var6 = undefined;
            var1 = arg1;
            var5 = var2.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            var3 = 0;
            var1 = 0;
            if(var2) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var2 = var4.value;
            var2 = var2.size;
            var3 = var3 + var2;
            var8 = var5.bind(var6)();
            var2 = var8.done;
            var4 = var8;
            var1 = var3;
            if(!var2) { _fun0007_ip = 54; continue _fun0007 }
case 53:
            return var1;
        }
    };
    var _closure1_slot14 = var5;
    var4 = function getMaxRequestSize() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var2)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var1 = var2.isStaff;
            var1 = var1.bind(var2)();
case 55:
            var1 = 524288000;
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var11[var1];
    var1 = undefined;
    var9 = var12.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.MAX_ATTACHMENT_SIZE;
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.BoostedGuildFeatures;
    var _closure1_slot6 = var12;
    var9 = var9.MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE;
    var _closure1_slot7 = var9;
    var12 = {};
    var9 = /^image\\/vnd.adobe.photoshop/;
    var12['reType'] = var9;
    var9 = 'photoshop';
    var12['klass'] = var9;
    var9 = new Array(14);
    var9[0] = var12;
    var12 = {};
    var13 = /^image\\/svg\+xml/;
    var12['reType'] = var13;
    var13 = 'webcode';
    var12['klass'] = var13;
    var9[1] = var12;
    var12 = {};
    var14 = /^image\\//;
    var12['reType'] = var14;
    var14 = 'image';
    var12['klass'] = var14;
    var9[2] = var12;
    var12 = {};
    var14 = /^video\\//;
    var12['reType'] = var14;
    var14 = 'video';
    var12['klass'] = var14;
    var9[3] = var12;
    var12 = {};
    var14 = /\.pdf$/;
    var12['reName'] = var14;
    var14 = 'acrobat';
    var12['klass'] = var14;
    var9[4] = var12;
    var12 = {};
    var14 = /\.ae/;
    var12['reName'] = var14;
    var14 = 'ae';
    var12['klass'] = var14;
    var9[5] = var12;
    var12 = {};
    var14 = /\.sketch$/;
    var12['reName'] = var14;
    var14 = 'sketch';
    var12['klass'] = var14;
    var9[6] = var12;
    var12 = {};
    var14 = /\.ai$/;
    var12['reName'] = var14;
    var14 = 'ai';
    var12['klass'] = var14;
    var9[7] = var12;
    var12 = {};
    var14 = /\.(?:rar|zip|7z|tar|tar\.gz)$/;
    var12['reName'] = var14;
    var14 = 'archive';
    var12['klass'] = var14;
    var9[8] = var12;
    var12 = {};
    var14 = /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|ts|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/;
    var12['reName'] = var14;
    var14 = 'code';
    var12['klass'] = var14;
    var9[9] = var12;
    var12 = {};
    var14 = /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/;
    var12['reName'] = var14;
    var14 = 'document';
    var12['klass'] = var14;
    var9[10] = var12;
    var12 = {};
    var14 = /\.(?:xls|xlsx|numbers|csv)$/;
    var12['reName'] = var14;
    var14 = 'spreadsheet';
    var12['klass'] = var14;
    var9[11] = var12;
    var12 = {};
    var14 = /\.(?:html|xhtml|htm|xml|xsd|css|styl)$/;
    var12['reName'] = var14;
    var12['klass'] = var13;
    var9[12] = var12;
    var12 = {};
    var13 = /\.(?:mp3|ogg|opus|wav|aiff|flac)$/;
    var12['reName'] = var13;
    var13 = 'audio';
    var12['klass'] = var13;
    var9[13] = var12;
    var _closure1_slot8 = var9;
    var9 = 9;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'utils/FileUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function transformNativeFile(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = global;
            var1 = var1.File;
            var4 = var3 instanceof var1;
            var1 = var3;
            if(var4) { _fun0009_ip = 57; continue _fun0009 }
case 58:
            var6 = _closure1_slot11;
            var4 = var3.data;
            var5 = var4.buffer;
            var4 = var3.filename;
            var3 = null;
            var7 = var3 != var2;
            var3 = 'text/plain';
            if(!var7) { _fun0009_ip = 59; continue _fun0009 }
case 60:
            var3 = var2;
case 59:
            var2 = undefined;
            var1 = var6.bind(var2)(var5, var4, var3);
case 57:
            return var1;
        }
    };
    var3['transformNativeFile'] = var9;
    var3['makeFile'] = var8;
    var8 = function classifyFile(arg1) {
        var1 = arg1;
        var4 = _closure1_slot12;
        var3 = var1.name;
        var2 = var1.type;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['classifyFile'] = var8;
    var3['classifyFileName'] = var7;
    var7 = function sizeString(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.filesize;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sizeString'] = var7;
    var3['maxFileSize'] = var6;
    var6 = function anyFileTooLarge(arg1, arg2) {
        var4 = _closure1_slot13;
        var3 = undefined;
        var2 = arg2;
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var2 = global;
        var4 = var2.Array;
        var3 = var4.from;
        var2 = arg1;
        var3 = var3.bind(var4)(var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.size;
            var1 = _closure2_slot0;
            var1 = var2 > var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['anyFileTooLarge'] = var6;
    var3['getUploadFileSizeSum'] = var5;
    var5 = function uploadSumTooLarge(arg1) {
        var4 = _closure1_slot14;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var1 = _closure1_slot15;
        var1 = var1.bind(var3)();
        var1 = 524288000;
        var1 = var2 > var1;
        return var1;
    };
    var3['uploadSumTooLarge'] = var5;
    var3['getMaxRequestSize'] = var4;
    var2 = function fileUploadLimitRoadblockDescription(arg1) {
        var1 = arg1;
        var6 = var1.guildId;
        var5 = var1.onClick;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 7;
        var3 = var9[var4];
        var2 = undefined;
        var12 = var8.bind(var2)(var3);
        var11 = var12.formatSize;
        var3 = _closure1_slot13;
        var6 = var3.bind(var2)(var6);
        var3 = 1024;
        var7 = var6 / var3;
        var6 = {};
        var10 = true;
        var6['useKibibytes'] = var10;
        var7 = var11.bind(var12)(var7, var6);
        var4 = var9[var4];
        var6 = var8.bind(var2)(var4);
        var4 = var6.formatSize;
        var1 = _closure1_slot7;
        var3 = var1 / var3;
        var1 = {};
        var1['useKibibytes'] = var10;
        var6 = var4.bind(var6)(var3, var1);
        var1 = 8;
        var3 = var9[var1];
        var3 = var8.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.format;
        var1 = var9[var1];
        var1 = var8.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.tRuxk5;
        var1 = {};
        var1['maxSize'] = var7;
        var1['premiumMaxSize'] = var6;
        var1['onClick'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['fileUploadLimitRoadblockDescription'] = var2;
    return var1;
})();