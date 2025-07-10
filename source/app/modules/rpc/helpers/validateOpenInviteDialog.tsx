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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RPCErrors;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/helpers/validateOpenInviteDialog.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: validateOpenInviteDialog
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getConnectedFrame;
            michal = michal.bind(zuuluu)();
            zuuluu = null;
            if(!(zuuluu == michal)) { _fun00002_ip = 402; continue _fun00001 }
 26:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            tangon = 4;
            tangon = report[tangon];
            report = undefined;
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.bind(report)();
            if(!(zuuluu != tangon)) { _fun00002_ip = 334; continue _fun00001 }
 59:
            option = _closure1_slot4;
            golfie = option.getGuild;
            oscard = tangon.getGuildId;
            oscard = oscard.bind(tangon)();
            oscard = golfie.bind(option)(oscard);
            if(!(zuuluu != oscard)) { _fun00002_ip = 238; continue _fun00001 }
 90:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 6;
            zuuluu = option[zuuluu];
            option = golfie.bind(report)(zuuluu);
            golfie = option.canViewInviteModal;
            zuuluu = _closure1_slot5;
            zuuluu = golfie.bind(option)(zuuluu, oscard, tangon);
            if(zuuluu) { _fun00002_ip = 221; continue _fun00001 }
 130:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 5;
            zuuluu = option[zuuluu];
            verify = golfie.bind(report)(zuuluu);
            option = {};
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.INVALID_PERMISSIONS;
            option['errorCode'] = zuuluu;
            offset = tangon.id;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            golfie = zuuluu.concat;
            zuuluu = 'No invite permissions for ';
            romeon = golfie.bind(zuuluu)(offset);
            golfie = verify.prototype;
            golfie = Object.create(golfie, {constructor: {value: verify}});
            backup = golfie;
            foxtra = option;
            zuuluu = new backup[verify](foxtra, romeon, yankee);
            zuuluu = zuuluu instanceof Object ? zuuluu : golfie;
            throw zuuluu;
 221:
            zuuluu = {};
            zuuluu['frame'] = report;
            zuuluu['channel'] = tangon;
            zuuluu['guild'] = oscard;
            return zuuluu;
 238:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(report)(zuuluu);
            oscard = {};
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.INVALID_CHANNEL;
            oscard['errorCode'] = zuuluu;
            zuuluu = tangon.getGuildId;
            option = zuuluu.bind(tangon)();
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = 'Invalid guild ';
            romeon = tangon.bind(zuuluu)(option);
            tangon = golfie.prototype;
            tangon = Object.create(tangon, {constructor: {value: golfie}});
            backup = tangon;
            foxtra = oscard;
            zuuluu = new backup[golfie](foxtra, romeon, yankee);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            throw zuuluu;
 334:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 5;
            zuuluu = oscard[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = {};
            entity = _closure1_slot6;
            entity = entity.INVALID_CHANNEL;
            tangon['errorCode'] = entity;
            entity = report.prototype;
            zuuluu = Object.create(entity, {constructor: {value: report}});
            romeon = 'Invalid channel';
            backup = zuuluu;
            foxtra = tangon;
            entity = new backup[report](foxtra, romeon, yankee);
            entity = entity instanceof Object ? entity : zuuluu;
            throw entity;
 402:
            entity = {};
            entity['frame'] = michal;
            michal = undefined;
            entity['channel'] = michal;
            entity['guild'] = michal;
            return entity;
        }
    };
    zuuluu['validateOpenInviteDialog'] = michal;
    return entity;
})();