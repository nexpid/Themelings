// app/modules/voice_filters/web/VoiceFilterActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var11 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var8;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
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
 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 334; continue _fun0004 }
 13:
                    var9 = arg1;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0004_ip = 24; continue _fun0004 }
 22:
                    var2 = null;
 24:
                    var13 = var2;
                    var11 = undefined;
                    SaveGenerator(address=33);
 31:
                    return var4;
 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 331; continue _fun0004 }
 42:
                    var3 = _closure1_slot20;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=57);
 55:
                    return var3;
 57:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 328; continue _fun0004 }
 66:
                    var12 = global;
                    var7 = var12.performance;
                    var6 = var7.now;
                    var11 = var6.bind(var7)();
 83: // try_start_0
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
 159:
                    return var6;
 161:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 250; continue _fun0004 }
 167:
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
 248: // try_end0
                    _fun0004_ip = 325; continue _fun0004;
 250:
                    return var6;
 253: // catch_target0
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
 325:
                    return var4;
 328:
                    return var3;
 331:
                    return var2;
 334:
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
 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 386; continue _fun0005 }
 13:
                    var2 = var7.getCatalogNonce;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 350; continue _fun0005 }
 28:
                    var2 = var7.getModuleVersion;
                    if(!(var3 != var2)) { _fun0005_ip = 350; continue _fun0005 }
 41:
                    var2 = var7.getRequestedModelIds;
                    if(!(var3 != var2)) { _fun0005_ip = 350; continue _fun0005 }
 54:
                    var2 = var7.setCatalog;
                    if(!(var3 != var2)) { _fun0005_ip = 350; continue _fun0005 }
 67:
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
                    SaveGenerator(address=200);
 198:
                    return var2;
 200:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 347; continue _fun0005 }
 209:
                    var6 = var2.text;
                    var4 = var2.body;
                    var5 = var2.headers;
                    var5 = var5.x-discord-catalog-signature;
                    var8 = var4.models;
                    if(!(var3 != var8)) { _fun0005_ip = 311; continue _fun0005 }
 243:
                    if(!(var3 != var5)) { _fun0005_ip = 275; continue _fun0005 }
 247:
                    var3 = var7.setCatalog;
                    var3 = var3.bind(var7)(var6, var5);
                    SaveGenerator(address=263);
 261:
                    return var3;
 263:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 272; continue _fun0005 }
 269:
                    return var4;
 272:
                    return var3;
 275:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var13 = 'Voice filters catalog signature is missing';
                    var14 = var4;
                    var3 = new var14[var5](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 311:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var13 = 'Voice filters catalog response is empty';
                    var14 = var4;
                    var3 = new var14[var5](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 347:
                    return var2;
 350:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var13 = 'Voice filters signed catalog is not supported';
                    var14 = var3;
                    var2 = new var14[var4](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 386:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 346; continue _fun0006 }
 12:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var10 = 9;
                    var2 = var2[var10];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var2);
                    var2 = var4.canCheckVoiceFilterFilesExist;
                    var2 = var2.bind(var4)();
                    if(var2) { _fun0006_ip = 53; continue _fun0006 }
 50:
                    return var7;
 53:
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
 133:
                    return var2;
 135:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                    if(var9) { _fun0006_ip = 343; continue _fun0006 }
 144:
                    var11 = var6.bind(var7)(var2);
                    var9 = var11.bind(var7)();
                    var6 = var9.done;
                    var10 = 8;
                    if(var6) { _fun0006_ip = 245; continue _fun0006 }
 164:
                    var6 = var9.value;
                    var12 = var6.id;
                    var13 = var6.exists;
                    var6 = {};
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var10];
                    var14 = var15.bind(var7)(var14);
                    var14 = var14.VoiceFilterModelStatus;
                    if(var13) { _fun0006_ip = 216; continue _fun0006 }
 208:
                    var13 = var14.MISSING;
                    _fun0006_ip = 222; continue _fun0006;
 216:
                    var13 = var14.DOWNLOADED;
 222:
                    var6['status'] = var13;
                    var4[var12] = var6;
                    var12 = var11.bind(var7)();
                    var6 = var12.done;
                    var9 = var12;
                    if(!var6) { _fun0006_ip = 164; continue _fun0006 }
 245:
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
                    if(!var5) { _fun0006_ip = 337; continue _fun0006 }
 296:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 15;
                    var3 = var8[var3];
                    var5 = var5.bind(var7)(var3);
                    var3 = var5.cleanupUnusedVoiceFilterFiles;
                    var3 = var3.bind(var5)(var6);
                    SaveGenerator(address=331);
 329:
                    return var3;
 331:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 340; continue _fun0006 }
 337:
                    return var4;
 340:
                    return var3;
 343:
                    return var2;
 346:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 513; continue _fun0007 }
 12:
                    var2 = undefined;
                    var10 = undefined;
                    var6 = _closure1_slot5;
                    var3 = var6.isNativeModuleLoaded;
                    var3 = var3.bind(var6)();
                    if(var3) { _fun0007_ip = 62; continue _fun0007 }
 36:
                    var7 = _closure1_slot9;
                    var6 = var7.info;
                    var3 = 'Voice Filter catalog refresh ignored, module not loaded.';
                    var3 = var6.bind(var7)(var3);
                    _fun0007_ip = 510; continue _fun0007;
 62:
                    var3 = _closure1_slot11;
                    if(var3) { _fun0007_ip = 510; continue _fun0007 }
 72: // try_start_0 // try_start_1
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
 122:
                    return var3;
 124:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0007_ip = 276; continue _fun0007 }
 133:
                    var10 = var3;
                    var7 = _closure1_slot5;
                    var6 = var7.getCatalogLastFetchTime;
                    var7 = var6.bind(var7)();
                    var6 = null;
                    var6 = var6 == var7;
                    var9 = undefined;
                    if(!var6) { _fun0007_ip = 191; continue _fun0007 }
 163:
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
 180:
                    return var4;
 182:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    var9 = var4;
                    if(var6) { _fun0007_ip = 267; continue _fun0007 }
 191:
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
 245:
                    return var6;
 247:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 258; continue _fun0007 }
 253: // try_end0
                    _fun0007_ip = 483; continue _fun0007;
 258: // try_end1
                    var7 = false;
                    _closure1_slot11 = var7;
                    return var6;
 267:
                    var6 = false;
                    _closure1_slot11 = var6;
                    return var4;
 276:
                    var4 = false;
                    _closure1_slot11 = var4;
                    return var3;
 285: // try_start_2 // catch_target0
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
 475:
                    return var3;
 477:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 491; continue _fun0007 }
 483: // try_end2
                    var4 = false;
                    _closure1_slot11 = var4;
                    _fun0007_ip = 510; continue _fun0007;
 491:
                    var4 = false;
                    _closure1_slot11 = var4;
                    return var3;
 500: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    var4 = false;
                    _closure1_slot11 = var4;
                    throw var3;
 510:
                    return var2;
 513:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 999; continue _fun0008 }
 12:
                    var2 = undefined;
                    var6 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var4 = _closure1_slot5;
                    var3 = var4.isNativeModuleLoaded;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0008_ip = 996; continue _fun0008 }
 43:
                    var4 = _closure1_slot5;
                    var3 = var4.isNativeModuleLoading;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0008_ip = 996; continue _fun0008 }
 65:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = 16;
                    var3 = var3[var5];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isWindows;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0008_ip = 205; continue _fun0008 }
 98:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isMac;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0008_ip = 205; continue _fun0008 }
 128:
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
                    _fun0008_ip = 996; continue _fun0008;
 205: // try_start_0
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
 308:
                    return var3;
 310:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 779; continue _fun0008 }
 319:
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
 363:
                    return var4;
 365:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 776; continue _fun0008 }
 374:
                    var5 = var6;
                    var5 = var5.setVoiceFilterLaggingCallback;
                    if(!(var2 !== var5)) { _fun0008_ip = 418; continue _fun0008 }
 387:
                    var13 = var6;
                    var9 = var13.setVoiceFilterLaggingCallback;
                    var5 = _closure1_slot10;
                    var5 = var9.bind(var13)(var5);
                    SaveGenerator(address=409);
 407:
                    return var5;
 409:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0008_ip = 773; continue _fun0008 }
 418:
                    var9 = var6;
                    var9 = var9.setVoiceFilterReadyCallback;
                    if(!(var2 !== var9)) { _fun0008_ip = 465; continue _fun0008 }
 431:
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
 454:
                    return var6;
 456:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0008_ip = 770; continue _fun0008 }
 465:
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
 529:
                    return var8;
 531:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0008_ip = 767; continue _fun0008 }
 540:
                    var9 = _closure1_slot18;
                    var9 = var9.bind(var2)();
                    SaveGenerator(address=552);
 550:
                    return var9;
 552:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=12);
                    if(var13) { _fun0008_ip = 764; continue _fun0008 }
 561:
                    var14 = _closure1_slot4;
                    var13 = var14.getMostRecentlyRequestedVoiceFilter;
                    var14 = var13.bind(var14)();
                    var11 = var14;
                    var13 = null;
                    if(!(var13 != var14)) { _fun0008_ip = 694; continue _fun0008 }
 586:
                    var16 = _closure1_slot5;
                    var15 = var16.getVoiceFilter;
                    var14 = var11;
                    var14 = var15.bind(var16)(var14);
                    var12 = var14;
                    var15 = var13 == var14;
                    var14 = undefined;
                    if(var15) { _fun0008_ip = 624; continue _fun0008 }
 618:
                    var14 = var12.available;
 624:
                    var12 = true;
                    if(!(var12 === var14)) { _fun0008_ip = 663; continue _fun0008 }
 630:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 17;
                    var12 = var15[var12];
                    var14 = var14.bind(var2)(var12);
                    var12 = var14.requestVoiceFilterSwitch;
                    var11 = var12.bind(var14)(var11);
                    _fun0008_ip = 694; continue _fun0008;
 663:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 17;
                    var11 = var14[var11];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.requestVoiceFilterSwitch;
                    var11 = var11.bind(var12)(var13);
 694:
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
 759: // try_end0
                    _fun0008_ip = 996; continue _fun0008;
 764:
                    return var9;
 767:
                    return var8;
 770:
                    return var6;
 773:
                    return var5;
 776:
                    return var4;
 779:
                    return var3;
 782: // catch_target0
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
 996:
                    return var2;
 999:
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
 0:
            var13 = arg1;
            var1 = arguments[1];
            var _closure2_slot0 = var13;
            var7 = undefined;
            if(!(var1 === var7)) { _fun0009_ip = 20; continue _fun0009 }
 18:
            var1 = null;
 20:
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
            if(!(var6 == var1)) { _fun0009_ip = 422; continue _fun0009 }
 92:
            var10 = var6 == var4;
            var12 = undefined;
            if(var10) { _fun0009_ip = 106; continue _fun0009 }
 101:
            var12 = var4.status;
 106:
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = 8;
            var10 = var10[var11];
            var10 = var14.bind(var7)(var10);
            var10 = var10.VoiceFilterModelStatus;
            var10 = var10.DOWNLOADED;
            if(!(var12 !== var10)) { _fun0009_ip = 402; continue _fun0009 }
 145:
            var10 = var6 == var4;
            var6 = undefined;
            if(var10) { _fun0009_ip = 159; continue _fun0009 }
 154:
            var6 = var4.status;
 159:
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var11];
            var4 = var10.bind(var7)(var4);
            var4 = var4.VoiceFilterModelStatus;
            var4 = var4.DOWNLOADING;
            if(!(var6 !== var4)) { _fun0009_ip = 349; continue _fun0009 }
 195:
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
 0:
                    var1 = arg1;
                    var1 = var1.fetchedFromNetwork;
                    if(!var1) { _fun0010_ip = 176; continue _fun0010 }
 17:
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
                    if(!var9) { _fun0010_ip = 87; continue _fun0010 }
 84:
                    var7 = var8;
 87:
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
                    if(var8) { _fun0010_ip = 153; continue _fun0010 }
 143:
                    var7 = _closure2_slot1;
                    var6 = var7.reason;
 153:
                    var7 = var5 != var6;
                    var5 = null;
                    if(!var7) { _fun0010_ip = 165; continue _fun0010 }
 162:
                    var5 = var6;
 165:
                    var1['reason'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 176:
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
 0:
                    var6 = arg1;
                    var1 = null;
                    if(!(var1 != var6)) { _fun0011_ip = 23; continue _fun0011 }
 9:
                    var1 = var6.USER_CANCELED_DOWNLOAD;
                    if(var1) { _fun0011_ip = 276; continue _fun0011 }
 23:
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
                    _fun0011_ip = 308; continue _fun0011;
 276:
                    var4 = _closure1_slot9;
                    var3 = var4.info;
                    var2 = _closure2_slot0;
                    var1 = 'User canceled the download for Voice Filter dependency';
                    var1 = var3.bind(var4)(var1, var2);
 308:
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
 349:
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
 402:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var2 = var2.bind(var3)();
            return var2;
 422:
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