// app/modules/app_database/modules/messages/isReadableChannel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    tangon = function(argFoo) { // Original name: isReadableChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            entity = null;
            entity = entity != golfie;
            if(!entity) { _fun00002_ip = 104; continue _fun00001 }
 12:
            zuuluu = golfie.type;
            michal = _closure1_slot3;
            michal = michal.DM;
            michal = zuuluu === michal;
            if(michal) { _fun00002_ip = 56; continue _fun00001 }
 37:
            report = golfie.type;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.GROUP_DM;
            michal = report === zuuluu;
 56:
            if(michal) { _fun00002_ip = 101; continue _fun00001 }
 59:
            oscard = _closure1_slot0;
            report = golfie.type;
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(report);
            if(!zuuluu) { _fun00002_ip = 98; continue _fun00001 }
 78:
            oscard = _closure1_slot2;
            report = oscard.canBasicChannel;
            tangon = _closure1_slot4;
            zuuluu = report.bind(oscard)(tangon, golfie);
 98:
            michal = zuuluu;
 101:
            entity = michal;
 104:
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
    report = oscard.bind(entity)(report);
    report = report.isTextChannel;
    var _closure1_slot0 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.ChannelTypes;
    var _closure1_slot3 = option;
    report = report.BasicPermissions;
    option = report.VIEW_CHANNEL;
    report = report.READ_MESSAGE_HISTORY;
    report = option | report;
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_database/modules/messages/isReadableChannel.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['isReadableChannel'] = tangon;
    michal = function(argFoo) { // Original name: isReadableChannelId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00004_ip = 41; continue _fun00003 }
 12:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot1;
            michal = zuuluu.getBasicChannel;
            zuuluu = michal.bind(zuuluu)(report);
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 41:
            return entity;
        }
    };
    zuuluu['isReadableChannelId'] = michal;
    return entity;
})();