// app/modules/voice_panel/native/hooks/useSoundboardConfig.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    option = golfie[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(option);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = {};
    report = 'call control drawer';
    michal['VOICE_CONTROLS'] = report;
    report = 'call floating button';
    michal['FLOATING_BUTTON'] = report;
    report = 'call header';
    michal['HEADER'] = report;
    var _closure1_slot5 = michal;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_panel/native/hooks/useSoundboardConfig.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar) { // Original name: useSoundboardConfig
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            tangon = argBar;
            var _closure2_slot0 = golfie;
            var _closure2_slot1 = tangon;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 2;
            entity = offset[entity];
            option = undefined;
            entity = verify.bind(option)(entity);
            oscard = entity.bind(option)(golfie);
            romeon = _closure1_slot0;
            entity = 3;
            entity = offset[entity];
            yankee = romeon.bind(option)(entity);
            michal = yankee.UNSAFE_useIsDismissibleContentDismissed;
            entity = 4;
            entity = offset[entity];
            entity = romeon.bind(option)(entity);
            entity = entity.DismissibleContent;
            entity = entity.SOUNDBOARD_MOBILE_NEW_BADGE;
            entity = michal.bind(yankee)(entity);
            michal = !entity;
            entity = 5;
            entity = offset[entity];
            offset = verify.bind(option)(entity);
            verify = offset.useExperiment;
            option = {};
            option['location'] = tangon;
            entity = {};
            yankee = true;
            entity['autoTrackExposure'] = yankee;
            yankee = !oscard;
            entity['disable'] = yankee;
            entity = verify.bind(offset)(option, entity);
            verify = entity.enabled;
            offset = entity.showInHeader;
            entity = {};
            if(!oscard) { _fun00002_ip = 241; continue _fun00001 }
 163:
            option = _closure1_slot5;
            option = option.VOICE_CONTROLS;
            option = tangon === option;
            if(option) { _fun00002_ip = 209; continue _fun00001 }
 180:
            yankee = verify;
            if(!verify) { _fun00002_ip = 189; continue _fun00001 }
 186:
            yankee = !offset;
 189:
            if(!yankee) { _fun00002_ip = 206; continue _fun00001 }
 192:
            romeon = _closure1_slot5;
            romeon = romeon.FLOATING_BUTTON;
            yankee = tangon === romeon;
 206:
            option = yankee;
 209:
            if(option) { _fun00002_ip = 238; continue _fun00001 }
 212:
            if(!verify) { _fun00002_ip = 218; continue _fun00001 }
 215:
            verify = offset;
 218:
            if(!verify) { _fun00002_ip = 235; continue _fun00001 }
 221:
            offset = _closure1_slot5;
            offset = offset.HEADER;
            verify = tangon === offset;
 235:
            option = verify;
 238:
            oscard = option;
 241:
            entity['visible'] = oscard;
            oscard = _closure1_slot3;
            option = oscard.useCallback;
            report = new Array(2);
            report[0] = golfie;
            report[1] = tangon;
            tangon = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot4;
                    zuuluu = report.getChannel;
                    michal = _closure2_slot0;
                    report = zuuluu.bind(report)(michal);
                    michal = null;
                    if(!(michal != report)) { _fun00004_ip = 78; continue _fun00003 }
 30:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.showSoundboardSoundPickerActionSheet;
                    entity = {};
                    entity['channel'] = report;
                    tangon = _closure2_slot1;
                    entity['analyticsSource'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 78:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = option.bind(oscard)(tangon, report);
            entity['handlePress'] = tangon;
            report = oscard.useMemo;
            tangon = new Array(1);
            tangon[0] = golfie;
            zuuluu = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 7;
                michal = zuuluu[michal];
                zuuluu = undefined;
                michal = tangon.bind(zuuluu)(michal);
                report = _closure1_slot4;
                tangon = report.getChannel;
                entity = _closure2_slot0;
                entity = tangon.bind(report)(entity);
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu, tangon);
            entity['disabled'] = zuuluu;
            entity['showIndicator'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['SoundboardButtonLocation'] = michal;
    return entity;
})();