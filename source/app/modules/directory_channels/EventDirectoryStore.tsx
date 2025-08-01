// app/modules/directory_channels/EventDirectoryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.scheduledEventSort;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.DirectoryEntryTypes;
    var _closure1_slot9 = var2;
    var2 = false;
    var _closure1_slot10 = var2;
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = function eventDirectoryEntryFromServer(arg1) {
        var2 = arg1;
        var5 = _closure1_slot13;
        var1 = var2.guild_scheduled_event;
        var4 = var1.id;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var6 = var6[var1];
        var1 = undefined;
        var7 = var7.bind(var1)(var6);
        var6 = var7.fromDirectoryGuild;
        var1 = var2.guild_scheduled_event;
        var1 = var1.guild;
        var1 = var6.bind(var7)(var1);
        var5[var4] = var1;
        var5 = _closure1_slot12;
        var1 = var2.guild_scheduled_event;
        var4 = var1.id;
        var1 = var2.guild_scheduled_event;
        var5[var4] = var1;
        var1 = {};
        var4 = var2.directory_channel_id;
        var1['channelId'] = var4;
        var4 = var2.entity_id;
        var1['scheduledEventId'] = var4;
        var3 = _closure1_slot9;
        var3 = var3.GUILD_SCHEDULED_EVENT;
        var1['type'] = var3;
        var3 = var2.author_id;
        var1['authorId'] = var3;
        var2 = var2.created_at;
        var1['createdAt'] = var2;
        return var1;
    };
    var _closure1_slot14 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function EventDirectoryStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'isFetching';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getEventDirectoryEntries';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0003_ip = 13; continue _fun0003 }
 9:
                var1 = undefined;
                return var1;
 13:
                var1 = _closure1_slot11;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCachedGuildByEventId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = undefined;
                if(!var3) { _fun0004_ip = 28; continue _fun0004 }
 25:
                var1 = var2;
 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCachedGuildScheduledEventById';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure1_slot12;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = undefined;
                if(!var3) { _fun0005_ip = 28; continue _fun0005 }
 25:
                var1 = var2;
 28:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'EventDirectoryStore';
    var8['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleFetchStart() {
        var1 = true;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['EVENT_DIRECTORY_FETCH_START'] = var9;
    var9 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var13 = var1.entries;
        var1 = false;
        _closure1_slot10 = var1;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 8;
        var7 = var6[var3];
        var1 = undefined;
        var10 = var5.bind(var1)(var7);
        var9 = var10.sortBy;
        var8 = new Array(0);
        var12 = 0;
        var14 = var8;
        var7 = arraySpread(var14, var13, var12);
        var7 = new Array(1);
        var11 = function(arg1) {
            var3 = _closure1_slot8;
            var1 = arg1;
            var2 = var1.guild_scheduled_event;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var7[0] = var11;
        var7 = var9.bind(var10)(var8, var7);
        var3 = var6[var3];
        var6 = var5.bind(var1)(var3);
        var5 = var6.map;
        var3 = _closure1_slot14;
        var3 = var5.bind(var6)(var7, var3);
        var2 = _closure1_slot11;
        var2[var4] = var3;
        return var1;
    };
    var2['EVENT_DIRECTORY_FETCH_SUCCESS'] = var9;
    var4 = function handleFetchFailure() {
        var1 = false;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['EVENT_DIRECTORY_FETCH_FAILURE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/EventDirectoryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();