// app/modules/guilds_bar/native/GuildsBar.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'relative', 'overflow': 'visible', 'flex': 1};
    var4['wrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function GuildsBar(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var13 = var2.enableHome;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = false;
case 2:
            var _closure2_slot0 = var4;
            var2 = _closure1_slot6;
            var10 = var2.bind(var4)();
            var12 = _closure1_slot1;
            var22 = _closure1_slot2;
            var2 = 5;
            var2 = var22[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var17 = var2.scrollPosition;
            var7 = var2.gesture;
            var15 = var2.scrollerRef;
            var20 = var2.fastListRef;
            _closure2_slot0 = var20;
            var16 = var2.persistantKeys;
            var19 = var2.onFastListScroll;
            var18 = var2.onFastListScrollWorklet;
            var2 = 6;
            var2 = var22[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.bind(var4)(var20);
            var21 = var2.listProps;
            var14 = var2.listDataProps;
            var6 = _closure1_slot3;
            var5 = var6.useEffect;
            var3 = new Array(1);
            var3[0] = var20;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.registerGuildVisibilityMethod;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var5.bind(var6)(var2, var3);
            var1 = function usePipResizeFix(arg1, arg2) {
                var5 = arg1;
                var6 = arg2;
                var _closure3_slot0 = var5;
                var _closure3_slot1 = var6;
                var4 = _closure1_slot3;
                var2 = var4.useRef;
                var2 = var2.bind(var4)(var5);
                var _closure3_slot2 = var2;
                var3 = var4.useRef;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                var _closure3_slot3 = var2;
                var7 = var4.useEffect;
                var3 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 3;
                        var3 = var4[var3];
                        var4 = undefined;
                        var5 = var5.bind(var4)(var3);
                        var3 = var5.isAndroid;
                        var3 = var3.bind(var5)();
                        if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        return var4;
case 4:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 4;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.addOnPipModeChangedListener;
                        var2 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var1 = arg1;
                                if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                                var2 = _closure3_slot3;
                                var1 = true;
                                var2['current'] = var1;
case 6:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var3 = _closure4_slot0;
                                var1 = null;
                                var3 = var1 == var3;
                                var1 = undefined;
                                if(var3) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                                var3 = _closure4_slot0;
                                var2 = var3.remove;
                                var1 = var2.bind(var3)();
case 8:
                                return var1;
                            }
                        };
                        return var1;
                    }
                };
                var2 = new Array(0);
                var2 = var7.bind(var4)(var3, var2);
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure3_slot2;
                        var4 = var3.current;
                        var1 = _closure3_slot0;
                        var3['current'] = var1;
                        var1 = _closure3_slot3;
                        var1 = var1.current;
                        if(!var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                        var1 = _closure3_slot0;
                        var6 = var1.chunkBase;
                        var1 = null;
                        var7 = var1 != var6;
                        var3 = 0;
                        if(!var7) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                        var3 = var6;
case 12:
                        var6 = var4.chunkBase;
                        var7 = var1 != var6;
                        var5 = 0;
                        if(!var7) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                        var5 = var6;
case 14:
                        if(!(!(var3 <= var5))) { _fun0005_ip = 10; continue _fun0005 }
case 16:
                        var5 = _closure3_slot3;
                        var3 = false;
                        var5['current'] = var3;
                        var3 = _closure3_slot0;
                        var5 = var3.insetStart;
                        var3 = var4.insetStart;
                        var3 = var5 === var3;
                        if(!var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                        var5 = _closure3_slot0;
                        var5 = var5.insetEnd;
                        var4 = var4.insetEnd;
                        var3 = var5 === var4;
case 17:
                        if(!var3) { _fun0005_ip = 10; continue _fun0005 }
case 19:
                        var2 = _closure3_slot1;
                        var2 = var2.current;
                        if(!(var1 != var2)) { _fun0005_ip = 10; continue _fun0005 }
case 20:
                        var1 = var2.computeBlocks;
                        var1 = var1.bind(var2)();
case 10:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var1 = var1.bind(var4)(var21, var20);
            var3 = _closure1_slot4;
            var5 = 8;
            var1 = var22[var5];
            var2 = var12.bind(var4)(var1);
            var1 = {};
            var6 = _closure1_slot0;
            var5 = var22[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Guilds;
            var1['profile'] = var5;
            var5 = 9;
            var5 = var22[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var7;
            var9 = _closure1_slot5;
            var7 = 10;
            var7 = var22[var7];
            var8 = var12.bind(var4)(var7);
            var7 = {'style': null, 'collapsable': false, 'nativeID': 'guilds-bar-view'};
            var10 = var10.wrapper;
            var7['style'] = var10;
            var10 = 11;
            var10 = var22[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var24 = var10;
            var23 = var21;
            var21 = copyDataProperties(var24, var23);
            var24 = var10;
            var23 = var14;
            var14 = copyDataProperties(var24, var23);
            var14 = 'ref';
            var10[13] = var20;
            var14 = 'manualRef';
            var10[13] = var15;
            var15 = true;
            var14 = 'disableContentWrappers';
            var10[13] = var15;
            var14 = 'onScroll';
            var10[13] = var19;
            var14 = 'onScrollWorklet';
            var10[13] = var18;
            var14 = 'scrollPosValue';
            var10[13] = var17;
            var17 = 'sticky-mount';
            var14 = 'stickySectionsVariant';
            var10[13] = var17;
            var14 = 'optimizeListItemRender';
            var10[13] = var15;
            var14 = 'persistantKeys';
            var10[13] = var16;
            var14 = 'disableRecyclingOnFullCompute';
            var10[13] = var15;
            var14 = undefined;
            if(!var13) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var13 = {};
            var15 = 'visible';
            var13['overflow'] = var15;
            var14 = var13;
case 21:
            var13 = 'style';
            var10[12] = var14;
            var14 = 'guilds-bar-fast-list';
            var13 = 'nativeID';
            var10[12] = var14;
            var12 = var3.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot4;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 12;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();