// app/modules/rpc/native/server/commands/auth.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ComponentActions;
    var _closure1_slot4 = var8;
    var8 = var4.ApplicationFlags;
    var _closure1_slot5 = var8;
    var4 = var4.RPCErrors;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = function(arg1) {
        var2 = arg1;
        var3 = var2.clientId;
        var _closure2_slot0 = var3;
        var3 = var2.authorizations;
        var _closure2_slot1 = var3;
        var3 = var2.scopes;
        var _closure2_slot2 = var3;
        var3 = var2.parsedPermissions;
        var _closure2_slot3 = var3;
        var3 = var2.responseType;
        var _closure2_slot4 = var3;
        var3 = var2.redirectUri;
        var _closure2_slot5 = var3;
        var3 = var2.codeChallenge;
        var _closure2_slot6 = var3;
        var3 = var2.codeChallengeMethod;
        var _closure2_slot7 = var3;
        var3 = var2.state;
        var _closure2_slot8 = var3;
        var3 = var2.guildId;
        var _closure2_slot9 = var3;
        var3 = var2.channelId;
        var _closure2_slot10 = var3;
        var3 = var2.prompt;
        var _closure2_slot11 = var3;
        var3 = var2.disableGuildSelect;
        var _closure2_slot12 = var3;
        var3 = var2.disclosures;
        var _closure2_slot13 = var3;
        var2 = var2.integrationType;
        var _closure2_slot14 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = _closure2_slot14;
                var7 = null;
                var5 = var7 != var1;
                var1 = undefined;
                var4 = undefined;
                if(!var5) { _fun0001_ip = 70; continue _fun0001 }
 36:
                var5 = _closure2_slot1;
                var6 = var7 == var5;
                var5 = undefined;
                if(var6) { _fun0001_ip = 67; continue _fun0001 }
 49:
                var9 = _closure2_slot1;
                var8 = var9.get;
                var6 = _closure2_slot14;
                var5 = var8.bind(var9)(var6);
 67:
                var4 = var5;
 70:
                var5 = var7 == var4;
                var6 = undefined;
                if(var5) { _fun0001_ip = 84; continue _fun0001 }
 79:
                var6 = var4.application;
 84:
                if(!(var7 == var6)) { _fun0001_ip = 110; continue _fun0001 }
 88:
                var8 = _closure1_slot3;
                var5 = var8.getApplication;
                var4 = _closure2_slot0;
                var6 = var5.bind(var8)(var4);
 110:
                var5 = {};
                var4 = _closure2_slot0;
                var5['clientId'] = var4;
                var4 = _closure2_slot2;
                if(!(var7 == var4)) { _fun0001_ip = 135; continue _fun0001 }
 129:
                var4 = new Array(0);
                _fun0001_ip = 139; continue _fun0001;
 135:
                var4 = _closure2_slot2;
 139:
                var5['scopes'] = var4;
                var4 = _closure2_slot4;
                var5['responseType'] = var4;
                var4 = _closure2_slot5;
                var5['redirectUri'] = var4;
                var4 = _closure2_slot6;
                var5['codeChallenge'] = var4;
                var4 = _closure2_slot7;
                var5['codeChallengeMethod'] = var4;
                var4 = _closure2_slot8;
                var5['state'] = var4;
                var4 = _closure2_slot9;
                var5['guildId'] = var4;
                var4 = _closure2_slot10;
                var5['channelId'] = var4;
                var4 = _closure2_slot3;
                var5['permissions'] = var4;
                var4 = _closure2_slot11;
                var5['prompt'] = var4;
                var4 = _closure2_slot12;
                var8 = 'boolean';
                var4 = typeof var4;
                if(!(var8 !== var4)) { _fun0001_ip = 251; continue _fun0001 }
 237:
                var8 = _closure2_slot12;
                var4 = 'true';
                var4 = var4 === var8;
                _fun0001_ip = 255; continue _fun0001;
 251:
                var4 = _closure2_slot12;
 255:
                var5['disableGuildSelect'] = var4;
                var4 = false;
                var5['showLogout'] = var4;
                var3 = function callback(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.location;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0002_ip = 99; continue _fun0002 }
 14:
                        var4 = _closure3_slot1;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 2;
                        var5 = var5[var3];
                        var3 = undefined;
                        var7 = var6.bind(var3)(var5);
                        var6 = {};
                        var2 = _closure1_slot6;
                        var2 = var2.OAUTH2_ERROR;
                        var6['errorCode'] = var2;
                        var2 = var7.prototype;
                        var5 = Object.create(var2, {constructor: {value: var7}});
                        var8 = 'User cancelled authorization';
                        var10 = var5;
                        var9 = var6;
                        var2 = new var10[var7](var9, var8, var7);
                        var2 = var2 instanceof Object ? var2 : var5;
                        var2 = var4.bind(var3)(var2);
                        _fun0002_ip = 118; continue _fun0002;
 99:
                        var3 = _closure3_slot0;
                        var2 = var1.location;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 118:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5['callback'] = var3;
                var3 = var7 != var6;
                if(!var3) { _fun0001_ip = 297; continue _fun0001 }
 288:
                var4 = var6.flags;
                var3 = var7 != var4;
 297:
                if(!var3) { _fun0001_ip = 350; continue _fun0001 }
 300:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 3;
                var7 = var9[var7];
                var8 = var8.bind(var1)(var7);
                var7 = var8.hasFlag;
                var6 = var6.flags;
                var4 = _closure1_slot5;
                var4 = var4.EMBEDDED;
                var3 = var7.bind(var8)(var6, var4);
 350:
                var5['isEmbeddedFlow'] = var3;
                var3 = _closure2_slot13;
                var5['disclosures'] = var3;
                var2 = _closure2_slot14;
                var5['integrationType'] = var2;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var3 = var6[var3];
                var3 = var4.bind(var1)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.dispatch;
                var2 = _closure1_slot4;
                var2 = var2.SHOW_OAUTH2_MODAL;
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            }
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var2 = function onAuthorizeValidationPassed() {
        var1 = undefined;
        return var1;
    };
    var2 = var7.bind(var1)(var4, var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/native/server/commands/auth.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();