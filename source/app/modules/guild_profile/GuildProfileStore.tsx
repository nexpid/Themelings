// app/modules/guild_profile/GuildProfileStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 71; continue _fun0002 }
 31:
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
            _fun0002_ip = 110; continue _fun0002;
 71:
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
 110:
            var1 = undefined;
            return var1;
        }
    };
    var5 = function handleUpdateFailure(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var6 = var1.error;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var7 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var7)) { _fun0003_ip = 85; continue _fun0003 }
 36:
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
            _fun0003_ip = 122; continue _fun0003;
 85:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var9 = _closure1_slot10;
            var10 = var1;
            var5 = copyDataProperties(var10, var9);
            var5 = 'error';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
 122:
            var1 = undefined;
            return var1;
        }
    };
    var12 = function handleInviteResolveOrCreate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.invite;
            var1 = var1.profile;
            var2 = null;
            if(!(var2 != var1)) { _fun0004_ip = 258; continue _fun0004 }
 24:
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
            if(!(var2 != var8)) { _fun0004_ip = 171; continue _fun0004 }
 83:
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
            _fun0004_ip = 258; continue _fun0004;
 171:
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
 258:
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
 0:
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
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var5 = arg1;
                var2 = null;
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0006_ip = 61; continue _fun0006 }
 14:
                var4 = _closure1_slot9;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0006_ip = 46; continue _fun0006 }
 40:
                var3 = var4.profile;
 46:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0006_ip = 58; continue _fun0006 }
 55:
                var2 = var3;
 58:
                var1 = var2;
 61:
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
 0:
                var5 = arg1;
                var3 = null;
                if(!(var3 != var5)) { _fun0007_ip = 57; continue _fun0007 }
 9:
                var4 = _closure1_slot9;
                var1 = var4.get;
                var4 = var1.bind(var4)(var5);
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0007_ip = 41; continue _fun0007 }
 35:
                var1 = var4.fetchStatus;
 41:
                if(!(var3 == var1)) { _fun0007_ip = 55; continue _fun0007 }
 45:
                var2 = _closure1_slot8;
                var1 = var2.NOT_FETCHED;
 55:
                _fun0007_ip = 70; continue _fun0007;
 57:
                var2 = _closure1_slot8;
                var1 = var2.NOT_FETCHED;
 70:
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
 0:
                var5 = arg1;
                var2 = null;
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0008_ip = 61; continue _fun0008 }
 14:
                var4 = _closure1_slot9;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0008_ip = 46; continue _fun0008 }
 40:
                var3 = var4.lastSyncTimestamp;
 46:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0008_ip = 58; continue _fun0008 }
 55:
                var2 = var3;
 58:
                var1 = var2;
 61:
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
 0:
                var5 = arg1;
                var2 = null;
                var1 = var2 != var5;
                if(!var1) { _fun0009_ip = 57; continue _fun0009 }
 12:
                var4 = _closure1_slot9;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0009_ip = 44; continue _fun0009 }
 38:
                var3 = var4.isUpdating;
 44:
                var2 = var2 != var3;
                if(!var2) { _fun0009_ip = 54; continue _fun0009 }
 51:
                var2 = var3;
 54:
                var1 = var2;
 57:
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
 0:
                var5 = arg1;
                var2 = null;
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0010_ip = 74; continue _fun0010 }
 14:
                var4 = _closure1_slot9;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0010_ip = 59; continue _fun0010 }
 40:
                var4 = var4.error;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0010_ip = 59; continue _fun0010 }
 54:
                var3 = var4.code;
 59:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0010_ip = 71; continue _fun0010 }
 68:
                var2 = var3;
 71:
                var1 = var2;
 74:
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
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0011_ip = 79; continue _fun0011 }
 31:
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
            _fun0011_ip = 126; continue _fun0011;
 79:
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
 126:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_PROFILE_FETCH'] = var13;
    var13 = function handleFetchSuccess(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var7 = var1.profile;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0012_ip = 120; continue _fun0012 }
 37:
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
            _fun0012_ip = 202; continue _fun0012;
 120:
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
 202:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_PROFILE_FETCH_SUCCESS'] = var13;
    var13 = function handleFetchFailure(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var7 = var1.error;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0013_ip = 93; continue _fun0013 }
 36:
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
            _fun0013_ip = 149; continue _fun0013;
 93:
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
 149:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_PROFILE_FETCH_FAILURE'] = var13;
    var4['GUILD_PROFILE_UPDATE'] = var11;
    var13 = function handleUpdateSuccess(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var6 = var1.profile;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var7 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var7)) { _fun0014_ip = 86; continue _fun0014 }
 37:
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
            _fun0014_ip = 123; continue _fun0014;
 86:
            var3 = _closure1_slot9;
            var2 = var3.set;
            var1 = {};
            var9 = _closure1_slot10;
            var10 = var1;
            var5 = copyDataProperties(var10, var9);
            var5 = 'profile';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
 123:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_PROFILE_UPDATE_SUCCESS'] = var13;
    var4['GUILD_PROFILE_UPDATE_FAILURE'] = var5;
    var13 = function handleMemberVerificationFormFetch(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var3 = var1.form;
            var5 = var1.guildId;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            var8 = undefined;
            if(var4) { _fun0015_ip = 33; continue _fun0015 }
 27:
            var8 = var3.profile;
 33:
            if(!(var2 != var8)) { _fun0015_ip = 226; continue _fun0015 }
 40:
            var4 = _closure1_slot9;
            var3 = var4.get;
            var7 = var3.bind(var4)(var5);
            if(!(var2 != var7)) { _fun0015_ip = 144; continue _fun0015 }
 61:
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
            _fun0015_ip = 226; continue _fun0015;
 144:
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
 226:
            return var1;
        }
    };
    var4['MEMBER_VERIFICATION_FORM_UPDATE'] = var13;
    var4['INVITE_RESOLVE_SUCCESS'] = var12;
    var4['INSTANT_INVITE_CREATE_SUCCESS'] = var12;
    var12 = function handleCreateChannel(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var4 = var1.type;
            var3 = _closure1_slot7;
            var3 = var3.GUILD_ANNOUNCEMENT;
            var3 = var4 === var3;
            if(!var3) { _fun0016_ip = 44; continue _fun0016 }
 33:
            var5 = var1.guild_id;
            var4 = null;
            var3 = var4 != var5;
 44:
            if(!var3) { _fun0016_ip = 66; continue _fun0016 }
 47:
            var3 = _closure1_slot9;
            var2 = var3.delete;
            var1 = var1.guild_id;
            var1 = var2.bind(var3)(var1);
 66:
            var1 = undefined;
            return var1;
        }
    };
    var4['CHANNEL_CREATE'] = var12;
    var12 = function handleSetWidget(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.enabled;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0017_ip = 25; continue _fun0017 }
 22:
            var1 = var2;
 25:
            if(!var1) { _fun0017_ip = 45; continue _fun0017 }
 28:
            var2 = _closure1_slot9;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 45:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_SET_WIDGET'] = var12;
    var12 = function handleGuildUpdate(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var5 = _closure1_slot9;
            var4 = var5.get;
            var3 = var1.id;
            var5 = var4.bind(var5)(var3);
            var4 = null;
            if(!(var4 != var5)) { _fun0018_ip = 207; continue _fun0018 }
 39:
            var3 = var5.profile;
            if(!(var4 != var3)) { _fun0018_ip = 207; continue _fun0018 }
 52:
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
            if(!var8) { _fun0018_ip = 98; continue _fun0018 }
 95:
            var7 = var3;
 98:
            var3 = 'icon';
            var6[var3] = var7;
            var3 = var1.description;
            var8 = var4 != var3;
            var7 = '';
            if(!var8) { _fun0018_ip = 126; continue _fun0018 }
 123:
            var7 = var3;
 126:
            var3 = 'description';
            var6[var3] = var7;
            var3 = var1.discovery_splash;
            var7 = var4 != var3;
            var4 = null;
            if(!var7) { _fun0018_ip = 153; continue _fun0018 }
 150:
            var4 = var3;
 153:
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
 207:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_UPDATE'] = var12;
    var4['GUILD_PROFILE_UPDATE_VISIBILITY'] = var11;
    var10 = function handleUpdateVisibilitySuccess(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
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
            if(var3) { _fun0019_ip = 50; continue _fun0019 }
 44:
            var6 = var7.profile;
 50:
            var3 = var4 != var7;
            if(!var3) { _fun0019_ip = 61; continue _fun0019 }
 57:
            var3 = var4 != var6;
 61:
            if(!var3) { _fun0019_ip = 132; continue _fun0019 }
 64:
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
 132:
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