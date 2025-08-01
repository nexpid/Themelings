// app/modules/oauth2/Authorize.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_NUX_SERVER;
    var _closure1_slot5 = var7;
    var7 = var4.FAVORITES;
    var _closure1_slot6 = var7;
    var4 = var4.ME;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/Authorize.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function filterScopes(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.RemovedScopes;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var4 = var1.includes;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 4;
            var3 = var3[var6];
            var5 = undefined;
            var3 = var7.bind(var5)(var3);
            var3 = var3.OAuth2Scopes;
            var3 = var3.BOT;
            var3 = var4.bind(var1)(var3);
            if(!var3) { _fun0001_ip = 112; continue _fun0001 }
 70:
            var7 = var1.includes;
            var8 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var4 = var8.bind(var5)(var4);
            var4 = var4.OAuth2Scopes;
            var4 = var4.APPLICATIONS_COMMANDS;
            var4 = var7.bind(var1)(var4);
            var3 = !var4;
 112:
            if(!var3) { _fun0001_ip = 154; continue _fun0001 }
 115:
            var3 = var1.push;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.OAuth2Scopes;
            var2 = var2.APPLICATIONS_COMMANDS;
            var2 = var3.bind(var1)(var2);
 154:
            return var1;
        }
    };
    var3['filterScopes'] = var4;
    var2 = function parseOAuth2AuthorizeProps(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = undefined;
            var10 = undefined;
            var12 = undefined;
            var13 = undefined;
            var11 = undefined;
            var3 = undefined;
            var2 = undefined;
            var8 = undefined;
            var7 = undefined;
            var5 = undefined;
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 5;
            var1 = var14[var1];
            var16 = var4.bind(var6)(var1);
            var15 = var16.parse;
            var4 = {};
            var1 = 'bracket';
            var4['arrayFormat'] = var1;
            var1 = arg1;
            var2 = var15.bind(var16)(var1, var4);
            var4 = _closure1_slot1;
            var1 = 6;
            var1 = var14[var1];
            var1 = var4.bind(var6)(var1);
            var8 = var1.NONE;
 93: // try_start_0
            var4 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 7;
            var1 = var14[var1];
            var14 = var4.bind(var6)(var1);
            var4 = var14.deserialize;
            var1 = var2;
            var15 = var1.permissions;
            var1 = null;
            var15 = var1 != var15;
            var17 = '0';
            var1 = var17;
            if(!var15) { _fun0002_ip = 175; continue _fun0002 }
 146:
            var15 = var2;
            var16 = var15.permissions;
            var15 = '';
            var1 = var17;
            if(!(var15 !== var16)) { _fun0002_ip = 175; continue _fun0002 }
 166:
            var15 = var2;
            var1 = var15.permissions;
 175:
            var8 = var4.bind(var14)(var1);
 180: // try_end0
            _fun0002_ip = 184; continue _fun0002;
 182: // catch_target0
            CatchBlockStart(arg_register=0);
 184:
            var1 = var2;
            var7 = var1.channel_id;
            var1 = var1.guild_id;
            var12 = var1;
            var4 = null;
            if(!(var4 == var1)) { _fun0002_ip = 242; continue _fun0002 }
 206:
            var15 = _closure1_slot3;
            var14 = var15.getChannel;
            var1 = var7;
            var1 = var14.bind(var15)(var1);
            var13 = var1;
            var14 = var4 == var1;
            var1 = undefined;
            if(var14) { _fun0002_ip = 240; continue _fun0002 }
 235:
            var1 = var13.guild_id;
 240:
            _fun0002_ip = 245; continue _fun0002;
 242:
            var1 = var12;
 245:
            var10 = var1;
            if(!(var4 == var1)) { _fun0002_ip = 268; continue _fun0002 }
 252:
            var12 = _closure1_slot4;
            var1 = var12.getGuildId;
            var1 = var1.bind(var12)();
            _fun0002_ip = 271; continue _fun0002;
 268:
            var1 = var10;
 271:
            var12 = _closure1_slot7;
            var10 = new Array(3);
            var10[0] = var12;
            var12 = _closure1_slot6;
            var10[1] = var12;
            var9 = _closure1_slot5;
            var10[2] = var9;
            var9 = var10.includes;
            var9 = var9.bind(var10)(var1);
            var10 = var1;
            var1 = undefined;
            if(var9) { _fun0002_ip = 332; continue _fun0002 }
 317:
            var12 = var4 != var10;
            var9 = undefined;
            if(!var12) { _fun0002_ip = 329; continue _fun0002 }
 326:
            var9 = var10;
 329:
            var1 = var9;
 332:
            var5 = var1;
            var1 = {};
            var9 = var2;
            var9 = var9.client_id;
            var11 = var9;
            var12 = var4 != var9;
            var10 = '';
            var9 = var10;
            if(!var12) { _fun0002_ip = 366; continue _fun0002 }
 363:
            var9 = var11;
 366:
            var1['clientId'] = var9;
            var9 = var2;
            var9 = var9.scope;
            var3 = var9;
            var9 = var4 != var9;
            if(!var9) { _fun0002_ip = 393; continue _fun0002 }
 390:
            var10 = var3;
 393:
            var9 = var10.split;
            var3 = ' ';
            var10 = var9.bind(var10)(var3);
            var9 = var10.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var3 = var9.bind(var10)(var3);
            var1['scopes'] = var3;
            var3 = var2;
            var9 = var3.response_type;
            var1['responseType'] = var9;
            var9 = var3.redirect_uri;
            var1['redirectUri'] = var9;
            var9 = var3.code_challenge;
            var1['codeChallenge'] = var9;
            var9 = var3.code_challenge_method;
            var1['codeChallengeMethod'] = var9;
            var9 = var3.state;
            var1['state'] = var9;
            var1['permissions'] = var8;
            var1['channelId'] = var7;
            var1['guildId'] = var5;
            var5 = var3.prompt;
            var1['prompt'] = var5;
            var7 = var3.disable_guild_select;
            var5 = 'true';
            var5 = var5 === var7;
            var1['disableGuildSelect'] = var5;
            var3 = var3.integration_type;
            var4 = var4 == var3;
            var3 = undefined;
            if(var4) { _fun0002_ip = 565; continue _fun0002 }
 543:
            var4 = global;
            var5 = var4.Number;
            var4 = var2;
            var4 = var4.integration_type;
            var3 = var5.bind(var6)(var4);
 565:
            var1['integrationType'] = var3;
            var2 = var2.nonce;
            var1['nonce'] = var2;
            return var1;
        }
    };
    var3['parseOAuth2AuthorizeProps'] = var2;
    return var1;
})();