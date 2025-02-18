// app/modules/video_calls/getParticipantTitle.tsx
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
    tangon = tangon.ParticipantTypes;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/getParticipantTitle.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: getParticipantTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = argBar;
            zuuluu = argBaz;
            oscard = entity.type;
            report = _closure1_slot4;
            report = report.ACTIVITY;
            if(!(oscard !== report)) { _fun00002_ip = 221; continue _fun00001 }
 34:
            verify = _closure1_slot3;
            golfie = verify.isGuestOrLurker;
            oscard = michal.guild_id;
            offset = entity.user;
            report = null;
            yankee = report == offset;
            option = undefined;
            report = undefined;
            if(yankee) { _fun00002_ip = 72; continue _fun00001 }
 67:
            report = offset.id;
 72:
            report = golfie.bind(verify)(oscard, report);
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 2;
            oscard = verify[oscard];
            verify = golfie.bind(option)(oscard);
            golfie = verify.getName;
            oscard = michal.getGuildId;
            oscard = oscard.bind(michal)();
            michal = michal.id;
            entity = entity.user;
            michal = golfie.bind(verify)(oscard, michal, entity);
            entity = '';
            if(!report) { _fun00002_ip = 215; continue _fun00001 }
 138:
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 3;
            report = verify[tangon];
            report = golfie.bind(option)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = verify[tangon];
            tangon = golfie.bind(option)(tangon);
            tangon = tangon.t;
            tangon = tangon.pFO/Pj;
            oscard = report.bind(oscard)(tangon);
            tangon = global;
            tangon = tangon.HermesInternal;
            report = tangon.concat;
            tangon = ' ';
            entity = report.bind(tangon)(oscard);
 215:
            entity = michal + entity;
            return entity;
 221:
            entity = null;
            tangon = entity == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 237; continue _fun00001 }
 232:
            michal = zuuluu.name;
 237:
            zuuluu = entity != michal;
            entity = null;
            if(!zuuluu) { _fun00002_ip = 249; continue _fun00001 }
 246:
            entity = michal;
 249:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();