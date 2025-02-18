// app/design/components/TextField/native/useTextField.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    oscard = argPlu;
    tangon = function(argFoo) { // Original name: useTextFieldState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.value;
            offset = zuuluu.defaultValue;
            tangon = zuuluu.onChange;
            var _closure2_slot0 = tangon;
            option = zuuluu.onClear;
            var _closure2_slot1 = option;
            verify = _closure1_slot1;
            oscard = verify.useState;
            golfie = null;
            if(!(golfie != michal)) { _fun00002_ip = 57; continue _fun00001 }
 54:
            offset = michal;
 57:
            yankee = golfie != offset;
            report = '';
            if(!yankee) { _fun00002_ip = 71; continue _fun00001 }
 68:
            report = offset;
 71:
            offset = oscard.bind(verify)(report);
            verify = _closure1_slot0;
            oscard = undefined;
            report = 2;
            offset = verify.bind(oscard)(offset, report);
            oscard = 0;
            report = offset[oscard];
            verify = 1;
            verify = offset[verify];
            var _closure2_slot2 = verify;
            if(!(golfie != michal)) { _fun00002_ip = 115; continue _fun00001 }
 112:
            report = michal;
 115:
            michal = report.length;
            michal = michal > oscard;
            verify = _closure1_slot1;
            golfie = verify.useCallback;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot2;
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    report = _closure2_slot0;
                    tangon = null;
                    if(!(tangon != report)) { _fun00004_ip = 36; continue _fun00003 }
 27:
                    michal = _closure2_slot0;
                    michal = michal.bind(entity)(zuuluu);
 36:
                    return entity;
                }
            };
            tangon = golfie.bind(verify)(tangon, oscard);
            var _closure2_slot3 = tangon;
            golfie = _closure1_slot1;
            oscard = golfie.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = tangon;
            zuuluu[1] = option;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure2_slot3;
                    entity = undefined;
                    zuuluu = '';
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure2_slot1;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00006_ip = 36; continue _fun00005 }
 28:
                    michal = _closure2_slot1;
                    michal = michal.bind(entity)();
 36:
                    return entity;
                }
            };
            zuuluu = oscard.bind(golfie)(entity, zuuluu);
            entity = {};
            entity['value'] = report;
            entity['setTextValue'] = tangon;
            entity['clear'] = zuuluu;
            entity['hasValue'] = michal;
            return entity;
        }
    };
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, report);
    entity = 0;
    golfie = oscard[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(golfie);
    var _closure1_slot0 = report;
    report = 1;
    golfie = oscard[report];
    report = argCor;
    report = report.bind(entity)(golfie);
    var _closure1_slot1 = report;
    report = 2;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'design/components/TextField/native/useTextField.native.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useTextFieldState'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useTextField
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            oscard = _closure1_slot1;
            tangon = oscard.useRef;
            michal = null;
            michal = tangon.bind(oscard)(michal);
            var _closure2_slot1 = michal;
            option = _closure1_slot1;
            golfie = option.useCallback;
            oscard = new Array(2);
            oscard[0] = michal;
            tangon = zuuluu.onClear;
            oscard[1] = tangon;
            tangon = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot1;
                    report = entity.current;
                    entity = null;
                    if(!(entity != report)) { _fun00010_ip = 39; continue _fun00009 }
 18:
                    tangon = report.setNativeProps;
                    zuuluu = {};
                    oscard = '';
                    zuuluu['text'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 39:
                    michal = _closure2_slot0;
                    michal = michal.onClear;
                    if(!(entity != michal)) { _fun00010_ip = 59; continue _fun00009 }
 53:
                    entity = undefined;
                    entity = michal.bind(entity)();
 59:
                    entity = undefined;
                    return entity;
                }
            };
            option = golfie.bind(option)(tangon, oscard);
            golfie = _closure1_slot2;
            tangon = {};
            romeon = tangon;
            yankee = zuuluu;
            oscard = copyDataProperties(romeon, yankee);
            oscard = 'onClear';
            tangon[oscard] = option;
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            var _closure2_slot2 = tangon;
            verify = _closure1_slot1;
            option = verify.useImperativeHandle;
            golfie = new Array(2);
            golfie[0] = michal;
            golfie[1] = tangon;
            report = argBar;
            entity = function() {
                entity = {};
                zuuluu = function() { // Original name: blur
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = _closure2_slot1;
                        michal = entity.current;
                        entity = null;
                        if(!(entity != michal)) { _fun00012_ip = 28; continue _fun00011 }
 18:
                        entity = michal.blur;
                        entity = entity.bind(michal)();
 28:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['blur'] = zuuluu;
                zuuluu = function() { // Original name: focus
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = _closure2_slot1;
                        michal = entity.current;
                        entity = null;
                        if(!(entity != michal)) { _fun00014_ip = 28; continue _fun00013 }
 18:
                        entity = michal.focus;
                        entity = entity.bind(michal)();
 28:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['focus'] = zuuluu;
                zuuluu = function() { // Original name: isFocused
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = _closure2_slot1;
                        zuuluu = entity.current;
                        entity = null;
                        entity = entity == zuuluu;
                        michal = undefined;
                        if(entity) { _fun00016_ip = 33; continue _fun00015 }
 23:
                        entity = zuuluu.isFocused;
                        michal = entity.bind(zuuluu)();
 33:
                        entity = true;
                        entity = entity === michal;
                        return entity;
                    }
                };
                entity['isFocused'] = zuuluu;
                zuuluu = function() { // Original name: getText
                    entity = _closure2_slot2;
                    entity = entity.value;
                    return entity;
                };
                entity['getText'] = zuuluu;
                michal = function(argFoo) { // Original name: setText
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tangon = argFoo;
                        michal = _closure2_slot1;
                        report = michal.current;
                        michal = null;
                        if(!(michal != report)) { _fun00018_ip = 38; continue _fun00017 }
 21:
                        zuuluu = report.setNativeProps;
                        michal = {};
                        michal['text'] = tangon;
                        michal = zuuluu.bind(report)(michal);
 38:
                        michal = '';
                        if(!(michal !== tangon)) { _fun00018_ip = 63; continue _fun00017 }
 46:
                        zuuluu = _closure2_slot2;
                        michal = zuuluu.setTextValue;
                        michal = michal.bind(zuuluu)(tangon);
                        _fun00018_ip = 77; continue _fun00017;
 63:
                        michal = _closure2_slot2;
                        entity = michal.clear;
                        entity = entity.bind(michal)();
 77:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['setText'] = michal;
                return entity;
            };
            entity = option.bind(verify)(report, entity, golfie);
            entity = {};
            entity['innerRef'] = michal;
            entity['state'] = tangon;
            michal = {};
            romeon = michal;
            yankee = zuuluu;
            report = copyDataProperties(romeon, yankee);
            report = 'onChange';
            michal[report] = oscard;
            report = tangon.setTextValue;
            tangon = 'onChangeText';
            michal[tangon] = report;
            tangon = zuuluu.isDisabled;
            report = !tangon;
            tangon = 'editable';
            michal[tangon] = report;
            tangon = zuuluu.isDisabled;
            report = !tangon;
            if(!report) { _fun00008_ip = 226; continue _fun00007 }
 220:
            report = zuuluu.focusable;
 226:
            tangon = 'focusable';
            michal[tangon] = report;
            tangon = zuuluu.isDisabled;
            zuuluu = 'aria-disabled';
            michal[zuuluu] = tangon;
            entity['inputProps'] = michal;
            return entity;
        }
    };
    zuuluu['useTextField'] = michal;
    return entity;
})();