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
    var4 = var4.UserRowModes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingBottom'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var13;
    var4['searchBarContainer'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingTop'] = var13;
    var4['searchBarRowContainer'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['noResults'] = var9;
    var9 = {};
    var10 = 8;
    var9['marginTop'] = var10;
    var4['searchWithPadding'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/native/SearchableDestinationList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SearchableDestinationList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.initialSelectedDestinations;
            var15 = var2.disabledDestinations;
            var _closure2_slot0 = var15;
            var19 = var2.originDestination;
            var28 = var2.getRowIsUnavailable;
            var _closure2_slot1 = var28;
            var20 = var2.onSelectedDestinationChange;
            var _closure2_slot2 = var20;
            var23 = var2.onSearchTextChange;
            var _closure2_slot3 = var23;
            var24 = var2.rowMode;
            var4 = undefined;
            if(!(var24 === var4)) { _fun0001_ip = 84; continue _fun0001 }
 71:
            var3 = _closure1_slot7;
            var24 = var3.NONE;
 84:
            var _closure2_slot4 = var24;
            var18 = var2.insetStart;
            if(!(var18 === var4)) { _fun0001_ip = 132; continue _fun0001 }
 98:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.spacing;
            var18 = var3.PX_8;
 132:
            var12 = var2.insetEnd;
            if(!(var12 === var4)) { _fun0001_ip = 176; continue _fun0001 }
 142:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.spacing;
            var12 = var3.PX_12;
 176:
            var14 = var2.autoFocusSearch;
            if(!(var14 === var4)) { _fun0001_ip = 188; continue _fun0001 }
 186:
            var14 = false;
 188:
            var9 = var2.hideSearchOnDefaultNoResults;
            if(!(var9 === var4)) { _fun0001_ip = 200; continue _fun0001 }
 198:
            var9 = false;
 200:
            var6 = var2.defaultNoResultsFound;
            var5 = var2.disableGradient;
            var10 = var2.disableStickySections;
            var25 = var2.disableSelection;
            var _closure2_slot5 = var25;
            var _closure2_slot6 = var4;
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
            var2 = _closure1_slot11;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot4;
            var2 = var3.useRef;
            var7 = null;
            var17 = var2.bind(var3)(var7);
            _closure2_slot6 = var17;
            var2 = var3.useState;
            if(!(var7 == var8)) { _fun0001_ip = 332; continue _fun0001 }
 328:
            var8 = new Array(0);
 332:
            var2 = var2.bind(var3)(var8);
            var27 = _closure1_slot3;
            var26 = 2;
            var3 = var27.bind(var4)(var2, var26);
            var8 = 0;
            var2 = var3[var8];
            _closure2_slot7 = var2;
            var22 = 1;
            var3 = var3[var22];
            _closure2_slot8 = var3;
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 7;
            var3 = var21[var3];
            var21 = var16.bind(var4)(var3);
            var16 = var21.useShareSearchResults;
            var3 = {};
            var3['selectedDestinations'] = var2;
            var3['originDestination'] = var19;
            var19 = true;
            var3['includeMissingDMs'] = var19;
            var3 = var16.bind(var21)(var3);
            var29 = var3.results;
            _closure2_slot9 = var29;
            var16 = var3.updateSearchText;
            _closure2_slot10 = var16;
            var3 = _closure1_slot4;
            var30 = var3.useRef;
            var21 = '';
            var21 = var30.bind(var3)(var21);
            _closure2_slot11 = var21;
            var30 = var3.useState;
            var21 = false;
            var21 = var30.bind(var3)(var21);
            var21 = var27.bind(var4)(var21, var26);
            var8 = var21[var8];
            var21 = var21[var22];
            _closure2_slot12 = var21;
            var21 = var3.useRef;
            var21 = var21.bind(var3)(var7);
            _closure2_slot13 = var21;
            var26 = var3.useEffect;
            var22 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = _closure2_slot13;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0002_ip = 28; continue _fun0002 }
 18:
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var21 = new Array(0);
            var21 = var26.bind(var3)(var22, var21);
            var22 = var3.useCallback;
            var21 = new Array(2);
            var21[0] = var23;
            var21[1] = var16;
            var16 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = arg1;
                    var3 = arguments[1];
                    var1 = undefined;
                    if(!(var3 === var1)) { _fun0003_ip = 14; continue _fun0003 }
 12:
                    var3 = false;
 14:
                    var4 = _closure2_slot11;
                    var4 = var4.current;
                    if(!(var5 !== var4)) { _fun0003_ip = 181; continue _fun0003 }
 33:
                    var4 = _closure2_slot11;
                    var4['current'] = var5;
                    if(!var3) { _fun0003_ip = 72; continue _fun0003 }
 46:
                    var3 = _closure2_slot6;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 72; continue _fun0003 }
 61:
                    var3 = var4.setText;
                    var3 = var3.bind(var4)(var5);
 72:
                    var3 = _closure2_slot10;
                    var3 = var3.bind(var1)(var5);
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 100; continue _fun0003 }
 91:
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)(var5);
 100:
                    var4 = _closure2_slot12;
                    var3 = var5.trim;
                    var3 = var3.bind(var5)();
                    var5 = var3.length;
                    var3 = 0;
                    var3 = var5 > var3;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot13;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.runAfterInteractions;
                    var2 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = _closure2_slot20;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0004_ip = 31; continue _fun0004 }
 18:
                            var2 = var3.scrollToTop;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
 31:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var3['current'] = var2;
 181:
                    return var1;
                }
            };
            var16 = var22.bind(var3)(var16, var21);
            _closure2_slot14 = var16;
            var22 = var3.useEffect;
            var21 = new Array(3);
            var21[0] = var2;
            var21[1] = var20;
            var21[2] = var16;
            var20 = function() {
                var4 = _closure2_slot2;
                var3 = _closure2_slot7;
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
                    var4 = _closure2_slot14;
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
            var20 = var22.bind(var3)(var20, var21);
            var22 = var3.useMemo;
            var20 = var29.length;
            var21 = new Array(1);
            var21[0] = var20;
            var20 = function() {
                var1 = _closure2_slot9;
                var2 = var1.length;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var22 = var22.bind(var3)(var20, var21);
            var23 = var3.useCallback;
            var21 = function() {
                var1 = {};
                var2 = 'section';
                var1['type'] = var2;
                var2 = {};
                var3 = true;
                var2['hideTitle'] = var3;
                var1['props'] = var2;
                return var1;
            };
            var20 = new Array(0);
            var20 = var23.bind(var3)(var21, var20);
            var23 = var3.useMemo;
            var21 = new Array(1);
            var21[0] = var15;
            var15 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var1;
                    var7 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 63; continue _fun0005 }
 20:
                    var5 = _closure2_slot0;
                    var4 = var5.map;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 9;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.destinationKey;
                    var1 = var4.bind(var5)(var3);
 63:
                    if(!(var2 == var1)) { _fun0005_ip = 71; continue _fun0005 }
 67:
                    var1 = new Array(0);
 71:
                    return var1;
                }
            };
            var26 = var23.bind(var3)(var15, var21);
            _closure2_slot15 = var26;
            var21 = var3.useMemo;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot7;
                    var2 = null;
                    var4 = var2 == var1;
                    var7 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 63; continue _fun0006 }
 20:
                    var5 = _closure2_slot7;
                    var4 = var5.map;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 9;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.destinationKey;
                    var1 = var4.bind(var5)(var3);
 63:
                    if(!(var2 == var1)) { _fun0006_ip = 71; continue _fun0006 }
 67:
                    var1 = new Array(0);
 71:
                    return var1;
                }
            };
            var27 = var21.bind(var3)(var2, var15);
            _closure2_slot16 = var27;
            var21 = var3.useCallback;
            var15 = new Array(1);
            var15[0] = var25;
            var2 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot8;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
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
                        if(!(var2 !== var5)) { _fun0007_ip = 64; continue _fun0007 }
 31:
                        var2 = new Array(0);
                        var6 = 0;
                        var8 = var2;
                        var7 = var1;
                        var3 = arraySpread(var8, var7, var6);
                        var4 = var2.splice;
                        var3 = 1;
                        var3 = var4.bind(var2)(var5, var3);
                        _fun0007_ip = 105; continue _fun0007;
 64:
                        var3 = _closure2_slot5;
                        if(var3) { _fun0007_ip = 107; continue _fun0007 }
 74:
                        var4 = _closure3_slot0;
                        var3 = new Array(1);
                        var3[0] = var4;
                        var6 = 1;
                        var8 = var3;
                        var7 = var1;
                        var4 = arraySpread(var8, var7, var6);
                        var2 = var3;
 105:
                        return var2;
 107:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var21.bind(var3)(var2, var15);
            _closure2_slot17 = var2;
            var23 = var3.useCallback;
            var21 = new Array(1);
            var21[0] = var2;
            var15 = function(arg1) {
                var3 = _closure2_slot17;
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
            var23 = var23.bind(var3)(var15, var21);
            _closure2_slot18 = var23;
            var21 = var3.useCallback;
            var15 = new Array(1);
            var15[0] = var2;
            var2 = function(arg1) {
                var3 = _closure2_slot17;
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
            var2 = var21.bind(var3)(var2, var15);
            _closure2_slot19 = var2;
            var21 = var3.useCallback;
            var15 = new Array(8);
            var15[0] = var29;
            var15[1] = var28;
            var15[2] = var27;
            var15[3] = var26;
            var15[4] = var25;
            var15[5] = var24;
            var15[6] = var23;
            var15[7] = var2;
            var2 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg2;
                    var1 = _closure2_slot9;
                    var1 = var1[var2];
                    var3 = var1.type;
                    var5 = var1.record;
                    var1 = _closure2_slot9;
                    var6 = var1.length;
                    var1 = 1;
                    var1 = var6 - var1;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 10;
                    var9 = var8[var7];
                    var8 = undefined;
                    var9 = var10.bind(var8)(var9);
                    var9 = var9.AutocompleterResultTypes;
                    var9 = var9.HEADER;
                    if(!(var3 === var9)) { _fun0008_ip = 84; continue _fun0008 }
 82:
                    return var8;
 84:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var7];
                    var9 = var10.bind(var8)(var9);
                    var9 = var9.AutocompleterResultTypes;
                    var9 = var9.USER;
                    if(!(var3 !== var9)) { _fun0008_ip = 169; continue _fun0008 }
 117:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 9;
                    var9 = var11[var9];
                    var11 = var10.bind(var8)(var9);
                    var10 = var11.destinationKey;
                    var9 = {};
                    var12 = 'channel';
                    var9['type'] = var12;
                    var12 = var5.id;
                    var9['id'] = var12;
                    var14 = var10.bind(var11)(var9);
                    _fun0008_ip = 219; continue _fun0008;
 169:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 9;
                    var9 = var11[var9];
                    var11 = var10.bind(var8)(var9);
                    var10 = var11.destinationKey;
                    var9 = {};
                    var12 = 'user';
                    var9['type'] = var12;
                    var12 = var5.id;
                    var9['id'] = var12;
                    var14 = var10.bind(var11)(var9);
 219:
                    var9 = _closure2_slot1;
                    var10 = null;
                    var9 = var10 == var9;
                    var11 = undefined;
                    if(var9) { _fun0008_ip = 243; continue _fun0008 }
 234:
                    var9 = _closure2_slot1;
                    var11 = var9.bind(var8)(var5);
 243:
                    var12 = _closure2_slot16;
                    var9 = var12.includes;
                    var12 = var9.bind(var12)(var14);
                    var13 = _closure2_slot15;
                    var9 = var13.includes;
                    var14 = var9.bind(var13)(var14);
                    var9 = {};
                    var13 = _closure2_slot5;
                    if(!var13) { _fun0008_ip = 283; continue _fun0008 }
 280:
                    var13 = !var12;
 283:
                    if(var13) { _fun0008_ip = 289; continue _fun0008 }
 286:
                    var13 = var14;
 289:
                    if(var13) { _fun0008_ip = 296; continue _fun0008 }
 292:
                    var13 = var10 != var11;
 296:
                    var9['disabled'] = var13;
                    var9['selected'] = var12;
                    if(!(var10 == var11)) { _fun0008_ip = 315; continue _fun0008 }
 309:
                    var12 = _closure2_slot4;
                    _fun0008_ip = 325; continue _fun0008;
 315:
                    var13 = _closure1_slot7;
                    var12 = var13.NONE;
 325:
                    var9['mode'] = var12;
                    var12 = var10 != var11;
                    var10 = undefined;
                    if(!var12) { _fun0008_ip = 343; continue _fun0008 }
 338:
                    var10 = var11.label;
 343:
                    var9['subLabel'] = var10;
                    var10 = 0;
                    var10 = var10 === var2;
                    var9['start'] = var10;
                    var1 = var2 === var1;
                    var9['end'] = var1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.AutocompleterResultTypes;
                    var1 = var1.USER;
                    if(!(var3 !== var1)) { _fun0008_ip = 643; continue _fun0008 }
 402:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.AutocompleterResultTypes;
                    var1 = var1.GROUP_DM;
                    if(!(var3 !== var1)) { _fun0008_ip = 588; continue _fun0008 }
 438:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.AutocompleterResultTypes;
                    var1 = var1.TEXT_CHANNEL;
                    if(!(var3 !== var1)) { _fun0008_ip = 539; continue _fun0008 }
 471:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.AutocompleterResultTypes;
                    var1 = var1.VOICE_CHANNEL;
                    if(!(var3 !== var1)) { _fun0008_ip = 539; continue _fun0008 }
 504:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 12;
                    var1 = var7[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.assertNever;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    _fun0008_ip = 586; continue _fun0008;
 539:
                    var2 = {};
                    var7 = 'channel';
                    var2['type'] = var7;
                    var3 = {};
                    var17 = var3;
                    var16 = var9;
                    var10 = copyDataProperties(var17, var16);
                    var3[var7] = var5;
                    var10 = _closure2_slot19;
                    var7 = 'onPress';
                    var3[var7] = var10;
                    var2['props'] = var3;
                    var1 = var2;
 586:
                    _fun0008_ip = 641; continue _fun0008;
 588:
                    var2 = {};
                    var3 = 'gdm';
                    var2['type'] = var3;
                    var3 = {};
                    var17 = var3;
                    var16 = var9;
                    var7 = copyDataProperties(var17, var16);
                    var7 = 'channel';
                    var3[var7] = var5;
                    var10 = _closure2_slot19;
                    var7 = 'onPress';
                    var3[var7] = var10;
                    var2['props'] = var3;
                    var1 = var2;
 641:
                    _fun0008_ip = 735; continue _fun0008;
 643:
                    var2 = {};
                    var7 = 'user';
                    var2['type'] = var7;
                    var3 = {};
                    var17 = var3;
                    var16 = var9;
                    var9 = copyDataProperties(var17, var16);
                    var3[var7] = var5;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 11;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.getRelationshipType;
                    var5 = var5.id;
                    var6 = var6.bind(var7)(var5);
                    var5 = 'type';
                    var3[var5] = var6;
                    var5 = _closure2_slot18;
                    var4 = 'onPress';
                    var3[var4] = var5;
                    var2['props'] = var3;
                    var1 = var2;
 735:
                    return var1;
                }
            };
            var21 = var21.bind(var3)(var2, var15);
            var2 = var3.useRef;
            var23 = var2.bind(var3)(var7);
            _closure2_slot20 = var23;
            var2 = var22.some;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var15 = var2.bind(var22)(var1);
            var3 = _closure1_slot8;
            if(var15) { _fun0001_ip = 1023; continue _fun0001 }
 872:
            var2 = _closure1_slot5;
            if(var8) { _fun0001_ip = 909; continue _fun0001 }
 879:
            if(!(var7 != var6)) { _fun0001_ip = 909; continue _fun0001 }
 883:
            var1 = {};
            var25 = var11.noResults;
            var24 = new Array(1);
            var24[0] = var25;
            var1['style'] = var24;
            var1['children'] = var6;
            _fun0001_ip = 1015; continue _fun0001;
 909:
            var6 = {};
            var24 = var11.noResults;
            var6['style'] = var24;
            var26 = _closure1_slot8;
            var25 = _closure1_slot1;
            var31 = _closure1_slot2;
            var24 = 14;
            var24 = var31[var24];
            var25 = var25.bind(var4)(var24);
            var24 = {};
            var30 = _closure1_slot0;
            var27 = 15;
            var28 = var31[var27];
            var28 = var30.bind(var4)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var31[var27];
            var27 = var30.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.V6nAfH;
            var27 = var28.bind(var29)(var27);
            var24['title'] = var27;
            var24 = var26.bind(var4)(var25, var24);
            var6['children'] = var24;
            var1 = var6;
 1015:
            var6 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 1091; continue _fun0001;
 1023:
            var2 = _closure1_slot0;
            var24 = _closure1_slot2;
            var1 = 13;
            var1 = var24[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.UsersFastList;
            var1 = {};
            var1['ref'] = var23;
            var1['sections'] = var22;
            var1['getItemProps'] = var21;
            var1['getSectionProps'] = var20;
            var1['insetStart'] = var18;
            var1['insetEnd'] = var12;
            var1['disableStickySections'] = var10;
            var6 = var3.bind(var4)(var2, var1);
 1091:
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var10 = !var5;
            if(!var10) { _fun0001_ip = 1144; continue _fun0001 }
 1107:
            var18 = _closure1_slot8;
            var12 = _closure1_slot1;
            var20 = _closure1_slot2;
            var5 = 16;
            var5 = var20[var5];
            var12 = var12.bind(var4)(var5);
            var5 = {};
            var5['absolute'] = var19;
            var10 = var18.bind(var4)(var12, var5);
 1144:
            var5 = new Array(3);
            var5[0] = var10;
            if(!var9) { _fun0001_ip = 1166; continue _fun0001 }
 1155:
            if(var15) { _fun0001_ip = 1166; continue _fun0001 }
 1158:
            var7 = null;
            if(!var8) { _fun0001_ip = 1317; continue _fun0001 }
 1166:
            var10 = _closure1_slot8;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var11.searchBarContainer;
            var8['style'] = var11;
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 17;
            var11 = var18[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.SearchField;
            var11 = {};
            var11['ref'] = var17;
            var17 = 'md';
            var11['size'] = var17;
            var11['onChange'] = var16;
            if(!var14) { _fun0001_ip = 1237; continue _fun0001 }
 1234:
            var14 = var15;
 1237:
            var11['autoFocus'] = var14;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 15;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.CaEER0;
            var13 = var14.bind(var15)(var13);
            var11['accessibilityLabel'] = var13;
            var11 = var10.bind(var4)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 1317:
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