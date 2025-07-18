// app/modules/applications/utils/ApplicationInstallUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function canInstallApplication(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.customInstallUrl;
            var3 = var2.installParams;
            var5 = var2.integrationTypesConfig;
            var2 = null;
            var1 = var2 != var1;
            if(var1) { _fun0001_ip = 34; continue _fun0001 }
 30:
            var1 = var2 != var3;
 34:
            if(var1) { _fun0001_ip = 83; continue _fun0001 }
 37:
            var2 = var2 != var5;
            if(!var2) { _fun0001_ip = 80; continue _fun0001 }
 44:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var5 = var3.bind(var4)(var5);
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 20; continue _fun0002 }
 14:
                    var1 = var4.oauth2_install_params;
 20:
                    var1 = var3 != var1;
                    if(var1) { _fun0002_ip = 46; continue _fun0002 }
 27:
                    var5 = var3 == var4;
                    var2 = undefined;
                    if(var5) { _fun0002_ip = 42; continue _fun0002 }
 36:
                    var2 = var4.oauth2InstallParams;
 42:
                    var1 = var3 != var2;
 46:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
 80:
            var1 = var2;
 83:
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
    var5 = native3;
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
 0:
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
            if(!var1) { _fun0003_ip = 61; continue _fun0003 }
 55:
            var4 = null;
            var1 = var4 != var3;
 61:
            if(!var1) { _fun0003_ip = 100; continue _fun0003 }
 64:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationIntegrationType;
            var2 = var2.USER_INSTALL;
            var1 = var2 in var3;
 100:
            return var1;
        }
    };
    var3['isAppUserInstallable'] = var4;
    var2 = function shouldInstallApplicationOnDemand(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = var1.applicationId;
            var8 = var1.channel;
            var5 = var1.commandIntegrationTypes;
            var4 = null;
            var2 = var4 != var5;
            if(!var2) { _fun0004_ip = 78; continue _fun0004 }
 28:
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
 78:
            var1 = !var2;
            if(var2) { _fun0004_ip = 186; continue _fun0004 }
 84:
            var2 = _closure1_slot3;
            var2 = var2.BUILT_IN;
            var3 = var9 === var2;
            var2 = !var3;
            if(var3) { _fun0004_ip = 183; continue _fun0004 }
 107:
            var6 = _closure1_slot2;
            var3 = var6.hasUserStateApplication;
            var3 = var3.bind(var6)(var9);
            var3 = !var3;
            if(!var3) { _fun0004_ip = 180; continue _fun0004 }
 128:
            var4 = var4 == var8;
            if(var4) { _fun0004_ip = 177; continue _fun0004 }
 135:
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
 177:
            var3 = var4;
 180:
            var2 = var3;
 183:
            var1 = var2;
 186:
            return var1;
        }
    };
    var3['shouldInstallApplicationOnDemand'] = var2;
    return var1;
})();