// app/modules/application_commands/ApplicationCommandValidators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: validateNumericOptionRange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = argBar;
            entity = michal.minValue;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00002_ip = 28; continue _fun00001 }
 18:
            entity = michal.minValue;
            if(!(!(tangon < entity))) { _fun00002_ip = 48; continue _fun00001 }
 28:
            entity = michal.maxValue;
            if(!(zuuluu != entity)) { _fun00002_ip = 91; continue _fun00001 }
 38:
            entity = michal.maxValue;
            if(!(tangon > entity)) { _fun00002_ip = 91; continue _fun00001 }
 48:
            entity = michal.maxValue;
            if(!(zuuluu != entity)) { _fun00002_ip = 71; continue _fun00001 }
 58:
            entity = michal.minValue;
            if(!(zuuluu == entity)) { _fun00002_ip = 264; continue _fun00001 }
 71:
            entity = michal.minValue;
            if(!(zuuluu == entity)) { _fun00002_ip = 183; continue _fun00001 }
 81:
            entity = michal.maxValue;
            if(!(zuuluu == entity)) { _fun00002_ip = 102; continue _fun00001 }
 91:
            entity = {};
            zuuluu = true;
            entity['success'] = zuuluu;
            return entity;
 102:
            entity = {};
            zuuluu = false;
            entity['success'] = zuuluu;
            report = _closure1_slot0;
            oscard = _closure1_slot3;
            tangon = 5;
            tangon = oscard[tangon];
            option = undefined;
            tangon = report.bind(option)(tangon);
            oscard = tangon.intl;
            report = oscard.formatToPlainString;
            tangon = {};
            golfie = _closure1_slot8;
            zuuluu = michal.maxValue;
            zuuluu = golfie.bind(option)(zuuluu);
            tangon['maximum'] = zuuluu;
            zuuluu = argGra;
            zuuluu = report.bind(oscard)(zuuluu, tangon);
            entity['error'] = zuuluu;
            return entity;
 183:
            entity = {};
            zuuluu = false;
            entity['success'] = zuuluu;
            report = _closure1_slot0;
            oscard = _closure1_slot3;
            tangon = 5;
            tangon = oscard[tangon];
            option = undefined;
            tangon = report.bind(option)(tangon);
            oscard = tangon.intl;
            report = oscard.formatToPlainString;
            tangon = {};
            golfie = _closure1_slot8;
            zuuluu = michal.minValue;
            zuuluu = golfie.bind(option)(zuuluu);
            tangon['minimum'] = zuuluu;
            zuuluu = argCor;
            zuuluu = report.bind(oscard)(zuuluu, tangon);
            entity['error'] = zuuluu;
            return entity;
 264:
            entity = {};
            zuuluu = false;
            entity['success'] = zuuluu;
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            golfie = undefined;
            zuuluu = tangon.bind(golfie)(zuuluu);
            report = zuuluu.intl;
            tangon = report.formatToPlainString;
            zuuluu = {};
            oscard = _closure1_slot8;
            option = michal.minValue;
            option = oscard.bind(golfie)(option);
            zuuluu['minimum'] = option;
            michal = michal.maxValue;
            michal = oscard.bind(golfie)(michal);
            zuuluu['maximum'] = michal;
            michal = argBaz;
            michal = tangon.bind(report)(michal, zuuluu);
            entity['error'] = michal;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: localeNumberFormat
        tangon = argFoo;
        zuuluu = tangon.toLocaleString;
        report = _closure1_slot0;
        michal = _closure1_slot3;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = report.bind(entity)(michal);
        entity = entity.intl;
        michal = entity.currentLocale;
        entity = {};
        report = false;
        entity['useGrouping'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = {};
    tangon = 2;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandOptionType;
    verify = option.SUB_COMMAND;
    option = function() {
        entity = {};
        michal = false;
        entity['success'] = michal;
        return entity;
    };
    michal[verify] = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandOptionType;
    verify = option.SUB_COMMAND_GROUP;
    option = function() {
        entity = {};
        michal = false;
        entity['success'] = michal;
        return entity;
    };
    michal[verify] = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandOptionType;
    verify = option.BOOLEAN;
    option = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = 'text';
            if(!(michal === zuuluu)) { _fun00004_ip = 82; continue _fun00003 }
 16:
            michal = entity.text;
            entity = michal.trim;
            tangon = entity.bind(michal)();
            entity = {};
            report = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.toChoiceBooleanValue;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = null;
            michal = michal != zuuluu;
            entity['success'] = michal;
            return entity;
 82:
            entity = {};
            michal = false;
            entity['success'] = michal;
            return entity;
        }
    };
    michal[verify] = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandOptionType;
    verify = option.STRING;
    option = function(argFoo, argBar, argBaz) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            report = _closure1_slot1;
            verify = _closure1_slot3;
            zuuluu = 4;
            zuuluu = verify[zuuluu];
            golfie = undefined;
            oscard = report.bind(golfie)(zuuluu);
            report = michal.type;
            option = _closure1_slot0;
            zuuluu = 2;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(golfie)(zuuluu);
            zuuluu = zuuluu.ApplicationCommandOptionType;
            zuuluu = zuuluu.STRING;
            report = report === zuuluu;
            zuuluu = 'option type must match validator type';
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            report = entity.type;
            zuuluu = 'emoji';
            if(!(zuuluu !== report)) { _fun00006_ip = 129; continue _fun00005 }
 93:
            zuuluu = 'text';
            if(!(zuuluu !== report)) { _fun00006_ip = 112; continue _fun00005 }
 101:
            zuuluu = {};
            report = false;
            zuuluu['success'] = report;
            return zuuluu;
 112:
            report = entity.text;
            zuuluu = report.trim;
            oscard = zuuluu.bind(report)();
            _fun00006_ip = 135; continue _fun00005;
 129:
            oscard = entity.surrogate;
 135:
            entity = michal.choices;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00006_ip = 883; continue _fun00005 }
 150:
            entity = michal.autocomplete;
            if(!entity) { _fun00006_ip = 207; continue _fun00005 }
 159:
            report = _closure1_slot0;
            option = _closure1_slot3;
            entity = 3;
            entity = option[entity];
            verify = report.bind(golfie)(entity);
            option = verify.findAutocompleteChoiceStringValue;
            report = michal.name;
            entity = argBaz;
            entity = option.bind(verify)(entity, report, oscard);
            if(!(zuuluu == entity)) { _fun00006_ip = 872; continue _fun00005 }
 207:
            entity = michal.minLength;
            if(!(golfie === entity)) { _fun00006_ip = 230; continue _fun00005 }
 217:
            entity = michal.maxLength;
            if(!(golfie !== entity)) { _fun00006_ip = 850; continue _fun00005 }
 230:
            if(!(zuuluu != oscard)) { _fun00006_ip = 861; continue _fun00005 }
 237:
            option = {};
            report = _closure1_slot0;
            entity = _closure1_slot3;
            yankee = 5;
            verify = entity[yankee];
            verify = report.bind(golfie)(verify);
            verify = verify.t;
            verify = verify.e+9/SU;
            option['exactRangeErrorMessage'] = verify;
            verify = entity[yankee];
            verify = report.bind(golfie)(verify);
            verify = verify.t;
            verify = verify.IE1sTk;
            option['rangeErrorMessage'] = verify;
            verify = entity[yankee];
            verify = report.bind(golfie)(verify);
            verify = verify.t;
            verify = verify.rXAFQE;
            option['minErrorMessage'] = verify;
            entity = entity[yankee];
            entity = report.bind(golfie)(entity);
            entity = entity.t;
            entity = entity.ycEPx8;
            option['maxErrorMessage'] = entity;
            entity = michal.minLength;
            if(!(golfie !== entity)) { _fun00006_ip = 383; continue _fun00005 }
 368:
            report = oscard.length;
            entity = michal.minLength;
            if(!(!(report < entity))) { _fun00006_ip = 408; continue _fun00005 }
 383:
            entity = michal.maxLength;
            if(!(golfie !== entity)) { _fun00006_ip = 490; continue _fun00005 }
 393:
            report = oscard.length;
            entity = michal.maxLength;
            if(!(report > entity)) { _fun00006_ip = 490; continue _fun00005 }
 408:
            entity = michal.maxLength;
            if(!(golfie !== entity)) { _fun00006_ip = 447; continue _fun00005 }
 418:
            entity = michal.minLength;
            if(!(golfie !== entity)) { _fun00006_ip = 447; continue _fun00005 }
 428:
            report = michal.minLength;
            entity = michal.maxLength;
            if(!(report !== entity)) { _fun00006_ip = 763; continue _fun00005 }
 447:
            entity = michal.maxLength;
            if(!(golfie !== entity)) { _fun00006_ip = 470; continue _fun00005 }
 457:
            entity = michal.minLength;
            if(!(golfie === entity)) { _fun00006_ip = 668; continue _fun00005 }
 470:
            entity = michal.minLength;
            if(!(golfie === entity)) { _fun00006_ip = 586; continue _fun00005 }
 480:
            entity = michal.maxLength;
            if(!(golfie === entity)) { _fun00006_ip = 504; continue _fun00005 }
 490:
            entity = {};
            report = true;
            entity['success'] = report;
            _fun00006_ip = 839; continue _fun00005;
 504:
            report = {};
            verify = false;
            report['success'] = verify;
            offset = _closure1_slot0;
            verify = _closure1_slot3;
            verify = verify[yankee];
            verify = offset.bind(golfie)(verify);
            foxtra = verify.intl;
            romeon = foxtra.formatToPlainString;
            offset = option.maxErrorMessage;
            verify = {};
            kiloes = _closure1_slot8;
            backup = michal.maxLength;
            backup = kiloes.bind(golfie)(backup);
            verify['maximum'] = backup;
            verify = romeon.bind(foxtra)(offset, verify);
            report['error'] = verify;
            entity = report;
            _fun00006_ip = 839; continue _fun00005;
 586:
            report = {};
            verify = false;
            report['success'] = verify;
            offset = _closure1_slot0;
            verify = _closure1_slot3;
            verify = verify[yankee];
            verify = offset.bind(golfie)(verify);
            foxtra = verify.intl;
            romeon = foxtra.formatToPlainString;
            offset = option.minErrorMessage;
            verify = {};
            kiloes = _closure1_slot8;
            backup = michal.minLength;
            backup = kiloes.bind(golfie)(backup);
            verify['minimum'] = backup;
            verify = romeon.bind(foxtra)(offset, verify);
            report['error'] = verify;
            entity = report;
            _fun00006_ip = 839; continue _fun00005;
 668:
            report = {};
            verify = false;
            report['success'] = verify;
            offset = _closure1_slot0;
            verify = _closure1_slot3;
            verify = verify[yankee];
            verify = offset.bind(golfie)(verify);
            foxtra = verify.intl;
            romeon = foxtra.formatToPlainString;
            offset = option.rangeErrorMessage;
            verify = {};
            kiloes = _closure1_slot8;
            backup = michal.minLength;
            backup = kiloes.bind(golfie)(backup);
            verify['minimum'] = backup;
            backup = michal.maxLength;
            backup = kiloes.bind(golfie)(backup);
            verify['maximum'] = backup;
            verify = romeon.bind(foxtra)(offset, verify);
            report['error'] = verify;
            entity = report;
            _fun00006_ip = 839; continue _fun00005;
 763:
            report = {};
            verify = false;
            report['success'] = verify;
            offset = _closure1_slot0;
            verify = _closure1_slot3;
            verify = verify[yankee];
            verify = offset.bind(golfie)(verify);
            yankee = verify.intl;
            offset = yankee.formatToPlainString;
            verify = option.exactRangeErrorMessage;
            option = {};
            foxtra = _closure1_slot8;
            romeon = michal.minLength;
            romeon = foxtra.bind(golfie)(romeon);
            option['value'] = romeon;
            option = offset.bind(yankee)(verify, option);
            report['error'] = option;
            entity = report;
 839:
            report = entity.success;
            if(report) { _fun00006_ip = 850; continue _fun00005 }
 848:
            return entity;
 850:
            entity = {};
            report = true;
            entity['success'] = report;
            return entity;
 861:
            entity = {};
            report = false;
            entity['success'] = report;
            return entity;
 872:
            entity = {};
            report = true;
            entity['success'] = report;
            return entity;
 883:
            entity = {};
            report = _closure1_slot0;
            option = _closure1_slot3;
            tangon = 3;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.findChoiceStringValue;
            michal = michal.choices;
            michal = tangon.bind(report)(michal, oscard);
            michal = zuuluu != michal;
            entity['success'] = michal;
            return entity;
        }
    };
    michal[verify] = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandOptionType;
    verify = option.INTEGER;
    option = function(argFoo, argBar, argBaz) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            report = _closure1_slot1;
            verify = _closure1_slot3;
            zuuluu = 4;
            zuuluu = verify[zuuluu];
            golfie = undefined;
            oscard = report.bind(golfie)(zuuluu);
            report = michal.type;
            option = _closure1_slot0;
            zuuluu = 2;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(golfie)(zuuluu);
            zuuluu = zuuluu.ApplicationCommandOptionType;
            zuuluu = zuuluu.INTEGER;
            report = report === zuuluu;
            zuuluu = 'option type must match validator type';
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            option = entity.type;
            zuuluu = null;
            report = 'text';
            oscard = null;
            if(!(report === option)) { _fun00008_ip = 112; continue _fun00007 }
 97:
            report = entity.text;
            entity = report.trim;
            oscard = entity.bind(report)();
 112:
            if(!(zuuluu != oscard)) { _fun00008_ip = 487; continue _fun00007 }
 119:
            report = oscard.length;
            entity = 0;
            if(!(entity !== report)) { _fun00008_ip = 487; continue _fun00007 }
 133:
            entity = michal.choices;
            if(!(zuuluu == entity)) { _fun00008_ip = 436; continue _fun00007 }
 146:
            entity = michal.autocomplete;
            if(!entity) { _fun00008_ip = 203; continue _fun00007 }
 155:
            report = _closure1_slot0;
            option = _closure1_slot3;
            entity = 3;
            entity = option[entity];
            verify = report.bind(golfie)(entity);
            option = verify.findAutocompleteChoiceNumberValue;
            report = michal.name;
            entity = argBaz;
            entity = option.bind(verify)(entity, report, oscard);
            if(!(zuuluu == entity)) { _fun00008_ip = 425; continue _fun00007 }
 203:
            entity = global;
            option = entity.Number;
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            report = 6;
            report = offset[report];
            offset = verify.bind(golfie)(report);
            verify = offset.normalizeNumericString;
            report = _closure1_slot4;
            report = report.locale;
            report = verify.bind(offset)(report, oscard);
            offset = option.bind(golfie)(report);
            if(!(zuuluu != offset)) { _fun00008_ip = 411; continue _fun00007 }
 265:
            report = entity.isNaN;
            report = report.bind(golfie)(offset);
            if(report) { _fun00008_ip = 411; continue _fun00007 }
 282:
            option = entity.Number;
            report = option.isInteger;
            report = report.bind(option)(offset);
            if(!report) { _fun00008_ip = 411; continue _fun00007 }
 302:
            report = entity.Number;
            entity = report.isSafeInteger;
            entity = entity.bind(report)(offset);
            if(!entity) { _fun00008_ip = 411; continue _fun00007 }
 322:
            verify = _closure1_slot7;
            yankee = _closure1_slot0;
            romeon = _closure1_slot3;
            entity = 5;
            report = romeon[entity];
            report = yankee.bind(golfie)(report);
            report = report.t;
            kiloes = report.8Y5zsr;
            report = romeon[entity];
            report = yankee.bind(golfie)(report);
            report = report.t;
            backup = report.CyRLmJ;
            entity = romeon[entity];
            entity = yankee.bind(golfie)(entity);
            entity = entity.t;
            foxtra = entity.VD3Q+f;
            result = undefined;
            output = offset;
            sizing = michal;
            entity = result[verify](output, sizing, kiloes, backup, foxtra, romeon);
            _fun00008_ip = 423; continue _fun00007;
 411:
            report = {};
            option = false;
            report['success'] = option;
            entity = report;
 423:
            return entity;
 425:
            entity = {};
            report = true;
            entity['success'] = report;
            return entity;
 436:
            entity = {};
            report = _closure1_slot0;
            option = _closure1_slot3;
            tangon = 3;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.findChoiceNumberValue;
            michal = michal.choices;
            michal = tangon.bind(report)(michal, oscard);
            michal = zuuluu != michal;
            entity['success'] = michal;
            return entity;
 487:
            entity = {};
            michal = false;
            entity['success'] = michal;
            return entity;
        }
    };
    michal[verify] = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandOptionType;
    verify = option.NUMBER;
    option = function(argFoo, argBar, argBaz) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            report = _closure1_slot1;
            verify = _closure1_slot3;
            zuuluu = 4;
            zuuluu = verify[zuuluu];
            golfie = undefined;
            oscard = report.bind(golfie)(zuuluu);
            report = michal.type;
            option = _closure1_slot0;
            zuuluu = 2;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(golfie)(zuuluu);
            zuuluu = zuuluu.ApplicationCommandOptionType;
            zuuluu = zuuluu.NUMBER;
            report = report === zuuluu;
            zuuluu = 'option type must match validator type';
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            option = entity.type;
            zuuluu = null;
            report = 'text';
            oscard = null;
            if(!(report === option)) { _fun00010_ip = 112; continue _fun00009 }
 97:
            report = entity.text;
            entity = report.trim;
            oscard = entity.bind(report)();
 112:
            if(!(zuuluu != oscard)) { _fun00010_ip = 469; continue _fun00009 }
 119:
            report = oscard.length;
            entity = 0;
            if(!(entity !== report)) { _fun00010_ip = 469; continue _fun00009 }
 133:
            entity = michal.choices;
            if(!(zuuluu == entity)) { _fun00010_ip = 418; continue _fun00009 }
 146:
            entity = michal.autocomplete;
            if(!entity) { _fun00010_ip = 203; continue _fun00009 }
 155:
            report = _closure1_slot0;
            option = _closure1_slot3;
            entity = 3;
            entity = option[entity];
            verify = report.bind(golfie)(entity);
            option = verify.findAutocompleteChoiceNumberValue;
            report = michal.name;
            entity = argBaz;
            entity = option.bind(verify)(entity, report, oscard);
            if(!(zuuluu == entity)) { _fun00010_ip = 407; continue _fun00009 }
 203:
            entity = global;
            option = entity.Number;
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            report = 6;
            report = offset[report];
            offset = verify.bind(golfie)(report);
            verify = offset.normalizeNumericString;
            report = _closure1_slot4;
            report = report.locale;
            report = verify.bind(offset)(report, oscard);
            offset = option.bind(golfie)(report);
            report = entity.isNaN;
            report = report.bind(golfie)(offset);
            if(report) { _fun00010_ip = 393; continue _fun00009 }
 272:
            report = entity.Number;
            report = report.MAX_SAFE_INTEGER;
            if(!(!(offset > report))) { _fun00010_ip = 393; continue _fun00009 }
 288:
            entity = entity.Number;
            entity = entity.MIN_SAFE_INTEGER;
            if(!(!(offset < entity))) { _fun00010_ip = 393; continue _fun00009 }
 304:
            verify = _closure1_slot7;
            yankee = _closure1_slot0;
            romeon = _closure1_slot3;
            entity = 5;
            report = romeon[entity];
            report = yankee.bind(golfie)(report);
            report = report.t;
            kiloes = report.8Y5zsr;
            report = romeon[entity];
            report = yankee.bind(golfie)(report);
            report = report.t;
            backup = report.CyRLmJ;
            entity = romeon[entity];
            entity = yankee.bind(golfie)(entity);
            entity = entity.t;
            foxtra = entity.VD3Q+f;
            result = undefined;
            output = offset;
            sizing = michal;
            entity = result[verify](output, sizing, kiloes, backup, foxtra, romeon);
            _fun00010_ip = 405; continue _fun00009;
 393:
            report = {};
            option = false;
            report['success'] = option;
            entity = report;
 405:
            return entity;
 407:
            entity = {};
            report = true;
            entity['success'] = report;
            return entity;
 418:
            entity = {};
            report = _closure1_slot0;
            option = _closure1_slot3;
            tangon = 3;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.findChoiceNumberValue;
            michal = michal.choices;
            michal = tangon.bind(report)(michal, oscard);
            michal = zuuluu != michal;
            entity['success'] = michal;
            return entity;
 469:
            entity = {};
            michal = false;
            entity['success'] = michal;
            return entity;
        }
    };
    michal[verify] = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandOptionType;
    verify = option.USER;
    option = function(argFoo, argBar, argBaz, argCor) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = 'text';
            if(!(michal !== zuuluu)) { _fun00012_ip = 40; continue _fun00011 }
 16:
            michal = {};
            tangon = entity.type;
            zuuluu = 'userMention';
            zuuluu = zuuluu === tangon;
            michal['success'] = zuuluu;
            return michal;
 40:
            report = _closure1_slot0;
            tangon = _closure1_slot3;
            zuuluu = 7;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.isSnowflake;
            tangon = entity.text;
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00012_ip = 175; continue _fun00011 }
 84:
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            michal = 8;
            michal = report[michal];
            golfie = tangon.bind(zuuluu)(michal);
            oscard = golfie.resolveApplicationCommandOption;
            yankee = entity.text;
            tangon = {};
            entity = false;
            tangon['allowRoles'] = entity;
            offset = argCor;
            verify = argBaz;
            romeon = golfie;
            option = tangon;
            michal = romeon[oscard](yankee, offset, verify, option, golfie);
            entity = {};
            tangon = null;
            tangon = tangon == michal;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 158; continue _fun00011 }
 153:
            zuuluu = michal.type;
 158:
            michal = 'userMention';
            michal = michal === zuuluu;
            entity['success'] = michal;
            return entity;
 175:
            entity = {};
            michal = true;
            entity['success'] = michal;
            return entity;
        }
    };
    michal[verify] = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandOptionType;
    verify = option.CHANNEL;
    option = function(argFoo, argBar, argBaz, argCor) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = 'text';
            if(!(michal !== zuuluu)) { _fun00014_ip = 38; continue _fun00013 }
 16:
            michal = {};
            tangon = entity.type;
            zuuluu = 'channelMention';
            zuuluu = zuuluu === tangon;
            michal['success'] = zuuluu;
            return michal;
 38:
            report = _closure1_slot0;
            tangon = _closure1_slot3;
            zuuluu = 7;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.isSnowflake;
            tangon = entity.text;
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00014_ip = 159; continue _fun00013 }
 82:
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            michal = 8;
            michal = report[michal];
            oscard = tangon.bind(zuuluu)(michal);
            report = oscard.resolveApplicationCommandOption;
            tangon = entity.text;
            michal = argCor;
            entity = argBaz;
            michal = report.bind(oscard)(tangon, michal, entity);
            entity = {};
            tangon = null;
            tangon = tangon == michal;
            zuuluu = undefined;
            if(tangon) { _fun00014_ip = 144; continue _fun00013 }
 139:
            zuuluu = michal.type;
 144:
            michal = 'channelMention';
            michal = michal === zuuluu;
            entity['success'] = michal;
            return entity;
 159:
            entity = {};
            michal = true;
            entity['success'] = michal;
            return entity;
        }
    };
    michal[verify] = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandOptionType;
    verify = option.ROLE;
    option = function(argFoo, argBar, argBaz, argCor) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = 'text';
            if(!(michal !== zuuluu)) { _fun00016_ip = 39; continue _fun00015 }
 16:
            michal = {};
            tangon = _closure1_slot6;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)(entity);
            michal['success'] = zuuluu;
            return michal;
 39:
            report = _closure1_slot0;
            tangon = _closure1_slot3;
            zuuluu = 7;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            oscard = report.bind(zuuluu)(tangon);
            report = oscard.isSnowflake;
            tangon = entity.text;
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00016_ip = 172; continue _fun00015 }
 83:
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            michal = 8;
            michal = report[michal];
            golfie = tangon.bind(zuuluu)(michal);
            oscard = golfie.resolveApplicationCommandOption;
            yankee = entity.text;
            tangon = {};
            entity = false;
            tangon['allowUsers'] = entity;
            offset = argCor;
            verify = argBaz;
            romeon = golfie;
            option = tangon;
            michal = romeon[oscard](yankee, offset, verify, option, golfie);
            entity = {};
            tangon = null;
            tangon = tangon == michal;
            zuuluu = undefined;
            if(tangon) { _fun00016_ip = 157; continue _fun00015 }
 152:
            zuuluu = michal.type;
 157:
            michal = 'roleMention';
            michal = michal === zuuluu;
            entity['success'] = michal;
            return entity;
 172:
            entity = {};
            michal = true;
            entity['success'] = michal;
            return entity;
        }
    };
    michal[verify] = option;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.ApplicationCommandOptionType;
    verify = option.MENTIONABLE;
    option = function(argFoo, argBar, argBaz, argCor) {
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = 'text';
            if(!(michal !== zuuluu)) { _fun00018_ip = 57; continue _fun00017 }
 16:
            michal = {};
            tangon = entity.type;
            zuuluu = 'userMention';
            zuuluu = zuuluu === tangon;
            if(zuuluu) { _fun00018_ip = 50; continue _fun00017 }
 36:
            report = _closure1_slot6;
            tangon = undefined;
            zuuluu = report.bind(tangon)(entity);
 50:
            michal['success'] = zuuluu;
            return michal;
 57:
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            michal = 7;
            michal = report[michal];
            oscard = undefined;
            report = zuuluu.bind(oscard)(michal);
            zuuluu = report.isSnowflake;
            michal = entity.text;
            michal = zuuluu.bind(report)(michal);
            if(michal) { _fun00018_ip = 193; continue _fun00017 }
 101:
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            michal = 8;
            michal = report[michal];
            golfie = zuuluu.bind(oscard)(michal);
            report = golfie.resolveApplicationCommandOption;
            zuuluu = entity.text;
            michal = argCor;
            entity = argBaz;
            report = report.bind(golfie)(zuuluu, michal, entity);
            entity = {};
            michal = null;
            michal = michal != report;
            if(!michal) { _fun00018_ip = 186; continue _fun00017 }
 156:
            golfie = report.type;
            zuuluu = 'userMention';
            zuuluu = zuuluu === golfie;
            if(zuuluu) { _fun00018_ip = 183; continue _fun00017 }
 174:
            tangon = _closure1_slot6;
            zuuluu = tangon.bind(oscard)(report);
 183:
            michal = zuuluu;
 186:
            entity['success'] = michal;
            return entity;
 193:
            entity = {};
            michal = true;
            entity['success'] = michal;
            return entity;
        }
    };
    michal[verify] = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ApplicationCommandOptionType;
    option = tangon.ATTACHMENT;
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) {
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.type;
            entity = 'text';
            if(!(entity === michal)) { _fun00020_ip = 116; continue _fun00019 }
 16:
            oscard = _closure1_slot5;
            report = oscard.getUpload;
            michal = argBar;
            tangon = michal.name;
            golfie = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            golfie = golfie.bind(entity)(michal);
            michal = golfie.getCommandAttachmentDraftType;
            entity = argGra;
            michal = michal.bind(golfie)(entity);
            entity = argBaz;
            tangon = report.bind(oscard)(entity, tangon, michal);
            entity = {};
            michal = null;
            michal = michal != tangon;
            if(!michal) { _fun00020_ip = 109; continue _fun00019 }
 94:
            tangon = tangon.filename;
            zuuluu = zuuluu.text;
            michal = tangon === zuuluu;
 109:
            entity['success'] = michal;
            return entity;
 116:
            entity = {};
            michal = false;
            entity['success'] = michal;
            return entity;
        }
    };
    michal[option] = tangon;
    tangon = function(argFoo) { // Original name: isValidRoleMention
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.type;
            entity = 'roleMention';
            entity = entity === michal;
            if(entity) { _fun00022_ip = 55; continue _fun00021 }
 19:
            tangon = zuuluu.type;
            michal = 'textMention';
            michal = michal === tangon;
            if(!michal) { _fun00022_ip = 52; continue _fun00021 }
 37:
            tangon = zuuluu.text;
            zuuluu = '@everyone';
            michal = zuuluu === tangon;
 52:
            entity = michal;
 55:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/application_commands/ApplicationCommandValidators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();