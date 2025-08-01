// app/modules/guild_settings/GuildSettingsConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var5 = {};
    var4 = 0;
    var5['DISPLAY'] = var4;
    var1 = 'DISPLAY';
    var5[var4] = var1;
    var1 = 1;
    var5['PERMISSIONS'] = var1;
    var4 = 'PERMISSIONS';
    var5[var1] = var4;
    var8 = 2;
    var5['MEMBERS'] = var8;
    var4 = 'MEMBERS';
    var5[var8] = var4;
    var8 = 3;
    var5['VERIFICATIONS'] = var8;
    var4 = 'VERIFICATIONS';
    var5[var8] = var4;
    var4 = {};
    var8 = function afk_channel_id() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 0;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.KuYcnZ;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['afk_channel_id'] = var8;
    var8 = function public_updates_channel_id() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 0;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.vAyDGR;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['public_updates_channel_id'] = var8;
    var8 = function safety_alerts_channel_id() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 0;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.sMkYEx;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['safety_alerts_channel_id'] = var8;
    var8 = function system_channel_id() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 0;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.NASFnp;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['system_channel_id'] = var8;
    var _closure1_slot2 = var4;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_settings/GuildSettingsConstants.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = 5;
    var3['MAX_SUBCATEGORIES'] = var6;
    var6 = 10;
    var3['MAX_KEYWORDS'] = var6;
    var6 = 30;
    var3['MAX_KEYWORD_LENGTH'] = var6;
    var3['GuildSettingsRoleEditSections'] = var5;
    var3['ERROR_KEY_TO_LABEL_FUNC'] = var4;
    var2 = function getSettingsErrorMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = global;
            var3 = var2.Object;
            var1 = var3.keys;
            var1 = var1.bind(var3)(var4);
            var1 = var1.length;
            var3 = 0;
            if(!(var3 !== var1)) { _fun0001_ip = 132; continue _fun0001 }
 32:
            var5 = var2.Object;
            var1 = var5.keys;
            var1 = var1.bind(var5)(var4);
            var3 = var1[var3];
            var1 = _closure1_slot2;
            var8 = var1[var3];
            var1 = null;
            var7 = var1 == var8;
            var6 = undefined;
            if(var7) { _fun0001_ip = 88; continue _fun0001 }
 74:
            var7 = var8.call;
            var5 = _closure1_slot2;
            var6 = var7.bind(var8)(var5);
 88:
            if(!(var1 == var6)) { _fun0001_ip = 98; continue _fun0001 }
 92:
            var1 = var4[var3];
            _fun0001_ip = 130; continue _fun0001;
 98:
            var5 = var4[var3];
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '(';
            var2 = ') ';
            var1 = var4.bind(var3)(var6, var2, var5);
 130:
            return var1;
 132:
            var1 = null;
            return var1;
        }
    };
    var3['getSettingsErrorMessage'] = var2;
    var2 = 'https://discord.gg';
    var3['VANITY_URL_INVITE_ENDPOINT'] = var2;
    return var1;
})();