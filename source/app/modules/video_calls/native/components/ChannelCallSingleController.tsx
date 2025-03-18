// app/modules/video_calls/native/components/ChannelCallSingleController.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ParticipantTypes;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/native/components/ChannelCallSingleController.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            golfie = michal.selectedParticipant;
            var _closure2_slot0 = golfie;
            oscard = michal.channel;
            var _closure2_slot1 = oscard;
            report = _closure1_slot3;
            tangon = report.useEffect;
            michal = oscard.id;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot1;
                option = _closure1_slot2;
                entity = 6;
                michal = option[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.track;
                michal = _closure1_slot6;
                zuuluu = michal.VIDEO_LAYOUT_TOGGLED;
                michal = {};
                golfie = 'focus';
                michal['video_layout'] = golfie;
                golfie = _closure1_slot0;
                oscard = 7;
                oscard = option[oscard];
                option = golfie.bind(entity)(oscard);
                golfie = option.collectVoiceAnalyticsMetadata;
                oscard = _closure2_slot1;
                oscard = oscard.id;
                verify = golfie.bind(option)(oscard);
                offset = michal;
                oscard = copyDataProperties(offset, verify);
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 8;
            michal = tangon[michal];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.useStateFromStores;
            verify = _closure1_slot4;
            michal = new Array(1);
            michal[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getActiveStreamForStreamKey;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal, entity);
            michal = golfie.type;
            entity = _closure1_slot7;
            entity = entity.STREAM;
            if(!(entity !== michal)) { _fun00002_ip = 263; continue _fun00001 }
 136:
            entity = _closure1_slot7;
            entity = entity.USER;
            if(!(entity !== michal)) { _fun00002_ip = 220; continue _fun00001 }
 150:
            entity = _closure1_slot7;
            entity = entity.HIDDEN_STREAM;
            if(!(entity !== michal)) { _fun00002_ip = 216; continue _fun00001 }
 164:
            entity = _closure1_slot7;
            entity = entity.ACTIVITY;
            if(!(entity !== michal)) { _fun00002_ip = 180; continue _fun00001 }
 178:
            return report;
 180:
            entity = global;
            tangon = entity.Error;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            yankee = 'Activities are not supported on old voice UI';
            romeon = michal;
            entity = new romeon[tangon](yankee, offset);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
 216:
            entity = null;
            return entity;
 220:
            tangon = _closure1_slot8;
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 11;
            entity = verify[entity];
            michal = michal.bind(report)(entity);
            entity = {};
            entity['participant'] = golfie;
            entity['channel'] = oscard;
            entity = tangon.bind(report)(michal, entity);
            return entity;
 263:
            entity = golfie.user;
            verify = entity.id;
            michal = _closure1_slot5;
            entity = michal.getId;
            michal = entity.bind(michal)();
            entity = null;
            zuuluu = entity != zuuluu;
            if(!zuuluu) { _fun00002_ip = 354; continue _fun00001 }
 296:
            tangon = _closure1_slot8;
            zuuluu = _closure1_slot1;
            if(!(verify !== michal)) { _fun00002_ip = 321; continue _fun00001 }
 308:
            verify = _closure1_slot2;
            michal = 10;
            michal = verify[michal];
            _fun00002_ip = 332; continue _fun00001;
 321:
            verify = _closure1_slot2;
            option = 9;
            michal = verify[option];
 332:
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['participant'] = golfie;
            michal['channel'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 354:
            return entity;
        }
    };
    zuuluu['ChannelCallSingleController'] = michal;
    return entity;
})();