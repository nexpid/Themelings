// app/modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildsRequiringDeletedIdsSync() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot3;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = {};
            var5 = function BACKGROUND_SYNC(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleBackgroundSync;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['BACKGROUND_SYNC'] = var5;
            var5 = function CONNECTION_OPEN(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleConnectionOpen;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CONNECTION_OPEN'] = var5;
            var5 = function GUILD_CREATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildCreate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_CREATE'] = var5;
            var4 = function DELETED_ENTITY_IDS(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleDeletedEntityIds;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['DELETED_ENTITY_IDS'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'getAll';
        var5['key'] = var2;
        var7 = _closure1_slot2;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 153; continue _fun0001 }
 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.guildsRequiringDeletedIdsSync;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0001_ip = 122; continue _fun0001 }
 51:
                    var2 = var3.getMany;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=65);
 63:
                    return var2;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 119; continue _fun0001 }
 71:
                    var3 = global;
                    var5 = var3.Set;
                    var4 = var2.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var6 = var4.bind(var2)(var3);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var7 = var4;
                    var3 = new var7[var5](var6, var5);
                    var3 = var3 instanceof Object ? var3 : var4;
                    return var3;
 119:
                    return var2;
 122:
                    var2 = global;
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var7 = var3;
                    var2 = new var7[var2](var6);
                    var2 = var2 instanceof Object ? var2 : var3;
                    return var2;
 153:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var7.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function getAll() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var4 = var2.guilds;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.unableToSyncDeletes;
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = {};
                    var2 = arg1;
                    var2 = var2.id;
                    var1['id'] = var2;
                    return var1;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.length;
                var1 = 0;
                if(!(var2 > var1)) { _fun0002_ip = 102; continue _fun0002 }
 52:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.guildsRequiringDeletedIdsSyncTransaction;
                var1 = arg2;
                var2 = var2.bind(var4)(var1);
                var1 = var2.putAll;
                var1 = var1.bind(var2)(var3);
 102:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleBackgroundSync';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var4 = var2.guilds;
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.data_mode;
                        var1 = 'partial';
                        var1 = var1 === var3;
                        if(!var1) { _fun0004_ip = 26; continue _fun0004 }
 20:
                        var1 = var2.unable_to_sync_deletes;
 26:
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = {};
                    var2 = arg1;
                    var2 = var2.id;
                    var1['id'] = var2;
                    return var1;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.length;
                var1 = 0;
                if(!(var2 > var1)) { _fun0003_ip = 102; continue _fun0003 }
 52:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.guildsRequiringDeletedIdsSyncTransaction;
                var1 = arg2;
                var2 = var2.bind(var4)(var1);
                var1 = var2.putAll;
                var1 = var1.bind(var2)(var3);
 102:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleGuildCreate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var4 = var1.guild;
                var1 = var4.unableToSyncDeletes;
                if(!var1) { _fun0005_ip = 78; continue _fun0005 }
 17:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.guildsRequiringDeletedIdsSyncTransaction;
                var1 = arg2;
                var3 = var2.bind(var3)(var1);
                var2 = var3.put;
                var1 = {};
                var4 = var4.id;
                var1['id'] = var4;
                var1 = var2.bind(var3)(var1);
 78:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleDeletedEntityIds';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.guildsRequiringDeletedIdsSyncTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.delete;
            var2 = arg1;
            var2 = var2.guild_id;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/GuildsRequiringDeletedIdsSync.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();