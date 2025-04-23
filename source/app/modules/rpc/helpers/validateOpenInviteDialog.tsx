// app/modules/rpc/helpers/validateOpenInviteDialog.tsx
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RPCErrors;
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/helpers/validateOpenInviteDialog.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: validateOpenInviteDialog
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            report = tangon.bind(michal)(zuuluu);
            tangon = report.isContextlessActivitiesEnabledForApp;
            zuuluu = argFoo;
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00002_ip = 423; continue _fun00001 }
 45:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(michal)(zuuluu);
            tangon = zuuluu.bind(michal)();
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00002_ip = 355; continue _fun00001 }
 78:
            golfie = _closure1_slot3;
            oscard = golfie.getGuild;
            report = tangon.getGuildId;
            report = report.bind(tangon)();
            report = oscard.bind(golfie)(report);
            if(!(zuuluu != report)) { _fun00002_ip = 259; continue _fun00001 }
 109:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(michal)(zuuluu);
            oscard = golfie.canViewInviteModal;
            zuuluu = _closure1_slot4;
            zuuluu = oscard.bind(golfie)(zuuluu, report, tangon);
            if(zuuluu) { _fun00002_ip = 240; continue _fun00001 }
 149:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            option = oscard.bind(michal)(zuuluu);
            golfie = {};
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.INVALID_PERMISSIONS;
            golfie['errorCode'] = zuuluu;
            verify = tangon.id;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            oscard = zuuluu.concat;
            zuuluu = 'No invite permissions for ';
            yankee = oscard.bind(zuuluu)(verify);
            oscard = option.prototype;
            oscard = Object.create(oscard, {constructor: {value: option}});
            foxtra = oscard;
            romeon = golfie;
            zuuluu = new foxtra[option](romeon, yankee, offset);
            zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
            throw zuuluu;
 240:
            zuuluu = {};
            zuuluu['channel'] = tangon;
            zuuluu['guild'] = report;
            report = false;
            zuuluu['contextless'] = report;
            return zuuluu;
 259:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 5;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(michal)(zuuluu);
            report = {};
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.INVALID_CHANNEL;
            report['errorCode'] = zuuluu;
            zuuluu = tangon.getGuildId;
            golfie = zuuluu.bind(tangon)();
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = 'Invalid guild ';
            yankee = tangon.bind(zuuluu)(golfie);
            tangon = oscard.prototype;
            tangon = Object.create(tangon, {constructor: {value: oscard}});
            foxtra = tangon;
            romeon = report;
            zuuluu = new foxtra[oscard](romeon, yankee, offset);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            throw zuuluu;
 355:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = tangon.bind(michal)(zuuluu);
            tangon = {};
            entity = _closure1_slot5;
            entity = entity.INVALID_CHANNEL;
            tangon['errorCode'] = entity;
            entity = report.prototype;
            zuuluu = Object.create(entity, {constructor: {value: report}});
            yankee = 'Invalid channel';
            foxtra = zuuluu;
            romeon = tangon;
            entity = new foxtra[report](romeon, yankee, offset);
            entity = entity instanceof Object ? entity : zuuluu;
            throw entity;
 423:
            entity = {};
            entity['channel'] = michal;
            entity['guild'] = michal;
            michal = true;
            entity['contextless'] = michal;
            return entity;
        }
    };
    zuuluu['validateOpenInviteDialog'] = michal;
    return entity;
})();