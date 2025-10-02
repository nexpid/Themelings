// app/modules/applications/installApplicationOnDemandIfNeeded.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _installApplicationOnDemandIfNeeded() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var10 = var2.applicationId;
                    var _closure4_slot0 = var10;
                    var12 = var2.channel;
                    var11 = var2.commandIntegrationTypes;
                    var9 = var2.appLauncherContext;
                    var _closure4_slot1 = var9;
                    var8 = undefined;
                    var _closure4_slot2 = var8;
                    var _closure4_slot3 = var8;
                    SaveGenerator(address=59);
case 4:
                    return var8;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var7 = var6.bind(var8)(var3);
                    var6 = var7.shouldInstallApplicationOnDemand;
                    var3 = {};
                    var3['applicationId'] = var10;
                    var3['channel'] = var12;
                    var3['commandIntegrationTypes'] = var11;
                    var3 = var6.bind(var7)(var3);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var3 = global;
                    var7 = var3.Promise;
                    var6 = var7.resolve;
                    var3 = {};
                    var11 = true;
                    var3['isAuthorized'] = var11;
                    var3 = var6.bind(var7)(var3);
                    return var3;
case 8:
                    var6 = _closure1_slot4;
                    var3 = var6.getApplication;
                    var11 = var3.bind(var6)(var10);
                    var6 = null;
                    if(!(var6 == var11)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var3 = 5;
                    var3 = var12[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = var7.fetchApplication;
                    var3 = var3.bind(var7)(var10);
                    SaveGenerator(address=207);
case 12:
                    return var3;
case 13:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var12 = _closure1_slot3;
                    var7 = var12.createFromServer;
                    var11 = var7.bind(var12)(var3);
case 10:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var7 = 6;
                    var7 = var13[var7];
                    var7 = var12.bind(var8)(var7);
                    var7 = var7.ApplicationIntegrationType;
                    var12 = var7.USER_INSTALL;
                    _closure4_slot2 = var12;
                    var13 = var6 == var11;
                    var7 = undefined;
                    if(var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var11 = var11.integrationTypesConfig;
                    var13 = var6 == var11;
                    var7 = undefined;
                    if(var13) { _fun0001_ip = 16; continue _fun0001 }
case 18:
                    var11 = var11[var12];
                    var12 = var6 == var11;
                    var7 = undefined;
                    if(var12) { _fun0001_ip = 16; continue _fun0001 }
case 19:
                    var11 = var11.oauth2InstallParams;
                    var12 = var6 == var11;
                    var7 = undefined;
                    if(var12) { _fun0001_ip = 16; continue _fun0001 }
case 20:
                    var7 = var11.scopes;
case 16:
                    _closure4_slot3 = var7;
                    if(!(var6 != var9)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var6 = 7;
                    var6 = var11[var6];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.trackWithMetadata;
                    var5 = _closure1_slot5;
                    var6 = var5.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED;
                    var5 = {};
                    var5['application_id'] = var10;
                    var10 = var9.location;
                    var5['location'] = var10;
                    var10 = var9.sectionName;
                    var5['section_name'] = var10;
                    var9 = var9.entrypoint;
                    var5['source'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
case 21:
                    var5 = global;
                    var6 = var5.Promise;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var15 = function(arg1) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 8;
                        var2 = var4[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var2 = var6.dismissKeyboard;
                        var2 = var2.bind(var6)();
                        var2 = 9;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openOAuth2Modal;
                        var2 = {};
                        var7 = _closure4_slot0;
                        var2['clientId'] = var7;
                        var7 = _closure4_slot2;
                        var2['integrationType'] = var7;
                        var6 = _closure4_slot3;
                        var2['scopes'] = var6;
                        var5 = function callback(arg1) {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                var1 = arg1;
                                var1 = var1.location;
                                var2 = null;
                                if(!(var2 == var1)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                                var4 = _closure5_slot0;
                                var3 = {};
                                var1 = false;
                                var3['isAuthorized'] = var1;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                _fun0002_ip = 25; continue _fun0002;
case 23:
                                var1 = _closure4_slot1;
                                if(!(var2 != var1)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 7;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.trackWithMetadata;
                                var1 = _closure1_slot5;
                                var2 = var1.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED;
                                var1 = {};
                                var6 = _closure4_slot0;
                                var1['application_id'] = var6;
                                var5 = _closure4_slot1;
                                var6 = var5.location;
                                var1['location'] = var6;
                                var6 = var5.sectionName;
                                var1['section_name'] = var6;
                                var5 = var5.entrypoint;
                                var1['source'] = var5;
                                var1 = var3.bind(var4)(var2, var1);
case 26:
                                var3 = _closure5_slot0;
                                var2 = {};
                                var1 = true;
                                var2['isAuthorized'] = var1;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
case 25:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2['callback'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var16 = var5;
                    var4 = new var16[var6](var15, var14);
                    var4 = var4 instanceof Object ? var4 : var5;
                    return var4;
case 14:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/installApplicationOnDemandIfNeeded.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function installApplicationOnDemandIfNeeded() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['installApplicationOnDemandIfNeeded'] = var2;
    return var1;
})();