// app/utils/ApplicationAssetUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var10 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
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
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
 342:
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
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 171; continue _fun0004 }
 13:
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
 86:
                    return var2;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 168; continue _fun0004 }
 94:
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
 168:
                    return var2;
 171:
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
 0:
            var4 = arg1;
            var3 = _closure1_slot5;
            var1 = var3.getApplicationAssets;
            var5 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 83; continue _fun0005 }
 27:
            var6 = var5.lastUpdated;
            var1 = global;
            var7 = var1.Date;
            var3 = var7.now;
            var3 = var3.bind(var7)();
            var6 = var3 - var6;
            var3 = 3600000;
            if(!(!(var6 > var3))) { _fun0005_ip = 83; continue _fun0005 }
 64:
            var3 = var1.Promise;
            var1 = var3.resolve;
            var1 = var1.bind(var3)(var5);
            _fun0005_ip = 94; continue _fun0005;
 83:
            var3 = _closure1_slot14;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 94:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var6 = function getAssetFromImageURL(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var1 = _closure1_slot10;
            var3 = var1[var6];
            var2 = var3.serialize;
            var1 = arg2;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            if(!var3) { _fun0006_ip = 70; continue _fun0006 }
 33:
            var2 = var3.toString;
            var5 = var2.bind(var3)();
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ':';
            var1 = var4.bind(var3)(var6, var2, var5);
 70:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 57; continue _fun0007 }
 7:
                    var4 = _closure1_slot16;
                    var3 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var3)(var2);
                    SaveGenerator(address=28);
 26:
                    return var2;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 54; continue _fun0007 }
 34:
                    var4 = null;
                    var4 = var4 == var2;
                    var3 = undefined;
                    if(var4) { _fun0007_ip = 51; continue _fun0007 }
 45:
                    var3 = var2.assets;
 51:
                    return var3;
 54:
                    return var2;
 57:
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
 0:
                    StartGenerator();
                    var4 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 218; continue _fun0008 }
 13:
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var4 = arg1;
                            var3 = null;
                            var1 = var3 != var4;
                            if(!var1) { _fun0009_ip = 52; continue _fun0009 }
 12:
                            var2 = global;
                            var2 = var2.Object;
                            var2 = var2.prototype;
                            var6 = var2.hasOwnProperty;
                            var5 = var6.call;
                            var2 = _closure1_slot11;
                            var2 = var5.bind(var6)(var2, var4);
                            var1 = !var2;
 52:
                            if(!var1) { _fun0009_ip = 70; continue _fun0009 }
 55:
                            var2 = _closure1_slot11;
                            var2 = var2[var4];
                            var1 = var3 == var2;
 70:
                            return var1;
                        }
                    };
                    var9 = var3.bind(var4)(var2);
                    var3 = var9.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0008_ip = 210; continue _fun0008 }
 44:
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
 139:
                    return var2;
 141:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 215; continue _fun0008 }
 147:
                    var3 = var2.body;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.bind(var6)();
                    var3 = var4.done;
                    if(var3) { _fun0008_ip = 210; continue _fun0008 }
 169:
                    var3 = var4.value;
                    var9 = var3.url;
                    var8 = var3.external_asset_path;
                    var3 = _closure1_slot11;
                    var3[var9] = var8;
                    var8 = var5.bind(var6)();
                    var3 = var8.done;
                    var4 = var8;
                    if(!var3) { _fun0008_ip = 169; continue _fun0008 }
 210:
                    var3 = undefined;
                    return var3;
 215:
                    return var2;
 218:
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
 0:
            var1 = arg1;
            var12 = arg2;
            var3 = var1.filter;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var5 = arg1;
                    var3 = null;
                    var4 = var3 == var5;
                    var1 = undefined;
                    if(var4) { _fun0011_ip = 29; continue _fun0011 }
 14:
                    var6 = var5.startsWith;
                    var4 = 'http:';
                    var1 = var6.bind(var5)(var4);
 29:
                    if(var1) { _fun0011_ip = 59; continue _fun0011 }
 32:
                    var3 = var3 == var5;
                    var2 = undefined;
                    if(var3) { _fun0011_ip = 56; continue _fun0011 }
 41:
                    var4 = var5.startsWith;
                    var3 = 'https:';
                    var2 = var4.bind(var5)(var3);
 56:
                    var1 = var2;
 59:
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            var2 = var2.length;
            var13 = 0;
            var3 = var2 > var13;
            var2 = 0;
            if(!var3) { _fun0010_ip = 181; continue _fun0010 }
 42:
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
            if(!var3) { _fun0010_ip = 181; continue _fun0010 }
 77:
            var15 = var1[var5];
            var13 = var6;
            if(!(var8 != var15)) { _fun0010_ip = 163; continue _fun0010 }
 88:
            var3 = var7.Object;
            var3 = var3.prototype;
            var16 = var3.hasOwnProperty;
            var14 = var16.call;
            var3 = _closure1_slot11;
            var14 = var14.bind(var16)(var3, var15);
            var3 = undefined;
            if(!var14) { _fun0010_ip = 133; continue _fun0010 }
 125:
            var14 = _closure1_slot11;
            var3 = var14[var15];
 133:
            var13 = var6;
            var4 = var3;
            if(!(var8 != var4)) { _fun0010_ip = 163; continue _fun0010 }
 143:
            var14 = _closure1_slot17;
            var14 = var14.bind(var11)(var9, var3);
            var12[var5] = var14;
            var13 = var6 + 1;
            var4 = var3;
 163:
            var5 = var5 + 1;
            var3 = var1.length;
            var6 = var13;
            var2 = var6;
            if(var5 < var3) { _fun0010_ip = 77; continue _fun0010 }
 181:
            var1 = var1.length;
            var1 = var2 === var1;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function updateNonUrlAssetIds(arg1, arg2, arg3, arg4) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
            if(!var2) { _fun0012_ip = 171; continue _fun0012 }
 41:
            var16 = var13[var3];
            var14 = var4;
            var15 = var8;
            if(!(var7 != var16)) { _fun0012_ip = 150; continue _fun0012 }
 55:
            var2 = var12[var3];
            var14 = var4;
            var15 = var8;
            if(!(var7 == var2)) { _fun0012_ip = 150; continue _fun0012 }
 69:
            var2 = var5.Object;
            var2 = var2.prototype;
            var17 = var2.hasOwnProperty;
            var2 = var17.call;
            var2 = var2.bind(var17)(var11, var16);
            if(!var2) { _fun0012_ip = 104; continue _fun0012 }
 100:
            var2 = var11[var16];
 104:
            var16 = var4;
            if(var2) { _fun0012_ip = 135; continue _fun0012 }
 110:
            if(!(var7 != var10)) { _fun0012_ip = 123; continue _fun0012 }
 114:
            var17 = var10 <= var9;
            var16 = true;
            if(!var17) { _fun0012_ip = 135; continue _fun0012 }
 123:
            var12[var3] = var7;
            var14 = var4;
            var15 = var2;
            _fun0012_ip = 150; continue _fun0012;
 135:
            var17 = var2.id;
            var12[var3] = var17;
            var14 = var16;
            var15 = var2;
 150:
            var3 = var3 + 1;
            var2 = var13.length;
            var4 = var14;
            var8 = var15;
            var1 = var4;
            if(var3 < var2) { _fun0012_ip = 41; continue _fun0012 }
 171:
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
 0:
                    StartGenerator();
                    var8 = arg1;
                    var13 = arg2;
                    var12 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 399; continue _fun0013 }
 21:
                    var _closure4_slot0 = var8;
                    var _closure4_slot1 = var13;
                    var7 = undefined;
                    if(!(var12 === var7)) { _fun0013_ip = 38; continue _fun0013 }
 35:
                    var12 = 1;
 38:
                    var _closure4_slot2 = var12;
                    SaveGenerator(address=46);
 44:
                    return var7;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 396; continue _fun0013 }
 55:
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
 0:
                            var5 = arg1;
                            var3 = null;
                            var4 = var3 == var5;
                            var1 = undefined;
                            if(var4) { _fun0014_ip = 29; continue _fun0014 }
 14:
                            var6 = var5.startsWith;
                            var4 = 'http:';
                            var1 = var6.bind(var5)(var4);
 29:
                            if(var1) { _fun0014_ip = 59; continue _fun0014 }
 32:
                            var3 = var3 == var5;
                            var2 = undefined;
                            if(var3) { _fun0014_ip = 56; continue _fun0014 }
 41:
                            var4 = var5.startsWith;
                            var3 = 'https:';
                            var2 = var4.bind(var5)(var3);
 56:
                            var1 = var2;
 59:
                            return var1;
                        }
                    };
                    var6 = var6.bind(var13)(var3);
                    var10 = var6.length;
                    var3 = 0;
                    if(!(var10 > var3)) { _fun0013_ip = 158; continue _fun0013 }
 134:
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
 147:
                    return var3;
 149:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0013_ip = 393; continue _fun0013 }
 158:
                    var6 = _closure1_slot21;
                    var6 = var6.bind(var7)(var13, var4);
                    if(var6) { _fun0013_ip = 347; continue _fun0013 }
 174:
                    var6 = _closure1_slot18;
                    var6 = var6.bind(var7)(var8);
                    SaveGenerator(address=187);
 185:
                    return var6;
 187:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(var10) { _fun0013_ip = 344; continue _fun0013 }
 196:
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
                    if(var10) { _fun0013_ip = 317; continue _fun0013 }
 269:
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
                    _fun0013_ip = 341; continue _fun0013;
 317:
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
 341:
                    return var10;
 344:
                    return var6;
 347:
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
 393:
                    return var3;
 396:
                    return var2;
 399:
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
 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = _closure1_slot8;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0015_ip = 37; continue _fun0015 }
 30:
            var2 = 1;
            var1 = var3[var2];
 37:
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
 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = _closure1_slot9;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0016_ip = 37; continue _fun0016 }
 30:
            var2 = 1;
            var1 = var3[var2];
 37:
            return var1;
        }
    };
    var10['serialize'] = var12;
    var7[var11] = var10;
    var11 = {};
    var10 = function deserialize(arg1) {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var1 = var3[var1];
        var5 = undefined;
        var4 = var2.bind(var5)(var1);
        var1 = global;
        var2 = var1.window;
        var2 = var2.GLOBAL_ENV;
        var3 = var2.MEDIA_PROXY_ENDPOINT;
        var2 = null;
        var3 = var2 != var3;
        var2 = 'MEDIA_PROXY_ENDPOINT not configured';
        var2 = var4.bind(var5)(var3, var2);
        var4 = var1.URL;
        var2 = var1.location;
        var2 = var2.protocol;
        var1 = var1.window;
        var1 = var1.GLOBAL_ENV;
        var1 = var1.MEDIA_PROXY_ENDPOINT;
        var6 = var2 + var1;
        var1 = var4.prototype;
        var2 = Object.create(var1, {constructor: {value: var4}});
        var7 = arg1;
        var8 = var2;
        var1 = new var8[var4](var7, var6, var5);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.toString;
        var1 = var1.bind(var2)();
        return var1;
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
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var15 = arg1;
            var4 = arg2;
            var7 = arg3;
            var2 = null;
            if(!(var2 != var4)) { _fun0017_ip = 35; continue _fun0017 }
 15:
            var1 = var4.includes;
            var3 = ':';
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0017_ip = 372; continue _fun0017 }
 35:
            if(!(var2 != var15)) { _fun0017_ip = 43; continue _fun0017 }
 39:
            if(!(var2 == var4)) { _fun0017_ip = 47; continue _fun0017 }
 43:
            var1 = undefined;
            return var1;
 47:
            var5 = global;
            var6 = var5.Array;
            var1 = var6.isArray;
            var1 = var1.bind(var6)(var7);
            var8 = var7;
            if(!var1) { _fun0017_ip = 111; continue _fun0017 }
 71:
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
 111:
            var14 = '';
            var6 = 'number';
            var1 = typeof var8;
            var13 = var14;
            if(!(var6 === var1)) { _fun0017_ip = 187; continue _fun0017 }
 129:
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
 187:
            var1 = var5.window;
            var1 = var1.GLOBAL_ENV;
            var1 = var1.CDN_HOST;
            if(!(var2 == var1)) { _fun0017_ip = 291; continue _fun0017 }
 209:
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
            _fun0017_ip = 370; continue _fun0017;
 291:
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
 370:
            return var1;
 372:
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
            if(!(var8 !== var1)) { _fun0017_ip = 487; continue _fun0017 }
 427:
            var1 = global;
            var1 = var1.Object;
            var1 = var1.prototype;
            var9 = var1.hasOwnProperty;
            var4 = var9.call;
            var1 = _closure1_slot10;
            var4 = var4.bind(var9)(var1, var8);
            var1 = undefined;
            if(!var4) { _fun0017_ip = 485; continue _fun0017 }
 466:
            var4 = _closure1_slot10;
            var8 = var4[var8];
            var4 = var8.deserialize;
            var1 = var4.bind(var8)(var6);
 485:
            _fun0017_ip = 601; continue _fun0017;
 487:
            if(!(var2 != var7)) { _fun0017_ip = 534; continue _fun0017 }
 491:
            var4 = 'number';
            var2 = typeof var7;
            if(!(var4 !== var2)) { _fun0017_ip = 534; continue _fun0017 }
 502:
            var4 = _closure1_slot10;
            var2 = _closure1_slot7;
            var2 = var2.TWITCH;
            var4 = var4[var2];
            var2 = var4.deserialize;
            var2 = var2.bind(var4)(var6, var7);
            _fun0017_ip = 598; continue _fun0017;
 534:
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
 598:
            var1 = var2;
 601:
            return var1;
        }
    };
    var3['getAssetImage'] = var6;
    var3['getAssets'] = var5;
    var3['fetchAssetIds'] = var4;
    var2 = function getAssetIds(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var5 = arg2;
            var1 = new Array(0);
            var3 = _closure1_slot21;
            var4 = undefined;
            var3 = var3.bind(var4)(var5, var1);
            if(var3) { _fun0018_ip = 77; continue _fun0018 }
 25:
            var7 = _closure1_slot5;
            var6 = var7.getApplicationAssets;
            var3 = arg1;
            var7 = var6.bind(var7)(var3);
            var6 = null;
            var8 = var6 == var7;
            var3 = undefined;
            if(var8) { _fun0018_ip = 60; continue _fun0018 }
 54:
            var3 = var7.assets;
 60:
            if(!(var6 != var3)) { _fun0018_ip = 75; continue _fun0018 }
 64:
            var2 = _closure1_slot22;
            var2 = var2.bind(var4)(var5, var1, var3);
 75:
            return var1;
 77:
            return var1;
        }
    };
    var3['getAssetIds'] = var2;
    return var1;
})();