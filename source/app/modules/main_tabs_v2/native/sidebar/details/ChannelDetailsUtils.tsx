// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelDetailsButtonTypes;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getChannelDetailsButtons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[1];
            var6 = undefined;
            if(!(var2 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            var1 = arg1;
            var4 = var1.type;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var7 = 1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.GUILD_DIRECTORY;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.DM;
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.ANNOUNCEMENT_THREAD;
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.PUBLIC_THREAD;
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 10:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.PRIVATE_THREAD;
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 11:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.GUILD_FORUM;
            if(!(var3 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.GUILD_MEDIA;
            if(!(var3 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var3 = _closure1_slot2;
            var5 = var3.SEARCH;
            var4 = new Array(3);
            var4[0] = var5;
            var5 = var3.MUTE;
            var4[1] = var5;
            var3 = var3.SETTINGS;
            var4[2] = var3;
            _fun0001_ip = 15; continue _fun0001;
case 12:
            var5 = _closure1_slot2;
            var6 = var5.MUTE;
            var3 = new Array(2);
            var3[0] = var6;
            var5 = var5.SETTINGS;
            var3[1] = var5;
            var4 = var3;
            _fun0001_ip = 15; continue _fun0001;
case 6:
            var3 = _closure1_slot2;
            var5 = var3.SEARCH;
            var1 = new Array(3);
            var1[0] = var5;
            var5 = var3.MUTE;
            var1[1] = var5;
            var3 = var3.SETTINGS;
            var1[2] = var3;
            var4 = var1;
            _fun0001_ip = 15; continue _fun0001;
case 4:
            var4 = new Array(0);
case 15:
            var1 = var4;
            if(!var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = _closure1_slot2;
                var2 = var1.MUTE;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 16:
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