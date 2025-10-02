// app/utils/ApplicationAssetUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
    var1 = function updateAssets() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _updateAssets() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var2 = var6[var2];
                    var7 = undefined;
                    var2 = var4.bind(var7)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var9 = _closure1_slot6;
                    var8 = var9.APPLICATION_ASSETS;
                    var8 = var8.bind(var9)(var5);
                    var2['url'] = var8;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=88);
case 9:
                    return var2;
case 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var8 = var2.body;
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 6;
                    var4 = var9[var4];
                    var7 = var6.bind(var7)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var9 = 'APPLICATION_ASSETS_UPDATE';
                    var4['type'] = var9;
                    var4['applicationId'] = var5;
                    var4['assets'] = var8;
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure1_slot5;
                    var3 = var4.getApplicationAssets;
                    var3 = var3.bind(var4)(var5);
                    return var3;
case 39:
                    return var2;
case 36:
                    return var1;
                }
            };
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
    var1 = function getApplicationAssetsMap(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot5;
            var1 = var3.getApplicationAssets;
            var5 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var6 = var5.lastUpdated;
            var1 = global;
            var7 = var1.Date;
            var3 = var7.now;
            var3 = var3.bind(var7)();
            var6 = var3 - var6;
            var3 = 3600000;
            if(!(!(var6 > var3))) { _fun0005_ip = 41; continue _fun0005 }
case 43:
            var3 = var1.Promise;
            var1 = var3.resolve;
            var1 = var1.bind(var3)(var5);
            _fun0005_ip = 40; continue _fun0005;
case 41:
            var3 = _closure1_slot14;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 40:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var6 = function getAssetFromImageURL(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot10;
            var3 = var1[var6];
            var2 = var3.serialize;
            var1 = arg2;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            if(!var3) { _fun0006_ip = 35; continue _fun0006 }
case 33:
            var2 = var3.toString;
            var5 = var2.bind(var3)();
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ':';
            var1 = var4.bind(var3)(var6, var2, var5);
case 35:
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var5 = function getAssets() {
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
    var1 = function _getAssets() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var4 = _closure1_slot16;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var3)(var2);
                    SaveGenerator(address=28);
case 46:
                    return var2;
case 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                    var4 = null;
                    var4 = var4 == var2;
                    var3 = undefined;
                    if(var4) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var3 = var2.assets;
case 49:
                    return var3;
case 47:
                    return var2;
case 44:
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
    var1 = function _resolveExternalAssets() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var4 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 51; continue _fun0008 }
case 37:
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var4 = arg1;
                            var3 = null;
                            var1 = var3 != var4;
                            if(!var1) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                            var2 = global;
                            var2 = var2.Object;
                            var2 = var2.prototype;
                            var6 = var2.hasOwnProperty;
                            var5 = var6.call;
                            var2 = _closure1_slot11;
                            var2 = var5.bind(var6)(var2, var4);
                            var1 = !var2;
case 52:
                            if(!var1) { _fun0009_ip = 35; continue _fun0009 }
case 4:
                            var2 = _closure1_slot11;
                            var2 = var2[var4];
                            var1 = var3 == var2;
case 35:
                            return var1;
                        }
                    };
                    var9 = var3.bind(var4)(var2);
                    var3 = var9.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var11 = _closure1_slot6;
                    var10 = var11.APPLICATION_EXTERNAL_ASSETS;
                    var8 = arg1;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var8 = {};
                    var8['urls'] = var9;
                    var2['body'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=141);
case 56:
                    return var2;
case 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var3 = var2.body;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.bind(var6)();
                    var3 = var4.done;
                    if(var3) { _fun0008_ip = 54; continue _fun0008 }
case 17:
                    var3 = var4.value;
                    var9 = var3.url;
                    var8 = var3.external_asset_path;
                    var3 = _closure1_slot11;
                    var3[var9] = var8;
                    var8 = var5.bind(var6)();
                    var3 = var8.done;
                    var4 = var8;
                    if(!var3) { _fun0008_ip = 17; continue _fun0008 }
case 54:
                    var3 = undefined;
                    return var3;
case 58:
                    return var2;
case 51:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function updateUrlAssetIds(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var12 = arg2;
            var3 = var1.filter;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = arg1;
                    var3 = null;
                    var4 = var3 == var5;
                    var1 = undefined;
                    if(var4) { _fun0011_ip = 60; continue _fun0011 }
case 32:
                    var6 = var5.startsWith;
                    var4 = 'http:';
                    var1 = var6.bind(var5)(var4);
case 60:
                    if(var1) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                    var3 = var3 == var5;
                    var2 = undefined;
                    if(var3) { _fun0011_ip = 28; continue _fun0011 }
case 63:
                    var4 = var5.startsWith;
                    var3 = 'https:';
                    var2 = var4.bind(var5)(var3);
case 28:
                    var1 = var2;
case 61:
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            var2 = var2.length;
            var13 = 0;
            var3 = var2 > var13;
            var2 = 0;
            if(!var3) { _fun0010_ip = 64; continue _fun0010 }
case 65:
            var3 = var1.length;
            var3 = var13 < var3;
            var11 = undefined;
            var9 = 'mp';
            var8 = null;
            var7 = global;
            var6 = 0;
            var5 = 0;
            var4 = undefined;
            var2 = 0;
            if(!var3) { _fun0010_ip = 64; continue _fun0010 }
case 66:
            var15 = var1[var5];
            var13 = var6;
            if(!(var8 != var15)) { _fun0010_ip = 14; continue _fun0010 }
case 38:
            var3 = var7.Object;
            var3 = var3.prototype;
            var16 = var3.hasOwnProperty;
            var14 = var16.call;
            var3 = _closure1_slot11;
            var14 = var14.bind(var16)(var3, var15);
            var3 = undefined;
            if(!var14) { _fun0010_ip = 67; continue _fun0010 }
case 68:
            var14 = _closure1_slot11;
            var3 = var14[var15];
case 67:
            var13 = var6;
            var4 = var3;
            if(!(var8 != var4)) { _fun0010_ip = 14; continue _fun0010 }
case 69:
            var14 = _closure1_slot17;
            var14 = var14.bind(var11)(var9, var3);
            var12[var5] = var14;
            var13 = var6 + 1;
            var4 = var3;
case 14:
            var5 = var5 + 1;
            var3 = var1.length;
            var6 = var13;
            var2 = var6;
            if(var5 < var3) { _fun0010_ip = 66; continue _fun0010 }
case 64:
            var1 = var1.length;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function updateNonUrlAssetIds(arg1, arg2, arg3, arg4) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var13 = arg1;
            var12 = arg2;
            var11 = arg3;
            var10 = arg4;
            var1 = var13.length;
            var9 = 0;
            var2 = var9 < var1;
            var4 = false;
            var7 = null;
            var5 = global;
            var3 = 0;
            var8 = undefined;
            var1 = false;
            if(!var2) { _fun0012_ip = 36; continue _fun0012 }
case 63:
            var16 = var13[var3];
            var14 = var4;
            var15 = var8;
            if(!(var7 != var16)) { _fun0012_ip = 70; continue _fun0012 }
case 4:
            var2 = var12[var3];
            var14 = var4;
            var15 = var8;
            if(!(var7 == var2)) { _fun0012_ip = 70; continue _fun0012 }
case 71:
            var2 = var5.Object;
            var2 = var2.prototype;
            var17 = var2.hasOwnProperty;
            var2 = var17.call;
            var2 = var2.bind(var17)(var11, var16);
            if(!var2) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var2 = var11[var16];
case 72:
            var16 = var4;
            if(var2) { _fun0012_ip = 74; continue _fun0012 }
case 13:
            if(!(var7 != var10)) { _fun0012_ip = 75; continue _fun0012 }
case 76:
            var17 = var10 <= var9;
            var16 = true;
            if(!var17) { _fun0012_ip = 74; continue _fun0012 }
case 75:
            var12[var3] = var7;
            var14 = var4;
            var15 = var2;
            _fun0012_ip = 70; continue _fun0012;
case 74:
            var17 = var2.id;
            var12[var3] = var17;
            var14 = var16;
            var15 = var2;
case 70:
            var3 = var3 + 1;
            var2 = var13.length;
            var4 = var14;
            var8 = var15;
            var1 = var4;
            if(var3 < var2) { _fun0012_ip = 63; continue _fun0012 }
case 36:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var4 = function fetchAssetIds() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var4;
    var1 = function _fetchAssetIds() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    var13 = arg2;
                    var12 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 77; continue _fun0013 }
case 78:
                    var _closure4_slot0 = var8;
                    var _closure4_slot1 = var13;
                    var7 = undefined;
                    if(!(var12 === var7)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
                    var12 = 1;
case 79:
                    var _closure4_slot2 = var12;
                    SaveGenerator(address=46);
case 55:
                    return var7;
case 2:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 81; continue _fun0013 }
case 4:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var9 = 6;
                    var3 = var3[var9];
                    var6 = var4.bind(var7)(var3);
                    var4 = var6.dispatch;
                    var3 = {};
                    var10 = 'APPLICATION_ASSETS_FETCH';
                    var3['type'] = var10;
                    var3['applicationId'] = var8;
                    var3 = var4.bind(var6)(var3);
                    var4 = new Array(0);
                    var6 = var13.filter;
                    var3 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var5 = arg1;
                            var3 = null;
                            var4 = var3 == var5;
                            var1 = undefined;
                            if(var4) { _fun0014_ip = 60; continue _fun0014 }
case 32:
                            var6 = var5.startsWith;
                            var4 = 'http:';
                            var1 = var6.bind(var5)(var4);
case 60:
                            if(var1) { _fun0014_ip = 61; continue _fun0014 }
case 62:
                            var3 = var3 == var5;
                            var2 = undefined;
                            if(var3) { _fun0014_ip = 28; continue _fun0014 }
case 63:
                            var4 = var5.startsWith;
                            var3 = 'https:';
                            var2 = var4.bind(var5)(var3);
case 28:
                            var1 = var2;
case 61:
                            return var1;
                        }
                    };
                    var6 = var6.bind(var13)(var3);
                    var10 = var6.length;
                    var3 = 0;
                    if(!(var10 > var3)) { _fun0013_ip = 15; continue _fun0013 }
case 82:
                    var3 = function resolveExternalAssets() {
                        var1 = undefined;
                        var4 = _closure1_slot20;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var7)(var8, var6);
                    SaveGenerator(address=149);
case 59:
                    return var3;
case 83:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0013_ip = 84; continue _fun0013 }
case 15:
                    var6 = _closure1_slot21;
                    var6 = var6.bind(var7)(var13, var4);
                    if(var6) { _fun0013_ip = 85; continue _fun0013 }
case 86:
                    var6 = _closure1_slot18;
                    var6 = var6.bind(var7)(var8);
                    SaveGenerator(address=187);
case 87:
                    return var6;
case 19:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                    var14 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var9];
                    var15 = var14.bind(var7)(var10);
                    var14 = var15.dispatch;
                    var10 = {};
                    var16 = 'APPLICATION_ASSETS_UPDATE';
                    var10['type'] = var16;
                    var10['applicationId'] = var8;
                    var10['assets'] = var6;
                    var10 = var14.bind(var15)(var10);
                    var10 = _closure1_slot22;
                    var21 = undefined;
                    var20 = var13;
                    var19 = var4;
                    var18 = var6;
                    var17 = var12;
                    var10 = var21[var10](var20, var19, var18, var17, var16);
                    if(var10) { _fun0013_ip = 90; continue _fun0013 }
case 91:
                    var12 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var9];
                    var13 = var12.bind(var7)(var10);
                    var12 = var13.dispatch;
                    var10 = {};
                    var14 = 'APPLICATION_ASSETS_FETCH_SUCCESS';
                    var10['type'] = var14;
                    var10['applicationId'] = var8;
                    var10 = var12.bind(var13)(var10);
                    var10 = var4;
                    _fun0013_ip = 92; continue _fun0013;
case 90:
                    var12 = _closure1_slot14;
                    var13 = var12.bind(var7)(var8);
                    var12 = var13.then;
                    var11 = function() {
                        var5 = _closure1_slot23;
                        var4 = _closure4_slot0;
                        var3 = _closure4_slot1;
                        var2 = _closure4_slot2;
                        var1 = 1;
                        var2 = var2 - var1;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    };
                    var10 = var12.bind(var13)(var11);
case 92:
                    return var10;
case 88:
                    return var6;
case 85:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'APPLICATION_ASSETS_FETCH_SUCCESS';
                    var5['type'] = var9;
                    var5['applicationId'] = var8;
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 84:
                    return var3;
case 81:
                    return var2;
case 77:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.Endpoints;
    var _closure1_slot6 = var10;
    var10 = var7.PlatformTypes;
    var _closure1_slot7 = var10;
    var7 = /https:\\/\\/static-cdn\.jtvnw\.net\\/previews-ttv\\/live_user_(.+)-\{width\}x\{height\}.jpg/;
    var _closure1_slot8 = var7;
    var7 = /https:\\/\\/i\.ytimg\.com\\/vi\\/([a-zA-Z0-9_-]+)\\/hqdefault_live\.jpg/;
    var _closure1_slot9 = var7;
    var7 = {};
    var12 = var10.SPOTIFY;
    var11 = {};
    var13 = function deserialize(arg1) {
        var1 = global;
        var4 = var1.encodeURIComponent;
        var3 = undefined;
        var2 = arg1;
        var4 = var4.bind(var3)(var2);
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = 'https://i.scdn.co/image/';
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var11['deserialize'] = var13;
    var13 = function serialize(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = 'https://i.scdn.co/image/';
        var2 = var2.bind(var3)(var1);
        var1 = 1;
        var1 = var2[var1];
        return var1;
    };
    var11['serialize'] = var13;
    var7[var12] = var11;
    var12 = var10.TWITCH;
    var11 = {};
    var13 = function deserialize(arg1, arg2) {
        var3 = arg2;
        var1 = global;
        var5 = var1.encodeURIComponent;
        var4 = undefined;
        var2 = arg1;
        var14 = var5.bind(var4)(var2);
        var2 = 0;
        var12 = var3[var2];
        var2 = 1;
        var10 = var3[var2];
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var15 = 'https://static-cdn.jtvnw.net/previews-ttv/live_user_';
        var13 = '-';
        var11 = 'x';
        var9 = '.jpg';
        var1 = var15[var5](var14, var13, var12, var11, var10, var9, var8);
        return var1;
    };
    var11['deserialize'] = var13;
    var13 = function serialize(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = _closure1_slot8;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0015_ip = 93; continue _fun0015 }
case 3:
            var2 = 1;
            var1 = var3[var2];
case 93:
            return var1;
        }
    };
    var11['serialize'] = var13;
    var7[var12] = var11;
    var11 = var10.YOUTUBE;
    var10 = {};
    var12 = function deserialize(arg1) {
        var1 = global;
        var4 = var1.encodeURIComponent;
        var3 = undefined;
        var2 = arg1;
        var4 = var4.bind(var3)(var2);
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'https://i.ytimg.com/vi/';
        var1 = '/hqdefault_live.jpg';
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var10['deserialize'] = var12;
    var12 = function serialize(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = _closure1_slot9;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0016_ip = 93; continue _fun0016 }
case 3:
            var2 = 1;
            var1 = var3[var2];
case 93:
            return var1;
        }
    };
    var10['serialize'] = var12;
    var7[var11] = var10;
    var11 = {};
    var10 = function deserialize(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var6 = undefined;
            var4 = var2.bind(var6)(var1);
            var1 = global;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var3 = var2.MEDIA_PROXY_ENDPOINT;
            var2 = null;
            var3 = var2 != var3;
            var2 = 'MEDIA_PROXY_ENDPOINT not configured';
            var2 = var4.bind(var6)(var3, var2);
            var3 = var1.URL;
            var2 = var1.location;
            var2 = var2.protocol;
            var1 = var1.window;
            var1 = var1.GLOBAL_ENV;
            var1 = var1.MEDIA_PROXY_ENDPOINT;
            var9 = var2 + var1;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var11 = var2;
            var10 = var5;
            var1 = new var11[var3](var10, var9, var8);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = var5.toLowerCase;
            var4 = var1.bind(var5)();
            var3 = var4.endsWith;
            var1 = '.gif';
            var1 = var3.bind(var4)(var1);
            var3 = var5.toLowerCase;
            var6 = var3.bind(var5)();
            var4 = var6.endsWith;
            var3 = '.webp';
            var4 = var4.bind(var6)(var3);
            var3 = var5.toLowerCase;
            var6 = var3.bind(var5)();
            var5 = var6.endsWith;
            var3 = '.avif';
            var3 = var5.bind(var6)(var3);
            var5 = var1;
            if(var1) { _fun0017_ip = 94; continue _fun0017 }
case 95:
            var5 = var3;
case 94:
            if(!var5) { _fun0017_ip = 18; continue _fun0017 }
case 96:
            var8 = var2.searchParams;
            var7 = var8.set;
            var6 = 'format';
            var5 = 'webp';
            var5 = var7.bind(var8)(var6, var5);
case 18:
            if(var1) { _fun0017_ip = 97; continue _fun0017 }
case 98:
            var1 = var4;
case 97:
            if(var1) { _fun0017_ip = 99; continue _fun0017 }
case 100:
            var1 = var3;
case 99:
            if(!var1) { _fun0017_ip = 25; continue _fun0017 }
case 101:
            var5 = var2.searchParams;
            var4 = var5.set;
            var3 = 'animated';
            var1 = 'true';
            var1 = var4.bind(var5)(var3, var1);
case 25:
            var1 = var2.toString;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var11['deserialize'] = var10;
    var10 = function serialize(arg1) {
        var1 = arg1;
        return var1;
    };
    var11['serialize'] = var10;
    var10 = 'mp';
    var7[var10] = var11;
    var _closure1_slot10 = var7;
    var7 = {};
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/ApplicationAssetUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getAssetFromImageURL'] = var6;
    var6 = function getAssetImage(arg1, arg2, arg3) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var15 = arg1;
            var4 = arg2;
            var7 = arg3;
            var2 = null;
            if(!(var2 != var4)) { _fun0018_ip = 80; continue _fun0018 }
case 102:
            var1 = var4.includes;
            var3 = ':';
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0018_ip = 103; continue _fun0018 }
case 80:
            if(!(var2 != var15)) { _fun0018_ip = 104; continue _fun0018 }
case 105:
            if(!(var2 == var4)) { _fun0018_ip = 106; continue _fun0018 }
case 104:
            var1 = undefined;
            return var1;
case 106:
            var5 = global;
            var6 = var5.Array;
            var1 = var6.isArray;
            var1 = var1.bind(var6)(var7);
            var8 = var7;
            if(!var1) { _fun0018_ip = 107; continue _fun0018 }
case 108:
            var9 = var5.Math;
            var6 = var9.max;
            var1 = new Array(0);
            var22 = 0;
            var24 = var1;
            var23 = var7;
            var10 = arraySpread(var24, var23, var22);
            var24 = var6;
            var23 = var1;
            var22 = var9;
            var8 = apply(var24, var23, var22);
case 107:
            var14 = '';
            var6 = 'number';
            var1 = typeof var8;
            var13 = var14;
            if(!(var6 === var1)) { _fun0018_ip = 19; continue _fun0018 }
case 109:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 8;
            var6 = var6[var1];
            var1 = undefined;
            var6 = var9.bind(var1)(var6);
            var1 = var6.getBestMediaProxySize;
            var8 = var1.bind(var6)(var8);
            var1 = var5.HermesInternal;
            var6 = var1.concat;
            var1 = '?size=';
            var13 = var6.bind(var1)(var8);
case 19:
            var1 = var5.window;
            var1 = var1.GLOBAL_ENV;
            var1 = var1.CDN_HOST;
            if(!(var2 == var1)) { _fun0018_ip = 110; continue _fun0018 }
case 111:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var6 = var6[var1];
            var1 = undefined;
            var6 = var8.bind(var1)(var6);
            var1 = var6.getAPIBaseURL;
            var24 = var1.bind(var6)();
            var1 = var5.HermesInternal;
            var9 = var1.concat;
            var23 = '/applications/';
            var21 = '/app-assets/';
            var19 = '.png';
            var25 = var14;
            var22 = var15;
            var20 = var4;
            var18 = var13;
            var1 = var25[var9](var24, var23, var22, var21, var20, var19, var18, var17);
            _fun0018_ip = 112; continue _fun0018;
case 110:
            var6 = var5.location;
            var24 = var6.protocol;
            var6 = var5.window;
            var6 = var6.GLOBAL_ENV;
            var22 = var6.CDN_HOST;
            var5 = var5.HermesInternal;
            var10 = var5.concat;
            var23 = '//';
            var21 = '/app-assets/';
            var19 = '/';
            var17 = '.png';
            var25 = var14;
            var20 = var15;
            var18 = var4;
            var16 = var13;
            var1 = var25[var10](var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
case 112:
            return var1;
case 103:
            var1 = var4.split;
            var6 = var1.bind(var4)(var3);
            var4 = _closure1_slot3;
            var5 = undefined;
            var1 = 2;
            var4 = var4.bind(var5)(var6, var1);
            var1 = 0;
            var8 = var4[var1];
            var1 = 1;
            var6 = var4[var1];
            var1 = _closure1_slot7;
            var1 = var1.TWITCH;
            if(!(var8 !== var1)) { _fun0018_ip = 113; continue _fun0018 }
case 114:
            var1 = global;
            var1 = var1.Object;
            var1 = var1.prototype;
            var9 = var1.hasOwnProperty;
            var4 = var9.call;
            var1 = _closure1_slot10;
            var4 = var4.bind(var9)(var1, var8);
            var1 = undefined;
            if(!var4) { _fun0018_ip = 115; continue _fun0018 }
case 116:
            var4 = _closure1_slot10;
            var8 = var4[var8];
            var4 = var8.deserialize;
            var1 = var4.bind(var8)(var6);
case 115:
            _fun0018_ip = 117; continue _fun0018;
case 113:
            if(!(var2 != var7)) { _fun0018_ip = 118; continue _fun0018 }
case 119:
            var4 = 'number';
            var2 = typeof var7;
            if(!(var4 !== var2)) { _fun0018_ip = 118; continue _fun0018 }
case 120:
            var4 = _closure1_slot10;
            var2 = _closure1_slot7;
            var2 = var2.TWITCH;
            var4 = var4[var2];
            var2 = var4.deserialize;
            var2 = var2.bind(var4)(var6, var7);
            _fun0018_ip = 121; continue _fun0018;
case 118:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var3 = var5.prototype;
            var4 = Object.create(var3, {constructor: {value: var5}});
            var24 = 'ApplicationAssetUtils';
            var25 = var4;
            var3 = new var25[var5](var24, var23);
            var5 = var3 instanceof Object ? var3 : var4;
            var4 = var5.warn;
            var3 = 'getAssetImage: size must === [number, number] for Twitch';
            var3 = var4.bind(var5)(var3);
            var2 = undefined;
case 121:
            var1 = var2;
case 117:
            return var1;
        }
    };
    var3['getAssetImage'] = var6;
    var3['getAssets'] = var5;
    var3['fetchAssetIds'] = var4;
    var2 = function getAssetIds(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var5 = arg2;
            var1 = new Array(0);
            var3 = _closure1_slot21;
            var4 = undefined;
            var3 = var3.bind(var4)(var5, var1);
            if(var3) { _fun0019_ip = 66; continue _fun0019 }
case 122:
            var7 = _closure1_slot5;
            var6 = var7.getApplicationAssets;
            var3 = arg1;
            var7 = var6.bind(var7)(var3);
            var6 = null;
            var8 = var6 == var7;
            var3 = undefined;
            if(var8) { _fun0019_ip = 123; continue _fun0019 }
case 47:
            var3 = var7.assets;
case 123:
            if(!(var6 != var3)) { _fun0019_ip = 124; continue _fun0019 }
case 43:
            var2 = _closure1_slot22;
            var2 = var2.bind(var4)(var5, var1, var3);
case 124:
            return var1;
case 66:
            return var1;
        }
    };
    var3['getAssetIds'] = var2;
    return var1;
})();