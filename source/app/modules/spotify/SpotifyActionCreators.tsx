// app/modules/spotify/SpotifyActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var11 = function apiRequest(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = arg4;
            var2 = arguments[4];
            var _closure2_slot0 = var4;
            var3 = arg2;
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var5;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 1;
case 2:
            var _closure2_slot3 = var2;
            var2 = {};
            var10 = var2;
            var9 = var5;
            var5 = copyDataProperties(var10, var9);
            var6 = {};
            var5 = global;
            var5 = var5.HermesInternal;
            var8 = var5.concat;
            var7 = 'Bearer ';
            var5 = arg3;
            var5 = var8.bind(var7)(var5);
            var6['authorization'] = var5;
            var5 = 'headers';
            var2[var5] = var6;
            _closure2_slot2 = var2;
            var4 = var4.bind(var3)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.status;
                    var2 = 202;
                    var1 = var4;
                    if(!(var2 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.reject;
                    var1 = var2.bind(var3)(var4);
case 4:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot2;
                    var5 = var4.onlyRetryOnAuthorizationErrors;
                    var4 = true;
                    var4 = var4 !== var5;
                    if(!var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var6 = var3.status;
                    var5 = 202;
                    var4 = var5 === var6;
case 6:
                    var6 = var3.status;
                    var5 = 401;
                    if(!(var5 !== var6)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    if(!var4) { _fun0003_ip = 10; continue _fun0003 }
case 8:
                    var4 = _closure2_slot3;
                    var1 = 0;
                    if(!(!(var4 > var1))) { _fun0003_ip = 11; continue _fun0003 }
case 10:
                    var1 = global;
                    var4 = var1.Promise;
                    var1 = var4.reject;
                    var1 = var1.bind(var4)(var3);
                    _fun0003_ip = 12; continue _fun0003;
case 11:
                    var4 = var3.status;
                    var3 = 202;
                    if(!(var3 !== var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = global;
                    var4 = var3.Promise;
                    var3 = var4.resolve;
                    var5 = var3.bind(var4)();
                    _fun0003_ip = 15; continue _fun0003;
case 13:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.timeoutPromise;
                    var3 = 5000;
                    var5 = var4.bind(var6)(var3);
case 15:
                    var4 = var5.then;
                    var3 = function() {
                        var3 = _closure1_slot11;
                        var2 = _closure2_slot1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.then;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.body;
                        var10 = var1.access_token;
                        var6 = _closure1_slot10;
                        var12 = _closure2_slot0;
                        var11 = _closure2_slot1;
                        var9 = _closure2_slot2;
                        var2 = _closure2_slot3;
                        var1 = 1;
                        var8 = var2 - var1;
                        var13 = undefined;
                        var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {constructor: {value: var3}});
                        var4 = function(arg1) {
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = global;
                            var3 = var2.setImmediate;
                            var2 = undefined;
                            var1 = function() {
                                var3 = _closure5_slot0;
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot10 = var11;
    var4 = function getAccessToken(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var7 = _closure1_slot7;
        var6 = var7.CONNECTION_ACCESS_TOKEN;
        var5 = _closure1_slot8;
        var5 = var5.SPOTIFY;
        var5 = var6.bind(var7)(var5, var8);
        var2['url'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.catch;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = arg1;
                var1 = var3.body;
                var2 = null;
                var2 = var2 == var1;
                var4 = undefined;
                var5 = undefined;
                if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var5 = var1.code;
case 16:
                var2 = _closure1_slot6;
                var2 = var2.CONNECTION_REVOKED;
                if(!(var5 !== var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var5 = var3.status;
                var2 = 429;
                if(!(var2 === var5)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var2 = var3.headers;
                var5 = var2.retry-after;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.Millis;
                var2 = var2.SECOND;
                var2 = var5 * var2;
                var5 = global;
                var5 = var5.isNaN;
                var5 = var5.bind(var4)(var2);
                var7 = 5000;
                var6 = var7;
                if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var5 = 0;
                var6 = var7;
                if(!(var5 !== var2)) { _fun0004_ip = 22; continue _fun0004 }
case 24:
                var6 = var2;
case 22:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.timeoutPromise;
                var6 = var2.bind(var5)(var6);
                var5 = var6.then;
                var2 = function() {
                    var3 = _closure1_slot11;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                return var2;
case 18:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var4 = var2.bind(var4)(var1);
                var2 = var4.dispatch;
                var1 = {};
                var5 = 'SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE';
                var1['type'] = var5;
                var5 = _closure2_slot0;
                var1['accountId'] = var5;
                var1 = var2.bind(var4)(var1);
case 20:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.reject;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.body;
            var5 = var2.access_token;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'SPOTIFY_ACCOUNT_ACCESS_TOKEN';
            var2['type'] = var6;
            var6 = _closure2_slot0;
            var2['accountId'] = var6;
            var2['accessToken'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.SPOTIFY_APP_PROTOCOL;
    var _closure1_slot4 = var6;
    var5 = var5.SpotifyEndpoints;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.AbortCodes;
    var _closure1_slot6 = var6;
    var6 = var5.Endpoints;
    var _closure1_slot7 = var6;
    var5 = var5.PlatformTypes;
    var _closure1_slot8 = var5;
    var5 = {};
    var12 = var11.bind;
    var6 = 4;
    var9 = var8[var6];
    var9 = var7.bind(var1)(var9);
    var9 = var9.HTTP;
    var9 = var9.get;
    var10 = null;
    var9 = var12.bind(var11)(var10, var9);
    var5['get'] = var9;
    var9 = var11.bind;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.HTTP;
    var6 = var6.put;
    var6 = var9.bind(var11)(var10, var6);
    var5['put'] = var6;
    var _closure1_slot9 = var5;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/spotify/SpotifyActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['SpotifyAPI'] = var5;
    var3['getAccessToken'] = var4;
    var4 = function subscribePlayerStateNotifications(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var8 = arg3;
            var2 = arguments[3];
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var8;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var2 = 2;
case 2:
            var _closure2_slot3 = var2;
            var4 = _closure1_slot9;
            var3 = var4.put;
            var2 = {};
            var7 = _closure1_slot5;
            var7 = var7.NOTIFICATIONS_PLAYER;
            var2['url'] = var7;
            var7 = {};
            var7['connection_id'] = var8;
            var2['query'] = var7;
            var3 = var3.bind(var4)(var6, var5, var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var1 = 0;
                    if(!(!(var2 <= var1))) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.timeoutPromise;
                    var1 = 5000;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function() {
                        var6 = _closure1_slot12;
                        var10 = _closure2_slot0;
                        var9 = _closure2_slot1;
                        var8 = _closure2_slot2;
                        var2 = _closure2_slot3;
                        var1 = 1;
                        var7 = var2 - var1;
                        var11 = undefined;
                        var1 = var11[var6](var10, var9, var8, var7, var6);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0006_ip = 27; continue _fun0006;
case 25:
                    var2 = global;
                    var4 = var2.Promise;
                    var3 = var4.reject;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
case 27:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var3['subscribePlayerStateNotifications'] = var4;
    var4 = function getProfile(arg1, arg2) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot9;
        var4 = var5.get;
        var3 = {};
        var2 = _closure1_slot5;
        var2 = var2.PROFILE;
        var3['url'] = var2;
        var2 = arg2;
        var3 = var4.bind(var5)(var6, var2, var3);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'SPOTIFY_PROFILE_UPDATE';
            var2['type'] = var5;
            var5 = _closure2_slot0;
            var2['accountId'] = var5;
            var5 = var1.body;
            var6 = var5.product;
            var5 = 'premium';
            var5 = var5 === var6;
            var2['isPremium'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getProfile'] = var4;
    var4 = function getDevices(arg1, arg2) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot9;
        var4 = var5.get;
        var3 = {};
        var2 = _closure1_slot5;
        var2 = var2.PLAYER_DEVICES;
        var3['url'] = var2;
        var2 = arg2;
        var3 = var4.bind(var5)(var6, var2, var3);
        var2 = var3.then;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var2 = var1.body;
                if(!var2) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SPOTIFY_SET_DEVICES';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var2['accountId'] = var5;
                var5 = var1.body;
                var5 = var5.devices;
                var2['devices'] = var5;
                var2 = var3.bind(var4)(var2);
case 28:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getDevices'] = var4;
    var4 = function play(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var11 = arg3;
            var3 = arguments[4];
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var11;
            var10 = undefined;
            if(!(var3 === var10)) { _fun0008_ip = 30; continue _fun0008 }
case 3:
            var3 = {};
case 30:
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var10;
            var7 = _closure1_slot5;
            var9 = var7.PLAYER_OPEN;
            var8 = arg4;
            var4 = false;
            var12 = var9.bind(var7)(var8, var11, var4);
            var8 = var3.deviceId;
            _closure2_slot3 = var8;
            var9 = var3.position;
            _closure2_slot4 = var9;
            var11 = var3.contextUri;
            var3 = var3.repeat;
            _closure2_slot5 = var3;
            var4 = _closure1_slot9;
            var3 = var4.put;
            var2 = {};
            var7 = var7.PLAYER_PLAY;
            var2['url'] = var7;
            var7 = {};
            var7['device_id'] = var8;
            var2['query'] = var7;
            var7 = {};
            var8 = null;
            var14 = var8 != var11;
            var13 = undefined;
            if(!var14) { _fun0008_ip = 31; continue _fun0008 }
case 32:
            var13 = var11;
case 31:
            var7['context_uri'] = var13;
            var14 = var8 == var11;
            var13 = undefined;
            if(!var14) { _fun0008_ip = 33; continue _fun0008 }
case 34:
            var14 = new Array(1);
            var14[0] = var12;
            var13 = var14;
case 33:
            var7['uris'] = var13;
            var11 = var8 != var11;
            var10 = undefined;
            if(!var11) { _fun0008_ip = 35; continue _fun0008 }
case 36:
            var11 = {};
            var11['uri'] = var12;
            var10 = var11;
case 35:
            var7['offset'] = var10;
            var10 = var8 != var9;
            var8 = 0;
            if(!var10) { _fun0008_ip = 37; continue _fun0008 }
case 38:
            var8 = var9;
case 37:
            var7['position_ms'] = var8;
            var2['body'] = var7;
            var4 = var3.bind(var4)(var6, var5, var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                    var6 = _closure1_slot9;
                    var5 = var6.put;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = {};
                    var7 = _closure1_slot5;
                    var7 = var7.PLAYER_REPEAT;
                    var2['url'] = var7;
                    var7 = {};
                    var9 = _closure2_slot3;
                    var7['device_id'] = var9;
                    var9 = _closure2_slot5;
                    var8 = 'off';
                    if(!var9) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                    var8 = 'context';
case 41:
                    var7['state'] = var8;
                    var2['query'] = var7;
                    var1 = var5.bind(var6)(var4, var3, var2);
case 39:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SPOTIFY_PLAYER_PLAY';
                    var1['type'] = var4;
                    var4 = _closure2_slot2;
                    var1['id'] = var4;
                    var6 = _closure2_slot4;
                    var4 = null;
                    var6 = var4 != var6;
                    var4 = 0;
                    if(!var6) { _fun0010_ip = 43; continue _fun0010 }
case 44:
                    var4 = _closure2_slot4;
case 43:
                    var1['position'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = arg1;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['play'] = var4;
    var4 = function pause(arg1, arg2) {
        var5 = _closure1_slot9;
        var4 = var5.put;
        var3 = {};
        var1 = _closure1_slot5;
        var1 = var1.PLAYER_PAUSE;
        var3['url'] = var1;
        var2 = arg1;
        var1 = arg2;
        var3 = var4.bind(var5)(var2, var1, var3);
        var2 = var3.then;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'SPOTIFY_PLAYER_PAUSE';
            var1['type'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = arg1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['pause'] = var4;
    var4 = function fetchIsSpotifyProtocolRegistered() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = _closure1_slot3;
            var2 = var3.isProtocolRegistered;
            var2 = var2.bind(var3)();
            if(var2) { _fun0011_ip = 45; continue _fun0011 }
case 46:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.isDesktop;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0011_ip = 45; continue _fun0011 }
case 47:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 8;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isProtocolRegistered;
            var1 = _closure1_slot4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SPOTIFY_SET_PROTOCOL_REGISTERED';
                var2['type'] = var5;
                var5 = arg1;
                var2['isRegistered'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 45:
            var1 = undefined;
            return var1;
        }
    };
    var3['fetchIsSpotifyProtocolRegistered'] = var4;
    var2 = function setActiveDevice(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SPOTIFY_SET_ACTIVE_DEVICE';
        var2['type'] = var5;
        var5 = arg1;
        var2['accountId'] = var5;
        var5 = arg2;
        var2['deviceId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setActiveDevice'] = var2;
    return var1;
})();