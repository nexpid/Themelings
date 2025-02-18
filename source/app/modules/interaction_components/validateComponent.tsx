// app/modules/interaction_components/validateComponent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 3;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/interaction_components/validateComponent.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: validateComponent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = argBar;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 63; continue _fun00001 }
 12:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 2;
            tangon = oscard[tangon];
            golfie = undefined;
            oscard = report.bind(golfie)(tangon);
            report = zuuluu.type;
            tangon = michal.type;
            report = report === tangon;
            tangon = 'component type matches state';
            tangon = oscard.bind(golfie)(report, tangon);
 63:
            oscard = michal.type;
            option = _closure1_slot0;
            report = _closure1_slot2;
            golfie = 1;
            report = report[golfie];
            verify = undefined;
            report = option.bind(verify)(report);
            report = report.ComponentType;
            report = report.BUTTON;
            if(!(report !== oscard)) { _fun00002_ip = 1039; continue _fun00001 }
 112:
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golfie];
            report = option.bind(verify)(report);
            report = report.ComponentType;
            report = report.STRING_SELECT;
            if(!(report !== oscard)) { _fun00002_ip = 572; continue _fun00001 }
 148:
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golfie];
            report = option.bind(verify)(report);
            report = report.ComponentType;
            report = report.USER_SELECT;
            if(!(report !== oscard)) { _fun00002_ip = 572; continue _fun00001 }
 184:
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golfie];
            report = option.bind(verify)(report);
            report = report.ComponentType;
            report = report.ROLE_SELECT;
            if(!(report !== oscard)) { _fun00002_ip = 572; continue _fun00001 }
 220:
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golfie];
            report = option.bind(verify)(report);
            report = report.ComponentType;
            report = report.MENTIONABLE_SELECT;
            if(!(report !== oscard)) { _fun00002_ip = 572; continue _fun00001 }
 256:
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golfie];
            report = option.bind(verify)(report);
            report = report.ComponentType;
            report = report.CHANNEL_SELECT;
            if(!(report !== oscard)) { _fun00002_ip = 572; continue _fun00001 }
 292:
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[golfie];
            report = option.bind(verify)(report);
            report = report.ComponentType;
            report = report.TEXT_INPUT;
            if(!(report !== oscard)) { _fun00002_ip = 361; continue _fun00001 }
 325:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            report = 2;
            report = option[report];
            option = oscard.bind(verify)(report);
            oscard = false;
            report = 'missing validator for this component';
            report = option.bind(verify)(oscard, report);
            return verify;
 361:
            backup = michal.minLength;
            foxtra = michal.maxLength;
            option = michal.required;
            if(!(entity != zuuluu)) { _fun00002_ip = 497; continue _fun00001 }
 383:
            report = zuuluu.value;
            report = report.length;
            kiloes = 0;
            if(!(kiloes !== report)) { _fun00002_ip = 497; continue _fun00001 }
 399:
            report = zuuluu.value;
            report = report.length;
            if(!(!(report < backup))) { _fun00002_ip = 432; continue _fun00001 }
 413:
            report = zuuluu.value;
            report = report.length;
            oscard = report > foxtra;
            report = null;
            if(!oscard) { _fun00002_ip = 495; continue _fun00001 }
 432:
            offset = _closure1_slot0;
            oscard = _closure1_slot2;
            yankee = oscard[kiloes];
            yankee = offset.bind(verify)(yankee);
            romeon = yankee.intl;
            yankee = romeon.formatToPlainString;
            oscard = oscard[kiloes];
            oscard = offset.bind(verify)(oscard);
            oscard = oscard.t;
            offset = oscard.ONSqYW;
            oscard = {};
            oscard['min'] = backup;
            oscard['max'] = foxtra;
            report = yankee.bind(romeon)(offset, oscard);
 495:
            _fun00002_ip = 570; continue _fun00001;
 497:
            oscard = null;
            if(!option) { _fun00002_ip = 567; continue _fun00001 }
 502:
            offset = _closure1_slot0;
            kiloes = _closure1_slot2;
            option = 0;
            yankee = kiloes[option];
            yankee = offset.bind(verify)(yankee);
            romeon = yankee.intl;
            yankee = romeon.formatToPlainString;
            option = kiloes[option];
            option = offset.bind(verify)(option);
            option = option.t;
            offset = option.ONSqYW;
            option = {};
            option['min'] = backup;
            option['max'] = foxtra;
            oscard = yankee.bind(romeon)(offset, option);
 567:
            report = oscard;
 570:
            return report;
 572:
            option = michal.minValues;
            offset = michal.maxValues;
            if(!(entity != zuuluu)) { _fun00002_ip = 967; continue _fun00001 }
 591:
            report = zuuluu.type;
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = oscard.bind(verify)(michal);
            michal = michal.ComponentType;
            michal = michal.STRING_SELECT;
            if(!(report !== michal)) { _fun00002_ip = 802; continue _fun00001 }
 632:
            michal = zuuluu.selectedOptions;
            michal = michal.length;
            if(!(!(michal < option))) { _fun00002_ip = 736; continue _fun00001 }
 647:
            michal = zuuluu.selectedOptions;
            michal = michal.length;
            report = michal > offset;
            michal = null;
            if(!report) { _fun00002_ip = 1037; continue _fun00001 }
 670:
            oscard = _closure1_slot0;
            romeon = _closure1_slot2;
            report = 0;
            golfie = romeon[report];
            golfie = oscard.bind(verify)(golfie);
            yankee = golfie.intl;
            golfie = yankee.formatToPlainString;
            report = romeon[report];
            report = oscard.bind(verify)(report);
            report = report.t;
            oscard = report.LDvfRE;
            report = {};
            report['count'] = offset;
            michal = golfie.bind(yankee)(oscard, report);
            _fun00002_ip = 1037; continue _fun00001;
 736:
            oscard = _closure1_slot0;
            romeon = _closure1_slot2;
            report = 0;
            golfie = romeon[report];
            golfie = oscard.bind(verify)(golfie);
            yankee = golfie.intl;
            golfie = yankee.formatToPlainString;
            report = romeon[report];
            report = oscard.bind(verify)(report);
            report = report.t;
            oscard = report.Jmwzd3;
            report = {};
            report['count'] = option;
            michal = golfie.bind(yankee)(oscard, report);
            _fun00002_ip = 1037; continue _fun00001;
 802:
            report = zuuluu.values;
            report = report.length;
            if(!(!(report < option))) { _fun00002_ip = 904; continue _fun00001 }
 816:
            zuuluu = zuuluu.values;
            zuuluu = zuuluu.length;
            zuuluu = zuuluu > offset;
            michal = null;
            if(!zuuluu) { _fun00002_ip = 1037; continue _fun00001 }
 838:
            report = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 0;
            oscard = yankee[zuuluu];
            oscard = report.bind(verify)(oscard);
            golfie = oscard.intl;
            oscard = golfie.formatToPlainString;
            zuuluu = yankee[zuuluu];
            zuuluu = report.bind(verify)(zuuluu);
            zuuluu = zuuluu.t;
            report = zuuluu.LDvfRE;
            zuuluu = {};
            zuuluu['count'] = offset;
            michal = oscard.bind(golfie)(report, zuuluu);
            _fun00002_ip = 1037; continue _fun00001;
 904:
            report = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 0;
            oscard = offset[zuuluu];
            oscard = report.bind(verify)(oscard);
            golfie = oscard.intl;
            oscard = golfie.formatToPlainString;
            zuuluu = offset[zuuluu];
            zuuluu = report.bind(verify)(zuuluu);
            zuuluu = zuuluu.t;
            report = zuuluu.Jmwzd3;
            zuuluu = {};
            zuuluu['count'] = option;
            michal = oscard.bind(golfie)(report, zuuluu);
            _fun00002_ip = 1037; continue _fun00001;
 967:
            offset = 0;
            zuuluu = null;
            if(!(offset !== option)) { _fun00002_ip = 1034; continue _fun00001 }
 975:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            oscard = tangon[offset];
            oscard = report.bind(verify)(oscard);
            golfie = oscard.intl;
            oscard = golfie.formatToPlainString;
            tangon = tangon[offset];
            tangon = report.bind(verify)(tangon);
            tangon = tangon.t;
            report = tangon.Jmwzd3;
            tangon = {};
            tangon['count'] = option;
            zuuluu = oscard.bind(golfie)(report, tangon);
 1034:
            michal = zuuluu;
 1037:
            return michal;
 1039:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();