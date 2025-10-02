// app/modules/activities/utils/isVoiceEmbeddedActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isVoiceEmbeddedActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isVoiceEmbeddedActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[1];
            var2 = arguments[2];
            var9 = undefined;
            if(!(var4 === var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
case 2:
            if(!(var2 === var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot4;
case 4:
            var3 = var4.getChannel;
            var1 = arg1;
            var7 = var3.bind(var4)(var1);
            var1 = var2.getVoiceChannelId;
            var8 = var1.bind(var2)();
            var6 = null;
            var1 = var6 != var7;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var7.type;
            var4 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 4;
            var2 = var10[var2];
            var2 = var4.bind(var9)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GUILD_VOICE;
            var2 = var3 === var2;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var7.isPrivate;
            var3 = var3.bind(var7)();
            var4 = !var3;
            var3 = !var4;
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var7.id;
            var4 = var4 === var8;
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = _closure1_slot5;
            var8 = var9.getVoiceStatesForChannel;
            var7 = var7.id;
            var7 = var8.bind(var9)(var7);
            var8 = _closure1_slot2;
            var5 = var8.getId;
            var5 = var5.bind(var8)();
            var5 = var7[var5];
            var4 = var6 != var5;
case 12:
            var3 = var4;
case 10:
            var2 = var3;
case 8:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();