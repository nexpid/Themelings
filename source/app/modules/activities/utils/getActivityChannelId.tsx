// app/modules/activities/utils/getActivityChannelId.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.isTextChannel;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getActivityChannelId.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getActivityChannelId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channelId;
            var7 = var1.userId;
            var8 = var1.activity;
            var2 = _closure1_slot1;
            var1 = var2.getChannel;
            var5 = var1.bind(var2)(var6);
            var3 = null;
            var2 = var3 == var8;
            var1 = undefined;
            var9 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var8.session_id;
case 2:
            var2 = var6;
            if(!(var3 != var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var3 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot0;
            var5 = var5.type;
            var5 = var9.bind(var1)(var5);
            var2 = var6;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var6 = _closure1_slot2;
            var5 = var6.getVoiceStateForSession;
            var9 = var3 == var8;
            var4 = undefined;
            if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var8.session_id;
case 8:
            var5 = var5.bind(var6)(var7, var4);
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var5.channelId;
case 10:
            var2 = var4;
case 4:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();