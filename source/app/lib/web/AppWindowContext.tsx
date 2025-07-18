// app/lib/web/AppWindowContext.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var5 = function getWindowDispatchForElement(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.ownerDocument;
            var6 = var1.defaultView;
            var3 = null;
            if(!(var3 == var6)) { _fun0001_ip = 25; continue _fun0001 }
 21:
            var1 = undefined;
            return var1;
 25:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.getWindowId;
            var5 = var4.bind(var5)(var6);
            var4 = _closure1_slot6;
            var2 = var4.get;
            var2 = var2.bind(var4)(var5);
            var3 = var3 == var2;
            if(var3) { _fun0001_ip = 88; continue _fun0001 }
 82:
            var1 = var2.windowDispatch;
 88:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function getCurrentlyInteractingAppWindowContext() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.getCurrentlyInteractingWindowId;
            var5 = var1.bind(var2)();
            var2 = null;
            var4 = var2 == var5;
            var1 = null;
            if(var4) { _fun0002_ip = 75; continue _fun0002 }
 46:
            var4 = _closure1_slot6;
            var3 = var4.get;
            var3 = var3.bind(var4)(var5);
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0002_ip = 72; continue _fun0002 }
 69:
            var2 = var3;
 72:
            var1 = var2;
 75:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var8 = global;
    var11 = var8.Object;
    var7 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var11)(var3, var1, var6);
    var1 = 0;
    var7 = var10[var1];
    var6 = native3;
    var1 = undefined;
    var6 = var6.bind(var1)(var7);
    var _closure1_slot2 = var6;
    var6 = 1;
    var7 = var10[var6];
    var6 = native4;
    var12 = var6.bind(var1)(var7);
    var _closure1_slot3 = var12;
    var6 = 2;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var13 = var6.AppContext;
    var6 = 3;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.jsx;
    var _closure1_slot4 = var6;
    var6 = 4;
    var6 = var10[var6];
    var6 = var9.bind(var1)(var6);
    var6 = var6.ComponentDispatcher;
    var7 = var6.prototype;
    var7 = Object.create(var7, {constructor: {value: var6}});
    var18 = var7;
    var6 = new var18[var6](var17);
    var6 = var6 instanceof Object ? var6 : var7;
    var11 = var12.createContext;
    var7 = {};
    var13 = var13.APP;
    var7['appContext'] = var13;
    var13 = var8.window;
    var7['renderWindow'] = var13;
    var7['windowDispatch'] = var6;
    var13 = 5;
    var13 = var10[var13];
    var14 = var9.bind(var1)(var13);
    var13 = var14.getMainWindowId;
    var13 = var13.bind(var14)();
    var7['windowId'] = var13;
    var7 = var11.bind(var12)(var7);
    var _closure1_slot5 = var7;
    var8 = var8.Map;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var18 = var11;
    var8 = new var18[var8](var17);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot6 = var8;
    var8 = 8;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'lib/web/AppWindowContext.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['MainWindowDispatch'] = var6;
    var3['getWindowDispatchForElement'] = var5;
    var5 = function getWindowDispatchForEvent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 6;
            var1 = var5[var1];
            var5 = undefined;
            var7 = var4.bind(var5)(var1);
            var6 = var7.isElement;
            var4 = null;
            var8 = var4 == var2;
            var1 = undefined;
            if(var8) { _fun0003_ip = 51; continue _fun0003 }
 45:
            var1 = var2.target;
 51:
            var6 = var6.bind(var7)(var1);
            var1 = null;
            if(!var6) { _fun0003_ip = 88; continue _fun0003 }
 61:
            var3 = _closure1_slot7;
            var2 = var2.target;
            var2 = var3.bind(var5)(var2);
            var3 = var4 != var2;
            var1 = null;
            if(!var3) { _fun0003_ip = 88; continue _fun0003 }
 85:
            var1 = var2;
 88:
            return var1;
        }
    };
    var3['getWindowDispatchForEvent'] = var5;
    var3['getCurrentlyInteractingAppWindowContext'] = var4;
    var4 = function getAppWindowContextValue(arg1) {
        var3 = _closure1_slot6;
        var2 = var3.get;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getAppWindowContextValue'] = var4;
    var4 = function getCurrentlyInteractingAppContext() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot8;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0004_ip = 28; continue _fun0004 }
 22:
            var1 = var2.appContext;
 28:
            return var1;
        }
    };
    var3['getCurrentlyInteractingAppContext'] = var4;
    var4 = function AppWindowContextProvider(arg1) {
        var1 = arg1;
        var3 = var1.appContext;
        var2 = var1.renderWindow;
        var5 = var1.children;
        var1 = function useWindowContextValue(arg1, arg2) {
            var8 = arg1;
            var7 = arg2;
            var _closure3_slot0 = var8;
            var _closure3_slot1 = var7;
            var5 = _closure1_slot3;
            var4 = var5.useState;
            var9 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 5;
            var3 = var6[var3];
            var6 = undefined;
            var9 = var9.bind(var6)(var3);
            var3 = var9.getWindowId;
            var3 = var3.bind(var9)(var7);
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3.bind(var6)(var4, var1);
            var1 = 0;
            var6 = var3[var1];
            var _closure3_slot2 = var6;
            var1 = 1;
            var1 = var3[var1];
            var _closure3_slot3 = var1;
            var4 = var5.useMemo;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ComponentDispatcher;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var1 = new Array(0);
            var1 = var4.bind(var5)(var3, var1);
            var _closure3_slot4 = var1;
            var4 = var5.useMemo;
            var3 = new Array(4);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var1;
            var3[3] = var6;
            var1 = function() {
                var1 = {};
                var3 = _closure3_slot0;
                var1['appContext'] = var3;
                var3 = _closure3_slot1;
                var1['renderWindow'] = var3;
                var3 = _closure3_slot4;
                var1['windowDispatch'] = var3;
                var2 = _closure3_slot2;
                var1['windowId'] = var2;
                return var1;
            };
            var1 = var4.bind(var5)(var1, var3);
            var _closure3_slot5 = var1;
            var8 = var5.useEffect;
            var4 = new Array(2);
            var4[0] = var7;
            var4[1] = var6;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure3_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 19; continue _fun0005 }
 15:
                    var2 = undefined;
                    return var2;
 19:
                    var2 = global;
                    var5 = var2.setInterval;
                    var4 = undefined;
                    var3 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.getWindowId;
                            var3 = _closure3_slot1;
                            var3 = var4.bind(var5)(var3);
                            var4 = null;
                            if(!(var4 != var3)) { _fun0006_ip = 78; continue _fun0006 }
 49:
                            var2 = _closure3_slot3;
                            var2 = var2.bind(var1)(var3);
                            var2 = global;
                            var3 = var2.clearInterval;
                            var2 = _closure4_slot0;
                            var2 = var3.bind(var1)(var2);
 78:
                            return var1;
                        }
                    };
                    var2 = 10;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearInterval;
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var8.bind(var5)(var3, var4);
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var1;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                var6 = _closure1_slot6;
                var5 = var6.set;
                var4 = _closure3_slot2;
                var3 = _closure3_slot5;
                var3 = var5.bind(var6)(var4, var3);
                var5 = function handleUnload() {
                    var3 = _closure1_slot6;
                    var2 = var3.delete;
                    var1 = _closure3_slot2;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var _closure4_slot0 = var5;
                var4 = _closure3_slot1;
                var3 = var4.addEventListener;
                var2 = 'unload';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure3_slot1;
                    var3 = var4.removeEventListener;
                    var2 = _closure4_slot0;
                    var1 = 'unload';
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var4 = undefined;
        var6 = var1.bind(var4)(var3, var2);
        var3 = _closure1_slot4;
        var1 = _closure1_slot5;
        var2 = var1.Provider;
        var1 = {};
        var1['value'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['AppWindowContextProvider'] = var4;
    var4 = function useAppContext() {
        var3 = _closure1_slot3;
        var2 = var3.useContext;
        var1 = _closure1_slot5;
        var1 = var2.bind(var3)(var1);
        var1 = var1.appContext;
        return var1;
    };
    var3['useAppContext'] = var4;
    var2 = function useWindowDispatch() {
        var3 = _closure1_slot3;
        var2 = var3.useContext;
        var1 = _closure1_slot5;
        var1 = var2.bind(var3)(var1);
        var1 = var1.windowDispatch;
        return var1;
    };
    var3['useWindowDispatch'] = var2;
    return var1;
})();