// app/modules/threads/getThreadAutoArchiveTimeOnce.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    michal = function(argFoo) { // Original name: getThreadLastActivityTime
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.threadMetadata;
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00002_ip = 175; continue _fun00001 }
 18:
            oscard = _closure1_slot2;
            report = oscard.lastMessageId;
            tangon = entity.id;
            report = report.bind(oscard)(tangon);
            if(!(zuuluu == report)) { _fun00002_ip = 50; continue _fun00001 }
 45:
            report = entity.id;
 50:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            tangon = oscard.bind(michal)(tangon);
            michal = tangon.extractTimestamp;
            tangon = michal.bind(tangon)(report);
            michal = entity.threadMetadata;
            michal = michal.archiveTimestamp;
            michal = zuuluu != michal;
            zuuluu = 0;
            if(!michal) { _fun00002_ip = 154; continue _fun00001 }
 104:
            michal = global;
            report = michal.Date;
            entity = entity.threadMetadata;
            option = entity.archiveTimestamp;
            michal = report.prototype;
            michal = Object.create(michal, {constructor: {value: report}});
            verify = michal;
            entity = new verify[report](option, golfie);
            michal = entity instanceof Object ? entity : michal;
            entity = michal.getTime;
            zuuluu = entity.bind(michal)();
 154:
            entity = global;
            michal = entity.Math;
            entity = michal.max;
            entity = entity.bind(michal)(tangon, zuuluu);
            return entity;
 175:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot3 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = oscard[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/threads/getThreadAutoArchiveTimeOnce.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: getThreadAutoArchiveTimeOnce
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            michal = tangon.threadMetadata;
            entity = null;
            if(!(entity != michal)) { _fun00004_ip = 83; continue _fun00003 }
 15:
            entity = tangon.threadMetadata;
            report = entity.autoArchiveDuration;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.Millis;
            michal = michal.MINUTE;
            michal = report * michal;
            entity = _closure1_slot3;
            entity = entity.bind(zuuluu)(tangon);
            entity = entity + michal;
            return entity;
 83:
            entity = 0;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['getThreadLastActivityTime'] = michal;
    return entity;
})();