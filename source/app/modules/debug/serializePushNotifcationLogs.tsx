// app/modules/debug/serializePushNotifcationLogs.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.DEVICE_TOKEN;
    var _closure1_slot2 = golfie;
    tangon = tangon.DEVICE_VOIP_TOKEN;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/debug/serializePushNotifcationLogs.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: serializePushNotificationLogs
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            var _closure2_slot0 = michal;
            tangon = zuuluu.length;
            michal = 0;
            if(!(michal !== tangon)) { _fun00002_ip = 242; continue _fun00001 }
 26:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 1;
            option = golfie[tangon];
            report = undefined;
            option = oscard.bind(report)(option);
            offset = option.Storage;
            verify = offset.get;
            option = _closure1_slot2;
            verify = verify.bind(offset)(option);
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            report = tangon.Storage;
            tangon = report.get;
            michal = _closure1_slot3;
            option = tangon.bind(report)(michal);
            michal = null;
            tangon = michal != verify;
            golfie = '';
            oscard = golfie;
            if(!tangon) { _fun00002_ip = 140; continue _fun00001 }
 116:
            tangon = global;
            tangon = tangon.HermesInternal;
            report = tangon.concat;
            tangon = 'Device Token: ';
            oscard = report.bind(tangon)(verify);
 140:
            michal = michal != option;
            report = golfie;
            if(!michal) { _fun00002_ip = 174; continue _fun00001 }
 150:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            michal = 'Device Voip Token: ';
            report = tangon.bind(michal)(option);
 174:
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    entity = michal.silent;
                    verify = 'Displayed';
                    if(!entity) { _fun00004_ip = 24; continue _fun00003 }
 18:
                    verify = 'Silent';
 24:
                    entity = _closure2_slot0;
                    if(entity) { _fun00004_ip = 76; continue _fun00003 }
 34:
                    oscard = michal.title;
                    report = michal.content;
                    entity = global;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    zuuluu = '';
                    entity = ' - ';
                    option = tangon.bind(zuuluu)(oscard, entity, report);
                    _fun00004_ip = 116; continue _fun00003;
 76:
                    oscard = michal.channelId;
                    report = michal.messageId;
                    entity = global;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    zuuluu = '';
                    entity = ' - ';
                    option = tangon.bind(zuuluu)(oscard, entity, report);
 116:
                    entity = global;
                    report = entity.Date;
                    sizing = michal.receivedTimestamp;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    output = tangon;
                    zuuluu = new output[report](sizing, kiloes);
                    tangon = zuuluu instanceof Object ? zuuluu : tangon;
                    zuuluu = tangon.toISOString;
                    sizing = zuuluu.bind(tangon)();
                    backup = michal.type;
                    entity = entity.HermesInternal;
                    report = entity.concat;
                    output = '';
                    kiloes = ' [';
                    foxtra = '] ';
                    yankee = ' - ';
                    romeon = verify;
                    offset = option;
                    entity = output[report](sizing, kiloes, backup, foxtra, romeon, yankee, offset, verify);
                    return entity;
                }
            };
            michal = michal.bind(zuuluu)(entity);
            entity = michal.join;
            tangon = '\n';
            yankee = entity.bind(michal)(tangon);
            entity = global;
            entity = entity.HermesInternal;
            michal = entity.concat;
            romeon = '\n\n';
            sizing = golfie;
            kiloes = oscard;
            backup = tangon;
            foxtra = report;
            entity = sizing[michal](kiloes, backup, foxtra, romeon, yankee, offset);
            return entity;
 242:
            entity = 'No logs';
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();