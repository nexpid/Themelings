// app/modules/main_tabs_v2/native/ConnectionIndicator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function ConnectionIndicator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.style;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var3 = var5.useToken;
            var4 = _closure1_slot1;
            var12 = 9;
            var1 = var8[var12];
            var1 = var4.bind(var6)(var1);
            var1 = var1.colors;
            var1 = var1.INTERACTIVE_ICON_DEFAULT;
            var14 = var3.bind(var5)(var1);
            var1 = 10;
            var1 = var8[var1];
            var5 = var2.bind(var6)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var3.bind(var5)(var2, var1);
            var _closure2_slot0 = var5;
            var1 = function useHideDueToAppState() {
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure1_slot8;
                        var1 = var3.getState;
                        var3 = var1.bind(var3)();
                        var1 = _closure1_slot10;
                        var1 = var1.ACTIVE;
                        if(!(var3 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = _closure1_slot8;
                        var1 = var3.getLastActiveTime;
                        var4 = var1.bind(var3)();
                        var1 = null;
                        var1 = var1 == var4;
                        if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var3 = global;
                        var5 = var3.Date;
                        var3 = var5.now;
                        var3 = var3.bind(var5)();
                        var3 = var3 - var4;
                        var2 = _closure1_slot12;
                        var1 = var3 < var2;
case 4:
                        return var1;
case 2:
                        var1 = true;
                        return var1;
                    }
                };
                var6 = var4.bind(var5)(var1);
                var5 = _closure1_slot3;
                var4 = undefined;
                var1 = 2;
                var5 = var5.bind(var4)(var6, var1);
                var1 = 0;
                var1 = var5[var1];
                var4 = 1;
                var4 = var5[var4];
                var _closure3_slot0 = var4;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = function() {
                    var3 = function handleChange() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure1_slot8;
                            var2 = var3.getState;
                            var3 = var2.bind(var3)();
                            var2 = _closure1_slot10;
                            var2 = var2.ACTIVE;
                            if(!(var3 !== var2)) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                            var4 = _closure3_slot0;
                            var3 = undefined;
                            var2 = true;
                            var2 = var4.bind(var3)(var2);
                            _fun0003_ip = 7; continue _fun0003;
case 6:
                            var3 = _closure1_slot8;
                            var2 = var3.getLastActiveTime;
                            var3 = var2.bind(var3)();
                            var2 = null;
                            if(!(var2 == var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var5 = _closure3_slot0;
                            var4 = undefined;
                            var2 = true;
                            var2 = var5.bind(var4)(var2);
                            _fun0003_ip = 7; continue _fun0003;
case 8:
                            var4 = global;
                            var5 = var4.Date;
                            var2 = var5.now;
                            var2 = var2.bind(var5)();
                            var3 = var2 - var3;
                            var2 = _closure1_slot12;
                            if(!(!(var3 >= var2))) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var7 = var4.clearTimeout;
                            var6 = _closure4_slot0;
                            var5 = undefined;
                            var6 = var7.bind(var5)(var6);
                            var4 = var4.setTimeout;
                            var1 = _closure1_slot12;
                            var3 = var1 - var3;
                            var1 = function() {
                                var3 = _closure3_slot0;
                                var1 = undefined;
                                var2 = false;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var1 = var4.bind(var5)(var1, var3);
                            _closure4_slot0 = var1;
                            _fun0003_ip = 7; continue _fun0003;
case 10:
                            var3 = _closure3_slot0;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
case 7:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure4_slot1 = var3;
                    var2 = null;
                    var _closure4_slot0 = var2;
                    var4 = _closure1_slot8;
                    var2 = var4.addChangeListener;
                    var2 = var2.bind(var4)(var3);
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    var1 = function() {
                        var1 = global;
                        var4 = var1.clearTimeout;
                        var3 = _closure4_slot0;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure1_slot8;
                        var3 = var4.removeChangeListener;
                        var2 = _closure4_slot1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = new Array(0);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3 = var1.bind(var6)();
            var _closure2_slot1 = var3;
            var10 = _closure1_slot4;
            var1 = var10.useRef;
            var2 = null;
            var1 = var1.bind(var10)(var2);
            var _closure2_slot2 = var1;
            var1 = 11;
            var1 = var8[var1];
            var8 = var4.bind(var6)(var1);
            var4 = var8.useConfig;
            var1 = {};
            var10 = 'ConnectionIndicator';
            var1['location'] = var10;
            var1 = var4.bind(var8)(var1);
            var4 = var1.hidden;
            var _closure2_slot3 = var4;
            var13 = _closure1_slot4;
            var10 = var13.useEffect;
            var8 = new Array(3);
            var8[0] = var3;
            var8[1] = var5;
            var8[2] = var4;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var4 = var3.current;
                    var1 = _closure2_slot0;
                    var3['current'] = var1;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0004_ip = 12; continue _fun0004 }
case 3:
                    var3 = _closure1_slot7;
                    var3 = var3.ONLINE;
                    if(!(var4 === var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot7;
                    var3 = var3.ONLINE;
                    if(!(var4 !== var3)) { _fun0004_ip = 12; continue _fun0004 }
case 9:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot7;
                    var3 = var3.CONNECTING;
                    if(!(var4 === var3)) { _fun0004_ip = 14; continue _fun0004 }
case 8:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 14:
                    var3 = _closure2_slot3;
                    var7 = 'hidden';
                    if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var5 = _closure2_slot0;
                    var3 = _closure1_slot7;
                    var4 = var3.OFFLINE;
                    var3 = 'connecting';
                    if(!(var5 === var4)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var3 = 'offline';
case 18:
                    var7 = var3;
case 16:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot9;
                    var4 = var3.CONNECTION_INDICATOR_SHOWN;
                    var3 = {};
                    var3['connection_indicator_type'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    _fun0004_ip = 12; continue _fun0004;
case 15:
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot7;
                    var1 = var1.ONLINE;
                    var2['current'] = var1;
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var10.bind(var13)(var1, var8);
            var1 = null;
            if(var4) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = _closure1_slot7;
            var4 = var4.ONLINE;
            var1 = null;
            if(!(var5 !== var4)) { _fun0001_ip = 20; continue _fun0001 }
case 22:
            var4 = _closure1_slot7;
            var4 = var4.OFFLINE;
            if(!(var5 !== var4)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var2 = null;
            if(var3) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var5 = _closure1_slot11;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 13;
            var3 = var16[var3];
            var3 = var15.bind(var6)(var3);
            var4 = var3.PressableHighlight;
            var3 = {};
            var3['style'] = var9;
            var8 = 14;
            var10 = var16[var8];
            var10 = var15.bind(var6)(var10);
            var13 = var10.intl;
            var10 = var13.string;
            var8 = var16[var8];
            var8 = var15.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.xi7E7F;
            var8 = var10.bind(var13)(var8);
            var3['aria-label'] = var8;
            var8 = function onPress() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 15;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'connection-connecting';
                var2['key'] = var6;
                var8 = _closure1_slot0;
                var5 = 14;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.xi7E7F;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var5 = function icon() {
                    var1 = _closure1_slot14;
                    return var1;
                };
                var2['icon'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var8;
            var13 = _closure1_slot11;
            var10 = _closure1_slot5;
            var8 = {};
            var15 = 'small';
            var8['size'] = var15;
            var8['color'] = var14;
            var8 = var13.bind(var6)(var10, var8);
            var3['children'] = var8;
            var2 = var5.bind(var6)(var4, var3);
case 25:
            _fun0001_ip = 27; continue _fun0001;
case 23:
            var5 = _closure1_slot11;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 13;
            var3 = var10[var3];
            var3 = var8.bind(var6)(var3);
            var4 = var3.PressableHighlight;
            var3 = {};
            var3['style'] = var9;
            var9 = 14;
            var13 = var10[var9];
            var13 = var8.bind(var6)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var9 = var10[var9];
            var9 = var8.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.s+IpiQ;
            var9 = var13.bind(var14)(var9);
            var3['aria-label'] = var9;
            var7 = function onPress() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 15;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'connection-offline';
                var2['key'] = var6;
                var8 = _closure1_slot0;
                var5 = 14;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.s+IpiQ;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var5 = function icon() {
                    var1 = _closure1_slot13;
                    return var1;
                };
                var2['icon'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var7;
            var9 = _closure1_slot11;
            var7 = 7;
            var7 = var10[var7];
            var7 = var8.bind(var6)(var7);
            var8 = var7.ConnectionUnknownIcon;
            var7 = {};
            var13 = 'sm';
            var7['size'] = var13;
            var11 = _closure1_slot1;
            var10 = var10[var12];
            var10 = var11.bind(var6)(var10);
            var10 = var10.colors;
            var10 = var10.INTERACTIVE_ICON_DEFAULT;
            var7['color'] = var10;
            var7 = var9.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 27:
            var1 = var2;
case 20:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityIndicator;
    var _closure1_slot5 = var4;
    var4 = 3;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ConnectivityState;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot9 = var8;
    var4 = var4.AppStates;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot11 = var9;
    var4 = 5000;
    var _closure1_slot12 = var4;
    var4 = 7;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var11 = var8.ConnectionUnknownIcon;
    var8 = {};
    var10 = 'sm';
    var8['size'] = var10;
    var8 = var9.bind(var1)(var11, var8);
    var _closure1_slot13 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ConnectionUnknownIcon;
    var4 = {};
    var4['size'] = var10;
    var4 = var9.bind(var1)(var8, var4);
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useConfig;
            var1 = {};
            var6 = 'ConnectionIndicator';
            var1['location'] = var6;
            var1 = var3.bind(var4)(var1);
            var3 = var1.timeoutMs;
            var1 = null;
            var3 = var1 != var3;
            if(!var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var4 = _closure1_slot11;
            var3 = _closure1_slot15;
            var2 = {};
            var7 = arg1;
            var8 = var2;
            var6 = copyDataProperties(var8, var7);
            var1 = var4.bind(var5)(var3, var2);
case 28:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/ConnectionIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();