// app/modules/rpc/native/server/commands/auth.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
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
    tangon = report.bind(entity)(tangon);
    option = tangon.ComponentActions;
    var _closure1_slot4 = option;
    option = tangon.ApplicationFlags;
    var _closure1_slot5 = option;
    tangon = tangon.RPCErrors;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    golfie = golfie.bind(entity)(tangon);
    tangon = function(argFoo) {
        michal = argFoo;
        zuuluu = michal.clientId;
        var _closure2_slot0 = zuuluu;
        zuuluu = michal.authorizations;
        var _closure2_slot1 = zuuluu;
        zuuluu = michal.scopes;
        var _closure2_slot2 = zuuluu;
        zuuluu = michal.parsedPermissions;
        var _closure2_slot3 = zuuluu;
        zuuluu = michal.responseType;
        var _closure2_slot4 = zuuluu;
        zuuluu = michal.redirectUri;
        var _closure2_slot5 = zuuluu;
        zuuluu = michal.codeChallenge;
        var _closure2_slot6 = zuuluu;
        zuuluu = michal.codeChallengeMethod;
        var _closure2_slot7 = zuuluu;
        zuuluu = michal.state;
        var _closure2_slot8 = zuuluu;
        zuuluu = michal.guildId;
        var _closure2_slot9 = zuuluu;
        zuuluu = michal.channelId;
        var _closure2_slot10 = zuuluu;
        zuuluu = michal.prompt;
        var _closure2_slot11 = zuuluu;
        zuuluu = michal.disableGuildSelect;
        var _closure2_slot12 = zuuluu;
        zuuluu = michal.disclosures;
        var _closure2_slot13 = zuuluu;
        michal = michal.integrationType;
        var _closure2_slot14 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                entity = _closure2_slot14;
                golfie = null;
                report = golfie != entity;
                entity = undefined;
                tangon = undefined;
                if(!report) { _fun00002_ip = 70; continue _fun00001 }
 36:
                report = _closure2_slot1;
                oscard = golfie == report;
                report = undefined;
                if(oscard) { _fun00002_ip = 67; continue _fun00001 }
 49:
                verify = _closure2_slot1;
                option = verify.get;
                oscard = _closure2_slot14;
                report = option.bind(verify)(oscard);
 67:
                tangon = report;
 70:
                report = golfie == tangon;
                oscard = undefined;
                if(report) { _fun00002_ip = 84; continue _fun00001 }
 79:
                oscard = tangon.application;
 84:
                if(!(golfie == oscard)) { _fun00002_ip = 110; continue _fun00001 }
 88:
                option = _closure1_slot3;
                report = option.getApplication;
                tangon = _closure2_slot0;
                oscard = report.bind(option)(tangon);
 110:
                report = {};
                tangon = _closure2_slot0;
                report['clientId'] = tangon;
                tangon = _closure2_slot2;
                if(!(golfie == tangon)) { _fun00002_ip = 135; continue _fun00001 }
 129:
                tangon = new Array(0);
                _fun00002_ip = 139; continue _fun00001;
 135:
                tangon = _closure2_slot2;
 139:
                report['scopes'] = tangon;
                tangon = _closure2_slot4;
                report['responseType'] = tangon;
                tangon = _closure2_slot5;
                report['redirectUri'] = tangon;
                tangon = _closure2_slot6;
                report['codeChallenge'] = tangon;
                tangon = _closure2_slot7;
                report['codeChallengeMethod'] = tangon;
                tangon = _closure2_slot8;
                report['state'] = tangon;
                tangon = _closure2_slot9;
                report['guildId'] = tangon;
                tangon = _closure2_slot10;
                report['channelId'] = tangon;
                tangon = _closure2_slot3;
                report['permissions'] = tangon;
                tangon = _closure2_slot11;
                report['prompt'] = tangon;
                tangon = _closure2_slot12;
                option = 'boolean';
                tangon = typeof tangon;
                if(!(option !== tangon)) { _fun00002_ip = 251; continue _fun00001 }
 237:
                option = _closure2_slot12;
                tangon = 'true';
                tangon = tangon === option;
                _fun00002_ip = 255; continue _fun00001;
 251:
                tangon = _closure2_slot12;
 255:
                report['disableGuildSelect'] = tangon;
                tangon = false;
                report['showLogout'] = tangon;
                zuuluu = function(argFoo) { // Original name: callback
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.location;
                        michal = null;
                        if(!(michal == zuuluu)) { _fun00004_ip = 99; continue _fun00003 }
 14:
                        tangon = _closure3_slot1;
                        oscard = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 2;
                        report = report[zuuluu];
                        zuuluu = undefined;
                        golfie = oscard.bind(zuuluu)(report);
                        oscard = {};
                        michal = _closure1_slot6;
                        michal = michal.OAUTH2_ERROR;
                        oscard['errorCode'] = michal;
                        michal = golfie.prototype;
                        report = Object.create(michal, {constructor: {value: golfie}});
                        option = 'User cancelled authorization';
                        offset = report;
                        verify = oscard;
                        michal = new offset[golfie](verify, option, golfie);
                        michal = michal instanceof Object ? michal : report;
                        michal = tangon.bind(zuuluu)(michal);
                        _fun00004_ip = 118; continue _fun00003;
 99:
                        zuuluu = _closure3_slot0;
                        michal = entity.location;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 118:
                        entity = undefined;
                        return entity;
                    }
                };
                report['callback'] = zuuluu;
                zuuluu = golfie != oscard;
                if(!zuuluu) { _fun00002_ip = 297; continue _fun00001 }
 288:
                tangon = oscard.flags;
                zuuluu = golfie != tangon;
 297:
                if(!zuuluu) { _fun00002_ip = 350; continue _fun00001 }
 300:
                option = _closure1_slot0;
                verify = _closure1_slot2;
                golfie = 3;
                golfie = verify[golfie];
                option = option.bind(entity)(golfie);
                golfie = option.hasFlag;
                oscard = oscard.flags;
                tangon = _closure1_slot5;
                tangon = tangon.EMBEDDED;
                zuuluu = golfie.bind(option)(oscard, tangon);
 350:
                report['isEmbeddedFlow'] = zuuluu;
                zuuluu = _closure2_slot13;
                report['disclosures'] = zuuluu;
                michal = _closure2_slot14;
                report['integrationType'] = michal;
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 4;
                zuuluu = oscard[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = zuuluu.ComponentDispatch;
                zuuluu = tangon.dispatch;
                michal = _closure1_slot4;
                michal = michal.SHOW_OAUTH2_MODAL;
                michal = zuuluu.bind(tangon)(michal, report);
                return entity;
            }
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    michal = function() { // Original name: onAuthorizeValidationPassed
        entity = undefined;
        return entity;
    };
    michal = golfie.bind(entity)(tangon, michal);
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/native/server/commands/auth.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();