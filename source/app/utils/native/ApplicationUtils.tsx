// app/utils/native/ApplicationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var4 = function openOAuth2Modal(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var5 = _closure1_slot1;
        var3 = _closure1_slot3;
        var4 = 7;
        var6 = var3[var4];
        var1 = undefined;
        var10 = var5.bind(var1)(var6);
        var9 = var10.popWithKey;
        var6 = _closure1_slot5;
        var6 = var9.bind(var10)(var6);
        var4 = var3[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.pushLazy;
        var9 = _closure1_slot0;
        var4 = 9;
        var4 = var3[var4];
        var9 = var9.bind(var1)(var4);
        var4 = 8;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var9.bind(var1)(var4, var3);
        var3 = {};
        var13 = var3;
        var12 = var8;
        var8 = copyDataProperties(var13, var12);
        var8 = function dismissOAuthModal() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var3 = var2.dismissOAuthModal;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 33; continue _fun0001 }
 19:
                var2 = _closure2_slot0;
                var1 = var2.dismissOAuthModal;
                var1 = var1.bind(var2)();
 33:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 7;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.popWithKey;
                var2 = _closure1_slot5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var7 = 'dismissOAuthModal';
        var3[var7] = var8;
        var2 = _closure1_slot5;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.OAUTH2_AUTHORIZE_MODAL_KEY;
    var _closure1_slot5 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/native/ApplicationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function installApplication(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.applicationId;
            var5 = var1.customInstallUrl;
            var _closure2_slot0 = var5;
            var15 = var1.installParams;
            var3 = var1.integrationTypesConfig;
            var8 = var1.guildId;
            var7 = var1.channelId;
            var6 = var1.disableGuildSelect;
            var10 = var1.source;
            var1 = var1.oauth2Callback;
            var _closure2_slot1 = var1;
            var12 = null;
            if(!(var12 == var5)) { _fun0002_ip = 458; continue _fun0002 }
 74:
            if(!(var12 != var3)) { _fun0002_ip = 118; continue _fun0002 }
 78:
            var1 = global;
            var2 = var1.Object;
            var1 = var2.values;
            var3 = var1.bind(var2)(var3);
            var2 = var3.some;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var3 = null;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 20; continue _fun0003 }
 14:
                    var1 = var4.oauth2_install_params;
 20:
                    var1 = var3 != var1;
                    if(var1) { _fun0003_ip = 46; continue _fun0003 }
 27:
                    var5 = var3 == var4;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 42; continue _fun0003 }
 36:
                    var2 = var4.oauth2InstallParams;
 42:
                    var1 = var3 != var2;
 46:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0002_ip = 340; continue _fun0002 }
 118:
            if(!(var12 != var15)) { _fun0002_ip = 336; continue _fun0002 }
 125:
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var14 = var2.bind(var3)(var1);
            var9 = var14.track;
            var1 = _closure1_slot4;
            var2 = var1.APPLICATION_ADD_TO_SERVER_CLICKED;
            var1 = {};
            var1['application_id'] = var11;
            var16 = 'in_app';
            var1['auth_type'] = var16;
            var1['source'] = var10;
            var16 = 'mobile_native';
            var1['device_platform'] = var16;
            var1 = var9.bind(var14)(var2, var1);
            var2 = _closure1_slot6;
            var1 = {};
            var1['clientId'] = var11;
            var1['guildId'] = var8;
            var1['channelId'] = var7;
            var1['disableGuildSelect'] = var6;
            var14 = var12 == var15;
            var9 = undefined;
            if(var14) { _fun0002_ip = 241; continue _fun0002 }
 235:
            var9 = var15.scopes;
 241:
            var1['scopes'] = var9;
            var14 = var12 == var15;
            var9 = undefined;
            if(var14) { _fun0002_ip = 261; continue _fun0002 }
 255:
            var9 = var15.permissions;
 261:
            var14 = var12 != var9;
            var9 = undefined;
            if(!var14) { _fun0002_ip = 316; continue _fun0002 }
 270:
            var14 = _closure1_slot2;
            var16 = _closure1_slot3;
            var13 = 6;
            var13 = var16[var13];
            var14 = var14.bind(var3)(var13);
            var13 = var14.deserialize;
            var16 = var12 == var15;
            var12 = undefined;
            if(var16) { _fun0002_ip = 311; continue _fun0002 }
 305:
            var12 = var15.permissions;
 311:
            var9 = var13.bind(var14)(var12);
 316:
            var1['permissions'] = var9;
            var9 = function callback(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.bind(var1)(var3);
                    var5 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0004_ip = 55; continue _fun0004 }
 46:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)(var3);
 55:
                    return var1;
                }
            };
            var1['callback'] = var9;
            var1 = var2.bind(var3)(var1);
 336:
            var1 = undefined;
            return var1;
 340:
            var9 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var13 = var9.bind(var1)(var3);
            var12 = var13.track;
            var3 = _closure1_slot4;
            var9 = var3.APPLICATION_ADD_TO_SERVER_CLICKED;
            var3 = {};
            var3['application_id'] = var11;
            var14 = 'in_app';
            var3['auth_type'] = var14;
            var3['source'] = var10;
            var14 = 'mobile_native';
            var3['device_platform'] = var14;
            var3 = var12.bind(var13)(var9, var3);
            var3 = _closure1_slot6;
            var2 = {};
            var2['clientId'] = var11;
            var2['guildId'] = var8;
            var2['channelId'] = var7;
            var2['disableGuildSelect'] = var6;
            var6 = function callback(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.bind(var1)(var3);
                    var5 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0005_ip = 55; continue _fun0005 }
 46:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)(var3);
 55:
                    return var1;
                }
            };
            var2['callback'] = var6;
            var2 = var3.bind(var1)(var2);
            return var1;
 458:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 2;
            var2 = var6[var2];
            var3 = undefined;
            var9 = var7.bind(var3)(var2);
            var8 = var9.track;
            var2 = _closure1_slot4;
            var7 = var2.APPLICATION_ADD_TO_SERVER_CLICKED;
            var2 = {};
            var2['application_id'] = var11;
            var11 = 'custom_url';
            var2['auth_type'] = var11;
            var2['source'] = var10;
            var10 = 'mobile_native';
            var2['device_platform'] = var10;
            var2 = var8.bind(var9)(var7, var2);
            var2 = _closure1_slot0;
            var1 = 3;
            var1 = var6[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.handleClick;
            var1 = {};
            var1['href'] = var5;
            var4 = function onConfirm() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openURL;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onConfirm'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['installApplication'] = var5;
    var3['openOAuth2Modal'] = var4;
    var2 = function installPrivateChannelIntegration(arg1) {
        var1 = arg1;
        var9 = var1.applicationId;
        var8 = var1.channelId;
        var7 = var1.callback;
        var4 = _closure1_slot1;
        var11 = _closure1_slot3;
        var1 = 7;
        var3 = var11[var1];
        var1 = undefined;
        var6 = var4.bind(var1)(var3);
        var5 = var6.pushLazy;
        var10 = _closure1_slot0;
        var3 = 9;
        var3 = var11[var3];
        var12 = var10.bind(var1)(var3);
        var3 = 8;
        var4 = var11[var3];
        var3 = var11.paths;
        var4 = var12.bind(var1)(var4, var3);
        var3 = {};
        var3['clientId'] = var9;
        var9 = 10;
        var9 = var11[var9];
        var9 = var10.bind(var1)(var9);
        var9 = var9.OAuth2Scopes;
        var10 = var9.APPLICATIONS_COMMANDS;
        var9 = new Array(1);
        var9[0] = var10;
        var3['scopes'] = var9;
        var3['channelId'] = var8;
        var8 = function dismissOAuthModal() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.popWithKey;
            var1 = _closure1_slot5;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['dismissOAuthModal'] = var8;
        var8 = true;
        var3['disableGuildSelect'] = var8;
        var3['callback'] = var7;
        var2 = _closure1_slot5;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['installPrivateChannelIntegration'] = var2;
    return var1;
})();