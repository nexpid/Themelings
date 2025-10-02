// app/modules/guild_scheduled_events/utils/EntityUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _getLocationFromEvent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg2;
            var1 = _closure1_slot1;
            var3 = var1.EXTERNAL;
            var1 = arg1;
            var3 = var1 === var3;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            var3 = var1 != var2;
case 2:
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'location';
            var3 = var1 in var2;
case 4:
            var1 = null;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var2.location;
case 6:
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
case 0:
            var3 = arg1;
            var5 = var3.entity_type;
            var2 = var3.channel_id;
            var1 = _closure1_slot2;
            var5 = var5 in var1;
            if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = null;
            var5 = var1 != var2;
case 8:
            var1 = undefined;
            if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = _closure1_slot0;
            var4 = var5.getChannel;
            var3 = var3.channel_id;
            var3 = var4.bind(var5)(var3);
            var4 = null;
            var4 = var4 != var3;
            var2 = undefined;
            if(!var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var3;
case 12:
            var1 = var2;
case 10:
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
case 0:
            var3 = arg1;
            var1 = _closure1_slot1;
            var1 = var1.VOICE;
            if(!(var3 !== var1)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = _closure1_slot1;
            var4 = var1.STAGE_INSTANCE;
            var1 = undefined;
            if(!(var3 === var4)) { _fun0003_ip = 16; continue _fun0003 }
case 14:
            var2 = _closure1_slot2;
            var1 = var2[var3];
case 16:
            return var1;
        }
    };
    var3['getChannelTypeFromEntity'] = var2;
    return var1;
})();