// app/modules/devtools/native/components/DevToolsLazy.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var9 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
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
        var4 = var9.bind(var1)(var4);
        var _closure1_slot2 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = native4;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot3 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.NativeModules;
        var _closure1_slot4 = var4;
        var7 = 3;
        var7 = var6[var7];
        var7 = var9.bind(var1)(var7);
        var _closure1_slot5 = var7;
        var7 = 4;
        var7 = var6[var7];
        var7 = var9.bind(var1)(var7);
        var _closure1_slot6 = var7;
        var7 = 5;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var7 = var7.jsx;
        var _closure1_slot7 = var7;
        var7 = {'input': 'o', 'modifierFlags': null, 'eventName': 'keyCommandShowDevTools', 'discoverabilityTitle': 'Open DevTools Panel'};
        var8 = 6;
        var8 = var6[var8];
        var10 = var5.bind(var1)(var8);
        var8 = var10.isAndroid;
        var8 = var8.bind(var10)();
        if(var8) { _fun0001_ip = 217; continue _fun0001 }
 203:
        var4 = var4.KeyCommandsView;
        var4 = var4.keyModifierControl;
        _fun0001_ip = 245; continue _fun0001;
 217:
        var8 = 7;
        var8 = var6[var8];
        var9 = var9.bind(var1)(var8);
        var8 = var9.getConstants;
        var8 = var8.bind(var9)();
        var4 = var8.keyModifierControl;
 245:
        var7['modifierFlags'] = var4;
        var4 = function onKeyCommand() {
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 76; continue _fun0002 }
 7:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var3 = 9;
                        var4 = var2[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = 8;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var2 = var5.bind(var3)(var4, var2);
                        SaveGenerator(address=54);
 52:
                        return var2;
 54:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 73; continue _fun0002 }
 60:
                        var4 = var2.navigateToDevTools;
                        var4 = var4.bind(var3)();
                        return var3;
 73:
                        return var2;
 76:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        };
        var7['onKeyCommand'] = var4;
        var4 = new Array(1);
        var4[0] = var7;
        var _closure1_slot8 = var4;
        var4 = 13;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/devtools/native/components/DevToolsLazy.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function DevToolsLazy() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 10;
                var3 = var7[var2];
                var4 = undefined;
                var10 = var6.bind(var4)(var3);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() {
                    var1 = _closure1_slot5;
                    var1 = var1.isDeveloper;
                    return var1;
                };
                var3 = var9.bind(var10)(var8, var3);
                var _closure2_slot0 = var3;
                var2 = var7[var2];
                var10 = var6.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() {
                    var1 = _closure1_slot6;
                    var1 = var1.showDevWidget;
                    return var1;
                };
                var2 = var9.bind(var10)(var8, var2);
                var9 = _closure1_slot3;
                var8 = var9.useEffect;
                var5 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 6;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isIOS;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0004_ip = 62; continue _fun0004 }
 38:
                        var4 = _closure1_slot5;
                        var3 = var4.addChangeListener;
                        var2 = function() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var1 = _closure1_slot4;
                                var3 = var1.NSUserDefaultsBridge;
                                var1 = null;
                                if(!(var1 != var3)) { _fun0005_ip = 39; continue _fun0005 }
 19:
                                var2 = var3.setIsDiscordDeveloper;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
 39:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
 62:
                        return var1;
                    }
                };
                var5 = var8.bind(var9)(var5);
                var5 = 11;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.useKeyCommands;
                if(var3) { _fun0003_ip = 148; continue _fun0003 }
 142:
                var5 = new Array(0);
                _fun0003_ip = 152; continue _fun0003;
 148:
                var5 = _closure1_slot8;
 152:
                var5 = var6.bind(var7)(var5);
                if(!var3) { _fun0003_ip = 163; continue _fun0003 }
 160:
                if(var2) { _fun0003_ip = 167; continue _fun0003 }
 163:
                var2 = null;
                return var2;
 167:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 12;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.default;
                var2 = _closure1_slot7;
                var1 = {};
                var1 = var2.bind(var4)(var3, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();