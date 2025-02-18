// app/modules/calls/useCanSetVoiceChannelStatus.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: _canSetVoiceChannelStatus
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            michal = argCor;
            var _closure2_slot2 = michal;
            zuuluu = argBaz;
            if(zuuluu) { _fun00002_ip = 38; continue _fun00001 }
 32:
            zuuluu = _closure1_slot4;
            _fun00002_ip = 42; continue _fun00001;
 38:
            zuuluu = _closure1_slot5;
 42:
            michal = zuuluu.every;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure2_slot2;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00004_ip = 77; continue _fun00003 }
 16:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 2;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.can;
                    entity = {};
                    entity['permission'] = report;
                    oscard = _closure2_slot2;
                    entity['user'] = oscard;
                    oscard = _closure2_slot0;
                    entity['context'] = oscard;
                    entity = zuuluu.bind(tangon)(entity);
                    _fun00004_ip = 97; continue _fun00003;
 77:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.can;
                    michal = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(report, michal);
 97:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
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
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Permissions;
    verify = report.SET_VOICE_CHANNEL_STATUS;
    option = new Array(3);
    option[0] = verify;
    verify = report.CONNECT;
    option[1] = verify;
    verify = report.VIEW_CHANNEL;
    option[2] = verify;
    var _closure1_slot4 = option;
    option = report.SET_VOICE_CHANNEL_STATUS;
    report = new Array(1);
    report[0] = option;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/calls/useCanSetVoiceChannelStatus.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: useCanSetVoiceChannelStatus
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            golfie = arguments[1];
            oscard = arguments[2];
            var _closure2_slot0 = option;
            report = undefined;
            if(!(golfie === report)) { _fun00006_ip = 23; continue _fun00005 }
 21:
            golfie = false;
 23:
            var _closure2_slot1 = golfie;
            var _closure2_slot2 = oscard;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 3;
            zuuluu = verify[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.useStateFromStores;
            michal = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = new Array(3);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            entity = function() {
                oscard = _closure1_slot6;
                offset = _closure2_slot0;
                verify = _closure1_slot3;
                option = _closure2_slot1;
                golfie = _closure2_slot2;
                yankee = undefined;
                entity = yankee[oscard](offset, verify, option, golfie, oscard);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['_canSetVoiceChannelStatus'] = tangon;
    michal = function(argFoo) { // Original name: canSetVoiceChannelStatus
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = arguments[1];
            report = undefined;
            if(!(oscard === report)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            oscard = false;
 11:
            tangon = _closure1_slot6;
            verify = _closure1_slot3;
            offset = argFoo;
            golfie = arguments[2];
            yankee = undefined;
            option = oscard;
            entity = yankee[tangon](offset, verify, option, golfie, oscard);
            return entity;
        }
    };
    zuuluu['canSetVoiceChannelStatus'] = michal;
    return entity;
})();