// app/modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx
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
    var1 = function fetchOrGetExistingFetch(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot8;
            var4 = var5.has;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var5 = arg2;
            var4 = undefined;
            var5 = var5.bind(var4)();
            var4 = var5.finally;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.delete;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var4.bind(var5)(var2);
            var4 = _closure1_slot8;
            var2 = var4.set;
            var2 = var2.bind(var4)(var3, var5);
case 36:
            var2 = _closure1_slot8;
            var1 = var2.get;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function fetchColors(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot11;
        var2 = undefined;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.maybeFetchColors;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _fetchApplicationParts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var4 = var2.extra;
                    var3 = 'application_id';
                    var3 = var3 in var4;
                    if(!var3) { _fun0005_ip = 40; continue _fun0005 }
case 33:
                    var2 = var2.extra;
                    var7 = var2.application_id;
                    var2 = function fetchApplication(arg1) {
                        var4 = arg1;
                        var _closure5_slot0 = var4;
                        var3 = _closure1_slot11;
                        var2 = undefined;
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchApplications;
                            var4 = _closure5_slot0;
                            var1 = new Array(1);
                            var1[0] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var3.bind(var2)(var4, var1);
                        return var1;
                    };
                    var5 = undefined;
                    var2 = var2.bind(var5)(var7);
                    SaveGenerator(address=65);
case 41:
                    return var2;
case 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 16; continue _fun0005 }
case 36:
                    var6 = _closure1_slot6;
                    var4 = var6.getApplication;
                    var8 = var4.bind(var6)(var7);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var4 = var7[var4];
                    var9 = var6.bind(var5)(var4);
                    var6 = null;
                    var7 = var6 != var8;
                    var4 = 'failed to fetch application';
                    var4 = var9.bind(var5)(var7, var4);
                    var7 = var8.getIconURL;
                    var4 = _closure1_slot7;
                    var4 = var4.LARGE;
                    var4 = var7.bind(var8)(var4);
                    if(!(var6 != var4)) { _fun0005_ip = 40; continue _fun0005 }
case 43:
                    var3 = _closure1_slot12;
                    var3 = var3.bind(var5)(var4);
                    SaveGenerator(address=165);
case 14:
                    return var3;
case 44:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 45; continue _fun0005 }
case 40:
                    var4 = undefined;
                    return var4;
case 45:
                    return var3;
case 16:
                    return var2;
case 38:
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
    var1 = function _fetchUserParts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var2 = arg1;
                    var4 = var2.author_id;
                    var2 = function fetchUser(arg1) {
                        var4 = arg1;
                        var _closure5_slot0 = var4;
                        var3 = _closure1_slot11;
                        var2 = undefined;
                        var1 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getUser;
                            var1 = _closure5_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var3.bind(var2)(var4, var1);
                        return var1;
                    };
                    var3 = undefined;
                    var2 = var2.bind(var3)(var4);
                    SaveGenerator(address=36);
case 48:
                    return var2;
case 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    return var3;
case 50:
                    return var2;
case 46:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _fetchWatchedContentParts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 52; continue _fun0007 }
case 39:
                    var4 = var3.extra;
                    var2 = 'application_id';
                    var2 = var2 in var4;
                    if(!var2) { _fun0007_ip = 17; continue _fun0007 }
case 33:
                    var4 = var3.extra;
                    var2 = 'media_assets_large_image';
                    var2 = var2 in var4;
                    if(!var2) { _fun0007_ip = 17; continue _fun0007 }
case 53:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 9;
                    var5 = var5[var4];
                    var4 = undefined;
                    var8 = var6.bind(var4)(var5);
                    var7 = var8.getAssetImage;
                    var5 = var3.extra;
                    var6 = var5.application_id;
                    var3 = var3.extra;
                    var5 = var3.media_assets_large_image;
                    var3 = _closure1_slot7;
                    var9 = var3.LARGE;
                    var3 = new Array(2);
                    var3[0] = var9;
                    var9 = _closure1_slot7;
                    var9 = var9.LARGE;
                    var3[1] = var9;
                    var3 = var7.bind(var8)(var6, var5, var3);
                    var5 = null;
                    if(!(var5 != var3)) { _fun0007_ip = 17; continue _fun0007 }
case 54:
                    var2 = _closure1_slot12;
                    var2 = var2.bind(var4)(var3);
                    SaveGenerator(address=163);
case 55:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 56; continue _fun0007 }
case 17:
                    var3 = undefined;
                    return var3;
case 56:
                    return var2;
case 52:
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
    var1 = function _fetchListenedContentParts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var4 = var2.extra;
                    var3 = 'entries';
                    var3 = var3 in var4;
                    if(!var3) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var2 = var2.extra;
                    var3 = var2.entries;
                    var2 = 0;
                    var2 = var3[var2];
                    var2 = var2.media;
                    var4 = var2.image_url;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0008_ip = 59; continue _fun0008 }
case 41:
                    var3 = _closure1_slot12;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    SaveGenerator(address=81);
case 61:
                    return var2;
case 62:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 63; continue _fun0008 }
case 59:
                    var3 = undefined;
                    return var3;
case 63:
                    return var2;
case 57:
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
    var1 = function _fetchTopArtistContentParts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 64; continue _fun0009 }
case 39:
                    var4 = var2.extra;
                    var3 = 'media';
                    var3 = var3 in var4;
                    if(!var3) { _fun0009_ip = 65; continue _fun0009 }
case 3:
                    var2 = var2.extra;
                    var2 = var2.media;
                    var4 = var2.image_url;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var3 = var6[var3];
                    var5 = undefined;
                    var8 = var7.bind(var5)(var3);
                    var3 = null;
                    var7 = var3 != var4;
                    var3 = 'missing image url for top artist';
                    var3 = var8.bind(var5)(var7, var3);
                    var3 = _closure1_slot0;
                    var2 = 7;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.maybeFetchColors;
                    var2 = var2.bind(var3)(var4);
                    SaveGenerator(address=122);
case 66:
                    return var2;
case 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 68; continue _fun0009 }
case 65:
                    var3 = undefined;
                    return var3;
case 68:
                    return var2;
case 64:
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
    var1 = function _loadContentEntryParts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                    var _closure4_slot0 = var2;
                    var3 = undefined;
                    var _closure4_slot2 = var3;
                    var5 = new Array(0);
                    var _closure4_slot1 = var5;
                    var12 = function* _loop() {
                        var1 = function* anon_0__loop() {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0011_ip = 23; continue _fun0011 }
case 71:
                                var2 = undefined;
                                var _closure6_slot0 = var2;
                                var _closure6_slot1 = var2;
                                var4 = function _validateEntryIsRenderable() {
                                    var4 = undefined;
                                    var1 = undefined;
                                    var3 = _closure1_slot4;
                                    var2 = function* () {
                                        var1 = function* anon_0_() {
                                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                if(var2) { _fun0012_ip = 72; continue _fun0012 }
case 58:
                                                var2 = global;
                                                var4 = var2.Promise;
                                                var3 = var4.all;
                                                var2 = _closure6_slot1;
                                                var2 = var3.bind(var4)(var2);
                                                SaveGenerator(address=40);
case 73:
                                                return var2;
case 74:
                                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                                if(var3) { _fun0012_ip = 75; continue _fun0012 }
case 2:
                                                var6 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var3 = 11;
                                                var5 = var7[var3];
                                                var3 = undefined;
                                                var8 = var6.bind(var3)(var5);
                                                var6 = var8.transformToRowGeneratedContentInventoryEntryComponent;
                                                var5 = {};
                                                var9 = {};
                                                var10 = _closure6_slot0;
                                                var9['contentInventoryEntry'] = var10;
                                                var5['component'] = var9;
                                                var9 = _closure4_slot0;
                                                var5['message'] = var9;
                                                var5 = var6.bind(var8)(var5);
                                                var6 = _closure1_slot1;
                                                var4 = 8;
                                                var4 = var7[var4];
                                                var6 = var6.bind(var3)(var4);
                                                var4 = null;
                                                var5 = var4 != var5;
                                                var4 = 'content inventory entry embed cannot be rendered';
                                                var4 = var6.bind(var3)(var5, var4);
                                                return var3;
case 75:
                                                return var2;
case 72:
                                                return var1;
                                            }
                                        };
                                        return var1;
                                    };
                                    var4 = var3.bind(var4)(var2);
                                    _closure6_slot2 = var4;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                var _closure6_slot2 = var4;
                                var5 = _closure4_slot2;
                                var6 = var5.type;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var5 = 10;
                                var5 = var8[var5];
                                var5 = var7.bind(var2)(var5);
                                var5 = var5.ComponentType;
                                var5 = var5.CONTENT_INVENTORY_ENTRY;
                                if(!(var6 === var5)) { _fun0011_ip = 76; continue _fun0011 }
case 59:
                                var5 = _closure4_slot2;
                                var8 = var5.contentInventoryEntry;
                                _closure6_slot0 = var8;
                                var7 = new Array(0);
                                _closure6_slot1 = var7;
                                var6 = var7.push;
                                var5 = function fetchApplicationParts() {
                                    var1 = undefined;
                                    var4 = _closure1_slot13;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                var5 = var5.bind(var2)(var8);
                                var5 = var6.bind(var7)(var5);
                                var6 = var7.push;
                                var5 = function fetchUserParts() {
                                    var1 = undefined;
                                    var4 = _closure1_slot14;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                var5 = var5.bind(var2)(var8);
                                var5 = var6.bind(var7)(var5);
                                var6 = var7.push;
                                var5 = function fetchWatchedContentParts() {
                                    var1 = undefined;
                                    var4 = _closure1_slot15;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                var5 = var5.bind(var2)(var8);
                                var5 = var6.bind(var7)(var5);
                                var6 = var7.push;
                                var5 = function fetchListenedContentParts() {
                                    var1 = undefined;
                                    var4 = _closure1_slot16;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                var5 = var5.bind(var2)(var8);
                                var5 = var6.bind(var7)(var5);
                                var6 = var7.push;
                                var5 = function fetchTopArtistContentParts() {
                                    var1 = undefined;
                                    var4 = _closure1_slot17;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                var5 = var5.bind(var2)(var8);
                                var5 = var6.bind(var7)(var5);
                                var5 = _closure4_slot1;
                                var4 = var5.push;
                                var3 = function validateEntryIsRenderable() {
                                    var1 = undefined;
                                    var4 = _closure6_slot2;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                var3 = var3.bind(var2)();
                                var3 = var4.bind(var5)(var3);
case 76:
                                return var2;
case 23:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = _closure1_slot9;
                    var2 = var2.components;
                    var11 = var4.bind(var3)(var2);
                    var6 = var11.bind(var3)();
                    var4 = var6.done;
                    var2 = global;
                    var10 = 'iterator is not an object';
                    var9 = 'iterator.throw() did not return an object';
                    var8 = 'throw';
                    var7 = 'iterator.next() did not return an object';
                    if(var4) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                    var4 = var6.value;
                    _closure4_slot2 = var4;
                    var14 = var12.bind(var3)();
                    var4 = var2.Symbol;
                    var4 = var4.iterator;
                    var4 = var14[var4];
                    var15 = var4.bind(var14)();
                    var23 = var15;
                    var22 = var10;
                    var4 = ensureObject(var23, var22);
                    var20 = var15.next;
                    var19 = undefined;
case 79:
                    var14 = var19;
                    var14 = var20.bind(var15)(var14);
                    var23 = var14;
                    var22 = var7;
                    var16 = ensureObject(var23, var22);
                    var4 = var14;
                    var16 = var14.done;
                    if(var16) { _fun0010_ip = 80; continue _fun0010 }
case 16: // try_start_0
                    var16 = generatorSetDelegated();
                    SaveGenerator(address=234);
case 81:
                    return var14;
case 19: // try_end0 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=15);
                    var23 = var15;
                    var22 = var8;
                    var14 = getMethod(var23, var22);
                    if(!(var14 !== var3)) { _fun0010_ip = 82; continue _fun0010 }
case 83:
                    var14 = var14.bind(var15)(var16);
                    var23 = var14;
                    var22 = var9;
                    var16 = ensureObject(var23, var22);
                    var16 = var14.done;
                    if(var16) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                    var16 = generatorSetDelegated();
                    SaveGenerator(address=234);
case 86:
                    return var14;
case 21: // try_start_1
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                    var19 = var16;
                    var17 = var18;
                    if(!var17) { _fun0010_ip = 79; continue _fun0010 }
case 87:
                    var19 = var16;
case 18: // try_end1
                    var22 = 'return';
                    var23 = var15;
                    var21 = getMethod(var23, var22);
                    if(!(var21 !== var3)) { _fun0010_ip = 88; continue _fun0010 }
case 89:
                    var17 = var19;
                    var17 = var21.bind(var15)(var17);
                    var22 = 'iterator.return() did not return an object';
                    var23 = var17;
                    var21 = ensureObject(var23, var22);
                    var21 = var17.done;
                    if(var21) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                    var21 = generatorSetDelegated();
                    SaveGenerator(address=234);
case 92:
                    return var17;
case 90:
                    var17 = var17.value;
                    return var17;
case 88:
                    return var16;
case 84:
                    var4 = var14;
                    _fun0010_ip = 80; continue _fun0010;
case 82:
                    var22 = 'return';
                    var23 = var15;
                    var14 = getMethod(var23, var22);
                    if(!(var14 !== var3)) { _fun0010_ip = 93; continue _fun0010 }
case 94:
                    var23 = var14.bind(var15)();
                    var22 = 'iterator.return() did not return an object';
                    var14 = ensureObject(var23, var22);
case 93:
                    var23 = 'yield* delegate must have a .throw() method';
                    var14 = throwTypeError(var23);
                    throw var3;
case 80:
                    var4 = var4.value;
                    var14 = var11.bind(var3)();
                    var4 = var14.done;
                    var6 = var14;
                    if(!var4) { _fun0010_ip = 78; continue _fun0010 }
case 77:
                    var4 = var2.Promise;
                    var2 = var4.all;
                    var2 = var2.bind(var4)(var5);
                    SaveGenerator(address=402);
case 95:
                    return var2;
case 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 97; continue _fun0010 }
case 98:
                    return var3;
case 97:
                    return var2;
case 69:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var9 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var9);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ImageSizes;
    var _closure1_slot7 = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLoadMessageContentEntries(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot5;
        var5 = var6.useRef;
        var4 = global;
        var2 = var4.Map;
        var8 = var2.prototype;
        var8 = Object.create(var8, {constructor: {value: var2}});
        var16 = var8;
        var2 = new var16[var2](var15);
        var2 = var2 instanceof Object ? var2 : var8;
        var2 = var5.bind(var6)(var2);
        var _closure2_slot1 = var2;
        var8 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 12;
        var2 = var5[var2];
        var5 = undefined;
        var9 = var8.bind(var5)(var2);
        var8 = var9.useIsContentInventoryEmbedEnabled;
        var2 = 'useLoadMessageContentEntries';
        var9 = var8.bind(var9)(var2);
        var _closure2_slot2 = var9;
        var8 = var6.useState;
        var2 = var4.Set;
        var10 = var2.prototype;
        var10 = Object.create(var10, {constructor: {value: var2}});
        var16 = var10;
        var2 = new var16[var2](var15);
        var2 = var2 instanceof Object ? var2 : var10;
        var2 = var8.bind(var6)(var2);
        var11 = _closure1_slot3;
        var10 = 2;
        var12 = var11.bind(var5)(var2, var10);
        var2 = 0;
        var3 = var12[var2];
        var8 = 1;
        var12 = var12[var8];
        var _closure2_slot3 = var12;
        var12 = var6.useState;
        var4 = var4.Set;
        var13 = var4.prototype;
        var13 = Object.create(var13, {constructor: {value: var4}});
        var16 = var13;
        var4 = new var16[var4](var15);
        var4 = var4 instanceof Object ? var4 : var13;
        var4 = var12.bind(var6)(var4);
        var4 = var11.bind(var5)(var4, var10);
        var2 = var4[var2];
        var4 = var4[var8];
        var _closure2_slot4 = var4;
        var8 = var6.useCallback;
        var4 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        StartGenerator();
                        var6 = arg1;
                        var4 = arg2;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                        if(var7) { _fun0013_ip = 99; continue _fun0013 }
case 100:
                        var2 = var6;
                        var _closure5_slot0 = var6;
                        var5 = var4;
                        var4 = var4.components;
                        var6 = var4.length;
                        var4 = 0;
                        if(!(var4 !== var6)) { _fun0013_ip = 101; continue _fun0013 }
case 46:
                        var6 = _closure2_slot1;
                        var8 = var6.current;
                        var7 = var8.has;
                        var6 = var2;
                        var6 = var7.bind(var8)(var6);
                        if(var6) { _fun0013_ip = 101; continue _fun0013 }
case 61: // try_start_0 // try_start_1
                        var6 = _closure2_slot1;
                        var9 = var6.current;
                        var8 = var9.set;
                        var7 = var2;
                        var6 = 'loading';
                        var6 = var8.bind(var9)(var7, var6);
                        var7 = _closure2_slot3;
                        var8 = undefined;
                        var6 = function(arg1) {
                            var1 = global;
                            var3 = var1.Set;
                            var1 = new Array(1);
                            var6 = arg1;
                            var5 = 0;
                            var7 = var1;
                            var4 = arraySpread(var7, var6, var5);
                            var2 = _closure5_slot0;
                            var1[var4] = var2;
                            var2 = 1;
                            var2 = var4 + var2;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var8 = var2;
                            var7 = var1;
                            var1 = new var8[var3](var7, var6);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var6 = var7.bind(var8)(var6);
                        var6 = var5;
                        var5 = function loadContentEntryParts() {
                            var1 = undefined;
                            var4 = _closure1_slot18;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var5 = var5.bind(var8)(var6);
                        SaveGenerator(address=143);
case 102:
                        return var5;
case 103:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(var6) { _fun0013_ip = 104; continue _fun0013 }
case 105:
                        var6 = _closure2_slot1;
                        var10 = var6.current;
                        var9 = var10.set;
                        var7 = var2;
                        var6 = 'loaded';
                        var6 = var9.bind(var10)(var7, var6);
case 45: // try_end0
                        _fun0013_ip = 76; continue _fun0013;
case 104: // try_end1
                        var7 = _closure2_slot3;
                        var6 = function(arg1) {
                            var1 = global;
                            var3 = var1.Set;
                            var4 = new Array(0);
                            var6 = arg1;
                            var5 = 0;
                            var7 = var4;
                            var1 = arraySpread(var7, var6, var5);
                            var2 = var4.filter;
                            var1 = function(arg1) {
                                var2 = _closure5_slot0;
                                var1 = arg1;
                                var1 = var1 !== var2;
                                return var1;
                            };
                            var7 = var2.bind(var4)(var1);
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var8 = var2;
                            var1 = new var8[var3](var7, var6);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var6 = var7.bind(var8)(var6);
                        return var5;
case 106: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=4);
                        var5 = _closure2_slot1;
                        var7 = var5.current;
                        var6 = var7.set;
                        var5 = var2;
                        var2 = 'error';
                        var2 = var6.bind(var7)(var5, var2);
                        var6 = _closure2_slot4;
                        var5 = undefined;
                        var2 = function(arg1) {
                            var1 = global;
                            var3 = var1.Set;
                            var1 = new Array(1);
                            var6 = arg1;
                            var5 = 0;
                            var7 = var1;
                            var4 = arraySpread(var7, var6, var5);
                            var2 = _closure5_slot0;
                            var1[var4] = var2;
                            var2 = 1;
                            var2 = var4 + var2;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var8 = var2;
                            var7 = var1;
                            var1 = new var8[var3](var7, var6);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var2 = var6.bind(var5)(var2);
case 76: // try_end2
                        var6 = _closure2_slot3;
                        var5 = undefined;
                        var2 = function(arg1) {
                            var1 = global;
                            var3 = var1.Set;
                            var4 = new Array(0);
                            var6 = arg1;
                            var5 = 0;
                            var7 = var4;
                            var1 = arraySpread(var7, var6, var5);
                            var2 = var4.filter;
                            var1 = function(arg1) {
                                var2 = _closure5_slot0;
                                var1 = arg1;
                                var1 = var1 !== var2;
                                return var1;
                            };
                            var7 = var2.bind(var4)(var1);
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var8 = var2;
                            var1 = new var8[var3](var7, var6);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var2 = var6.bind(var5)(var2);
                        _fun0013_ip = 101; continue _fun0013;
case 89: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var5 = _closure2_slot3;
                        var4 = undefined;
                        var3 = function(arg1) {
                            var1 = global;
                            var3 = var1.Set;
                            var4 = new Array(0);
                            var6 = arg1;
                            var5 = 0;
                            var7 = var4;
                            var1 = arraySpread(var7, var6, var5);
                            var2 = var4.filter;
                            var1 = function(arg1) {
                                var2 = _closure5_slot0;
                                var1 = arg1;
                                var1 = var1 !== var2;
                                return var1;
                            };
                            var7 = var2.bind(var4)(var1);
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var8 = var2;
                            var1 = new var8[var3](var7, var6);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var3 = var5.bind(var4)(var3);
                        throw var2;
case 101:
                        var2 = undefined;
                        return var2;
case 99:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function(arg1, arg2) {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var5 = var4.bind(var5)();
        var4 = new Array(0);
        var8 = var8.bind(var6)(var5, var4);
        var _closure2_slot5 = var8;
        var5 = var6.useEffect;
        var4 = new Array(3);
        var4[0] = var9;
        var4[1] = var8;
        var4[2] = var7;
        var1 = function() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = _closure2_slot2;
                if(!var2) { _fun0014_ip = 33; continue _fun0014 }
case 58:
                var3 = _closure2_slot0;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 13;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.bind(var1)(var2);
                        if(!var3) { _fun0015_ip = 107; continue _fun0015 }
case 49:
                        var3 = var2.messageSnapshots;
                        var4 = 0;
                        var5 = var3[var4];
                        var3 = null;
                        if(!(var3 == var5)) { _fun0015_ip = 108; continue _fun0015 }
case 107:
                        var5 = _closure2_slot5;
                        var3 = var2.id;
                        var3 = var5.bind(var1)(var3, var2);
                        _fun0015_ip = 109; continue _fun0015;
case 108:
                        var3 = var2.messageSnapshots;
                        var3 = var3[var4];
                        var4 = var3.message;
                        var3 = _closure2_slot5;
                        var2 = var2.id;
                        var2 = var3.bind(var1)(var2, var4);
case 109:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 33:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = {};
        var1['unloadedContentEntryMessageIds'] = var3;
        var1['unloadableContentEntryMessageIds'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();