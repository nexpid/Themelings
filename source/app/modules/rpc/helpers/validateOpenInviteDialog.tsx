// app/modules/rpc/helpers/validateOpenInviteDialog.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RPCErrors;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/helpers/validateOpenInviteDialog.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: validateOpenInviteDialog
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.bind(tangon)();
            michal = null;
            if(!(michal != zuuluu)) { _fun00002_ip = 308; continue _fun00001 }
 38:
            golfie = _closure1_slot3;
            oscard = golfie.getGuild;
            report = zuuluu.getGuildId;
            report = report.bind(zuuluu)();
            report = oscard.bind(golfie)(report);
            if(!(michal != report)) { _fun00002_ip = 212; continue _fun00001 }
 69:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 5;
            michal = golfie[michal];
            golfie = oscard.bind(tangon)(michal);
            oscard = golfie.canViewInviteModal;
            michal = _closure1_slot4;
            michal = oscard.bind(golfie)(michal, report, zuuluu);
            if(michal) { _fun00002_ip = 200; continue _fun00001 }
 109:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 4;
            michal = golfie[michal];
            option = oscard.bind(tangon)(michal);
            golfie = {};
            michal = _closure1_slot5;
            michal = michal.INVALID_PERMISSIONS;
            golfie['errorCode'] = michal;
            verify = zuuluu.id;
            michal = global;
            michal = michal.HermesInternal;
            oscard = michal.concat;
            michal = 'No invite permissions for ';
            yankee = oscard.bind(michal)(verify);
            oscard = option.prototype;
            oscard = Object.create(oscard, {constructor: {value: option}});
            foxtra = oscard;
            romeon = golfie;
            michal = new foxtra[option](romeon, yankee, offset);
            michal = michal instanceof Object ? michal : oscard;
            throw michal;
 200:
            michal = {};
            michal['channel'] = zuuluu;
            michal['guild'] = report;
            return michal;
 212:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            oscard = report.bind(tangon)(michal);
            report = {};
            michal = _closure1_slot5;
            michal = michal.INVALID_CHANNEL;
            report['errorCode'] = michal;
            michal = zuuluu.getGuildId;
            golfie = michal.bind(zuuluu)();
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'Invalid guild ';
            yankee = zuuluu.bind(michal)(golfie);
            zuuluu = oscard.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: oscard}});
            foxtra = zuuluu;
            romeon = report;
            michal = new foxtra[oscard](romeon, yankee, offset);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 308:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 4;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot5;
            entity = entity.INVALID_CHANNEL;
            zuuluu['errorCode'] = entity;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            yankee = 'Invalid channel';
            foxtra = michal;
            romeon = zuuluu;
            entity = new foxtra[tangon](romeon, yankee, offset);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    zuuluu['validateOpenInviteDialog'] = michal;
    return entity;
})();