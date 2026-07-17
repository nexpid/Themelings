// app/modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
    var1 = function measure(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var5 = _closure1_slot4;
            var4 = var5.getSize;
            var3 = _closure2_slot0;
            var2 = function(arg1, arg2) {
                var3 = _closure3_slot0;
                var2 = {};
                var1 = arg1;
                var2['width'] = var1;
                var1 = arg2;
                var2['height'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure3_slot1;
                    var1 = global;
                    var2 = var1.Error;
                    var4 = var6 instanceof var2;
                    var2 = var6;
                    if(var4) { _fun0004_ip = 30; continue _fun0004 }
case 34:
                    var5 = var1.Error;
                    var4 = var1.String;
                    var1 = undefined;
                    var7 = var4.bind(var1)(var6);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var8 = var4;
                    var1 = new var8[var5](var7, var6);
                    var2 = var1 instanceof Object ? var1 : var4;
case 30:
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _readManifest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var4 = var4[var3];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.readFile;
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot5;
                    var4 = global;
                    var2 = var4.HermesInternal;
                    var5 = var2.concat;
                    var3 = '';
                    var2 = '/';
                    var5 = var5.bind(var3)(var9, var2, var8);
                    var3 = 'documents';
                    var2 = 'utf8';
                    var2 = var6.bind(var7)(var3, var5, var2);
                    SaveGenerator(address=100);
case 38:
                    return var2;
case 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var3 = null;
                    var5 = var3 != var2;
                    if(!var5) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var5 = var4.JSON;
                    var4 = var5.parse;
                    var3 = var4.bind(var5)(var2);
case 42:
                    return var3;
case 40:
                    return var2;
case 36:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _buildOverride() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var2 = global;
                    var5 = var2.Array;
                    var4 = var5.isArray;
                    var3 = var7.layers;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var5 = var2.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var35 = 'Malformed manifest (no layers). Re-push the frame.';
                    var36 = var4;
                    var3 = new var36[var5](var35, var34);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 46:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var13 = undefined;
                    var4 = var4.bind(var13)(var3);
                    var3 = var4.getConstants;
                    var3 = var3.bind(var4)();
                    var6 = var3.DocumentsDirPath;
                    var5 = _closure1_slot6;
                    var3 = var2.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'file://';
                    var12 = '/';
                    var11 = var4.bind(var3)(var6, var12, var5);
                    var8 = new Array(0);
                    var5 = {};
                    var9 = new Array(0);
                    var4 = _closure1_slot9;
                    var3 = var7.layers;
                    var23 = var4.bind(var13)(var3);
                    var16 = var23.bind(var13)();
                    var4 = var16.done;
                    var15 = 0;
                    var3 = 6;
                    var22 = 'override-';
                    var19 = '-';
                    var10 = '';
                    var6 = null;
                    var18 = var16;
                    if(var4) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var4 = var18.value;
                    var21 = var4.folder;
                    var20 = var4.filename;
                    var16 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var3];
                    var16 = var16.bind(var13)(var4);
                    var4 = var16.parseLayerFilename;
                    var4 = var4.bind(var16)(var20);
                    var28 = var4.parsed;
                    var16 = var4.errorType;
                    if(!(var6 != var28)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var17 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var3];
                    var4 = var17.bind(var13)(var4);
                    var4 = var4.FOLDER_ORDER_MAP;
                    var29 = var4[var21];
                    var17 = var28.index;
                    var4 = var2.HermesInternal;
                    var4 = var4.concat;
                    var24 = var4.bind(var22)(var29, var19, var17);
                    var4 = var2.HermesInternal;
                    var4 = var4.concat;
                    var36 = var10;
                    var35 = var11;
                    var34 = var12;
                    var33 = var21;
                    var32 = var12;
                    var31 = var20;
                    var26 = var36[var4](var35, var34, var33, var32, var31, var30);
                    var25 = {};
                    var25['id'] = var24;
                    var4 = var28.type;
                    var25['type'] = var4;
                    var25['order'] = var29;
                    var4 = var28.anchor;
                    var25['anchor'] = var4;
                    var4 = var28.responsive;
                    var25['responsive'] = var4;
                    var4 = _closure1_slot11;
                    var4 = var4.bind(var13)(var26);
                    SaveGenerator(address=413);
case 52:
                    return var4;
case 53:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=16);
                    if(var17) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var27 = var8.push;
                    var17 = {};
                    var17['layer'] = var25;
                    var17['order'] = var29;
                    var28 = var28.index;
                    var17['index'] = var28;
                    var17 = var27.bind(var8)(var17);
                    var17 = {};
                    var17['uri'] = var26;
                    var26 = var4.width;
                    var27 = var26 > var15;
                    var26 = 0;
                    if(!var27) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var28 = var4.height;
                    var27 = var4.width;
                    var26 = var28 / var27;
case 56:
                    var17['ratio'] = var26;
                    var5[var24] = var17;
                    var24 = var9.push;
                    var17 = {};
                    var17['layer'] = var25;
                    var17['dims'] = var4;
                    var17 = var24.bind(var9)(var17);
                    var24 = var23.bind(var13)();
                    var17 = var24.done;
                    var18 = var24;
                    if(var17) { _fun0006_ip = 48; continue _fun0006 }
case 58:
                    _fun0006_ip = 49; continue _fun0006;
case 54:
                    return var4;
case 50:
                    var4 = var6 != var16;
                    var19 = 'invalid';
                    if(!var4) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var17 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var3];
                    var4 = var17.bind(var13)(var4);
                    var4 = var4.PARSE_ERROR_LABELS;
                    var19 = var4[var16];
case 59:
                    var17 = var2.Error;
                    var4 = var2.HermesInternal;
                    var18 = var4.concat;
                    var36 = 'Bad layer file "';
                    var32 = '": ';
                    var35 = var21;
                    var34 = var12;
                    var33 = var20;
                    var31 = var19;
                    var35 = var36[var18](var35, var34, var33, var32, var31, var30);
                    var16 = var17.prototype;
                    var16 = Object.create(var16, {constructor: {value: var17}});
                    var36 = var16;
                    var4 = new var36[var17](var35, var34);
                    var4 = var4 instanceof Object ? var4 : var16;
                    throw var4;
case 48:
                    var4 = var8.length;
                    if(!(var15 !== var4)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var15 = var8.sort;
                    var4 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var3 = var14[var3];
                    var3 = var4.bind(var13)(var3);
                    var3 = var3.compareLayerFiles;
                    var3 = var15.bind(var8)(var3);
                    var3 = 7;
                    var3 = var14[var3];
                    var4 = var4.bind(var13)(var3);
                    var3 = var4.computeProfileFrameDimensions;
                    var4 = var3.bind(var4)(var9);
                    var3 = {};
                    var9 = var7.frameKey;
                    var3['frameKey'] = var9;
                    var9 = var7.preview;
                    var9 = var6 != var9;
                    var6 = null;
                    if(!var9) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                    var9 = var7.preview;
                    var7 = var2.HermesInternal;
                    var7 = var7.concat;
                    var6 = var7.bind(var10)(var11, var12, var9);
case 63:
                    var3['previewUri'] = var6;
                    var7 = var8.map;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.layer;
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6);
                    var3['layers'] = var6;
                    var3['layerAssetById'] = var5;
                    var35 = var3;
                    var34 = var4;
                    var4 = copyDataProperties(var35, var34);
                    return var3;
case 61:
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var35 = 'Frame has no valid layers.';
                    var36 = var3;
                    var2 = new var36[var4](var35, var34);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 44:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var4 = 0;
    var7 = var6[var4];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Image;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.MANIFEST_NAME;
    var _closure1_slot5 = var9;
    var7 = var7.OVERRIDE_DIR;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var6[var7];
    var9 = var8.bind(var1)(var7);
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var12 = 'FramePreviewOverrideStore';
    var13 = var8;
    var7 = new var13[var9](var12, var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot7 = var7;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.create;
    var2 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {'override': null, 'status': 'idle', 'error': null};
        var5 = _closure1_slot3;
        var4 = undefined;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                    var2 = undefined;
                    var9 = undefined;
                    var11 = undefined;
                    var3 = _closure1_slot8;
                    var3 = var3 + 1;
                    _closure1_slot8 = var3;
                    var _closure4_slot0 = var3;
                    var5 = function isStale() {
                        var2 = _closure4_slot0;
                        var1 = _closure1_slot8;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var10 = _closure2_slot0;
                    var12 = null;
                    var7 = {'status': 'loading', 'error': null};
                    var7 = var10.bind(var2)(var7);
case 67: // try_start_0
                    var7 = function readManifest() {
                        var1 = undefined;
                        var4 = _closure1_slot12;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var2)();
                    SaveGenerator(address=82);
case 68:
                    return var7;
case 69:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(var10) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                    var9 = var7;
                    var10 = var5;
                    var10 = var10.bind(var2)();
                    if(var10) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                    var10 = var9;
                    if(!(var12 != var10)) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                    var8 = function buildOverride() {
                        var1 = undefined;
                        var4 = _closure1_slot13;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var8 = var8.bind(var2)(var9);
                    SaveGenerator(address=125);
case 76:
                    return var8;
case 77:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0007_ip = 78; continue _fun0007 }
case 79:
                    var11 = var8;
                    var9 = var5;
                    var9 = var9.bind(var2)();
                    if(var9) { _fun0007_ip = 80; continue _fun0007 }
case 81:
                    var10 = _closure2_slot0;
                    var9 = {'override': null, 'status': 'idle', 'error': null};
                    var9['override'] = var11;
                    var9 = var10.bind(var2)(var9);
case 82: // try_end0
                    _fun0007_ip = 83; continue _fun0007;
case 80:
                    return var2;
case 78:
                    return var8;
case 74: // try_start_1
                    var9 = _closure2_slot0;
                    var8 = {'status': 'error', 'error': 'No frame on device. Ask Cap to push one (or run pushFrameOverride.mjs).'};
                    var8 = var9.bind(var2)(var8);
case 84: // try_end1
                    var8 = undefined;
                    return var8;
case 72:
                    return var2;
case 70:
                    return var7;
case 85: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var5 = var5.bind(var2)();
                    if(var5) { _fun0007_ip = 86; continue _fun0007 }
case 87:
                    var8 = var4;
                    var5 = global;
                    var7 = var5.Error;
                    var7 = var8 instanceof var7;
                    if(var7) { _fun0007_ip = 88; continue _fun0007 }
case 89:
                    var7 = var5.String;
                    var5 = var4;
                    var5 = var7.bind(var2)(var5);
                    _fun0007_ip = 90; continue _fun0007;
case 88:
                    var7 = var4;
                    var5 = var7.message;
case 90:
                    var8 = _closure1_slot7;
                    var7 = var8.error;
                    var6 = var4;
                    var4 = 'Failed to load frame override';
                    var4 = var7.bind(var8)(var4, var6);
                    var4 = _closure2_slot0;
                    var3 = {};
                    var6 = 'error';
                    var3['status'] = var6;
                    var3['error'] = var5;
                    var3 = var4.bind(var2)(var3);
case 83:
                    return var2;
case 86:
                    return var2;
case 65:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var5.bind(var4)(var3);
        var _closure2_slot1 = var3;
        var3 = function() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['loadFromDevice'] = var3;
        var2 = function clear() {
            var1 = _closure1_slot8;
            var1 = var1 + 1;
            _closure1_slot8 = var1;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = {'override': null, 'status': 'idle', 'error': null};
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['clear'] = var2;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['useFramePreviewOverrideStore'] = var2;
    return var1;
})();