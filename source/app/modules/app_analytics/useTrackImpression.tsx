// app/modules/app_analytics/useTrackImpression.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    yankee = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: trackImpression
        _fun48819: for(var _fun48819_ip = 0; ; ) switch(_fun48819_ip) {
 0:
            report = argFoo;
            tango = arguments[1];
            entity = undefined;
            if(!(tango === entity)) { _fun48819_ip = 14; continue _fun48819 }
 12:
            tango = false;
 14:
            oscar = report.name;
            golf = report.type;
            yankee = report.properties;
            options = report.type;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 5;
            zulu = offset[zulu];
            zulu = verify.bind(entity)(zulu);
            zulu = zulu.ImpressionTypes;
            zulu = zulu.MODAL;
            if(!(options === zulu)) { _fun48819_ip = 117; continue _fun48819 }
 74:
            options = report.name;
            zulu = null;
            if(!(zulu == options)) { _fun48819_ip = 117; continue _fun48819 }
 85:
            zulu = _closure1_slot11;
            verify = zulu.bind(entity)();
            options = verify.some;
            zulu = function(argFoo) {
                _fun48820: for(var _fun48820_ip = 0; ; ) switch(_fun48820_ip) {
 0:
                    entity = argFoo;
                    mike = entity._stackContext;
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun48820_ip = 30; continue _fun48820 }
 22:
                    entity = mike.isSlide;
 30:
                    return entity;
                }
            };
            zulu = options.bind(verify)(zulu);
            if(zulu) { _fun48819_ip = 404; continue _fun48819 }
 117:
            zulu = _closure1_slot7;
            zulu = zulu.bind(entity)(report);
            zulu = null;
            report = zulu == yankee;
            result = undefined;
            if(report) { _fun48819_ip = 142; continue _fun48819 }
 137:
            result = yankee.guild_id;
 142:
            if(!(zulu == result)) { _fun48819_ip = 160; continue _fun48819 }
 146:
            options = _closure1_slot6;
            report = options.getGuildId;
            result = report.bind(options)();
 160:
            report = zulu == yankee;
            sizing = undefined;
            if(report) { _fun48819_ip = 174; continue _fun48819 }
 169:
            sizing = yankee.channel_id;
 174:
            if(!(zulu == sizing)) { _fun48819_ip = 193; continue _fun48819 }
 178:
            options = _closure1_slot5;
            report = options.getChannelId;
            sizing = report.bind(options)(result);
 193:
            foxtrot = _closure1_slot0;
            backup = _closure1_slot2;
            options = 6;
            report = backup[options];
            offset = foxtrot.bind(entity)(report);
            verify = offset.expandEventProperties;
            report = {};
            report['impression_type'] = golf;
            romeo = _closure1_slot10;
            romeo = romeo.bind(entity)();
            report['location'] = romeo;
            romeo = 8;
            kilo = backup[romeo];
            output = foxtrot.bind(entity)(kilo);
            kilo = output.collectGuildAnalyticsMetadata;
            echo = kilo.bind(output)(result);
            update = report;
            kilo = copyDataProperties(update, echo);
            romeo = backup[romeo];
            backup = foxtrot.bind(entity)(romeo);
            foxtrot = backup.collectChannelAnalyticsMetadata;
            kilo = _closure1_slot4;
            romeo = kilo.getChannel;
            romeo = romeo.bind(kilo)(sizing);
            echo = foxtrot.bind(backup)(romeo);
            update = report;
            romeo = copyDataProperties(update, echo);
            update = report;
            echo = yankee;
            yankee = copyDataProperties(update, echo);
            report = verify.bind(offset)(report);
            if(tango) { _fun48819_ip = 394; continue _fun48819 }
 329:
            tango = zulu != oscar;
            if(!tango) { _fun48819_ip = 340; continue _fun48819 }
 336:
            tango = zulu != golf;
 340:
            if(!tango) { _fun48819_ip = 382; continue _fun48819 }
 343:
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[options];
            golf = golf.bind(entity)(tango);
            tango = golf.debugLogEvent;
            tango = tango.bind(golf)(oscar, report);
            tango = _closure1_slot12;
            tango = tango.bind(entity)(oscar, report);
 382:
            tango = _closure1_slot9;
            tango = tango.bind(entity)(oscar, report);
            _fun48819_ip = 404; continue _fun48819;
 394:
            mike = _closure1_slot9;
            mike = mike.bind(entity)(zulu, zulu);
 404:
            return entity;
        }
    };
    var _closure1_slot13 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = yankee.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = yankee.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = yankee.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.setCurrentImpression;
    var _closure1_slot7 = options;
    options = report.cleanupImpression;
    var _closure1_slot8 = options;
    options = report.setDebugTrackedData;
    var _closure1_slot9 = options;
    options = report.getLocation;
    var _closure1_slot10 = options;
    report = report.getImpressionStack;
    var _closure1_slot11 = report;
    report = 5;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.trackMaker;
    report = {};
    offset = 6;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    offset = offset.AnalyticEventConfigs;
    report['analyticEventConfigs'] = offset;
    offset = 7;
    offset = golf[offset];
    offset = yankee.bind(entity)(offset);
    report['dispatcher'] = offset;
    offset = 'TRACK';
    report['TRACK_ACTION_NAME'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot12 = report;
    report = 12;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/app_analytics/useTrackImpression.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useTrackImpression
        _fun48821: for(var _fun48821_ip = 0; ; ) switch(_fun48821_ip) {
 0:
            zulu = arguments[1];
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(zulu === entity)) { _fun48821_ip = 28; continue _fun48821 }
 18:
            zulu = {'disableTrack': false, 'trackOnInitialLoad': false};
 28:
            var _closure2_slot1 = zulu;
            zulu = arguments[2];
            var _closure2_slot2 = zulu;
            var _closure2_slot3 = entity;
            var _closure2_slot4 = entity;
            var _closure2_slot5 = entity;
            tango = _closure1_slot3;
            report = tango.useRef;
            report = report.bind(tango)();
            _closure2_slot3 = report;
            report = tango.useRef;
            report = report.bind(tango)();
            _closure2_slot4 = report;
            report = function() { // Original name: trackImpressionEffect
                _fun48822: for(var _fun48822_ip = 0; ; ) switch(_fun48822_ip) {
 0:
                    tango = _closure1_slot1;
                    mike = _closure1_slot2;
                    options = 9;
                    mike = mike[options];
                    report = undefined;
                    golf = tango.bind(report)(mike);
                    tango = _closure2_slot3;
                    oscar = tango.current;
                    tango = _closure2_slot0;
                    tango = golf.bind(report)(oscar, tango);
                    oscar = !tango;
                    if(!oscar) { _fun48822_ip = 69; continue _fun48822 }
 55:
                    golf = _closure2_slot3;
                    tango = _closure2_slot0;
                    golf['current'] = tango;
 69:
                    golf = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    options = golf.bind(report)(tango);
                    tango = _closure2_slot4;
                    golf = tango.current;
                    tango = _closure2_slot2;
                    tango = options.bind(report)(golf, tango);
                    tango = !tango;
                    if(!tango) { _fun48822_ip = 125; continue _fun48822 }
 111:
                    options = _closure2_slot4;
                    golf = _closure2_slot2;
                    options['current'] = golf;
 125:
                    if(oscar) { _fun48822_ip = 133; continue _fun48822 }
 128:
                    if(tango) { _fun48822_ip = 133; continue _fun48822 }
 131:
                    return report;
 133:
                    tango = {};
                    verify = _closure2_slot0;
                    offset = tango;
                    oscar = copyDataProperties(offset, verify);
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    oscar = 10;
                    oscar = options[oscar];
                    golf = golf.bind(report)(oscar);
                    oscar = 'impression_';
                    golf = golf.bind(report)(oscar);
                    oscar = 'sequenceId';
                    tango[oscar] = golf;
                    var _closure3_slot0 = tango;
                    zulu = _closure1_slot13;
                    mike = _closure2_slot1;
                    mike = mike.disableTrack;
                    mike = zulu.bind(report)(tango, mike);
                    entity = function() {
                        _fun48823: for(var _fun48823_ip = 0; ; ) switch(_fun48823_ip) {
 0:
                            zulu = _closure3_slot0;
                            mike = null;
                            if(!(mike != zulu)) { _fun48823_ip = 31; continue _fun48823 }
 13:
                            zulu = _closure1_slot8;
                            mike = _closure3_slot0;
                            entity = undefined;
                            entity = zulu.bind(entity)(mike);
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
            oscar = _closure1_slot2;
            zulu = 11;
            zulu = oscar[zulu];
            report = report.bind(entity)(zulu);
            zulu = function() {
                _fun48824: for(var _fun48824_ip = 0; ; ) switch(_fun48824_ip) {
 0:
                    mike = _closure2_slot1;
                    zulu = mike.trackOnInitialLoad;
                    mike = undefined;
                    if(zulu) { _fun48824_ip = 20; continue _fun48824 }
 18:
                    return mike;
 20:
                    entity = _closure2_slot5;
                    entity = entity.bind(mike)();
                    return entity;
                }
            };
            zulu = report.bind(entity)(zulu);
            zulu = tango.useEffect;
            mike = function() {
                _fun48825: for(var _fun48825_ip = 0; ; ) switch(_fun48825_ip) {
 0:
                    entity = _closure2_slot1;
                    zulu = entity.trackOnInitialLoad;
                    entity = undefined;
                    if(zulu) { _fun48825_ip = 28; continue _fun48825 }
 18:
                    mike = _closure2_slot5;
                    mike = mike.bind(entity)();
                    return mike;
 28:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['trackImpression'] = mike;
    return entity;
})();