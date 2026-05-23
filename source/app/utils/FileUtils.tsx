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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var8;
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
    var _closure1_slot13 = var7;
    var6 = function maxFileSize(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot4;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.getUserMaxFileSize;
            var1 = var1.bind(var3)(var4);
            var4 = null;
            if(!(var4 != var7)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var6 = _closure1_slot3;
            var3 = var6.getGuild;
            var3 = var3.bind(var6)(var7);
            if(!(var4 == var3)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var4 = _closure1_slot6;
            _fun0006_ip = 53; continue _fun0006;
case 51:
            var2 = function getGuildMaxFileSize(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.FileUploadPowerupHoldoutExperiment;
                var4 = var5.getConfig;
                var3 = {};
                var6 = 'getGuildMaxFileSize';
                var3['location'] = var6;
                var3 = var4.bind(var5)(var3);
                var3 = var3.enabled;
                var _closure3_slot1 = var3;
                var4 = _closure1_slot9;
                var3 = var4.reduce;
                var2 = _closure1_slot6;
                var1 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = arg1;
                        var5 = arg2;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var3 = var5().value;
                        var2 = var1;
                        var8 = undefined;
                        var2 = var2 === var8;
                        var6 = undefined;
                        if(var2) { _fun0007_ip = 3; continue _fun0007 }
case 54:
                        var6 = var3;
case 3:
                        var3 = undefined;
                        if(var2) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                        var7 = var5().value;
                        var5 = var1;
                        var5 = var5 === var8;
                        var3 = undefined;
                        var2 = var5;
                        if(var5) { _fun0007_ip = 55; continue _fun0007 }
case 43:
                        var3 = var7;
                        var2 = var5;
case 55:
                        if(var2) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                        var1.return();
case 57:
                        var1 = _closure3_slot1;
                        if(!var1) { _fun0007_ip = 11; continue _fun0007 }
case 59:
                        var1 = _closure1_slot5;
                        var5 = var1.MAX_FILE_SIZE_250_MB;
                        var1 = var4;
                        if(!(var6 !== var5)) { _fun0007_ip = 60; continue _fun0007 }
case 11:
                        var2 = _closure3_slot0;
                        var5 = var2.features;
                        var2 = var5.has;
                        var5 = var2.bind(var5)(var6);
                        var2 = var4;
                        if(!var5) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                        var2 = var4;
                        if(!(var3 > var4)) { _fun0007_ip = 61; continue _fun0007 }
case 63:
                        var2 = var3;
case 61:
                        var1 = var2;
case 60:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var2.bind(var5)(var3);
case 53:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.max;
            var2 = var2.bind(var3)(var4, var1);
            return var2;
case 49:
            return var1;
        }
    };
    var _closure1_slot14 = var6;
    var5 = function getUploadFileSizeSum(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = _closure1_slot10;
            var6 = undefined;
            var1 = arg1;
            var5 = var2.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            var3 = 0;
            var1 = 0;
            if(var2) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var2 = var4.value;
            var2 = var2.size;
            var3 = var3 + var2;
            var8 = var5.bind(var6)();
            var2 = var8.done;
            var4 = var8;
            var1 = var3;
            if(!var2) { _fun0008_ip = 65; continue _fun0008 }
case 64:
            return var1;
        }
    };
    var _closure1_slot15 = var5;
    var4 = function getMaxRequestSize() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var2)) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var1 = var2.isStaff;
            var1 = var1.bind(var2)();
case 66:
            var1 = 524288000;
            return var1;
        }
    };
    var _closure1_slot16 = var4;
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
    var12 = var9.GuildFeatures;
    var _closure1_slot5 = var12;
    var9 = var9.MAX_ATTACHMENT_SIZE;
    var _closure1_slot6 = var9;
    var9 = 3;
    var9 = var11[var9];
    var14 = var10.bind(var1)(var9);
    var13 = var14.MAX_GUILD_FILE_SIZE_50_MB;
    var15 = var14.MAX_GUILD_FILE_SIZE_100_MB;
    var9 = var14.MAX_GUILD_FILE_SIZE_250_MB;
    var14 = var14.MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE;
    var _closure1_slot7 = var14;
    var16 = {};
    var14 = /^image\/vnd.adobe.photoshop/;
    var16['reType'] = var14;
    var14 = 'photoshop';
    var16['klass'] = var14;
    var14 = new Array(14);
    var14[0] = var16;
    var16 = {};
    var17 = /^image\/svg\+xml/;
    var16['reType'] = var17;
    var17 = 'webcode';
    var16['klass'] = var17;
    var14[1] = var16;
    var16 = {};
    var18 = /^image\//;
    var16['reType'] = var18;
    var18 = 'image';
    var16['klass'] = var18;
    var14[2] = var16;
    var16 = {};
    var18 = /^video\//;
    var16['reType'] = var18;
    var18 = 'video';
    var16['klass'] = var18;
    var14[3] = var16;
    var16 = {};
    var18 = /\.pdf$/;
    var16['reName'] = var18;
    var18 = 'acrobat';
    var16['klass'] = var18;
    var14[4] = var16;
    var16 = {};
    var18 = /\.ae/;
    var16['reName'] = var18;
    var18 = 'ae';
    var16['klass'] = var18;
    var14[5] = var16;
    var16 = {};
    var18 = /\.sketch$/;
    var16['reName'] = var18;
    var18 = 'sketch';
    var16['klass'] = var18;
    var14[6] = var16;
    var16 = {};
    var18 = /\.ai$/;
    var16['reName'] = var18;
    var18 = 'ai';
    var16['klass'] = var18;
    var14[7] = var16;
    var16 = {};
    var18 = /\.(?:rar|zip|7z|tar|tar\.gz)$/;
    var16['reName'] = var18;
    var18 = 'archive';
    var16['klass'] = var18;
    var14[8] = var16;
    var16 = {};
    var18 = /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|ts|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/;
    var16['reName'] = var18;
    var18 = 'code';
    var16['klass'] = var18;
    var14[9] = var16;
    var16 = {};
    var18 = /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/;
    var16['reName'] = var18;
    var18 = 'document';
    var16['klass'] = var18;
    var14[10] = var16;
    var16 = {};
    var18 = /\.(?:xls|xlsx|numbers|csv)$/;
    var16['reName'] = var18;
    var18 = 'spreadsheet';
    var16['klass'] = var18;
    var14[11] = var16;
    var16 = {};
    var18 = /\.(?:html|xhtml|htm|xml|xsd|css|styl)$/;
    var16['reName'] = var18;
    var16['klass'] = var17;
    var14[12] = var16;
    var16 = {};
    var17 = /\.(?:mp3|ogg|opus|wav|aiff|flac)$/;
    var16['reName'] = var17;
    var17 = 'audio';
    var16['klass'] = var17;
    var14[13] = var16;
    var _closure1_slot8 = var14;
    var16 = var12.MAX_FILE_SIZE_250_MB;
    var14 = new Array(2);
    var14[0] = var16;
    var14[1] = var9;
    var9 = new Array(3);
    var9[0] = var14;
    var16 = var12.MAX_FILE_SIZE_100_MB;
    var14 = new Array(2);
    var14[0] = var16;
    var14[1] = var15;
    var9[1] = var14;
    var14 = var12.MAX_FILE_SIZE_50_MB;
    var12 = new Array(2);
    var12[0] = var14;
    var12[1] = var13;
    var9[2] = var12;
    var _closure1_slot9 = var9;
    var9 = 10;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'utils/FileUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function transformNativeFile(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = global;
            var1 = var1.File;
            var4 = var3 instanceof var1;
            var1 = var3;
            if(var4) { _fun0010_ip = 68; continue _fun0010 }
case 69:
            var6 = _closure1_slot12;
            var4 = var3.data;
            var5 = var4.buffer;
            var4 = var3.filename;
            var3 = null;
            var7 = var3 != var2;
            var3 = 'text/plain';
            if(!var7) { _fun0010_ip = 57; continue _fun0010 }
case 58:
            var3 = var2;
case 57:
            var2 = undefined;
            var1 = var6.bind(var2)(var5, var4, var3);
case 68:
            return var1;
        }
    };
    var3['transformNativeFile'] = var9;
    var3['makeFile'] = var8;
    var8 = function classifyFile(arg1) {
        var1 = arg1;
        var4 = _closure1_slot13;
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
        var4 = _closure1_slot14;
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
        var4 = _closure1_slot15;
        var3 = undefined;
        var2 = arg1;
        var2 = var4.bind(var3)(var2);
        var1 = _closure1_slot16;
        var1 = var1.bind(var3)();
        var1 = 524288000;
        var1 = var2 > var1;
        return var1;
    };
    var3['uploadSumTooLarge'] = var5;
    var3['getMaxRequestSize'] = var4;
    var2 = function fileUploadLimitRoadblockDescription(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var5 = var1.onClick;
            var2 = var1.maxSize;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 8;
            var3 = var3[var4];
            var8 = undefined;
            var9 = var7.bind(var8)(var3);
            var7 = var9.formatSize;
            var3 = null;
            if(!(var3 == var2)) { _fun0011_ip = 57; continue _fun0011 }
case 45:
            var3 = _closure1_slot14;
            var2 = var3.bind(var8)(var6);
case 57:
            var3 = 1024;
            var6 = var2 / var3;
            var2 = {};
            var10 = true;
            var2['useKibibytes'] = var10;
            var7 = var7.bind(var9)(var6, var2);
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = var9[var4];
            var6 = var2.bind(var8)(var4);
            var4 = var6.formatSize;
            var1 = _closure1_slot7;
            var3 = var1 / var3;
            var1 = {};
            var1['useKibibytes'] = var10;
            var6 = var4.bind(var6)(var3, var1);
            var1 = 9;
            var3 = var9[var1];
            var3 = var2.bind(var8)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var9[var1];
            var1 = var2.bind(var8)(var1);
            var1 = var1.t;
            var2 = var1.tRuxk9;
            var1 = {};
            var1['maxSize'] = var7;
            var1['premiumMaxSize'] = var6;
            var1['onClick'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['fileUploadLimitRoadblockDescription'] = var2;
    return var1;
})();