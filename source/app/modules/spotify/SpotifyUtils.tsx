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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
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
    var1 = function asString(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = 'string';
            var2 = typeof var1;
            if(!(var3 !== var2)) { _fun0004_ip = 50; continue _fun0004 }
 14:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var5 = 'value is not a string';
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
 50:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 345; continue _fun0005 }
 10:
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
 55:
                    return var2;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 342; continue _fun0005 }
 66:
                    var6 = _closure1_slot9;
                    var7 = _closure1_slot14;
                    var4 = var2.type;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0005_ip = 95; continue _fun0005 }
 85:
                    var9 = _closure1_slot8;
                    var4 = var9.TRACK;
 95:
                    var7 = var7.bind(var8)(var4);
                    var6 = var6.bind(var8)(var4);
                    if(!(var3 !== var6)) { _fun0005_ip = 285; continue _fun0005 }
 112:
                    var3 = {};
                    var4 = var2.context_uri;
                    var9 = 'string';
                    var7 = typeof var4;
                    var4 = undefined;
                    if(!(var9 === var7)) { _fun0005_ip = 139; continue _fun0005 }
 133:
                    var4 = var2.context_uri;
 139:
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
                    if(var7) { _fun0005_ip = 197; continue _fun0005 }
 191:
                    var7 = new Array(0);
                    _fun0005_ip = 217; continue _fun0005;
 197:
                    var10 = var2.artist_ids;
                    var9 = var10.map;
                    var8 = _closure1_slot14;
                    var7 = var9.bind(var10)(var8);
 217:
                    var3['artist_ids'] = var7;
                    var3['type'] = var6;
                    var7 = var4.Array;
                    var6 = var7.isArray;
                    var4 = var2.button_urls;
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0005_ip = 257; continue _fun0005 }
 251:
                    var4 = new Array(0);
                    _fun0005_ip = 277; continue _fun0005;
 257:
                    var7 = var2.button_urls;
                    var6 = var7.map;
                    var5 = _closure1_slot14;
                    var4 = var6.bind(var7)(var5);
 277:
                    var3['button_urls'] = var4;
                    return var3;
 285:
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
 342:
                    return var2;
 345:
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
 0:
            var2 = arg1;
            var1 = var2.getActiveSocketAndDevice;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            if(var1) { _fun0006_ip = 39; continue _fun0006 }
 22:
            var3 = _closure1_slot5;
            var2 = var3.isProtocolRegistered;
            var1 = var2.bind(var3)();
 39:
            return var1;
        }
    };
    var3['isSpotifyPlayable'] = var4;
    var4 = function ensureSpotifyPlayable() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot6;
            var2 = var3.getActiveSocketAndDevice;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 == var3)) { _fun0007_ip = 323; continue _fun0007 }
 28:
            var4 = _closure1_slot5;
            var2 = var4.isProtocolRegistered;
            var2 = var2.bind(var4)();
            if(var2) { _fun0007_ip = 98; continue _fun0007 }
 45:
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
 98:
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
            if(!var2) { _fun0007_ip = 194; continue _fun0007 }
 183:
            var7 = var5.length;
            var2 = 0;
            if(!(!(var7 > var2))) { _fun0007_ip = 231; continue _fun0007 }
 194:
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
 0:
                        var5 = function _loop(arg1, arg2) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
                                if(!(var2 == var3)) { _fun0009_ip = 109; continue _fun0009 }
 47:
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
 109:
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
                        if(var2) { _fun0008_ip = 87; continue _fun0008 }
 49:
                        var2 = var3.value;
                        var6 = var2.socket;
                        var2 = var2.device;
                        var2 = var5.bind(var1)(var6, var2);
                        var6 = var4.bind(var1)();
                        var2 = var6.done;
                        var3 = var6;
                        if(!var2) { _fun0008_ip = 49; continue _fun0008 }
 87:
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
 231:
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
 323:
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
 0:
            var2 = _closure1_slot6;
            var1 = var2.getActiveSocketAndDevice;
            var2 = var1.bind(var2)();
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0010_ip = 38; continue _fun0010 }
 26:
            var2 = var2.socket;
            var1 = var2.isPremium;
 38:
            return var1;
        }
    };
    var3['isSpotifyPremium'] = var4;
    var4 = function ensureSpotifyPremium() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = _closure1_slot6;
            var2 = var4.getActiveSocketAndDevice;
            var2 = var2.bind(var4)();
            var4 = null;
            if(!(var4 != var2)) { _fun0011_ip = 129; continue _fun0011 }
 25:
            var2 = var2.socket;
            var _closure2_slot0 = var2;
            var4 = var2.isPremium;
            if(var4) { _fun0011_ip = 109; continue _fun0011 }
 44:
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
 0:
                    var1 = _closure2_slot0;
                    var1 = var1.isPremium;
                    if(var1) { _fun0012_ip = 69; continue _fun0012 }
 16:
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
 69:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0011_ip = 127; continue _fun0011;
 109:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
 127:
            return var1;
 129:
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