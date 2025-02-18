// app/modules/forums/native/composer/hooks/useFocusHandlers.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    verify = 0;
    report = golfie[verify];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    option = 1;
    report = golfie[option];
    tangon = argCor;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot3 = tangon;
    tangon = {};
    tangon['TITLE'] = verify;
    report = 'TITLE';
    tangon[verify] = report;
    tangon['CONTENT'] = option;
    report = 'CONTENT';
    tangon[option] = report;
    var _closure1_slot4 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
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
        yankee = _closure1_slot3;
        zuuluu = yankee.useState;
        entity = _closure1_slot4;
        entity = entity.TITLE;
        entity = zuuluu.bind(yankee)(entity);
        verify = _closure1_slot2;
        option = undefined;
        golfie = 2;
        entity = verify.bind(option)(entity, golfie);
        michal = 0;
        zuuluu = entity[michal];
        var _closure2_slot2 = zuuluu;
        oscard = 1;
        report = entity[oscard];
        offset = yankee.useState;
        entity = false;
        entity = offset.bind(yankee)(entity);
        entity = verify.bind(option)(entity, golfie);
        michal = entity[michal];
        entity = entity[oscard];
        var _closure2_slot3 = entity;
        entity = function(argFoo) { // Original name: _setOpeningKeyboard
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isAndroid;
                michal = michal.bind(zuuluu)();
                if(!michal) { _fun00002_ip = 52; continue _fun00001 }
 37:
                zuuluu = _closure2_slot3;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
 52:
                return entity;
            }
        };
        var _closure2_slot4 = entity;
        entity = {};
        entity['setFocusedInput'] = report;
        report = function() { // Original name: focusLastInput
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure2_slot4;
                entity = undefined;
                zuuluu = true;
                zuuluu = tangon.bind(entity)(zuuluu);
                report = _closure2_slot2;
                tangon = _closure1_slot4;
                tangon = tangon.TITLE;
                if(!(report !== tangon)) { _fun00004_ip = 82; continue _fun00003 }
 37:
                tangon = _closure2_slot2;
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.CONTENT;
                if(!(tangon === zuuluu)) { _fun00004_ip = 107; continue _fun00003 }
 55:
                zuuluu = _closure2_slot1;
                tangon = zuuluu.current;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00004_ip = 107; continue _fun00003 }
 70:
                zuuluu = tangon.focus;
                zuuluu = zuuluu.bind(tangon)();
                _fun00004_ip = 107; continue _fun00003;
 82:
                michal = _closure2_slot0;
                zuuluu = michal.current;
                michal = null;
                if(!(michal != zuuluu)) { _fun00004_ip = 107; continue _fun00003 }
 97:
                michal = zuuluu.focus;
                michal = michal.bind(zuuluu)();
 107:
                michal = global;
                tangon = michal.setTimeout;
                zuuluu = function() {
                    zuuluu = _closure2_slot4;
                    entity = undefined;
                    michal = false;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = 250;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            }
        };
        entity['focusLastInput'] = report;
        tangon = function() { // Original name: blurLastInput
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = _closure2_slot4;
                entity = undefined;
                zuuluu = false;
                zuuluu = tangon.bind(entity)(zuuluu);
                report = _closure2_slot2;
                tangon = _closure1_slot4;
                tangon = tangon.TITLE;
                if(!(report !== tangon)) { _fun00006_ip = 82; continue _fun00005 }
 37:
                tangon = _closure2_slot2;
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.CONTENT;
                if(!(tangon === zuuluu)) { _fun00006_ip = 107; continue _fun00005 }
 55:
                zuuluu = _closure2_slot1;
                tangon = zuuluu.current;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00006_ip = 107; continue _fun00005 }
 70:
                zuuluu = tangon.blur;
                zuuluu = zuuluu.bind(tangon)();
                _fun00006_ip = 107; continue _fun00005;
 82:
                michal = _closure2_slot0;
                zuuluu = michal.current;
                michal = null;
                if(!(michal != zuuluu)) { _fun00006_ip = 107; continue _fun00005 }
 97:
                michal = zuuluu.blur;
                michal = michal.bind(zuuluu)();
 107:
                return entity;
            }
        };
        entity['blurLastInput'] = tangon;
        entity['focusedInput'] = zuuluu;
        entity['openingKeyboard'] = michal;
        return entity;
    };
    zuuluu['useFocusHandlers'] = michal;
    return entity;
})();