// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = function getChannelDetailsButtons(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 1;
            var3 = var3[var7];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.GUILD_DIRECTORY;
            if(!(var3 !== var4)) { _fun0001_ip = 596; continue _fun0001 }
 50:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.DM;
            if(!(var3 !== var4)) { _fun0001_ip = 530; continue _fun0001 }
 86:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var4)) { _fun0001_ip = 530; continue _fun0001 }
 122:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.ANNOUNCEMENT_THREAD;
            if(!(var3 !== var4)) { _fun0001_ip = 412; continue _fun0001 }
 158:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.PUBLIC_THREAD;
            if(!(var3 !== var4)) { _fun0001_ip = 412; continue _fun0001 }
 194:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.PRIVATE_THREAD;
            if(!(var3 !== var4)) { _fun0001_ip = 412; continue _fun0001 }
 230:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.GUILD_FORUM;
            if(!(var3 !== var4)) { _fun0001_ip = 382; continue _fun0001 }
 263:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ChannelTypes;
            var3 = var3.GUILD_MEDIA;
            if(!(var3 !== var4)) { _fun0001_ip = 382; continue _fun0001 }
 296:
            var6 = _closure1_slot3;
            var7 = var6.SEARCH;
            if(var1) { _fun0001_ip = 349; continue _fun0001 }
 309:
            var3 = new Array(4);
            var3[0] = var7;
            var4 = var6.THREADS;
            var3[1] = var4;
            var4 = var6.MUTE;
            var3[2] = var4;
            var4 = var6.SETTINGS;
            var3[3] = var4;
            _fun0001_ip = 380; continue _fun0001;
 349:
            var4 = new Array(3);
            var4[0] = var7;
            var7 = var6.MUTE;
            var4[1] = var7;
            var6 = var6.SETTINGS;
            var4[2] = var6;
            var3 = var4;
 380:
            return var3;
 382:
            var4 = _closure1_slot3;
            var6 = var4.MUTE;
            var3 = new Array(2);
            var3[0] = var6;
            var4 = var4.SETTINGS;
            var3[1] = var4;
            return var3;
 412:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.getCurrentConfig;
            var3 = {};
            var6 = 'getChannelDetailsButtons';
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = var3.enabled;
            var5 = _closure1_slot3;
            if(var3) { _fun0001_ip = 491; continue _fun0001 }
 465:
            var4 = var5.MUTE;
            var3 = new Array(2);
            var3[0] = var4;
            var4 = var5.SETTINGS;
            var3[1] = var4;
            _fun0001_ip = 528; continue _fun0001;
 491:
            var6 = var5.SEARCH;
            var4 = new Array(3);
            var4[0] = var6;
            var6 = var5.MUTE;
            var4[1] = var6;
            var5 = var5.SETTINGS;
            var4[2] = var5;
            var3 = var4;
 528:
            return var3;
 530:
            var3 = _closure1_slot3;
            var4 = var3.SEARCH;
            if(var1) { _fun0001_ip = 563; continue _fun0001 }
 543:
            var1 = new Array(2);
            var1[0] = var4;
            var2 = var3.MUTE;
            var1[1] = var2;
            _fun0001_ip = 594; continue _fun0001;
 563:
            var2 = new Array(3);
            var2[0] = var4;
            var4 = var3.MUTE;
            var2[1] = var4;
            var3 = var3.SETTINGS;
            var2[2] = var3;
            var1 = var2;
 594:
            return var1;
 596:
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