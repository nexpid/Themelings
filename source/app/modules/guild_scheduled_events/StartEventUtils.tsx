// app/modules/guild_scheduled_events/StartEventUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function createStageChannelForEvent() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var5;
    var1 = function _createStageChannelForEvent() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var12 = arg2;
                    var5 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var6 = undefined;
                    if(!(var5 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = new Array(0);
case 4:
                    SaveGenerator(address=30);
case 6:
                    return var6;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var8 = new Array(0);
                    var4 = var8.push;
                    var3 = new Array(0);
                    var11 = 0;
                    var15 = var3;
                    var14 = var5;
                    var13 = 0;
                    var5 = arraySpread(var15, var14, var13);
                    var15 = var4;
                    var14 = var3;
                    var13 = var8;
                    var3 = apply(var15, var14, var13);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var7 = var5.bind(var6)(var3);
                    var5 = var7.createChannel;
                    var3 = {};
                    var9 = arg1;
                    var9 = var9.id;
                    var3['guildId'] = var9;
                    var9 = _closure1_slot9;
                    var9 = var9.GUILD_STAGE_VOICE;
                    var3['type'] = var9;
                    var10 = var12.substring;
                    var9 = 100;
                    var9 = var10.bind(var12)(var11, var9);
                    var3['name'] = var9;
                    var3['permissionOverwrites'] = var8;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=169);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = null;
                    if(!(var5 != var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var7 = var3.status;
                    var5 = 201;
                    if(!(var5 === var7)) { _fun0001_ip = 14; continue _fun0001 }
case 16:
                    var5 = _closure1_slot4;
                    var4 = var3.body;
                    var4 = var5.bind(var6)(var4);
                    return var4;
case 14:
                    var4 = global;
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var15 = "Can't create channel for event";
                    var16 = var5;
                    var4 = new var16[var6](var15, var14);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 12:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var4 = function findOrCreateEventChannel(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = var2.guild_id;
            var6 = var2.channel_id;
            var3 = _closure1_slot6;
            var1 = var3.getGuild;
            var7 = var1.bind(var3)(var5);
            var3 = null;
            if(!(var3 != var7)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var5 = _closure1_slot5;
            var1 = var5.getChannel;
            var6 = var1.bind(var5)(var6);
            if(!(var3 != var6)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var1 = global;
            var5 = var1.Promise;
            var1 = var5.resolve;
            var1 = var1.bind(var5)(var6);
            _fun0002_ip = 21; continue _fun0002;
case 19:
            var6 = _closure1_slot10;
            var5 = var2.name;
            var4 = undefined;
            var2 = arg2;
            var1 = var6.bind(var4)(var7, var5, var2);
case 21:
            return var1;
case 17:
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = function _preStartEventActions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var4 = var5.entity_type;
                    var2 = _closure1_slot7;
                    var2 = var2.STAGE_INSTANCE;
                    if(!(var4 === var2)) { _fun0003_ip = 21; continue _fun0003 }
case 24:
                    var4 = _closure1_slot12;
                    var6 = undefined;
                    var2 = arg2;
                    var2 = var4.bind(var6)(var5, var2);
                    SaveGenerator(address=52);
case 25:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var5 = var4.bind(var6)(var3);
                    var3 = null;
                    var4 = var3 != var2;
                    var3 = 'could not find or create channel';
                    var3 = var5.bind(var6)(var4, var3);
case 21:
                    var3 = undefined;
                    return var3;
case 27:
                    return var2;
case 22:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _setEventAsActive() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    var10 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 3:
                    var4 = undefined;
                    if(!(var10 === var4)) { _fun0004_ip = 30; continue _fun0004 }
case 5:
                    var10 = false;
case 30:
                    SaveGenerator(address=28);
case 4:
                    return var4;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var9 = var3.channel_id;
                    var6 = var3.entity_type;
                    var8 = var3.name;
                    var7 = var3.id;
                    var11 = var3.guild_id;
                    var5 = _closure1_slot7;
                    var5 = var5.STAGE_INSTANCE;
                    if(!(var5 !== var6)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var5 = _closure1_slot7;
                    var5 = var5.VOICE;
                    if(!(var5 !== var6)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var5 = _closure1_slot7;
                    var5 = var5.EXTERNAL;
                    if(!(var5 === var6)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var6 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var5 = 9;
                    var5 = var12[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.startEvent;
                    var5 = var5.bind(var6)(var7, var11);
                    SaveGenerator(address=150);
case 39:
                    return var5;
case 40:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0004_ip = 37; continue _fun0004 }
case 41:
                    return var5;
case 35:
                    var6 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var5 = 7;
                    var5 = var12[var5];
                    var14 = var6.bind(var4)(var5);
                    var5 = null;
                    var13 = var5 != var9;
                    var5 = 'channel_id is required';
                    var5 = var14.bind(var4)(var13, var5);
                    var5 = 9;
                    var5 = var12[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.startEvent;
                    var5 = var5.bind(var6)(var7, var11);
                    SaveGenerator(address=228);
case 42:
                    return var5;
case 43:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0004_ip = 37; continue _fun0004 }
case 44:
                    return var5;
case 33:
                    var6 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 7;
                    var5 = var11[var5];
                    var12 = var6.bind(var4)(var5);
                    var5 = null;
                    var6 = var5 != var9;
                    var5 = 'channel_id is required';
                    var5 = var12.bind(var4)(var6, var5);
                    var6 = _closure1_slot0;
                    var5 = 8;
                    var5 = var11[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.startStageInstance;
                    var3 = _closure1_slot8;
                    var17 = var3.GUILD_ONLY;
                    var20 = var6;
                    var19 = var9;
                    var18 = var8;
                    var16 = var10;
                    var15 = var7;
                    var3 = var20[var5](var19, var18, var17, var16, var15, var14);
                    SaveGenerator(address=330);
case 45:
                    return var3;
case 46:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 47; continue _fun0004 }
case 37:
                    return var4;
case 47:
                    return var3;
case 31:
                    return var2;
case 29:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.createChannelRecordFromServer;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.GuildScheduledEventEntityTypes;
    var _closure1_slot7 = var9;
    var6 = var6.GuildScheduledEventPrivacyLevel;
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.ChannelTypes;
    var _closure1_slot9 = var6;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_scheduled_events/StartEventUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['createStageChannelForEvent'] = var5;
    var3['findOrCreateEventChannel'] = var4;
    var4 = function preStartEventActions() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['preStartEventActions'] = var4;
    var2 = function setEventAsActive() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['setEventAsActive'] = var2;
    return var1;
})();