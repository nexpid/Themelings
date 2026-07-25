// app/modules/share/native/SearchableDestinationList.tsx
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
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.Keyboard;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.Fragment;
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
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['paddingBottom'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_ACTIONSHEET_BACKGROUND;
    var9['backgroundColor'] = var13;
    var4['searchBarContainer'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_ACTIONSHEET_BACKGROUND;
    var9['backgroundColor'] = var10;
    var4['noResults'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/native/SearchableDestinationList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SearchableDestinationList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.initialSelectedDestinations;
            var23 = var2.disabledDestinations;
            var _closure2_slot0 = var23;
            var32 = var2.originDestination;
            var19 = var2.channelFilter;
            var20 = var2.getRowIsUnavailable;
            var _closure2_slot1 = var20;
            var22 = var2.onSelectedDestinationChange;
            var _closure2_slot2 = var22;
            var26 = var2.onSearchTextChange;
            var _closure2_slot3 = var26;
            var27 = var2.rowMode;
            var4 = undefined;
            if(!(var27 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot8;
            var27 = var3.NONE;
case 2:
            var _closure2_slot4 = var27;
            var18 = var2.insetStart;
            if(!(var18 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.space;
            var18 = var3.PX_8;
case 4:
            var12 = var2.insetEnd;
            if(!(var12 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.space;
            var12 = var3.PX_12;
case 6:
            var14 = var2.autoFocusSearch;
            if(!(var14 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = false;
case 8:
            var9 = var2.hideSearchOnDefaultNoResults;
            if(!(var9 === var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = false;
case 10:
            var6 = var2.defaultNoResultsFound;
            var5 = var2.disableGradient;
            var10 = var2.disableStickySections;
            var29 = var2.disableSelection;
            var _closure2_slot5 = var29;
            var28 = var2.disableLongPress;
            var _closure2_slot6 = var28;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot24 = var4;
            var2 = _closure1_slot12;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var7 = null;
            var17 = var2.bind(var3)(var7);
            _closure2_slot7 = var17;
            var2 = var3.useState;
            if(!(var7 == var8)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = new Array(0);
case 12:
            var2 = var2.bind(var3)(var8);
            var31 = _closure1_slot3;
            var30 = 2;
            var3 = var31.bind(var4)(var2, var30);
            var8 = 0;
            var2 = var3[var8];
            _closure2_slot8 = var2;
            var25 = 1;
            var3 = var3[var25];
            _closure2_slot9 = var3;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = 8;
            var16 = var15[var16];
            var24 = var3.bind(var4)(var16);
            var21 = var24.useShareSearchResults;
            var16 = {};
            var16['selectedDestinations'] = var2;
            var16['originDestination'] = var32;
            var16['channelFilter'] = var19;
            var19 = true;
            var16['includeMissingDMs'] = var19;
            var16 = var21.bind(var24)(var16);
            var32 = var16.results;
            _closure2_slot10 = var32;
            var16 = var16.updateSearchText;
            _closure2_slot11 = var16;
            var21 = _closure1_slot4;
            var33 = var21.useRef;
            var24 = '';
            var24 = var33.bind(var21)(var24);
            _closure2_slot12 = var24;
            var33 = var21.useState;
            var24 = false;
            var24 = var33.bind(var21)(var24);
            var24 = var31.bind(var4)(var24, var30);
            var8 = var24[var8];
            var24 = var24[var25];
            _closure2_slot13 = var24;
            var24 = var21.useRef;
            var24 = var24.bind(var21)(var7);
            _closure2_slot14 = var24;
            var30 = var21.useEffect;
            var25 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = _closure2_slot14;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
case 14:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var24 = new Array(0);
            var24 = var30.bind(var21)(var25, var24);
            var25 = var21.useCallback;
            var24 = new Array(2);
            var24[0] = var26;
            var24[1] = var16;
            var16 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg1;
                    var3 = arguments[1];
                    var1 = undefined;
                    if(!(var3 === var1)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = false;
case 16:
                    var4 = _closure2_slot12;
                    var4 = var4.current;
                    if(!(var5 !== var4)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var4 = _closure2_slot12;
                    var4['current'] = var5;
                    if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var3 = _closure2_slot7;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 20; continue _fun0003 }
case 22:
                    var3 = var4.setText;
                    var3 = var3.bind(var4)(var5);
case 20:
                    var3 = _closure2_slot11;
                    var3 = var3.bind(var1)(var5);
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)(var5);
case 23:
                    var4 = _closure2_slot13;
                    var3 = var5.trim;
                    var3 = var3.bind(var5)();
                    var5 = var3.length;
                    var3 = 0;
                    var3 = var5 > var3;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot14;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.runAfterInteractions;
                    var2 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = _closure2_slot22;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0004_ip = 25; continue _fun0004 }
case 15:
                            var2 = var3.scrollToTop;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
case 25:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var3['current'] = var2;
case 18:
                    return var1;
                }
            };
            var16 = var25.bind(var21)(var16, var24);
            _closure2_slot15 = var16;
            var25 = var21.useEffect;
            var24 = new Array(3);
            var24[0] = var2;
            var24[1] = var22;
            var24[2] = var16;
            var22 = function() {
                var4 = _closure2_slot2;
                var3 = _closure2_slot8;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = global;
                var6 = var3.setTimeout;
                var5 = function() {
                    var2 = _closure1_slot6;
                    var1 = var2.dismiss;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var4 = 0;
                var4 = var6.bind(var1)(var5, var4);
                var4 = var3.setTimeout;
                var3 = function() {
                    var4 = _closure2_slot15;
                    var1 = undefined;
                    var3 = '';
                    var2 = true;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var2 = 50;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var22 = var25.bind(var21)(var22, var24);
            var25 = var21.useMemo;
            var22 = var32.length;
            var24 = new Array(1);
            var24[0] = var22;
            var22 = function() {
                var1 = _closure2_slot10;
                var2 = var1.length;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var24 = var25.bind(var21)(var22, var24);
            var26 = var21.useCallback;
            var25 = function() {
                var1 = {};
                var2 = 'section';
                var1['type'] = var2;
                var2 = {};
                var3 = true;
                var2['hideTitle'] = var3;
                var1['props'] = var2;
                return var1;
            };
            var22 = new Array(0);
            var22 = var26.bind(var21)(var25, var22);
            var26 = var21.useMemo;
            var25 = new Array(1);
            var25[0] = var23;
            var23 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var1;
                    var7 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var5 = _closure2_slot0;
                    var4 = var5.map;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 10;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.destinationKey;
                    var1 = var4.bind(var5)(var3);
case 26:
                    if(!(var2 == var1)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var1 = new Array(0);
case 28:
                    return var1;
                }
            };
            var30 = var26.bind(var21)(var23, var25);
            _closure2_slot16 = var30;
            var25 = var21.useMemo;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var2 = null;
                    var4 = var2 == var1;
                    var7 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var5 = _closure2_slot8;
                    var4 = var5.map;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 10;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.destinationKey;
                    var1 = var4.bind(var5)(var3);
case 26:
                    if(!(var2 == var1)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                    var1 = new Array(0);
case 28:
                    return var1;
                }
            };
            var31 = var25.bind(var21)(var2, var23);
            _closure2_slot17 = var31;
            var25 = var21.useCallback;
            var23 = new Array(1);
            var23[0] = var29;
            var2 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot9;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.findIndex;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure3_slot0;
                            var1 = var1.id;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var5 = var3.bind(var1)(var2);
                        var2 = -1;
                        if(!(var2 !== var5)) { _fun0007_ip = 30; continue _fun0007 }
case 19:
                        var2 = new Array(0);
                        var6 = 0;
                        var8 = var2;
                        var7 = var1;
                        var3 = arraySpread(var8, var7, var6);
                        var4 = var2.splice;
                        var3 = 1;
                        var3 = var4.bind(var2)(var5, var3);
                        _fun0007_ip = 31; continue _fun0007;
case 30:
                        var3 = _closure2_slot5;
                        if(var3) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                        var4 = _closure3_slot0;
                        var3 = new Array(1);
                        var3[0] = var4;
                        var6 = 1;
                        var8 = var3;
                        var7 = var1;
                        var4 = arraySpread(var8, var7, var6);
                        var2 = var3;
case 31:
                        return var2;
case 32:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var25.bind(var21)(var2, var23);
            _closure2_slot18 = var2;
            var26 = var21.useCallback;
            var25 = new Array(1);
            var25[0] = var2;
            var23 = function(arg1) {
                var3 = _closure2_slot18;
                var2 = {};
                var1 = 'user';
                var2['type'] = var1;
                var1 = arg1;
                var1 = var1.id;
                var2['id'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var26 = var26.bind(var21)(var23, var25);
            _closure2_slot19 = var26;
            var25 = var21.useCallback;
            var23 = new Array(1);
            var23[0] = var2;
            var2 = function(arg1) {
                var3 = _closure2_slot18;
                var2 = {};
                var1 = 'channel';
                var2['type'] = var1;
                var1 = arg1;
                var1 = var1.id;
                var2['id'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var25.bind(var21)(var2, var23);
            _closure2_slot20 = var2;
            var25 = var21.useCallback;
            var23 = new Array(9);
            var23[0] = var32;
            var23[1] = var20;
            var23[2] = var31;
            var23[3] = var30;
            var23[4] = var29;
            var23[5] = var28;
            var23[6] = var27;
            var23[7] = var26;
            var23[8] = var2;
            var2 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg2;
                    var1 = _closure2_slot10;
                    var1 = var1[var2];
                    var7 = var1.type;
                    var6 = var1.record;
                    var1 = _closure2_slot10;
                    var1 = var1.length;
                    var11 = 1;
                    var1 = var1 - var11;
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 11;
                    var8 = var3[var9];
                    var3 = undefined;
                    var8 = var10.bind(var3)(var8);
                    var8 = var8.AutocompleterResultTypes;
                    var8 = var8.HEADER;
                    if(!(var7 === var8)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                    return var3;
case 34:
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var9];
                    var8 = var10.bind(var3)(var8);
                    var8 = var8.AutocompleterResultTypes;
                    var8 = var8.USER;
                    if(!(var7 !== var8)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 10;
                    var8 = var12[var8];
                    var12 = var10.bind(var3)(var8);
                    var10 = var12.destinationKey;
                    var8 = {};
                    var13 = 'channel';
                    var8['type'] = var13;
                    var13 = var6.id;
                    var8['id'] = var13;
                    var15 = var10.bind(var12)(var8);
                    _fun0008_ip = 38; continue _fun0008;
case 36:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 10;
                    var8 = var12[var8];
                    var12 = var10.bind(var3)(var8);
                    var10 = var12.destinationKey;
                    var8 = {};
                    var13 = 'user';
                    var8['type'] = var13;
                    var13 = var6.id;
                    var8['id'] = var13;
                    var15 = var10.bind(var12)(var8);
case 38:
                    var8 = _closure2_slot1;
                    var13 = null;
                    var8 = var13 == var8;
                    var12 = undefined;
                    if(var8) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                    var8 = _closure2_slot1;
                    var12 = var8.bind(var3)(var6);
case 39:
                    var10 = _closure2_slot17;
                    var8 = var10.includes;
                    var10 = var8.bind(var10)(var15);
                    var14 = _closure2_slot16;
                    var8 = var14.includes;
                    var15 = var8.bind(var14)(var15);
                    var8 = {};
                    var14 = _closure2_slot5;
                    if(!var14) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                    var14 = !var10;
case 41:
                    if(var14) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                    var14 = var15;
case 43:
                    if(var14) { _fun0008_ip = 45; continue _fun0008 }
case 46:
                    var14 = var13 != var12;
case 45:
                    var8['disabled'] = var14;
                    var8['selected'] = var10;
                    if(!(var13 == var12)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var10 = _closure2_slot4;
                    _fun0008_ip = 49; continue _fun0008;
case 47:
                    var14 = _closure1_slot8;
                    var10 = var14.NONE;
case 49:
                    var8['mode'] = var10;
                    var14 = var13 != var12;
                    var10 = undefined;
                    if(!var14) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var10 = var12.label;
case 50:
                    var8['subLabel'] = var10;
                    var14 = var13 != var12;
                    var10 = undefined;
                    if(!var14) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var12 = var12.lineClamp;
                    var13 = var13 != var12;
                    if(!var13) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var11 = var12;
case 54:
                    var10 = var11;
case 52:
                    var8['subLabelLineClamp'] = var10;
                    var10 = 0;
                    var10 = var10 === var2;
                    var8['start'] = var10;
                    var1 = var2 === var1;
                    var8['end'] = var1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.AutocompleterResultTypes;
                    var1 = var1.USER;
                    if(!(var1 !== var7)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.AutocompleterResultTypes;
                    var1 = var1.GROUP_DM;
                    if(!(var1 !== var7)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.AutocompleterResultTypes;
                    var1 = var1.TEXT_CHANNEL;
                    if(!(var1 !== var7)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.AutocompleterResultTypes;
                    var1 = var1.VOICE_CHANNEL;
                    if(!(var1 !== var7)) { _fun0008_ip = 60; continue _fun0008 }
case 62:
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 13;
                    var1 = var9[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.assertNever;
                    var1 = var1.bind(var2)(var7);
                    return var1;
case 60:
                    var1 = {};
                    var7 = 'channel';
                    var1['type'] = var7;
                    var2 = {};
                    var18 = var2;
                    var17 = var8;
                    var9 = copyDataProperties(var18, var17);
                    var2[6] = var6;
                    var9 = _closure2_slot20;
                    var7 = 'onPress';
                    var2[6] = var9;
                    var9 = _closure2_slot6;
                    var7 = undefined;
                    if(!var9) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                    var9 = {};
                    var10 = _closure1_slot7;
                    var9['onLongPress'] = var10;
                    var7 = var9;
case 63:
                    var18 = var2;
                    var17 = var7;
                    var7 = copyDataProperties(var18, var17);
                    var1['props'] = var2;
                    return var1;
case 58:
                    var1 = {};
                    var2 = 'gdm';
                    var1['type'] = var2;
                    var2 = {};
                    var18 = var2;
                    var17 = var8;
                    var7 = copyDataProperties(var18, var17);
                    var7 = 'channel';
                    var2[6] = var6;
                    var9 = _closure2_slot20;
                    var7 = 'onPress';
                    var2[6] = var9;
                    var9 = _closure2_slot6;
                    var7 = undefined;
                    if(!var9) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var9 = {};
                    var10 = _closure1_slot7;
                    var9['onLongPress'] = var10;
                    var7 = var9;
case 65:
                    var18 = var2;
                    var17 = var7;
                    var7 = copyDataProperties(var18, var17);
                    var1['props'] = var2;
                    return var1;
case 56:
                    var1 = {};
                    var7 = 'user';
                    var1['type'] = var7;
                    var2 = {};
                    var18 = var2;
                    var17 = var8;
                    var8 = copyDataProperties(var18, var17);
                    var2[6] = var6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 12;
                    var7 = var9[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.getRelationshipType;
                    var6 = var6.id;
                    var7 = var7.bind(var8)(var6);
                    var6 = 'type';
                    var2[5] = var7;
                    var7 = _closure2_slot19;
                    var6 = 'onPress';
                    var2[5] = var7;
                    var4 = _closure2_slot6;
                    var3 = undefined;
                    if(!var4) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                    var4 = {};
                    var5 = _closure1_slot7;
                    var4['onLongPress'] = var5;
                    var3 = var4;
case 67:
                    var18 = var2;
                    var17 = var3;
                    var3 = copyDataProperties(var18, var17);
                    var1['props'] = var2;
                    return var1;
                }
            };
            var23 = var25.bind(var21)(var2, var23);
            _closure2_slot21 = var23;
            var2 = var21.useRef;
            var25 = var2.bind(var21)(var7);
            _closure2_slot22 = var25;
            var26 = _closure1_slot1;
            var2 = 14;
            var2 = var15[var2];
            var2 = var26.bind(var4)(var2);
            var26 = var2.bind(var4)();
            _closure2_slot23 = var26;
            var2 = 15;
            var2 = var15[var2];
            var15 = var3.bind(var4)(var2);
            var3 = var15.useScaledTextLineHeight;
            var2 = 'text-xs/medium';
            var2 = var3.bind(var15)(var2);
            _closure2_slot24 = var2;
            var15 = var21.useCallback;
            var3 = new Array(3);
            var3[0] = var23;
            var3[1] = var26;
            var3[2] = var2;
            var2 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = _closure2_slot21;
                    var4 = undefined;
                    var3 = arg1;
                    var1 = arg2;
                    var3 = var5.bind(var4)(var3, var1);
                    var1 = null;
                    var5 = var1 == var3;
                    var6 = undefined;
                    if(var5) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var6 = var3.type;
case 69:
                    var5 = 'user';
                    if(!(var5 !== var6)) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var5 = var1 == var3;
                    var6 = undefined;
                    if(var5) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                    var6 = var3.type;
case 73:
                    var5 = 'gdm';
                    if(!(var5 !== var6)) { _fun0009_ip = 71; continue _fun0009 }
case 75:
                    var5 = var1 == var3;
                    var6 = undefined;
                    if(var5) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                    var6 = var3.type;
case 76:
                    var5 = 'channel';
                    var7 = undefined;
                    if(!(var5 === var6)) { _fun0009_ip = 5; continue _fun0009 }
case 71:
                    var3 = var3.props;
                    var7 = var3.subLabelLineClamp;
case 5:
                    if(!(var1 != var7)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                    var6 = 1;
                    if(!(!(var7 > var6))) { _fun0009_ip = 80; continue _fun0009 }
case 78:
                    var1 = _closure2_slot23;
                    _fun0009_ip = 36; continue _fun0009;
case 80:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 16;
                    var3 = var8[var3];
                    var3 = var5.bind(var4)(var3);
                    var5 = _closure2_slot23;
                    var6 = var7 - var6;
                    var2 = _closure2_slot24;
                    var2 = var6 * var2;
                    var2 = var5 + var2;
                    var1 = var3.bind(var4)(var2);
case 36:
                    return var1;
                }
            };
            var21 = var15.bind(var21)(var2, var3);
            var2 = var24.some;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var15 = var2.bind(var24)(var1);
            var3 = _closure1_slot9;
            if(var15) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            var2 = _closure1_slot5;
            if(var8) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            if(!(var7 != var6)) { _fun0001_ip = 83; continue _fun0001 }
case 85:
            var1 = {};
            var27 = var11.noResults;
            var26 = new Array(1);
            var26[0] = var27;
            var1['style'] = var26;
            var1['children'] = var6;
            _fun0001_ip = 86; continue _fun0001;
case 83:
            var6 = {};
            var26 = var11.noResults;
            var6['style'] = var26;
            var28 = _closure1_slot9;
            var27 = _closure1_slot1;
            var33 = _closure1_slot2;
            var26 = 18;
            var26 = var33[var26];
            var27 = var27.bind(var4)(var26);
            var26 = {};
            var32 = _closure1_slot0;
            var29 = 19;
            var30 = var33[var29];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.V6nAfF;
            var29 = var30.bind(var31)(var29);
            var26['title'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var6['children'] = var26;
            var1 = var6;
case 86:
            var6 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 87; continue _fun0001;
case 81:
            var2 = _closure1_slot0;
            var26 = _closure1_slot2;
            var1 = 17;
            var1 = var26[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.UsersFastList;
            var1 = {};
            var1['ref'] = var25;
            var1['sections'] = var24;
            var1['getItemProps'] = var23;
            var1['getSectionProps'] = var22;
            var22 = var7 != var20;
            var20 = undefined;
            if(!var22) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var20 = var21;
case 88:
            var1['getItemSize'] = var20;
            var1['insetStart'] = var18;
            var1['insetEnd'] = var12;
            var1['disableStickySections'] = var10;
            var6 = var3.bind(var4)(var2, var1);
case 87:
            var3 = _closure1_slot11;
            var2 = _closure1_slot10;
            var1 = {};
            var10 = !var5;
            if(!var10) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var18 = _closure1_slot9;
            var12 = _closure1_slot1;
            var20 = _closure1_slot2;
            var5 = 20;
            var5 = var20[var5];
            var12 = var12.bind(var4)(var5);
            var5 = {};
            var5['absolute'] = var19;
            var10 = var18.bind(var4)(var12, var5);
case 90:
            var5 = new Array(3);
            var5[0] = var10;
            if(!var9) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            if(var15) { _fun0001_ip = 92; continue _fun0001 }
case 94:
            var7 = null;
            if(!var8) { _fun0001_ip = 95; continue _fun0001 }
case 92:
            var10 = _closure1_slot9;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var11.searchBarContainer;
            var8['style'] = var11;
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 21;
            var11 = var18[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.SearchField;
            var11 = {};
            var11['ref'] = var17;
            var17 = 'md';
            var11['size'] = var17;
            var11['onChange'] = var16;
            if(!var14) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var14 = var15;
case 96:
            var11['autoFocus'] = var14;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 19;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.CaEER6;
            var13 = var14.bind(var15)(var13);
            var11['accessibilityLabel'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 95:
            var5[1] = var7;
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();