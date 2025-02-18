// app/modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = report[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 6;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/tabs/messages/useMessagesReconnectToCallsEffect.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useMessagesReconnectToCallsEffect
        tangon = _closure1_slot3;
        zuuluu = tangon.useEffect;
        michal = function() {
            tangon = _closure1_slot4;
            michal = tangon.isConnected;
            michal = michal.bind(tangon)();
            var _closure3_slot0 = michal;
            zuuluu = function() { // Original name: isGatewayConnectedListener
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.isConnected;
                    michal = michal.bind(zuuluu)();
                    tangon = _closure3_slot0;
                    if(!(tangon !== michal)) { _fun00002_ip = 261; continue _fun00001 }
 31:
                    _closure3_slot0 = michal;
                    if(!michal) { _fun00002_ip = 261; continue _fun00001 }
 41:
                    zuuluu = _closure1_slot6;
                    michal = zuuluu.getSortedChannels;
                    report = michal.bind(zuuluu)();
                    tangon = _closure1_slot2;
                    zuuluu = undefined;
                    michal = 2;
                    tangon = tangon.bind(zuuluu)(report, michal);
                    verify = 0;
                    michal = tangon[verify];
                    michal = 1;
                    option = tangon[michal];
                    tangon = new Array(0);
                    golfie = global;
                    offset = golfie.Math;
                    report = offset.min;
                    michal = option.length;
                    oscard = 20;
                    michal = report.bind(offset)(oscard, michal);
                    michal = verify < michal;
                    report = null;
                    if(!michal) { _fun00002_ip = 214; continue _fun00001 }
 123:
                    yankee = _closure1_slot5;
                    offset = yankee.getChannel;
                    michal = option[verify];
                    michal = michal.channelId;
                    yankee = offset.bind(yankee)(michal);
                    michal = report != yankee;
                    if(!michal) { _fun00002_ip = 163; continue _fun00001 }
 153:
                    offset = yankee.isGroupDM;
                    michal = offset.bind(yankee)();
 163:
                    if(!michal) { _fun00002_ip = 185; continue _fun00001 }
 166:
                    offset = tangon.push;
                    michal = option[verify];
                    michal = michal.channelId;
                    michal = offset.bind(tangon)(michal);
 185:
                    verify = verify + 1;
                    yankee = golfie.Math;
                    offset = yankee.min;
                    michal = option.length;
                    michal = offset.bind(yankee)(oscard, michal);
                    if(verify < michal) { _fun00002_ip = 123; continue _fun00001 }
 214:
                    michal = _closure1_slot0;
                    report = _closure1_slot1;
                    entity = 5;
                    entity = report[entity];
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = zuuluu.dispatch;
                    entity = {};
                    report = 'CALL_CONNECT_MULTIPLE';
                    entity['type'] = report;
                    entity['channelIds'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 261:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot1 = zuuluu;
            michal = tangon.addChangeListener;
            michal = michal.bind(tangon)(zuuluu);
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.removeChangeListener;
                entity = _closure3_slot1;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();