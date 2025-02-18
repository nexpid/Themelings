// app/modules/messages/useOnMessageSend.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageStates;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/useOnMessageSend.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useOnMessageSend
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            oscard = arguments[1];
            var _closure2_slot0 = golfie;
            entity = undefined;
            if(!(oscard === entity)) { _fun00002_ip = 20; continue _fun00001 }
 18:
            oscard = undefined;
 20:
            var _closure2_slot1 = oscard;
            report = _closure1_slot2;
            tangon = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            michal = function() {
                report = function(argFoo) { // Original name: handleMessage
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure2_slot1;
                        entity = undefined;
                        zuuluu = entity !== zuuluu;
                        if(!zuuluu) { _fun00004_ip = 32; continue _fun00003 }
 16:
                        tangon = argFoo;
                        report = tangon.channelId;
                        tangon = _closure2_slot1;
                        zuuluu = report !== tangon;
 32:
                        if(zuuluu) { _fun00004_ip = 43; continue _fun00003 }
 35:
                        michal = _closure2_slot0;
                        michal = michal.bind(entity)();
 43:
                        return entity;
                    }
                };
                var _closure3_slot0 = report;
                offset = function(argFoo) { // Original name: handleMessageCreate
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = argFoo;
                        entity = zuuluu.optimistic;
                        if(entity) { _fun00006_ip = 39; continue _fun00005 }
 12:
                        michal = zuuluu.message;
                        tangon = michal.state;
                        michal = _closure1_slot3;
                        michal = michal.SENDING;
                        entity = tangon === michal;
 39:
                        if(!entity) { _fun00006_ip = 56; continue _fun00005 }
 42:
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
 56:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot1 = offset;
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 2;
                golfie = oscard[michal];
                zuuluu = undefined;
                verify = tangon.bind(zuuluu)(golfie);
                option = verify.subscribe;
                golfie = 'MESSAGE_CREATE';
                golfie = option.bind(verify)(golfie, offset);
                golfie = oscard[michal];
                verify = tangon.bind(zuuluu)(golfie);
                option = verify.subscribe;
                golfie = 'UPLOAD_START';
                golfie = option.bind(verify)(golfie, report);
                michal = oscard[michal];
                tangon = tangon.bind(zuuluu)(michal);
                zuuluu = tangon.subscribe;
                michal = 'CALL_CREATE';
                michal = zuuluu.bind(tangon)(michal, report);
                entity = function() {
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot1;
                    michal = 2;
                    report = tangon[michal];
                    entity = undefined;
                    verify = zuuluu.bind(entity)(report);
                    option = verify.unsubscribe;
                    golfie = _closure3_slot1;
                    oscard = 'MESSAGE_CREATE';
                    oscard = option.bind(verify)(oscard, golfie);
                    oscard = tangon[michal];
                    option = zuuluu.bind(entity)(oscard);
                    golfie = option.unsubscribe;
                    report = _closure3_slot0;
                    oscard = 'UPLOAD_START';
                    oscard = golfie.bind(option)(oscard, report);
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.unsubscribe;
                    michal = 'CALL_CREATE';
                    michal = zuuluu.bind(tangon)(michal, report);
                    return entity;
                };
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();