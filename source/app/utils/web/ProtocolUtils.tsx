// app/utils/web/ProtocolUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = metroImportDefault;
        var3 = exports;
        var5 = dependencyMap;
        var7 = function launchFirefox(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var8 = arg1;
                var4 = var8;
                var2 = arg2;
                var _closure2_slot0 = var2;
                var3 = undefined;
                var6 = undefined;
                var5 = undefined;
                var7 = var8.startsWith;
                var2 = 'discord:';
                var7 = var7.bind(var8)(var2);
                var2 = global;
                if(var7) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var8 = var2.location;
                var7 = var4;
                var8['href'] = var7;
                var9 = var2.process;
                var8 = var9.nextTick;
                var7 = function() {
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var7 = var8.bind(var9)(var7);
                return var7;
case 2:
                var7 = var2.document;
                var8 = var7.body;
                var6 = var8;
                var _closure2_slot1 = var8;
                var7 = null;
                if(!(var7 != var8)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var10 = var2.document;
                var9 = var10.createElement;
                var8 = 'iframe';
                var9 = var9.bind(var10)(var8);
                var5 = var9;
                var _closure2_slot2 = var9;
                var8 = var6;
                var6 = var8.appendChild;
                var6 = var6.bind(var8)(var9);
case 6: // try_start_0
                var6 = var5;
                var6 = var6.contentWindow;
                if(!(var7 != var6)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var5 = var5.contentWindow;
                var5 = var5.location;
                var5['href'] = var4;
case 7:
                var6 = var2.process;
                var5 = var6.nextTick;
                var4 = function() {
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
case 9: // try_end0
                _fun0002_ip = 10; continue _fun0002;
case 11: // catch_target0
                CatchBlockStart(arg_register=3);
                var5 = var4.name;
                var4 = 'NS_ERROR_UNKNOWN_PROTOCOL';
                if(!(var4 === var5)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                var6 = var2.process;
                var5 = var6.nextTick;
                var4 = function() {
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
case 10:
                var7 = var2.window;
                var6 = var7.setTimeout;
                var5 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var4 = null;
                        var3 = var4 == var1;
                        var1 = undefined;
                        var5 = undefined;
                        if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var3 = _closure2_slot2;
                        var5 = var3.parentElement;
case 13:
                        var6 = var4 != var5;
                        var3 = null;
                        if(!var6) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var3 = var5;
case 15:
                        if(!(var4 !== var3)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var4 = _closure2_slot1;
                        var3 = var4.removeChild;
                        var2 = _closure2_slot2;
                        var2 = var3.bind(var4)(var2);
case 17:
                        return var1;
                    }
                };
                var4 = 1000;
                var4 = var6.bind(var7)(var5, var4);
                return var3;
case 4:
                var3 = var2.process;
                var2 = var3.nextTick;
                var1 = function() {
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var4 = function launchChrome(arg1, arg2) {
            var1 = arg2;
            var _closure2_slot0 = var1;
            var6 = function handleBlur() {
                var1 = true;
                _closure2_slot1 = var1;
                var1 = undefined;
                return var1;
            };
            var _closure2_slot2 = var6;
            var1 = false;
            var _closure2_slot1 = var1;
            var1 = global;
            var5 = var1.window;
            var4 = var5.addEventListener;
            var3 = 'blur';
            var3 = var4.bind(var5)(var3, var6);
            var4 = var1.location;
            var3 = arg1;
            var4['href'] = var3;
            var4 = var1.setTimeout;
            var1 = undefined;
            var3 = function() {
                var1 = global;
                var5 = var1.window;
                var4 = var5.removeEventListener;
                var3 = _closure2_slot2;
                var2 = 'blur';
                var2 = var4.bind(var5)(var2, var3);
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = 1000;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var8 = function launchSteam(arg1, arg2) {
            var3 = arg2;
            var1 = undefined;
            var2 = false;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var6 = function launchMobile(arg1, arg2) {
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = global;
            var4 = var2.location;
            var3 = arg1;
            var4['href'] = var3;
            var3 = var2.process;
            var2 = var3.nextTick;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = global;
        var11 = var1.Object;
        var9 = var11.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var11)(var3, var1, var2);
        var2 = {};
        var9 = 0;
        var11 = var5[var9];
        var1 = undefined;
        var11 = var10.bind(var1)(var11);
        var11 = var11.os;
        var12 = null;
        var14 = var12 == var11;
        var13 = undefined;
        if(var14) { _fun0001_ip = 19; continue _fun0001 }
case 20:
        var13 = var11.family;
case 19:
        var11 = 'Android';
        if(!(var11 !== var13)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
        var11 = var5[var9];
        var11 = var10.bind(var1)(var11);
        var11 = var11.os;
        var14 = var12 == var11;
        var13 = undefined;
        if(var14) { _fun0001_ip = 23; continue _fun0001 }
case 24:
        var13 = var11.family;
case 23:
        var11 = 'iOS';
        if(!(var11 !== var13)) { _fun0001_ip = 21; continue _fun0001 }
case 25:
        var11 = var5[var9];
        var11 = var10.bind(var1)(var11);
        var13 = var11.layout;
        var11 = 'Gecko';
        if(!(var11 !== var13)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
        var11 = var5[var9];
        var11 = var10.bind(var1)(var11);
        var11 = var11.ua;
        if(!(var12 != var11)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
        var9 = var5[var9];
        var9 = var10.bind(var1)(var9);
        var11 = var9.ua;
        var10 = var11.indexOf;
        var9 = 'Valve Steam GameOverlay';
        var10 = var10.bind(var11)(var9);
        var9 = -1;
        if(!(var9 === var10)) { _fun0001_ip = 10; continue _fun0001 }
case 28:
        _fun0001_ip = 30; continue _fun0001;
case 10:
        var4 = var8;
case 30:
        _fun0001_ip = 31; continue _fun0001;
case 26:
        var4 = var7;
case 31:
        _fun0001_ip = 32; continue _fun0001;
case 21:
        var4 = var6;
case 32:
        var2['launch'] = var4;
        var4 = 1;
        var5 = var5[var4];
        var4 = require;
        var6 = var4.bind(var1)(var5);
        var5 = var6.fileFinishedImporting;
        var4 = 'utils/web/ProtocolUtils.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();