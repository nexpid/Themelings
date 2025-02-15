// app/modules/voice_panel/native/hooks/useSoundboardConfig.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    options = golf[entity];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(options);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = golf[mike];
    mike = report.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = {};
    report = 'call control drawer';
    mike['VOICE_CONTROLS'] = report;
    report = 'call floating button';
    mike['FLOATING_BUTTON'] = report;
    report = 'call header';
    mike['HEADER'] = report;
    var _closure1_slot5 = mike;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_panel/native/hooks/useSoundboardConfig.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar) { // Original name: useSoundboardConfig
        _fun121573: for(var _fun121573_ip = 0; ; ) switch(_fun121573_ip) {
 0:
            golf = argFoo;
            tango = argBar;
            var _closure2_slot0 = golf;
            var _closure2_slot1 = tango;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 2;
            entity = offset[entity];
            options = undefined;
            entity = verify.bind(options)(entity);
            oscar = entity.bind(options)(golf);
            romeo = _closure1_slot0;
            entity = 3;
            entity = offset[entity];
            yankee = romeo.bind(options)(entity);
            mike = yankee.useIsDismissibleContentDismissed;
            entity = 4;
            entity = offset[entity];
            entity = romeo.bind(options)(entity);
            entity = entity.DismissibleContent;
            entity = entity.SOUNDBOARD_MOBILE_NEW_BADGE;
            entity = mike.bind(yankee)(entity);
            mike = !entity;
            entity = 5;
            entity = offset[entity];
            offset = verify.bind(options)(entity);
            verify = offset.useExperiment;
            options = {};
            options['location'] = tango;
            entity = {};
            yankee = true;
            entity['autoTrackExposure'] = yankee;
            yankee = !oscar;
            entity['disable'] = yankee;
            entity = verify.bind(offset)(options, entity);
            verify = entity.enabled;
            offset = entity.showInHeader;
            entity = {};
            if(!oscar) { _fun121573_ip = 241; continue _fun121573 }
 163:
            options = _closure1_slot5;
            options = options.VOICE_CONTROLS;
            options = tango === options;
            if(options) { _fun121573_ip = 209; continue _fun121573 }
 180:
            yankee = verify;
            if(!verify) { _fun121573_ip = 189; continue _fun121573 }
 186:
            yankee = !offset;
 189:
            if(!yankee) { _fun121573_ip = 206; continue _fun121573 }
 192:
            romeo = _closure1_slot5;
            romeo = romeo.FLOATING_BUTTON;
            yankee = tango === romeo;
 206:
            options = yankee;
 209:
            if(options) { _fun121573_ip = 238; continue _fun121573 }
 212:
            if(!verify) { _fun121573_ip = 218; continue _fun121573 }
 215:
            verify = offset;
 218:
            if(!verify) { _fun121573_ip = 235; continue _fun121573 }
 221:
            offset = _closure1_slot5;
            offset = offset.HEADER;
            verify = tango === offset;
 235:
            options = verify;
 238:
            oscar = options;
 241:
            entity['visible'] = oscar;
            oscar = _closure1_slot3;
            options = oscar.useCallback;
            report = new Array(2);
            report[0] = golf;
            report[1] = tango;
            tango = function() {
                _fun121574: for(var _fun121574_ip = 0; ; ) switch(_fun121574_ip) {
 0:
                    report = _closure1_slot4;
                    zulu = report.getChannel;
                    mike = _closure2_slot0;
                    report = zulu.bind(report)(mike);
                    mike = null;
                    if(!(mike != report)) { _fun121574_ip = 78; continue _fun121574 }
 30:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.showSoundboardSoundPickerActionSheet;
                    entity = {};
                    entity['channel'] = report;
                    tango = _closure2_slot1;
                    entity['analyticsSource'] = tango;
                    entity = mike.bind(zulu)(entity);
 78:
                    entity = undefined;
                    return entity;
                }
            };
            tango = options.bind(oscar)(tango, report);
            entity['handlePress'] = tango;
            report = oscar.useMemo;
            tango = new Array(1);
            tango[0] = golf;
            zulu = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 7;
                mike = zulu[mike];
                zulu = undefined;
                mike = tango.bind(zulu)(mike);
                report = _closure1_slot4;
                tango = report.getChannel;
                entity = _closure2_slot0;
                entity = tango.bind(report)(entity);
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            zulu = report.bind(oscar)(zulu, tango);
            entity['disabled'] = zulu;
            entity['showIndicator'] = mike;
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['SoundboardButtonLocation'] = mike;
    return entity;
})();