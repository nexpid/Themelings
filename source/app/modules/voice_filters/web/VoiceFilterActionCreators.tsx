// app/modules/voice_filters/web/VoiceFilterActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var8;
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
    var1 = function _applyVoiceFilterInNativeModule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var9 = arg1;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var2 = null;
case 38:
                    var13 = var2;
                    var11 = undefined;
                    SaveGenerator(address=33);
case 40:
                    return var4;
case 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var3 = _closure1_slot20;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=57);
case 4:
                    return var3;
case 43:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                    var12 = global;
                    var7 = var12.performance;
                    var6 = var7.now;
                    var11 = var6.bind(var7)();
case 46: // try_start_0
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 9;
                    var6 = var8[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.getVoiceFilters;
                    var8 = var6.bind(var7)();
                    var14 = _closure1_slot9;
                    var7 = var14.info;
                    var10 = var9;
                    var6 = 'Setting voice filter in native module:';
                    var6 = var7.bind(var14)(var6, var10);
                    var7 = var8.setVoiceFilter;
                    var6 = {};
                    var6['name'] = var10;
                    var6 = var7.bind(var8)(var6);
                    SaveGenerator(address=161);
case 47:
                    return var6;
case 48:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 49; continue _fun0004 }
case 50:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 7;
                    var7 = var10[var7];
                    var10 = var8.bind(var4)(var7);
                    var8 = var10.dispatch;
                    var7 = {};
                    var14 = 'VOICE_FILTER_APPLIED';
                    var7['type'] = var14;
                    var14 = var9;
                    var7['voiceFilterId'] = var14;
                    var7['analyticsContext'] = var13;
                    var13 = var12.performance;
                    var12 = var13.now;
                    var12 = var12.bind(var13)();
                    var11 = var12 - var11;
                    var7['activationDurationMs'] = var11;
                    var7 = var8.bind(var10)(var7);
case 51: // try_end0
                    _fun0004_ip = 52; continue _fun0004;
case 49:
                    return var6;
case 53: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var10 = _closure1_slot9;
                    var7 = var10.error;
                    var6 = 'failed to set voice filter';
                    var6 = var7.bind(var10)(var6, var8);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 7;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var10 = 'VOICE_FILTER_APPLY_FAILED';
                    var5['type'] = var10;
                    var5['voiceFilterId'] = var9;
                    var5['error'] = var8;
                    var5 = var6.bind(var7)(var5);
case 52:
                    return var4;
case 44:
                    return var3;
case 41:
                    return var2;
case 36:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _loadSignedCatalog2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 54; continue _fun0005 }
case 37:
                    var2 = var7.getCatalogNonce;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 55; continue _fun0005 }
case 34:
                    var2 = var7.getModuleVersion;
                    if(!(var3 != var2)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var2 = var7.getRequestedModelIds;
                    if(!(var3 != var2)) { _fun0005_ip = 55; continue _fun0005 }
case 57:
                    var2 = var7.setCatalog;
                    if(!(var3 != var2)) { _fun0005_ip = 55; continue _fun0005 }
case 30:
                    var2 = var7.getCatalogNonce;
                    var8 = var2.bind(var7)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {};
                    var6 = _closure1_slot8;
                    var6 = var6.VOICE_FILTERS_CATALOG;
                    var2['url'] = var6;
                    var6 = {};
                    var9 = var7.getModuleVersion;
                    var9 = var9.bind(var7)();
                    var6['vfm_version'] = var9;
                    var9 = var7.getRequestedModelIds;
                    var11 = var9.bind(var7)();
                    var10 = var11.join;
                    var9 = ',';
                    var9 = var10.bind(var11)(var9);
                    var6['models'] = var9;
                    var6['nonce'] = var8;
                    var2['query'] = var6;
                    var6 = true;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=201);
case 58:
                    return var2;
case 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                    var6 = var2.text;
                    var4 = var2.body;
                    var5 = var2.headers;
                    var5 = var5.x-discord-catalog-signature;
                    var8 = var4.models;
                    if(!(var3 != var8)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                    if(!(var3 != var5)) { _fun0005_ip = 64; continue _fun0005 }
case 51:
                    var3 = var7.setCatalog;
                    var3 = var3.bind(var7)(var6, var5);
                    SaveGenerator(address=264);
case 65:
                    return var3;
case 66:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 67; continue _fun0005 }
case 12:
                    return var4;
case 67:
                    return var3;
case 64:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var13 = 'Voice filters catalog signature is missing';
                    var14 = var4;
                    var3 = new var14[var5](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 62:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var13 = 'Voice filters catalog response is empty';
                    var14 = var4;
                    var3 = new var14[var5](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 60:
                    return var2;
case 55:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var13 = 'Voice filters signed catalog is not supported';
                    var14 = var3;
                    var2 = new var14[var4](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 54:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _scanModelState2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var10 = 9;
                    var2 = var2[var10];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var2);
                    var2 = var4.canCheckVoiceFilterFilesExist;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0006_ip = 70; continue _fun0006 }
case 71:
                    return var7;
case 70:
                    var2 = global;
                    var6 = var2.Object;
                    var4 = var6.keys;
                    var2 = arg1;
                    var2 = var2.models;
                    var6 = var4.bind(var6)(var2);
                    var4 = var6.map;
                    var2 = function(arg1) {
                        var4 = arg1;
                        var1 = {};
                        var1['id'] = var4;
                        var3 = _closure1_slot6;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var4);
                        var1['fileName'] = var2;
                        return var1;
                    };
                    var8 = var4.bind(var6)(var2);
                    var4 = {};
                    var6 = _closure1_slot13;
                    var9 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var10];
                    var9 = var9.bind(var7)(var2);
                    var2 = var9.checkVoiceFilterFilesExist;
                    var2 = var2.bind(var9)(var8);
                    SaveGenerator(address=135);
case 72:
                    return var2;
case 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                    if(var9) { _fun0006_ip = 74; continue _fun0006 }
case 75:
                    var11 = var6.bind(var7)(var2);
                    var9 = var11.bind(var7)();
                    var6 = var9.done;
                    var10 = 8;
                    if(var6) { _fun0006_ip = 76; continue _fun0006 }
case 77:
                    var6 = var9.value;
                    var12 = var6.id;
                    var13 = var6.exists;
                    var6 = {};
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var10];
                    var14 = var15.bind(var7)(var14);
                    var14 = var14.VoiceFilterModelStatus;
                    if(var13) { _fun0006_ip = 78; continue _fun0006 }
case 79:
                    var13 = var14.MISSING;
                    _fun0006_ip = 80; continue _fun0006;
case 78:
                    var13 = var14.DOWNLOADED;
case 80:
                    var6['status'] = var13;
                    var4[var12] = var6;
                    var12 = var11.bind(var7)();
                    var6 = var12.done;
                    var9 = var12;
                    if(!var6) { _fun0006_ip = 77; continue _fun0006 }
case 76:
                    var6 = var8.map;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.fileName;
                        return var1;
                    };
                    var6 = var6.bind(var8)(var5);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 14;
                    var5 = var9[var5];
                    var8 = var8.bind(var7)(var5);
                    var5 = var8.arrayIsNotEmpty;
                    var5 = var5.bind(var8)(var6);
                    if(!var5) { _fun0006_ip = 81; continue _fun0006 }
case 82:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 15;
                    var3 = var8[var3];
                    var5 = var5.bind(var7)(var3);
                    var3 = var5.cleanupUnusedVoiceFilterFiles;
                    var3 = var3.bind(var5)(var6);
                    SaveGenerator(address=331);
case 83:
                    return var3;
case 41:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 84; continue _fun0006 }
case 81:
                    return var4;
case 84:
                    return var3;
case 74:
                    return var2;
case 68:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var5 = function refreshVoiceFiltersCatalog() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var5;
    var1 = function _refreshVoiceFiltersCatalog() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 85; continue _fun0007 }
case 69:
                    var2 = undefined;
                    var10 = undefined;
                    var6 = _closure1_slot5;
                    var3 = var6.isNativeModuleLoaded;
                    var3 = var3.bind(var6)();
                    if(var3) { _fun0007_ip = 86; continue _fun0007 }
case 87:
                    var7 = _closure1_slot9;
                    var6 = var7.info;
                    var3 = 'Voice Filter catalog refresh ignored, module not loaded.';
                    var3 = var6.bind(var7)(var3);
                    _fun0007_ip = 88; continue _fun0007;
case 86:
                    var3 = _closure1_slot11;
                    if(var3) { _fun0007_ip = 88; continue _fun0007 }
case 89: // try_start_0 // try_start_1
                    var3 = true;
                    _closure1_slot11 = var3;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.getVoiceFilters;
                    var6 = var3.bind(var6)();
                    var3 = function _loadSignedCatalog() {
                        var1 = undefined;
                        var4 = _closure1_slot16;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var2)(var6);
                    SaveGenerator(address=124);
case 90:
                    return var3;
case 91:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 64; continue _fun0007 }
case 72:
                    var10 = var3;
                    var7 = _closure1_slot5;
                    var6 = var7.getCatalogLastFetchTime;
                    var7 = var6.bind(var7)();
                    var6 = null;
                    var6 = var6 == var7;
                    var9 = undefined;
                    if(!var6) { _fun0007_ip = 92; continue _fun0007 }
case 14:
                    var6 = var10;
                    var4 = function _scanModelState() {
                        var1 = undefined;
                        var4 = _closure1_slot17;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = var4.bind(var2)(var6);
                    SaveGenerator(address=182);
case 93:
                    return var4;
case 94:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    var9 = var4;
                    if(var6) { _fun0007_ip = 95; continue _fun0007 }
case 92:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 7;
                    var6 = var8[var6];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var11 = 'VOICE_FILTER_CATALOG_FETCH_SUCCESS';
                    var6['type'] = var11;
                    var6['catalog'] = var10;
                    var6['initialModelState'] = var9;
                    var6 = var7.bind(var8)(var6);
                    SaveGenerator(address=247);
case 76:
                    return var6;
case 23:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 96; continue _fun0007 }
case 53: // try_end0
                    _fun0007_ip = 97; continue _fun0007;
case 96: // try_end1
                    var7 = false;
                    _closure1_slot11 = var7;
                    return var6;
case 95:
                    var6 = false;
                    _closure1_slot11 = var6;
                    return var4;
case 64:
                    var4 = false;
                    _closure1_slot11 = var4;
                    return var3;
case 98: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var6 = _closure1_slot9;
                    var4 = var6.warn;
                    var9 = var8.message;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = 'Failed to refresh voice filters catalog: ';
                    var3 = var7.bind(var3)(var9);
                    var3 = var4.bind(var6)(var3);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 10;
                    var3 = var6[var3];
                    var10 = var4.bind(var2)(var3);
                    var9 = var10.track;
                    var3 = _closure1_slot7;
                    var7 = var3.VOICE_FILTER_ERROR;
                    var3 = {};
                    var11 = 'Failed to refresh voice filters catalog';
                    var3['error_message'] = var11;
                    var12 = _closure1_slot0;
                    var11 = 11;
                    var11 = var6[var11];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.serializeError;
                    var11 = var11.bind(var12)(var8);
                    var3['cause'] = var11;
                    var3 = var9.bind(var10)(var7, var3);
                    var3 = 12;
                    var3 = var6[var3];
                    var7 = var4.bind(var2)(var3);
                    var3 = var7.captureException;
                    var3 = var3.bind(var7)(var8);
                    var3 = 7;
                    var3 = var6[var3];
                    var6 = var4.bind(var2)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var7 = 'VOICE_FILTER_CATALOG_FETCH_FAILED';
                    var3['type'] = var7;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=477);
case 99:
                    return var3;
case 100:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 101; continue _fun0007 }
case 97: // try_end2
                    var4 = false;
                    _closure1_slot11 = var4;
                    _fun0007_ip = 88; continue _fun0007;
case 101:
                    var4 = false;
                    _closure1_slot11 = var4;
                    return var3;
case 102: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    var4 = false;
                    _closure1_slot11 = var4;
                    throw var3;
case 88:
                    return var2;
case 85:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var2 = function maybeSetupVoiceFiltersNativeModule() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var2;
    var1 = function _maybeSetupVoiceFiltersNativeModule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 103; continue _fun0008 }
case 69:
                    var2 = undefined;
                    var6 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var4 = _closure1_slot5;
                    var3 = var4.isNativeModuleLoaded;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0008_ip = 104; continue _fun0008 }
case 105:
                    var4 = _closure1_slot5;
                    var3 = var4.isNativeModuleLoading;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0008_ip = 104; continue _fun0008 }
case 106:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = 16;
                    var3 = var3[var5];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isWindows;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0008_ip = 22; continue _fun0008 }
case 107:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isMac;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0008_ip = 22; continue _fun0008 }
case 108:
                    var4 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var3 = 7;
                    var3 = var13[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                    var3['type'] = var8;
                    var9 = _closure1_slot0;
                    var8 = 8;
                    var8 = var13[var8];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.VoiceFilterNativeModuleState;
                    var8 = var8.UNSUPPORTED;
                    var3['state'] = var8;
                    var3 = var4.bind(var5)(var3);
                    _fun0008_ip = 104; continue _fun0008;
case 22: // try_start_0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var8 = 7;
                    var5 = var3[var8];
                    var13 = var4.bind(var2)(var5);
                    var9 = var13.dispatch;
                    var5 = {};
                    var15 = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                    var5['type'] = var15;
                    var17 = _closure1_slot0;
                    var16 = 8;
                    var14 = var3[var16];
                    var14 = var17.bind(var2)(var14);
                    var14 = var14.VoiceFilterNativeModuleState;
                    var14 = var14.LOADING;
                    var5['state'] = var14;
                    var5 = var9.bind(var13)(var5);
                    var9 = 9;
                    var3 = var3[var9];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.ensureModule;
                    var3 = 'discord_voice_filters';
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=310);
case 109:
                    return var3;
case 110:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 111; continue _fun0008 }
case 112:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.getVoiceFilters;
                    var5 = var4.bind(var5)();
                    var6 = var5;
                    var4 = var5.setupResources;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=365);
case 113:
                    return var4;
case 114:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 115; continue _fun0008 }
case 116:
                    var5 = var6;
                    var5 = var5.setVoiceFilterLaggingCallback;
                    if(!(var2 !== var5)) { _fun0008_ip = 117; continue _fun0008 }
case 54:
                    var13 = var6;
                    var9 = var13.setVoiceFilterLaggingCallback;
                    var5 = _closure1_slot10;
                    var5 = var9.bind(var13)(var5);
                    SaveGenerator(address=409);
case 118:
                    return var5;
case 119:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0008_ip = 120; continue _fun0008 }
case 117:
                    var9 = var6;
                    var9 = var9.setVoiceFilterReadyCallback;
                    if(!(var2 !== var9)) { _fun0008_ip = 121; continue _fun0008 }
case 122:
                    var13 = var6;
                    var9 = var13.setVoiceFilterReadyCallback;
                    var6 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'VOICE_FILTER_READY';
                        var2['type'] = var5;
                        var5 = arg1;
                        var2['name'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6 = var9.bind(var13)(var6);
                    SaveGenerator(address=456);
case 123:
                    return var6;
case 124:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0008_ip = 125; continue _fun0008 }
case 121:
                    var9 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var8 = var14[var8];
                    var13 = var9.bind(var2)(var8);
                    var9 = var13.dispatch;
                    var8 = {};
                    var8['type'] = var15;
                    var15 = _closure1_slot0;
                    var14 = var14[var16];
                    var14 = var15.bind(var2)(var14);
                    var14 = var14.VoiceFilterNativeModuleState;
                    var14 = var14.LOADED;
                    var8['state'] = var14;
                    var8 = var9.bind(var13)(var8);
                    SaveGenerator(address=531);
case 126:
                    return var8;
case 127:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0008_ip = 128; continue _fun0008 }
case 129:
                    var9 = _closure1_slot18;
                    var9 = var9.bind(var2)();
                    SaveGenerator(address=552);
case 130:
                    return var9;
case 131:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=12);
                    if(var13) { _fun0008_ip = 132; continue _fun0008 }
case 133:
                    var14 = _closure1_slot4;
                    var13 = var14.getMostRecentlyRequestedVoiceFilter;
                    var14 = var13.bind(var14)();
                    var11 = var14;
                    var13 = null;
                    if(!(var13 != var14)) { _fun0008_ip = 134; continue _fun0008 }
case 135:
                    var16 = _closure1_slot5;
                    var15 = var16.getVoiceFilter;
                    var14 = var11;
                    var14 = var15.bind(var16)(var14);
                    var12 = var14;
                    var15 = var13 == var14;
                    var14 = undefined;
                    if(var15) { _fun0008_ip = 136; continue _fun0008 }
case 137:
                    var14 = var12.available;
case 136:
                    var12 = true;
                    if(!(var12 === var14)) { _fun0008_ip = 138; continue _fun0008 }
case 139:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 17;
                    var12 = var15[var12];
                    var14 = var14.bind(var2)(var12);
                    var12 = var14.requestVoiceFilterSwitch;
                    var11 = var12.bind(var14)(var11);
                    _fun0008_ip = 134; continue _fun0008;
case 138:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 17;
                    var11 = var14[var11];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.requestVoiceFilterSwitch;
                    var11 = var11.bind(var12)(var13);
case 134:
                    var12 = _closure1_slot4;
                    var11 = var12.getMediaEngine;
                    var13 = var11.bind(var12)();
                    var12 = var13.on;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var11 = 18;
                    var11 = var15[var11];
                    var11 = var14.bind(var2)(var11);
                    var11 = var11.MediaEngineEvent;
                    var11 = var11.VoiceFiltersFailed;
                    var10 = function(arg1) {
                        var5 = arg1;
                        var4 = _closure1_slot9;
                        var3 = var4.warn;
                        var2 = global;
                        var1 = var2.HermesInternal;
                        var6 = var1.concat;
                        var1 = 'Voice Filters failed in process: ';
                        var1 = var6.bind(var1)(var5);
                        var1 = var3.bind(var4)(var1);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var3 = var6[var1];
                        var1 = undefined;
                        var10 = var4.bind(var1)(var3);
                        var9 = var10.track;
                        var3 = _closure1_slot7;
                        var8 = var3.VOICE_FILTER_ERROR;
                        var3 = {};
                        var7 = 'Voice Filters failed in process';
                        var3['error_message'] = var7;
                        var12 = _closure1_slot0;
                        var11 = 11;
                        var11 = var6[var11];
                        var13 = var12.bind(var1)(var11);
                        var12 = var13.serializeError;
                        var11 = var2.Error;
                        var14 = var11.prototype;
                        var14 = Object.create(var14, {constructor: {value: var11}});
                        var17 = var14;
                        var16 = var5;
                        var11 = new var17[var11](var16, var15);
                        var11 = var11 instanceof Object ? var11 : var14;
                        var11 = var12.bind(var13)(var11);
                        var3['cause'] = var11;
                        var3 = var9.bind(var10)(var8, var3);
                        var3 = 12;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.captureException;
                        var6 = var2.Error;
                        var2 = {};
                        var2['cause'] = var5;
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var17 = var5;
                        var16 = var7;
                        var15 = var2;
                        var2 = new var17[var6](var16, var15, var14);
                        var2 = var2 instanceof Object ? var2 : var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var10 = var12.bind(var13)(var11, var10);
case 140: // try_end0
                    _fun0008_ip = 104; continue _fun0008;
case 132:
                    return var9;
case 128:
                    return var8;
case 125:
                    return var6;
case 120:
                    return var5;
case 115:
                    return var4;
case 111:
                    return var3;
case 141: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot9;
                    var4 = var5.warn;
                    var9 = var6.message;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var3 = 'Failed to load Voice Filters module: ';
                    var3 = var8.bind(var3)(var9);
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 10;
                    var3 = var8[var3];
                    var10 = var4.bind(var2)(var3);
                    var9 = var10.track;
                    var3 = _closure1_slot7;
                    var5 = var3.VOICE_FILTER_ERROR;
                    var3 = {};
                    var11 = 'Failed to load Voice Filters module';
                    var3['error_message'] = var11;
                    var7 = _closure1_slot0;
                    var11 = 11;
                    var11 = var8[var11];
                    var12 = var7.bind(var2)(var11);
                    var11 = var12.serializeError;
                    var11 = var11.bind(var12)(var6);
                    var3['cause'] = var11;
                    var3 = var9.bind(var10)(var5, var3);
                    var3 = 12;
                    var3 = var8[var3];
                    var5 = var4.bind(var2)(var3);
                    var3 = var5.captureException;
                    var3 = var3.bind(var5)(var6);
                    var3 = 7;
                    var3 = var8[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE';
                    var3['type'] = var6;
                    var6 = 8;
                    var6 = var8[var6];
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.VoiceFilterNativeModuleState;
                    var6 = var6.FAILED;
                    var3['state'] = var6;
                    var3 = var4.bind(var5)(var3);
case 104:
                    return var2;
case 103:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var6 = global;
    var13 = var6.Object;
    var12 = var13.defineProperty;
    var10 = {};
    var9 = true;
    var10['value'] = var9;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var10);
    var1 = 0;
    var10 = var8[var1];
    var1 = undefined;
    var10 = var11.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var8[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var8[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var8[var10];
    var10 = var7.bind(var1)(var10);
    var10 = var10.getVoiceFilterModelFileName;
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var8[var10];
    var10 = var7.bind(var1)(var10);
    var12 = var10.AnalyticEvents;
    var _closure1_slot7 = var12;
    var10 = var10.Endpoints;
    var _closure1_slot8 = var10;
    var10 = 5;
    var10 = var8[var10];
    var12 = var11.bind(var1)(var10);
    var10 = var12.prototype;
    var11 = Object.create(var10, {constructor: {value: var12}});
    var16 = 'VoiceFilterActionCreators';
    var17 = var11;
    var10 = new var17[var12](var16, var15);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot9 = var10;
    var10 = 6;
    var10 = var8[var10];
    var13 = var7.bind(var1)(var10);
    var12 = var13.debounce;
    var11 = {};
    var11['leading'] = var9;
    var10 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'VOICE_FILTER_LAGGING';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var9 = 1000;
    var9 = var12.bind(var13)(var10, var9, var11);
    var _closure1_slot10 = var9;
    var9 = false;
    var _closure1_slot11 = var9;
    var6 = var6.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {constructor: {value: var6}});
    var17 = var9;
    var6 = new var17[var6](var16);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot12 = var6;
    var6 = 19;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/voice_filters/web/VoiceFilterActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function downloadVoiceFilterDependency(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var13 = arg1;
            var1 = arguments[1];
            var _closure2_slot0 = var13;
            var7 = undefined;
            if(!(var1 === var7)) { _fun0009_ip = 29; continue _fun0009 }
case 142:
            var1 = null;
case 29:
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var7;
            var9 = var13.url;
            var5 = var13.modelId;
            _closure2_slot2 = var5;
            var8 = var13.fileName;
            var4 = _closure1_slot5;
            var1 = var4.getModelState;
            var4 = var1.bind(var4)(var5);
            var6 = _closure1_slot12;
            var1 = var6.get;
            var1 = var1.bind(var6)(var5);
            var6 = null;
            if(!(var6 == var1)) { _fun0009_ip = 143; continue _fun0009 }
case 144:
            var10 = var6 == var4;
            var12 = undefined;
            if(var10) { _fun0009_ip = 145; continue _fun0009 }
case 146:
            var12 = var4.status;
case 145:
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = 8;
            var10 = var10[var11];
            var10 = var14.bind(var7)(var10);
            var10 = var10.VoiceFilterModelStatus;
            var10 = var10.DOWNLOADED;
            if(!(var12 !== var10)) { _fun0009_ip = 147; continue _fun0009 }
case 148:
            var10 = var6 == var4;
            var6 = undefined;
            if(var10) { _fun0009_ip = 47; continue _fun0009 }
case 149:
            var6 = var4.status;
case 47:
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var11];
            var4 = var10.bind(var7)(var4);
            var4 = var4.VoiceFilterModelStatus;
            var4 = var4.DOWNLOADING;
            if(!(var6 !== var4)) { _fun0009_ip = 150; continue _fun0009 }
case 20:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 7;
            var4 = var10[var4];
            var12 = var6.bind(var7)(var4);
            var11 = var12.dispatch;
            var4 = {};
            var14 = 'VOICE_FILTER_DOWNLOAD_STARTED';
            var4['type'] = var14;
            var17 = var4;
            var16 = var13;
            var13 = copyDataProperties(var17, var16);
            var4 = var11.bind(var12)(var4);
            var4 = 9;
            var4 = var10[var4];
            var7 = var6.bind(var7)(var4);
            var6 = var7.downloadVoiceFilterFile;
            var4 = function(arg1) {
                var1 = arg1;
                var7 = var1.downloadedBytes;
                var6 = var1.totalBytes;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'VOICE_FILTER_DOWNLOAD_PROGRESS';
                var2['type'] = var5;
                var8 = _closure2_slot0;
                var9 = var2;
                var5 = copyDataProperties(var9, var8);
                var5 = 'downloadedBytes';
                var2[var5] = var7;
                var5 = 'totalBytes';
                var2[var5] = var6;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = var6.bind(var7)(var9, var8, var4);
            var6 = var7.then;
            var4 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.fetchedFromNetwork;
                    if(!var1) { _fun0010_ip = 151; continue _fun0010 }
case 152:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var6 = undefined;
                    var4 = var2.bind(var6)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.VOICE_FILTER_DOWNLOAD_ATTEMPTED;
                    var1 = {};
                    var7 = _closure1_slot4;
                    var5 = var7.getActiveVoiceFilter;
                    var8 = var5.bind(var7)();
                    var5 = null;
                    var9 = var5 != var8;
                    var7 = null;
                    if(!var9) { _fun0010_ip = 153; continue _fun0010 }
case 154:
                    var7 = var8;
case 153:
                    var1['active_voice_filter_id'] = var7;
                    var7 = true;
                    var1['success'] = var7;
                    var8 = _closure2_slot0;
                    var8 = var8.voiceFilterId;
                    var1['voice_filter_id'] = var8;
                    var8 = _closure2_slot2;
                    var1['model_id'] = var8;
                    var8 = _closure2_slot1;
                    var8 = var5 == var8;
                    var6 = undefined;
                    if(var8) { _fun0010_ip = 155; continue _fun0010 }
case 156:
                    var7 = _closure2_slot1;
                    var6 = var7.reason;
case 155:
                    var7 = var5 != var6;
                    var5 = null;
                    if(!var7) { _fun0010_ip = 157; continue _fun0010 }
case 158:
                    var5 = var6;
case 157:
                    var1['reason'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 151:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'VOICE_FILTER_FILE_READY';
                    var2['type'] = var5;
                    var10 = _closure2_slot0;
                    var11 = var2;
                    var6 = copyDataProperties(var11, var10);
                    var6 = _closure2_slot1;
                    var5 = 'analyticsContext';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var7 = var6.bind(var7)(var4);
            var6 = var7.catch;
            var4 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var6 = arg1;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0011_ip = 31; continue _fun0011 }
case 159:
                    var1 = var6.USER_CANCELED_DOWNLOAD;
                    if(var1) { _fun0011_ip = 64; continue _fun0011 }
case 31:
                    var4 = _closure1_slot9;
                    var3 = var4.error;
                    var2 = {};
                    var2['reason'] = var6;
                    var16 = _closure2_slot0;
                    var17 = var2;
                    var5 = copyDataProperties(var17, var16);
                    var8 = 'Failed to download voice filter dependency';
                    var2 = var3.bind(var4)(var8, var2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var2 = var5[var2];
                    var3 = undefined;
                    var11 = var4.bind(var3)(var2);
                    var10 = var11.track;
                    var2 = _closure1_slot7;
                    var9 = var2.VOICE_FILTER_ERROR;
                    var2 = {};
                    var2['error_message'] = var8;
                    var12 = _closure1_slot0;
                    var1 = 11;
                    var1 = var5[var1];
                    var14 = var12.bind(var3)(var1);
                    var13 = var14.serializeError;
                    var1 = global;
                    var12 = var1.Error;
                    var15 = var12.prototype;
                    var15 = Object.create(var15, {constructor: {value: var12}});
                    var18 = var15;
                    var17 = var6;
                    var12 = new var18[var12](var17, var16);
                    var12 = var12 instanceof Object ? var12 : var15;
                    var12 = var13.bind(var14)(var12);
                    var2['cause'] = var12;
                    var2 = var10.bind(var11)(var9, var2);
                    var2 = 12;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var3 = var4.captureException;
                    var5 = var1.Error;
                    var1 = {};
                    var1['cause'] = var6;
                    var2 = var5.prototype;
                    var2 = Object.create(var2, {constructor: {value: var5}});
                    var18 = var2;
                    var17 = var8;
                    var16 = var1;
                    var1 = new var18[var5](var17, var16, var15);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = {};
                    var5 = {};
                    var7 = _closure2_slot2;
                    var5['modelId'] = var7;
                    var1['tags'] = var5;
                    var5 = {};
                    var5['reason'] = var6;
                    var1['extra'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0011_ip = 109; continue _fun0011;
case 64:
                    var4 = _closure1_slot9;
                    var3 = var4.info;
                    var2 = _closure2_slot0;
                    var1 = 'User canceled the download for Voice Filter dependency';
                    var1 = var3.bind(var4)(var1, var2);
case 109:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'VOICE_FILTER_DOWNLOAD_FAILED';
                    var2['type'] = var5;
                    var16 = _closure2_slot0;
                    var17 = var2;
                    var5 = copyDataProperties(var17, var16);
                    var5 = 'error';
                    var2[var5] = var6;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var4);
            var4 = var6.finally;
            var2 = function() {
                var3 = _closure1_slot12;
                var2 = var3.delete;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var6)(var2);
            var4 = _closure1_slot12;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            return var2;
case 150:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.reject;
            var6 = var2.Error;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var17 = 'Voice filter model is downloading but not in active downloads map';
            var18 = var5;
            var2 = new var18[var6](var17, var16);
            var2 = var2 instanceof Object ? var2 : var5;
            var2 = var3.bind(var4)(var2);
            return var2;
case 147:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var2 = var2.bind(var3)();
            return var2;
case 143:
            return var1;
        }
    };
    var3['downloadVoiceFilterDependency'] = var6;
    var6 = function applyVoiceFilterInNativeModule() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['applyVoiceFilterInNativeModule'] = var6;
    var3['refreshVoiceFiltersCatalog'] = var5;
    var4 = function cancelVoiceFilterDownload() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'VOICE_FILTER_DOWNLOAD_CANCELED';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['cancelVoiceFilterDownload'] = var4;
    var3['maybeSetupVoiceFiltersNativeModule'] = var2;
    return var1;
})();