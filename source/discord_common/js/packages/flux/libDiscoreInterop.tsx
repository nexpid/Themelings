// discord_common/js/packages/flux/libDiscoreInterop.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var3, var4, var5);
    var4 = false;
    var _closure1_slot0 = var4;
    var4 = {};
    var5 = function createContext() {
        var1 = true;
        _closure1_slot0 = var1;
        var1 = undefined;
        return var1;
    };
    var4['createContext'] = var5;
    var5 = function enterContext() {
        var1 = undefined;
        return var1;
    };
    var4['enterContext'] = var5;
    var5 = function exitContext() {
        var1 = undefined;
        return var1;
    };
    var4['exitContext'] = var5;
    var5 = function destroyContext() {
        var1 = undefined;
        return var1;
    };
    var4['destroyContext'] = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var4;
    var1 = var1.Map;
    var4 = var1.prototype;
    var4 = Object.create(var4, {constructor: {value: var1}});
    var11 = var4;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot3 = var1;
    var4 = native7;
    var1 = 0;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/libDiscoreInterop.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function registerLibDiscoreJsContextAPI(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot2;
            var1 = _closure1_slot1;
            if(!(var3 === var1)) { _fun0001_ip = 69; continue _fun0001 }
 15:
            var1 = _closure1_slot0;
            if(var1) { _fun0001_ip = 33; continue _fun0001 }
 22:
            var1 = arg1;
            _closure1_slot2 = var1;
            var1 = undefined;
            return var1;
 33:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'Cannot register libdiscore JS context API after components have mounted.';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
 69:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'Cannot re-register lib discore JS context API.';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['registerLibDiscoreJsContextAPI'] = var4;
    var4 = function createContext() {
        var2 = _closure1_slot2;
        var1 = var2.createContext;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['createContext'] = var4;
    var4 = function enterContext(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.enterContext;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['enterContext'] = var4;
    var4 = function exitContext(arg1, arg2) {
        var4 = _closure1_slot2;
        var3 = var4.exitContext;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['exitContext'] = var4;
    var4 = function destroyContext(arg1) {
        var3 = arg1;
        var4 = _closure1_slot3;
        var2 = var4.delete;
        var2 = var2.bind(var4)(var3);
        var2 = _closure1_slot2;
        var1 = var2.destroyContext;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var3['destroyContext'] = var4;
    var2 = function attachContextListener(arg1, arg2) {
        var4 = _closure1_slot3;
        var3 = var4.set;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['attachContextListener'] = var2;
    return var1;
})();