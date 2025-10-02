// app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var5 = function getLayoutStyles(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = arguments[1];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var6 = 0;
            var4 = var4[var6];
            var4 = var7.bind(var3)(var4);
            var4 = var4.ChannelListLayoutTypes;
            var4 = var4.COZY_DRAWER;
            if(!(var4 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var6];
            var4 = var7.bind(var3)(var4);
            var4 = var4.ChannelListLayoutTypes;
            var4 = var4.COZY_DRAWER_SMOL;
            if(!(var4 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var6];
            var4 = var7.bind(var3)(var4);
            var4 = var4.ChannelListLayoutTypes;
            var4 = var4.COMPACT;
            if(!(var4 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var6];
            var4 = var7.bind(var3)(var4);
            var4 = var4.ChannelListLayoutTypes;
            var4 = var4.MINIMAL;
            if(!(var4 !== var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var6];
            var4 = var5.bind(var3)(var4);
            var4 = var4.ChannelListLayoutTypes;
            var4 = var4.COZY;
case 10:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 3;
            var4 = var6[var4];
            var5 = var5.bind(var3)(var4);
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var5.CHANNEL_LIST_STYLES_COZY;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var4 = var5.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD;
case 14:
            return var4;
case 8:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var3)(var4);
            if(var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var4.CHANNEL_LIST_STYLES_COMPACT;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var2 = var4.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD;
case 17:
            return var2;
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 1;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
            return var2;
case 4:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.CHANNEL_LIST_STYLES_COZY_DRAWER;
            return var1;
        }
    };
    var _closure1_slot2 = var5;
    var4 = function isLayoutCompact(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.ChannelListLayoutTypes;
        var2 = var1.COMPACT;
        var1 = arg1;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 5;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getLayoutStyles'] = var5;
    var5 = function makeSizeStyle(arg1) {
        var2 = arg1;
        var1 = {};
        var1['width'] = var2;
        var1['height'] = var2;
        return var1;
    };
    var3['makeSizeStyle'] = var5;
    var3['isLayoutCompact'] = var4;
    var4 = function isLayoutCozy(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 0;
            var1 = var1[var6];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.ChannelListLayoutTypes;
            var1 = var1.COZY;
            var1 = var3 === var1;
            if(var1) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var6];
            var4 = var7.bind(var5)(var4);
            var4 = var4.ChannelListLayoutTypes;
            var4 = var4.COZY_DRAWER;
            var1 = var3 === var4;
case 18:
            if(var1) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ChannelListLayoutTypes;
            var2 = var2.COZY_DRAWER_SMOL;
            var1 = var3 === var2;
case 20:
            return var1;
        }
    };
    var3['isLayoutCozy'] = var4;
    var4 = function useMessagesTabLayout(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var2 = var1.ChannelListLayoutSetting;
            var1 = var2.useSetting;
            var4 = var1.bind(var2)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 0;
            var1 = var1[var6];
            var1 = var2.bind(var5)(var1);
            var2 = var1.ChannelListLayoutTypes;
            var1 = arg1;
            if(var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = var2.COMPACT;
            if(!(var4 !== var1)) { _fun0003_ip = 24; continue _fun0003 }
case 21:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var4.bind(var5)(var1);
            var1 = var1.ChannelListLayoutTypes;
            var1 = var1.COZY;
            _fun0003_ip = 25; continue _fun0003;
case 24:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.ChannelListLayoutTypes;
            var1 = var3.COMPACT;
case 25:
            _fun0003_ip = 26; continue _fun0003;
case 22:
            var1 = var2.COZY_DRAWER_SMOL;
case 26:
            return var1;
        }
    };
    var3['useMessagesTabLayout'] = var4;
    var2 = function getScaledChannelRowHeight(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg2;
            var1 = arguments[2];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var1 = false;
case 2:
            var3 = _closure1_slot2;
            var7 = var3.bind(var4)(var5);
            var3 = global;
            var9 = var3.Math;
            var8 = var9.max;
            var11 = var3.Math;
            var10 = var11.max;
            var6 = arg1;
            var3 = 1;
            var6 = var10.bind(var11)(var6, var3);
            var3 = var7.channelName;
            var10 = var3.height;
            var3 = var7.messagePreview;
            var3 = var3.margin;
            var11 = var3.marginTop;
            var3 = var7.messagePreview;
            var3 = var3.height;
            var3 = var11 + var3;
            var3 = var10 + var3;
            var6 = var6 * var3;
            var3 = var7.icon;
            var3 = var3.wrapper;
            var3 = var3.size;
            var8 = var8.bind(var9)(var6, var3);
            var6 = var7.container;
            if(var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var3 = var6.padding;
            var3 = var3.paddingVertical;
            _fun0004_ip = 29; continue _fun0004;
case 27:
            var6 = var6.paddingThread;
            var3 = var6.paddingVertical;
case 29:
            var6 = 2;
            var3 = var6 * var3;
            var3 = var8 + var3;
            var7 = var7.layout;
            if(var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var1 = var7.margin;
            var1 = var1.marginVertical;
            _fun0004_ip = 32; continue _fun0004;
case 30:
            var7 = var7.marginThread;
            var1 = var7.marginVertical;
case 32:
            var1 = var6 * var1;
            var2 = _closure1_slot3;
            var4 = var2.bind(var4)(var5);
            var2 = 0;
            if(!var4) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var2 = 4;
case 33:
            var1 = var3 + var1;
            var1 = var1 + var2;
            return var1;
        }
    };
    var3['getScaledChannelRowHeight'] = var2;
    return var1;
})();