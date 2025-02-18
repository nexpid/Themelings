// app/modules/polls/native/PollDurationActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: PollDurationRadioGroup
        entity = argFoo;
        oscard = entity.selectedDuration;
        michal = entity.onChange;
        var _closure2_slot0 = michal;
        golfie = _closure1_slot1;
        foxtra = _closure1_slot2;
        zuuluu = 2;
        zuuluu = foxtra[zuuluu];
        tangon = undefined;
        zuuluu = golfie.bind(tangon)(zuuluu);
        option = zuuluu.bind(tangon)();
        var _closure2_slot1 = option;
        verify = _closure1_slot3;
        golfie = verify.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = option;
        zuuluu[1] = michal;
        michal = function(argFoo) {
            golfie = argFoo;
            michal = _closure2_slot0;
            entity = undefined;
            michal = michal.bind(entity)(golfie);
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            report = 3;
            report = tangon[report];
            report = oscard.bind(entity)(report);
            oscard = report.AccessibilityAnnouncer;
            report = oscard.announce;
            zuuluu = _closure2_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot1;
            michal = 4;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.hideActionSheet;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        golfie = golfie.bind(verify)(michal, zuuluu);
        zuuluu = _closure1_slot4;
        romeon = _closure1_slot0;
        entity = 5;
        entity = foxtra[entity];
        entity = romeon.bind(tangon)(entity);
        michal = entity.TableRadioGroup;
        entity = {};
        verify = 6;
        offset = foxtra[verify];
        offset = romeon.bind(tangon)(offset);
        yankee = offset.intl;
        offset = yankee.string;
        verify = foxtra[verify];
        verify = romeon.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.0ZStp6;
        verify = offset.bind(yankee)(verify);
        entity['title'] = verify;
        verify = false;
        entity['hasIcons'] = verify;
        entity['onChange'] = golfie;
        entity['value'] = oscard;
        oscard = global;
        golfie = oscard.Object;
        oscard = golfie.entries;
        golfie = oscard.bind(golfie)(option);
        oscard = golfie.map;
        report = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                entity = zuuluu[Symbol.iterator];
                zuuluu = entity().next;
                oscard = zuuluu().value;
                michal = entity;
                report = undefined;
                michal = michal === report;
                tangon = undefined;
                if(michal) { _fun00002_ip = 27; continue _fun00001 }
 24:
                tangon = oscard;
 27:
                oscard = undefined;
                if(michal) { _fun00002_ip = 57; continue _fun00001 }
 32:
                golfie = zuuluu().value;
                zuuluu = entity;
                zuuluu = zuuluu === report;
                oscard = undefined;
                michal = zuuluu;
                if(zuuluu) { _fun00002_ip = 57; continue _fun00001 }
 51:
                oscard = golfie;
                michal = zuuluu;
 57:
                if(michal) { _fun00002_ip = 63; continue _fun00001 }
 60:
                entity.return();
 63:
                zuuluu = _closure1_slot4;
                michal = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 7;
                entity = golfie[entity];
                entity = michal.bind(report)(entity);
                michal = entity.TableRadioRow;
                entity = {};
                golfie = global;
                golfie = golfie.parseInt;
                golfie = golfie.bind(report)(tangon);
                entity['value'] = golfie;
                entity['label'] = oscard;
                entity = zuuluu.bind(report)(michal, entity, tangon);
                return entity;
            }
        };
        report = oscard.bind(golfie)(report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/polls/native/PollDurationActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: PollDurationActionSheet
        entity = argFoo;
        verify = entity.selectedDuration;
        option = entity.onChange;
        tangon = _closure1_slot4;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 8;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.ActionSheet;
        entity = {};
        golfie = _closure1_slot4;
        oscard = _closure1_slot5;
        report = {};
        report['selectedDuration'] = verify;
        report['onChange'] = option;
        report = golfie.bind(zuuluu)(oscard, report);
        entity['children'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();