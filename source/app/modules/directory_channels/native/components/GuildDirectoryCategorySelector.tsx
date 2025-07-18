// app/modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DirectoryEntryCategories;
    var _closure1_slot8 = var7;
    var4 = var4.getHubCategories;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var10;
    var10 = 12;
    var9['paddingTop'] = var10;
    var4['categoriesListWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var1 = arg1;
        var7 = var1.channel;
        var _closure2_slot0 = var7;
        var2 = var1.onCategorySelected;
        var _closure2_slot1 = var2;
        var16 = var1.categoryCounts;
        var _closure2_slot2 = var16;
        var2 = var1.allEntriesCount;
        var _closure2_slot3 = var2;
        var1 = _closure1_slot12;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var13 = _closure1_slot5;
        var1 = var13.useState;
        var3 = 0;
        var8 = var1.bind(var13)(var3);
        var6 = _closure1_slot4;
        var1 = 2;
        var6 = var6.bind(var4)(var8, var1);
        var9 = var6[var3];
        var1 = 1;
        var1 = var6[var1];
        var _closure2_slot4 = var1;
        var8 = var13.useCallback;
        var6 = function(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var3 = var1.width;
            var2 = _closure2_slot4;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var1 = new Array(0);
        var8 = var8.bind(var13)(var6, var1);
        var6 = _closure1_slot0;
        var11 = _closure1_slot3;
        var1 = 11;
        var1 = var11[var1];
        var17 = var6.bind(var4)(var1);
        var15 = var17.useStateFromStores;
        var1 = _closure1_slot7;
        var14 = new Array(1);
        var14[0] = var1;
        var1 = function() {
            var3 = _closure1_slot7;
            var2 = var3.getCurrentCategoryId;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var15.bind(var17)(var14, var1);
        var _closure2_slot5 = var1;
        var15 = var13.useMemo;
        var7 = var7.id;
        var14 = new Array(1);
        var14[0] = var7;
        var7 = function() {
            var1 = _closure2_slot0;
            var4 = var1.id;
            var5 = {};
            var1 = _closure1_slot8;
            var1 = var1.ALL;
            var5['value'] = var1;
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 8;
            var6 = var9[var1];
            var3 = undefined;
            var6 = var8.bind(var3)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var1 = var9[var1];
            var1 = var8.bind(var3)(var1);
            var1 = var1.t;
            var1 = var1.hEAa2d;
            var1 = var6.bind(var7)(var1);
            var5['label'] = var1;
            var1 = 70;
            var5['idealSize'] = var1;
            var1 = new Array(1);
            var1[0] = var5;
            var2 = _closure1_slot9;
            var11 = var2.bind(var3)(var4);
            var10 = 1;
            var12 = var1;
            var2 = arraySpread(var12, var11, var10);
            return var1;
        };
        var15 = var15.bind(var13)(var7, var14);
        var _closure2_slot6 = var15;
        var14 = var13.useMemo;
        var7 = new Array(3);
        var7[0] = var15;
        var7[1] = var16;
        var7[2] = var2;
        var2 = function() {
            var3 = _closure2_slot6;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var3 = arg1;
                    var1 = {};
                    var2 = var3.label;
                    var1['label'] = var2;
                    var2 = global;
                    var5 = var2.String;
                    var4 = var3.value;
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var1['id'] = var4;
                    var5 = var3.value;
                    var4 = _closure1_slot8;
                    var4 = var4.ALL;
                    if(!(var5 !== var4)) { _fun0001_ip = 93; continue _fun0001 }
 60:
                    var6 = _closure2_slot2;
                    var5 = null;
                    var5 = var5 == var6;
                    var2 = undefined;
                    if(var5) { _fun0001_ip = 91; continue _fun0001 }
 78:
                    var4 = _closure2_slot2;
                    var3 = var3.value;
                    var2 = var4[var3];
 91:
                    _fun0001_ip = 100; continue _fun0001;
 93:
                    var2 = _closure2_slot3;
 100:
                    var1['count'] = var2;
                    var2 = null;
                    var1['page'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var14 = var14.bind(var13)(var2, var7);
        var7 = var13.useMemo;
        var2 = new Array(2);
        var2[0] = var15;
        var2[1] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot6;
                var2 = var3.findIndex;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.value;
                    var1 = _closure2_slot5;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var3 = -1;
                var1 = 0;
                if(!(var3 !== var2)) { _fun0002_ip = 42; continue _fun0002 }
 39:
                var1 = var2;
 42:
                return var1;
            }
        };
        var13 = var7.bind(var13)(var1, var2);
        var1 = 12;
        var1 = var11[var1];
        var7 = var6.bind(var4)(var1);
        var2 = var7.useSegmentedControlState;
        var1 = {};
        var1['items'] = var14;
        var1['defaultIndex'] = var13;
        var10 = function onSetActiveIndex(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot6;
                var1 = arg1;
                var3 = var3[var1];
                var1 = null;
                var4 = var1 == var3;
                var1 = undefined;
                var6 = undefined;
                if(var4) { _fun0003_ip = 32; continue _fun0003 }
 27:
                var6 = var3.value;
 32:
                var3 = _closure2_slot5;
                if(!(var6 !== var3)) { _fun0003_ip = 92; continue _fun0003 }
 40:
                var4 = _closure1_slot2;
                var5 = _closure1_slot3;
                var3 = 13;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.selectDirectoryCategory;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3, var6);
                var2 = _closure2_slot1;
                var2 = var2.bind(var1)();
 92:
                return var1;
            }
        };
        var1['onSetActiveIndex'] = var10;
        var1['pageWidth'] = var9;
        var10 = var2.bind(var7)(var1);
        var1 = 9;
        var1 = var11[var1];
        var9 = var6.bind(var4)(var1);
        var2 = var9.useToken;
        var7 = _closure1_slot1;
        var1 = 7;
        var1 = var11[var1];
        var1 = var7.bind(var4)(var1);
        var1 = var1.colors;
        var1 = var1.BACKGROUND_PRIMARY;
        var2 = var2.bind(var9)(var1);
        var9 = new Array(2);
        var9[0] = var2;
        var1 = 10;
        var1 = var11[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.bind(var4)(var2);
        var1 = var2.alpha;
        var2 = var1.bind(var2)(var3);
        var1 = var2.hex;
        var1 = var1.bind(var2)();
        var9[1] = var1;
        var3 = _closure1_slot11;
        var2 = _closure1_slot6;
        var1 = {};
        var12 = var12.categoriesListWrapper;
        var1['style'] = var12;
        var1['onLayout'] = var8;
        var8 = _closure1_slot10;
        var5 = 14;
        var5 = var11[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Tabs;
        var5 = {};
        var5['state'] = var10;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = 15;
        var6 = var11[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6['state'] = var10;
        var6['colors'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();