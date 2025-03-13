// app/modules/chat/native/ChatTTITracker.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    tangon = 0;
    golfie = oscard[tangon];
    entity = undefined;
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot3 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Fragment;
    var _closure1_slot4 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat/native/ChatTTITracker.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ChatTTITracker
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            option = entity.messages;
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot4;
            michal = {};
            report = option.length;
            entity = 0;
            entity = report > entity;
            report = null;
            if(!entity) { _fun00002_ip = 99; continue _fun00001 }
 40:
            foxtra = _closure1_slot3;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 1;
            entity = yankee[entity];
            romeon = undefined;
            entity = offset.bind(romeon)(entity);
            yankee = entity.TTIMeasurementView;
            offset = {};
            entity = function(argFoo) { // Original name: onMeasurement
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                tangon = michal.displayMessagesWithCache;
                zuuluu = tangon.record;
                michal = argFoo;
                michal = michal.nativeEvent;
                michal = michal.timestamp;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            offset['onMeasurement'] = entity;
            entity = 'cached_messages_tti';
            report = foxtra.bind(romeon)(yankee, offset, entity);
 99:
            entity = new Array(2);
            entity[0] = report;
            report = option.hasFetched;
            if(report) { _fun00002_ip = 138; continue _fun00001 }
 116:
            offset = option.ready;
            report = null;
            if(!offset) { _fun00002_ip = 197; continue _fun00001 }
 127:
            option = option.cached;
            report = null;
            if(option) { _fun00002_ip = 197; continue _fun00001 }
 138:
            offset = _closure1_slot3;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            golfie = 1;
            golfie = verify[golfie];
            verify = undefined;
            golfie = option.bind(verify)(golfie);
            option = golfie.TTIMeasurementView;
            golfie = {};
            oscard = function(argFoo) { // Original name: onMeasurement
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                tangon = michal.displayLatestMessages;
                zuuluu = tangon.record;
                michal = argFoo;
                michal = michal.nativeEvent;
                michal = michal.timestamp;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            golfie['onMeasurement'] = oscard;
            oscard = 'latest_messages_tti';
            report = offset.bind(verify)(option, golfie, oscard);
 197:
            entity[1] = report;
            michal['children'] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['ChatTTITracker'] = michal;
    return entity;
})();