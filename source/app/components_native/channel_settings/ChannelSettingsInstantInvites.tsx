// app/components_native/channel_settings/ChannelSettingsInstantInvites.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelSettingsSections;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
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
    var _closure1_slot10 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsInstantInvites.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedChannelSettingsInstantInvites() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot10;
            var6 = undefined;
            var7 = var2.bind(var6)();
            var _closure2_slot0 = var7;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var10 = var2.bottom;
            var5 = _closure1_slot4;
            var2 = var5.useState;
            var8 = var2.bind(var5)(var6);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var6)(var8, var2);
            var14 = 0;
            var15 = var3[var14];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot1 = var2;
            var8 = var5.useCallback;
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
            var12 = var8.bind(var5)(var2, var3);
            var3 = _closure1_slot0;
            var2 = 9;
            var2 = var4[var2];
            var8 = var3.bind(var6)(var2);
            var4 = var8.useStateFromStoresObject;
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getInvites;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var8)(var3, var2);
            var3 = var2.invites;
            var _closure2_slot2 = var3;
            var2 = var2.loading;
            var8 = var5.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = _closure2_slot2;
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
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1['sortedInvites'] = var2;
                var3 = var2.length;
                var2 = new Array(1);
                var2[0] = var3;
                var1['sections'] = var2;
                return var1;
            };
            var3 = var8.bind(var5)(var3, var4);
            var13 = var3.sortedInvites;
            var _closure2_slot3 = var13;
            var16 = var3.sections;
            var8 = var5.useEffect;
            var4 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.setSection;
                var2 = _closure1_slot7;
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
                var4 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot3;
                var5 = arg2;
                var5 = var6[var5];
                var1['invite'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var11 = var4.bind(var5)(var1, var3);
            if(var2) { _fun0001_ip = 463; continue _fun0001 }
 277:
            var1 = var13.length;
            if(!(var14 === var1)) { _fun0001_ip = 463; continue _fun0001 }
 289:
            var4 = _closure1_slot8;
            var8 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 12;
            var1 = var19[var1];
            var3 = var8.bind(var6)(var1);
            var1 = {};
            var5 = 13;
            var5 = var19[var5];
            var5 = var8.bind(var6)(var5);
            var1['lightSource'] = var5;
            var5 = 14;
            var5 = var19[var5];
            var5 = var8.bind(var6)(var5);
            var1['darkSource'] = var5;
            var18 = _closure1_slot0;
            var5 = 15;
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
            _fun0001_ip = 721; continue _fun0001;
 463:
            if(var2) { _fun0001_ip = 579; continue _fun0001 }
 466:
            var2 = null;
            if(!(var2 != var15)) { _fun0001_ip = 579; continue _fun0001 }
 472:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var5 = var7.content;
            var2['style'] = var5;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 18;
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
            _fun0001_ip = 718; continue _fun0001;
 579:
            var5 = _closure1_slot9;
            var4 = _closure1_slot5;
            var3 = {};
            var7 = var7.content;
            var3['style'] = var7;
            var10 = _closure1_slot8;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 16;
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
            if(!var10) { _fun0001_ip = 704; continue _fun0001 }
 658:
            var11 = _closure1_slot8;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 17;
            var9 = var15[var9];
            var10 = var10.bind(var6)(var9);
            var9 = {};
            var13 = var13[var14];
            var9['invite'] = var13;
            var9['onMeasured'] = var12;
            var8 = var11.bind(var6)(var10, var9);
 704:
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 718:
            var1 = var2;
 721:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();