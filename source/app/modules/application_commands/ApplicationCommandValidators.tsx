// app/modules/application_commands/ApplicationCommandValidators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: validateNumericOptionRange
        _fun101080: for(var _fun101080_ip = 0; ; ) switch(_fun101080_ip) {
 0:
            tango = argFoo;
            mike = argBar;
            entity = mike.minValue;
            zulu = null;
            if(!(zulu != entity)) { _fun101080_ip = 28; continue _fun101080 }
 18:
            entity = mike.minValue;
            if(!(!(tango < entity))) { _fun101080_ip = 48; continue _fun101080 }
 28:
            entity = mike.maxValue;
            if(!(zulu != entity)) { _fun101080_ip = 91; continue _fun101080 }
 38:
            entity = mike.maxValue;
            if(!(tango > entity)) { _fun101080_ip = 91; continue _fun101080 }
 48:
            entity = mike.maxValue;
            if(!(zulu != entity)) { _fun101080_ip = 71; continue _fun101080 }
 58:
            entity = mike.minValue;
            if(!(zulu == entity)) { _fun101080_ip = 264; continue _fun101080 }
 71:
            entity = mike.minValue;
            if(!(zulu == entity)) { _fun101080_ip = 183; continue _fun101080 }
 81:
            entity = mike.maxValue;
            if(!(zulu == entity)) { _fun101080_ip = 102; continue _fun101080 }
 91:
            entity = {};
            zulu = true;
            entity['success'] = zulu;
            return entity;
 102:
            entity = {};
            zulu = false;
            entity['success'] = zulu;
            report = _closure1_slot0;
            oscar = _closure1_slot3;
            tango = 5;
            tango = oscar[tango];
            options = undefined;
            tango = report.bind(options)(tango);
            oscar = tango.intl;
            report = oscar.formatToPlainString;
            tango = {};
            golf = _closure1_slot8;
            zulu = mike.maxValue;
            zulu = golf.bind(options)(zulu);
            tango['maximum'] = zulu;
            zulu = argGrault;
            zulu = report.bind(oscar)(zulu, tango);
            entity['error'] = zulu;
            return entity;
 183:
            entity = {};
            zulu = false;
            entity['success'] = zulu;
            report = _closure1_slot0;
            oscar = _closure1_slot3;
            tango = 5;
            tango = oscar[tango];
            options = undefined;
            tango = report.bind(options)(tango);
            oscar = tango.intl;
            report = oscar.formatToPlainString;
            tango = {};
            golf = _closure1_slot8;
            zulu = mike.minValue;
            zulu = golf.bind(options)(zulu);
            tango['minimum'] = zulu;
            zulu = argCorge;
            zulu = report.bind(oscar)(zulu, tango);
            entity['error'] = zulu;
            return entity;
 264:
            entity = {};
            zulu = false;
            entity['success'] = zulu;
            tango = _closure1_slot0;
            report = _closure1_slot3;
            zulu = 5;
            zulu = report[zulu];
            golf = undefined;
            zulu = tango.bind(golf)(zulu);
            report = zulu.intl;
            tango = report.formatToPlainString;
            zulu = {};
            oscar = _closure1_slot8;
            options = mike.minValue;
            options = oscar.bind(golf)(options);
            zulu['minimum'] = options;
            mike = mike.maxValue;
            mike = oscar.bind(golf)(mike);
            zulu['maximum'] = mike;
            mike = argBaz;
            mike = tango.bind(report)(mike, zulu);
            entity['error'] = mike;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: localeNumberFormat
        tango = argFoo;
        zulu = tango.toLocaleString;
        report = _closure1_slot0;
        mike = _closure1_slot3;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        entity = report.bind(entity)(mike);
        entity = entity.intl;
        mike = entity.currentLocale;
        entity = {};
        report = false;
        entity['useGrouping'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = {};
    tango = 2;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandOptionType;
    verify = options.SUB_COMMAND;
    options = function() {
        entity = {};
        mike = false;
        entity['success'] = mike;
        return entity;
    };
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandOptionType;
    verify = options.SUB_COMMAND_GROUP;
    options = function() {
        entity = {};
        mike = false;
        entity['success'] = mike;
        return entity;
    };
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandOptionType;
    verify = options.BOOLEAN;
    options = function(argFoo) {
        _fun101084: for(var _fun101084_ip = 0; ; ) switch(_fun101084_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = 'text';
            if(!(mike === zulu)) { _fun101084_ip = 82; continue _fun101084 }
 16:
            mike = entity.text;
            entity = mike.trim;
            tango = entity.bind(mike)();
            entity = {};
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            mike = zulu.toChoiceBooleanValue;
            zulu = mike.bind(zulu)(tango);
            mike = null;
            mike = mike != zulu;
            entity['success'] = mike;
            return entity;
 82:
            entity = {};
            mike = false;
            entity['success'] = mike;
            return entity;
        }
    };
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandOptionType;
    verify = options.STRING;
    options = function(argFoo, argBar, argBaz) {
        _fun101085: for(var _fun101085_ip = 0; ; ) switch(_fun101085_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            report = _closure1_slot1;
            verify = _closure1_slot3;
            zulu = 4;
            zulu = verify[zulu];
            golf = undefined;
            oscar = report.bind(golf)(zulu);
            report = mike.type;
            options = _closure1_slot0;
            zulu = 2;
            zulu = verify[zulu];
            zulu = options.bind(golf)(zulu);
            zulu = zulu.ApplicationCommandOptionType;
            zulu = zulu.STRING;
            report = report === zulu;
            zulu = 'option type must match validator type';
            zulu = oscar.bind(golf)(report, zulu);
            report = entity.type;
            zulu = 'emoji';
            if(!(zulu !== report)) { _fun101085_ip = 129; continue _fun101085 }
 93:
            zulu = 'text';
            if(!(zulu !== report)) { _fun101085_ip = 112; continue _fun101085 }
 101:
            zulu = {};
            report = false;
            zulu['success'] = report;
            return zulu;
 112:
            report = entity.text;
            zulu = report.trim;
            oscar = zulu.bind(report)();
            _fun101085_ip = 135; continue _fun101085;
 129:
            oscar = entity.surrogate;
 135:
            entity = mike.choices;
            zulu = null;
            if(!(zulu == entity)) { _fun101085_ip = 875; continue _fun101085 }
 150:
            entity = mike.autocomplete;
            if(!entity) { _fun101085_ip = 207; continue _fun101085 }
 159:
            report = _closure1_slot0;
            options = _closure1_slot3;
            entity = 3;
            entity = options[entity];
            verify = report.bind(golf)(entity);
            options = verify.findAutocompleteChoiceStringValue;
            report = mike.name;
            entity = argBaz;
            entity = options.bind(verify)(entity, report, oscar);
            if(!(zulu == entity)) { _fun101085_ip = 864; continue _fun101085 }
 207:
            entity = mike.minLength;
            if(!(golf === entity)) { _fun101085_ip = 230; continue _fun101085 }
 217:
            entity = mike.maxLength;
            if(!(golf !== entity)) { _fun101085_ip = 842; continue _fun101085 }
 230:
            if(!(zulu != oscar)) { _fun101085_ip = 853; continue _fun101085 }
 237:
            options = {};
            report = _closure1_slot0;
            entity = _closure1_slot3;
            yankee = 5;
            verify = entity[yankee];
            verify = report.bind(golf)(verify);
            verify = verify.t;
            verify = verify.e+9/SU;
            options['exactRangeErrorMessage'] = verify;
            verify = entity[yankee];
            verify = report.bind(golf)(verify);
            verify = verify.t;
            verify = verify.IE1sTk;
            options['rangeErrorMessage'] = verify;
            verify = entity[yankee];
            verify = report.bind(golf)(verify);
            verify = verify.t;
            verify = verify.rXAFQE;
            options['minErrorMessage'] = verify;
            entity = entity[yankee];
            entity = report.bind(golf)(entity);
            entity = entity.t;
            entity = entity.ycEPx8;
            options['maxErrorMessage'] = entity;
            entity = mike.minLength;
            if(!(golf !== entity)) { _fun101085_ip = 375; continue _fun101085 }
 360:
            report = oscar.length;
            entity = mike.minLength;
            if(!(!(report < entity))) { _fun101085_ip = 400; continue _fun101085 }
 375:
            entity = mike.maxLength;
            if(!(golf !== entity)) { _fun101085_ip = 482; continue _fun101085 }
 385:
            report = oscar.length;
            entity = mike.maxLength;
            if(!(report > entity)) { _fun101085_ip = 482; continue _fun101085 }
 400:
            entity = mike.maxLength;
            if(!(golf !== entity)) { _fun101085_ip = 439; continue _fun101085 }
 410:
            entity = mike.minLength;
            if(!(golf !== entity)) { _fun101085_ip = 439; continue _fun101085 }
 420:
            report = mike.minLength;
            entity = mike.maxLength;
            if(!(report !== entity)) { _fun101085_ip = 755; continue _fun101085 }
 439:
            entity = mike.maxLength;
            if(!(golf !== entity)) { _fun101085_ip = 462; continue _fun101085 }
 449:
            entity = mike.minLength;
            if(!(golf === entity)) { _fun101085_ip = 660; continue _fun101085 }
 462:
            entity = mike.minLength;
            if(!(golf === entity)) { _fun101085_ip = 578; continue _fun101085 }
 472:
            entity = mike.maxLength;
            if(!(golf === entity)) { _fun101085_ip = 496; continue _fun101085 }
 482:
            entity = {};
            report = true;
            entity['success'] = report;
            _fun101085_ip = 831; continue _fun101085;
 496:
            report = {};
            verify = false;
            report['success'] = verify;
            offset = _closure1_slot0;
            verify = _closure1_slot3;
            verify = verify[yankee];
            verify = offset.bind(golf)(verify);
            foxtrot = verify.intl;
            romeo = foxtrot.formatToPlainString;
            offset = options.maxErrorMessage;
            verify = {};
            kilo = _closure1_slot8;
            backup = mike.maxLength;
            backup = kilo.bind(golf)(backup);
            verify['maximum'] = backup;
            verify = romeo.bind(foxtrot)(offset, verify);
            report['error'] = verify;
            entity = report;
            _fun101085_ip = 831; continue _fun101085;
 578:
            report = {};
            verify = false;
            report['success'] = verify;
            offset = _closure1_slot0;
            verify = _closure1_slot3;
            verify = verify[yankee];
            verify = offset.bind(golf)(verify);
            foxtrot = verify.intl;
            romeo = foxtrot.formatToPlainString;
            offset = options.minErrorMessage;
            verify = {};
            kilo = _closure1_slot8;
            backup = mike.minLength;
            backup = kilo.bind(golf)(backup);
            verify['minimum'] = backup;
            verify = romeo.bind(foxtrot)(offset, verify);
            report['error'] = verify;
            entity = report;
            _fun101085_ip = 831; continue _fun101085;
 660:
            report = {};
            verify = false;
            report['success'] = verify;
            offset = _closure1_slot0;
            verify = _closure1_slot3;
            verify = verify[yankee];
            verify = offset.bind(golf)(verify);
            foxtrot = verify.intl;
            romeo = foxtrot.formatToPlainString;
            offset = options.rangeErrorMessage;
            verify = {};
            kilo = _closure1_slot8;
            backup = mike.minLength;
            backup = kilo.bind(golf)(backup);
            verify['minimum'] = backup;
            backup = mike.maxLength;
            backup = kilo.bind(golf)(backup);
            verify['maximum'] = backup;
            verify = romeo.bind(foxtrot)(offset, verify);
            report['error'] = verify;
            entity = report;
            _fun101085_ip = 831; continue _fun101085;
 755:
            report = {};
            verify = false;
            report['success'] = verify;
            offset = _closure1_slot0;
            verify = _closure1_slot3;
            verify = verify[yankee];
            verify = offset.bind(golf)(verify);
            yankee = verify.intl;
            offset = yankee.formatToPlainString;
            verify = options.exactRangeErrorMessage;
            options = {};
            foxtrot = _closure1_slot8;
            romeo = mike.minLength;
            romeo = foxtrot.bind(golf)(romeo);
            options['value'] = romeo;
            options = offset.bind(yankee)(verify, options);
            report['error'] = options;
            entity = report;
 831:
            report = entity.success;
            if(report) { _fun101085_ip = 842; continue _fun101085 }
 840:
            return entity;
 842:
            entity = {};
            report = true;
            entity['success'] = report;
            return entity;
 853:
            entity = {};
            report = false;
            entity['success'] = report;
            return entity;
 864:
            entity = {};
            report = true;
            entity['success'] = report;
            return entity;
 875:
            entity = {};
            report = _closure1_slot0;
            options = _closure1_slot3;
            tango = 3;
            tango = options[tango];
            report = report.bind(golf)(tango);
            tango = report.findChoiceStringValue;
            mike = mike.choices;
            mike = tango.bind(report)(mike, oscar);
            mike = zulu != mike;
            entity['success'] = mike;
            return entity;
        }
    };
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandOptionType;
    verify = options.INTEGER;
    options = function(argFoo, argBar, argBaz) {
        _fun101086: for(var _fun101086_ip = 0; ; ) switch(_fun101086_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            report = _closure1_slot1;
            verify = _closure1_slot3;
            zulu = 4;
            zulu = verify[zulu];
            golf = undefined;
            oscar = report.bind(golf)(zulu);
            report = mike.type;
            options = _closure1_slot0;
            zulu = 2;
            zulu = verify[zulu];
            zulu = options.bind(golf)(zulu);
            zulu = zulu.ApplicationCommandOptionType;
            zulu = zulu.INTEGER;
            report = report === zulu;
            zulu = 'option type must match validator type';
            zulu = oscar.bind(golf)(report, zulu);
            options = entity.type;
            zulu = null;
            report = 'text';
            oscar = null;
            if(!(report === options)) { _fun101086_ip = 112; continue _fun101086 }
 97:
            report = entity.text;
            entity = report.trim;
            oscar = entity.bind(report)();
 112:
            if(!(zulu != oscar)) { _fun101086_ip = 487; continue _fun101086 }
 119:
            report = oscar.length;
            entity = 0;
            if(!(entity !== report)) { _fun101086_ip = 487; continue _fun101086 }
 133:
            entity = mike.choices;
            if(!(zulu == entity)) { _fun101086_ip = 436; continue _fun101086 }
 146:
            entity = mike.autocomplete;
            if(!entity) { _fun101086_ip = 203; continue _fun101086 }
 155:
            report = _closure1_slot0;
            options = _closure1_slot3;
            entity = 3;
            entity = options[entity];
            verify = report.bind(golf)(entity);
            options = verify.findAutocompleteChoiceNumberValue;
            report = mike.name;
            entity = argBaz;
            entity = options.bind(verify)(entity, report, oscar);
            if(!(zulu == entity)) { _fun101086_ip = 425; continue _fun101086 }
 203:
            entity = global;
            options = entity.Number;
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            report = 6;
            report = offset[report];
            offset = verify.bind(golf)(report);
            verify = offset.normalizeNumericString;
            report = _closure1_slot4;
            report = report.locale;
            report = verify.bind(offset)(report, oscar);
            offset = options.bind(golf)(report);
            if(!(zulu != offset)) { _fun101086_ip = 411; continue _fun101086 }
 265:
            report = entity.isNaN;
            report = report.bind(golf)(offset);
            if(report) { _fun101086_ip = 411; continue _fun101086 }
 282:
            options = entity.Number;
            report = options.isInteger;
            report = report.bind(options)(offset);
            if(!report) { _fun101086_ip = 411; continue _fun101086 }
 302:
            report = entity.Number;
            entity = report.isSafeInteger;
            entity = entity.bind(report)(offset);
            if(!entity) { _fun101086_ip = 411; continue _fun101086 }
 322:
            verify = _closure1_slot7;
            yankee = _closure1_slot0;
            romeo = _closure1_slot3;
            entity = 5;
            report = romeo[entity];
            report = yankee.bind(golf)(report);
            report = report.t;
            kilo = report.8Y5zsr;
            report = romeo[entity];
            report = yankee.bind(golf)(report);
            report = report.t;
            backup = report.CyRLmJ;
            entity = romeo[entity];
            entity = yankee.bind(golf)(entity);
            entity = entity.t;
            foxtrot = entity.VD3Q+f;
            result = undefined;
            output = offset;
            sizing = mike;
            entity = result[verify](output, sizing, kilo, backup, foxtrot, romeo);
            _fun101086_ip = 423; continue _fun101086;
 411:
            report = {};
            options = false;
            report['success'] = options;
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
            options = _closure1_slot3;
            tango = 3;
            tango = options[tango];
            report = report.bind(golf)(tango);
            tango = report.findChoiceNumberValue;
            mike = mike.choices;
            mike = tango.bind(report)(mike, oscar);
            mike = zulu != mike;
            entity['success'] = mike;
            return entity;
 487:
            entity = {};
            mike = false;
            entity['success'] = mike;
            return entity;
        }
    };
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandOptionType;
    verify = options.NUMBER;
    options = function(argFoo, argBar, argBaz) {
        _fun101087: for(var _fun101087_ip = 0; ; ) switch(_fun101087_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            report = _closure1_slot1;
            verify = _closure1_slot3;
            zulu = 4;
            zulu = verify[zulu];
            golf = undefined;
            oscar = report.bind(golf)(zulu);
            report = mike.type;
            options = _closure1_slot0;
            zulu = 2;
            zulu = verify[zulu];
            zulu = options.bind(golf)(zulu);
            zulu = zulu.ApplicationCommandOptionType;
            zulu = zulu.NUMBER;
            report = report === zulu;
            zulu = 'option type must match validator type';
            zulu = oscar.bind(golf)(report, zulu);
            options = entity.type;
            zulu = null;
            report = 'text';
            oscar = null;
            if(!(report === options)) { _fun101087_ip = 112; continue _fun101087 }
 97:
            report = entity.text;
            entity = report.trim;
            oscar = entity.bind(report)();
 112:
            if(!(zulu != oscar)) { _fun101087_ip = 469; continue _fun101087 }
 119:
            report = oscar.length;
            entity = 0;
            if(!(entity !== report)) { _fun101087_ip = 469; continue _fun101087 }
 133:
            entity = mike.choices;
            if(!(zulu == entity)) { _fun101087_ip = 418; continue _fun101087 }
 146:
            entity = mike.autocomplete;
            if(!entity) { _fun101087_ip = 203; continue _fun101087 }
 155:
            report = _closure1_slot0;
            options = _closure1_slot3;
            entity = 3;
            entity = options[entity];
            verify = report.bind(golf)(entity);
            options = verify.findAutocompleteChoiceNumberValue;
            report = mike.name;
            entity = argBaz;
            entity = options.bind(verify)(entity, report, oscar);
            if(!(zulu == entity)) { _fun101087_ip = 407; continue _fun101087 }
 203:
            entity = global;
            options = entity.Number;
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            report = 6;
            report = offset[report];
            offset = verify.bind(golf)(report);
            verify = offset.normalizeNumericString;
            report = _closure1_slot4;
            report = report.locale;
            report = verify.bind(offset)(report, oscar);
            offset = options.bind(golf)(report);
            report = entity.isNaN;
            report = report.bind(golf)(offset);
            if(report) { _fun101087_ip = 393; continue _fun101087 }
 272:
            report = entity.Number;
            report = report.MAX_SAFE_INTEGER;
            if(!(!(offset > report))) { _fun101087_ip = 393; continue _fun101087 }
 288:
            entity = entity.Number;
            entity = entity.MIN_SAFE_INTEGER;
            if(!(!(offset < entity))) { _fun101087_ip = 393; continue _fun101087 }
 304:
            verify = _closure1_slot7;
            yankee = _closure1_slot0;
            romeo = _closure1_slot3;
            entity = 5;
            report = romeo[entity];
            report = yankee.bind(golf)(report);
            report = report.t;
            kilo = report.8Y5zsr;
            report = romeo[entity];
            report = yankee.bind(golf)(report);
            report = report.t;
            backup = report.CyRLmJ;
            entity = romeo[entity];
            entity = yankee.bind(golf)(entity);
            entity = entity.t;
            foxtrot = entity.VD3Q+f;
            result = undefined;
            output = offset;
            sizing = mike;
            entity = result[verify](output, sizing, kilo, backup, foxtrot, romeo);
            _fun101087_ip = 405; continue _fun101087;
 393:
            report = {};
            options = false;
            report['success'] = options;
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
            options = _closure1_slot3;
            tango = 3;
            tango = options[tango];
            report = report.bind(golf)(tango);
            tango = report.findChoiceNumberValue;
            mike = mike.choices;
            mike = tango.bind(report)(mike, oscar);
            mike = zulu != mike;
            entity['success'] = mike;
            return entity;
 469:
            entity = {};
            mike = false;
            entity['success'] = mike;
            return entity;
        }
    };
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandOptionType;
    verify = options.USER;
    options = function(argFoo, argBar, argBaz, argCorge) {
        _fun101088: for(var _fun101088_ip = 0; ; ) switch(_fun101088_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = 'text';
            if(!(mike !== zulu)) { _fun101088_ip = 40; continue _fun101088 }
 16:
            mike = {};
            tango = entity.type;
            zulu = 'userMention';
            zulu = zulu === tango;
            mike['success'] = zulu;
            return mike;
 40:
            report = _closure1_slot0;
            tango = _closure1_slot3;
            zulu = 7;
            tango = tango[zulu];
            zulu = undefined;
            oscar = report.bind(zulu)(tango);
            report = oscar.isSnowflake;
            tango = entity.text;
            tango = report.bind(oscar)(tango);
            if(tango) { _fun101088_ip = 175; continue _fun101088 }
 84:
            tango = _closure1_slot0;
            report = _closure1_slot3;
            mike = 8;
            mike = report[mike];
            golf = tango.bind(zulu)(mike);
            oscar = golf.resolveApplicationCommandOption;
            yankee = entity.text;
            tango = {};
            entity = false;
            tango['allowRoles'] = entity;
            offset = argCorge;
            verify = argBaz;
            romeo = golf;
            options = tango;
            mike = romeo[oscar](yankee, offset, verify, options, golf);
            entity = {};
            tango = null;
            tango = tango == mike;
            zulu = undefined;
            if(tango) { _fun101088_ip = 158; continue _fun101088 }
 153:
            zulu = mike.type;
 158:
            mike = 'userMention';
            mike = mike === zulu;
            entity['success'] = mike;
            return entity;
 175:
            entity = {};
            mike = true;
            entity['success'] = mike;
            return entity;
        }
    };
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandOptionType;
    verify = options.CHANNEL;
    options = function(argFoo, argBar, argBaz, argCorge) {
        _fun101089: for(var _fun101089_ip = 0; ; ) switch(_fun101089_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = 'text';
            if(!(mike !== zulu)) { _fun101089_ip = 38; continue _fun101089 }
 16:
            mike = {};
            tango = entity.type;
            zulu = 'channelMention';
            zulu = zulu === tango;
            mike['success'] = zulu;
            return mike;
 38:
            report = _closure1_slot0;
            tango = _closure1_slot3;
            zulu = 7;
            tango = tango[zulu];
            zulu = undefined;
            oscar = report.bind(zulu)(tango);
            report = oscar.isSnowflake;
            tango = entity.text;
            tango = report.bind(oscar)(tango);
            if(tango) { _fun101089_ip = 159; continue _fun101089 }
 82:
            tango = _closure1_slot0;
            report = _closure1_slot3;
            mike = 8;
            mike = report[mike];
            oscar = tango.bind(zulu)(mike);
            report = oscar.resolveApplicationCommandOption;
            tango = entity.text;
            mike = argCorge;
            entity = argBaz;
            mike = report.bind(oscar)(tango, mike, entity);
            entity = {};
            tango = null;
            tango = tango == mike;
            zulu = undefined;
            if(tango) { _fun101089_ip = 144; continue _fun101089 }
 139:
            zulu = mike.type;
 144:
            mike = 'channelMention';
            mike = mike === zulu;
            entity['success'] = mike;
            return entity;
 159:
            entity = {};
            mike = true;
            entity['success'] = mike;
            return entity;
        }
    };
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandOptionType;
    verify = options.ROLE;
    options = function(argFoo, argBar, argBaz, argCorge) {
        _fun101090: for(var _fun101090_ip = 0; ; ) switch(_fun101090_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = 'text';
            if(!(mike !== zulu)) { _fun101090_ip = 39; continue _fun101090 }
 16:
            mike = {};
            tango = _closure1_slot6;
            zulu = undefined;
            zulu = tango.bind(zulu)(entity);
            mike['success'] = zulu;
            return mike;
 39:
            report = _closure1_slot0;
            tango = _closure1_slot3;
            zulu = 7;
            tango = tango[zulu];
            zulu = undefined;
            oscar = report.bind(zulu)(tango);
            report = oscar.isSnowflake;
            tango = entity.text;
            tango = report.bind(oscar)(tango);
            if(tango) { _fun101090_ip = 172; continue _fun101090 }
 83:
            tango = _closure1_slot0;
            report = _closure1_slot3;
            mike = 8;
            mike = report[mike];
            golf = tango.bind(zulu)(mike);
            oscar = golf.resolveApplicationCommandOption;
            yankee = entity.text;
            tango = {};
            entity = false;
            tango['allowUsers'] = entity;
            offset = argCorge;
            verify = argBaz;
            romeo = golf;
            options = tango;
            mike = romeo[oscar](yankee, offset, verify, options, golf);
            entity = {};
            tango = null;
            tango = tango == mike;
            zulu = undefined;
            if(tango) { _fun101090_ip = 157; continue _fun101090 }
 152:
            zulu = mike.type;
 157:
            mike = 'roleMention';
            mike = mike === zulu;
            entity['success'] = mike;
            return entity;
 172:
            entity = {};
            mike = true;
            entity['success'] = mike;
            return entity;
        }
    };
    mike[verify] = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.ApplicationCommandOptionType;
    verify = options.MENTIONABLE;
    options = function(argFoo, argBar, argBaz, argCorge) {
        _fun101091: for(var _fun101091_ip = 0; ; ) switch(_fun101091_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = 'text';
            if(!(mike !== zulu)) { _fun101091_ip = 57; continue _fun101091 }
 16:
            mike = {};
            tango = entity.type;
            zulu = 'userMention';
            zulu = zulu === tango;
            if(zulu) { _fun101091_ip = 50; continue _fun101091 }
 36:
            report = _closure1_slot6;
            tango = undefined;
            zulu = report.bind(tango)(entity);
 50:
            mike['success'] = zulu;
            return mike;
 57:
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            mike = 7;
            mike = report[mike];
            oscar = undefined;
            report = zulu.bind(oscar)(mike);
            zulu = report.isSnowflake;
            mike = entity.text;
            mike = zulu.bind(report)(mike);
            if(mike) { _fun101091_ip = 193; continue _fun101091 }
 101:
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            mike = 8;
            mike = report[mike];
            golf = zulu.bind(oscar)(mike);
            report = golf.resolveApplicationCommandOption;
            zulu = entity.text;
            mike = argCorge;
            entity = argBaz;
            report = report.bind(golf)(zulu, mike, entity);
            entity = {};
            mike = null;
            mike = mike != report;
            if(!mike) { _fun101091_ip = 186; continue _fun101091 }
 156:
            golf = report.type;
            zulu = 'userMention';
            zulu = zulu === golf;
            if(zulu) { _fun101091_ip = 183; continue _fun101091 }
 174:
            tango = _closure1_slot6;
            zulu = tango.bind(oscar)(report);
 183:
            mike = zulu;
 186:
            entity['success'] = mike;
            return entity;
 193:
            entity = {};
            mike = true;
            entity['success'] = mike;
            return entity;
        }
    };
    mike[verify] = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ApplicationCommandOptionType;
    options = tango.ATTACHMENT;
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault) {
        _fun101092: for(var _fun101092_ip = 0; ; ) switch(_fun101092_ip) {
 0:
            zulu = argFoo;
            mike = zulu.type;
            entity = 'text';
            if(!(entity === mike)) { _fun101092_ip = 116; continue _fun101092 }
 16:
            oscar = _closure1_slot5;
            report = oscar.getUpload;
            mike = argBar;
            tango = mike.name;
            golf = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            golf = golf.bind(entity)(mike);
            mike = golf.getCommandAttachmentDraftType;
            entity = argGrault;
            mike = mike.bind(golf)(entity);
            entity = argBaz;
            tango = report.bind(oscar)(entity, tango, mike);
            entity = {};
            mike = null;
            mike = mike != tango;
            if(!mike) { _fun101092_ip = 109; continue _fun101092 }
 94:
            tango = tango.filename;
            zulu = zulu.text;
            mike = tango === zulu;
 109:
            entity['success'] = mike;
            return entity;
 116:
            entity = {};
            mike = false;
            entity['success'] = mike;
            return entity;
        }
    };
    mike[options] = tango;
    tango = function(argFoo) { // Original name: isValidRoleMention
        _fun101093: for(var _fun101093_ip = 0; ; ) switch(_fun101093_ip) {
 0:
            zulu = argFoo;
            mike = zulu.type;
            entity = 'roleMention';
            entity = entity === mike;
            if(entity) { _fun101093_ip = 55; continue _fun101093 }
 19:
            tango = zulu.type;
            mike = 'textMention';
            mike = mike === tango;
            if(!mike) { _fun101093_ip = 52; continue _fun101093 }
 37:
            tango = zulu.text;
            zulu = '@everyone';
            mike = zulu === tango;
 52:
            entity = mike;
 55:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/ApplicationCommandValidators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();