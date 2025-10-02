// app/modules/spotify/SpotifyUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
    var1 = function asString(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = 'string';
            var2 = typeof var1;
            if(!(var3 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 32:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var5 = 'value is not a string';
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _getSpotifyMetadataFromActivity() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 6; continue _fun0005 }
case 37:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var8 = undefined;
                    var6 = var3.bind(var8)(var2);
                    var4 = var6.getMetadata;
                    var3 = arg1;
                    var2 = arg2;
                    var2 = var4.bind(var6)(var3, var2);
                    SaveGenerator(address=57);
case 4:
                    return var2;
case 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var6 = _closure1_slot9;
                    var7 = _closure1_slot14;
                    var4 = var2.type;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var9 = _closure1_slot8;
                    var4 = var9.TRACK;
case 41:
                    var7 = var7.bind(var8)(var4);
                    var6 = var6.bind(var8)(var4);
                    if(!(var3 !== var6)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var3 = {};
                    var4 = var2.context_uri;
                    var9 = 'string';
                    var7 = typeof var4;
                    var4 = undefined;
                    if(!(var9 === var7)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var4 = var2.context_uri;
case 45:
                    var3['context_uri'] = var4;
                    var7 = _closure1_slot14;
                    var4 = var2.album_id;
                    var7 = var7.bind(var8)(var4);
                    var3['album_id'] = var4;
                    var4 = global;
                    var9 = var4.Array;
                    var8 = var9.isArray;
                    var7 = var2.artist_ids;
                    var7 = var8.bind(var9)(var7);
                    if(var7) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var7 = new Array(0);
                    _fun0005_ip = 49; continue _fun0005;
case 47:
                    var10 = var2.artist_ids;
                    var9 = var10.map;
                    var8 = _closure1_slot14;
                    var7 = var9.bind(var10)(var8);
case 49:
                    var3['artist_ids'] = var7;
                    var3['type'] = var6;
                    var7 = var4.Array;
                    var6 = var7.isArray;
                    var4 = var2.button_urls;
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var4 = new Array(0);
                    _fun0005_ip = 52; continue _fun0005;
case 50:
                    var7 = var2.button_urls;
                    var6 = var7.map;
                    var5 = _closure1_slot14;
                    var4 = var6.bind(var7)(var5);
case 52:
                    var3['button_urls'] = var4;
                    return var3;
case 43:
                    var3 = global;
                    var5 = var3.Error;
                    var6 = var2.type;
                    var3 = var3.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'invalid type ';
                    var12 = var4.bind(var3)(var6);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var13 = var4;
                    var3 = new var13[var5](var12, var11);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 39:
                    return var2;
case 6:
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.SPOTIFY_APP_PROTOCOL;
    var _closure1_slot7 = var8;
    var8 = var4.SpotifyResourceTypes;
    var _closure1_slot8 = var8;
    var4 = var4.getSpotifyResourceType;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.SECOND;
    var4 = 30;
    var4 = var4 * var7;
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/spotify/SpotifyUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isSpotifyPlayable(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = var2.getActiveSocketAndDevice;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            if(var1) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var3 = _closure1_slot5;
            var2 = var3.isProtocolRegistered;
            var1 = var2.bind(var3)();
case 53:
            return var1;
        }
    };
    var3['isSpotifyPlayable'] = var4;
    var4 = function ensureSpotifyPlayable() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot6;
            var2 = var3.getActiveSocketAndDevice;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 == var3)) { _fun0007_ip = 8; continue _fun0007 }
case 34:
            var4 = _closure1_slot5;
            var2 = var4.isProtocolRegistered;
            var2 = var2.bind(var4)();
            if(var2) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var2 = global;
            var5 = var2.Promise;
            var4 = var5.reject;
            var8 = var2.Error;
            var2 = var8.prototype;
            var7 = Object.create(var2, {constructor: {value: var8}});
            var12 = 'protocol is not registered';
            var13 = var7;
            var2 = new var13[var8](var12, var11);
            var2 = var2 instanceof Object ? var2 : var7;
            var2 = var4.bind(var5)(var2);
            return var2;
case 55:
            var4 = _closure1_slot6;
            var2 = var4.getPlayableComputerDevices;
            var5 = var2.bind(var4)();
            var _closure2_slot0 = var5;
            var8 = _closure1_slot4;
            var7 = var8.isObservedAppRunning;
            var9 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var4 = undefined;
            var10 = var9.bind(var4)(var2);
            var9 = var10.get;
            var2 = _closure1_slot10;
            var2 = var2.SPOTIFY;
            var2 = var9.bind(var10)(var2);
            var2 = var2.name;
            var2 = var7.bind(var8)(var2);
            if(!var2) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var7 = var5.length;
            var2 = 0;
            if(!(!(var7 > var2))) { _fun0007_ip = 59; continue _fun0007 }
case 57:
            var7 = global;
            var8 = var7.Promise;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var2 = global;
                var7 = var2.setTimeout;
                var6 = _closure1_slot11;
                var1 = undefined;
                var4 = function() {
                    var4 = _closure1_slot6;
                    var3 = var4.removeChangeListener;
                    var2 = _closure3_slot3;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure3_slot1;
                    var1 = global;
                    var4 = var1.Error;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var5 = 'timeout launching spotify';
                    var6 = var2;
                    var1 = new var6[var4](var5, var4);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = var7.bind(var1)(var4, var6);
                var _closure3_slot2 = var4;
                var6 = function onSpotifyStoreChange() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var5 = function _loop(arg1, arg2) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                var2 = arg1;
                                var _closure5_slot0 = var2;
                                var2 = arg2;
                                var _closure5_slot1 = var2;
                                var4 = _closure2_slot0;
                                var3 = var4.find;
                                var2 = function(arg1) {
                                    var1 = arg1;
                                    var1 = var1.device;
                                    var2 = var1.id;
                                    var1 = _closure5_slot1;
                                    var1 = var1.id;
                                    var1 = var2 === var1;
                                    return var1;
                                };
                                var3 = var3.bind(var4)(var2);
                                var2 = null;
                                if(!(var2 == var3)) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                                var2 = global;
                                var6 = var2.clearTimeout;
                                var5 = _closure3_slot2;
                                var3 = undefined;
                                var5 = var6.bind(var3)(var5);
                                var6 = _closure1_slot6;
                                var5 = var6.removeChangeListener;
                                var4 = _closure3_slot3;
                                var4 = var5.bind(var6)(var4);
                                var2 = var2.setImmediate;
                                var1 = function() {
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 8;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var7 = var3.bind(var1)(var2);
                                    var6 = var7.setActiveDevice;
                                    var5 = _closure5_slot0;
                                    var3 = var5.accountId;
                                    var4 = _closure5_slot1;
                                    var2 = var4.id;
                                    var2 = var6.bind(var7)(var3, var2);
                                    var3 = _closure3_slot0;
                                    var2 = {};
                                    var2['socket'] = var5;
                                    var2['device'] = var4;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
case 60:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = _closure1_slot12;
                        var2 = _closure1_slot6;
                        var1 = var2.getPlayableComputerDevices;
                        var2 = var1.bind(var2)();
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.bind(var1)();
                        var2 = var3.done;
                        if(var2) { _fun0008_ip = 62; continue _fun0008 }
case 5:
                        var2 = var3.value;
                        var6 = var2.socket;
                        var2 = var2.device;
                        var2 = var5.bind(var1)(var6, var2);
                        var6 = var4.bind(var1)();
                        var2 = var6.done;
                        var3 = var6;
                        if(!var2) { _fun0008_ip = 5; continue _fun0008 }
case 62:
                        return var1;
                    }
                };
                var _closure3_slot3 = var6;
                var4 = _closure1_slot6;
                var3 = var4.addChangeListener;
                var3 = var3.bind(var4)(var6);
                var4 = var2.window;
                var3 = var4.open;
                var7 = _closure1_slot7;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = '';
                var2 = ':';
                var2 = var6.bind(var5)(var7, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var13 = var7;
            var6 = new var13[var8](var12, var11);
            var6 = var6 instanceof Object ? var6 : var7;
            return var6;
case 59:
            var2 = var5[var2];
            var6 = var2.socket;
            var5 = var2.device;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var7 = var2.bind(var4)(var1);
            var4 = var7.setActiveDevice;
            var2 = var6.accountId;
            var1 = var5.id;
            var1 = var4.bind(var7)(var2, var1);
            var1 = global;
            var4 = var1.Promise;
            var2 = var4.resolve;
            var1 = {};
            var1['socket'] = var6;
            var1['device'] = var5;
            var1 = var2.bind(var4)(var1);
            return var1;
case 8:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['ensureSpotifyPlayable'] = var4;
    var4 = function isSpotifyPremium() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = _closure1_slot6;
            var1 = var2.getActiveSocketAndDevice;
            var2 = var1.bind(var2)();
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var2 = var2.socket;
            var1 = var2.isPremium;
case 63:
            return var1;
        }
    };
    var3['isSpotifyPremium'] = var4;
    var4 = function ensureSpotifyPremium() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = _closure1_slot6;
            var2 = var4.getActiveSocketAndDevice;
            var2 = var2.bind(var4)();
            var4 = null;
            if(!(var4 != var2)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var2 = var2.socket;
            var _closure2_slot0 = var2;
            var4 = var2.isPremium;
            if(var4) { _fun0011_ip = 60; continue _fun0011 }
case 67:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 8;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getProfile;
            var3 = var2.accountId;
            var2 = var2.accessToken;
            var3 = var4.bind(var5)(var3, var2);
            var2 = var3.then;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.isPremium;
                    if(var1) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.reject;
                    var5 = var1.Error;
                    var1 = var5.prototype;
                    var4 = Object.create(var1, {constructor: {value: var5}});
                    var6 = 'spotify account is not premium';
                    var7 = var4;
                    var1 = new var7[var5](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 68:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0011_ip = 70; continue _fun0011;
case 60:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
case 70:
            return var1;
case 65:
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var7 = 'no active profile';
            var8 = var4;
            var1 = new var8[var5](var7, var6);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['ensureSpotifyPremium'] = var4;
    var2 = function getSpotifyMetadataFromActivity() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getSpotifyMetadataFromActivity'] = var2;
    return var1;
})();