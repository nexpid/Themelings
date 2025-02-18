// app/modules/instant_invite/InviteCodeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: generateInviteKeyFromExtraData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            option = entity.baseCode;
            golfie = entity.guildScheduledEventId;
            michal = null;
            entity = option;
            if(!(michal != golfie)) { _fun00002_ip = 66; continue _fun00001 }
 24:
            yankee = _closure1_slot4;
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            backup = '';
            romeon = '?';
            offset = '=';
            foxtra = option;
            verify = golfie;
            entity = backup[report](foxtra, romeon, yankee, offset, verify, option);
 66:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 'event';
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/instant_invite/InviteCodeUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: generateInviteKeyFromUrlParams
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            golfie = argBar;
            michal = null;
            if(!(michal != golfie)) { _fun00004_ip = 164; continue _fun00003 }
 15:
            tangon = undefined;
            zuuluu = undefined;
            report = golfie.charAt;
            michal = 0;
            oscard = report.bind(golfie)(michal);
            report = '?';
            michal = golfie;
            if(!(report === oscard)) { _fun00004_ip = 57; continue _fun00003 }
 43:
            oscard = golfie.substring;
            report = 1;
            michal = oscard.bind(golfie)(report);
 57:
            zuuluu = michal;
 60: // try_start_0
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 1;
            report = golfie[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.parse;
            oscard = report.bind(oscard)(zuuluu);
            report = _closure1_slot0;
            zuuluu = 2;
            zuuluu = golfie[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.getFirstQueryStringValue;
            michal = _closure1_slot4;
            michal = oscard[michal];
            michal = zuuluu.bind(report)(michal);
 129: // try_end0
            report = michal;
            _fun00004_ip = 138; continue _fun00003;
 134: // catch_target0
            CatchBlockStart(arg_register=1);
            report = undefined;
 138:
            zuuluu = _closure1_slot5;
            michal = {};
            michal['baseCode'] = entity;
            michal['guildScheduledEventId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 164:
            return entity;
        }
    };
    zuuluu['generateInviteKeyFromUrlParams'] = report;
    zuuluu['generateInviteKeyFromExtraData'] = tangon;
    tangon = function(argFoo) { // Original name: parseExtraDataFromInviteKey
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.split;
            entity = '?';
            michal = michal.bind(zuuluu)(entity);
            entity = _closure1_slot3;
            golfie = undefined;
            option = 2;
            tangon = entity.bind(golfie)(michal, option);
            entity = 0;
            michal = tangon[entity];
            entity = 1;
            oscard = tangon[entity];
            tangon = null;
            if(!(tangon != oscard)) { _fun00006_ip = 128; continue _fun00005 }
 54:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = tangon[entity];
            report = report.bind(golfie)(entity);
            entity = report.parse;
            oscard = entity.bind(report)(oscard);
            entity = {};
            entity['baseCode'] = michal;
            report = _closure1_slot0;
            tangon = tangon[option];
            report = report.bind(golfie)(tangon);
            tangon = report.getFirstQueryStringValue;
            zuuluu = _closure1_slot4;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            entity['guildScheduledEventId'] = zuuluu;
            return entity;
 128:
            entity = {};
            entity['baseCode'] = michal;
            return entity;
        }
    };
    zuuluu['parseExtraDataFromInviteKey'] = tangon;
    michal = function(argFoo) { // Original name: parseInviteCodeFromInviteKey
        zuuluu = argFoo;
        michal = zuuluu.split;
        entity = '?';
        tangon = michal.bind(zuuluu)(entity);
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = 1;
        michal = zuuluu.bind(michal)(tangon, entity);
        entity = 0;
        entity = michal[entity];
        return entity;
    };
    zuuluu['parseInviteCodeFromInviteKey'] = michal;
    return entity;
})();