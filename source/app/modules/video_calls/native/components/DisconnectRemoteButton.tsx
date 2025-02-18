// app/modules/video_calls/native/components/DisconnectRemoteButton.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = option;
    var _closure1_slot3 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/native/components/DisconnectRemoteButton.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.channel;
            var _closure2_slot0 = michal;
            oscard = entity.isSmallSize;
            michal = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 3;
            entity = verify[entity];
            tangon = undefined;
            option = michal.bind(tangon)(entity);
            zuuluu = option.useStateFromStoresObject;
            entity = _closure1_slot4;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = {};
                zuuluu = _closure1_slot4;
                michal = zuuluu.getAwaitingRemoteSessionInfo;
                tangon = michal.bind(zuuluu)();
                michal = null;
                michal = michal != tangon;
                entity['awaitingRemote'] = michal;
                michal = zuuluu.getRemoteSessionId;
                michal = michal.bind(zuuluu)();
                entity['remoteSessionId'] = michal;
                return entity;
            };
            entity = zuuluu.bind(option)(michal, entity);
            michal = entity.remoteSessionId;
            var _closure2_slot1 = michal;
            option = entity.awaitingRemote;
            zuuluu = _closure1_slot5;
            michal = _closure1_slot2;
            entity = 4;
            entity = verify[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.PrimaryActionButton;
            entity = {};
            verify = _closure1_slot1;
            yankee = _closure1_slot3;
            if(option) { _fun00002_ip = 140; continue _fun00001 }
 131:
            option = 6;
            option = yankee[option];
            _fun00002_ip = 147; continue _fun00001;
 140:
            offset = 5;
            option = yankee[offset];
 147:
            option = verify.bind(tangon)(option);
            entity['source'] = option;
            offset = _closure1_slot0;
            yankee = _closure1_slot3;
            golfie = 7;
            option = yankee[golfie];
            option = offset.bind(tangon)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.6vrfgo;
            golfie = option.bind(verify)(golfie);
            entity['accessibilityLabel'] = golfie;
            entity['isSmallSize'] = oscard;
            report = function() { // Original name: onPress
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00004_ip = 50; continue _fun00003 }
 13:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 8;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.disconnectRemote;
                    michal = michal.bind(zuuluu)();
                    _fun00004_ip = 117; continue _fun00003;
 50:
                    tangon = _closure1_slot0;
                    report = _closure1_slot3;
                    michal = 8;
                    michal = report[michal];
                    zuuluu = undefined;
                    golfie = tangon.bind(zuuluu)(michal);
                    oscard = golfie.remoteDisconnect;
                    michal = _closure2_slot1;
                    michal = oscard.bind(golfie)(michal);
                    michal = 9;
                    michal = report[michal];
                    zuuluu = tangon.bind(zuuluu)(michal);
                    michal = zuuluu.handleDisconnect;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
 117:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPress'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['DisconnectRemoteButton'] = michal;
    return entity;
})();