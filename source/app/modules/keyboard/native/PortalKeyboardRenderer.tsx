// app/modules/keyboard/native/PortalKeyboardRenderer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function transitionGroupGetItemKey(arg1) {
        var1 = arg1;
        var1 = var1.id;
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = new Array(0);
    var _closure1_slot6 = var4;
    var4 = function transitionGroupRenderItem(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg3;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var1 = var5[var1];
            var6 = undefined;
            var1 = var4.bind(var6)(var1);
            var1 = var1.TransitionStates;
            var1 = var1.YEETED;
            var4 = var2 === var1;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 4;
            var1 = var8[var1];
            var5 = var7.bind(var6)(var1);
            var1 = var5.getKeyboardType;
            var5 = var1.bind(var5)();
            var1 = 5;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.KeyboardTypes;
            var1 = var1.SYSTEM;
            var4 = var5 === var1;
case 2:
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var5 = var5.bind(var6)(var1);
            var1 = var5.isAndroid;
            var4 = var1.bind(var5)();
case 4:
            var1 = null;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot5;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 7;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var7 = arg2;
            var3['item'] = var7;
            var3['state'] = var2;
            var2 = arg4;
            var3['cleanUp'] = var2;
            var2 = arg1;
            var1 = var5.bind(var6)(var4, var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/PortalKeyboardRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PortalKeyboardRenderer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.portal;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = true;
case 8:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var9 = _closure1_slot3;
            var4 = var9.useId;
            var6 = var4.bind(var9)();
            _closure2_slot0 = var6;
            var8 = var9.useLayoutEffect;
            var7 = new Array(1);
            var7[0] = var6;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.registerPortalKeyboardRenderer;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var8.bind(var9)(var4, var7);
            var8 = var9.useLayoutEffect;
            var7 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 8;
                        var3 = var7[var4];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        var8 = var3.PortalKeyboardUIStore;
                        var5 = var8.getField;
                        var3 = 'keyboard';
                        var5 = var5.bind(var8)(var3);
                        var3 = 4;
                        var3 = var7[var3];
                        var6 = var6.bind(var1)(var3);
                        var3 = var6.getKeyboardType;
                        var6 = var3.bind(var6)();
                        var3 = null;
                        var3 = var3 != var5;
                        if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var5 = var5.type;
                        var3 = var6 !== var5;
case 10:
                        if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.closePortalKeyboardIfUnhandled;
                        var2 = var2.bind(var3)();
case 12:
                        return var1;
                    }
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.closePortalKeyboardIfUnhandled;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var4 = new Array(0);
            var4 = var8.bind(var9)(var7, var4);
            var8 = var9.useLayoutEffect;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = function onNavigationStateChange() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var4 = 8;
                            var3 = var1[var4];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var6 = var3.PortalKeyboardUIStore;
                            var5 = var6.getField;
                            var3 = 'keyboard';
                            var5 = var5.bind(var6)(var3);
                            var3 = null;
                            var3 = var3 != var5;
                            if(!var3) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                            var7 = var5.channelId;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 10;
                            var6 = var9[var6];
                            var6 = var8.bind(var1)(var6);
                            var6 = var6.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                            var3 = var7 !== var6;
case 14:
                            if(!var3) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 11;
                            var6 = var8[var6];
                            var7 = var7.bind(var1)(var6);
                            var6 = var7.getFocusedChannelId;
                            var6 = var6.bind(var7)();
                            var5 = var5.channelId;
                            var3 = var6 !== var5;
case 16:
                            if(!var3) { _fun0005_ip = 18; continue _fun0005 }
case 4:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var5 = 4;
                            var5 = var3[var5];
                            var7 = var6.bind(var1)(var5);
                            var5 = var7.getKeyboardType;
                            var5 = var5.bind(var7)();
                            var9 = 5;
                            var3 = var3[var9];
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.KeyboardTypes;
                            var3 = var3.SYSTEM;
                            if(!(var5 !== var3)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 12;
                            var3 = var7[var3];
                            var6 = var8.bind(var1)(var3);
                            var5 = var6.setKeyboardType;
                            var3 = {};
                            var7 = var7[var9];
                            var7 = var8.bind(var1)(var7);
                            var7 = var7.KeyboardTypes;
                            var7 = var7.SYSTEM;
                            var3['type'] = var7;
                            var3 = var5.bind(var6)(var3);
case 19:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.closePortalKeyboardIfUnhandled;
                            var2 = var2.bind(var3)();
case 18:
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var5;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.isAndroid;
                    var4 = var4.bind(var6)();
                    if(!var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var _closure3_slot0 = var4;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0004_ip = 17; continue _fun0004 }
case 21:
                    return var2;
case 17:
                    var3 = var4.addListener;
                    var2 = 'state';
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.removeListener;
                        var2 = _closure3_slot1;
                        var1 = 'state';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var4 = new Array(0);
            var4 = var8.bind(var9)(var7, var4);
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 8;
            var8 = var9[var4];
            var8 = var7.bind(var5)(var8);
            var11 = var8.PortalKeyboardUIStore;
            var10 = var11.useField;
            var8 = 'keyboard';
            var8 = var10.bind(var11)(var8);
            _closure2_slot1 = var8;
            var4 = var9[var4];
            var4 = var7.bind(var5)(var4);
            var9 = var4.PortalKeyboardUIStore;
            var7 = var9.useField;
            var4 = 'renderers';
            var7 = var7.bind(var9)(var4);
            var9 = var7.length;
            var4 = 0;
            var9 = var4 === var9;
            if(var9) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var10 = var7.length;
            var4 = 1;
            var4 = var10 - var4;
            var4 = var7[var4];
            var9 = var4 === var6;
case 23:
            _closure2_slot2 = var9;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var8;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0006_ip = 27; continue _fun0006 }
case 25:
                    var1 = _closure1_slot6;
                    _fun0006_ip = 28; continue _fun0006;
case 27:
                    var3 = _closure2_slot1;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 28:
                    return var1;
                }
            };
            var7 = var6.bind(var7)(var3, var4);
            var6 = _closure1_slot5;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 3;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.TransitionGroup;
            var3 = {};
            var3['items'] = var7;
            var7 = _closure1_slot8;
            var3['getItemKey'] = var7;
            var7 = _closure1_slot7;
            var3['renderItem'] = var7;
            var6 = var6.bind(var5)(var4, var3);
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            if(var1) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var1 = 14;
            var1 = var7[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.PortalKeyboardInModalContext;
            var2 = var1.Provider;
            var1 = {};
            var8 = true;
            var1['value'] = var8;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var2, var1);
            _fun0002_ip = 31; continue _fun0002;
case 29:
            var2 = 13;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PortalKeyboard;
            var2 = {};
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 31:
            return var1;
        }
    };
    var3['PortalKeyboardRenderer'] = var2;
    return var1;
})();