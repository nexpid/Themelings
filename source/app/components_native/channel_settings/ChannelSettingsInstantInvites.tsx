// app/components_native/channel_settings/ChannelSettingsInstantInvites.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelSettingsSections;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var13;
    var9['flex'] = var12;
    var4['content'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['height'] = var10;
    var4['gap'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsInstantInvites.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedChannelSettingsInstantInvites() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot11;
            var6 = undefined;
            var7 = var2.bind(var6)();
            var _closure2_slot0 = var7;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var10 = var2.bottom;
            var5 = _closure1_slot4;
            var2 = var5.useState;
            var4 = var2.bind(var5)(var6);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var6)(var4, var2);
            var14 = 0;
            var15 = var3[var14];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot1 = var2;
            var4 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function(arg1) {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var1.gap;
                var2 = var1.height;
                var1 = arg1;
                var2 = var1 + var2;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var4.bind(var5)(var2, var3);
            var4 = _closure1_slot0;
            var3 = 10;
            var2 = var8[var3];
            var17 = var4.bind(var6)(var2);
            var16 = var17.useStateFromStores;
            var2 = _closure1_slot6;
            var13 = new Array(1);
            var13[0] = var2;
            var11 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getChannel;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var16.bind(var17)(var13, var11);
            var _closure2_slot2 = var11;
            var11 = var8[var3];
            var16 = var4.bind(var6)(var11);
            var13 = var16.useStateFromStoresObject;
            var11 = new Array(1);
            var11[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var13.bind(var16)(var11, var2);
            var11 = var2.invites;
            var _closure2_slot3 = var11;
            var2 = var2.loading;
            var16 = var5.useMemo;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = function() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = _closure2_slot3;
                var3 = var2.bind(var3)(var1);
                var2 = var3.sort;
                var1 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.inviter;
                        var4 = null;
                        var5 = var4 == var2;
                        var3 = undefined;
                        if(var5) { _fun0002_ip = 25; continue _fun0002 }
 20:
                        var3 = var2.username;
 25:
                        var6 = var4 != var3;
                        var2 = '';
                        var5 = var2;
                        if(!var6) { _fun0002_ip = 42; continue _fun0002 }
 39:
                        var5 = var3;
 42:
                        var3 = var5.toLowerCase;
                        var3 = var3.bind(var5)();
                        var5 = arg2;
                        var5 = var5.inviter;
                        var6 = var4 == var5;
                        var1 = undefined;
                        if(var6) { _fun0002_ip = 75; continue _fun0002 }
 70:
                        var1 = var5.username;
 75:
                        var4 = var4 != var1;
                        if(!var4) { _fun0002_ip = 85; continue _fun0002 }
 82:
                        var2 = var1;
 85:
                        var1 = var2.toLowerCase;
                        var2 = var1.bind(var2)();
                        var1 = var3.localeCompare;
                        var1 = var1.bind(var3)(var2);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var16.bind(var5)(var11, var13);
            var _closure2_slot4 = var11;
            var3 = var8[var3];
            var13 = var4.bind(var6)(var3);
            var8 = var13.useStateFromStoresArray;
            var3 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 19; continue _fun0003 }
 13:
                    var1 = new Array(0);
                    _fun0003_ip = 65; continue _fun0003;
 19:
                    var4 = _closure1_slot7;
                    var3 = var4.getSortedLinkedChannelsForGuild;
                    var2 = _closure2_slot2;
                    var2 = var2.guild_id;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot2;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 65:
                    return var1;
                }
            };
            var3 = var8.bind(var13)(var4, var3);
            var _closure2_slot5 = var3;
            var8 = var5.useMemo;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var3;
            var3 = function() {
                var5 = _closure2_slot4;
                var3 = var5.map;
                var1 = function(arg1) {
                    var1 = {};
                    var2 = 'invite';
                    var1['type'] = var2;
                    var2 = arg1;
                    var1['data'] = var2;
                    return var1;
                };
                var7 = var3.bind(var5)(var1);
                var1 = new Array(0);
                var6 = 0;
                var8 = var1;
                var6 = arraySpread(var8, var7, var6);
                var5 = _closure2_slot5;
                var4 = var5.map;
                var2 = function(arg1) {
                    var1 = {};
                    var2 = 'channel';
                    var1['type'] = var2;
                    var2 = arg1;
                    var1['data'] = var2;
                    return var1;
                };
                var7 = var4.bind(var5)(var2);
                var8 = var1;
                var2 = arraySpread(var8, var7, var6);
                return var1;
            };
            var13 = var8.bind(var5)(var3, var4);
            var _closure2_slot6 = var13;
            var3 = var13.length;
            var16 = new Array(1);
            var16[0] = var3;
            var8 = var5.useEffect;
            var4 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.setSection;
                var2 = _closure1_slot8;
                var2 = var2.INSTANT_INVITES;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var8.bind(var5)(var4, var3);
            var4 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var13;
            var1 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot6;
                    var1 = arg2;
                    var6 = var2[var1];
                    var2 = var6.type;
                    var1 = 'invite';
                    if(!(var1 !== var2)) { _fun0004_ip = 81; continue _fun0004 }
 27:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.LinkedChannelInvite;
                    var1 = {};
                    var5 = var6.data;
                    var1['channel'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    _fun0004_ip = 128; continue _fun0004;
 81:
                    var5 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = var6.data;
                    var2['invite'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 128:
                    return var1;
                }
            };
            var11 = var4.bind(var5)(var1, var3);
            if(var2) { _fun0001_ip = 581; continue _fun0001 }
 395:
            var1 = var13.length;
            if(!(var14 === var1)) { _fun0001_ip = 581; continue _fun0001 }
 407:
            var4 = _closure1_slot9;
            var8 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 13;
            var1 = var19[var1];
            var3 = var8.bind(var6)(var1);
            var1 = {};
            var5 = 14;
            var5 = var19[var5];
            var5 = var8.bind(var6)(var5);
            var1['lightSource'] = var5;
            var5 = 15;
            var5 = var19[var5];
            var5 = var8.bind(var6)(var5);
            var1['darkSource'] = var5;
            var18 = _closure1_slot0;
            var5 = 16;
            var8 = var19[var5];
            var8 = var18.bind(var6)(var8);
            var20 = var8.intl;
            var17 = var20.string;
            var8 = var19[var5];
            var8 = var18.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.+nLJkZ;
            var8 = var17.bind(var20)(var8);
            var1['title'] = var8;
            var8 = var19[var5];
            var8 = var18.bind(var6)(var8);
            var17 = var8.intl;
            var8 = var17.string;
            var5 = var19[var5];
            var5 = var18.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.F53CAQ;
            var5 = var8.bind(var17)(var5);
            var1['body'] = var5;
            var1 = var4.bind(var6)(var3, var1);
            _fun0001_ip = 838; continue _fun0001;
 581:
            if(var2) { _fun0001_ip = 697; continue _fun0001 }
 584:
            var2 = null;
            if(!(var2 != var15)) { _fun0001_ip = 697; continue _fun0001 }
 590:
            var4 = _closure1_slot9;
            var3 = _closure1_slot5;
            var2 = {};
            var5 = var7.content;
            var2['style'] = var5;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 19;
            var5 = var17[var5];
            var8 = var8.bind(var6)(var5);
            var5 = {};
            var5['sections'] = var16;
            var16 = 'windowSize';
            var5['estimatedListSize'] = var16;
            var5['itemSize'] = var15;
            var5['renderItem'] = var11;
            var11 = var7.gap;
            var11 = var11.height;
            var5['insetStart'] = var11;
            var5['insetEnd'] = var10;
            var5 = var4.bind(var6)(var8, var5);
            var2['children'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 835; continue _fun0001;
 697:
            var5 = _closure1_slot10;
            var4 = _closure1_slot5;
            var3 = {};
            var7 = var7.content;
            var3['style'] = var7;
            var10 = _closure1_slot9;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 17;
            var7 = var11[var7];
            var7 = var8.bind(var6)(var7);
            var8 = var7.SceneLoadingIndicator;
            var7 = {};
            var8 = var10.bind(var6)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var13.length;
            var10 = var8 > var14;
            var8 = null;
            if(!var10) { _fun0001_ip = 821; continue _fun0001 }
 776:
            var11 = _closure1_slot9;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 18;
            var9 = var15[var9];
            var10 = var10.bind(var6)(var9);
            var9 = {};
            var13 = var13[var14];
            var9['item'] = var13;
            var9['onMeasured'] = var12;
            var8 = var11.bind(var6)(var10, var9);
 821:
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 835:
            var1 = var2;
 838:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();