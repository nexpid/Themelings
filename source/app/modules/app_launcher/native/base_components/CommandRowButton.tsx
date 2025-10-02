// app/modules/app_launcher/native/base_components/CommandRowButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/base_components/CommandRowButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CommandRowIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.command;
            var _closure2_slot0 = var14;
            var9 = var1.context;
            var12 = var1.beforeExecuteCommand;
            var _closure2_slot1 = var12;
            var15 = var1.onExecuteCommand;
            var _closure2_slot2 = var15;
            var10 = var1.tryExecuteCommand;
            var _closure2_slot3 = var10;
            var11 = var1.sectionName;
            var _closure2_slot4 = var11;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var1 = var14.options;
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = new Array(0);
case 2:
            var1 = var1.length;
            var4 = 0;
            var1 = var1 > var4;
            var8 = _closure1_slot4;
            var7 = var8.useState;
            var6 = false;
            var13 = var7.bind(var8)(var6);
            var7 = _closure1_slot3;
            var6 = 2;
            var6 = var7.bind(var5)(var13, var6);
            var7 = var6[var4];
            var4 = 1;
            var4 = var6[var4];
            _closure2_slot5 = var4;
            var6 = _closure1_slot0;
            var13 = _closure1_slot1;
            var4 = 4;
            var4 = var13[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useCommandContext;
            var13 = var4.bind(var6)(var9);
            _closure2_slot6 = var13;
            var9 = var8.useCallback;
            var6 = _closure1_slot2;
            var4 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var4 = _closure2_slot5;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
                        var2 = _closure2_slot1;
                        var6 = null;
                        if(!(var6 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var2 = _closure2_slot1;
                        var2 = var2.bind(var5)();
case 6: // try_start_0
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var2 = 5;
                        var2 = var10[var2];
                        var7 = var9.bind(var5)(var2);
                        var4 = var7.executeAppLauncherCommand;
                        var2 = {};
                        var14 = _closure2_slot0;
                        var2['command'] = var14;
                        var8 = 6;
                        var8 = var10[var8];
                        var13 = var9.bind(var5)(var8);
                        var12 = var13.parseOptionValuesForSend;
                        var8 = _closure2_slot6;
                        var11 = var8.channel;
                        var8 = {};
                        var8 = var12.bind(var13)(var11, var14, var8);
                        var2['optionValues'] = var8;
                        var8 = _closure2_slot6;
                        var2['context'] = var8;
                        var8 = _closure2_slot4;
                        var2['sectionName'] = var8;
                        var8 = 7;
                        var8 = var10[var8];
                        var8 = var9.bind(var5)(var8);
                        var8 = var8.CommandOrigin;
                        var8 = var8.APP_LAUNCHER_APPLICATION_VIEW;
                        var2['commandOrigin'] = var8;
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address=180);
case 8:
                        return var2;
case 9:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var4 = _closure2_slot2;
                        if(!(var6 != var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var5)();
case 12: // try_end0
                        var6 = _closure2_slot5;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var5;
case 10:
                        var6 = _closure2_slot5;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 14: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot5;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 4:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var6.bind(var5)(var4);
            var4 = new Array(5);
            var4[0] = var15;
            var4[1] = var14;
            var4[2] = var13;
            var4[3] = var12;
            var4[4] = var11;
            var9 = var9.bind(var8)(var6, var4);
            _closure2_slot7 = var9;
            var6 = var8.useCallback;
            var4 = new Array(2);
            var4[0] = var10;
            var4[1] = var9;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure2_slot7;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0003_ip = 17; continue _fun0003;
case 15:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot7;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var6.bind(var8)(var3, var4);
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            if(var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var1 = 9;
            var1 = var6[var1];
            var1 = var3.bind(var5)(var1);
            var2 = var1.Button;
            var1 = {'size': 'sm', 'text': null, 'onPress': null, 'icon': null, 'iconPosition': 'end', 'grow': false, 'variant': 'tertiary'};
            var10 = 'sm';
            var9 = 10;
            var11 = var6[var9];
            var11 = var3.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var6[var9];
            var9 = var3.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.TXNS7e;
            var9 = var11.bind(var12)(var9);
            var1['text'] = var9;
            var1['onPress'] = var8;
            var8 = 11;
            var8 = var6[var8];
            var8 = var3.bind(var5)(var8);
            var9 = var8.SendMessageIcon;
            var8 = {};
            var8['size'] = var10;
            var8 = var4.bind(var5)(var9, var8);
            var1['icon'] = var8;
            var1['disabled'] = var7;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var2 = 8;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRowArrow;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 20:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();