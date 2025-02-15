// app/modules/oauth2/Authorize.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/oauth2/Authorize.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: filterScopes
        _fun54589: for(var _fun54589_ip = 0; ; ) switch(_fun54589_ip) {
 0:
            zulu = argFoo;
            mike = zulu.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                zulu = entity.RemovedScopes;
                mike = zulu.includes;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            tango = entity.includes;
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            oscar = 3;
            zulu = zulu[oscar];
            report = undefined;
            zulu = golf.bind(report)(zulu);
            zulu = zulu.OAuth2Scopes;
            zulu = zulu.BOT;
            zulu = tango.bind(entity)(zulu);
            if(!zulu) { _fun54589_ip = 112; continue _fun54589 }
 70:
            golf = entity.includes;
            options = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[oscar];
            tango = options.bind(report)(tango);
            tango = tango.OAuth2Scopes;
            tango = tango.APPLICATIONS_COMMANDS;
            tango = golf.bind(entity)(tango);
            zulu = !tango;
 112:
            if(!zulu) { _fun54589_ip = 154; continue _fun54589 }
 115:
            zulu = entity.push;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.OAuth2Scopes;
            mike = mike.APPLICATIONS_COMMANDS;
            mike = zulu.bind(entity)(mike);
 154:
            return entity;
        }
    };
    zulu['filterScopes'] = tango;
    mike = function(argFoo) { // Original name: parseOAuth2AuthorizeProps
        _fun54591: for(var _fun54591_ip = 0; ; ) switch(_fun54591_ip) {
 0:
            oscar = undefined;
            verify = undefined;
            offset = undefined;
            foxtrot = undefined;
            backup = undefined;
            yankee = undefined;
            zulu = undefined;
            mike = undefined;
            options = undefined;
            golf = undefined;
            report = undefined;
            romeo = _closure1_slot0;
            kilo = _closure1_slot2;
            tango = 4;
            tango = kilo[tango];
            output = romeo.bind(oscar)(tango);
            sizing = output.parse;
            romeo = {};
            tango = 'bracket';
            romeo['arrayFormat'] = tango;
            tango = argFoo;
            mike = sizing.bind(output)(tango, romeo);
            romeo = _closure1_slot1;
            tango = 5;
            tango = kilo[tango];
            tango = romeo.bind(oscar)(tango);
            options = tango.NONE;
 95: // try_start_0
            romeo = _closure1_slot1;
            kilo = _closure1_slot2;
            tango = 6;
            tango = kilo[tango];
            kilo = romeo.bind(oscar)(tango);
            romeo = kilo.deserialize;
            tango = mike;
            sizing = tango.permissions;
            tango = null;
            sizing = tango != sizing;
            result = '0';
            tango = result;
            if(!sizing) { _fun54591_ip = 177; continue _fun54591 }
 148:
            sizing = mike;
            output = sizing.permissions;
            sizing = '';
            tango = result;
            if(!(sizing !== output)) { _fun54591_ip = 177; continue _fun54591 }
 168:
            sizing = mike;
            tango = sizing.permissions;
 177:
            options = romeo.bind(kilo)(tango);
 182: // try_end0
            _fun54591_ip = 186; continue _fun54591;
 184: // catch_target0
            CatchBlockStart(arg_register=3);
 186:
            tango = mike;
            golf = tango.channel_id;
            romeo = tango.guild_id;
            foxtrot = romeo;
            tango = null;
            if(!(tango == romeo)) { _fun54591_ip = 244; continue _fun54591 }
 208:
            sizing = _closure1_slot3;
            kilo = sizing.getChannel;
            romeo = golf;
            romeo = kilo.bind(sizing)(romeo);
            backup = romeo;
            kilo = tango == romeo;
            romeo = undefined;
            if(kilo) { _fun54591_ip = 242; continue _fun54591 }
 237:
            romeo = backup.guild_id;
 242:
            _fun54591_ip = 247; continue _fun54591;
 244:
            romeo = foxtrot;
 247:
            offset = romeo;
            if(!(tango == romeo)) { _fun54591_ip = 270; continue _fun54591 }
 254:
            romeo = _closure1_slot4;
            entity = romeo.getGuildId;
            entity = entity.bind(romeo)();
            _fun54591_ip = 273; continue _fun54591;
 270:
            entity = offset;
 273:
            verify = entity;
            offset = tango != entity;
            entity = undefined;
            if(!offset) { _fun54591_ip = 288; continue _fun54591 }
 285:
            entity = verify;
 288:
            report = entity;
            entity = {};
            verify = mike;
            verify = verify.client_id;
            yankee = verify;
            romeo = tango != verify;
            offset = '';
            verify = offset;
            if(!romeo) { _fun54591_ip = 322; continue _fun54591 }
 319:
            verify = yankee;
 322:
            entity['clientId'] = verify;
            verify = mike;
            verify = verify.scope;
            zulu = verify;
            verify = tango != verify;
            if(!verify) { _fun54591_ip = 349; continue _fun54591 }
 346:
            offset = zulu;
 349:
            verify = offset.split;
            zulu = ' ';
            offset = verify.bind(offset)(zulu);
            verify = offset.filter;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.length;
                entity = 0;
                entity = mike > entity;
                return entity;
            };
            zulu = verify.bind(offset)(zulu);
            entity['scopes'] = zulu;
            zulu = mike;
            verify = zulu.response_type;
            entity['responseType'] = verify;
            verify = zulu.redirect_uri;
            entity['redirectUri'] = verify;
            verify = zulu.code_challenge;
            entity['codeChallenge'] = verify;
            verify = zulu.code_challenge_method;
            entity['codeChallengeMethod'] = verify;
            verify = zulu.state;
            entity['state'] = verify;
            entity['permissions'] = options;
            entity['channelId'] = golf;
            entity['guildId'] = report;
            report = zulu.prompt;
            entity['prompt'] = report;
            golf = zulu.disable_guild_select;
            report = 'true';
            report = report === golf;
            entity['disableGuildSelect'] = report;
            zulu = zulu.integration_type;
            tango = tango == zulu;
            zulu = undefined;
            if(tango) { _fun54591_ip = 521; continue _fun54591 }
 499:
            tango = global;
            report = tango.Number;
            tango = mike;
            tango = tango.integration_type;
            zulu = report.bind(oscar)(tango);
 521:
            entity['integrationType'] = zulu;
            mike = mike.nonce;
            entity['nonce'] = mike;
            return entity;
        }
    };
    zulu['parseOAuth2AuthorizeProps'] = mike;
    return entity;
})();