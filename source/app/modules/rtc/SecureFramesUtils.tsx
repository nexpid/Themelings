// app/modules/rtc/SecureFramesUtils.tsx
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
            var9 = _closure1_slot18;
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
            var7 = _closure1_slot18;
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
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
    var8 = function getSecureFramesHelpdeskArticle() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.getArticleURL;
        var1 = _closure1_slot16;
        var1 = var1.END_TO_END_ENCRYPTION;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot19 = var8;
    var7 = function getCurrentUserSigningKey() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var7;
    var1 = function _getCurrentUserSigningKey() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var4 = _closure1_slot5;
                    var3 = var4.getStaticAuthSessionId;
                    var5 = var3.bind(var4)();
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var3);
                    var3 = null;
                    var4 = var3 != var5;
                    var3 = '[getCurrentUserPublicKey] session id should not be null';
                    var3 = var6.bind(var7)(var4, var3);
                    var4 = _closure1_slot6;
                    var3 = var4.getMLSSigningKey;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var5, var2);
                    SaveGenerator(address=87);
case 38:
                    return var2;
case 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 11; continue _fun0004 }
case 40:
                    return var2;
case 11:
                    return var2;
case 36:
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
    var1 = function toBase64DataUri(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 20;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.fromByteArray;
        var1 = global;
        var6 = var1.Uint8Array;
        var2 = var6.prototype;
        var5 = Object.create(var2, {constructor: {value: var6}});
        var7 = arg1;
        var8 = var5;
        var2 = new var8[var6](var7, var6);
        var2 = var2 instanceof Object ? var2 : var5;
        var3 = var3.bind(var4)(var2);
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'data:application/octet-stream;base64,';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot22 = var1;
    var6 = function isPublicKeyMatch() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var6;
    var1 = function _isPublicKeyMatch() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var5 = arg1;
                    var7 = arg2;
                    var6 = arg3;
case 43: // try_start_0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var2 = var4[var2];
                    var9 = undefined;
                    var2 = var3.bind(var9)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var11 = _closure1_slot15;
                    var10 = var11.VOICE_MATCH_PUBLIC_KEY;
                    var5 = var10.bind(var11)(var5);
                    var2['url'] = var5;
                    var5 = {};
                    var8 = _closure1_slot22;
                    var7 = var8.bind(var9)(var7);
                    var5['public_key'] = var7;
                    var5['key_version'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=116);
case 44:
                    return var2;
case 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    var3 = var2.body;
                    var3 = var3.is_match;
case 48: // try_end0
                    return var3;
case 46:
                    return var2;
case 49: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 22;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.captureException;
                    var3 = var3.bind(var4)(var2);
                    throw var2;
case 41:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot24 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function uploadCurrentUserPublicKey() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _uploadCurrentUserPublicKey() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var5 = var3;
                    var6 = undefined;
                    var12 = undefined;
                    var10 = undefined;
                    var2 = _closure1_slot20;
                    var2 = var2.bind(var6)(var3);
                    SaveGenerator(address=38);
case 52:
                    return var2;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var12 = var2.key;
                    var10 = var2.signature;
case 56: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 21;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var8 = var3.HTTP;
                    var7 = var8.put;
                    var3 = {};
                    var11 = _closure1_slot15;
                    var9 = var11.VOICE_PUBLIC_KEYS;
                    var9 = var9.bind(var11)();
                    var3['url'] = var9;
                    var9 = {};
                    var11 = _closure1_slot22;
                    var12 = var11.bind(var6)(var12);
                    var9['public_key'] = var12;
                    var10 = var11.bind(var6)(var10);
                    var9['signature'] = var10;
                    var10 = var5;
                    var9['key_version'] = var10;
                    var3['body'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=162);
case 57:
                    return var3;
case 58:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 11;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.addUploadedKeyVersion;
                    var5 = var7.bind(var8)(var5);
case 61: // try_end0
                    return var6;
case 59:
                    return var3;
case 22: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 22;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.captureException;
                    var4 = var4.bind(var5)(var3);
                    throw var3;
case 54:
                    return var2;
case 50:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function isKeyVersionUploaded(arg1) {
        var2 = _closure1_slot10;
        var1 = var2.getUploadedKeyVersionsCached;
        var3 = var1.bind(var2)();
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function _ensureCurrentUserPublicKey() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 62; continue _fun0007 }
case 42:
                    var5 = _closure1_slot27;
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    if(var5) { _fun0007_ip = 5; continue _fun0007 }
case 63:
                    var3 = _closure1_slot25;
                    var3 = var3.bind(var2)(var4);
                    SaveGenerator(address=40);
case 53:
                    return var3;
case 64:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(!var4) { _fun0007_ip = 5; continue _fun0007 }
case 2:
                    return var3;
case 5:
                    return var2;
case 62:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function _isCurrentUserPublicKeyMatch() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 65; continue _fun0008 }
case 51:
                    var2 = _closure1_slot27;
                    var7 = undefined;
                    var2 = var2.bind(var7)(var6);
                    if(var2) { _fun0008_ip = 66; continue _fun0008 }
case 3:
                    var2 = _closure1_slot25;
                    var2 = var2.bind(var7)(var6);
                    SaveGenerator(address=43);
case 67:
                    return var2;
case 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 69; continue _fun0008 }
case 5:
                    var3 = true;
                    return var3;
case 69:
                    return var2;
case 66:
                    var3 = _closure1_slot5;
                    var2 = var3.getId;
                    var8 = var2.bind(var3)();
                    var2 = _closure1_slot20;
                    var2 = var2.bind(var7)(var6);
                    SaveGenerator(address=84);
case 70:
                    return var2;
case 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                    var5 = var2.key;
                    var3 = _closure1_slot23;
                    var3 = var3.bind(var7)(var8, var5, var6);
                    SaveGenerator(address=110);
case 74:
                    return var3;
case 13:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 75; continue _fun0008 }
case 45:
                    if(var3) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 12;
                    var4 = var8[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.trackE2EEPublicKeyMismatch;
                    var4 = var4.bind(var5)(var6);
case 76:
                    return var3;
case 75:
                    return var3;
case 72:
                    return var2;
case 65:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var5 = function getIsSecureFramesKeyInconsistent(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var14 = arg1;
            var3 = _closure1_slot3;
            var12 = undefined;
            var2 = arg2;
            var1 = 2;
            var3 = var3.bind(var12)(var2, var1);
            var11 = 0;
            var2 = var3[var11];
            var1 = 1;
            var10 = var3[var1];
            var1 = var2.isUserConnected;
            var1 = var1.bind(var2)(var14);
            if(var1) { _fun0009_ip = 4; continue _fun0009 }
case 78:
            var1 = false;
            return var1;
case 4:
            var1 = var2.getSecureFramesRosterMapEntry;
            var3 = var1.bind(var2)(var14);
            var9 = null;
            if(!(var9 != var3)) { _fun0009_ip = 79; continue _fun0009 }
case 80:
            var8 = global;
            var1 = var8.Uint8Array;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var21 = var2;
            var20 = var3;
            var1 = new var21[var1](var20, var19);
            var7 = var1 instanceof Object ? var1 : var2;
            var2 = _closure1_slot17;
            var1 = var10.getAllActiveStreamKeys;
            var1 = var1.bind(var10)();
            var6 = var2.bind(var12)(var1);
            var2 = var6.bind(var12)();
            var1 = var2.done;
            var5 = var2;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            if(var1) { _fun0009_ip = 81; continue _fun0009 }
case 82:
            var16 = var5.value;
            var1 = var10.isUserConnected;
            var1 = var1.bind(var10)(var16, var14);
            if(!var1) { _fun0009_ip = 83; continue _fun0009 }
case 17:
            var15 = _closure1_slot8;
            var1 = var15.getSecureFramesRosterMapEntry;
            var17 = var1.bind(var15)(var16, var14);
            if(!(var9 != var17)) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var1 = var8.Uint8Array;
            var15 = var1.prototype;
            var15 = Object.create(var15, {constructor: {value: var1}});
            var21 = var15;
            var20 = var17;
            var1 = new var21[var1](var20, var19);
            var16 = var1 instanceof Object ? var1 : var15;
            var1 = var7.length;
            var1 = var11 < var1;
            var15 = 0;
            var4 = var17;
            var3 = var16;
            var2 = 0;
            if(!var1) { _fun0009_ip = 83; continue _fun0009 }
case 54:
            var18 = var7[var15];
            var1 = var16[var15];
            if(!(var18 === var1)) { _fun0009_ip = 86; continue _fun0009 }
case 87:
            var15 = var15 + 1;
            var1 = var7.length;
            var4 = var17;
            var3 = var16;
            var2 = var15;
            if(var2 < var1) { _fun0009_ip = 54; continue _fun0009 }
case 83:
            var15 = var6.bind(var12)();
            var1 = var15.done;
            var5 = var15;
            if(var1) { _fun0009_ip = 81; continue _fun0009 }
case 88:
            _fun0009_ip = 82; continue _fun0009;
case 86:
            var1 = true;
            return var1;
case 84:
            var1 = true;
            return var1;
case 81:
            var1 = false;
            return var1;
case 79:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot30 = var5;
    var4 = function showSecureFramesKeyInconsistentAlert(arg1) {
        var1 = arg1;
        var8 = var1.userId;
        var7 = var1.channelId;
        var9 = var1.nickname;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 12;
        var3 = var10[var1];
        var1 = undefined;
        var5 = var6.bind(var1)(var3);
        var4 = var5.trackE2EEUserVerificationFailed;
        var3 = {};
        var3['userId'] = var8;
        var3['channelId'] = var7;
        var7 = _closure1_slot12;
        var3['keyVersion'] = var7;
        var7 = _closure1_slot11;
        var7 = var7.OTHER_USER_INCONSISTENT_KEYS;
        var3['reason'] = var7;
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot1;
        var2 = 23;
        var2 = var10[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var5 = 15;
        var7 = var10[var5];
        var7 = var6.bind(var1)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var5];
        var7 = var6.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.mznLyc;
        var7 = var8.bind(var11)(var7);
        var2['title'] = var7;
        var7 = var10[var5];
        var7 = var6.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.format;
        var5 = var10[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.t;
        var6 = var5.WY6IKS;
        var5 = {};
        var5['username'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var2['body'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot31 = var4;
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
    var9 = var12.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 8;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.AnalyticsSecureFramesUserVerification;
    var _closure1_slot11 = var12;
    var9 = var9.SECURE_FRAMES_PUBLIC_KEY_VERSION;
    var _closure1_slot12 = var9;
    var9 = 9;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.LinkingTypes;
    var _closure1_slot13 = var12;
    var12 = var9.Routes;
    var _closure1_slot14 = var12;
    var12 = var9.Endpoints;
    var _closure1_slot15 = var12;
    var9 = var9.HelpdeskArticles;
    var _closure1_slot16 = var9;
    var9 = 25;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/rtc/SecureFramesUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['getSecureFramesHelpdeskArticle'] = var8;
    var8 = function getSecureFramesPersistentCodesHelpdeskArticle() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.getArticleURL;
        var1 = _closure1_slot16;
        var1 = var1.END_TO_END_ENCRYPTION;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getSecureFramesPersistentCodesHelpdeskArticle'] = var8;
    var8 = function getSecureFramesVerifiedDevicesHelpdeskArticle() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.getArticleURL;
        var1 = _closure1_slot16;
        var1 = var1.END_TO_END_ENCRYPTION;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getSecureFramesVerifiedDevicesHelpdeskArticle'] = var8;
    var8 = function addVerification(arg1, arg2, arg3, arg4, arg5) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = arg3;
            if(var3) { _fun0010_ip = 78; continue _fun0010 }
case 89:
            var3 = var4.createSecureFramesTransientKey;
            var3 = var3.bind(var4)(var5, var6);
            _fun0010_ip = 90; continue _fun0010;
case 78:
            var3 = var4.createSecureFramesVerifiedKey;
            var3 = var3.bind(var4)(var5, var6);
case 90:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackE2EEUserVerified;
            var2 = {};
            var6 = arg4;
            var2['channelId'] = var6;
            var2['userId'] = var5;
            var5 = arg5;
            var2['analyticsLocation'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['addVerification'] = var8;
    var8 = function deleteVerification(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var2 = arg3;
            if(var2) { _fun0011_ip = 55; continue _fun0011 }
case 91:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.deleteSecureFramesTransientKey;
            var2 = var2.bind(var3)(var4);
            _fun0011_ip = 92; continue _fun0011;
case 55:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var5 = undefined;
            var7 = var3.bind(var5)(var2);
            var3 = var7.serializeKey;
            var2 = global;
            var9 = var2.Uint8Array;
            var2 = var9.prototype;
            var8 = Object.create(var2, {constructor: {value: var9}});
            var11 = arg2;
            var12 = var8;
            var2 = new var12[var9](var11, var10);
            var2 = var2 instanceof Object ? var2 : var8;
            var3 = var3.bind(var7)(var2);
            var2 = _closure1_slot1;
            var1 = 11;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.deleteSecureFramesVerifiedKey;
            var1 = var1.bind(var2)(var4, var3);
case 92:
            var1 = undefined;
            return var1;
        }
    };
    var3['deleteVerification'] = var8;
    var8 = function deletePersistentVerification(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 14;
        var2 = var10[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openSecureFramesUpdateConfirmation;
        var2 = {};
        var9 = _closure1_slot0;
        var6 = 15;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.hdL15+;
        var7 = var8.bind(var11)(var7);
        var2['title'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.8VGYKi;
        var6 = var7.bind(var8)(var6);
        var2['subtitle'] = var6;
        var5 = function onConfirm() {
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 11;
            var3 = var4[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var3);
            var6 = var7.deleteSecureFramesVerifiedKey;
            var5 = _closure2_slot0;
            var3 = _closure2_slot1;
            var3 = var6.bind(var7)(var5, var3);
            var3 = _closure1_slot0;
            var2 = 12;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackE2EESettingsDeviceDelete;
            var2 = var2.bind(var3)();
            return var1;
        };
        var2['onConfirm'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['deletePersistentVerification'] = var8;
    var8 = function deleteUserPersistentVerifications(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot9;
        var1 = var2.getUser;
        var7 = var1.bind(var2)(var3);
        var3 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 16;
        var2 = var10[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var2 = var4.getName;
        var13 = var2.bind(var4)(var7);
        var2 = 14;
        var2 = var10[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.openSecureFramesUpdateConfirmation;
        var2 = {};
        var9 = _closure1_slot0;
        var6 = 15;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var12 = var7.intl;
        var11 = var12.formatToPlainString;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var7 = var7.t;
        var8 = var7.K6NGBw;
        var7 = {};
        var7['username'] = var13;
        var7 = var11.bind(var12)(var8, var7);
        var2['title'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.F1BQKy;
        var6 = var7.bind(var8)(var6);
        var2['subtitle'] = var6;
        var5 = function onConfirm() {
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 11;
            var3 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.deleteSecureFramesUserVerifiedKeys;
            var3 = _closure2_slot0;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot0;
            var2 = 12;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.trackE2EESettingsUserDelete;
            var2 = var2.bind(var3)();
            return var1;
        };
        var2['onConfirm'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['deleteUserPersistentVerifications'] = var8;
    var8 = function getSecureFramesUserVerifiedTimestamp(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 17;
            var5 = var3[var2];
            var6 = undefined;
            var7 = var4.bind(var6)(var5);
            var5 = arg1;
            var8 = var7.bind(var6)(var5);
            var2 = var3[var2];
            var2 = var4.bind(var6)(var2);
            var7 = var2.bind(var6)();
            var5 = var7.diff;
            var2 = 's';
            var5 = var5.bind(var7)(var8, var2);
            var2 = 18;
            var3 = var3[var2];
            var3 = var4.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.DAYS_30;
            var8 = 12;
            var3 = var8 * var3;
            if(!(!(var5 > var3))) { _fun0012_ip = 93; continue _fun0012 }
case 94:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var2];
            var3 = var4.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.DAYS_30;
            if(!(!(var5 > var3))) { _fun0012_ip = 95; continue _fun0012 }
case 96:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var2];
            var3 = var4.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.DAY;
            var9 = 7;
            var3 = var9 * var3;
            if(!(!(var5 > var3))) { _fun0012_ip = 97; continue _fun0012 }
case 16:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var2];
            var3 = var4.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.DAY;
            if(!(!(var5 > var3))) { _fun0012_ip = 98; continue _fun0012 }
case 99:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var2];
            var3 = var4.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.HOUR;
            if(!(!(var5 > var3))) { _fun0012_ip = 100; continue _fun0012 }
case 101:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var2];
            var3 = var4.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.MINUTE;
            if(!(!(var5 > var3))) { _fun0012_ip = 102; continue _fun0012 }
case 103:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 15;
            var7 = var11[var3];
            var7 = var4.bind(var6)(var7);
            var10 = var7.intl;
            var7 = var10.formatToPlainString;
            var3 = var11[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3./w0Qp6;
            var3 = {};
            var3['count'] = var5;
            var3 = var7.bind(var10)(var4, var3);
            return var3;
case 102:
            var3 = global;
            var7 = var3.Math;
            var4 = var7.round;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = var12[var2];
            var3 = var10.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.MINUTE;
            var3 = var5 / var3;
            var11 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var3 = 15;
            var7 = var12[var3];
            var7 = var4.bind(var6)(var7);
            var10 = var7.intl;
            var7 = var10.formatToPlainString;
            var3 = var12[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.ws6rWl;
            var3 = {};
            var3['count'] = var11;
            var3 = var7.bind(var10)(var4, var3);
            return var3;
case 100:
            var3 = global;
            var7 = var3.Math;
            var4 = var7.round;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = var12[var2];
            var3 = var10.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.HOUR;
            var3 = var5 / var3;
            var11 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var3 = 15;
            var7 = var12[var3];
            var7 = var4.bind(var6)(var7);
            var10 = var7.intl;
            var7 = var10.formatToPlainString;
            var3 = var12[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.KULxVV;
            var3 = {};
            var3['count'] = var11;
            var3 = var7.bind(var10)(var4, var3);
            return var3;
case 98:
            var3 = global;
            var7 = var3.Math;
            var4 = var7.round;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = var12[var2];
            var3 = var10.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.DAY;
            var3 = var5 / var3;
            var11 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var3 = 15;
            var7 = var12[var3];
            var7 = var4.bind(var6)(var7);
            var10 = var7.intl;
            var7 = var10.formatToPlainString;
            var3 = var12[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.LE8a2N;
            var3 = {};
            var3['count'] = var11;
            var3 = var7.bind(var10)(var4, var3);
            return var3;
case 97:
            var3 = global;
            var7 = var3.Math;
            var4 = var7.round;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = var11[var2];
            var3 = var10.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.DAY;
            var3 = var9 * var3;
            var3 = var5 / var3;
            var10 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var3 = 15;
            var7 = var11[var3];
            var7 = var4.bind(var6)(var7);
            var9 = var7.intl;
            var7 = var9.formatToPlainString;
            var3 = var11[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.dLurKS;
            var3 = {};
            var3['count'] = var10;
            var3 = var7.bind(var9)(var4, var3);
            return var3;
case 95:
            var3 = global;
            var7 = var3.Math;
            var4 = var7.round;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = var11[var2];
            var3 = var9.bind(var6)(var3);
            var3 = var3.Seconds;
            var3 = var3.DAYS_30;
            var3 = var5 / var3;
            var10 = var4.bind(var7)(var3);
            var4 = _closure1_slot0;
            var3 = 15;
            var7 = var11[var3];
            var7 = var4.bind(var6)(var7);
            var9 = var7.intl;
            var7 = var9.formatToPlainString;
            var3 = var11[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.iT+b+/;
            var3 = {};
            var3['count'] = var10;
            var3 = var7.bind(var9)(var4, var3);
            return var3;
case 93:
            var3 = global;
            var4 = var3.Math;
            var3 = var4.round;
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = var7[var2];
            var2 = var9.bind(var6)(var2);
            var2 = var2.Seconds;
            var2 = var2.DAYS_30;
            var2 = var8 * var2;
            var2 = var5 / var2;
            var5 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var1 = 15;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.F1wqkJ;
            var1 = {};
            var1['count'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getSecureFramesUserVerifiedTimestamp'] = var8;
    var8 = function getUserVerificationDeeplink(arg1, arg2) {
        var3 = _closure1_slot14;
        var2 = var3.FEATURE;
        var1 = _closure1_slot13;
        var1 = var1.DAVE_PROTOCOL_VERIFICATION;
        var15 = var2.bind(var3)(var1);
        var1 = global;
        var2 = var1.location;
        var9 = var2.protocol;
        var2 = var1.location;
        var16 = var2.host;
        var4 = var1.encodeURIComponent;
        var3 = undefined;
        var2 = arg2;
        var11 = var4.bind(var3)(var2);
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var19 = '';
        var17 = '//';
        var14 = '?userId=';
        var13 = arg1;
        var12 = '&fingerprint=';
        var18 = var9;
        var1 = var19[var6](var18, var17, var16, var15, var14, var13, var12, var11, var10);
        return var1;
    };
    var3['getUserVerificationDeeplink'] = var8;
    var8 = function getUserVerifyStateText(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var2 = _closure1_slot11;
            var2 = var2.OTHER_USER_DISCONNECTED;
            if(!(var2 !== var3)) { _fun0013_ip = 104; continue _fun0013 }
case 105:
            var2 = _closure1_slot11;
            var2 = var2.CURRENT_USER_DISCONNECTED;
            if(!(var2 !== var3)) { _fun0013_ip = 106; continue _fun0013 }
case 68:
            var2 = _closure1_slot11;
            var2 = var2.UNABLE_TO_VERIFY;
            if(!(var2 !== var3)) { _fun0013_ip = 107; continue _fun0013 }
case 108:
            var2 = _closure1_slot11;
            var2 = var2.FINGERPRINT_MISMATCH;
            if(!(var2 !== var3)) { _fun0013_ip = 109; continue _fun0013 }
case 110:
            var2 = _closure1_slot11;
            var2 = var2.OTHER_USER_ALREADY_VERIFIED;
            if(!(var2 !== var3)) { _fun0013_ip = 111; continue _fun0013 }
case 112:
            var2 = _closure1_slot11;
            var2 = var2.MATCH;
            if(!(var2 !== var3)) { _fun0013_ip = 113; continue _fun0013 }
case 114:
            var2 = _closure1_slot11;
            var2 = var2.OTHER_USER_INCONSISTENT_KEYS;
            if(!(var2 !== var3)) { _fun0013_ip = 115; continue _fun0013 }
case 116:
            var2 = undefined;
            return var2;
case 115:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 15;
            var2 = var9[var3];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var7 = var2.intl;
            var5 = var7.string;
            var2 = var9[var3];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.im1uUl;
            var5 = var5.bind(var7)(var2);
            var2 = new Array(2);
            var2[0] = var5;
            var5 = var9[var3];
            var5 = var8.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.format;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.WY6IKS;
            var3 = {};
            var3['username'] = var6;
            var3 = var5.bind(var7)(var4, var3);
            var2[1] = var3;
            return var2;
case 113:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 15;
            var2 = var9[var3];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var7 = var2.intl;
            var5 = var7.string;
            var2 = var9[var3];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.xyE+Dg;
            var5 = var5.bind(var7)(var2);
            var2 = new Array(2);
            var2[0] = var5;
            var5 = var9[var3];
            var5 = var8.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.format;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.znsPl5;
            var3 = {};
            var3['username'] = var6;
            var3 = var5.bind(var7)(var4, var3);
            var2[1] = var3;
            return var2;
case 111:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 15;
            var2 = var9[var3];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var7 = var2.intl;
            var5 = var7.string;
            var2 = var9[var3];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.9lw+Jy;
            var5 = var5.bind(var7)(var2);
            var2 = new Array(2);
            var2[0] = var5;
            var5 = var9[var3];
            var5 = var8.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.format;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.TvBS19;
            var3 = {};
            var3['username'] = var6;
            var3 = var5.bind(var7)(var4, var3);
            var2[1] = var3;
            return var2;
case 109:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 15;
            var2 = var9[var3];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var7 = var2.intl;
            var5 = var7.string;
            var2 = var9[var3];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.HTJ76O;
            var5 = var5.bind(var7)(var2);
            var2 = new Array(2);
            var2[0] = var5;
            var5 = var9[var3];
            var5 = var8.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.format;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.tc6aAQ;
            var3 = {};
            var3['username'] = var6;
            var3 = var5.bind(var7)(var4, var3);
            var2[1] = var3;
            return var2;
case 107:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 15;
            var2 = var9[var3];
            var4 = undefined;
            var2 = var8.bind(var4)(var2);
            var7 = var2.intl;
            var5 = var7.string;
            var2 = var9[var3];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.+no/metroImportDefault;
            var5 = var5.bind(var7)(var2);
            var2 = new Array(2);
            var2[0] = var5;
            var5 = var9[var3];
            var5 = var8.bind(var4)(var5);
            var7 = var5.intl;
            var5 = var7.format;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.Mft7iI;
            var3 = {};
            var3['username'] = var6;
            var3 = var5.bind(var7)(var4, var3);
            var2[1] = var3;
            return var2;
case 106:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 15;
            var2 = var9[var3];
            var7 = undefined;
            var2 = var8.bind(var7)(var2);
            var5 = var2.intl;
            var4 = var5.string;
            var2 = var9[var3];
            var2 = var8.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.5ICxEx;
            var4 = var4.bind(var5)(var2);
            var2 = new Array(2);
            var2[0] = var4;
            var4 = var9[var3];
            var4 = var8.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.v1eXp6;
            var3 = var4.bind(var5)(var3);
            var2[1] = var3;
            return var2;
case 104:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 15;
            var1 = var8[var2];
            var3 = undefined;
            var1 = var7.bind(var3)(var1);
            var5 = var1.intl;
            var4 = var5.string;
            var1 = var8[var2];
            var1 = var7.bind(var3)(var1);
            var1 = var1.t;
            var1 = var1.ZBHDMz;
            var4 = var4.bind(var5)(var1);
            var1 = new Array(2);
            var1[0] = var4;
            var4 = var8[var2];
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.+rIdOT;
            var2 = {};
            var2['username'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1[1] = var2;
            return var1;
        }
    };
    var3['getUserVerifyStateText'] = var8;
    var8 = function getUserVerificationFooterText(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var3 = var2.isCurrentUserKeyPersistent;
            var1 = var2.isOtherUserKeyPersistent;
            var8 = var2.otherUserNickname;
            if(!var3) { _fun0014_ip = 3; continue _fun0014 }
case 117:
            if(var1) { _fun0014_ip = 118; continue _fun0014 }
case 3:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 15;
            var4 = var10[var2];
            var7 = undefined;
            var4 = var9.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            if(var3) { _fun0014_ip = 119; continue _fun0014 }
case 70:
            if(var1) { _fun0014_ip = 45; continue _fun0014 }
case 38:
            var3 = var2.6JLy+v;
            var1 = {};
            var9 = _closure1_slot19;
            var9 = var9.bind(var7)();
            var1['helpArticle'] = var9;
            var1 = var4.bind(var5)(var3, var1);
            _fun0014_ip = 120; continue _fun0014;
case 45:
            var9 = var2.qT5z8/;
            var3 = {};
            var10 = _closure1_slot19;
            var10 = var10.bind(var7)();
            var3['helpArticle'] = var10;
            var1 = var4.bind(var5)(var9, var3);
case 120:
            _fun0014_ip = 121; continue _fun0014;
case 119:
            var3 = var2.p/9PGh;
            var2 = {};
            var2['username'] = var8;
            var6 = _closure1_slot19;
            var6 = var6.bind(var7)();
            var2['helpArticle'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 121:
            _fun0014_ip = 122; continue _fun0014;
case 118:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 15;
            var4 = var8[var2];
            var7 = undefined;
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.FJN+kp;
            var2 = {};
            var6 = _closure1_slot19;
            var6 = var6.bind(var7)();
            var2['helpArticle'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 122:
            return var1;
        }
    };
    var3['getUserVerificationFooterText'] = var8;
    var3['getCurrentUserSigningKey'] = var7;
    var3['isPublicKeyMatch'] = var6;
    var6 = function ensureCurrentUserPublicKey() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['ensureCurrentUserPublicKey'] = var6;
    var6 = function isCurrentUserPublicKeyMatch() {
        var1 = undefined;
        var4 = _closure1_slot29;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['isCurrentUserPublicKeyMatch'] = var6;
    var3['getIsSecureFramesKeyInconsistent'] = var5;
    var3['showSecureFramesKeyInconsistentAlert'] = var4;
    var2 = function validateSecureFramesKeyConsistent(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userId;
            var8 = var1.guildId;
            var7 = var1.channelId;
            var2 = _closure1_slot30;
            var3 = _closure1_slot7;
            var1 = new Array(2);
            var1[0] = var3;
            var3 = _closure1_slot8;
            var1[1] = var3;
            var3 = undefined;
            var1 = var2.bind(var3)(var5, var1);
            if(var1) { _fun0015_ip = 108; continue _fun0015 }
case 28:
            var1 = true;
            return var1;
case 108:
            var2 = _closure1_slot9;
            var1 = var2.getUser;
            var6 = var1.bind(var2)(var5);
            var2 = _closure1_slot31;
            var1 = {};
            var1['userId'] = var5;
            var1['channelId'] = var7;
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 24;
            var4 = var9[var4];
            var5 = var5.bind(var3)(var4);
            var4 = var5.getName;
            var4 = var4.bind(var5)(var8, var7, var6);
            var1['nickname'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = false;
            return var1;
        }
    };
    var3['validateSecureFramesKeyConsistent'] = var2;
    return var1;
})();