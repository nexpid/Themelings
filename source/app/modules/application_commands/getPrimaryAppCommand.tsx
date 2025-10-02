// app/modules/application_commands/getPrimaryAppCommand.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var1 = function _getPrimaryAppCommand() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var9 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = _closure1_slot4;
                    var3 = var5.getChannel;
                    var2 = arg1;
                    var10 = var3.bind(var5)(var2);
                    var5 = null;
                    var2 = var5 != var10;
                    var8 = undefined;
                    var3 = undefined;
                    if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = _closure1_slot11;
                    var6 = {};
                    var6['channel'] = var10;
                    var11 = 'channel';
                    var6['type'] = var11;
                    var6 = var7.bind(var8)(var6, var9);
                    var2 = var5 == var6;
                    var3 = var6;
case 4:
                    if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = _closure1_slot5;
                    var2 = {};
                    var7 = 'application';
                    var2['type'] = var7;
                    var2['applicationId'] = var9;
                    var2 = var6.bind(var8)(var2);
                    SaveGenerator(address=107);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var7 = _closure1_slot11;
                    var6 = {};
                    var6['channel'] = var10;
                    var10 = 'channel';
                    var6['type'] = var10;
                    var3 = var7.bind(var8)(var6, var9);
case 6:
                    if(!(var5 == var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var5 = global;
                    var6 = var5.Error;
                    var13 = _closure1_slot8;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var14 = var5;
                    var4 = new var14[var6](var13, var12);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 12:
                    return var3;
case 10:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var7 = function queryForPrimaryAppCommand(arg1, arg2) {
        var5 = _closure1_slot7;
        var4 = var5.query;
        var3 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var1 = 4;
        var1 = var8[var1];
        var6 = undefined;
        var1 = var7.bind(var6)(var1);
        var1 = var1.ApplicationCommandType;
        var2 = var1.PRIMARY_ENTRY_POINT;
        var1 = new Array(1);
        var1[0] = var2;
        var3['commandTypes'] = var1;
        var2 = {'placeholderCount': 1, 'scoreMethod': null, 'applicationId': null, 'allowFetch': false, 'allowApplicationState': true};
        var1 = 5;
        var1 = var8[var1];
        var1 = var7.bind(var6)(var1);
        var1 = var1.ScoreMethod;
        var1 = var1.COMMAND_ONLY;
        var2['scoreMethod'] = var1;
        var1 = arg2;
        var2['applicationId'] = var1;
        var1 = arg1;
        var1 = var4.bind(var5)(var1, var3, var2);
        var2 = var1.commands;
        var1 = 0;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot11 = var7;
    var6 = function useGetPrimaryAppCommand(arg1, arg2) {
        var8 = arg2;
        var _closure2_slot0 = var8;
        var5 = _closure1_slot13;
        var4 = undefined;
        var1 = arg1;
        var1 = var5.bind(var4)(var1, var8);
        var4 = var1.commands;
        var6 = var1.loading;
        var _closure2_slot1 = var6;
        var1 = 0;
        var1 = var4[var1];
        var4 = null;
        var7 = var4 != var1;
        var _closure2_slot2 = var7;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot2;
                if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var1 = _closure2_slot1;
case 14:
                if(var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.requestApplicationCommandIndex;
                var1 = {};
                var5 = 'application';
                var1['type'] = var5;
                var4 = _closure2_slot0;
                var1['applicationId'] = var4;
                var1 = var2.bind(var3)(var1);
case 16:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot12 = var6;
    var5 = function useQueryForPrimaryAppCommand(arg1, arg2) {
        var5 = _closure1_slot6;
        var4 = {};
        var2 = _closure1_slot9;
        var4['commandTypes'] = var2;
        var3 = {'placeholderCount': 1, 'scoreMethod': null, 'applicationId': null, 'allowFetch': false, 'allowApplicationState': true};
        var6 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var6.bind(var2)(var1);
        var1 = var1.ScoreMethod;
        var1 = var1.COMMAND_ONLY;
        var3['scoreMethod'] = var1;
        var1 = arg2;
        var3['applicationId'] = var1;
        var1 = arg1;
        var1 = var5.bind(var2)(var1, var4, var3);
        return var1;
    };
    var _closure1_slot13 = var5;
    var2 = function isPrimaryAppCommandUsableInAppDM(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            if(!(var4 != var3)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = var3.integration_types;
            var1 = var4 != var1;
            if(!var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var6 = var3.integration_types;
            var5 = var6.includes;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 7;
            var7 = var7[var2];
            var2 = undefined;
            var2 = var8.bind(var2)(var7);
            var2 = var2.ApplicationIntegrationType;
            var2 = var2.USER_INSTALL;
            var1 = var5.bind(var6)(var2);
case 20:
            var2 = var3.contexts;
            var2 = var4 != var2;
            if(!var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var5 = var3.contexts;
            var4 = var5.includes;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 4;
            var6 = var6[var3];
            var3 = undefined;
            var3 = var7.bind(var3)(var6);
            var3 = var3.InteractionContextType;
            var3 = var3.BOT_DM;
            var2 = var4.bind(var5)(var3);
case 22:
            if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var1 = var2;
case 24:
            return var1;
case 18:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var11[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var12 = var11[var8];
    var8 = metroImportAll;
    var8 = var8.bind(var1)(var12);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var11[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var12 = var11[var8];
    var12 = var10.bind(var1)(var12);
    var13 = var12.getOrFetchApplicationCommandIndexForTarget;
    var _closure1_slot5 = var13;
    var12 = var12.useQueryState;
    var _closure1_slot6 = var12;
    var8 = var11[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 'no primary app command for application';
    var _closure1_slot8 = var8;
    var9 = 4;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.ApplicationCommandType;
    var12 = var9.PRIMARY_ENTRY_POINT;
    var9 = new Array(1);
    var9[0] = var12;
    var _closure1_slot9 = var9;
    var9 = 8;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/application_commands/getPrimaryAppCommand.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function getPrimaryAppCommand() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var9;
    var3['NO_PRIMARY_APP_COMMAND_ERROR'] = var8;
    var3['queryForPrimaryAppCommand'] = var7;
    var3['useGetPrimaryAppCommand'] = var6;
    var3['useQueryForPrimaryAppCommand'] = var5;
    var4 = function useIsPrimaryAppCommandUsableInAppDM(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = var1.context;
            var2 = var1.applicationId;
            var6 = var1.botUserId;
            var1 = _closure1_slot12;
            var5 = undefined;
            var4 = var1.bind(var5)(var4, var2);
            var2 = null;
            var1 = var2 != var4;
            if(!var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var2 = var2 != var6;
            if(!var2) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var3 = _closure1_slot14;
            var2 = var3.bind(var5)(var4);
case 28:
            var1 = var2;
case 26:
            return var1;
        }
    };
    var3['useIsPrimaryAppCommandUsableInAppDM'] = var4;
    var3['isPrimaryAppCommandUsableInAppDM'] = var2;
    return var1;
})();