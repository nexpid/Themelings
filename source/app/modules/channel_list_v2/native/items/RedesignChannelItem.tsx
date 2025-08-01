// app/modules/channel_list_v2/native/items/RedesignChannelItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.THREADED_CHANNEL_TYPES;
    var _closure1_slot2 = var7;
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/items/RedesignChannelItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RedesignChannelItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.item;
            var8 = var2.channel;
            var11 = var2.isMuted;
            var7 = var2.subtitle;
            var6 = var2.selected;
            var9 = var1.guild;
            var4 = _closure1_slot2;
            var3 = var4.has;
            var1 = var8.type;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0001_ip = 356; continue _fun0001 }
 64:
            var4 = _closure1_slot3;
            var3 = var4.has;
            var1 = var8.type;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0001_ip = 356; continue _fun0001 }
 89:
            var3 = var8.type;
            var1 = _closure1_slot4;
            var1 = var1.GUILD_VOICE;
            if(!(var3 !== var1)) { _fun0001_ip = 306; continue _fun0001 }
 111:
            var3 = var8.type;
            var1 = _closure1_slot4;
            var1 = var1.GUILD_STAGE_VOICE;
            if(!(var3 !== var1)) { _fun0001_ip = 261; continue _fun0001 }
 133:
            var3 = var8.type;
            var1 = _closure1_slot4;
            var1 = var1.DM;
            if(!(var3 !== var1)) { _fun0001_ip = 216; continue _fun0001 }
 152:
            var3 = var8.type;
            var1 = _closure1_slot4;
            var1 = var1.GROUP_DM;
            if(!(var3 !== var1)) { _fun0001_ip = 216; continue _fun0001 }
 171:
            var5 = _closure1_slot5;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 8;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var1['channel'] = var8;
            var1['selected'] = var6;
            var1 = var5.bind(var4)(var3, var1);
            _fun0001_ip = 259; continue _fun0001;
 216:
            var10 = _closure1_slot5;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 7;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['channel'] = var8;
            var3['selected'] = var6;
            var1 = var10.bind(var5)(var4, var3);
 259:
            _fun0001_ip = 304; continue _fun0001;
 261:
            var10 = _closure1_slot5;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 6;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['channel'] = var8;
            var3['selected'] = var6;
            var1 = var10.bind(var5)(var4, var3);
 304:
            _fun0001_ip = 354; continue _fun0001;
 306:
            var10 = _closure1_slot5;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 5;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['channel'] = var8;
            var3['selected'] = var6;
            var3['subtitle'] = var7;
            var1 = var10.bind(var5)(var4, var3);
 354:
            _fun0001_ip = 453; continue _fun0001;
 356:
            var5 = _closure1_slot5;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['channel'] = var8;
            var2['selected'] = var6;
            var6 = null;
            var10 = var6 != var11;
            if(!var10) { _fun0001_ip = 405; continue _fun0001 }
 402:
            var10 = var11;
 405:
            var2['muted'] = var10;
            var9 = var9.rulesChannelId;
            var8 = var8.id;
            var8 = var9 === var8;
            var2['isRulesChannel'] = var8;
            var8 = var6 != var7;
            var6 = null;
            if(!var8) { _fun0001_ip = 442; continue _fun0001 }
 439:
            var6 = var7;
 442:
            var2['subtitle'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 453:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();