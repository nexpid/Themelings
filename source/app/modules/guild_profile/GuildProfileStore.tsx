// app/modules/guild_profile/GuildProfileStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var11 = function handleUpdateStart(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var9 = var1;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var7 = true;
            var6 = 'isUpdating';
            var1[var6] = var7;
            var1 = var2.bind(var3)(var4, var1);
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var8 = _closure1_slot10;
            var9 = var1;
            var5 = copyDataProperties(var9, var8);
            var6 = true;
            var5 = 'isUpdating';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
case 8:
            var1 = undefined;
            return var1;
        }
    };
    var5 = function handleUpdateFailure(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var6 = var1.error;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var7 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var7)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var10 = var1;
            var9 = var7;
            var7 = copyDataProperties(var10, var9);
            var7 = 'error';
            var1[var7] = var6;
            var8 = false;
            var7 = 'isUpdating';
            var1[var7] = var8;
            var1 = var2.bind(var3)(var4, var1);
            _fun0003_ip = 11; continue _fun0003;
case 9:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var9 = _closure1_slot10;
            var10 = var1;
            var5 = copyDataProperties(var10, var9);
            var5 = 'error';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
case 11:
            var1 = undefined;
            return var1;
        }
    };
    var12 = function handleInviteResolveOrCreate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var1 = var1.invite;
            var1 = var1.profile;
            var2 = null;
            if(!(var2 != var1)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var6 = _closure1_slot9;
            var4 = var6.get;
            var3 = var1.id;
            var8 = var4.bind(var6)(var3);
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 6;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.buildGuildProfileFromServer;
            var7 = var3.bind(var4)(var1);
            if(!(var2 != var8)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var6 = _closure1_slot9;
            var4 = var6.set;
            var3 = var1.id;
            var2 = {};
            var11 = var2;
            var10 = var8;
            var8 = copyDataProperties(var11, var10);
            var8 = 'profile';
            var2[var8] = var7;
            var8 = global;
            var9 = var8.Date;
            var8 = var9.now;
            var9 = var8.bind(var9)();
            var8 = 'lastSyncTimestamp';
            var2[var8] = var9;
            var8 = _closure1_slot8;
            var9 = var8.FETCHED;
            var8 = 'fetchStatus';
            var2[var8] = var9;
            var2 = var4.bind(var6)(var3, var2);
            _fun0004_ip = 12; continue _fun0004;
case 14:
            var4 = _closure1_slot9;
            var3 = var4.set;
            var2 = var1.id;
            var1 = {};
            var10 = _closure1_slot10;
            var11 = var1;
            var6 = copyDataProperties(var11, var10);
            var6 = 'profile';
            var1[var6] = var7;
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var7 = var6.bind(var7)();
            var6 = 'lastSyncTimestamp';
            var1[var6] = var7;
            var5 = _closure1_slot8;
            var6 = var5.FETCHED;
            var5 = 'fetchStatus';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
case 12:
            var1 = undefined;
            return var1;
        }
    };
    var4 = global;
    var13 = var4.Object;
    var9 = var13.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var13)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.ChannelTypes;
    var _closure1_slot7 = var2;
    var2 = {};
    var9 = 'NOT_FETCHED';
    var2['NOT_FETCHED'] = var9;
    var9 = 'FETCHING';
    var2['FETCHING'] = var9;
    var9 = 'FETCHED';
    var2['FETCHED'] = var9;
    var _closure1_slot8 = var2;
    var4 = var4.Map;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var17 = var9;
    var4 = new var17[var4](var16);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot9 = var4;
    var4 = {'profile': null, 'lastSyncTimestamp': null, 'fetchStatus': null, 'isUpdating': false, 'error': null};
    var9 = var2.NOT_FETCHED;
    var4['fetchStatus'] = var9;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildProfileStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 18; continue _fun0005;
case 16:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 18:
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
        var1 = 'getProfile';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var2 = null;
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var4 = _closure1_slot9;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var3 = var4.profile;
case 21:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                var2 = var3;
case 23:
                var1 = var2;
case 19:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFetchStatus';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var3 = null;
                if(!(var3 != var5)) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                var4 = _closure1_slot9;
                var1 = var4.get;
                var4 = var1.bind(var4)(var5);
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                var1 = var4.fetchStatus;
case 27:
                if(!(var3 == var1)) { _fun0007_ip = 24; continue _fun0007 }
case 29:
                var2 = _closure1_slot8;
                var1 = var2.NOT_FETCHED;
case 24:
                _fun0007_ip = 3; continue _fun0007;
case 25:
                var2 = _closure1_slot8;
                var1 = var2.NOT_FETCHED;
case 3:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getLastSyncTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var2 = null;
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0008_ip = 19; continue _fun0008 }
case 20:
                var4 = _closure1_slot9;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                var3 = var4.lastSyncTimestamp;
case 21:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                var2 = var3;
case 23:
                var1 = var2;
case 19:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getIsUpdating';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var2 = null;
                var1 = var2 != var5;
                if(!var1) { _fun0009_ip = 25; continue _fun0009 }
case 30:
                var4 = _closure1_slot9;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                var3 = var4.isUpdating;
case 31:
                var2 = var2 != var3;
                if(!var2) { _fun0009_ip = 33; continue _fun0009 }
case 17:
                var2 = var3;
case 33:
                var1 = var2;
case 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getErrorCode';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var2 = null;
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0010_ip = 4; continue _fun0010 }
case 20:
                var4 = _closure1_slot9;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0010_ip = 34; continue _fun0010 }
case 22:
                var4 = var4.error;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0010_ip = 34; continue _fun0010 }
case 33:
                var3 = var4.code;
case 34:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0010_ip = 6; continue _fun0010 }
case 35:
                var2 = var3;
case 6:
                var1 = var2;
case 4:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'GuildProfileStore';
    var9['displayName'] = var4;
    var4 = 8;
    var4 = var7[var4];
    var16 = var8.bind(var1)(var4);
    var4 = {};
    var13 = function handleFetchStart(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0011_ip = 36; continue _fun0011 }
case 7:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var9 = var1;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var6 = _closure1_slot8;
            var7 = var6.FETCHING;
            var6 = 'fetchStatus';
            var1[var6] = var7;
            var1 = var2.bind(var3)(var4, var1);
            _fun0011_ip = 37; continue _fun0011;
case 36:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var8 = _closure1_slot10;
            var9 = var1;
            var6 = copyDataProperties(var9, var8);
            var5 = _closure1_slot8;
            var6 = var5.FETCHING;
            var5 = 'fetchStatus';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
case 37:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_PROFILE_FETCH'] = var13;
    var13 = function handleFetchSuccess(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var7 = var1.profile;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0012_ip = 38; continue _fun0012 }
case 39:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var6 = 'profile';
            var1[var6] = var7;
            var6 = global;
            var8 = var6.Date;
            var6 = var8.now;
            var8 = var6.bind(var8)();
            var6 = 'lastSyncTimestamp';
            var1[var6] = var8;
            var6 = _closure1_slot8;
            var8 = var6.FETCHED;
            var6 = 'fetchStatus';
            var1[var6] = var8;
            var1 = var2.bind(var3)(var4, var1);
            _fun0012_ip = 40; continue _fun0012;
case 38:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var9 = _closure1_slot10;
            var10 = var1;
            var6 = copyDataProperties(var10, var9);
            var6 = 'profile';
            var1[var6] = var7;
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var7 = var6.bind(var7)();
            var6 = 'lastSyncTimestamp';
            var1[var6] = var7;
            var5 = _closure1_slot8;
            var6 = var5.FETCHED;
            var5 = 'fetchStatus';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
case 40:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_PROFILE_FETCH_SUCCESS'] = var13;
    var13 = function handleFetchFailure(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var7 = var1.error;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0013_ip = 41; continue _fun0013 }
case 10:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var6 = 'error';
            var1[var6] = var7;
            var6 = _closure1_slot8;
            var8 = var6.FETCHED;
            var6 = 'fetchStatus';
            var1[var6] = var8;
            var1 = var2.bind(var3)(var4, var1);
            _fun0013_ip = 42; continue _fun0013;
case 41:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var9 = _closure1_slot10;
            var10 = var1;
            var6 = copyDataProperties(var10, var9);
            var6 = 'error';
            var1[var6] = var7;
            var5 = _closure1_slot8;
            var6 = var5.FETCHED;
            var5 = 'fetchStatus';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
case 42:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_PROFILE_FETCH_FAILURE'] = var13;
    var4['GUILD_PROFILE_UPDATE'] = var11;
    var13 = function handleUpdateSuccess(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var4 = var1.guildId;
            var6 = var1.profile;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var7 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var7)) { _fun0014_ip = 43; continue _fun0014 }
case 39:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var10 = var1;
            var9 = var7;
            var7 = copyDataProperties(var10, var9);
            var7 = 'profile';
            var1[var7] = var6;
            var8 = false;
            var7 = 'isUpdating';
            var1[var7] = var8;
            var1 = var2.bind(var3)(var4, var1);
            _fun0014_ip = 44; continue _fun0014;
case 43:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var9 = _closure1_slot10;
            var10 = var1;
            var5 = copyDataProperties(var10, var9);
            var5 = 'profile';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
case 44:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_PROFILE_UPDATE_SUCCESS'] = var13;
    var4['GUILD_PROFILE_UPDATE_FAILURE'] = var5;
    var13 = function handleMemberVerificationFormFetch(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.form;
            var5 = var1.guildId;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            var8 = undefined;
            if(var4) { _fun0015_ip = 45; continue _fun0015 }
case 46:
            var8 = var3.profile;
case 45:
            if(!(var2 != var8)) { _fun0015_ip = 47; continue _fun0015 }
case 22:
            var4 = _closure1_slot9;
            var3 = var4.get;
            var7 = var3.bind(var4)(var5);
            if(!(var2 != var7)) { _fun0015_ip = 48; continue _fun0015 }
case 19:
            var4 = _closure1_slot9;
            var3 = var4.set;
            var2 = {};
            var11 = var2;
            var10 = var7;
            var7 = copyDataProperties(var11, var10);
            var7 = 'profile';
            var2[var7] = var8;
            var7 = global;
            var9 = var7.Date;
            var7 = var9.now;
            var9 = var7.bind(var9)();
            var7 = 'lastSyncTimestamp';
            var2[var7] = var9;
            var7 = _closure1_slot8;
            var9 = var7.FETCHED;
            var7 = 'fetchStatus';
            var2[var7] = var9;
            var2 = var3.bind(var4)(var5, var2);
            _fun0015_ip = 47; continue _fun0015;
case 48:
            var4 = _closure1_slot9;
            var3 = var4.set;
            var2 = {};
            var10 = _closure1_slot10;
            var11 = var2;
            var7 = copyDataProperties(var11, var10);
            var7 = 'profile';
            var2[var7] = var8;
            var7 = global;
            var8 = var7.Date;
            var7 = var8.now;
            var8 = var7.bind(var8)();
            var7 = 'lastSyncTimestamp';
            var2[var7] = var8;
            var6 = _closure1_slot8;
            var7 = var6.FETCHED;
            var6 = 'fetchStatus';
            var2[var6] = var7;
            var2 = var3.bind(var4)(var5, var2);
case 47:
            return var1;
        }
    };
    var4['MEMBER_VERIFICATION_FORM_UPDATE'] = var13;
    var4['INVITE_RESOLVE_SUCCESS'] = var12;
    var4['INSTANT_INVITE_CREATE_SUCCESS'] = var12;
    var12 = function handleCreateChannel(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var4 = var1.type;
            var3 = _closure1_slot7;
            var3 = var3.GUILD_ANNOUNCEMENT;
            var3 = var4 === var3;
            if(!var3) { _fun0016_ip = 31; continue _fun0016 }
case 45:
            var5 = var1.guild_id;
            var4 = null;
            var3 = var4 != var5;
case 31:
            if(!var3) { _fun0016_ip = 49; continue _fun0016 }
case 50:
            var3 = _closure1_slot9;
            var2 = var3.delete;
            var1 = var1.guild_id;
            var1 = var2.bind(var3)(var1);
case 49:
            var1 = undefined;
            return var1;
        }
    };
    var4['CHANNEL_CREATE'] = var12;
    var12 = function handleSetWidget(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.enabled;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0017_ip = 51; continue _fun0017 }
case 52:
            var1 = var2;
case 51:
            if(!var1) { _fun0017_ip = 29; continue _fun0017 }
case 53:
            var2 = _closure1_slot9;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
case 29:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_SET_WIDGET'] = var12;
    var12 = function handleGuildUpdate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var5 = _closure1_slot9;
            var4 = var5.get;
            var3 = var1.id;
            var5 = var4.bind(var5)(var3);
            var4 = null;
            if(!(var4 != var5)) { _fun0018_ip = 54; continue _fun0018 }
case 55:
            var3 = var5.profile;
            if(!(var4 != var3)) { _fun0018_ip = 54; continue _fun0018 }
case 56:
            var6 = {};
            var9 = var5.profile;
            var10 = var6;
            var3 = copyDataProperties(var10, var9);
            var7 = var1.name;
            var3 = 'name';
            var6[var3] = var7;
            var3 = var1.icon;
            var8 = var4 != var3;
            var7 = null;
            if(!var8) { _fun0018_ip = 57; continue _fun0018 }
case 58:
            var7 = var3;
case 57:
            var3 = 'icon';
            var6[var3] = var7;
            var3 = var1.description;
            var8 = var4 != var3;
            var7 = '';
            if(!var8) { _fun0018_ip = 37; continue _fun0018 }
case 44:
            var7 = var3;
case 37:
            var3 = 'description';
            var6[var3] = var7;
            var3 = var1.discovery_splash;
            var7 = var4 != var3;
            var4 = null;
            if(!var7) { _fun0018_ip = 59; continue _fun0018 }
case 60:
            var4 = var3;
case 59:
            var3 = 'customBanner';
            var6[var3] = var4;
            var4 = _closure1_slot9;
            var3 = var4.set;
            var2 = var1.id;
            var1 = {};
            var10 = var1;
            var9 = var5;
            var5 = copyDataProperties(var10, var9);
            var5 = 'profile';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
case 54:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_UPDATE'] = var12;
    var4['GUILD_PROFILE_UPDATE_VISIBILITY'] = var11;
    var10 = function handleUpdateVisibilitySuccess(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var8 = var1.visibility;
            var3 = _closure1_slot9;
            var1 = var3.get;
            var7 = var1.bind(var3)(var5);
            var4 = null;
            var3 = var4 == var7;
            var1 = undefined;
            var6 = undefined;
            if(var3) { _fun0019_ip = 61; continue _fun0019 }
case 31:
            var6 = var7.profile;
case 61:
            var3 = var4 != var7;
            if(!var3) { _fun0019_ip = 19; continue _fun0019 }
case 25:
            var3 = var4 != var6;
case 19:
            if(!var3) { _fun0019_ip = 62; continue _fun0019 }
case 63:
            var4 = _closure1_slot9;
            var3 = var4.set;
            var2 = {};
            var11 = var2;
            var10 = var7;
            var7 = copyDataProperties(var11, var10);
            var9 = false;
            var7 = 'isUpdating';
            var2[var7] = var9;
            var7 = {};
            var11 = var7;
            var10 = var6;
            var6 = copyDataProperties(var11, var10);
            var6 = 'visibility';
            var7[var6] = var8;
            var6 = 'profile';
            var2[var6] = var7;
            var2 = var3.bind(var4)(var5, var2);
case 62:
            return var1;
        }
    };
    var4['GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS'] = var10;
    var4['GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var17 = var5;
    var15 = var4;
    var4 = new var17[var9](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_profile/GuildProfileStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['GuildProfileFetchStatus'] = var2;
    return var1;
})();