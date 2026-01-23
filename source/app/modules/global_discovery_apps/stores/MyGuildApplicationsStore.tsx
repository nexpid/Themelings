// app/modules/global_discovery_apps/stores/MyGuildApplicationsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function addToApplicationIdToGuildIds(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.applicationId;
            var5 = var1.guildId;
            var2 = _closure1_slot8;
            var2 = var2.applicationIdToGuildIds;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var2 = _closure1_slot8;
            var4 = var2.applicationIdToGuildIds;
            var2 = global;
            var2 = var2.Set;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var8 = var6;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var6;
            var4[var3] = var2;
case 40:
            var2 = _closure1_slot8;
            var2 = var2.applicationIdToGuildIds;
            var4 = var2[var3];
            var2 = var4.add;
            var2 = var2.bind(var4)(var5);
            var2 = _closure1_slot8;
            var2 = var2.applicationIdToGuildIds;
            var4 = global;
            var5 = var4.Set;
            var1 = _closure1_slot8;
            var1 = var1.applicationIdToGuildIds;
            var7 = var1[var3];
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var8 = var4;
            var1 = new var8[var5](var7, var6);
            var1 = var1 instanceof Object ? var1 : var4;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var11 = 0;
    var2 = var6[var11];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var10 = 1;
    var2 = var6[var10];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var9 = 2;
    var2 = var6[var9];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var8 = 3;
    var2 = var6[var8];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = {};
    var2['NOT_FETCHED'] = var11;
    var4 = 'NOT_FETCHED';
    var2[var11] = var4;
    var2['FETCHING'] = var10;
    var4 = 'FETCHING';
    var2[var10] = var4;
    var2['FETCHED'] = var9;
    var4 = 'FETCHED';
    var2[var9] = var4;
    var2['ERROR'] = var8;
    var4 = 'ERROR';
    var2[var8] = var4;
    var _closure1_slot7 = var2;
    var4 = {'applicationIdToGuildIds': null, 'lastFetchTimeMs': null, 'nextFetchRetryTimeMs': null};
    var8 = {};
    var4['applicationIdToGuildIds'] = var8;
    var8 = var2.NOT_FETCHED;
    var4['fetchState'] = var8;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function MyGuildApplicationsStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 44; continue _fun0006;
case 42:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 44:
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
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var8 = arg1;
                var1 = null;
                if(!(var1 != var8)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var2 = _closure1_slot8;
                var1 = var8.lastFetchTimeMs;
                var2['lastFetchTimeMs'] = var1;
                var2 = _closure1_slot8;
                var1 = var8.nextFetchRetryTimeMs;
                var2['nextFetchRetryTimeMs'] = var1;
                var2 = _closure1_slot8;
                var1 = var8.fetchState;
                var2['fetchState'] = var1;
                var6 = var8.applicationIdToGuildIds;
                var1 = global;
                for(var2 in var6)
case 47:
                {
case 48:
                    var11 = var2;
                    var9 = _closure1_slot8;
                    var10 = var9.applicationIdToGuildIds;
                    var13 = var1.Set;
                    var9 = var8.applicationIdToGuildIds;
                    var14 = var9[var11];
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {constructor: {value: var13}});
                    var15 = var12;
                    var9 = new var15[var13](var14, var13);
                    var9 = var9 instanceof Object ? var9 : var12;
                    var10[var11] = var9;
                    _fun0007_ip = 47; continue _fun0007;
                }
case 45:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildIdsForApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var1 = undefined;
                return var1;
case 49:
                var1 = _closure1_slot8;
                var1 = var1.applicationIdToGuildIds;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getLastFetchTimeMs';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.lastFetchTimeMs;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getNextFetchRetryTimeMs';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.nextFetchRetryTimeMs;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getFetchState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.fetchState;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'MyGuildApplicationsStore';
    var8['displayName'] = var4;
    var8['persistKey'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var14 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleLogout() {
        var3 = _closure1_slot8;
        var2 = {};
        var3['applicationIdToGuildIds'] = var2;
        var2 = _closure1_slot8;
        var3 = null;
        var2['lastFetchTimeMs'] = var3;
        var2 = _closure1_slot8;
        var2['nextFetchRetryTimeMs'] = var3;
        var2 = _closure1_slot8;
        var1 = _closure1_slot7;
        var1 = var1.NOT_FETCHED;
        var2['fetchState'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var9;
    var9 = function handleGuildApplicationsFetch() {
        var2 = _closure1_slot8;
        var1 = _closure1_slot7;
        var1 = var1.FETCHING;
        var2['fetchState'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS'] = var9;
    var9 = function handleGuildApplicationsFetchSuccess(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var12 = var1.guildIdToApplicationIds;
            var2 = _closure1_slot8;
            var1 = _closure1_slot7;
            var1 = var1.FETCHED;
            var2['fetchState'] = var1;
            var2 = _closure1_slot8;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2['lastFetchTimeMs'] = var1;
            var2 = _closure1_slot8;
            var1 = {};
            var2['applicationIdToGuildIds'] = var1;
            var2 = _closure1_slot8;
            var1 = null;
            var2['nextFetchRetryTimeMs'] = var1;
            var10 = var12;
            var1 = undefined;
            for(var6 in var10)
case 15:
            {
case 44:
                var5 = var6;
                var3 = _closure1_slot10;
                var2 = var12[var5];
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0009_ip = 15; continue _fun0009 }
case 51:
                var13 = _closure1_slot12;
                var2 = {};
                var14 = var3.value;
                var2['applicationId'] = var14;
                var2['guildId'] = var5;
                var2 = var13.bind(var1)(var2);
                var13 = var4.bind(var1)();
                var2 = var13.done;
                var3 = var13;
                if(var2) { _fun0009_ip = 15; continue _fun0009 }
case 52:
                _fun0009_ip = 51; continue _fun0009;
            }
case 53:
            return var1;
        }
    };
    var4['FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS'] = var9;
    var9 = function handleGuildApplicationsFetchFailure(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var3 = var1.retryAfterSeconds;
            var4 = _closure1_slot8;
            var2 = _closure1_slot7;
            var2 = var2.ERROR;
            var4['fetchState'] = var2;
            var2 = null;
            if(!(var2 != var3)) { _fun0010_ip = 54; continue _fun0010 }
case 55:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 5;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.Millis;
            var2 = var2.SECOND;
            var3 = var3 * var2;
            var2 = _closure1_slot8;
            var1 = global;
            var4 = var1.Date;
            var1 = var4.now;
            var1 = var1.bind(var4)();
            var1 = var1 + var3;
            var2['nextFetchRetryTimeMs'] = var1;
case 54:
            var1 = undefined;
            return var1;
        }
    };
    var4['FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE'] = var9;
    var9 = function handleIntegrationCreate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.application;
            var1 = var1.guildId;
            var2 = null;
            if(!(var2 != var4)) { _fun0011_ip = 56; continue _fun0011 }
case 57:
            var3 = _closure1_slot12;
            var2 = {};
            var4 = var4.id;
            var2['applicationId'] = var4;
            var2['guildId'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 56:
            var1 = undefined;
            return var1;
        }
    };
    var4['INTEGRATION_CREATE'] = var9;
    var5 = function handleIntegrationDelete(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.applicationId;
            var2 = var1.guildId;
            var4 = null;
            if(!(var4 != var3)) { _fun0012_ip = 45; continue _fun0012 }
case 58:
            var1 = {};
            var1['applicationId'] = var3;
            var1['guildId'] = var2;
            var3 = var1.applicationId;
            var5 = var1.guildId;
            var2 = _closure1_slot8;
            var2 = var2.applicationIdToGuildIds;
            var2 = var2[var3];
            if(!(var4 != var2)) { _fun0012_ip = 45; continue _fun0012 }
case 59:
            var2 = _closure1_slot8;
            var2 = var2.applicationIdToGuildIds;
            var4 = var2[var3];
            var2 = var4.delete;
            var2 = var2.bind(var4)(var5);
            var2 = _closure1_slot8;
            var2 = var2.applicationIdToGuildIds;
            var4 = global;
            var5 = var4.Set;
            var1 = _closure1_slot8;
            var1 = var1.applicationIdToGuildIds;
            var6 = var1[var3];
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var2[var3] = var1;
case 45:
            var1 = undefined;
            return var1;
        }
    };
    var4['INTEGRATION_DELETE'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var8](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 8;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/global_discovery_apps/stores/MyGuildApplicationsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['FetchState'] = var2;
    return var1;
})();