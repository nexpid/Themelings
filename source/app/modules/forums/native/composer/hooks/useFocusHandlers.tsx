// app/modules/forums/native/composer/hooks/useFocusHandlers.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    golfie = entity.Object;
    report = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(golfie)(zuuluu, entity, tangon);
    option = 0;
    report = oscard[option];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot0 = tangon;
    golfie = 1;
    report = oscard[golfie];
    tangon = argCor;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot1 = tangon;
    tangon = {};
    tangon['TITLE'] = option;
    report = 'TITLE';
    tangon[option] = report;
    tangon['CONTENT'] = golfie;
    report = 'CONTENT';
    tangon[golfie] = report;
    var _closure1_slot2 = tangon;
    report = 2;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/forums/native/composer/hooks/useFocusHandlers.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['PostComposerInputs'] = tangon;
    michal = function(argFoo) { // Original name: useFocusHandlers
        entity = argFoo;
        michal = entity.titleInput;
        var _closure2_slot0 = michal;
        entity = entity.contentInput;
        var _closure2_slot1 = entity;
        report = _closure1_slot1;
        tangon = report.useState;
        michal = _closure1_slot2;
        michal = michal.TITLE;
        report = tangon.bind(report)(michal);
        tangon = _closure1_slot0;
        michal = undefined;
        entity = 2;
        report = tangon.bind(michal)(report, entity);
        entity = 0;
        michal = report[entity];
        var _closure2_slot2 = michal;
        entity = {};
        tangon = 1;
        tangon = report[tangon];
        entity['setFocusedInput'] = tangon;
        tangon = function() { // Original name: focusLastInput
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure2_slot2;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu.TITLE;
                if(!(tangon !== zuuluu)) { _fun00002_ip = 69; continue _fun00001 }
 24:
                zuuluu = _closure2_slot2;
                michal = _closure1_slot2;
                michal = michal.CONTENT;
                if(!(zuuluu === michal)) { _fun00002_ip = 94; continue _fun00001 }
 42:
                michal = _closure2_slot1;
                zuuluu = michal.current;
                michal = null;
                if(!(michal != zuuluu)) { _fun00002_ip = 94; continue _fun00001 }
 57:
                michal = zuuluu.focus;
                michal = michal.bind(zuuluu)();
                _fun00002_ip = 94; continue _fun00001;
 69:
                entity = _closure2_slot0;
                michal = entity.current;
                entity = null;
                if(!(entity != michal)) { _fun00002_ip = 94; continue _fun00001 }
 84:
                entity = michal.focus;
                entity = entity.bind(michal)();
 94:
                entity = undefined;
                return entity;
            }
        };
        entity['focusLastInput'] = tangon;
        zuuluu = function() { // Original name: blurLastInput
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure2_slot2;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu.TITLE;
                if(!(tangon !== zuuluu)) { _fun00004_ip = 69; continue _fun00003 }
 24:
                zuuluu = _closure2_slot2;
                michal = _closure1_slot2;
                michal = michal.CONTENT;
                if(!(zuuluu === michal)) { _fun00004_ip = 94; continue _fun00003 }
 42:
                michal = _closure2_slot1;
                zuuluu = michal.current;
                michal = null;
                if(!(michal != zuuluu)) { _fun00004_ip = 94; continue _fun00003 }
 57:
                michal = zuuluu.blur;
                michal = michal.bind(zuuluu)();
                _fun00004_ip = 94; continue _fun00003;
 69:
                entity = _closure2_slot0;
                michal = entity.current;
                entity = null;
                if(!(entity != michal)) { _fun00004_ip = 94; continue _fun00003 }
 84:
                entity = michal.blur;
                entity = entity.bind(michal)();
 94:
                entity = undefined;
                return entity;
            }
        };
        entity['blurLastInput'] = zuuluu;
        entity['focusedInput'] = michal;
        return entity;
    };
    zuuluu['useFocusHandlers'] = michal;
    return entity;
})();