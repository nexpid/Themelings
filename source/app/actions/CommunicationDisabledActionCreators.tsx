// app/actions/CommunicationDisabledActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = {};
    var4 = function setCommunicationDisabledDuration(arg1, arg2, arg3, arg4, arg5, arg6) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var2 = arg5;
        var _closure2_slot4 = var2;
        var2 = arg6;
        var _closure2_slot5 = var2;
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = _closure2_slot2;
                    var7 = null;
                    var2 = var7 != var2;
                    if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 1;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.bind(var3)();
                    var4 = var5.add;
                    var3 = _closure2_slot2;
                    var2 = 's';
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = var3.toISOString;
                    var7 = var2.bind(var3)();
case 4:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 2;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.setCommunicationDisabledUntil;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2['guildId'] = var8;
                    var8 = _closure2_slot1;
                    var2['userId'] = var8;
                    var2['communicationDisabledUntilTimestamp'] = var7;
                    var7 = _closure2_slot2;
                    var2['duration'] = var7;
                    var7 = _closure2_slot3;
                    var2['reason'] = var7;
                    var7 = _closure2_slot4;
                    var2['location'] = var7;
                    var6 = _closure2_slot5;
                    var2['moderatorReportId'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=181);
case 6:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['setCommunicationDisabledDuration'] = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/CommunicationDisabledActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();