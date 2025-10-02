// app/modules/stage_channels/StageInstanceStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function addStageInstancesForGuild(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var6 = arg2;
            var2 = {};
            var5 = _closure1_slot6;
            var7 = var5[var3];
            var5 = null;
            if(!(var5 == var7)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = {};
case 6:
            var10 = var2;
            var9 = var7;
            var7 = copyDataProperties(var10, var9);
            var _closure2_slot0 = var2;
            if(!(var5 != var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = var6.forEach;
            var4 = function(arg1) {
                var3 = arg1;
                var2 = _closure1_slot7;
                var1 = var3.channel_id;
                var2[var1] = var3;
                var2 = _closure2_slot0;
                var1 = var3.channel_id;
                var2[var1] = var3;
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
case 8:
            var1 = _closure1_slot6;
            var1[var3] = var2;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var9 = function handleStageInstanceCreateOrUpdate(arg1) {
        var1 = arg1;
        var1 = var1.instance;
        var4 = _closure1_slot9;
        var3 = var1.guild_id;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var1 = function doDelete(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var2 = _closure1_slot7;
            var2 = delete var2[var4];
            var6 = null;
            if(!(var6 != var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = {};
            var5 = _closure1_slot6;
            var5 = var5[var3];
            if(!(var6 == var5)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = {};
case 12:
            var8 = var2;
            var7 = var5;
            var5 = copyDataProperties(var8, var7);
            var4 = delete var2[var4];
            var1 = _closure1_slot6;
            var1[var3] = var2;
case 10:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildScheduledEventPrivacyLevel;
    var _closure1_slot5 = var2;
    var2 = {};
    var _closure1_slot6 = var2;
    var2 = {};
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function StageInstanceStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 16; continue _fun0004;
case 14:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 16:
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
        var1 = 'getStageInstanceByChannel';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var1 = undefined;
                return var1;
case 17:
                var1 = _closure1_slot7;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'isLive';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getStageInstanceByChannel;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isPublic';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = this;
                var2 = var3.getStageInstanceByChannel;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if(var3) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var2 = var1.privacy_level;
case 19:
                var1 = _closure1_slot5;
                var1 = var1.PUBLIC;
                var1 = var2 === var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getStageInstancesByGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var2 = null;
                if(!(var2 != var3)) { _fun0007_ip = 20; continue _fun0007 }
case 18:
                var1 = _closure1_slot6;
                var1 = var1[var3];
                if(!(var2 == var1)) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                var1 = {};
case 21:
                _fun0007_ip = 23; continue _fun0007;
case 20:
                var1 = {};
case 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAllStageInstances';
        var5['key'] = var7;
        var6 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot7;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'StageInstanceStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConnectionOpen(arg1) {
        var1 = arg1;
        var3 = var1.guilds;
        var1 = {};
        _closure1_slot6 = var1;
        var1 = {};
        _closure1_slot7 = var1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = _closure1_slot9;
            var3 = var1.id;
            var2 = var1.stage_instances;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var4 = _closure1_slot9;
        var3 = var1.id;
        var2 = var1.stage_instances;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['GUILD_CREATE'] = var10;
    var10 = function handleGuildDelete(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var4 = _closure1_slot6;
            var3 = var1.id;
            var3 = var4[var3];
            var4 = null;
            if(!(var4 == var3)) { _fun0008_ip = 24; continue _fun0008 }
case 23:
            var3 = {};
case 24:
            var2 = _closure1_slot6;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = global;
            var2 = var1.Object;
            var1 = var2.keys;
            var3 = var1.bind(var2)(var3);
            var2 = var3.forEach;
            var1 = function(arg1) {
                var2 = _closure1_slot7;
                var1 = arg1;
                var1 = delete var2[var1];
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var10;
    var2['STAGE_INSTANCE_CREATE'] = var9;
    var2['STAGE_INSTANCE_UPDATE'] = var9;
    var9 = function handleStageInstanceDelete(arg1) {
        var1 = arg1;
        var1 = var1.instance;
        var4 = _closure1_slot10;
        var3 = var1.guild_id;
        var2 = var1.channel_id;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['STAGE_INSTANCE_DELETE'] = var9;
    var9 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var4 = _closure1_slot10;
        var3 = var1.guild_id;
        var2 = var1.id;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var9;
    var4 = function handleLogout() {
        var1 = {};
        _closure1_slot7 = var1;
        var1 = {};
        _closure1_slot6 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/StageInstanceStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();