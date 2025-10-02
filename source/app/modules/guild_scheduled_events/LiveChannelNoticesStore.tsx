// app/modules/guild_scheduled_events/LiveChannelNoticesStore.tsx
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var2 = var2.GuildScheduledEventStatus;
    var _closure1_slot5 = var2;
    var2 = {};
    var8 = new Array(0);
    var2['hiddenEventsAndStages'] = var8;
    var _closure1_slot6 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function LiveChannelNoticesStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var4 = null;
                var1 = var4 != var2;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var3 = var2.hiddenEventsAndStages;
                var1 = var4 != var3;
case 9:
                if(!var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                _closure1_slot6 = var2;
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'isLiveChannelNoticeHidden';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var7 = var1.eventId;
                var8 = var1.stageId;
                var2 = null;
                var3 = var2 == var8;
                if(var3) { _fun0004_ip = 5; continue _fun0004 }
case 13:
                var1 = _closure1_slot6;
                var5 = var1.hiddenEventsAndStages;
                var4 = var5.includes;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var1 = 'stage-';
                var1 = var6.bind(var1)(var8);
                var1 = var4.bind(var5)(var1);
                var3 = !var1;
case 5:
                var1 = !var3;
                if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = var2 != var7;
                if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var3 = _closure1_slot6;
                var5 = var3.hiddenEventsAndStages;
                var4 = var5.includes;
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var3 = 'event-';
                var3 = var6.bind(var3)(var7);
                var2 = var4.bind(var5)(var3);
case 16:
                var1 = var2;
case 14:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'LiveChannelNoticesStore';
    var8['displayName'] = var2;
    var2 = 'liveChannelNotices_v2';
    var8['persistKey'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleHideNotice(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.eventId;
            var6 = var1.stageId;
            var1 = null;
            if(!(var1 == var5)) { _fun0005_ip = 5; continue _fun0005 }
case 18:
            if(!(var1 != var6)) { _fun0005_ip = 19; continue _fun0005 }
case 12:
            var1 = _closure1_slot6;
            var3 = var1.hiddenEventsAndStages;
            var2 = var3.push;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'stage-';
            var1 = var4.bind(var1)(var6);
            var1 = var2.bind(var3)(var1);
            _fun0005_ip = 19; continue _fun0005;
case 5:
            var1 = _closure1_slot6;
            var3 = var1.hiddenEventsAndStages;
            var2 = var3.push;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'event-';
            var1 = var4.bind(var1)(var5);
            var1 = var2.bind(var3)(var1);
case 19:
            var1 = undefined;
            return var1;
        }
    };
    var2['LIVE_CHANNEL_NOTICE_HIDE'] = var9;
    var9 = function handleEventUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var5 = var2.guildScheduledEvent;
            var4 = var5.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'event-';
            var6 = var3.bind(var2)(var4);
            var _closure2_slot0 = var6;
            var3 = _closure1_slot6;
            var4 = var3.hiddenEventsAndStages;
            var3 = var4.includes;
            var3 = var3.bind(var4)(var6);
            var3 = !var3;
            if(var3) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var6 = var5.status;
            var4 = _closure1_slot5;
            var4 = var4.CANCELED;
            var4 = var6 !== var4;
            if(!var4) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var6 = var5.status;
            var5 = _closure1_slot5;
            var5 = var5.COMPLETED;
            var4 = var6 !== var5;
case 22:
            var3 = var4;
case 20:
            if(var3) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var2 = _closure1_slot6;
            var4 = var2.hiddenEventsAndStages;
            var3 = var4.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['hiddenEventsAndStages'] = var1;
case 24:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_SCHEDULED_EVENT_UPDATE'] = var9;
    var9 = function handleEventDelete(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var2 = var2.guildScheduledEvent;
            var4 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'event-';
            var5 = var3.bind(var2)(var4);
            var _closure2_slot0 = var5;
            var3 = _closure1_slot6;
            var4 = var3.hiddenEventsAndStages;
            var3 = var4.includes;
            var3 = var3.bind(var4)(var5);
            if(!var3) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var2 = _closure1_slot6;
            var4 = var2.hiddenEventsAndStages;
            var3 = var4.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['hiddenEventsAndStages'] = var1;
case 26:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_SCHEDULED_EVENT_DELETE'] = var9;
    var4 = function handleStageUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var2 = var2.instance;
            var4 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'stage-';
            var5 = var3.bind(var2)(var4);
            var _closure2_slot0 = var5;
            var3 = _closure1_slot6;
            var4 = var3.hiddenEventsAndStages;
            var3 = var4.includes;
            var3 = var3.bind(var4)(var5);
            if(!var3) { _fun0008_ip = 26; continue _fun0008 }
case 27:
            var2 = _closure1_slot6;
            var4 = var2.hiddenEventsAndStages;
            var3 = var4.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var2['hiddenEventsAndStages'] = var1;
case 26:
            var1 = undefined;
            return var1;
        }
    };
    var2['STAGE_INSTANCE_DELETE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/LiveChannelNoticesStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();