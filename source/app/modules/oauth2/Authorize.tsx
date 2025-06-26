// app/modules/oauth2/Authorize.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.EMPTY_NUX_SERVER;
    var _closure1_slot5 = golfie;
    golfie = tangon.FAVORITES;
    var _closure1_slot6 = golfie;
    tangon = tangon.ME;
    var _closure1_slot7 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/oauth2/Authorize.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: filterScopes
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                zuuluu = entity.RemovedScopes;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            tangon = entity.includes;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 4;
            zuuluu = zuuluu[oscard];
            report = undefined;
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.OAuth2Scopes;
            zuuluu = zuuluu.BOT;
            zuuluu = tangon.bind(entity)(zuuluu);
            if(!zuuluu) { _fun00002_ip = 112; continue _fun00001 }
 70:
            golfie = entity.includes;
            option = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[oscard];
            tangon = option.bind(report)(tangon);
            tangon = tangon.OAuth2Scopes;
            tangon = tangon.APPLICATIONS_COMMANDS;
            tangon = golfie.bind(entity)(tangon);
            zuuluu = !tangon;
 112:
            if(!zuuluu) { _fun00002_ip = 154; continue _fun00001 }
 115:
            zuuluu = entity.push;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.OAuth2Scopes;
            michal = michal.APPLICATIONS_COMMANDS;
            michal = zuuluu.bind(entity)(michal);
 154:
            return entity;
        }
    };
    zuuluu['filterScopes'] = tangon;
    michal = function(argFoo) { // Original name: parseOAuth2AuthorizeProps
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = undefined;
            offset = undefined;
            romeon = undefined;
            foxtra = undefined;
            yankee = undefined;
            zuuluu = undefined;
            michal = undefined;
            option = undefined;
            golfie = undefined;
            report = undefined;
            tangon = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 5;
            entity = backup[entity];
            sizing = tangon.bind(oscard)(entity);
            kiloes = sizing.parse;
            tangon = {};
            entity = 'bracket';
            tangon['arrayFormat'] = entity;
            entity = argFoo;
            michal = kiloes.bind(sizing)(entity, tangon);
            tangon = _closure1_slot1;
            entity = 6;
            entity = backup[entity];
            entity = tangon.bind(oscard)(entity);
            option = entity.NONE;
 93: // try_start_0
            tangon = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 7;
            entity = backup[entity];
            backup = tangon.bind(oscard)(entity);
            tangon = backup.deserialize;
            entity = michal;
            kiloes = entity.permissions;
            entity = null;
            kiloes = entity != kiloes;
            output = '0';
            entity = output;
            if(!kiloes) { _fun00004_ip = 175; continue _fun00003 }
 146:
            kiloes = michal;
            sizing = kiloes.permissions;
            kiloes = '';
            entity = output;
            if(!(kiloes !== sizing)) { _fun00004_ip = 175; continue _fun00003 }
 166:
            kiloes = michal;
            entity = kiloes.permissions;
 175:
            option = tangon.bind(backup)(entity);
 180: // try_end0
            _fun00004_ip = 184; continue _fun00003;
 182: // catch_target0
            CatchBlockStart(arg_register=0);
 184:
            entity = michal;
            golfie = entity.channel_id;
            entity = entity.guild_id;
            romeon = entity;
            tangon = null;
            if(!(tangon == entity)) { _fun00004_ip = 242; continue _fun00003 }
 206:
            kiloes = _closure1_slot3;
            backup = kiloes.getChannel;
            entity = golfie;
            entity = backup.bind(kiloes)(entity);
            foxtra = entity;
            backup = tangon == entity;
            entity = undefined;
            if(backup) { _fun00004_ip = 240; continue _fun00003 }
 235:
            entity = foxtra.guild_id;
 240:
            _fun00004_ip = 245; continue _fun00003;
 242:
            entity = romeon;
 245:
            offset = entity;
            if(!(tangon == entity)) { _fun00004_ip = 268; continue _fun00003 }
 252:
            romeon = _closure1_slot4;
            entity = romeon.getGuildId;
            entity = entity.bind(romeon)();
            _fun00004_ip = 271; continue _fun00003;
 268:
            entity = offset;
 271:
            romeon = _closure1_slot7;
            offset = new Array(3);
            offset[0] = romeon;
            romeon = _closure1_slot6;
            offset[1] = romeon;
            verify = _closure1_slot5;
            offset[2] = verify;
            verify = offset.includes;
            verify = verify.bind(offset)(entity);
            offset = entity;
            entity = undefined;
            if(verify) { _fun00004_ip = 332; continue _fun00003 }
 317:
            romeon = tangon != offset;
            verify = undefined;
            if(!romeon) { _fun00004_ip = 329; continue _fun00003 }
 326:
            verify = offset;
 329:
            entity = verify;
 332:
            report = entity;
            entity = {};
            verify = michal;
            verify = verify.client_id;
            yankee = verify;
            romeon = tangon != verify;
            offset = '';
            verify = offset;
            if(!romeon) { _fun00004_ip = 366; continue _fun00003 }
 363:
            verify = yankee;
 366:
            entity['clientId'] = verify;
            verify = michal;
            verify = verify.scope;
            zuuluu = verify;
            verify = tangon != verify;
            if(!verify) { _fun00004_ip = 393; continue _fun00003 }
 390:
            offset = zuuluu;
 393:
            verify = offset.split;
            zuuluu = ' ';
            offset = verify.bind(offset)(zuuluu);
            verify = offset.filter;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.length;
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            zuuluu = verify.bind(offset)(zuuluu);
            entity['scopes'] = zuuluu;
            zuuluu = michal;
            verify = zuuluu.response_type;
            entity['responseType'] = verify;
            verify = zuuluu.redirect_uri;
            entity['redirectUri'] = verify;
            verify = zuuluu.code_challenge;
            entity['codeChallenge'] = verify;
            verify = zuuluu.code_challenge_method;
            entity['codeChallengeMethod'] = verify;
            verify = zuuluu.state;
            entity['state'] = verify;
            entity['permissions'] = option;
            entity['channelId'] = golfie;
            entity['guildId'] = report;
            report = zuuluu.prompt;
            entity['prompt'] = report;
            golfie = zuuluu.disable_guild_select;
            report = 'true';
            report = report === golfie;
            entity['disableGuildSelect'] = report;
            zuuluu = zuuluu.integration_type;
            tangon = tangon == zuuluu;
            zuuluu = undefined;
            if(tangon) { _fun00004_ip = 565; continue _fun00003 }
 543:
            tangon = global;
            report = tangon.Number;
            tangon = michal;
            tangon = tangon.integration_type;
            zuuluu = report.bind(oscard)(tangon);
 565:
            entity['integrationType'] = zuuluu;
            michal = michal.nonce;
            entity['nonce'] = michal;
            return entity;
        }
    };
    zuuluu['parseOAuth2AuthorizeProps'] = michal;
    return entity;
})();