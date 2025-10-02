// app/stores/NowPlayingStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function handleMultipleUpdates(arg1) {
        var4 = arg1;
        var2 = false;
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure1_slot17;
                var1 = undefined;
                var2 = arg1;
                var3 = var3.bind(var1)(var2);
                var2 = false;
                var3 = var2 !== var3;
                if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure2_slot0;
case 6:
                _closure2_slot0 = var3;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function removeUserIfNeeded(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot13;
            var1 = var1[var2];
            var5 = null;
            if(!(var5 != var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = var1.gameId;
            var1 = _closure1_slot12;
            var1 = var1[var4];
            if(!(var5 != var1)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = {};
            var7 = _closure1_slot12;
            var8 = var1;
            var5 = copyDataProperties(var8, var7);
            _closure1_slot12 = var1;
            var1 = var1[var4];
            var1 = delete var1[var2];
            var1 = global;
            var6 = var1.Object;
            var5 = var6.values;
            var1 = _closure1_slot12;
            var1 = var1[var4];
            var1 = var5.bind(var6)(var1);
            var5 = var1.length;
            var1 = 0;
            if(!(var1 === var5)) { _fun0003_ip = 10; continue _fun0003 }
case 12:
            var1 = _closure1_slot12;
            var1 = delete var1[var4];
case 10:
            var1 = {};
            var7 = _closure1_slot13;
            var8 = var1;
            var4 = copyDataProperties(var8, var7);
            _closure1_slot13 = var1;
            var1 = delete var1[var2];
            var1 = true;
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _handlePresenceUpdate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = var3.user;
            var _closure2_slot0 = var1;
            var6 = var3.activities;
            var3 = undefined;
            var _closure2_slot1 = var3;
            var4 = null;
            if(!(var4 != var1)) { _fun0004_ip = 10; continue _fun0004 }
case 13:
            var5 = var6.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot10;
                var1 = var1.CUSTOM_STATUS;
                var1 = var2 !== var1;
                return var1;
            };
            var6 = var5.bind(var6)(var4);
            var5 = var6.length;
            var4 = 0;
            if(!(var4 !== var5)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var4 = false;
            _closure2_slot1 = var4;
            var5 = var6.forEach;
            var4 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = _closure2_slot0;
                    var4 = function _handleActivityUpdate(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var5 = arg1;
                            var1 = arg2;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 9;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var6.bind(var3)(var4);
                            var8 = var4.bind(var3)(var5);
                            var6 = null;
                            if(!(var6 != var8)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                            var7 = _closure1_slot13;
                            var4 = var1.id;
                            var7 = var7[var4];
                            var4 = var6 != var7;
                            if(!var4) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                            var7 = var7.gameId;
                            var4 = var7 !== var8;
case 18:
                            if(!var4) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                            var7 = _closure1_slot16;
                            var4 = var1.id;
                            var4 = var7.bind(var3)(var4);
case 20:
                            var7 = var5.timestamps;
                            var9 = var6 == var7;
                            var4 = undefined;
                            if(var9) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                            var4 = var7.start;
case 22:
                            if(!(var6 == var4)) { _fun0006_ip = 8; continue _fun0006 }
case 24:
                            var6 = global;
                            var7 = var6.Date;
                            var6 = var7.now;
                            var4 = var6.bind(var7)();
case 8:
                            var7 = {};
                            var6 = var1.id;
                            var7['userId'] = var6;
                            var7['activity'] = var5;
                            var7['startedPlaying'] = var4;
                            var4 = {};
                            var10 = _closure1_slot12;
                            var11 = var4;
                            var5 = copyDataProperties(var11, var10);
                            var5 = {};
                            var6 = _closure1_slot12;
                            var10 = var6[var8];
                            var11 = var5;
                            var6 = copyDataProperties(var11, var10);
                            var6 = var7.userId;
                            var5[var6] = var7;
                            var4[var8] = var5;
                            _closure1_slot12 = var4;
                            var4 = {};
                            var10 = _closure1_slot13;
                            var11 = var4;
                            var5 = copyDataProperties(var11, var10);
                            var6 = var7.userId;
                            var5 = {};
                            var5['gameId'] = var8;
                            var7 = var7.startedPlaying;
                            var5['startedPlaying'] = var7;
                            var4[var6] = var5;
                            _closure1_slot13 = var4;
                            var4 = true;
                            return var4;
case 16:
                            var2 = _closure1_slot16;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var4.bind(var1)(var2, var5);
                    if(!var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var2 = true;
                    _closure2_slot1 = var2;
case 25:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var2 = _closure2_slot1;
            return var2;
case 14:
            var2 = _closure1_slot16;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
case 10:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function handleUserAffinitiesV2StoreUpdate() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot7;
            var1 = var2.shouldFetch;
            var2 = var1.bind(var2)();
            if(var2) { _fun0007_ip = 27; continue _fun0007 }
case 9:
            var2 = _closure1_slot11;
case 27:
            var1 = false;
            if(var2) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var4 = function refreshStateFromPresence() {
                var3 = {};
                _closure1_slot12 = var3;
                var3 = {};
                _closure1_slot13 = var3;
                var3 = false;
                var _closure3_slot0 = var3;
                var3 = _closure1_slot8;
                var2 = var3.getUserIds;
                var4 = var2.bind(var3)();
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var5 = arg1;
                        var3 = _closure1_slot9;
                        var2 = var3.getUser;
                        var4 = var2.bind(var3)(var5);
                        var2 = null;
                        if(!(var2 != var4)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                        var3 = _closure1_slot17;
                        var2 = {};
                        var2['user'] = var4;
                        var4 = _closure1_slot8;
                        var1 = var4.getActivities;
                        var1 = var1.bind(var4)(var5);
                        var2['activities'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        if(var2) { _fun0008_ip = 5; continue _fun0008 }
case 32:
                        var2 = _closure3_slot0;
case 5:
                        _closure3_slot0 = var2;
case 30:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1 = _closure3_slot0;
                return var1;
            };
            var2 = undefined;
            var1 = var4.bind(var2)();
case 28:
            var4 = _closure1_slot7;
            var2 = var4.shouldFetch;
            var2 = var2.bind(var4)();
            var2 = !var2;
            _closure1_slot11 = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ActivityTypes;
    var _closure1_slot10 = var2;
    var2 = false;
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function NowPlayingStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 35; continue _fun0009;
case 33:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 35:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot7;
            var2 = var3.bind(var4)(var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot18;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'games';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'usersPlaying';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'gameIds';
        var5['key'] = var7;
        var7 = function get() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot12;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getNowPlaying';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getUserGame';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot13;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'NowPlayingStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot12 = var1;
        var1 = {};
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleConnectionOpenSupplemental(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var5 = var2.guilds;
            var4 = var2.presences;
            var2 = false;
            var _closure2_slot0 = var2;
            var3 = var5.forEach;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot15;
                    var1 = arg1;
                    var2 = var1.presences;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    if(!var2) { _fun0011_ip = 36; continue _fun0011 }
case 7:
                    var2 = true;
                    _closure2_slot0 = var2;
case 36:
                    return var1;
                }
            };
            var2 = var3.bind(var5)(var2);
            var3 = _closure1_slot15;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            if(!var2) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var2 = true;
            _closure2_slot0 = var2;
case 37:
            var1 = _closure2_slot0;
            return var1;
        }
    };
    var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var9;
    var9 = function handleLogout() {
        var1 = {};
        _closure1_slot12 = var1;
        var1 = {};
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handlePresenceUpdates(arg1) {
        var2 = arg1;
        var4 = var2.updates;
        var3 = var4.map;
        var2 = function(arg1) {
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['PRESENCE_UPDATES'] = var9;
    var4 = function handlePresencesReplace(arg1) {
        var1 = arg1;
        var3 = var1.presences;
        var2 = _closure1_slot15;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['PRESENCES_REPLACE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/NowPlayingStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();