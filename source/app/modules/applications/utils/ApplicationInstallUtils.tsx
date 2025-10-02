// app/modules/applications/utils/ApplicationInstallUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function canInstallApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.customInstallUrl;
            var3 = var2.installParams;
            var5 = var2.integrationTypesConfig;
            var2 = null;
            var1 = var2 != var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2 != var3;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var2 != var5;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var5 = var3.bind(var4)(var5);
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = var4.oauth2_install_params;
case 8:
                    var1 = var3 != var1;
                    if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = var3 == var4;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = var4.oauth2InstallParams;
case 12:
                    var1 = var3 != var2;
case 10:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.BuiltInSectionId;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/applications/utils/ApplicationInstallUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['canInstallApplication'] = var4;
    var4 = function isAppUserInstallable(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = var1.customInstallUrl;
            var5 = var1.installParams;
            var3 = var1.integrationTypesConfig;
            var4 = _closure1_slot4;
            var1 = {};
            var1['customInstallUrl'] = var6;
            var1['installParams'] = var5;
            var1['integrationTypesConfig'] = var3;
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var4 = null;
            var1 = var4 != var3;
case 14:
            if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationIntegrationType;
            var2 = var2.USER_INSTALL;
            var1 = var2 in var3;
case 16:
            return var1;
        }
    };
    var3['isAppUserInstallable'] = var4;
    var2 = function shouldInstallApplicationOnDemand(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.applicationId;
            var8 = var1.channel;
            var5 = var1.commandIntegrationTypes;
            var4 = null;
            var2 = var4 != var5;
            if(!var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var3 = var5.includes;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var6 = var6[var1];
            var1 = undefined;
            var1 = var7.bind(var1)(var6);
            var1 = var1.ApplicationIntegrationType;
            var1 = var1.USER_INSTALL;
            var1 = var3.bind(var5)(var1);
            var2 = !var1;
case 18:
            var1 = !var2;
            if(var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var2 = _closure1_slot3;
            var2 = var2.BUILT_IN;
            var3 = var9 === var2;
            var2 = !var3;
            if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var6 = _closure1_slot2;
            var3 = var6.hasUserStateApplication;
            var3 = var3.bind(var6)(var9);
            var3 = !var3;
            if(!var3) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var4 = var4 == var8;
            if(var4) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var7 = _closure1_slot2;
            var6 = var7.hasContextStateApplication;
            var5 = {};
            var5['applicationId'] = var9;
            var9 = var8.id;
            var5['channelId'] = var9;
            var8 = var8.guild_id;
            var5['guildId'] = var8;
            var5 = var6.bind(var7)(var5);
            var4 = !var5;
case 26:
            var3 = var4;
case 24:
            var2 = var3;
case 22:
            var1 = var2;
case 20:
            return var1;
        }
    };
    var3['shouldInstallApplicationOnDemand'] = var2;
    return var1;
})();