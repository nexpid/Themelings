// app/components_native/common/NativePortalView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var6 = native2;
        var12 = native3;
        var3 = native6;
        var7 = native7;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var12;
        var _closure1_slot2 = var7;
        var4 = global;
        var9 = var4.Object;
        var8 = var9.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var5);
        var1 = 0;
        var8 = var7[var1];
        var5 = native4;
        var1 = undefined;
        var8 = var5.bind(var1)(var8);
        var _closure1_slot3 = var8;
        var5 = 1;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var14 = var5.StyleSheet;
        var11 = var5.requireNativeComponent;
        var10 = var5.NativeEventEmitter;
        var9 = var5.NativeModules;
        var5 = 2;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.jsx;
        var _closure1_slot4 = var5;
        var13 = var14.create;
        var5 = {};
        var15 = {};
        var16 = 'hidden';
        var15['overflow'] = var16;
        var5['base'] = var15;
        var5 = var13.bind(var14)(var5);
        var _closure1_slot5 = var5;
        var5 = 3;
        var5 = var7[var5];
        var13 = var6.bind(var1)(var5);
        var5 = var13.isAndroid;
        var5 = var5.bind(var13)();
        if(var5) { _fun0001_ip = 204; continue _fun0001 }
 191:
        var5 = 'DCDPortalView';
        var5 = var11.bind(var1)(var5);
        _fun0001_ip = 216; continue _fun0001;
 204:
        var11 = 4;
        var11 = var7[var11];
        var5 = var12.bind(var1)(var11);
 216:
        var _closure1_slot6 = var5;
        var5 = var9.MediaPlayerManager;
        var _closure1_slot7 = var5;
        var9 = var9.DCDPortalViewManager;
        var _closure1_slot8 = var9;
        var9 = var10.prototype;
        var9 = Object.create(var9, {constructor: {value: var10}});
        var20 = var9;
        var19 = var5;
        var5 = new var20[var10](var19, var18);
        var5 = var5 instanceof Object ? var5 : var9;
        var _closure1_slot9 = var5;
        var4 = var4.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var20 = var5;
        var4 = new var20[var4](var19);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure1_slot10 = var4;
        var5 = var8.memo;
        var4 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var10 = arg1;
                var1 = var10.style;
                var7 = var10.children;
                var4 = var10.paused;
                var _closure2_slot0 = var4;
                var3 = var10.muted;
                var _closure2_slot1 = var3;
                var8 = var10.onLoad;
                var _closure2_slot2 = var8;
                var9 = {'style': 0, 'children': 0, 'paused': 0, 'muted': 0, 'onLoad': 0};
                var5 = null;
                var14 = var9;
                var13 = null;
                var6 = silentSetPrototypeOf(var14, var13);
                var14 = {};
                var13 = var10;
                var12 = var9;
                var6 = copyDataProperties(var14, var13, var12);
                var _closure2_slot3 = var6;
                if(!(var5 == var7)) { _fun0002_ip = 266; continue _fun0002 }
 93:
                var7 = _closure1_slot3;
                var10 = var7.useLayoutEffect;
                var11 = var6.portal;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var4;
                var4 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure2_slot3;
                        var3 = var2.portal;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 55; continue _fun0003 }
 19:
                        var4 = _closure1_slot7;
                        var3 = var4.toggle;
                        var2 = _closure2_slot3;
                        var2 = var2.portal;
                        var1 = _closure2_slot0;
                        var1 = !var1;
                        var1 = var3.bind(var4)(var2, var1);
 55:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var10.bind(var7)(var4, var9);
                var9 = var7.useLayoutEffect;
                var10 = var6.portal;
                var4 = new Array(2);
                var4[0] = var10;
                var4[1] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure2_slot3;
                        var3 = var2.portal;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 52; continue _fun0004 }
 19:
                        var4 = _closure1_slot7;
                        var3 = var4.setMuted;
                        var2 = _closure2_slot3;
                        var2 = var2.portal;
                        var1 = _closure2_slot1;
                        var1 = var3.bind(var4)(var2, var1);
 52:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var9.bind(var7)(var3, var4);
                var4 = var7.useLayoutEffect;
                var3 = new Array(2);
                var3[0] = var8;
                var8 = var6.portal;
                var3[1] = var8;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 23; continue _fun0005 }
 13:
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
 23:
                        var4 = _closure1_slot7;
                        var3 = var4.setLoopPlayback;
                        var1 = _closure2_slot3;
                        var2 = var1.portal;
                        var1 = true;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = function() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var6 = _closure1_slot7;
                                var5 = var6.setLoopPlayback;
                                var1 = _closure2_slot3;
                                var4 = var1.portal;
                                var1 = false;
                                var1 = var5.bind(var6)(var4, var1);
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 3;
                                var4 = var4[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var4);
                                var4 = var5.isAndroid;
                                var4 = var4.bind(var5)();
                                if(var4) { _fun0006_ip = 95; continue _fun0006 }
 68:
                                var6 = _closure1_slot8;
                                var5 = var6.unregisterView;
                                var4 = _closure2_slot3;
                                var4 = var4.portal;
                                var4 = var5.bind(var6)(var4);
                                _fun0006_ip = 136; continue _fun0006;
 95:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 5;
                                var4 = var6[var4];
                                var6 = var5.bind(var1)(var4);
                                var5 = var6.unregisterView;
                                var4 = _closure2_slot3;
                                var4 = var4.portal;
                                var4 = var5.bind(var6)(var4);
 136:
                                var4 = _closure1_slot10;
                                var3 = var4.add;
                                var2 = _closure2_slot3;
                                var2 = var2.portal;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            }
                        };
                        return var1;
                    }
                };
                var2 = var4.bind(var7)(var2, var3);
                var4 = _closure1_slot4;
                var3 = _closure1_slot6;
                var2 = {};
                var14 = var2;
                var13 = var6;
                var6 = copyDataProperties(var14, var13);
                var5 = _closure1_slot5;
                var6 = var5.base;
                var5 = new Array(2);
                var5[0] = var6;
                var5[1] = var1;
                var1 = 'style';
                var2[var1] = var5;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
 266:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var14 = 'The <NativePortalView> component cannot contain children.';
                var15 = var2;
                var1 = new var15[var3](var14, var13);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var4 = var5.bind(var8)(var4);
        var5 = 6;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'components_native/common/NativePortalView.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var4 = function createPortalControls(arg1) {
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = {};
            var3 = function seek(arg1) {
                var4 = _closure2_slot0;
                var3 = _closure1_slot7;
                var2 = var3.changeProgress;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
                var1 = undefined;
                return var1;
            };
            var1['seek'] = var3;
            var3 = function pause(arg1) {
                var4 = _closure2_slot0;
                var3 = _closure1_slot7;
                var2 = var3.toggle;
                var1 = arg1;
                var1 = !var1;
                var1 = var2.bind(var3)(var4, var1);
                var1 = undefined;
                return var1;
            };
            var1['pause'] = var3;
            var2 = function useSubscribe(arg1, arg2, arg3) {
                var10 = _closure2_slot0;
                var5 = function useSubscribe(arg1, arg2, arg3, arg4) {
                    var8 = arg1;
                    var6 = arg2;
                    var7 = arg3;
                    var5 = arg4;
                    var _closure4_slot0 = var8;
                    var _closure4_slot1 = var6;
                    var _closure4_slot2 = var7;
                    var _closure4_slot3 = var5;
                    var4 = _closure1_slot3;
                    var3 = var4.useEffect;
                    var2 = new Array(4);
                    var2[0] = var8;
                    var2[1] = var7;
                    var2[2] = var6;
                    var2[3] = var5;
                    var1 = function() {
                        var6 = _closure1_slot9;
                        var5 = var6.addListener;
                        var4 = 'MediaPlayerProgress';
                        var3 = function(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                var1 = arg1;
                                var5 = var1.id;
                                var4 = var1.time;
                                var3 = var1.duration;
                                var2 = _closure4_slot0;
                                var2 = var5 === var2;
                                if(!var2) { _fun0007_ip = 39; continue _fun0007 }
 33:
                                var5 = 0;
                                var2 = var3 > var5;
 39:
                                if(!var2) { _fun0007_ip = 54; continue _fun0007 }
 42:
                                var2 = _closure4_slot1;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var4, var3);
 54:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var5.bind(var6)(var4, var3);
                        var _closure5_slot0 = var3;
                        var6 = _closure1_slot9;
                        var5 = var6.addListener;
                        var4 = 'MediaPlayerDownloadProgress';
                        var3 = function(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                var1 = arg1;
                                var4 = var1.id;
                                var3 = var1.progressPercent;
                                var5 = var1.totalDurationSeconds;
                                var2 = _closure4_slot0;
                                var2 = var4 === var2;
                                if(!var2) { _fun0008_ip = 40; continue _fun0008 }
 34:
                                var4 = 0;
                                var2 = var5 > var4;
 40:
                                if(!var2) { _fun0008_ip = 53; continue _fun0008 }
 43:
                                var5 = _closure4_slot3;
                                var4 = null;
                                var2 = var4 != var5;
 53:
                                if(!var2) { _fun0008_ip = 67; continue _fun0008 }
 56:
                                var2 = _closure4_slot3;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
 67:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var5.bind(var6)(var4, var3);
                        var _closure5_slot1 = var3;
                        var5 = _closure1_slot9;
                        var4 = var5.addListener;
                        var3 = 'MediaPlayerPause';
                        var2 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                var1 = arg1;
                                var4 = var1.id;
                                var3 = var1.paused;
                                var2 = _closure4_slot0;
                                if(!(var4 === var2)) { _fun0009_ip = 36; continue _fun0009 }
 25:
                                var2 = _closure4_slot2;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
 36:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        var _closure5_slot2 = var2;
                        var1 = function() {
                            var3 = _closure5_slot0;
                            var2 = var3.remove;
                            var2 = var2.bind(var3)();
                            var3 = _closure5_slot1;
                            var2 = var3.remove;
                            var2 = var2.bind(var3)();
                            var2 = _closure5_slot2;
                            var1 = var2.remove;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        };
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = undefined;
                    return var1;
                };
                var1 = undefined;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = undefined;
                var2 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var1['useSubscribe'] = var2;
            return var1;
        };
        var3['createPortalControls'] = var4;
        var4 = function markPortalAlive(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3['markPortalAlive'] = var4;
        var2 = function isPortalExpired(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['isPortalExpired'] = var2;
        return var1;
    }
})();