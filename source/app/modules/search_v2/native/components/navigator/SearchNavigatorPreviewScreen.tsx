// app/modules/search_v2/native/components/navigator/SearchNavigatorPreviewScreen.tsx
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchTypes;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/native/components/navigator/SearchNavigatorPreviewScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SearchNavigatorPreviewScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot8;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var3 = var5.bind(var4)(var1);
            var1 = var3.useNavigation;
            var3 = var1.bind(var3)();
            var _closure2_slot0 = var3;
            var1 = 6;
            var1 = var9[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.useRoute;
            var5 = var1.bind(var5)();
            var1 = var5.params;
            var10 = var1.channelId;
            var _closure2_slot1 = var10;
            var1 = var5.params;
            var1 = var1.searchContext;
            var _closure2_slot2 = var1;
            var5 = var5.params;
            var12 = var5.onBeforeJumpToMessage;
            var _closure2_slot3 = var12;
            var6 = _closure1_slot1;
            var5 = 7;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var11 = var5.width;
            var _closure2_slot4 = var11;
            var6 = _closure1_slot3;
            var9 = var6.useCallback;
            var5 = new Array(4);
            var5[0] = var1;
            var5[1] = var10;
            var5[2] = var12;
            var5[3] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.trackSearchJumpToMessage;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var2['searchContext'] = var7;
                    var7 = _closure2_slot1;
                    var2['channelId'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var5 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0002_ip = 76; continue _fun0002 }
 68:
                    var5 = _closure2_slot3;
                    var5 = var5.bind(var1)();
 76:
                    var5 = _closure2_slot2;
                    var5 = var5.type;
                    var6 = _closure1_slot6;
                    var6 = var6.DMS;
                    if(!(var6 !== var5)) { _fun0002_ip = 127; continue _fun0002 }
 99:
                    var6 = _closure1_slot6;
                    var6 = var6.GUILD;
                    if(!(var6 !== var5)) { _fun0002_ip = 127; continue _fun0002 }
 113:
                    var4 = _closure1_slot6;
                    var4 = var4.CHANNEL;
                    if(!(var4 === var5)) { _fun0002_ip = 155; continue _fun0002 }
 127:
                    var4 = _closure2_slot0;
                    var3 = var4.getParent;
                    var3 = var3.bind(var4)();
                    if(!(var2 != var3)) { _fun0002_ip = 157; continue _fun0002 }
 145:
                    var2 = var3.goBack;
                    var2 = var2.bind(var3)();
 155:
                    return var1;
 157:
                    return var1;
                }
            };
            var9 = var9.bind(var6)(var3, var5);
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                var1 = {};
                var2 = _closure2_slot4;
                var1['width'] = var2;
                return var1;
            };
            var11 = var5.bind(var6)(var2, var3);
            var2 = var1.type;
            var1 = _closure1_slot6;
            var1 = var1.CHANNEL;
            if(!(var1 !== var2)) { _fun0001_ip = 291; continue _fun0001 }
 234:
            var1 = _closure1_slot6;
            var1 = var1.GUILD_CHANNEL;
            if(!(var1 !== var2)) { _fun0001_ip = 291; continue _fun0001 }
 248:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['channelId'] = var10;
            var1['onBeforeJumpToMessage'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 291:
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {'horizontal': true, 'scrollEnabled': false, 'bounces': false};
            var6 = var8.container;
            var5 = new Array(2);
            var5[0] = var6;
            var5[1] = var11;
            var1['style'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var12 = var8.container;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var11;
            var5['style'] = var8;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 9;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['channelId'] = var10;
            var7['onBeforeJumpToMessage'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();