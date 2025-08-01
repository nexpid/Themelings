// app/modules/report_to_mod/ReportToModStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var1 = function handleSelectedGuildChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot5;
            var1 = var3.getLastSelectedGuildId;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot6;
            if(!(var3 !== var1)) { _fun0002_ip = 45; continue _fun0002 }
 25:
            var1 = null;
            _closure1_slot7 = var1;
            var4 = var1 != var3;
            if(!var4) { _fun0002_ip = 41; continue _fun0002 }
 38:
            var1 = var3;
 41:
            _closure1_slot6 = var1;
 45:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = null;
    var _closure1_slot6 = var2;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = {};
    var2['reportedMessages'] = var7;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ReportToModStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var2 = null;
                if(!(var2 != var1)) { _fun0004_ip = 86; continue _fun0004 }
 12:
                var2 = _closure1_slot8;
                var6 = global;
                var5 = var6.Object;
                var3 = var5.fromEntries;
                var7 = var6.Object;
                var6 = var7.entries;
                var1 = var1.reportedMessages;
                var7 = var6.bind(var7)(var1);
                var6 = var7.map;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var5 = arg1;
                        var1 = var5[Symbol.iterator];
                        var5 = var1().next;
                        var4 = var5().value;
                        var2 = var1;
                        var7 = undefined;
                        var3 = var2 === var7;
                        var2 = undefined;
                        if(var3) { _fun0005_ip = 27; continue _fun0005 }
 24:
                        var2 = var4;
 27:
                        var4 = undefined;
                        if(var3) { _fun0005_ip = 57; continue _fun0005 }
 32:
                        var6 = var5().value;
                        var5 = var1;
                        var5 = var5 === var7;
                        var4 = undefined;
                        var3 = var5;
                        if(var5) { _fun0005_ip = 57; continue _fun0005 }
 51:
                        var4 = var6;
                        var3 = var5;
 57:
                        if(var3) { _fun0005_ip = 63; continue _fun0005 }
 60:
                        var1.return();
 63:
                        var1 = new Array(2);
                        var1[0] = var2;
                        var2 = global;
                        var2 = var2.Set;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {constructor: {value: var2}});
                        var9 = var3;
                        var8 = var4;
                        var2 = new var9[var2](var8, var7);
                        var2 = var2 instanceof Object ? var2 : var3;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var1 = var6.bind(var7)(var1);
                var1 = var3.bind(var5)(var1);
                var2['reportedMessages'] = var1;
 86:
                var3 = var4.syncWith;
                var5 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot10;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
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
        var7 = 'isUserBanned';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = _closure1_slot7;
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0006_ip = 31; continue _fun0006 }
 18:
                var4 = var5.get;
                var3 = arg1;
                var2 = var4.bind(var5)(var3);
 31:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0006_ip = 43; continue _fun0006 }
 40:
                var1 = var2;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getReportedMessages';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            var1 = var1.reportedMessages;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasReportedMessage';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = _closure1_slot8;
                var2 = var1.reportedMessages;
                var1 = arg1;
                var5 = var2[var1];
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0007_ip = 44; continue _fun0007 }
 31:
                var4 = var5.has;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
 44:
                var1 = var1 != var2;
                if(!var1) { _fun0007_ip = 54; continue _fun0007 }
 51:
                var1 = var2;
 54:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'ReportToModStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = new Array(1);
    var8 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg1;
            var1 = {};
            var3 = null;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0008_ip = 22; continue _fun0008 }
 16:
            var2 = var4.reportedMessages;
 22:
            if(!(var3 == var2)) { _fun0008_ip = 28; continue _fun0008 }
 26:
            var2 = {};
 28:
            var1['reportedMessages'] = var2;
            return var1;
        }
    };
    var2[0] = var8;
    var7['migrations'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleMessageReportSuccess(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var3 = var1.messageId;
            var4 = _closure1_slot8;
            var4 = var4.reportedMessages;
            var5 = var4[var2];
            var4 = null;
            if(!(var4 == var5)) { _fun0009_ip = 78; continue _fun0009 }
 36:
            var4 = _closure1_slot8;
            var5 = var4.reportedMessages;
            var4 = global;
            var4 = var4.Set;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var8 = var6;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var6;
            var5[var2] = var4;
 78:
            var1 = _closure1_slot8;
            var1 = var1.reportedMessages;
            var2 = var1[var2];
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        }
    };
    var2['REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS'] = var8;
    var8 = function handleGuildBanAdd(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var2 = arg1;
            var1 = var2.user;
            var4 = var2.guildId;
            var3 = _closure1_slot6;
            var3 = var4 === var3;
            if(!var3) { _fun0010_ip = 37; continue _fun0010 }
 27:
            var5 = _closure1_slot7;
            var4 = null;
            var3 = var4 != var5;
 37:
            if(!var3) { _fun0010_ip = 62; continue _fun0010 }
 40:
            var4 = _closure1_slot7;
            var3 = var4.set;
            var2 = var1.id;
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
 62:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_BAN_ADD'] = var8;
    var8 = function handleGuildBanRemove(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var1 = var2.user;
            var4 = var2.guildId;
            var3 = _closure1_slot6;
            var3 = var4 === var3;
            if(!var3) { _fun0011_ip = 37; continue _fun0011 }
 27:
            var5 = _closure1_slot7;
            var4 = null;
            var3 = var4 != var5;
 37:
            if(!var3) { _fun0011_ip = 62; continue _fun0011 }
 40:
            var4 = _closure1_slot7;
            var3 = var4.set;
            var2 = var1.id;
            var1 = false;
            var1 = var3.bind(var4)(var2, var1);
 62:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_BAN_REMOVE'] = var8;
    var8 = function handleGuildBansLoaded(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var8 = var1.bans;
            var4 = var1.guildId;
            var11 = var1.userIds;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot6;
            if(!(var4 === var3)) { _fun0012_ip = 235; continue _fun0012 }
 42:
            var3 = global;
            var7 = var3.Set;
            var6 = var8.map;
            var4 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.user;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0013_ip = 24; continue _fun0013 }
 19:
                    var1 = var2.id;
 24:
                    return var1;
                }
            };
            var12 = var6.bind(var8)(var4);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var13 = var6;
            var4 = new var13[var7](var12, var11);
            var6 = var4 instanceof Object ? var4 : var6;
            _closure2_slot0 = var6;
            var9 = var3.Array;
            var7 = var9.from;
            var4 = var3.Set;
            var8 = null;
            if(!(var8 == var11)) { _fun0012_ip = 118; continue _fun0012 }
 114:
            var11 = new Array(0);
 118:
            var10 = var4.prototype;
            var10 = Object.create(var10, {constructor: {value: var4}});
            var13 = var10;
            var12 = var11;
            var4 = new var13[var4](var12, var11);
            var4 = var4 instanceof Object ? var4 : var10;
            var9 = var7.bind(var9)(var4);
            var7 = var9.filter;
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var4 = var7.bind(var9)(var4);
            var7 = _closure1_slot7;
            if(!(var8 == var7)) { _fun0012_ip = 201; continue _fun0012 }
 171:
            var3 = var3.Map;
            var7 = var3.prototype;
            var7 = Object.create(var7, {constructor: {value: var3}});
            var13 = var7;
            var3 = new var13[var3](var12);
            var3 = var3 instanceof Object ? var3 : var7;
            _closure1_slot7 = var3;
 201:
            var5 = var6.forEach;
            var3 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var4 = _closure1_slot7;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0014_ip = 29; continue _fun0014 }
 13:
                    var3 = var4.set;
                    var2 = arg1;
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var4 = _closure1_slot7;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0015_ip = 29; continue _fun0015 }
 13:
                    var3 = var4.set;
                    var2 = arg1;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 235:
            return var1;
        }
    };
    var2['GUILD_SETTINGS_LOADED_BANS_BATCH'] = var8;
    var4 = function handleLogout() {
        var2 = null;
        _closure1_slot6 = var2;
        _closure1_slot7 = var2;
        var2 = _closure1_slot8;
        var1 = {};
        var2['reportedMessages'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/report_to_mod/ReportToModStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();