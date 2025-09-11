// app/modules/user_settings/UserSettingsProtoUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/UserSettingsProtoUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getProtoFieldClass(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg2;
            var _closure2_slot0 = var5;
            var2 = arg1;
            var3 = var2.fields;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.localName;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 51; continue _fun0001 }
 40:
            var1 = var2.T;
            var1 = var1.bind(var2)();
            return var1;
 51:
            var1 = global;
            var3 = var1.Error;
            var4 = var1.String;
            var2 = undefined;
            var5 = var4.bind(var2)(var5);
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'Unknown proto field name ';
            var1 = var4.bind(var1)(var5);
            var1 = var3.bind(var2)(var1);
            throw var1;
        }
    };
    var3['getProtoFieldClass'] = var4;
    var2 = function createModifiedProto(arg1, arg2, arg3, arg4, arg5) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var7 = arg3;
            var3 = arg4;
            var1 = null;
            if(!(var1 == var5)) { _fun0002_ip = 26; continue _fun0002 }
 15:
            var2 = var7.create;
            var4 = var2.bind(var7)();
            _fun0002_ip = 79; continue _fun0002;
 26:
            var6 = var7.fromBinary;
            var2 = var7.toBinary;
            var5 = var2.bind(var7)(var5);
            var9 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 0;
            var8 = var8[var2];
            var2 = undefined;
            var2 = var9.bind(var2)(var8);
            var2 = var2.BINARY_READ_OPTIONS;
            var4 = var6.bind(var7)(var5, var2);
 79:
            var5 = arg2;
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var2 = false;
            if(!(var2 !== var5)) { _fun0002_ip = 113; continue _fun0002 }
 95:
            var2 = var3.create;
            var2 = var2.bind(var3)();
            var3 = arg5;
            var2[var3] = var4;
            return var2;
 113:
            return var1;
        }
    };
    var3['createModifiedProto'] = var2;
    return var1;
})();