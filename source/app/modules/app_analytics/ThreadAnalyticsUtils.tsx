// app/modules/app_analytics/ThreadAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_analytics/ThreadAnalyticsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function collectThreadMetadata(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var8 = arguments[1];
            var7 = undefined;
            if(!(var8 === var7)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var8 = false;
 14:
            var5 = null;
            var2 = var5 != var3;
            var1 = null;
            if(!var2) { _fun0001_ip = 353; continue _fun0001 }
 28:
            var9 = _closure1_slot5;
            var6 = var9.has;
            var2 = var3.type;
            var2 = var6.bind(var9)(var2);
            var1 = null;
            if(!var2) { _fun0001_ip = 353; continue _fun0001 }
 58:
            var2 = {};
            var6 = undefined;
            if(!var8) { _fun0001_ip = 95; continue _fun0001 }
 65:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 5;
            var8 = var10[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.getLastRouteChangeSource;
            var6 = var8.bind(var9)();
 95:
            var2['location'] = var6;
            var9 = _closure1_slot3;
            var8 = var9.getMemberCount;
            var6 = var3.id;
            var6 = var8.bind(var9)(var6);
            var2['thread_approximate_member_count'] = var6;
            var9 = _closure1_slot4;
            var8 = var9.getCount;
            var6 = var3.id;
            var6 = var8.bind(var9)(var6);
            var2['thread_approximate_message_count'] = var6;
            var6 = var3.threadMetadata;
            var9 = var5 == var6;
            var8 = undefined;
            if(var9) { _fun0001_ip = 174; continue _fun0001 }
 168:
            var8 = var6.archived;
 174:
            var6 = true;
            var6 = var6 === var8;
            var2['thread_archived'] = var6;
            var6 = var3.threadMetadata;
            var9 = var5 == var6;
            var8 = undefined;
            if(var9) { _fun0001_ip = 208; continue _fun0001 }
 202:
            var8 = var6.locked;
 208:
            var6 = var5 != var8;
            if(!var6) { _fun0001_ip = 218; continue _fun0001 }
 215:
            var6 = var8;
 218:
            var2['thread_locked'] = var6;
            var8 = var3.threadMetadata;
            var9 = var5 == var8;
            var6 = undefined;
            if(var9) { _fun0001_ip = 246; continue _fun0001 }
 240:
            var6 = var8.autoArchiveDuration;
 246:
            var8 = var5 != var6;
            var5 = 0;
            if(!var8) { _fun0001_ip = 258; continue _fun0001 }
 255:
            var5 = var6;
 258:
            var2['thread_auto_archive_duration_minutes'] = var5;
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 6;
            var5 = var8[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.extractTimestamp;
            var5 = var3.id;
            var5 = var6.bind(var7)(var5);
            var2['thread_approximate_creation_date'] = var5;
            var6 = _closure1_slot6;
            var5 = var6.can;
            var4 = _closure1_slot7;
            var4 = var4.SEND_MESSAGES;
            var4 = var5.bind(var6)(var4, var3);
            var2['can_send_message'] = var4;
            var3 = var3.parentChannelThreadType;
            var2['parent_channel_type'] = var3;
            var1 = var2;
 353:
            return var1;
        }
    };
    var3['collectThreadMetadata'] = var2;
    return var1;
})();