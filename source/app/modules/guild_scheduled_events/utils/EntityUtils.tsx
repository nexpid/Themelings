// app/modules/guild_scheduled_events/utils/EntityUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _getLocationFromEvent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var1 = _closure1_slot1;
            var3 = var1.EXTERNAL;
            var1 = arg1;
            var3 = var1 === var3;
            if(!var3) { _fun0001_ip = 32; continue _fun0001 }
 26:
            var1 = null;
            var3 = var1 != var2;
 32:
            if(!var3) { _fun0001_ip = 43; continue _fun0001 }
 35:
            var1 = 'location';
            var3 = var1 in var2;
 43:
            var1 = null;
            if(!var3) { _fun0001_ip = 53; continue _fun0001 }
 48:
            var1 = var2.location;
 53:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot1 = var7;
    var4 = var4.EntityChannelTypes;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/utils/EntityUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getChannelFromEvent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var5 = var3.entity_type;
            var2 = var3.channel_id;
            var1 = _closure1_slot2;
            var5 = var5 in var1;
            if(!var5) { _fun0002_ip = 34; continue _fun0002 }
 28:
            var1 = null;
            var5 = var1 != var2;
 34:
            var1 = undefined;
            if(!var5) { _fun0002_ip = 75; continue _fun0002 }
 39:
            var5 = _closure1_slot0;
            var4 = var5.getChannel;
            var3 = var3.channel_id;
            var3 = var4.bind(var5)(var3);
            var4 = null;
            var4 = var4 != var3;
            var2 = undefined;
            if(!var4) { _fun0002_ip = 72; continue _fun0002 }
 69:
            var2 = var3;
 72:
            var1 = var2;
 75:
            return var1;
        }
    };
    var3['getChannelFromEvent'] = var4;
    var4 = function getLocationFromEvent(arg1) {
        var1 = arg1;
        var4 = _closure1_slot3;
        var3 = var1.entity_type;
        var2 = var1.entity_metadata;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['getLocationFromEvent'] = var4;
    var4 = function getLocationFromEventData(arg1) {
        var1 = arg1;
        var4 = _closure1_slot3;
        var3 = var1.entityType;
        var2 = var1.entityMetadata;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['getLocationFromEventData'] = var4;
    var2 = function getChannelTypeFromEntity(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot1;
            var1 = var1.VOICE;
            if(!(var3 !== var1)) { _fun0003_ip = 36; continue _fun0003 }
 20:
            var1 = _closure1_slot1;
            var4 = var1.STAGE_INSTANCE;
            var1 = undefined;
            if(!(var3 === var4)) { _fun0003_ip = 44; continue _fun0003 }
 36:
            var2 = _closure1_slot2;
            var1 = var2[var3];
 44:
            return var1;
        }
    };
    var3['getChannelTypeFromEntity'] = var2;
    return var1;
})();