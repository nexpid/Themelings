// app/modules/messages/isSpam.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: isSpammer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot2;
            michal = tangon.getUser;
            entity = argFoo;
            report = michal.bind(tangon)(entity);
            entity = null;
            tangon = entity == report;
            michal = undefined;
            if(tangon) { _fun00002_ip = 53; continue _fun00001 }
 32:
            tangon = report.hasFlag;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.SPAMMER;
            michal = tangon.bind(report)(zuuluu);
 53:
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 63; continue _fun00001 }
 60:
            entity = michal;
 63:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.UserFlags;
    var _closure1_slot3 = option;
    report = report.ChannelTypes;
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/isSpam.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: isSpamSupported
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = undefined;
            entity = entity !== michal;
            if(!entity) { _fun00004_ip = 34; continue _fun00003 }
 12:
            zuuluu = michal.type;
            michal = _closure1_slot4;
            michal = michal.DM;
            entity = zuuluu !== michal;
 34:
            return entity;
        }
    };
    zuuluu['isSpamSupported'] = report;
    zuuluu['isSpammer'] = tangon;
    michal = function(argFoo) { // Original name: isSpam
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot5;
            entity = tangon.author;
            entity = entity.id;
            report = undefined;
            entity = zuuluu.bind(report)(entity);
            if(!entity) { _fun00006_ip = 65; continue _fun00005 }
 31:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 2;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.isAutomodMessageRecord;
            michal = michal.bind(zuuluu)(tangon);
            entity = !michal;
 65:
            return entity;
        }
    };
    zuuluu['isSpam'] = michal;
    return entity;
})();