// app/modules/links/native/LinkingModule.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativeModules;
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function tryOpenUrlAsUniversalLink(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 63; continue _fun0001 }
 40:
            var1 = _closure1_slot3;
            var3 = var1.DCDLinkingManager;
            var1 = var3.tryOpenUrlAsUniversalLink;
            var1 = var1.bind(var3)(var4);
            _fun0001_ip = 133; continue _fun0001;
 63:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.tryOpenUrlAsUniversalLink;
            var2 = var2.bind(var3)(var4);
            var3 = global;
            var5 = var3.Promise;
            if(var2) { _fun0001_ip = 117; continue _fun0001 }
 105:
            var2 = var5.reject;
            var2 = var2.bind(var5)();
            _fun0001_ip = 130; continue _fun0001;
 117:
            var4 = var5.resolve;
            var3 = true;
            var2 = var4.bind(var5)(var3);
 130:
            var1 = var2;
 133:
            return var1;
        }
    };
    var2['tryOpenUrlAsUniversalLink'] = var7;
    var4 = function tryOpenScheme(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0002_ip = 63; continue _fun0002 }
 40:
            var1 = _closure1_slot3;
            var3 = var1.DCDLinkingManager;
            var1 = var3.tryOpenScheme;
            var1 = var1.bind(var3)(var4);
            _fun0002_ip = 133; continue _fun0002;
 63:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.tryOpenScheme;
            var2 = var2.bind(var3)(var4);
            var3 = global;
            var5 = var3.Promise;
            if(var2) { _fun0002_ip = 117; continue _fun0002 }
 105:
            var2 = var5.reject;
            var2 = var2.bind(var5)();
            _fun0002_ip = 130; continue _fun0002;
 117:
            var4 = var5.resolve;
            var3 = true;
            var2 = var4.bind(var5)(var3);
 130:
            var1 = var2;
 133:
            return var1;
        }
    };
    var2['tryOpenScheme'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/native/LinkingModule.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();