// app/modules/main_tabs_v2/native/settings/definitions/ScanQrCodeSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var4 = true;
    var2['value'] = var4;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var7 = var7.bind(var1)(var2);
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var9 = var2.RendererType;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativePermissionTypes;
    var _closure1_slot3 = var2;
    var2 = 3;
    var2 = var6[var2];
    var12 = var5.bind(var1)(var2);
    var11 = var12.debounce;
    var2 = function* () {
        var1 = function* anon_0_() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                StartGenerator();
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0001_ip = 146; continue _fun0001 }
 10: // try_start_0
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var8 = undefined;
                var4 = var3.bind(var8)(var2);
                var3 = var4.requestPermission;
                var2 = _closure1_slot3;
                var2 = var2.CAMERA;
                var2 = var3.bind(var4)(var2);
                SaveGenerator(address=60);
 58:
                return var2;
 60:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                if(var3) { _fun0001_ip = 136; continue _fun0001 }
 66:
                if(!var2) { _fun0001_ip = 134; continue _fun0001 }
 69:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var4 = 5;
                var4 = var3[var4];
                var5 = var5.bind(var8)(var4);
                var4 = var5.pushLazy;
                var7 = _closure1_slot0;
                var6 = 7;
                var6 = var3[var6];
                var7 = var7.bind(var8)(var6);
                var6 = 6;
                var6 = var3[var6];
                var3 = var3.paths;
                var3 = var7.bind(var8)(var6, var3);
                var3 = var4.bind(var5)(var3);
 134: // try_end0
                _fun0001_ip = 141; continue _fun0001;
 136:
                return var2;
 139: // catch_target0
                CatchBlockStart(arg_register=1);
 141:
                var2 = undefined;
                return var2;
 146:
                return var1;
            }
        };
        return var1;
    };
    var10 = var7.bind(var1)(var2);
    var7 = 1000;
    var2 = {'leading': true, 'trailing': false};
    var7 = var11.bind(var12)(var10, var7, var2);
    var2 = {};
    var9 = var9.PRESSABLE;
    var2['type'] = var9;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 8;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.RC0kJy;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var8 = null;
    var2['parent'] = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.QrCodeIcon;
    var2['IconComponent'] = var8;
    var2['onPress'] = var7;
    var2['withArrow'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/ScanQrCodeSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();