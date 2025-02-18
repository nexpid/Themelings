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
    tangon = 7;
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
                entity = 2;
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
            oscard = 3;
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
            verify = undefined;
            offset = undefined;
            foxtra = undefined;
            backup = undefined;
            yankee = undefined;
            zuuluu = undefined;
            michal = undefined;
            option = undefined;
            golfie = undefined;
            report = undefined;
            romeon = _closure1_slot0;
            kiloes = _closure1_slot2;
            tangon = 4;
            tangon = kiloes[tangon];
            output = romeon.bind(oscard)(tangon);
            sizing = output.parse;
            romeon = {};
            tangon = 'bracket';
            romeon['arrayFormat'] = tangon;
            tangon = argFoo;
            michal = sizing.bind(output)(tangon, romeon);
            romeon = _closure1_slot1;
            tangon = 5;
            tangon = kiloes[tangon];
            tangon = romeon.bind(oscard)(tangon);
            option = tangon.NONE;
 95: // try_start_0
            romeon = _closure1_slot1;
            kiloes = _closure1_slot2;
            tangon = 6;
            tangon = kiloes[tangon];
            kiloes = romeon.bind(oscard)(tangon);
            romeon = kiloes.deserialize;
            tangon = michal;
            sizing = tangon.permissions;
            tangon = null;
            sizing = tangon != sizing;
            result = '0';
            tangon = result;
            if(!sizing) { _fun00004_ip = 177; continue _fun00003 }
 148:
            sizing = michal;
            output = sizing.permissions;
            sizing = '';
            tangon = result;
            if(!(sizing !== output)) { _fun00004_ip = 177; continue _fun00003 }
 168:
            sizing = michal;
            tangon = sizing.permissions;
 177:
            option = romeon.bind(kiloes)(tangon);
 182: // try_end0
            _fun00004_ip = 186; continue _fun00003;
 184: // catch_target0
            CatchBlockStart(arg_register=3);
 186:
            tangon = michal;
            golfie = tangon.channel_id;
            romeon = tangon.guild_id;
            foxtra = romeon;
            tangon = null;
            if(!(tangon == romeon)) { _fun00004_ip = 244; continue _fun00003 }
 208:
            sizing = _closure1_slot3;
            kiloes = sizing.getChannel;
            romeon = golfie;
            romeon = kiloes.bind(sizing)(romeon);
            backup = romeon;
            kiloes = tangon == romeon;
            romeon = undefined;
            if(kiloes) { _fun00004_ip = 242; continue _fun00003 }
 237:
            romeon = backup.guild_id;
 242:
            _fun00004_ip = 247; continue _fun00003;
 244:
            romeon = foxtra;
 247:
            offset = romeon;
            if(!(tangon == romeon)) { _fun00004_ip = 270; continue _fun00003 }
 254:
            romeon = _closure1_slot4;
            entity = romeon.getGuildId;
            entity = entity.bind(romeon)();
            _fun00004_ip = 273; continue _fun00003;
 270:
            entity = offset;
 273:
            verify = entity;
            offset = tangon != entity;
            entity = undefined;
            if(!offset) { _fun00004_ip = 288; continue _fun00003 }
 285:
            entity = verify;
 288:
            report = entity;
            entity = {};
            verify = michal;
            verify = verify.client_id;
            yankee = verify;
            romeon = tangon != verify;
            offset = '';
            verify = offset;
            if(!romeon) { _fun00004_ip = 322; continue _fun00003 }
 319:
            verify = yankee;
 322:
            entity['clientId'] = verify;
            verify = michal;
            verify = verify.scope;
            zuuluu = verify;
            verify = tangon != verify;
            if(!verify) { _fun00004_ip = 349; continue _fun00003 }
 346:
            offset = zuuluu;
 349:
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
            if(tangon) { _fun00004_ip = 521; continue _fun00003 }
 499:
            tangon = global;
            report = tangon.Number;
            tangon = michal;
            tangon = tangon.integration_type;
            zuuluu = report.bind(oscard)(tangon);
 521:
            entity['integrationType'] = zuuluu;
            michal = michal.nonce;
            entity['nonce'] = michal;
            return entity;
        }
    };
    zuuluu['parseOAuth2AuthorizeProps'] = michal;
    return entity;
})();