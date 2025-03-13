// app/modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: useEmojiPickerSearchState
        verify = argFoo;
        offset = argBar;
        option = argBaz;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = offset;
        var _closure2_slot2 = option;
        golfie = _closure1_slot3;
        zuuluu = golfie.useRef;
        michal = '';
        zuuluu = zuuluu.bind(golfie)(michal);
        var _closure2_slot3 = zuuluu;
        report = golfie.useState;
        michal = null;
        oscard = report.bind(golfie)(michal);
        report = _closure1_slot2;
        michal = undefined;
        entity = 2;
        report = report.bind(michal)(oscard, entity);
        entity = 0;
        michal = report[entity];
        entity = 1;
        entity = report[entity];
        var _closure2_slot4 = entity;
        entity = {};
        oscard = golfie.useCallback;
        report = new Array(3);
        report[0] = offset;
        report[1] = verify;
        report[2] = option;
        tangon = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                var _closure3_slot0 = tangon;
                michal = '';
                if(!(michal === tangon)) { _fun00002_ip = 63; continue _fun00001 }
 17:
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                report = report.bind(michal)(zuuluu);
                zuuluu = report.batchUpdates;
                michal = function() {
                    zuuluu = _closure2_slot3;
                    entity = '';
                    zuuluu['current'] = entity;
                    tangon = _closure2_slot4;
                    entity = undefined;
                    zuuluu = null;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure2_slot1;
                    zuuluu = tangon.set;
                    michal = 0;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(report)(michal);
                _fun00002_ip = 212; continue _fun00001;
 63:
                verify = 0;
                zuuluu = tangon[verify];
                michal = ':';
                offset = tangon;
                if(!(michal === zuuluu)) { _fun00002_ip = 93; continue _fun00001 }
 80:
                zuuluu = tangon.slice;
                michal = 1;
                offset = zuuluu.bind(tangon)(michal);
 93:
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 4;
                oscard = report[zuuluu];
                zuuluu = undefined;
                oscard = tangon.bind(zuuluu)(oscard);
                golfie = oscard.FrecencyUserSettingsActionCreators;
                oscard = golfie.loadIfNecessary;
                oscard = oscard.bind(golfie)();
                golfie = _closure1_slot4;
                oscard = golfie.searchWithoutFetchingLatest;
                michal = {};
                yankee = _closure2_slot0;
                michal['channel'] = yankee;
                michal['query'] = offset;
                michal['count'] = verify;
                option = _closure2_slot2;
                michal['intention'] = option;
                michal = oscard.bind(golfie)(michal);
                var _closure3_slot1 = michal;
                michal = 3;
                michal = report[michal];
                zuuluu = tangon.bind(zuuluu)(michal);
                michal = zuuluu.batchUpdates;
                entity = function() {
                    tangon = _closure2_slot3;
                    zuuluu = _closure3_slot0;
                    tangon['current'] = zuuluu;
                    zuuluu = _closure2_slot4;
                    michal = _closure3_slot1;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
 212:
                entity = undefined;
                return entity;
            }
        };
        tangon = oscard.bind(golfie)(tangon, report);
        entity['handleTextChange'] = tangon;
        entity['searchQueryRef'] = zuuluu;
        entity['searchResults'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();