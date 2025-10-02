// app/modules/autocompleter/createAutocompleterResultForChannelId.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AutocompleterResultTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/autocompleter/createAutocompleterResultForChannelId.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createAutocompleterResultForChannelId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[1];
            var5 = arguments[2];
            var4 = arguments[3];
            var8 = undefined;
            if(!(var3 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot2;
case 2:
            if(!(var5 === var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot4;
case 4:
            if(!(var4 === var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot3;
case 6:
            var2 = var3.getChannel;
            var1 = arg1;
            var7 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 5;
            var2 = var9[var2];
            var3 = var3.bind(var8)(var2);
            var2 = var3.computeChannelName;
            var4 = var2.bind(var3)(var7, var5, var4);
            var3 = var7.type;
            var2 = _closure1_slot6;
            var2 = var2.DM;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot6;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot6;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot6;
            var2 = var2.GUILD_STAGE_VOICE;
            if(!(var2 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 16:
            var2 = {};
            var3 = _closure1_slot5;
            var3 = var3.TEXT_CHANNEL;
            var2['type'] = var3;
            var2['record'] = var7;
            var3 = 0;
            var2['score'] = var3;
            var2['comparator'] = var4;
            return var2;
case 14:
            var2 = {};
            var3 = _closure1_slot5;
            var3 = var3.VOICE_CHANNEL;
            var2['type'] = var3;
            var2['record'] = var7;
            var3 = 0;
            var2['score'] = var3;
            var2['comparator'] = var4;
            return var2;
case 12:
            var2 = {};
            var3 = _closure1_slot5;
            var3 = var3.GROUP_DM;
            var2['type'] = var3;
            var2['record'] = var7;
            var3 = 0;
            var2['score'] = var3;
            var2['comparator'] = var4;
            return var2;
case 10:
            var3 = var5.getUser;
            var2 = var7.getRecipientId;
            var2 = var2.bind(var7)();
            var5 = var3.bind(var5)(var2);
            var3 = var1 == var5;
            var2 = null;
            if(var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var3 = {};
            var6 = _closure1_slot5;
            var6 = var6.USER;
            var3['type'] = var6;
            var3['record'] = var5;
            var5 = 0;
            var3['score'] = var5;
            var3['comparator'] = var4;
            var2 = var3;
case 17:
            return var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();