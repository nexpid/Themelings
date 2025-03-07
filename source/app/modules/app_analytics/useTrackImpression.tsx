// app/modules/app_analytics/useTrackImpression.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: trackImpression
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = arguments[1];
            entity = undefined;
            if(!(tangon === entity)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            tangon = false;
 14:
            oscard = report.name;
            golfie = report.type;
            yankee = report.properties;
            option = report.type;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 5;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(entity)(zuuluu);
            zuuluu = zuuluu.ImpressionTypes;
            zuuluu = zuuluu.MODAL;
            if(!(option === zuuluu)) { _fun00002_ip = 117; continue _fun00001 }
 74:
            option = report.name;
            zuuluu = null;
            if(!(zuuluu == option)) { _fun00002_ip = 117; continue _fun00001 }
 85:
            zuuluu = _closure1_slot11;
            verify = zuuluu.bind(entity)();
            option = verify.some;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    michal = entity._stackContext;
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 30; continue _fun00003 }
 22:
                    entity = michal.isSlide;
 30:
                    return entity;
                }
            };
            zuuluu = option.bind(verify)(zuuluu);
            if(zuuluu) { _fun00002_ip = 404; continue _fun00001 }
 117:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.bind(entity)(report);
            zuuluu = null;
            report = zuuluu == yankee;
            result = undefined;
            if(report) { _fun00002_ip = 142; continue _fun00001 }
 137:
            result = yankee.guild_id;
 142:
            if(!(zuuluu == result)) { _fun00002_ip = 160; continue _fun00001 }
 146:
            option = _closure1_slot6;
            report = option.getGuildId;
            result = report.bind(option)();
 160:
            report = zuuluu == yankee;
            sizing = undefined;
            if(report) { _fun00002_ip = 174; continue _fun00001 }
 169:
            sizing = yankee.channel_id;
 174:
            if(!(zuuluu == sizing)) { _fun00002_ip = 193; continue _fun00001 }
 178:
            option = _closure1_slot5;
            report = option.getChannelId;
            sizing = report.bind(option)(result);
 193:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            option = 6;
            report = backup[option];
            offset = foxtra.bind(entity)(report);
            verify = offset.expandEventProperties;
            report = {};
            report['impression_type'] = golfie;
            romeon = _closure1_slot10;
            romeon = romeon.bind(entity)();
            report['location'] = romeon;
            romeon = 8;
            kiloes = backup[romeon];
            output = foxtra.bind(entity)(kiloes);
            kiloes = output.collectGuildAnalyticsMetadata;
            echoed = kiloes.bind(output)(result);
            update = report;
            kiloes = copyDataProperties(update, echoed);
            romeon = backup[romeon];
            backup = foxtra.bind(entity)(romeon);
            foxtra = backup.collectChannelAnalyticsMetadata;
            kiloes = _closure1_slot4;
            romeon = kiloes.getChannel;
            romeon = romeon.bind(kiloes)(sizing);
            echoed = foxtra.bind(backup)(romeon);
            update = report;
            romeon = copyDataProperties(update, echoed);
            update = report;
            echoed = yankee;
            yankee = copyDataProperties(update, echoed);
            report = verify.bind(offset)(report);
            if(tangon) { _fun00002_ip = 394; continue _fun00001 }
 329:
            tangon = zuuluu != oscard;
            if(!tangon) { _fun00002_ip = 340; continue _fun00001 }
 336:
            tangon = zuuluu != golfie;
 340:
            if(!tangon) { _fun00002_ip = 382; continue _fun00001 }
 343:
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            golfie = golfie.bind(entity)(tangon);
            tangon = golfie.debugLogEvent;
            tangon = tangon.bind(golfie)(oscard, report);
            tangon = _closure1_slot12;
            tangon = tangon.bind(entity)(oscard, report);
 382:
            tangon = _closure1_slot9;
            tangon = tangon.bind(entity)(oscard, report);
            _fun00002_ip = 404; continue _fun00001;
 394:
            michal = _closure1_slot9;
            michal = michal.bind(entity)(zuuluu, zuuluu);
 404:
            return entity;
        }
    };
    var _closure1_slot13 = michal;
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
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = yankee.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = yankee.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = yankee.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.setCurrentImpression;
    var _closure1_slot7 = option;
    option = report.cleanupImpression;
    var _closure1_slot8 = option;
    option = report.setDebugTrackedData;
    var _closure1_slot9 = option;
    option = report.getLocation;
    var _closure1_slot10 = option;
    report = report.getImpressionStack;
    var _closure1_slot11 = report;
    report = 5;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.trackMaker;
    report = {};
    offset = 6;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    offset = offset.AnalyticEventConfigs;
    report['analyticEventConfigs'] = offset;
    offset = 7;
    offset = golfie[offset];
    offset = yankee.bind(entity)(offset);
    report['dispatcher'] = offset;
    offset = 'TRACK';
    report['TRACK_ACTION_NAME'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot12 = report;
    report = 12;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_analytics/useTrackImpression.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useTrackImpression
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = arguments[1];
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00006_ip = 32; continue _fun00005 }
 18:
            zuuluu = {'disableTrack': false, 'trackOnInitialLoad': false};
 32:
            var _closure2_slot1 = zuuluu;
            zuuluu = arguments[2];
            var _closure2_slot2 = zuuluu;
            var _closure2_slot3 = entity;
            var _closure2_slot4 = entity;
            var _closure2_slot5 = entity;
            tangon = _closure1_slot3;
            report = tangon.useRef;
            report = report.bind(tangon)();
            _closure2_slot3 = report;
            report = tangon.useRef;
            report = report.bind(tangon)();
            _closure2_slot4 = report;
            report = function() { // Original name: trackImpressionEffect
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    option = 9;
                    michal = michal[option];
                    report = undefined;
                    golfie = tangon.bind(report)(michal);
                    tangon = _closure2_slot3;
                    oscard = tangon.current;
                    tangon = _closure2_slot0;
                    tangon = golfie.bind(report)(oscard, tangon);
                    oscard = !tangon;
                    if(!oscard) { _fun00008_ip = 69; continue _fun00007 }
 55:
                    golfie = _closure2_slot3;
                    tangon = _closure2_slot0;
                    golfie['current'] = tangon;
 69:
                    golfie = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    option = golfie.bind(report)(tangon);
                    tangon = _closure2_slot4;
                    golfie = tangon.current;
                    tangon = _closure2_slot2;
                    tangon = option.bind(report)(golfie, tangon);
                    tangon = !tangon;
                    if(!tangon) { _fun00008_ip = 125; continue _fun00007 }
 111:
                    option = _closure2_slot4;
                    golfie = _closure2_slot2;
                    option['current'] = golfie;
 125:
                    if(oscard) { _fun00008_ip = 133; continue _fun00007 }
 128:
                    if(tangon) { _fun00008_ip = 133; continue _fun00007 }
 131:
                    return report;
 133:
                    tangon = {};
                    verify = _closure2_slot0;
                    offset = tangon;
                    oscard = copyDataProperties(offset, verify);
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 10;
                    oscard = option[oscard];
                    golfie = golfie.bind(report)(oscard);
                    oscard = 'impression_';
                    golfie = golfie.bind(report)(oscard);
                    oscard = 'sequenceId';
                    tangon[oscard] = golfie;
                    var _closure3_slot0 = tangon;
                    zuuluu = _closure1_slot13;
                    michal = _closure2_slot1;
                    michal = michal.disableTrack;
                    michal = zuuluu.bind(report)(tangon, michal);
                    entity = function() {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            zuuluu = _closure3_slot0;
                            michal = null;
                            if(!(michal != zuuluu)) { _fun00010_ip = 31; continue _fun00009 }
 13:
                            zuuluu = _closure1_slot8;
                            michal = _closure3_slot0;
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
 31:
                            entity = undefined;
                            return entity;
                        }
                    };
                    return entity;
                }
            };
            _closure2_slot5 = report;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 11;
            zuuluu = oscard[zuuluu];
            report = report.bind(entity)(zuuluu);
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot1;
                    zuuluu = michal.trackOnInitialLoad;
                    michal = undefined;
                    if(zuuluu) { _fun00012_ip = 20; continue _fun00011 }
 18:
                    return michal;
 20:
                    entity = _closure2_slot5;
                    entity = entity.bind(michal)();
                    return entity;
                }
            };
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = tangon.useEffect;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot1;
                    zuuluu = entity.trackOnInitialLoad;
                    entity = undefined;
                    if(zuuluu) { _fun00014_ip = 28; continue _fun00013 }
 18:
                    michal = _closure2_slot5;
                    michal = michal.bind(entity)();
                    return michal;
 28:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['trackImpression'] = michal;
    return entity;
})();