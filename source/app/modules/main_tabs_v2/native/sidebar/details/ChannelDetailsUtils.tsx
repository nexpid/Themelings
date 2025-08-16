// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelDetailsButtonTypes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getChannelDetailsButtons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 1;
            var2 = var2[var6];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GUILD_DIRECTORY;
            if(!(var2 !== var3)) { _fun0001_ip = 521; continue _fun0001 }
 47:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.DM;
            if(!(var2 !== var3)) { _fun0001_ip = 481; continue _fun0001 }
 83:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GROUP_DM;
            if(!(var2 !== var3)) { _fun0001_ip = 481; continue _fun0001 }
 119:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.ANNOUNCEMENT_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 363; continue _fun0001 }
 155:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.PUBLIC_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 363; continue _fun0001 }
 191:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.PRIVATE_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 363; continue _fun0001 }
 227:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var3)) { _fun0001_ip = 333; continue _fun0001 }
 260:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.ChannelTypes;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var3)) { _fun0001_ip = 333; continue _fun0001 }
 293:
            var3 = _closure1_slot3;
            var5 = var3.SEARCH;
            var2 = new Array(3);
            var2[0] = var5;
            var5 = var3.MUTE;
            var2[1] = var5;
            var3 = var3.SETTINGS;
            var2[2] = var3;
            return var2;
 333:
            var3 = _closure1_slot3;
            var5 = var3.MUTE;
            var2 = new Array(2);
            var2[0] = var5;
            var3 = var3.SETTINGS;
            var2[1] = var3;
            return var2;
 363:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 2;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getCurrentConfig;
            var2 = {};
            var5 = 'getChannelDetailsButtons';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            var4 = _closure1_slot3;
            if(var2) { _fun0001_ip = 442; continue _fun0001 }
 416:
            var3 = var4.MUTE;
            var2 = new Array(2);
            var2[0] = var3;
            var3 = var4.SETTINGS;
            var2[1] = var3;
            _fun0001_ip = 479; continue _fun0001;
 442:
            var5 = var4.SEARCH;
            var3 = new Array(3);
            var3[0] = var5;
            var5 = var4.MUTE;
            var3[1] = var5;
            var4 = var4.SETTINGS;
            var3[2] = var4;
            var2 = var3;
 479:
            return var2;
 481:
            var2 = _closure1_slot3;
            var3 = var2.SEARCH;
            var1 = new Array(3);
            var1[0] = var3;
            var3 = var2.MUTE;
            var1[1] = var3;
            var2 = var2.SETTINGS;
            var1[2] = var2;
            return var1;
 521:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['getChannelDetailsButtons'] = var4;
    var2 = function navigateToChannelDetailsScreen(arg1, arg2, arg3, arg4) {
        var4 = arg1;
        var3 = var4.navigate;
        var2 = {};
        var1 = arg2;
        var2['screen'] = var1;
        var1 = arg3;
        var2['channelId'] = var1;
        var1 = arg4;
        var2['source'] = var1;
        var1 = 'sidebar';
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['navigateToChannelDetailsScreen'] = var2;
    return var1;
})();